# How-To Guide

This guide provides step-by-step workflows for common tasks with the WebLa Subscription Plugin.

---

## How the Plugin Works

### Data Flow Overview

```
Customer orders subscription product → Subscription created → Automatic renewal → New order
```

**Detailed Flow**:

1. **Order**: A customer adds a product with a subscription option to the cart and completes the order
2. **Creation**: The plugin automatically creates a subscription based on the chosen interval and payment method
3. **Reminder**: 3 days before the next renewal, the customer receives a reminder email
4. **Renewal**: On the due date, the background task creates a new order and charges the stored payment method
5. **Repeat**: The next renewal date is calculated and the cycle begins again

### Payment Flow with Mollie

```
Initial order (sequenceType: first) → Mandate saved → Renewal (sequenceType: recurring)
```

During the initial order, a payment mandate is stored at Mollie. All subsequent renewals use this mandate for automatic charges.

### Payment Flow with Prepayment

```
Renewal created → Status: Awaiting Prepayment → Payment received confirmed → Subscription active
```

With prepayment, the subscription pauses after renewal and waits for confirmation of payment receipt.

---

## Common Workflows

### How to: Set Up Your First Subscription Product

**Goal**: Offer an existing product as a subscription

**Time Required**: Approximately 5 minutes

**Prerequisites**:
- Plugin is installed and activated
- Basic configuration is complete

**Steps**:

1. **Check plugin settings**
   - Navigate to: `Extensions → My Extensions → WebLa Subscription Plugin → Configure`
   - Ensure the plugin is enabled and the desired interval limits are set

2. **Edit the product**
   - Navigate to: `Catalogues → Products → [Your Product]`
   - Switch to the **Subscription** tab

3. **Add subscription options**
   - Click **Add Option**
   - Enter: Interval (e.g., 2 weeks), Label (e.g., "Every 2 weeks"), Position (1)
   - Repeat for additional intervals (e.g., 4 weeks, 6 weeks)
   - Activate all desired options

4. **Save the product**
   - Click **Save**

**Result**: On the product detail page in the storefront, the choice between one-time purchase and subscription with the configured intervals appears.

---

### How to: Set Up Mollie Payments

**Goal**: Activate credit card and SEPA direct debit for subscriptions

**Time Required**: Approximately 10 minutes

**Prerequisites**:
- Mollie account available
- Mollie API keys available

**Steps**:

1. **Enter API keys**
   - Navigate to: `Extensions → My Extensions → WebLa Subscription Plugin → Configure`
   - Section **Mollie API**
   - Enter the **Test API Key**
   - Click **Test API Connection**

2. **Assign payment methods**
   - Section **Payment Methods**
   - Select the Mollie credit card payment method for **Credit Card Payment Method**
   - Select the Mollie SEPA payment method for **SEPA Payment Method**

3. **Configure SEPA**
   - Enable **SEPA Direct Debit**
   - Set **Maximum SEPA Retries** (recommended: 3)

4. **Save and test**
   - Save the configuration
   - Place a test order with a subscription
   - Check the Mollie Dashboard to verify the payment was received

5. **Go live**
   - Enter the **Live API Key**
   - Disable **Test Mode**
   - Save again

**Result**: Customers can choose credit card or SEPA direct debit for subscription orders. Renewals are processed automatically via Mollie.

---

### How to: Handle a Paused Subscription

**Goal**: Reactivate or adjust a paused subscription

**Time Required**: Approximately 2 minutes

**Steps**:

1. **Find the subscription**
   - Navigate to: `Orders → Subscriptions`
   - Filter by status "Paused"
   - Click on the desired subscription

2. **Check the status**
   - Check the reason for pausing (Notes field)
   - Verify all items are available

3. **Make changes** (optional)
   - Adjust the interval
   - Change the payment method
   - Update item quantities

4. **Reactivate**
   - Click **Reactivate**
   - The next renewal date is calculated automatically

**Result**: The subscription is active again and will be renewed on the calculated date.

---

### How to: Handle a SEPA Failure

**Goal**: Repair a subscription with a failed SEPA payment

**Time Required**: Approximately 5 minutes

**Steps**:

1. **Find the subscription**
   - Navigate to: `Orders → Subscriptions`
   - Filter by status "SEPA Failed"

2. **Assess the situation**
   - Open the detail view
   - Check the **SEPA Failure Count** — how many attempts have been made?
   - Check the notes for additional information

3. **Change payment method** (if needed)
   - Change the payment method to an alternative (e.g., credit card or invoice)
   - Save the change

4. **Reactivate**
   - Click **Reactivate**
   - The SEPA failure counter is reset

5. **Inform the customer**
   - Contact the customer and request an update to their payment details

**Result**: The subscription is active again with a working payment method.

---

## Advanced Workflows

### Managing Discount Tiers

**Complexity**: Medium

**When to Use**: When you want to reward loyal customers with additional discounts

Discount tiers are managed in the database table `webla_subscription_discount`. Each tier defines:

- **Minimum Renewal Number**: From which renewal the discount applies
- **Discount Percentage**: How much additional discount is granted
- **Active**: Whether the tier is applied

Default tiers are created during initial installation.

---

## Quick Reference

| Task                        | Key Steps                                                         | Settings Required          |
| --------------------------- | ----------------------------------------------------------------- | -------------------------- |
| Offer product as subscription | Product → Subscription tab → Add options                        | Plugin active              |
| Set up Mollie               | Configure → API keys → Assign payment methods                    | Mollie account             |
| Force renewal               | Subscription → Detail view → Force Renewal                       | —                          |
| Pause subscription          | Subscription → Detail view → Pause                               | —                          |
| Change interval (admin)     | Subscription → Detail view → Interval field → Save               | —                          |
| Change interval (customer)  | My Account → Subscriptions → Change Interval                     | Interval change enabled    |
| Handle SEPA failure         | Status filter "SEPA Failed" → Change payment → Reactivate        | —                          |

---

## Best Practices

1. **Test mode first**: Always set everything up in Mollie test mode first and run test orders before going live
2. **Keep reminders enabled**: Automatic reminder emails reduce churn rate as customers are informed before charges
3. **Moderate discounts**: Start with a moderate base discount (5%) and use loyalty tiers for long-term customers
4. **Regular checks**: Regularly review the dashboard for failed payments and paused subscriptions
5. **SEPA retries**: Keep the maximum number of SEPA retries at 3 to avoid overcharging customers

## What to Avoid

- ❌ Switching directly to live mode without running test orders
- ❌ Activating all interval options at once — offer 2–3 sensible intervals
- ❌ High discounts without loyalty tiers — this reduces value for new customers
- ❌ Setting SEPA retries above 5 — this can damage customer trust
- ❌ Modifying subscriptions directly in the database — always use the admin interface
