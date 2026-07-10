**Änderungsprotokoll — Shopping Feed mit einzigartigen Rabatten**

Alle wichtigen Änderungen für Endbenutzer.

---

# 5.2.1

_Veröffentlicht am 2026-07-10_

**Fehlerbehebungen**

- Mit aktivierter Option „Rabatt nur bei Einzelkäufen anwenden" wird der rabattierte Preis auf der Produktseite jetzt nur noch für Menge 1 angezeigt. Staffelpreise (Mengenrabatte) behalten ihre normalen Preise – passend zu dem, was der Warenkorb bei größeren Mengen berechnet. Bisher zeigten alle Mengenstufen den Einzelstück-Rabatt.

---

# 5.2.0

_Veröffentlicht am 2026-07-10_

**Fehlerbehebungen**

- Der Sonderpreis aus einem Preissuchmaschinen-Link bleibt jetzt zuverlässig bis zum Abschluss der Bestellung im Warenkorb erhalten – auch bei Gastbestellung, Registrierung und Anmeldung in einem bestehenden Konto. Bisher konnte der Rabatt an der Kasse aus dem Warenkorb verschwinden, obwohl er auf der Produktseite angezeigt wurde.
- Geschäftskunden (Netto/B2B) wird jetzt der korrekte rabattierte Preis berechnet. Bisher wurde, wenn ein Kunde ein rabattiertes Produkt mit Bruttopreisen in den Warenkorb legte und anschließend zum Nettokunden wurde, die Steuer auf den Bruttobetrag aufgeschlagen – der Kunde zahlte zu viel.
- Der rabattierte Preis zeigt jetzt die korrekte Steueraufschlüsselung und behält die Grundpreisanzeige bei.
- Produktpreise werden nicht mehr während des Seitenaufbaus in die Datenbank geschrieben. Ein Feed-Besucher kann so den für normale Kunden angezeigten Streich- bzw. Referenzpreis nicht mehr beeinflussen.

**Verbesserungen**

- Das Caching wurde überarbeitet: Für einen Feed-Besucher werden nur noch die Seiten ungecacht ausgeliefert, die tatsächlich einen Sonderpreis anzeigen; der restliche Shop – sowie jeder normale Besucher und Suchmaschinen-Crawler – nutzt weiterhin den vollen Seiten-Cache. Das frühere Verhalten, bei dem ein einziger Feed-Link große Teile des Shops ungecacht auslieferte, entfällt.
- Der Rabatt folgt jetzt einer stabilen Besucher-Kennung, die Anmeldung, Registrierung sowie Session- oder Token-Wechsel übersteht – der Kunde zahlt, was er gesehen hat.

---

# 5.1.4

_Veröffentlicht am 2026-07-02_

**Fehlerbehebungen**

- Rabattierte Produktseiten werden wieder gecacht und von Besuchern mit demselben Sonderpreis gemeinsam genutzt. Bisher schrieb das Plugin bei jedem Aufruf einer rabattierten Seite einen Streichpreis (regulationPrice) auf das Produkt, wodurch der Cache dieses Produkts bei jedem Aufruf verworfen wurde – die rabattierte Seite wurde daher nie aus dem Cache ausgeliefert, sondern jedes Mal neu gerendert. Der Preis wird jetzt nur noch geschrieben, wenn er sich tatsächlich ändert.

**Verbesserungen**

- Besucher, die über eine Preissuchmaschine gekommen sind, erhalten nicht mehr für jede unbeteiligte Produktseite eine eigene, ungecachte Kopie. Nur die Detailseite des rabattierten Produkts wird pro Rabatt gecacht; alle anderen Produktseiten werden aus dem normalen gemeinsamen Cache ausgeliefert. Auf allen Nicht-Angebotsseiten – einschließlich Cross-Selling – bleiben so die normalen Preise und die normale Cache-Performance erhalten.

---

# 5.1.3

_Veröffentlicht am 2026-07-01_

**Fehlerbehebungen**

- Der Aufruf eines Preissuchmaschinen-Feed-Links (`?source=...`) führt nicht mehr dazu, dass der gesamte Shop ungecacht ausgeliefert wird. Bisher setzte ein einziger Feed-Besuch ein shop-weites Cookie, das 24 Stunden lang auf jeder Seite den Cache umging, sodass Suchmaschinen-Crawler oder Besucher den kompletten Shop ungecacht durchsuchen konnten. Betroffen sind jetzt nur noch die Seiten, die den rabattierten Preis tatsächlich anzeigen.

**Verbesserungen**

