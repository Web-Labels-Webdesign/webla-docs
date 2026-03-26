# Änderungsprotokoll

Alle wichtigen Änderungen an der **Kategorie Schnellauswahl** für Endbenutzer.

---

## [5.0.2] – 2026-03-25

### 🐛 Fehlerbehebungen

- **Shopware 6.6.8 Kompatibilität**: Twig-Injection auf älteren Shopware 6.6.x-Versionen (z. B. 6.6.8) behoben, bei denen das `controller.service_arguments`-Tag allein Twig nicht automatisch injizierte. Ein expliziter `setTwig`-Aufruf wird nun über die versionsspezifische Kompatibilitätsschicht angewendet.

---

## [5.0.1] – 2026-03-25

### 🐛 Fehlerbehebungen

- **Shopware 6.6 Twig-Injection**: Ein Absturz wurde behoben, bei dem der Controller eine `StorefrontException` auslöste, weil Twig nicht injiziert war. Der Controller verwendet nun korrekte Constructor-Injection mit dem `controller.service_arguments`-Tag, kompatibel mit Shopware 6.6 und 6.7.

---

## [5.0.0] – 2026-03-04

### ✨ Neue Funktionen

- **Shopware 6.7 Unterstützung**: Das Plugin ist jetzt vollständig kompatibel mit Shopware 6.7.x.

### 🔧 Verbesserungen

- **Verbesserte Kompatibilität**: Interner Mechanismus zur automatischen Erkennung der Shopware-Version sorgt für reibungslosen Betrieb auf 6.6.x und 6.7.x.
- **Modernisierter JavaScript-Code**: Das Storefront-Widget wurde auf einen eigenständigen, schlanken Ansatz umgestellt – bessere Performance und keine Konflikte mit anderen Plugins.
- **Code-Qualität**: Alle Qualitätsprüfungen (PHPStan, ESLint) wurden bestanden; der Code entspricht den neuesten Shopware-Standards.

---

## Versionsübersicht

| Version | Highlights                                       |
| ------- | ------------------------------------------------ |
| 5.0.2   | Twig-Injection auf älteren 6.6.x-Versionen behoben |
| 5.0.1   | Twig-Injection-Absturz auf Shopware 6.6 behoben |
| 5.0.0   | Shopware 6.7 Unterstützung, Code-Modernisierung  |

---

## Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 5.0.2          | 6.6.x – 6.7.x    | 8.2+        |
| 5.0.1          | 6.6.x – 6.7.x    | 8.2+        |
| 5.0.0          | 6.6.x – 6.7.x    | 8.2+        |
