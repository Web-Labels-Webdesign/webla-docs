**Änderungsprotokoll — Zusatzfelder in der Admin-Produktübersicht**

Alle wichtigen Änderungen aus Anwendersicht.

---

# 4.1.0

_Veröffentlicht am 2026-07-13_

**Neue Funktionen**

- Eine Installation für Shopware 6.6 und 6.7. Bisher gab es getrennte Plugin-Versionen je Shopware-Version. Ab sofort deckt eine einzige Installationsdatei beide Versionen ab. Ein Wechsel des Plugins beim Shopware-Update entfällt.

**Fehlerbehebungen**

- Ausgewählte Zusatzfeld-Spalten bleiben erhalten. Bisher gingen eingeblendete und verschobene Zusatzfeld-Spalten beim Wechsel in ein anderes Menü wieder verloren und mussten erneut ausgewählt werden. Standardspalten waren nicht betroffen. Ursache war ein Wettlauf beim Laden: Die Spalten wurden der Produktliste teilweise zu spät gemeldet, sodass Shopware sie beim Speichern der Spalteneinstellungen verwarf. Die Spalten werden nun erst gemeldet, wenn sie vollständig geladen sind.
- Falls Ihre Spaltenauswahl bereits verloren gegangen ist, stellen Sie sie nach dem Update einmalig wieder ein. Danach bleibt sie dauerhaft erhalten.
- Zuverlässige Spaltenbeschriftung. Die Bezeichnungen konnten in der falschen Sprache erscheinen, weil die Sprache des Admins mitunter noch nicht geladen war, während die Spalten bereits erzeugt wurden.

**Verbesserungen**

- Überarbeitete Dokumentation und Store-Texte. Beschreibung, Installationsanleitung und FAQ wurden vollständig neu geschrieben. Die Installationsanleitung nannte bisher einen falschen Weg zu den Spalteneinstellungen.

---

# 4.0.0

_Veröffentlicht am 2025-07-31_

**Breaking Changes**

- Unterstützung für Shopware 6.7. Diese Version läuft ausschließlich unter Shopware 6.7. Für Shopware 6.6 verwenden Sie Version 3.x oder Version 4.1.0, die beide Versionen abdeckt.

---

# 3.0.3

_Veröffentlicht am 2025-07-04_

**Fehlerbehebungen**

- Robustere Anzeige unvollständiger Zusatzfelder. Ein Zusatzfeld ohne hinterlegte Bezeichnung konnte den Aufbau der Spaltenliste stören. Betroffene Felder werden nun übersprungen, statt die übrigen Spalten zu blockieren.

---

# 3.0.0

_Veröffentlicht am 2024-12-27_

**Breaking Changes**

- Unterstützung für Shopware 6.6. Diese Version läuft unter Shopware 6.6.

---

# 2.0.0

_Veröffentlicht am 2023-06-14_

**Breaking Changes**

- Unterstützung für Shopware 6.5.

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                 |
| ------- | ---------------- | ------------------------------------------ |
| 4.1.0   | 2026-07-13       | Eine Installation für Shopware 6.6 und 6.7 |
| 4.0.0   | 2025-07-31       | Shopware 6.7                               |
| 3.0.3   | 2025-07-04       | Fehlerbehebung bei unvollständigen Feldern |
| 3.0.0   | 2024-12-27       | Shopware 6.6                               |
| 2.0.0   | 2023-06-14       | Shopware 6.5                               |

Die Einträge vor Version 2.0.0 sind nicht verlässlich dokumentiert und wurden hier bewusst weggelassen.

## Upgrade-Hinweise

### Upgrade auf 4.1.0

Es sind keine Schritte erforderlich. Ihre Spaltenauswahl bleibt erhalten, da sie in den Shopware-Einstellungen der Produktliste gespeichert ist und nicht im Plugin.

Wenn Sie bisher je nach Shopware-Version zwischen Plugin-Version 3.x und 4.0.0 wechseln mussten, entfällt das ab 4.1.0.

### Kompatibilität

| Plugin-Version | Shopware-Version |
| -------------- | ---------------- |
| 4.1.0          | 6.6.0 – 6.7.x    |
| 4.0.0          | 6.7.x            |
| 3.x            | 6.6.x            |
| 2.x            | 6.5.x            |
