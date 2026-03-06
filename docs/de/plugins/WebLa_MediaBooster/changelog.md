# Änderungsprotokoll

Alle wichtigen Änderungen an Media Booster für Endbenutzer.

---

## [1.2.0] - 2026-03-05

### Neue Funktionen
- Neue Einstellung für Frontend-Erweiterungspriorität — wählen Sie ob AVIF, WebP oder das Originalformat an Besucher ausgeliefert wird
- Verarbeitungsfehler werden nun in der Datenbank gespeichert und überstehen Neustarts von Queue-Workern, sodass sie zuverlässig im Admin-Dashboard sichtbar sind
- Twig-Filter von `webla_as_webp` zu `webla_as_converted` umbenannt um AVIF/WebP-Unterstützung widerzuspiegeln

### Fehlerbehebungen
- Erweiterungspriorität-Einstellung funktionierte nicht aufgrund fehlender SystemConfigService-Injektion
- Fehlerzeitstempel wurden im Admin-Dashboard nicht angezeigt (Schlüssel-Diskrepanz zwischen Speicher und Template)
- Diverse Pipeline-Probleme behoben: Endlosschleifen, Race Conditions, Abfrage-Performance, Datensicherheit, UI-Verbesserungen, Deduplizierung, UTF-8-Sicherheit und toter Code

### Verbesserungen
- Datenbankabfragen während der Batch-Verarbeitung um ~80% reduziert — Fortschrittszähler werden nun im Speicher gesammelt und einmal pro Batch statt pro Element geschrieben

---

## [1.1.1] - 2026-03-05

### Neue Funktionen
- Sparse Bilder (Diagramme, technische Zeichnungen, Strichgrafiken) werden nun automatisch erkannt und mit höherer Qualität (mindestens 95) konvertiert, um dünne Linien und Text zu erhalten
- Neue "Wiederholen"-Buttons im Admin-Dashboard — Resize, Konvertierung oder SEO einzeln zurücksetzen und erneut verarbeiten, ohne alle Daten zu löschen

### Fehlerbehebungen
- AVIF/WebP-Konvertierung zerstörte dünne Linien in technischen Zeichnungen und Diagrammen durch aggressive verlustbehaftete Kompression bei mittleren Qualitätseinstellungen

---

## [1.1.0] - 2026-03-05

### Neue Funktionen
- Fehlermeldungen im Admin-Dashboard werden nun als sichtbare Benachrichtigungen angezeigt statt nur in der Browserkonsole

### Fehlerbehebungen
- Speicherüberlauf (2GB-Limit) bei großen Medienbibliotheken durch Bereinigung von Doctrines Entity Manager zwischen Batches behoben
- Gesamte Verarbeitung bricht nicht mehr ab wenn ein einzelner Batch fehlschlägt (z.B. durch Sonderzeichen in Dateinamen) — fehlgeschlagene Batches werden übersprungen und die Verarbeitung läuft weiter
- Gesamtanzahl-Abfrage löst keine Flysystem-Pfadvalidierung mehr bei Medien mit Sonderzeichen aus

### Verbesserungen
- Shopware Context wird nun korrekt durch die gesamte Service-Aufrufkette weitergereicht statt Standard-Kontexte zu erstellen
- Verarbeitung stoppt automatisch nach 3 aufeinanderfolgenden Batch-Fehlern um Endlosschleifen zu verhindern

---

## [1.0.8] - 2026-03-05

### Behoben
- Verarbeitungsabbruch behoben wenn Medien-Dateinamen spezielle Unicode-Zeichen enthalten (weiche Trennzeichen, geschützte Leerzeichen) die Flysystem beim Entity-Laden ablehnt — betroffene Einträge werden nun übersprungen und als fehlgeschlagen markiert

---

## [1.0.7] - 2026-03-05

### Behoben
- Batch-Verarbeitung bleibt nicht mehr dauerhaft hängen wenn ein einzelnes Bild fehlschlägt (beschädigte Datei, nicht unterstütztes Format) — fehlgeschlagene Einträge werden nun protokolliert und übersprungen statt Endlosschleifen zu verursachen
- Irreführende Fortschrittsanzeige behoben die "32 / 3468 (41.5%)" zeigte — zeigt nun bearbeitete/gesamt mit Aufschlüsselung in bearbeitet, übersprungen und fehlgeschlagen

---

## [1.0.6] - 2026-03-05

### Behoben
- SQL-Syntaxfehler auf MariaDB beim Abrufen unverarbeiteter Medien-IDs behoben (LIMIT-Parameter wurde als String übergeben)

---

## [1.0.5] - 2026-03-05

### Behoben
- 500-Fehler bei der Status-API durch fehlende DBAL-Connection-Abhängigkeit im ProgressService behoben

---

## [1.0.4] - 2026-03-05

### Behoben
- Speicherüberlauf bei großen Medienbibliotheken durch Ersetzen von PHP-geladenen ID-Listen mit SQL-Subqueries behoben
- Speicherakkumulation im Worker durch Ersetzen von Entity-Search+Write mit DBAL UPSERT behoben
- Speicherdruck bei Batch-Verarbeitung durch explizites Freigeben von Entities und erzwungene GC zwischen Batches reduziert
- Imagick Pixel-Cache Speicherleck durch Aufruf von clear() vor destroy() behoben
- Endlosschleife bei fehlenden Mediendateien behoben (werden nun als übersprungen protokolliert)
- Endlose Partial-Batches bei Lock-Fehlern behoben (werden nun zur Batch-Größe gezählt)
- Langsame Status-API-Abfragen durch SQL-Aggregation statt Laden aller Log-Einträge behoben
- Festgehangener Verarbeitungsstatus wird nach 30 Minuten automatisch zurückgesetzt
- Gleichzeitige Verarbeitungsanfragen werden nun mit 409 abgelehnt um Zählerkorruption zu verhindern
- Falsche AVIF-Konvertierungs-Gesamtanzahl durch fehlerhafte Erweiterungsliste korrigiert
- Vorzeitiges Stoppen der Fortschrittsabfrage durch Race Condition in runTask() behoben
- Bereits konvertierte Dateien werden nun protokolliert und von zukünftigen Durchläufen ausgeschlossen
- Bilder innerhalb der Größengrenzen werden nun beim Resize protokolliert und von zukünftigen Durchläufen ausgeschlossen
- Aktuelle Verarbeitungsfehler werden nun gesammelt und in der Status-API-Antwort angezeigt

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
