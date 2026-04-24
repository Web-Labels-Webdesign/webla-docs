# Manufacturer Pages

> Automatically creates SEO-optimized manufacturer pages with overview, detail view, product filters, sorting and sitemap integration for your Shopware store.

## Overview

The **Manufacturer Pages** plugin extends your Shopware store with full manufacturer pages — without you having to manually create categories, landing pages, or redirects.

For every manufacturer assigned to a product in your store, a dedicated detail page listing all associated products is provided automatically. The plugin also registers two CMS elements (manufacturer overview as a block and element) that you can drag into your Shopping Experiences.

The target audience are shop operators whose assortment is strongly structured by brand or manufacturer, and who want to offer customers a fast, manufacturer-filtered shopping experience.

## Main Features

- **Automatic manufacturer pages**: Every manufacturer gets a dedicated detail page at `/manufacturer/{id}` (or your SEO URL) — no manual upkeep.
- **Alphabetical manufacturer overview**: CMS element with A–Z grouping and letter filter for the storefront.
- **Featured manufacturers (Top)**: Selected manufacturers can be prominently highlighted above the overview.
- **SEO URL generation**: Optional automatic generation of speaking URLs per language (e.g. `/brand/acme` instead of `/manufacturer/{id}`) via a scheduled task.
- **Sitemap integration**: All manufacturer pages are automatically included in the Shopware sitemap.
- **Product filters & sorting**: All Shopware standard filters and sorting options work on the manufacturer page, just like on a category listing.
- **Hide manufacturer**: Individual manufacturers can be fully excluded from overview and sitemap via a checkbox field.
- **Text block per manufacturer**: Additional free-form text below the product listing (HTML-capable) per manufacturer.

## Requirements

- Shopware version: **6.6.0** or higher (up to and including 6.7.x)
- PHP version: **8.2** or higher
- Products must be assigned to a product manufacturer for that manufacturer to appear in the overview.

## Compatibility

This plugin supports multiple Shopware versions from a single codebase:

| Shopware Version | Status        | Notes                                                      |
| ---------------- | ------------- | ---------------------------------------------------------- |
| 6.6.x            | ✅ Supported  | Administration runs on Vue 2.7                             |
| 6.7.x            | ✅ Supported  | Administration runs on Vue 3 / Meteor components           |

## Quick Start

1. Install the plugin via the Plugin Manager or with Composer.
2. Activate the plugin under **Extensions → My Extensions**.
3. Open the configuration under **Extensions → My Extensions → Manufacturer Pages → Configure**.
4. Optional: Create a category "Manufacturers" in the catalog and link it in the settings (only needed for breadcrumbs).
5. Insert the CMS element **Manufacturer Overview** into a Shopping Experience of your choice (e.g. a landing page "Brands").
6. Optional: Enable **SEO URL generation** and set a fallback prefix (e.g. `brand`).

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — all available settings explained
- [Usage Guide](usage/usage.md) — how to use all plugin features
- [How-to Guides](how_to.md) — step-by-step workflows
- [Changelog](changelog.md) — version history and updates
