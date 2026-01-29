# How-To Guide

This guide provides step-by-step workflows for common tasks with Intelligent Cross-Selling.

---

## How the Plugin Works

### Data Flow Overview

The plugin analyzes product properties and automatically calculates similarity scores between products.

```
Customer visits product page
         ↓
Plugin checks: Is intelligent cross-selling active?
         ↓
Yes → Plugin loads product properties
         ↓
Plugin calculates similarity scores based on weights
         ↓
Top-N products are displayed as recommendations
```

**Detailed Process**:

1. **Customer opens product detail page**
2. **Cache check**: Plugin checks if recommendations are already cached (valid for 1 hour)
3. **Property matching**: Plugin compares the properties of the current product with all other products
4. **Score calculation**: For each matching property, the configured weight is added to the score
5. **Filtering**: Products are filtered according to configured filters (category, stock, article type)
6. **Sorting**: Products are sorted by score, highest scores first
7. **Display**: The top-N products are displayed in the cross-selling area

---

## Common Workflows

### How to: Initial Setup

**Goal**: Configure the plugin and activate first recommendations

**Prerequisites**:
- Plugin is installed and activated
- Products have maintained properties

**Steps**:

1. **Open plugin area**
   - Navigate to: `Extensions → Intelligent Cross Selling`

2. **Configure basic settings**
   - Set "Max products to show" to **6**
   - Enable **"Hide products without stock"**
   - Optional: Enable **"Only show products from same category"**

3. **Configure title**
   - Enter in "Title": **"You might also like"**
   - Enable **"Show title"**

4. **Save settings**
   - Click **"Save Settings"**

5. **Create first weight**
   - Click **"Add weight rule"**
   - Select your most important property (e.g., "Color")
   - Set the weight to **80**
   - Click **"Save"**

6. **Add more weights**
   - Repeat step 5 for 2-3 more important properties
   - Example: Material=50, Style=40

7. **Activate plugin**
   - Enable the **"Active"** switch
   - Click **"Save Settings"**

8. **Check results**
   - Open a product detail page in your storefront
   - Verify that relevant recommendations are displayed

**Result**: Intelligent cross-selling recommendations are displayed on all product detail pages.

---

### How to: Optimize Weights

**Goal**: Improve recommendation quality by adjusting weights

**Prerequisites**:
- Plugin is active and showing recommendations
- You have collected feedback on which recommendations are not optimal

**Steps**:

1. **Conduct analysis**
   - Open several product detail pages in your storefront
   - Note which recommendations fit well and which don't

2. **Identify patterns**
   - Ask yourself: Which property connects the good recommendations?
   - Which property leads to irrelevant recommendations?

3. **Adjust weights**
   - Navigate to: `Extensions → Intelligent Cross Selling`
   - Double-click on the weight you want to change
   - **Increase** the weight for properties that deliver good matches
   - **Reduce** the weight for properties that deliver irrelevant products

4. **Test new properties**
   - Perhaps an important property is missing
   - Add a new weight and start with 30-40%

5. **Clear cache**
   - Navigate to: `Settings → System → Caches & Indices`
   - Click **"Clear all"**

6. **Review results**
   - Check the product detail pages again
   - Repeat the process if necessary

**Result**: Improved, more relevant product recommendations.

---

### How to: Set Up Multilingual Titles

**Goal**: Configure different titles for different shop languages

**Prerequisites**:
- Plugin is active
- Shop has multiple languages configured

**Steps**:

1. **Maintain English version**
   - Navigate to: `Extensions → Intelligent Cross Selling`
   - Ensure "English" is selected in the language switcher
   - Enter in "Title": **"You might also like"**
   - Enable **"Show title"**
   - Click **"Save Settings"**

2. **Switch to German version**
   - Click on the **language switcher** in the upper right corner
   - Select **"Deutsch"**

3. **Enter German title**
   - Enter in "Titel": **"Das könnte Ihnen auch gefallen"**
   - Click **"Save Settings"**

4. **Additional languages**
   - Repeat steps 2-3 for all other languages

5. **Test**
   - Open your storefront in different languages
   - Verify that the correct title is displayed in each language

**Result**: Each language version of your shop displays the appropriate title.

---

### How to: Configure Fashion Shop

**Goal**: Optimal settings for a fashion/apparel shop

**Steps**:

1. **Basic settings**
   - Navigate to: `Extensions → Intelligent Cross Selling`
   - Number of products: **8**
   - Enable: **"Active"**
   - Enable: **"Only show products from same category"**
   - Enable: **"Hide products without stock"**
   - Enable: **"Show only main articles"**

2. **Weights for fashion**

   | Property | Weight | Reasoning |
   |----------|--------|-----------|
   | Color | 85% | Customers often look for matching colors |
   | Material | 50% | Similar material = similar feel |
   | Style | 60% | Casual to casual, elegant to elegant |
   | Brand | 40% | Brand loyalty is relevant |

3. **Titles**
   - English: "Complete your look"
   - Deutsch: "Passend zu Ihrem Stil"

4. **Save and test**

**Result**: Fashion-relevant recommendations that help customers combine outfits.

---

### How to: Configure Electronics Shop

**Goal**: Optimal settings for an electronics/technology shop

**Steps**:

1. **Basic settings**
   - Navigate to: `Extensions → Intelligent Cross Selling`
   - Number of products: **6**
   - Enable: **"Active"**
   - **Disable**: "Only show products from same category" (recommend accessories from other categories)
   - Enable: **"Hide products without stock"**
   - Enable: **"Show only main articles"**

2. **Weights for electronics**

   | Property | Weight | Reasoning |
   |----------|--------|-----------|
   | Compatibility | 95% | Most important property for accessories |
   | Brand | 70% | Customers often stay with one brand |
   | Product Line | 80% | Everything within a series fits together |
   | Connector Type | 60% | Technical compatibility |

3. **Titles**
   - English: "Compatible accessories"
   - Deutsch: "Passendes Zubehör"

4. **Save and test**

**Result**: Technically compatible product recommendations and matching accessories.

---

## Quick Reference

| Task | Key Steps | Required Settings |
|------|-----------|-------------------|
| Activate plugin | Extensions → Intelligent Cross Selling → Enable "Active" | Active |
| Create weight | "Add weight rule" → Select property → Enter value | At least one weight |
| Multilingual title | Language switcher → Select language → Enter title → Save | Title, Show title |
| Clear cache | Settings → System → Caches & Indices → Clear all | - |

---

## Best Practices

1. **Less is more**: Start with 3-4 weights and expand as needed
2. **Highest weight for main feature**: The most important property should receive 70-90%
3. **Check regularly**: Review the quality of recommendations monthly
4. **Category filter for large assortments**: For many different product categories, the category filter helps
5. **Enable stock filter**: Only recommend available products

## What to Avoid

- **Too many weights**: More than 6-8 weights dilute the results
- **Same weights everywhere**: Differentiate – not all properties are equally important
- **Both article type filters simultaneously**: "Show only main articles" and "Show only variants" are mutually exclusive
- **Ignoring cache**: Always clear the cache after changes to see results
