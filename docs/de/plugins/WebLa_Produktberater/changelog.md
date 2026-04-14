# Änderungsprotokoll

Alle wichtigen Änderungen am Produkt Berater Plugin für Endbenutzer.

---

## [7.2.0] - 2026-04-14

### Breaking Changes

- :boom: **Shopware 6.5 Unterstützung entfernt**: Die minimal erforderliche Shopware-Version ist jetzt 6.6.0. Shops, die noch auf 6.5 laufen, müssen auf 7.1.x bleiben. Composer-Constraint aktualisiert auf `>=6.6.0 <6.8.0`.

### Verbesserungen

- :recycle: **Standard-Storefront-Plugin-Laden**: Das Produktberater-JavaScript wird jetzt über Shopwares Standard-`PluginManager.register()`-API registriert, statt über einen manuell injizierten `<script>`-Tag. Das eigene `base.html.twig`-Override und die `StorefrontAssetExtension`-Twig-Funktion wurden entfernt. Storefront-Assets werden direkt nach `src/Resources/public/storefront/js/` von `shopware-cli extension build` geschrieben — kein manueller Kopier-Schritt mehr nötig.
- :recycle: **Vereinfachter Kompatibilitäts-Layer**: Alle Shopware-6.5-Zweige aus `ShopwareVersionFactory` und `FeatureFlags` entfernt (keine `isVersion65()` / `supportsAsyncStorefrontPlugins()` mehr). Der Admin-Version-Detector bietet keinen 6.5-Pfad mehr.
- :recycle: **Vereinfachter Release-Workflow**: GitHub Actions muss den ESBuild-Output nicht mehr manuell nach `public/` kopieren, bevor gezippt wird.

---

## [7.1.1] - 2026-04-13

### Fehlerbehebungen

- :bug: **Speichern im Admin bei bestehenden Beratern defekt**: Behoben, dass das Speichern auf der Berater-Detailseite nach dem Update auf 7.1.0 nicht mehr funktionierte — der Speichern-Button reagierte nicht und das Design-Dropdown ließ sich nicht ändern. Das neue Feld `showAllVariants` war fälschlicherweise als Pflichtfeld markiert und blockierte dadurch DAL-Writes auf Beratern, die vor dem Update angelegt wurden.
- :bug: **Design-Dropdown nicht auswählbar (Shopware 6.7)**: Das Design-Dropdown nutzt jetzt `sw-single-select` statt `sw-select-field`, damit Wertänderungen unter Vue 3 korrekt übernommen werden.
- :bug: **Storefront-JS-Bundle liefert 404**: Der URL-Pfad zum eigenständigen JavaScript-Bundle des Produktberaters (`/bundles/webla_produktberater/storefront/js/web-la--produktberater.js`) war durch ein doppeltes Pfadsegment defekt, wodurch das Skript nicht geladen wurde. Pfad korrigiert.
- :bug: **CMS-Slot verschwindet bei Schema-Mismatch**: Der CMS-Element-Resolver degradiert jetzt still, wenn das Berater-Entity nicht geladen werden kann (z. B. nach einem unvollständigen Update, bei dem die Datenbank-Migration noch nicht ausgeführt wurde), anstatt den gesamten Slot abzubrechen.

---

## [7.1.0] - 2026-03-04

### Neue Funktionen

- :sparkles: **Alle Varianten anzeigen**: Neue Berater-Option „Alle Varianten anzeigen" zeigt jede einzelne passende Variante im Ergebnis an, anstatt nur ein repräsentatives Produkt pro Elternprodukt. Nützlich, wenn ein Produktstream gezielt Varianten/Kindprodukte anspricht.

### Fehlerbehebungen

- :bug: **Produktstream liefert 0 Ergebnisse bei Varianten-Targeting**: Problem behoben, bei dem ein Berater mit einem Produktstream, der nach Variantenprodukten filtert (z.B. Produktnummer beginnt mit einem bestimmten Präfix), keine Ergebnisse lieferte. Ein fest kodierter `childCount < 1`-Filter schloss fälschlicherweise alle Produkte aus, die der Stream gezielt ansprechen sollte.

---

## [7.0.8] - 2026-02-19

### Fehlerbehebungen

