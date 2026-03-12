# How-To Guide

This guide provides step-by-step workflows for common tasks with the Preferred Delivery Date for Customers plugin.

---

## How the Plugin Works

### Data Flow Overview

```
Customer adds products to cart
        ↓
Plugin calculates earliest possible delivery date
  (product delivery time + buffer time + order cut-off time)
        ↓
Public holidays and blocked weekdays are skipped
        ↓
Calendar shows only selectable dates from the minimum date onward
        ↓
Customer selects preferred delivery date
        ↓
Date is saved in the cart
        ↓
When order is placed: date is saved with the order
        ↓
Date visible in order confirmation, admin order list, and detail view
```

**Example Flow**:
1. Customer adds a product with "1–2 weeks" delivery time to the cart
2. Plugin configuration has a fallback buffer of 2 days
3. Plugin calculates: 2 weeks = 14 days → earliest possible date is 14 days from today
4. If that day is a Saturday (blocked), the minimum shifts to the next Monday
5. If Monday is a public holiday, it moves to Tuesday
6. The calendar opens with that Tuesday as the earliest selectable date

---

## Common Workflows

### How to: Set Up the Plugin for the First Time

**Goal**: Configure the plugin with basic settings after installation

**Steps**:

1. **Activate the plugin**
   - Navigate to: `Extensions → My Extensions`
   - Find "Preferred Delivery Date for Customers" and click **Activate**

2. **Open the plugin configuration**
   - Click the three dots next to the plugin → **Configure**
   - Or go to: `Extensions → My Extensions → Preferred Delivery Date → Configure`

3. **Select your federal state**
   - In the **"State"** field, select the state where your warehouse or dispatch center is located
   - This automatically loads the correct public holidays

4. **Set unavailable weekdays**
   - In the **"Unavailable Days"** field, select the days on which you do not deliver
   - Typically: Saturday and Sunday

5. **Set the fallback lead time**
   - In the **"Fallback Delivery Lead Time"** field, enter the minimum buffer (e.g., "2")
   - In the **"Fallback Lead Time Unit"** field, select the unit (e.g., "Days")

6. **Set the order cut-off time (optional)**
   - In the **"Delivery Lead Time — Use Next Day After"** field, enter your cut-off time (e.g., "14:00")

7. **Save the settings**
   - Click **Save**

**Result**: The date picker now appears in checkout with a correctly calculated minimum date.

---

### How to: Add Company Closure Days

**Goal**: Block multiple consecutive days as company holidays

**Steps**:

1. **Open the holiday management page**
   - Navigate to: `Settings → Extensions → Preferred Delivery Date`

2. **Add each day individually**
   - Click **"Add Date"**
   - Enter a name in the **"Name"** field (e.g., "Company Holiday")
   - Select the desired date
   - Click **Save**
   - Repeat this for each day of the company closure

**Result**: The added days are no longer selectable in the checkout calendar.

**Tip**: Add company closures well in advance — at least as far ahead as your longest product lead time — so customers ordering shortly before the closure cannot select dates during it.

---

### How to: Set a Product-Specific Lead Time

**Goal**: Give a product with a long production time its own lead time

**Steps**:

1. **Open the product**
   - Navigate to: `Catalogues → Products`
   - Open the desired product by clicking on it

2. **Switch to the "Additional Fields" tab**
   - Click on the **"Additional Fields"** tab

3. **Enter the lead time**
   - Find the **"Delivery Date Lead Time"** field
   - Enter the number of days (or hours, depending on the plugin configuration) this product requires as lead time
   - Example: "14" for 14 days

4. **Save the product**
   - Click **Save**

**Result**: When this product is in the cart, the earliest possible delivery date is automatically pushed at least 14 days into the future.

---

### How to: Activate the Plugin for Specific Shipping Methods Only

**Goal**: Only offer the preferred delivery date for express delivery, not for standard shipping

**Steps**:

1. **Open the plugin configuration**
   - Navigate to: `Extensions → My Extensions → Preferred Delivery Date → Configure`

2. **Disable "Active"**
   - Turn off the **"Active"** switch

3. **Select shipping methods**
   - In the **"Only active for these shipping methods"** field, select the desired shipping methods (e.g., "Express Delivery")

4. **Save**
   - Click **Save**

**Result**: The preferred delivery date is now only shown when the customer selects one of the specified shipping methods during checkout.

---

### How to: Filter Orders by Preferred Delivery Date

**Goal**: View all orders with a preferred delivery date scheduled for today

**Steps**:

1. **Open the order overview**
   - Navigate to: `Orders → Overview`

2. **Open the filter area**
   - Click the filter icon or the **"Filters"** button above the order list

3. **Set the date filter**
   - Find the **"Preferred Delivery Date"** filter
   - Enter today's date in the **"From"** field
   - Enter today's date in the **"To"** field

4. **Apply the filter**
   - Click **"Apply"** or the filter activates automatically

**Result**: The order list shows only orders where the preferred delivery date matches today.

---

### How to: Manually Trigger a Holiday Update

**Goal**: Refresh the holiday list immediately without waiting for the hourly automation

**Via admin (scheduled tasks)**:

1. Navigate to: `Settings → System → Scheduled Tasks`
2. Find the task **"webla-update-storefront-holidays"**
3. Click **"Run"**

**Via command line** (for developers / system administrators):

```bash
bin/console webla:update-holidays
```

**Result**: The holiday list is immediately updated with the latest data from openholidaysapi.org.

---

## Quick Reference

| Task                                  | Location in Admin                                          | Key Setting                          |
| ------------------------------------- | ---------------------------------------------------------- | ------------------------------------ |
| Activate / deactivate plugin          | Extensions → My Extensions                                 | "Active" switch                      |
| Configure buffer time                 | Plugin configuration                                       | Fallback Lead Time                   |
| Manage holidays / blocked dates       | Settings → Extensions → Preferred Delivery Date            | "Add Date" button                    |
| Product-specific lead time            | Catalogues → Products → Additional Fields                  | Delivery Date Lead Time              |
| Category lead time                    | Catalogues → Categories → Additional Fields                | Delivery Date Lead Time              |
| Shipping method lead time             | Settings → Shipping → Shipping Methods → Additional Fields | Lead Time                            |
| Filter orders by delivery date        | Orders → Overview → Filters                                | "Preferred Delivery Date" filter     |
| Customer-specific delivery days       | Customers → Overview → [Customer] → Additional Fields      | Delivery Day(s)                      |

---

## Best Practices

1. **Always set the correct federal state**: Select the state of your warehouse, not your company's registered address, since holidays are relevant for the dispatch location.

2. **Set a realistic order cut-off time**: If your logistics team processes orders until 2:00 PM, enter "14:00". Orders after that time will automatically receive the next available date.

3. **Use the fallback lead time as your minimum**: Set the fallback lead time to the minimum production time of your simplest product. For more complex products, set product-specific lead times.

4. **Add company closures in advance**: Block company closure days at least as far ahead as your longest product lead time, so no unrealistic dates are offered to customers ordering shortly before the closure.

5. **Set a maximum delivery date**: Set a sensible maximum (e.g., 3 months) to prevent customers from selecting dates far into the future.

## What to Avoid

- Marking all weekdays as "unavailable" — this results in no selectable dates being available
- Setting a fallback lead time that is too short (e.g., 0 days) — customers might select today's date before their items are ready to ship
- Manually managing holidays that are covered by the automatic API update — manual entries are not overwritten, but may end up duplicating automatic entries
