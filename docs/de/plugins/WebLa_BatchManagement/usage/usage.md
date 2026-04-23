# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen von **Charge-Management**.

---

## Inhaltsverzeichnis

- [Chargenübersicht](#chargenübersicht)
- [Charge anlegen](#charge-anlegen)
- [Charge bearbeiten](#charge-bearbeiten)
- [Produktzusammensetzungen](#produktzusammensetzungen)
- [Chargen-Historie im Auftrag](#chargen-historie-im-auftrag)
- [Geplante Bestandsaktualisierung](#geplante-bestandsaktualisierung)
- [Fehlerbehebung](#fehlerbehebung)

---

## Chargenübersicht

### Was sie bewirkt

Zeigt alle angelegten Chargen in einer durchsuchbaren, sortierbaren Liste mit Name, Chargennummer, Produkt, Verfallsdatum, aktiv-Status und verfügbarer Restmenge.

### So verwenden Sie sie

1. Öffnen Sie **Kataloge → Chargen**.
2. Nutzen Sie die Suchleiste, um nach Name oder Chargennummer zu filtern.
3. Klicken Sie auf eine Spaltenüberschrift, um die Liste zu sortieren.
4. Klicken Sie auf eine Chargenzeile, um die Detailansicht zu öffnen.
5. Über die Seitenleiste rechts können Sie die Liste jederzeit aktualisieren.

**Ort**: `Kataloge → Chargen`

### Tipps & Best Practices

- Sortieren Sie nach **Verfallsdatum**, um ablaufende Chargen schnell zu identifizieren.
- Die Spalte **Verfügbare Menge** entspricht `Menge − verbrauchte Menge` und zeigt, wie viel in dieser Charge noch frei ist.

---

## Charge anlegen

### Was es bewirkt

Erstellt eine neue Charge, die einem Produkt zugeordnet wird und Menge, Chargennummer, Verfallsdatum sowie aktiv-Status trägt.

### So verwenden Sie sie

1. Navigieren Sie zu **Kataloge → Chargen**.
2. Klicken Sie oben rechts auf **Charge hinzufügen**.
3. Füllen Sie die Pflichtfelder aus:
   - **Name**: Frei wählbare Bezeichnung.
   - **Chargennummer**: Herstellerseitige oder interne Chargenkennung.
   - **Aktiv**: Schalter, ob die Charge für Buchungen berücksichtigt werden soll.
   - **Produkt**: Einzelauswahl aus dem Produktkatalog.
   - **Menge**: Gesamtmenge der Charge (z. B. Gewicht in kg).
   - **Verfallsdatum**: Ablaufdatum — nach diesem Datum wird die Charge automatisch deaktiviert.
4. Klicken Sie auf **Speichern**.

**Ort**: `Kataloge → Chargen → Charge hinzufügen`

### Tipps & Best Practices

- Die Felder **Menge** und **Verbrauchte Menge** arbeiten mit Dezimalwerten (drei Nachkommastellen) — geeignet für Gewichtsangaben.
- **Verbrauchte Menge** wird automatisch durch das System gepflegt. Sie können dieses Feld nicht manuell bearbeiten.

---

## Charge bearbeiten

### Was es bewirkt

Erlaubt das nachträgliche Anpassen aller Chargenfelder außer der automatisch verwalteten verbrauchten Menge.

### So verwenden Sie sie

1. Öffnen Sie **Kataloge → Chargen**.
2. Klicken Sie auf die zu bearbeitende Charge.
3. Passen Sie die gewünschten Felder an.
4. Klicken Sie auf **Speichern**.

### Tipps & Best Practices

- Ist die Einstellung *Lagerbestand basierend auf Chargen berechnen* aktiv, löst jedes Speichern eine sofortige Neuberechnung des Produktlagerbestands aus.
- Um eine Charge außer Gebrauch zu nehmen, deaktivieren Sie den Schalter **Aktiv**, statt die Charge zu löschen — so bleibt die Historie im Auftrag erhalten.

---

## Produktzusammensetzungen

### Was es bewirkt

Ein Produkt kann aus mehreren Einzelprodukten bestehen (z. B. ein Geschenkkorb aus drei Einzelartikeln). Bei Chargenbuchung und Bestandsberechnung werden dann die Chargen der Bestandteile herangezogen.

### So verwenden Sie sie

1. Öffnen Sie **Kataloge → Produkte** und wählen Sie das zusammengesetzte Produkt.
2. Wechseln Sie zum Tab **Spezifikationen**.
3. Im Bereich **Zusammensetzung** klicken Sie auf **Zusammensetzung hinzufügen**.
4. Wählen Sie das Bestandteilprodukt und geben Sie die benötigte Menge je Einheit an.
5. Klicken Sie auf **Speichern**.

**Ort**: `Kataloge → Produkte → [Produkt] → Spezifikationen → Zusammensetzung`

### Tipps & Best Practices

- Die Menge bezieht sich auf eine Einheit des zusammengesetzten Produkts. Beispiel: Benötigt ein Geschenkkorb 0,5 kg Produkt A und 1 Stück Produkt B, tragen Sie für A den Wert `0.5` ein.
- Der Bestand des zusammengesetzten Produkts entspricht dem Minimum dessen, was sich aus allen Bestandteilen herstellen lässt.

---

## Chargen-Historie im Auftrag

### Was es bewirkt

Auf der Chargen-Detailseite ist die Karte **Bestellungen** sichtbar. Sie listet alle Aufträge, die Mengen aus dieser Charge verbraucht haben, mit Auftragsnummer, Auftragsposition und verbrauchter Menge.

### So verwenden Sie sie

1. Öffnen Sie **Kataloge → Chargen** und wählen Sie eine Charge aus.
2. Scrollen Sie zur Karte **Bestellungen**.
3. Klicken Sie auf eine Auftragsnummer, um direkt zum Auftrag zu springen.

### Tipps & Best Practices

- Diese Historie ist besonders für Rückrufe nützlich: Bei einer problematischen Charge sehen Sie sofort, welche Kunden betroffen sind.

---

## Geplante Bestandsaktualisierung

### Was es bewirkt

Ein Hintergrundtask (`webla.batch-management.task`) läuft standardmäßig alle 600 Sekunden (10 Minuten) und erledigt zwei Aufgaben:

1. Deaktiviert Chargen, deren Verfallsdatum erreicht oder überschritten ist.
2. Falls *Lagerbestand basierend auf Chargen berechnen* aktiv ist: Berechnet den Produktlagerbestand neu.

### So verwenden Sie sie

Der Task läuft automatisch, sobald der Shopware Message Queue Worker aktiv ist. Kein manueller Eingriff nötig.

**Ort**: `Einstellungen → System → Aufgaben` — der Task ist dort als `webla.batch-management.task` gelistet.

### Tipps & Best Practices

- Prüfen Sie unter **Einstellungen → System → Aufgaben**, ob der Task erfolgreich durchläuft.
- Der Task benötigt einen laufenden Worker (`bin/console messenger:consume`). Auf gehosteten Shopware-Umgebungen ist dieser üblicherweise bereits konfiguriert.

---

## Fehlerbehebung

### Eine Charge wird bei Bestellung nicht abgebucht

**Symptom**: Der Auftrag wechselt in den konfigurierten Status, die Charge bleibt aber unverändert.

**Mögliche Ursachen und Lösungen**:

1. **Keine aktive Charge vorhanden**: Prüfen Sie, ob für das bestellte Produkt mindestens eine Charge mit Status `Aktiv`, einem in der Zukunft liegenden Verfallsdatum und einer Restmenge > 0 existiert.
2. **Produkt ohne Gewicht**: Die Buchung berechnet sich aus Bestellmenge × Produktgewicht. Ohne Gewicht findet keine Buchung statt.
3. **Falscher Auftragsstatus konfiguriert**: Prüfen Sie unter den Grundeinstellungen, welcher Status Buchungen auslöst.

### Der Lagerbestand springt nach dem Speichern einer Charge auf 0

**Symptom**: Nach Bearbeitung einer Charge zeigt das Produkt einen Bestand von 0 oder einen unerwartet niedrigen Wert.

**Ursache**: Die Einstellung *Lagerbestand basierend auf Chargen berechnen* ist aktiv und das Produkt hat entweder kein Gewicht oder alle Chargen sind vollständig verbraucht / inaktiv.

**Lösung**: Entweder das Produktgewicht korrekt setzen, neue aktive Chargen anlegen oder die Einstellung deaktivieren.

### Rückgebuchte Chargen nach Stornierung bleiben leer

**Symptom**: Bei Auftragsstornierung wird die Charge nicht wieder aufgefüllt.

**Lösung**: Stellen Sie sicher, dass:

1. Die Einstellung *Soll die Verwendung von Chargen umgekehrt werden …* aktiv ist.
2. Der gewählte Status (z. B. `Abgebrochen`) in *Auftragsstatus, der eine Chargenbuchung umkehrt* ausgewählt wurde.

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
- [Änderungsprotokoll](../changelog.md)