- Rabattierte Seiten werden jetzt pro Rabatt statt pro Besucher gecacht: Besucher mit demselben Sonderpreis teilen sich eine gecachte Seite, was die Cache-Last deutlich reduziert und die Auslieferung beschleunigt.
- Das Bearbeiten eines Produkt-Streams oder Rabatts leert jetzt sofort die betroffenen rabattierten Seiten aus dem Cache, sodass eine geänderte oder entfernte Aktion nicht mehr bis zum Ablauf des Caches bestehen bleibt.

---

# 5.1.2

_Veröffentlicht am 2026-04-30_

**Fehlerbehebungen**

- Caching: Seiten mit dem Preisvergleichs-Parameter `?source=...` werden nicht mehr in HTTP-Caches (Shopware-Reverse-Proxy, Symfony HttpCache, externes Varnish/CDN) oder im Routen-Cache von Shopware gespeichert. Bisher wurden diese Seiten je `source`-Token gecached und beim Ändern des Sonderpreises im Backend nicht invalidiert. Besucher sahen daher stundenlang den alten Preis, bis der Cache ablief. Der Warenkorb war stets korrekt, da er live neu berechnet wird — nur die gerenderte Detailseite war veraltet.

---

# 5.1.1

_Veröffentlicht am 2026-04-28_

**Fehlerbehebungen**

- SEO: Bei aktivem `?source=`-Parameter wird zusätzlich die Seitenerweiterung `dreiscSeoInstallmentRobotsTagData` von DreiscSeoPro entfernt. Die `meta.html.twig` von DreiscSeoPro liest diese eigene Erweiterung vor `metaInformation.robots`. Ohne diesen Fix zeigte das gerenderte `<meta name="robots">`-Tag in Shops mit DreiscSeoPro weiterhin `index,follow`, obwohl `metaInformation.robots` korrekt auf `noindex, nofollow` gesetzt war. Der `X-Robots-Tag`-HTTP-Header war davon nicht betroffen.

---

# 5.1.0

_Veröffentlicht am 2026-04-28_

**Neue Funktionen**

- SEO: Seiten, die über den Preisvergleichs-Parameter `?source=...` aufgerufen werden, liefern jetzt `X-Robots-Tag: noindex, nofollow` und ein passendes `<meta name="robots">`-Tag. Google indexiert so keine Deeplink-Varianten der Produktdetailseiten mehr.

**Fehlerbehebungen**

- `webla-session`-Cookie gehärtet: explizite Attribute `secure`, `httpOnly` und `SameSite=Lax` (zuvor war `secure` vom Request-Schema abhängig).

**Verbesserungen**

- Store-Metadaten verfeinert: explizites `compatibility_date` und längere `meta_description` für eine bessere Darstellung im Such-Snippet.

**Breaking Changes**

- Unterstützung für Shopware 6.5 entfernt. Das Plugin benötigt jetzt Shopware 6.6 oder 6.7. Händler auf 6.5 müssen auf Plugin v5.0.x bleiben.

---

# 5.0.5

_Veröffentlicht am 2026-04-15_

**Fehlerbehebungen**

- **Konstruktor-Argument-Fehler (Hotfix für v5.0.4)**: Behoben: Ein fataler Fehler „Too few arguments to function ExportDiscountPriceCalculator::__construct(), 9 passed... 10 expected" legte das Plugin nach der Installation von v5.0.4 komplett lahm. Der Fix in v5.0.4 fügte ein `ProductDefinition`-Konstruktor-Argument über die `services.xml` hinzu, jedoch überschreibt der `CompatibilityCompilerPass` die Service-Argumente beim Container-Build und dessen hart kodierte Argumentliste setzte die `services.xml` stillschweigend außer Kraft — weiterhin wurden nur 9 Argumente übergeben. Der Compiler-Pass übergibt nun in beiden Zweigen (SW 6.5 und SW 6.6+) alle 10 Argumente.

---

# 5.0.4

_Veröffentlicht am 2026-04-15_

**Fehlerbehebungen**

- **Nicht initialisierte EntityDefinition-Registry**: Behoben: Ein fataler Fehler „Typed property `EntityDefinition::$registry` must not be accessed before initialization" trat auf, wenn ein Produkt über einen Rabatt-Link geöffnet wurde — meist im Inkognito-Modus. Der Preisrechner instanziierte `ProductDefinition` manuell per `new`, wodurch eine nicht registrierte Definition entstand, deren `$registry` nie injiziert wurde. `QueryStringParser::fromArray` stürzte daraufhin ab, sobald beim Parsen der Filter auf Felder oder Assoziationen zugegriffen wurde. Die `ProductDefinition` wird jetzt aus dem DI-Container injiziert, sodass die Registry korrekt verdrahtet ist.

