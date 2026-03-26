# Usage Guide

This guide covers all features and functionality of the Ultimate Bundle Plugin.

---

## Table of Contents

- [Creating Bundles](#creating-bundles)
- [Editing Bundles](#editing-bundles)
- [Managing Bundle Groups](#managing-bundle-groups)
- [Storefront Display](#storefront-display)
- [Cart Behaviour](#cart-behaviour)
- [Bundle Index](#bundle-index)
- [Troubleshooting](#troubleshooting)

---

## Creating Bundles

### What It Does

You can create product bundles that are displayed on the product detail pages of the included products. Customers see the bundle offer with all group products and can add everything to the cart with a single click.

### How to Create a Bundle

1. Navigate to **Catalogues → Bundles**
2. Click **Create bundle**
3. Fill in the basic settings:
   - **Title**: Enter a descriptive name for the bundle (e.g. "Complete Smartphone Set")
   - **Active**: Enable the bundle for display in the storefront
   - **Discount percentage**: Set the percentage discount (e.g. 10 for 10%)
4. Choose the **bundle type**:
   - **Products**: Manually select the main products on which the bundle should be displayed
   - **Product stream**: Select a product stream whose products automatically serve as bundle triggers
5. Click **Save**

### Advanced Bundle Options

- **Apply discount to parent product**: When enabled, the discount is calculated on the total price (main product + group products). When disabled, the discount applies only to the group products.
- **No discount**: Completely disables the discount for this bundle. Useful for promotional bundles without price reduction.
- **Hide products without stock**: Automatically hides products that are out of stock.

---

## Editing Bundles

### How to Edit an Existing Bundle

1. Navigate to **Catalogues → Bundles**
2. Click on the desired bundle in the list
3. Make your changes
4. Click **Save** (or use the keyboard shortcut `Ctrl+S` / `Cmd+S`)

**Tip**: Use the **language switcher** in the top right to maintain the bundle title in different languages.

---

## Managing Bundle Groups

Bundle groups are the heart of the plugin. Each group contains a selection of products for customers to choose from.

For a detailed guide on groups, optional groups and quantity selection, read the [Bundle Groups documentation](bundle-groups.md).

### Quick Overview: Adding a Group

1. Open a bundle for editing
2. Scroll to the **Groups** section
3. Click **Add**
4. Enter a title and click **Edit** to open the group details
5. Configure the group options in the modal:
   - **Title**: Display name of the group
   - **Type**: Product source (Products, Product stream or Category)
   - **Active**: Show or hide the group
   - **Optional**: Customers can deselect this group
   - **Allow quantity selection**: Customers can choose the quantity per item
   - **Maximum quantity**: Upper limit for quantity selection
6. Select products based on the chosen type
7. Click **Apply**

---

## Storefront Display

### Desktop View

On the product detail page, bundles are displayed as a horizontal card:

- Left: Main product image
- Centre: Group products connected by **+** signs
- Right: Price area with:
  - Original price (crossed out)
  - Bundle price (highlighted)
  - Savings display
  - "Add to cart" button

For groups with multiple products, a **"Select option"** button is shown that opens a modal with all available options.

### Mobile View

On mobile devices, a more compact, vertical layout is used:

- Bundle preview with small product images
- Expandable detail view
- Prices and action button in the expanded area
- Optimized for touch interaction

### Bundle Display Position

The position on the product page can be adjusted in the [configuration settings](../configuration/settings.md):
- Below the "Add to cart" button
- Above the product description (default)
- Below the product description

---

## Cart Behaviour

### Bundle in the Cart

When a customer adds a bundle to the cart, the main product appears as a parent item. The bundle group products are displayed as child items beneath it.

### Automatic Bundle Creation

When the **Create bundles automatically** setting is enabled, the plugin automatically detects when a product added to the cart completes a bundle and groups the products accordingly.

### Discount Display in Cart

Depending on the configuration, the discount is shown as:
- **Separate line item**: Negative discount position below the bundle products
- **Direct deduction**: Already factored into the product price (invisible as a separate item)

---

## Bundle Index

The bundle index is a background system that pre-calculates bundle-product assignments to ensure fast display on the storefront.

### When Does the Index Need Rebuilding?

- After creating or changing bundles with product streams
- After changing category assignments for groups with category type
- When inconsistencies appear in the bundle display

### Rebuild Index Manually

Run the following command in the console:

```bash
php bin/console wl-bundles:index
```

---

## Troubleshooting

### Bundle Not Showing on Product Page

**Symptom**: The bundle is created in the admin but doesn't appear on the product detail page.

**Possible Causes and Solutions**:
1. **Bundle not active**: Check that the bundle and all groups are set to "Active"
2. **"Activate bundles" setting disabled**: Check the global setting under **Extensions → My Extensions → Ultimate Bundle Plugin → Configure**
3. **Product not assigned**: Ensure the product is included in the bundle or in the selected product stream/category
4. **Index outdated**: Rebuild the index with `php bin/console wl-bundles:index`
5. **Clear cache**: Clear the Shopware cache under **Settings → System → Caches & Indexes**

### Discount Not Being Calculated

**Symptom**: The bundle is displayed but no discount is applied.

**Possible Causes and Solutions**:
1. **Discount set to 0%**: Check the discount percentage in the bundle
2. **"No discount" enabled**: Check that the "No discount" option in the bundle is disabled
3. **Incomplete bundle**: Ensure all required groups have a product selected (if "Allow incomplete bundles" is disabled)

### Products in a Group Not Showing

**Symptom**: A bundle group shows no products.

**Possible Causes and Solutions**:
1. **Group not active**: Activate the group in the bundle detail
2. **No products assigned**: Check the product assignment in the group
3. **Products unavailable**: If "Hide products without stock" is active, sold-out products are not shown
4. **Index outdated**: Rebuild the index

---

## Related Documentation

- [Bundle Groups in Detail](bundle-groups.md)
- [Configuration Settings](../configuration/settings.md)
- [How-To Guide](../how_to.md)
