# SplitCommission – Division of Line Items into Parts

> Allows customers to add individual commission notes to cart line items and split them into separate positions — while fully preserving tiered/bulk pricing.

## Overview

The **SplitCommission** plugin is designed for B2B merchants who need to let customers assign individual commission notes or order references to cart items. For example, a customer ordering 10 units of a product can mark 3 as "Branch North" and 7 as "Branch South" — each appearing as a separate, labeled line item in the cart.

The standout feature: bulk pricing is fully preserved. The plugin adds up all quantities of the same product across split positions and applies the correct tiered price to every position — regardless of how many individual commented items were created.

Optionally, a global comment field for the entire order can be activated, visible on the checkout confirmation page and stored with the order in the Shopware admin.

## Key Features

- **Commission note on the product detail page**: Customers can enter a comment directly when adding an item. The product is added to the cart as its own labeled position.
- **Split line items in the cart**: Existing cart items without a comment can be split and labeled inline from the cart or off-canvas cart.
- **Inline comment editing**: Already-set commission notes can be edited directly in the cart without a page reload.
- **Off-canvas cart support**: All comment functions are also available in the slide-out cart sidebar.
- **Global order comment**: An optional single comment field for the entire order on the checkout confirmation page.
- **Display on order confirmation and in admin**: Commission notes appear on the order success page and in the Shopware admin order detail view.
- **Bulk pricing preserved**: All quantities of the same item across split positions are summed for tiered price calculation.

## Requirements

- Shopware Version: 6.6.0 or higher (up to 6.7.x)
- PHP Version: 8.2 or higher

## Quick Start

1. Install the plugin via the Plugin Manager or Composer.
2. Activate the plugin in **Extensions → My Extensions**.
3. Configure basic settings in **Extensions → My Extensions → SplitCommission → Configure**.
4. Choose whether the plugin should be active for all products or only selected ones.
5. Optionally enable the global order comment field for the checkout page.

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — All available settings explained
- [Usage Guide](usage/usage.md) — How to use all plugin features
- [How-To Guide](how_to.md) — Step-by-step workflows
- [Changelog](changelog.md) — Version history and updates

## Support

For questions or issues, contact Web Labels Webdesign GmbH via the Shopware Store.
