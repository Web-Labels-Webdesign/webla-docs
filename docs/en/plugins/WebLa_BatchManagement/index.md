# Batch-Management

> Manage batches, expiry dates and stock levels from the Shopware admin. Includes automated batch history per order, scheduled stock updates and support for product compositions.

## Overview

Batch-Management extends Shopware 6 with full batch tracking for products with limited shelf life or traceable lots. You can create any number of batches per product, each with its own expiry date, quantity and optional batch number.

As soon as an order reaches a configurable state, matching batches are automatically consumed in the required quantity. A scheduled background task deactivates expired batches and can optionally recalculate product stock based on remaining batch quantities. Products with compositions (e.g. a product assembled from multiple components) are handled as well.

The plugin targets shops selling batch-tracked goods — food, cosmetics, pharmaceuticals, chemicals or any product requiring expiry tracking or lot traceability.

## Key Features

- **Batch management in the admin**: Dedicated module under *Catalogues* for creating, editing and deleting batches per product.
- **Expiry date per batch**: Every batch carries an expiry date. Expired batches are deactivated automatically.
- **Automatic batch consumption on order state**: When an order reaches the configured state, batches are consumed based on order quantity and product weight.
- **Reversible consumption**: When an order transitions into a configured revert state, the consumed quantities are returned to their batches automatically.
- **Per-order batch history**: Each batch lists the orders that consumed it, with order number, line item and consumed quantity.
- **Product compositions**: A product can be composed of several components. Batch consumption and stock calculation then span all components.
- **Scheduled stock updates**: Every 10 minutes a background task reviews batches and optionally recalculates product stock.
- **Variant support**: For products with variants, stock is calculated per variant.

## Requirements

- Shopware Version: 6.6.0 to 6.7.x
- PHP Version: 8.2 or higher
- Active scheduled task processing (Message Queue worker)

## Quick Start

1. Install the plugin via the Plugin Manager or with `composer require webla/batchmanagement`.
2. Activate the plugin under **Extensions → My Extensions**.
3. Open **Extensions → My Extensions → Batch-Management → … → Configure** and choose the order state that should trigger batch consumption.
4. Switch to **Catalogues → Batches** and create your first batches with quantity and expiry date.
5. Optional: Enable stock calculation based on batches under *Stock Configuration*.

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — All available settings explained
- [Usage Guide](usage/usage.md) — How to use all plugin features
- [How-To Guide](how_to.md) — Data flow and step-by-step workflows
- [Changelog](changelog.md) — Version history and updates

## Support

- Manufacturer: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- Support portal: <https://www.web-labels.de/support>
