# Plytix Connector

> Synchronisiert Produkte aus Plytix-Channels nach Shopware 6.

## Übersicht

Der Plytix Connector holt Ihre Produktdaten aus Plytix PIM in Ihren Shopware-Shop. Grundlage ist ein Plytix-Channel im Format NDJSON: Plytix stellt die Produkte als Feed unter einer URL bereit, und das Plugin liest diesen Feed und legt daraus Produkte, Varianten, Übersetzungen, Kategorien, Hersteller, Eigenschaften, Bilder und Cross-Selling an.

Die Synchronisation läuft nur in eine Richtung. Plytix bleibt die Quelle, Shopware übernimmt. Änderungen, die Sie in Shopware an importierten Daten machen, schreibt das Plugin nicht zurück nach Plytix.

Sie können mehrere Plytix-Channels anbinden, jeden mit eigener Feldzuordnung, eigenen Verkaufskanälen und eigenen Standardwerten. Jede Synchronisation wird als Lauf protokolliert, mit Zählern und einer filterbaren Liste der Probleme, die dabei aufgetreten sind.

## Hauptfunktionen

- Import von Produkten mit Varianten, auch aus dreistufigen Plytix-Hierarchien
- Freie Feldzuordnung pro Channel, weil die Feldnamen in Plytix frei vergeben werden
- Übersetzungen über eigene Sprach-Attribute je Locale
- Bilder werden im Hintergrund geladen, jede URL nur einmal
- Start per Klick, nach Zeitplan, per Plytix-Webhook oder über die Kommandozeile
- Unveränderte Feeds und unveränderte Produkte werden übersprungen
- Optionales Deaktivieren von Produkten, die nicht mehr im Feed sind, mit Sicherheitsgrenze
- Protokoll jedes Laufs mit Zählern, Problemcodes und Meldungen

## Voraussetzungen

- Shopware 6.5.7 bis 6.7. Ältere 6.5-Versionen werden nicht unterstützt.
- Ein Plytix-Konto mit dem Add-on „Channels“ und ein Channel im Format NDJSON. CSV-, XLSX- und XML-Channels kann das Plugin nicht lesen.
- Laufende Hintergrund-Worker in Shopware (siehe unten). Ohne sie findet kein Import statt.
- Bei mehreren Servern: ein gemeinsames privates Dateisystem (siehe unten).
- Für den Webhook: Plytix muss Ihren Shop über das Internet erreichen können.

### Hintergrund-Worker sind Pflicht

Ein Lauf, der in der Administration, per Webhook oder per Zeitplan gestartet wird, landet zuerst in der Nachrichten-Warteschlange von Shopware. Abgearbeitet wird er von Workern. Das Plugin nutzt zwei Warteschlangen: `async` für den Import und `low_priority` für das Herunterladen der Bilder.

Richten Sie auf dem Server dauerhaft laufende Worker ein, zum Beispiel über systemd oder Supervisor:

```bash
bin/console messenger:consume async low_priority --time-limit=3600
```

Geben Sie den Workern ein `--time-limit` oder ein `--memory-limit` mit, wie Shopware es empfiehlt. Der Speicherbedarf eines Workers wächst bei großen Importen langsam an, und so startet der Prozessmanager ihn regelmäßig frisch.

Dazu kommt der Runner für geplante Aufgaben. Er prüft alle fünf Minuten, ob ein Channel wieder abgerufen werden muss, räumt hängengebliebene Läufe auf und löscht alte Läufe:

```bash
bin/console scheduled-task:run
```

Was ohne diese Prozesse passiert:

- Ohne Worker bleibt ein Lauf im Status **Wartend** stehen. Solange er wartet, lässt sich für diesen Channel kein neuer Lauf starten. Erst nach 60 Minuten ohne Fortschritt wird er abgebrochen, und auch das erledigt nur der Runner zusammen mit einem Worker.
- Ohne einen Worker für `low_priority` werden Bilder nie heruntergeladen. Das gilt auch für Läufe über die Kommandozeile.
- Ohne den Runner für geplante Aufgaben gibt es keine zeitgesteuerten Abrufe, hängengebliebene Läufe werden nicht abgebrochen, und alte Läufe werden nicht gelöscht.

