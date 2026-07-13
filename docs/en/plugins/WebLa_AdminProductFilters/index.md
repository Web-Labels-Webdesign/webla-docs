# Custom fields in the admin product overview

> Shows every product custom field as an optional column in the Shopware admin product overview.

## Overview

The product overview in the Shopware admin shows only a fixed set of columns – name, manufacturer, price, status and a few more. Everything you maintain in custom fields (supplier numbers, internal notes, delivery times, ERP identifiers) stays invisible until you open each product individually.

This plugin extends the product overview with all custom fields assigned to your products. Every custom field becomes available as an additional column, and you decide which ones are shown.

The plugin is aimed at shop operators and staff who work with the product catalogue every day – purchasing, editorial and support. It extends the administration only; nothing changes in the storefront.

## Key features

- **All custom fields available automatically**: Every custom field whose field set is assigned to the *Products* entity is offered as a column – no mapping, no maintenance.
- **You decide what is visible**: All added columns start hidden. The product overview stays unchanged until you enable a column yourself.
- **Stored per user**: The column selection is part of Shopware's standard product list settings, so every admin user keeps their own view.
- **Resizable**: Every added column can be resized just like a native one.
- **Translated column titles**: Columns are labelled *Field set: Field* in the language of the administration, with an automatic fallback when a translation is missing.
- **New fields appear instantly**: Create a new custom field and it is available as a column right away – no plugin update required.

## Requirements

- Shopware version: 6.6.0 to 6.7.x
- At least one custom field whose field set is assigned to the *Products* entity

## Compatibility

This plugin supports multiple Shopware versions from a single codebase. There is only one installation file for both versions.

| Shopware version | Status       | Notes                       |
| ---------------- | ------------ | --------------------------- |
| 6.6.x            | ✅ Supported | From plugin version 4.1.0   |
| 6.7.x            | ✅ Supported | From plugin version 4.0.0   |

## Quick start

1. Install the plugin under **Extensions → My extensions**.
2. Activate the plugin.
3. Reload the administration once so the new columns are registered.
4. Open **Catalogues → Products** and enable the custom fields you want via the column settings of the table.

No configuration is required – the plugin has no settings screen.

## Documentation contents

- [Configuration settings](configuration/settings.md) – notes on configuration
- [Usage guide](usage/usage.md) – how to use all plugin features
- [How-to guides](how_to.md) – step-by-step workflows
- [Changelog](changelog.md) – version history and updates
