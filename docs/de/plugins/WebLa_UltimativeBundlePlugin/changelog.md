**Änderungsprotokoll — Ultimatives Bundle Plugin**

Alle wichtigen Änderungen am Ultimativen Bundle Plugin für Endbenutzer.

---

# 5.1.5

_Veröffentlicht am 2026-07-27_

**Fehlerbehebungen**

- Die Bundle-Darstellung wechselt nicht mehr von selbst. Das Layout wurde serverseitig anhand des Endgeräts gewählt und anschließend im Seiten-Cache abgelegt. Dadurch bestimmte das Gerät, das eine Produktseite als Erstes aufrief, die Darstellung für alle weiteren Besucher, bis dieser Cache-Eintrag erneuert wurde. Da Bestands- und Erscheinungsdatumsänderungen ihn erneuern, wirkte es, als richte sich die Darstellung nach der Verfügbarkeit des Produkts. Das Layout richtet sich jetzt allein nach der Fensterbreite des Browsers: die kompakte Ansicht unter 992 Pixeln, die vollflächige darüber.
- Eine vergessene Debug-Ausgabe entfernt, die auf jeder Produktdetailseite interne Seitendaten ausgab.
- Die Options-Dialoge verwenden nun die aktuellen Bootstrap-5-Attribute, wodurch die Einstellung "kein Hintergrund-Overlay" wieder greift.
- Ab Shopware 6.7.10 werden Bundle-Bestandteile im Warenkorb nicht mehr doppelt aufgeführt. Shopware stellt sie in diesen Versionen selbst dar, das Plugin ergänzt keine zweite Auflistung mehr.

---

# 5.1.4

_Veröffentlicht am 2026-07-06_

**Fehlerbehebungen**

- Bundles mit einem vorbestellbaren Bestandteil zeigen nun das Erscheinungsdatum ("Dieses Produkt erscheint am …") in der Warenkorbzeile an und verwenden es für das Lieferdatum – statt der normalen Lieferzeit des Bundles.

---

# 5.1.3

_Veröffentlicht am 2026-07-06_

**Fehlerbehebungen**

- Bundles zeigen nun das korrekte Lieferdatum. Hat ein im Bundle enthaltenes Produkt ein späteres Erscheinungsdatum, ist es nachbestellt oder hat es eine längere Lieferzeit, übernimmt das gesamte Bundle dieses späteste Datum statt der kürzeren Lieferzeit des Hauptartikels.

---

# 5.1.1

_Veröffentlicht am 2026-03-27_

**Fehlerbehebungen**

- Admin-Felder (Mengenauswahl, optionale Gruppen) waren auf Shopware 6.7 nicht sichtbar aufgrund veralteter vorgebauter Assets

---

# 5.1.0

_Veröffentlicht am 2026-03-26_

**Neue Funktionen**

- **Mengenauswahl pro Gruppe**: Kunden können nun die Stückzahl pro Bundle-Gruppe individuell festlegen. Admins können die Mengenauswahl aktivieren und eine maximale Menge pro Gruppe festlegen.
- **Optionale Gruppen**: Bundle-Gruppen können als optional markiert werden, sodass Kunden per Checkbox selbst entscheiden, ob sie diese hinzufügen möchten, mit Live-Preisberechnung im Storefront.

**Fehlerbehebungen**

- Ausgeschlossene Gruppen bleiben nun nach AJAX-Preisaktualisierungen korrekt erhalten

---

# 5.0.0

_Veröffentlicht am 2026-03-26_

**Breaking Changes**

- **Neue Architektur**: Das Plugin unterstützt nun Shopware 6.6 und 6.7 aus einer einzigen Version. Es ist nicht mehr nötig, unterschiedliche Plugin-Versionen für verschiedene Shopware-Versionen zu verwenden. Das Plugin erkennt automatisch Ihre Shopware-Version und lädt die passenden Adapter.

**Neue Funktionen**

- **Multi-Version-Support**: Unterstützung für Shopware 6.6 und 6.7 aus einer einzigen Codebasis
- **Bundles aktivieren/deaktivieren**: Neue globale Einstellung zum schnellen Ein- und Ausschalten aller Bundles
- **Unvollständige Bundles**: Neue Option, Bundles auch ohne vollständige Gruppenauswahl in den Warenkorb zu legen

**Verbesserungen**

- **Produktverfügbarkeit**: Verbesserte Filterung nicht verfügbarer Produkte in der Bundle-Anzeige
- **Warenkorb-Stabilität**: Stabilere Rabattberechnung und verbesserte Behandlung von Warenkorb-Hashes
- **Fehlerbehandlung**: Robustere Verarbeitung von Bundle-Auswahlen und -Rabatten

**Migration von 4.x**

- Keine Konfigurationsänderungen erforderlich
- Alle Funktionen der Version 4.x bleiben erhalten
- Das Plugin erkennt automatisch Ihre Shopware-Version

---

# 2.0.11

_Veröffentlicht am 2023-11-06_

**Verbesserungen**

- Kleinere Fehlerbehebungen und Stabilitätsverbesserungen

---

# 2.0.10

_Veröffentlicht am 2023-10-05_

**Verbesserungen**

- Kleinere Fehlerbehebungen und Stabilitätsverbesserungen

---

# 2.0.9

_Veröffentlicht am 2023-09-25_

**Verbesserungen**

- Kleinere Fehlerbehebungen

---

# 2.0.8

_Veröffentlicht am 2023-09-25_

**Neue Funktionen**

- **Rabattsteuerung**: Neuer Schalter zur Steuerung des Rabattverhaltens pro Bundle

---

# 2.0.7

_Veröffentlicht am 2023-09-25_

**Verbesserungen**

- Fehlerbehebungen und Verbesserungen für die finale Version

---

# 2.0.6

_Veröffentlicht am 2023-08-31_

**Verbesserungen**

- Fehlerbehebungen und Verbesserungen für die finale Version

---

# 2.0.2

_Veröffentlicht am 2023-08-03_

**Verbesserungen**

- Kleinere Fehlerbehebungen und Verbesserungen

---

# 2.0.1

_Veröffentlicht am 2023-08-03_

**Verbesserungen**

- Kleinere Fehlerbehebungen und Verbesserungen

---

# 2.0.0

_Veröffentlicht am 2023-08-03_

**Neue Funktionen**

- **Shopware 6.5 Unterstützung**: Vollständige Kompatibilität mit Shopware 6.5

---

# 1.0.8

_Veröffentlicht am 2023-08-03_

**Erstveröffentlichung**

- Initiale Veröffentlichung des Ultimativen Bundle Plugins

---

**Kompatibilität**

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 5.1.x          | 6.6.0 - 6.7.x    | 8.2+        |
| 5.0.0          | 6.6.0 - 6.7.x    | 8.2+        |
| 2.0.x          | 6.5.x            | 8.1+        |
| 1.0.8          | 6.4.x            | 8.0+        |
