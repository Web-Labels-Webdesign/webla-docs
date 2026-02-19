# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Zusatzoptionen Plugin.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

Das Plugin erweitert den Standard-Shopware-Bestellprozess um konfigurierbare Zusatzoptionen:

```
[Kunde wählt Produkt]
    → [Optionen-Sets werden geladen und angezeigt]
    → [Kunde wählt Optionen aus]
    → [Optionen werden zum Warenkorb hinzugefügt]
    → [Preise werden berechnet und validiert]
    → [Bestellung wird erstellt mit allen Optionen]
```

**Beispielablauf**:

1. **Produktseite**: Kunde öffnet die Detailseite eines Laptops
2. **Optionen laden**: Plugin prüft, ob Optionen-Sets für dieses Produkt definiert sind
3. **Filterung**: Plugin filtert Optionen basierend auf:
   - Lieferland des Kunden
   - Gewählte Versandart (falls bereits ausgewählt)
   - Aktiven Regeln
   - Produktinkompatibilitäten
4. **Anzeige**: Gefilterte Optionen werden in Accordion-Containern angezeigt
5. **Auswahl**: Kunde wählt "Garantie 2 Jahre" und "Aufbau-Service"
6. **Warenkorb**: Kunde klickt "In den Warenkorb"
   - Hauptprodukt wird hinzugefügt
   - Gewählte Optionen werden als Kind-Positionen hinzugefügt
7. **Preisberechnung**: Plugin berechnet Gesamtpreis:
   - Laptop: 999,00 €
   - + Garantie 2 Jahre: 49,90 €
   - + Aufbau-Service: 29,90 €
   - = Gesamt: 1.078,80 €
8. **Checkout**: Kunde schließt Bestellung ab
9. **Bestellung**: Alle Positionen (Hauptprodukt + Optionen) werden in der Bestellung gespeichert

**Besonderheiten**:
- Optionen können jederzeit im Warenkorb geändert werden
- Beim Wechsel der Versandart werden Optionen automatisch neu gefiltert
- Beim Wechsel des Lieferlandes werden Preise automatisch angepasst
- Pflichtoptionen werden validiert und verhindern den Checkout bei fehlender Auswahl

---

## Häufige Workflows

### Anleitung: Einfache Zusatzoptionen einrichten

**Ziel**: Einem Produkt Zusatzoptionen hinzufügen (z.B. Garantieverlängerung)

**Zeitaufwand**: 5-10 Minuten

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Sie haben Admin-Zugriff auf Shopware
- Produkte sind bereits angelegt

**Schritte**:

1. **Produkt öffnen**
   - Navigieren zu: `Kataloge → Produkte`
   - Wählen Sie das gewünschte Produkt aus der Liste

2. **Zum Zusatzoptionen-Tab wechseln**
   - Klicken Sie auf den Tab **Zusatzoptionen** in der Produktansicht
   - Falls der Tab nicht sichtbar ist: Plugin-Installation prüfen und Cache leeren

3. **Optionen-Set erstellen**
   - Klicken Sie auf **Optionen-Set hinzufügen**
   - Geben Sie einen Namen ein: z.B. "Garantieverlängerung"
   - Beschreibung (optional): z.B. "Verlängern Sie Ihre Garantie um zusätzliche Jahre"
   - Typ: Wählen Sie **Produkte**
   - Mehrfachauswahl: **Deaktiviert** (nur eine Garantie-Option soll wählbar sein)
   - Klicken Sie auf **Speichern**

4. **Optionen hinzufügen**
   - Im neu erstellten Set: Klicken Sie auf **Option hinzufügen**
   - Wählen Sie ein existierendes Produkt (z.B. "Garantie 2 Jahre - 49,90 €")
   - Aktivieren Sie **Aktiv**
   - Setzen Sie **Sortierung** auf 1
   - Klicken Sie auf **Speichern**
   - Wiederholen Sie den Vorgang für weitere Optionen (z.B. "Garantie 3 Jahre - 79,90 €") mit Sortierung 2

5. **Cache leeren**
   - Navigieren zu: `Einstellungen → System → Caches & Indizes`
   - Klicken Sie auf **Cache leeren**

6. **Testen**
   - Öffnen Sie die Produktseite im Storefront
   - Prüfen Sie, ob die Optionen angezeigt werden
   - Testen Sie die Auswahl und fügen Sie das Produkt zum Warenkorb hinzu
   - Prüfen Sie im Warenkorb, ob Optionen korrekt dargestellt werden

