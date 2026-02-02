# Änderungsprotokoll

Alle wichtigen Änderungen am Plugin "Suche als Overlay" für Endbenutzer.

---

## [4.2.1] - 2026-02-02

### :bug: Fehlerbehebungen

- **LibSass-Kompatibilität**: SCSS-Kompilierungsfehler auf Shopware 6.5 behoben durch Ersatz der `sass:color`-Modul-Funktion `color.adjust()` mit `lighten()` für LibSass-Kompatibilität

---

## [4.2.0] - 2026-02-02

### :sparkles: Neue Funktionen

- **Moderner Ansichtsmodus**: Neue "Ansichtsmodus"-Einstellung mit zwei Optionen:
  - **Standard**: Klassisches Tab-Interface (Standard)
  - **Modern**: Side-by-Side-Layout auf Desktop mit Produkten links und Kategorien/Blog in einer Seitenleiste rechts. Mobile Geräte nutzen weiterhin das Tab-Interface.

### :recycle: Verbesserungen

- **Refaktorierte Tab-Templates**: Tab-Navigation und -Inhalte in wiederverwendbare Partial-Templates ausgelagert für bessere Wartbarkeit
- **Doppelter Blog-Tab behoben**: HTML-Validierungsproblem behoben, wenn sowohl NetzP als auch H1Web Blog-Plugins aktiv sind

---

## [4.1.0] - 2026-01-30

### :sparkles: Neue Funktionen

- **Kategorie-Seitenleiste auf Suchergebnisseite**: Neue Option zum Ersetzen des Filter-Bereichs auf der Suchergebnisseite durch passende Kategorien. Aktivierbar über "Seitenleisten-Filter durch Kategorieergebnisse ersetzen" in den Plugin-Einstellungen.
- **Konfigurierbare Kategorie-Anzahl**: Maximale Anzahl der angezeigten Kategorien in der Seitenleiste einstellbar (5, 10, 15 oder 20)

### :recycle: Verbesserungen

- **Refaktorierte Kategoriesuche**: Kategoriesuche-Logik in wiederverwendbaren `CategorySearchService` ausgelagert für bessere Code-Organisation

---

## [4.0.0] - 2026-01-30

### :boom: Wichtige Änderungen

- **Einheitliche Multi-Version-Architektur**: Das Plugin unterstützt jetzt Shopware 6.5, 6.6 und 6.7 mit einer einzigen Codebasis. Sie benötigen nicht mehr verschiedene Plugin-Versionen für unterschiedliche Shopware-Versionen.

### :sparkles: Neue Funktionen

- **Vollständige Such-Overlay-Funktionalität**: Tabbed-Interface mit Produkten, Kategorien, Blog und Herstellern
- **Konfigurierbare Anzeige**: Overlay-Breite, Spaltenanzahl und Box-Layout anpassbar
- **Erweiterte Produktsuche**: Suche nach EAN, Artikelnummer und Herstellernummer

### :recycle: Verbesserungen

- Optimierter Build-Workflow für schnellere Releases

---

## [3.0.1] - 2026-01-13

### :bug: Fehlerbehebungen

- **Herstellersuche**: Tippfehler im Variablennamen behoben, der zu Fehlern führen konnte
- **Stabilität**: Verbesserte Null-Prüfung im SuggestPageSubscriber für stabileren Betrieb

---

## [3.0.0] - 2025-07-31

### :sparkles: Neue Funktionen

- **Shopware 6.7 Unterstützung**: Volle Kompatibilität mit Shopware 6.7

### :boom: Wichtige Änderungen

- Diese Version ist speziell für Shopware 6.7 konzipiert

---

## [2.0.5] - 2025-05-09

### :bug: Fehlerbehebungen

- Verschiedene Bugfixes und Stabilitätsverbesserungen

---

## [2.0.0] - 2024-12-27

### :sparkles: Neue Funktionen

- **Shopware 6.6 Unterstützung**: Volle Kompatibilität mit Shopware 6.6

### :boom: Wichtige Änderungen

- Diese Version ist speziell für Shopware 6.6 konzipiert

---

## [1.0.0] - 2024-02-09

### :sparkles: Neue Funktionen

- **Initiale Version**: Erste Veröffentlichung des Plugins
- **Erweitertes Such-Overlay**: Moderne Oberfläche mit Tab-Navigation
- **Kategoriesuche**: Integration von Kategorien in die Suchergebnisse
- **Blog-Artikel-Suche**: Unterstützung für NetzP Blog und H1 Web Blog
- **Herstellersuche**: Integration von Herstellern (mit Shopware Commercial)
- **Konfigurierbare Darstellung**: Anpassbare Spaltenanzahl und Layout-Optionen

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                      |
| ------- | ---------------- | ----------------------------------------------- |
| 4.2.1   | 2026-02-02       | LibSass-Kompatibilitäts-Fix für Shopware 6.5    |
| 4.2.0   | 2026-02-02       | Moderner Ansichtsmodus mit Side-by-Side-Layout  |
| 4.1.0   | 2026-01-30       | Kategorie-Seitenleiste auf Suchergebnisseite    |
| 4.0.0   | 2026-01-30       | Multi-Version-Architektur (6.5, 6.6, 6.7)       |
| 3.0.1   | 2026-01-13       | Bugfix für Herstellersuche                      |
| 3.0.0   | 2025-07-31       | Shopware 6.7 Support                            |
| 2.0.5   | 2025-05-09       | Stabilitätsverbesserungen                       |
| 2.0.0   | 2024-12-27       | Shopware 6.6 Support                            |
| 1.0.0   | 2024-02-09       | Initiale Veröffentlichung                       |

---

## Upgrade-Hinweise

### Upgrade auf Version 4.0.0

Version 4.0.0 vereinheitlicht die Codebasis für alle Shopware 6 Versionen. Beachten Sie:

1. **Deinstallation der alten Version**: Deinstallieren Sie zunächst die vorhandene Plugin-Version
2. **Installation der neuen Version**: Installieren Sie Version 4.0.0
3. **Konfiguration prüfen**: Ihre Einstellungen müssen möglicherweise erneut vorgenommen werden
4. **Cache leeren**: Leeren Sie alle Caches nach dem Upgrade

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 4.0.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 3.0.x          | 6.7.x            | 8.1+        |
| 2.0.x          | 6.6.x            | 8.1+        |
| 1.0.x          | 6.5.x            | 8.1+        |
