# How-To Guide

This guide provides step-by-step workflows for common tasks with Customer Specific Discounts.

---

## How the Plugin Works

### Data Flow Overview

```
Customer logs in → Plugin checks all discount sources → Priority mode determines discount → Price is adjusted
```

**Detailed Flow**:
1. A customer logs into the shop
2. The plugin checks all available discount sources:
   - Product-specific discounts (custom field on product)
   - Individual customer discounts (category/product group)
   - Global customer discount (custom field on customer)
   - Customer group discounts (category/product group)
   - Global group discount (custom field on customer group)
3. The priority mode determines which discount is applied
4. The price is adjusted in product listing, product page, and cart

---

## Common Workflows

### How to: Set Up B2B Dealer Discount

**Goal**: All dealers receive 15% discount on all products

**Prerequisites**:
- A customer group "Dealers" exists or needs to be created
- Customers are assigned to this group

**Steps**:

1. **Open customer group**
   - Navigate to: `Settings → Shop → Customer Groups`
   - Click on the customer group "Dealers"

2. **Set global discount**
   - Switch to the "Custom Fields" tab
   - Enter `15` in the "Global Discount (%)" field

3. **Save and clear cache**
   - Click "Save"
   - Navigate to: `Settings → System → Caches & Indexes`
   - Click "Clear All"

**Result**: All members of the Dealers group now see 15% reduced prices on all products.

---

### How to: Category Discount for a Customer

**Goal**: A specific customer receives 10% discount on all products in a category

**Prerequisites**:
- The customer exists in the system
- The category exists and contains products

**Steps**:

1. **Open customer profile**
   - Navigate to: `Customers → Overview`
   - Search for the customer and click on the name

2. **Find customer discounts section**
   - Scroll down to the "Customer Discounts" section

3. **Add discount**
   - Select the desired category in the "Category" dropdown
   - Leave "Dynamic Product Group" empty
   - Enter `10` in the "Discount" field
   - Click "Add Discount"

4. **Save customer**
   - Click "Save" at the top right

**Result**: The customer now sees 10% discount on all products in the selected category.

**Troubleshooting**: If the discount doesn't appear, check:
- Is the customer logged in?
- Are the products assigned to the category?
- Was the cache cleared?

---

### How to: Tiered Discounts for Customer Groups

**Goal**: Different customer groups receive different discounts on a product category

**Prerequisites**:
- Multiple customer groups exist (e.g. "Bronze", "Silver", "Gold")
- A category "Premium Products" exists

**Steps**:

1. **Configure Bronze group**
   - Navigate to: `Settings → Shop → Customer Groups`
   - Open the "Bronze" group
   - Scroll to the "Group Discounts" section
   - Select Category: "Premium Products"
   - Discount: `5`
   - Click "Add Discount" and "Save"

2. **Configure Silver group**
   - Open the "Silver" group
   - Category: "Premium Products", Discount: `10`
   - Save

3. **Configure Gold group**
   - Open the "Gold" group
   - Category: "Premium Products", Discount: `15`
   - Save

4. **Clear cache**
   - Navigate to: `Settings → System → Caches & Indexes`
   - Click "Clear All"

**Result**:
- Bronze customers: 5% discount on Premium Products
- Silver customers: 10% discount on Premium Products
- Gold customers: 15% discount on Premium Products

---

### How to: Give VIP Customer a Flat Discount

**Goal**: A single VIP customer receives 20% on ALL products

**Steps**:

1. **Open customer profile**
   - Navigate to: `Customers → Overview`
   - Open the VIP customer's profile

2. **Set global customer discount**
   - Switch to the "Custom Fields" tab
   - Find the "Global Customer Discount (%)" field
   - Enter `20`

3. **Save**
   - Click "Save"

**Result**: The VIP customer sees 20% discount on all products in the shop.

---

### How to: Promotional Product with Fixed Discount

**Goal**: A specific product should always have 25% discount (for all logged-in customers)

**Steps**:

1. **Open product**
   - Navigate to: `Catalogues → Products`
   - Open the desired product

2. **Set product discount**
   - Switch to the "Custom Fields" tab
   - Find "Product-specific Discount (%)"
   - Enter `25`

3. **Save**
   - Click "Save"

**Result**: All logged-in customers see 25% discount on this product.

**Note**: Depending on the priority mode, an individual customer discount may override this product discount.

---

### How to: Migrate from WebLa_ProductGroupDiscount

**Goal**: Migrate existing discounts from the old plugin

**Prerequisites**:
- The old plugin WebLa_ProductGroupDiscount was installed
- Customer data contains the field `webla_product_group_discount_products`

**Steps**:

1. **Install and activate plugin**
   - The new plugin automatically recognizes the old discount data
   - Your customers continue to receive their discounts

2. **Use migration tool** (optional)
   - Connect to your server via SSH
   - Execute:
     ```
     bin/console webla:migrate-product-group-discounts
     ```
   - The command converts the text-based discounts to the new table structure

3. **Verify**
   - Check the customer discounts in admin
   - Test with a test customer in the frontend

**Result**: All discounts are transferred to the new system.

---

## Quick Reference

| Task | Navigation | Key Settings |
| ---- | ---------- | ------------ |
| Add customer discount | Customers → [Customer] → Customer Discounts | Category, Product Group, Percent |
| Add group discount | Settings → Customer Groups → [Group] → Group Discounts | Category, Product Group, Percent |
| Global customer discount | Customers → [Customer] → Custom Fields | Global Customer Discount (%) |
| Global group discount | Settings → Customer Groups → [Group] → Custom Fields | Global Discount (%) |
| Product discount | Catalogues → Products → [Product] → Custom Fields | Product-specific Discount (%) |
| Change priority | Extensions → Customer Specific Discounts → Configure | Discount Priority Mode |

---

## Best Practices

1. **Consistent naming**: Name your customer groups clearly (e.g. "Dealers 10%", "VIP 20%")
2. **Regular review**: Regularly check which discounts are active
3. **Mind the cache**: Always clear the cache after discount changes
4. **Test before going live**: Test new discounts with a test customer
5. **Maintain documentation**: Keep track of which customers have which special conditions

## What to Avoid

- Overlapping discounts without clear priority rule - define the priority mode
- Too many individual customer discounts - use customer groups for similar discounts
- Forgetting to clear cache - discount changes only appear after cache clearing
