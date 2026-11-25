**Changelog — Plytix Connector**

All notable changes to the Plytix Connector for end users.

---

# 1.0.0

_Released 2026-11-25_

**New Features**

- **Plytix channels**: Connect several NDJSON channels from Plytix, each with its own feed URL, sales channels, tax rate, currency and field mapping.
- **Products and variants**: Imports standalone products, main products and variants. Three-level Plytix hierarchies are mapped onto Shopware's two levels, and variants inherit values they share with their main product.
- **Field mapping**: Freely map Plytix output labels to Shopware fields, variant options, properties and translations. The fields offer the labels of the last sync to choose from.
- **Related data**: Creates and assigns categories, manufacturers, properties, images and cross-selling. Images are downloaded in the background, each URL only once.
- **Sync**: Start a sync with a click, on a schedule, through a Plytix webhook or with the console command `plytix:channel:sync`. Unchanged feeds and products are skipped.
- **Webhook during a run**: A webhook call that arrives while a run is active is remembered, and another run starts automatically once the current one ends.
- **Removals**: Optionally deactivates products that are no longer in the feed, guarded by an adjustable safety threshold.
- **Log**: Every run shows its status, progress and counters. Issues can be filtered by severity, code and SKU. Runs are deleted automatically after 180 days.
- **Mapping page**: Variant options and properties are mapped on a page of their own. It lists every label of your feed with sample values, record counts and a suggestion, with search, filter and bulk ignore. **Save and sync** starts a sync that applies the mapping to all products; if a sync is running, the new one follows right after it. **Save** alone applies it with the next sync.
- **Existing property groups**: Variant options and properties can go into an existing property group of your shop, whatever it is called.
- **Ignored labels**: Labels you do not need can be ignored, so they no longer show up as unassigned.
- **Product fields**: Feed labels can go into further Shopware product fields: dimensions and weight (with the unit of the feed), manufacturer product number, purchase settings and units, release date, free shipping, highlight, clearance sale, meta title and description, SEO keywords, search keywords and tags.
- **Custom fields**: Feed labels can go into existing custom fields of products.
- **Several sales channels**: A channel can list several sales channels, each with the root category its categories are created below. Removing one takes the products out of it.
- **Tax rate per product**: The tax rate can be mapped to a feed label on the mapping page, with a Shopware tax rate for each feed value.
- **Messages in your language**: Issues and run errors are shown in the language of the administration. The issue code stays in English.
- **Unsaved changes**: The channel and mapping page ask before you leave them, or start a sync, with unsaved changes.
- **Missing variant options**: The mapping page and every run warn when the feed has variants but no variant option is mapped.
- **Compatibility**: One version for Shopware 6.5.7 to 6.7.
