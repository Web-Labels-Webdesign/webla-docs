# Nutzungsanleitung

Diese Anleitung beschreibt alle Funktionen von SplitCommission aus Kundensicht und aus Administratorensicht.

---

## Inhaltsverzeichnis

- [Kommissionskommentar auf der Produktdetailseite](#kommissionskommentar-auf-der-produktdetailseite)
- [Position im Warenkorb aufteilen](#position-im-warenkorb-aufteilen)
- [Kommissionskommentar bearbeiten](#kommissionskommentar-bearbeiten)
- [Globaler Bestellkommentar auf der Kassenseite](#globaler-bestellkommentar-auf-der-kassenseite)
- [Anzeige auf der Bestellbestätigungsseite](#anzeige-auf-der-bestellbestatigungsseite)
- [Admin: Kommissionskommentare in der Bestellübersicht](#admin-kommissionskommentare-in-der-bestellubersicht)
- [Produktkonfiguration: Kommentar für ausgewählte Produkte aktivieren](#produktkonfiguration-kommentar-fur-ausgewahlte-produkte-aktivieren)
- [Fehlerbehebung](#fehlerbehebung)

---

## Kommissionskommentar auf der Produktdetailseite

### Was es bewirkt

Auf der Produktdetailseite erscheint oberhalb der Schaltfläche „In den Warenkorb" ein Eingabefeld für einen Kommissionskommentar. Gibt der Kunde hier einen Text ein und legt den Artikel in den Warenkorb, wird die Position mit dem eingegebenen Kommentar als eigene, separierte Warenkorb-Position angelegt.

### So verwenden Sie es (als Kunde)

1. Öffnen Sie die Produktdetailseite eines für Kommissionierung freigeschalteten Artikels.
2. Im Bereich **„Einzelposten in mehrere Teile aufteilen"** erscheint ein Textfeld.
3. Geben Sie Ihren Kommissionskommentar ein (z.B. „Filiale Nord" oder „Auftrag 2024-001").
4. Klicken Sie auf **„In den Warenkorb"**.
5. Der Artikel wird als eigene Position mit Ihrem Kommentar im Warenkorb angelegt.

**Hinweis**: Wenn Sie den gleichen Artikel erneut ohne Kommentar oder mit einem anderen Kommentar in den Warenkorb legen, entsteht eine weitere separate Position. Alle Mengen werden für die Staffelpreisberechnung zusammengezählt.

**Ort**: Produktdetailseite → Kaufwidget (unterhalb der Mengenauswahl)

---

## Position im Warenkorb aufteilen

### Was es bewirkt

Für Warenkorb-Positionen ohne Kommissionskommentar erscheint im Warenkorb ein Formular, mit dem die Position nachträglich mit einem Kommentar versehen und so in eine eigene Position umgewandelt werden kann.

### So verwenden Sie es (als Kunde)

1. Öffnen Sie den **Warenkorb** (Seite oder Off-Canvas-Seitenleiste).
2. Unter einem kommissionierbaren Artikel (ohne Kommentar) erscheint der Abschnitt **„Einzelposten in mehrere Teile aufteilen"**.
3. Geben Sie im Textfeld einen Kommissionskommentar ein.
4. Klicken Sie auf **„Übernehmen"**.
5. Die Position erhält den Kommentar und wird als eigene Teilposition behandelt. Die Staffelpreise aller Teilpositionen dieses Artikels bleiben erhalten.

**Ort**: Warenkorb-Seite oder Off-Canvas-Warenkorb → unter jeder aufteilbaren Warenkorb-Position

---

## Kommissionskommentar bearbeiten

### Was es bewirkt

Positionen, die bereits einen Kommissionskommentar haben, zeigen den Kommentar direkt unter der Artikelnummer an. Über einen Stift-Button kann der Kommentar inline bearbeitet werden.

### So verwenden Sie es (als Kunde)

1. Öffnen Sie den **Warenkorb**.
2. Bei Positionen mit gesetztem Kommissionskommentar sehen Sie unter der Artikelnummer:
   - **Kommissionskommentar**: [Ihr eingegebener Text]
   - Daneben einen **Stift-Button** (Bearbeiten).
3. Klicken Sie auf den **Stift-Button**.
4. Das Textfeld wird eingeblendet, der bisherige Kommentar ist vorausgefüllt.
5. Ändern Sie den Text und klicken Sie auf das **Häkchen** (Speichern).
6. Der Warenkorb aktualisiert sich mit dem neuen Kommentar.

**Ort**: Warenkorb-Seite oder Off-Canvas-Warenkorb → bei Positionen mit gesetztem Kommentar

---

## Globaler Bestellkommentar auf der Kassenseite

### Was es bewirkt

Wenn in den Plugin-Einstellungen **„Kommentar für Gesamtbestellung aktivieren"** eingeschaltet ist, erscheint auf der Kassenseite (Schritt: Bestellbestätigung) ein zusätzliches Textfeld für einen übergeordneten Kommentar zur gesamten Bestellung.

### So verwenden Sie es (als Kunde)

1. Legen Sie wie gewohnt Artikel in den Warenkorb und gehen Sie zur **Kasse**.
2. Auf der Seite **„Bestellung bestätigen"** sehen Sie das Feld **„Kommissionskommentar"** (Position je nach Einstellung: unterhalb des Kundenkommentars oder unterhalb der Versandarten).
3. Geben Sie Ihren Bestellkommentar ein (z.B. eine Projektnummer oder globale Lieferanweisung).
4. Klicken Sie auf das Häkchen-Symbol, um den Kommentar zu speichern.
5. Zum Entfernen des Kommentars klicken Sie auf das Papierkorb-Symbol (erscheint, wenn ein Kommentar gesetzt ist).
6. Schließen Sie die Bestellung wie gewohnt ab.

**Ort**: Bestellung bestätigen (Kassenseite) → Abschnitt je nach Positionskonfiguration

---

## Anzeige auf der Bestellbestätigungsseite

### Was es bewirkt

Nach erfolgreichem Abschluss der Bestellung zeigt die Bestätigungsseite den globalen Bestellkommentar an, sofern einer eingegeben wurde.

**Ort**: Bestellbestätigung → Bestelldetails

Der Kommentar erscheint im Abschnitt mit den Versandinformationen, deutlich gekennzeichnet mit der Beschriftung **„Kommissionskommentar:"**.

---

## Admin: Kommissionskommentare in der Bestellübersicht

### Was es bewirkt

In der Shopware-Administration werden Kommissionskommentare direkt bei den jeweiligen Positionen in der Bestellübersicht angezeigt.

### So sehen Sie die Kommentare (als Administrator)

1. Navigieren Sie zu **Bestellungen** in der Shopware-Administration.
2. Öffnen Sie eine Bestellung, die mit dem SplitCommission-Plugin aufgegeben wurde.
3. In der Tabelle der Bestellpositionen sehen Sie unterhalb des Artikelnamens den jeweiligen Kommissionskommentar, gekennzeichnet mit **„Auftragsnotiz: [Kommentartext]"**.

**Ort**: Bestellungen → Bestelldetails → Positionen-Tabelle

---

## Produktkonfiguration: Kommentar für ausgewählte Produkte aktivieren

### Was es bewirkt

Wenn in den Plugin-Einstellungen **„Aktiv für"** auf **„Ausgewählte Produkte"** gesetzt ist, muss das Kommissionsfeld pro Produkt manuell aktiviert werden.

### So aktivieren Sie es für ein Produkt (als Administrator)

1. Navigieren Sie zu **Kataloge → Produkte**.
2. Öffnen Sie das gewünschte Produkt.
3. Wechseln Sie zum Reiter **Spezifikationen**.
4. Scrollen Sie zum Abschnitt **Kommission**.
5. Aktivieren Sie den Schalter **„Kommission aktiv"**.
6. Klicken Sie auf **Speichern**.

Das Kommentarfeld erscheint nun für dieses Produkt im Shop.

---

## Fehlerbehebung

### Das Kommissionskommentarfeld erscheint nicht

**Symptom**: Auf der Produktdetailseite oder im Warenkorb ist kein Kommentarfeld sichtbar.

**Mögliche Ursachen und Lösungen**:
1. **Plugin ist deaktiviert**: Prüfen Sie unter `Erweiterungen → Meine Erweiterungen`, ob das Plugin aktiv ist.
2. **Einstellung „Aktiv für" = Ausgewählte Produkte**: Aktivieren Sie für das betroffene Produkt den Schalter **„Kommission aktiv"** in den Produktdetails (Reiter Spezifikationen).
3. **Falscher Verkaufskanal**: Stellen Sie sicher, dass die Plugin-Einstellungen für den richtigen Verkaufskanal konfiguriert sind.

---

### Der Staffelpreis wird nicht korrekt berechnet

**Symptom**: Nach der Aufteilung in mehrere Positionen wird nicht der günstigere Staffelpreis angewendet.

**Ursache**: Der Staffelpreis wird erst beim nächsten Neuberechnen des Warenkorbs aktualisiert (z.B. nach dem Hinzufügen oder Entfernen von Artikeln).

**Lösung**: Laden Sie die Warenkorbseite neu oder ändern Sie kurzzeitig eine Menge, um die Neuberechnung auszulösen.

---

### Der globale Bestellkommentar wird nicht gespeichert

**Symptom**: Das Kommentarfeld auf der Kassenseite erscheint, aber der Kommentar wird nicht in der Bestellung gespeichert.

**Ursache**: Der Kommentar muss explizit durch Klick auf das Häkchen-Symbol bestätigt werden, bevor die Bestellung abgeschlossen wird.

**Lösung**: Geben Sie den Kommentar ein und klicken Sie auf das Häkchen-Symbol. Erst dann ist der Kommentar gespeichert.
