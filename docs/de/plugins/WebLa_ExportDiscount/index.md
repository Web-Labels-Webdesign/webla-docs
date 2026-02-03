# Shopping Feed mit einzigartigen Rabatten

> Zeigen Sie rabattierte Preise nur Besuchern von Preissuchmaschinen - ideal für Google Shopping, idealo, billiger.de und mehr.

## Übersicht

Mit diesem Plugin können Sie Besuchern, die über Preissuchmaschinen wie Google Shopping, idealo oder billiger.de auf Ihren Shop gelangen, einen speziellen Rabattpreis anzeigen. Das Besondere: Der Rabatt gilt **nur für das angeklickte Produkt**. Alle anderen Produkte in Ihrem Shop behalten ihren regulären Preis.

Diese Strategie ermöglicht es Ihnen, in Preisvergleichen wettbewerbsfähig zu sein, ohne Ihre gesamte Marge zu opfern. Besucher, die über den Feed kommen, sehen den rabattierten Preis auf der Produktseite, im Warenkorb und während des gesamten Checkout-Prozesses. Kaufen sie zusätzliche Artikel, zahlen sie dafür den normalen Preis - das steigert Ihren durchschnittlichen Bestellwert.

Das Plugin unterstützt sowohl globale Rabatte (prozentual oder absolut) als auch individuelle Preise pro Artikel, was es ideal für den Einsatz mit Repricing-Tools macht.

## Hauptfunktionen

- **Selektive Rabattierung**: Rabattpreise nur für das Produkt, über das der Besucher aus dem Feed kam
- **Globaler Rabatt**: Konfigurierbarer Prozent- oder Absolutrabatt für alle Produkte im Feed
- **Artikel-spezifischer Preis**: Individueller Preis pro Produkt überschreibt den globalen Rabatt (ideal für Repricing-Tools)
- **30-Tage-Preisanzeige**: Schreibt automatisch den günstigsten Preis in das Shopware-Feld "Günstigster Preis letzte 30 Tage"
- **Staffelpreis-Unterstützung**: Funktioniert mit erweiterten Preisen und Mengenrabatten
- **Mehrere Produkte pro Session**: Optional können mehrere rabattierte Produkte in einer Session erlaubt werden
- **Automatische Bereinigung**: Abgelaufene Sessions werden automatisch entfernt

## Voraussetzungen

- Shopware Version: 6.5.0 oder höher (bis 6.7.x)
- PHP Version: 8.1 oder höher
- Ein konfigurierter Produktexport (Produktvergleich-Verkaufskanal)

## Schnellstart

1. Installieren Sie das Plugin über den Plugin Manager oder Composer
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**
3. Öffnen Sie Ihren Produktexport unter **Verkaufskanäle → [Ihr Export-Kanal] → Produktvergleich**
4. Konfigurieren Sie Rabatttyp und Rabattwert im Abschnitt unterhalb des Dynamischen Produkt-Streams
5. Passen Sie Ihr Export-Template an:
   - Fügen Sie `'source': export.id` zu Ihren Produkt-URLs hinzu
   - Nutzen Sie `product.extensions.discount['discount'].last` für den Sale-Preis

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) - Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) - So nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) - Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) - Versionshistorie und Updates

## Support

Bei Fragen oder Problemen nutzen Sie bitte das Shopware Store Ticket-System. Wir antworten schnell und helfen Ihnen gerne weiter.

**Hersteller**: Web Labels Webdesign GmbH
**Shopware Store**: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
