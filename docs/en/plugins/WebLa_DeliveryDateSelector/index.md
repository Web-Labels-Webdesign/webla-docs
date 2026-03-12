# Preferred Delivery Date for Customers

> Preferred delivery date with configurable buffer times, automatic public holiday management per region and product delivery time calculation. Compatible with Shopware 6.6 and 6.7.

## Overview

The **Preferred Delivery Date for Customers** plugin allows your customers to select a desired delivery date during checkout. The calendar only shows dates that are realistically achievable — based on your products' delivery times, your configured buffer days, and blocked dates such as public holidays or days your business is closed.

The plugin automatically calculates the earliest possible delivery date: it finds the longest delivery time among all products in the cart, adds your buffer days, and skips any blocked dates. This ensures your customers can only choose from realistic dates — and you won't receive orders with impossible delivery expectations.

The selected preferred delivery date is saved with the order and is visible in the admin panel in the order list, the order detail view, and in order documents.

## Key Features

- **Intelligent date calculation**: The earliest possible delivery date is automatically calculated from product delivery times, buffer days, and blocked dates
- **Automatic public holiday management**: Public holidays are automatically fetched via an external API — nationwide or per German federal state
- **Manual blocked dates**: In addition to public holidays, any date can be blocked manually (e.g., company closures)
- **Flexible buffer times**: Configurable lead time between order placement and dispatch, supporting hours, days, weeks, and months
- **Product-specific lead times**: Individual lead times can be set per product, category, and shipping method
- **Block weekdays**: Define which weekdays are unavailable for delivery (e.g., Saturday and Sunday)
- **Order list in admin**: Preferred delivery date as an additional column and filter in the order list
- **Visible in order confirmation**: The preferred delivery date appears on the thank-you page and in order documents
- **Shopware rule engine integration**: Custom rule conditions for the preferred delivery date weekday and whether a date has been set
- **Customer-specific delivery days**: Optionally configure individual delivery days per customer

## Requirements

- Shopware Version: 6.6.0 or higher (compatible up to 6.7.x)
- PHP Version: 8.1 or higher

## Quick Start

1. Install the plugin via Plugin Manager or Composer
2. Activate the plugin in **Extensions → My Extensions**
3. Open the configuration in **Extensions → My Extensions → Preferred Delivery Date for Customers → Configure**
4. Select your federal state (or "Only nationwide holidays") so that public holidays are loaded automatically
5. Configure the buffer time (minimum lead time between order and delivery)
6. Define which weekdays are unavailable for delivery

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — All available settings explained
- [Usage Guide](usage/usage.md) — How to use all plugin features
- [How-To Guide](how_to.md) — Step-by-step workflows
- [Changelog](changelog.md) — Version history and updates

## Support

If you have questions or encounter any issues, please contact support via the Shopware Store or visit the full documentation at [docs.web-labels.de](https://docs.web-labels.de).

Manufacturer: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
