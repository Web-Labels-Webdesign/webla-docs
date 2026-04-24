# Hersteller Seiten

> Erstellt automatisch SEO-optimierte Herstellerseiten mit Übersicht, Detailansicht, Produktfiltern, Sortierung und Sitemap-Integration für Ihren Shopware-Shop.

## Übersicht

Das Plugin **Hersteller Seiten** erweitert Ihren Shopware-Shop um vollwertige Herstellerseiten — ohne dass Sie dafür manuell Kategorien, Landingpages oder Weiterleitungen anlegen müssen.

Für jeden Hersteller, der einem Produkt im Shop zugeordnet ist, wird automatisch eine eigene Detailseite mit allen zugehörigen Produkten bereitgestellt. Zusätzlich stellt das Plugin zwei CMS-Elemente (Hersteller-Übersicht als Block und Element) bereit, die Sie per Drag & Drop in Ihre Erlebniswelten einfügen können.

Die Zielgruppe sind Shop-Betreiber, deren Sortiment stark nach Marken oder Herstellern strukturiert ist und die Kunden eine schnelle, nach Hersteller gefilterte Einkaufserfahrung bieten möchten.

## Hauptfunktionen

- **Automatische Herstellerseiten**: Jeder Hersteller erhält eine eigene Detailseite unter `/manufacturer/{id}` (bzw. Ihrer SEO-URL) — ohne manuelle Pflege.
- **Alphabetische Hersteller-Übersicht**: CMS-Element mit A–Z-Gruppierung und Buchstaben-Filter für den Storefront.
- **Top-Hersteller (Featured)**: Ausgewählte Hersteller können prominent oberhalb der Übersicht hervorgehoben werden.
- **SEO-URL-Generierung**: Optional automatische Erzeugung sprechender URLs pro Sprache (z. B. `/hersteller/acme` statt `/manufacturer/{id}`) über einen Planner-Task.
- **Sitemap-Integration**: Alle Herstellerseiten werden automatisch in die Shopware-Sitemap aufgenommen.
- **Produkt-Filter & Sortierung**: Auf der Herstellerseite funktionieren alle Standard-Shopware-Filter und Sortierungen wie in der Kategorie-Listing.
- **Hersteller verbergen**: Einzelne Hersteller lassen sich über ein Checkbox-Feld komplett aus Übersicht und Sitemap ausblenden.
- **Text-Baustein pro Hersteller**: Zusätzlicher Freitext unterhalb des Produkt-Listings (HTML-fähig) pro Hersteller.

## Voraussetzungen

- Shopware Version: **6.6.0** oder höher (bis einschließlich 6.7.x)
- PHP Version: **8.2** oder höher
- Produkte müssen einem Hersteller (Produkt-Hersteller) zugeordnet sein, damit dieser auf der Übersicht erscheint.

## Kompatibilität

Dieses Plugin unterstützt mehrere Shopware-Versionen aus einer Codebasis:

| Shopware-Version | Status          | Hinweise                                                        |
| ---------------- | --------------- | --------------------------------------------------------------- |
| 6.6.x            | ✅ Unterstützt  | Administration läuft unter Vue 2.7                              |
| 6.7.x            | ✅ Unterstützt  | Administration läuft unter Vue 3 / Meteor-Komponenten           |

## Schnellstart

1. Installieren Sie das Plugin über den Plugin Manager oder per Composer.
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**.
3. Öffnen Sie die Konfiguration unter **Erweiterungen → Meine Erweiterungen → Hersteller Seiten → Konfigurieren**.
4. Optional: Legen Sie eine Kategorie „Hersteller" im Katalog an und verknüpfen Sie sie in den Einstellungen (nur für Breadcrumbs benötigt).
5. Fügen Sie das CMS-Element **Hersteller-Übersicht** in eine Erlebniswelt Ihrer Wahl (z. B. eine Landingpage „Marken") ein.
6. Optional: Aktivieren Sie die **SEO-URL-Erzeugung** und setzen Sie einen Fallback-Prefix (z. B. `hersteller`).

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) — so nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) — Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) — Versionshistorie und Updates
