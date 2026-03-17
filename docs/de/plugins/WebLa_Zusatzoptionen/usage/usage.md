# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten des Zusatzoptionen Plugins.

---

## Inhaltsverzeichnis

- [Optionen-Sets erstellen und verwalten](#optionen-sets-erstellen-und-verwalten)
- [Optionen hinzufügen und konfigurieren](#optionen-hinzufügen-und-konfigurieren)
- [Preisgestaltung](#preisgestaltung)
- [Versandbeschränkungen](#versandbeschränkungen)
- [Länderspezifische Konfiguration](#länderspezifische-konfiguration)
- [Produktabhängigkeiten und Inkompatibilitäten](#produktabhängigkeiten-und-inkompatibilitäten)
- [Automatische Zuweisung mit Optionen Seeder](#automatische-zuweisung-mit-optionen-seeder)
- [Mengenauswahl](#mengenauswahl)
- [Pflichtfelder und Anforderungen](#pflichtfelder-und-anforderungen)
- [Rule-Builder-Integration](#rule-builder-integration)
- [Storefront-Funktionen](#storefront-funktionen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Optionen-Sets erstellen und verwalten

### Was sind Optionen-Sets?

Optionen-Sets sind Container für zusammengehörige Zusatzoptionen. Ein Set kann beispielsweise "Garantieverlängerungen" oder "Vor-Ort-Services" heißen und mehrere auswählbare Optionen enthalten.

### So erstellen Sie ein Optionen-Set

1. Navigieren Sie zu `Kataloge → Produkte`
2. Wählen Sie ein Produkt aus, dem Sie Zusatzoptionen hinzufügen möchten
3. Wechseln Sie zum Tab **Zusatzoptionen**
4. Klicken Sie auf **Optionen-Set hinzufügen**
5. Geben Sie folgende Informationen ein:
   - **Name**: Anzeigename des Sets (z.B. "Garantieverlängerung")
   - **Beschreibung** (optional): Zusätzliche Informationen für den Kunden
   - **Typ**:
     - `Produkte`: Nutzen Sie bestehende Produkte als Optionen
     - `Textfeld`: Ermöglichen Sie Freitexteingaben (z.B. Gravur-Text)
   - **Mehrfachauswahl**: Aktivieren, wenn mehrere Optionen gleichzeitig gewählt werden können

### Optionen-Set-Einstellungen

**Ort**: Kataloge → Produkte → [Produkt] → Zusatzoptionen

| Einstellung             | Beschreibung                                                                  |
| ----------------------- | ----------------------------------------------------------------------------- |
| **Name**                | Wird dem Kunden auf der Produktseite und im Warenkorb angezeigt               |
| **Beschreibung**        | Optional: Zusatztext unter dem Namen                                          |
| **Typ**                 | `Produkte` für produktbasierte Optionen oder `Textfeld` für Eingabefelder     |
| **Mehrfachauswahl**     | Erlaubt Auswahl mehrerer Optionen statt nur einer                             |
| **Sortierung**          | Reihenfolge, in der die Sets angezeigt werden (niedrigere Zahl = weiter oben) |
| **Bild anzeigen**       | Zeigt Produktbilder bei den Optionen an                                       |
| **Hersteller anzeigen** | Zeigt Herstellernamen bei den Optionen an                                     |
| **Mengenauswahl**       | Erlaubt dem Kunden, die Menge für alle Optionen in diesem Set zu wählen       |
| **Container geöffnet**  | Set ist standardmäßig aufgeklappt (empfohlen bei Pflichtfeldern)              |
| **Beschreibungspfad**   | Produktfeld-Pfad (z.B. `description`), um Optionsbeschreibungen automatisch vom verknüpften Produkt zu übernehmen — wird als Tooltip-Icon (?) neben dem Optionsnamen angezeigt |

### Tipps & Best Practices

- Gruppieren Sie thematisch zusammengehörige Optionen in einem Set
- Verwenden Sie aussagekräftige Namen wie "Garantieverlängerung" statt "Optionen 1"
- Aktivieren Sie "Container geöffnet" bei Sets mit Pflichtfeldern, damit Kunden diese sofort sehen
- Nutzen Sie die Sortierung, um wichtigere Sets weiter oben anzuzeigen

---

## Optionen hinzufügen und konfigurieren

### Option zu einem Set hinzufügen

1. Öffnen Sie ein Optionen-Set in der Produktansicht (`Kataloge → Produkte → [Produkt] → Zusatzoptionen`)
2. Klicken Sie auf **Option hinzufügen**
3. Wählen Sie ein bestehendes Produkt aus oder erstellen Sie eine benutzerdefinierte Option
4. Konfigurieren Sie die Option:
   - **Produkt**: Wählen Sie das Produkt, das als Option dienen soll
   - **Aktiv**: Nur aktive Optionen werden angezeigt und können gewählt werden
   - **Automatisch ausgewählt**: Option ist beim Laden der Seite bereits vorausgewählt
   - **Erforderlich**: Kunde muss diese Option auswählen (funktioniert nur bei Einzelauswahl)
   - **Sortierung**: Reihenfolge innerhalb des Sets

### Erklärungs-/Beschreibungstexte

Jede Option kann einen Beschreibungstext haben, der als Tooltip-Icon (?) neben dem Optionsnamen im Storefront angezeigt wird. Es gibt zwei Wege, Beschreibungen bereitzustellen:

**Beschreibung auf Options-Ebene** (individueller Text pro Option):
1. Öffnen Sie die Option im Bearbeitungsmodus
2. Geben Sie Text im Feld **Beschreibung** ein (z.B. "Verlängert die Garantie um 2 weitere Jahre")
3. Dieser Text wird als Tooltip angezeigt, wenn der Kunde über das (?)-Icon hovert

**Beschreibungspfad auf Set-Ebene** (automatisch vom Produkt übernommen):
1. Öffnen Sie die Optionen-Set-Einstellungen
2. Geben Sie einen Produktfeld-Pfad im Feld **Beschreibungspfad** ein (z.B. `description`)
3. Für jede Option im Set wird die Beschreibung automatisch vom verknüpften Produkt übernommen
4. Hat eine Option zusätzlich eine eigene Beschreibung, hat die eigene Beschreibung Vorrang

**Anwendungsbeispiele**:
- Verwenden Sie Beschreibungen auf Options-Ebene für individuelle Erklärungstexte (z.B. "Beinhaltet Vor-Ort-Reparatur innerhalb von 48 Stunden")
- Verwenden Sie den Beschreibungspfad `description`, um Produktbeschreibungen automatisch als Tooltips für produktbasierte Optionen anzuzeigen

### Optionen mit Textfeld-Eingabe

Für individuelle Kundeneingaben (z.B. Gravuren):

1. Erstellen Sie ein Optionen-Set mit Typ `Textfeld`
2. Fügen Sie eine Option hinzu
3. Aktivieren Sie **Textfeld aktivieren**
4. Der Kunde kann dann beim Auswählen der Option einen Freitext eingeben

**Anwendungsbeispiele**:
- Gravur-Text für Schmuck
- Personalisierte Widmungen für Geschenke
- Sonderwünsche für Dienstleistungen

---

## Preisgestaltung

### Einfache Preisgestaltung

Wenn Sie ein bestehendes Produkt als Option verwenden, wird automatisch dessen Preis übernommen.

**Beispiel**: Ein Produkt "Garantie 2 Jahre" mit Preis 49,90 € wird als Option mit 49,90 € angezeigt.

### Mengenstaffel-Preise

Sie können unterschiedliche Preise basierend auf der Bestellmenge festlegen:

1. Öffnen Sie die Option im Bearbeitungsmodus
2. Wechseln Sie zum Abschnitt **Preisstaffelung**
3. Klicken Sie auf **Preis hinzufügen**
4. Definieren Sie:
   - **Von Menge**: Ab welcher Menge gilt dieser Preis
   - **Bis Menge**: Bis zu welcher Menge gilt dieser Preis (optional)
   - **Preis**: Der Preis für diesen Mengenbereich

**Beispiel - Mengenrabatt**:
```
Menge 1-5:   49,90 € pro Stück
Menge 6-10:  44,90 € pro Stück
Menge 11+:   39,90 € pro Stück
```

**Hinweis**: Die Mengenstaffelung bezieht sich auf die Gesamtmenge des Hauptprodukts im Warenkorb, nicht auf die Menge der Option selbst.

### Preisberechnung im Warenkorb

Die Preise der Optionen werden automatisch zum Produktpreis hinzuaddiert:

```
Laptop:             999,00 €
+ Garantie 2 Jahre:  49,90 €
+ Aufbau-Service:    29,90 €
= Gesamt:         1.078,80 €
```

Im Warenkorb werden alle Positionen einzeln mit Sternchenhinweis (*) auf die Mehrwertsteuer angezeigt.

---

## Versandbeschränkungen

### Optionen auf bestimmte Versandarten beschränken

Sie können festlegen, dass bestimmte Optionen nur bei bestimmten Versandarten verfügbar sind:

1. Öffnen Sie die Option im Bearbeitungsmodus
2. Wechseln Sie zum Abschnitt **Versandmethoden**
3. Klicken Sie auf **Versandmethode hinzufügen**
4. Wählen Sie die erlaubten Versandmethoden aus

**Anwendungsbeispiel**:
- "Aufbau-Service" nur bei Versandart "Spedition" verfügbar
- "Express-Lieferung" nur bei Versandart "DHL Express" verfügbar

**Funktionsweise**:
- Wenn der Kunde eine Versandart wählt, bei der die Option nicht verfügbar ist, wird die Option ausgeblendet oder deaktiviert
- Bereits gewählte Optionen werden automatisch aus dem Warenkorb entfernt, wenn die Versandart gewechselt wird

### Globale Versandbeschränkungen für Optionen-Sets

Sie können auch auf Set-Ebene Versandbeschränkungen definieren:

1. Öffnen Sie das Optionen-Set
2. Wechseln Sie zum Abschnitt **Versandmethoden**
3. Wählen Sie erlaubte oder ausgeschlossene Versandmethoden

Dies wirkt sich auf alle Optionen im Set aus.

---

## Länderspezifische Konfiguration

### Unterschiedliche Preise je Land

Sie können für jede Option länderspezifische Preise definieren:

1. Öffnen Sie die Option im Bearbeitungsmodus
2. Wechseln Sie zum Abschnitt **Länderkonfiguration**
3. Klicken Sie auf **Land hinzufügen**
4. Wählen Sie das Land und geben Sie den spezifischen Preis ein

**Beispiel**:
```
Aufbau-Service:
- Deutschland:  29,90 €
- Österreich:   49,90 €
- Schweiz:      69,90 CHF
```

**Funktionsweise**:
- Der Preis wird automatisch angepasst, wenn der Kunde das Lieferland im Checkout ändert
- Wenn kein länderspezifischer Preis definiert ist, wird der Standard-Produktpreis verwendet

### Optionen nur in bestimmten Ländern verfügbar machen

1. Öffnen Sie die Option im Bearbeitungsmodus
2. Wechseln Sie zum Abschnitt **Länderkonfiguration**
3. Fügen Sie nur die Länder hinzu, in denen die Option verfügbar sein soll
4. Aktivieren Sie **Nur in konfigurierten Ländern verfügbar**

**Anwendungsbeispiel**:
- "2-Mann-Lieferung" nur in Deutschland und Österreich verfügbar
- "Zollabwicklung" nur bei Lieferung in die Schweiz

### Postleitzahlen-basierte Verfügbarkeit

Für noch genauere Einschränkungen können Sie Postleitzahlen-Bereiche definieren:

1. Öffnen Sie die Option im Bearbeitungsmodus
2. Wechseln Sie zum Abschnitt **Postleitzahlenkonfiguration**
3. Klicken Sie auf **Postleitzahl hinzufügen**
4. Geben Sie Von- und Bis-Postleitzahl ein (z.B. 10000 - 19999 für Berlin)

**Anwendungsbeispiel**:
- "Aufbau-Service" nur in Postleitzahlen-Bereichen verfügbar, die von Ihrem Service-Team bedient werden

---

## Produktabhängigkeiten und Inkompatibilitäten

### Abhängige Optionen (bis zu 3 Ebenen)

Sie können Optionen erstellen, die erst sichtbar werden, wenn eine übergeordnete Option ausgewählt wurde.

**Beispiel - 3-stufige Abhängigkeit**:
```
Ebene 1: Garantieverlängerung (Ja/Nein)
  └─ Ebene 2: Garantie 2 Jahre / Garantie 3 Jahre
      └─ Ebene 3: Mit Vor-Ort-Service / Ohne Vor-Ort-Service
```

**So erstellen Sie abhängige Optionen**:

1. Erstellen Sie zunächst die übergeordnete Option (Ebene 1)
2. Erstellen Sie die abhängige Option (Ebene 2)
3. Setzen Sie im Feld **Anforderung - Parent ID** die ID der übergeordneten Option
4. Die abhängige Option wird erst angezeigt, wenn die übergeordnete Option ausgewählt wurde

**Anforderungsfelder**:
- **Anforderung - Parent ID**: ID der übergeordneten Option
- **Anforderung - aktiv**: Option muss aktiv sein, damit abhängige Optionen erscheinen
- **Anforderung - ausgewählt**: Übergeordnete Option muss ausgewählt sein

### Inkompatible Produkte definieren

Sie können festlegen, dass bestimmte Optionen sich gegenseitig ausschließen:

1. Öffnen Sie die Option im Bearbeitungsmodus
2. Wechseln Sie zum Abschnitt **Inkompatible Produkte**
3. Klicken Sie auf **Produkt hinzufügen**
4. Wählen Sie die Produkte aus, die nicht gleichzeitig mit dieser Option gewählt werden können

**Funktionsweise**:
- Wenn Kunde Option A auswählt, wird Option B automatisch ausgegraut und kann nicht mehr gewählt werden
- Dies funktioniert auch umgekehrt: Wenn B ausgewählt ist, wird A ausgegraut

**Anwendungsbeispiele**:
- Garantie 2 Jahre und Garantie 3 Jahre schließen sich gegenseitig aus
- "Express-Lieferung" und "Abholung im Geschäft" sind nicht kombinierbar

---

## Automatische Zuweisung mit Optionen Seeder

### Was ist der Optionen Seeder?

Der Optionen Seeder ermöglicht es Ihnen, Optionen-Sets automatisch mehreren Produkten zuzuweisen, ohne jedes Produkt einzeln bearbeiten zu müssen. Dies ist besonders nützlich bei großen Produktkatalogen.

**Ort**: Erweiterungen → Optionen Seeder

### Seeder erstellen

1. Navigieren Sie zu `Erweiterungen → Optionen Seeder`
2. Klicken Sie auf **Seeder hinzufügen**
3. Konfigurieren Sie den Seeder:
   - **Name**: Interner Name (z.B. "Garantie für Elektronik")
   - **Optionen-Set**: Wählen Sie das Optionen-Set aus, das zugewiesen werden soll
   - **Produktstream**: Wählen Sie einen bestehenden Produktstream oder erstellen Sie einen neuen
   - **Aktiv**: Aktivieren, um die automatische Zuweisung zu starten
   - **Priorität**: Bei mehreren Seedern bestimmt die Priorität die Reihenfolge
   - **Datum (Von/Bis)**: Optional zeitgesteuerte Zuweisung
   - **Produkte ausschließen**: Wählen Sie bestimmte Produkte aus, die das Optionen-Set NICHT erhalten sollen, auch wenn sie dem Produktstream entsprechen

### Produktstreams nutzen

Produktstreams sind dynamische Produktgruppen, die auf Bedingungen basieren:

**Beispiel - Produktstream für Elektronik**:
```
Bedingungen:
- Kategorie = "Elektronik"
- Preis > 500 €
- Auf Lager = Ja
```

Alle Produkte, die diese Bedingungen erfüllen, erhalten automatisch das zugewiesene Optionen-Set.

### Seeder-Synchronisation

Die Zuweisung erfolgt:
- **Automatisch**: Über einen Scheduled Task (läuft stündlich im Hintergrund)
- **Manuell**: Klicken Sie auf "Synchronisieren" in der Seeder-Liste

**Wichtig**: Nach dem Erstellen oder Ändern eines Seeders dauert es bis zur nächsten automatischen Synchronisation, oder Sie starten die manuelle Synchronisation.

### Mehrfachauswahl bei Seeder

Seit Version 3.1.14 können Sie mehrere Produktstreams pro Seeder auswählen:

1. Aktivieren Sie **Mehrfachauswahl** im Seeder
2. Fügen Sie mehrere Produktstreams hinzu
3. Das Optionen-Set wird allen Produkten zugewiesen, die in mindestens einem der ausgewählten Streams enthalten sind

**Anwendungsbeispiel**:
```
Seeder: "Garantie-Angebot"
Produktstreams:
- Elektronik über 500 €
- Haushaltsgeräte alle Preisklassen
- Werkzeuge Premium-Kategorie
```

### Massen-Aktionen für Seeder

Die Seeder-Liste unterstützt Massenaktionen zur Verwaltung mehrerer Seeder auf einmal:

1. Wählen Sie einen oder mehrere Seeder über die Checkboxen in der Liste aus
2. Öffnen Sie das Massenaktionen-Menü und wählen Sie:
   - **Jetzt synchronisieren**: Löst die Synchronisation für die ausgewählten Seeder sofort aus — ohne auf den stündlichen Scheduled Task warten zu müssen
   - **Seeder zurücksetzen**: Entfernt alle vom Seeder erstellten Optionen-Set-Zuweisungen und stellt sie zur erneuten Synchronisation in die Warteschlange. Vor dem Zurücksetzen wird ein Bestätigungsdialog angezeigt.

**Wann Zurücksetzen verwenden**:
- Nach Änderungen der Produktstream-Bedingungen eines Seeders
- Wenn Zuweisungen nicht mehr synchron sind und neu aufgebaut werden müssen
- Nach dem Ausschließen von Produkten, um zuvor zugewiesene Optionen zu entfernen

### Tipps & Best Practices

- Testen Sie Produktstreams zunächst unter `Kataloge → Dynamische Produktgruppen`, bevor Sie sie im Seeder verwenden
- Verwenden Sie aussagekräftige Namen für Seeder, um sie später leicht zuordnen zu können
- Prüfen Sie nach der Synchronisation einzelne Produkte, um sicherzustellen, dass die Zuweisung korrekt funktioniert
- Nutzen Sie das Datum-Feld für zeitlich begrenzte Aktionen (z.B. "Weihnachts-Service-Paket")
- Verwenden Sie **Produkte ausschließen** für individuelle Ausnahmen statt komplexer Stream-Bedingungen

---

## Mengenauswahl

### Mengenauswahl für Optionen aktivieren

Sie können Kunden erlauben, die Menge einer Option zu wählen (z.B. 2x Garantieverlängerung bei 2 Laptops):

**Auf Set-Ebene**:
1. Öffnen Sie das Optionen-Set
2. Aktivieren Sie **Mengenauswahl**
3. Alle Optionen in diesem Set erhalten automatisch Mengenauswahlfelder

**Auf Options-Ebene** (individuell):
1. Öffnen Sie die Option im Bearbeitungsmodus
2. Aktivieren Sie **Mengenauswahl aktiviert**
3. Nur diese spezifische Option erhält ein Mengenauswahlfeld

**Funktionsweise im Storefront**:
- Kunden sehen +/- Buttons neben der Option
- Die Menge kann erhöht oder verringert werden
- Der Preis wird automatisch mit der Menge multipliziert

**Technische Limits**:
- **Minimum**: Wird von der Produkteinstellung `minPurchase` übernommen (Standard: 1)
- **Maximum**: Wird von der Produkteinstellung `calculatedMaxPurchase` übernommen

**Anwendungsbeispiele**:
- Kunde kauft 3 Laptops und möchte 3x Garantieverlängerung
- Kunde kauft ein Möbelstück und möchte 2x Aufbau-Service (für 2 Räume)

---

## Pflichtfelder und Anforderungen

### Option als Pflichtfeld markieren

Sie können Optionen als erforderlich definieren, sodass Kunden das Produkt nicht ohne Auswahl in den Warenkorb legen können:

1. Öffnen Sie die Option im Bearbeitungsmodus
2. Aktivieren Sie **Erforderlich**
3. Die Option ist nun vorausgewählt und kann nicht abgewählt werden

**Wichtig**: Pflichtfelder funktionieren nur in Optionen-Sets mit **Einzelauswahl**. Bei Mehrfachauswahl-Sets muss der Kunde mindestens eine Option wählen, es gibt aber keine spezifische Pflicht-Option.

**Funktionsweise**:
- Die Checkbox ist vorausgewählt und ausgegraut
- Der Kunde kann andere Optionen im Set wählen (bei Einzelauswahl wird die Pflicht-Option dann abgewählt)
- Ohne Auswahl einer Option kann das Produkt nicht in den Warenkorb gelegt werden

### Validierung im Warenkorb

Das Plugin validiert automatisch, dass alle Pflichtoptionen ausgewählt sind:
- Bei fehlenden Pflichtoptionen erscheint eine Fehlermeldung
- Der Checkout-Prozess wird blockiert, bis die Anforderungen erfüllt sind

**Fehlermeldung-Beispiel**:
```
"Bitte wählen Sie eine Option aus dem Set 'Garantieverlängerung' für das Produkt 'Laptop XYZ'."
```

### Best Practices für Pflichtfelder

- Nutzen Sie Pflichtfelder nur, wenn wirklich erforderlich (z.B. gesetzliche Vorgaben)
- Aktivieren Sie "Container geöffnet" im Set, damit Pflichtfelder sofort sichtbar sind
- Kombinieren Sie Pflichtfelder nicht mit zu vielen Optionen - halten Sie es übersichtlich
- Informieren Sie Kunden über Pflichtfelder (z.B. in der Set-Beschreibung)

---

## Rule-Builder-Integration

### Optionen über Shopware-Regeln steuern

Das Plugin unterstützt den Shopware Rule-Builder, um Optionen dynamisch zu aktivieren oder zu deaktivieren:

**Ort**: Einstellungen → Shopware → Regeln

### Option per Regel deaktivieren

Sie können Regeln erstellen, die Optionen automatisch deaktivieren:

1. Erstellen Sie eine Regel unter `Einstellungen → Shopware → Regeln`
2. Definieren Sie Bedingungen (z.B. "Warenkorb-Summe < 500 €")
3. Verknüpfen Sie die Regel mit der Option:
   - Öffnen Sie die Option im Bearbeitungsmodus
   - Wählen Sie im Feld **Deaktivieren durch Regel** die erstellte Regel aus

**Funktionsweise**:
- Wenn die Regel zutrifft (z.B. Warenkorb unter 500 €), wird die Option ausgegraut und kann nicht gewählt werden
- Sobald die Bedingung nicht mehr zutrifft (z.B. Warenkorb über 500 €), wird die Option wieder aktiv

**Anwendungsbeispiele**:
```
Regel 1: "Premium-Service nur ab 1.000 € Warenkorbwert"
  Bedingung: Warenkorb-Summe < 1.000 €
  Aktion: Deaktiviere Option "Premium-Aufbau-Service"

Regel 2: "Express-Lieferung nur für Business-Kunden"
  Bedingung: Kundengruppe != Business
  Aktion: Deaktiviere Option "Express-Lieferung 24h"

Regel 3: "Kostenlose Garantie für Newsletter-Abonnenten"
  Bedingung: Tag "newsletter_subscriber" = Ja
  Aktion: Setze Preis für "Garantie 2 Jahre" auf 0 €
```

### Kombinierte Bedingungen

Sie können komplexe Regeln mit mehreren Bedingungen erstellen:

```
Regel: "VIP-Service für Premium-Kunden bei hohem Warenkorbwert"
  Bedingungen (UND):
    - Kundengruppe = "Premium"
    - Warenkorb-Summe > 500 €
    - Lieferland = "Deutschland"
  Aktion: Aktiviere Option "VIP-Vor-Ort-Service kostenlos"
```

### Tipps & Best Practices

- Testen Sie Regeln gründlich, bevor Sie sie live schalten
- Nutzen Sie aussagekräftige Regel-Namen (z.B. "Deaktiviere Express bei niedrigem Warenkorbwert")
- Kombinieren Sie Regeln mit Aktionen, um dynamische Preise zu ermöglichen
- Dokumentieren Sie komplexe Regeln für Ihr Team

---

## Storefront-Funktionen

### Optionen auf der Produktdetailseite

**Ort**: Produktdetailseite (Storefront)

Die Zusatzoptionen erscheinen als Accordion-Container:
- **Accordion-Header**: Zeigt den Namen des Optionen-Sets
- **Accordion-Body**: Enthält alle Optionen mit Checkboxes

**Darstellung**:
- Sets mit Pflichtfeldern oder aktiviertem "Container geöffnet" sind standardmäßig aufgeklappt
- Andere Sets sind zugeklappt und können per Klick geöffnet werden
- Aktive Optionen werden mit einem Haken markiert
- Deaktivierte Optionen sind ausgegraut

**Elemente pro Option**:
- **Checkbox**: Zum An-/Abwählen
- **Produktbild**: Optional, wenn "Bild anzeigen" aktiviert ist
- **Produktname**: Inkl. Varianten-Informationen
- **Herstellername**: Optional, wenn "Hersteller anzeigen" aktiviert ist
- **Tooltip-Icon (?)**: Wird beim Hovern angezeigt, wenn die Option eine Beschreibung hat (eigene oder automatisch über den Beschreibungspfad)
- **Mengenauswahl**: Falls aktiviert, +/- Buttons
- **Preis**: Angezeigt mit Währung und Steuerhinweis (*)

### Optionen im Warenkorb bearbeiten

**Ort**: Warenkorb-Seite

Kunden können Optionen im Warenkorb nachträglich ändern:
1. Unter jedem Produkt erscheint der gleiche Accordion-Container wie auf der Produktseite
2. Kunden können Optionen hinzufügen, entfernen oder die Menge ändern
3. Der Warenkorb-Gesamtpreis wird sofort aktualisiert

**Funktionsweise**:
- Änderungen werden per AJAX gespeichert (keine Seiten-Neuladeung)
- Preise werden neu berechnet
- Inkompatible Optionen werden automatisch entfernt
- Versandbeschränkungen werden geprüft

### Optionen im Checkout

**Ort**: Checkout-Prozess

Die Optionen werden im Checkout wie folgt angezeigt:
- **Übersicht**: Jede Option erscheint als separate Position unter dem Hauptprodukt
- **Einrückung**: Optionen sind visuell eingerückt, um die Zugehörigkeit zum Hauptprodukt zu zeigen
- **Preis**: Option-Preis wird einzeln und im Gesamtpreis angezeigt

**Validierung**:
- Pflichtfelder werden vor dem Abschluss geprüft
- Versandbeschränkungen werden beim Versandart-Wechsel validiert
- Bei Fehlern erscheint eine Fehlermeldung mit Hinweis auf das betroffene Produkt

### Optionen in der Bestellübersicht

**Ort**: Mein Konto → Bestellungen → Bestelldetails

In der Bestellübersicht sehen Kunden:
- Alle bestellten Optionen unter dem jeweiligen Hauptprodukt
- Produktname, Menge und Einzelpreis der Option
- Gesamtpreis inkl. aller Optionen

---

## Fehlerbehebung

### Problem: Optionen werden nicht auf der Produktseite angezeigt

**Symptom**: Kunde sieht keine Zusatzoptionen auf der Produktdetailseite

**Mögliche Ursachen & Lösungen**:

1. **Optionen-Set ist nicht aktiv**
   - Prüfen: `Kataloge → Produkte → [Produkt] → Zusatzoptionen`
   - Lösung: Stellen Sie sicher, dass das Optionen-Set aktiviert ist

2. **Alle Optionen sind inaktiv oder deaktiviert**
   - Prüfen: Öffnen Sie jede Option und prüfen Sie "Aktiv"
   - Lösung: Aktivieren Sie mindestens eine Option

3. **Versandbeschränkungen greifen**
   - Prüfen: Versandmethoden-Konfiguration der Optionen
   - Lösung: Passen Sie Versandbeschränkungen an oder wählen Sie andere Versandart

4. **Cache-Problem**
   - Lösung: Leeren Sie den Shopware-Cache unter `Einstellungen → System → Caches & Indizes`

### Problem: Preis der Option wird nicht korrekt berechnet

**Symptom**: Der angezeigte Preis stimmt nicht mit dem erwarteten Preis überein

**Mögliche Ursachen & Lösungen**:

1. **Länderspezifischer Preis ist definiert**
   - Prüfen: Länderkonfiguration der Option
   - Lösung: Stellen Sie sicher, dass für alle relevanten Länder Preise hinterlegt sind

2. **Mengenstaffel-Preise sind aktiv**
   - Prüfen: Preisstaffelung der Option
   - Lösung: Überprüfen Sie die definierten Mengenbereiche

3. **Aktionen/Rabatte beeinflussen den Preis**
   - Prüfen: Plugin-Konfiguration "Rabatte anwenden"
   - Lösung: Deaktivieren Sie die Einstellung, wenn Optionen immer den vollen Preis haben sollen

4. **Neuberechnung ist aktiviert**
   - Prüfen: Plugin-Konfiguration "Bestellpositionen anpassen"
   - Lösung: Wählen Sie "Beibehalten", um Warenkorb-Preise beizubehalten

### Problem: Option kann nicht ausgewählt werden

**Symptom**: Checkbox ist ausgegraut oder kann nicht angeklickt werden

**Mögliche Ursachen & Lösungen**:

1. **Option ist als inkompatibel definiert**
   - Prüfen: Eine andere bereits gewählte Option schließt diese aus
   - Lösung: Entfernen Sie die inkompatible Option zuerst

2. **Regel deaktiviert die Option**
   - Prüfen: "Deaktivieren durch Regel"-Einstellung der Option
   - Lösung: Prüfen Sie die Regel-Bedingungen oder entfernen Sie die Regel-Verknüpfung

3. **Option ist als Pflichtfeld markiert und bereits ausgewählt**
   - Prüfen: "Erforderlich"-Einstellung der Option
   - Lösung: Bei Pflichtfeldern ist dies das erwartete Verhalten

4. **Anforderungen sind nicht erfüllt**
   - Prüfen: Anforderungsfelder (Parent ID, aktiv, ausgewählt)
   - Lösung: Wählen Sie zuerst die übergeordnete Option aus

### Problem: Optionen verschwinden beim Versandart-Wechsel

**Symptom**: Nach Änderung der Versandart sind Optionen nicht mehr im Warenkorb

**Ursache**: Versandbeschränkungen sind für diese Versandart definiert

**Lösung**:
- Erwartetes Verhalten: Optionen, die für die neue Versandart nicht verfügbar sind, werden automatisch entfernt
- Alternative: Passen Sie die Versandbeschränkungen an, um Optionen bei mehreren Versandarten zuzulassen

### Problem: Seeder weist Optionen nicht automatisch zu

**Symptom**: Produkte im Produktstream erhalten das Optionen-Set nicht

**Mögliche Ursachen & Lösungen**:

1. **Seeder ist nicht aktiv**
   - Prüfen: `Erweiterungen → Optionen Seeder` → Seeder-Status
   - Lösung: Aktivieren Sie den Seeder

2. **Produktstream ist leer oder fehlerhaft**
   - Prüfen: `Kataloge → Dynamische Produktgruppen` → Öffnen Sie den Stream
   - Lösung: Korrigieren Sie die Bedingungen des Produktstreams

3. **Synchronisation wurde noch nicht ausgeführt**
   - Lösung: Klicken Sie auf "Synchronisieren" in der Seeder-Liste oder warten Sie auf die automatische Synchronisation

4. **Datum-Beschränkung ist aktiv**
   - Prüfen: Von/Bis-Datum im Seeder
   - Lösung: Stellen Sie sicher, dass das aktuelle Datum im definierten Zeitraum liegt

### Problem: Optionen werden doppelt im Warenkorb angezeigt

**Symptom**: Gleiche Option erscheint mehrfach mit Menge 1

**Ursache**: Plugin-Einstellung "Mengenbehandlung" ist auf "Aufteilen" gesetzt

**Lösung**:
- Erwartetes Verhalten bei Einstellung "Aufteilen"
- Ändern Sie die Einstellung zu "Zusammenfassen" unter `Erweiterungen → Meine Erweiterungen → Produkt Zusatzoptionen Plugin → Konfigurieren → Zahlungs-Einstellungen`

### Weitere Hilfe

Wenn Ihr Problem nicht in dieser Liste enthalten ist:
1. Prüfen Sie die [Plugin-Konfiguration](../configuration/settings.md)
2. Konsultieren Sie die [Anleitungen](../how_to.md) für spezifische Workflows
3. Kontaktieren Sie den Support über den [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html)

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen für häufige Aufgaben](../how_to.md)
- [Änderungsprotokoll](../changelog.md)
