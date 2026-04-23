# Configuration Settings

This document describes all available settings for **Batch-Management**.

**Navigation**: Extensions → My Extensions → Batch-Management → … → Configure

---

## Basic Configuration

### Order status that marks a batch as processed

| Property     | Value                                    |
| ------------ | ---------------------------------------- |
| **Type**     | Single select                            |
| **Default**  | No selection                             |
| **Required** | Yes, for any batch consumption to happen |

**Description**: Defines the order state that triggers automatic batch consumption. When an order transitions exactly into this state, matching batches are consumed according to order quantity and product weight, in expiry order.

**Options**:
- `Open`: Consumption happens as soon as the order is accepted.
- `In progress`: Consumption happens when picking starts.
- `Completed`: Consumption happens when the order is fully processed.

**Example Use Case**: In a food shop batches should only be consumed when goods are picked. Choose `In progress` so that consumption mirrors the real batch consumption workflow.

---

### Order status that should reverse the batch process

| Property     | Value          |
| ------------ | -------------- |
| **Type**     | Multi select   |
| **Default**  | No selection   |
| **Required** | No             |

**Description**: When an order transitions into any of the selected states, previously consumed batch quantities are automatically returned. The matching `batch order` records are deleted and the consumed quantity on the batch is restored.

**Options**:
- `Open`
- `In progress`
- `Completed`
- `Cancelled`

**Example Use Case**: For cancellations pick `Cancelled`, so that batches consumed by a cancelled order are returned automatically.

> **Note**: Reversal only runs while the setting *"Should the use of batches be reversed…"* is enabled.

---

### Should the use of batches be reversed when the order status is canceled?

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Enabled   |
| **Required** | No        |

**Description**: Master switch for the reversal logic. When disabled, no reversal happens on state transitions, even if a state is listed under *"Order status that should reverse the batch process"*.

**Example Use Case**: Disable this option if you want to control batch consumption manually, or if cancelled orders must keep their batch assignment for legal reasons.

---

## Stock Configuration

### Calculate stock adjustment based on batches

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Disabled  |
| **Required** | No        |

**Description**: Enables automatic recalculation of product stock. Stock is derived from the sum of remaining batch quantities divided by product weight. Recalculation runs:

- immediately when a batch is saved,
- every 10 minutes through the background task (while expired batches are being deactivated).

For products with a composition, the calculation yields the minimum producible quantity across all components. For products with variants, each variant is calculated individually.

**Example Use Case**: Enable this when the stock displayed in your shop should be driven entirely by existing batches. Keep it disabled if you manage stock manually or through another system (ERP, inventory management).

> **Important**: Product weight must be greater than 0. Without a weight, the plugin cannot derive stock quantity.

---

### Fallback to piece-based consumption

| Property     | Value       |
| ------------ | ----------- |
| **Type**     | Switch      |
| **Default**  | Disabled    |
| **Required** | No          |

**Description**: Controls how batches are consumed for products that have **no weight** and **no composition entry**. When disabled (default), such products consume nothing on order-state change — consumption relies on `product weight × line-item quantity`. When enabled, the plugin falls back to consuming **1 batch-unit per ordered piece**, so shops that track stock by piece (cosmetics, pharma, individual items) still get correct consumption without assigning an artificial product weight.

Products with a composition are not affected — those continue to consume based on the composition entries.

**Example Use Case**: A cosmetics shop sells individual items (no weight set). Enable this setting so that ordering 3 pieces of a product decrements the matching batch by 3 units.

> **Note**: Leave disabled if all your products already have a meaningful weight — the weight-based calculation remains the default behaviour.

---

## Recommended Configurations

### For food shops with batch-tracked goods

| Setting                                                | Recommended value    |
| ------------------------------------------------------ | -------------------- |
| Order status that marks a batch as processed           | `In progress`        |
| Order status that should reverse the batch process     | `Cancelled`          |
| Reverse batch usage on status change                   | Enabled              |
| Calculate stock adjustment based on batches            | Enabled              |

### For retrospective batch tracking without stock management

| Setting                                                | Recommended value    |
| ------------------------------------------------------ | -------------------- |
| Order status that marks a batch as processed           | `Completed`          |
| Order status that should reverse the batch process     | No selection         |
| Reverse batch usage on status change                   | Disabled             |
| Calculate stock adjustment based on batches            | Disabled             |

---

## Back to Overview

- [Plugin Overview](../index.md)
- [Usage Guide](../usage/usage.md)
- [How-To Guide](../how_to.md)
