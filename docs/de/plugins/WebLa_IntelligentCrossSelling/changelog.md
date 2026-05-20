**Änderungsprotokoll — Intelligentes Cross-Selling**

Alle wichtigen Änderungen an Intelligentes Cross-Selling für Endbenutzer.

---

# 5.2.9

_Veröffentlicht am 2026-05-19_

**Fehlerbehebungen**

- **Ausgeblendete Produkte erscheinen nicht mehr im Cross-Selling**: Produkte, die für einen Verkaufskanal auf „In Listen und Suche ausblenden" gesetzt sind, werden nun von den automatischen Cross-Selling-Empfehlungen ausgeschlossen — entsprechend den Sichtbarkeitsregeln des Shopware-Storefronts. Produkte mit „In Listen ausblenden" bleiben weiterhin enthalten

---

# 5.2.8

_Veröffentlicht am 2026-04-14_

**Fehlerbehebungen**

- **Drastisch schnellere Produktdetailseiten bei großen Katalogen**: Cross-Selling-Abfragen laufen nun über Elasticsearch (falls aktiviert) und die MySQL-JSON-Indizes statt auf `LIKE '%uuid%'`-Volltabellen-Scans zurückzufallen. `ContainsFilter` auf `propertyIds` und `categoryIds` wurde durch den ES-kompatiblen `EqualsFilter` ersetzt — mehrsekündige Cold-Loads bei Katalogen mit Millionen von Produkten entfallen
- **Doppeltes Laden des nativen Cross-Sellings entfernt**: Die native Shopware-Cross-Selling-Route wird nicht mehr bei jeder Anfrage zusätzlich aufgerufen, um ihre Ergebnisse mit unseren zu vermischen. Sie wird nur noch als Fallback verwendet, wenn unser Loader keine Treffer liefert — oder wenn sie explizit über die neue `mergeNativeCrossSelling`-Konfigurationsoption aktiviert wird

**Verbesserungen**

- **Schlankerer Produkt-Preload**: Das vorab geladene Produkt und `ConfigurationResolverService::loadProduct` laden nicht mehr die Assoziationen `properties.group`, `options.group` oder `categories`. Das Scoring nutzt ausschließlich denormalisierte Skalarfelder (`propertyIds`, `optionIds`, `categoryIds`, `streamIds`) — deutlich schneller bei Produkten mit vielen Kategorien oder Varianten
- **Kleinerer Kandidatenpool**: Das Limit für die Kandidatenabfrage wurde von `max(length*10, 200)` auf `max(length*5, 50)` reduziert — etwa 4x geringere MySQL-Fallback-Kosten in Shops ohne Elasticsearch

---

# 5.2.7

_Veröffentlicht am 2026-03-27_

**Fehlerbehebungen**

- **Extrem langsamer globaler Cross-Selling-Modus behoben**: Aufwändige ProductStreamBuilder-Abfragen durch speicherinterne `streamIds`-Prüfung ersetzt — eliminiert N Datenbankabfragen pro Produktseite bei Stream-basierten Konfigurationen
- **Kategorie-basierte Kandidatenabfrage hinzugefügt**: Produkte aus derselben Kategorie werden zuerst abgefragt (schnell), der gesamte Katalog wird nur bei unzureichenden Ergebnissen durchsucht — deutlich reduzierte Abfragelast bei großen Shops
- **Leeres Cross-Selling bei reinen Varianten-Eigenschaften behoben**: Eigenschaften, die ausschließlich als Varianten-Optionen verwendet werden (z.B. Größe), werden nun neben regulären Produkteigenschaften beim Gewichts-Matching berücksichtigt
- **Leere Ergebnisse bei fehlenden gewichteten Eigenschaften behoben**: Statt nichts anzuzeigen, zeigt das Plugin nun Produkte aus derselben Kategorie oder dem Katalog an

**Verbesserungen**

- **Aktive Konfigurationen pro Request gecacht**: Die Plugin-Konfigurationsabfrage wird nun einmal pro Request statt einmal pro Produkt ausgeführt — weniger redundante Datenbankabfragen

---

# 5.2.6

_Veröffentlicht am 2026-03-16_

**Fehlerbehebungen**

- **Langsame Ladezeiten auf Artikeldetailseiten behoben**: N+1-Abfragemuster in der Cross-Selling-Empfehlungslogik eliminiert. Bisher löste jede gewichtete Eigenschaftsoption eine separate Datenbankabfrage mit aufwändigen JOIN-basierten Filtern aus — bei 15 gewichteten Optionen waren das über 18 Abfragen pro Anfrage. Nun wird eine einzelne gebündelte Abfrage mit leichtgewichtigen JSON-Spaltenfiltern und PHP-seitiger Bewertung verwendet, wodurch die Plugin-Abfragen von N+3 auf 2-3 reduziert werden

---

# 5.2.5

_Veröffentlicht am 2026-03-13_

**Fehlerbehebungen**