**Ergebnis**: Das Produkt zeigt nun ein Optionen-Set "Garantieverlängerung" mit auswählbaren Garantie-Optionen. Kunden können eine Option wählen und der Preis wird automatisch addiert.

**Fehlerbehebung**:
- Optionen nicht sichtbar? → Cache leeren und Seite neu laden
- Preise fehlen? → Prüfen Sie, ob das gewählte Produkt einen Preis hat
- Set erscheint nicht? → Stellen Sie sicher, dass mindestens eine Option aktiv ist

---

### Anleitung: Länderspezifische Preise einrichten

**Ziel**: Unterschiedliche Preise für Optionen je nach Lieferland festlegen

**Zeitaufwand**: 10-15 Minuten

**Voraussetzungen**:
- Optionen-Set ist bereits erstellt
- Optionen sind hinzugefügt
- Mehrere Länder sind im Verkaufskanal aktiviert

**Schritte**:

1. **Option öffnen**
   - Navigieren zu: `Kataloge → Produkte → [Produkt] → Zusatzoptionen`
   - Öffnen Sie das Optionen-Set
   - Klicken Sie auf die Option, für die Sie länderspezifische Preise festlegen möchten

2. **Länderkonfiguration hinzufügen**
   - Scrollen Sie zum Abschnitt **Länderkonfiguration**
   - Klicken Sie auf **Land hinzufügen**

3. **Land und Preis definieren**
   - Wählen Sie das erste Land aus (z.B. **Deutschland**)
   - Geben Sie den Preis ein: z.B. 29,90 €
   - Klicken Sie auf **Speichern**

4. **Weitere Länder hinzufügen**
   - Wiederholen Sie Schritt 2-3 für weitere Länder:
     - **Österreich**: 49,90 €
     - **Schweiz**: 59,90 CHF
     - **Niederlande**: 34,90 €

5. **Standard-Preis beibehalten**
   - Der Standard-Produktpreis gilt für alle Länder, für die KEIN länderspezifischer Preis definiert wurde
   - Wenn Sie möchten, dass die Option NUR in bestimmten Ländern verfügbar ist:
     - Aktivieren Sie **Nur in konfigurierten Ländern verfügbar**

6. **Testen**
   - Öffnen Sie die Produktseite im Storefront
   - Ändern Sie das Lieferland im Kundenkonto oder während des Checkouts
   - Prüfen Sie, ob der Preis der Option sich entsprechend anpasst

**Ergebnis**: Die Option zeigt automatisch den korrekten Preis basierend auf dem Lieferland des Kunden. Beim Wechsel des Lieferlandes wird der Preis sofort aktualisiert.

**Fehlerbehebung**:
- Preis ändert sich nicht? → Cache leeren und neu laden
- Falscher Preis? → Prüfen Sie die Währungseinstellung des Lieferlandes
- Option nicht verfügbar? → "Nur in konfigurierten Ländern" ist aktiviert - fügen Sie das Land hinzu

---

### Anleitung: Automatische Zuweisung mit dynamischen Produktgruppen

**Ziel**: Optionen-Set automatisch allen Produkten einer Kategorie zuweisen

**Zeitaufwand**: 15-20 Minuten

**Voraussetzungen**:
- Optionen-Set ist bereits erstellt
- Produkte sind kategorisiert
- Sie verstehen die Grundlagen von dynamischen Produktgruppen

**Schritte**:

1. **Produktstream erstellen** (falls noch nicht vorhanden)
   - Navigieren zu: `Kataloge → Dynamische Produktgruppen`
   - Klicken Sie auf **Neue dynamische Produktgruppe**
   - Geben Sie einen Namen ein: z.B. "Elektronik-Produkte über 500 €"
   - Fügen Sie Bedingungen hinzu:
     - Bedingung 1: Kategorie = "Elektronik"
     - Bedingung 2: Preis > 500,00 €
   - Klicken Sie auf **Speichern**
   - Prüfen Sie die Vorschau, ob die richtigen Produkte gefunden werden

2. **Optionen Seeder erstellen**
   - Navigieren zu: `Erweiterungen → Optionen Seeder`
   - Klicken Sie auf **Seeder hinzufügen**

