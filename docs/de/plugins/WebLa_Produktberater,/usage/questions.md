# Fragen konfigurieren

> Teil des Produkt Berater Plugins - [Siehe Hauptanleitung](./usage.md)

## Übersicht

Fragen sind das Herzstück des Produktberaters. Jede Frage ermöglicht es dem Kunden, seine Anforderungen zu präzisieren. Die Antworten auf diese Fragen werden gewichtet und führen zu einer intelligenten Produktempfehlung.

## Voraussetzungen

- Ein erstellter Produktberater (siehe [Nutzungsanleitung](./usage.md))
- Für Eigenschafts-Fragen: Produkte mit entsprechenden Eigenschaften im Shop

## Frage erstellen

1. Öffnen Sie einen Produktberater unter `Kataloge → Produktberater`
2. Wechseln Sie zum Tab **Fragen**
3. Klicken Sie auf **Frage hinzufügen**
4. Füllen Sie die erforderlichen Felder aus
5. Klicken Sie auf **Speichern**

---

## Grundeinstellungen

### Titel

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Erforderlich** | Ja     |
| **Übersetzbar**  | Ja     |

**Beschreibung**: Interner Name der Frage, der in der Fortschrittsanzeige und im Admin angezeigt wird.

**Beispiel**: "Verwendungszweck", "Preisbereich", "Farbe"

---

### Fragetext

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Erforderlich** | Ja     |
| **Übersetzbar**  | Ja     |

**Beschreibung**: Die eigentliche Frage, die dem Kunden angezeigt wird.

**Beispiel**: "Wofür möchten Sie das Fahrrad hauptsächlich nutzen?"

---

### Beschreibung

| Eigenschaft      | Wert            |
| ---------------- | --------------- |
| **Typ**          | Langtext (HTML) |
| **Erforderlich** | Nein            |
| **Übersetzbar**  | Ja              |

**Beschreibung**: Zusätzlicher Hilfetext unterhalb der Frage. Unterstützt HTML-Formatierung.

**Beispiel**: "Wählen Sie den Haupteinsatzzweck. Sie können später noch weitere Kriterien angeben."

---

### Position

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Zahl |
| **Erforderlich** | Ja   |
| **Standard**     | 0    |

**Beschreibung**: Bestimmt die Reihenfolge der Fragen. Niedrigere Werte erscheinen zuerst.

**Beispiel**: Position 1, 2, 3 für die Reihenfolge der Fragen.

---

## Fragetypen

Der Fragetyp bestimmt, wie die Antworten mit Produkten verknüpft werden.

### Eigenschaften (TYPE_PROPERTY)

| Eigenschaft | Wert |
| ----------- | ---- |
| **Verwendung** | Filtern nach Produkteigenschaften |

**Beschreibung**: Verknüpft Antworten mit Shopware-Produkteigenschaften. Ideal für Größe, Material, Farbe usw.

**Voraussetzung**: Eine Eigenschaftsgruppe muss ausgewählt werden.

**Anwendungsbeispiel**: "Welche Größe benötigen Sie?" → Antworten: S, M, L, XL (verknüpft mit Größen-Eigenschaft)

---

### Hersteller (TYPE_MANUFACTURER)

| Eigenschaft | Wert |
| ----------- | ---- |
| **Verwendung** | Filtern nach Produkthersteller |

**Beschreibung**: Verknüpft Antworten mit Herstellern. Der Kunde kann bevorzugte Marken auswählen.

**Anwendungsbeispiel**: "Haben Sie eine bevorzugte Marke?" → Antworten: Apple, Samsung, Sony

---

### Preis (TYPE_PRICE)

| Eigenschaft | Wert |
| ----------- | ---- |
| **Verwendung** | Filtern nach Preisbereich |

**Beschreibung**: Ermöglicht die Filterung nach Preisbereichen. Ideal mit dem Format "Bereich".

**Anwendungsbeispiel**: "Wie viel möchten Sie ausgeben?" → Schieberegler von 0 bis 1000 Euro

---

### Text (TYPE_TEXT)

| Eigenschaft | Wert |
| ----------- | ---- |
| **Verwendung** | Freitext-Suche in Produkten |

**Beschreibung**: Ermöglicht eine Freitext-Suche. Der eingegebene Text wird in Produktnamen und -beschreibungen gesucht.

**Anwendungsbeispiel**: "Suchen Sie nach einem bestimmten Merkmal?" → Eingabefeld für Suchbegriff

---

### Vergleich (TYPE_COMPARE)

| Eigenschaft | Wert |
| ----------- | ---- |
| **Verwendung** | Produktvergleichs-Modus |

**Beschreibung**: Spezieller Modus für den direkten Produktvergleich.

---

## Frageformate

Das Format bestimmt, wie die Antworten dem Kunden präsentiert werden.

### Buttons (FORMAT_BUTTONS)

**Darstellung**: Klickbare Schaltflächen in einem Raster

**Optionen**:
- Bilder pro Antwort möglich
- Beschreibungstext pro Antwort
- Optionales Eingabefeld unterhalb der Buttons

**Ideal für**: Wenige, klar unterscheidbare Optionen (3-6 Antworten)

