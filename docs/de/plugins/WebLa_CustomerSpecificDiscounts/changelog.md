# Änderungsprotokoll

Alle wichtigen Änderungen an Kundenspezifische Rabatte für Endbenutzer.

---

## [1.2.0] - 2026-01-26

### Neue Funktionen

- **Kundengruppen-Rabatte auf Kategorien/Produktgruppen**: Sie können nun Rabatte für ganze Kundengruppen auf bestimmte Kategorien oder Dynamische Produktgruppen vergeben. Dies ergänzt den globalen Gruppenrabatt um gezielte Rabatte.

### Verbesserungen

- **Produktdetailseite**: Rabatte werden nun korrekt auf der Produktdetailseite angezeigt, auch wenn CMS-Elemente wie die Kauf-Box verwendet werden.

---

## [1.1.0] - 2026-01-25

### Neue Funktionen

- **Produktspezifische Rabatte**: Setzen Sie Rabatte direkt auf einzelne Produkte über Custom Fields.
- **Globale Kundenrabatte**: Geben Sie einzelnen Kunden einen pauschalen Rabatt auf alle Produkte.
- **Erweiterte Prioritätsmodi**: Neuer Modus "Spezifischster zuerst" für präzise Rabattkontrolle.
- **Gesamtersparnis anzeigen**: Optional eine "Sie sparen X" Nachricht im Checkout.
- **Originalpreis durchgestrichen**: Zeigen Sie den Originalpreis visuell durchgestrichen an.

### Verbesserungen

- **Verbesserte Performance**: Optimiertes Caching für schnellere Rabattberechnung.
- **Bessere Admin-Oberfläche**: Übersichtlichere Darstellung der Kundenrabatte.

---

## [1.0.1] - 2026-01-20

### Fehlerbehebungen

- **PHPStan-Kompatibilität**: Behoben Typfehler für strikte PHP-Analyse.
- **ESLint-Validierung**: Korrigierte JavaScript-Formatierung im Admin.

---

## [1.0.0] - 2026-01-15

### Neue Funktionen

- **Individuelle Kundenrabatte**: Vergeben Sie Rabatte pro Kunde auf Kategorien oder Dynamische Produktgruppen.
- **Globale Kundengruppenrabatte**: Setzen Sie pauschale Rabatte für ganze Kundengruppen.
- **Flexible Prioritätssteuerung**: Wählen Sie zwischen "Höherer gewinnt", "Niedriger gewinnt" oder "Individuell zuerst".
- **Rabatt als Lineitem**: Option, den Rabatt als separate Position anzuzeigen.
- **Anpassbare Bezeichnungen**: Konfigurierbare Rabatt-Labels mit Variablen.
- **Kompatibilität mit WebLa_ProductGroupDiscount**: Automatische Unterstützung für bestehende Rabattdaten.

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights |
| ------- | ---------------- | ---------- |
| 1.2.0   | 2026-01-26       | Kundengruppen-Rabatte auf Kategorien/Produktgruppen |
| 1.1.0   | 2026-01-25       | Produktrabatte, globale Kundenrabatte, erweiterte Prioritätsmodi |
| 1.0.1   | 2026-01-20       | Bugfixes für PHP- und JS-Validierung |
| 1.0.0   | 2026-01-15       | Erstveröffentlichung |

---

## Upgrade-Hinweise

### Upgrade auf 1.2.0

Nach dem Update:
1. Leeren Sie den Cache unter Einstellungen → System → Caches & Indizes
2. Die neuen Kundengruppen-Rabatte finden Sie in den Kundengruppen-Einstellungen unter "Gruppenrabatte"

### Upgrade auf 1.1.0

Nach dem Update:
1. Leeren Sie den Cache
2. Neue Einstellungen finden Sie in der Plugin-Konfiguration
3. Produktrabatte können über Produkt → Weitere Felder gesetzt werden

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 1.2.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.1.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
