# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von Product Slider Advanced.

---

## Inhaltsverzeichnis

- [Slider hinzufügen](#slider-hinzufügen)
- [Inhaltstypen](#inhaltstypen)
- [Teaser-Funktionen](#teaser-funktionen)
- [Slider-Einstellungen](#slider-einstellungen)
- [Responsive Verhalten](#responsive-verhalten)
- [Fehlerbehebung](#fehlerbehebung)

---

## Slider hinzufügen

### So fügen Sie den Slider zu einer Erlebniswelt hinzu

1. Öffnen Sie **Inhalte → Erlebniswelten** in Ihrer Shopware Administration
2. Wählen Sie eine bestehende Erlebniswelt oder erstellen Sie eine neue
3. Klicken Sie auf eine Sektion, um Blöcke hinzuzufügen
4. Wählen Sie unter **Commerce** den Block **Produkt Slider Advanced**
5. Ziehen Sie den Block in die gewünschte Position

**Ort**: Inhalte → Erlebniswelten → [Erlebniswelt bearbeiten]

### Element konfigurieren

Nach dem Einfügen:
1. Klicken Sie auf das Slider-Element im Block
2. Das Konfigurationspanel öffnet sich auf der rechten Seite
3. Konfigurieren Sie die drei Tabs: **Inhalt**, **Slider Teaser** und **Einstellungen**
4. Speichern Sie die Erlebniswelt

---

## Inhaltstypen

Product Slider Advanced unterstützt vier verschiedene Inhaltstypen. Jeder Typ eignet sich für unterschiedliche Anwendungsfälle.

### Manuelle Produktauswahl

**Was sie bewirkt**: Sie wählen gezielt einzelne Produkte aus, die im Slider erscheinen sollen.

**So verwenden Sie sie**:
1. Wählen Sie im Tab **Inhalt** den Inhaltstyp **Manuelle Produktauswahl**
2. Klicken Sie auf das Produkte-Feld
3. Suchen Sie nach Produkten und wählen Sie diese aus
4. Die Produkte erscheinen in der Reihenfolge, in der Sie sie auswählen

**Tipps & Best Practices**:
- Ideal für Bestseller-Listen oder saisonale Highlights
- Achten Sie darauf, nur aktive Produkte auszuwählen
- Begrenzen Sie die Auswahl auf 8-12 Produkte für optimale Performance

---

### Produkte nach Kategorie

**Was sie bewirkt**: Lädt automatisch Produkte aus einer ausgewählten Kategorie.

**So verwenden Sie sie**:
1. Wählen Sie im Tab **Inhalt** den Inhaltstyp **Produkte nach Kategorie**
2. Wählen Sie die gewünschte Kategorie aus
3. Die Sortierung aus der Kategorie-Konfiguration wird automatisch übernommen
4. Stellen Sie unter **Max. dargestellte Elemente** ein, wie viele Produkte geladen werden

**Tipps & Best Practices**:
- Nutzen Sie dies für "Neue Produkte" oder "Sale"-Kategorien
- Die Kategorie-Sortierung wird berücksichtigt (z.B. "Neueste zuerst")
- Kombinieren Sie mit der Variantenanzeige-Einstellung für saubere Ergebnisse

---

### Kategorien

**Was sie bewirkt**: Zeigt ausgewählte Kategorien als Slider-Elemente an - nicht Produkte, sondern Kategorie-Karten mit Bild und Beschreibung.

**So verwenden Sie sie**:
1. Wählen Sie im Tab **Inhalt** den Inhaltstyp **Kategorien**
2. Wählen Sie die Kategorien aus, die angezeigt werden sollen
3. Konfigurieren Sie die **Hintergrundfarbe** und **Textfarbe** der Kategorie-Boxen
4. Passen Sie die **Max. Länge der Beschreibung** an

**Tipps & Best Practices**:
- Ideal für die Startseite, um Hauptkategorien zu präsentieren
- Stellen Sie sicher, dass Ihre Kategorien Bilder haben
- Verwenden Sie Custom Fields für individuelle Kategorie-Bilder im Slider

**Kategorie Custom Fields**:
Das Plugin unterstützt spezielle Custom Fields für Kategorien:
- `webla_productslideradvanced_custom_fields_media`: Alternatives Bild für den Slider
- `webla_productslideradvanced_custom_fields_text`: Alternativer Beschreibungstext

---

### Dynamische Produktgruppe

**Was sie bewirkt**: Lädt Produkte aus einem Product Stream (Dynamische Produktgruppe), die sich automatisch aktualisieren.

**So verwenden Sie sie**:
1. Erstellen Sie zunächst eine Dynamische Produktgruppe unter **Kataloge → Dynamische Produktgruppen**
2. Wählen Sie im Tab **Inhalt** den Inhaltstyp **Dynamische Produktgruppe**
3. Wählen Sie die gewünschte Produktgruppe aus

**Tipps & Best Practices**:
- Perfekt für "Angebote" mit automatischen Preis-Filtern
- Ideal für "Neue Produkte" mit Datum-Bedingungen
- Die Produkte aktualisieren sich automatisch basierend auf den Regeln

---

## Teaser-Funktionen

Der Teaser ist ein optionaler Bereich neben dem Slider, der zusätzliche Informationen oder Calls-to-Action anzeigen kann.

### Teaser aktivieren

1. Wechseln Sie zum Tab **Slider Teaser**
2. Aktivieren Sie **Teaser anzeigen**
3. Der Slider teilt sich nun in Teaser-Bereich und Produkt-Slider

### Teaser-Bereich gestalten

**Bild hinzufügen**:
1. Klicken Sie auf **Bild hochladen** oder wählen Sie ein Bild aus der Medienbibliothek
2. Wählen Sie den **Anzeigemodus** (Cover, Contain, etc.)
3. Das Bild wird als Hintergrund des Teaser-Bereichs angezeigt

**Text hinzufügen**:
1. Geben Sie eine **Teaser Überschrift** ein
2. Fügen Sie optional einen **Teaser Text** hinzu
3. Passen Sie die **Teaser Schriftfarbe** an Ihr Bild an
4. Verwenden Sie die **Farbe des Teaser-Overlays** für bessere Lesbarkeit

**Link hinzufügen**:
1. Geben Sie das **Teaser Link Ziel** ein (z.B. `/sale/`)
2. Fügen Sie einen **Teaser Link Text** für den Button hinzu (z.B. "Jetzt entdecken")
3. Der gesamte Teaser-Bereich wird klickbar

### Teaser als Überschrift verwenden

Aktivieren Sie **Teaser als Überschrift anzeigen**, um die Teaser-Überschrift als Titel über dem gesamten Slider zu zeigen. Dies ist nützlich für Sektions-Titel wie "Unsere Bestseller".

### Teaser-Breite anpassen

Unter **Einstellungen → Breite des Teasers** können Sie festlegen, wie viel Platz der Teaser einnimmt:
- 20-30%: Dezenter Teaser neben dem Slider
- 40-50%: Gleichwertige Darstellung
- 0%: Teaser ausblenden (trotz aktivierter Option)

---

## Slider-Einstellungen

### Navigation konfigurieren

**Navigationspfeile**:
- Zeigt Pfeil-Buttons links und rechts vom Slider
- Benutzer können manuell durch die Produkte navigieren

**Punkte-Navigation**:
- Aktivieren Sie **Navigation** für Punkte unter dem Slider
- Zeigt die aktuelle Position und ermöglicht direktes Springen

**Endlosschleife**:
- Bei aktivierter **Endlosschleife** springt der Slider vom letzten zum ersten Element
- Deaktivieren Sie dies, wenn ein definiertes Ende gewünscht ist

### Automatisches Scrollen

1. Aktivieren Sie **Automatisches Scrollen**
2. Stellen Sie die **Geschwindigkeit** ein (in Millisekunden)
   - 1500ms = 1,5 Sekunden zwischen Slides
   - 3000ms = 3 Sekunden zwischen Slides
3. Der Slider pausiert automatisch beim Hover (Maus über Element)

### Visuelle Anpassungen

**Produktbox-Layout**:
- `Standard`: Vollständige Produktkarte mit allen Informationen
- `Bild`: Fokus auf Produktbild, reduzierte Informationen
- `Minimal`: Kompakte Darstellung

**Umrandung**:
- Fügt einen Rahmen um den Slider und die Navigations-Buttons hinzu

**Vertikale Ausrichtung**:
- Positioniert den Slider im CMS-Block (Oben, Mitte, Unten)

---

## Responsive Verhalten

Das Plugin passt sich automatisch an verschiedene Bildschirmgrößen an.

### Automatische Anpassungen

| Bildschirmgröße | Angezeigte Produkte | Abstand |
| --------------- | ------------------- | ------- |
| XS (Mobil)      | 2                   | 20px    |
| SM (Tablet)     | 2                   | 20px    |
| MD              | 2                   | 30px    |
| LG              | 3                   | 30px    |
| XL              | 3                   | 30px    |
| XXL             | 3                   | 30px    |

### Teaser auf Mobilgeräten

Unter **Slider Teaser → Verhalten des Teasers auf Mobilgeräten**:
- `Über Slider anzeigen`: Der Teaser erscheint oberhalb der Produkte
- `Verstecken`: Der Teaser wird auf Mobilgeräten ausgeblendet

### Randabstand anpassen

Verwenden Sie **Randabstand** und **Randabstand auf Mobilgeräten** für unterschiedliche Abstände:
- Desktop: Nutzen Sie größere Abstände (20-50px) für mehr Weißraum
- Mobil: Kleinere Abstände (0-20px) für optimale Platzausnutzung

---

## Fehlerbehebung

### Keine Produkte werden angezeigt

**Symptom**: Der Slider-Bereich ist leer oder zeigt keine Produkte.

**Mögliche Ursachen und Lösungen**:
1. **Keine Produkte ausgewählt**: Prüfen Sie den Tab "Inhalt" und wählen Sie Produkte/Kategorien aus
2. **Produkte nicht aktiv**: Stellen Sie sicher, dass die Produkte im Shop aktiv sind
3. **Kategorie leer**: Die ausgewählte Kategorie enthält keine aktiven Produkte
4. **Product Stream ungültig**: Prüfen Sie die Regeln Ihrer dynamischen Produktgruppe

### Teaser wird nicht angezeigt

**Symptom**: Der Teaser-Bereich erscheint nicht, obwohl konfiguriert.

**Lösungen**:
1. Stellen Sie sicher, dass **Teaser anzeigen** aktiviert ist
2. Prüfen Sie, ob die **Breite des Teasers** nicht auf 0% gesetzt ist
3. Auf Mobilgeräten: Prüfen Sie das **Verhalten des Teasers auf Mobilgeräten**

### Bilder werden nicht korrekt angezeigt

**Symptom**: Produktbilder oder Teaser-Bild erscheinen verzerrt oder abgeschnitten.

**Lösungen**:
1. Passen Sie den **Anzeigemodus** an (Cover, Contain, etc.)
2. Prüfen Sie die **Max. Höhe des Sliders**
3. Stellen Sie sicher, dass Produktbilder in der richtigen Auflösung vorliegen

### Slider-Navigation funktioniert nicht

**Symptom**: Pfeile oder Punkte reagieren nicht.

**Lösungen**:
1. Stellen Sie sicher, dass **Navigationspfeile** aktiviert ist
2. Prüfen Sie, ob genügend Produkte für Navigation vorhanden sind
3. Leeren Sie den Shopware-Cache unter **Einstellungen → System → Caches & Indizes**

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
