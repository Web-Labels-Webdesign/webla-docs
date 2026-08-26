# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das Zusatzoptionen Plugin.

**Navigation**: Erweiterungen → Meine Erweiterungen → Produkt Zusatzoptionen Plugin → Konfigurieren

---

## Rabatt-Einstellungen

### Rabatte auf Optionen anwenden, auch wenn sie nicht zutreffen

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Diese Einstellung steuert, ob Rabatte und Aktionen auf Zusatzoptionen angewendet werden sollen, selbst wenn die Aktionsbedingungen die Optionen nicht explizit einschließen.

**Funktionsweise**:
- **Aktiviert**: Rabatte werden auch auf Zusatzoptionen angewendet, wenn der Hauptartikel von einer Aktion profitiert
- **Deaktiviert**: Rabatte gelten nur für die Hauptprodukte; Zusatzoptionen bleiben vom Rabatt ausgeschlossen

**Anwendungsbeispiel**:
- Wenn Sie eine Aktion "10% auf alle Elektronik-Artikel" haben und diese Einstellung aktiviert ist, erhalten auch die Garantieverlängerung und der Aufbau-Service 10% Rabatt
- Bei deaktivierter Einstellung würden nur die Hauptprodukte (Elektronik) den Rabatt erhalten, die Zusatzoptionen behalten ihren Originalpreis

**Empfehlung**: Aktivieren Sie diese Einstellung, wenn Sie möchten, dass Ihre Kunden bei Aktionen auch auf Zusatzleistungen sparen können. Deaktivieren Sie sie, wenn Zusatzoptionen immer zum vollen Preis verkauft werden sollen.

---

## Anzeige-Einstellungen

### Beschreibungstext-Icon

| Eigenschaft      | Wert               |
| ---------------- | ------------------ |
| **Typ**          | Auswahl (Dropdown) |
| **Standard**     | Fragezeichen (?)   |
| **Erforderlich** | Nein               |

**Beschreibung**: Legt fest, welches Icon neben Optionsnamen angezeigt wird, die einen Beschreibungstext konfiguriert haben.

**Optionen**:
- `Fragezeichen (?)`: Zeigt das Shopware `help`-Icon an — ein Fragezeichen
- `Info-Symbol (i)`: Zeigt das Shopware `info`-Icon an — ein kleines „i"

**Anwendungsbeispiel**: Verwenden Sie das Info-Symbol, wenn Beschreibungen als informative Hinweise dienen, oder das Fragezeichen, wenn sie als Hilfe-/Erklärtexte fungieren.

---

### Position auf Product-Detail Seite

| Eigenschaft      | Wert                            |
| ---------------- | ------------------------------- |
| **Typ**          | Auswahl (Dropdown)              |
| **Standard**     | Unter "In den Warenkorb" Button |
| **Erforderlich** | Nein                            |

**Beschreibung**: Legt fest, wo die Zusatzoptionen auf der Produktdetailseite relativ zum "In den Warenkorb"-Button und dem Kaufen-Widget angezeigt werden.

**Optionen**:
- `Über "In den Warenkorb" Button`: Die Optionen-Auswahl erscheint direkt über dem Warenkorb-Button, sodass Kunden diese vor dem Hinzufügen zum Warenkorb sehen
- `Unter "In den Warenkorb" Button`: Die Optionen-Auswahl erscheint unterhalb des Warenkorb-Buttons, aber noch innerhalb des Kaufen-Formulars (Standardeinstellung)
- `Unter dem gesamten Kaufen-Widget`: Die Optionen-Auswahl erscheint nach dem gesamten Kaufen-Widget — unterhalb von Wunschliste-Button, Artikelnummer und allen anderen Erweiterungen im Kaufen-Bereich

**Anwendungsbeispiel**:
- **Position "Über"**: Ideal, wenn die Zusatzoptionen wichtig für die Kaufentscheidung sind (z.B. Pflichtfelder wie Garantieverlängerung)
- **Position "Unter"**: Geeignet für optionale Zusatzleistungen, die der Kunde nach der Hauptentscheidung hinzufügen kann
- **Position "Unter dem Widget"**: Verwenden Sie diese Option, wenn andere Erweiterungen (z.B. Wunschliste, Konfiguratoren) mit der Position "Unter" in Konflikt stehen, weil sie Inhalte zwischen den Warenkorb-Button und die Optionen einfügen

