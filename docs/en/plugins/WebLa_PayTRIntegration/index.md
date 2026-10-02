# PayTR Integration

> PayTR payment provider integration for Shopware 6. Accept credit card, debit card, and installment payments from Turkish customers via the secure PayTR checkout.

## Overview

PayTR Integration adds the **PayTR** payment method to your Shopware checkout. PayTR is one of Turkey's leading payment service providers and supports credit cards, debit cards, and installment payments (Taksit).

After submitting the order, your customer is redirected to PayTR's secure payment page and enters their card details there. Your shop never handles card data. Once the payment is complete, the customer is automatically returned to your shop.

PayTR reports the result of every payment directly to your shop. The order's payment status is automatically set to **Paid** or **Failed**. No manual reconciliation is needed.

## Key Features

- **Secure payment page**: Card details are entered and processed exclusively by PayTR.
- **Installments**: Offer installment payments, limit the number of installments, or turn installments off entirely.
- **Automatic payment status**: Orders are updated automatically after a successful or failed payment.
- **Credential test**: Check your PayTR credentials with a single click directly in the plugin configuration.
- **Copyable callback URL**: The address you need to enter in the PayTR Merchant Panel is shown in the configuration.
- **Test mode**: Test the entire payment flow without triggering real payments.
- **Configurable per sales channel**: Use separate PayTR credentials for each sales channel.
- **Turkish payment page**: Customers using your shop in Turkish see the PayTR payment page in Turkish; everyone else sees it in English.

## Requirements

- Shopware version: 6.7.x
- PHP version: 8.2 or higher
- An active **PayTR merchant account** with access to the PayTR Merchant Panel
- Your shop must be reachable from the internet so PayTR can report payment results
- Supported currencies: **TRY, EUR, USD, GBP, RUB**

## Quick Start

1. Install the plugin via the Plugin Manager or Composer.
2. Activate the plugin under **Extensions → My Extensions**.
3. Open **Extensions → My Extensions → PayTR Integration → Configure**.
4. Enter your **Merchant ID**, **Merchant Key**, and **Merchant Salt** from the PayTR Merchant Panel and click **Save**.
5. Click **Test API Credentials**.
6. Copy the displayed **Callback URL** and enter it in the PayTR Merchant Panel.
7. Assign the **PayTR** payment method to your sales channel.

For the detailed walkthrough, see [How-To Guides](how_to.md).

## Documentation Contents

- [Configuration Settings](configuration/settings.md): All available settings explained
- [Usage Guide](usage/usage.md): Payment flow, admin and storefront features, troubleshooting
- [How-To Guides](how_to.md): Step-by-step workflows for setup, testing, and going live
- [Changelog](changelog.md): Version history and updates
