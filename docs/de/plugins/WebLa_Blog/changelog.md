**Changelog**

Alle wesentlichen Änderungen an WebLa Blog für Endanwender.

---

# 1.1.0

_Veröffentlicht am 2026-11-25_

**Neue Funktionen**

- Die Blog-Übersichtsseite gibt jetzt hreflang-Verweise aus (einer pro Sprach-Domain plus x-default), damit Suchmaschinen ihre Sprachversionen miteinander verknüpfen. Blogbeiträge und Blogkategorien hatten diese bereits.

**Verbesserungen**

- Code an den aktuellen Shopware-Coding-Standard angepasst. Keine Änderung am Verhalten.

---

# 1.0.2

_Veröffentlicht am 2026-11-18_

- Behoben: Unter Shopware 6.6 blieben die Seiten zum Anlegen und Bearbeiten von Blogbeiträgen und Blogkategorien leer, und der Sprachwechsel in den Beitrags- und Kategorielisten hatte keine Wirkung. Beides funktioniert jetzt unter Shopware 6.6 und 6.7.

---

# 1.0.1

_Veröffentlicht am 2026-11-18_

- Behoben: Der In-App-Kauf "Content-Baukasten" lässt sich jetzt in der Administration kaufen und freischalten. Das Plugin fragt ihn nun unter seinem korrekten technischen Namen ab.
- Behoben: Das FAQ-Element trug den CMS-Typ `webla-faq` – denselben, den auch das Plugin webla_richsnippets für sein eigenes FAQ-Element verwendet. In Shops mit beiden Plugins entschied allein die Ladereihenfolge, welches der beiden FAQ-Elemente tatsächlich gerendert wurde; das andere blieb leer. Der Typ heißt jetzt `webla-blog-faq`, bestehende Inhalte werden per Migration automatisch umgestellt.
- Sicherheit: Die strukturierten Daten von Beitrags- und Übersichtsseite maskieren jetzt spitze Klammern in den JSON-LD-Blöcken (`JSON_HEX_TAG`).
- Geändert: `mainEntityOfPage` im BlogPosting-Schema verweist jetzt auf den WebPage-Eintrag der Seite (`#webpage`) statt auf die reine URL – konsistent mit dem WebPage-Schema von webla_richsnippets, sofern installiert.

---

# 1.0.0

- Erstveröffentlichung von WebLa Blog für Shopware 6.6. – 6.7.
- Blog-Beiträge und -Kategorien mit mehrsprachigen Übersetzungen; der Storefront greift für nicht übersetzte Felder auf die Hauptsprache zurück.
- SEO-freundliche, sprachabhängige URLs für Beiträge und Kategorien über das native SEO-URL-System von Shopware: saubere kanonische Pfade je Sprache (z. B. /blog/{kategorie}/{beitrag}), automatische (Neu-)Generierung bei Änderungen, Weiterleitungen bei Slug-Änderungen, SEO-Meta-Felder und eine XML-Sitemap auf Basis der kanonischen URLs.
- Inline-Content-Baukasten – ein Raster aus Text-, Bild-, Galerie-, FAQ- und Tabellen-Widgets mit wiederverwendbaren Vorlagen – als Shopware In-App-Kauf (in Storefront und Administration gesperrt); der übrige Blog bleibt kostenlos.
- CMS-Bausteine und -Elemente für Erlebniswelten: Blog-Listing, Blog-News-Portal, Blog-Slider, FAQ und Tabelle.
- Produkt-Slider je Beitrag mit manueller Auswahl, Produkt-Stream oder Kategorie als Quelle.
- Konfigurierbares Theming: Akzentfarbe, Schriftart und Schriftgrößen.
- Eigene Administrationsmodule für Blog-Beiträge und -Kategorien, an Produktliste/-detail angelehnt: Aktualisieren-Aktion, Filter-Sidebar, beschränkte Suche, Anzahlanzeige, Pagination im Sichtbereich sowie Sprachauswahl mit Vererbung der Elternübersetzung als Feld-Platzhalter.
