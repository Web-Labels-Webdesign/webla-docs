**Änderungsprotokoll — Ultimatives Bundle Plugin**

Alle wichtigen Änderungen am Ultimativen Bundle Plugin für Endbenutzer.

---

# 5.1.11

_Veröffentlicht am 2026-08-26_

**Fehlerbehebungen**

- Auf Smartphones überlappt der Preis einer Komponente nicht mehr deren Produktnamen. Lange Produktnamen erhalten wieder ausreichend Platz, statt in eine schmale Spalte gequetscht zu werden.
- Der Grundpreis einer Komponente, etwa der Preis pro Kilogramm, steht jetzt in einer eigenen Zeile über die volle Breite unter der Komponente, statt neben dem Preis über mehrere Zeilen umzubrechen.
- In Komponentengruppen mit mehreren Optionen überlappt die Schaltfläche zur Optionsauswahl die Komponente nicht mehr, wenn die Gruppe als optional markiert ist.

---

# 5.1.10

_Veröffentlicht am 2026-08-20_

**Fehlerbehebungen**

- Auf Smartphones werden Komponentenbilder nicht mehr auf einen Bruchteil ihrer vorgesehenen Größe verkleinert. Das Bild behält jetzt eine feste Breite, unabhängig von der Länge des daneben stehenden Produktnamens, und es wird eine schärfere Bilddatei geladen.
- In der Administration löst das Bearbeiten eines Bundles bei einem geänderten Feld nicht mehr zweimal dieselbe Speicheraktion aus.

---

# 5.1.9

_Veröffentlicht am 2026-08-17_

**Fehlerbehebungen**

- Zusätzliche Hinweise unterhalb des Komponentenpreises, etwa der Steuerhinweis, erscheinen nicht mehr in der großen, fetten Preisdarstellung.
- Die mobile Bundle-Vorschau passt ihre Höhe jetzt an den Inhalt an, statt ihn bei einer festen Höhe abzuschneiden.
- Die Mengenauswahl einer Komponente ist am linken Rand ihres Bereichs ausgerichtet statt zentriert.

---

# 5.1.8

_Veröffentlicht am 2026-08-03_

**Fehlerbehebungen**

- Das Abwählen einer optionalen Komponente und das Ändern einer Menge bauen den Bundle-Bereich nicht mehr vollständig neu auf. Es werden nur noch die Preise aktualisiert, sodass ein geöffneter Bereich auf Smartphones unverändert bestehen bleibt, statt sichtbar neu zu laden. Bei der Auswahl einer anderen Produktalternative wird die Darstellung weiterhin neu aufgebaut, da sich dort die Komponenten selbst ändern.
- Werden mehrere Komponenten schnell nacheinander geändert, bleibt kein veralteter Preis mehr stehen. Eine langsamere frühere Berechnung wird jetzt verworfen, sobald eine neuere gestartet wurde.

---

# 5.1.7

_Veröffentlicht am 2026-08-03_

**Fehlerbehebungen**

- Auf Smartphones schließt sich der geöffnete Bundle-Bereich nicht mehr, wenn eine optionale Komponente abgewählt oder eine Menge geändert wird. Der Bereich wurde nach jeder Preisneuberechnung neu aufgebaut und fiel dabei in den zugeklappten Zustand zurück; er bleibt jetzt geöffnet.
- Ein Bundle gewährt seinen Rabatt nicht mehr, sobald sämtliche optionalen Komponenten abgewählt wurden. Übrig bleibt dann nur der Hauptartikel, der zum regulären Preis in den Warenkorb gelegt wird; auf der Produktseite werden weder Ersparnis noch Streichpreis angezeigt.

---

# 5.1.6

_Veröffentlicht am 2026-07-28_

**Fehlerbehebungen**

- Bundle-Gruppen auf Basis einer dynamischen Produktgruppe berücksichtigen jetzt auch Produktvarianten. Eine solche Gruppe erfasste bislang nur Produkte mit eigenem Hersteller, eigenem Preis oder eigener Kategorie – Werte, die eine Variante vom Hauptprodukt erbt, statt sie selbst zu speichern. Varianten wurden deshalb beim Aufbau des Bundle-Index übersprungen, und eine Gruppe, die ausschließlich aus Varianten bestand, blieb leer und verbarg damit das gesamte Bundle auf der Produktseite. Gruppen auf Basis einer Kategorie waren genauso betroffen, manuell ausgewählte Produkte nie. Führen Sie nach dem Update den Bundle-Index aus oder warten Sie die geplante Aufgabe ab, damit die fehlenden Varianten erfasst werden.

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
