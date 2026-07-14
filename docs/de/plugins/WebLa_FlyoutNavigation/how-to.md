# How-To & Anleitungen

Praktische Hinweise zum Einsatz der **Flyout Navigation** im Shopware-Shop.

---

## Wie das Plugin funktioniert

Das Plugin ersetzt die klassische Shopware-Hauptnavigation durch eine mehrstufige Flyout-Navigation und ergänzt:

- eine zweite Anzeige-Variante als **Vollbreite-Flyout** (Mega-Menu) oder **kompakter Dropdown**,
- optional einen **Sticky Header**, der beim Scrollen am oberen Bildschirmrand bleibt,
- eine **Custom Topbar** für USP-/Kontakt-Hinweise oberhalb des Headers,
- **Kategorie-Zusatzfelder**, mit denen sich Verhalten, Anzeige und Styling pro Kategorie individuell steuern lassen,
- **Tastatur-Bedienung** und ARIA-Attribute als Basis für barrierefreie Navigation.

Alle Plugin-Einstellungen werden **pro Verkaufskanal** gepflegt – ein Shop mit mehreren Storefronts kann pro Kanal eine eigene Navigations-Konfiguration haben.

---

## Erste Inbetriebnahme

1. **Plugin installieren** unter *Erweiterungen → Meine Erweiterungen → Hochladen* (ZIP) oder über die Composer-Integration. Anschließend per Schalter aktivieren.
2. **Theme kompilieren** (*Marketing → Theme-Manager → Theme zuweisen / kompilieren*), damit Stile und Skripte im Storefront ausgespielt werden.
3. Zur Plugin-Konfiguration wechseln: *Erweiterungen → Meine Erweiterungen → Flyout Navigation → Konfigurieren*.
4. **Verkaufskanal** oben in der Konfiguration auswählen.
5. **„Flyout Navigation für diesen Verkaufskanal aktivieren"** einschalten – ohne diesen Master-Schalter wird das Plugin im Storefront nicht aktiv.
6. **Grundeinstellungen** überprüfen:
   - Trigger-Modus festlegen (Hover oder Klick),
   - Anzahl Navigationsebenen wählen (Default 3),
   - bei Bedarf den „Alle Kategorien"-Eintrag oder die Mobile-on-Desktop-Variante aktivieren,
   - Sticky Header und Custom Topbar je nach Bedarf einschalten.
7. **Styling** im Abschnitt „Navigationsleiste – Einstellungen" und „Flyout Menü – Einstellungen" an das Theme anpassen.
8. Im Storefront das Ergebnis prüfen, ggf. mit einer Kategorie tiefer in den Baum klicken und das Verhalten der Sublevels testen.

Eine vollständige Übersicht aller Konfigurationsfelder gibt es in den [Plugin-Einstellungen](configuration/settings.md).

---

## Kategorie-Einstellungen

Über *Kataloge → Kategorien → [Kategorie] → Zusatzfelder → „Flyout Navigation Einstellungen"* lassen sich pro Kategorie zusätzliche Optionen pflegen. Typische Anwendungsfälle:

- **Kategorie ohne Flyout** (z. B. eine Marketing-Landingpage): *„Dropdown-Navigation deaktivieren"* aktivieren. Der Link führt dann direkt zur Kategorieseite, ohne Flyout zu öffnen.
- **Andere Ebenen-Tiefe für eine Hauptkategorie**: *„Anzahl Navigationsebenen"* auf 1, 2, … setzen (0 = globale Einstellung verwenden).
- **Icon vor dem Kategorienamen** (z. B. Marken-Logo): *„Icon vor Kategorienamen"* per Medien-Feld setzen.
- **Highlight-Badge** („NEU", „SALE"): *„Badge Text"* + Hintergrund- und Textfarbe pflegen.
- **Kategorie aus der Navbar ausblenden, aber weiterhin im Flyout zeigen**: *„Aus Desktop-Navigationsleiste ausblenden"* aktivieren – die Kategorie verschwindet aus der Hauptzeile, ist aber z. B. unter „Alle Kategorien" weiterhin erreichbar.
- **Bild im Flyout** (nur Vollbreite): *„Bild im Flyout anzeigen"* aktivieren und optional ein eigenes Bild über *„Alternatives Flyout-Bild"* hinterlegen. Ohne eigenes Bild wird das Standard-Kategoriebild verwendet.
- **Dropdown nach links öffnen** (für Kategorien am rechten Rand der Navbar): *„Dropdown nach links öffnen"* aktivieren. Wichtig: greift nicht, wenn global *„Nie (immer nach rechts öffnen)"* gewählt wurde.

