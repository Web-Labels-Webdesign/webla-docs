# Usage guide

This guide explains how to work with the Plytix Connector, what happens during a sync, and where the limits are.

---

## Table of contents

- [The module in the administration](#the-module-in-the-administration)
- [What happens during a sync](#what-happens-during-a-sync)
- [Starting a sync](#starting-a-sync)
- [When a run is skipped](#when-a-run-is-skipped)
- [Behaviour and limits](#behaviour-and-limits)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)

In more detail on their own pages:

- [Field mapping and variants](./mapping.md)
- [Runs and issue codes](./issues.md)

---

## The module in the administration

**Location**: Catalogues → Plytix Connector

The start page **Plytix channels** lists all channels with their status and their last run. Top right are **All runs** (the runs of every channel) and **Add channel**.

A channel's detail page holds the cards **Channel**, **Import settings**, **Field mapping**, **Webhook** and **Runs**. Top right are **Sync now** and **Save**. Every field is explained under [Channel settings](../configuration/settings.md). Variant options and properties are mapped on a page of their own, which **Map feed labels** in the **Field mapping** card opens, see [Variant options and properties](./mapping.md#variant-options-and-properties).

In the **Runs** list, **Show issues** opens a run's detail page with its summary, counters and issue list. The back arrow leads to the page you came from: the channel, the mapping page or **All runs**.

If you leave the channel or mapping page with unsaved changes, or start a sync, the plugin asks whether to save them first.

---

## What happens during a sync

1. **Fetch**: the plugin downloads the feed from the feed URL.
2. **Check**: it reads every line, checks required data and compares the feed with the one imported last. If it is unchanged, the run ends here.
3. **Resolve the structure**: it works out which products are main products, variants and standalone products.
4. **Import**: the feed is split into batches, a main product always together with all its variants. A worker handles each batch. Products that have not changed since the last run are skipped and count as "Unchanged".
5. **Images**: missing images are downloaded in a queue of their own. This can continue after the run has ended.
6. **Finish**: once all batches are done, the plugin writes cross-selling and, if switched on, deactivates products that are no longer in the feed.

An existing Shopware product with the same product number is taken over, not created twice. That lets you connect an existing catalogue to Plytix. From then on the product is linked to the channel.

---

## Starting a sync

There are four ways. Each channel can only have one pending or running run at a time.

### Sync now

Top right on the channel page. The run is queued and shows up in the **Runs** list straight away. If a run is already active, you see "This channel already has a pending or running sync." The click is not remembered; start the run again later.

The button is available after the first save and also works for inactive channels. You need the Edit permission for the Plytix Connector.

### Schedule

Enter a **Poll interval (minutes)** and switch the channel to **Active**. Every five minutes Shopware checks whether the last run is old enough and then starts a new one. Details under [Poll interval](../configuration/settings.md#poll-interval-minutes).

### Webhook

Plytix calls a URL of your shop after each time it processes the channel, and the run starts right away. Setup is in the [How-to guide](../how_to.md#how-to-set-up-the-webhook).

If the call arrives while the channel already has a pending or running run, the shop answers Plytix with "already running" (HTTP 409) but remembers the call. As soon as the current run ends, whatever the outcome, another run starts with the trigger **Webhook**. Several calls during one run give one follow-up run. If the channel has been switched to inactive in the meantime, there is none. A poll interval as a fallback still makes sense, in case a call never reaches your shop. Webhook and schedule runs count together: a webhook run resets the schedule's waiting time.

### Command line

For agencies and hosting partners there is a console command:

```bash
bin/console plytix:channel:sync <channel>
```

`<channel>` is the channel's ID or name. If several channels share a name, the command asks for the ID.

| Option    | Effect |
| --------- | ------ |
| `--force` | Imports even if the feed is unchanged. |
| `--async` | Only queues the run, like the other ways. Without it, the whole import runs in the console process. |

Without `--async`, the command shows the status, the counters and up to 50 issues at the end. It exits with an error code if the run failed or a run was already active. That suits tests and cron jobs. Images are still downloaded by a `low_priority` worker, though.

These runs show up in the administration with the trigger **Command line**.

---

## When a run is skipped

A run ends as **Skipped, feed unchanged** when all of this is true:

- The feed is byte-identical to the feed of the last run that got as far as importing.
- That last run completed, with or without errors.
- The channel was not changed since that run started.
- That last run had none of the issues `PRODUCT_WRITE_FAILED`, `RUN_BATCH_FAILED` or `MEDIA_DOWNLOAD_FAILED`. The next run retries those automatically.
- That last run was made by a plugin version with the same data format. After some updates, everything is therefore imported once more.

Changes you made in Shopware are not taken into account. If you deleted imported products in Shopware, a command-line run with `--force` creates them again. **Sync now** has no such option.

For products you edited by hand, `--force` does not help. Even then the plugin compares every product with its last imported state, and a product whose data in Plytix stayed the same counts as unchanged. It is only written again when it changes in Plytix, or when you change and save the sales channels, tax rate, currency, import settings or field mapping. The next run then rewrites every product of the channel.

---

## Behaviour and limits

### Stock on create only

New products get the **Stock for new products**. After that the plugin never writes stock again. Plytix data has no stock; that belongs in your ERP.

### Prices are replaced as a whole

When a product is written, the plugin replaces its whole price. Prices in other currencies that you added in Shopware are gone afterwards.

### Plytix wins on changes

The plugin only writes a product when its data in the feed has changed, or when you changed the channel's sales channels, tax rate, currency, import settings or field mapping. Then the Plytix state applies to that product:

- Texts, price, EAN, status, maximum order quantity and the mapped product fields are overwritten.
- Categories, properties, tags and images that you added in Shopware are removed, as long as the field is filled in the field mapping.
- Sales channel visibilities you set yourself, stock and cross-sellings you created yourself stay. Visibilities the plugin created are removed when you remove their sales channel from the channel.

As long as a product does not change in Plytix, your changes in Shopware remain. Don't rely on that: the next change in Plytix, or to the field mapping and import settings, overwrites them. Anything you want to maintain in Shopware for good, take out of the [field mapping](./mapping.md#rules).

### Large catalogues

A run is only done once its finish step, with the cross-selling, is through. That step waits until Shopware has worked through the indexing of the written products, which sits in the same queue. With many products this can take a few minutes. The wait counts towards the automatic abort after 60 minutes without progress.

For a rough order of magnitude: in our load test with 20,000 records (just under 19,000 Shopware products, two workers), an import into an empty shop took about 12 minutes, and the images were complete about 27 minutes after the run ended. A run with an unchanged feed was skipped within seconds. On your server the times can differ a lot, mostly depending on the database and the number of workers.

### Removing means deactivating

With **Feed contains all products** switched on, missing products are deactivated, never deleted. Without it, products that disappear from the feed simply stay in the shop as they are.

### What the plugin does not do

- Write data back to Plytix
- Read CSV, XLSX or XML channels
- Import Plytix bundles, because Shopware has no matching concept
- Update stock
- Import image alt texts, because the feed has none

---

## Troubleshooting

### Runs stay "Pending"

**Cause**: No workers are running for the queues.

**Solution**: Run `bin/console messenger:consume async low_priority` as a permanent process, and `bin/console scheduled-task:run` for the schedule. The stuck run is aborted automatically after 60 minutes without progress; after that a new one can start. See [Requirements](../index.md#background-workers-are-mandatory).

### Products arrive without images

**Cause**: A `low_priority` worker downloads images. If none is running, or only one for `async`, no images arrive.

**Solution**: Check that the worker consumes both queues. With many new images it may also just take a while. Search the run for `MEDIA_DOWNLOAD_FAILED` to find single broken image URLs.

### The schedule does not start runs

**Cause**: The channel is not active, the poll interval is empty, or the scheduled task runner is not running.

**Solution**: Switch on **Active**, enter an interval, save. Check the runner `bin/console scheduled-task:run`.

### Every run fails with `CHANNEL_CONFIGURATION_INVALID`

**Cause**: Usually the **Tax rate** is missing, or a chosen sales channel, root category or base language was deleted.

**Solution**: The message in the run's **Error** field names the setting. Fix it and save.

### Every run fails after a plugin update

**Cause**: The workers still run the code from before the update.

**Solution**: Restart the workers, for example with `bin/console messenger:stop-workers`. See [Requirements](../index.md#background-workers-are-mandatory).

### All products are inactive

**Cause**: The **Status values for active products** do not match your Plytix status values. The default is `Completed`.

**Solution**: Enter your status values exactly, with the same upper and lower case.

### Categories are missing

**Cause**: The paths in the feed do not start with the **Category root in the feed** you entered, or the channel has no sales channel (`CATEGORY_PARENT_MISSING`).

**Solution**: Set the root to the first level of your Plytix categories. Add a sales channel with its root category.

### Variants cannot be selected in the storefront

**Cause**: The attributes for colour, size and the like are not mapped as **Variant options**, or the variants have no values there (`MAPPING_VARIANT_OPTIONS_MISSING`).

**Solution**: See [Variant options and properties](./mapping.md#variant-options-and-properties).

---

## FAQ

**Q: How often should I sync?**
A: As often as Plytix processes the channel. Polling more often does no harm, because unchanged feeds are skipped at once. The webhook is fastest, with a poll interval as a fallback.

**Q: What happens to my products if I uninstall the plugin?**
A: Products, categories, manufacturers and images stay in Shopware. If you do not keep the plugin data when uninstalling, Shopware removes the plugin's channels, runs and links as well as the "Short description" custom field. After a reinstall, the plugin finds existing products again by product number.

**Q: Can I import two Plytix channels into one shop?**
A: Yes. Each channel has its own settings. By default a product belongs to the channel that imported it first. See [Take over products from other channels](../configuration/settings.md#take-over-products-from-other-channels).

**Q: Where do I see which products were not imported?**
A: On the run's detail page under **Issues**. Filter by the severity **Error**. The codes are explained under [Runs and issue codes](./issues.md).

**Q: How long does an import take?**
A: In our tests with 69 records, a first import took a little over 10 seconds, and the images about one and a half minutes after that. With 20,000 records it was about 12 minutes, plus 27 minutes for the images, see [Large catalogues](#large-catalogues). This depends heavily on the server. More workers process the batches in parallel.

**Q: How long do runs stay visible?**
A: For 180 days after they ended. Then the plugin deletes them with their issues. Products are not affected.
