# Antworten konfigurieren

> Teil des Produkt Berater Plugins - [Siehe Hauptanleitung](./usage.md)

## Übersicht

Antworten sind die Auswahlmöglichkeiten, die dem Kunden bei jeder Frage präsentiert werden. Jede Antwort kann mit Produkteigenschaften, Herstellern oder Preisbereichen verknüpft werden, um die Produktfilterung zu steuern.

## Voraussetzungen

- Ein erstellter Produktberater mit mindestens einer Frage
- Für Eigenschafts-Antworten: Produkte mit entsprechenden Eigenschaften im Shop

## Antwort erstellen

1. Öffnen Sie eine Frage unter `Kataloge → Produktberater → [Berater] → Fragen → [Frage]`
2. Wechseln Sie zum Tab **Antworten**
3. Klicken Sie auf **Antwort hinzufügen**
4. Füllen Sie die erforderlichen Felder aus
5. Klicken Sie auf **Speichern**

---

## Grundeinstellungen

### Antworttext

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Erforderlich** | Ja     |
| **Übersetzbar**  | Ja     |

**Beschreibung**: Der Text, der dem Kunden als Antwortmöglichkeit angezeigt wird.

**Beispiel**: "Rot", "Unter 100 Euro", "Für Anfänger"

---

### Beschreibung

| Eigenschaft      | Wert            |
| ---------------- | --------------- |
| **Typ**          | Langtext (HTML) |
| **Erforderlich** | Nein            |
| **Übersetzbar**  | Ja              |

**Beschreibung**: Zusätzliche Erklärung zur Antwort. Wird je nach Format unter dem Antworttext oder als Tooltip angezeigt.

**Beispiel**: "Ideal für den täglichen Weg zur Arbeit"

---

### Position

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Zahl |
| **Erforderlich** | Ja   |
| **Standard**     | 0    |

**Beschreibung**: Bestimmt die Reihenfolge der Antworten. Niedrigere Werte erscheinen zuerst.

---

## Visuelle Darstellung

### Bild/Medien

| Eigenschaft      | Wert              |
| ---------------- | ----------------- |
| **Typ**          | Medienauswahl     |
| **Erforderlich** | Nein              |

**Beschreibung**: Ein Bild, das neben oder anstelle des Antworttextes angezeigt wird. Besonders effektiv bei visuellem Anzeigetyp.

**Anwendungsbeispiel**: Farbmuster-Bilder für Farbauswahl, Produktbilder für Kategorien

**Empfohlene Größe**: Quadratische Bilder (z.B. 200x200 Pixel) für einheitliche Darstellung

---

### CSS-Klasse

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Erforderlich** | Nein   |

**Beschreibung**: Benutzerdefinierte CSS-Klasse für individuelle Gestaltung dieser Antwort.

**Anwendungsbeispiel**: "highlight-answer" für besondere Hervorhebung

---

## Produktfilterung

Die Filteroptionen hängen vom **Fragetyp** der übergeordneten Frage ab.

### Für Eigenschafts-Fragen (TYPE_PROPERTY)

#### Eigenschaftsoption

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Auswahl (Eigenschaftswert)  |
| **Erforderlich** | Ja (bei TYPE_PROPERTY)      |

**Beschreibung**: Verknüpft die Antwort mit einem spezifischen Eigenschaftswert. Nur Produkte mit diesem Eigenschaftswert werden gefiltert.

**Voraussetzung**: Die Frage muss mit einer Eigenschaftsgruppe verknüpft sein.

**Beispiel**:
- Frage "Welche Farbe?" (Eigenschaftsgruppe: Farbe)
- Antwort "Rot" → Eigenschaftsoption: "Rot" aus der Farben-Gruppe

---

### Für Hersteller-Fragen (TYPE_MANUFACTURER)

#### Hersteller

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Auswahl (Hersteller)    |
| **Erforderlich** | Ja (bei TYPE_MANUFACTURER) |

**Beschreibung**: Verknüpft die Antwort mit einem Hersteller. Nur Produkte dieses Herstellers werden gefiltert.

**Beispiel**:
- Frage "Welche Marke bevorzugen Sie?"
- Antwort "Apple" → Hersteller: Apple

---

### Für Preis-Fragen (TYPE_PRICE)

#### Preis von

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Zahl      |
| **Erforderlich** | Nein      |

**Beschreibung**: Minimaler Preis für den Preisbereich.

#### Preis bis

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Zahl      |
| **Erforderlich** | Nein      |