**Zusätzliche Optionen** (in Fragenoptionen):
- `showInputBelow`: Zeigt ein zusätzliches Textfeld unter den Buttons
- `placeholder`: Platzhaltertext für das Eingabefeld

---

### Auswahl (FORMAT_SELECT)

**Darstellung**: Dropdown-Menü mit Suchfunktion

**Optionen**:
- Durchsuchbar bei vielen Optionen
- "Keine passende Antwort" Option
- "Ist mir egal" Option

**Ideal für**: Viele Optionen (mehr als 6 Antworten)

**Zusätzliche Optionen** (in Fragenoptionen):
- `showNotFound`: Zeigt "Keine passende Antwort gefunden" Option
- `showNoMatter`: Zeigt "Ist mir egal" Option
- `showSearch`: Aktiviert die Suchfunktion im Dropdown

---

### Bereich (FORMAT_RANGE)

**Darstellung**: Zwei Schieberegler für Minimal- und Maximalwert

**Ideal für**: Preis-, Größen- oder Wertebereiche

**Hinweis**: Antworten definieren die verfügbaren Bereiche (Preis von/bis).

---

### Eingabe (FORMAT_INPUT)

**Darstellung**: Einfaches Textfeld

**Ideal für**: Freitext-Suche oder spezifische Anfragen

**Zusätzliche Optionen** (in Fragenoptionen):
- `placeholder`: Platzhaltertext für das Eingabefeld

---

## Erweiterte Einstellungen

### Gewichtung

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Zahl |
| **Standard**     | 0    |

**Beschreibung**: Bestimmt, wie stark die Antworten dieser Frage in die Produktbewertung einfließen. Höhere Werte = wichtigere Frage.

**Beispiel**:
- Technische Anforderungen: Gewichtung 10
- Farbwunsch: Gewichtung 2

So werden technische Kriterien stärker gewichtet als optische.

---

### Pflichtfrage

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Nein     |

**Beschreibung**: Wenn aktiviert, muss der Kunde eine Antwort auswählen, bevor er fortfahren kann. Der "Überspringen"-Button wird ausgeblendet.

---

### Mehrfachauswahl

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Nein     |

**Beschreibung**: Ermöglicht dem Kunden, mehrere Antworten gleichzeitig auszuwählen.

**Anwendungsbeispiel**: "Welche Eigenschaften sind Ihnen wichtig?" → Kunde kann mehrere auswählen.

---

### Nicht passende ausschließen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Nein     |

**Beschreibung**: Wenn aktiviert, werden bei dieser Frage Produkte, die keiner ausgewählten Antwort entsprechen, komplett aus den Ergebnissen entfernt.

**Anwendungsbeispiel**: Bei "Größe" aktivieren, damit nur Produkte in der gewählten Größe angezeigt werden.

---

### Eigenschaftsgruppe

| Eigenschaft      | Wert                       |
| ---------------- | -------------------------- |
| **Typ**          | Auswahl (Eigenschaftsgruppe) |
| **Erforderlich** | Bei TYPE_PROPERTY          |

**Beschreibung**: Verknüpft die Frage mit einer Shopware-Eigenschaftsgruppe. Die Antworten können dann mit spezifischen Eigenschaftswerten verknüpft werden.

---

## Sprunglogik (Jump To)

Die Sprunglogik ermöglicht es, Fragen basierend auf vorherigen Antworten zu überspringen.

### So funktioniert es

1. Bei einer Antwort wird ein **Sprungziel** (Position einer anderen Frage) definiert
2. Wählt der Kunde diese Antwort, springt der Berater zur angegebenen Frage
3. Alle Fragen dazwischen werden übersprungen

### Beispiel

| Frage | Position | Antwort | Sprungziel |
|-------|----------|---------|------------|
| "Haben Sie Erfahrung?" | 1 | "Ja, viel" | 3 |
| "Haben Sie Erfahrung?" | 1 | "Nein" | (leer) |
| "Anfänger-Tipps nötig?" | 2 | ... | (leer) |
| "Welches Budget?" | 3 | ... | (leer) |

Wählt der Kunde "Ja, viel", springt er direkt zu Frage 3 und überspringt die Anfänger-Tipps.

**Hinweis**: Sprungziele werden bei den einzelnen Antworten konfiguriert (siehe [Antworten konfigurieren](answers.md)).

---

## Best Practices

### Reihenfolge der Fragen

1. **Allgemeine Fragen zuerst**: Beginnen Sie mit breiten Kategorien
2. **Spezifische Fragen später**: Details wie Farbe oder Größe am Ende
3. **Wichtige Fragen früh**: Technische Anforderungen vor Präferenzen

### Gewichtung sinnvoll einsetzen

- Kritische Kriterien (Kompatibilität, Größe): Hohe Gewichtung (8-10)
- Wichtige Präferenzen (Marke, Preis): Mittlere Gewichtung (4-6)
- Optionale Wünsche (Farbe, Design): Niedrige Gewichtung (1-3)

### Anzahl der Fragen

- **Optimal**: 3-7 Fragen
- **Minimum**: 2 Fragen für sinnvolle Filterung
- **Maximum**: 10+ Fragen nur mit Sprunglogik, um Abbrüche zu vermeiden

---

## Verwandte Dokumentation

- [Antworten konfigurieren](answers.md)
- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
