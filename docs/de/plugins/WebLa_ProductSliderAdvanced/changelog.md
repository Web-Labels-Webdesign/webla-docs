# Änderungsprotokoll

Alle wichtigen Änderungen an Product Slider Advanced für Endbenutzer.

---

## [v5.0.3] - 2026-02-04

### 🐛 Fehlerbehebungen

- **CSS-Inline-Styles korrigiert**: Ein Problem mit CSS-Escaping wurde behoben, das Inline-Styles im Slider beschädigt hat. Dies behebt Darstellungsprobleme bei der Teaser-Breite und anderen Style-Eigenschaften.

---

## [v5.0.2] - 2026-02-04

### 🐛 Fehlerbehebungen

- **Datenattribut korrigiert**: Das Datenattribut für den Produkt-Slider wurde aktualisiert, um die Funktionalität zu verbessern

---

## [v5.0.1] - 2026-02-04

### 🐛 Fehlerbehebungen

- **Vertikale Ausrichtung**: Eine unnötige Bedingung für die vertikale Ausrichtung wurde entfernt, die in bestimmten Fällen Darstellungsprobleme verursachte
- **Performance-Optimierungen**: Verbesserungen bei Sicherheit, Performance und Code-Qualität

---

## [v5.0.0] - 2026-02-04

### ✨ Neue Funktionen

- **Einheitliche Versionsunterstützung**: Das Plugin unterstützt jetzt Shopware 6.5, 6.6 und 6.7 in einer einzigen Version. Sie müssen nicht mehr zwischen verschiedenen Plugin-Versionen für unterschiedliche Shopware-Versionen wechseln.

### 🐛 Fehlerbehebungen

- **Store-Bilder**: Konvertierung der Store-Bilder vom JPEG- in das PNG-Format für bessere Qualität
- **Meta-Titel**: Der Meta-Titel wurde gekürzt, um die 50-Zeichen-Beschränkung einzuhalten

---

## [v2.0.2] - 2023-10-20

### 🐛 Fehlerbehebungen

- **Kategorien löschen**: Ein Problem wurde behoben, das beim Löschen von Kategorien auftrat

---

## [v2.0.0] - 2023-06-09

### ✨ Neue Funktionen

- **Shopware 6.5 Unterstützung**: Das Plugin ist jetzt kompatibel mit Shopware 6.5

---

## [v1.0.8] - 2022-09-02

### 🔧 Verbesserungen

- **Administration**: Aktualisierte Datenverarbeitung im Administrationsbereich

---

## [v1.0.6] - 2022-09-01

### 🔧 Verbesserungen

- **Frontend-Daten**: Aktualisierte Frontend-Datenverarbeitung

---

## [v1.0.3] - 2022-08-22

### 🔧 Verbesserungen

- **Bildhöhe**: Verbesserte Handhabung der Bildhöhe

---

## [v1.0.2] - 2022-08-05

### ✨ Neue Funktionen

- **Maximalhöhe für Slider**: Neue Einstellung für die maximale Höhe des Sliders (Standard: 250px)
- **Kategorie Custom Fields**: Neue Custom Fields für Kategorien:
  - Individuelles Bild für den Kategorie-Slider
  - Individueller Beschreibungstext für den Slider
- **Beschreibungslimit**: Neuer Wert zur Begrenzung der Kategoriebeschreibung mit "..." nach Erreichen des Limits

### 🔧 Verbesserungen

- **Bilddarstellung**: Verbesserte Handhabung von Bildern in der Storefront
- **Slider-Elemente**: Angepasstes Bildverhalten innerhalb von Slider-Elementen und bei Kategoriebildern
- **Flexible Höhe**: Der Slider unterstützt jetzt den Wert `auto` für die Höhe

### 🐛 Fehlerbehebungen

- **Administrations-Übersetzungen**: Korrektur bei den Übersetzungen im Administrationsbereich

---

## [v1.0.1] - 2022-07-28

### ✨ Erstveröffentlichung

- Produkt-Slider für Erlebniswelten
- Unterstützung für manuelle Produktauswahl
- Unterstützung für Produkte aus Kategorien
- Unterstützung für dynamische Produktgruppen
- Kategorie-Slider-Modus
- Integrierter Teaser-Bereich
- Responsive Design
- Navigationspfeile und automatisches Scrollen

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights |
| ------- | ---------------- | ---------- |
| v5.0.3  | 2026-02-04       | Bugfix für CSS-Inline-Styles |
| v5.0.2  | 2026-02-04       | Bugfix für Slider-Funktionalität |
| v5.0.1  | 2026-02-04       | Performance-Optimierungen |
| v5.0.0  | 2026-02-04       | Einheitliche Unterstützung für SW 6.5-6.7 |
| v2.0.2  | 2023-10-20       | Bugfix für Kategorien |
| v2.0.0  | 2023-06-09       | Shopware 6.5 Unterstützung |
| v1.0.2  | 2022-08-05       | Kategorie Custom Fields, Höheneinstellungen |
| v1.0.1  | 2022-07-28       | Erstveröffentlichung |

---

## Upgrade-Hinweise

### Upgrade auf v5.0.0

Version 5.0.0 führt eine einheitliche Codebasis für Shopware 6.5, 6.6 und 6.7 ein. Beim Upgrade:

1. Sichern Sie Ihren Shop vor dem Upgrade
2. Aktualisieren Sie das Plugin über den Plugin-Manager oder Composer
3. Leeren Sie den Cache unter **Einstellungen → System → Caches & Indizes**
4. Ihre bestehenden Slider-Konfigurationen bleiben erhalten

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| v5.0.3         | 6.5.0 - 6.7.x    | 8.1+        |
| v2.0.x         | 6.5.x            | 8.1+        |
| v1.0.x         | 6.4.x            | 7.4+        |
