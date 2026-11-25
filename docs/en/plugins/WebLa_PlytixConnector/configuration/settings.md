# Channel settings

The plugin has no settings under **Extensions → My Extensions**. Everything is set per channel.

**Navigation**: Catalogues → Plytix Connector → Add channel (or open an existing channel)

One channel in Shopware corresponds to exactly one channel in Plytix. The detail page has these cards:

- **Channel**: feed, tax rate, currency, schedule
- **Sales channels**: where the products appear, with a root category each
- **Import settings**: prices, stock, categories, status, takeover, removals
- **Field mapping**: which Plytix attribute goes into which Shopware field, see [Field mapping and variants](../usage/mapping.md)
- **Webhook**: the URL to enter in Plytix
- **Runs**: the past syncs of this channel (after the first save)

> When you change and save the sales channels, tax rate, currency, import settings or field mapping, the next run rewrites all products of this channel. That is on purpose, so the new configuration reaches every product, but on a large catalogue the run takes longer. Changes to the name, feed URL, poll interval, Active or the webhook token only stop the next run from skipping the feed as unchanged. The products themselves then stay unchanged.

---

## Card "Channel"

### Name

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | empty |
| **Required** | Yes   |

Internal name of the channel. It appears in the channel list and with the runs. The command line also accepts this name, so keep it unique.

### Poll interval (minutes)

| Property     | Value                           |
| ------------ | ------------------------------- |
| **Type**     | Number, at least 1              |
| **Default**  | empty (no scheduled polling)    |
| **Required** | No                              |

How often the plugin fetches the feed on its own. Empty means no schedule: only manual runs and the webhook.

The check runs every five minutes. At each check, a new run starts if the channel's last run is at least this many minutes old. Every run counts, whether it was started by hand, by webhook or by the schedule. In practice the interval is rounded up to the next five-minute check: values below 5 behave like 5, and 7 minutes become about 10.

Only active channels are polled. A poll costs little when the feed has not changed, because the run then ends straight away as "Skipped, feed unchanged".

**Example**: Plytix processes the channel once an hour. A poll interval of 60 minutes is enough. If you also use the webhook, the schedule is your fallback in case a webhook call does not reach your shop.

### Feed URL

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Text (URL) |
| **Default**  | empty      |
| **Required** | Yes        |

The URL of the NDJSON feed from Plytix, something like `https://pim.plytix.com/channels/…/feed`. It must start with `http://` or `https://`.

Plytix does not protect this URL. Anyone who knows it can download your whole product feed. Treat it like a password and keep it out of tickets, chats and screenshots.

### Tax rate

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Select             |
| **Default**  | empty              |
| **Required** | Yes, for every run |

