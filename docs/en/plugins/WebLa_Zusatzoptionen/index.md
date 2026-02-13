# WebLa Additional Options

> Add flexible additional options to products with custom pricing, shipping restrictions, and automated assignment via product streams for enhanced product configuration.

## Overview

With the WebLa Additional Options plugin, you can extend your Shopware 6 products with flexible additional options. Offer your customers warranty extensions, services, accessories, or individual configuration options directly during the product purchase.

The plugin allows you to create option sets that can be selected individually or multiple times. You can define dependencies between options, set country-specific prices, and automatically assign options via product streams. Options appear on both the product detail page and in the shopping cart and can be adjusted by the customer at any time.

Ideal for shop operators who want to supplement their products with additional services without having to create separate products. The plugin integrates seamlessly into Shopware 6 and supports all important functions such as dynamic tax rates (OSS), promotions, rules, and API access.

## Key Features

- **Flexible Option Sets**: Create unlimited option sets with single or multiple selection for each product
- **Product-Based Options**: Use existing products as additional options or create text-based input fields
- **Automatic Assignment**: Automatically assign options via product streams without manually configuring each product
- **Country-Specific Prices**: Define different prices and availability depending on the customer's delivery country
- **Quantity Tiering**: Allow quantity selection for options with automatic price tiering
- **Shipping Restrictions**: Restrict options to specific shipping methods or exclude them
- **Product Dependencies**: Define up to 3 levels of dependent options (e.g., Option B is only displayed when Option A is selected)
- **Incompatibilities**: Mutually exclude certain options (e.g., Warranty Option A and B cannot be selected simultaneously)
- **Required Fields**: Mark options as required so the customer must select them
- **Shopping Cart Integration**: Customers can add or change options directly in the shopping cart
- **Rule Builder Compatibility**: Control option availability via Shopware rules
- **Dynamic Tax Rates**: Full support for OSS (One Stop Shop) with automatic tax rate adjustment
- **Promotion Support**: Options are correctly included in promotions and discounts
- **API Support**: Complete API integration for external systems and headless commerce

## Requirements

- Shopware Version: 6.6.0 - 6.7.0
- PHP Version: 8.1+
- Composer

## Quick Start

1. Install the plugin via Plugin Manager or Composer
2. Activate the plugin in **Extensions → My Extensions**
3. Configure basic settings in **Extensions → My Extensions → Product Additional Options Plugin → Configure**
4. Create your first option set: Navigate to **Catalogues → Products**, select a product and switch to the **Additional Options** tab
5. Add options and define prices, shipping restrictions, and dependencies
6. Optional: Use the **Option Seeder** under **Extensions → Option Seeder** for automatic assignment via product streams

## Documentation Contents

- [Configuration Settings](configuration/settings.md) - All available settings explained
- [Usage Guide](usage/usage.md) - How to use all plugin features
- [How-To Guide](how_to.md) - Step-by-step workflows for common tasks
- [Changelog](changelog.md) - Version history and updates

## Support

This plugin is developed and maintained by **Web Labels Webdesign GmbH**.

For questions or support requests, please contact:
- **Shopware Store**: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- **Documentation**: [https://docs.web-labels.de](https://docs.web-labels.de)

### Version Support

**Note**: We follow the official Shopware release cycle. New updates and features are only provided for Shopware-supported versions. Security updates are provided only as long as Shopware provides them for the respective version.
