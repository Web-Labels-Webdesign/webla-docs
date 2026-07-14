# Änderungsprotokoll — Flyout Navigation

Alle wichtigen Änderungen am Plugin „Flyout Navigation" aus Nutzersicht.

## 1.1.4
Veröffentlicht am 2026-06-16

### Verbesserungen

**Änderungen an der Art, wie die Topbar-Icons geladen werden.** An der Darstellung im Shop ändert sich nichts.

## 1.1.3
Veröffentlicht am 2026-06-14

### Fehlerbehebungen

**Klick auf Hauptnavigation bei aktivem Sticky Header.** Wenn der Header im Sticky-Zustand war und man ans Seitenende gescrollt hatte, sprang ein Klick auf einen Hauptnavigationspunkt zurück an den Seitenanfang, statt das Menü zu öffnen. Das Menü öffnet sich jetzt wie erwartet.

### Geändert

**Hauptkategorien im Click-Modus sind jetzt Einstiegspunkte.** Wenn als Trigger für das Hauptmenü „Klick" gewählt ist, funktionieren Hauptkategorien mit eigenem Flyout nur noch als Auslöser für das Menü und führen nicht mehr direkt zur Kategorieseite. Die Direktnavigation zur Kategorie übernimmt der „Zur Kategorie XX"-Eintrag oben im Flyout. Im Hover-Modus bleibt alles wie zuvor: Hover öffnet das Menü, Klick navigiert zur Kategorie. Kategorien, bei denen das Zusatzfeld „Dropdown-Navigation deaktivieren" gesetzt ist, bleiben in beiden Modi normale Links.

## 1.1.2
Veröffentlicht am 2026-06-14

### Verbesserungen

**Punkte aus dem Shopware-Review behoben** (u. a. unnötiges SCSS und Migration entfernt). Funktional ändert sich für den Shop nichts.

## 1.1.1
Veröffentlicht am 2026-06-14

### Verbesserungen

**Erweiterte Dokumentation.** Eine zweisprachige (Deutsch / Englisch) Wiki-Dokumentation wurde unter `docs/` ergänzt – mit Plugin-Überblick, Nutzungsanleitung aus Sicht von Shop-Betreiber und Kunden, vollständiger Einstellungs-Referenz, How-To-Anleitungen sowie einem nutzerorientierten Änderungsprotokoll.

## 1.1.0
Veröffentlicht am 2026-06-14

### Neue Funktionen

**Dropdowns nach links öffnen lassen.** Für Kategorien am rechten Rand der Navigation lässt sich das Aufklappen jetzt umkehren – das Dropdown öffnet sich nach links, damit es nicht über den Bildschirmrand hinausragt. Die Richtung lässt sich pro Kategorie über ein neues Zusatzfeld setzen oder global ab dem 1.–5. Hauptmenüpunkt. Wer das Verhalten gar nicht haben möchte, kann es global komplett abschalten.

**Automatischer Knick bei Platzmangel.** Egal wie eingestellt: erkennt das Plugin, dass ein Dropdown sonst über den Bildschirmrand hinausragen würde, dreht es die Öffnungsrichtung automatisch um. Wirkt sich auch positiv aus, wenn die Navigationsleiste auf kleineren Bildschirmen in zwei Zeilen umbricht.

**Tastatur-Bedienung.** Die Navigation lässt sich jetzt komplett ohne Maus bedienen: Pfeil nach unten öffnet das Hauptmenü-Dropdown, Pfeil hoch/runter wechselt zwischen Einträgen, Pfeil rechts öffnet Unterkategorien, Pfeil links schließt sie wieder, ESC schließt den gesamten Flyout und gibt den Fokus an den Auslöser zurück. Inklusive sichtbarer Fokus-Markierung für Tastatur-Nutzer und korrekter ARIA-Attribute für Screenreader. Wichtiger Baustein in Richtung BFSG-/WCAG-Konformität.

### Verbesserungen

**Pfeil-Icon dreht sich passend mit.** Klappt das Dropdown nach links auf, wandert das Pfeil-Icon (für Kategorien mit Unterkategorien) automatisch vor den Kategorienamen und zeigt nach links – die visuelle Richtung stimmt damit wieder mit dem Öffnen überein.

**Chevron als Standard-Icon.** Neu installierte Shops zeigen ab Werk das Chevron-Icon für Kategorien mit Unterkategorien an. Bestehende Konfigurationen bleiben unverändert.

**Automatisches Plugin-Update.** Plugin-Updates bringen jetzt neue Kategorie-Zusatzfelder automatisch mit. Vorher musste das Plugin dafür neu installiert werden.

### Fehlerbehebungen

**Nicht-Vollbreite-Dropdowns waren am linken Rand fixiert.** Im kompakten (nicht-Vollbreite-)Modus klappten alle Dropdowns ganz links auf, egal welcher Menüpunkt geöffnet wurde. Sie erscheinen jetzt korrekt unterhalb des jeweils ausgelösten Menüpunkts.