Shopware needs a tax rate for every product, so this one is required. All products of this channel get it, unless you map the tax rate on the [mapping page](../usage/mapping.md#tax-rate). The form saves without one, but every run then fails with `CHANNEL_CONFIGURATION_INVALID`.

With the tax rate mapped, products without a tax value, or with a value no tax rate is assigned to, get the tax rate chosen here.

### Currency

| Property     | Value                             |
| ------------ | --------------------------------- |
| **Type**     | Select                            |
| **Default**  | empty (the shop's default currency) |
| **Required** | No                                |

The currency of the prices in the feed. If it is not the shop's default currency, the plugin also writes a price in the default currency, converted with the currency factor from Shopware. Shopware requires that price.

### Active

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | off    |
| **Required** | No     |

A new channel starts inactive. Inactive channels are not polled, and their webhook does not accept calls. **Sync now** and the command line work for inactive channels too, so you can test a channel by hand before you switch it on.

---

## Card "Sales channels"

A list of sales channels. Click **Add sales channel** for each shop the products should appear in, and choose both fields in every row:

| Property     | Value                                    |
| ------------ | ---------------------------------------- |
| **Type**     | List of **Sales channel** and **Root category** |
| **Default**  | empty                                    |
| **Required** | No, but recommended; each row needs both fields |

- **Sales channel**: imported main products become visible in it. Each sales channel can be listed once.
- **Root category**: the plugin creates the feed's categories below this category, usually the navigation entry point of the sales channel. Existing categories with the same name in the same place are reused. The plugin never renames, moves or deletes categories. New categories are active. Rows may share a root category; with different ones, the category tree is created below each, and the products are assigned to all of them.

**Removing a row**: the next sync takes the products out of that sales channel, and out of the imported categories below its root, unless another row uses the same root. Only visibilities the plugin created are removed. Visibilities you set yourself stay, and so do those of products another Plytix channel imports too. Products that are no longer in the feed are not touched.

Without a sales channel, categories are not imported (issue code `CATEGORY_PARENT_MISSING`). If a listed sales channel or root category is deleted later, runs fail with `CHANNEL_CONFIGURATION_INVALID` until you change the row.

---

## Card "Import settings"

### Base language

| Property     | Value                                   |
| ------------ | --------------------------------------- |
| **Type**     | Select                                  |
| **Default**  | empty (the system default language)     |
| **Required** | No                                      |

The language of the feed texts that are not mapped to a translation, meaning name, description and short description from the field mapping.

The system default language always receives texts, because Shopware requires it. If it is not the base language and has no translation mapped, it gets the base language texts.

**Example**: Your shop's default language is English, but your Plytix texts are German. Choose German as the base language.

### Category root in the feed

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Text               |
| **Default**  | `Website Taxonomy` |
| **Required** | No                 |

Plytix sends categories as paths such as `Website Taxonomy>Clothing>T-Shirts`. Often one attribute holds several trees, say one for the website and one for Google Shopping. Only paths below the root entered here are imported, and the root itself is dropped. The example gives the category `Clothing` with `T-Shirts` below it.

If you leave the field empty, the plugin imports every path whole, root included. The example then gives `Website Taxonomy`, with `Clothing` below it and `T-Shirts` below that. Every other tree in the attribute, such as the Google Shopping one, also ends up in the shop.

### Stock for new products

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Number, at least 0 |
| **Default**  | 0                  |
| **Required** | No                 |

The Plytix feed has no stock. New products get this value. After that the plugin never touches stock again, not even in later runs. Maintain stock in Shopware or through your ERP.

### Cross-selling name

| Property     | Value                    |
| ------------ | ------------------------ |
| **Type**     | Text                     |
| **Default**  | `Recommended products`   |
| **Required** | No (empty = default)     |

For every product with cross-selling data in the feed, the plugin creates one cross-selling of the type product list. This is the name of its tab on the product page. It is stored in the system default language. A change applies to all products in the next run.

**Example**: In a German shop, enter "Passend dazu".

### Status values for active products

| Property     | Value          |
| ------------ | -------------- |
| **Type**     | List of texts  |
| **Default**  | `Completed`    |
| **Required** | No             |

Products whose status attribute has one of these values become active in Shopware, all others inactive. The match is case-sensitive, so enter the values exactly as they are in Plytix. Products without any status are active. Variants without their own status take their main product's status.

**Example**: Your Plytix status values are "Approved" and "Draft". Enter `Approved`, otherwise every product ends up inactive.

### Prices are gross

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | on     |
| **Required** | No     |

On: the feed prices include tax. Off: they are net prices, and the plugin works out the gross price with the product's tax rate.

### Take over products from other channels

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | off    |
| **Required** | No     |

A product already imported by another Plytix channel is skipped by default (issue code `PRODUCT_OWNED_BY_OTHER_CHANNEL`), so two channels don't overwrite each other. With this switch on, this channel writes the product as well.

**Example**: You replace an old Plytix channel with a new one and want to keep using the existing products.

### Feed contains all products

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | off    |
| **Required** | No     |

With this switch on, the plugin deactivates every product of this channel that is no longer in the feed, at the end of a run. Nothing is ever deleted. If a product comes back into the feed later, the next run activates it again, provided its status says so.

A feed cannot tell whether it is complete. Only switch this on if the Plytix channel exports all products every time it is processed. The plugin also skips removals when the run had write errors, failed batches or invalid feed lines (`REMOVAL_SKIPPED_RUN_ERRORS`).

### Removal safety threshold (%)

| Property     | Value            |
| ------------ | ---------------- |
| **Type**     | Number, 0 to 100 |
| **Default**  | 25               |
| **Required** | No               |

Only editable when **Feed contains all products** is on. If a run would deactivate more than this share of the channel's products, it deactivates nothing and reports `REMOVAL_THRESHOLD_EXCEEDED`. That usually means the feed is incomplete. Products that an earlier run already deactivated because they were missing from the feed count neither as missing nor towards the total.

**Example**: You deliberately take a third of your range out of the channel. Raise the threshold to 40 for one run, then set it back.

---

## Card "Webhook"

This is where you generate the **Webhook URL** to enter in Plytix. Setup is described in the [How-to guide](../how_to.md#how-to-set-up-the-webhook).

---

## Permissions

Under **Settings → System → Users & permissions**, roles have a **Plytix Connector** entry in the Catalogues section. The levels mean:

| Level  | Allows                                                                   |
| ------ | ------------------------------------------------------------------------ |
| View   | Viewing channels, runs and issues                                        |
| Edit   | Changing channels and using **Sync now**                                 |
| Create | Creating new channels                                                    |
| Delete | Deleting channels, together with their runs, issues and product links    |

Deleting a channel keeps the imported products in Shopware. They are just no longer linked to a channel.

---

## Technical parameters for hosting partners and agencies

Three values apply to all channels and can only be changed in the Shopware configuration, not in the administration. Create a file below `config/packages/` in the shop, for example `config/packages/plytix.yaml`, then clear the cache:

```yaml
parameters:
    webla_plytix_connector.batch_product_limit: 100
    webla_plytix_connector.stale_run_minutes: 60
    webla_plytix_connector.run_retention_days: 180
```

| Parameter | Default | Meaning |
| --- | --- | --- |
| `webla_plytix_connector.batch_product_limit` | 100 | Products per batch. Each batch is its own message in the queue. A main product always goes into one batch with all its variants, even if that exceeds the limit. |
| `webla_plytix_connector.stale_run_minutes` | 60 | After this many minutes without progress, the five-minute check aborts a pending or running run (`RUN_STALE_ABORTED`). The time a run's finish step waits behind Shopware's indexing counts towards it. |
| `webla_plytix_connector.run_retention_days` | 180 | Ended runs and their issues are deleted after this many days. Each five-minute check deletes up to 100 old runs. |
