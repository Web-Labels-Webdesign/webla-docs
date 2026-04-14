# Tax Calculator and Country Switcher

> Tax recalculation and delivery countries — recalculates product prices and shipping costs for visitors from other countries.

## Overview

This plugin adds a country switcher to your Shopware storefront topbar and makes sure product prices and shipping costs are always displayed correctly for the selected delivery country. Price calculation always starts from the net price and then applies the target country's tax rate — ideal for OSS-compliant B2C shops selling internationally.

Typical use cases are merchants delivering across EU borders and to third countries, who want to display the final gross price including the correct country tax to visitors immediately. The selected delivery country is seamlessly passed on to checkout and guest order.

Version 5.x supports Shopware 6.6 and 6.7 from a single codebase through an integrated compatibility layer. For Shopware 6.5, the older plugin version 2.x remains available.

## Key Features

- **Storefront country switcher**: Topbar dropdown with flags, country names, or ISO codes for selecting the delivery country
- **Live price updates**: Product and shipping prices are recalculated across the entire shop immediately after a country change
- **Net-based tax calculation**: Gross prices are correctly calculated from the net price and the target country's tax rate, including tier prices, RRP, and strike prices
- **Shipping cost adjustment**: Optionally recalculates shipping costs per country as well
- **Checkout handover**: The selected delivery country is automatically carried over into registration or guest order
- **Exclude countries**: Individual countries can be excluded from recalculation
- **Flexible topbar integration**: Three modes for integrating with existing themes (extend, replace, widget only)
- **Extensive styling options**: Colors, padding, borders, and width of the dropdown are fully customizable
- **Optional currency switch**: Automatic switch to the country's local currency when a country is selected

## Requirements

- Shopware Version: 6.6.0 or higher (plugin 5.x supports 6.6 and 6.7)
- PHP Version: 8.2 or higher
- At least one configured sales channel with multiple active delivery countries
- Correctly maintained tax rates per country in Shopware

## Quick Start

1. Install the plugin via Shopware Store or ZIP upload
2. Activate it in **Extensions → My Extensions**
3. Open the base configuration: **Extensions → My Extensions → Tax calculator and shipping country switch → Configure**
4. In the **General Settings** of the sales channel, verify that all desired delivery countries are activated
5. Test the new country switcher in the storefront topbar — after selecting a country, product prices should be recalculated

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — all available settings explained
- [Usage Guide](usage/usage.md) — how to use all plugin features
- [How-To Guide](how_to.md) — data flow and step-by-step workflows
- [Changelog](changelog.md) — version history and updates

## Support

For questions or issues, please contact Web Labels Webdesign GmbH through the [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html).
