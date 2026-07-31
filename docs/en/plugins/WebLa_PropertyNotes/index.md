# Property notes in filters, table and variant selection

> Short explanations right beside your properties: in the category filter, the property table and the variant picker. Shown as a tooltip, a dialog or text on hover.

## Overview

Property names are shorthand for anyone who already knows the product. IP68, Shore A 70, 19.5 microns: precise, and meaningless to most customers. A customer who cannot tell what a filter or a variant stands for tends to pick nothing at all.

This plugin puts a short explanation exactly where the question comes up. You write the text once, on the property group or on a single value, and then decide where in the shop it appears.

The texts live as custom fields on your existing properties. There is no separate place to manage them, no template changes are needed, and the notes are translatable like any other custom field.

## Key Features

- **Notes on groups and on values**: One text on the group *Material*, a separate one on the value *Merino wool*.
- **Three display locations**: Category filter, property table on the product page, and variant selection.
- **Switched per note**: Four switches decide where each note appears. All off means invisible, so texts can be prepared in peace.
- **Selectable display type**: In the variant selection, a tooltip or a dialog for groups, an info icon or text revealed on hover for single values.
- **Rich text**: Links, lists and images from the editor you already know.

## Requirements

- Shopware: 6.6.0 up to and including 6.7.x
- PHP: 8.2 or newer
- Storefront: The notes appear in the bundled Storefront and in themes inheriting from it.

## Compatibility

One package covers every supported Shopware version. The difference only concerns the administration, not what customers see.

| Shopware Version | Status      | Notes                                                                     |
| ---------------- | ----------- | ------------------------------------------------------------------------- |
| 6.6.x            | ✅ Supported | The plugin adds the note fields to the single property value              |
| 6.7.0 – 6.7.1    | ✅ Supported | Same as 6.6                                                               |
| 6.7.2 and newer  | ✅ Supported | Shopware renders the fields on the property value itself, the plugin stands back |

The fields look and behave the same in every case.

## Quick Start

1. Install and activate the plugin under **Extensions → My Extensions**. The fields are added to your properties during installation.
2. Open **Catalogues → Properties** and pick a group, for example *Material*.
3. Scroll to the **Custom fields** card, section **Property Information**, and enter your text in the **Information** field.
4. Below it, turn on the switches for the places the note should appear, then click **Save**.
5. Open a product or category page in your shop and check the info icon.

## Documentation Contents

- [Configuration Settings](configuration/settings.md) – Every field of a note explained
- [Usage Guide](usage/usage.md) – Display locations, display types and troubleshooting
- [How-To Guide](how_to.md) – Step-by-step workflows
- [Changelog](changelog.md) – Version history

## Support

- Manufacturer and support: [Web Labels Webdesign GmbH in the Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- Documentation: [docs.web-labels.de](https://docs.web-labels.de)
