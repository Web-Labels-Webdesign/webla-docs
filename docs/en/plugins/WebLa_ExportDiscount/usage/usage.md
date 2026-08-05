# Usage Guide

This guide covers all features and functionality of Shopping Feed with Unique Discounts.

---

## Table of Contents

- [Configure Export Discount](#configure-export-discount)
- [Customize Export Template](#customize-export-template)
- [Item-Specific Prices](#item-specific-prices)
- [Session Management](#session-management)
- [Storefront Features](#storefront-features)
- [Troubleshooting](#troubleshooting)

---

## Configure Export Discount

### What It Does

The export discount allows you to define a global discount for all products in a specific product export. This discount is displayed both in the export feed and in the store when a visitor clicks on your product through the feed link.

### How to Use

1. Navigate to `Sales Channels → [Your Export Channel]`
2. Click on **Product Comparison** in the left navigation
3. Scroll to the **Dynamic Product Stream** section
4. Below the product stream, you'll find the **Discount Type** and **Discount Value** fields
5. Select the desired discount type:
   - **No discount**: Disables the discount
   - **Absolute**: Fixed amount in the shop currency
   - **Percentage**: Percentage discount from the original price
6. Enter the discount value
7. Save your changes

**Location**: Sales Channels → [Export Channel] → Product Comparison

### Tips & Best Practices

- Start with a moderate discount (5-10%) and adjust as needed
- Always test the discount in a test environment before going live
- The discount is applied to the gross price

---

## Customize Export Template

### What It Does

To display the discounted prices in the export feed, you need to customize your export template. The plugin provides the discounted prices through an extension on the product.

### How to Use

1. Navigate to `Sales Channels → [Your Export Channel] → Product Comparison`
2. Scroll to the **Template** section
3. Customize your template as follows:

**For the product URL with tracking parameter:**

The URL must contain the `source` parameter. This is integrated directly into the `seoUrl` function:

{% raw %}
```twig
{{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}
```
{% endraw %}

The `source` parameter is crucial - it contains the export ID and allows the plugin to identify which feed the visitor came from.

**For the discounted price (Sale Price):**

{% raw %}
```twig
{% if 'discount' in product.extensions|keys %}
    {% set newPrice = product.extensions.discount['discount'].last %}
    {{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}
{% endif %}
```
{% endraw %}

### Example: Google Shopping Feed

Add the following code to the **Product Row** section of your template:

{% raw %}
```xml
<item>
    <g:id>{{ product.productNumber }}</g:id>
    <g:title><![CDATA[{{ product.translated.name }}]]></g:title>
    <g:link>{{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}</g:link>
    <g:price>{{ product.calculatedPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:price>
    {% if 'discount' in product.extensions|keys %}
    {% set newPrice = product.extensions.discount['discount'].last %}
    <g:sale_price>{{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:sale_price>
    {% endif %}
</item>
```
{% endraw %}

### Tips & Best Practices

- The `source` parameter must be passed as part of the `seoUrl` parameters, not as a query string
- Test your feed after changes with the Shopware feed preview
- For Google Shopping, `g:price` shows the original price and `g:sale_price` shows the discounted price
- Use `context.currency.itemRounding.decimals` for correct decimal places

---

## Item-Specific Prices

### What It Does

With item-specific prices, you can set an individual export price for specific products. This completely overrides the global export discount and is ideal for repricing scenarios.

### How to Use

**Manually in Admin:**

1. Navigate to `Catalogues → Products`
2. Open the desired product
3. Switch to the **Specifications** tab
4. Scroll to **Custom Fields**
5. Find the field group **Shopping feed with unique discounts**
6. Enter the desired price in the **New price in export (gross)** field
7. Save the product

**Via CSV Import:**

The field has the technical name `webla_exportdiscount_product_discount`. You can use it in your CSV import profiles:

| Product Number | New price in export (gross) |
| -------------- | --------------------------- |
| SW10001        | 24.99                       |
| SW10002        | 39.90                       |

**Via API:**

```json
PATCH /api/product/{id}
{
    "customFields": {
        "webla_exportdiscount_product_discount": 24.99
    }
}
```

### Tips & Best Practices

- The price is a gross price (including VAT)
- An empty field means the global export discount is used
- A value of 0 or negative is ignored
- Ideal for integration with repricing tools

---

## Session Management

### What It Does

The plugin stores sessions to track which visitors came from which export. These sessions are automatically cleaned up after the configured validity period (default: 24 hours).

### Automatic Cleanup

- Sessions are checked for expiration every 5 minutes
- Sessions older than the configured validity period are automatically deleted
- Cleanup runs through the Shopware scheduled task queue

### Manual Cleanup

**Location**: Extensions → My Extensions → Shopping feed with unique discounts → Configure

1. Navigate to the plugin settings
2. Click on **Delete API sessions**
3. All active sessions are immediately removed

### Tips & Best Practices

- Use manual cleanup after extensive testing
- Make sure the Shopware message queue is running for automatic cleanup
- In production, manual intervention is normally not necessary

---

## Storefront Features

### Price Display on Product Page

**Where It Appears**: Product detail page, when the visitor came through a feed link

**What Customers See**:
- The discounted price as the current price
- The original price as a crossed-out price (strike price)
- The percentage savings (if supported by the theme)

### Price Display in Cart

**Where It Appears**: Cart and checkout

**What Customers See**:
- The discounted price is displayed throughout
- With "Single units only" option enabled: quantities > 1 show the original price

### 30-Day Price Display

The plugin automatically writes the lowest price to Shopware's standard field for the lowest price in the last 30 days. This is important for EU price indication regulations (Omnibus Directive).

### Customization Options

The price display uses standard Shopware price rendering. Customizations are done through:
- Your theme and its configuration
- Twig template overrides
- CSS styling

---

## Troubleshooting

### Discount Not Displayed in Store

**Symptom**: The visitor sees the normal price instead of the discount price.

**Possible Causes and Solutions**:

1. **Missing source parameter in URL**
   - Check if the URL contains the `source` parameter
   - The parameter is set via the seoUrl function: `{'productId': product.id, 'source': export.id}`
   - Check your export template for correct URL generation

2. **Session doesn't exist**
   - The visitor must come directly through the feed link
   - Links without source parameter don't create a session

3. **Cache issue**
   - Clear the Shopware cache under `Settings → System → Caches & Indexes`
   - The plugin invalidates caches automatically, but manual clearing helps with issues

4. **Product not in export stream**
   - Check if the product is part of the dynamic product stream

### Discount Not Displayed in Feed

**Symptom**: The feed contains the normal prices.

**Possible Causes and Solutions**:

1. **Template not customized**
   - Check if you're using `'discount' in product.extensions|keys` in the template
   - Access the price with `product.extensions.discount['discount'].last.unitPrice`

2. **No discount configured**
   - Check the discount settings on the product export
   - Discount type must not be "No discount"

3. **Feed cache**
   - Regenerate the feed under `Sales Channels → [Export] → Product Comparison`

### Session Not Created

**Symptom**: Despite correct URL, no session is created.

**Possible Causes and Solutions**:

1. **Invalid export ID**
   - Check if the export ID in the URL is valid
   - The ID must be an existing product export ID

2. **Product ID missing**
   - The session is only created on product detail pages
   - Category or search result pages don't create sessions

3. **Existing session**
   - With "Multiple products" option disabled, only the first session is kept

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [Step-by-Step Guides](../how_to.md)
