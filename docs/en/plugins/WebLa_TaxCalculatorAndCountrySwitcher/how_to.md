# How-To Guide

This document provides step-by-step workflows for common tasks with the *Tax calculator and shipping country switch* plugin.

---

## How the Plugin Works

### Data Flow Overview

```
[Visitor selects country in dropdown]
                 ↓
[POST /switch_context with country=ISO]
                 ↓
[CustomConfigureController sets sw-country cookie & invalidates product cache]
                 ↓
[BaseContextFactoryDecorator overrides CountryId in SalesChannelContext]
                 ↓
 ┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
 ↓                          ↓                          ↓                          ↓
[CustomProductPrice    [CustomCartProcessor     [CustomDelivery       [Checkout / registration
 Calculator             updates cart             Calculator adjusts   pre-fills selected
 computes gross from    line items with          shipping costs to    delivery country]
 net & country tax]     new prices]              country tax]
```

**In short**: The switcher sets the delivery country in the context object. All subsequent price, cart, and shipping calculations then run with the new tax rate — always starting from net.

---

## Common Workflows

### How to: Set up the plugin for the first time

**Goal**: Configure the plugin to be operational after installation

**Time Required**: approx. 15 minutes

**Prerequisites**:
- Plugin installed and activated
- At least one sales channel with active delivery countries
- Correct tax rates per country in Shopware

**Steps**:

1. **Open plugin configuration**
   - Navigate to: `Extensions → My Extensions → Tax calculator and shipping country switch → Configure`
   - Select the desired sales channel in the top right

2. **Set base configuration**
   - `Activate the selection dropdown` → on
   - `Show flags in dropdown` → as desired
   - `Topbar display mode` → `Replace topbar` for simple themes, `Extend theme's topbar` if your theme already has a topbar

3. **Exclude home country**
   - Open the `Calculation Settings` card
   - In the `Skip countries` field, add your home country (e.g. Germany)
   - Reason: Gross prices are already maintained correctly there

4. **Enable shipping costs** (optional)
   - `Shipping cost configuration` card
   - Enable `Adjust shipping costs based on net costs`

5. **Save and clear caches**
   - Save button in the top right
   - `Settings → System → Caches & Indexes → Clear cache`

**Result**: The country switcher appears in the storefront and automatically recalculates prices for non-home countries.

**Troubleshooting**: See the "Troubleshooting" section in the [Usage Guide](usage/usage.md#troubleshooting).

---

### How to: Add a new delivery country to the switcher

**Goal**: Enable a previously unavailable country in the switcher dropdown

**Time Required**: approx. 5 minutes

**Steps**:

1. **Activate the country in the sales channel**
   - Navigate to: `Sales Channels → [Your sales channel] → General → Countries`
   - Activate the desired country and save

2. **Verify tax rate for the country**
   - Navigate to: `Settings → Shop → Taxes`
   - For each product that should be shipped to this country, check whether a matching country rule exists
   - If not: create a new tax rule with the correct rate

3. **Enable shipping method for the country**
   - Navigate to: `Settings → Shop → Shipping`
   - For the relevant shipping methods, add the new country in the availability rule

4. **Clear caches**

**Result**: The new country appears in the dropdown and prices are recalculated correctly.

---

### How to: Customize styling to match your theme

**Goal**: Adjust dropdown colors and spacing to match the shop's corporate design

**Time Required**: approx. 10 minutes

**Steps**:

1. **Open plugin configuration**
2. **Open the `Styling configuration` card**
3. **Set colors**
   - `Text color of select` — adjust to theme foreground color
   - `Color of select background` — adjust to theme background color
   - `Color of select border` — e.g. accent color of your theme
4. **Padding and border**
   - `Padding of select`: e.g. `8px 12px`
   - `Radius of select border`: e.g. `4px`
   - `Width of select border`: e.g. `1px`
   - `Width of select`: e.g. `180px` or `auto`
5. **Save** and clear the storefront cache

**Result**: The country switcher uses the new CSS variables in the frontend.

---

### How to: Upgrade from 4.x or 3.x to 5.0.0

**Goal**: Migrate an existing installation to the multi-version codebase

**Time Required**: approx. 10 minutes

**Prerequisites**:
- Shopware 6.6 or 6.7
- Backup of the database and `custom/plugins/WebLa_TaxCalculatorAndCountrySwitcher/`

**Steps**:

1. **Create backup** — database and plugin folder
2. **Check Shopware version** — 6.6.0 or higher required
3. **Deactivate the old plugin**: `Extensions → My Extensions → Deactivate`
4. **Upload the new ZIP** via the Plugin Manager or replace directly in `custom/plugins/`
5. **Update and activate the plugin**:
   ```
   bin/console plugin:refresh
   bin/console plugin:update WebLa_TaxCalculatorAndCountrySwitcher
   bin/console plugin:activate WebLa_TaxCalculatorAndCountrySwitcher
   bin/console cache:clear
   ```
6. **Check configuration** — all settings are preserved
7. **Test storefront** — spot-check the country switcher in all sales channels

**Result**: The installation runs on version 5.0.0 with the multi-version codebase. All settings and sales channel configurations are preserved.

---

## Quick Reference

| Task                                     | Key Steps                                                  | Settings Required                             |
| ---------------------------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| Activate the plugin                      | Extensions → Activate → Configure                          | Activate the selection dropdown               |
| Display flags                            | Configure → Display configuration                          | Show flags in dropdown                        |
| Skip home country                        | Configure → Calculation Settings                           | Skip countries                                |
| Recalculate shipping costs               | Configure → Shipping cost configuration                    | Adjust shipping costs based on net costs      |
| Preserve theme topbar                    | Configure → Display configuration                          | Topbar display mode = `Extend theme's topbar` |
| Dropdown styling                         | Configure → Styling configuration                          | All styling fields                            |

---

## Best Practices

1. **Always exclude the home country**: Gross prices are already maintained correctly in your main market — double calculation avoids unnecessary load and rounding differences
2. **Consistently maintain tax rates per country**: The plugin can only calculate as well as the country tax rules allow
3. **Create a test product**: A fixed test product with a known net price helps verify calculation correctness for each target country
4. **Watch cache behavior**: The plugin adds the `country` parameter to the HTTP cache key — CDNs and reverse proxies must honor this parameter
5. **Configure per sales channel**: Different shops (e.g. B2C and B2B) often have different requirements — use sales-channel-specific configuration

## What to Avoid

- ❌ **Excluding all countries at once** — the plugin then has no effect, you might as well disable it
- ❌ **Letting prices be recalculated in the home country** — always add the home country to the skip list
- ❌ **Ignoring missing tax rules** — without a country tax rule, a fallback is used that can lead to wrong gross prices
- ❌ **Not clearing the storefront cache after configuration changes** — old values would otherwise persist in the HTTP cache
