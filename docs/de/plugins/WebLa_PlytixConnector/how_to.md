# Anleitungen

Schritt für Schritt vom Plytix-Channel bis zum ersten Import.

---

## Wie das Plugin funktioniert

```
Plytix-Channel (NDJSON) → Feed-URL → Lauf in Shopware → Produkte, Varianten, Bilder, Cross-Selling
```

1. Plytix verarbeitet Ihren Channel und stellt das Ergebnis unter der Feed-URL bereit.
2. Ein Lauf startet: per Klick, nach Zeitplan, per Webhook oder über die Kommandozeile.
3. Das Plugin lädt den Feed, prüft ihn und schreibt alles, was sich geändert hat.
4. Bilder werden im Hintergrund nachgeladen, Probleme landen im Protokoll des Laufs.

---

## Anleitung: Plytix-Channel einrichten

**Ziel**: Ein NDJSON-Channel in Plytix, den das Plugin lesen kann.

**Voraussetzungen**:
- Plytix-Konto mit dem Add-on „Channels“

Die Bezeichnungen in der Plytix-Oberfläche können je nach Version abweichen. Maßgeblich sind die beschriebenen Funktionen.

**Schritte**:

1. **Channel anlegen**
   - Legen Sie in Plytix einen neuen Channel an und wählen Sie das Format NDJSON. CSV, XLSX und XML funktionieren mit dem Plugin nicht.

2. **Produkte auswählen**
   - Nehmen Sie die Produkte auf, die im Shop erscheinen sollen.
   - Stellen Sie bei den Produktebenen ein, dass auch die übergeordneten Ebenen aufgeführter Varianten exportiert werden. Sonst fehlen im Feed die Hauptprodukte, und neue Varianten werden mit `HIERARCHY_PARENT_NOT_IN_FEED` übersprungen.

3. **Attribute hinzufügen**

   Diese Attribute sollten im Channel sein. Die Ausgabe-Bezeichnung in Klammern ist jeweils der Standard des Plugins. Andere Bezeichnungen sind kein Problem, solange Sie sie in der [Feldzuordnung](usage/mapping.md) eintragen.

   | Inhalt | Standard-Bezeichnung | Pflicht |
   | --- | --- | --- |
   | SKU | `SKU` | Ja |
   | Hauptprodukt einer Variante | `Variant of` | Bei Varianten |
   | Variantenliste | `Variants` | Empfohlen |
   | Produktname | `Product Title` oder `Label` | Ja |
   | Preis | `Price (€)` | Ja |
   | Status | `Status` | Empfohlen |
   | Beschreibung, Kurzbeschreibung | `Long Description`, `Short Description` | Nein |
   | GTIN | `GTIN` | Nein |
   | Marke | `Brand` | Nein |
   | Kategorien | `Categories` | Nein |
   | Hauptbild, Galerie | `Main Image` oder `Thumbnail`, `Assets` | Nein |
   | Maximale Bestellmenge | `Maximum Order Quantity` | Nein |
   | Cross-Selling | `Cross-sell` | Nein |
   | Variantenmerkmale | z. B. `Product Color`, `Apparel Size` | Bei Varianten |
   | Filterbare Merkmale | z. B. `Material`, `Gender` | Nein |
   | Weitere Produktfelder wie Abmessungen, Gewicht oder Tags | frei wählbar | Nein |
   | Texte in weiteren Sprachen | z. B. `Spanish Product Title` | Nein |

   Preise müssen als einfache Zahl mit Punkt ausgegeben werden, also `29.99`.

4. **Verarbeitungsmodus wählen**
   - Plytix kann alle Produkte exportieren oder nur neue und geänderte. Wählen Sie „alle Produkte“. Was die Feed-URL nach einer Verarbeitung „nur Änderungen“ liefert, haben wir noch nicht geprüft. Wenn Sie in Shopware **Feed enthält alle Produkte** einschalten, ist „alle Produkte“ zwingend, sonst würde das Plugin ungeänderte Produkte für entfernt halten.

5. **Verarbeiten und Feed-URL kopieren**
   - Verarbeiten Sie den Channel einmal und kopieren Sie die Feed-URL. Sie sieht etwa so aus: `https://pim.plytix.com/channels/…/feed`.
   - Wenn Sie wollen, richten Sie in Plytix einen Zeitplan für die Verarbeitung ein, etwa alle drei Stunden oder täglich.

**Wichtig**: Die Feed-URL ist nicht geschützt. Jeder, der sie kennt, kann Ihren kompletten Produktfeed abrufen, inklusive Preisen. Geben Sie sie nur dort ein, wo sie gebraucht wird.

---

## Anleitung: Channel in Shopware anlegen

**Ziel**: Ein Shopware-Channel, der den Plytix-Feed importiert.

