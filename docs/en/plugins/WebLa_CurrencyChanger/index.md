# Currency Display (Currency Changer)

> Shows every price additionally in a currency chosen by the visitor, using daily rates from the European Central Bank.

## Overview

International visitors struggle to judge a price quoted in a currency they do not use day to day. This plugin displays a second amount next to your regular price, in the currency the visitor selects. Exchange rates come directly from the European Central Bank and are updated automatically.

What the plugin deliberately does **not** do is just as important: orders, checkout and invoices all stay in your shop default currency. The converted amount is guidance for the customer only, and is labelled as an "approximate price". Your bookkeeping, tax logic and payment processing are untouched.

The plugin suits shops that sell internationally but want to avoid the overhead of a genuine multi-currency setup.

## Key Features

- **Second currency throughout the shop**: The converted price appears on the product detail page, in listing and search views, in the cart, and in the checkout including totals and the tax breakdown.
- **Over 30 currencies**: Every reference currency published by the ECB is available, with translated names.
- **Automatic rate updates**: A background task fetches current rates without any action from you.
- **Currency selector in the topbar**: Visitors pick their currency from a dropdown in the header, with country flags or currency symbols.
- **Custom exchange rate**: A deviating rate can be stored per currency pair, for example to absorb exchange rate fluctuations.

## Requirements

- **Shopware version**: 6.6.0 up to and including 6.7.x
- **PHP version**: 8.2 or higher (required by Shopware 6.6/6.7)
- **Shop default currency must be Euro**: European Central Bank rates are euro reference rates. The plugin converts from Euro and therefore only works in shops whose default currency is Euro. Support for other base currencies is available on request.

## Compatibility

This plugin supports multiple Shopware versions from a single codebase:

| Shopware version | Status         | Notes                                    |
| ---------------- | -------------- | ---------------------------------------- |
| 6.6.x            | ✅ Supported   | Fully supported                          |
| 6.7.x            | ✅ Supported   | Fully supported                          |
| 6.5.x and older  | ❌ End of life | Last supported release was 2.0.1         |

You do not need a different plugin version when updating your shop from 6.6 to 6.7. The same installation covers both major versions.

## Quick Start

1. Install the plugin via **Extensions → My Extensions** or through Composer.
2. Activate the plugin under **Extensions → My Extensions**.
3. Set your default target currency under **Extensions → My Extensions → Currency Display → Configure**.
4. Wait for the first run of the automatic rate update (within 30 minutes at the latest), or trigger it manually — see [How-To Guides](how_to.md). **Before the first run the currency selector is not visible in the shop**, because no rates exist yet.
5. Check the result under **Settings → Extensions → Storefront Currency**.

## Documentation Contents

- [Configuration Settings](configuration/settings.md) – Every available setting explained
- [Usage Guide](usage/usage.md) – How to use all plugin features
- [How-To Guides](how_to.md) – Step-by-step workflows
- [Changelog](changelog.md) – Version history and updates
