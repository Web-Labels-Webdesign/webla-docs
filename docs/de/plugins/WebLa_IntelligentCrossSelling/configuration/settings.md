# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für Intelligentes Cross-Selling.

---

## Plugin-Konfiguration

**Navigation**: Erweiterungen → Meine Erweiterungen → Intelligentes Cross Selling → Konfigurieren

Dies sind globale Plugin-Einstellungen, die alle Cross-Selling-Konfigurationen betreffen.

### Alle passenden Konfigurationen anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden bei Produkten, die mehreren Cross-Selling-Konfigurationen entsprechen, alle angezeigt. Wenn deaktiviert, wird nur die Konfiguration mit der höchsten Priorität angezeigt.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie mehrere Cross-Selling-Strategien haben (z.B. eine für Farbabstimmung, eine andere für Materialabstimmung) und alle relevanten Empfehlungen zeigen möchten.

---

## Cross-Selling-Konfigurationen

**Navigation**: Erweiterungen → Intelligentes Cross Selling

Ab Version 5.1.0 können Sie mehrere Cross-Selling-Konfigurationen erstellen, jede mit eigenen Einstellungen, Eigenschaftsgewichtungen und Zuweisungsregeln.

### Konfigurationsliste

Die Hauptseite zeigt alle Ihre Cross-Selling-Konfigurationen mit:
- **Titel**: Der Name der Konfiguration
- **Zuweisungstyp**: Global, Kategorie oder Dynamische Produktgruppe
- **Priorität**: Bestimmt, welche Konfiguration gewinnt, wenn ein Produkt mehreren entspricht
- **Aktiv**: Ob diese Konfiguration aktiviert ist

Klicken Sie auf eine Konfiguration, um sie zu bearbeiten, oder verwenden Sie **"Konfiguration hinzufügen"**, um eine neue zu erstellen.

---

## Cross Selling Einstellungen

Diese Einstellungen steuern das Verhalten jeder einzelnen Cross-Selling-Konfiguration.

### Titel

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Textfeld  |
| **Standard**     | (leer)    |
| **Erforderlich** | Nein      |

**Beschreibung**: Der Titel, der über der Cross-Selling-Sektion auf der Produktdetailseite angezeigt wird. Dieser Titel kann pro Sprache unterschiedlich definiert werden.

**Anwendungsbeispiel**: Geben Sie z.B. "Das könnte Ihnen auch gefallen" oder "Passende Produkte" ein, um Kunden auf die Empfehlungen aufmerksam zu machen.

**Hinweis**: Um den Titel in verschiedenen Sprachen zu pflegen, wechseln Sie über den Sprachumschalter oben rechts die Sprache.

---

### Anzahl der anzuzeigenden Produkte

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Zahlenfeld |
| **Standard**     | 10         |
| **Erforderlich** | Ja         |
| **Minimum**      | 1          |
| **Maximum**      | 100        |

**Beschreibung**: Legt fest, wie viele Produkte maximal als Cross-Selling-Empfehlungen angezeigt werden.

**Anwendungsbeispiel**: Für einen übersichtlichen Slider empfehlen sich 4-8 Produkte. Für eine umfangreichere Auswahl können Sie bis zu 100 Produkte einstellen.

---

### Aktiv

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert oder deaktiviert diese Cross-Selling-Konfiguration. Wenn deaktiviert, wird diese Konfiguration nicht für Empfehlungen verwendet.

**Anwendungsbeispiel**: Deaktivieren Sie diese Option vorübergehend, wenn Sie die Gewichtungen anpassen möchten, ohne dass Kunden unvollständige Empfehlungen sehen.

---

### Priorität

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Zahlenfeld |
| **Standard**     | 0          |
| **Erforderlich** | Nein       |
| **Minimum**      | 0          |

**Beschreibung**: Bestimmt die Reihenfolge, in der Konfigurationen ausgewertet werden. Konfigurationen mit höherer Priorität werden zuerst geprüft. Wenn ein Produkt mehreren Konfigurationen entspricht, gewinnt die mit der höchsten Priorität (es sei denn, "Alle passenden Konfigurationen anzeigen" ist aktiviert).

**Anwendungsbeispiel**: Setzen Sie Priorität 100 für kategoriespezifische Regeln, 50 für Produktgruppen-Regeln und 0 für globale Fallback-Regeln.

