# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für den Produkt Berater.

**Navigation**: `Kataloge → Produktberater → [Berater auswählen]`

---

## Grundeinstellungen

### Titel

| Eigenschaft      | Wert              |
| ---------------- | ----------------- |
| **Typ**          | Text              |
| **Standard**     | (leer)            |
| **Erforderlich** | Ja                |
| **Übersetzbar**  | Ja                |

**Beschreibung**: Der Name des Produktberaters, der im Admin und optional in der Storefront angezeigt wird.

**Anwendungsbeispiel**: "Fahrrad-Finder", "Laptop-Berater", "Geschenkefinder"

---

### Aktiv

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Nein     |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert oder deaktiviert den Produktberater. Nur aktive Berater werden in der Storefront angezeigt.

**Anwendungsbeispiel**: Deaktivieren Sie einen Berater vorübergehend, während Sie ihn überarbeiten, ohne ihn zu löschen.

---

## Produktauswahl

### Dynamische Produktgruppe

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Auswahl (Produktstream) |
| **Standard**     | (keine)                 |
| **Erforderlich** | Nein                    |

**Beschreibung**: Wählen Sie eine Dynamische Produktgruppe (Produktstream), um die Produkte vorzufiltern, die im Berater berücksichtigt werden. Nur Produkte, die den Kriterien der Produktgruppe entsprechen, werden dem Kunden empfohlen.

**Anwendungsbeispiel**:
- Nur Produkte auf Lager anzeigen
- Nur Produkte einer bestimmten Kategorie einbeziehen
- Nur Produkte ab einem bestimmten Preis berücksichtigen

**Hinweis**: Produktgruppen werden unter `Kataloge → Dynamische Produktgruppen` erstellt und verwaltet.

---

### Produktsortierung

| Eigenschaft      | Wert                     |
| ---------------- | ------------------------ |
| **Typ**          | Auswahl (Sortierung)     |
| **Standard**     | (keine)                  |
| **Erforderlich** | Nein                     |

**Beschreibung**: Wählen Sie eine Standard-Sortierung für die Produktergebnisse. Diese Sortierung wird angewendet, wenn der Kunde keine eigene Sortierung wählt.

**Optionen**: Abhängig von den in Shopware konfigurierten Sortierungen (z.B. Preis aufsteigend, Name A-Z, Neueste zuerst).

---

## Anzeigeoptionen

### Design

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Auswahl                     |
| **Standard**     | Standard                    |
| **Erforderlich** | Nein                        |

**Beschreibung**: Bestimmt das Layout des Produktberaters.

**Optionen**:
- `Standard`: Eingebettete Darstellung innerhalb der Seite
- `Ganze Seite`: Vollbild-Darstellung für ein immersives Erlebnis

**Anwendungsbeispiel**: Verwenden Sie "Ganze Seite" für komplexe Berater mit vielen Fragen, um den Kunden nicht abzulenken.

---

### Anzeigetyp

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Text    |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, wie Antworten standardmäßig dargestellt werden.

**Optionen**:
- `Text`: Nur Text-Buttons
- `Medien`: Antworten mit Bildern (erfordert hochgeladene Medien bei den Antworten)
- `Auswahl`: Dropdown-Menü
- `Farbe`: Farbfelder (für Farbauswahl-Fragen)

**Anwendungsbeispiel**: Wählen Sie "Medien" wenn Sie visuelle Produkte (Kleidung, Möbel) beraten und Bilder die Auswahl erleichtern.

---

### Anzahl Empfehlungen

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 1      |
| **Erforderlich** | Nein   |

**Beschreibung**: Anzahl der Produkte, die als Hauptempfehlung hervorgehoben werden. Diese Produkte werden prominent über der normalen Produktliste angezeigt.

**Anwendungsbeispiel**: Setzen Sie den Wert auf 3, um dem Kunden die drei besten Treffer als Top-Empfehlungen zu präsentieren.

---

### Sortierungstyp

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Score   |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, wie die Ergebnisprodukte sortiert werden.

