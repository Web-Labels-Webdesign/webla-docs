# How-to guide

Step by step from the Plytix channel to the first import.

---

## How the plugin works

```
Plytix channel (NDJSON) → feed URL → run in Shopware → products, variants, images, cross-selling
```

1. Plytix processes your channel and publishes the result at the feed URL.
2. A run starts: by a click, on a schedule, by webhook or from the command line.
3. The plugin downloads the feed, checks it and writes everything that changed.
4. Images follow in the background, and issues go into the run's log.

---

## How to: set up the Plytix channel

**Goal**: An NDJSON channel in Plytix that the plugin can read.

**Prerequisites**:
- A Plytix account with the Channels add-on

Labels in the Plytix interface may differ between versions. What counts is the function described.

**Steps**:

1. **Create the channel**
   - Create a new channel in Plytix and choose the NDJSON format. CSV, XLSX and XML do not work with the plugin.

2. **Select the products**
   - Add the products you want in the shop.
   - In the product level options, choose to also export the superior levels of listed variants. Otherwise the main products are missing from the feed, and new variants are skipped with `HIERARCHY_PARENT_NOT_IN_FEED`.

3. **Add the attributes**

   These attributes should be in the channel. The output label in the table is the plugin's default. Other labels are fine, as long as you enter them in the [field mapping](usage/mapping.md).

   | Content | Default label | Required |
   | --- | --- | --- |
   | SKU | `SKU` | Yes |
   | Main product of a variant | `Variant of` | For variants |
   | Variant list | `Variants` | Recommended |
   | Product name | `Product Title` or `Label` | Yes |
   | Price | `Price (€)` | Yes |
   | Status | `Status` | Recommended |
   | Description, short description | `Long Description`, `Short Description` | No |
   | GTIN | `GTIN` | No |
   | Brand | `Brand` | No |
   | Categories | `Categories` | No |
   | Main image, gallery | `Main Image` or `Thumbnail`, `Assets` | No |
   | Maximum order quantity | `Maximum Order Quantity` | No |
   | Cross-selling | `Cross-sell` | No |
   | Variant attributes | e.g. `Product Color`, `Apparel Size` | For variants |
   | Filterable attributes | e.g. `Material`, `Gender` | No |
   | Further product fields such as dimensions, weight or tags | any | No |
   | Texts in other languages | e.g. `Spanish Product Title` | No |

   Prices must be output as a plain number with a dot, such as `29.99`.

4. **Choose the processing mode**
   - Plytix can export all products or only new and changed ones. Choose all products. We have not yet checked what the feed URL serves after an "updates only" processing. If you switch on **Feed contains all products** in Shopware, all products is a must; otherwise the plugin would treat unchanged products as removed.

5. **Process the channel and copy the feed URL**
   - Process the channel once and copy the feed URL. It looks something like `https://pim.plytix.com/channels/…/feed`.
   - If you like, set up a processing schedule in Plytix, such as every three hours or daily.

**Important**: The feed URL is not protected. Anyone who knows it can fetch your whole product feed, prices included. Only enter it where it is needed.

---

## How to: create the channel in Shopware

**Goal**: A Shopware channel that imports the Plytix feed.

