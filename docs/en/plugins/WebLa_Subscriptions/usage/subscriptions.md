# Subscription Management (Customer Portal)

> Part of the WebLa Subscription Plugin — [See main usage guide](./usage.md)

## Overview

The customer portal is the central area where your customers manage their subscriptions independently. It is accessible in the customer account under **My Account → Subscriptions** and provides full control over delivery intervals, items, pausing, and cancellations.

---

## Subscription Overview

**Location in Storefront**: My Account → Subscriptions

### What Customers See

The overview page displays all customer subscriptions as cards:

- **Status Indicator**: Colour-coded status (Active, Paused, Cancelled, etc.)
- **Product Images**: Preview images of included items
- **Interval**: The current delivery interval (e.g., "Every 2 weeks")
- **Next Delivery**: Date of the next planned renewal
- **Price per Delivery**: Total price of one delivery
- **Manage Link**: Direct access to the detail view

### Consolidate Deliveries

When a customer has multiple active subscriptions, a **Consolidate Deliveries** button is shown. This allows subscriptions to be combined to a shared renewal date to save on shipping costs.

1. Click **Consolidate Deliveries**
2. In the modal, select the subscriptions to consolidate
3. Confirm the consolidation
4. All selected subscriptions receive the same next renewal date

---

## Subscription Detail View

**Location in Storefront**: My Account → Subscriptions → [Select Subscription]

### Status Display

At the top of the page, a coloured banner shows the current status:

| Status                   | Colour | Description                                     |
| ------------------------ | ------ | ----------------------------------------------- |
| **Active**               | Green  | Subscription is running, next renewal planned   |
| **Paused**               | Yellow | Paused by customer or admin                     |
| **Cancelled**            | Red    | Permanently ended                               |
| **SEPA Failed**          | Orange | Payment failed, action required                 |
| **Awaiting Prepayment**  | Blue   | Prepayment pending                              |
| **Payment Pending**      | Grey   | Payment is being processed                      |

### Managing Items

In the **Items** section, customers see all products in their subscription:

- **Product Image and Name**: Visual identification
- **Quantity**: Current order quantity
- **Unit Price**: Price per unit
- **Change Quantity**: Input field for quantity changes
- **Remove Item**: Button to remove an item from the subscription

#### Changing Quantity

1. Change the number in the quantity field
2. Click **Update**
3. The change takes effect from the next renewal

#### Removing an Item

1. Click the **Remove** icon next to the item
2. Confirm the removal in the dialog
3. The item is removed from the subscription

---

## Actions

### Order Early

Triggers an immediate renewal without waiting for the next scheduled date.

1. Click **Order Now**
2. Confirm in the modal
3. A new order is created
4. The next renewal date is recalculated (if configured)

### Pause Subscription

Temporarily suspends the subscription. No renewals are processed while paused.

1. Click **Pause**
2. Optionally select a date until which to pause
3. Confirm the pause
4. The subscription will only be renewed after the pause expires or after manually resuming

### Resume Subscription

Reactivates a paused subscription.

1. Click **Resume**
2. The subscription changes back to "Active" status
3. The next renewal date is calculated

### Change Interval

Available when enabled by the shop owner (see [Settings](../configuration/settings.md)).

1. Click **Change Interval**
2. Select the desired new interval from the dropdown
3. Confirm the change
4. The new interval takes effect from the next renewal

### Cancel Subscription

Permanently ends the subscription. This action cannot be undone.

1. Click **Cancel**
2. Optionally enter a cancellation reason
3. Confirm the cancellation
4. You will receive a confirmation email

---

## Order History

In the **Order History** section, customers see all previous renewals:

- **Renewal Number**: Sequential number (1, 2, 3, ...)
- **Order Date**: Date of the renewal order
- **Type**: Initial order or renewal
- **Order Link**: Direct link to the order detail page

---

## Frequently Asked Questions

**Q: Can I reactivate a cancelled subscription?**
A: No, cancellation is permanent. You need to order the product as a new subscription.

**Q: What happens to my subscription if a product is no longer available?**
A: This depends on the shop configuration. Possible behaviours: the item is skipped, the subscription is paused, or the order is processed without the item.

**Q: Can I combine multiple subscriptions into one?**
A: Yes, via the "Consolidate Deliveries" feature on the subscription overview page. The subscriptions remain separate but are synchronised to the same delivery date.

**Q: Why do I only see certain payment methods during checkout?**
A: When subscription items are in the cart, only payment methods suitable for subscriptions are shown (credit card, SEPA direct debit, invoice, prepayment).
