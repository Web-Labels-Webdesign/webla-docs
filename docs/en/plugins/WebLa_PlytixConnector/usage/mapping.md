# Field mapping and variants

> Part of the Plytix Connector. [Back to the usage guide](./usage.md)

## Overview

In Plytix you give every attribute in a channel an output label, such as `Product Title` or `Price (€)`. Those labels are the keys in the feed. The plugin cannot know what your fields are called, so you tell it in the **Field mapping** card.

**Location**: Catalogues → Plytix Connector → open a channel → **Field mapping** card

The defaults are the labels Plytix uses for the fields every channel export has. A hint below each field shows its default. Variant options, properties, further product fields and translations have no default: you map variant options, properties and product fields such as dimensions or tags on the [mapping page](#variant-options-and-properties) from the labels a sync run found in your feed, and translations in the **Translations** list. **Reset mapping to defaults** restores the defaults of the fields and empties the translations; variant options and properties stay. Nothing changes until you click **Save**.

## Rules

**Choose the labels from the list.** Each field offers the labels of the last sync run, so a label you removed can be picked again. Before the first run, or for a label no run has found yet, type it. Upper and lower case, spaces and special characters must match Plytix. If you rename an output label in Plytix, update the mapping.

**Several labels: the first one with a value wins.** You can choose several labels per field. For each product, the plugin takes the first one that has a value. The default for the name is `Product Title, Label`: if a product has no Product Title, its Label is used.

**Empty field: Shopware data stays untouched.** If a field is empty in the mapping, the plugin never writes it. Whatever you enter in Shopware stays. This applies to **Name**, **Description**, **Short description**, **Price**, **EAN / GTIN**, **Status**, **Maximum order quantity**, **Manufacturer**, **Categories**, **Cross-selling**, the **Properties**, and to each field of each translation separately. For images, **Cover image** and **Images** must both be empty. If either one is filled, the plugin manages the images.

There are limits:

- **SKU (product number)** must not be empty.
- Shopware needs a name and a price for a new product. If **Name** or **Price** is empty, the plugin keeps updating existing products, but new products fail with `PRODUCT_WRITE_FAILED`.
- The plugin always manages **Variant options**.

**Mapped, but no value: the value is cleared.** If a field is mapped and a product in the feed has no value for it, the plugin clears the field in Shopware, because Plytix is the source. The exceptions: a missing status means active, and a main product without a name or price is skipped with its variants (`MAPPING_NAME_MISSING`, `MAPPING_PRICE_MISSING`). For a variant, an empty value means it inherits its main product's value.

## The fields

| Field in the administration | Default | Target in Shopware | Notes |
| --- | --- | --- | --- |
| SKU (product number) | `SKU` | Product number | The identifier. Existing Shopware products with the same product number are taken over instead of duplicated. |
| Parent SKU | `Variant of` | Main product of a variant | Decides the variant structure. |
| Variant SKUs | `Variants` | Only used as a check | Contradictions with "Variant of" are reported as warnings. |
| Name | `Product Title`, `Label` | Name | Required for main products. |
| Description | `Long Description` | Description | Line breaks are kept as line breaks. |
| Short description | `Short Description` | Custom field "Short description" in the set "Plytix" | See below. |
| Price | `Price (€)` | Price | See below. |
| EAN / GTIN | `GTIN` | EAN | |
| Manufacturer | `Brand` | Manufacturer | Found by name, or created. |
| Categories | `Categories` | Categories | Paths like `Root>Clothing>T-Shirts`, see [Category root](../configuration/settings.md#category-root-in-the-feed). |
| Cover image | `Main Image`, `Thumbnail` | Cover image | Always part of the gallery too. |
| Images | `Assets` | Image gallery | Downloaded in the background. |
| Status | `Status` | Active | See [Status values for active products](../configuration/settings.md#status-values-for-active-products). |
| Maximum order quantity | `Maximum Order Quantity` | Maximum order quantity | Must be a whole number above 0. |
| Cross-selling | `Cross-sell` | Cross-selling | Values in the form `SKU#quantity`; the quantity is ignored. |

### Prices

The price must be a plain number with a dot as decimal separator, such as `29.99` or `30`. Values like `29,99`, `1,299.00` or `29.99 €` are rejected (`MAPPING_PRICE_INVALID`).

Every time a product is written, its price is replaced as a whole. Prices in other currencies that you added by hand in Shopware are lost. The currency of the feed prices, and whether they are gross or net, is set on the channel.

### Short description

Shopware has no field of its own for a short description. The plugin therefore creates a translatable custom field: set "Plytix", field "Short description". You find it with the product's custom fields. The storefront does not show it on its own; your theme has to output it.

### Images

The plugin downloads images in the background through the `low_priority` queue. Each image URL is downloaded once and reused for every product that contains it. The images go into a "Plytix" folder below the product media folder in the media manager and use its thumbnail sizes. A file may be 50 MB at most.

Until the downloads are done, a product may show in the shop without a gallery or with part of it. In our tests 184 images took about one and a half minutes.

### Cross-selling

The plugin writes cross-selling only once all products of a run exist. Each product gets one cross-selling of the type product list, named after the setting in the [Import settings](../configuration/settings.md#cross-selling-name). Cross-sellings you create yourself in Shopware are not touched.

Targets must be imported by the same channel. Others are skipped with `CROSS_SELLING_TARGET_UNKNOWN`. If an entry points to the middle level of a three-level hierarchy, the cross-selling points to its main product instead, because middle levels do not exist in Shopware.

## Variant options and properties

Variant options and properties have a page of their own, because a feed often has 40 labels or more. It lists the labels that the last sync run found in your feed.

**Location**: open a channel → **Field mapping** card → **Map feed labels**

### The flow

1. **First sync**: Save the channel and start a sync. It imports the products without variant options and properties and collects the labels of the feed. As long as no run has collected them, the page shows **No feed labels yet** with a **Sync now** button. Once the run has finished, the labels appear without reloading the page.
2. **Map the labels**: Decide for each label what it becomes in Shopware, see below.
3. **Save and sync**: The plugin saves the mapping and starts a sync right away. Because the mapping changed, this run rewrites all products of the channel with the new variant options and properties. If a sync is already running, the new one starts as soon as it ends. A message tells you which of the two happened, and the **Runs** card at the bottom shows the progress. **Save** alone stores the mapping without a sync; the next scheduled, webhook or manual sync applies it.

### The list

Each row is one feed label:

- **Feed label**: the label, its value type (**Single** or **List**) and up to five sample values
- **Records**: how many products have a value, and how many of them are variants
- **Use as**: **Not assigned**, **Variant option**, **Property**, **Product field**, **Custom field** or **Ignore**
- **Target in Shopware**: the property group, product field or custom field the values go into

Labels you have already mapped come first, then every label that no field, translation, variant option or property uses yet, in alphabetical order. Labels of the fixed fields and translations in the **Field mapping** card are not listed.

The search field and the filter (**All**, **Not assigned**, **Assigned**, **Ignored**, each with a count) help with long lists. To ignore many labels at once, tick their rows and click **Ignore selected**. Changed rows are marked **Changed**, and nothing is applied until you click **Save** or **Save and sync**.

**Suggestions**: Below the selection the page suggests a use. A label with short values that repeat across products is suggested as a variant option if its values differ between the variants of one main product, otherwise as a property. Identifiers, numbers, links and long texts get no suggestion. As long as the channel has no variant option yet, the suggested variant options are pre-selected. Check them before you save.

**Property group**: Pick an **Existing group** to put the values into exactly that group, whatever it is called. Otherwise enter a name: the plugin uses the group with that name, or creates it. Empty means the same as the feed label. Each group can be used only once for variant options and once for properties. Values are found by name within their group, or created. If you rename a group or value that the plugin created, your name stays.

If an existing group you picked is deleted later, every run reports `PROPERTY_GROUP_MISSING` and imports nothing for that label. Pick another group on the mapping page.

**Ignore**: An ignored label no longer appears as unassigned, also after later runs. Ignoring changes nothing in the shop, so the products are not rewritten. To see it again, set it back to **Not assigned**.

### Variant options

**Variant options** are the attributes your variants differ by, such as colour and size. The plugin builds the variant selection on the product page from them. A variant without a value for any variant option cannot be selected in the storefront and is reported with `MAPPING_VARIANT_OPTIONS_MISSING`. The plugin always manages variant options, even when none are mapped.

> **Products that already exist in your shop**: If the channel takes over products that already have variant options in Shopware, the first sync removes those options, because none are mapped yet. The sync after saving the mapping assigns them again. Run the first sync before the products are visible to customers, or at a quiet time.

> **Mapping everything as a property**: A label is either a variant option or a property. If no label is a variant option, existing variant options and the variant selection are removed with the next sync, and new variants are created without options, so customers cannot choose them. The mapping page warns about it, and every run reports `MAPPING_VARIANT_OPTIONS_UNMAPPED`. Values of variant options can be used as storefront filters as well, so they need no property on top.

### Properties

**Properties** are filterable product attributes such as material or gender. Several values of one attribute become several property values. If you remove a property, the next run removes that group's assignments from the products. If no property is mapped, the plugin does not touch properties.

Plytix labels such as `Option 1 Name - Size` do not work as variant options. In the demo feed they even hold swapped values. Always map the attributes that carry the actual values.

### Product fields

**Product field** puts a label's value into a regular Shopware product field. Pick the field in **Target in Shopware**. Each field takes one label.

| Product field | Feed value | Notes |
| --- | --- | --- |
| Width, Height, Length | Number | Choose the unit of the feed values: mm, cm or m. Shopware stores millimetres. |
| Weight | Number | Choose kg or g. Shopware stores kilograms. |
| Manufacturer product number | Text | |
| Min. order quantity, Purchase steps | Whole number from 1 | |
| Selling unit, Basic unit | Number | |
| Packaging unit, Packaging unit plural, Meta title, Meta description | Text up to 255 characters | Translated field, see below |
| SEO keywords | Text | Translated field; a list is joined with commas |
| Search keywords | Text or list | Translated field; each list entry becomes one keyword |
| Release date | Date such as `2026-10-30` | Also accepts a date with time, such as `2026-10-30T10:00:00+02:00` |
| Free shipping, Highlight product, Clearance sale | Yes/no | `true`/`false`, `yes`/`no`, `1`/`0`, upper or lower case |
| Tags | Text or list | Each list entry becomes one tag. Tags are found by name, or created. Tags you add by hand to a product are removed on the next write, as long as Tags is mapped. |
| Tax rate | Text or number | Assign a Shopware tax rate to each feed value, see [Tax rate](#tax-rate) |

Numbers may use a dot or a comma as decimal separator, such as `12.5` or `12,5`, but no unit and no thousands separator. A value the plugin cannot read, or a text that is too long, is reported with `MAPPING_FIELD_INVALID` and not imported; the rest of the product is.

The usual rules apply: a field that is not mapped stays untouched, a mapped field without a value is cleared, and a variant with the same value as its main product inherits it. **Min. order quantity**, **Purchase steps** and the yes/no fields cannot be empty on a main product; without a value, they get Shopware's default (1, or no).

The translated fields only take the feed value for the base language of the channel and, if it is another language, the system default language. Translations of these fields in other languages are not imported yet; whatever Shopware has there stays.

### Custom fields

**Custom field** puts a label's value into a custom field that already exists in your shop. The list offers the active custom fields of every set assigned to products (Settings → System → Custom fields). Each custom field takes one label.

| Custom field type | Feed value | Notes |
| --- | --- | --- |
| Text, color | Text, number or list | A list is joined with commas. Shopware removes HTML tags from text fields. |
| Text editor | Text or HTML | Line breaks become `<br>` |
| Number | Number | Dot or comma as decimal separator, negative numbers are allowed. A whole number field takes whole numbers only. |
| Checkbox, switch | Yes/no | `true`/`false`, `yes`/`no`, `1`/`0` |
| Date | Date such as `2026-10-30` | Also with time |
| Selection | Text | Must match an option by its value or one of its labels, upper or lower case. Options are never created. |
| Multiple selection | Text or list | As above; options that match are imported even when others do not |

Media, entity and price fields cannot be mapped. The plugin's own short description field is filled by **Short description** in the **Field mapping** card.

The usual rules apply: a custom field that is not mapped stays untouched, a mapped one without a value is cleared, and a variant with the same value as its main product inherits it. Like the translated product fields, custom fields only take the feed value for the base language and the system default language. If you remove the mapping, the values stay.

A value that does not fit is reported with `MAPPING_CUSTOM_FIELD_INVALID`. If a mapped custom field is deleted or deactivated, every run reports `CUSTOM_FIELD_MISSING` and imports nothing for that label.

> **User roles**: Users without administrator rights need the plugin's permissions to be saved again in their role before they see the custom fields.

### Tax rate

Map **Tax rate** when one catalogue holds products with different tax rates, such as merchandise and food. The plugin lists up to five values the last sync found for the label. Choose a Shopware tax rate for each of them; with **Add feed value** you can enter further values. Upper and lower case do not matter. The names in Plytix and Shopware need not match.

- A product whose value is empty gets the tax rate of the channel. A value without a tax rate does too, and is reported with `MAPPING_TAX_UNMAPPED`.
- A variant without a value inherits the tax rate of its main product. A variant with another tax rate than its main product gets its own.
- Gross and net prices are calculated with the product's tax rate.

## Translations

Plytix has no languages in the feed. Each language is an attribute of its own, such as `Spanish Product Title`. In the **Translations** list you assign those attributes to a language:

1. Click **Add locale**.
2. Under **Locale**, enter the language code as Shopware uses it, for example `es-ES` or `fr-FR`.
3. Choose the feed labels for **Name**, **Description** and **Short description**. The plugin does not write fields you leave empty in that language, so whatever Shopware has there stays. If a field is mapped but a product has no value for it, the translation is cleared and Shopware shows the default language text.

Only these three fields are translated. The language must exist in Shopware, otherwise the plugin skips it with `TRANSLATION_LANGUAGE_MISSING`. The default mapping has no translations. Channels created before version 1.0.0 keep their `es-ES` row; remove it if you do not sell in Spanish, so the warning does not show up in every run.

## How variants are built

Shopware has two levels: a main product and its variants. Plytix allows three, for example `TSH-11470` → `TSH-11470-W` (colour) → `TSH-11470-W-XL` (size). The plugin turns that into two levels:

- The top level becomes the main product.
- The bottom level becomes the variants.
- The middle level is not created as a product. Its values pass down to the variants below it: if a variant's field is empty, the plugin takes the middle level's value.

A product without variants becomes a normal standalone product.

### Inheritance

If a variant has the same value as its main product, the plugin writes that value as empty on the variant. Shopware then inherits it from the main product, as it does for variants. This applies to texts, price, EAN, status, maximum order quantity, product fields, manufacturer, categories, properties, images and cross-selling. A variant with an empty field inherits as well. If you later change the main product's value in Plytix, it changes for all inheriting variants too.

That is also why a variant's name is only set when it differs from its main product's name.

### Several values in one variant option

In Shopware a variant can have only one value per group. Plytix allows, say, two colours on one variant. The plugin joins the values into one: `Multicolor` and `White` become `Multicolor / White`.

### Variants whose main product is not in the feed

If the main product is missing from the feed, the plugin attaches the variant to its previous main product if this channel imported it before, otherwise to the already imported product with the SKU from "Variant of". If neither exists, the variant is skipped with `HIERARCHY_PARENT_NOT_IN_FEED`. So switch on the export of superior levels in Plytix, see [Set up the Plytix channel](../how_to.md#how-to-set-up-the-plytix-channel).

## FAQ

**Q: I renamed an attribute in Plytix, and now data is missing.**
A: The feed now uses the new label. Enter it in the field mapping and save. The next run rewrites all products.

**Q: Can I maintain the description in Shopware instead of Plytix?**
A: Yes. Clear the **Description** mapping and save. From then on the plugin writes no description, and your texts in Shopware stay. Translated descriptions are still written as long as they are mapped under **Translations**. The same works for every other field.

**Q: How do I import the colours into the colour group my shop already has?**
A: On the mapping page, set the colour label to **Variant option** and pick your group under **Existing group**. The plugin then uses that group, whatever it is called, and adds missing values to it.

**Q: A label I do not need keeps showing up on the mapping page.**
A: Set it to **Ignore** and save. Ignored labels stay hidden under the filter **Ignored** and do not trigger a rewrite of the products.
