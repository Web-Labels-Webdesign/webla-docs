# Settings

The global settings are located under **Settings → System → Plugins → Customer Tax Country → … (context menu) → Config**.

Settings apply per sales channel. Select the sales channel at the top, or keep "All sales channels" for a shop-wide value.

## Customer Tax Country Settings

### Global tax base mode

Defines which country is used as the tax base when no tax base is set on the customer or the customer group.

| Option | Meaning |
| --- | --- |
| **Shopware default** (default) | Shopware decides as usual (shipping country). |
| **Billing country** | Tax status and tax rate follow the billing address chosen at checkout. |
| **Shipping country** | Tax status and tax rate follow the shipping address. |

### Behaviour when the VAT-ID service (VIES) is unavailable

Applies only when the online VIES check does not respond. Definitive online results are cached and are not affected by this setting.

| Option | Meaning |
| --- | --- |
| **Formal check (offline format validation)** (default) | Only the format of the VAT ID is validated. |
| **Treat as valid (apply 0%)** | The VAT ID is considered valid and no VAT is charged. |
| **Treat as invalid (normal tax)** | The VAT ID is considered invalid and normal tax applies. |

> **Note:** "Treat as valid" charges 0% without a confirmed check while the service is down. Convenient for the customer, but it shifts the tax risk to you.

## Settings on customers and customer groups

In addition to the global setting, the plugin installs the custom field **Tax base (shipping/billing country)** on customers and customer groups. See [Usage](../usage/usage.md).