## 1.0.12
Veröffentlicht am 2026-05-13

### Neue Funktionen

**Schließen beim Scrollen.** Offene Flyouts schließen sich automatisch, sobald die Seite gescrollt wird. Verhindert, dass das Menü auf dem Inhalt „kleben" bleibt.

## 1.0.11
Veröffentlicht am 2026-04-15

### Fehlerbehebungen

**Sticky-Header-Logo wird nicht mehr zu groß.** Das Logo für den Sticky-Header hat jetzt eine sinnvolle maximale Höhe und sprengt das Layout nicht mehr.

**Kategorie-Zusatzfelder bei Updates.** Die Plugin-Zusatzfelder für Kategorien werden bei Updates wieder sauber neu angelegt, falls sie bereits in der Datenbank existieren.

## 1.0.10
Veröffentlicht am 2026-04-15

### Fehlerbehebungen

**Sichere externe Links in der Topbar.** Externe Topbar-Links erhalten jetzt das `rel="noopener"`-Attribut – wichtig aus Sicherheits- und Performance-Gründen. Außerdem wurde ein Tippfehler behoben.

## 1.0.9
Veröffentlicht am 2026-03-04

### Verbesserungen

**Neues Plugin-Icon.** Frischeres Plugin-Icon im Shopware Admin und im Store.

**Support-Hinweise hinterlegt.** In der `composer.json` ist nun hinterlegt, wo Shop-Betreiber bei Fragen oder Problemen Unterstützung bekommen.

## 1.0.8
Veröffentlicht am 2026-02-27

### Neue Funktionen

**Textfarbe der Topbar konfigurierbar.** Die Schriftfarbe der Topbar-Elemente lässt sich jetzt zentral in der Plugin-Konfiguration anpassen.

### Fehlerbehebungen

**Spaltenabstand im Vollbreite-Flyout.** Die linke Position der Spalten im Vollbreite-Flyout-Menü wurde feinjustiert, sodass sich die Spalten nun gleichmäßig ausrichten.

## 1.0.7
Veröffentlicht am 2026-02-24

### Fehlerbehebungen

**Backdrop nur noch im Vollbreite-Modus.** Der abgedunkelte Hintergrund hinter dem Flyout erscheint nur noch bei der Vollbreite-Variante – im kompakten Modus stört er den Inhalt nicht mehr.

**Header-Stapelung im Sticky-Modus.** Der z-index des Header-Containers wurde korrigiert, sodass der Header beim Scrollen sauber über allen anderen Elementen liegt.

## 1.0.6
Veröffentlicht am 2026-02-23

### Fehlerbehebungen

**Hover-Effekt korrigiert.** Der Hover-Effekt auf Menü-Einträgen funktioniert wieder einwandfrei.

## 1.0.5
Veröffentlicht am 2026-02-22

### Fehlerbehebungen

**Unterebenen wurden falsch angezeigt.** Die Anzeige von Unterkategorien im Flyout-Menü wurde korrigiert.

**Mobile Navigation: fehlende Icons.** Die fehlenden Icons in der Mobile-Navigation werden jetzt zuverlässig angezeigt.

### Verbesserungen

**Vereinfachte Plugin-Konfiguration.** Die separate Option für die Box-Shadow wurde entfernt; das Plugin nutzt jetzt eine sinnvolle Default-Schattenwirkung.

## 1.0.4
Veröffentlicht am 2026-02-17

### Verbesserungen

**Saubere Plugin-Deinstallation.** Beim Deinstallieren des Plugins werden die Kategorie-Zusatzfelder jetzt mit entfernt – kein Datenmüll in der Datenbank.

**Aufgeräumte Plugin-Konfiguration.** Die Struktur der Plugin-Einstellungen wurde übersichtlicher gruppiert.

## 1.0.3
Veröffentlicht am 2026-02-17

### Neue Funktionen

**Mobile-Toggle auf dem Desktop.** Wenn die mobile Navigation auch auf Desktop angezeigt werden soll, erscheint jetzt korrekt der Mobile-Toggle-Button im Header.

### Fehlerbehebungen

**Diverse Korrekturen** an der Plugin-Logik und am Styling.

## 1.0.2
Veröffentlicht am 2026-01-19

### Fehlerbehebungen

**Überlauf bei vielen Kategorien.** Wenn viele Kategorien auf einer Ebene mehr Platz brauchten als verfügbar war, wurden sie abgeschnitten. Die Anzeige scrollt nun zuverlässig, sobald die Liste die verfügbare Höhe überschreitet.

## 1.0.1
Veröffentlicht am 2025-11-23

Erstes Grundgerüst des Plugins.

## 0.0.7
Veröffentlicht am 2025-11-22

Initiale Veröffentlichung.
