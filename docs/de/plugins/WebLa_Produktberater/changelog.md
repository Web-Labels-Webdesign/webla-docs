# Änderungsprotokoll

Alle wichtigen Änderungen am Produkt Berater Plugin für Endbenutzer.

---

## [7.0.5] - 2026-01-26

### Fehlerbehebungen

- **Shopware 6.6 Kompatibilität**: Das Plugin funktioniert jetzt sofort nach der Installation ohne manuelles `bin/build-storefront`. Kompilierte Storefront-Assets sind jetzt im Plugin-Paket enthalten.

---

## [7.0.4] - 2026-01-15

### Verbesserungen

- **Changelog-Generierung**: Verbesserte automatische Changelog-Erstellung bei Releases

---

## [7.0.3] - 2026-01-13

### Fehlerbehebungen

- **Store-Bilder**: Bilder für den Shopware Store wurden ins korrekte PNG-Format konvertiert

---

## [7.0.2] - 2026-01-13

### Fehlerbehebungen

- **Code-Optimierung**: Nicht verwendete Abhängigkeiten entfernt und Fragen-Abruf optimiert

### Leistungsverbesserungen

- **Session-Verwaltung**: Die Session-Bereinigung wurde optimiert, um weniger Server-Anfragen zu verursachen

---

## [7.0.1] - 2026-01-13

### Fehlerbehebungen

- **Sprunglogik**: Ein Fehler wurde behoben, bei dem der Berater vorzeitig endete, wenn ein Sprungziel NULL war. Ungültige Sprungziele werden jetzt korrekt ignoriert.

---

## [7.0.0] - 2026-01-13

### Neue Funktionen

- **Multi-Version-Architektur**: Das Plugin unterstützt jetzt Shopware 6.5 bis 6.7 aus einem einzigen Code-Zweig. Dies vereinfacht Updates und gewährleistet konsistente Funktionalität über alle unterstützten Versionen.

### Wichtige Änderungen

- **Shopware-Kompatibilität**: Unterstützt jetzt Shopware 6.5.0 bis 6.8.0

### Breaking Changes

- **CMS-Block-Neukonfiguration erforderlich**: Aufgrund interner Komponentennamen-Korrekturen werden bestehende Produktberater-Blöcke in Erlebniswelten nicht mehr angezeigt. Sie müssen den Produktberater-Block in jeder betroffenen Erlebniswelt **entfernen und erneut hinzufügen**. Ihre Berater-Konfigurationen (Fragen, Antworten, Einstellungen) bleiben erhalten.

---

## [6.0.3] - 2025-08-15

### Verbesserungen

- **JavaScript-Optimierung**: Aktualisiertes JavaScript-Bundle mit verbessertem Plugin-Loading
- **Datenbankleistung**: Verbesserte SQL-Abfrageleistung im AdvisorResultService durch UNION ALL-Optimierung
- **Fehlerbehandlung**: Verbesserte Fehlerbehandlung und Protokollierung in JavaScript-Plugins
- **Code-Qualität**: Allgemeine Verbesserungen und Bereinigungen

---

## [3.0.2] - 2023-08-31

### Neue Funktionen

- **B2B-Kompatibilität**: Kompatibilität mit Shopware B2B Suite hinzugefügt

---

## [3.0.1] - 2023-06-13

### Fehlerbehebungen

- **Eigenschafts-Erfassung**: Algorithmus zur Erfassung von Produkteigenschaften korrigiert

---

## [3.0.0] - 2023-06-07

### Neue Funktionen

- **Shopware 6.5**: Unterstützung für Shopware 6.5 hinzugefügt

---

## [2.3.17] - 2023-06-01

### Verbesserungen

- **Varianten-Suche**: Der Suchalgorithmus durchsucht jetzt auch Variantenoptionen (nicht nur Eigenschaften)
- **Hauptprodukte**: Hauptprodukte mit Varianten werden nicht mehr in der Suche angezeigt (nur die Varianten)
- **Filterung**: Nicht passende Ergebnisse können jetzt pro Frage gefiltert werden

---

## [2.3.16] - 2023-03-01

### Fehlerbehebungen

- **Leistung**: Performance-Probleme behoben

---

## [2.3.15] - 2022-12-15

### Fehlerbehebungen

- **Update-Problem**: Ein Update-Problem wurde behoben
- **Interner Name**: Die Anforderung für einen internen Namen wurde entfernt

---

## [2.3.14] - 2022-10-19

### Neue Funktionen

- **Nicht passende ausschließen**: Option hinzugefügt, um nicht passende Produkte vollständig auszuschließen

---

## [2.3.0] - 2022-10-06

### Neue Funktionen

- **Übersetzungen**: Alle sichtbaren Texte können jetzt übersetzt werden

---

## [2.1.16] - 2022-02-16

### Erstveröffentlichung

- Erste öffentliche Version des Produkt Berater Plugins

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights |
|---------|-----------------|------------|
| 7.0.5 | 2026-01-26 | Shopware 6.6 Sofort-Einsatz-Fix |
| 7.0.4 | 2026-01-15 | Changelog-Verbesserungen |
| 7.0.3 | 2026-01-13 | Store-Bild-Korrektur |
| 7.0.2 | 2026-01-13 | Performance-Optimierung |
| 7.0.1 | 2026-01-13 | Sprunglogik-Bugfix |
| 7.0.0 | 2026-01-13 | Multi-Version-Support (6.5-6.7) |
| 6.0.3 | 2025-08-15 | JS-Optimierung, SQL-Performance |
| 3.0.2 | 2023-08-31 | B2B Suite Kompatibilität |
| 3.0.0 | 2023-06-07 | Shopware 6.5 Support |
| 2.3.17 | 2023-06-01 | Varianten-Suche |
| 2.3.14 | 2022-10-19 | Ausschluss-Option |
| 2.3.0 | 2022-10-06 | Vollständige Übersetzungen |
| 2.1.16 | 2022-02-16 | Erstveröffentlichung |

---

## Upgrade-Hinweise

### Upgrade auf 7.0.0

Das Plugin wurde auf eine Multi-Version-Architektur umgestellt. Beim Upgrade von älteren Versionen:

1. Erstellen Sie ein Backup Ihrer Datenbank
2. Deaktivieren Sie das alte Plugin
3. Installieren Sie die neue Version
4. Aktivieren Sie das Plugin
5. Leeren Sie den Cache
6. **Produktberater-Blöcke erneut hinzufügen** in Ihren Erlebniswelten (siehe Breaking Changes oben)

Bestehende Produktberater, Fragen und Antworten bleiben erhalten. Nur die CMS-Block-Platzierung muss aktualisiert werden.

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
|----------------|------------------|-------------|
| 7.0.x | 6.5.0 - 6.8.0 | 8.1+ |
| 6.0.x | 6.6.x | 8.1+ |
| 3.0.x | 6.5.x | 8.1+ |
| 2.3.x | 6.4.x | 7.4+ |

---

## Support

Bei Fragen oder Problemen erreichen Sie uns unter **plugin@web-labels.de** oder über den Shopware Ticket-Support.