3. **Seeder konfigurieren**
   - **Name**: "Garantie für Elektronik"
   - **Optionen-Set**: Wählen Sie das gewünschte Optionen-Set aus (z.B. "Garantieverlängerung")
   - **Produktstream**: Wählen Sie den in Schritt 1 erstellten Stream
   - **Aktiv**: Aktivieren Sie den Seeder
   - **Priorität**: 1 (niedrigere Zahl = höhere Priorität)
   - **Datum (Von)**: Lassen Sie leer oder setzen Sie ein Startdatum
   - **Datum (Bis)**: Lassen Sie leer oder setzen Sie ein Enddatum für zeitlich begrenzte Aktionen
   - Klicken Sie auf **Speichern**

4. **Synchronisation starten**
   - **Manuell**: Klicken Sie in der Seeder-Liste auf **Synchronisieren** beim erstellten Seeder
   - **Automatisch**: Warten Sie auf die nächste automatische Synchronisation (läuft stündlich)
   - Der Status wechselt auf "In Bearbeitung" und nach Abschluss auf "Fertig"

5. **Ergebnis prüfen**
   - Öffnen Sie ein Produkt, das im Produktstream enthalten ist
   - Wechseln Sie zum Tab **Zusatzoptionen**
   - Das Optionen-Set sollte nun automatisch zugewiesen sein
   - Prüfen Sie 2-3 weitere Produkte zur Sicherheit

6. **Storefront-Test**
   - Öffnen Sie ein Produkt im Storefront
   - Prüfen Sie, ob die Optionen korrekt angezeigt werden
   - Testen Sie die Funktionalität

**Ergebnis**: Das Optionen-Set wird automatisch allen Produkten zugewiesen, die die Bedingungen des Produktstreams erfüllen. Neue Produkte, die später die Bedingungen erfüllen, erhalten das Set bei der nächsten Synchronisation.

**Fehlerbehebung**:
- Seeder läuft nicht? → Prüfen Sie, ob "Aktiv" eingeschaltet ist
- Produkte erhalten das Set nicht? → Prüfen Sie den Produktstream auf korrekte Bedingungen
- Synchronisation dauert lange? → Normal bei großen Produktkatalogen (mehrere tausend Produkte)
- Set wird doppelt zugewiesen? → Prüfen Sie, ob nicht manuell UND per Seeder zugewiesen wurde

---

### Anleitung: Abhängige Optionen erstellen (Mehrstufig)

**Ziel**: Optionen erstellen, die erst erscheinen, wenn eine übergeordnete Option gewählt wurde

**Zeitaufwand**: 15-20 Minuten

**Voraussetzungen**:
- Optionen-Set ist erstellt
- Mindestens eine Option ist vorhanden

**Beispiel-Szenario**:
```
Ebene 1: "Möchten Sie eine Garantieverlängerung?" (Ja/Nein)
  └─ Ebene 2: "Wählen Sie die Garantiedauer" (2 Jahre / 3 Jahre)
      └─ Ebene 3: "Mit Vor-Ort-Service?" (Ja / Nein)
```

**Schritte**:

1. **Ebene 1: Hauptoption erstellen**
   - Navigieren zu: `Kataloge → Produkte → [Produkt] → Zusatzoptionen`
   - Öffnen Sie das Optionen-Set
   - Klicken Sie auf **Option hinzufügen**
   - Wählen Sie ein Produkt: z.B. "Garantie Basis" (Preis: 0,00 €)
   - **Aktiv**: Aktiviert
   - **Automatisch ausgewählt**: Deaktiviert
   - Notieren Sie sich die **ID** dieser Option (wird später benötigt)
   - Klicken Sie auf **Speichern**

2. **Ebene 2: Abhängige Option erstellen**
   - Klicken Sie erneut auf **Option hinzufügen**
   - Wählen Sie ein Produkt: z.B. "Garantie 2 Jahre" (Preis: 49,90 €)
   - **Aktiv**: Aktiviert
   - Scrollen Sie zum Abschnitt **Anforderungen**
   - **Anforderung - Parent ID**: Geben Sie die ID aus Schritt 1 ein
   - **Anforderung - aktiv**: Aktiviert (Option muss aktiv sein)
   - **Anforderung - ausgewählt**: Aktiviert (übergeordnete Option muss ausgewählt sein)
   - Klicken Sie auf **Speichern**

3. **Weitere Ebene-2-Option hinzufügen**
   - Wiederholen Sie Schritt 2 für "Garantie 3 Jahre" (Preis: 79,90 €)
   - Verwenden Sie die gleiche Parent ID
   - Klicken Sie auf **Speichern**