---

## Häufige Workflows

### Vollbreite-Mega-Menü mit Kategoriebildern einrichten

1. *Flyout Menü – Einstellungen* öffnen und *„Flyout über volle Breite anzeigen"* aktivieren.
2. Beim Hauptkategorie-Zusatzfeld *„Bild im Flyout anzeigen"* einschalten.
3. Im Flyout erscheint automatisch das Kategorie-Bild. Mit *„Alternatives Flyout-Bild"* lässt sich ein abweichendes Motiv hinterlegen.
4. Optional den Schließen-Button per *„Schließen-Button ausblenden"* deaktivieren oder per *„Hintergrundfarbe für den Schließen-Button"* anpassen.

### Kompakter Flyout mit Linksöffnung für rechte Kategorien

1. *„Flyout über volle Breite anzeigen"* in den *Flyout Menü*-Einstellungen ausschalten.
2. Globalen Modus für die Öffnungsrichtung wählen:
   - **„Nur per Kategorie-Einstellung"** (Default), wenn nur einzelne Kategorien nach links öffnen sollen.
   - **„Ab dem 3. Menüpunkt"** (oder einem anderen Wert), wenn ab einer bestimmten Position alle Dropdowns automatisch nach links öffnen sollen.
3. Bei einzelnen Kategorien das Zusatzfeld *„Dropdown nach links öffnen"* aktivieren.
4. Das Plugin korrigiert die Richtung zusätzlich automatisch, wenn der Flyout sonst aus dem Viewport laufen würde – in den meisten Fällen reicht der Default-Modus bereits.

### Sticky Header mit alternativem Logo und ausblendender Topbar

1. *„Sticky Header aktivieren"* einschalten.
2. Bei Bedarf unter *„Logo für Sticky Header"* ein kleineres / einzeiliges Logo hinterlegen.
3. Wenn die Topbar im Sticky-Zustand zu viel Platz weg nimmt: *„Topbar ausblenden wenn sticky"* aktivieren.

### Custom Topbar mit USP-Items

1. *„Benutzerdefinierte Topbar aktivieren"* einschalten.
2. Pro Item Text, Link-Typ, Link-Ziel, Icon und Farbe pflegen.
3. *„Ausrichtung der Topbar-Items"* (links / mittig / rechts) wählen.
4. Items mit leerem Text werden automatisch nicht angezeigt – ungenutzte Items können einfach leer bleiben.

---

## Optionen, die sich gegenseitig ausschließen

| Option A | Option B | Verhalten / Empfehlung |
|----------|----------|------------------------|
| **Alle Kategorien auf Desktop anzeigen** | **Mobile Navigation auch auf Desktop anzeigen** | Nicht gemeinsam nutzen – die beiden Optionen rendern unterschiedliche Trigger-Elemente. Wenn beide aktiv sind, hat das Plugin den „Alle Kategorien"-Eintrag als Priorität, der Mobile-Toggle wird ignoriert. Entscheide dich für genau eines der beiden Konzepte. |
| **Sticky Header aktivieren** = aus | **Topbar ausblenden wenn sticky** | Greift nicht – der Sticky-Zustand wird nie eingenommen. |
| **Flyout über volle Breite anzeigen** = aus | **Schließen-Button ausblenden** | Greift nicht – der Schließen-Button wird ohnehin nur im Vollbreite-Modus angezeigt. |
| **Flyout über volle Breite anzeigen** | **Hauptmenüpunkt, ab dem das Dropdown nach links geöffnet werden soll** | Greift nicht – die Öffnungsrichtung wirkt sich nur auf Nicht-Vollbreite-Flyouts aus. |
| **Hauptmenüpunkt … nach links** = „Nie" | Kategorie-Zusatzfeld **„Dropdown nach links öffnen"** | Der globale „Nie"-Modus ist die harte Sperre und überschreibt das Kategorie-Zusatzfeld. Wer einzelne Kategorien doch nach links öffnen lassen will, muss den globalen Modus auf „Nur per Kategorie-Einstellung" (oder einen Schwellwert) zurücksetzen. |
| Kategorie-Zusatzfeld **„Dropdown-Navigation deaktivieren"** | Andere Kategorie-Zusatzfelder (Flyout-Bild, Badges, Sublevel-Tiefe …) | Sobald das Dropdown für eine Kategorie deaktiviert ist, werden Flyout-bezogene Zusatzfelder (Bild im Flyout, Badge nur im Flyout, Anzahl Ebenen …) bedeutungslos. Diese Felder werden bei deaktiviertem Dropdown im Storefront nicht ausgewertet. |
| Kategorie-Zusatzfeld **„Bild im Flyout anzeigen"** + kompakter Flyout (nicht-Vollbreite) | – | Das Bild wird im kompakten Modus nicht angezeigt; die Option greift nur in Verbindung mit „Flyout über volle Breite anzeigen". |

