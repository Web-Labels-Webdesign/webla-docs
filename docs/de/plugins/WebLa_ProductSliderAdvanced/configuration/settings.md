# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für Product Slider Advanced.

**Navigation**: Inhalte → Erlebniswelten → [Ihre Erlebniswelt] → Block bearbeiten → Element-Einstellungen

Die Einstellungen sind in drei Tabs unterteilt: **Inhalt**, **Slider Teaser** und **Einstellungen**.

---

## Tab: Inhalt

In diesem Tab wählen Sie aus, welche Inhalte im Slider angezeigt werden sollen.

### Inhaltstyp

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Manuell |
| **Erforderlich** | Ja      |

**Beschreibung**: Bestimmt, woher die Slider-Inhalte geladen werden.

**Optionen**:
- `Manuelle Produktauswahl`: Sie wählen einzelne Produkte direkt aus
- `Produkte nach Kategorie`: Produkte werden aus einer ausgewählten Kategorie geladen
- `Kategorien`: Zeigt Kategorien statt Produkten im Slider an
- `Dynamische Produktgruppe`: Produkte werden aus einem Product Stream geladen

**Anwendungsbeispiel**: Verwenden Sie "Manuelle Produktauswahl" für kuratierte Bestseller-Listen oder "Dynamische Produktgruppe" für automatisch aktualisierte Angebote.

---

### Produkte (bei manueller Auswahl)

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Mehrfachauswahl |
| **Standard**     | Leer          |
| **Erforderlich** | Nein          |

**Beschreibung**: Wählen Sie die Produkte aus, die im Slider angezeigt werden sollen.

**Anwendungsbeispiel**: Ideal für manuell zusammengestellte Produktlisten wie "Unsere Empfehlungen" oder "Neu eingetroffen".

---

### Kategorie (bei Kategorie-Auswahl)

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Einzelauswahl |
| **Standard**     | Leer         |
| **Erforderlich** | Nein         |

**Beschreibung**: Wählen Sie die Kategorie, aus der Produkte geladen werden sollen. Die Sortierung der Kategorie wird berücksichtigt.

**Anwendungsbeispiel**: Zeigen Sie automatisch die neuesten Produkte einer Kategorie auf der Startseite.

---

### Kategorien (bei Kategorien-Modus)

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Mehrfachauswahl |
| **Standard**     | Leer          |
| **Erforderlich** | Nein          |

**Beschreibung**: Wählen Sie mehrere Kategorien aus, die als Slider-Elemente dargestellt werden.

---

### Hintergrundfarbe der Kategoriebox

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Farbwähler |
| **Standard**     | #ffffff   |
| **Erforderlich** | Nein      |

**Beschreibung**: Legt die Hintergrundfarbe der einzelnen Kategorie-Karten im Slider fest.

**Anwendungsbeispiel**: Passen Sie die Farbe an Ihr Shop-Design an.

---

### Textfarbe der Kategoriebox

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Farbwähler |
| **Standard**     | #444444   |
| **Erforderlich** | Nein      |

**Beschreibung**: Bestimmt die Textfarbe innerhalb der Kategorie-Karten.

---

### Max. Länge der Beschreibung

| Eigenschaft      | Wert  |
| ---------------- | ----- |
| **Typ**          | Zahl  |
| **Standard**     | 100   |
| **Erforderlich** | Nein  |

**Beschreibung**: Begrenzt die Zeichenanzahl der Kategoriebeschreibung. Längere Texte werden mit "..." abgeschnitten.

**Anwendungsbeispiel**: Setzen Sie den Wert auf 50 für kompakte Darstellungen oder auf 200 für ausführlichere Beschreibungen.

---

### Dynamische Produktgruppe

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Einzelauswahl |
| **Standard**     | Leer         |
| **Erforderlich** | Nein         |

**Beschreibung**: Wählen Sie einen Product Stream aus, dessen Produkte im Slider angezeigt werden.

**Anwendungsbeispiel**: Nutzen Sie dynamische Produktgruppen für "Angebote der Woche" oder "Produkte unter 50€", die sich automatisch aktualisieren.

---

## Tab: Slider Teaser

Der Teaser ist ein optionaler Bereich neben dem Slider, der zusätzliche Inhalte wie ein Bild, eine Überschrift und einen Link anzeigen kann.

### Teaser anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert oder deaktiviert den Teaser-Bereich neben dem Slider.

**Anwendungsbeispiel**: Aktivieren Sie den Teaser, um neben Ihren Produkten einen Call-to-Action oder eine Kampagnen-Grafik anzuzeigen.

---

### Teaser als Überschrift anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt die Teaser-Überschrift als Headline über dem gesamten Slider-Bereich an, statt im Teaser-Bild.

