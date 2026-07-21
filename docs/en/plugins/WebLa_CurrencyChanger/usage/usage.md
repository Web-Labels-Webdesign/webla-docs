# Usage Guide

This guide covers every feature and capability of Currency Display.

---

## Table of Contents

- [Managing exchange rates](#managing-exchange-rates)
- [Custom exchange rate](#custom-exchange-rate)
- [Automatic rate updates](#automatic-rate-updates)
- [Storefront features](#storefront-features)
- [Price update mode](#price-update-mode)
- [Cookie notice](#cookie-notice)
- [Troubleshooting](#troubleshooting)

---

## Managing exchange rates

### What it does

Every currency pair the plugin knows about is listed in one central overview. Use it to check which rates currently apply and when they were last updated.

### How to use it

1. Open **Settings → Extensions → Storefront Currency**.
2. You see a list of all currency pairs with the columns **Source currency**, **Target currency** and **Exchange rate**.
3. Use the edit icon at the end of a row to change a value directly in the list.

**Location**: Settings → Extensions → Storefront Currency

### Tips & Best Practices

- The list only fills up once the automatic rate update has run at least once. Immediately after installation it is empty.
- Do not edit the **Exchange rate** value by hand. It is overwritten on the next run. For a permanently deviating rate, use the custom exchange rate instead.

---

## Custom exchange rate

### What it does

Alongside the official ECB rate, a custom rate can be stored per currency pair. Use it to absorb exchange rate fluctuations, or to build in a margin that covers your costs on foreign payments.

### How to use it

1. Open **Settings → Extensions → Storefront Currency**.
2. Use the gear icon at the top right to show the **Custom exchange rate** column if it is not already visible.
3. Enter the desired value in the relevant row and save.

### Tips & Best Practices

- A custom rate is **not** overwritten by the automatic update. Only the **Exchange rate** value is refreshed.
- Clear the field to return to the official rate.

---

## Automatic rate updates

### What it does

A background task checks regularly for new rates and writes any changes into the rate list. Nothing is required from you.

### How often it runs

The task is scheduled at an interval of **30 minutes**. The European Central Bank, however, publishes its reference rates only **once per banking day**, usually in the afternoon. More frequent runs therefore rarely produce new values; they simply ensure a new rate arrives promptly.

On weekends and public holidays the ECB publishes no new rates. The most recent value then remains in place.

### Checking the status

Under **Settings → System → Tasks** you will find the task `webla-update-storefront-currencies` along with its next scheduled run.

> **Prerequisite**: Shopware's scheduled tasks must be running on your server. If they are not, rates will never update. Ask your hosting provider if you are unsure.

---

## Storefront features

### Currency selector in the topbar

**Where it appears**: In the shop header, in the same bar as the language selector.

**What customers see**: A dropdown listing all available currencies, either with a country flag and currency code or compactly with the currency symbol, depending on your configuration. The choice applies immediately across the whole shop.

**Customisation**: Flags and labelling are controlled through the [settings](../configuration/settings.md).

### Price display

**Where it appears**: Everywhere a price is shown:

- Product detail page
- Product listings in categories and search results
- Cart and offcanvas cart
- Checkout including the order total and tax breakdown

**What customers see**: Below the regular price, the converted amount appears, marked as an **approximate price**. That wording is deliberate: the amount actually charged depends on the rate applied by the customer's own bank at the time of payment and may differ slightly.

### What stays in the shop currency

The converted amount is informational only. The following remain in your shop default currency:

- The amount actually charged
- The order in the admin area
- Invoices and all other documents

---

## Price update mode

The plugin can work in one of two modes, controlled by the **Update mode** setting under **Price update mode** in the plugin configuration (**Extensions → My Extensions → Currency Display → Configure**). The mode decides whether currency conversion stays a purely visual addition to the storefront, or becomes real, native multi-currency selling handled by Shopware itself. For the setting itself, see the [settings reference](../configuration/settings.md).

### Storefront display only (default)

This is how the plugin has always worked, and every existing shop keeps this behaviour unchanged after an update.

- Prices are converted for **display only** and shown next to the regular shop price, exactly as described under [Storefront features](#storefront-features) above.
- Shopware's own currency and price data is never touched.
- The visitor picks a currency from **the plugin's own currency selector** in the header.
- **Orders and invoices remain in the shop's default currency.** The conversion shown to the visitor is informational only.

### Update Shopware price data

- The exchange rates are written into **Shopware's own currency and price data**. From then on, Shopware handles pricing natively everywhere: storefront, cart, order, invoices, API and exports.
- The storefront is left completely untouched by the plugin in this mode — **the plugin's own currency selector is not displayed**.
- Because Shopware itself now owns pricing, **orders and invoices are placed in the currency the customer selected**. This is a genuine currency switch, not a display conversion — the key practical difference to the default mode, and the point to understand before switching.

A currency price you set by hand for a specific currency, for example a deliberately chosen 9.99, does not survive the next update in this mode. Depending on the strategy chosen in the [settings reference](../configuration/settings.md), it is either removed or overwritten with the converted value — either way, the exchange rate becomes the single source of truth for that price.

### Setting up Shopware's own currency selector

Switching to **Update Shopware price data** does not, by itself, make a currency selector appear in the storefront. Any selector shown in this mode is **Shopware's own**, not the plugin's, and Shopware only displays it once it has been set up correctly.

1. Make sure every currency you want to offer exists under **Settings → Currencies**.
2. Assign each currency to the relevant sales channel: open **Sales Channel → (select the channel) → General tab**, and add the currencies in the **Currencies** multi-select field. Set the **Default currency** for that sales channel in the same place.
3. **Shopware only shows a currency selector once at least two currencies are assigned to the sales channel.** With only one currency assigned, no selector appears at all — this is standard Shopware behaviour, not a plugin limitation.
4. A currency that exists under Settings → Currencies but has not been assigned to the sales channel never appears in the storefront, no matter how many currencies you have created.

> **Tip**: The order of currencies in Shopware's own selector follows Shopware's internal ordering, not alphabetical order.

### Choosing between the modes

- Choose **Storefront display only** to show visitors a price in a familiar currency while continuing to sell and invoice in your own shop currency. Impact is low: nothing in your catalogue or price data changes.
- Choose **Update Shopware price data** to genuinely sell in multiple currencies, with Shopware itself handling carts, orders and invoices in the currency the customer selected. Impact is higher, since it changes stored price data — see the [settings reference](../configuration/settings.md) for the warnings before switching.

---

## Cookie notice

To keep a visitor's currency choice across their session, the plugin sets a cookie named `custom_currency_selection` with a lifetime of one day.

The cookie appears in your shop's cookie notice within the group of **technically required** cookies, labelled **selected Currency**. It stores nothing but the chosen currency code, and no personal data.

---

## Troubleshooting

### The currency selector does not appear in the shop

**Symptom**: No dropdown is visible in the header.

**Cause**: In almost all cases no rates exist yet, because the automatic update has not run.

**Solution**: Check under **Settings → Extensions → Storefront Currency** whether the list contains entries. If it is empty, trigger the update manually — see [How-To Guides](../how_to.md). If it stays empty, check that scheduled tasks are running on your server and that your server is allowed to reach the ECB address.

### No converted prices are shown

**Symptom**: The selector is there, but nothing appears below the prices.

**Cause**: Your shop's default currency is not Euro, or **Default Source Currency** is set to something other than `EUR`.

**Solution**: Set **Default Source Currency** back to `EUR`. The plugin converts from the ECB's euro reference rates and requires Euro as the shop default currency.

### The rates are out of date

**Symptom**: The **Updated at** value is several days old.

**Cause**: Scheduled tasks are not running, or your server cannot reach the ECB.

**Solution**: Check the status of the task `webla-update-storefront-currencies` under **Settings → System → Tasks**. A gap of two to three days over a long weekend is normal, however, because the ECB publishes no rates on public holidays.

### A specific currency is missing

**Symptom**: The currency you want is not in the selector.

**Cause**: The plugin offers exactly the currencies published by the European Central Bank. Currencies outside that list are not available.

**Solution**: There is no setting for this. Get in touch if you need an additional currency.

---

## Related Documentation

- [Settings reference](../configuration/settings.md)
- [How-To Guides](../how_to.md)
