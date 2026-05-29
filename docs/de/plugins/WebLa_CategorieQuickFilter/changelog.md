**Änderungsprotokoll — Kategorie Schnellauswahl**

Alle wichtigen Änderungen für Endbenutzer.

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
