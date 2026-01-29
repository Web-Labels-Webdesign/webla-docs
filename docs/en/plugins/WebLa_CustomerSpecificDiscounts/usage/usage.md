# Usage Guide

This guide covers all features and functionality of Customer Specific Discounts.

---

## Table of Contents

- [Discount Types Overview](#discount-types-overview)
- [Individual Customer Discounts](#individual-customer-discounts)
- [Customer Group Discounts](#customer-group-discounts)
- [Product-Specific Discounts](#product-specific-discounts)
- [Global Customer Discounts](#global-customer-discounts)
- [Global Group Discounts](#global-group-discounts)
- [Guest Discounts](#guest-discounts)
- [Storefront Display](#storefront-display)
- [Troubleshooting](#troubleshooting)

---

## Discount Types Overview

The plugin offers five different discount levels that work together depending on configuration:

| Discount Type | Application Scope | Management Location |
| ------------- | ----------------- | ------------------- |
| Product Discount | Single product | Product → Custom Fields |
| Individual Customer Discount | Category or product group per customer | Customer → Customer Discounts |
| Global Customer Discount | All products for a customer | Customer → Custom Fields |
| Customer Group Discount | Category or product group for customer group | Customer Group → Discounts |
| Global Group Discount | All products for customer group | Customer Group → Custom Fields |

---

## Individual Customer Discounts

### What They Do

Individual customer discounts allow you to give a specific customer a percentage discount on all products in a category or dynamic product group.

### How to Use

1. Navigate to **Customers → Overview** in the admin
2. Open the customer profile by clicking on the customer name
3. Scroll down to the **Customer Discounts** section
4. Select a **Category** and/or a **Dynamic Product Group**
5. Enter the **Discount in percent** (e.g. 10 for 10%)
6. Click **Add Discount**
7. Save the customer via the **Save** button at the top right

### Important Notes

- You must select at least one category OR a dynamic product group
- If you select both, both criteria must be met (AND logic)
- The discount value must be between 0 and 100
- Changes only become active after saving the customer profile

### Tips & Best Practices

- Use dynamic product groups for flexible discount rules that automatically include new products
- Use categories for simple, static discount assignments
- Check the priority settings if a customer should have multiple discounts

---

## Customer Group Discounts

### What They Do

Customer group discounts allow you to automatically give all members of a customer group a discount on specific categories or product groups. This is ideal for B2B tiered pricing or dealer discounts.

### How to Use

1. Navigate to **Settings → Shop → Customer Groups**
2. Open a customer group by clicking on the name
3. Scroll down to the **Group Discounts** section
4. Select a **Category** and/or a **Dynamic Product Group**
5. Enter the **Discount in percent**
6. Click **Add Discount**
7. Save the customer group

### Difference from Individual Discounts

- Customer group discounts automatically apply to ALL members of the group
- You don't need to configure each customer individually
- In terms of priority, individual discounts are above group discounts by default

### Tips & Best Practices

- Create separate customer groups for different discount tiers (e.g. "Dealers Bronze", "Dealers Silver", "Dealers Gold")
- Combine with global group discounts for base discounts plus category discounts

---

## Product-Specific Discounts

### What They Do

Product-specific discounts allow you to set a fixed discount on individual products - regardless of the customer.

### How to Use

1. Navigate to **Catalogues → Products**
2. Open a product
3. Switch to the **Custom Fields** tab
4. Find the field **Product-specific Discount (%)**
5. Enter the discount value (e.g. 20 for 20%)
6. Save the product

### Important Notes

- Product discounts are only displayed for logged-in customers
- These discounts can be combined with other discount types (depending on priority mode)
- You can disable this feature in the plugin settings

---

## Global Customer Discounts

### What They Do

A global customer discount applies to ALL products in the shop for a specific customer.

### How to Use

1. Navigate to **Customers → Overview**
2. Open the customer profile
3. Switch to the **Custom Fields** tab
4. Find the field **Global Customer Discount (%)**
5. Enter the discount value
6. Save the customer

### Example Use Case

Ideal for VIP customers or long-term loyal customers who should receive a flat discount on everything.

---

## Global Group Discounts

### What They Do

A global group discount applies to ALL products in the shop for ALL members of a customer group.

### How to Use

1. Navigate to **Settings → Shop → Customer Groups**
2. Open a customer group
3. Switch to the **Custom Fields** tab
4. Find the field **Global Discount (%)**
5. Enter the discount value
6. Save the customer group

### Important Notes

- This feature must be enabled in the plugin settings
- The discount acts as a fallback if no more specific discount exists

---

## Guest Discounts

### What They Do

Guest discounts allow you to display the default customer group's global discount to non-logged-in visitors. This is useful for showing promotional prices to all visitors without requiring them to create an account or log in.

### How to Use

1. Navigate to **Extensions → My Extensions → Customer Specific Discounts → Configure**
2. Enable the option **Apply default group discounts to guests**
3. Make sure you have set a global discount on your default customer group (see [Global Group Discounts](#global-group-discounts))
4. Save the settings and clear the cache

### How It Works

When enabled, the plugin checks for visitors who are not logged in and applies the global discount from the shop's default customer group. This means:
- All visitors see the same promotional pricing
- No account creation or login is required
- The discount is applied consistently across product listings, product pages, and checkout

### Example Use Case

**Scenario**: You have a 10% off promotion for all customers and want everyone to see the discounted prices immediately.

1. Set a 10% global discount on your default customer group
2. Enable "Apply default group discounts to guests"
3. All visitors now see prices with the 10% discount applied

### Important Notes

- Only global group discounts from the default customer group are applied to guests
- Category-specific and individual customer discounts still require login
- When a guest logs in, their specific customer or group discounts take precedence

---

## Storefront Display

### Product Listing and Product Page

When a logged-in customer has a discount, they see:
- The reduced price as the main price
- The original price crossed out (if configured)
- The percentage savings

### Cart and Checkout

Depending on configuration, the discount is displayed as:
- **Separate discount line item**: A separate line with a negative amount
- **Reduced price**: The product price is already reduced, original price crossed out

### Total Savings

If enabled, a "You save X" message appears in the cart and checkout.

---

## Troubleshooting

### Discount Not Displayed

**Symptom**: The customer sees the original price instead of the discounted price

**Possible Causes**:
1. The customer is not logged in
2. The corresponding discount type is disabled in settings
3. The product is not in the discount-eligible category/product group
4. The cache has not been cleared

**Solution**:
- Check the login status
- Review the plugin settings
- Clear the cache under **Settings → System → Caches & Indexes**

### Wrong Discount Applied

**Symptom**: A different discount than expected is applied

**Cause**: The priority mode determines which discount applies when there are overlaps

**Solution**:
- Check the priority mode in the plugin settings
- Review all discount sources for the customer (individual, global, group)

### Discount Appears Twice

**Symptom**: A product is discounted multiple times

**Cause**: The "Add discount only once" option is disabled

**Solution**: Enable the option in the plugin settings

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [Step-by-Step Guides](../how_to.md)