- :bug: **Produktstream liefert keine Produkte (Shopware 6.7)**: Problem behoben, bei dem Berater mit konfiguriertem Produktstream auf Shopware 6.7 keine Produkte zurücklieferten. Ursache war ein Registry-Initialisierungsfehler durch direkte `ProductDefinition`-Injektion. Die Lösung ersetzt das manuelle Filter-Parsing durch Shopwares offizielle `ProductStreamBuilderInterface::buildFilters()`-API, die mit Shopware 6.5, 6.6 und 6.7 kompatibel ist.

---

## [7.0.7] - 2026-02-09

### Fehlerbehebungen

- :bug: **Sprunglogik-Bearbeitung**: Das Feld „Springe zu Frage (Position)" in der Antwortliste war nicht editierbar. Das Feld unterstützt jetzt die Inline-Bearbeitung wie vorgesehen.

---

## [7.0.6] - 2026-01-30

### Neue Funktionen

- **Plug-and-Play Installation**: Das Plugin funktioniert jetzt sofort auf Shopware 6.5, 6.6 und 6.7 ohne `bin/build-storefront.sh`. Ein eigenständiges JavaScript-Bundle wird automatisch per Script-Injection geladen.

### Fehlerbehebungen

- **Admin Auswahlfelder (6.7)**: Anzeigeproblem behoben, bei dem Format- und Typ-Dropdowns "Auswählen..." statt des gewählten Wertes in der Shopware 6.7 Administration anzeigten
- **Multi-Version-Kompatibilität**: Verbesserte Komponenten-Bindings für korrekte Funktion auf allen unterstützten Shopware-Versionen

---

## [7.0.5] - 2026-01-26

### Fehlerbehebungen

- **Shopware 6.6 Kompatibilität**: Das Plugin funktioniert jetzt sofort nach der Installation ohne manuelles `bin/build-storefront`. Kompilierte Storefront-Assets sind jetzt im Plugin-Paket enthalten.

---

## [7.0.4] - 2026-01-15

### Verbesserungen

- **Changelog-Generierung**: Verbesserte automatische Changelog-Erstellung bei Releases

---

## [7.0.3] - 2026-01-13

### Fehlerbehebungen

- **Store-Bilder**: Bilder für den Shopware Store wurden ins korrekte PNG-Format konvertiert

---

## [7.0.2] - 2026-01-13

### Fehlerbehebungen

- **Code-Optimierung**: Nicht verwendete Abhängigkeiten entfernt und Fragen-Abruf optimiert

### Leistungsverbesserungen

- **Session-Verwaltung**: Die Session-Bereinigung wurde optimiert, um weniger Server-Anfragen zu verursachen

---

## [7.0.1] - 2026-01-13

### Fehlerbehebungen

- **Sprunglogik**: Ein Fehler wurde behoben, bei dem der Berater vorzeitig endete, wenn ein Sprungziel NULL war. Ungültige Sprungziele werden jetzt korrekt ignoriert.

---

## [7.0.0] - 2026-01-13

### Neue Funktionen

- **Multi-Version-Architektur**: Das Plugin unterstützt jetzt Shopware 6.5 bis 6.7 aus einem einzigen Code-Zweig. Dies vereinfacht Updates und gewährleistet konsistente Funktionalität über alle unterstützten Versionen.

### Wichtige Änderungen

- **Shopware-Kompatibilität**: Unterstützt jetzt Shopware 6.5.0 bis 6.8.0

### Breaking Changes

- **CMS-Block-Neukonfiguration erforderlich**: Aufgrund interner Komponentennamen-Korrekturen werden bestehende Produktberater-Blöcke in Erlebniswelten nicht mehr angezeigt. Sie müssen den Produktberater-Block in jeder betroffenen Erlebniswelt **entfernen und erneut hinzufügen**. Ihre Berater-Konfigurationen (Fragen, Antworten, Einstellungen) bleiben erhalten.

---

## [6.0.3] - 2025-08-15

### Verbesserungen

- **JavaScript-Optimierung**: Aktualisiertes JavaScript-Bundle mit verbessertem Plugin-Loading
- **Datenbankleistung**: Verbesserte SQL-Abfrageleistung im AdvisorResultService durch UNION ALL-Optimierung
- **Fehlerbehandlung**: Verbesserte Fehlerbehandlung und Protokollierung in JavaScript-Plugins
- **Code-Qualität**: Allgemeine Verbesserungen und Bereinigungen

