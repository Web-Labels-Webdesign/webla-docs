# Nutzungsanleitung

Diese Anleitung beschreibt, wie Sie mit dem Plytix Connector arbeiten, was bei einer Synchronisation passiert und wo die Grenzen liegen.

---

## Inhaltsverzeichnis

- [Das Modul in der Administration](#das-modul-in-der-administration)
- [Was bei einer Synchronisation passiert](#was-bei-einer-synchronisation-passiert)
- [Eine Synchronisation starten](#eine-synchronisation-starten)
- [Wann ein Lauf übersprungen wird](#wann-ein-lauf-übersprungen-wird)
- [Verhalten und Grenzen](#verhalten-und-grenzen)
- [Fehlerbehebung](#fehlerbehebung)
- [FAQ](#faq)

Ausführlich in eigenen Seiten:

- [Feldzuordnung und Varianten](./mapping.md)
- [Läufe und Problemcodes](./issues.md)

---

## Das Modul in der Administration

**Ort**: Kataloge → Plytix Connector

Die Startseite **Plytix-Channels** listet alle Channels mit Status und dem letzten Lauf. Oben rechts finden Sie **Alle Läufe** (die Läufe aller Channels) und **Channel anlegen**.

Die Detailseite eines Channels enthält die Karten **Channel**, **Import-Einstellungen**, **Feldzuordnung**, **Webhook** und **Läufe**. Oben rechts stehen **Jetzt synchronisieren** und **Speichern**. Alle Felder sind unter [Channel-Einstellungen](../configuration/settings.md) erklärt. Variantenoptionen und Eigenschaften ordnen Sie auf einer eigenen Seite zu, die **Feed-Bezeichnungen zuordnen** in der Karte **Feldzuordnung** öffnet, siehe [Variantenoptionen und Eigenschaften](./mapping.md#variantenoptionen-und-eigenschaften).

In der Liste **Läufe** führt **Probleme anzeigen** zur Detailseite eines Laufs mit Übersicht, Zählern und der Problemliste. Der Zurück-Pfeil führt zur Seite, von der Sie kamen: zum Channel, zur Zuordnungsseite oder zu **Alle Läufe**.

Verlassen Sie die Channel- oder Zuordnungsseite mit ungespeicherten Änderungen oder starten Sie eine Synchronisation, fragt das Plugin, ob es sie vorher speichern soll.

---

## Was bei einer Synchronisation passiert

1. **Abrufen**: Das Plugin lädt den Feed von der Feed-URL herunter.
2. **Prüfen**: Es liest jede Zeile, prüft Pflichtangaben und vergleicht den Feed mit dem zuletzt importierten. Ist er unverändert, endet der Lauf hier.
3. **Struktur auflösen**: Es ermittelt, welche Produkte Hauptprodukte, Varianten und Einzelprodukte sind.
4. **Importieren**: Der Feed wird in Pakete aufgeteilt, ein Hauptprodukt immer mit allen Varianten. Jedes Paket verarbeitet ein Worker. Produkte, die sich seit dem letzten Lauf nicht geändert haben, werden übersprungen und zählen als „Unverändert“.
5. **Bilder**: Fehlende Bilder werden in einer eigenen Warteschlange heruntergeladen. Das kann nach dem Ende des Laufs noch weitergehen.
6. **Abschluss**: Sind alle Pakete fertig, schreibt das Plugin das Cross-Selling und deaktiviert, falls eingeschaltet, Produkte, die nicht mehr im Feed stehen.

Ein vorhandenes Shopware-Produkt mit derselben Produktnummer wird übernommen und nicht doppelt angelegt. So können Sie einen bestehenden Katalog an Plytix anbinden. Ab dann ist das Produkt mit dem Channel verknüpft.

---

## Eine Synchronisation starten

Es gibt vier Wege. Pro Channel kann immer nur ein Lauf gleichzeitig wartend oder laufend sein.

### Jetzt synchronisieren

Auf der Channel-Seite oben rechts. Der Lauf wird in die Warteschlange gestellt, die Liste **Läufe** zeigt ihn sofort. Läuft schon ein Lauf, erscheint der Hinweis „Für diesen Channel wartet oder läuft bereits eine Synchronisation.“ Der Klick wird dann nicht gemerkt, starten Sie den Lauf später erneut.

Der Button ist erst nach dem ersten Speichern verfügbar und funktioniert auch bei inaktiven Channels. Sie brauchen dafür das Recht „Bearbeiten“ für den Plytix Connector.

### Zeitplan

Tragen Sie ein **Abrufintervall (Minuten)** ein und schalten Sie den Channel **Aktiv**. Alle fünf Minuten prüft Shopware, ob der letzte Lauf lange genug her ist, und startet dann einen neuen. Details unter [Abrufintervall](../configuration/settings.md#abrufintervall-minuten).

### Webhook

Plytix ruft nach jeder Verarbeitung des Channels eine URL Ihres Shops auf, und der Lauf startet sofort. Die Einrichtung steht in den [Anleitungen](../how_to.md#anleitung-webhook-einrichten).

Kommt der Aufruf, während für den Channel schon ein Lauf wartet oder läuft, meldet der Shop an Plytix zwar „läuft bereits“ (HTTP 409), merkt sich den Aufruf aber. Sobald der aktuelle Lauf endet, egal mit welchem Ergebnis, startet ein weiterer Lauf mit dem Auslöser **Webhook**. Mehrere Aufrufe während eines Laufs ergeben einen Folgelauf. Ist der Channel inzwischen inaktiv, entfällt er. Ein Abrufintervall als Absicherung ist trotzdem sinnvoll, für den Fall, dass ein Aufruf Ihren Shop gar nicht erreicht. Läufe aus Webhook und Zeitplan zählen gemeinsam: Ein Lauf per Webhook setzt die Wartezeit des Zeitplans zurück.

### Kommandozeile

Für Agenturen und Hoster gibt es einen Konsolenbefehl:

```bash
bin/console plytix:channel:sync <channel>
```

`<channel>` ist die ID oder der Name des Channels. Tragen mehrere Channels denselben Namen, verlangt der Befehl die ID.

| Option    | Wirkung |
| --------- | ------- |
| `--force` | Importiert auch dann, wenn der Feed unverändert ist. |
| `--async` | Stellt den Lauf nur in die Warteschlange, wie die anderen Wege. Ohne die Option läuft der gesamte Import im Konsolenprozess. |

Ohne `--async` zeigt der Befehl am Ende Status, Zähler und bis zu 50 Probleme. Er endet mit einem Fehlercode, wenn der Lauf fehlgeschlagen ist oder schon ein Lauf aktiv war. Das eignet sich für Tests und Cronjobs. Bilder lädt aber auch in diesem Fall ein Worker für `low_priority` herunter.

In der Administration erscheinen diese Läufe mit dem Auslöser **Kommandozeile**.

---

## Wann ein Lauf übersprungen wird

Ein Lauf endet als **Übersprungen, Feed unverändert**, wenn alle diese Bedingungen erfüllt sind:

- Der Feed ist byte-gleich mit dem Feed des letzten Laufs, der bis zum Import gekommen ist.
- Dieser letzte Lauf ist abgeschlossen, mit oder ohne Fehler.
- Der Channel wurde seit dem Start dieses Laufs nicht geändert.
- Der letzte Lauf hatte keines der Probleme `PRODUCT_WRITE_FAILED`, `RUN_BATCH_FAILED` oder `MEDIA_DOWNLOAD_FAILED`. Diese holt der nächste Lauf automatisch nach.
- Der letzte Lauf stammt von derselben Plugin-Version, was das Datenformat betrifft. Nach manchen Updates wird deshalb einmal alles neu importiert.

Nicht berücksichtigt wird, was Sie in Shopware geändert haben. Haben Sie importierte Produkte in Shopware gelöscht, legt ein Lauf über die Kommandozeile mit `--force` sie wieder an. **Jetzt synchronisieren** hat keine solche Option.

Für von Hand bearbeitete Produkte hilft `--force` nicht. Auch dann prüft das Plugin jedes Produkt gegen seinen letzten Import-Stand, und ein Produkt, dessen Daten in Plytix gleich geblieben sind, gilt als unverändert. Neu geschrieben wird es erst, wenn es sich in Plytix ändert oder Sie Verkaufskanäle, Steuersatz, Währung, Import-Einstellungen oder Feldzuordnung ändern und speichern. Dann schreibt der nächste Lauf alle Produkte des Channels neu.

---

## Verhalten und Grenzen

### Lagerbestand nur beim Anlegen

Neue Produkte bekommen den **Lagerbestand für neue Produkte**. Danach schreibt das Plugin den Bestand nie wieder. Plytix-Daten enthalten keinen Lagerbestand, der gehört in Ihre Warenwirtschaft.

### Preise werden komplett ersetzt

Wird ein Produkt geschrieben, ersetzt das Plugin seinen Preis vollständig. Preise in weiteren Währungen, die Sie in Shopware ergänzt haben, sind danach weg.

### Plytix gewinnt bei Änderungen

Das Plugin schreibt ein Produkt nur, wenn sich seine Daten im Feed geändert haben oder Sie Verkaufskanäle, Steuersatz, Währung, Import-Einstellungen oder Feldzuordnung des Channels geändert haben. Dann gilt für dieses Produkt der Stand aus Plytix:

- Texte, Preis, EAN, Status, maximale Bestellmenge und die zugeordneten Produktfelder werden überschrieben.
- Kategorien, Eigenschaften, Tags und Bilder, die Sie in Shopware zusätzlich zugeordnet haben, werden entfernt, sofern das jeweilige Feld in der Feldzuordnung belegt ist.
- Selbst gesetzte Sichtbarkeiten in Verkaufskanälen, Lagerbestand und selbst angelegte Cross-Sellings bleiben erhalten. Sichtbarkeiten, die das Plugin angelegt hat, werden entfernt, wenn Sie den Verkaufskanal aus dem Channel entfernen.

Solange sich ein Produkt in Plytix nicht ändert, bleiben Ihre Änderungen in Shopware bestehen. Verlassen Sie sich nicht darauf: Die nächste Änderung in Plytix oder an der Feldzuordnung und den Import-Einstellungen überschreibt sie. Was Sie dauerhaft in Shopware pflegen wollen, nehmen Sie aus der [Feldzuordnung](./mapping.md#regeln) heraus.

### Große Kataloge

Ein Lauf ist erst fertig, wenn auch der Abschluss mit dem Cross-Selling durch ist. Dieser Schritt wartet, bis Shopware die Indexierung der geschriebenen Produkte abgearbeitet hat, die in derselben Warteschlange steht. Bei vielen Produkten kann das einige Minuten dauern. Diese Wartezeit zählt für den automatischen Abbruch nach 60 Minuten ohne Fortschritt mit.

Zur Größenordnung: In unserem Lasttest mit 20.000 Datensätzen (knapp 19.000 Shopware-Produkte, zwei Worker) dauerte ein Import in einen leeren Shop etwa 12 Minuten, und die Bilder waren etwa 27 Minuten nach dem Ende des Laufs vollständig. Ein Lauf mit unverändertem Feed war nach wenigen Sekunden übersprungen. Auf Ihrem Server können die Zeiten deutlich abweichen, vor allem abhängig von der Datenbank und der Zahl der Worker.

### Entfernen heißt deaktivieren

Mit der Option **Feed enthält alle Produkte** werden fehlende Produkte deaktiviert, niemals gelöscht. Ohne die Option bleiben Produkte, die aus dem Feed verschwinden, einfach unverändert im Shop.

### Was das Plugin nicht kann

- Daten nach Plytix zurückschreiben
- CSV-, XLSX- oder XML-Channels lesen
- Plytix-Bundles importieren, weil Shopware dafür kein passendes Gegenstück hat
- Lagerbestände aktualisieren
- Bild-Alternativtexte importieren, weil der Feed keine enthält

---

## Fehlerbehebung

### Läufe bleiben auf „Wartend“

**Ursache**: Es laufen keine Worker für die Warteschlangen.

**Lösung**: Starten Sie `bin/console messenger:consume async low_priority` als dauerhaften Prozess und `bin/console scheduled-task:run` für den Zeitplan. Der hängende Lauf wird nach 60 Minuten ohne Fortschritt automatisch abgebrochen, danach lässt sich ein neuer starten. Siehe [Voraussetzungen](../index.md#hintergrund-worker-sind-pflicht).

### Produkte sind da, aber ohne Bilder

**Ursache**: Bilder lädt ein Worker für `low_priority`. Läuft keiner, oder nur einer für `async`, kommen keine Bilder an.

**Lösung**: Prüfen Sie, ob der Worker beide Warteschlangen verarbeitet. Bei vielen neuen Bildern kann es auch einfach dauern. Suchen Sie im Lauf nach `MEDIA_DOWNLOAD_FAILED`, um einzelne kaputte Bild-URLs zu finden.

### Der Zeitplan startet keine Läufe

**Ursache**: Der Channel ist nicht aktiv, das Abrufintervall ist leer, oder der Runner für geplante Aufgaben läuft nicht.

**Lösung**: **Aktiv** einschalten, Intervall eintragen, speichern. Den Runner `bin/console scheduled-task:run` prüfen.

### Jeder Lauf schlägt mit `CHANNEL_CONFIGURATION_INVALID` fehl

**Ursache**: Meist fehlt der **Steuersatz**, oder ein gewählter Verkaufskanal, eine Einstiegskategorie oder die Basissprache wurde gelöscht.

**Lösung**: Die Meldung im Feld **Fehler** des Laufs nennt die Einstellung. Korrigieren und speichern.

### Nach einem Plugin-Update scheitern alle Läufe

**Ursache**: Die Worker laufen noch mit dem Programmstand vor dem Update.

**Lösung**: Starten Sie die Worker neu, zum Beispiel mit `bin/console messenger:stop-workers`. Siehe [Voraussetzungen](../index.md#hintergrund-worker-sind-pflicht).

### Alle Produkte sind inaktiv

**Ursache**: Die Werte unter **Statuswerte für aktive Produkte** passen nicht zu Ihren Plytix-Statuswerten. Standard ist `Completed`.

**Lösung**: Tragen Sie Ihre Statuswerte exakt ein, mit derselben Groß- und Kleinschreibung.

### Kategorien fehlen

**Ursache**: Die Pfade im Feed beginnen nicht mit der eingetragenen **Kategorie-Wurzel im Feed**, oder der Channel hat keinen Verkaufskanal (`CATEGORY_PARENT_MISSING`).

**Lösung**: Wurzel an die erste Ebene Ihrer Plytix-Kategorien anpassen. Verkaufskanal mit Einstiegskategorie hinzufügen.

### Varianten lassen sich im Storefront nicht auswählen

**Ursache**: Die Attribute für Farbe, Größe und Ähnliches sind nicht als **Variantenoptionen** zugeordnet, oder die Varianten haben dort keine Werte (`MAPPING_VARIANT_OPTIONS_MISSING`).

**Lösung**: Siehe [Variantenoptionen und Eigenschaften](./mapping.md#variantenoptionen-und-eigenschaften).

---

## FAQ

**F: Wie oft sollte ich synchronisieren?**
A: So oft, wie Plytix den Channel verarbeitet. Ein häufigerer Abruf schadet nicht, weil unveränderte Feeds sofort übersprungen werden. Am schnellsten ist der Webhook, mit einem Abrufintervall als Absicherung.

**F: Was passiert mit meinen Produkten, wenn ich das Plugin deinstalliere?**
A: Die Produkte, Kategorien, Hersteller und Bilder bleiben in Shopware. Behalten Sie bei der Deinstallation die Plugin-Daten nicht, entfernt Shopware die Channels, Läufe und Verknüpfungen des Plugins sowie das Zusatzfeld „Kurzbeschreibung“. Nach einer Neuinstallation findet das Plugin vorhandene Produkte über die Produktnummer wieder.

**F: Kann ich zwei Plytix-Channels in einen Shop importieren?**
A: Ja. Jeder Channel hat eigene Einstellungen. Ein Produkt gehört standardmäßig dem Channel, der es zuerst importiert hat. Siehe [Produkte anderer Channels übernehmen](../configuration/settings.md#produkte-anderer-channels-übernehmen).

**F: Wo sehe ich, welche Produkte nicht importiert wurden?**
A: Auf der Detailseite des Laufs unter **Probleme**. Filtern Sie nach dem Schweregrad **Fehler**. Die Codes sind unter [Läufe und Problemcodes](./issues.md) erklärt.

**F: Wie lange dauert ein Import?**
A: In unseren Tests mit 69 Datensätzen dauerte ein erster Import gut 10 Sekunden, die Bilder danach etwa anderthalb Minuten. Bei 20.000 Datensätzen waren es etwa 12 Minuten und 27 Minuten für die Bilder, siehe [Große Kataloge](#große-kataloge). Das hängt stark vom Server ab. Mehr Worker verarbeiten die Pakete parallel.

**F: Wie lange bleiben Läufe sichtbar?**
A: 180 Tage nach ihrem Ende. Danach löscht das Plugin sie samt ihrer Probleme. Die Produkte sind davon nicht betroffen.