- **Absturz bei Varianten-Deduplizierung behoben**: `ParentAssociationCanNotBeFetched`-Ausnahme behoben, die bei aktivierter Option „Eine Variante pro Hauptartikel" auftrat. Die Parent-Assoziation kann in Shopwares DAL nicht direkt geladen werden — Hauptartikel werden nun über eine separate Abfrage geladen

---

# 5.2.4

_Veröffentlicht am 2026-03-11_

**Fehlerbehebungen**

- **Leeres Cross-Selling bei Produkten ohne Eigenschaften behoben**: Produkte ohne zugewiesene Eigenschaften erhalten nun Cross-Selling-Empfehlungen basierend auf Kategorie-, Lagerbestands- und Sichtbarkeitsfiltern, anstatt ein leeres Ergebnis zurückzugeben
- **Fallback auf natives Cross-Selling bei Fehler hinzugefügt**: Tritt in der Empfehlungslogik des Plugins ein unerwarteter Fehler auf, wird nun auf Shopwares natives Cross-Selling zurückgefallen, anstatt den gesamten Cross-Selling-Bereich zu beschädigen

---

# 5.2.3

_Veröffentlicht am 2026-03-11_

**Fehlerbehebungen**

- **Migrations-Absturz beim Upgrade von älteren Versionen behoben**: Fünf ALTER-TABLE-Migrationen referenzierten den alten Tabellennamen `webla_intelligent_cross_selling_settings`, ohne zu prüfen, ob dieser bereits in `webla_cross_selling` umbenannt wurde. Dies führte dazu, dass Upgrades von Versionen vor 5.0 fehlschlugen. Alle Migrationen ermitteln nun dynamisch den korrekten Tabellennamen und prüfen vor der Änderung, ob Spalten bereits existieren.

---

# 5.2.2

_Veröffentlicht am 2026-03-10_

**Fehlerbehebungen**

- **Migration-Absturz bei Neuinstallation nach "Daten behalten"-Deinstallation behoben**: Zwei frühe Migrationen (`Migration1649663958Initialisation` und `Migration1650453780UpdateSettings`) verwendeten `CREATE TABLE` ohne `IF NOT EXISTS`. Bei der Deinstallation mit "Benutzerdaten behalten" entfernt Shopware die Migrations-Einträge, lässt aber die Tabellen bestehen — was bei der Neuinstallation zu einem Absturz führte und auch Storefront-Produktseiten beschädigte

---

# 5.2.1

_Veröffentlicht am 2026-03-05_

**Fehlerbehebungen**

- **Neuinstallation fehlgeschlagen behoben**: Migration `AddOneVariantPerParentSwitch` referenzierte den alten Tabellennamen `webla_intelligent_cross_selling_settings` statt des umbenannten `webla_cross_selling`, was bei einer frischen Plugin-Installation zu einem Fehler führte

---

# 5.2.0

_Veröffentlicht am 2026-03-03_

**Neue Funktionen**

- **Eine Variante pro Hauptartikel anzeigen**: Neue Option, um in Cross-Selling-Ergebnissen nur eine Variante pro Hauptartikel anzuzeigen und so doppelte Hauptartikel in den Empfehlungen zu vermeiden

---

# 5.1.2

_Veröffentlicht am 2026-03-02_

**Fehlerbehebungen**

- **Absturz bei fehlenden Übersetzungen behoben**: TypeError behoben, bei dem `getTitle()` abstürzte, wenn Übersetzungszeilen fehlten — verursachte "Leider ist etwas schiefgelaufen"-Fehler auf Artikeldetailseiten im Storefront
- **Unvollständige Deinstallation behoben**: Fehlende `DROP TABLE`-Anweisungen für `webla_cross_selling_category` und `webla_cross_selling_product_stream` Tabellen hinzugefügt, die FK-Constraint-Fehler bei der Deinstallation verursachten — hinterließen verwaiste Daten, die eine Neuinstallation beschädigten
- **Null-sichere Entity-Getter**: `isActive()`, `isShowTitle()` und `getMaxProducts()` geben nun sichere Standardwerte zurück, anstatt bei null-Werten abzustürzen

---

# 5.1.1

_Veröffentlicht am 2026-02-19_

**Verbesserungen**

- **Schnellere Cache-Treffer**: Alle Datenbankabfragen bei gecachten Cross-Selling-Anfragen eliminiert — die Konfigurations-ID-Abfrage, die bei jeder Anfrage (auch bei Cache-Treffern) ausgeführt wurde, wurde entfernt
- **Weniger DB-Abfragen bei Cache-Misses**: Eigenschaftsgewichtungen werden nun aus bereits geladenen Konfigurationsdaten gelesen, anstatt eine separate Abfrage pro Konfiguration auszulösen
- **Produkt-Vorausladen**: Das Quellprodukt wird einmal geladen und bei mehreren Cross-Selling-Gruppen für alle Konfigurationen wiederverwendet
- **Schlankere Suchabfragen**: Unnötiges Laden von Assoziationen bei reinen ID-Suchabfragen entfernt

