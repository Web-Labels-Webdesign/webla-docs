# Category Sorter

> Alphanumerically sort the direct subcategories of a selected category — right in the administration.

## Overview

Category Sorter adds a page to the Shopware administration that lets you put a category's
subcategories into a natural, alphanumeric order (A–Z) with a single click. There is no
need to drag categories into place by hand.

Sorting is number-aware, so for example "Item 2" is placed before "Item 10". Optionally,
the entire subtree is sorted down to the deepest level. For recurring tasks, sorting can
also be automated on a schedule.

The plugin only changes the **order** of existing categories. It never creates, deletes or
re-parents categories.

## Key Features

- **One-click sorting**: Orders a category's direct subcategories alphanumerically (A–Z).
- **Natural ordering**: Case-insensitive and number-aware ("Item 2" before "Item 10").
- **Recursive mode**: Optionally sorts the entire subtree down to the deepest level.
- **Multi-category selection** *(In-App Purchase)*: Sorts several categories at once
  instead of one.
- **Automatic sorting** *(In-App Purchase)*: Keeps selected categories sorted on a
  configurable schedule.

## Requirements

- Shopware version: 6.6 – 6.7 (`shopware/core: >= 6.6.0 < 6.8.0`)
- PHP version: 8.2 or higher

## Compatibility

The plugin supports multiple Shopware versions from a single codebase:

| Shopware version | Status       | Notes           |
| ---------------- | ------------ | --------------- |
| 6.6.x            | ✅ Supported | Fully supported |
| 6.7.x            | ✅ Supported | Fully supported |

## Quick Start

1. Install and activate the plugin under **Extensions → My extensions**.
2. Clear the cache when prompted.
3. Open **Settings → Plugins → Category Sorter**.
4. Pick a category from the tree and click **Sort subcategories**.

## Using the Plugin

The plugin page has two cards:

- **Sort subcategories** – Pick a category from the tree, optionally enable **Sort
  recursively**, and apply the order immediately via **Sort subcategories**.
- **Automatic sorting** – With the matching In-App Purchase, sort the saved selection
  automatically on a defined **Run interval (seconds)**.

The **Save** button in the top right stores the category selection, the recursive option
and the interval. For detailed workflows, see the [How-To guide](how-to.md).

## In-App Purchases

Without a purchase, the plugin sorts **one** category manually from the admin page — for
free. The paid tiers are enforced both in the UI and server-side:

| Identifier       | Unlocks                                                       |
| ---------------- | ------------------------------------------------------------- |
| `multiselect`    | Selecting and sorting multiple categories at once.            |
| `scheduled-sort` | The automatic scheduled task and its editable run interval.   |

When `multiselect` is not active, only the first category is read, displayed, sorted and
saved. A previously saved, larger selection is retained and restored if the purchase is
reactivated.

## Documentation Contents

- [How-To Guide](how-to.md) – Step-by-step workflows
- [Changelog](changelog.md) – Version history and updates

## Support

- Documentation: [docs.web-labels.de](https://docs.web-labels.de/)
- Manufacturer: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
