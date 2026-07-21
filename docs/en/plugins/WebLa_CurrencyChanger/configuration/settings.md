# Configuration Settings

This document describes every available setting for Currency Display.

**Navigation**: Extensions → My Extensions → Currency Display → Configure

All settings can be set differently per sales channel. Select the desired sales channel at the top of the configuration page.

---

## Currency Changer

### Update Url

| Property     | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| **Type**     | Text                                                              |
| **Default**  | `https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml`  |
| **Required** | Yes                                                               |

**Description**: The address the exchange rates are loaded from. It is preset to the official reference rate feed of the European Central Bank.

**Example use**: You normally leave this unchanged. Adjust it only if you mirror the rates through your own server, for example because your shop is not permitted to make outbound connections to the ECB. Any replacement feed must return the same XML format as the original.

---

### Default Target Currency

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | `USD` |
| **Required** | Yes   |

**Description**: The currency shown to a visitor who has not yet made a choice. Enter the three-letter currency code, for example `USD`, `CHF` or `GBP`.

**Example use**: If you sell mainly into Switzerland, set `CHF` here. New visitors then see Swiss francs immediately, without having to switch.

---

### Default Source Currency

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | `EUR` |
| **Required** | Yes   |

**Description**: The base currency that amounts are converted from.

> **Note**: Leave this set to `EUR`. European Central Bank rates are euro reference rates, and the storefront price display expects Euro as the base currency. Any other value results in no converted prices being shown at all.

---

### Show flags in dropdown

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Toggle |
| **Default**  | On     |
| **Required** | No     |

**Description**: Shows the matching country flag next to each currency in the selector.

**Example use**: Flags help visitors orient quickly. If they clash with your theme or make the topbar look busy, switch this off.

---

### Show currency name instead of symbol in dropdown

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Toggle |
| **Default**  | On     |
| **Required** | No     |

**Description**: Controls the label in the selector. When on, the currency code is shown (for example `USD`). When off, the currency symbol is shown instead (for example `$`).

**Example use**: The code is unambiguous, the symbol saves space. Since several currencies share a symbol — `$` covers the US dollar, Canadian dollar and Australian dollar among others — prefer the code if you offer more than one dollar currency.

---

## Price update mode

### Update mode

| Property     | Value                      |
| ------------ | -------------------------- |
| **Type**     | Selection                  |
| **Default**  | `Storefront display only`  |
| **Required** | Yes                        |

**Description**: Controls whether prices are converted for display only, or whether the exchange rate is written into Shopware's own currency and price data.

- `Storefront display only` — the original behaviour. Prices are converted for display only. Shopware's own currency and price data are never touched, and orders and invoices stay in your shop default currency.
- `Update Shopware price data` — the exchange rate is written into Shopware's own currency and price data instead. The storefront itself is left completely untouched by the plugin, and Shopware handles pricing natively everywhere: storefront, cart, order, API and exports.

**Example use**: Existing shops are unaffected by this setting after an update — the default preserves current behaviour, and switching to `Update Shopware price data` is a deliberate choice a shop must opt into, for example to also expose converted prices through the API or in exports rather than only in the storefront.

---

### Handling of currency-specific prices

| Property     | Value                                     |
| ------------ | ------------------------------------------ |
| **Type**     | Selection                                  |
| **Default**  | `Remove and let Shopware calculate them`   |
| **Required** | Yes                                        |

**Description**: Applies only when **Update mode** is set to `Update Shopware price data`. Controls what happens to a price you have stored for a specific currency, for example a deliberately chosen £9.99.

- `Remove and let Shopware calculate them` — the stored currency price is removed, so Shopware calculates every price from the default-currency price and the exchange rate.
- `Overwrite with converted values` — the stored currency price is kept, but its value is replaced with the converted amount on every update.

Either way, a manually chosen price does not survive the next update — the exchange rate becomes the single source of truth for that price. That is the intent of this mode, but it should not come as a surprise.

This applies only under the Overwrite with converted values option: if a currency-specific price carries a list price or a "cheapest price (last 30 days)" entry that the default-currency price does not have, that entry is dropped, since there is nothing to convert it from. If you maintain such prices, choose Remove and let Shopware calculate them instead.

**Example use**: Choose `Remove and let Shopware calculate them` if you rely on Shopware's own list-price and cheapest-price handling per currency. Choose `Overwrite with converted values` if you want an explicit stored price for every currency that always stays current with the exchange rate.

> **Version note**: This applies whenever **Update mode** is set to `Update Shopware price data`, under either strategy for handling currency-specific prices. On Shopware versions below 6.6.10, the cache cannot be cleared automatically after a rate change, so the storefront may keep showing the previous prices until the cache expires — by default up to two hours. From Shopware 6.6.10 onward this happens automatically.

---

## Sales-Channel-Specific Settings

| Setting                     | Scope            | Description                            |
| --------------------------- | ---------------- | -------------------------------------- |
| Update Url                  | Per sales channel | Source of the exchange rates           |
| Default Target Currency     | Per sales channel | Pre-selected target currency           |
| Default Source Currency     | Per sales channel | Base currency, in practice always `EUR` |
| Show flags                  | Per sales channel | Flags in the selector                  |
| Currency name instead of symbol | Per sales channel | Label in the selector              |

The exchange rates themselves are **global** across all sales channels. They are managed centrally under **Settings → Extensions → Storefront Currency**.

---

## Recommended Configurations

### For the European market

| Setting                         | Recommended value |
| ------------------------------- | ----------------- |
| Default Target Currency         | `CHF` or `GBP`    |
| Show flags                      | On                |
| Currency name instead of symbol | On                |

### For the North American market

| Setting                         | Recommended value |
| ------------------------------- | ----------------- |
| Default Target Currency         | `USD`             |
| Show flags                      | On                |
| Currency name instead of symbol | On                |

The currency code matters here, because the US dollar and Canadian dollar share a symbol.

### For a minimal topbar

| Setting                         | Recommended value |
| ------------------------------- | ----------------- |
| Show flags                      | Off               |
| Currency name instead of symbol | Off               |
