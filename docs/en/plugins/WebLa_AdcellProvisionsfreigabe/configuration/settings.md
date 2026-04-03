# Configuration Settings

This document describes all available settings for ADCELL Commission Approval.

**Navigation**: Extensions → My Extensions → ADCELL Commission Approval → Configure

---

## Test Mode

### Test mode (no data sent to Adcell)

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Switch (On/Off) |
| **Default**  | Off             |
| **Required** | No              |

**Description**: When enabled, decisions are prepared and saved but **not** sent to the ADCELL API. The entire reconciliation process runs normally — only the final step (sending to ADCELL) is skipped.

**Example Use Case**: Enable test mode during initial setup to familiarise yourself with the plugin and verify that decisions are correct before sending real data to ADCELL. Disable once you are confident in the results.

---

## Automatic Approval

### Enable automatic approval

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Switch (On/Off) |
| **Default**  | Off             |
| **Required** | No              |

**Description**: Enables daily automatic reconciliation. When turned on, a scheduled task runs daily for all active ADCELL accounts, reconciles commissions and sends decisions automatically — without manual review.

**Example Use Case**: Enable automatic approval once you trust the reconciliation algorithm and no longer need daily manual review. Ideal for established shops with few edge cases.

### Days before auto-accept deadline

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 3      |
| **Required** | No     |

**Description**: Determines how many days before ADCELL's automatic acceptance the plugin processes commissions. ADCELL automatically accepts commissions after a set period (typically 30–45 days). This setting ensures the plugin acts in time before that deadline.

**Example Use Case**: With a value of 3, commissions whose auto-accept deadline falls within the next 3 days are processed. A higher value (e.g. 7) gives you more lead time, but some orders may not yet have a final status.

### Minimum order age in days

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 0      |
| **Required** | No     |

**Description**: Specifies how many days old an order must be before its commission can be approved. Commissions for younger orders are marked as "Skip" (reason: "Order too recent"). Cancellations and adjustments are applied immediately regardless of order age. A value of 0 means no waiting period.

**Example Use Case**: Set the value to 14 to only approve commissions after the typical return/cancellation period has passed. This gives customers time for returns and cancellations before the commission is confirmed.

---

## Amount Tolerance

### Tolerance in percent

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Decimal |
| **Default**  | 1.0     |
| **Required** | No      |

**Description**: Percentage deviation between the ADCELL cart value and the actual net order value (excluding shipping) that triggers an amount adjustment (ADJUST). The tolerance is always calculated from the ADCELL cart value.

**Example Use Case**: At 1.0% with an ADCELL cart value of EUR 100.00, an adjustment is only triggered for deviations greater than EUR 1.00. Increase this value if minor rounding differences frequently cause unnecessary adjustments.

### Tolerance absolute (EUR)

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Decimal |
| **Default**  | 0.50    |
| **Required** | No      |

**Description**: Absolute minimum amount for the tolerance calculation in euros. The actual tolerance is always the higher value of the percentage and absolute tolerance. This prevents cent-level differences on small orders from triggering adjustments.

**Example Use Case**: For an order of EUR 10.00, the 1% tolerance would only be EUR 0.10 — too small for rounding differences. The absolute minimum of EUR 0.50 ensures adjustments are only triggered from EUR 0.50 deviation upwards.

---

## Recommended Configurations

### Getting started (conservative)

| Setting                        | Recommended Value |
| ------------------------------ | ----------------- |
| Test mode                      | On                |
| Automatic approval             | Off               |
| Days before deadline           | 3                 |
| Tolerance percent              | 1.0               |
| Tolerance absolute             | 0.50              |

### Production (manual review)

| Setting                        | Recommended Value |
| ------------------------------ | ----------------- |
| Test mode                      | Off               |
| Automatic approval             | Off               |
| Days before deadline           | 3                 |
| Tolerance percent              | 1.0               |
| Tolerance absolute             | 0.50              |

### Production (fully automatic)

| Setting                        | Recommended Value      |
| ------------------------------ | ---------------------- |
| Test mode                      | Off                    |
| Automatic approval             | On                     |
| Days before deadline           | 3                      |
| Tolerance percent              | 1.0                    |
| Tolerance absolute             | 0.50                   |
| Minimum order age              | 14                     |
