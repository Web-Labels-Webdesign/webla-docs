# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Plugin "Suche als Overlay".

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

Das Plugin erweitert die Standard-Shopware-Suche und fügt zusätzliche Inhaltstypen hinzu:

```
Kunde gibt Suchbegriff ein
         ↓
Shopware Produktsuche (Standard)
         ↓
Plugin erweitert Ergebnisse:
├── Kategorien durchsuchen
├── Blog-Artikel durchsuchen (optional)
├── Hersteller laden (mit Commercial)
└── Produktnummer-Match prüfen (optional)
         ↓
Ergebnisse im Tabbed Overlay anzeigen
```

**Beispielablauf**:
1. Kunde gibt "Jacke" in die Suche ein
2. Shopware findet Produkte mit "Jacke" im Namen/Beschreibung
3. Plugin sucht zusätzlich nach Kategorien mit "Jacke"
4. Falls aktiviert: Plugin durchsucht Blog-Artikel
5. Overlay zeigt Tabs: Produkte (5), Kategorien (2), Blog (1)
6. Kunde klickt auf gewünschten Tab und wählt Ergebnis

---

## Häufige Workflows

### Anleitung: Plugin aktivieren und einrichten

**Ziel**: Das Plugin installieren und mit Grundeinstellungen konfigurieren

**Schritte**:

1. **Plugin installieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen`
   - Plugin "Suche als Overlay" in der Liste finden
   - Auf "Installieren" klicken

2. **Plugin aktivieren**
   - In derselben Ansicht auf "Aktivieren" klicken
   - Bestätigen, dass der Shop kurz nicht erreichbar ist

3. **Grundeinstellungen konfigurieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
   - "Kategorie Suche aktivieren" einschalten
   - Overlay-Breite anpassen (z.B. `600px`)
   - Spaltenanzahl wählen (empfohlen: `3`)
   - Box-Layout wählen (empfohlen: `Suche`)

4. **Cache leeren**
   - Navigieren zu: `Einstellungen → System → Caches & Indizes`
   - Auf "Alle Caches leeren" klicken

**Ergebnis**: Die Suche im Shop zeigt nun das neue Tabbed Overlay mit Produkten und Kategorien.

---

### Anleitung: Blog-Suche einrichten

**Ziel**: Blog-Artikel in den Suchergebnissen anzeigen

**Voraussetzungen**:
- NetzP Blog oder H1 Web Blog ist installiert
- Blog-Artikel sind vorhanden

**Schritte**:

1. **Blog-Plugin prüfen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen`
   - Prüfen, ob NetzP Blog oder H1 Web Blog installiert und aktiv ist

2. **Blog-Suche aktivieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
   - "Blog Suche aktivieren" einschalten
   - Speichern

3. **Cache leeren**
   - Navigieren zu: `Einstellungen → System → Caches & Indizes`
   - Auf "Alle Caches leeren" klicken

4. **Testen**
   - Im Storefront einen Begriff eingeben, der in Blog-Artikeln vorkommt
   - Der Tab "Blog" sollte erscheinen

**Ergebnis**: Blog-Artikel werden im Such-Overlay als zusätzlicher Tab angezeigt.

**Fehlerbehebung**: Falls der Tab nicht erscheint, prüfen Sie:
- Sind Blog-Artikel dem aktuellen Verkaufskanal zugeordnet?
- Haben die Blog-Artikel kein abgelaufenes Anzeigedatum?

---

### Anleitung: Produktnummersuche für B2B einrichten

**Ziel**: Kunden sollen direkt nach EAN, Artikelnummer oder Herstellernummer suchen können

**Schritte**:

1. **Eindeutige Suche aktivieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
   - Zum Bereich "Such Konfiguration" scrollen
   - "Suche nach eindeutigen Produkten aktivieren" einschalten

2. **Suchfelder auswählen**
   - Unter "Spezifisch suchen nach" die gewünschten Felder aktivieren:
     - Produktnummer (für SKU)
     - Herstellernummer (für MPN)
     - EAN/GTIN (für Barcodes)

3. **Formatierungsbereinigung aktivieren (empfohlen)**
   - "Formatierung bei Suche entfernen" einschalten
   - Damit werden Leerzeichen und Bindestriche bei der Suche ignoriert

4. **Elternprodukt-Suche konfigurieren**
   - "Suche schließt Elternprodukte ein" einschalten, wenn Varianten die Nummer des Hauptprodukts teilen

