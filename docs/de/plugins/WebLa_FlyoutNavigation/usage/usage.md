# Nutzungsanleitung

Diese Anleitung beschreibt alle Funktionen des Plugins **Flyout Navigation** aus Sicht des Shop-Betreibers und der Kunden.

Für die reine Tabellen-Referenz aller Felder siehe [Plugin-Einstellungen](../configuration/settings.md), für typische Setup-Schritte und Workflows die [How-To-Anleitung](../how-to.md).

---

## Mehrstufige Flyout-Navigation

**Shop-Betreiber**: Aktiviert die Flyout-Navigation pro Verkaufskanal und legt fest, wie viele Ebenen angezeigt werden sollen (global oder pro Kategorie). Der Trigger ist für Haupt- und Unterebenen jeweils separat auf Hover oder Klick einstellbar.

**Kunden**: Sehen statt der klassischen Shopware-Navigation ein modernes, mehrstufiges Flyout. Beim Überfahren oder Klicken einer Hauptkategorie öffnet sich ein Panel mit den Unterkategorien; weitere Ebenen klappen sich – je nach Konfiguration – nach rechts oder links auf.

---

## Vollbreite- oder kompakter Dropdown-Modus

**Shop-Betreiber**: Wählt im Abschnitt *Flyout Menü – Einstellungen* zwischen einem Vollbreite-Flyout (Mega-Menu-Look mit optionalem Kategoriebild und Schließen-Button) und einem kompakten Dropdown, das nur die Breite seines Inhalts einnimmt und direkt unterhalb des ausgelösten Menüpunkts erscheint.

**Kunden**: Sehen entweder ein über die volle Bildschirmbreite gespanntes Mega-Menu (häufig bei großen Sortimenten) oder ein klassisches, kompaktes Dropdown direkt unter dem Menüpunkt, den sie ansteuern.

---

## Öffnungsrichtung (links / rechts)

**Shop-Betreiber**: Steuert die Öffnungsrichtung der Nicht-Vollbreite-Dropdowns. Drei Modi stehen zur Auswahl: *Nur per Kategorie-Einstellung* (Default; entscheidet das Kategorie-Zusatzfeld), *Ab dem 1.–5. Menüpunkt* (Schwellwert; Kategorie-Zusatzfeld überschreibt zusätzlich) und *Nie (immer nach rechts öffnen)* (harte globale Sperre). Zusätzlich kann pro Kategorie das Zusatzfeld *„Dropdown nach links öffnen"* gesetzt werden.

**Kunden**: Bemerken die Funktion in der Regel gar nicht aktiv – sie sehen lediglich, dass Dropdowns, die sonst über den rechten Bildschirmrand hinauslaufen würden, sauber nach links aufklappen. Bei der Öffnung wandert das Pfeil-/Chevron-Icon der Unterkategorien automatisch vor den Kategorienamen und zeigt nach links, damit die optische Richtung stimmt.

---

## Automatisches Umschalten bei Platzmangel

