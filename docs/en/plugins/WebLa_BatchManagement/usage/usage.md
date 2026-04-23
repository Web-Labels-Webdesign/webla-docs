# Usage Guide

This guide covers all features of **Batch-Management**.

---

## Table of Contents

- [Batch Overview](#batch-overview)
- [Create a Batch](#create-a-batch)
- [Edit a Batch](#edit-a-batch)
- [Product Compositions](#product-compositions)
- [Batch History per Order](#batch-history-per-order)
- [Scheduled Stock Update](#scheduled-stock-update)
- [Troubleshooting](#troubleshooting)

---

## Batch Overview

### What It Does

Displays all batches in a searchable, sortable list with name, batch number, product, expiry date, active flag and available remaining quantity.

### How to Use

1. Open **Catalogues → Batches**.
2. Use the search bar to filter by name or batch number.
3. Click any column header to sort.
4. Click a batch row to open the detail view.
5. Use the sidebar on the right to refresh the list at any time.

**Location**: `Catalogues → Batches`

### Tips & Best Practices

- Sort by **Expiration Date** to quickly identify upcoming expiries.
- The column **Available Quantity** equals `Quantity − Used Quantity` and shows what is still free in a batch.

---

## Create a Batch

### What It Does

Creates a new batch linked to a product with quantity, batch number, expiry date and active flag.

### How to Use

1. Navigate to **Catalogues → Batches**.
2. Click **Add Batch** in the top right.
3. Fill in the required fields:
   - **Name**: Any meaningful label.
   - **Batch Number**: Manufacturer or internal batch identifier.
   - **Active**: Switch that controls whether this batch is considered for consumption.
   - **Product**: Single select from the product catalogue.
   - **Quantity**: Total amount of the batch (e.g. weight in kg).
   - **Expiration Date**: After this date the batch is deactivated automatically.
4. Click **Save**.

**Location**: `Catalogues → Batches → Add Batch`

### Tips & Best Practices

- The **Quantity** and **Used Quantity** fields use decimal values (three decimals) — suitable for weight-based tracking.
- **Used Quantity** is maintained by the system and cannot be edited manually.

---

## Edit a Batch

### What It Does

Allows you to adjust all batch fields except the system-maintained used quantity.

### How to Use

1. Open **Catalogues → Batches**.
2. Click the batch you want to edit.
3. Adjust the fields.
4. Click **Save**.

### Tips & Best Practices

- When *Calculate stock adjustment based on batches* is enabled, every save triggers an immediate stock recalculation on the product.
- To retire a batch, toggle **Active** off rather than deleting it — this keeps the batch history available on orders.

---

## Product Compositions

### What It Does

A product can be composed of several underlying products (e.g. a gift basket assembled from three items). Batch consumption and stock calculation then span all component batches.

### How to Use

1. Open **Catalogues → Products** and select the composed product.
2. Switch to the **Specifications** tab.
3. In the **Composition** section click **Add composition**.
4. Pick the component product and enter the required quantity per unit.
5. Click **Save**.

**Location**: `Catalogues → Products → [Product] → Specifications → Composition`

### Tips & Best Practices

- The quantity refers to a single unit of the composed product. Example: If a gift basket requires 0.5 kg of product A and 1 unit of product B, enter `0.5` for A.
- Stock of the composed product equals the minimum that can be produced from all components.

---

## Batch History per Order

### What It Does

The batch detail page shows the card **Orders** listing every order that consumed from this batch, with order number, line item and consumed quantity.

### How to Use

1. Open **Catalogues → Batches** and select a batch.
2. Scroll to the **Orders** card.
3. Click any order number to jump straight to the order.

### Tips & Best Practices

- This history is especially useful for recalls: for a problematic batch you can instantly see which customers are affected.

---

## Scheduled Stock Update

### What It Does

A background task (`webla.batch-management.task`) runs every 600 seconds (10 minutes) by default and performs two jobs:

1. Deactivates batches whose expiry date has been reached or passed.
2. If *Calculate stock adjustment based on batches* is enabled: recalculates product stock.

### How to Use

The task runs automatically as long as the Shopware Message Queue worker is active. No manual action required.

**Location**: `Settings → System → Scheduled Tasks` — look for `webla.batch-management.task`.

### Tips & Best Practices

- Check **Settings → System → Scheduled Tasks** regularly to confirm the task runs successfully.
- The task requires a running worker (`bin/console messenger:consume`). On managed Shopware hosting this is usually configured out of the box.

---

## Troubleshooting

### A batch is not consumed when an order is placed

**Symptom**: An order transitions to the configured state, but the batch stays untouched.

**Possible causes and fixes**:

1. **No eligible batch**: Confirm that at least one batch for the ordered product is `Active`, has an expiry date in the future and a remaining quantity greater than 0.
2. **Product has no weight**: Consumption is computed from order quantity × product weight. Without a weight no consumption happens.
3. **Wrong order state configured**: Check under Basic Configuration which state actually triggers consumption.

### Stock drops to 0 after saving a batch

**Symptom**: After editing a batch, the product shows a stock of 0 or an unexpectedly low value.

**Cause**: *Calculate stock adjustment based on batches* is enabled and the product either has no weight or all batches are fully consumed / inactive.

**Fix**: Either set the product weight correctly, create new active batches or disable the setting.

### Reversed batches are not restored after cancellation

**Symptom**: When an order is cancelled, the batch is not refilled.

**Fix**: Make sure that:

1. *"Should the use of batches be reversed…"* is enabled.
2. The chosen state (e.g. `Cancelled`) is selected under *"Order status that should reverse the batch process"*.

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
- [Changelog](../changelog.md)
