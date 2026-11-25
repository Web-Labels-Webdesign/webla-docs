# Plytix Connector

> Syncs products from Plytix channels to Shopware 6.

## Overview

The Plytix Connector brings your product data from Plytix PIM into your Shopware shop. It works with a Plytix channel in NDJSON format: Plytix publishes your products as a feed at a URL, and the plugin reads that feed and turns it into products, variants, translations, categories, manufacturers, properties, images and cross-selling.

The sync runs one way. Plytix stays the source, Shopware receives. Changes you make to imported data in Shopware are not written back to Plytix.

You can connect several Plytix channels, each with its own field mapping, sales channels and defaults. Every sync is recorded as a run, with counters and a filterable list of the issues it ran into.

## Key features

- Imports products with variants, including three-level Plytix hierarchies
- Free field mapping per channel, because Plytix lets you name your output fields
- Translations through per-language attributes, mapped per locale
- Images are downloaded in the background, each URL only once
- Start a sync with a click, on a schedule, through a Plytix webhook or from the command line
- Unchanged feeds and unchanged products are skipped
- Optional deactivation of products that left the feed, with a safety threshold
- A log for every run, with counters, issue codes and messages

## Requirements

- Shopware 6.5.7 to 6.7. Earlier 6.5 versions are not supported.
- A Plytix account with the Channels add-on, and a channel in NDJSON format. The plugin cannot read CSV, XLSX or XML channels.
- Shopware background workers that keep running (see below). Without them, nothing gets imported.
- With several servers: a shared private filesystem (see below).
- For the webhook: Plytix must be able to reach your shop over the internet.

### Background workers are mandatory

A run started from the administration, by webhook or by the schedule first goes into Shopware's message queue. Workers then process it. The plugin uses two queues: `async` for the import and `low_priority` for downloading images.

Set up workers that run permanently on the server, for example with systemd or Supervisor:

```bash
bin/console messenger:consume async low_priority --time-limit=3600
```

Give the workers a `--time-limit` or a `--memory-limit`, as Shopware recommends. A worker's memory grows slowly during large imports, and this way the process manager restarts it fresh at regular intervals.

You also need the scheduled task runner. Every five minutes it checks which channels are due for a poll, cleans up runs that got stuck and deletes old runs:

```bash
bin/console scheduled-task:run
```

What happens without these processes:

- Without workers, a run stays **Pending**. While it is pending, no new run can start for that channel. It is only aborted after 60 minutes without progress, and that again needs the task runner and a worker.
- Without a worker for `low_priority`, images are never downloaded. This applies to command-line runs too.
- Without the scheduled task runner, there are no scheduled polls, stuck runs are not aborted, and old runs are not deleted.

After a plugin update, the workers must restart. A worker still running the old code makes every run fail. Stop the workers with `bin/console messenger:stop-workers`, and your process manager starts them again. If the update did not clear the cache, clear it first.

If a hosting company runs your shop, pass this section on to them or to your agency.

### Several servers

During a run, the plugin stores the feed in batches in Shopware's private filesystem. A worker on any server may pick up any batch. If your shop runs on several servers, the private filesystem must therefore sit on shared storage (S3, for example), as Shopware expects for cluster setups anyway.

You also need a shared lock store (`LOCK_DSN`). The plugin uses locks when it creates categories, manufacturers and properties and when it downloads an image, so two workers don't do the same thing at once. The default, `flock`, only works within one server.

On a single server you need neither.

## Compatibility

One plugin version covers all supported Shopware versions:

| Shopware version | Status    |
| ---------------- | --------- |
| 6.5.7 to 6.5.x   | Supported |
| 6.6.x            | Supported |
| 6.7.x            | Supported |

## Quick start

1. Set up an NDJSON channel in Plytix and copy its feed URL ([how-to](how_to.md#how-to-set-up-the-plytix-channel)).
2. Install and activate the plugin in **Extensions → My Extensions**.
3. Make sure the workers and the scheduled task runner are running.
4. Open **Catalogues → Plytix Connector** and click **Add channel**.
5. Enter a name, the feed URL, a tax rate and the sales channels with their root categories, check the **Field mapping** and save.
6. Click **Sync now** and check the run. It imports the products and collects the labels of your feed.
7. Click **Map feed labels** in the **Field mapping** card, map variant options and properties, and click **Save and sync**.
8. When the result looks right, switch on **Active**, enter a **Poll interval (minutes)** and save.

## Documentation contents

- [Channel settings](configuration/settings.md): every channel field and setting with its default
- [Usage guide](usage/usage.md): starting a sync, runs, behaviour and limits, troubleshooting
- [Field mapping and variants](usage/mapping.md): how feed fields end up in Shopware
- [Runs and issue codes](usage/issues.md): every status and every issue code, with what to do
- [How-to guide](how_to.md): Plytix channel, Shopware channel, webhook and first import, step by step
- [Changelog](changelog.md): version history