4. **Ebene 3: Noch tiefere Abhängigkeit**
   - Notieren Sie sich die ID von "Garantie 2 Jahre" aus Schritt 2
   - Klicken Sie auf **Option hinzufügen**
   - Wählen Sie ein Produkt: z.B. "Vor-Ort-Service" (Preis: 39,90 €)
   - **Aktiv**: Aktiviert
   - **Anforderung - Parent ID**: Geben Sie die ID von "Garantie 2 Jahre" ein
   - **Anforderung - ausgewählt**: Aktiviert
   - Klicken Sie auf **Speichern**

5. **Logik-Test im Backend**
   - Die Optionen-Hierarchie sollte nun wie folgt aussehen:
     ```
     Garantie Basis (ID: 123)
       ├─ Garantie 2 Jahre (ID: 124) [Parent: 123]
       │   └─ Vor-Ort-Service (ID: 126) [Parent: 124]
       └─ Garantie 3 Jahre (ID: 125) [Parent: 123]
     ```

6. **Storefront-Test**
   - Öffnen Sie die Produktseite im Storefront
   - Zunächst sollte nur "Garantie Basis" sichtbar sein
   - **Test 1**: Wählen Sie "Garantie Basis"
     - → "Garantie 2 Jahre" und "Garantie 3 Jahre" werden angezeigt
   - **Test 2**: Wählen Sie "Garantie 2 Jahre"
     - → "Vor-Ort-Service" wird angezeigt
   - **Test 3**: Wählen Sie "Garantie 2 Jahre" ab
     - → "Vor-Ort-Service" verschwindet wieder

**Ergebnis**: Die Optionen erscheinen schrittweise basierend auf der Auswahl des Kunden. Dies reduziert die Komplexität und führt den Kunden durch den Auswahlprozess.

**Fehlerbehebung**:
- Abhängige Option erscheint nicht? → Prüfen Sie die Parent ID (muss exakt übereinstimmen)
- Option erscheint immer? → "Anforderung - ausgewählt" muss aktiviert sein
- Falsche Hierarchie? → Notieren Sie alle IDs und prüfen Sie die Parent-Verknüpfungen

---

### Anleitung: Inkompatible Optionen definieren

**Ziel**: Verhindern, dass bestimmte Optionen gleichzeitig gewählt werden können

**Zeitaufwand**: 5-10 Minuten

**Voraussetzungen**:
- Optionen-Set mit mehreren Optionen ist vorhanden

**Schritte**:

1. **Erste Option öffnen**
   - Navigieren zu: `Kataloge → Produkte → [Produkt] → Zusatzoptionen`
   - Öffnen Sie das Optionen-Set (z.B. "Garantieverlängerung")
   - Klicken Sie auf die erste Option (z.B. "Garantie 2 Jahre")

2. **Inkompatible Produkte definieren**
   - Scrollen Sie zum Abschnitt **Inkompatible Produkte**
   - Klicken Sie auf **Produkt hinzufügen**
   - Wählen Sie die Produkte aus, die nicht gleichzeitig wählbar sein sollen:
     - z.B. "Garantie 3 Jahre" (ID: xyz)
   - Klicken Sie auf **Speichern**

3. **Gegenseitige Inkompatibilität einrichten**
   - Öffnen Sie nun die zweite Option (z.B. "Garantie 3 Jahre")
   - Scrollen Sie zum Abschnitt **Inkompatible Produkte**
   - Klicken Sie auf **Produkt hinzufügen**
   - Wählen Sie die erste Option: "Garantie 2 Jahre"
   - Klicken Sie auf **Speichern**
   - **Wichtig**: Inkompatibilität muss in BEIDE Richtungen definiert werden

4. **Optionen-Set anpassen**
   - Stellen Sie sicher, dass das Set auf **Mehrfachauswahl** eingestellt ist
   - Bei Einzelauswahl (Radio Buttons) ist Inkompatibilität nicht notwendig

5. **Testen**
   - Öffnen Sie die Produktseite im Storefront
   - **Test 1**: Wählen Sie "Garantie 2 Jahre"
     - → "Garantie 3 Jahre" wird ausgegraut
   - **Test 2**: Entfernen Sie "Garantie 2 Jahre"
     - → "Garantie 3 Jahre" wird wieder wählbar
   - **Test 3**: Wählen Sie "Garantie 3 Jahre"
     - → "Garantie 2 Jahre" wird ausgegraut

