**Changelog — Home Page Control**

Alle wichtigen Änderungen für Shopbetreiber und Administratoren.

---

# 4.1.1

_Veröffentlicht am 2026-09-01_

**Fehlerbehebungen**

- Die Regel "Wochentag" greift wieder. Sie traf nie zu, dadurch wurde eine auf bestimmte Wochentage eingeschränkte Konfiguration übersprungen und die Startseite blieb unverändert.

# 4.1.0

_Veröffentlicht am 2026-09-01_

**Neue Funktionen**

- Unterstützung für Shopware 6.6.6 und neuer in derselben Plugin-Version wie 6.7 — ein Download deckt beide Hauptversionen ab

**Verbesserungen**

- Die Cache-Unterscheidung unter Shopware 6.6 läuft über den Cache-Key der Kategorie-Route, dadurch behält jede Kundengruppe ihre eigene gecachte Startseite bei aktivem HTTP-Cache
- Build und Release laufen über shopware-cli, das die Administration-Assets für 6.6 und 6.7 aus einem einzigen Build ausliefert

**Fehlerbehebungen**

- Der Regeltyp "Zeitraum" fällt nicht mehr durch und füllt sich nicht länger mit dem Wert der Kundengruppe vor
- Die Startseite geht nicht mehr mit einem Fatal Error verloren, wenn kein Verkaufskanal auf die Anfrage passt
- Fehlende Entity-Felder (Erlebniswelt, Konfiguration, Konfigurations-ID) stehen wieder zur Verfügung

**Breaking Changes**

- Der Regeltyp "Referrer" wurde entfernt. Er wurde nie ausgewertet und hatte damit keinen Einfluss darauf, welche Startseite ausgespielt wurde. Vorhandene Regeln dieses Typs werden beim Update automatisch gelöscht.