**Beschreibung**: Maximaler Preis für den Preisbereich.

**Beispiel**:
- Antwort "Günstig" → Preis von: 0, Preis bis: 50
- Antwort "Mittelklasse" → Preis von: 50, Preis bis: 150
- Antwort "Premium" → Preis von: 150, Preis bis: (leer)

---

## Sprunglogik

### Sprung zu (Jump Target)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Erforderlich** | Nein   |

**Beschreibung**: Position der Frage, zu der gesprungen wird, wenn diese Antwort ausgewählt wird. Alle Fragen zwischen der aktuellen und der Ziel-Frage werden übersprungen.

**Wichtige Regeln**:
- Der Wert muss die **Position** einer existierenden Frage sein
- Ungültige Werte (null, 0, negativ) werden ignoriert
- Bei Mehrfachauswahl wird das erste gültige Sprungziel verwendet

### Beispiel: Anfänger vs. Experten

**Frage 1: "Wie viel Erfahrung haben Sie?" (Position: 1)**

| Antwort | Sprung zu |
|---------|-----------|
| "Keine Erfahrung" | (leer) |
| "Etwas Erfahrung" | (leer) |
| "Viel Erfahrung" | 4 |

**Frage 2: "Benötigen Sie eine Einführung?" (Position: 2)**
- Wird nur angezeigt, wenn NICHT "Viel Erfahrung" gewählt wurde

**Frage 3: "Welche Einsteiger-Funktionen sind wichtig?" (Position: 3)**
- Wird nur angezeigt, wenn NICHT "Viel Erfahrung" gewählt wurde

**Frage 4: "Welches Budget haben Sie?" (Position: 4)**
- Wird immer angezeigt (direkt nach Frage 1 bei "Viel Erfahrung")

---

## Erweiterte Optionen

### Operator (für fortgeschrittene Filterung)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Erforderlich** | Nein   |

**Beschreibung**: Vergleichsoperator für erweiterte Filterlogik.

### Operatorwert

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Erforderlich** | Nein   |

**Beschreibung**: Wert, der mit dem Operator verglichen wird.

---

## Best Practices

### Antworten strukturieren

1. **Klare, eindeutige Texte**: Vermeiden Sie Mehrdeutigkeiten
2. **Konsistente Länge**: Ähnlich lange Antworttexte für bessere Optik
3. **Logische Reihenfolge**: Von allgemein zu spezifisch oder aufsteigend/absteigend

### Bilder effektiv nutzen

- **Einheitliche Größe**: Alle Bilder gleich groß für konsistente Darstellung
- **Aussagekräftige Bilder**: Das Bild sollte die Antwort visuell erklären
- **Optimierte Dateigröße**: Komprimierte Bilder für schnelle Ladezeiten

### Sprunglogik sinnvoll einsetzen

| Szenario | Empfehlung |
|----------|------------|
| Anfänger/Experten unterscheiden | Experten überspringen Einführungsfragen |
| Produktkategorie-Auswahl | Je nach Kategorie andere Detailfragen |
| Budget-Abhängigkeit | Bei niedrigem Budget Premium-Fragen überspringen |

### Preisbereiche definieren

- **Überlappungsfrei**: Bereiche sollten sich nicht überschneiden
- **Lückenlos**: Alle Preise sollten abgedeckt sein
- **Sinnvolle Abstufung**: An Ihr Sortiment angepasste Bereiche

**Beispiel für einen Shop mit Produkten von 10-500 Euro:**

| Antwort | Preis von | Preis bis |
|---------|-----------|-----------|
| Budget | 0 | 50 |
| Standard | 50 | 150 |
| Premium | 150 | 300 |
| Luxus | 300 | (leer) |

---

## Häufige Fehler vermeiden

### Fehlende Eigenschaftsverknüpfung

**Problem**: Antwort zeigt keine Produkte

**Lösung**: Stellen Sie sicher, dass die Eigenschaftsoption korrekt verknüpft ist und Produkte diese Eigenschaft haben.

### Ungültige Sprungziele

**Problem**: Berater verhält sich unerwartet

**Lösung**: Prüfen Sie, ob das Sprungziel der korrekten Position entspricht und die Ziel-Frage existiert.

### Überlappende Preisbereiche

**Problem**: Produkte erscheinen mehrfach

**Lösung**: Definieren Sie Preisbereiche ohne Überlappung (z.B. 0-49, 50-99 statt 0-50, 50-100).

---

## Verwandte Dokumentation

- [Fragen konfigurieren](questions.md)
- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
