# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit Product Slider Advanced.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

Das Plugin erweitert den Shopware CMS-Editor um einen neuen Block-Typ für Produkt- und Kategorie-Slider.

```
[Erlebniswelt-Editor] → [Block konfigurieren] → [Datenquelle wählen] → [Storefront-Darstellung]
```

**Beispielablauf**:
1. Sie fügen den "Produkt Slider Advanced" Block in eine Erlebniswelt ein
2. Sie wählen einen Inhaltstyp (Produkte, Kategorie, etc.)
3. Das Plugin lädt zur Laufzeit die entsprechenden Produkte/Kategorien
4. Die Inhalte werden responsive im Slider dargestellt

---

## Häufige Workflows

### Anleitung: Bestseller-Slider auf der Startseite erstellen

**Ziel**: Einen manuell kuratierten Slider mit Ihren Top-Produkten auf der Startseite anzeigen.

**Voraussetzungen**:
- Aktive Produkte im Shop
- Zugriff auf die Erlebniswelt der Startseite

**Schritte**:

1. **Erlebniswelt öffnen**
   - Navigieren Sie zu: `Inhalte → Erlebniswelten`
   - Öffnen Sie die Startseiten-Erlebniswelt

2. **Block hinzufügen**
   - Klicken Sie auf eine Sektion
   - Wählen Sie unter "Commerce" den Block **Produkt Slider Advanced**
   - Ziehen Sie den Block an die gewünschte Position

3. **Produkte auswählen**
   - Klicken Sie auf das Slider-Element
   - Wählen Sie **Inhaltstyp**: Manuelle Produktauswahl
   - Suchen Sie Ihre Bestseller und wählen Sie 6-10 Produkte aus

4. **Teaser als Überschrift konfigurieren**
   - Wechseln Sie zum Tab **Slider Teaser**
   - Aktivieren Sie **Teaser als Überschrift anzeigen**
   - Geben Sie als Überschrift "Unsere Bestseller" ein

5. **Einstellungen anpassen**
   - Wechseln Sie zum Tab **Einstellungen**
   - Setzen Sie **Navigationspfeile** auf An
   - Setzen Sie **Automatisches Scrollen** auf Aus (optional)

6. **Speichern und prüfen**
   - Speichern Sie die Erlebniswelt
   - Öffnen Sie die Storefront und prüfen Sie das Ergebnis

**Ergebnis**: Ein Slider mit der Überschrift "Unsere Bestseller" und Ihren ausgewählten Top-Produkten.

---

### Anleitung: Kategorie-Übersicht für die Startseite

**Ziel**: Hauptkategorien als visuelle Karten in einem Slider präsentieren.

**Voraussetzungen**:
- Kategorien mit Bildern konfiguriert
- Kategorien haben Beschreibungen

**Schritte**:

1. **Block einfügen**
   - Navigieren Sie zu: `Inhalte → Erlebniswelten`
   - Fügen Sie den **Produkt Slider Advanced** Block hinzu

2. **Kategorien als Inhaltstyp wählen**
   - Klicken Sie auf das Element
   - Wählen Sie **Inhaltstyp**: Kategorien
   - Wählen Sie Ihre Hauptkategorien aus (z.B. "Damen", "Herren", "Accessoires")

3. **Kategorie-Boxen stylen**
   - Setzen Sie **Hintergrundfarbe der Kategoriebox** passend zu Ihrem Design
   - Wählen Sie eine gut lesbare **Textfarbe**
   - Begrenzen Sie die Beschreibung auf ca. 80 Zeichen

4. **Teaser hinzufügen (optional)**
   - Aktivieren Sie **Teaser anzeigen**
   - Laden Sie ein passendes Bild hoch
   - Fügen Sie Überschrift "Unsere Kategorien" und einen Link zur Kategorieübersicht hinzu

5. **Slider-Einstellungen optimieren**
   - Setzen Sie **Max. dargestellte Elemente** auf die Anzahl Ihrer Kategorien
   - Aktivieren Sie **Endlosschleife** nur bei mehr als 3 Kategorien

**Ergebnis**: Ein visuell ansprechender Kategorie-Slider, der Kunden schnell zu den Hauptbereichen führt.

---

### Anleitung: Automatischen "Angebote der Woche" Slider einrichten

**Ziel**: Einen Slider erstellen, der automatisch reduzierte Produkte anzeigt.

**Voraussetzungen**:
- Eine dynamische Produktgruppe mit Preis-Regeln erstellt

**Schritte**:

1. **Dynamische Produktgruppe erstellen** (falls noch nicht vorhanden)
   - Navigieren Sie zu: `Kataloge → Dynamische Produktgruppen`
   - Klicken Sie auf **Neue dynamische Produktgruppe**
   - Name: "Angebote der Woche"
   - Fügen Sie eine Bedingung hinzu: "Produkt → Ist Rabatt" = Ja
   - Speichern Sie die Produktgruppe

2. **Slider in Erlebniswelt einfügen**
   - Öffnen Sie Ihre Erlebniswelt
   - Fügen Sie den **Produkt Slider Advanced** Block hinzu

3. **Produktgruppe verknüpfen**
   - Wählen Sie **Inhaltstyp**: Dynamische Produktgruppe
   - Wählen Sie Ihre erstellte Produktgruppe "Angebote der Woche"
   - Setzen Sie **Max. dargestellte Elemente** auf 8-12

