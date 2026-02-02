# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten des Plugins "Suche als Overlay".

---

## Inhaltsverzeichnis

- [Das Such-Overlay](#das-such-overlay)
- [Produktsuche](#produktsuche)
- [Kategoriesuche](#kategoriesuche)
- [Blog-Suche](#blog-suche)
- [Herstellersuche](#herstellersuche)
- [Eindeutige Produktsuche](#eindeutige-produktsuche)
- [Admin-Bereich Funktionen](#admin-bereich-funktionen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Das Such-Overlay

### Was es ist

Das Such-Overlay erscheint, wenn Ihre Kunden das Suchfeld im Shop verwenden. Statt einer einfachen Dropdown-Liste mit Produkten sehen sie ein modernes, tabbasiertes Overlay mit verschiedenen Ergebnistypen.

### Wie es funktioniert

1. Der Kunde klickt auf das Suchfeld oder gibt einen Suchbegriff ein
2. Nach Eingabe von mindestens 3 Zeichen erscheint das Overlay
3. Der erste Tab "Produkte" ist standardmäßig aktiv
4. Weitere Tabs (Kategorien, Blog, Hersteller) erscheinen nur, wenn Ergebnisse vorhanden sind
5. Der Kunde kann zwischen den Tabs wechseln, um verschiedene Ergebnistypen zu sehen

### Elemente des Overlays

- **Tabs**: Navigation zwischen Produkten, Kategorien, Blog und Herstellern
- **Produktraster**: Zeigt Produktboxen im konfigurierten Layout
- **Kategoriekarten**: Zeigt passende Kategorien mit optionalem Bild
- **Blog-Karten**: Zeigt passende Blog-Artikel mit Vorschaubild
- **Herstellerkarten**: Zeigt passende Hersteller mit optionalem Logo

---

## Produktsuche

### Was sie bewirkt

Die Produktsuche ist die Kernfunktion und zeigt Produkte, die zum Suchbegriff passen. Die Ergebnisse werden im konfigurierten Layout (Suche, Standard, Großes Bild oder Minimal) angezeigt.

### Anzeige der Ergebnisse

- Produkte werden in einem Raster angezeigt
- Die Anzahl der Spalten hängt von der Einstellung "Anzahl Produkte pro Spalte" ab
- Bei keinen Ergebnissen wird eine entsprechende Meldung angezeigt

### Tipps & Best Practices

- Verwenden Sie das Layout "Suche" für schnelle Übersicht
- Wählen Sie "Großes Bild" für visuell orientierte Produkte
- "Minimal" eignet sich gut für technische Produkte oder lange Produktlisten

---

## Kategoriesuche

### Was sie bewirkt

Die Kategoriesuche durchsucht alle Kategorien Ihres Shops nach dem Suchbegriff. Dadurch können Kunden schnell die passende Kategorie finden, anstatt nur einzelne Produkte.

### Aktivierung

1. Navigieren Sie zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
2. Aktivieren Sie "Kategorie Suche aktivieren"
3. Optional: Aktivieren Sie "Zeige Kategoriebilder"
4. Speichern und Cache leeren

### Durchsuchte Felder

Die Kategoriesuche durchsucht folgende Felder:
- Kategoriename
- Kategoriebeschreibung
- Meta-Titel
- Meta-Beschreibung
- Keywords

### Besonderheit

Es werden nur Kategorien angezeigt, die im aktuellen Verkaufskanal sichtbar sind. Kategorien außerhalb der Hauptnavigation werden nicht gefunden.

### Tipps & Best Practices

- Pflegen Sie aussagekräftige Kategoriebeschreibungen
- Nutzen Sie Keywords für alternative Suchbegriffe
- Kategoriebilder erhöhen die visuelle Attraktivität

---

## Blog-Suche

### Was sie bewirkt

Die Blog-Suche durchsucht Ihre Blog-Artikel und zeigt passende Ergebnisse im Such-Overlay an. Dies verbindet Ihren Content direkt mit der Produktsuche.

### Voraussetzungen

Ein kompatibles Blog-Plugin muss installiert sein:
- **NetzP Blog** (empfohlen)
- **H1 Web Blog**

### Aktivierung

1. Navigieren Sie zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
2. Aktivieren Sie "Blog Suche aktivieren"
3. Speichern und Cache leeren

### Durchsuchte Felder (NetzP Blog)

- Titel
- Teaser
- Inhalt
- Meta-Titel
- Meta-Beschreibung
- Custom-Felder

### Durchsuchte Felder (H1 Web Blog)

- Titel
- Kurzinhalt
- Inhalt
- Meta-Titel
- Meta-Beschreibung

### Tipps & Best Practices

- Erstellen Sie Blog-Artikel zu häufigen Kundenfragen
- Verwenden Sie relevante Keywords in Titel und Teaser
- Blog-Artikel mit Bildern werden attraktiver dargestellt

---

## Herstellersuche

### Was sie bewirkt

Die Herstellersuche zeigt passende Hersteller/Marken im Such-Overlay an. Kunden können so schnell alle Produkte einer bestimmten Marke finden.

### Voraussetzung

Diese Funktion benötigt **Shopware Commercial Advanced Search**. Ohne dieses Plugin ist die Herstellersuche nicht verfügbar.

### Funktionsweise

Die Herstellersuche wird automatisch aktiviert, wenn:
1. Shopware Commercial Advanced Search installiert ist
2. Die erweiterte Suche (MultiSuggestResult) aktiv ist
3. Hersteller im Suchergebnis gefunden werden

### Anzeige

- Hersteller werden als Karten angezeigt
- Optional mit Herstellerlogo (wenn "Zeige Herstellerbilder" aktiviert)
- Klick auf einen Hersteller führt zur Produktsuche nach diesem Hersteller

### Tipps & Best Practices

- Pflegen Sie Herstellerlogos für bessere visuelle Darstellung
- Aktivieren Sie "Zeige Herstellerbilder" bei bekannten Marken

---

## Eindeutige Produktsuche

### Was sie bewirkt

Die eindeutige Produktsuche ermöglicht es, Produkte direkt über ihre Artikelnummer, EAN oder Herstellernummer zu finden. Dies ist präziser als die normale Volltextsuche.

### Aktivierung

1. Navigieren Sie zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
2. Aktivieren Sie "Suche nach eindeutigen Produkten aktivieren"
3. Wählen Sie die gewünschten Suchfelder unter "Spezifisch suchen nach"
4. Optional: Aktivieren Sie "Formatierung bei Suche entfernen"
5. Speichern und Cache leeren

### Suchfelder

| Feld               | Beschreibung                          | Beispiel        |
| ------------------ | ------------------------------------- | --------------- |
| Produktnummer      | Ihre interne Artikelnummer (SKU)      | ABC-123-XL      |
| Herstellernummer   | Artikelnummer des Herstellers (MPN)   | MPN-456789      |
| EAN/GTIN           | Barcode des Produkts                  | 4006381333931   |

### Formatierungsbereinigung

Wenn "Formatierung bei Suche entfernen" aktiviert ist:
- `XY 00-11` findet auch `XY0011`
- `ABC-123` findet auch `ABC123`
- Leerzeichen, Bindestriche und Sonderzeichen werden ignoriert

### Elternprodukt-Suche

Wenn "Suche schließt Elternprodukte ein" aktiviert ist:
- Die Artikelnummer des Hauptprodukts wird bei Varianten mitgesucht
- Nützlich bei Varianten mit einer gemeinsamen Basis-Artikelnummer

### Tipps & Best Practices

- Aktivieren Sie diese Funktion für B2B-Shops
- Nutzen Sie die Formatierungsbereinigung für flexible Eingaben
- Schulen Sie Ihr Team zur Pflege von EAN und Herstellernummern

---

## Admin-Bereich Funktionen

### Plugin-Konfiguration

**Ort**: Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren

Hier können Sie alle Einstellungen des Plugins anpassen. Die Einstellungen können global oder pro Verkaufskanal konfiguriert werden.

### Verkaufskanal-spezifische Einstellungen

**Ort**: Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren → Verkaufskanal-Dropdown

1. Wählen Sie im Dropdown oben den gewünschten Verkaufskanal
2. Passen Sie die Einstellungen für diesen Kanal an
3. Wählen Sie "Alle Verkaufskanäle" für globale Standardwerte

### Cache leeren

Nach Konfigurationsänderungen müssen Sie den Cache leeren:

**Ort**: Einstellungen → System → Caches & Indizes

1. Klicken Sie auf "Cache leeren"
2. Alternativ: Nur "HTTP-Cache" und "Template-Cache" leeren

---

## Fehlerbehebung

### Overlay erscheint nicht

**Symptom**: Nach Eingabe eines Suchbegriffs erscheint kein Overlay.

**Mögliche Ursachen**:
1. Cache nicht geleert nach Plugin-Installation
2. JavaScript-Fehler auf der Seite
3. Theme-Inkompatibilität

**Lösung**:
1. Cache vollständig leeren unter Einstellungen → System → Caches & Indizes
2. Browser-Konsole auf JavaScript-Fehler prüfen (F12)
3. Theme-Konflikte prüfen (vorübergehend Standard-Theme testen)

---

### Kategorien werden nicht gefunden

**Symptom**: Der Tab "Kategorien" erscheint nicht oder zeigt keine Ergebnisse.

**Mögliche Ursachen**:
1. "Kategorie Suche aktivieren" ist deaktiviert
2. Kategorien haben keine passenden Texte
3. Kategorien sind nicht im aktuellen Verkaufskanal

**Lösung**:
1. Einstellung prüfen unter Erweiterungen → Meine Erweiterungen → Suche als Overlay
2. Kategoriebeschreibungen und Keywords pflegen
3. Kategorie-Zuordnung zum Verkaufskanal prüfen

---

### Blog-Suche funktioniert nicht

**Symptom**: Der Tab "Blog" erscheint nicht, obwohl aktiviert.

**Mögliche Ursachen**:
1. Kein kompatibles Blog-Plugin installiert
2. Keine Blog-Artikel im aktuellen Verkaufskanal
3. Blog-Artikel haben abgelaufenes "showuntil" Datum

**Lösung**:
1. NetzP Blog oder H1 Web Blog installieren
2. Blog-Artikel dem richtigen Verkaufskanal zuordnen
3. Ablaufdatum der Blog-Artikel prüfen

---

### Produktnummersuche findet nichts

**Symptom**: Suche nach EAN oder Artikelnummer zeigt keine Ergebnisse.

**Mögliche Ursachen**:
1. "Suche nach eindeutigen Produkten" ist deaktiviert
2. Das gesuchte Feld ist nicht in "Spezifisch suchen nach" ausgewählt
3. Die Nummer ist im Produkt nicht hinterlegt

**Lösung**:
1. Beide Einstellungen unter Such Konfiguration prüfen
2. Produktdaten prüfen unter Kataloge → Produkte → [Produkt]
3. EAN, Artikelnummer und Herstellernummer korrekt pflegen

---

### Herstellersuche nicht verfügbar

**Symptom**: Der Tab "Hersteller" erscheint nie.

**Ursache**: Shopware Commercial Advanced Search ist nicht installiert.

**Lösung**: Die Herstellersuche ist nur mit Shopware Commercial verfügbar. Ohne diese Erweiterung werden keine Hersteller im Overlay angezeigt.

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
