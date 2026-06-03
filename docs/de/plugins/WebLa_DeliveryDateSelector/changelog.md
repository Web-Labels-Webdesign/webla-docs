**Änderungsprotokoll — Wunsch-Lieferdatum für Kunden**

Alle wichtigen Änderungen am Plugin für Endbenutzer.

---

# 4.0.3

_Veröffentlicht am 2026-06-02_

**Fehlerbehebungen**

- Die geplante automatische Feiertagsaktualisierung wird nun tatsächlich wieder ausgeführt. Die Korrektur aus 4.0.2 griff nicht — die Hintergrundaufgabe zur Aktualisierung der gesetzlichen Feiertage wurde weiterhin mit dem Fehler "No handler for message" verworfen. Sie läuft jetzt wieder zuverlässig.

---

# 4.0.2

_Veröffentlicht am 2026-06-01_

**Fehlerbehebungen**

- Die geplante automatische Aktualisierung der Feiertage wird wieder ausgeführt. Die Hintergrundaufgabe zum Aktualisieren der gesetzlichen Feiertage konnte nicht verarbeitet werden und wurde mit dem Fehler "No handler for message" verworfen; die Feiertage werden nun wieder automatisch aktualisiert.

---

# 4.0.1

_Veröffentlicht am 2026-06-01_

**Fehlerbehebungen**

- Das Lieferdatum wird auf Shopware 6.7 wieder in der Administration (Bestellübersicht, Bestelldetails) und im Produktexport angezeigt. Die Registrierung der Lieferdatum-Verknüpfung schlug fehl und verursachte Fehler beim Öffnen der Bestellansichten oder beim Ausführen eines Produktexports.

---

# 4.0.0

_Veröffentlicht 2025_

**Neue Funktionen**

- Shopware 6.6 und 6.7 in einer einzigen Version: Ab sofort ist nur noch eine Plugin-Version für beide Shopware-Hauptversionen notwendig. Ein Wechsel zwischen verschiedenen Plugin-Varianten ist nicht mehr erforderlich.
- Eine Plugin-Version für alle: Das Plugin erkennt automatisch Ihre installierte Shopware-Version und passt sich entsprechend an.

**Verbesserungen**

- Store-Listing überarbeitet: Die Plugin-Beschreibung und Metadaten im Shopware Store wurden für bessere Auffindbarkeit und klarere Kommunikation überarbeitet.
- Schnellere Datumsberechnung: Die Berechnung des frühestmöglichen Lieferdatums bei Kategorien wurde optimiert und läuft jetzt deutlich schneller.

**Fehlerbehebungen**

- Datepicker-Beschriftung korrigiert: Im Admin-Bereich zeigte das Datumseingabefeld auf Shopware 6.7 fälschlicherweise "Name" statt "Datum" als Beschriftung an.
- Warenkorb-Fehler behoben: Ein Fehler im Offcanvas-Warenkorb auf Shopware 6.7, der unter bestimmten Umständen zu einer Fehlermeldung führte, wurde behoben.

---

**Kompatibilität**

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 4.0.x          | 6.6.0 – 6.7.x    | 8.1+        |

**Upgrade-Hinweise**

Wenn Sie von einer früheren Version upgraden, die nur für Shopware 6.6 oder 6.7 ausgelegt war, müssen keine manuellen Datenmigrations-Schritte durchgeführt werden. Führen Sie das Update einfach über Erweiterungen → Meine Erweiterungen durch — Ihre Einstellungen und Daten bleiben erhalten.
