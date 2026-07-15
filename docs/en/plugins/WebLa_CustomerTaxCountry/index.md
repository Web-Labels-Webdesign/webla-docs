# Customer Tax Country

Customer Tax Country controls which country determines VAT in the cart and at checkout — per customer, per customer group, or globally per sales channel. Intra-EU B2B deliveries with a valid VAT ID are automatically charged at 0% VAT.

## What the plugin does

- **Selectable tax base**: Shopware default, billing country, or shipping country
- **Three levels**: on the individual customer, on the customer group, or globally in the plugin configuration
- **Billing country mode**: both the tax status *and* the applied tax rate follow the billing address chosen at checkout
- **Intra-EU B2B**: with a valid VAT ID and delivery to another EU country, no VAT is charged
- **VAT ID validation**: online check against the EU VIES service, with configurable behaviour if VIES is unreachable

## Tax base priority

The plugin checks top to bottom and uses the first value that is set:

1. Setting on the **customer**
2. Setting on the **customer group**
3. **Global** plugin setting (per sales channel)
4. **Shopware default** (shipping country)

If a level is set to "Not set" or "Shopware default", the next level is checked.

## Further reading

- [Settings](configuration/settings.md)
- [Usage](usage/usage.md)
- [How-to](how_to.md)
- [Changelog](changelog.md)

## Support

- Documentation: <https://docs.web-labels.de/>
- Manufacturer: Web Labels Webdesign GmbH
