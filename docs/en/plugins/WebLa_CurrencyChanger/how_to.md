# How-To Guides

This guide provides step-by-step workflows for common tasks with Currency Display.

---

## How the plugin works

### Data flow overview

```
ECB publishes rates  →  Scheduled task fetches them  →  Rate list in admin
                                                              ↓
Visitor picks currency  →  Choice stored in cookie  →  Converted price in shop
```

**Example flow**:

1. The European Central Bank publishes the day's reference rates in the afternoon.
2. The plugin's scheduled task fetches those rates and updates the rate list.
3. A visitor selects "US dollar" in the shop.
4. The choice is stored in a cookie and applies to every subsequent page.
5. Below each price, the converted amount appears as an "approximate price".

Payment itself still takes place in your shop default currency.

---

## Common Workflows

### How to: Set the plugin up for the first time

**Goal**: Get the plugin operational after installation.

**Time required**: About 10 minutes, plus waiting time for the first rate fetch.

**Prerequisites**:

- Shop default currency is Euro
- Shopware's scheduled tasks are running on the server

**Steps**:

1. **Activate the plugin**
   - Navigate to: **Extensions → My Extensions**
   - Switch **Currency Display** to active

2. **Set the target currency**
   - Navigate to: **Extensions → My Extensions → Currency Display → Configure**
   - Select the desired sales channel at the top
   - Under **Default Target Currency**, enter the three-letter code of your main market, for example `USD`
   - Leave **Default Source Currency** as `EUR`
   - Save

3. **Wait for or trigger the first rate fetch**
   - The task runs by itself within 30 minutes
   - Alternatively trigger it manually — see the next workflow

4. **Check the result**
   - Navigate to: **Settings → Extensions → Storefront Currency**
   - The list should now contain currency pairs

**Result**: The currency selector appears in the shop header, and the converted amount appears below the prices.

**Troubleshooting**: If the list stays empty, check that scheduled tasks are running and that your server is allowed to make outbound connections to the ECB.

---

### How to: Trigger a rate update manually

**Goal**: Fetch rates immediately without waiting for the scheduled task.

**Time required**: Under a minute.

**Prerequisites**: Command line access to the server.

**Steps**:

1. **On the server, change into the Shopware directory**

2. **Run the command**

   ```bash
   bin/console webla:update-storefront-currencies
   ```

3. **Check the output**
   - The command prints a table of all currency pairs with their rate and update date

**Result**: The rate list is up to date and the currency selector appears in the shop.

**Troubleshooting**: If the fetch fails, the command reports the error in plain text and also writes it to the shop log. The most common cause is a firewall blocking access to the ECB address.

> If you have no command line access, contact your hosting provider or wait for the next automatic run.

---

### How to: Store a custom exchange rate

**Goal**: Permanently use a deviating rate for one currency pair.

**Time required**: About 2 minutes.

**Prerequisites**: The rate list is already populated.

**Steps**:

1. **Open the rate list**
   - Navigate to: **Settings → Extensions → Storefront Currency**

2. **Show the column**
   - Use the gear icon at the top right to enable the **Custom exchange rate** column

3. **Enter the value**
   - Enter the deviating rate in the row of the currency pair you want and save

**Result**: Your custom rate applies to that currency pair. The automatic update does not overwrite it.

**Troubleshooting**: To return to the official rate, clear the field.

---

### How to: Adjust the appearance of the currency selector

**Goal**: Match the selector to your theme.

**Time required**: About 5 minutes.

**Steps**:

1. **Open the configuration**
   - Navigate to: **Extensions → My Extensions → Currency Display → Configure**

2. **Choose the presentation**
   - **Show flags in dropdown**: show or hide country flags
   - **Show currency name instead of symbol**: on shows the code (`USD`), off shows the symbol (`$`)

3. **Check in the shop**
   - Open the shop in a new tab and look at the selector in the header

**Result**: The selector appears in your chosen presentation.

---

## Quick Reference

| Task                     | Key steps                                                        | Required settings        |
| ------------------------ | ---------------------------------------------------------------- | ------------------------ |
| Initial setup            | Activate → set target currency → wait for first fetch             | Default Target Currency  |
| Fetch rates now          | `bin/console webla:update-storefront-currencies`                  | –                        |
| Set a deviating rate     | Storefront Currency → show column → enter value                   | Custom exchange rate     |
| Change appearance        | Configuration → choose flags and labelling                        | Show flags, currency name |
| Check rates              | Settings → Extensions → Storefront Currency                       | –                        |

---

## Best Practices

1. **Match the target currency to your main market**: ideally visitors never need to switch at all.
2. **Monitor scheduled tasks**: if they stop, rates go stale unnoticed. A glance at **Updated at** in the rate list is enough.
3. **Prefer the currency code over the symbol when offering several dollar currencies**: `$` on its own is ambiguous.
4. **Test it yourself after setup**: click through a product page, the cart and the checkout and confirm the converted amount appears everywhere.

## What to Avoid

- ❌ **Editing the Exchange rate value manually** – it is overwritten on the next run. Use the custom exchange rate instead.
- ❌ **Setting Default Source Currency to anything other than `EUR`** – converted prices then disappear entirely.
- ❌ **Presenting the converted amount as a binding price** – the amount in the shop default currency is what counts. Hence the "approximate price" label.
- ❌ **Running the plugin without working scheduled tasks** – without them, rates are never loaded.
