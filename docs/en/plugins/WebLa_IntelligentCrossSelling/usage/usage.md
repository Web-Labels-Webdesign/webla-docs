# Usage Guide

This guide covers all features and functionality of Intelligent Cross-Selling.

---

## Table of Contents

- [Initial Setup](#initial-setup)
- [Managing Property Weights](#managing-property-weights)
- [Multilingual Titles](#multilingual-titles)
- [Storefront Display](#storefront-display)
- [Troubleshooting](#troubleshooting)

---

## Initial Setup

### What You Need

Before you can use the plugin, ensure that:

1. **Product properties are set up**: Your products must have properties like color, material, size, etc.
2. **Products are assigned properties**: The more products have maintained properties, the better the recommendations work

### Activating the Plugin

1. Navigate to `Extensions → Intelligent Cross Selling`
2. Enable the **"Active"** switch
3. Click **"Save Settings"**

### Basic Configuration

1. **Set product count**: Enter how many recommendations should be displayed in "Max products to show" (recommended: 4-8)
2. **Configure title** (optional):
   - Enter a title, e.g., "You might also like"
   - Enable "Show title" so the title appears in the storefront
3. **Enable filters** (optional):
   - "Only show products from same category" – for thematically matching recommendations
   - "Hide products without stock" – to prioritize available products

---

## Managing Property Weights

Weights are the heart of the plugin. They determine which product properties are considered when calculating recommendations.

### Creating a New Weight

1. Navigate to `Extensions → Intelligent Cross Selling`
2. Click **"Add weight rule"**
3. Select a **Property** from the dropdown list (e.g., "Color")
4. Enter a **Weight** between 1 and 100
   - **1-30**: Low importance – property is slightly considered
   - **31-60**: Medium importance – property has noticeable influence
   - **61-100**: High importance – property is decisive for recommendations
5. Click **"Save"**

### Editing a Weight

1. In the "Cross Selling Weights" table, you can see all configured properties
2. Double-click on the **Weight** of a row to edit it directly
3. Change the value and press Enter or click outside the field

### Deleting a Weight

1. Click on the **context menu** (three dots) in the row of the weight you want to delete
2. Select **"Delete"**
3. Confirm the deletion in the dialog

### Weighting Tips

- **Start with 2-3 properties**: Don't start with too many weights
- **Highest weight for core features**: The most important property (e.g., color for fashion) should receive 70-90%
- **Consider combined effect**: Products that share multiple weighted properties receive higher scores
- **Test different combinations**: Check on product detail pages whether the recommendations make sense

---

## Multilingual Titles

The plugin supports multilingual titles for the cross-selling section.

### Maintaining Titles in Different Languages

1. Navigate to `Extensions → Intelligent Cross Selling`
2. Click on the **language switcher** in the upper right corner
3. Select the desired language (e.g., "Deutsch")
4. Enter the title in this language (e.g., "Das könnte Ihnen auch gefallen")
5. Click **"Save Settings"**
6. Repeat for all languages in your shop

### Note on Language Switching

The language switcher only becomes active after you have saved the settings at least once. When you open the page for the first time, save the basic settings first.

---

## Storefront Display

### Where Do Recommendations Appear?

Intelligent cross-selling recommendations appear on the **product detail page**, typically:

- In the cross-selling area below the product description
- Before or after manually maintained cross-selling groups (depending on theme)

### Interaction with Native Cross-Selling Rules

The plugin **complements** native Shopware cross-selling functionality:

1. Intelligent recommendations are displayed as the first cross-selling group
2. Manually maintained cross-selling groups appear afterward
3. You can use both features in parallel

This is controlled by the plugin setting **Show native cross-selling as well** (enabled by default). If you switch it off, the cross-selling maintained on the product is only used as a fallback — it appears solely when the intelligent recommendations return no products.

### Cache Behavior

- Recommendations are cached for **1 hour**
- When products change, the cache is automatically invalidated
- For immediate updates after configuration changes, clear the shop cache at `Settings → System → Caches & Indices`

---

## Troubleshooting

### No Recommendations Are Displayed

**Symptom**: No cross-selling recommendations appear on the product detail page.

**Possible Causes and Solutions**:

1. **Plugin not active**
   - Check if the "Active" switch is turned on
   - Save the settings again

2. **No weights configured**
   - Create at least one property weight
   - Without weights, no recommendations are calculated

3. **Products have no properties**
   - Check if your products have the weighted properties
   - Products without properties can neither be recommended nor receive recommendations

4. **Filters too restrictive**
   - Temporarily disable "Only show products from same category"
   - Disable "Hide products without stock"

5. **Cache not updated**
   - Clear the cache at `Settings → System → Caches & Indices`

---

### Incorrect or Irrelevant Recommendations

**Symptom**: The displayed recommendations don't match the product.

**Solutions**:

1. **Review weights**
   - Prioritize properties that are truly relevant for product similarity
   - Increase the weight of the most important property

2. **Enable category filter**
   - Enable "Only show products from same category" to get thematically matching recommendations

3. **Use article type filters**
   - Use "Show only main articles" or "Show only variants" depending on your shop structure

---

### Title Is Not Displayed

**Symptom**: The configured title does not appear in the storefront.

**Solutions**:

1. **Enable "Show title"**
   - Ensure the "Show title" switch is enabled

2. **Enter a title**
   - Check that text is actually entered in the "Title" field

3. **Check correct language**
   - Switch to your storefront language and verify the title is maintained there

---

### Performance Issues

**Symptom**: The product detail page loads slowly.

**Solutions**:

1. **Reduce product count**
   - Reduce "Max products to show" to 4-8

2. **Reduce number of weights**
   - Limit yourself to 3-5 essential properties

3. **Check cache**
   - Ensure the Shopware HTTP cache is active

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