**Ergebnis**: Kunden können nur eine der inkompatiblen Optionen wählen. Wenn sie eine Option auswählen, werden die inkompatiblen Optionen automatisch ausgegraut und können nicht mehr gewählt werden.

**Fehlerbehebung**:
- Inkompatibilität funktioniert nur einseitig? → Prüfen Sie, ob beide Richtungen definiert sind
- Optionen sind immer ausgegraut? → Prüfen Sie, ob versehentlich zu viele Inkompatibilitäten definiert wurden
- Keine Auswirkung? → Cache leeren und Seite neu laden

---

### Anleitung: Mengenbasierte Preise einrichten

**Ziel**: Rabatte für höhere Mengen eines Hauptprodukts auf die Optionen anwenden

**Zeitaufwand**: 10-15 Minuten

**Voraussetzungen**:
- Optionen-Set mit Optionen ist vorhanden
- Sie verstehen die Mengenstaffelung in Shopware

**Beispiel-Szenario**:
```
Kunde kauft 1-5 Laptops    → Garantie kostet 49,90 € pro Stück
Kunde kauft 6-10 Laptops   → Garantie kostet 44,90 € pro Stück
Kunde kauft 11+ Laptops    → Garantie kostet 39,90 € pro Stück
```

**Schritte**:

1. **Option öffnen**
   - Navigieren zu: `Kataloge → Produkte → [Produkt] → Zusatzoptionen`
   - Öffnen Sie das Optionen-Set
   - Klicken Sie auf die Option, für die Sie Staffelpreise einrichten möchten

2. **Preisstaffelung hinzufügen - Staffel 1**
   - Scrollen Sie zum Abschnitt **Preisstaffelung**
   - Klicken Sie auf **Preis hinzufügen**
   - **Von Menge**: 1
   - **Bis Menge**: 5
   - **Preis**: 49,90 €
   - Klicken Sie auf **Speichern**

3. **Weitere Staffeln hinzufügen - Staffel 2**
   - Klicken Sie erneut auf **Preis hinzufügen**
   - **Von Menge**: 6
   - **Bis Menge**: 10
   - **Preis**: 44,90 €
   - Klicken Sie auf **Speichern**

4. **Weitere Staffeln hinzufügen - Staffel 3**
   - Klicken Sie erneut auf **Preis hinzufügen**
   - **Von Menge**: 11
   - **Bis Menge**: Lassen Sie leer (bedeutet: ab 11 ohne obere Grenze)
   - **Preis**: 39,90 €
   - Klicken Sie auf **Speichern**

5. **Übersicht prüfen**
   - Die Staffeln sollten nun vollständig sein:
     ```
     Staffel 1:  1-5 Stück   → 49,90 €
     Staffel 2:  6-10 Stück  → 44,90 €
     Staffel 3:  11+ Stück   → 39,90 €
     ```

6. **Testen**
   - Öffnen Sie die Produktseite im Storefront
   - **Test 1**: Fügen Sie 3 Laptops mit Garantie zum Warenkorb hinzu
     - → Preis pro Garantie: 49,90 €
   - **Test 2**: Erhöhen Sie die Menge auf 7 Laptops
     - → Preis pro Garantie: 44,90 €
   - **Test 3**: Erhöhen Sie die Menge auf 12 Laptops
     - → Preis pro Garantie: 39,90 €

**Ergebnis**: Die Optionspreise passen sich automatisch der Menge des Hauptprodukts an. Kunden erhalten automatisch Rabatte bei höheren Mengen.

**Fehlerbehebung**:
- Preis ändert sich nicht? → Cache leeren und Warenkorb neu laden
- Falscher Preis? → Prüfen Sie die Mengenbereiche auf Überschneidungen oder Lücken
- Staffeln greifen zu früh/spät? → Prüfen Sie die "Von/Bis Menge"-Werte

---

### Anleitung: Pflichtoptionen einrichten

**Ziel**: Kunden zwingen, eine Option auszuwählen, bevor sie das Produkt kaufen können

**Zeitaufwand**: 5 Minuten

**Voraussetzungen**:
- Optionen-Set ist vorhanden
- Set ist auf **Einzelauswahl** (nicht Mehrfachauswahl) eingestellt

**Schritte**:

1. **Option öffnen**
   - Navigieren zu: `Kataloge → Produkte → [Produkt] → Zusatzoptionen`
   - Öffnen Sie das Optionen-Set
   - Klicken Sie auf die Option, die Pflicht werden soll

