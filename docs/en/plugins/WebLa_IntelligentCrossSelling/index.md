# Intelligent Cross-Selling

> Automatic product recommendations based on weighted properties like color, material, or size. Boost your revenue without any manual maintenance effort.

## Overview

The "Intelligent Cross-Selling" plugin revolutionizes how your Shopware shop recommends related products. Instead of manually creating cross-selling rules for each product, the plugin automatically analyzes the shared properties of your products and suggests matching alternatives.

The principle is simple: You define once which product properties (e.g., color, material, size) are relevant for recommendations and how important each property is. The plugin then automatically calculates the best recommendations for each product based on matching properties and their weightings.

The more properties a product shares with another and the higher the weighting of those properties, the more likely it is to be shown as a recommendation. This ensures your customers always receive relevant product suggestions – without any manual maintenance effort.

## Key Features

- **Automatic Product Recommendations**: No more manual maintenance of cross-selling rules – the plugin automatically identifies matching products
- **Weighted Properties**: Define which product properties (color, material, size, etc.) should be weighted and how strongly
- **Flexible Filter Options**: Restrict recommendations to the same category, main articles only, or variants only
- **Stock Filter**: Optionally recommend only products with available stock
- **Multilingual Title**: The cross-selling section title can be customized per language
- **Performance Optimized**: Intelligent caching ensures fast loading times
- **Seamless Integration**: Complements native Shopware cross-selling functionality

## Requirements

- Shopware Version: >= 6.5.0 < 6.8.0
- PHP Version: 8.1 or higher
- Product properties must already be set up in your shop

## Quick Start

1. Install the plugin via Plugin Manager or Composer
2. Activate the plugin in **Extensions → My Extensions**
3. Open the plugin configuration at **Extensions → Intelligent Cross Selling**
4. Enable the plugin using the "Active" switch
5. Add at least one property weight (e.g., "Color" with 80%)
6. Save the settings

Intelligent product recommendations will now automatically appear on your product detail pages.

## Documentation Contents

- [Configuration Settings](configuration/settings.md) - All available settings explained
- [Usage Guide](usage/usage.md) - How to use all plugin features
- [How-To Guide](how_to.md) - Step-by-step workflows
- [Changelog](changelog.md) - Version history and updates

## Support

For questions or issues, please contact:

- **Manufacturer**: Web Labels Webdesign GmbH & BuildIT Consulting
- **Support**: [Shopware Store - Web Labels](https://store.shopware.com/web-labels-webdesign-gmbh.html)
