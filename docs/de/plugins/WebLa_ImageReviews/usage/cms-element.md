# CMS-Element Bewertungsbilder

> Teil von **Bilder in Produktbewertungen** – [Hauptanleitung](./usage.md)

## Übersicht

Das Plugin stellt ein eigenes CMS-Element „Bewertungsbilder" (`image-reviews`) bereit. Mit diesem Element können Sie Galerien aus Kundenbewertungsbildern frei in Ihren Erlebniswelten platzieren – unabhängig vom Standard-Bewertungsbereich auf der Produktdetailseite.

## Voraussetzungen

- Plugin installiert und aktiviert.
- Mindestens eine freigegebene Produktbewertung mit Bild-Uploads.
- Erlebniswelt vom Typ **Produktseite** oder **Produktliste**.

## Element hinzufügen

1. Navigieren zu **Inhalte → Erlebniswelten**.
2. Eine bestehende Erlebniswelt öffnen oder eine neue erstellen (Typ: Produktseite oder Produktliste).
3. Im Editor **Block hinzufügen** klicken.
4. In der Kategorie **Commerce** den Block **Bewertungsbilder** auswählen und per Drag & Drop in die gewünschte Sektion ziehen.
5. Layout speichern.

## Konfiguration

Das Element greift automatisch auf die Bewertungsdaten des aktuellen Produkts (Erlebniswelt Typ Produktseite) bzw. der Produktliste zu. Eine manuelle Produktzuweisung ist nicht erforderlich.

In der Konfigurationsmaske des Elements können Sie Standard-CMS-Optionen wie Abstände und Hintergrund setzen.

## Beispiele

### Beispiel: Galerie-Sektion auf der Produktseite

**Ziel**: Bewertungsbilder zusätzlich als eigene Sektion oberhalb der Produktbeschreibung anzeigen.

**Schritte**:
1. Produktseiten-Layout öffnen.
2. Neue Sektion oberhalb der Beschreibung einfügen.
3. Block **Bewertungsbilder** aus der Kategorie Commerce hinzufügen.
4. Layout speichern und dem Produkt zuweisen.

**Ergebnis**: Besucher sehen die Bewertungsgalerie prominent oberhalb der Produktbeschreibung.

## FAQ

**F: Muss ich pro Produkt ein eigenes Layout erstellen?**
A: Nein. Das Element erkennt das aktive Produkt automatisch über den Erlebniswelt-Kontext.

**F: Was passiert, wenn keine Bewertungsbilder vorhanden sind?**
A: Wenn in den Plugin-Einstellungen ein Fallback-Bild für leere Galerien hinterlegt ist, wird dieses angezeigt. Andernfalls bleibt der Bereich leer.

**F: Funktioniert das Element auch in Erlebniswelten vom Typ Produktliste?**
A: Ja, das Element ist für beide Typen freigegeben.
