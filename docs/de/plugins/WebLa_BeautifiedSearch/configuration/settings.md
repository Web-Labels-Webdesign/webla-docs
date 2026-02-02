# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das Plugin "Suche als Overlay".

**Navigation**: Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren

---

## Anzeige Konfiguration

Diese Einstellungen steuern das Erscheinungsbild des Such-Overlays und welche Inhaltstypen durchsucht werden.

### Ansichtsmodus

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Auswahl  |
| **Standard**     | Standard |
| **Erforderlich** | Nein     |

**Beschreibung**: Bestimmt den Layout-Stil des Such-Overlays.

**Optionen**:
- `Standard`: Klassisches Tab-Interface, bei dem Produkte, Kategorien, Blog und Hersteller in separaten Tabs angezeigt werden. Benutzer klicken auf Tabs, um zwischen Inhaltstypen zu wechseln.
- `Modern`: Side-by-Side-Layout auf Desktop-Geräten. Produkte werden auf der linken Seite angezeigt (2/3 der Breite), während Kategorien und Blog-Ergebnisse in einer Seitenleiste rechts erscheinen (1/3 der Breite). Auf mobilen Geräten wechselt die moderne Ansicht zum Tab-Interface für bessere Benutzerfreundlichkeit.

**Anwendungsbeispiel**:
- Wählen Sie "Standard" für ein traditionelles Sucherlebnis, das auf allen Geräten konsistent funktioniert
- Wählen Sie "Modern" für einen zeitgemäßeren Look, der mehrere Inhaltstypen gleichzeitig auf größeren Bildschirmen anzeigt und das Tab-Wechseln reduziert

**Hinweis**: Die moderne Ansicht zeigt derzeit Produkte, Kategorien und Blog-Artikel an. Hersteller-Suchergebnisse sind nur im mobilen Tab-Fallback sichtbar.

---

### Kategorie Suche aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert einen zusätzlichen Tab im Such-Overlay, der passende Kategorien zum Suchbegriff anzeigt. Die Suche durchsucht Kategoriename, Beschreibung, Meta-Titel, Meta-Beschreibung und Keywords.

**Anwendungsbeispiel**: Ideal für Shops mit vielen Kategorien. Wenn ein Kunde nach "Jacken" sucht, werden neben den Produkten auch die Kategorie "Herrenjacken" oder "Damenjacken" angezeigt.

---

### Blog Suche aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert die Suche in Blog-Artikeln. Es wird ein zusätzlicher Tab "Blog" im Such-Overlay angezeigt. Unterstützt werden NetzP Blog und H1 Web Blog.

**Voraussetzung**: Ein kompatibles Blog-Plugin muss installiert sein (NetzP Blog oder H1 Web Blog).

**Anwendungsbeispiel**: Nützlich für Shops mit Content-Marketing-Strategie. Wenn ein Kunde nach "Pflege" sucht, werden auch Blog-Artikel wie "Die richtige Lederpflege" angezeigt.

---

### Breite des Suche-Overlays

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Standard**     | 500px  |
| **Erforderlich** | Nein   |

**Beschreibung**: Definiert die Breite des Such-Overlays. Sie können jeden gültigen CSS-Wert verwenden (px, %, vw, etc.).

**Beispielwerte**:
- `500px` - Feste Breite von 500 Pixeln
- `50%` - 50% der Viewport-Breite
- `80vw` - 80% der Viewport-Breite

**Anwendungsbeispiel**: Passen Sie die Breite an Ihr Theme an. Bei vielen Produkten pro Zeile empfiehlt sich eine größere Breite wie `800px` oder `70%`.

---

### Anzahl Produkte pro Spalte

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | 3       |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, wie viele Produkte pro Zeile im Such-Overlay angezeigt werden.

**Optionen**:
- `2`: Zwei Produkte pro Zeile - größere Produktdarstellung
- `3`: Drei Produkte pro Zeile - ausgewogenes Layout (empfohlen)
- `4`: Vier Produkte pro Zeile - kompakte Darstellung
- `6`: Sechs Produkte pro Zeile - sehr kompakte Darstellung

**Anwendungsbeispiel**: Wählen Sie 2 oder 3 für Produkte, bei denen Bilder wichtig sind (z.B. Mode). Wählen Sie 4 oder 6 für technische Produkte, bei denen Text wichtiger ist.

---

### Box-Layout

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Suche   |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt das Aussehen der Produktboxen im Such-Overlay.

**Optionen**:
- `Suche`: Spezielles Such-Layout, optimiert für schnelle Übersicht
- `Standard`: Standard-Shopware-Produktbox mit allen Details
- `Großes Bild`: Bildorientiertes Layout mit großem Produktbild
- `Minimal`: Minimalistisches Layout, nur die wichtigsten Informationen

**Anwendungsbeispiel**:
- "Suche" für schnelle Produktfindung
- "Großes Bild" für Mode- oder Lifestyle-Shops
- "Minimal" für technische Produkte oder B2B-Shops

---

### Zeige Kategoriebilder

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt das Kategoriebild neben dem Kategorienamen in den Suchergebnissen an.

**Voraussetzung**: Die Kategorien müssen über Bilder verfügen (unter Kataloge → Kategorien → [Kategorie] → Bild).

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Ihre Kategorien aussagekräftige Bilder haben, die die Navigation erleichtern.

---

