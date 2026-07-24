# How-to

Praktische Anleitungen für die tägliche Arbeit mit WebLa Blog.

## Kategorie anlegen

1. In der Administration **WebLa Blog → Kategorien** öffnen.
2. **Kategorie hinzufügen**, Name und Slug pflegen (der Slug bildet die SEO-URL `/blog/{kategorie}`).
3. Optional Verkaufskanäle zuweisen. Leer lassen = in allen Kanälen sichtbar.
4. Übersetzungen über die Sprachauswahl pflegen; nicht gefüllte Felder erben den Wert der Hauptsprache (als Platzhalter sichtbar).

## Beitrag anlegen

1. **WebLa Blog → Beiträge → Beitrag hinzufügen**.
2. Titel, Slug, Kategorie sowie Vorschau-/Headerbild und optional eine Bildergalerie setzen.
3. Inhalt mit dem **Inline-Content-Builder** aufbauen (siehe unten).
4. Optional einen **Produkt-Slider** konfigurieren: manuelle Auswahl, Product-Stream oder Kategorie als Quelle.
5. Verkaufskanäle zuweisen (leer = alle) und speichern.

## Inline-Content-Builder nutzen

> Der Content-Builder ist über einen Shopware In-App-Kauf freigeschaltet. Ohne Kauf sind die Widgets in Administration und Storefront gesperrt; der übrige Blog bleibt nutzbar.

1. Im Beitrag eine **Reihe** mit 1–4 Spalten hinzufügen.
2. Je Spalte ein Widget wählen: **Text, Bild, Galerie, FAQ (Akkordeon)** oder **Tabelle**.
3. Reihen lassen sich umsortieren und beliebig kombinieren.

## Vorlagen wiederverwenden

1. Die Struktur eines fertigen Beitrags als **Vorlage speichern**.
2. In einem neuen Beitrag die Vorlage laden – Reihen und Widgets werden übernommen und können angepasst werden.

## CMS-Bausteine in Erlebniswelten

In **Inhalte → Erlebniswelten** stehen die Blog-Bausteine bereit: Blog-Übersicht, Blog-Slider, News-Portal, FAQ und Tabelle. Bausteine einfügen und über die Element-Einstellungen mit Beiträgen/Kategorien verknüpfen.

## Darstellung anpassen

Unter **Erweiterungen → WebLa Blog → Konfiguration** lassen sich Akzentfarbe, Schriftart und Schriftgrößen setzen. Jedes Feld ist optional – leer bedeutet, dass der Theme-Standard genutzt wird.

## SEO

Beiträge und Kategorien erhalten automatisch sprachabhängige SEO-URLs. Bei Slug-Änderungen werden Weiterleitungen angelegt, und die URLs fließen in die XML-Sitemap ein. Strukturierte Daten (JSON-LD) sowie Canonical-URLs werden automatisch ausgegeben.
