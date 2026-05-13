**Änderungsprotokoll — Kundenspezifische Rabatte**

Alle wichtigen Änderungen für Endbenutzer.

---

# 1.5.12

_Veröffentlicht am 2026-05-12_

**Fehlerbehebungen**

- **Leere Liste „Gezielte Kundengruppen-Rabatte" in der Administration unter Shopware 6.5 / 6.6**: Die Liste der Kundengruppen-Rabatte auf der Kundengruppen-Detailseite blieb leer, obwohl Einträge in der Datenbank vorhanden waren. Das Override der nativen Kundengruppen-Detail-Komponente verwendete eine `customerGroupCriteria`-Computed-Property, die erst ab Shopware 6.7 existiert. Unter 6.5 und 6.6 wurde die `discounts`-Assoziation daher nie angefordert. Das Plugin umhüllt nun den Aufruf `customerGroupRepository.get`, um die Discounts-Assoziationen unter jeder Shopware-Version mitzuladen, sodass bestehende Einträge wieder angezeigt werden.

---

# 1.5.11

_Veröffentlicht am 2026-05-11_

**Fehlerbehebungen**

- **Fataler Fehler im Storefront unter Shopware 6.5 / 6.6**: Behebung von `ArgumentCountError: Too few arguments to function CacheSubscriber::__construct(), 0 passed and exactly 1 expected`. Der versionsspezifische Compiler-Pass hat die Abhängigkeit `CacheKeyService` nur für Shopware 6.7 injiziert; unter 6.5 und 6.6 wurde der Subscriber ohne Argumente registriert, wodurch das Storefront beim Cache-Aufbau abstürzte. Die Abhängigkeit wird nun für alle unterstützten Shopware-Versionen injiziert.

---

# 1.5.10

_Veröffentlicht am 2026-04-24_

**Fehlerbehebungen**

- **Doppelter Rabatt auf SwkwebProductSet-Optionen in der Set-Konfiguration**: Kundenspezifische Rabatte auf Set-Optionen werden nun genau einmal angewendet. Zuvor wurde der Rabatt sowohl über den Entity-Loaded-Subscriber als auch über den SwkwebProductSet-Expression-Handler angewendet, wodurch sich der Prozentsatz auf den Optionspreis verstärkte (5% wurden zu 9,75%).
- **Falscher Warenkorb-Gesamtbetrag bei SwkwebProductSet-Positionen**: Der Warenkorb wendete den Kundenrabatt auf den gesamten Set-Wert an, einschließlich des bereits durch den Expression-Handler eingerechneten Optionsrabatts. Dadurch war der Gesamtbetrag um `Optionspreis * Rabatt%` zu niedrig. Die Rabattposition deckt nun nur noch den Hauptproduktanteil des Sets ab; Optionsrabatte verbleiben in den Optionspreisen.

---

# 1.5.9

_Veröffentlicht am 2026-04-24_

**Fehlerbehebungen**

- **Rabatt in Produktlisten**: Der Kundenrabatt wird nun zuverlässig auf jedem Produkt-Ladepfad angewendet — einschließlich CMS-Elementen (Produktbox, Produkt-Slider), Cross-Selling, Widgets und Quickview. Zuvor wurde zwar das Rabatt-Badge in Listen angezeigt, der Preis blieb jedoch unverändert. Der Subscriber hängt sich jetzt an `sales_channel.product.loaded` (Priorität `-100`) und modifiziert `CalculatedPrice`, Staffelpreise und `CalculatedCheapestPrice` direkt in-place.
- **Plugin-Update von 1.5.6 / 1.5.7**: Behebung von `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry 'webla_customer_discount_global_discount' for key 'uniq.custom_field.name'` beim Plugin-Update. Bestehende IDs von Custom-Field-Set, Feldern und Relationen werden beim Upsert nun beibehalten, sodass das Update nicht als Insert ausgeführt wird.
- **Store-Dokumentationslink**: Externer Dokumentationslink in den Shopware-Store-Beschreibungen verwendet jetzt HTTPS.

