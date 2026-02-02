# How-To Guide

This guide provides step-by-step workflows for common tasks with the "Search as Overlay" plugin.

---

## How the Plugin Works

### Data Flow Overview

The plugin extends the standard Shopware search and adds additional content types:

```
Customer enters search term
         ↓
Shopware Product Search (Standard)
         ↓
Plugin extends results:
├── Search categories
├── Search blog articles (optional)
├── Load manufacturers (with Commercial)
└── Check product number match (optional)
         ↓
Display results in Tabbed Overlay
```

**Example Flow**:
1. Customer enters "jacket" in the search
2. Shopware finds products with "jacket" in name/description
3. Plugin additionally searches for categories with "jacket"
4. If enabled: Plugin searches blog articles
5. Overlay shows tabs: Products (5), Categories (2), Blog (1)
6. Customer clicks on desired tab and selects result

---

## Common Workflows

### How to: Activate and Set Up the Plugin

**Goal**: Install the plugin and configure with basic settings

**Steps**:

1. **Install plugin**
   - Navigate to: `Extensions → My Extensions`
   - Find "Search as Overlay" plugin in the list
   - Click "Install"

2. **Activate plugin**
   - In the same view, click "Activate"
   - Confirm that the shop will be briefly unavailable

3. **Configure basic settings**
   - Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
   - Enable "Activate Category Search"
   - Adjust overlay width (e.g., `600px`)
   - Choose column count (recommended: `3`)
   - Choose box layout (recommended: `Search`)

4. **Clear cache**
   - Navigate to: `Settings → System → Caches & Indexes`
   - Click "Clear all caches"

**Result**: The search in the shop now shows the new tabbed overlay with products and categories.

---

### How to: Set Up Blog Search

**Goal**: Display blog articles in search results

**Prerequisites**:
- NetzP Blog or H1 Web Blog is installed
- Blog articles exist

**Steps**:

1. **Check blog plugin**
   - Navigate to: `Extensions → My Extensions`
   - Verify that NetzP Blog or H1 Web Blog is installed and active

2. **Activate blog search**
   - Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
   - Enable "Activate Blog Search"
   - Save

3. **Clear cache**
   - Navigate to: `Settings → System → Caches & Indexes`
   - Click "Clear all caches"

4. **Test**
   - In the storefront, enter a term that appears in blog articles
   - The "Blog" tab should appear

**Result**: Blog articles are displayed as an additional tab in the search overlay.

**Troubleshooting**: If the tab doesn't appear, check:
- Are blog articles assigned to the current sales channel?
- Do blog articles have an expired display date?

---

### How to: Set Up Product Number Search for B2B

**Goal**: Customers should be able to search directly by EAN, article number, or manufacturer number

**Steps**:

1. **Activate unique search**
   - Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
   - Scroll to "Search Configuration" section
   - Enable "Activate Search for Unique Products"

2. **Select search fields**
   - Under "Specifically Search by", enable the desired fields:
     - Product Number (for SKU)
     - Manufacturer's Number (for MPN)
     - EAN/GTIN (for barcodes)

3. **Activate formatting cleanup (recommended)**
   - Enable "Remove Formatting from Search Term"
   - This ignores spaces and hyphens during search

4. **Configure parent product search**
   - Enable "Search Includes Parent Products" if variants share the main product's number

5. **Save and clear cache**
   - Click Save
   - Clear cache under `Settings → System → Caches & Indexes`

**Result**: Customers can enter EAN codes or article numbers and directly find the matching product.

---

### How to: Customize Overlay Design

**Goal**: Adjust the search overlay appearance to match your shop design

**Steps**:

1. **Adjust width**
   - Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
   - Adjust "Width of the Search Overlay"
   - Example values: `500px`, `600px`, `70%`, `80vw`

2. **Choose product layout**
   - Select "Number of Products per Column" (2, 3, 4, or 6)
   - Select "Box Layout":
     - `Search`: Compact, optimized for overview
     - `Standard`: Shopware standard with all details
     - `Big Image`: Image-oriented for fashion
     - `Minimal`: Only essential info

3. **Configure images**
   - Enable "Show Category Images" if categories have images
   - Enable "Show Manufacturer Images" if manufacturers have logos

4. **Save and test**
   - Click Save
   - Clear cache
   - Test in the storefront

**Result**: The search overlay appears in the desired design.

---

### How to: Sales Channel Specific Search

**Goal**: Different search settings for different sales channels

**Steps**:

1. **Select sales channel**
   - Navigate to: `Extensions → My Extensions → Search as Overlay → Configure`
   - Select the desired sales channel from the dropdown at the top

2. **Make specific settings**
   - The displayed settings only apply to this sales channel
   - Example B2B channel: Enable unique search, Minimal layout
   - Example B2C channel: Enable blog search, Big Image layout

3. **Repeat for all sales channels**
   - Configure each sales channel individually
   - "All Sales Channels" sets the default values

4. **Clear cache**
   - Navigate to: `Settings → System → Caches & Indexes`
   - Clear cache

**Result**: Each sales channel has its own search configuration.

---

## Quick Reference

| Task                           | Key Steps                                         | Required Settings                     |
| ------------------------------ | ------------------------------------------------- | ------------------------------------- |
| Enable category search         | Configure → Enable switch → Clear cache           | Activate Category Search              |
| Enable blog search             | Install blog plugin → Enable switch               | Activate Blog Search                  |
| Set up product number search   | Enable unique search + select fields              | Activate Search for Unique Products   |
| Widen overlay                  | Change value in "Width" (e.g., 800px)             | Width of the Search Overlay           |
| More products per row          | Increase column count (4 or 6)                    | Number of Products per Column         |
| Larger product images          | Set Box Layout to "Big Image"                     | Box Layout                            |

---

## Best Practices

1. **Clear cache after every change**: Changes only become visible after cache clearing
2. **Maintain categories**: Meaningful descriptions and keywords improve category search
3. **Complete product data**: EAN, article number, and manufacturer number for B2B shops
4. **Optimize blog articles**: Relevant keywords in title and teaser for better findability
5. **Test the search**: Test in the storefront after configuration changes

## What to Avoid

- Too wide overlay (over 80% screen width) - can be problematic on mobile devices
- Too many products per row (6) for products with important images - images become too small
- Enabling blog search without a blog plugin - leads to empty tab
- Product number search without maintained product data - no results for number searches