---

### Zuweisungstyp

| Eigenschaft      | Wert                                              |
| ---------------- | ------------------------------------------------- |
| **Typ**          | Auswahl                                           |
| **Standard**     | Global                                            |
| **Optionen**     | Global, Kategorie, Dynamische Produktgruppe       |
| **Erforderlich** | Ja                                                |

**Beschreibung**: Bestimmt, für welche Produkte diese Konfiguration gilt.

- **Global**: Diese Konfiguration gilt für alle Produkte (Fallback)
- **Kategorie**: Diese Konfiguration gilt nur für Produkte in ausgewählten Kategorien
- **Dynamische Produktgruppe**: Diese Konfiguration gilt nur für Produkte, die ausgewählten dynamischen Produktgruppen (Product Streams) entsprechen

**Anwendungsbeispiel**: Erstellen Sie eine "Mode"-Konfiguration mit farbbetonten Gewichtungen für Ihre Bekleidungskategorie und eine "Technik"-Konfiguration mit markenbetonten Gewichtungen für Ihre Elektronikkategorie.

---

### Kategorien (bei Zuweisungstyp = Kategorie)

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Mehrfachauswahl         |
| **Standard**     | (leer)                  |
| **Erforderlich** | Bei Typ=Kategorie       |

**Beschreibung**: Wählen Sie, für welche Kategorien diese Konfiguration gelten soll. Produkte in diesen Kategorien (einschließlich Unterkategorien) verwenden diese Cross-Selling-Konfiguration.

---

### Dynamische Produktgruppen (bei Zuweisungstyp = Dynamische Produktgruppe)

| Eigenschaft      | Wert                              |
| ---------------- | --------------------------------- |
| **Typ**          | Mehrfachauswahl                   |
| **Standard**     | (leer)                            |
| **Erforderlich** | Bei Typ=Dynamische Produktgruppe  |

**Beschreibung**: Wählen Sie, für welche dynamischen Produktgruppen (Product Streams) diese Konfiguration gelten soll. Produkte, die diesen Streams entsprechen, verwenden diese Cross-Selling-Konfiguration.

---

### Nur Produkte aus derselben Kategorie anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden nur Produkte empfohlen, die sich in derselben Kategorie wie das aktuell angezeigte Produkt befinden.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie sicherstellen möchten, dass z.B. bei einem T-Shirt nur andere T-Shirts empfohlen werden und keine Hosen oder Accessoires.

---

### Titel anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Steuert, ob der konfigurierte Titel über der Cross-Selling-Sektion angezeigt wird.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie einen einladenden Titel wie "Passende Produkte" über den Empfehlungen anzeigen möchten.

---

### Produkte ohne Lagerbestand ausblenden

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden nur Produkte mit verfügbarem Lagerbestand als Empfehlungen angezeigt. Produkte ohne Lagerbestand werden ausgeblendet.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, um zu verhindern, dass Kunden auf ausverkaufte Produkte klicken, die sie nicht bestellen können.

**Hinweis**: Diese Einstellung berücksichtigt zusätzlich die Shopware-Systemeinstellung "Ausverkaufte Produkte ausblenden" (`core.listing.hideCloseoutProductsWhenOutOfStock`).

---

### Nur Hauptartikel anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden nur Hauptartikel (Produkte ohne Parent) empfohlen. Varianten werden dann nicht angezeigt.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie bei Varianten-Produkten immer nur den Hauptartikel anzeigen möchten, von dem aus der Kunde dann seine Variante wählen kann.

**Hinweis**: Diese Option und "Nur Variantenartikel anzeigen" schließen sich gegenseitig aus. Aktivieren Sie nicht beide gleichzeitig.

---

### Nur Variantenartikel anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden nur Variantenartikel (Produkte mit Parent) empfohlen. Hauptartikel werden dann nicht angezeigt.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie spezifische Varianten empfehlen möchten, z.B. ein rotes T-Shirt in Größe M zu einem anderen roten Produkt.

**Hinweis**: Diese Option und "Nur Hauptartikel anzeigen" schließen sich gegenseitig aus. Aktivieren Sie nicht beide gleichzeitig.

---

## Cross Selling Gewichtungen