**Prerequisites**:
- The feed URL from Plytix
- Workers and the scheduled task runner are running ([Requirements](index.md#background-workers-are-mandatory))

**Steps**:

1. **Create the channel**
   - Navigate to: `Catalogues → Plytix Connector`
   - Click **Add channel**.

2. **Fill in the "Channel" card**
   - **Name**: for example "Plytix main catalogue"
   - **Feed URL**: the URL you copied
   - **Sales channels**: the shops the products should appear in, each with the root category for its categories
   - **Tax rate**: for example 19 %. Without a tax rate every run fails. Different tax rates per product are mapped later, see [Tax rate](usage/mapping.md#tax-rate).
   - **Currency**: the currency of the Plytix prices
   - Leave **Active** off while you test

3. **Check the import settings**
   - **Category root in the feed**: the first level of your category paths in Plytix, default `Website Taxonomy`
   - **Status values for active products**: your Plytix status values for released products, default `Completed`
   - **Prices are gross**: off if Plytix delivers net prices
   - **Cross-selling name**: for example "You may also like"
   - All settings: [Channel settings](configuration/settings.md)

4. **Check the field mapping**
   - The defaults are the labels Plytix uses for SKU, name, price, images and the other fields every export has. If you renamed output labels in Plytix, enter yours. To see the labels, download the feed from the feed URL and open the file in a text editor. Each line is one product, and the labels are the names before each colon.
   - Under **Translations**, add a row per language, for example `es-ES` for attributes such as `Spanish Product Title`.
   - Details: [Field mapping and variants](usage/mapping.md)

5. **Save and run the first sync**
   - Click **Save**, then **Sync now**. The first run imports the products without variant options and properties, and collects the labels of your feed.
   - Follow the run in the **Runs** card. **Show issues** shows errors and warnings.

6. **Map variant options and properties**
   - In the **Field mapping** card, click **Map feed labels**.
   - Set colour, size and similar attributes to **Variant option**, filterable attributes such as material to **Property**, and pick an existing property group or enter a name for a new one. Ignore the labels you do not need.
   - Set values such as width, weight or tags to **Product field**, pick the field in **Target in Shopware**, and for dimensions and weight the unit of the feed.
   - Click **Save and sync**. The run that starts now writes the variant options and properties to all products.
   - Details: [Variant options and properties](usage/mapping.md#variant-options-and-properties)

7. **Activate**
   - When the result looks right, switch on **Active**, enter a **Poll interval (minutes)** and save.

**Result**: The products are under Catalogues → Products, visible in the chosen sales channels, and the images arrive bit by bit.

**Troubleshooting**: If the run stays "Pending", no workers are running. More cases under [Troubleshooting](usage/usage.md#troubleshooting).

---

## How to: set up the webhook

**Goal**: Plytix starts a run in Shopware right after each processing.

**Prerequisites**:
- A saved, active channel. Inactive channels refuse webhook calls.
- Your shop is reachable from the internet.

**Steps**:

1. **Generate the token**
   - Open the channel and click **Generate token** in the **Webhook** card.
   - On an existing channel this saves straight away. On a new channel, click **Save** afterwards. The URL only works once the channel is saved.

2. **Copy the URL**
   - Copy the **Webhook URL**. It has the form `https://your-shop.com/api/webla-plytix/webhook/<token>`, with the address your administration runs on.

3. **Enter it in Plytix**
   - In Plytix, open the channel's settings and enter the URL as the webhook.
   - Plytix offers a test function there. Note that a test starts a real run in Shopware.

**Result**: After every processing in Plytix, a run with the trigger **Webhook** appears in the **Runs** list. The product count Plytix reported is in the run's summary.

**In operation**:
- If the channel already has a pending or running run, the shop answers with HTTP 409, but remembers the call and starts another run once the current one ends.
- If a call never reaches your shop, during maintenance for example, a **Poll interval (minutes)** covers it.
- The token in the URL is the only protection. Anyone who knows the URL can trigger runs, but cannot read or change data.

### Regenerate the token

If the URL got into the wrong hands, click **Regenerate token** and confirm. The old URL stops working at once, and the channel is saved. Enter the new URL in Plytix, or webhook calls will stop arriving.

---

## How to: connect an existing catalogue to Plytix

**Goal**: Maintain products that are already in Shopware from Plytix from now on.

1. Make sure the SKU in Plytix matches the product number in Shopware exactly.
2. Create the channel as described above.
3. The first run finds the existing products by product number, links them to the channel and overwrites their data with the Plytix state. Stock stays as it is.

Try this on a test system first. Extra categories, properties and images that only exist in Shopware are removed by the first run, as long as those fields are mapped.

---

## How to: deactivate removed products automatically

**Goal**: Products you take out of the Plytix channel disappear from the shop.

1. Make sure the channel in Plytix always exports all products.
2. Switch on **Feed contains all products** in Shopware.
3. Leave the **Removal safety threshold (%)** at 25 unless you have a reason for another value.
4. Save.

From the next run on, missing products are deactivated, not deleted. Each deactivated product appears as `REMOVAL_PRODUCT_DEACTIVATED` in the log.

---

## Quick reference

| Task | Key steps | Settings |
| --- | --- | --- |
| First import | Create channel, save, **Sync now** | Feed URL, tax rate, sales channels |
| Regular sync | Enter interval, switch to active | Poll interval (minutes), Active |
| Right after Plytix processing | Generate token, enter URL in Plytix | Webhook, Active |
| Restore deleted products | `bin/console plytix:channel:sync <channel> --force` | – |
| Another language | Create language in Shopware, map locale | Translations |

---

## Good practice

1. **Test first, then activate**: New channels start inactive. Use that to check the first run calmly.
2. **Combine webhook and schedule**: The webhook is fast, and the poll interval catches calls that never reach your shop.
3. **Settle the field mapping before the first run**: Every later change rewrites all products, and new group names create new property groups.
4. **Look at the issues regularly**: A run with the status "Completed with errors" left some products out.

## What to avoid

- Sharing the feed URL or webhook URL in tickets or screenshots, because both work without any further login.
- Switching on **Feed contains all products** while Plytix exports only changes, because current products would be deactivated. The safety threshold only catches this when enough products are missing.
- Editing imported texts or prices by hand in Shopware, because the next change in Plytix overwrites them.
