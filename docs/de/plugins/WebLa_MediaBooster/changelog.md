# Änderungsprotokoll

Alle wichtigen Änderungen an Media Booster für Endbenutzer.

---

## [1.0.3] - 2026-01-23

### Hinzugefügt
- **Automatische AVIF/WebP-Auslieferung**: Logos und Theme-Bilder verwenden nun automatisch konvertierte Versionen ohne Template-Änderungen
- AVIF-Unterstützung im Twig-Filter mit Prioritätsreihenfolge: AVIF > WebP > Original
- Warnung im Server-Status wenn GD für AVIF-Konvertierung verwendet wird (empfiehlt Imagick)

### Behoben
- Fortschrittszähler wurden bei jedem Batch zurückgesetzt statt nur beim Start
- Gesamtzahlen änderten sich während der Verarbeitung wenn neue Medien hochgeladen wurden
- PHP-Timeout bei AVIF-Konvertierung mit GD-Bibliothek für große Bilder (>4 Megapixel werden nun übersprungen)

### Geändert
- Dashboard-Beschriftungen unterscheiden nun klar zwischen "Gesamtstatistik" und "Aktueller Fortschritt"
- Twig-Filter prüft nun zuerst auf AVIF, dann WebP, für optimale Kompression

---

## [1.0.2] - 2026-01-23

### Behoben
- Fehler "Palette image not supported by webp" bei der Konvertierung von PNG-Bildern mit indizierten Farben (Logos, Icons, einfache Grafiken) behoben
- GIF zu WebP/AVIF Konvertierung korrigiert (GIF-Bilder sind immer palettenbasiert)
- Fortschrittsanzeige über 100% bei mehrfacher Ausführung der Konvertierung behoben
- Fortschritt wird nun auch aktualisiert, wenn alle Bilder bereits konvertiert wurden (übersprungen)
- Verbesserte Alpha-Kanal-Behandlung für transparente PNG-Bilder

### Hinzugefügt
- Anzeige der fehlgeschlagenen Bilder im Admin-Dashboard Fortschrittsbereich
- Fehlermeldung wenn Größenänderung ohne konfigurierte Maximalmaße gestartet wird

### Geändert
- Fortschrittszähler werden beim Start einer neuen Verarbeitung zurückgesetzt
- Verbesserte Fehlermeldungen bei Konvertierungsfehlern enthalten nun die tatsächliche Warnung

---

## [1.0.1] - 2026-01-23

### Dokumentation
- README mit Installations- und Nutzungsanleitung hinzugefügt
- Benutzerdokumentation (EN/DE) hinzugefügt

---

## [1.0.0] - 2026-01-23

### Erstveröffentlichung

**Bildoptimierung**
- Automatische Verkleinerung übergroßer Originalbilder auf konfigurierbare Maximalgröße
- Flexible Resize-Modi: "Fit" (innerhalb beider Grenzen) oder "Largest" (nur größte Seite begrenzen)
- Unterstützt JPG, JPEG, PNG, BMP und GIF Formate

**Moderne Formatkonvertierung**
- Konvertierung zu WebP für bis zu 30% kleinere Dateien
- Konvertierung zu AVIF für bis zu 50% kleinere Dateien
- Originaldateien bleiben für volle Shopware-Kompatibilität erhalten
- Automatische Thumbnail-Konvertierung inklusive
- Separate Qualitätseinstellungen für Bilder und Thumbnails

**SEO-Optimierung**
- Automatische Alt-Text-Generierung für Produkt- und Inhaltsbilder
- Automatische Title-Attribut-Optimierung
- SEO-freundliche Dateinamen-Generierung mit mehreren Vorlagen
- Unterstützung für Produktname, Shopname, Produktnummer und Herstellernummer
- Mehrsprachige Unterstützung

**Administrations-Dashboard**
- Echtzeit-Fortschrittsanzeige mit Prozent und verarbeiteten Bildern
- Batch-Verarbeitung mit konfigurierbarer Batch-Größe
- Start/Stop-Steuerung für die Verarbeitung
- Detaillierte Statistiken und Fehlerprotokollierung
- Server-Fähigkeitserkennung (Imagick/GD, WebP/AVIF-Unterstützung)

**Technische Features**
- Shopware 6.5, 6.6 und 6.7 Kompatibilität
- Scheduled Task Support für automatische Hintergrundverarbeitung
- Message Queue Integration für asynchrone Verarbeitung
- Twig-Filter für WebP-Bildauslieferung im Storefront
- Automatisches Aufräumen von WebP/AVIF-Dateien beim Löschen von Medien

---

## Kompatibilität

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
