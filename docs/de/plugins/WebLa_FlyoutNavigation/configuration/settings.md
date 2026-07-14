# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das Plugin **Flyout Navigation**.

**Navigation**: Erweiterungen → Meine Erweiterungen → Flyout Navigation → Konfigurieren

> Hinweis: Alle Einstellungen werden **pro Verkaufskanal** gepflegt. Achte darauf, oben in der Konfiguration den richtigen Verkaufskanal ausgewählt zu haben, bevor du Änderungen vornimmst.

---

## Grundeinstellungen

Aktivierung des Plugins, allgemeine Verhaltens- und Layout-Optionen.

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Flyout Navigation für diesen Verkaufskanal aktivieren | Schalter | Master-Schalter. Solange deaktiviert, verhält sich der Shop wie ohne das Plugin. |
| Hintergrundfarbe des Headers | Farbwahl | Hintergrundfarbe der Header-Leiste. |
| Home-Link in Navigationsleiste anzeigen | Schalter | Zeigt einen zusätzlichen „Home"-Link am Anfang der Hauptnavigation. |
| Globale Anzahl an anzuzeigenden Navigationsebenen für Flyouts | Zahl | Wie viele Ebenen das Flyout tief darstellt (Default 3). Kann pro Kategorie überschrieben werden. |
| Trigger für Hauptmenü-Flyout | Auswahl (Hover / Klick) | Wie das Haupt-Dropdown geöffnet wird. |
| Trigger für Unterebenen | Auswahl (Hover / Klick) | Wie Unterkategorien innerhalb des Flyouts geöffnet werden. |
| Alle Kategorien Navigation auf Desktop anzeigen | Schalter | Zeigt einen prominenten „Alle Kategorien"-Eintrag am Anfang der Navigation. **Nicht** mit „Mobile Navigation auf Desktop" kombinierbar. |
| Burgermenü-Icon davor anzeigen | Schalter | Zeigt vor dem „Alle Kategorien"-Label das Stack-/Burger-Icon. |
| Text für „Alle Kategorien" | Text | Frei wählbarer Label-Text für den „Alle Kategorien"-Eintrag. Standard: „Alle Kategorien". |
| Mobile Navigation auch auf Desktop anzeigen | Schalter | Zeigt statt der klassischen Desktop-Navigation den Burger-Toggle und nutzt die Offcanvas-Navigation. **Nicht** mit „Alle Kategorien" kombinierbar. |
| Sticky Header aktivieren | Schalter | Header bleibt beim Scrollen am oberen Bildschirmrand sichtbar. |
| Benutzerdefinierte Topbar aktivieren | Schalter | Aktiviert die eigene Topbar oberhalb des Headers. Pflegbar im Abschnitt „Custom Topbar". |
| Topbar ausblenden wenn sticky | Schalter | Blendet die Topbar aus, sobald der Header in den Sticky-Zustand wechselt. Greift nur, wenn „Sticky Header" aktiv ist. |
| Logo für Sticky Header | Medien-Feld | Optionales separates Logo für den Sticky-Zustand. Bleibt das Standard-Logo wenn leer. |

---

## Navigationsleiste

Styling der Hauptnavigation (Schrift, Farben, Abstände, Border).

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Hintergrundfarbe für Navigationsleiste | Farbwahl | Hintergrund der Hauptnavigation. |
| Schriftgröße für Navigationseinträge (px) | Text | z. B. `16px`. |
| Schriftfarbe für die Navigation-Hauptpunkte | Farbwahl | Standard-Textfarbe der Menüpunkte. |
| Farbe für Hover-Effekt | Farbwahl | Textfarbe beim Überfahren mit der Maus. |
| Hintergrundfarbe Hover der Menü-Items | Farbwahl | Hintergrund eines Menüpunkts im Hover-Zustand. |
| Farbe für aktive Kategorie | Farbwahl | Hervorhebung der aktuell aktiven Kategorie. |
| Border-Bottom für Menü-Item | Text | CSS-Border-Definition, z. B. `1px solid #e0e0e0`. Leer = kein Border. |
| Innenabstand (Padding) für Navbar-Items | Text | CSS-Padding-Definition, z. B. `0.5rem 1rem`. |