**UI-Auswirkung**: Diese Einstellung beeinflusst nur die Produktdetailseite. Im Warenkorb erscheinen die Optionen immer direkt unter dem jeweiligen Artikel.

---

## Zahlungs-Einstellungen

### Mengenbehandlung von Bestellpositionen

| Eigenschaft      | Wert                                 |
| ---------------- | ------------------------------------ |
| **Typ**          | Auswahl (Dropdown)                   |
| **Standard**     | Alle Positionen in Menge 1 aufteilen |
| **Erforderlich** | Nein                                 |

**Beschreibung**: Diese Einstellung steuert, wie Bestellpositionen mit unterschiedlichen Zusatzoptionen im Warenkorb und in der Bestellung dargestellt werden.

**Optionen**:
- `Alle Bestellpositionen in Posten mit Menge 1 aufteilen`: Jede Kombination aus Produkt und Optionen wird als separate Position mit Menge 1 angezeigt
- `Alle gleichen Bestellpositionen mit der entsprechenden Gesamtmenge in einer Position zusammenfassen`: Identische Kombinationen werden zusammengefasst und die Menge addiert

**Beispiel - Einstellung "Aufteilen" (Standard)**:
```
Position 1: Laptop + Garantie 2 Jahre (Menge: 1) - 1.099 €
Position 2: Laptop + Garantie 2 Jahre (Menge: 1) - 1.099 €
Position 3: Laptop + Garantie 3 Jahre (Menge: 1) - 1.149 €
```

**Beispiel - Einstellung "Zusammenfassen"**:
```
Position 1: Laptop + Garantie 2 Jahre (Menge: 2) - 2.198 €
Position 2: Laptop + Garantie 3 Jahre (Menge: 1) - 1.149 €
```

**Anwendungsbeispiel**:
- **Aufteilen**: Empfohlen für ERP-Systeme, die jede Position einzeln abarbeiten müssen (z.B. bei Seriennummern-Vergabe)
- **Zusammenfassen**: Übersichtlicher für den Kunden, wenn mehrere identische Artikel mit gleichen Optionen bestellt werden

**Wichtig**: Diese Einstellung betrifft nicht nur die Darstellung, sondern auch die Weitergabe an Payment-Provider und externe Systeme.

---

### Bestellpositionen anpassen

| Eigenschaft      | Wert                                                            |
| ---------------- | --------------------------------------------------------------- |
| **Typ**          | Auswahl (Dropdown)                                              |
| **Standard**     | Neuberechnung von Positionen, um individuelle Preise anzuzeigen |
| **Erforderlich** | Nein                                                            |

**Beschreibung**: Steuert, ob die Preise der Bestellpositionen beim Übergang vom Warenkorb zur Bestellung neu berechnet werden oder ob die Warenkorb-Preise beibehalten werden.

**Optionen**:
- `Neuberechnung von Positionen, um individuelle Preise anzuzeigen`: Preise werden beim Checkout neu berechnet, um die aktuellsten Preise und Rabatte zu berücksichtigen
- `Preise, wie im Warenkorb angezeigt, in der Bestellung beibehalten`: Die im Warenkorb angezeigten Preise werden ohne Neuberechnung in die Bestellung übernommen

**Anwendungsbeispiel**:
- **Neuberechnung**: Empfohlen, wenn Sie häufig Preisänderungen haben oder zeitbasierte Rabatte nutzen. Stellt sicher, dass der Kunde immer den aktuellen Preis zahlt
- **Beibehalten**: Sinnvoll, wenn Sie garantieren möchten, dass der im Warenkorb angezeigte Preis der finale Preis bleibt - unabhängig von späteren Preisänderungen während des Checkout-Prozesses