---

# 1.5.8

_Veröffentlicht am 2026-04-13_

**Fehlerbehebungen**

- **Custom Fields beim Update**: Die in 1.5.7 hinzugefügten Custom Fields für Produkte, Kunden und Kundengruppen-Rabatte werden nun auch bei Plugin-Updates installiert, sodass bestehende Shops diese ohne Neuinstallation erhalten.
- **Migrations-Befehl Context**: Der Migrations-Befehl verwendet nun `Context::createCLIContext()` für die korrekte CLI-Ausführung.
- **Dokumentation**: Der Abschnitt mit Support-Kontaktdaten wurde aus den im Store-Listing referenzierten Dokumenten entfernt, um den Shopware-Store-Richtlinien zu entsprechen.

---

# 1.5.7

_Veröffentlicht am 2026-03-20_

**Fehlerbehebungen**

- **Store-Qualitätsrichtlinien**: Benutzerdefinierte Datenbanktabellen (`webla_customer_discount_extension`, `webla_customer_group_discount`) werden nun bei vollständiger Deinstallation korrekt gelöscht, wenn „Benutzerdaten beibehalten" nicht aktiviert ist. `rel="noopener"` zu externen Links in den Store-Beschreibungen hinzugefügt. Plugin-Icon auf die vorgeschriebene Größe von 112×112 px angepasst.
- **Installationsanleitung**: Nicht erlaubte `<code>`-HTML-Tags in den Store-Installationsanleitungen durch `<strong>` ersetzt, um die Shopware-Store-Tag-Beschränkungen einzuhalten.

---

# 1.5.6

_Veröffentlicht am 2026-03-20_

**Fehlerbehebungen**

- **Produkt-Set Rabattanzeige**: Kundenspezifische Rabatte wurden nicht auf einzelne Produktoptionen im Set Konfigurator (SwkwebProductSet) angewendet. Die Optionsboxen zeigen nun den korrekten rabattierten Preis an und der „Gesamtpreis für derzeitige Konfiguration" berücksichtigt den Rabatt. Funktioniert beim Seitenaufruf, bei AJAX-Variantenwechsel und bei CMS-Darstellung. Die Integration ist vollständig optional — keine Abhängigkeit zum Set Konfigurator Plugin.

---

# 1.5.5

_Veröffentlicht am 2026-03-04_

**Fehlerbehebungen**

- **OscWare-Integration**: Dem Payload jeder Rabatt-Position wurde eine synthetische `productNumber` (im Format `DISC-{Produktnummer}`) hinzugefügt. Dies verhindert, dass Middleware wie OscWare alle Rabatt-Positionen zu einem einzigen Sammeleintrag (Sammelposition) in Lexoffice/Lexware zusammenführt.

---

# 1.5.4

_Veröffentlicht am 2026-03-03_

**Fehlerbehebungen**

- **Service-Konfiguration**: Fehlerhafte Service-ID für das Sales-Channel-Produkt-Repository korrigiert (`sales_channel_product.repository` → `sales_channel.product.repository`), die beim Container-Build zu einem Fehler bei der Abhängigkeitsinjektion führte.

---

# 1.5.3

_Veröffentlicht am 2026-03-03_

**Fehlerbehebungen**

- **Warenkorb-Hash-Fehler**: Fehler „Warenkorb hat sich geändert" in Shopware 6.7+ behoben, der beim aktivierten „Separater Rabatt"-Modus auftrat. Rabatt-Positionen wurden bei jeder Warenkorbberechnung mit zufälligen UUIDs erstellt, wodurch sich der Warenkorb-Hash zwischen Checkout und Bestellaufgabe änderte. Rabatt-Positionen erhalten nun eine stabile, deterministische ID basierend auf dem zugehörigen Produkt.

