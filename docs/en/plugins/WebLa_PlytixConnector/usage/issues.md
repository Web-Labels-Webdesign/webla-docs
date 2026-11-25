# Runs and issue codes

> Part of the Plytix Connector. [Back to the usage guide](./usage.md)

## Run statuses

Every sync is a run. You see its status in the **Runs** list on the channel page, under **All runs** and on the run's detail page. The detail page refreshes itself while the run is still working.

| Status | Meaning |
| --- | --- |
| Pending | The run exists and waits for a worker. If it stays here for long, no workers are running. |
| Running | The feed is being fetched, checked and imported in batches. |
| Completed | Done, without errors. There may still be warnings. |
| Completed with errors | Done, but at least one issue has the severity Error. The other products were imported. |
| Failed | The run stopped before or after the products were written, for example because the feed could not be fetched. The reason is in the **Error** field and listed as an issue. |
| Skipped, feed unchanged | The feed is byte-identical to the last one imported. Nothing was written. |
| Aborted | The run made no progress for 60 minutes (the default) and was ended automatically. Almost always the workers are missing. |

Each channel can have only one pending or running run at a time. Further starts are refused until the current run is done. Only a webhook call is remembered, and its run starts afterwards.

Ended runs and their issues are deleted automatically after 180 days. Your hosting partner can change that period, see [Technical parameters](../configuration/settings.md#technical-parameters-for-hosting-partners-and-agencies).

### Counters

| Counter | Meaning |
| --- | --- |
| Products reported by Plytix | The count Plytix sent with the webhook. Webhook runs only. |
| Records in feed | Lines in the feed, meaning products of every level |
| Processed | Products handled so far. Middle levels of three-level hierarchies are not counted, because they do not become Shopware products. The final number can therefore be lower than the records in the feed. |
| Created | Products newly created in Shopware |
| Updated | Products that changed and were written again |
| Unchanged | Products with no change since the last run. They are left alone. |
| Skipped | Records and products that were not written because of an issue |

## Issues

The detail page of a run (click **Show issues** in the **Runs** list) lists all issues of that run. You can filter by **Severity** and **Code** and search for a **SKU**. The **Message** column shows the message in your admin language with the issue code below it, and the **Details** column holds extra information such as the line number or the image URL. Error texts that Shopware, PHP or the web server return, and the expected value of an invalid channel setting, stay in English. Issues and errors of runs from before version 1.0.0 keep their English message.

There are two severities:

- **Error**: data was not imported, or the run failed. A single error turns "Completed" into "Completed with errors".
- **Warning**: the import carried on, but something is not as it should be. Some warnings are for information only.

Codes stay the same across plugin versions. If you contact us, please include the code and the SKU.

### Feed

| Code | Severity | Meaning | What to do |
| --- | --- | --- | --- |
| `FEED_FETCH_FAILED` | Error | The feed could not be downloaded: an HTTP error, a timeout, or a URL that does not start with `http://` or `https://`. The run fails. | Check the feed URL by opening it in a browser: the download must start. Check that Plytix has processed the channel. |
| `FEED_NO_RECORDS` | Error | The feed is empty, not in NDJSON format, or no record has a usable SKU. The run fails. | Check that the Plytix channel uses NDJSON and has been processed. Check the **SKU (product number)** mapping. |
| `FEED_RECORD_COUNT_MISMATCH` | Warning | Plytix reported a different product count in the webhook than the feed has records. The feed may not have been updated yet. | Click **Sync now** a few minutes later. If the warning keeps coming back, check the product count of the Plytix channel. |
| `FEED_INVALID_JSON` | Error | A line in the feed is not valid JSON and is skipped. Removals do not run in this run. | Usually a broken download. Run again. If it persists, send us the line number from the details. |
| `FEED_LINE_NOT_OBJECT` | Error | A line is valid JSON but not a product record. It is skipped, and removals do not run. | Same as `FEED_INVALID_JSON`. |

### Product structure

| Code | Severity | Meaning | What to do |
| --- | --- | --- | --- |
| `HIERARCHY_DUPLICATE_SKU` | Error | A SKU appears more than once in the feed. All those lines and every variant below them are skipped. | Make the SKU unique in Plytix. Check that the **SKU (product number)** mapping uses the right attribute. |
| `HIERARCHY_PARENT_NOT_IN_FEED` | Error | A variant's main product is not in the feed and was never imported by this channel. The variant is skipped. | Switch on the export of superior levels in Plytix, or add the main product to the channel. |
| `HIERARCHY_CYCLE` | Error | The "Variant of" values form a loop (A is a variant of B, B of A). The products involved are skipped. | Fix the product relations in Plytix. |
| `HIERARCHY_VARIANT_NOT_LISTED` | Warning | A product names a main product that does not list it among its variants. The import follows "Variant of". | Check the relations in Plytix. Usually harmless. |
| `HIERARCHY_LISTED_VARIANT_MISMATCH` | Warning | A main product lists a variant that does not name it as its main product, or that is not in the feed. | Check the relations in Plytix, and check that all variants are in the channel. |

### Field mapping and content

| Code | Severity | Meaning | What to do |
| --- | --- | --- | --- |
| `MAPPING_SKU_MISSING` | Error | A line has no SKU and is skipped. | Fill in the SKU in Plytix or fix the **SKU (product number)** mapping. |
| `MAPPING_NAME_MISSING` | Error | A main product has no name. It is skipped with all its variants. | Fill in the name in Plytix or check the **Name** mapping. |
| `MAPPING_PRICE_MISSING` | Error | A main product has no price. It is skipped with all its variants. | Fill in the price in Plytix or check the **Price** mapping. |
| `MAPPING_PRICE_INVALID` | Error | The price is not a plain number with a dot. The product is skipped; for a main product, its variants too. | Output the price from Plytix as `29.99`, without currency sign or thousands separator. |
| `MAPPING_MAX_PURCHASE_INVALID` | Warning | The maximum order quantity is not a whole number above 0. The field stays empty, and the product is imported. | Fix the value in Plytix. |
| `MAPPING_FIELD_INVALID` | Warning | The value of a product field cannot be read, for example a width with a unit (`12 cm`), a date in another format or a text over 255 characters. The value is not imported, the rest of the product is. The details name the field and the value. | Fix the value in Plytix, or choose the unit of the feed on the mapping page. |
| `MAPPING_CUSTOM_FIELD_INVALID` | Warning | The value does not fit the type or the options of a custom field. It is not imported, the rest of the product is. | Fix the value in Plytix, or add the option to the custom field. |
| `MAPPING_TAX_UNMAPPED` | Warning | No Shopware tax rate is assigned to the tax value of a product. A main product gets the tax rate of the channel, a variant that of its main product. | Assign a tax rate to the value on the [mapping page](./mapping.md#tax-rate), or fix the value in Plytix. |
| `MAPPING_VARIANT_OPTIONS_MISSING` | Warning | A variant has no value for any variant option and cannot be selected in the storefront. | Fill in the attribute values in Plytix, or map the variant options on the [mapping page](./mapping.md#variant-options-and-properties). |
| `MAPPING_VARIANT_OPTIONS_UNMAPPED` | Warning | The feed has variants, but no label is mapped as a variant option. Customers cannot choose between variants. Expected on the first sync of a new channel. | Map the variant options on the [mapping page](./mapping.md#variant-options-and-properties). |
| `TRANSLATION_LANGUAGE_MISSING` | Warning | No Shopware language uses a mapped locale. Its texts are not imported. | Create the language in Shopware, or remove the row under **Translations**. |
| `CATEGORY_PARENT_MISSING` | Warning | The channel has no sales channel with a root category. Categories are not imported. | Add a row to **Sales channels**. |
| `PROPERTY_GROUP_MISSING` | Warning | The existing property group picked for a variant option or property no longer exists. That label is not imported. | Pick another group, or enter a name, on the [mapping page](./mapping.md#variant-options-and-properties). |
| `CUSTOM_FIELD_MISSING` | Warning | A mapped custom field does not exist, is inactive or has a type that cannot be imported. That label is not imported. | Activate the custom field, or choose another on the [mapping page](./mapping.md#custom-fields). |
| `CROSS_SELLING_TARGET_UNKNOWN` | Warning | A cross-selling entry points to a SKU this channel has not imported. The entry is skipped. | Add the target product to the Plytix channel, or remove the reference in Plytix. |

### Writing to Shopware

| Code | Severity | Meaning | What to do |
| --- | --- | --- | --- |
| `PRODUCT_OWNED_BY_OTHER_CHANNEL` | Warning | The product belongs to another Plytix channel and is skipped. | Intended? Then nothing. Otherwise switch on **Take over products from other channels**. |
| `PRODUCT_WRITE_FAILED` | Error | Shopware refused to save a product and its variants. The message gives the reason. The next run tries again, even with an unchanged feed. Removals do not run. | The message contains Shopware's error. Fix the data in Plytix accordingly. If unclear, send us the message. |
| `MEDIA_DOWNLOAD_FAILED` | Warning | An image could not be downloaded, for example because of a 404, a timeout or a file over 50 MB. The other images are assigned, and the next run tries again. The code also appears when a product's images could not be processed even after all retries. This warning can appear after the run has finished. | Open the image URL from the details in a browser. Replace the image in Plytix if it is missing or too large. |

### Removals

| Code | Severity | Meaning | What to do |
| --- | --- | --- | --- |
| `REMOVAL_PRODUCT_DEACTIVATED` | Warning | The product is no longer in the feed and was deactivated. For information. | Nothing, if intended. Otherwise add the product back to the Plytix channel. |
| `REMOVAL_THRESHOLD_EXCEEDED` | Error | More products are missing than the safety threshold allows. Nothing was deactivated. | Check that the feed is complete. If the gap is intended, raise the **Removal safety threshold (%)** for one run. |
| `REMOVAL_SKIPPED_RUN_ERRORS` | Warning | Removals were skipped because the run had write errors, failed batches or invalid feed lines. | Fix the run's other errors. The next run without them catches up on the removals. |

### Run

| Code | Severity | Meaning | What to do |
| --- | --- | --- | --- |
| `CHANNEL_CONFIGURATION_INVALID` | Error | The channel's settings are invalid, for example no tax rate, or a sales channel, root category, tax rate or base language that was deleted. The run fails. The message names the setting. | Fix the setting and save. |
| `RUN_START_FAILED` | Error | The run could not be prepared or queued for another reason. | Read the message and start the run again. With several servers, check the shared private filesystem. |
| `RUN_BATCH_FAILED` | Error | A batch failed even after several retries. Its products count as skipped, and the details list the SKUs of the main products. The next run imports again. Removals do not run. | Read the message and start the run again. If it persists, send us the message. |
| `RUN_FINALIZE_FAILED` | Error | Finishing the run, with cross-selling and removals, failed. The run fails. | Start the run again. |
| `RUN_STALE_ABORTED` | Error | The run made no progress for 60 minutes (the default) and was aborted. | Check that workers for `async` and `low_priority` are running. See [Requirements](../index.md#background-workers-are-mandatory). |
