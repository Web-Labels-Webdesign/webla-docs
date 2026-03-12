# Änderungsprotokoll

Alle wichtigen Änderungen am Plugin Wunsch-Lieferdatum für Kunden für Endbenutzer.

---

## 4.0.0 — 2025

### Neue Funktionen

- **Shopware 6.6 und 6.7 in einer einzigen Version**: Ab sofort ist nur noch eine Plugin-Version für beide Shopware-Hauptversionen notwendig. Ein Wechsel zwischen verschiedenen Plugin-Varianten ist nicht mehr erforderlich.
- **Eine Plugin-Version für alle**: Das Plugin erkennt automatisch Ihre installierte Shopware-Version und passt sich entsprechend an.

### Verbesserungen

- **Store-Listing überarbeitet**: Die Plugin-Beschreibung und Metadaten im Shopware Store wurden für bessere Auffindbarkeit und klarere Kommunikation überarbeitet.
- **Schnellere Datumsberechnung**: Die Berechnung des frühestmöglichen Lieferdatums bei Kategorien wurde optimiert und läuft jetzt deutlich schneller.

### Fehlerbehebungen

- **Datepicker-Beschriftung korrigiert**: Im Admin-Bereich zeigte das Datumseingabefeld auf Shopware 6.7 fälschlicherweise "Name" statt "Datum" als Beschriftung an.
- **Warenkorb-Fehler behoben**: Ein Fehler im Offcanvas-Warenkorb auf Shopware 6.7, der unter bestimmten Umständen zu einer Fehlermeldung führte, wurde behoben.

---

## Versionsübersicht

| Version | Highlights                                                   |
| ------- | ------------------------------------------------------------ |
| 4.0.0   | Unterstützung für Shopware 6.6 und 6.7 in einer einzigen Plugin-Version |

---

## Upgrade-Hinweise

### Upgrade auf 4.0.0

Wenn Sie von einer früheren Version upgraden, die nur für Shopware 6.6 oder 6.7 ausgelegt war, müssen keine manuellen Datenmigrations-Schritte durchgeführt werden. Führen Sie das Update einfach über **Erweiterungen → Meine Erweiterungen** durch — Ihre Einstellungen und Daten bleiben erhalten.

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 4.0.0          | 6.6.0 – 6.7.x    | 8.1+        |