---

# 1.5.2

_Veröffentlicht am 2026-02-17_

**Fehlerbehebungen**

- **Warenkorb-Produktladen**: Fehler behoben, bei dem Produktentitäten nach Seitenneuladen oder aus dem Cache nicht zuverlässig in den Warenkorbdaten verfügbar waren, wodurch die Zuordnung von Kategorie-/Produktstrom-Rabatten fehlschlug. Lädt nun Produkte direkt aus dem Repository als Fallback, um eine konsistente Rabattanwendung zu gewährleisten.

**Verbesserungen**

- **Performance**: Produktladen optimiert, um nur notwendige IDs abzurufen, ohne vollständige Kategorie- und Stream-Assoziationen zu laden, wodurch die Datenbankbelastung reduziert wird.

---

# 1.5.1

_Veröffentlicht am 2026-02-17_

**Fehlerbehebungen**

- **Warenkorb-Rabatt-Zuordnung**: Fehler behoben, bei dem Kundengruppen-Kategorie-/Produktstrom-Rabatte im Warenkorb nicht korrekt erkannt wurden, wodurch der globale Gruppenrabatt anstelle des spezifischeren gezielten Rabatts angewendet wurde. Der Warenkorb lädt nun korrekt Produktentitäten, um Kategorie- und Produktstrom-IDs abzugleichen, was ein konsistentes Rabattverhalten zwischen Produktseiten und Warenkorb gewährleistet.

---

# 1.5.0

_Veröffentlicht am 2026-02-17_

**Neue Funktionen**

- **Kundengruppen-Kategorie-Priorität-Einstellung**: Neue Konfigurationsoption, um Kundengruppen-Kategorie-/Produktstrom-Rabatten absolute Priorität zu geben. Wenn aktiviert, haben gezielte Kategorie- oder Produktstrom-Rabatte, die Kundengruppen zugewiesen sind, Vorrang vor allen anderen Rabattarten und umgehen den Rabatt-Prioritätsmodus. Dies stellt sicher, dass speziell zugewiesene Gruppenrabatte immer gelten, unabhängig von den globalen Einstellungen.

---

# 1.4.1

_Veröffentlicht am 2026-02-13_

**Verbesserungen**

- **Set Konfigurator Kompatibilität**: Unterstützung für Produkt-Sets des Set Konfigurator Plugins hinzugefügt. Produkt-Sets erhalten nun kundenspezifische Rabatte und zeigen Ersparnisse korrekt im Warenkorb und Checkout an.

---

# 1.4.0

_Veröffentlicht am 2026-01-28_

**Neue Funktionen**

- **Gast-Rabatte**: Wende Standard-Kundengruppen-Rabatte auf nicht eingeloggte Benutzer an. Aktiviere dies über die neue Einstellung "Standard-Gruppenrabatte für Gäste anwenden". Perfekt, um Aktionspreise allen Besuchern zu zeigen, ohne dass eine Anmeldung erforderlich ist.

**Verbesserungen**

- **Shopware 6.7+ Kompatibilität**: Verbesserte Caching-Implementierung mit dem neuen HttpCacheCookieEvent für bessere Kompatibilität mit Shopware 6.7 und zukünftigen Versionen.

---

# 1.2.0

_Veröffentlicht am 2026-01-26_

**Neue Funktionen**

- **Kundengruppen-Rabatte auf Kategorien/Produktgruppen**: Sie können nun Rabatte für ganze Kundengruppen auf bestimmte Kategorien oder Dynamische Produktgruppen vergeben. Dies ergänzt den globalen Gruppenrabatt um gezielte Rabatte.

**Verbesserungen**

- **Produktdetailseite**: Rabatte werden nun korrekt auf der Produktdetailseite angezeigt, auch wenn CMS-Elemente wie die Kauf-Box verwendet werden.

---

# 1.1.0

_Veröffentlicht am 2026-01-25_