Die Gewichtungen bestimmen, wie stark einzelne Produkteigenschaften bei der Berechnung der Empfehlungen berücksichtigt werden.

### Eigenschaft hinzufügen

Klicken Sie auf **"Gewichtung anlegen"**, um eine neue Eigenschaftsgewichtung hinzuzufügen.

#### Eigenschaft

| Eigenschaft      | Wert             |
| ---------------- | ---------------- |
| **Typ**          | Auswahlliste     |
| **Standard**     | (keine Auswahl)  |
| **Erforderlich** | Ja               |

**Beschreibung**: Wählen Sie die Produkteigenschaft aus, die für die Cross-Selling-Berechnung berücksichtigt werden soll.

**Optionen**: Alle in Ihrem Shop angelegten Eigenschaftsgruppen (z.B. Farbe, Material, Größe, Stil)

---

#### Gewichtung

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Zahlenfeld |
| **Standard**     | 50         |
| **Erforderlich** | Ja         |
| **Minimum**      | 1          |
| **Maximum**      | 100        |

**Beschreibung**: Legt fest, wie stark diese Eigenschaft bei der Berechnung der Produktähnlichkeit gewichtet wird. Der Wert wird als Prozentsatz verwendet.

**Anwendungsbeispiel**:
- **Farbe: 80%** – Produkte mit derselben Farbe werden stark bevorzugt
- **Material: 50%** – Gleiches Material ist wichtig, aber nicht entscheidend
- **Größe: 20%** – Größe hat weniger Einfluss auf die Empfehlungen

---

## Berechnungslogik

Das Plugin berechnet für jedes Produkt einen Ähnlichkeitswert zu allen anderen Produkten:

1. Für jede konfigurierte Eigenschaft wird geprüft, ob beide Produkte dieselbe Eigenschaftsoption haben
2. Bei Übereinstimmung wird die Gewichtung (als Dezimalzahl) zum Gesamtscore addiert
3. Produkte können durch mehrere übereinstimmende Eigenschaften einen höheren Score erreichen
4. Die Produkte mit den höchsten Scores werden als Empfehlungen angezeigt

**Beispiel**:
- Produkt A hat: Farbe=Rot, Material=Baumwolle, Stil=Casual
- Produkt B hat: Farbe=Rot, Material=Baumwolle, Stil=Sport
- Konfigurierte Gewichtungen: Farbe=80%, Material=50%, Stil=30%
- Score für Produkt B: 0.8 (Farbe) + 0.5 (Material) = 1.3

---

## Empfohlene Konfigurationen

### Für Fashion/Bekleidung

| Einstellung                 | Empfohlener Wert |
| --------------------------- | ---------------- |
| Aktiv                       | Ein              |
| Max. Produkte               | 8                |
| Nur gleiche Kategorie       | Ein              |
| Nur Hauptartikel            | Ein              |
| Produkte ohne Stock         | Ein (ausblenden) |

**Gewichtungen:**
| Eigenschaft | Gewichtung |
| ----------- | ---------- |
| Farbe       | 80%        |
| Material    | 50%        |
| Stil        | 40%        |
| Größe       | 20%        |

### Für Elektronik/Technik

| Einstellung                 | Empfohlener Wert |
| --------------------------- | ---------------- |
| Aktiv                       | Ein              |
| Max. Produkte               | 6                |
| Nur gleiche Kategorie       | Aus              |
| Nur Hauptartikel            | Ein              |
| Produkte ohne Stock         | Ein (ausblenden) |

**Gewichtungen:**
| Eigenschaft  | Gewichtung |
| ------------ | ---------- |
| Marke        | 70%        |
| Kompatibel   | 90%        |
| Produktlinie | 60%        |

### Für Möbel/Einrichtung

| Einstellung                 | Empfohlener Wert |
| --------------------------- | ---------------- |
| Aktiv                       | Ein              |
| Max. Produkte               | 4                |
| Nur gleiche Kategorie       | Aus              |
| Nur Hauptartikel            | Ein              |
| Produkte ohne Stock         | Ein (ausblenden) |

**Gewichtungen:**
| Eigenschaft | Gewichtung |
| ----------- | ---------- |
| Stil        | 80%        |
| Farbe       | 70%        |
| Material    | 50%        |
| Serie       | 90%        |