Nach einem Update des Plugins müssen die Worker neu starten. Ein Worker, der noch mit dem alten Stand läuft, lässt jeden Lauf scheitern. Beenden Sie die Worker mit `bin/console messenger:stop-workers`, Ihr Prozessmanager startet sie dann neu. Falls der Cache beim Update nicht geleert wurde, leeren Sie ihn vorher.

Wenn Ihr Shop bei einem Hoster läuft, geben Sie diesen Abschnitt am besten direkt an Ihren Hoster oder Ihre Agentur weiter.

### Mehrere Server

Während eines Laufs legt das Plugin den Feed in Paketen im privaten Dateisystem von Shopware ab. Jedes Paket kann von einem Worker auf einem anderen Server verarbeitet werden. Läuft Ihr Shop auf mehreren Servern, muss das private Dateisystem deshalb auf gemeinsamem Speicher liegen (zum Beispiel S3), so wie Shopware es für Cluster-Setups ohnehin vorsieht.

Außerdem braucht es einen gemeinsamen Lock-Speicher (`LOCK_DSN`). Das Plugin sperrt damit das Anlegen von Kategorien, Herstellern und Eigenschaften sowie das Herunterladen eines Bildes, damit zwei Worker nicht dasselbe gleichzeitig tun. Der Standard `flock` wirkt nur auf einem Server.

Auf einem einzelnen Server ist beides nicht nötig.

## Kompatibilität

Eine Plugin-Version deckt alle unterstützten Shopware-Versionen ab:

| Shopware-Version | Status       |
| ---------------- | ------------ |
| 6.5.7 bis 6.5.x  | Unterstützt  |
| 6.6.x            | Unterstützt  |
| 6.7.x            | Unterstützt  |

## Schnellstart

1. Richten Sie in Plytix einen NDJSON-Channel ein und kopieren Sie die Feed-URL ([Anleitung](how_to.md#anleitung-plytix-channel-einrichten)).
2. Installieren und aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**.
3. Stellen Sie sicher, dass Worker und der Runner für geplante Aufgaben laufen.
4. Öffnen Sie **Kataloge → Plytix Connector** und klicken Sie auf **Channel anlegen**.
5. Tragen Sie Name, Feed-URL, Steuersatz und die Verkaufskanäle mit ihren Einstiegskategorien ein, prüfen Sie die **Feldzuordnung** und speichern Sie.
6. Klicken Sie auf **Jetzt synchronisieren** und prüfen Sie den Lauf. Er importiert die Produkte und sammelt die Bezeichnungen Ihres Feeds.
7. Klicken Sie in der Karte **Feldzuordnung** auf **Feed-Bezeichnungen zuordnen**, ordnen Sie Variantenoptionen und Eigenschaften zu und klicken Sie auf **Speichern und synchronisieren**.
8. Passt das Ergebnis, schalten Sie **Aktiv** ein, tragen ein **Abrufintervall (Minuten)** ein und speichern.

## Dokumentationsinhalt

- [Channel-Einstellungen](configuration/settings.md): alle Felder und Einstellungen eines Channels mit ihren Standardwerten
- [Nutzungsanleitung](usage/usage.md): Synchronisation starten, Läufe, Verhalten und Grenzen, Fehlerbehebung
- [Feldzuordnung und Varianten](usage/mapping.md): wie Feed-Felder auf Shopware-Daten treffen
- [Läufe und Problemcodes](usage/issues.md): alle Status und alle Problemcodes mit Handlungshinweisen
- [Anleitungen](how_to.md): Plytix-Channel, Shopware-Channel, Webhook und erster Import Schritt für Schritt
- [Änderungsprotokoll](changelog.md): Versionshistorie
