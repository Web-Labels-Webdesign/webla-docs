# Usage

## Set the tax base on a single customer

1. Open **Customers** and select the customer.
2. Scroll to the **Custom fields** section, group **Customer Tax Country**.
3. Set the field **Tax base (shipping/billing country)**:
   - **Not set (fallback)** – the customer group or the global setting decides
   - **Billing country**
   - **Shipping country**
4. **Save**.

The customer setting always takes precedence over the customer group and the global setting.

## Set the tax base on a customer group

1. Open **Settings → Shop → Customer groups** and select the group.
2. Scroll to the **Custom fields** section, group **Customer Tax Country**.
3. Set **Tax base (shipping/billing country)** and **save**.

The setting applies to all customers of the group who have no tax base of their own.

## Behaviour at checkout

- **Billing country**: if the customer changes the billing address at checkout, tax is recalculated immediately — both the tax status (gross/net/tax-free) and the applied tax rate.
- **Shipping country**: the shipping address is decisive.
- **Shopware default**: Shopware's standard behaviour is kept.

## Intra-EU B2B delivery (0% VAT)

No VAT is charged when **all** of the following are true:

- the customer has a VAT ID,
- the VAT ID is valid,
- the customer's tax country is in the EU,
- the sales channel's country is in the EU,
- and it is a **different** country than the sales channel's country.

The VAT ID is checked online against the EU VIES service. Results are cached (valid: 7 days, invalid: 1 day) so that checkout does not query VIES on every recalculation. If VIES does not respond, the setting [Behaviour when the VAT-ID service (VIES) is unavailable](../configuration/settings.md#behaviour-when-the-vat-id-service-vies-is-unavailable) applies.

## Maintaining the VAT ID

The VAT ID is maintained in the customer account or in the customer's admin detail page (field **VAT Reg.No.**). Without a VAT ID, the 0% rule never applies.