2. **Pflichtfeld aktivieren**
   - Aktivieren Sie die Checkbox **Erforderlich**
   - Optional: Aktivieren Sie auch **Automatisch ausgewählt** (empfohlen)
   - Klicken Sie auf **Speichern**

3. **Set-Einstellungen anpassen**
   - Öffnen Sie die Einstellungen des Optionen-Sets
   - Aktivieren Sie **Container geöffnet**
   - Dies stellt sicher, dass die Pflichtoptionen sofort sichtbar sind
   - Klicken Sie auf **Speichern**

4. **Testen - Validierung**
   - Öffnen Sie die Produktseite im Storefront
   - Die Pflicht-Option sollte vorausgewählt und ausgegraut sein
   - Versuchen Sie, das Produkt OHNE eine andere Option zu wählen, in den Warenkorb zu legen
   - Es sollte funktionieren, da die Pflicht-Option bereits ausgewählt ist
   - Wählen Sie eine andere Option (bei Einzelauswahl wird die Pflicht-Option abgewählt)
   - Versuchen Sie nun, das Produkt in den Warenkorb zu legen
   - Eine Fehlermeldung sollte erscheinen: "Bitte wählen Sie eine Option aus dem Set..."

5. **Warenkorb-Validierung testen**
   - Fügen Sie das Produkt mit einer gewählten Option zum Warenkorb hinzu
   - Versuchen Sie im Warenkorb, die Option zu entfernen
   - Eine Validierungsmeldung sollte erscheinen

**Ergebnis**: Kunden müssen zwingend eine Option aus dem Set wählen, bevor sie das Produkt kaufen können. Dies ist nützlich für gesetzlich vorgeschriebene Optionen oder Produkt-Konfigurationen.

**Fehlerbehebung**:
- Validierung funktioniert nicht? → Prüfen Sie, ob "Erforderlich" wirklich aktiviert ist
- Option kann trotzdem abgewählt werden? → Prüfen Sie, ob das Set auf "Einzelauswahl" steht
- Fehlermeldung erscheint nicht? → Cache leeren und erneut testen

---

## Erweiterte Workflows

### Zeitgesteuerte Optionen mit Seeder

**Komplexität**: Mittel

**Wann zu verwenden**: Saisonale Angebote oder zeitlich begrenzte Services (z.B. "Weihnachts-Geschenkverpackung nur im Dezember")

**Schritte**:

1. Erstellen Sie ein Optionen-Set mit zeitlich begrenzten Optionen
2. Erstellen Sie einen Optionen Seeder unter `Erweiterungen → Optionen Seeder`
3. Wählen Sie das Optionen-Set und einen Produktstream
4. Setzen Sie **Datum (Von)**: z.B. 01.12.2026
5. Setzen Sie **Datum (Bis)**: z.B. 31.12.2026
6. Aktivieren Sie den Seeder
7. Der Seeder weist die Optionen nur im definierten Zeitraum automatisch zu
8. Nach Ablauf des Datums werden die Optionen automatisch wieder entfernt

**Hinweis**: Die Synchronisation erfolgt automatisch. Planen Sie den Startzeitpunkt rechtzeitig ein.

---

### Regel-basierte dynamische Preise

**Komplexität**: Hoch

**Wann zu verwenden**: Kundengruppen-spezifische Preise oder warenkorbwert-abhängige Rabatte

**Schritte**:

1. Erstellen Sie eine Regel unter `Einstellungen → Shopware → Regeln`:
   - Name: z.B. "Kostenloser Service ab 1.000 € Warenkorbwert"
   - Bedingung: "Warenkorbwert >= 1.000 €"
2. Erstellen Sie eine zweite Regel:
   - Name: z.B. "Deaktiviere Service unter 1.000 €"
   - Bedingung: "Warenkorbwert < 1.000 €"
3. Verknüpfen Sie die zweite Regel mit einer Option:
   - Öffnen Sie die Option im Bearbeitungsmodus
   - **Deaktivieren durch Regel**: Wählen Sie "Deaktiviere Service unter 1.000 €"
4. Erstellen Sie eine Aktion für den kostenlosen Service:
   - `Marketing → Aktionen`
   - Neue Aktion erstellen
   - Regel: "Kostenloser Service ab 1.000 € Warenkorbwert"
   - Rabatt: 100% auf spezifisches Produkt (Service-Option)
