# Änderungsprotokoll

Alle wichtigen Änderungen an Shopping Feed mit einzigartigen Rabatten für Endbenutzer.

---

## [v5.0.3] - 2026-02-20

### Fehlerbehebungen

- :bug: **Rabatt bei mehreren Produkten hintereinander**: Behoben: Bei aktivierter Option `allowMultiple=true` wurde nur das erste über einen Feed-Deeplink aufgerufene Produkt mit dem Rabattpreis angezeigt. Weitere Produkte zeigten fälschlicherweise den vollen Preis. Der Preisrechner ermittelt nun die passende Rabatt-Session pro Produkt innerhalb der Schleife, statt eine einzelne vorgeladene Session für alle Produkte zu verwenden.

---

## [v5.0.2] - 2026-02-19

### Fehlerbehebungen

- :bug: **Preisdaten-Kontamination in der Datenbank**: Behoben: `listPrice` wurde fälschlicherweise in der Datenbank für Produkte gespeichert, bei denen der Händler keinen Streichpreis gesetzt hatte. Die Ursache lag in PHP-Shallow-Clone-Semantik, die direkte Mutationen an den Price-Objekten der Entität ermöglichte, bevor Shopwares `EntityWrittenEvent` die Entität persistierte. Alle drei Preisberechnungsmethoden erstellen nun neue `Price`-Objekte, anstatt die vorhandenen zu mutieren.

---

## [v5.0.1] - 2026-02-03

### Fehlerbehebungen

- **Kundenfeedback**: Behebung von Problemen basierend auf Kundenfeedback

---

## [v5.0.0] - 2026-02-03

### Neue Funktionen

- **Multi-Version-Unterstützung**: Volle Kompatibilität mit Shopware 6.5, 6.6 und 6.7
- **Verbesserte Architektur**: Optimierte Kompatibilitätsschicht für verschiedene Shopware-Versionen

---

## [2.0.1] - 2023-10-20

### Verbesserungen

- **Neue Caching-Strategie**: Verbesserte Performance durch optimiertes Caching

---

## [2.0.0] - 2023-06-13

### Neue Funktionen

- **Shopware 6.5 Unterstützung**: Vollständige Kompatibilität mit Shopware 6.5

---

## [1.0.11] - 2023-05-30

### Neue Funktionen

- **30-Tage-Preisanzeige**: Automatische Erstellung des günstigsten Preises der letzten 30 Tage, wenn ein Besucher über den Export kommt

---

## [1.0.10] - 2023-05-16

### Neue Funktionen

- **Neue Produktpreis-Einstellung**: Zusatzfeld für individuelle Exportpreise pro Produkt

---

## [1.0.9] - 2023-03-22

### Verbesserungen

- **Shopware-Anforderungen**: Anpassungen für Shopware-Kompatibilität

---

## [1.0.8] - 2023-03-09

### Verbesserungen

- **Shopware-Anforderungen**: Weitere Anpassungen für Shopware-Kompatibilität

---

## [1.0.7] - 2023-03-09

### Verbesserungen

- **Shopware-Anforderungen**: Anpassungen für Shopware-Kompatibilität

---

## [1.0.6] - 2023-02-15

### Verbesserungen

- **Rundung**: Verbesserte Preisrundung

---

## [1.0.5] - 2022-11-21

### Fehlerbehebungen

- **Fehlerbehandlung**: Vermeidung von Fehlern in bestimmten Szenarien

---

## [1.0.4] - 2022-11-10

### Verbesserungen

- **Staffelpreise**: Verbesserte Handhabung von erweiterten Preisen

---

## [1.0.3] - 2022-11-03

### Verbesserungen

- **Handhabung**: Verbesserte Handhabung und Dokumentation

---

## [1.0.1] - 2022-10-05

### Neue Funktionen

- **Automatische Bereinigung**: Scheduled Task für automatische Session-Bereinigung hinzugefügt

---

## [1.0.0] - 2022-10-05

### Neue Funktionen

- **Erstveröffentlichung**: Initiale Version des Plugins
- Globaler Rabatt für Produktexporte
- Session-basierte Rabattanzeige im Storefront
- Unterstützung für Google Shopping, idealo, billiger.de

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                    |
| ------- | ---------------- | --------------------------------------------- |
| v5.0.3  | 2026-02-20       | Fehlerbehebung: Rabatt bei mehreren Produkten mit allowMultiple=true |
| v5.0.2  | 2026-02-19       | Fehlerbehebung: Preisdaten-Kontamination in der DB |
| v5.0.1  | 2026-02-03       | Fehlerbehebungen basierend auf Kundenfeedback |
| v5.0.0  | 2026-02-03       | Shopware 6.5/6.6/6.7 Multi-Version-Support    |
| 2.0.1   | 2023-10-20       | Neue Caching-Strategie                        |
| 2.0.0   | 2023-06-13       | Shopware 6.5 Unterstützung                    |
| 1.0.11  | 2023-05-30       | 30-Tage-Preisanzeige                          |
| 1.0.10  | 2023-05-16       | Individuelle Produktpreise                    |
| 1.0.0   | 2022-10-05       | Erstveröffentlichung                          |

---

## Upgrade-Hinweise

### Upgrade auf v5.0.0

Diese Version bietet vollständige Kompatibilität mit Shopware 6.5, 6.6 und 6.7. Ein Upgrade von Version 2.x ist ohne Datenmigration möglich.

**Wichtig**: Nach dem Upgrade sollten Sie:
1. Den Cache leeren
2. Die Plugin-Konfiguration überprüfen
3. Ihre Export-Templates testen

### Kompatibilität

| Plugin-Version | Shopware-Version      | PHP-Version |
| -------------- | --------------------- | ----------- |
| 5.0.x          | 6.5.0 - 6.7.x         | 8.1+        |
| 2.0.x          | 6.5.0 - 6.5.x         | 8.1+        |
| 1.0.x          | 6.4.x                 | 7.4+        |
