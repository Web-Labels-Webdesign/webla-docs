# Änderungsprotokoll

Alle wichtigen Änderungen am Ultimativen Bundle Plugin für Endbenutzer.

---

## [5.1.1] - 2026-03-27

### :bug: Fehlerbehebungen

- Admin-Felder (Mengenauswahl, optionale Gruppen) waren auf Shopware 6.7 nicht sichtbar aufgrund veralteter vorgebauter Assets

---

## [5.1.0] - 2026-03-26

### :sparkles: Neue Funktionen

- **Mengenauswahl pro Gruppe**: Kunden können nun die Stückzahl pro Bundle-Gruppe individuell festlegen. Admins können die Mengenauswahl aktivieren und eine maximale Menge pro Gruppe festlegen.
- **Optionale Gruppen**: Bundle-Gruppen können als optional markiert werden, sodass Kunden per Checkbox selbst entscheiden, ob sie diese hinzufügen möchten — mit Live-Preisberechnung im Storefront.

### :bug: Fehlerbehebungen

- Ausgeschlossene Gruppen bleiben nun nach AJAX-Preisaktualisierungen korrekt erhalten

---

## [5.0.0] - 2026-03-26

### :boom: Wichtige Änderungen

- **Neue Architektur**: Das Plugin unterstützt nun Shopware 6.6 und 6.7 aus einer einzigen Version. Es ist nicht mehr nötig, unterschiedliche Plugin-Versionen für verschiedene Shopware-Versionen zu verwenden. Das Plugin erkennt automatisch Ihre Shopware-Version und lädt die passenden Adapter.

### :sparkles: Neue Funktionen

- **Multi-Version-Support**: Unterstützung für Shopware 6.6 und 6.7 aus einer einzigen Codebasis
- **Bundles aktivieren/deaktivieren**: Neue globale Einstellung zum schnellen Ein- und Ausschalten aller Bundles
- **Unvollständige Bundles**: Neue Option, Bundles auch ohne vollständige Gruppenauswahl in den Warenkorb zu legen

### :wrench: Verbesserungen

- **Produktverfügbarkeit**: Verbesserte Filterung nicht verfügbarer Produkte in der Bundle-Anzeige
- **Warenkorb-Stabilität**: Stabilere Rabattberechnung und verbesserte Behandlung von Warenkorb-Hashes
- **Fehlerbehandlung**: Robustere Verarbeitung von Bundle-Auswahlen und -Rabaten

### :arrow_up: Migration von 4.x

- Keine Konfigurationsänderungen erforderlich
- Alle Funktionen der Version 4.x bleiben erhalten
- Das Plugin erkennt automatisch Ihre Shopware-Version

---

## [2.0.11] - 2023-11-06

### :wrench: Verbesserungen

- Kleinere Fehlerbehebungen und Stabilitätsverbesserungen

---

## [2.0.10] - 2023-10-05

### :wrench: Verbesserungen

- Kleinere Fehlerbehebungen und Stabilitätsverbesserungen

---

## [2.0.9] - 2023-09-25

### :wrench: Verbesserungen

- Kleinere Fehlerbehebungen

---

## [2.0.8] - 2023-09-25

### :sparkles: Neue Funktionen

- **Rabattsteuerung**: Neuer Schalter zur Steuerung des Rabattverhaltens pro Bundle

---

## [2.0.7] - 2023-09-25

### :wrench: Verbesserungen

- Fehlerbehebungen und Verbesserungen für die finale Version

---

## [2.0.6] - 2023-08-31

### :wrench: Verbesserungen

- Fehlerbehebungen und Verbesserungen für die finale Version

---

## [2.0.2] - 2023-08-03

### :wrench: Verbesserungen

- Kleinere Fehlerbehebungen und Verbesserungen

---

## [2.0.1] - 2023-08-03

### :wrench: Verbesserungen

- Kleinere Fehlerbehebungen und Verbesserungen

---

## [2.0.0] - 2023-08-03

### :sparkles: Neue Funktionen

- **Shopware 6.5 Unterstützung**: Vollständige Kompatibilität mit Shopware 6.5

---

## [1.0.8] - 2023-08-03

### :tada: Erstveröffentlichung

- Initiale Veröffentlichung des Ultimativen Bundle Plugins

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                              |
| ------- | ---------------- | ------------------------------------------------------- |
| 5.1.1   | 2026-03-27       | Fix Admin-Felder auf SW 6.7                                           |
| 5.1.0   | 2026-03-26       | Mengenauswahl pro Gruppe, optionale Bundle-Gruppen                     |
| 5.0.0   | 2026-03-26       | Multi-Version-Support (SW 6.6 & 6.7), Einzelcodebasis-Architektur     |
| 2.0.8   | 2023-09-25       | Rabattsteuerung pro Bundle                              |
| 2.0.0   | 2023-08-03       | Shopware 6.5 Unterstützung                              |
| 1.0.8   | 2023-08-03       | Erstveröffentlichung                                    |

---

## Upgrade-Hinweise

### Upgrade auf Version 5.0.0

- Installieren Sie die neue Version wie gewohnt über den Plugin Manager
- Keine manuellen Konfigurationsänderungen erforderlich
- Das Plugin erkennt automatisch Ihre Shopware-Version (6.6 oder 6.7)
- Separate Versionsbranches (sw65, sw66) werden nicht mehr benötigt

### Kompatibilität

| Plugin-Version | Shopware-Version  | PHP-Version |
| -------------- | ----------------- | ----------- |
| 5.1.0          | 6.6.0 - 6.7.x    | 8.2+        |
| 5.0.0          | 6.6.0 - 6.7.x    | 8.2+        |
| 2.0.x          | 6.5.x             | 8.1+        |
| 1.0.8          | 6.4.x             | 8.0+        |
