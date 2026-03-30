# Configuration Settings

This document describes all available settings for the WebLa Subscription Plugin.

**Navigation**: Extensions → My Extensions → WebLa Subscription Plugin → Configure

---

## General

### Enable Plugin

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Enabled |
| **Required** | No      |

**Description**: Enables or disables the entire subscription system. When disabled, no subscription options are shown in the storefront and no automatic renewals are processed.

### Allowed Customer Groups

| Property     | Value                                 |
| ------------ | ------------------------------------- |
| **Type**     | Multi-select (Customer Groups)        |
| **Default**  | Empty (all customer groups allowed)   |
| **Required** | No                                    |

**Description**: Restricts subscriptions to specific customer groups. If no customer group is selected, all customers can create subscriptions.

**Example Use Case**: Select only "B2B Customers" if subscriptions should be available exclusively to business customers.

---

## Subscription Intervals

### Minimum Interval (Weeks)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 1      |
| **Required** | No     |

**Description**: The shortest allowed delivery interval in weeks. Customers cannot select an interval shorter than this value.

### Maximum Interval (Weeks)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 8      |
| **Required** | No     |

**Description**: The longest allowed delivery interval in weeks. Customers cannot select an interval longer than this value.

### Allow Customers to Change Interval

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Switch   |
| **Default**  | Disabled |
| **Required** | No       |

**Description**: When enabled, customers can change the delivery interval of an existing subscription in the customer portal.

**Example Use Case**: Enable this option if you want to offer your customers maximum flexibility.

### Early Renewal Shifts Date

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Enabled |
| **Required** | No      |

**Description**: When a customer triggers an early delivery, the next renewal date is recalculated based on the time of the early order. When disabled, the original rhythm is maintained.

**Example Use Case**: Keep enabled so the renewal cycle always counts from the last actual delivery.

### Allow Customer to Override Renewal Shift

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Switch   |
| **Default**  | Disabled |
| **Required** | No       |

**Description**: Allows customers to decide themselves whether the renewal cycle should be reset when placing an early order.

---

## Pricing & Discounts

### Subscription Discount (%)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 5      |
| **Required** | No     |

**Description**: Percentage discount automatically applied to all subscription orders. This base discount applies to every renewal.

**Example Use Case**: Set the value to 10 to give customers a permanent 10% discount on subscription items.

> **Note**: In addition to the base discount, loyalty tiers can be set up via the admin interface that activate after a certain number of renewals.

---

## Payment Methods

### Enable SEPA Direct Debit

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Enabled |
| **Required** | No      |

**Description**: Enables SEPA direct debit as a payment method for subscriptions. Requires a Mollie account with SEPA direct debit enabled.

### Maximum SEPA Retries

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 3      |
| **Required** | No     |

**Description**: Number of retry attempts for failed SEPA direct debits before the subscription is marked as failed.

### Invoice Payment Method

| Property     | Value                       |
| ------------ | --------------------------- |
| **Type**     | Select (Payment Methods)    |
| **Default**  | Not selected                |
| **Required** | No                          |

**Description**: Select the Shopware payment method to use for invoice subscriptions. With invoice payment, the subscription remains active after renewal — you must manually verify payment receipt.

### Prepayment Payment Method

| Property     | Value                       |
| ------------ | --------------------------- |
| **Type**     | Select (Payment Methods)    |
| **Default**  | Not selected                |
| **Required** | No                          |

**Description**: Select the Shopware payment method for prepayment subscriptions. With prepayment, the status changes to "Awaiting Prepayment" — the subscription is only continued after payment confirmation.

### Renewal Shipping Method

| Property     | Value                      |
| ------------ | -------------------------- |
| **Type**     | Select (Shipping Methods)  |
| **Default**  | Not selected               |
| **Required** | No                         |

**Description**: The shipping method used for automatically generated renewal orders. If not selected, the sales channel's default shipping method is used.

### SEPA Payment Method

| Property     | Value                       |
| ------------ | --------------------------- |
| **Type**     | Select (Payment Methods)    |
| **Default**  | Not selected                |
| **Required** | No                          |

**Description**: The Shopware payment method used for SEPA direct debit subscriptions.

### Credit Card Payment Method

| Property     | Value                       |
| ------------ | --------------------------- |
| **Type**     | Select (Payment Methods)    |
| **Default**  | Not selected                |
| **Required** | No                          |

**Description**: The Shopware payment method used for credit card subscriptions via Mollie.

---

## Mollie API

### Test Mode

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Enabled |
| **Required** | No      |

**Description**: When enabled, all Mollie payments are processed through the test API. Disable this option only when you are ready to go live.

### Test API Key

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Password field     |
| **Default**  | Empty              |
| **Required** | Yes (for testing)  |

**Description**: Your Mollie test API key (starts with `test_`). You can find this in your Mollie Dashboard under **Developers → API keys**.

### Live API Key

| Property     | Value            |
| ------------ | ---------------- |
| **Type**     | Password field   |
| **Default**  | Empty            |
| **Required** | Yes (for live)   |

**Description**: Your Mollie live API key (starts with `live_`). Only used when test mode is disabled.

### Webhook URL

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Text field |
| **Default**  | Empty      |
| **Required** | No         |

**Description**: The URL where Mollie sends payment notifications. In most cases this is configured automatically. Only set manually if you use a proxy or tunnel.

### Test API Connection

**Type**: Button

**Description**: Click this button to test the connection to Mollie with the stored API keys. You will receive confirmation whether the connection is successful.

---

## Renewal Behaviour

### Out-of-Stock Behaviour

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Select   |
| **Default**  | Skip     |
| **Required** | No       |

**Options**:
- `Skip`: The item is omitted from this renewal, the order is created without it
- `Pause and retry`: The subscription is paused and checked again on the next run
- `Execute without item`: The renewal is processed without the out-of-stock item

**Example Use Case**: Choose "Pause and retry" if all items in a subscription must be delivered together.

### Deleted Product Behaviour

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Select   |
| **Default**  | Skip     |
| **Required** | No       |

**Options**:
- `Skip`: The deleted item is skipped, remaining items are ordered
- `Pause and retry`: The subscription is paused until an admin intervenes
- `Execute without item`: The renewal is processed without the deleted item

**Example Use Case**: Choose "Pause and retry" if you want to manually assign a replacement product for deleted items.

---

## Recommended Configurations

### For Getting Started (Test Mode)

| Setting                        | Recommended Value |
| ------------------------------ | ----------------- |
| Enable Plugin                  | Enabled           |
| Test Mode                      | Enabled           |
| Subscription Discount          | 5%                |
| Minimum Interval               | 1 week            |
| Maximum Interval               | 8 weeks           |
| Allow Customers to Change      | Disabled          |
| SEPA Direct Debit              | Enabled           |

### For Maximum Customer Flexibility

| Setting                        | Recommended Value |
| ------------------------------ | ----------------- |
| Allow Customers to Change      | Enabled           |
| Override Renewal Shift         | Enabled           |
| Subscription Discount          | 10%               |
| Out-of-Stock Behaviour         | Execute without   |

### For Strict Control

| Setting                        | Recommended Value |
| ------------------------------ | ----------------- |
| Allow Customers to Change      | Disabled          |
| Override Renewal Shift         | Disabled          |
| Out-of-Stock Behaviour         | Pause and retry   |
| Deleted Product Behaviour      | Pause and retry   |
| Maximum SEPA Retries           | 2                 |
