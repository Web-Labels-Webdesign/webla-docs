# How-To Guide

This guide provides step-by-step workflows for common tasks with the Ultimate Bundle Plugin.

---

## How the Plugin Works

### Data Flow Overview

```
Admin: Create bundle → Assign groups & products → Index is updated
                                                        ↓
Storefront: Customer visits product page → Bundle is displayed → Customer selects options
                                                                        ↓
Cart: Bundle is added as a group → Discount is calculated → Order
```

**Example Flow**:
1. You create a bundle "Smartphone Set" with 10% discount and two groups
2. A customer visits the smartphone's product page
3. The bundle is displayed with all group options
4. The customer selects products from each group and adds the bundle to the cart
5. In the cart, the main product and group products are shown as related items, the discount is calculated automatically

---

## Common Workflows

### How to: Set Up Your First Bundle

**Goal**: Create a simple bundle with manually selected products.

**Time Required**: approx. 5 minutes

**Prerequisites**:
- Plugin is installed and activated
- At least 3 products exist in the shop

**Steps**:

1. **Check plugin settings**
   - Navigate to: `Extensions → My Extensions → Ultimate Bundle Plugin → Configure`
   - Ensure "Activate bundles" is enabled

2. **Create a new bundle**
   - Navigate to: `Catalogues → Bundles`
   - Click **Create bundle**
   - Enter title: e.g. "Starter Pack"
   - Discount: e.g. 15
   - Type: "Products"
   - Select the main product where the bundle should appear
   - Click **Save**

3. **Create the first group**
   - In the "Groups" section, click **Add**
   - Enter title: e.g. "Matching accessories"
   - Click **Edit**
   - In the modal: choose type "Products", select desired products
   - Click **Apply**

4. **Activate and test the bundle**
   - Set the "Active" toggle to enabled
   - Save the bundle
   - Open the main product's detail page in the storefront

**Result**: On the product page, you'll see the bundle with the product group and calculated discount.

**Troubleshooting**: If the bundle doesn't appear, clear the Shopware cache under `Settings → System → Caches & Indexes`.

---

### How to: Create a Bundle with Optional Groups

**Goal**: Create a flexible bundle where customers can decide which groups to add.

**Time Required**: approx. 10 minutes

**Prerequisites**:
- A bundle is already created
- Various product categories are available

**Steps**:

1. **Open the bundle**
   - Navigate to: `Catalogues → Bundles → [Your bundle]`

2. **Create a required group**
   - Add a new group (e.g. "Main accessories")
   - In the modal: leave "Optional" **disabled**
   - Assign products and click **Apply**

3. **Create an optional group**
   - Add another group (e.g. "Extras")
   - In the modal: enable **Optional**
   - Assign products and click **Apply**

4. **Save and test**
   - Save the bundle
   - In the storefront: the optional group shows a checkbox for including/excluding

**Result**: Customers must select a product from the required group but can deselect the optional group via checkbox.

---

### How to: Create a Dynamic Bundle with Product Stream

**Goal**: Create a bundle whose product selection updates automatically based on a product stream.

**Time Required**: approx. 10 minutes

**Prerequisites**:
- A product stream is set up under `Catalogues → Product Streams`

**Steps**:

1. **Create the bundle**
   - Navigate to: `Catalogues → Bundles → Create bundle`
   - Type: "Product stream"
   - Select the desired product stream
   - Configure discount and title

2. **Create groups with product stream**
   - Add a new group
   - In the modal: choose type "Product stream"
   - Select the appropriate stream
   - Apply and save

3. **Update the index**
   - Run in the console: `php bin/console wl-bundles:index`
   - Or wait for automatic indexing

**Result**: New products matching the product stream automatically become available as bundle options.

**Troubleshooting**: If new products don't appear, update the index manually.

---

### How to: Set Up Quantity Selection

**Goal**: Create a bundle where customers can choose the quantity per group product.

**Time Required**: approx. 5 minutes

**Prerequisites**:
- A bundle with at least one group is created

**Steps**:

1. **Edit the group**
   - Open the bundle and click **Edit** on the desired group

2. **Enable quantity selection**
   - In the modal: enable **Allow quantity selection**
   - Set **Maximum quantity** (e.g. 5)
   - Click **Apply**

3. **Save and test**
   - Save the bundle
   - In the storefront, a quantity field now appears next to the group product

**Result**: Customers can select the quantity per group product between 1 and the configured maximum.

---

## Advanced Workflows

### Bundle Without Discount (Promotional Bundle)

**Complexity**: Low

**When to Use**: You want to recommend products as a set without offering a price reduction.

1. Create a bundle as usual
2. Enable the **No discount** option in the bundle
3. Alternatively, set the discount to 0%

The bundle is displayed on the product page but shows no discount or crossed-out original price.

### Variant Bundle

**Complexity**: Medium

**When to Use**: You want a bundle assigned to a parent product to also appear on all variants of that product.

1. Enable in the plugin settings: **Inherit bundle to variants**
2. Create the bundle and assign the **parent product** (not the variant)
3. Update the index: `php bin/console wl-bundles:index`

The bundle now appears on the product page of the parent product and all its variants.

---

## Quick Reference

| Task                          | Key Steps                                          | Required Settings             |
| ----------------------------- | -------------------------------------------------- | ----------------------------- |
| Create bundle                 | Catalogues → Bundles → Create                      | Activate bundles              |
| Add group                     | Edit bundle → Groups → Add                         | -                             |
| Optional group                | Edit group → Enable Optional                       | -                             |
| Quantity selection             | Edit group → Enable quantity selection              | -                             |
| Automatic bundles             | -                                                  | Enable automatic bundles      |
| Update index                  | `php bin/console wl-bundles:index`                 | -                             |
| Change discount display        | Plugin configuration → Discount representation     | -                             |

---

## Best Practices

1. **Keep bundles clear**: Use 2-4 groups per bundle. Too many groups can overwhelm customers.
2. **Use descriptive titles**: Use descriptive group titles like "Choose your case" instead of "Group 1".
3. **Regular indexing**: For dynamic bundles (product streams/categories), schedule regular index updates.
4. **Test on different devices**: Check the display on both desktop and mobile devices.
5. **Set discounts wisely**: A discount of 5-15% is usually attractive enough without significantly impacting your margin.

## What to Avoid

- Too many active bundles per product - this can make the page confusing
- Bundles with sold-out products when "Hide products without stock" is disabled
- Forgetting to update the index after changes to product streams or categories