---

## Was du vermeiden solltest

- **Plugin global deaktivieren und gleichzeitig Custom Fields massenhaft pflegen** – die Felder werden erst dann ausgewertet, wenn das Plugin im Verkaufskanal aktiv ist. Reihenfolge: erst aktivieren, dann pflegen.
- **Zu hohe Ebenen-Tiefe** (`Anzahl Navigationsebenen` > 4) ohne echten Bedarf. Tiefere Strukturen werden im Flyout schnell unübersichtlich, die UX leidet und Mobile-Nutzer scrollen weit. Empfehlung: 3 Ebenen für die meisten Shops.
- **Sehr lange Kategorienamen ohne Anpassung des Paddings** – kann zu Zeilenumbrüchen und unruhigem Layout führen. Lieber Namen kürzen oder das Padding (`Innenabstand (Padding) für Navbar-Items`) erhöhen.
- **Topbar-Items mit gleichem Inhalt mehrfach pflegen** – das Plugin zeigt jeden Eintrag separat, ohne Dedupe.
- **Konfiguration nur im Standard-Verkaufskanal pflegen, obwohl mehrere Sales Channels existieren** – jeder Kanal hat eigene Einstellungen. Vor dem Speichern oben prüfen, welcher Verkaufskanal aktiv ausgewählt ist.
- **Manuelle Änderungen an der kompilierten Datei** unter `src/Resources/app/storefront/dist/`. Bei Plugin-Updates wird sie überschrieben; Anpassungen gehören in das Theme oder ein eigenes Plugin.
- **Nicht-Vollbreite-Flyout in extrem schmalen Sales-Channel-Layouts** (z. B. eng begrenzte `.container`-Breite). Hier kann das Dropdown trotz Auto-Flip in eine ungünstige Position rutschen – im Zweifel auf Vollbreite umstellen.

---

## Tipps & Best Practices

- **Tastatur-Test**: nach jeder größeren Konfigurationsänderung mit `Tab`, Pfeiltasten und `ESC` durch die Navigation gehen. Wenn das funktioniert, klappt es im Zweifel auch für Screenreader-Nutzer.
- **Vollbreite vs. kompakt**: Vollbreite eignet sich für Sortimente mit großen Hauptkategorien und Bildern, kompakter Dropdown für kleinere Sortimente oder klassische B2B-Navigation.
- **Hover vs. Klick**: Hover-Modus ist schneller, Klick-Modus barrieren- und touch-freundlicher. Bei Sortimenten, in denen Hauptkategorien selbst eine wichtige Landingpage sind, ist der Klick-Modus tendenziell besser – Hover-Modus springt mit Realnavigation zur Landingpage, was Maus-Nutzer überraschen kann.
- **Trigger ändern erfordert Storefront-Build / Cache-Leeren** – nach Plugin-Updates immer den Shopware-Cache leeren und ggf. das Theme neu kompilieren.

---

## Wenn etwas nicht funktioniert

| Symptom | Wahrscheinliche Ursache | Lösung |
|---------|------------------------|--------|
| Nichts ändert sich im Storefront, obwohl Optionen gespeichert wurden | Falscher Verkaufskanal in der Konfig ausgewählt | Oben in der Konfig den richtigen Verkaufskanal wählen und neu speichern. |
| Plugin sieht im Frontend nach Update gleich aus | Storefront-Bundle noch nicht neu gebaut | Theme kompilieren / Storefront-Cache leeren. |
| Custom Field auf der Kategorie nicht sichtbar | Plugin wurde aktualisiert, Custom-Field-Set existiert noch in alter Form | Plugin in eine höhere Version updaten – ab Version 1.1.0 wird das Set bei jedem Update automatisch neu angelegt. |
| „Dropdown nach links öffnen" wirkt nicht | Globaler Modus auf „Nie (immer nach rechts öffnen)" gesetzt | Globalen Modus auf „Nur per Kategorie-Einstellung" oder einen Schwellwert ändern. |
| Mobile-Toggle erscheint nicht im Header | Sowohl „Alle Kategorien" als auch „Mobile Navigation auf Desktop" aktiv | Eine der beiden Optionen deaktivieren. |
