# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das Plugin Wunsch-Lieferdatum für Kunden.

**Navigation**: Erweiterungen → Meine Erweiterungen → Wunsch-Lieferdatum für Kunden → Konfigurieren

---

## Grundeinstellungen

### Bundesland

| Eigenschaft      | Wert                                                                 |
| ---------------- | -------------------------------------------------------------------- |
| **Typ**          | Auswahl (Einzelauswahl)                                              |
| **Standard**     | Nur nationale Feiertage                                              |
| **Erforderlich** | Nein                                                                 |

**Beschreibung**: Legt fest, für welches deutsche Bundesland öffentliche Feiertage automatisch geladen werden. Die Feiertage werden über die externe API [openholidaysapi.org](https://openholidaysapi.org) abgerufen und stündlich aktualisiert.

**Optionen**:
- `Nur nationale Feiertage`: Es werden ausschließlich bundesweite Feiertage gesperrt (z.B. Weihnachten, Tag der Deutschen Einheit)
- `Brandenburg`, `Berlin`, `Baden-Württemberg`, `Bayern`, `Bremen`, `Hessen`, `Hamburg`, `Mecklenburg-Vorpommern`, `Niedersachsen`, `Nordrhein-Westfalen`, `Rheinland-Pfalz`, `Schleswig-Holstein`, `Saarland`, `Sachsen`, `Sachsen-Anhalt`, `Thüringen`: Zusätzlich zu nationalen Feiertagen werden auch die regionalen Feiertage des gewählten Bundeslandes gesperrt

**Anwendungsbeispiel**: Wenn Ihr Lager in Bayern ist, wählen Sie "Bayern", damit z.B. Mariä Himmelfahrt automatisch als Liefertag gesperrt wird.

---

### Aktiv

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Schalter |
| **Standard**     | Aktiv   |
| **Erforderlich** | Nein    |

**Beschreibung**: Aktiviert oder deaktiviert das Plugin für alle Kunden und Versandarten. Wenn deaktiviert, greift die Einstellung "Nur aktiv für diese Versandarten".

**Anwendungsbeispiel**: Deaktivieren Sie diesen Schalter, wenn Sie das Plugin nur für bestimmte Versandarten anbieten möchten (z.B. nur für Expresslieferung).

---

### Nur aktiv für diese Versandarten

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Mehrfachauswahl (Versandarten) |
| **Standard**     | Leer (keine Einschränkung)  |
| **Erforderlich** | Nein                        |

**Beschreibung**: Wenn "Aktiv" deaktiviert ist, können Sie hier gezielt Versandarten auswählen, für die der Wunschliefertermin trotzdem angezeigt wird. Nur anwendbar, wenn der "Aktiv"-Schalter ausgeschaltet ist.

**Anwendungsbeispiel**: Aktivieren Sie diese Option für "Expresslieferung", wenn der Wunschliefertermin nur für Express-Sendungen gelten soll, nicht jedoch für Standard-Pakete.

---

## Wunschlieferdatum Konfiguration

### Nicht verfügbare Tage

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Mehrfachauswahl (Wochentage) |
| **Standard**     | Samstag, Sonntag            |
| **Erforderlich** | Nein                        |

**Beschreibung**: Wochentage, an denen keine Lieferung möglich ist. Diese Tage werden im Datumsauswahl-Kalender für den Kunden als nicht wählbar markiert.

**Optionen**: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag

**Anwendungsbeispiel**: Wenn Ihr Logistikpartner nur von Montag bis Freitag liefert, wählen Sie Samstag und Sonntag.

---

### Vorlaufzeit Einheit (Fallback)

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Auswahl (Einzelauswahl) |
| **Standard**     | Tage           |
| **Erforderlich** | Nein           |

**Beschreibung**: Legt die Einheit für die Fallback-Vorlaufzeit fest, die verwendet wird, wenn ein Produkt keine eigene Lieferzeit in Shopware hinterlegt hat.

**Optionen**:
- `Stunden`: Die Fallback-Vorlaufzeit wird in Stunden angegeben
- `Tage`: Die Fallback-Vorlaufzeit wird in Tagen angegeben
- `Wochen`: Die Fallback-Vorlaufzeit wird in Wochen angegeben
- `Monate`: Die Fallback-Vorlaufzeit wird in Monaten angegeben

---

### Fallback Lieferdatum Vorlaufzeit

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Zahl    |
| **Standard**     | 2       |
| **Erforderlich** | Nein    |

**Beschreibung**: Der Standardwert der Vorlaufzeit, der verwendet wird, wenn ein Produkt keine eigene Lieferzeit hinterlegt hat. In Kombination mit der "Vorlaufzeit Einheit (Fallback)" ergibt sich z.B. "2 Tage".

**Anwendungsbeispiel**: Wenn Ihre Produkte generell 2 Tage Vorlaufzeit benötigen, tragen Sie "2" ein und wählen "Tage" als Einheit.

---

### Lieferdatum Vorlaufzeit Einheit

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Auswahl (Einzelauswahl) |
| **Standard**     | Tage           |
| **Erforderlich** | Nein           |

**Beschreibung**: Einheit für die Vorlaufzeiten, die an Produkten, Kategorien und Versandarten als individuelle Pufferzeit hinterlegt werden können (Custom Fields). Diese Einheit gilt für alle diese individuellen Vorlaufzeiten.

**Optionen**: `Tage`, `Stunden`

---

### Lieferdatum Vorlaufzeit, nutze nächste Tage nach (Uhrzeit)

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Uhrzeit     |
| **Standard**     | 23:59       |
| **Erforderlich** | Nein        |

**Beschreibung**: Bestellungen, die nach dieser Uhrzeit eingehen, verschieben das frühestmögliche Lieferdatum um einen weiteren Tag. Standardmäßig auf 23:59 gesetzt, was bedeutet, dass dieser Mechanismus praktisch nie greift. Wenn Sie z.B. einen Bestellschnitt um 14:00 Uhr haben, tragen Sie "14:00" ein.

**Anwendungsbeispiel**: Wenn Sie Bestellungen nur bis 12:00 Uhr am gleichen Tag bearbeiten können, setzen Sie diese Uhrzeit auf "12:00". Bestellungen nach 12:00 Uhr erhalten dann automatisch das nächste verfügbare Datum.

---

### Maximales Lieferdatum Einheit

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Auswahl (Einzelauswahl) |
| **Standard**     | Monate         |
| **Erforderlich** | Nein           |

**Beschreibung**: Einheit für den maximalen Lieferzeitraum, bis zu dem Kunden einen Termin wählen dürfen. In Kombination mit "Maximales Lieferdatum" ergibt sich z.B. "3 Monate".

**Optionen**: `Tage`, `Wochen`, `Monate`

---

### Maximales Lieferdatum

| Eigenschaft      | Wert              |
| ---------------- | ----------------- |
| **Typ**          | Zahl              |
| **Standard**     | 0 (unbegrenzt)    |
| **Erforderlich** | Nein              |

**Beschreibung**: Maximaler Zeitraum in die Zukunft, bis zu dem Kunden einen Wunschliefertermin wählen dürfen. Bei "0" gibt es keine Obergrenze. Zusammen mit "Maximales Lieferdatum Einheit" bestimmt dieser Wert das späteste wählbare Datum im Kalender.

**Anwendungsbeispiel**: Wenn Sie nicht möchten, dass Kunden Termine mehr als 3 Monate im Voraus buchen, tragen Sie "3" ein und wählen "Monate" als Einheit.

---

### Bestätigungs-Button anzeigen

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Schalter |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein    |

**Beschreibung**: Wenn aktiviert, erscheint neben dem Datumsfeld ein Bestätigungs-Button (Häkchen), den der Kunde nach der Datumsauswahl klicken muss. Wenn deaktiviert, wird das Datum automatisch beim Auswählen gespeichert (autoSubmit).

**Anwendungsbeispiel**: Aktivieren Sie diesen Schalter, wenn Ihre Kunden häufig versehentlich ein falsches Datum antippen und dieses sofort gespeichert wird.

---

## Tag-basierte Überschreibung

### Überschreibungs-Tag

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Mehrfachauswahl (Tags)  |
| **Standard**     | Leer (deaktiviert)      |
| **Erforderlich** | Nein                    |

**Beschreibung**: Wenn hier ein oder mehrere Tags ausgewählt sind und sich Produkte mit diesem Tag im Warenkorb befinden, wird das Lieferdatum **ausschließlich** anhand dieser markierten Produkte berechnet — alle anderen Produkte im Warenkorb werden für die Datumsberechnung ignoriert. Leer lassen, um diese Funktion zu deaktivieren.

**Anwendungsbeispiel**: Sie haben Sonderartikel mit sehr langen Lieferzeiten, die aber für den Kunden keine Rolle spielen sollen. Erstellen Sie dafür einen Tag "Priorität" und weisen Sie ihn den relevanten Produkten zu. Wenn solche Produkte im Warenkorb sind, bestimmen nur diese das frühestmögliche Datum.

---

## Individuelle Vorlaufzeiten (Custom Fields)

Zusätzlich zur globalen Konfiguration können individuelle Vorlaufzeiten an verschiedenen Stellen hinterlegt werden:

### Produkt: Lieferdatum Vorlaufzeit

**Ort**: Kataloge → Produkte → [Produkt] → Weitere Felder → Lieferdatum Vorlaufzeit

Legt eine produktspezifische Pufferzeit fest. Der höchste Wert aus Produkt, Kategorie, Versandart und Fallback wird verwendet.

### Kategorie: Lieferdatum Vorlaufzeit

**Ort**: Kataloge → Kategorien → [Kategorie] → Weitere Felder → Lieferdatum Vorlaufzeit

Legt eine kategorieweite Pufferzeit fest. Gilt für alle Produkte in dieser Kategorie, sofern am Produkt selbst keine Vorlaufzeit hinterlegt ist.

### Versandart: Vorlaufzeit

**Ort**: Einstellungen → Versand → Versandarten → [Versandart] → Weitere Felder → Vorlaufzeit

Legt eine versandartspezifische Pufferzeit fest. Nützlich, wenn bestimmte Versandarten (z.B. Expresslieferung) eine andere Vorlaufzeit benötigen als andere.

---

## Empfohlene Konfigurationen

### Standard-Setup (kleine bis mittlere Shops)

| Einstellung                    | Empfohlener Wert        |
| ------------------------------ | ----------------------- |
| Bundesland                     | Ihr Bundesland wählen   |
| Aktiv                          | Aktiv                   |
| Nicht verfügbare Tage          | Samstag, Sonntag        |
| Fallback Vorlaufzeit Einheit   | Tage                    |
| Fallback Vorlaufzeit           | 2                       |
| Vorlaufzeit Einheit            | Tage                    |
| Bestellschnitt                 | 14:00 (oder 23:59)      |
| Maximales Lieferdatum          | 3 (Monate)              |
| Bestätigungs-Button            | Deaktiviert             |

### Nur für Expresslieferung

| Einstellung                    | Empfohlener Wert              |
| ------------------------------ | ----------------------------- |
| Aktiv                          | Deaktiviert                   |
| Nur aktiv für Versandarten     | [Ihre Express-Versandart]     |
| Nicht verfügbare Tage          | Samstag, Sonntag              |
| Fallback Vorlaufzeit           | 1 Tag                         |
