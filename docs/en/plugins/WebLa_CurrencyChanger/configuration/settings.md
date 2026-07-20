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