5. **Speichern und Cache leeren**
   - Speichern klicken
   - Cache unter `Einstellungen → System → Caches & Indizes` leeren

**Ergebnis**: Kunden können EAN-Codes oder Artikelnummern eingeben und finden direkt das passende Produkt.

---

### Anleitung: Overlay-Design anpassen

**Ziel**: Das Aussehen des Such-Overlays an Ihr Shop-Design anpassen

**Schritte**:

1. **Breite anpassen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
   - "Breite des Suche-Overlays" anpassen
   - Beispielwerte: `500px`, `600px`, `70%`, `80vw`

2. **Produktlayout wählen**
   - "Anzahl Produkte pro Spalte" wählen (2, 3, 4 oder 6)
   - "Box-Layout" wählen:
     - `Suche`: Kompakt, optimiert für Übersicht
     - `Standard`: Shopware-Standard mit allen Details
     - `Großes Bild`: Bildorientiert für Mode
     - `Minimal`: Nur wichtigste Infos

3. **Bilder konfigurieren**
   - "Zeige Kategoriebilder" aktivieren, wenn Kategorien Bilder haben
   - "Zeige Herstellerbilder" aktivieren, wenn Hersteller Logos haben

4. **Speichern und testen**
   - Speichern klicken
   - Cache leeren
   - Im Storefront testen

**Ergebnis**: Das Such-Overlay erscheint im gewünschten Design.

---

### Anleitung: Verkaufskanal-spezifische Suche

**Ziel**: Unterschiedliche Sucheinstellungen für verschiedene Verkaufskanäle

**Schritte**:

1. **Verkaufskanal auswählen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Suche als Overlay → Konfigurieren`
   - Im Dropdown oben den gewünschten Verkaufskanal wählen

2. **Spezifische Einstellungen vornehmen**
   - Die angezeigten Einstellungen gelten nur für diesen Verkaufskanal
   - Beispiel B2B-Kanal: Eindeutige Suche aktivieren, Minimal-Layout
   - Beispiel B2C-Kanal: Blog-Suche aktivieren, Großes-Bild-Layout

3. **Für alle Verkaufskanäle wiederholen**
   - Jeden Verkaufskanal einzeln konfigurieren
   - "Alle Verkaufskanäle" setzt die Standardwerte

4. **Cache leeren**
   - Navigieren zu: `Einstellungen → System → Caches & Indizes`
   - Cache leeren

**Ergebnis**: Jeder Verkaufskanal hat seine eigene Suchkonfiguration.

---

## Schnellreferenz

| Aufgabe                          | Wichtige Schritte                                      | Erforderliche Einstellungen            |
| -------------------------------- | ------------------------------------------------------ | -------------------------------------- |
| Kategoriesuche aktivieren        | Konfigurieren → Schalter aktivieren → Cache leeren     | Kategorie Suche aktivieren             |
| Blog-Suche aktivieren            | Blog-Plugin installieren → Schalter aktivieren         | Blog Suche aktivieren                  |
| Produktnummersuche einrichten    | Eindeutige Suche + Felder auswählen                    | Suche nach eindeutigen Produkten       |
| Overlay verbreitern              | Wert in "Breite" ändern (z.B. 800px)                   | Breite des Suche-Overlays              |
| Mehr Produkte pro Zeile          | Spaltenanzahl erhöhen (4 oder 6)                       | Anzahl Produkte pro Spalte             |
| Produktbilder größer             | Box-Layout auf "Großes Bild"                           | Box-Layout                             |

---

## Best Practices

1. **Cache nach jeder Änderung leeren**: Änderungen werden erst nach Cache-Leerung sichtbar
2. **Kategorien pflegen**: Aussagekräftige Beschreibungen und Keywords verbessern die Kategoriesuche
3. **Produktdaten vollständig pflegen**: EAN, Artikelnummer und Herstellernummer für B2B-Shops
4. **Blog-Artikel optimieren**: Relevante Keywords in Titel und Teaser für bessere Auffindbarkeit
5. **Testen Sie die Suche**: Nach Konfigurationsänderungen im Storefront testen

## Was Sie vermeiden sollten

- Zu breites Overlay (über 80% Bildschirmbreite) - kann auf Mobilgeräten problematisch sein
- Zu viele Produkte pro Zeile (6) bei Produkten mit wichtigen Bildern - Bilder werden zu klein
- Blog-Suche aktivieren ohne Blog-Plugin - führt zu leerem Tab
- Produktnummersuche ohne gepflegte Produktdaten - keine Ergebnisse bei Nummernsuche
