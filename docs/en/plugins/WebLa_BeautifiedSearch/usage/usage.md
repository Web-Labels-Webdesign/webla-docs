# Usage Guide

This guide covers all features and functionality of the "Search as Overlay" plugin.

---

## Table of Contents

- [The Search Overlay](#the-search-overlay)
- [Product Search](#product-search)
- [Category Search](#category-search)
- [Blog Search](#blog-search)
- [Manufacturer Search](#manufacturer-search)
- [Unique Product Search](#unique-product-search)
- [Admin Panel Features](#admin-panel-features)
- [Troubleshooting](#troubleshooting)

---

## The Search Overlay

### What It Is

The search overlay appears when your customers use the search field in the shop. Instead of a simple dropdown list with products, they see a modern, tab-based overlay with different result types.

### How It Works

1. The customer clicks on the search field or enters a search term
2. After entering at least 3 characters, the overlay appears
3. The first tab "Products" is active by default
4. Additional tabs (Categories, Blog, Manufacturers) only appear when results are available
5. The customer can switch between tabs to see different result types

### Elements of the Overlay

- **Tabs**: Navigation between Products, Categories, Blog, and Manufacturers
- **Product Grid**: Shows product boxes in the configured layout
- **Category Cards**: Shows matching categories with optional image
- **Blog Cards**: Shows matching blog articles with preview image
- **Manufacturer Cards**: Shows matching manufacturers with optional logo

---

## Product Search

### What It Does

Product search is the core function and shows products matching the search term. Results are displayed in the configured layout (Search, Standard, Big Image, or Minimal).

### Display of Results

- Products are displayed in a grid
- The number of columns depends on the "Number of Products per Column" setting
- When no results are found, an appropriate message is displayed

### Tips & Best Practices

- Use the "Search" layout for quick overview
- Choose "Big Image" for visually-oriented products
- "Minimal" works well for technical products or long product lists

---

## Category Search

### What It Does

Category search searches all categories in your shop for the search term. This allows customers to quickly find the matching category instead of just individual products.

### Activation

1. Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
2. Enable "Activate Category Search"
3. Optional: Enable "Show Category Images"
4. Save and clear cache

### Searched Fields

Category search looks through the following fields:
- Category name
- Category description
- Meta title
- Meta description
- Keywords

### Special Note

Only categories that are visible in the current sales channel are displayed. Categories outside the main navigation are not found.

### Tips & Best Practices

- Maintain meaningful category descriptions
- Use keywords for alternative search terms
- Category images increase visual appeal

---

## Blog Search

### What It Does

Blog search searches your blog articles and shows matching results in the search overlay. This connects your content directly with product search.

### Prerequisites

A compatible blog plugin must be installed:
- **NetzP Blog** (recommended)
- **H1 Web Blog**

### Activation

1. Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
2. Enable "Activate Blog Search"
3. Save and clear cache

### Searched Fields (NetzP Blog)

- Title
- Teaser
- Content
- Meta title
- Meta description
- Custom fields

### Searched Fields (H1 Web Blog)

- Title
- Short content
- Content
- Meta title
- Meta description

### Tips & Best Practices

- Create blog articles about common customer questions
- Use relevant keywords in title and teaser
- Blog articles with images are displayed more attractively

---

## Manufacturer Search

### What It Does

Manufacturer search shows matching manufacturers/brands in the search overlay. Customers can quickly find all products of a specific brand.

### Prerequisite

This feature requires **Shopware Commercial Advanced Search**. Without this plugin, manufacturer search is not available.

### How It Works

Manufacturer search is automatically activated when:
1. Shopware Commercial Advanced Search is installed
2. The advanced search (MultiSuggestResult) is active
3. Manufacturers are found in the search results

### Display

- Manufacturers are displayed as cards
- Optionally with manufacturer logo (when "Show Manufacturer Images" is enabled)
- Clicking on a manufacturer leads to a product search for that manufacturer

### Tips & Best Practices

- Maintain manufacturer logos for better visual display
- Enable "Show Manufacturer Images" for well-known brands

---

## Unique Product Search

### What It Does

Unique product search allows finding products directly via their article number, EAN, or manufacturer number. This is more precise than normal full-text search.

### Activation

1. Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
2. Enable "Activate Search for Unique Products"
3. Select the desired search fields under "Specifically Search by"
4. Optional: Enable "Remove Formatting from Search Term"
5. Save and clear cache

### Search Fields

| Field               | Description                          | Example         |
| ------------------- | ------------------------------------ | --------------- |
| Product Number      | Your internal article number (SKU)   | ABC-123-XL      |
| Manufacturer Number | Manufacturer's article number (MPN)  | MPN-456789      |
| EAN/GTIN            | Product's barcode                    | 4006381333931   |

### Formatting Cleanup

When "Remove Formatting from Search Term" is enabled:
- `XY 00-11` also finds `XY0011`
- `ABC-123` also finds `ABC123`
- Spaces, hyphens, and special characters are ignored

### Parent Product Search

When "Search Includes Parent Products" is enabled:
- The main product's article number is also searched for variants
- Useful for variants with a common base article number

### Tips & Best Practices

- Enable this feature for B2B shops
- Use formatting cleanup for flexible inputs
- Train your team to maintain EAN and manufacturer numbers

---

## Admin Panel Features

### Plugin Configuration

**Location**: Extensions → My Extensions → Search as Overlay → Configure

Here you can adjust all plugin settings. Settings can be configured globally or per sales channel.

### Sales Channel Specific Settings

**Location**: Extensions → My Extensions → Search as Overlay → Configure → Sales Channel Dropdown

1. Select the desired sales channel from the dropdown at the top
2. Adjust settings for this channel
3. Select "All Sales Channels" for global default values

### Clear Cache

After configuration changes, you must clear the cache:

**Location**: Settings → System → Caches & Indexes

1. Click "Clear all caches"
2. Alternatively: Only clear "HTTP cache" and "Template cache"

---

## Troubleshooting

### Overlay Does Not Appear

**Symptom**: After entering a search term, no overlay appears.

**Possible Causes**:
1. Cache not cleared after plugin installation
2. JavaScript error on the page
3. Theme incompatibility

**Solution**:
1. Completely clear cache under Settings → System → Caches & Indexes
2. Check browser console for JavaScript errors (F12)
3. Check for theme conflicts (temporarily test with default theme)

---

### Categories Are Not Found

**Symptom**: The "Categories" tab does not appear or shows no results.

**Possible Causes**:
1. "Activate Category Search" is disabled
2. Categories have no matching text
3. Categories are not in the current sales channel

**Solution**:
1. Check setting under Extensions → My Extensions → Search as Overlay
2. Maintain category descriptions and keywords
3. Check category assignment to sales channel

---

### Blog Search Does Not Work

**Symptom**: The "Blog" tab does not appear even though enabled.

**Possible Causes**:
1. No compatible blog plugin installed
2. No blog articles in the current sales channel
3. Blog articles have expired "showuntil" date

**Solution**:
1. Install NetzP Blog or H1 Web Blog
2. Assign blog articles to the correct sales channel
3. Check expiration date of blog articles

---

### Product Number Search Finds Nothing

**Symptom**: Searching for EAN or article number shows no results.

**Possible Causes**:
1. "Activate Search for Unique Products" is disabled
2. The searched field is not selected in "Specifically Search by"
3. The number is not stored in the product

**Solution**:
1. Check both settings under Search Configuration
2. Check product data under Catalogues → Products → [Product]
3. Properly maintain EAN, article number, and manufacturer number

---

### Manufacturer Search Not Available

**Symptom**: The "Manufacturers" tab never appears.

**Cause**: Shopware Commercial Advanced Search is not installed.

**Solution**: Manufacturer search is only available with Shopware Commercial. Without this extension, no manufacturers are displayed in the overlay.

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