**Technischer Hinweis**: Die Neuberechnung betrifft sowohl die Hauptprodukte als auch alle Zusatzoptionen. Bei aktivierter Neuberechnung können sich Preise ändern, wenn während des Checkouts:
- Preise im System aktualisiert werden
- Aktionszeiträume ablaufen
- Länderspezifische Preise beim Lieferland-Wechsel angepasst werden

---

## Seeder-Einstellungen

### Geseedete Optionen von ausgeschlossenen Produkten entfernen

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Checkbox    |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein        |

**Beschreibung**: Steuert, was mit Optionen geschieht, die ein Seeder einem Produkt zuvor zugewiesen hat, wenn dieses Produkt vom Seeder ausgeschlossen wird.

**Verhalten**:
- **Aktiviert**: Beim Ausschließen eines Produkts vom Seeder werden dessen bereits geseedete Optionen bei der nächsten Synchronisierung ebenfalls gelöscht.
- **Deaktiviert** (Standard): Ausgeschlossene Produkte behalten ihre zuvor geseedeten Optionen; nur Produkte, die die Produktgruppe des Seeders vollständig verlassen, werden bereinigt.

**Hinweis**: Produkte, die die Produktgruppe des Seeders vollständig verlassen, werden bei der nächsten Synchronisierung unabhängig von dieser Einstellung immer bereinigt.

---

### Options-Sets bei Deaktivierung des Seeders deaktivieren

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Checkbox    |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein        |

**Beschreibung**: Steuert, ob das Deaktivieren eines Seeders auch die Options-Sets deaktiviert, die dieser Seeder an den Produkten erzeugt hat.

**Verhalten**:
- **Aktiviert**: Beim Deaktivieren eines Seeders werden alle von ihm erzeugten Options-Sets deaktiviert und erscheinen nicht mehr in der Storefront. Beim erneuten Aktivieren des Seeders werden sie wieder aktiviert.
- **Deaktiviert** (Standard): Die Options-Sets bleiben aktiv und in der Storefront sichtbar, auch wenn der Seeder deaktiviert ist. Der Seeder erzeugt lediglich keine neuen Zuweisungen mehr.

**Hinweis**: Die Options-Sets und deren Optionen werden nie geloescht, sondern nur auf inaktiv gesetzt. Alle Einstellungen, Preise und Konfigurationen bleiben erhalten und stehen nach erneuter Aktivierung des Seeders unveraendert zur Verfuegung.

---

### Options-Sets beim Loeschen des Seeders loeschen

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Checkbox  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Steuert, was mit den Options-Sets geschieht, die ein Seeder erzeugt hat, wenn dieser Seeder geloescht wird.

**Verhalten**:
- **Aktiviert** (Standard): Beim Loeschen eines Seeders werden alle von ihm erzeugten Options-Sets samt deren Optionen ebenfalls geloescht.
- **Deaktiviert**: Die Options-Sets bleiben an den Produkten bestehen und werden von keinem Seeder mehr verwaltet. Sie koennen anschliessend wie manuell angelegte Options-Sets direkt am Produkt bearbeitet werden.

**Achtung**: Das Loeschen eines Seeders laesst sich nicht rueckgaengig machen. Ist diese Einstellung aktiviert, gehen die geseedeten Options-Sets unwiderruflich verloren. Soll ein Seeder nur voruebergehend ausser Kraft gesetzt werden, deaktivieren Sie ihn stattdessen.

---

## Verkaufskanal-spezifische Einstellungen

Alle oben genannten Einstellungen können pro Verkaufskanal individuell konfiguriert
werden - mit einer Ausnahme: Die **Seeder-Einstellungen** gelten global. Das Seeding
läuft im Hintergrund ohne Verkaufskanal-Kontext, daher wird ausschliesslich der für
"Alle Verkaufskanäle" gesetzte Wert verwendet.

