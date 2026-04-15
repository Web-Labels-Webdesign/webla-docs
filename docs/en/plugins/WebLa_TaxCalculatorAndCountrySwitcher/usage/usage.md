# Usage Guide

This guide covers all features of the *Tax calculator and shipping country switch* plugin from both the shop operator's and the customers' perspective.

---

## Table of Contents

- [Country Switcher in the Storefront](#country-switcher-in-the-storefront)
- [Automatic Price Recalculation](#automatic-price-recalculation)
- [Shipping Cost Adjustment](#shipping-cost-adjustment)
- [Excluding Countries from the Switcher](#excluding-countries-from-the-switcher)
- [Checkout Handover](#checkout-handover)
- [Country Popup (PAngV Compliance)](#country-popup-pangv-compliance)
- [Customizing the Storefront Integration](#customizing-the-storefront-integration)
- [Troubleshooting](#troubleshooting)

---

## Country Switcher in the Storefront

### What It Does

The plugin renders a dropdown in the topbar of every storefront page, allowing visitors to choose their delivery country. The selection is stored in a cookie and applies to all subsequent pages until checkout.

### How to Use

1. Open the plugin configuration at `Extensions → My Extensions → Tax calculator and shipping country switch → Configure`
2. Enable the **Activate the selection dropdown** switch
3. Choose the desired **Topbar display mode**
4. Optionally configure flag display, label, and colors to match your theme
5. Save and clear the storefront cache (`Settings → System → Caches & Indexes → Clear cache`)

**Location**: At the top of every storefront page, in the topbar (if the theme supports one).

### Tips & Best Practices

- Only allow countries you actually ship to — the list is based on the countries activated in the sales channel
- Flags significantly increase conversion in international shops
- Test the switcher in all your themes when running multiple sales channels

---

## Automatic Price Recalculation

### What It Does

As soon as a visitor switches their delivery country, the plugin recalculates all product prices in the shop — always starting from the stored net price and applying the target country's tax rate. This affects:

- Regular prices
- Cheapest prices (e.g. for variants)
- Tier prices
- RRP and strike prices

### How to Use

Price recalculation runs **fully automatically** in the background — no manual action is required. The prerequisite is that you have maintained correct tax rates per country in Shopware (`Settings → Shop → Taxes`).

**Location**: Affects all pages with product prices: product detail, listings, cart, checkout.

### Tips & Best Practices

- Maintain a dedicated tax rate per delivery country with the country-specific rules
- Spot-check price calculation with a test product in multiple countries
- The plugin uses Shopware's cash rounding — pay attention to your rounding settings per currency

---

## Shipping Cost Adjustment

### What It Does

Optionally, shipping costs are also recalculated per country: the net amount stays constant, the gross amount is adjusted to the country's tax rate. This displays internationally correct shipping costs including the applicable VAT.

### How to Use

1. Open the plugin configuration
2. Switch to the **Shipping cost configuration** card
3. Enable **Adjust shipping costs based on net costs**
4. Save

### Tips & Best Practices

- For countries in your skip list, shipping cost calculation is skipped and the default price is used
- Verify your shipping cost matrices: the plugin works with the net values stored there

---

## Excluding Countries from the Switcher

### What It Does

Countries you exclude in the calculation settings are completely skipped by the plugin logic. For those countries, Shopware's default prices apply.

### How to Use

1. Open the plugin configuration
2. Switch to the **Calculation Settings** card
3. In the **Choose countries for which the recalculation should be skipped** field, add the desired countries
4. Save

**Use Case**: Your home country, where product prices are already stored correctly including the right VAT.

---

## Checkout Handover

### What It Does

The delivery country selected in the dropdown is automatically carried over into checkout and is already pre-selected as the delivery address during registration or guest order. The customer does not need to choose the country again.

### Location

This feature is always active and requires no separate configuration.

### Tips & Best Practices

- Verify that all countries available in the dropdown are also marked as *active* and *shippable* in the sales channel

---

## Country Popup (PAngV Compliance)

### What It Does

First-time visitors see a blocking modal asking for their delivery country **before any prices are shown**. The selection is stored in a cookie (`sw-switch-country`) so returning visitors skip the popup. This ensures the displayed gross price always matches the price the customer pays at checkout — a legal requirement under the German *Preisangabenverordnung* (PAngV).

Additional behavior:

- **Optional GeoIP pre-selection** — if configured, the visitor's country is detected via a MaxMind GeoLite2-Country database and pre-selected in the popup, reducing the interaction to a single confirmation click.
- **Checkout address reconciliation** — if a customer enters a shipping address whose country differs from the country they picked in the popup, prices and cookie are reconciled automatically at `/checkout/confirm` with an info notice.
- **Stale cookie handling** — if the persisted country is no longer shippable (because the sales channel was reconfigured), the cookie is cleared and the popup re-appears.

### How to Enable

1. Open the plugin configuration at `Extensions → My Extensions → Tax calculator and shipping country switch → Configure`
2. Switch to the **Country popup** card
3. Enable **Show country selection popup on first visit**
4. (Optional) Adjust **Country cookie lifetime (days)** — default 30
5. Save and clear the HTTP cache

### How to Enable GeoIP Pre-selection

1. Obtain a MaxMind GeoLite2-Country database (`.mmdb`) — requires a free MaxMind account. See https://dev.maxmind.com/geoip/geolite2-free-geolocation-data
2. Upload the file to your server, e.g. `/var/www/html/files/geoip/GeoLite2-Country.mmdb`
3. Make sure the file is readable by the PHP-FPM user (`chmod 644` is usually enough)
4. In the plugin configuration, under the **Country popup** card, enable **Enable GeoIP pre-selection**
5. Enter the absolute path in **Absolute path to GeoLite2-Country.mmdb**
6. Save and clear the HTTP cache

### Keeping the GeoIP Database Fresh

MaxMind updates GeoLite2 twice weekly and the license requires using data no older than 30 days. Recommended: schedule a weekly cron job on your server using MaxMind's `geoipupdate` tool to download a fresh copy to the configured path.

### Disabling the Popup

If you disable the popup, a small static hint appears near the country widget reminding visitors that prices reflect the currently selected delivery country. This is the fallback for shops that cannot legally use a blocking modal or prefer a lighter UX — note that this fallback does **not** fully satisfy PAngV for multi-country shops, since the first-rendered price may still show the wrong VAT.

### Tips & Best Practices

- Leave the popup enabled in every shop serving multiple countries with different VAT rates
- Use GeoIP only if you can guarantee the database stays updated — a stale DB is still better than none, but a missing/unreadable file silently falls back to the sales channel default
- Test the popup in incognito mode to simulate a first-time visitor
- If you use a reverse proxy or Varnish, verify that the `sw-switch-country` cookie is included in the cache key — the plugin already registers it via `HttpCacheKeyEvent`, but proxy layers may need explicit configuration

---

## Customizing the Storefront Integration

### Extend Theme's Topbar

If your theme already has its own topbar (e.g. with contact info or USP strip), choose the plugin's **Topbar display mode** `Extend theme's topbar`. The country switcher is then shown in addition, without overriding your existing topbar.

### Widget Only (for theme developers)

In the `Widget only (no topbar override)` mode, the plugin renders no topbar of its own. Instead, you can embed the dropdown widget anywhere in your theme via Twig. Details are available in the shipped Twig templates under `Resources/views/storefront/layout/header/actions/`.

### Styling

All styling options in the plugin configuration are passed to the storefront as CSS variables, overriding the plugin defaults. This way you can adapt colors, padding, borders, and width to your theme without touching SCSS.

---

## Troubleshooting

### The country switcher is not displayed

**Symptom**: No topbar with country dropdown appears in the storefront.

**Cause**: Plugin not activated, the `Activate the selection dropdown` option is disabled, or the theme does not support the `layout_header_top_bar` block.

**Solution**:
1. Check whether the plugin is activated (`Extensions → My Extensions`)
2. Enable **Activate the selection dropdown** in the plugin configuration
3. Clear storefront and HTTP cache (`Settings → System → Caches & Indexes → Clear cache`)
4. If your theme overrides the header top-bar block, switch to `Widget only` mode and embed the widget manually

---

### Prices do not update after a country switch

**Symptom**: After selecting a different country, prices remain unchanged.

**Cause**: HTTP cache still serves the old page, or the country is in the skip list.

**Solution**:
1. Check whether the country is in the **Skip countries** list — remove if needed
2. Clear the HTTP cache and reload the page with `Ctrl`-held to bypass the browser cache
3. If you use a reverse proxy or CDN, it must include the `country` request parameter in the cache key

---

### Wrong tax rate is applied

**Symptom**: After a country switch, an incorrect gross price is shown.

**Cause**: The tax rate for the target country is missing or incorrect in Shopware.

**Solution**:
1. Navigate to `Settings → Shop → Taxes`
2. Verify that a matching tax rate with country rule exists for the affected country
3. Create the correct tax rate and assign it to the product if needed
4. Clear the storefront cache

---

### Shipping costs are incorrect

**Symptom**: Shipping costs are not or incorrectly adjusted.

**Cause**: **Adjust shipping costs based on net costs** option disabled, or the country is in the skip list.

**Solution**:
1. Enable the option in the **Shipping cost configuration** card
2. Remove the country from the skip list if desired
3. Verify that the shipping cost matrix contains net values

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [How-To Guide and Workflows](../how_to.md)
