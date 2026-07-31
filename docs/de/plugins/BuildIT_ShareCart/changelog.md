**Änderungsprotokoll**

Alle wichtigen Änderungen an BuildIT Share Cart für Endbenutzer.

---

# 5.0.2

_Veröffentlicht am 2026-07-31_

**Fehlerbehebungen**

- **Teilen per E-Mail**: Wenn Titel und Nachricht leer blieben, wurde der Warenkorb-Link zusammen mit einem übrig gebliebenen `&body=` in die Betreffzeile geschrieben. Betreff und Nachricht werden jetzt korrekt übergeben, der Link landet immer im Nachrichtenfeld.
- **Teilen per WhatsApp und Facebook**: Sonderzeichen wie `&` oder `#` in Titel oder Nachricht schneiden den geteilten Text nicht mehr ab und zerstören ihn nicht mehr.
- **Teilen per Facebook**: Der Teilen-Dialog wird jetzt über `https` statt `http` geöffnet.

---

# 5.0.1

_Veröffentlicht am 2026-03-30_

**Fehlerbehebungen**

- **Datenbankkompatibilität**: Kollations-Konflikt (`utf8_unicode_ci` vs `utf8mb4_unicode_ci`) behoben, der auf Servern mit `utf8mb4_general_ci` als Standard-Kollation zu Abfragefehlern führte

---

# 5.0.0

_Veröffentlicht am 2026-03-25_

**Neue Funktionen**

- **Multi-Version-Unterstützung**: Das Plugin unterstützt jetzt Shopware 6.6 und 6.7 mit einer einzigen Installation. Sie benötigen keine separate Plugin-Version mehr für verschiedene Shopware-Versionen.

**Verbesserungen**

- **Modernisierter Build-Prozess**: Der Plugin-Build wurde auf das offizielle `shopware-cli` Tooling umgestellt
- **Optimierte Store-Texte**: Beschreibungen, Highlights und Features im Shopware Store wurden überarbeitet
- **Code-Qualität**: Diverse PHPStan-Warnungen und Tippfehler in den Einstellungen wurden behoben

**Wichtige Änderungen**

- **Shopware 6.5 wird nicht mehr unterstützt**: Bitte aktualisieren Sie auf mindestens Shopware 6.6, bevor Sie auf Version 5.0.0 upgraden
- **Keine Konfigurationsänderungen nötig**: Alle bisherigen Einstellungen bleiben erhalten

---

# 4.0.0

_Veröffentlicht am 2025-07-31_

**Neue Funktionen**

- **Shopware 6.7 Unterstützung**: Vollständige Kompatibilität mit Shopware 6.7

---

# 3.0.0

_Veröffentlicht am 2024-12-27_

**Neue Funktionen**

- **Shopware 6.6 Unterstützung**: Vollständige Kompatibilität mit Shopware 6.6

---

# 1.0.6

_Veröffentlicht am 2023-06-13_

**Neue Funktionen**

- **Shopware 6.5 Unterstützung**: Kompatibilität mit Shopware 6.5 hinzugefügt

**Fehlerbehebungen**

- **Datenbank**: Namenskollision bei Datenbanktabellen behoben

---

# 1.0.5

_Veröffentlicht am 2023-03-09_

**Fehlerbehebungen**

- **Kompatibilität**: Probleme mit Shopware-Versionen vor 6.4.9 behoben

---

# 1.0.4

_Veröffentlicht am 2022-06-26_

**Neue Funktionen**

- **Automatische Bereinigung**: Geplante Aufgabe für automatisches Löschen alter Warenkörbe
- **Bereinigungskonfiguration**: Einstellbare Zeiträume für das Löschen von Warenkörben
- **Alle hinzufügen**: Button auf der Landingpage, um alle Produkte auf einmal in den Warenkorb zu legen

---

# 1.0.3

_Veröffentlicht am 2022-06-09_

**Verbesserungen**

- **Deinstallation**: Verbesserter Deinstallationsprozess

---

# 1.0.0

_Veröffentlicht am 2022-06-04_

**Neue Funktionen**

- **Erstveröffentlichung**: Warenkorb teilen per Link, E-Mail, WhatsApp und Facebook

---

**Versionsübersicht**

| Version | Veröffentlichung | Highlights                                        |
| ------- | ---------------- | ------------------------------------------------- |
| 5.0.2   | 2026-07-31       | Korrekturen an Teilen-Links und Kodierung         |
| 5.0.1   | 2026-03-30       | Datenbank-Kollationsfix                           |
| 5.0.0   | 2026-03-25       | Multi-Version-Support für SW 6.6 + 6.7            |
| 4.0.0   | 2025-07-31       | Shopware 6.7 Unterstützung                        |
| 3.0.0   | 2024-12-27       | Shopware 6.6 Unterstützung                        |
| 1.0.6   | 2023-06-13       | Shopware 6.5 + Datenbankfix                       |
| 1.0.4   | 2022-06-26       | Automatische Bereinigung + Alle-hinzufügen-Button |
| 1.0.0   | 2022-06-04       | Erstveröffentlichung                              |

---

**Upgrade-Hinweise**

**Upgrade auf 5.0.0**

- Stellen Sie sicher, dass Sie mindestens Shopware 6.6 verwenden
- Keine Konfigurationsänderungen erforderlich
- Alle bestehenden geteilten Warenkörbe bleiben erhalten

**Kompatibilität**

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 5.x            | 6.6, 6.7         | 8.2+        |
| 4.x            | 6.7              | 8.2+        |
| 3.x            | 6.6              | 8.2+        |
| 1.x            | 6.4 - 6.5        | 8.1+        |
