# Änderungsprotokoll

Alle wichtigen Änderungen an UTM Source - Marketing Parameter für Endbenutzer.

---

## [5.0.0] - 2026-02-02

### Neue Funktionen

- **Unified Branch Struktur**: Migration zu einer vereinfachten Code-Struktur für bessere Wartbarkeit
- **UTM Handler Kernfunktionalität**: Vollständige Session-Verwaltung und automatische Bereinigungsaufgaben

### Verbesserungen

- **Plug-and-Play JavaScript**: Verbesserte JS-Kompatibilität über Shopware 6.5, 6.6 und 6.7 hinweg
- **Sicherheitsverbesserungen**: Behebung kritischer Sicherheits- und Stabilitätsprobleme

---

## [4.0.1] - 2025-08-04

### Fehlerbehebungen

- **Session-Verwaltung**: Verbesserungen bei der Session-Verwaltung und der Bereinigungsaufgabe

---

## [4.0.0] - 2025-07-21

### Wichtige Änderungen

- **Shopware 6.7 Unterstützung**: Vollständige Kompatibilität mit Shopware 6.7

---

## [3.0.2] - Vorherige Version

### Änderungen

- **Shopware 6.6 Unterstützung**: Legacy-Branch für Shopware 6.6

---

## [2.0.1] - 2023-08-01

### Fehlerbehebungen

- **Null-Werte**: Verhindert das Speichern von "null"-Werten in der Datenbank

---

## [2.0.0] - 2023-06-09

### Neue Funktionen

- **Shopware 6.5 Unterstützung**: Kompatibilität mit Shopware 6.5 hinzugefügt

---

## [1.1.30] - 2023-02-14

### Änderungen

- **Cookie-Gültigkeit**: Cookie-Ablaufzeit auf 30 Tage erhöht für bessere Erfassung bei längeren Kaufentscheidungen

---

## [1.1.29] - 2022-11-24

### Fehlerbehebungen

- **Doppelte Einträge**: Problem mit doppelten Datenbankeinträgen behoben

---

## [1.1.28] - 2022-11-08

### Fehlerbehebungen

- **Bearbeitungsprobleme**: Hotfix für Probleme beim Bearbeiten von Einträgen

---

## [1.1.27] - 2022-11-08

### Fehlerbehebungen

- **Bearbeitungsprobleme**: Hotfix für Probleme beim Bearbeiten von Einträgen

---

## [1.1.26] - 2022-11-03

### Fehlerbehebungen

- **String-Vergleich**: Hotfix für String-Vergleich beim Speichern

---

## [1.1.25] - 2022-10-29

### Änderungen

- **Vererbungsreihenfolge**: Geänderte Reihenfolge zwischen Bestellung und UTM-Daten

---

## [1.1.24] - 2022-10-15

### Neue Funktionen

- **Geräteerkennung**: Erfassung von Gerätetyp, Browser und Betriebssystem hinzugefügt

---

## [1.1.22] - 2022-08-22

### Fehlerbehebungen

- **Referrer bei Login**: Falscher Referrer bei Registrierung oder Anmeldung des Benutzers behoben

---

## [1.1.21] - 2022-07-14

### Neue Funktionen

- **Session-Tabelle**: Neue Tabelle zur Speicherung von Referrern ohne Cookie
- **Geplante Aufgabe**: Automatische Bereinigung alter Einträge in der Session-Tabelle
- **Konfigurationsoptionen**: Einstellungen für Session-Handling und Bereinigungsintervall

---

## [1.1.20] - 2022-07-13

### Änderungen

- **Template-Vererbung**: 'extends' durch 'sw_extends' ersetzt für bessere Shopware-Kompatibilität

---

## [1.1.19] - 2022-06-22

### Erstveröffentlichung

- Initiale Version des Plugins

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                |
| ------- | ---------------- | ----------------------------------------- |
| 5.0.0   | 2026-02-02       | Unified Branch, SW 6.5-6.7 Kompatibilität |
| 4.0.1   | 2025-08-04       | Session-Verwaltung verbessert             |
| 4.0.0   | 2025-07-21       | Shopware 6.7 Unterstützung                |
| 3.0.2   | -                | Shopware 6.6 Unterstützung                |
| 2.0.0   | 2023-06-09       | Shopware 6.5 Unterstützung                |
| 1.1.24  | 2022-10-15       | Geräteerkennung hinzugefügt               |
| 1.1.21  | 2022-07-14       | Cookie-loses Tracking eingeführt          |

---

## Upgrade-Hinweise

### Upgrade auf 5.0.0

Diese Version vereinheitlicht die Code-Basis für alle unterstützten Shopware-Versionen (6.5, 6.6, 6.7). Ein direktes Upgrade von vorherigen Versionen ist möglich. Nach dem Update:

1. Cache leeren
2. Plugin-Einstellungen überprüfen
3. Testbestellung durchführen

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 5.0.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 4.0.x          | 6.7.x            | 8.1+        |
| 3.0.x          | 6.6.x            | 8.1+        |
| 2.0.x          | 6.5.x            | 8.1+        |