---

# 5.1.0

_Veröffentlicht am 2026-02-05_

**Neue Funktionen**

- **Mehrere Konfigurationen**: Erstellen Sie mehrere Cross-Selling-Konfigurationen, jede mit eigenen Eigenschaftsgewichtungen und Einstellungen
- **Kategoriezuweisung**: Weisen Sie Konfigurationen bestimmten Kategorien zu - Produkte in diesen Kategorien verwenden diese Konfiguration
- **Dynamische Produktgruppen-Zuweisung**: Weisen Sie Konfigurationen dynamischen Produktgruppen (Product Streams) für flexible Ausrichtung zu
- **Prioritätsbasierte Auflösung**: Setzen Sie Prioritäten, um zu steuern, welche Konfiguration gewinnt, wenn ein Produkt mehreren entspricht
- **Alle passenden anzeigen**: Neue Plugin-Einstellung, um alle passenden Konfigurationen statt nur der höchsten Priorität anzuzeigen

**Fehlerbehebungen**

- **Shopware 6.7 Kompatibilität**: Entity-Multi-Select-Komponenten funktionieren nun korrekt in Shopware 6.7 (Vue 3)
- **Versionsübergreifende Unterstützung**: Entity-Selektoren funktionieren jetzt korrekt auf Shopware 6.5, 6.6 und 6.7

**Verbesserungen**

- **Überarbeitete Admin-Oberfläche**: Neues Listen-/Detail-Muster zur Verwaltung mehrerer Konfigurationen
- **Bessere Organisation**: Gruppieren Sie Cross-Selling-Regeln nach Produktkategorien oder dynamischen Gruppen

---

# 5.0.1

_Veröffentlicht am 2026-01-29_

**Fehlerbehebungen**

- **Empfehlungsgenauigkeit verbessert**: Kritischen Fehler behoben, bei dem Produktfilter über Eigenschafts-Iterationen akkumulierten und zunehmend falsche Ergebnisse lieferten
- **Absturz bei fehlenden Produkten behoben**: Null-Prüfungen hinzugefügt, um Fehler zu verhindern, wenn ein Produkt nicht existiert oder keine Eigenschaften hat
- **Variantenausschluss korrigiert**: Hauptartikel zeigen nun nicht mehr fälschlicherweise ihre eigenen Varianten im Cross-Selling
- **Leere Kategorien behandelt**: Edge-Case behoben, bei dem leere Kategoriebäume Filterfehler verursachen konnten

**Verbesserungen**

- **Performance optimiert**: Gewichtungs-Lookups verwenden nun O(1) Hash-Map statt O(n) linearer Suche
- **Bessere Cache-Invalidierung**: Cache wird nun korrekt geleert, wenn Eigenschaftsgewichtungen oder Einstellungen geändert werden
- **Verbesserte Gewichtungsvalidierung**: Ungültige Gewichtungen (null, Null, negativ) werden nun übersprungen

---

# 5.0.0

_Veröffentlicht am 2026-01-29_

**Neue Funktionen**

- **Einheitliche Multi-Version-Unterstützung**: Das Plugin unterstützt nun Shopware 6.5, 6.6 und 6.7 aus einer einzigen Codebasis
- **Automatische Versionserkennung**: Das Plugin erkennt automatisch Ihre Shopware-Version und lädt die passenden Komponenten

**Verbesserungen**

- **Moderne Admin-Oberfläche**: Die Benutzeroberfläche wurde für Vue 3 optimiert
- **Verbesserte Stabilität**: Alle Migrationen sind nun mit verschiedenen Datenbankversionen kompatibel

**Wichtige Änderungen**

- Das Plugin benötigt mindestens Shopware 6.5.0
- Maximale unterstützte Version ist Shopware 6.7.x

**Migration von 4.x**

- Keine Konfigurationsänderungen erforderlich
- Alle Funktionen aus Version 4.x bleiben erhalten
- Das Plugin erkennt automatisch Ihre Shopware-Version

---

# 4.1.0

_Veröffentlicht am 2026-01-16_

**Neue Funktionen**

- **Mehrsprachige Titel**: Der Titel der Cross-Selling-Sektion kann nun pro Sprache unterschiedlich definiert werden
- Nutzen Sie den Sprachumschalter im Admin-Bereich, um Titel in verschiedenen Sprachen zu pflegen

---

# 4.0.1

_Veröffentlicht am 2025-10-17_

**Fehlerbehebungen**

- **Migrationsprobleme behoben**: Das Plugin prüft nun vor der Migration, ob Spalten bereits existieren
- Verhindert Fehler bei wiederholter Installation

---

# 4.0.0

_Veröffentlicht am 2025-07-21_

**Verbesserungen**

- **Shopware 6.7 Kompatibilität**: Vollständige Unterstützung für Shopware 6.7
