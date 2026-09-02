# Admin Features

> Part of the Subscription Plugin for Mollie — [See main usage guide](./usage.md)

## Overview

In the Shopware admin, you will find all tools for managing subscriptions. The plugin adds a new area under **Orders → Subscriptions** that includes a dashboard, a list view, and detail pages.

---

## Dashboard

**Location**: Orders → Subscriptions → Dashboard

The dashboard provides an overview of the key metrics for your subscription business:

### KPI Cards

| Metric                  | Description                                                   |
| ----------------------- | ------------------------------------------------------------- |
| **Active Subscriptions**| Number of subscriptions in the *Active* status                |
| **Upcoming Renewals**   | Active subscriptions due for renewal in the next 7 days       |
| **Monthly Revenue (MRR)** | Estimated monthly recurring revenue — each active subscription's base price normalised to a month (4.33 weeks) |
| **Churn Rate**          | Subscriptions cancelled in the last 30 days, divided by active plus recently cancelled ones |

Below the KPI cards, the dashboard breaks down all subscriptions by status (active, paused, cancelled, expired, SEPA failed, awaiting prepayment, payment pending) and shows alert banners when SEPA failures or outstanding prepayments exist.

---

## Subscription List

**Location**: Orders → Subscriptions

### Columns

| Column            | Description                                    |
| ----------------- | ---------------------------------------------- |
| **Customer**      | Customer name                                  |
| **Status**        | Current subscription status with colour indicator |
| **Interval**      | Delivery interval in weeks                     |
| **Next Renewal**  | Date of next planned renewal                   |
| **Payment Method**| Configured payment method                      |
| **Created**       | Date of subscription creation                  |

### Filtering and Sorting

Filters live in the sidebar (funnel icon):

- **Status**: active, paused, cancelled, expired, SEPA failed, awaiting prepayment, payment pending
- **Payment Method**: card, SEPA, PayPal, invoice, prepayment
- **Interval**: filter by interval in weeks
- **Next Renewal From / To**: date range on the next renewal date
- **Sorting**: Click on a column header to sort
- **Search**: The search bar matches customer name, email address and customer number

> **Note**: A CSV export exists as an API endpoint (`POST /api/_action/webla-subscription/export`) but has no button in the administration.

---

## Subscription Detail View

**Location**: Orders → Subscriptions → [Select Subscription]

The detail page is divided into multiple tabs:

### Tab: General

Shows all basic information about the subscription:

- **Customer**: Name and link to customer profile
- **Sales Channel**: The associated sales channel
- **Status**: Current status with change option
- **Interval**: Delivery interval (changeable)
- **Next Renewal**: Planned date
- **Payment Method**: Current payment method (changeable)
- **Initial Order**: Link to the original order
- **Base Price**: Total price per delivery
- **Coupon Applied**: Whether a coupon was used on the initial order

#### Mollie Data (if applicable)

- **Mollie Customer ID**: The customer's ID at Mollie
- **Mollie Mandate ID**: The payment mandate ID
- **SEPA Failure Count**: Number of failed SEPA direct debits

#### Notes

Free-text field for internal notes about the subscription. These are only visible in the admin and are not communicated to the customer.

### Tab: Items

Shows all products in the subscription:

- **Product Name**: With link to the product
- **Quantity**: Order quantity per renewal
- **Unit Price**: Price per unit
- **Quantity Change**: Adjust quantity directly

### Tab: Order History

Chronological list of all previous renewals:

- **Renewal Number**: Sequential number
- **Order Number**: Link to the associated order
- **Type**: Initial order or renewal
- **Date**: Time of the order

---

## Admin Actions

### Pause Subscription

1. Open the subscription in the detail view
2. Click **Pause**
3. The subscription is paused immediately

### Reactivate Subscription

1. Open a paused subscription
2. Click **Reactivate**
3. The subscription is reactivated and a new renewal date is calculated

### Cancel Subscription

1. Open the subscription in the detail view
2. Click **Cancel**
3. The subscription is ended and the customer can no longer manage it in the portal

> **Note**: Unlike customers, an admin can reactivate a cancelled subscription — the cancellation date and reason are cleared.

### Force Renewal

Creates an immediate renewal order regardless of the scheduled date.

1. Open the subscription in the detail view
2. Click **Force Renewal**
3. A new order is created

### Change Interval

1. Open the subscription in the detail view
2. Change the value in the **Interval** field
3. Save the change

### Change Payment Method

1. Open the subscription in the detail view
2. Select a new **Payment Method**
3. Save the change

### Adjust Item Quantities

1. Open the **Items** tab
2. Change the quantity in the input field
3. The change is saved automatically

### Edit Notes

1. Open the **General** tab
2. Write your note in the free-text field
3. Click **Save Notes**

---

## Integration with Other Admin Areas

### Customer Profile

In the customer profile (**Customers → [Customer]**), an additional **Subscriptions** card is displayed that lists all subscriptions for the customer. From here, you can navigate directly to the subscription detail view. The card also carries an **Interval change allowed** switch that overrides the global setting for this one customer.

### Product Details

On the product page (**Catalogues → Products → [Product]**), the plugin adds a **Subscription Options** card at the bottom of the **General** tab, where you configure the available subscription options and the *Subscription only* mode for this product.

---

## Permissions

The plugin defines its own permissions that can be assigned via roles:

| Permission                                  | Description                     |
| ------------------------------------------- | ------------------------------- |
| `webla_subscription:read`                   | Read and list subscriptions     |
| `webla_subscription:create`                 | Create subscriptions            |
| `webla_subscription:update`                 | Edit subscriptions              |
| `webla_subscription:delete`                 | Delete subscriptions            |
| `webla_product_subscription_option:read`    | Read product options            |
| `webla_product_subscription_option:create`  | Create product options          |
| `webla_product_subscription_option:update`  | Edit product options            |
| `webla_product_subscription_option:delete`  | Delete product options          |

Configure these under **Settings → System → Users & Permissions → Roles**.
