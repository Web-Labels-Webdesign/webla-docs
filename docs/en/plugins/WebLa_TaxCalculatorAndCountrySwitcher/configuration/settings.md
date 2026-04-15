# Configuration Settings

This document describes all available settings for the *Tax calculator and shipping country switch* plugin.

**Navigation**: Extensions → My Extensions → Tax calculator and shipping country switch → Configure

Settings are grouped into five cards: **Display configuration**, **Styling configuration**, **Calculation Settings**, **Shipping cost configuration**, and **Country popup**.

---

## Display Configuration

Controls the visibility and appearance of the country switcher in the frontend.

### Activate the selection dropdown

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Enabled   |
| **Required** | Yes       |

**Description**: Master on/off switch for the country switcher in the storefront. When disabled, the shop runs as without the plugin — tax recalculation does not take place.

**Example Use Case**: Disable this option during initial setup or for maintenance without having to uninstall the plugin.

---

### Show flags in dropdown

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Enabled   |
| **Required** | No        |

**Description**: Displays the corresponding SVG country flag next to each country in the dropdown. This makes it easier for international customers to choose quickly.

**Example Use Case**: Recommended for shops with international customers. Disable if you want a very minimalist layout.

---

### Show countries as ISO Code in dropdown

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Switch     |
| **Default**  | Disabled   |
| **Required** | No         |

**Description**: Renders countries as two-letter ISO codes (e.g. `DE`, `FR`, `AT`) instead of full country names. Saves space in the topbar.

**Example Use Case**: Useful for compact themes or when many countries are available.

---

### Show label before dropdown

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Switch     |
| **Default**  | Disabled   |
| **Required** | No         |

**Description**: Displays a text hint (from snippets) before the dropdown, e.g. "Deliver to:".

**Example Use Case**: Enable when visitors may not immediately understand the purpose of the switcher.

---

### Change the currency to the local currency of the selected country

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Switch     |
| **Default**  | Disabled   |
| **Required** | No         |

**Description**: When a country is selected, automatically switches the sales channel to the country's local currency (if available in the sales channel).

**Example Use Case**: Only enable if you have maintained all relevant currencies in the sales channel with correct conversion factors.

---

### Topbar display mode

| Property     | Value             |
| ------------ | ----------------- |
| **Type**     | Single-select     |
| **Default**  | Replace topbar    |
| **Required** | Yes               |

**Description**: Choose how the plugin integrates with your theme's topbar.

**Options**:
- `Extend theme's topbar`: The country switcher is displayed in addition to the existing theme topbar
- `Replace topbar`: The entire topbar is replaced by the plugin switcher (default)
- `Widget only (no topbar override)`: The plugin does not render a topbar — integration is done manually via a Twig block

**Example Use Case**: Use `Extend theme's topbar` when your theme already has a topbar with important information (e.g. contact data, USPs) that should not be lost.

---

## Styling Configuration

Adapts the country switcher's appearance to your theme. All values are rendered as CSS variables overriding the plugin defaults.

### Color of label before dropdown

| Property     | Value       |
| ------------ | ----------- |
| **Type**     | Color picker |
| **Default**  | (empty)     |
| **Required** | No          |

**Description**: Font color of the optional label before the dropdown.

---

### Text color of select

| Property     | Value       |
| ------------ | ----------- |
| **Type**     | Color picker |
| **Default**  | (empty)     |
| **Required** | No          |

**Description**: Font color of the selected country and options in the dropdown.

---

### Color of select background

| Property     | Value       |
| ------------ | ----------- |
| **Type**     | Color picker |
| **Default**  | (empty)     |
| **Required** | No          |

**Description**: Background color of the dropdown field.

---

### Padding of select

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Text (CSS)   |
| **Default**  | (empty)      |
| **Required** | No           |

**Description**: CSS padding value, e.g. `5px 10px`.

---

### Width of select

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Text (CSS)   |
| **Default**  | (empty)      |
| **Required** | No           |

**Description**: CSS width value, e.g. `200px` or `auto`.

---

### Color of select border

| Property     | Value       |
| ------------ | ----------- |
| **Type**     | Color picker |
| **Default**  | (empty)     |
| **Required** | No          |

**Description**: Color of the border around the dropdown field.

---

### Radius of select border

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Text (CSS)   |
| **Default**  | (empty)      |
| **Required** | No           |

**Description**: Border corner radius, e.g. `4px`.

---