---

## [3.0.2] - 2023-08-31

### Neue Funktionen

- **B2B-Kompatibilität**: Kompatibilität mit Shopware B2B Suite hinzugefügt

---

## [3.0.1] - 2023-06-13

### Fehlerbehebungen

- **Eigenschafts-Erfassung**: Algorithmus zur Erfassung von Produkteigenschaften korrigiert

---

## [3.0.0] - 2023-06-07

### Neue Funktionen

- **Shopware 6.5**: Unterstützung für Shopware 6.5 hinzugefügt

---

## [2.3.17] - 2023-06-01

### Verbesserungen

- **Varianten-Suche**: Der Suchalgorithmus durchsucht jetzt auch Variantenoptionen (nicht nur Eigenschaften)
- **Hauptprodukte**: Hauptprodukte mit Varianten werden nicht mehr in der Suche angezeigt (nur die Varianten)
- **Filterung**: Nicht passende Ergebnisse können jetzt pro Frage gefiltert werden

---

## [2.3.16] - 2023-03-01

### Fehlerbehebungen

- **Leistung**: Performance-Probleme behoben

---

## [2.3.15] - 2022-12-15

### Fehlerbehebungen

- **Update-Problem**: Ein Update-Problem wurde behoben
- **Interner Name**: Die Anforderung für einen internen Namen wurde entfernt

---

## [2.3.14] - 2022-10-19

### Neue Funktionen

- **Nicht passende ausschließen**: Option hinzugefügt, um nicht passende Produkte vollständig auszuschließen

---

## [2.3.0] - 2022-10-06

### Neue Funktionen

- **Übersetzungen**: Alle sichtbaren Texte können jetzt übersetzt werden

---

## [2.1.16] - 2022-02-16

### Erstveröffentlichung

- Erste öffentliche Version des Produkt Berater Plugins

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights |
|---------|-----------------|------------|
| 7.0.7 | 2026-02-09 | Sprunglogik-Bearbeitungs-Fix |
| 7.0.6 | 2026-01-30 | Plug-and-Play für 6.5/6.6/6.7 |
| 7.0.5 | 2026-01-26 | Shopware 6.6 Sofort-Einsatz-Fix |
| 7.0.4 | 2026-01-15 | Changelog-Verbesserungen |
| 7.0.3 | 2026-01-13 | Store-Bild-Korrektur |
| 7.0.2 | 2026-01-13 | Performance-Optimierung |
| 7.0.1 | 2026-01-13 | Sprunglogik-Bugfix |
| 7.0.0 | 2026-01-13 | Multi-Version-Support (6.5-6.7) |
| 6.0.3 | 2025-08-15 | JS-Optimierung, SQL-Performance |
| 3.0.2 | 2023-08-31 | B2B Suite Kompatibilität |
| 3.0.0 | 2023-06-07 | Shopware 6.5 Support |
| 2.3.17 | 2023-06-01 | Varianten-Suche |
| 2.3.14 | 2022-10-19 | Ausschluss-Option |
| 2.3.0 | 2022-10-06 | Vollständige Übersetzungen |
| 2.1.16 | 2022-02-16 | Erstveröffentlichung |

---

## Upgrade-Hinweise

### Upgrade auf 7.0.0

Das Plugin wurde auf eine Multi-Version-Architektur umgestellt. Beim Upgrade von älteren Versionen:

1. Erstellen Sie ein Backup Ihrer Datenbank
2. Deaktivieren Sie das alte Plugin
3. Installieren Sie die neue Version
4. Aktivieren Sie das Plugin
5. Leeren Sie den Cache
6. **Produktberater-Blöcke erneut hinzufügen** in Ihren Erlebniswelten (siehe Breaking Changes oben)

Bestehende Produktberater, Fragen und Antworten bleiben erhalten. Nur die CMS-Block-Platzierung muss aktualisiert werden.

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
|----------------|------------------|-------------|
| 7.0.x | 6.5.0 - 6.8.0 | 8.1+ |
| 6.0.x | 6.6.x | 8.1+ |
| 3.0.x | 6.5.x | 8.1+ |
| 2.3.x | 6.4.x | 7.4+ |

---

## Support

Bei Fragen oder Problemen erreichen Sie uns unter **plugin@web-labels.de** oder über den Shopware Ticket-Support.
