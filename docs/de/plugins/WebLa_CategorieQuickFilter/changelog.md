**Änderungsprotokoll — Kategorie Schnellauswahl**

Alle wichtigen Änderungen für Endbenutzer.

---

# 5.1.4

_Veröffentlicht am 2026-09-04_

**Fehlerbehebungen**

- Behoben: Nach dem Update auf 5.1.3 funktionierte die Kategorie-Schnellauswahl nicht mehr. Im Paket der Version 5.1.3 fehlte das kompilierte Storefront-JavaScript, dadurch reagierten die Auswahlfelder auf keine Auswahl mehr. Version 5.1.4 enthält wieder das vollständige Paket - bitte aktualisieren Sie, wenn Sie 5.1.3 einsetzen.

---

# 5.1.3

_Veröffentlicht am 2026-09-02_

**Fehlerbehebungen**

- Behoben: Die Auswahlfelder der Kategorie-Schnellauswahl (Marke, Modell, Ausführung) hatten keinen zugänglichen Namen für Screenreader und andere assistive Technologien. Die Felder erhalten nun ein `aria-label` mit der jeweiligen Beschriftung.

---

# 5.1.2

_Veröffentlicht am 2026-07-29_

**Fehlerbehebungen**

- Behoben: Die Kategorie-Schnellauswahl funktionierte unter Shopware 6.6 nicht mehr. In den Versionen 5.1.0 und 5.1.1 wurden die Auswahlfelder in Shops mit Shopware 6.6 nicht mehr geladen, die Auswahl einer Kategorie blieb wirkungslos. Shops mit Shopware 6.7 waren nicht betroffen. Wenn Sie Shopware 6.6 mit Version 5.1.0 oder 5.1.1 einsetzen, aktualisieren Sie bitte.

---

# 5.1.1

_Veröffentlicht am 2026-07-23_

**Fehlerbehebungen**

- Kompatibilitätsoption für „OncoCompatibilityFilter" korrigiert: Die Auswahl einer Kategorie über die Schnellauswahl setzt den aktiven Produkteigenschafts-Filter dieses Plugins nun zuverlässig zurück. In der Vorversion konnte ein veralteter Filter aktiv bleiben, weil die zwischengespeicherte Listing-Ansicht auf der neuen Seite nicht aktualisiert wurde.

---

# 5.1.0

_Veröffentlicht am 2026-07-23_

**Neue Funktionen**

- Kompatibilitätsoption für das Plugin „OncoCompatibilityFilter" hinzugefügt. Wenn in den Plugin-Einstellungen aktiviert, wird beim Abschluss einer Auswahl in der Kategorie-Schnellauswahl die Objektauswahl dieses Plugins (Session und Cookie) zurückgesetzt, sodass Kunden ohne verbleibenden Produkteigenschafts-Filter auf der neuen Kategorie-Listing-Seite landen. Standardmäßig deaktiviert.

---

# 5.0.6

_Veröffentlicht am 2026-07-03_

**Fehlerbehebungen**

- Kategorie-Dropdowns, die nach der ersten Auswahl geladen werden (zum Beispiel die Modell-Ebene), waren nicht alphabetisch sortiert – die Reihenfolge wirkte zufällig. Alle Dropdown-Ebenen verwenden jetzt dieselbe natürliche alphabetische Sortierung wie die erste Ebene.

---

# 5.0.5

_Veröffentlicht am 2026-05-29_

**Fehlerbehebungen**

- Storefront-Plugin meldete unter Shopware 6.7 weiterhin `TypeError: t is not a constructor`. Das Plugin rief das registrierungsweite `PluginManager.initializePlugins()` auf, was mit dem asynchronen Laden der Core-Plugins in Shopware 6.7 kollidiert; bei einem fehlgeschlagenen Lazy-Import behält die Registry die `() => import()`-Ladefunktionen, die der Initialisierer dann mit `new` aufruft, wodurch jedes Async-Plugin bricht. Das Plugin initialisiert nun nur noch sein eigenes Plugin über `PluginManager.initializePlugin('CategorySelectorPlugin', …)`.

---

# 5.0.4

_Veröffentlicht am 2026-05-28_

**Fehlerbehebungen**

- Storefront-Plugin konnte nicht initialisiert werden und meldete `TypeError: t is not a constructor`, wenn das Plugin-Bundle vor dem Shopware-Storefront-Bundle ausgewertet wurde und `window.PluginBaseClass` noch nicht gesetzt war. Die Plugin-Klasse wird jetzt erst erzeugt, wenn sowohl `window.PluginManager` als auch `window.PluginBaseClass` verfügbar sind.

---

# 5.0.3

_Veröffentlicht am 2026-04-02_

**Fehlerbehebungen**

- Top-Kategorien nicht hervorgehoben: CSS-basierte Hervorhebung auf nativen `<option>`-Elementen (nicht unterstützt in Chrome, Edge, Safari) durch browserübergreifende `<optgroup>`-Gruppierung ersetzt. Top-Kategorien erscheinen nun in einer klar beschrifteten „Top"-Gruppe am Anfang des Dropdowns.

---

# 5.0.2

_Veröffentlicht am 2026-03-25_

**Fehlerbehebungen**

- Shopware 6.6.8 Kompatibilität: Twig-Injection auf älteren Shopware 6.6.x-Versionen (z. B. 6.6.8) behoben, bei denen das `controller.service_arguments`-Tag allein Twig nicht automatisch injizierte. Ein expliziter `setTwig`-Aufruf wird nun über die versionsspezifische Kompatibilitätsschicht angewendet.

---

# 5.0.1

_Veröffentlicht am 2026-03-25_

**Fehlerbehebungen**

- Shopware 6.6 Twig-Injection: Ein Absturz wurde behoben, bei dem der Controller eine `StorefrontException` auslöste, weil Twig nicht injiziert war. Der Controller verwendet nun korrekte Constructor-Injection mit dem `controller.service_arguments`-Tag, kompatibel mit Shopware 6.6 und 6.7.

---

# 5.0.0

_Veröffentlicht am 2026-03-04_

**Neue Funktionen**

- Shopware 6.7 Unterstützung: Das Plugin ist jetzt vollständig kompatibel mit Shopware 6.7.x.

**Verbesserungen**

- Verbesserte Kompatibilität: Interner Mechanismus zur automatischen Erkennung der Shopware-Version sorgt für reibungslosen Betrieb auf 6.6.x und 6.7.x.
- Modernisierter JavaScript-Code: Das Storefront-Widget wurde auf einen eigenständigen, schlanken Ansatz umgestellt – bessere Performance und keine Konflikte mit anderen Plugins.
- Code-Qualität: Alle Qualitätsprüfungen (PHPStan, ESLint) wurden bestanden; der Code entspricht den neuesten Shopware-Standards.