### Zeige Herstellerbilder

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt das Herstellerlogo neben dem Herstellernamen in den Suchergebnissen an.

**Voraussetzung**: Die Hersteller müssen über Logos verfügen (unter Kataloge → Hersteller → [Hersteller] → Logo).

**Anwendungsbeispiel**: Besonders nützlich für Shops mit bekannten Marken, da Logos schneller erkannt werden als Text.

---

## Such Konfiguration

Diese Einstellungen ermöglichen eine präzisere Produktsuche anhand von eindeutigen Identifikatoren.

### Suche nach eindeutigen Produkten aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert die erweiterte Suchfunktion, die Produkte anhand ihrer eindeutigen Identifikatoren (EAN, Artikelnummer, Herstellernummer) findet. Diese Suche ist exakter als die Volltextsuche.

**Anwendungsbeispiel**: Ideal für B2B-Shops oder technische Produkte, bei denen Kunden oft nach exakten Nummern suchen. Wenn ein Kunde "4006381333931" (EAN) eingibt, wird direkt das richtige Produkt angezeigt.

---

### Spezifisch suchen nach

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Mehrfachwahl |
| **Standard**     | Alle aktiv   |
| **Erforderlich** | Nein         |

**Beschreibung**: Bestimmt, welche Produktfelder für die eindeutige Suche verwendet werden.

**Optionen**:
- `Produktnummer`: Ihre interne Artikelnummer (SKU)
- `Herstellernummer`: Die Artikelnummer des Herstellers (MPN)
- `EAN/GTIN`: Der Barcode des Produkts

**Anwendungsbeispiel**: Deaktivieren Sie Felder, die in Ihrem Shop nicht gepflegt werden oder nicht relevant sind. B2B-Shops sollten alle Optionen aktiviert lassen.

---

### Formatierung bei Suche entfernen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Entfernt Leerzeichen, Bindestriche und andere Formatierungszeichen aus dem Suchbegriff vor der Suche. Eine Suche nach "XY 00-11" findet dann auch Produkte mit der Nummer "XY0011".

**Hinweis**: Diese Funktion ist nicht umkehrbar. Die Suche nach "XY0011" findet automatisch auch "XY 00-11".

**Anwendungsbeispiel**: Sehr nützlich, wenn Artikelnummern unterschiedlich formatiert eingegeben werden können (mit/ohne Bindestriche, mit/ohne Leerzeichen).

---

### Suche schließt Elternprodukte ein

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Bei aktivierter Option wird auch nach der Artikelnummer des Elternprodukts gesucht. Wenn eine Variante die gleiche Nummer wie ihr Hauptprodukt hat, wird das passende Produkt angezeigt.

**Anwendungsbeispiel**: Wichtig für Shops mit Varianten, bei denen das Hauptprodukt eine übergeordnete Artikelnummer hat. Deaktivieren Sie diese Option, wenn jede Variante eine völlig eigenständige Nummer haben soll.

---

## Verkaufskanal-spezifische Einstellungen

Alle Einstellungen können pro Verkaufskanal individuell konfiguriert werden.

| Einstellung                               | Geltungsbereich    |
| ----------------------------------------- | ------------------ |
| Ansichtsmodus                             | Pro Verkaufskanal  |
| Kategorie Suche aktivieren                | Pro Verkaufskanal  |
| Blog Suche aktivieren                     | Pro Verkaufskanal  |
| Breite des Suche-Overlays                 | Pro Verkaufskanal  |
| Anzahl Produkte pro Spalte                | Pro Verkaufskanal  |
| Box-Layout                                | Pro Verkaufskanal  |
| Zeige Kategoriebilder                     | Pro Verkaufskanal  |
| Zeige Herstellerbilder                    | Pro Verkaufskanal  |
| Suche nach eindeutigen Produkten          | Pro Verkaufskanal  |
| Spezifisch suchen nach                    | Pro Verkaufskanal  |
| Formatierung bei Suche entfernen          | Pro Verkaufskanal  |
| Suche schließt Elternprodukte ein         | Pro Verkaufskanal  |

**Navigation**: Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren → Verkaufskanal wählen

---

## Empfohlene Konfigurationen

### Für B2C-Shops (Mode, Lifestyle)

| Einstellung                    | Empfohlener Wert |
| ------------------------------ | ---------------- |
| Ansichtsmodus                  | Modern           |
| Kategorie Suche aktivieren     | An               |
| Blog Suche aktivieren          | An (falls Blog)  |
| Breite des Suche-Overlays      | 600px            |
| Anzahl Produkte pro Spalte     | 3                |
| Box-Layout                     | Großes Bild      |
| Zeige Kategoriebilder          | An               |
| Suche nach eindeutigen Produkten | Aus            |

### Für B2B-Shops (Technische Produkte)

| Einstellung                      | Empfohlener Wert     |
| -------------------------------- | -------------------- |
| Ansichtsmodus                    | Standard             |
| Kategorie Suche aktivieren       | An                   |
| Blog Suche aktivieren            | Aus                  |
| Breite des Suche-Overlays        | 700px                |
| Anzahl Produkte pro Spalte       | 4                    |
| Box-Layout                       | Minimal              |
| Suche nach eindeutigen Produkten | An                   |
| Spezifisch suchen nach           | Alle Optionen        |
| Formatierung bei Suche entfernen | An                   |
| Suche schließt Elternprodukte ein | An                  |
