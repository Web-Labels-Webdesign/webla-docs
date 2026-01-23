# Änderungsprotokoll

Alle wichtigen Änderungen an Media Booster für Endbenutzer.

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
