# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für Shopping Feed mit einzigartigen Rabatten.

---

## Plugin-Grundeinstellungen

**Navigation**: Erweiterungen → Meine Erweiterungen → Shopping Feed mit einzigartigen Rabatten → Konfigurieren

### Rabatt nur bei Einzelkäufen anwenden (Menge = 1)

| Eigenschaft      | Wert                  |
| ---------------- | --------------------- |
| **Typ**          | Schalter (Ja/Nein)    |
| **Standard**     | Nein                  |
| **Erforderlich** | Nein                  |

**Beschreibung**: Wenn aktiviert, wird der Export-Rabatt nur angewendet, wenn der Kunde genau ein Stück des Produkts kauft. Bei Mengenkäufen (2 oder mehr Stück) wird der reguläre Preis berechnet.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie verhindern möchten, dass Kunden große Mengen zum rabattierten Preis kaufen. Dies ist sinnvoll bei Produkten mit niedrigen Margen, wo ein Mengenrabatt nicht wirtschaftlich wäre.

---

### Erlaube mehrere rabattierte Produkte pro Session

| Eigenschaft      | Wert                  |
| ---------------- | --------------------- |
| **Typ**          | Schalter (Ja/Nein)    |
| **Standard**     | Nein                  |
| **Erforderlich** | Nein                  |

**Beschreibung**: Wenn aktiviert, können Besucher mehrere Produkte aus dem Export besuchen und jedes dieser Produkte erhält den Rabatt. Standardmäßig wird nur das erste angeklickte Produkt rabattiert.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie möchten, dass Kunden mehrere Produkte aus verschiedenen Preisvergleichen in einer Session rabattiert kaufen können. Dies kann die Conversion erhöhen, reduziert aber möglicherweise Ihre Marge.

---

### API-Sessions löschen (Button)

| Eigenschaft      | Wert                  |
| ---------------- | --------------------- |
| **Typ**          | Aktion (Button)       |
| **Standard**     | -                     |
| **Erforderlich** | Nein                  |

**Beschreibung**: Mit diesem Button können Sie alle aktiven Rabatt-Sessions manuell löschen. Dies entfernt alle gespeicherten Zuordnungen zwischen Besuchern und rabattierten Produkten.

**Anwendungsbeispiel**: Nutzen Sie diese Funktion nach dem Testen des Plugins oder wenn Sie sicherstellen möchten, dass keine alten Sessions mehr aktiv sind. Normalerweise werden Sessions automatisch nach 24 Stunden bereinigt.

---

## Produktexport-Einstellungen

**Navigation**: Verkaufskanäle → [Ihr Export-Kanal] → Produktvergleich

Die Export-spezifischen Rabatteinstellungen werden direkt am Produktexport konfiguriert, nicht in den Plugin-Einstellungen.

### Rabatttyp

| Eigenschaft      | Wert                                               |
| ---------------- | -------------------------------------------------- |
| **Typ**          | Auswahl                                            |
| **Standard**     | Kein Rabatt                                        |
| **Erforderlich** | Ja (wenn Rabatt gewünscht)                         |

**Beschreibung**: Wählen Sie, wie der Rabatt berechnet werden soll.

**Optionen**:
- `Kein Rabatt`: Keine Rabattierung für diesen Export
- `Absolut`: Ein fester Betrag wird vom Preis abgezogen (z.B. 5€ Rabatt)
- `Prozentual`: Ein prozentualer Anteil wird vom Preis abgezogen (z.B. 10% Rabatt)

**Anwendungsbeispiel**: Wählen Sie "Prozentual" für einen einheitlichen Rabatt über alle Preisklassen hinweg, oder "Absolut" wenn Sie einen festen Betrag rabattieren möchten.

---

### Rabattwert

| Eigenschaft      | Wert                                               |
| ---------------- | -------------------------------------------------- |
| **Typ**          | Zahl (Dezimal)                                     |
| **Standard**     | 0                                                  |
| **Erforderlich** | Ja (wenn Rabatttyp gesetzt)                        |
| **Maximum**      | 100 (bei Prozent) / 9999 (bei Absolutwert)         |

**Beschreibung**: Der Wert des Rabatts. Bei "Prozentual" geben Sie den Prozentsatz ein (z.B. 10 für 10%), bei "Absolut" den Geldbetrag (z.B. 5 für 5€).

**Anwendungsbeispiel**: Geben Sie "10" ein bei Rabatttyp "Prozentual" für einen 10%-Rabatt, oder "5.00" bei "Absolut" für 5€ Rabatt.

---

## Artikel-spezifischer Preis (Produktfeld)

**Navigation**: Kataloge → Produkte → [Produkt bearbeiten] → Spezifikationen → Zusatzfelder

### Neuer Preis im Export (Brutto)

| Eigenschaft      | Wert                                               |
| ---------------- | -------------------------------------------------- |
| **Typ**          | Zahl (Dezimal)                                     |
| **Standard**     | Leer (kein individueller Preis)                    |
| **Erforderlich** | Nein                                               |
| **Feldgruppe**   | Shopping Feed mit einzigartigen Rabatten           |
| **Technischer Name** | `webla_exportdiscount_product_discount`        |

**Beschreibung**: Ein individueller Bruttopreis für dieses Produkt im Export. Dieser Preis überschreibt den globalen Export-Rabatt vollständig. Das Feld wird für die Preisanzeige im Shop und im Export verwendet.

**Anwendungsbeispiel**:
- Repricing-Tools können dieses Feld per CSV-Import oder API befüllen
- Setzen Sie einen spezifischen Wettbewerbspreis für einzelne Artikel
- Der hier eingetragene Preis wird 1:1 als neuer Preis verwendet (keine weitere Rabattberechnung)

---

## Empfohlene Konfigurationen

### Für einfache Preissuchmaschinen-Anbindung

| Einstellung                          | Empfohlener Wert |
| ------------------------------------ | ---------------- |
| Rabatttyp                            | Prozentual       |
| Rabattwert                           | 5-15             |
| Rabatt nur bei Einzelkäufen          | Nein             |
| Mehrere rabattierte Produkte erlauben| Nein             |

### Für Repricing mit individuellen Preisen

| Einstellung                          | Empfohlener Wert |
| ------------------------------------ | ---------------- |
| Rabatttyp                            | Kein Rabatt      |
| Rabattwert                           | 0                |
| Neuer Preis im Export (pro Produkt)  | Individuell      |
| Rabatt nur bei Einzelkäufen          | Optional         |
| Mehrere rabattierte Produkte erlauben| Nein             |

### Für maximale Kundenfreundlichkeit

| Einstellung                          | Empfohlener Wert |
| ------------------------------------ | ---------------- |
| Rabatttyp                            | Prozentual       |
| Rabattwert                           | 10               |
| Rabatt nur bei Einzelkäufen          | Nein             |
| Mehrere rabattierte Produkte erlauben| Ja               |

---

## Verkaufskanal-spezifische Einstellungen

| Einstellung                       | Geltungsbereich | Beschreibung                                    |
| --------------------------------- | --------------- | ----------------------------------------------- |
| Rabatttyp & Rabattwert            | Pro Export      | Jeder Produktexport kann eigene Rabatte haben   |
| Nur Einzelkäufe                   | Global          | Gilt für alle Verkaufskanäle                    |
| Mehrere Produkte pro Session      | Global          | Gilt für alle Verkaufskanäle                    |
| Artikel-spezifischer Preis        | Pro Produkt     | Überschreibt den Export-Rabatt für das Produkt  |
