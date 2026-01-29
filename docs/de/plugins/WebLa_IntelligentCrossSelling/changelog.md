# Änderungsprotokoll

Alle wichtigen Änderungen an Intelligentes Cross-Selling für Endbenutzer.

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
