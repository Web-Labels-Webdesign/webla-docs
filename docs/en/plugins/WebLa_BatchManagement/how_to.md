# How-To Guide

Step-by-step workflows for common tasks with **Batch-Management**.

---

## How the Plugin Works

### Data Flow Overview

```
Create batch → Order reaches consumption state → Batches are consumed
                                              ↓
Batch history on order ← Order → Stock recalculation (optional)
```

**Example Flow**:

1. Shop admin creates a batch with 10 kg and an expiry date.
2. Customer orders 2 units of a product with 0.5 kg weight.
3. Order transitions to the configured state (e.g. `In progress`).
4. Plugin consumes 1 kg (2 × 0.5 kg) from the batch with the latest expiry.
5. Remaining batch quantity: 9 kg. If *Calculate stock based on batches* is enabled, the product stock is updated.

---

## Common Workflows

### How to: Create the first batch for a product

**Goal**: Record a ready-to-use batch for an existing product.

**Time Required**: 2–3 minutes

**Prerequisites**:
- A product with a weight set.
- Plugin installed and active.

**Steps**:

1. **Navigate to batch management**
   - Open `Catalogues → Batches`.

2. **Start a new batch**
   - Click **Add Batch** in the top right.

3. **Enter core data**
   - Name e.g. `Summer Harvest 2026`.
   - Batch number e.g. `SH-2026-001`.
   - Turn on the Active switch.

4. **Set product and quantities**
   - Pick the product from the list.
   - Enter quantity (e.g. `10.000` for 10 kg).
   - Set the expiration date.

5. **Save**
   - Click **Save**.

**Result**: The batch appears in the batch overview. With stock calculation enabled, product stock is updated immediately.

**Troubleshooting**: If save fails, confirm all required fields are filled and that the expiry date is in the future.

---

### How to: Enable batch consumption via order state

**Goal**: Configure automatic consumption for incoming orders.

**Time Required**: 1 minute

**Prerequisites**:
- Plugin installed and active.

**Steps**:

1. **Open plugin configuration**
   - Navigate to `Extensions → My Extensions → Batch-Management → … → Configure`.

2. **Pick the consumption state**
   - Under *Basic Configuration* select the state that should trigger consumption (e.g. `In progress`).

3. **Optional: configure reversal state**
   - Under *Order status that should reverse the batch process* select `Cancelled`.
   - Keep *Should the use of batches be reversed…* enabled.

4. **Save**
   - Click **Save**.

**Result**: From now on every state transition automatically consumes or restores the correct batches.

---

### How to: Set up a product composition

**Goal**: Configure a product so that its stock is derived from multiple components.

**Time Required**: 3–5 minutes

**Prerequisites**:
- The main product and all component products exist in the catalogue.

**Steps**:

1. **Open the product**
   - `Catalogues → Products → [Main product]`.

2. **Switch to the Specifications tab**
   - Click **Specifications** in the navigation.

3. **Add composition**
   - In the *Composition* section click **Add composition**.
   - Pick the component product and enter the required quantity per unit.
   - **Save**.

4. **Repeat step 3 for every additional component**.

**Result**: When the main product is ordered, batches of each component are consumed according to the configured quantities.

---

### How to: Handle a batch recall

**Goal**: Identify the orders affected by a problematic batch.

**Time Required**: 5 minutes

**Steps**:

1. **Find the batch**
   - `Catalogues → Batches` → search by batch number.

2. **Open the detail view**
   - Click the affected batch.

3. **Review the history**
   - Scroll to the **Orders** card.

4. **Inspect the orders**
   - Click each order number to jump to the order and view customer details.

5. **Deactivate the batch**
   - Return to the batch and turn the **Active** switch off.
   - **Save**.

**Result**: The batch is no longer considered for new consumption. You have a full list of affected orders.

---

## Quick Reference

| Task                          | Key steps                                                      | Settings required                          |
| ----------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Create batch                  | Catalogues → Batches → Add Batch                               | —                                          |
| Enable consumption            | Plugin configuration → pick consumption state                  | `orderStateToMarkBatch`                    |
| Enable reversal               | Plugin configuration → reversal states + master switch         | `orderStateToRevertBatch`, `shouldRevert`  |
| Enable stock calculation      | Plugin configuration → Stock Configuration                     | `calculateStock`                           |
| Set up composition            | Product → Specifications → Add composition                     | —                                          |
| Recall                        | Batch detail → review Orders → deactivate batch                | —                                          |

---

## Best Practices

1. **Set expiry dates realistically**: The scheduled deactivation runs every 10 minutes. Plan accordingly.
2. **Maintain product weights**: Batch consumption and stock calculation depend on product weight. Missing weights break the feature.
3. **Deactivate batches instead of deleting**: This preserves batch history on orders for recalls and accounting.
4. **Test state configuration before go-live**: Place a test order and verify batch consumption across all relevant state transitions.

## What to Avoid

- ❌ **Setting product weight to 0** — Without a weight neither consumption nor stock calculation can run.
- ❌ **Picking reversal states without the master switch** — Without *shouldRevert* enabled, reversal never fires.
- ❌ **Using the batch detail page to tweak used quantities manually** — The *Used Quantity* field is system-managed. Manual changes will be overwritten on the next event.