---

# 5.0.3

_Veröffentlicht am 2026-02-20_

**Fehlerbehebungen**

- **Rabatt bei mehreren Produkten hintereinander**: Behoben: Bei aktivierter Option `allowMultiple=true` wurde nur das erste über einen Feed-Deeplink aufgerufene Produkt mit dem Rabattpreis angezeigt. Weitere Produkte zeigten fälschlicherweise den vollen Preis. Der Preisrechner ermittelt nun die passende Rabatt-Session pro Produkt innerhalb der Schleife, statt eine einzelne vorgeladene Session für alle Produkte zu verwenden.

---

# 5.0.2

_Veröffentlicht am 2026-02-19_

**Fehlerbehebungen**

- **Preisdaten-Kontamination in der Datenbank**: Behoben: `listPrice` wurde fälschlicherweise in der Datenbank für Produkte gespeichert, bei denen der Händler keinen Streichpreis gesetzt hatte. Die Ursache lag in PHP-Shallow-Clone-Semantik, die direkte Mutationen an den Price-Objekten der Entität ermöglichte, bevor Shopwares `EntityWrittenEvent` die Entität persistierte. Alle drei Preisberechnungsmethoden erstellen nun neue `Price`-Objekte, anstatt die vorhandenen zu mutieren.

---

# 5.0.1

_Veröffentlicht am 2026-02-03_

**Fehlerbehebungen**

- **Kundenfeedback**: Behebung von Problemen basierend auf Kundenfeedback.

---

# 5.0.0

_Veröffentlicht am 2026-02-03_

**Neue Funktionen**

- **Multi-Version-Unterstützung**: Volle Kompatibilität mit Shopware 6.5, 6.6 und 6.7.
- **Verbesserte Architektur**: Optimierte Kompatibilitätsschicht für verschiedene Shopware-Versionen.

---

# 2.0.1

_Veröffentlicht am 2023-10-20_

**Verbesserungen**

- **Neue Caching-Strategie**: Verbesserte Performance durch optimiertes Caching.

---

# 2.0.0

_Veröffentlicht am 2023-06-13_

**Neue Funktionen**

- **Shopware 6.5 Unterstützung**: Vollständige Kompatibilität mit Shopware 6.5.

---

# 1.0.11

_Veröffentlicht am 2023-05-30_

**Neue Funktionen**

- **30-Tage-Preisanzeige**: Automatische Erstellung des günstigsten Preises der letzten 30 Tage, wenn ein Besucher über den Export kommt.

---

# 1.0.10

_Veröffentlicht am 2023-05-16_

**Neue Funktionen**

- **Neue Produktpreis-Einstellung**: Zusatzfeld für individuelle Exportpreise pro Produkt.

---

# 1.0.9

_Veröffentlicht am 2023-03-22_

**Verbesserungen**

- **Shopware-Anforderungen**: Anpassungen für Shopware-Kompatibilität.

---

# 1.0.8

_Veröffentlicht am 2023-03-09_

**Verbesserungen**

- **Shopware-Anforderungen**: Weitere Anpassungen für Shopware-Kompatibilität.

---

# 1.0.7

_Veröffentlicht am 2023-03-09_

**Verbesserungen**

- **Shopware-Anforderungen**: Anpassungen für Shopware-Kompatibilität.

---

# 1.0.6

_Veröffentlicht am 2023-02-15_

**Verbesserungen**

- **Rundung**: Verbesserte Preisrundung.

---

# 1.0.5

_Veröffentlicht am 2022-11-21_

**Fehlerbehebungen**

- **Fehlerbehandlung**: Vermeidung von Fehlern in bestimmten Szenarien.

---

# 1.0.4

_Veröffentlicht am 2022-11-10_

**Verbesserungen**

- **Staffelpreise**: Verbesserte Handhabung von erweiterten Preisen.

---

# 1.0.3

_Veröffentlicht am 2022-11-03_

**Verbesserungen**

- **Handhabung**: Verbesserte Handhabung und Dokumentation.

---

# 1.0.1

_Veröffentlicht am 2022-10-05_

**Neue Funktionen**

- **Automatische Bereinigung**: Scheduled Task für automatische Session-Bereinigung hinzugefügt.

---

# 1.0.0

_Veröffentlicht am 2022-10-05_

**Neue Funktionen**

- **Erstveröffentlichung**: Initiale Version des Plugins.
- Globaler Rabatt für Produktexporte.
- Session-basierte Rabattanzeige im Storefront.
- Unterstützung für Google Shopping, idealo, billiger.de.