| Einstellung                     | Geltungsbereich          | Beschreibung                                                 |
| ------------------------------- | ------------------------ | ------------------------------------------------------------ |
| Rabatte anwenden                | Global/Pro Verkaufskanal | Kann pro Verkaufskanal unterschiedlich aktiviert werden      |
| Beschreibungstext-Icon          | Global/Pro Verkaufskanal | Kann pro Verkaufskanal ein anderes Icon verwenden            |
| Position auf Produktdetailseite | Global/Pro Verkaufskanal | Kann pro Verkaufskanal unterschiedlich positioniert werden   |
| Mengenbehandlung                | Global/Pro Verkaufskanal | Kann pro Verkaufskanal unterschiedliche Darstellung haben    |
| Bestellpositionen anpassen      | Global/Pro Verkaufskanal | Kann pro Verkaufskanal unterschiedliche Preislogik verwenden |

**So konfigurieren Sie verkaufskanalspezifische Einstellungen**:

1. Navigieren Sie zu `Erweiterungen → Meine Erweiterungen → Produkt Zusatzoptionen Plugin → Konfigurieren`
2. Wählen Sie oben rechts den gewünschten Verkaufskanal aus (statt "Alle Verkaufskanäle")
3. Passen Sie die Einstellungen für diesen Verkaufskanal an
4. Klicken Sie auf "Speichern"

---

## Empfohlene Konfigurationen

### Für B2C-Shops mit Aktionen und Rabatten

| Einstellung                     | Empfohlener Wert                |
| ------------------------------- | ------------------------------- |
| Rabatte anwenden                | Aktiviert                       |
| Position auf Produktdetailseite | Unter "In den Warenkorb" Button |
| Mengenbehandlung                | Zusammenfassen                  |
| Bestellpositionen anpassen      | Neuberechnung                   |

**Begründung**: Kunden profitieren auch bei Zusatzoptionen von Rabatten, die Darstellung ist übersichtlich und Preise sind immer aktuell.

---

### Für B2B-Shops mit festen Preisen

| Einstellung                     | Empfohlener Wert               |
| ------------------------------- | ------------------------------ |
| Rabatte anwenden                | Deaktiviert                    |
| Position auf Produktdetailseite | Über "In den Warenkorb" Button |
| Mengenbehandlung                | Aufteilen (Menge 1)            |
| Bestellpositionen anpassen      | Beibehalten                    |

**Begründung**: Zusatzoptionen haben feste Preise, sind gut sichtbar vor dem Kaufabschluss, jede Position wird einzeln für ERP-Systeme aufgeführt und Preise bleiben garantiert.

---

### Für Shops mit Pflicht-Zusatzoptionen (z.B. Versicherungen)

| Einstellung                     | Empfohlener Wert               |
| ------------------------------- | ------------------------------ |
| Rabatte anwenden                | Deaktiviert                    |
| Position auf Produktdetailseite | Über "In den Warenkorb" Button |
| Mengenbehandlung                | Nach Bedarf                    |
| Bestellpositionen anpassen      | Neuberechnung                  |

**Begründung**: Pflicht-Zusatzoptionen (z.B. gesetzlich vorgeschriebene Versicherungen) sollten ohne Rabatt verkauft werden, prominent platziert sein und aktuelle Preise haben.

---

## Häufige Fragen

**F: Was passiert, wenn ich die Rabatt-Einstellung nachträglich ändere?**
A: Die Änderung wirkt sich nur auf neue Warenkörbe aus. Bestehende Bestellungen bleiben unverändert.

**F: Kann ich für verschiedene Produkte unterschiedliche Positionen der Optionen festlegen?**
A: Nein, die Position wird global bzw. pro Verkaufskanal festgelegt. Sie können aber über CSS-Anpassungen produktspezifische Darstellungen realisieren.

**F: Werden Zusatzoptionen bei der Mengenbehandlung "Aufteilen" auch im Payment-Provider einzeln aufgeführt?**
A: Ja, die meisten Payment-Provider erhalten die Positionen einzeln. Dies kann zu längeren Rechnungen führen, ist aber für die korrekte Abwicklung wichtig.

**F: Beeinflusst die Neuberechnung auch Aktionen?**
A: Ja, bei aktivierter Neuberechnung werden alle aktuellen Regeln, Aktionen und Rabatte erneut angewendet. Dies kann zu Preisänderungen führen, wenn Aktionen zwischenzeitlich gestartet oder beendet wurden.