**Anwendungsbeispiel**: Nutzen Sie diese Option für Überschriften wie "Unsere Bestseller" oder "Neue Kollektion".

---

### Teaser Überschrift

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | Leer |
| **Erforderlich** | Nein |

**Beschreibung**: Die Hauptüberschrift, die im Teaser-Bereich angezeigt wird.

---

### Teaser Text

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | Leer |
| **Erforderlich** | Nein |

**Beschreibung**: Ein beschreibender Text unter der Teaser-Überschrift.

---

### Teaser Link Ziel

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | Leer |
| **Erforderlich** | Nein |

**Beschreibung**: Die URL, zu der der Teaser verlinkt. Der gesamte Teaser-Bereich wird klickbar.

**Anwendungsbeispiel**: Verlinken Sie auf eine Aktionsseite oder Kategorie, z.B. `/sale/` oder `/neue-kollektion/`.

---

### Teaser Link Text

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | Leer |
| **Erforderlich** | Nein |

**Beschreibung**: Der Text des Buttons, der im Teaser angezeigt wird.

**Anwendungsbeispiel**: "Jetzt entdecken", "Alle anzeigen" oder "Zum Sale".

---

### Teaser Schriftfarbe

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Farbwähler |
| **Standard**     | #000000   |
| **Erforderlich** | Nein      |

**Beschreibung**: Die Farbe für Text und Button im Teaser-Bereich.

---

### Farbe des Teaser-Overlays

| Eigenschaft      | Wert                   |
| ---------------- | ---------------------- |
| **Typ**          | Farbwähler             |
| **Standard**     | rgba(208, 207, 207, 0) |
| **Erforderlich** | Nein                   |

**Beschreibung**: Eine halbtransparente Farbschicht über dem Teaser-Bild, die die Lesbarkeit des Textes verbessert.

**Anwendungsbeispiel**: Verwenden Sie `rgba(0, 0, 0, 0.3)` für einen leichten dunklen Overlay bei hellen Bildern.

---

### Teaser Bild

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Medienauswahl  |
| **Standard**     | Leer           |
| **Erforderlich** | Nein           |

**Beschreibung**: Das Hintergrundbild für den Teaser-Bereich.

---

### Anzeigemodus (Teaser-Bild)

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Cover   |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, wie das Teaser-Bild skaliert wird.

**Optionen**:
- `Standard`: Keine spezielle Skalierung
- `Gefüllt (fill)`: Bild füllt den gesamten Bereich (kann verzerrt werden)
- `Cover`: Bild füllt den Bereich unter Beibehaltung des Seitenverhältnisses (kann beschnitten werden)
- `Contain`: Gesamtes Bild sichtbar (kann Ränder haben)

---

### Verhalten des Teasers auf Mobilgeräten

| Eigenschaft      | Wert                  |
| ---------------- | --------------------- |
| **Typ**          | Auswahl               |
| **Standard**     | Über Slider anzeigen  |
| **Erforderlich** | Nein                  |

**Beschreibung**: Bestimmt, wie der Teaser auf mobilen Geräten dargestellt wird.

**Optionen**:
- `Verstecken`: Der Teaser wird auf Mobilgeräten ausgeblendet
- `Über Slider anzeigen`: Der Teaser erscheint oberhalb des Sliders

**Anwendungsbeispiel**: Wählen Sie "Verstecken", wenn der Teaser auf kleinen Bildschirmen zu viel Platz einnimmt.

---

## Tab: Einstellungen

Hier finden Sie alle technischen und visuellen Einstellungen für den Slider.

### Anzeigemodus (Produktbilder)

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Contain |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, wie Produktbilder im Slider dargestellt werden.

**Optionen**:
- `Standard`: Normale Darstellung
- `Cover`: Bild füllt den verfügbaren Bereich vollständig
- `Contain`: Gesamtes Bild sichtbar

---

### Vertikale Ausrichtung

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Mitte   |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt die vertikale Ausrichtung des Sliders im CMS-Block.

**Optionen**:
- `Oben`: Am oberen Rand ausgerichtet
- `Mitte`: Vertikal zentriert
- `Unten`: Am unteren Rand ausgerichtet

---

### Produktbox-Layout

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Standard |
| **Erforderlich** | Nein    |

**Beschreibung**: Das Layout der einzelnen Produktkarten im Slider.

**Optionen**:
- `Standard`: Vollständige Produktkarte mit Bild, Titel und Preis
- `Bild`: Fokus auf das Produktbild
- `Minimal`: Kompakte Darstellung

---

### Umrandung

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Fügt eine Umrandung um den Slider und die Navigationsbuttons hinzu.

---

### Navigationspfeile

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt Pfeil-Buttons zum manuellen Navigieren durch den Slider an.