**Neue Funktionen**

- **Produktspezifische Rabatte**: Setzen Sie Rabatte direkt auf einzelne Produkte über Custom Fields.
- **Globale Kundenrabatte**: Geben Sie einzelnen Kunden einen pauschalen Rabatt auf alle Produkte.
- **Erweiterte Prioritätsmodi**: Neuer Modus "Spezifischster zuerst" für präzise Rabattkontrolle.
- **Gesamtersparnis anzeigen**: Optional eine "Sie sparen X" Nachricht im Checkout.
- **Originalpreis durchgestrichen**: Zeigen Sie den Originalpreis visuell durchgestrichen an.

**Verbesserungen**

- **Verbesserte Performance**: Optimiertes Caching für schnellere Rabattberechnung.
- **Bessere Admin-Oberfläche**: Übersichtlichere Darstellung der Kundenrabatte.

---

# 1.0.1

_Veröffentlicht am 2026-01-20_

**Fehlerbehebungen**

- **PHPStan-Kompatibilität**: Behoben Typfehler für strikte PHP-Analyse.
- **ESLint-Validierung**: Korrigierte JavaScript-Formatierung im Admin.

---

# 1.0.0

_Veröffentlicht am 2026-01-15_

**Neue Funktionen**

- **Individuelle Kundenrabatte**: Vergeben Sie Rabatte pro Kunde auf Kategorien oder Dynamische Produktgruppen.
- **Globale Kundengruppenrabatte**: Setzen Sie pauschale Rabatte für ganze Kundengruppen.
- **Flexible Prioritätssteuerung**: Wählen Sie zwischen "Höherer gewinnt", "Niedriger gewinnt" oder "Individuell zuerst".
- **Rabatt als Lineitem**: Option, den Rabatt als separate Position anzuzeigen.
- **Anpassbare Bezeichnungen**: Konfigurierbare Rabatt-Labels mit Variablen.
- **Kompatibilität mit WebLa_ProductGroupDiscount**: Automatische Unterstützung für bestehende Rabattdaten.

---

**Versionsübersicht**

| Version | Veröffentlichung | Highlights |
| ------- | ---------------- | ---------- |
| 1.4.1   | 2026-02-13       | Set Konfigurator Kompatibilität |
| 1.4.0   | 2026-01-28       | Gast-Rabatte, Shopware 6.7+ Caching-Verbesserungen |
| 1.2.0   | 2026-01-26       | Kundengruppen-Rabatte auf Kategorien/Produktgruppen |
| 1.1.0   | 2026-01-25       | Produktrabatte, globale Kundenrabatte, erweiterte Prioritätsmodi |
| 1.0.1   | 2026-01-20       | Bugfixes für PHP- und JS-Validierung |
| 1.0.0   | 2026-01-15       | Erstveröffentlichung |

---

**Upgrade-Hinweise**

**Upgrade auf 1.4.0**

Nach dem Update:
1. Leeren Sie den Cache unter Einstellungen → System → Caches & Indizes
2. Die neue Einstellung "Standard-Gruppenrabatte für Gäste anwenden" ist in der Plugin-Konfiguration verfügbar
3. Für die Shopware 6.7+ Kompatibilitätsverbesserungen ist keine Aktion erforderlich - sie werden automatisch angewendet

**Upgrade auf 1.2.0**

Nach dem Update:
1. Leeren Sie den Cache unter Einstellungen → System → Caches & Indizes
2. Die neuen Kundengruppen-Rabatte finden Sie in den Kundengruppen-Einstellungen unter "Gruppenrabatte"

**Upgrade auf 1.1.0**

Nach dem Update:
1. Leeren Sie den Cache
2. Neue Einstellungen finden Sie in der Plugin-Konfiguration
3. Produktrabatte können über Produkt → Weitere Felder gesetzt werden

**Kompatibilität**

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 1.4.1          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.4.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.2.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.1.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
