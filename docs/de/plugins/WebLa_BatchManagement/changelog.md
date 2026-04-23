# Änderungsprotokoll

Alle wichtigen Änderungen an **Charge-Management** für Endbenutzer.

---

## [3.0.0] — 2026-04-22

### ✨ Neue Funktionen

- **Shopware 6.7 Unterstützung**: Das Plugin läuft jetzt unter Shopware 6.7. Ein einziges ZIP-Paket deckt die Versionen 6.6 und 6.7 ab.

### 🔧 Verbesserungen

- **Automatische Oberflächenanpassung**: Admin-Komponenten erkennen die Shopware-Version zur Laufzeit und nutzen die passenden UI-Elemente, sodass Ansichten unter 6.6 und 6.7 gleich zuverlässig funktionieren.

### 🐛 Fehlerbehebungen

- **Deinstallation**: Plugin-Tabellen werden beim Deinstallieren nur dann entfernt, wenn Sie *Benutzerdaten behalten* nicht aktivieren — so verlieren Sie keine Chargen-Daten versehentlich.

### ⚠️ Wichtige Änderungen

- **Shopware 6.5 entfällt**: Ab dieser Version wird Shopware 6.5 nicht mehr unterstützt. Wer weiterhin 6.5 einsetzt, kann den Stand der letzten 6.5-kompatiblen Version aus dem `trunk`-Branch beziehen.

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                              |
| ------- | ---------------- | --------------------------------------- |
| 3.0.0   | 2026-04-22       | Shopware 6.7 Unterstützung, ein ZIP für 6.6+6.7 |

---

## Upgrade-Hinweise

### Upgrade auf 3.0.0

1. **Vor dem Upgrade**: Prüfen Sie, ob Ihre Shopware-Version mindestens 6.6.0 beträgt. Shops unter 6.5 müssen zuerst auf 6.6 aktualisiert werden.
2. **Plugin aktualisieren**: Über den Plugin-Manager oder per Composer.
3. **Nach dem Update**: Keine manuelle Datenmigration notwendig. Bestehende Chargen, Buchungen und Zusammensetzungen bleiben erhalten.

### Kompatibilität

| Plugin-Version | Shopware-Version     | PHP-Version |
| -------------- | -------------------- | ----------- |
| 3.0.0          | 6.6.0 – 6.7.x        | 8.2+        |