---

### Automatisches Scrollen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert das automatische Weiterschalten der Slider-Elemente.

---

### Automatisches Scrollen Geschwindigkeit

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Zahl |
| **Standard**     | 1500 |
| **Erforderlich** | Nein |

**Beschreibung**: Die Zeit in Millisekunden zwischen automatischen Slide-Wechseln.

**Anwendungsbeispiel**: Setzen Sie den Wert auf 3000 für einen langsameren, gemütlicheren Wechsel (3 Sekunden).

---

### Max. dargestellte Elemente

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Zahl |
| **Standard**     | 10   |
| **Erforderlich** | Nein |

**Beschreibung**: Die maximale Anzahl von Produkten oder Kategorien, die im Slider geladen werden.

---

### Breite eines Slider-Elements

| Eigenschaft      | Wert  |
| ---------------- | ----- |
| **Typ**          | Text  |
| **Standard**     | 300px |
| **Erforderlich** | Nein  |

**Beschreibung**: Die Mindestbreite jedes einzelnen Slider-Elements. Beeinflusst, wie viele Elemente gleichzeitig sichtbar sind.

**Anwendungsbeispiel**: Verwenden Sie "400px" für größere Produktkarten oder "200px" für mehr Produkte gleichzeitig.

---

### Breite des Teasers

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | 20%     |
| **Erforderlich** | Nein    |

**Beschreibung**: Die prozentuale Breite des Teaser-Bereichs im Verhältnis zum Slider.

**Optionen**: 0% bis 100% in 10er-Schritten sowie 25% und 75%

**Anwendungsbeispiel**: Wählen Sie 30% für einen prominenten Teaser oder 0% um den Teaser auszublenden.

---

### Max. Höhe des Sliders

| Eigenschaft      | Wert  |
| ---------------- | ----- |
| **Typ**          | Text  |
| **Standard**     | 650px |
| **Erforderlich** | Nein  |

**Beschreibung**: Die maximale Höhe des gesamten Slider-Bereichs.

**Anwendungsbeispiel**: Verwenden Sie "auto" für eine automatische Höhe oder "500px" für eine kompakte Darstellung.

---

### Variantenanzeige

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Alles darstellen |
| **Erforderlich** | Nein    |

**Beschreibung**: Steuert, welche Produkttypen bei Produkten mit Varianten angezeigt werden.

**Optionen**:
- `Alles darstellen`: Zeigt sowohl Hauptprodukte als auch Varianten
- `Nur Varianten anzeigen`: Zeigt nur die einzelnen Varianten
- `Nur Hauptartikel anzeigen`: Zeigt nur die Elternprodukte

**Anwendungsbeispiel**: Wählen Sie "Nur Hauptartikel anzeigen", um doppelte Einträge zu vermeiden.

---

### Randabstand

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Zahl |
| **Standard**     | 0    |
| **Erforderlich** | Nein |

**Beschreibung**: Der Abstand in Pixeln am linken und rechten Rand des Sliders (Desktop).

---

### Randabstand auf Mobilgeräten

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Zahl |
| **Standard**     | 0    |
| **Erforderlich** | Nein |

**Beschreibung**: Der Abstand in Pixeln am linken und rechten Rand des Sliders auf mobilen Geräten.

---

### Endlosschleife

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Ermöglicht das endlose Durchblättern des Sliders (vom letzten Element zurück zum ersten).

---

### Navigation

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt eine Punkte-Navigation unterhalb des Sliders an.

---

## Empfohlene Konfigurationen

### Für eine Produkt-Vorschau auf der Startseite

| Einstellung              | Empfohlener Wert |
| ------------------------ | ---------------- |
| Inhaltstyp               | Dynamische Produktgruppe |
| Max. dargestellte Elemente | 8              |
| Navigationspfeile        | An               |
| Automatisches Scrollen   | Aus              |
| Produktbox-Layout        | Standard         |
| Breite eines Slider-Elements | 300px        |

### Für einen Kategorie-Überblick

| Einstellung              | Empfohlener Wert |
| ------------------------ | ---------------- |
| Inhaltstyp               | Kategorien       |
| Teaser anzeigen          | An               |
| Teaser Überschrift       | "Unsere Kategorien" |
| Teaser als Überschrift   | An               |
| Max. Länge der Beschreibung | 80            |

### Für einen Hero-Slider mit Teaser

| Einstellung              | Empfohlener Wert |
| ------------------------ | ---------------- |
| Inhaltstyp               | Manuelle Produktauswahl |
| Teaser anzeigen          | An               |
| Breite des Teasers       | 30%              |
| Navigationspfeile        | An               |
| Umrandung                | Aus              |