5. Testen Sie mit unterschiedlichen Warenkorbwerten

---

## Schnellreferenz

| Aufgabe                      | Wichtige Schritte                                                               | Erforderliche Einstellungen              |
| ---------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------- |
| Einfache Optionen hinzufügen | Produkt öffnen → Zusatzoptionen-Tab → Set erstellen → Optionen hinzufügen       | Aktiv, Sortierung                        |
| Länderspezifische Preise     | Option öffnen → Länderkonfiguration → Land + Preis hinzufügen                   | Land, Preis                              |
| Automatische Zuweisung       | Produktstream erstellen → Seeder erstellen → Synchronisieren                    | Aktiv, Produktstream                     |
| Abhängige Optionen           | Parent-Option erstellen → Kind-Option mit Parent ID verknüpfen                  | Parent ID, Anforderung ausgewählt        |
| Inkompatible Optionen        | Option A → Inkompatibilität zu B hinzufügen → Option B → Inkompatibilität zu A  | Inkompatible Produkte (beide Richtungen) |
| Mengenstaffel-Preise         | Option öffnen → Preisstaffelung → Mehrere Staffeln mit Von/Bis-Menge            | Von/Bis Menge, Preis                     |
| Pflichtoptionen              | Option öffnen → "Erforderlich" aktivieren → Set "Container geöffnet" aktivieren | Erforderlich, Container geöffnet         |
| Versandbeschränkungen        | Option öffnen → Versandmethoden → Erlaubte Methoden auswählen                   | Versandmethoden                          |

---

## Best Practices

1. **Klare Namensgebung**: Verwenden Sie aussagekräftige Namen für Sets und Optionen (z.B. "Garantieverlängerung 2 Jahre" statt "Option 1")

2. **Testen vor Live-Schaltung**: Testen Sie alle Optionen gründlich im Storefront, bevor Sie sie für Kunden freigeben

3. **Cache-Management**: Leeren Sie immer den Cache nach Änderungen an Optionen oder Seedern

4. **Preisstaffelung sinnvoll nutzen**: Definieren Sie lückenlose Mengenbereiche, um Preissprünge zu vermeiden

5. **Visuelle Hierarchie**: Nutzen Sie die Sortierung, um wichtigere Optionen weiter oben anzuzeigen

6. **Produktstreams validieren**: Prüfen Sie Produktstreams in der Vorschau, bevor Sie sie in Seedern verwenden

7. **Inkompatibilitäten dokumentieren**: Halten Sie fest, welche Optionen sich gegenseitig ausschließen - dies hilft bei zukünftigen Anpassungen

8. **Pflichtfelder sparsam einsetzen**: Verwenden Sie Pflichtfelder nur, wenn wirklich erforderlich - zu viele Pflichtfelder können Kunden abschrecken

9. **Container-Öffnung**: Aktivieren Sie "Container geöffnet" nur bei wichtigen Sets (Pflichtfelder) - zu viele geöffnete Container wirken überladen

10. **Versandbeschränkungen kommunizieren**: Informieren Sie Kunden in der Set-Beschreibung, wenn Optionen versandartabhängig sind

## Was Sie vermeiden sollten

- ❌ **Zu viele Optionen pro Set**: Mehr als 5-7 Optionen werden unübersichtlich - teilen Sie lieber in mehrere Sets auf
- ❌ **Überschneidende Mengenstaffeln**: Vermeiden Sie Lücken oder Überlappungen in den Mengenbereichen (z.B. 1-5 und 4-10)
- ❌ **Zirkuläre Abhängigkeiten**: Option A darf nicht von Option B abhängen, wenn Option B von Option A abhängt
- ❌ **Fehlende Gegenrichtung bei Inkompatibilitäten**: Wenn Option A inkompatibel mit B ist, muss auch B inkompatibel mit A sein
- ❌ **Cache nicht leeren**: Nach Änderungen IMMER den Cache leeren, sonst werden Änderungen nicht sichtbar
- ❌ **Ungetestete Produktstreams**: Testen Sie Produktstreams immer, bevor Sie sie in Seedern verwenden - fehlerhafte Streams können zu falschen Zuweisungen führen
- ❌ **Preis 0,00 € bei kostenlosen Optionen ohne Regel**: Besser: Erstellen Sie eine Regel für "kostenlos" - so bleibt nachvollziehbar, warum die Option kostenlos ist
