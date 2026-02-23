# Änderungsprotokoll

Alle wichtigen Änderungen an Intelligentes Cross-Selling für Endbenutzer.

---

## [5.1.1] - 2026-02-19

### Verbesserungen

- **Schnellere Cache-Treffer**: Alle Datenbankabfragen bei gecachten Cross-Selling-Anfragen eliminiert — die Konfigurations-ID-Abfrage, die bei jeder Anfrage (auch bei Cache-Treffern) ausgeführt wurde, wurde entfernt
- **Weniger DB-Abfragen bei Cache-Misses**: Eigenschaftsgewichtungen werden nun aus bereits geladenen Konfigurationsdaten gelesen, anstatt eine separate Abfrage pro Konfiguration auszulösen
- **Produkt-Vorausladen**: Das Quellprodukt wird einmal geladen und bei mehreren Cross-Selling-Gruppen für alle Konfigurationen wiederverwendet
- **Schlankere Suchabfragen**: Unnötiges Laden von Assoziationen bei reinen ID-Suchabfragen entfernt

---

## [5.1.0] - 2026-02-05

### Neu

- **Mehrere Konfigurationen**: Erstellen Sie mehrere Cross-Selling-Konfigurationen, jede mit eigenen Eigenschaftsgewichtungen und Einstellungen
- **Kategoriezuweisung**: Weisen Sie Konfigurationen bestimmten Kategorien zu - Produkte in diesen Kategorien verwenden diese Konfiguration
- **Dynamische Produktgruppen-Zuweisung**: Weisen Sie Konfigurationen dynamischen Produktgruppen (Product Streams) für flexible Ausrichtung zu
- **Prioritätsbasierte Auflösung**: Setzen Sie Prioritäten, um zu steuern, welche Konfiguration gewinnt, wenn ein Produkt mehreren entspricht
- **Alle passenden anzeigen**: Neue Plugin-Einstellung, um alle passenden Konfigurationen statt nur der höchsten Priorität anzuzeigen

### Fehlerbehebungen

- **Shopware 6.7 Kompatibilität**: Entity-Multi-Select-Komponenten funktionieren nun korrekt in Shopware 6.7 (Vue 3)
- **Versionsübergreifende Unterstützung**: Entity-Selektoren funktionieren jetzt korrekt auf Shopware 6.5, 6.6 und 6.7

### Verbesserungen

- **Überarbeitete Admin-Oberfläche**: Neues Listen-/Detail-Muster zur Verwaltung mehrerer Konfigurationen
- **Bessere Organisation**: Gruppieren Sie Cross-Selling-Regeln nach Produktkategorien oder dynamischen Gruppen

---

## [5.0.1] - 2026-01-29

### Fehlerbehebungen

- **Empfehlungsgenauigkeit verbessert**: Kritischen Fehler behoben, bei dem Produktfilter über Eigenschafts-Iterationen akkumulierten und zunehmend falsche Ergebnisse lieferten
- **Absturz bei fehlenden Produkten behoben**: Null-Prüfungen hinzugefügt, um Fehler zu verhindern, wenn ein Produkt nicht existiert oder keine Eigenschaften hat
- **Variantenausschluss korrigiert**: Hauptartikel zeigen nun nicht mehr fälschlicherweise ihre eigenen Varianten im Cross-Selling
- **Leere Kategorien behandelt**: Edge-Case behoben, bei dem leere Kategoriebäume Filterfehler verursachen konnten

### Verbesserungen

- **Performance optimiert**: Gewichtungs-Lookups verwenden nun O(1) Hash-Map statt O(n) linearer Suche
- **Bessere Cache-Invalidierung**: Cache wird nun korrekt geleert, wenn Eigenschaftsgewichtungen oder Einstellungen geändert werden
- **Verbesserte Gewichtungsvalidierung**: Ungültige Gewichtungen (null, Null, negativ) werden nun übersprungen

---

## [5.0.0] - 2026-01-29

### Neu

- **Einheitliche Multi-Version-Unterstützung**: Das Plugin unterstützt nun Shopware 6.5, 6.6 und 6.7 aus einer einzigen Codebasis
- **Automatische Versionserkennung**: Das Plugin erkennt automatisch Ihre Shopware-Version und lädt die passenden Komponenten

### Verbesserungen

- **Moderne Admin-Oberfläche**: Die Benutzeroberfläche wurde für Vue 3 optimiert
- **Verbesserte Stabilität**: Alle Migrationen sind nun mit verschiedenen Datenbankversionen kompatibel

### Wichtige Änderungen

- Das Plugin benötigt mindestens Shopware 6.5.0
- Maximale unterstützte Version ist Shopware 6.7.x

### Migration von 4.x

- Keine Konfigurationsänderungen erforderlich
- Alle Funktionen aus Version 4.x bleiben erhalten
- Das Plugin erkennt automatisch Ihre Shopware-Version

---

## [4.1.0] - 2026-01-16

### Neu

- **Mehrsprachige Titel**: Der Titel der Cross-Selling-Sektion kann nun pro Sprache unterschiedlich definiert werden
- Nutzen Sie den Sprachumschalter im Admin-Bereich, um Titel in verschiedenen Sprachen zu pflegen

---

## [4.0.1] - 2025-10-17

### Fehlerbehebungen

- **Migrationsprobleme behoben**: Das Plugin prüft nun vor der Migration, ob Spalten bereits existieren
- Verhindert Fehler bei wiederholter Installation

---

## [4.0.0] - 2025-07-21

### Verbesserungen

- **Shopware 6.7 Kompatibilität**: Vollständige Unterstützung für Shopware 6.7

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights |
|---------|------------------|------------|
| 5.1.1 | 2026-02-19 | Performance: keine DB-Abfragen bei Cache-Treffer |
| 5.1.0 | 2026-02-05 | Mehrere Konfigurationen, Kategorie-/Stream-Zuweisung |
| 5.0.1 | 2026-01-29 | Kritische Bugfixes, Performance-Optimierung |
| 5.0.0 | 2026-01-29 | Multi-Version-Support (SW 6.5-6.7) |
| 4.1.0 | 2026-01-16 | Mehrsprachige Titel |
| 4.0.1 | 2025-10-17 | Migrations-Bugfix |
| 4.0.0 | 2025-07-21 | Shopware 6.7 Support |

---

## Upgrade-Hinweise

### Upgrade auf 5.0.0

- **Keine Aktion erforderlich**: Das Upgrade erfolgt automatisch
- Alle bisherigen Einstellungen und Gewichtungen bleiben erhalten
- Das Plugin erkennt Ihre Shopware-Version automatisch

### Upgrade auf 4.1.0

- Nach dem Upgrade können Sie mehrsprachige Titel einrichten
- Bestehende Titel werden in der Standardsprache beibehalten

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
|----------------|------------------|-------------|
| 5.0.x | 6.5.0 - 6.7.x | 8.1+ |
| 4.1.x | 6.6.x | 8.1+ |
| 4.0.x | 6.6.x - 6.7.x | 8.1+ |
