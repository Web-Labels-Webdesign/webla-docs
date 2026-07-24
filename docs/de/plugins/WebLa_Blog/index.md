# WebLa Blog

Vollwertiges Blog-System für Shopware 6.6.4 – 6.7 mit Inline-Content-Builder, CMS-Erlebniswelt-Bausteinen und SEO. Das Plugin selbst ist kostenlos; der Inline-Content-Builder wird über einen Shopware In-App-Kauf freigeschaltet.

## Funktionen im Überblick

- **Beiträge & Kategorien** mit mehrsprachigen Übersetzungen, Vorschau-/Headerbild und Bildergalerie. Nicht übersetzte Felder fallen automatisch auf die Hauptsprache zurück.
- **Inline-Content-Builder** direkt im Beitrag: Reihen mit 1–4 Spalten und den Widgets Text, Bild, Galerie, FAQ (Akkordeon) und Tabelle – ohne separate Erlebniswelt. Freigeschaltet über einen Shopware In-App-Kauf (in Storefront und Administration gesperrt, solange nicht gekauft).
- **Wiederverwendbare Vorlagen**: Struktur eines Beitrags speichern und in neue Beiträge laden.
- **CMS-Bausteine** für Erlebniswelten: Blog-Übersicht, Blog-Slider, News-Portal, FAQ, Tabelle.
- **Produkt-Slider** je Beitrag (manuelle Auswahl, dynamische Produktgruppe/Product-Stream oder Kategorie).
- **Verkaufskanal-Zuordnung** für Beiträge und Kategorien (leer = alle Kanäle).
- **SEO**: native, sprachabhängige SEO-URLs, automatische (Neu-)Generierung und Weiterleitungen bei Slug-Änderungen, Sitemap-Integration, JSON-LD (BlogPosting, BreadcrumbList, CollectionPage) und Canonical-URLs.
- **Administration**: eigene Module für Beiträge und Kategorien, an Produktliste/-detail angelehnt.
- **Theming**: Akzentfarbe, Schriftart und Schriftgrößen konfigurierbar, sonst Theme-Werte.

## Anforderungen

- Shopware 6.6.4 – 6.7

## Installation

1. Plugin nach `custom/plugins/WebLa_Blog` legen.
2. `bin/console plugin:install --activate WebLa_Blog` ausführen.
3. Administration neu bauen (`bin/build-administration.sh`) und Cache leeren.

## Storefront-Routen

- `/blog` – Übersicht
- `/blog/{kategorie}` – Kategorie
- `/blog/{kategorie}/{beitrag}` – Beitrag

## Konfiguration

Erweiterungen → WebLa Blog → Konfiguration:

- **Darstellung**: Akzentfarbe (leer = primäre Theme-Farbe), Schriftart als CSS `font-family` (leer = Theme-Schrift).
- **Schriftgrößen – Übersicht**: Überschrift und Teaser der Beitragskarten.
- **Schriftgrößen – Detailseite**: Headline, Fließtext sowie H2–H6.

Alle Felder sind optional – ein leeres Feld nutzt den jeweiligen Theme-Standard.

Weitere Anleitungen unter [How-to](how-to.md), Versionshistorie im [Changelog](changelog.md).

## Support

WebLabels – https://web-labels.de · info@web-labels.de