---

## Flyout Menü

Verhalten und Styling der Dropdown-/Flyout-Panels selbst.

### Verhalten

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Flyout über volle Breite anzeigen | Schalter | Der Flyout spannt sich über die gesamte Viewport-Breite (sog. Mega-Menu-Layout). Deaktiviert = kompakter Flyout direkt unter dem Trigger. |
| Hauptmenüpunkt, ab dem das Dropdown nach links geöffnet werden soll | Auswahl (Nur per Kategorie-Einstellung / Ab dem 1.–5. Menüpunkt / Nie) | Steuert die globale Öffnungsrichtung der Nicht-Vollbreite-Flyouts. Im Default („Nur per Kategorie-Einstellung") entscheidet das Kategorie-Zusatzfeld; ein Schwellwert lässt alle Dropdowns ab dem N. Menüpunkt nach links öffnen (das Kategorie-Zusatzfeld kann zusätzlich Dropdowns überschreiben); „Nie" zwingt alle Dropdowns nach rechts und ignoriert das Kategorie-Zusatzfeld. |
| Icon für Kategorien mit Unterkategorien | Auswahl (Keins / Pfeil nach rechts / Chevron nach rechts) | Icon hinter Kategorien mit Unterkategorien. Default: Chevron nach rechts. Bei nach links öffnenden Flyouts wandert das Icon automatisch nach vorne und zeigt nach links. |
| Schließen-Button ausblenden | Schalter | Blendet den Schließen-Button im Flyout aus. Der Button wird ohnehin nur in der Vollbreite-Variante angezeigt. |

### Styling

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Hintergrundfarbe Flyout | Farbwahl | Hintergrund des Flyout-Panels. |
| Border-Top für Flyout | Text | CSS-Border als Abgrenzung zur Menü-Leiste, z. B. `2px solid #e0e0e0`. |
| Schriftgröße für Flyout-Einträge (px) | Text | z. B. `16px`. |
| Schriftfarbe im Flyout | Farbwahl | Standard-Textfarbe der Flyout-Einträge. |
| Farbe für Hover-Effekt im Flyout | Farbwahl | Textfarbe beim Hover. |
| Hintergrundfarbe Hover der Flyout-Items | Farbwahl | Hintergrund eines Flyout-Eintrags im Hover-Zustand. |
| Innenabstand (Padding) für Flyout-Menü-Items | Text | CSS-Padding, z. B. `0.5rem 1rem`. |
| Border-Bottom für Flyout-Items | Text | Trennlinie zwischen Flyout-Einträgen, z. B. `1px solid #e0e0e0`. |
| Hintergrundfarbe für den Schließen-Button | Farbwahl | Nur sichtbar im Vollbreite-Modus. |
| Farbe für das Schließen-Button-Symbol | Farbwahl | Icon-Farbe des Schließen-Buttons. |

---

## „Alle Kategorien" Menüpunkt – Styling

Optisches Feintuning für den optionalen „Alle Kategorien"-Eintrag.

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Hintergrundfarbe für „Alle Kategorien" | Farbwahl | Hintergrund des Buttons in der Navbar. |
| Schriftfarbe für „Alle Kategorien" | Farbwahl | Label-Farbe. |
| Farbe des Burgermenü-Icons | Farbwahl | Icon-Farbe (nur sichtbar, wenn das Burger-Icon davor aktiviert ist). |

---

## Mobile Navigation – Styling

Optisches Feintuning für die mobile Offcanvas-Navigation und den Burger-Toggle.

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Hintergrundfarbe für Burgermenü-Icon | Farbwahl | Hintergrund des Burger-Toggle-Buttons im Header. |
| Farbe des Burgermenü-Icons | Farbwahl | Icon-Farbe des Burger-Toggle-Buttons. |
| Schriftfarbe für die aktive Kategorie | Farbwahl | Hervorhebung der aktuell aktiven Kategorie im Offcanvas. |
| Schriftfarbe für „Zeige alle Kategorien an" | Farbwahl | Farbe des Home-/Root-Links im Offcanvas. |

---

## Benutzerdefinierte Topbar

Dünne Leiste oberhalb des Headers mit bis zu drei USP-/Kontakt-Items. Voraussetzung: **„Benutzerdefinierte Topbar aktivieren"** in den Grundeinstellungen ist eingeschaltet **und** mindestens ein Item-Text ist gepflegt.

### Allgemein

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Ausrichtung der Topbar-Items | Auswahl (Links / Mittig / Rechts) | Horizontale Position der Items innerhalb der Topbar. |
| Hintergrundfarbe der Topbar | Farbwahl | Hintergrund der gesamten Topbar. |
| Allgemeine Schriftfarbe der Topbar-Elemente | Farbwahl | Standard-Schriftfarbe für alle Items, wenn nicht individuell gesetzt. |

### Topbar Item 1, 2 und 3

Pro Item identische Felder. Items mit leerem Text werden nicht angezeigt.

| Einstellung | Typ | Beschreibung |
|-------------|-----|--------------|
| Topbar Item X – Text | Text | Anzeigetext des Items. Wenn leer, wird das Item ausgeblendet. |
| Topbar Item X – Link-Typ | Auswahl (URL / E-Mail / Telefonnummer) | Wie das Ziel im „Verlinken auf"-Feld interpretiert wird. |
| Topbar Item X – Verlinken auf | Text | Linkziel. Bei URL z. B. `https://…`, bei E-Mail die E-Mail-Adresse, bei Telefonnummer die Rufnummer. Leer lassen, wenn kein Link gewünscht ist. |
| Topbar Item X – Icon | Auswahl | Optionales Icon vor dem Text. Große Auswahl (Social Media, Kontakt, USP-Symbole, Pfeile etc.). „Keins" lässt es weg. |
| Topbar Item X – Schriftfarbe | Farbwahl | Individuelle Textfarbe, überschreibt die allgemeine Topbar-Schriftfarbe. |

---

## Kategorie-Zusatzfelder

Diese Felder findest du nicht in der Plugin-Konfiguration, sondern direkt an der Kategorie:

**Navigation**: Kataloge → Kategorien → [Kategorie wählen] → Zusatzfelder → „Flyout Navigation Einstellungen"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| Dropdown-Navigation deaktivieren | Schalter | Verhindert, dass der Flyout für diese Kategorie öffnet. Der Link führt direkt zur Kategorie-Seite. |
| Anzahl Navigationsebenen | Zahl (0–10) | Überschreibt die globale Ebenen-Tiefe für genau diese Kategorie. `0` oder leer = globaler Wert. |
| Icon vor Kategorienamen | Medien-Feld | Bild/Icon, das vor dem Kategorienamen im Flyout angezeigt wird. |
| Badge Text | Text | Text für ein Hinweis-Badge an der Kategorie (z. B. „NEU", „SALE"). |
| Badge Hintergrundfarbe | Farbwahl | Hintergrundfarbe des Badges. |
| Badge Textfarbe | Farbwahl | Schriftfarbe des Badges. |
| Aus Desktop-Navigationsleiste ausblenden | Schalter | Kategorie ist nicht mehr in der Haupt-Navbar sichtbar, bleibt aber im Flyout (z. B. unter „Alle Kategorien") erreichbar. |
| Bild im Flyout anzeigen | Schalter | Nur bei Vollbreite-Flyouts: zeigt ein Bild im Flyout. Standard ist das Kategorie-Bild. |
| Alternatives Flyout-Bild | Medien-Feld | Überschreibt das Standard-Kategoriebild im Flyout. |
| Dropdown nach links öffnen | Schalter | Der Flyout dieser Kategorie öffnet sich nach links statt nach rechts. Sinnvoll für Kategorien am rechten Rand der Navigation. Wird vom globalen Modus „Nie (immer nach rechts öffnen)" überschrieben. |
