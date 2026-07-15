# How-to

## Tax all B2B customers by billing country

1. Open **Settings → Shop → Customer groups** and select your B2B group.
2. Set the custom field **Tax base (shipping/billing country)** to **Billing country** and save.
3. Make sure the customers in that group are set to **Not set (fallback)** so the group setting takes effect.

## Treat a single customer differently

1. Open the customer under **Customers**.
2. Set the custom field **Tax base (shipping/billing country)** to **Billing country** or **Shipping country** and save.

The customer value overrides both the customer group and the global setting.

## Switch the whole shop to billing country

1. Open **Settings → System → Plugins → Customer Tax Country → Config**.
2. Choose the sales channel (or "All sales channels").
3. Set **Global tax base mode** to **Billing country** and save.

## Prepare for a VIES outage

1. Open the plugin configuration.
2. Choose **Behaviour when the VAT-ID service (VIES) is unavailable**:
   - **Formal check** – balanced default
   - **Treat as invalid** – tax-conservative; in case of doubt the customer pays VAT
   - **Treat as valid** – customer-friendly; the tax risk is yours

## Find out why a customer is charged VAT

Work through these points in order:

1. Does the customer have a **VAT Reg.No.**?
2. Is the tax country (billing or shipping, depending on the mode) an **EU country**?
3. Does that country differ from the **sales channel's country**? Domestic deliveries always remain taxable.
4. Is the VAT ID **valid**? Check it directly in the EU VIES portal.
5. Which **tax base** actually applies — customer, customer group, or global?
