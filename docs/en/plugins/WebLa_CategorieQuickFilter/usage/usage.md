# Usage Guide

This guide covers all features and functionality of the **Category Quick Filter**.

---

## Table of Contents

- [Adding the Widget to a Shopping Experience](#adding-the-widget-to-a-shopping-experience)
- [Configuring the Element](#configuring-the-element)
- [Multiple Widgets on One Page](#multiple-widgets-on-one-page)
- [Using Top Categories](#using-top-categories)
- [Enabling Product Redirect](#enabling-product-redirect)
- [Storefront Behavior](#storefront-behavior)
- [Troubleshooting](#troubleshooting)

---

## Adding the Widget to a Shopping Experience

### What It Does

The plugin provides a new CMS block in the **Commerce** category. This block contains the interactive category dropdown and can be added to any Shopping Experience.

### How to Add the Block

1. Navigate to **Content → Shopping Experiences**.
2. Open the desired Shopping Experience or create a new one.
3. Click **Add block** in the section where the dropdown should appear.
4. Switch to the **Commerce** category in the block list.
5. Select the **Category Selector** block and drag it to the desired position.
6. Save the Shopping Experience.

**Location**: Content → Shopping Experiences → [Shopping Experience] → Add block → Commerce

---

## Configuring the Element

### What It Does

After adding the block, the contained element must be configured. This is where you define which category structure the dropdown should represent.

### How to Configure the Element

1. Click the inserted element in the Shopping Experience editor.
2. The configuration panel opens on the right side.
3. **Root Category**: Select the parent category whose subcategories should appear in the first dropdown level.
4. **Depth**: Enter the number of selection levels (e.g., `3` for Manufacturer → Model → Type).
5. **Dropdown Labels** (optional): Enter comma-separated placeholder texts for each level, e.g., `Select manufacturer,Select model,Select type`.
6. **Open Product on Single Result** (optional): Enable this switch if the widget should redirect directly to the product page when a single result is found.
7. **Top Categories** (optional): Select categories that should be pinned to the top of the first level.
8. Click **Save** and publish the Shopping Experience.

**Location**: Click element → Configuration panel on the right

### Tips & Best Practices

- Make sure the selected root category has active subcategories so the first dropdown is populated.
- Choose a depth that matches the actual number of levels in your category structure.
- Test the widget in preview mode before publishing the Shopping Experience.

---

## Multiple Widgets on One Page

### What It Does

Multiple instances of the widget can be placed on the same page. Each instance works completely independently – a selection in one widget does not affect the others.

### How to Set Up Multiple Widgets

1. Add multiple **Category Selector** blocks to the Shopping Experience.
2. Configure each element with a different root category.
3. If needed, use different dropdown labels per widget so customers understand the context of each selection.

**Use Case**: A page shows a vehicle selector at the top (Manufacturer → Model → Type) and a product type selector below (Category → Subcategory).

---

## Using Top Categories

### What It Does

The **Top Categories** setting lets you pin selected categories to the top of the first dropdown level permanently. These categories appear both at the top of the list and at their regular alphabetical position.

Pinned categories receive the CSS class `highlight`, which you can use in your theme to add visual emphasis (e.g., bold text, different color).

### How to Add Top Categories

1. Open the element configuration.
2. Click into the **Top Categories** field.
3. Search for the desired categories and select them.
4. Multiple categories can be added one after another.
5. Save the element.

**Use Case**: In an automotive shop, "BMW", "Mercedes-Benz", and "Volkswagen" are pinned to the top because these brands account for the majority of orders.

---

## Enabling Product Redirect

### What It Does

When the **Open Product on Single Result** option is enabled, the plugin checks whether the selected category at the deepest level contains exactly one active and available product. If so, it redirects directly to the product detail page – bypassing the category page entirely.

If the category contains multiple products or no products, the plugin redirects to the category page as usual.

### Prerequisites

- The **Open Product on Single Result** option must be enabled in the element configuration.
- The product in the target category must be active and available (in stock).

---

## Storefront Behavior

### What the Customer Experiences

1. The customer initially sees only the first dropdown, populated with the direct subcategories of the configured root category. All subsequent dropdowns are grayed out.
2. After making a selection in the first level, the subcategories of the chosen category are dynamically loaded into the second dropdown. The widget shows a brief loading state.
3. This process repeats up to the configured depth.
4. On the last selection, the plugin checks: are there subcategories for the next level? If yes, the next dropdown is filled. If no (deepest level reached), the customer is automatically redirected to the category page (or product page if single product redirect is enabled).
5. If the customer changes a selection in a higher level, all subsequent dropdowns are cleared and reloaded.

### Category Sorting

Categories are sorted alphabetically (natural sort, case-insensitive). Top categories appear additionally at the beginning of the list.

---

## Troubleshooting

### The First Dropdown Is Empty

**Symptom**: The first dropdown shows no categories, only the placeholder text.

**Cause**: The selected root category has no active subcategories.

**Solution**: Check under **Catalogues → Categories** that the root category has direct subcategories and that they are marked as active.

---

### The Widget Does Not Redirect

**Symptom**: The customer selects the last level, but nothing happens.

**Cause**: The selected category may have no products, or the category has no SEO URL.

**Solution**: Make sure the target category contains active products. Regenerate the cache under **Settings → System → Caches & Indexes** to update SEO URLs.

---

### "Open Product on Single Result" Does Not Redirect to the Product

**Symptom**: The option is enabled, but the redirect goes to the category page.

**Cause**: The category contains more than one available product, or the product is not active/available.

**Solution**: Verify that the target category contains exactly one active and in-stock product.

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [How-To Guide](../how_to.md)