4. **Teaser mit Call-to-Action gestalten**
   - Aktivieren Sie den Teaser
   - Laden Sie ein ansprechendes "Sale"-Bild hoch
   - Überschrift: "Angebote der Woche"
   - Link-Text: "Alle Angebote"
   - Link-Ziel: `/angebote/` (oder Ihre Sale-Kategorie)

5. **Automatisches Scrollen aktivieren** (optional)
   - Aktivieren Sie **Automatisches Scrollen**
   - Setzen Sie die Geschwindigkeit auf 3000ms

**Ergebnis**: Ein selbst-aktualisierender Slider, der immer die aktuellen Angebote zeigt.

---

### Anleitung: Hero-Bereich mit Teaser und Produkten

**Ziel**: Einen prominenten Slider mit großem Teaser-Bild und Produkten erstellen.

**Schritte**:

1. **Block in voller Breite einfügen**
   - Erstellen Sie eine Sektion mit voller Breite
   - Fügen Sie den **Produkt Slider Advanced** Block hinzu

2. **Teaser prominent gestalten**
   - Aktivieren Sie **Teaser anzeigen**
   - Setzen Sie **Breite des Teasers** auf 40%
   - Laden Sie ein hochwertiges Kampagnen-Bild hoch
   - Wählen Sie **Anzeigemodus**: Cover

3. **Teaser-Overlay für Lesbarkeit**
   - Setzen Sie **Farbe des Teaser-Overlays** auf `rgba(0, 0, 0, 0.3)` für dunklen Text
   - Oder `rgba(255, 255, 255, 0.5)` für hellen Text
   - Passen Sie die **Teaser Schriftfarbe** entsprechend an

4. **Teaser-Inhalte**
   - Überschrift: "Neue Kollektion 2024"
   - Text: "Entdecken Sie die neuesten Trends"
   - Link-Text: "Jetzt shoppen"
   - Link-Ziel: URL zur Kollektion

5. **Produkte auswählen**
   - Wählen Sie 6-8 Highlight-Produkte der Kollektion

6. **Höhe anpassen**
   - Setzen Sie **Max. Höhe des Sliders** auf 450-550px
   - Aktivieren Sie **Navigationspfeile**

**Ergebnis**: Ein visuell eindrucksvoller Hero-Bereich mit Kampagnen-Teaser und Produkten.

---

### Anleitung: Mobil-optimierten Slider erstellen

**Ziel**: Einen Slider konfigurieren, der auf allen Geräten optimal aussieht.

**Schritte**:

1. **Teaser-Verhalten auf Mobil festlegen**
   - Entscheiden Sie: Teaser auf Mobil anzeigen oder verstecken?
   - Bei komplexem Teaser: Wählen Sie "Verstecken"
   - Bei einfachem Teaser: Wählen Sie "Über Slider anzeigen"

2. **Randabstände konfigurieren**
   - **Randabstand**: 30px (Desktop)
   - **Randabstand auf Mobilgeräten**: 10px

3. **Element-Breite anpassen**
   - Setzen Sie **Breite eines Slider-Elements** auf 280px
   - Dies sorgt für optimale Darstellung auf kleinen Bildschirmen

4. **Navigation prüfen**
   - Aktivieren Sie **Navigationspfeile** für Desktop
   - Deaktivierte Pfeile ermöglichen Touch-Swipe auf Mobil

5. **Testen Sie auf verschiedenen Geräten**
   - Öffnen Sie die Storefront
   - Nutzen Sie die Browser-Entwicklertools für Mobile-Ansicht
   - Prüfen Sie Touch-Gesten und Lesbarkeit

**Ergebnis**: Ein responsiver Slider, der auf Desktop, Tablet und Smartphone optimal funktioniert.

---

## Schnellreferenz

| Aufgabe | Wichtige Schritte | Erforderliche Einstellungen |
| ------- | ----------------- | --------------------------- |
| Bestseller-Slider | Manuelle Auswahl, Teaser als Headline | Inhaltstyp: Manuell, Teaser als Überschrift |
| Kategorie-Übersicht | Kategorien wählen, Farben anpassen | Inhaltstyp: Kategorien, Box-Farben |
| Auto-Update Angebote | Product Stream verknüpfen | Inhaltstyp: Dynamische Produktgruppe |
| Hero mit Teaser | Teaser 40%, großes Bild | Teaser aktiv, Breite 40%, Overlay |
| Mobil-optimiert | Randabstände, Element-Breite | Mobil-Randabstand, Element-Breite 280px |

---

## Best Practices

1. **Begrenzen Sie die Produktanzahl**: 8-12 Produkte sind ideal für die Performance und Übersichtlichkeit
2. **Nutzen Sie hochwertige Bilder**: Besonders für den Teaser-Bereich und bei Kategorie-Slidern
3. **Testen Sie auf Mobilgeräten**: Die Mehrheit der Nutzer shoppt mobil
4. **Halten Sie Texte kurz**: Kategorie-Beschreibungen auf 80-100 Zeichen begrenzen
5. **Konsistentes Styling**: Passen Sie Farben an Ihr Shop-Design an

## Was Sie vermeiden sollten

- Zu viele Produkte laden (über 15) - beeinträchtigt die Ladezeit
- Automatisches Scrollen zu schnell einstellen (unter 2000ms)
- Teaser ohne Bild aktivieren - sieht unvollständig aus
- Inkonsistente Produktbilder - verwenden Sie einheitliche Bildgrößen
- Doppelte Slider auf einer Seite mit gleichen Produkten