**Voraussetzungen**:
- Feed-URL aus Plytix
- Worker und Runner für geplante Aufgaben laufen ([Voraussetzungen](index.md#hintergrund-worker-sind-pflicht))

**Schritte**:

1. **Channel anlegen**
   - Navigieren zu: `Kataloge → Plytix Connector`
   - Klicken Sie auf **Channel anlegen**.

2. **Karte „Channel“ ausfüllen**
   - **Name**: zum Beispiel „Plytix Hauptkatalog“
   - **Feed-URL**: die kopierte URL
   - **Verkaufskanäle**: die Shops, in denen die Produkte erscheinen sollen, jeweils mit der Einstiegskategorie für ihre Kategorien
   - **Steuersatz**: zum Beispiel 19 %. Ohne Steuersatz schlägt jeder Lauf fehl. Verschiedene Steuersätze pro Produkt ordnen Sie später zu, siehe [Steuersatz](usage/mapping.md#steuersatz).
   - **Währung**: die Währung der Plytix-Preise
   - **Aktiv** vorerst aus lassen, solange Sie testen

3. **Import-Einstellungen prüfen**
   - **Kategorie-Wurzel im Feed**: die erste Ebene Ihrer Kategoriepfade in Plytix, Standard `Website Taxonomy`
   - **Statuswerte für aktive Produkte**: Ihre Plytix-Statuswerte für freigegebene Produkte, Standard `Completed`
   - **Preise sind Bruttopreise**: aus, falls Plytix Nettopreise liefert
   - **Name des Cross-Sellings**: zum Beispiel „Passend dazu“
   - Alle Einstellungen: [Channel-Einstellungen](configuration/settings.md)

4. **Feldzuordnung prüfen**
   - Die Standardwerte sind die Bezeichnungen, die Plytix für SKU, Name, Preis, Bilder und die übrigen Felder jedes Exports verwendet. Haben Sie Ausgabe-Bezeichnungen in Plytix umbenannt, tragen Sie Ihre ein. Um die Bezeichnungen zu sehen, laden Sie den Feed über die Feed-URL herunter und öffnen die Datei in einem Texteditor. Jede Zeile ist ein Produkt, die Bezeichnungen stehen jeweils vor dem Doppelpunkt.
   - Legen Sie unter **Übersetzungen** pro Sprache eine Zeile an, zum Beispiel `es-ES` für Attribute wie `Spanish Product Title`.
   - Details: [Feldzuordnung und Varianten](usage/mapping.md)

5. **Speichern und erste Synchronisation starten**
   - Klicken Sie auf **Speichern** und dann auf **Jetzt synchronisieren**. Der erste Lauf importiert die Produkte ohne Variantenoptionen und Eigenschaften und sammelt die Bezeichnungen Ihres Feeds.
   - Verfolgen Sie den Lauf in der Karte **Läufe**. Mit **Probleme anzeigen** sehen Sie Fehler und Warnungen.

6. **Variantenoptionen und Eigenschaften zuordnen**
   - Klicken Sie in der Karte **Feldzuordnung** auf **Feed-Bezeichnungen zuordnen**.
   - Setzen Sie Farbe, Größe und ähnliche Merkmale auf **Variantenoption**, filterbare Merkmale wie Material auf **Eigenschaft**, und wählen Sie eine bestehende Eigenschaftsgruppe oder tragen Sie den Namen einer neuen ein. Ignorieren Sie die Bezeichnungen, die Sie nicht brauchen.
   - Werte wie Breite, Gewicht oder Tags setzen Sie auf **Produktfeld** und wählen unter **Ziel in Shopware** das Feld und bei Abmessungen und Gewicht die Einheit des Feeds.
   - Klicken Sie auf **Speichern und synchronisieren**. Der Lauf, der jetzt startet, schreibt Variantenoptionen und Eigenschaften an alle Produkte.
   - Details: [Variantenoptionen und Eigenschaften](usage/mapping.md#variantenoptionen-und-eigenschaften)

7. **Aktivieren**
   - Passt das Ergebnis, schalten Sie **Aktiv** ein, tragen ein **Abrufintervall (Minuten)** ein und speichern.

**Ergebnis**: Die Produkte stehen unter Kataloge → Produkte, sind in den gewählten Verkaufskanälen sichtbar, und die Bilder kommen nach und nach dazu.

**Fehlerbehebung**: Bleibt der Lauf auf „Wartend“, laufen keine Worker. Weitere Fälle unter [Fehlerbehebung](usage/usage.md#fehlerbehebung).

---

## Anleitung: Webhook einrichten

**Ziel**: Plytix startet nach jeder Verarbeitung sofort einen Lauf in Shopware.

**Voraussetzungen**:
- Gespeicherter, aktiver Channel. Inaktive Channels lehnen Webhook-Aufrufe ab.
- Ihr Shop ist aus dem Internet erreichbar.

**Schritte**:

1. **Token erzeugen**
   - Öffnen Sie den Channel und klicken Sie in der Karte **Webhook** auf **Token erzeugen**.
   - Bei einem bestehenden Channel wird dabei sofort gespeichert. Bei einem neuen Channel klicken Sie anschließend auf **Speichern**. Die URL funktioniert erst nach dem Speichern.

2. **URL kopieren**
   - Kopieren Sie die **Webhook-URL**. Sie hat die Form `https://ihr-shop.de/api/webla-plytix/webhook/<Token>`, mit der Adresse, unter der Ihre Administration läuft.

3. **In Plytix eintragen**
   - Öffnen Sie in Plytix die Einstellungen des Channels und tragen Sie die URL als Webhook ein.
   - Plytix bietet dort eine Testfunktion. Beachten Sie, dass ein Test einen echten Lauf in Shopware startet.

**Ergebnis**: Nach jeder Verarbeitung in Plytix erscheint in der Liste **Läufe** ein Lauf mit dem Auslöser **Webhook**. Die von Plytix gemeldete Produktanzahl steht in der Übersicht des Laufs.

**Verhalten im Betrieb**:
- Wartet oder läuft für den Channel bereits ein Lauf, antwortet der Shop mit HTTP 409, merkt sich den Aufruf aber und startet nach dem Ende des aktuellen Laufs einen weiteren.
- Erreicht ein Aufruf Ihren Shop gar nicht, etwa während einer Wartung, fängt ein **Abrufintervall (Minuten)** das auf.
- Der Token in der URL ist der einzige Schutz. Wer die URL kennt, kann Läufe auslösen, aber keine Daten lesen oder ändern.

### Token neu erzeugen

Ist die URL in falsche Hände geraten, klicken Sie auf **Token neu erzeugen** und bestätigen. Die alte URL funktioniert sofort nicht mehr, und der Channel wird gespeichert. Tragen Sie die neue URL in Plytix ein, sonst kommen keine Webhook-Aufrufe mehr an.

---

## Anleitung: Bestehenden Katalog an Plytix anbinden

**Ziel**: Produkte, die schon in Shopware sind, künftig aus Plytix pflegen.

1. Stellen Sie sicher, dass die SKU in Plytix exakt der Produktnummer in Shopware entspricht.
2. Legen Sie den Channel wie oben beschrieben an.
3. Der erste Lauf findet die vorhandenen Produkte über die Produktnummer, verknüpft sie mit dem Channel und überschreibt ihre Daten mit dem Stand aus Plytix. Der Lagerbestand bleibt unverändert.

Prüfen Sie das vorher in einem Testsystem. Zusätzliche Kategorien, Eigenschaften und Bilder, die nur in Shopware gepflegt sind, entfernt der erste Lauf, sofern die jeweiligen Felder zugeordnet sind.

---

## Anleitung: Entfernte Produkte automatisch deaktivieren

**Ziel**: Produkte, die Sie aus dem Plytix-Channel nehmen, verschwinden aus dem Shop.

1. Stellen Sie in Plytix sicher, dass der Channel immer alle Produkte exportiert.
2. Schalten Sie in Shopware **Feed enthält alle Produkte** ein.
3. Lassen Sie die **Sicherheitsgrenze für Entfernungen (%)** auf 25, solange Sie keinen Grund für einen anderen Wert haben.
4. Speichern Sie.

Ab dem nächsten Lauf werden fehlende Produkte deaktiviert, nicht gelöscht. Jedes deaktivierte Produkt steht als `REMOVAL_PRODUCT_DEACTIVATED` im Protokoll.

---

## Schnellreferenz

| Aufgabe | Wichtige Schritte | Einstellungen |
| --- | --- | --- |
| Erster Import | Channel anlegen, speichern, **Jetzt synchronisieren** | Feed-URL, Steuersatz, Verkaufskanäle |
| Regelmäßig synchronisieren | Intervall eintragen, aktiv schalten | Abrufintervall (Minuten), Aktiv |
| Sofort nach Plytix-Verarbeitung | Token erzeugen, URL in Plytix eintragen | Webhook, Aktiv |
| Gelöschte Produkte wiederherstellen | `bin/console plytix:channel:sync <channel> --force` | – |
| Weitere Sprache | Sprache in Shopware anlegen, Locale zuordnen | Übersetzungen |

---

## Gute Praxis

1. **Erst testen, dann aktivieren**: Neue Channels sind inaktiv. Nutzen Sie das, um den ersten Lauf in Ruhe zu prüfen.
2. **Webhook und Zeitplan kombinieren**: Der Webhook ist schnell, das Abrufintervall fängt Aufrufe auf, die Ihren Shop nicht erreichen.
3. **Feldzuordnung vor dem ersten Lauf festlegen**: Jede Änderung danach schreibt alle Produkte neu, und neue Gruppennamen erzeugen neue Eigenschaftsgruppen.
4. **Probleme regelmäßig ansehen**: Ein Lauf mit Status „Mit Fehlern abgeschlossen“ hat einen Teil der Produkte nicht importiert.

## Was Sie vermeiden sollten

- Die Feed-URL oder Webhook-URL in Tickets oder Screenshots teilen, weil beide ohne weitere Anmeldung funktionieren.
- **Feed enthält alle Produkte** einschalten, wenn Plytix nur Änderungen exportiert, weil dann Produkte deaktiviert würden, die noch aktuell sind. Die Sicherheitsgrenze fängt das nur ab, wenn genug Produkte fehlen.
- Importierte Texte oder Preise in Shopware von Hand ändern, weil die nächste Änderung in Plytix sie überschreibt.