**Shop-Betreiber**: Muss nichts zusätzlich konfigurieren – das Plugin prüft beim Öffnen jedes Dropdowns, ob es den Viewport verlässt. Tut es das, dreht es die Richtung selbstständig um (außer der globale Modus „Nie" ist gesetzt). Funktioniert auch dann, wenn die Navigationsleiste auf kleineren Bildschirmen in zwei Zeilen umbricht.

**Kunden**: Sehen niemals einen abgeschnittenen oder über den Bildschirmrand laufenden Flyout – die Navigation reagiert auch bei schmalen Layouts vorhersehbar.

---

## „Alle Kategorien"-Menü auf dem Desktop

**Shop-Betreiber**: Aktiviert optional einen zusätzlichen Eintrag, der den kompletten Kategoriebaum in einem Flyout abbildet. Der Label-Text und ein Burger-Icon davor sind frei konfigurierbar.

**Kunden**: Bekommen einen prominenten Einstiegspunkt, der den gesamten Kategoriebaum auf einen Blick zeigt – besonders nützlich in Shops mit vielen Hauptkategorien.

---

## Sticky Header

**Shop-Betreiber**: Aktiviert per Schalter den Sticky-Modus, hinterlegt optional ein alternatives (in der Regel kleineres) Logo für den Sticky-Zustand und kann zusätzlich festlegen, dass die Custom Topbar im Sticky-Zustand ausgeblendet wird, um Platz zu sparen.

**Kunden**: Behalten Header und Navigation jederzeit beim Scrollen im Blick. Der Header rutscht ohne Sprung an den oberen Rand und nimmt – wenn so konfiguriert – ein kompakteres Logo an.

---

## Schließen beim Scrollen

**Shop-Betreiber**: Funktion läuft automatisch, keine Konfiguration erforderlich.

**Kunden**: Wenn sie versehentlich mit offenem Dropdown weiterscrollen, schließt sich der Flyout automatisch – das Menü „klebt" nicht über dem Seiteninhalt und versperrt nicht die Sicht.

---

## Custom Topbar

**Shop-Betreiber**: Pflegt eine schmale Leiste oberhalb des Headers mit bis zu drei USP-/Kontakt-Items. Pro Item lassen sich Text, Link-Typ (URL, E-Mail, Telefonnummer), Linkziel, ein optionales Icon und eine individuelle Textfarbe festlegen. Hintergrundfarbe und Ausrichtung der gesamten Topbar sind ebenfalls einstellbar.

**Kunden**: Sehen wichtige Hinweise immer im Blick – etwa „Versandkostenfrei ab 50 €", „Kontakt: 030/…" oder einen direkten Mail-/Telefon-Link. Klicken sie auf einen Eintrag, werden je nach Linktyp die Standard-Aktionen ausgelöst (URL öffnen, Mail-Programm starten, Telefonnummer wählen).

---

## Mobile Navigation

**Shop-Betreiber**: Pflegt die Farben für den Burger-Toggle, die aktive Kategorie und den Home-Link im Offcanvas. Optional kann die mobile Navigation auch auf dem Desktop angezeigt werden (z. B. für minimalistische Layouts oder B2B-Shops).

**Kunden auf dem Smartphone**: Öffnen die Navigation über den Burger-Button. Die Offcanvas-Navigation nutzt die in der Plugin-Konfiguration gewählten Farben und zeigt – sofern für die Kategorie hinterlegt – auch das Kategorie-Icon und das Subkategorie-Pfeil-Icon, damit die Bedienung an die Desktop-Optik anschließt.

**Kunden auf dem Desktop (falls Mobile-Modus dort aktiviert)**: Sehen statt der klassischen Navigationsleiste denselben Burger-Toggle wie auf dem Smartphone.

---

## Kategorie-Zusatzfelder

**Shop-Betreiber**: Pflegt pro Kategorie unter *Kataloge → Kategorien → [Kategorie] → Zusatzfelder → „Flyout Navigation Einstellungen"* feingranulare Optionen:

- **Dropdown-Navigation deaktivieren**: Für Marketing-Landingpages oder einzelne Aktionen, bei denen kein Flyout gewünscht ist.
- **Anzahl Navigationsebenen**: Überschreibt die globale Ebenen-Tiefe für die jeweilige Kategorie.
- **Icon vor Kategorienamen**: Markenlogo, Symbol oder Themen-Icon vor dem Kategorienamen.
- **Badge Text + Farben**: Hinweise wie „NEU" oder „SALE" direkt im Flyout.
- **Aus Desktop-Navigationsleiste ausblenden**: Kategorie verschwindet aus der Hauptnavigation, bleibt aber im „Alle Kategorien"-Flyout erreichbar.
- **Bild im Flyout anzeigen / Alternatives Flyout-Bild**: Bei Vollbreite-Flyouts wahlweise das Kategoriebild oder ein eigenes Motiv zeigen.
- **Dropdown nach links öffnen**: Erzwingt die linke Öffnungsrichtung für diese eine Kategorie.

**Kunden**: Sehen direkt im Flyout, was der Betreiber gepflegt hat – ein Icon vor dem Kategorienamen, ein Badge an einer Kategorie („NEU"), ein großes Stimmungsbild im Vollbreite-Flyout. Deaktivierte Dropdowns führen ohne Umweg direkt zur Kategorieseite.

---

## Styling-Anpassung an das eigene Theme

**Shop-Betreiber**: Stellt im Plugin direkt Farben, Schriftgrößen, Hover-Verhalten, Border und Innenabstände für Hauptnavigation, Flyout, Schließen-Button, Mobile-Komponenten und Topbar ein – ohne SCSS oder Theme-Anpassungen.

**Kunden**: Erleben eine zum Shop-Branding passende Navigation. Hover-Zustände, aktive Kategorien und Badges greifen die Markenfarben auf, das Flyout fügt sich harmonisch in das Theme ein.

---

## Tastatur-Bedienung & Barrierefreiheit

**Shop-Betreiber**: Funktion läuft automatisch und ist nicht separat aktivierbar. Wichtig zu wissen im Hinblick auf die Pflicht zur Barrierefreiheit (BFSG/WCAG): Das Plugin liefert sichtbaren Tastatur-Fokus, korrekte ARIA-Attribute (`aria-haspopup`, `aria-expanded`) und vollständige Pfeiltasten-/ESC-Bedienung.

**Kunden mit Tastatur-/Screenreader-Nutzung**:

- **Tab** bewegt den Fokus über die Hauptkategorien.
- **Pfeil nach unten** öffnet das Dropdown der fokussierten Hauptkategorie.
- **Pfeil hoch / Pfeil runter** wechseln zwischen den Einträgen einer Ebene.
- **Pfeil nach rechts** öffnet die nächste Unterebene einer Kategorie mit Unterkategorien.
- **Pfeil nach links** schließt die aktuelle Unterebene und springt zurück zur Eltern-Kategorie. Auf der obersten Ebene schließt es das gesamte Flyout.
- **Enter** folgt dem Link der fokussierten Kategorie.
- **ESC** schließt den aktiven Flyout und gibt den Fokus an die auslösende Hauptkategorie zurück.
- Eine sichtbare Fokus-Umrandung zeigt jederzeit, welches Element aktiv ist.
- Screenreader bekommen über ARIA-Attribute korrekt mitgeteilt, ob ein Dropdown geöffnet ist.

---

## Verkaufskanal-spezifische Konfiguration

**Shop-Betreiber**: Pflegt alle Einstellungen pro Verkaufskanal. Multistore-Setups können in jedem Kanal eine andere Navigationsoptik, einen eigenen Topbar-Inhalt und unterschiedliche Trigger-Modi verwenden – z. B. ein Vollbreite-Mega-Menu im B2C-Shop und einen kompakten Dropdown-Modus im B2B-Shop.

**Kunden**: Erleben in jedem Kanal genau die Navigation, die für diesen Kanal gedacht ist – ohne dass eine Anpassung am Code nötig wäre.
