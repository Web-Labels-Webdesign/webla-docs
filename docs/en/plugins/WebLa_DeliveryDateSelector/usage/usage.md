# Usage Guide

This guide covers all features and functionality of the Preferred Delivery Date for Customers plugin.

---

## Table of Contents

- [Date Selection in Checkout](#date-selection-in-checkout)
- [Holiday Management in Admin](#holiday-management-in-admin)
- [Preferred Delivery Date in the Order List](#preferred-delivery-date-in-the-order-list)
- [Preferred Delivery Date in Order Detail](#preferred-delivery-date-in-order-detail)
- [Individual Lead Times per Product, Category, and Shipping Method](#individual-lead-times)
- [Customer-Specific Delivery Days](#customer-specific-delivery-days)
- [Shopware Rules](#shopware-rules)
- [Troubleshooting](#troubleshooting)

---

## Date Selection in Checkout

### What It Does

A date picker field appears in the checkout area of your shop, where customers can select their preferred delivery date. The calendar only shows dates that are achievable — based on the delivery times of products in the cart, your configured buffer days, blocked weekdays, and public holidays.

### Where the Date Picker Appears

The date field is displayed in the following locations:

- **Off-canvas cart**: The small cart panel that slides open from the side
- **Cart page**: The full shopping cart overview
- **Address / Registration page**: The address entry page during checkout
- **Order confirmation page**: The final summary before placing the order
- **Thank-you page (after order)**: The selected date is shown after placing the order for confirmation

### Calendar Behavior

- The **earliest possible date** is pre-calculated and cannot be undercut by the customer
- Blocked weekdays and public holidays are greyed out and cannot be selected
- If a **maximum delivery date** is configured, dates beyond it are also greyed out
- If "Show Confirm Button" is enabled in the configuration, the customer must click the checkmark button after selecting a date. Otherwise, the date is saved automatically on selection.

### Removing a Date

Next to the date field there is a trash icon button that allows the customer to remove a previously selected date.

### Date in Cart Line Items

Once a date has been selected, it is also displayed as information alongside the individual cart line items.

---

## Holiday Management in Admin

### What It Does

The admin panel features a dedicated page for managing blocked dates. This is where both automatically loaded public holidays and manually added dates (e.g., company closures) are managed.

**Location**: Settings → Extensions → Preferred Delivery Date (calendar icon)

### Automatic Public Holidays

The plugin fetches all public holidays every hour via the [openholidaysapi.org](https://openholidaysapi.org) API — according to the configured federal state. These entries are marked as type "api" in the list and are automatically loaded for the current and the following year.

### Adding Manual Blocked Dates

1. Navigate to **Settings → Extensions → Preferred Delivery Date**
2. Click the **"Add Date"** button
3. Enter a name for the blocked day (e.g., "Company Holiday")
4. Select the desired date
5. Click **Save**

The date is immediately blocked and will no longer appear as selectable in the checkout calendar.

### Editing Existing Entries

Click directly on a date field in the list to edit it inline. Entries can also be deleted using the actions column.

### Disabling an Entry Instead of Deleting It

Each entry can be disabled via the "Active" toggle in the list without deleting it. Disabled entries are shown as selectable again in the checkout calendar.

---

## Preferred Delivery Date in the Order List

### What It Does

In the order list in the admin panel, the preferred delivery date is shown as an additional column. A date filter is also available to filter orders by their preferred delivery date.

**Location**: Orders → Overview

### "Preferred Delivery Date" Column

The column appears on the far right of the orders table. The date is displayed in DD/MM/YYYY format. Orders without a preferred delivery date show nothing in this column.

### "Preferred Delivery Date" Filter

In the filter area above the order list, you will find the "Preferred Delivery Date" filter. Use it to enter a date range ("from" to "to") to show all orders with a preferred delivery date within that range.

**Example Use Case**: To see all orders scheduled for delivery today, enter today's date in both fields.

---

## Preferred Delivery Date in Order Detail

### What It Does

In the detail view of an order, the preferred delivery date is displayed directly below the general order information.

**Location**: Orders → Overview → [Click on an order] → General Information

The date appears in the "General Information" section of the order detail view, below the standard order data.

---

## Individual Lead Times

### How the Calculation Works

The plugin determines the earliest possible delivery date by comparing the following lead times and using the **highest value**:

1. **Product lead time** (custom field on the product)
2. **Category lead time** (custom field on the product's category)
3. **Shipping method lead time** (custom field on the selected shipping method)
4. **Shopware delivery time** (native delivery time set on the product in Shopware)
5. **Fallback lead time** (from the plugin configuration)

When a cart contains multiple products, the latest result across all products is used as the minimum date.

### Setting a Lead Time on a Product

1. Navigate to **Catalogues → Products**
2. Open the desired product
3. Switch to the **Additional Fields** tab
4. Find the **"Delivery Date Lead Time"** field and enter the number of days (or hours, depending on plugin configuration)
5. Save the product

The unit (days or hours) is set globally in the plugin configuration under "Delivery Lead Time Unit".

### Setting a Lead Time on a Category

1. Navigate to **Catalogues → Categories**
2. Open the desired category
3. Switch to the **Additional Fields** tab
4. Find the **"Delivery Date Lead Time"** field and enter the desired number
5. Save the category

**Note**: The category lead time only applies if no lead time is set directly on the product.

### Setting a Lead Time on a Shipping Method

1. Navigate to **Settings → Shipping → Shipping Methods**
2. Open the desired shipping method
3. Switch to the **Additional Fields** tab
4. Find the **"Lead Time"** field and enter the desired number
5. Save the shipping method

---

## Customer-Specific Delivery Days

### What It Does

Individual delivery days can be configured for specific customers. When used, a particular customer will only see the weekdays configured for them in the calendar — regardless of the global settings.

This is useful for B2B shops where specific customers are only delivered on certain days, e.g., Tuesdays and Thursdays.

### Setup

1. Navigate to **Customers → Overview**
2. Open the desired customer
3. Switch to the **Additional Fields** tab
4. In the **"Delivery Day(s)"** field, select the permitted weekdays for this customer
5. In the **"Shipping methods for which the delivery days apply"** field, select the shipping methods for which this restriction should apply
6. Save the customer

**Note**: Customer-specific delivery days only take effect when one of the configured shipping methods is active at checkout.

---

## Shopware Rules

The plugin adds two new rule conditions to the Shopware rule engine. These can be used in **Settings → Shopware Rules**.

### Rule: Preferred Delivery Date Set

**Rule name**: `Preferred delivery date set`

Checks whether the customer has selected a preferred delivery date during checkout or not.

**Example Use Case**: Offer a discount when the customer sets a preferred delivery date (as it helps with planning).

### Rule: Preferred Delivery Date — Day of Week

**Rule name**: `Preferred delivery date weekday`

Checks which weekday the selected preferred delivery date falls on. Can be checked against one or more weekdays (is equal to / is not equal to).

**Example Use Case**: Display a specific shipping notice only when the preferred delivery date falls on a Monday.

---

## Troubleshooting

### The Calendar Shows No "Earliest Possible" Date

**Symptom**: The calendar is empty or all dates are greyed out.

**Cause**: There may be no available weekdays because all weekdays have been configured as "unavailable", or all upcoming dates are blocked by public holidays.

**Solution**: Check under **Extensions → Configure → Unavailable Days** that at least one weekday is available. Also check the holiday list under **Settings → Extensions → Preferred Delivery Date**.

---

### The Preferred Delivery Date Does Not Appear in Checkout

**Symptom**: The date field is not displayed during checkout.

**Cause**: The plugin is inactive or not enabled for the currently selected shipping method.

**Solution**: Check that the plugin is active under **Extensions → My Extensions**. Also check the "Active" setting in the plugin configuration. If "Active" is disabled, ensure the current shipping method is selected under "Only active for these shipping methods".

---

### Public Holidays Are Not Automatically Updated

**Symptom**: New or changed public holidays do not appear in the holiday list.

**Cause**: The hourly update via the scheduled task may not have run yet, or the task is disabled.

**Solution**: Check under **Settings → System → Scheduled Tasks** that the `webla-update-storefront-holidays` task is active and was recently executed. You can also trigger it manually there. Alternatively, you can run the update command manually: `bin/console webla:update-holidays`

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [How-To Guide](../how_to.md)
