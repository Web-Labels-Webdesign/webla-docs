# Tax Calculator und Länderumschalter

> Steuernachkalkulation und Lieferländer — berechnet Produktpreise und Versandkosten für Besucher aus anderen Ländern neu.

## Übersicht

Dieses Plugin erweitert Ihren Shopware-Shop um einen Länderumschalter in der Topbar und sorgt dafür, dass Produktpreise und Versandkosten immer korrekt für das ausgewählte Lieferland angezeigt werden. Die Preisberechnung erfolgt dabei stets ausgehend vom Nettopreis, sodass der richtige Steuersatz des Ziellandes angewendet wird — ideal für OSS-konforme B2C-Shops, die international verkaufen.

Typische Einsatzfälle sind Händler, die grenzüberschreitend in EU- und Drittländer liefern und ihren Besuchern sofort den finalen Bruttopreis inklusive korrekter Landessteuer anzeigen möchten. Das ausgewählte Lieferland wird nahtlos an den Checkout und die Gastbestellung übergeben.

Version 5.x unterstützt Shopware 6.6 und 6.7 aus einer einzigen Code-Basis über einen integrierten Kompatibilitäts-Layer. Für Shopware 6.5 steht weiterhin die ältere Plugin-Version 2.x zur Verfügung.

## Hauptfunktionen

- **Länderumschalter im Frontend**: Dropdown in der Topbar mit Flaggen, Ländernamen oder ISO-Codes zur Auswahl des Lieferlandes
- **Live-Preisaktualisierung**: Produkt- und Versandkostenpreise werden sofort nach Landeswechsel im gesamten Shop neu berechnet
- **Netto-basierte Steuerberechnung**: Bruttopreise werden korrekt aus dem Nettopreis und dem Steuersatz des Ziellandes berechnet, inkl. Staffelpreise, UVP und Streichpreise
- **Versandkostenanpassung**: Optional werden auch Versandkosten pro Land neu berechnet
- **Übergabe ins Checkout**: Das ausgewählte Lieferland wird automatisch in die Registrierung bzw. Gastbestellung übernommen
- **Länder ausschließen**: Einzelne Länder können von der Neuberechnung ausgenommen werden
- **Flexible Topbar-Integration**: Drei Modi zur Integration in bestehende Themes (Erweitern, Ersetzen oder reines Widget)
- **Umfangreiches Styling**: Farben, Abstände, Rahmen und Breite des Dropdowns sind vollständig anpassbar
- **Optional Währungswechsel**: Automatischer Wechsel zur Landeswährung beim Länderwechsel

## Voraussetzungen

- Shopware Version: 6.6.0 oder höher (Plugin 5.x unterstützt 6.6 und 6.7)
- PHP Version: 8.2 oder höher
- Mindestens ein konfigurierter Verkaufskanal mit mehreren freigegebenen Lieferländern
- Korrekt gepflegte Steuersätze pro Land in Shopware

## Schnellstart

1. Plugin über den Shopware Store oder per ZIP-Upload installieren
2. Aktivieren unter **Erweiterungen → Meine Erweiterungen**
3. Grundkonfiguration öffnen: **Erweiterungen → Meine Erweiterungen → Steuernachkalkulation und Lieferländer → Konfigurieren**
4. In den **Allgemeinen Einstellungen** des Verkaufskanals prüfen, dass alle gewünschten Lieferländer aktiviert sind
5. Im Storefront den neuen Länderumschalter in der Topbar testen — nach Auswahl eines Landes sollten Produktpreise neu berechnet werden

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) — so nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) — Datenfluss und Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) — Versionshistorie und Updates

## Support

Bei Fragen oder Problemen kontaktieren Sie bitte Web Labels Webdesign GmbH über den [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html).
