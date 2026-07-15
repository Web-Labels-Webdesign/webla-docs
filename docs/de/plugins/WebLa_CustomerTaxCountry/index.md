# Customer Tax Country

Customer Tax Country steuert, welches Land für die Umsatzsteuer im Warenkorb und im Checkout maßgeblich ist – je Kunde, je Kundengruppe oder global je Verkaufskanal. Zusätzlich werden innergemeinschaftliche B2B-Lieferungen bei gültiger USt-Id automatisch mit 0 % Umsatzsteuer berechnet.

## Was das Plugin macht

- **Steuerbasis wählbar**: Shopware-Standard, Rechnungsland oder Lieferland
- **Drei Ebenen**: am einzelnen Kunden, an der Kundengruppe oder global in der Plugin-Konfiguration
- **Rechnungsland-Modus**: Steuerstatus *und* Steuersatz folgen der im Checkout gewählten Rechnungsadresse
- **Intra-EU-B2B**: Bei gültiger USt-Id und Lieferung in ein anderes EU-Land wird ohne Umsatzsteuer berechnet
- **USt-Id-Prüfung**: Online-Prüfung über den EU-Dienst VIES, mit konfigurierbarem Verhalten, falls VIES nicht erreichbar ist

## Reihenfolge der Steuerbasis

Das Plugin prüft von oben nach unten und verwendet den ersten gesetzten Wert:

1. Einstellung am **Kunden**
2. Einstellung an der **Kundengruppe**
3. **Globale** Plugin-Einstellung (je Verkaufskanal)
4. **Shopware-Standard** (Lieferland)

Steht auf einer Ebene „Nicht gesetzt“ bzw. „Shopware-Standard“, wird die nächste Ebene geprüft.

## Weiterführend

- [Einstellungen](configuration/settings.md)
- [Bedienung](usage/usage.md)
- [Anwendungsfälle](how_to.md)
- [Changelog](changelog.md)

## Support

- Dokumentation: <https://docs.web-labels.de/>
- Hersteller: Web Labels Webdesign GmbH
