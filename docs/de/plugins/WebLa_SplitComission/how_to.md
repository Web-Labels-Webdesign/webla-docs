# Anleitungen

Schritt-für-Schritt-Workflows für häufige Aufgaben mit SplitCommission.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Kunde gibt Kommentar ein → Position wird mit Kommentar markiert → Warenkorb enthält separate Positionen → Staffelpreisberechnung über alle Teilmengen → Bestellung mit kommentieren Positionen
```

**Beispielablauf**:
1. Kunde öffnet Produktdetailseite und gibt „Filiale Nord" als Kommentar ein
2. Artikel wird mit Kommentar in den Warenkorb gelegt → eigene Warenkorb-Position
3. Kunde legt denselben Artikel nochmals mit „Filiale Süd" in den Warenkorb → zweite eigene Position
4. Plugin addiert beide Mengen für die Staffelpreisberechnung
5. Beide Positionen erhalten den günstigeren Staffelpreis basierend auf der Gesamtmenge
6. Bestellung enthält beide Positionen mit Kommentaren – sichtbar im Admin

---

## Häufige Workflows

### Anleitung: Artikel mit Kommissionskommentar in den Warenkorb legen

**Ziel**: Einen Artikel mit individuellem Kommentar als eigene Warenkorb-Position anlegen.

**Voraussetzungen**:
- Plugin ist aktiviert
- Produkt ist für Kommissionierung freigeschaltet (oder „Alle Produkte" ist aktiv)

**Schritte**:

1. **Öffnen Sie die Produktdetailseite**
   - Navigieren Sie zum gewünschten Produkt im Onlineshop.

2. **Kommentar eingeben**
   - Suchen Sie das Eingabefeld im Bereich **„Einzelposten in mehrere Teile aufteilen"** oberhalb der Schaltfläche „In den Warenkorb".
   - Geben Sie Ihren Kommissionskommentar ein (z.B. Filialname, Projektnummer, Auftragsbezeichnung).

3. **Artikel in den Warenkorb legen**
   - Wählen Sie die gewünschte Menge.
   - Klicken Sie auf **„In den Warenkorb"**.

4. **Ergebnis prüfen**
   - Öffnen Sie den Warenkorb.
   - Der Artikel erscheint als eigene Position mit Ihrem eingegebenen Kommentar unterhalb der Artikelnummer.

**Ergebnis**: Der Artikel ist als kommentierte Einzelposition im Warenkorb – bereit für weitere Aufteilungen oder den Bestellabschluss.

---

### Anleitung: Bestehende Warenkorb-Position aufteilen

**Ziel**: Einen bereits im Warenkorb befindlichen Artikel nachträglich mit einem Kommissionskommentar versehen.

**Voraussetzungen**:
- Plugin ist aktiviert
- Der Artikel ist noch ohne Kommissionskommentar im Warenkorb

**Schritte**:

1. **Warenkorb öffnen**
   - Klicken Sie auf das Warenkorb-Symbol oder navigieren Sie zur Warenkorbseite.

2. **Aufteilungsformular finden**
   - Unter dem gewünschten Artikel (ohne Kommentar) sehen Sie den Abschnitt **„Einzelposten in mehrere Teile aufteilen"** mit einem Eingabefeld.

3. **Kommentar eingeben und bestätigen**
   - Geben Sie den Kommissionskommentar ein.
   - Klicken Sie auf **„Übernehmen"**.

4. **Ergebnis prüfen**
   - Die Position erhält den Kommentar und erscheint jetzt als kommentierte Teilposition.
   - Der Staffelpreis wird neu berechnet, falls weitere Positionen desselben Artikels vorhanden sind.

**Ergebnis**: Die Warenkorb-Position hat einen Kommissionskommentar und wird separat ausgewiesen.

---

### Anleitung: Kommissionskommentar nachträglich ändern

**Ziel**: Einen bestehenden Kommissionskommentar im Warenkorb korrigieren.

**Schritte**:

1. **Warenkorb öffnen**

2. **Position mit Kommentar finden**
   - Unter der Artikelnummer sehen Sie: **Kommissionskommentar**: [aktueller Text] mit einem Stift-Symbol.

3. **Bearbeitung starten**
   - Klicken Sie auf das **Stift-Symbol** neben dem Kommentar.
   - Das Textfeld erscheint mit dem bisherigen Kommentar vorausgefüllt.

4. **Kommentar ändern und speichern**
   - Bearbeiten Sie den Text.
   - Klicken Sie auf das **Häkchen-Symbol** zum Speichern.

**Ergebnis**: Der Kommentar ist aktualisiert. Der Warenkorb lädt sich neu.

---

### Anleitung: Globalen Bestellkommentar hinzufügen

**Ziel**: Einen übergeordneten Kommentar für die gesamte Bestellung hinterlassen.

**Voraussetzungen**:
- „Kommentar für Gesamtbestellung aktivieren" ist in den Plugin-Einstellungen aktiv

**Schritte**:

1. **Zur Kassenseite navigieren**
   - Legen Sie alle Artikel in den Warenkorb und klicken Sie auf **„Zur Kasse"**.

2. **Globales Kommentarfeld finden**
   - Auf der Seite **„Bestellung bestätigen"** sehen Sie das Feld **„Kommissionskommentar"** (Position je nach Einstellung unter dem Kundenkommentar oder den Versandarten).

3. **Kommentar eingeben und bestätigen**
   - Geben Sie Ihren Kommentar ein (z.B. Projektnummer, Referenz, globale Lieferanweisung).
   - Klicken Sie auf das **Häkchen-Symbol**.

4. **Bestellung abschließen**
   - Wählen Sie Zahlungs- und Versandart und schließen Sie die Bestellung ab.
   - Der Kommentar wird in der Bestellzusammenfassung gespeichert.

**Ergebnis**: Der Kommentar erscheint auf der Bestellbestätigungsseite und ist im Shopware-Admin bei der Bestellung sichtbar.

---

### Anleitung: Plugin für ausgewählte Produkte aktivieren

**Ziel**: Das Kommissionskommentarfeld nur für bestimmte Produkte einblenden.

**Voraussetzungen**:
- Plugin-Einstellung „Aktiv für" ist auf **„Ausgewählte Produkte"** gesetzt

**Schritte**:

1. **Produkt öffnen**
   - Navigieren Sie zu **Kataloge → Produkte** und öffnen Sie das gewünschte Produkt.

2. **Reiter „Spezifikationen" wählen**
   - Wechseln Sie im Produktformular auf den Reiter **Spezifikationen**.

3. **Kommission aktivieren**
   - Scrollen Sie zum Abschnitt **Kommission**.
   - Aktivieren Sie den Schalter **„Kommission aktiv"**.

4. **Speichern**
   - Klicken Sie auf **Speichern** (oben rechts).

**Ergebnis**: Das Kommissionskommentarfeld erscheint ab sofort für dieses Produkt im Onlineshop.

---

## Schnellreferenz

| Aufgabe                                   | Ort                          | Erforderliche Einstellung          |
| ----------------------------------------- | ---------------------------- | ---------------------------------- |
| Kommentar beim Hinzufügen eingeben        | Produktdetailseite           | Plugin aktiv, Produkt freigeschaltet |
| Bestehende Position aufteilen             | Warenkorb / Off-Canvas       | Plugin aktiv                       |
| Kommentar bearbeiten                      | Warenkorb / Off-Canvas       | Plugin aktiv                       |
| Globalen Bestellkommentar eingeben        | Kassenseite (Bestätigung)    | Globales Kommentarfeld aktiviert   |
| Kommentarfeld für Produkt aktivieren      | Admin → Produkt → Spezif.    | „Aktiv für" = Ausgewählte Produkte |

---

## Best Practices

1. **Aussagekräftige Kommentare verwenden**: Verwenden Sie eindeutige Bezeichnungen wie Filialname, Projektnummer oder Auftragsreferenz – diese erscheinen direkt in der Bestellübersicht des Admins.
2. **Kommentar vor dem Warenkorb-Abschluss prüfen**: Kontrollieren Sie im Warenkorb alle Kommentare, bevor Sie zur Kasse gehen.
3. **Staffelpreise im Blick behalten**: Der günstigste Staffelpreis gilt, wenn mehrere Positionen desselben Artikels die notwendige Gesamtmenge ergeben. Prüfen Sie die Preise nach jeder Aufteilung.

## Was Sie vermeiden sollten

- ❌ **Kommentar ohne Bestätigung verlassen** – Ein eingegebener, aber nicht bestätigter Kommentar wird nicht gespeichert. Immer das Häkchen-Symbol anklicken.
- ❌ **Globalen Kommentar ohne Bestätigung absenden** – Auch das globale Kommentarfeld muss explizit bestätigt werden, bevor die Bestellung abgeschlossen wird.