**Optionen**:
- `Alphanumerisch`: Alphabetische Sortierung nach Produktname
- `Position`: Sortierung nach Übereinstimmungs-Score (Standard)

**Anwendungsbeispiel**: Belassen Sie "Position" für eine Sortierung nach Relevanz basierend auf den gewichteten Antworten.

---

## Erweiterte Optionen

### Live-Aktualisierung

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Nein     |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden die passenden Produkte nach jeder beantworteten Frage sofort aktualisiert. Der Kunde sieht in Echtzeit, wie sich die Produktauswahl durch seine Antworten verändert.

**Anwendungsbeispiel**: Aktivieren Sie diese Option für einen interaktiven Berater, bei dem Kunden sofort sehen möchten, wie ihre Auswahl die Ergebnisse beeinflusst.

**Hinweis**: Bei deaktivierter Live-Aktualisierung werden die Ergebnisse erst nach Beantwortung aller Fragen angezeigt.

---

### Nicht passende Produkte ausschließen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Nein     |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden nur Produkte angezeigt, die mindestens einer Antwort entsprechen. Produkte ohne Übereinstimmung werden vollständig ausgeblendet.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie strenge Filterung wünschen und nur exakt passende Produkte zeigen möchten.

**Hinweis**: Bei deaktivierter Option werden alle Produkte angezeigt, aber nach Relevanz sortiert (besser passende Produkte erscheinen weiter oben).

---

### Abschlusstext

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Langtext    |
| **Standard**     | (vordefiniert) |
| **Erforderlich** | Nein        |
| **Übersetzbar**  | Ja          |

**Beschreibung**: Text, der nach Abschluss aller Fragen über den Produktempfehlungen angezeigt wird.

**Standardtext**: "Geschafft! Wir haben das passende Produkt für Sie gefunden. Falls Sie sich noch nicht ganz sicher sind, finden Sie weitere Vorschläge unten. Wenn Sie Ihre Antworten ändern möchten, gehen Sie einfach zurück."

**Anwendungsbeispiel**: Passen Sie den Text an Ihre Markensprache an oder fügen Sie einen Call-to-Action hinzu.

---

## Herstellergewichtung

Unter dem Tab "Hersteller" können Sie Hersteller mit dem Berater verknüpfen und ihnen eine Gewichtung zuweisen.

### Hersteller hinzufügen

| Eigenschaft      | Wert                   |
| ---------------- | ---------------------- |
| **Typ**          | Auswahl (Hersteller)   |
| **Erforderlich** | Nein                   |

**Beschreibung**: Wählen Sie Hersteller aus, die in den Ergebnissen bevorzugt werden sollen.

### Gewichtung

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 0      |
| **Erforderlich** | Nein   |

**Beschreibung**: Höhere Werte bedeuten, dass Produkte dieses Herstellers in den Ergebnissen weiter oben erscheinen.

**Anwendungsbeispiel**: Setzen Sie für Ihre Eigenmarken eine höhere Gewichtung, um diese bevorzugt anzuzeigen.

---

## Empfohlene Konfigurationen

### Für einfache Produktberatung

| Einstellung                        | Empfohlener Wert |
| ---------------------------------- | ---------------- |
| Design                             | Standard         |
| Live-Aktualisierung                | Aus              |
| Nicht passende Produkte ausschließen | Aus           |
| Anzahl Empfehlungen                | 1                |

### Für interaktive Produktfinder

| Einstellung                        | Empfohlener Wert |
| ---------------------------------- | ---------------- |
| Design                             | Standard         |
| Live-Aktualisierung                | An               |
| Nicht passende Produkte ausschließen | Aus           |
| Anzahl Empfehlungen                | 3                |

### Für strenge Filterung

| Einstellung                        | Empfohlener Wert |
| ---------------------------------- | ---------------- |
| Design                             | Standard         |
| Live-Aktualisierung                | An               |
| Nicht passende Produkte ausschließen | An            |
| Anzahl Empfehlungen                | 1                |

---

## Verwandte Dokumentation

- [Fragen konfigurieren](../usage/questions.md)
- [Antworten konfigurieren](../usage/answers.md)
- [Anleitungen](../how_to.md)
