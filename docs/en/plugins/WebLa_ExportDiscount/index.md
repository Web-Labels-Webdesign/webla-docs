# Shopping Feed with Unique Discounts

> Show discounted prices only to visitors from price comparison sites - ideal for Google Shopping, idealo, billiger.de and more.

## Overview

This plugin allows you to display a special discounted price to visitors who arrive at your store through price comparison sites like Google Shopping, idealo, or billiger.de. The key feature: the discount applies **only to the clicked product**. All other products in your store keep their regular price.

This strategy enables you to stay competitive in price comparisons without sacrificing your entire margin. Visitors coming through the feed see the discounted price on the product page, in the cart, and throughout the entire checkout process. If they purchase additional items, they pay the regular price - which increases your average order value.

The plugin supports both global discounts (percentage or absolute) and individual prices per item, making it ideal for use with repricing tools.

## Key Features

- **Selective Discounting**: Discounted prices only for the product the visitor clicked from the feed
- **Global Discount**: Configurable percentage or absolute discount for all products in the feed
- **Item-Specific Price**: Individual price per product overrides the global discount (ideal for repricing tools)
- **30-Day Price Display**: Automatically writes the lowest price to Shopware's "Lowest price last 30 days" field
- **Tiered Pricing Support**: Works with advanced prices and quantity discounts
- **Multiple Products Per Session**: Optionally allow multiple discounted products in one session
- **Automatic Cleanup**: Expired sessions are automatically removed

## Requirements

- Shopware Version: 6.5.0 or higher (up to 6.7.x)
- PHP Version: 8.1 or higher
- A configured product export (Product Comparison Sales Channel)

## Quick Start

1. Install the plugin via Plugin Manager or Composer
2. Activate the plugin in **Extensions → My Extensions**
3. Open your product export in **Sales Channels → [Your Export Channel] → Product Comparison**
4. Configure the discount type and discount value in the section below the Dynamic Product Stream
5. Adjust your export template:
   - Add `'source': export.id` to your product URLs
   - Use `product.extensions.discount['discount'].last` for the sale price

## Documentation Contents

- [Configuration Settings](configuration/settings.md) - All available settings explained
- [Usage Guide](usage/usage.md) - How to use all plugin features
- [How-To Guide](how_to.md) - Step-by-step workflows
- [Changelog](changelog.md) - Version history and updates

## Support

For questions or issues, please use the Shopware Store ticket system. We respond quickly and are happy to help.

**Manufacturer**: Web Labels Webdesign GmbH
**Shopware Store**: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
