# Usage Guide

This guide covers all features and functionality of the Subscription Plugin for Mollie.

---

## Table of Contents

- [Setting Up Products for Subscriptions](#setting-up-products-for-subscriptions)
- [Configuring Payment Methods](#configuring-payment-methods)
- [Discounts and Loyalty Tiers](#discounts-and-loyalty-tiers)
- [Free Items](#free-items)
- [Email Notifications](#email-notifications)
- [Background Tasks](#background-tasks)

---

## Setting Up Products for Subscriptions

### What It Does

You can configure individual subscription options for each product. In the storefront, customers will then see a choice between one-time purchase and subscription with various intervals.

### How to Set It Up

1. Navigate to **Catalogues → Products → [Your Product]**
2. Stay on the **General** tab and scroll to the **Subscription Options** card added by the plugin at the bottom of the page
3. Click **Add Option**
4. Configure for each option:
   - **Interval (Weeks)**: The delivery interval for this option
   - **Label**: The displayed name (e.g., "Every 2 weeks")
   - **Discount (%)**: Optional discount for this option, overriding the general subscription discount
   - **Position**: Display order
   - **Active**: Whether this option is visible
5. Save the product

### Subscription-Only Products

If a product should only be available as a subscription:

1. Open the product under **Catalogues → Products → [Your Product]**
2. Scroll to the **Subscription Options** card on the **General** tab
3. Enable the **Subscription only** switch at the top of the card
4. Save the product

In the storefront, the one-time purchase option will be hidden and customers can only order the product as a subscription.

### Storefront Display

On the product detail page, customers see:

- **One-time / Subscribe**: Choice between one-time order and subscription
- **Interval Dropdown**: Selection of desired delivery interval (if multiple options are configured)
- **Discount Badge**: Display of the subscription discount (e.g., "Save 5%")

---

## Configuring Payment Methods

### Supported Payment Methods

The plugin offers five payment methods for subscriptions:

| Payment Method        | Automatic | Mollie Required | Description                                     |
| --------------------- | --------- | --------------- | ----------------------------------------------- |
| **Credit Card**       | Yes       | Yes             | Automatic charge via Mollie                     |
| **SEPA Direct Debit** | Yes       | Yes             | Automatic debit via Mollie                      |
| **PayPal**            | Yes       | Yes             | Automatic charge via Mollie                     |
| **Invoice**           | No        | No              | Manual payment, subscription stays active       |
| **Prepayment**        | No        | No              | Waits for payment receipt before activation     |

### Setting Up Mollie

1. Navigate to **Extensions → My Extensions → Subscription Plugin for Mollie → Configure**
2. Scroll to the **Mollie API** section
3. Enter your **Test API Key** (starts with `test_`)
4. Click **Test API Connection**
5. On successful connection: Also enter the **Live API Key**
6. Disable **Test Mode** only when you are ready for live operation

### Assigning Payment Methods

1. Stay in the plugin configuration
2. In the **Payment Methods** section:
   - Select the Mollie credit card payment method for **Credit Card Payment Method**
   - Select the Mollie SEPA payment method for **SEPA Payment Method**
   - Select your invoice payment method for **Invoice Payment Method** (optional)
   - Select the Mollie PayPal payment method for **PayPal Payment Method** (optional)
   - Select your prepayment method for **Prepayment Payment Method** (optional)
3. Select the **Renewal Shipping Method** (optional fallback — renewals reuse the shipping method of the initial order whenever it is still active)
4. Save the configuration

### Payment Method Filtering at Checkout

When a customer has subscription items in the cart, only payment methods configured for subscriptions are shown at checkout. Non-subscription payment methods are hidden.

---

## Discounts and Loyalty Tiers

### Base Subscription Discount

The percentage set under **Configuration → Pricing & Discounts → Subscription Discount (%)** is automatically applied to every subscription order.

### Loyalty Tiers

In addition to the base discount, tiered discounts can activate after a certain number of renewals. There is no admin interface for them: tiers are rows in the database table `webla_subscription_discount` with `discount_type = 'loyalty_tier'`, and no tiers are created on installation. Tier discounts apply to renewal orders only — the initial order uses the base discount.

Example:
| From Renewal | Additional Discount |
| ------------ | ------------------- |
| 3            | 2%                  |
| 6            | 5%                  |
| 12           | 8%                  |

---

## Free Items

You can add free products to subscriptions that are automatically included with every renewal.

There is no admin interface for free items. They are created per subscription through the plugin's admin API:

`POST /api/_action/webla-subscription/{subscriptionId}/free-item` with `productId` and `quantity`.

Every free item stored this way is added to each renewal order automatically.

---

## Email Notifications

The plugin ships eight email templates, each triggered by a Flow Builder flow that is created on installation:

### Renewal Reminder

- **When**: 3 days before the next renewal
- **Content**: Next renewal date, link to subscription management
- **Template Name**: `webla_subscription.renewal_reminder`

### Cancellation Confirmation

- **When**: Immediately after cancellation by customer or admin
- **Content**: Cancellation confirmation, optional reason
- **Template Name**: `webla_subscription.cancelled`

### Reactivation Confirmation

- **When**: When a paused, cancelled or SEPA-failed subscription is reactivated
- **Content**: Confirmation and next renewal date
- **Template Name**: `webla_subscription.reactivated`

### Renewal Confirmation

- **When**: After a renewal order has been created
- **Content**: Renewal number and order reference
- **Template Name**: `webla_subscription.renewed`

### SEPA Payment Failed

- **When**: On failed SEPA direct debit
- **Content**: Information about failed payment, instructions for updating payment method
- **Template Name**: `webla_subscription.sepa_failed`

### Price Change

- **When**: When the price of a subscription product changes
- **Content**: Old and new price, effective date
- **Template Name**: `webla_subscription.price_changed`

### Out-of-Stock Item

- **When**: On renewal with the *Execute without item* behaviour, when an item is out of stock
- **Content**: The items left out of the renewal
- **Template Name**: `webla_subscription.out_of_stock`

### Deleted Product

- **When**: On renewal with the *Execute without item* behaviour, when a product no longer exists
- **Content**: The items left out of the renewal
- **Template Name**: `webla_subscription.deleted_product`

### Customising Email Templates

You can edit the email templates under **Settings → System → Email Templates**. Search for the template names listed above.

---

## Background Tasks

The plugin registers four automatic background tasks that are executed at regular intervals by Shopware:

### Subscription Renewal

Checks all active subscriptions for due dates and automatically creates new orders. Takes into account the configured behaviours for out-of-stock or deleted products.

### Renewal Reminders

Sends reminder emails 3 days before each upcoming renewal. Each reminder is only sent once per renewal cycle.

### Mollie Payment Status Polling

Queries the current payment status from Mollie to update local order statuses. Processes up to 200 transactions per run with a 7-day lookback period.

### Prepayment Monitor

Checks every subscription in the *Awaiting Prepayment* status: when the payment transaction of its latest subscription order has reached the `paid` state, the subscription is set back to *Active* and the next renewal date is moved one interval ahead. Partially paid orders are skipped and logged; subscriptions stay in *Awaiting Prepayment* until payment arrives.

---

## Related Documentation

- [Customer Portal (Storefront)](subscriptions.md)
- [Admin Features](admin.md)
- [Settings Reference](../configuration/settings.md)
- [Step-by-Step Guides](../how_to.md)