### Width of select border

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Text (CSS)   |
| **Default**  | (empty)      |
| **Required** | No           |

**Description**: Border width, e.g. `1px`.

---

## Calculation Settings

### Choose countries for which the recalculation should be skipped

| Property     | Value                                    |
| ------------ | ---------------------------------------- |
| **Type**     | Country multi-select                     |
| **Default**  | Empty (all countries will be recalculated) |
| **Required** | No                                       |

**Description**: Countries selected in this list are completely ignored by the plugin logic — no price and no shipping cost recalculation happens. Shopware uses its default product prices in this case.

**Example Use Case**: Typically, add your home country here, as gross prices are already correctly maintained there and no recalculation is necessary. This saves processing time on every page load.

---

## Shipping Cost Configuration

### Adjust shipping costs based on net costs

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Switch     |
| **Default**  | Disabled   |
| **Required** | No         |

**Description**: When enabled, shipping costs are recalculated following the same net-based principle as product prices. The net shipping amount stays constant per country, while the gross amount adjusts to the country's tax rate.

**Example Use Case**: Recommended for OSS-compliant shops that are legally required to display correct gross shipping costs per destination country.

---

## Country Popup

Controls the first-visit country selection popup that ensures the displayed gross price matches the price the customer pays — required by the German *Preisangabenverordnung* (PAngV).

### Show country selection popup on first visit

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Enabled   |
| **Required** | No        |

**Description**: When enabled, visitors without a `sw-switch-country` cookie see a blocking modal on page load and must confirm a delivery country before any prices are displayed visually. On selection, the cookie is written and the page reloads with the correct VAT applied.

**Example Use Case**: Mandatory for any shop serving multiple countries with different VAT rates. Without it, the first-rendered price can silently use the wrong VAT and update upward at checkout — a PAngV violation.

---

### Country cookie lifetime (days)

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Number    |
| **Default**  | 30        |
| **Required** | No        |

**Description**: How long the `sw-switch-country` cookie persists before the popup reappears for the visitor.

**Example Use Case**: Raise to 365 for strong returning-customer UX, lower to 7 for shops with short session expectations.

---

### Enable GeoIP pre-selection

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Switch     |
| **Default**  | Disabled   |
| **Required** | No         |

**Description**: When enabled, the plugin looks up the visitor's IP in a merchant-supplied MaxMind GeoLite2-Country database and pre-selects the detected country in the popup. Falls back silently to the sales channel's default country if GeoIP is disabled, the database is missing/unreadable, or the detected country is not shippable in the current sales channel.

**Example Use Case**: International shops where most visitors land on a page with the correct country already selected, reducing the friction of the popup to a single confirmation click.

**Note**: The merchant is responsible for keeping the `.mmdb` file updated per MaxMind's license terms (updates twice weekly, 30-day staleness rule). The plugin does not download or update the database.

---

### Absolute path to GeoLite2-Country.mmdb

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Text      |
| **Default**  | (empty)   |
| **Required** | Only if GeoIP pre-selection is enabled |

**Description**: Absolute filesystem path to the MaxMind `GeoLite2-Country.mmdb` file on the server running Shopware. The file must be readable by the PHP-FPM user.

**Example Use Case**: `/var/www/html/files/geoip/GeoLite2-Country.mmdb`

---

## Sales Channel Specific Settings

All settings can be maintained **per sales channel**. Select the desired sales channel in the top right of the configuration view to store different values. For example, you can enable tax recalculation for the B2C shop and disable it for the B2B shop.

---

## Recommended Configurations

### For an OSS B2C shop with multiple EU countries

| Setting                                                                        | Recommended Value                   |
| ------------------------------------------------------------------------------ | ----------------------------------- |
| Activate the selection dropdown                                                | Enabled                             |
| Show flags in dropdown                                                         | Enabled                             |
| Topbar display mode                                                            | Replace topbar                      |
| Skip countries                                                                 | Home country (e.g. Germany)         |
| Adjust shipping costs based on net costs                                       | Enabled                             |
| Change the currency to the local currency of the selected country              | Disabled (except non-EUR markets)   |

### For a pure country switcher without recalculation

| Setting                                                                        | Recommended Value                   |
| ------------------------------------------------------------------------------ | ----------------------------------- |
| Activate the selection dropdown                                                | Enabled                             |
| Skip countries                                                                 | All countries                       |
| Adjust shipping costs based on net costs                                       | Disabled                            |
