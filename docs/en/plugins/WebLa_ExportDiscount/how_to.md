# How-To Guide

This guide provides step-by-step workflows for common tasks with Shopping Feed with Unique Discounts.

---

## How the Plugin Works

### Data Flow Overview

The plugin works according to the following principle:

```
Price Comparison Site → Feed URL with source parameter → Shop recognizes source → Session is created → Discount is displayed
```

**Detailed Flow**:

1. **Export Generation**: The plugin calculates the discounted price and provides it in the feed template
2. **Feed Retrieval**: The price comparison site (Google, idealo, etc.) loads your feed
3. **Click in Price Comparison**: A customer clicks on your product in the price comparison site
4. **Redirect**: The customer is redirected to `your-domain.com/product-url` with the `source` parameter
5. **Session Creation**: The plugin recognizes the `source` parameter and creates a session
6. **Price Display**: The discounted price is displayed on the product page, in the cart, and checkout
7. **Order**: The customer orders at the discounted price
8. **Cleanup**: The session is automatically deleted after 24 hours

---

## Common Workflows

### How to: Set up the plugin for the first time

**Goal**: Set up the plugin for your first product export

**Prerequisites**:
- Plugin is installed and activated
- A product export (Product Comparison Sales Channel) exists

**Steps**:

1. **Open product export**
   - Navigate to: `Sales Channels → [Your Export Channel]`
   - Click on **Product Comparison** in the left navigation

2. **Configure discount**
   - Scroll to the section below **Dynamic Product Stream**
   - Select for **Discount Type**: `Percentage`
   - Enter for **Discount Value**: `10` (for 10% discount)
   - Click **Save**

3. **Customize export template**
   - Scroll to the **Template** section
   - Adjust the product URL (the `source` parameter is integrated into the seoUrl function):
     {% raw %}
     ```twig
     {{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}
     ```
     {% endraw %}
   - Add the sale price:
     {% raw %}
     ```twig
     {% if 'discount' in product.extensions|keys %}
         {% set newPrice = product.extensions.discount['discount'].last %}
         {{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}
     {% endif %}
     ```
     {% endraw %}

4. **Test feed**
   - Click **Show Preview** at the bottom of the page
   - Check if the URLs contain the `source` parameter
   - Check if the discounted prices are correct

5. **Test in shop**
   - Copy a URL from the feed preview
   - Open the URL in an incognito/private window
   - Check if the discounted price is displayed

**Result**: Your feed displays discounted prices, and visitors through the feed see these prices in the shop.

---

### How to: Set up Google Shopping Feed

**Goal**: Create a Google Shopping compatible feed with discount prices

**Prerequisites**:
- A product export for Google Shopping exists
- Plugin discount is configured

**Steps**:

1. **Open export**
   - Navigate to: `Sales Channels → [Google Shopping Export]`
   - Click on **Product Comparison**

2. **Edit template**
   - Scroll to the **Template** section
   - Use the following body template:

{% raw %}
```xml
<item>
<g:id>{{ product.productNumber }}</g:id>
<g:title><![CDATA[{{ product.translated.name }}]]></g:title>
<g:description><![CDATA[{{ product.translated.description|striptags|slice(0, 5000) }}]]></g:description>
<g:link>{{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}</g:link>
<g:image_link>{{ product.cover.media.url }}</g:image_link>
<g:availability>{% if product.availableStock > 0 %}in_stock{% else %}out_of_stock{% endif %}</g:availability>
<g:price>{{ product.calculatedPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:price>
{% if 'discount' in product.extensions|keys %}
{% set newPrice = product.extensions.discount['discount'].last %}
<g:sale_price>{{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:sale_price>
{% endif %}
<g:brand>{{ product.manufacturer.translated.name }}</g:brand>
<g:gtin>{{ product.ean }}</g:gtin>
<g:mpn>{{ product.manufacturerNumber }}</g:mpn>
<g:condition>new</g:condition>
</item>
```
{% endraw %}

3. **Generate and test feed**
   - Click **Save**
   - Generate the feed via the feed URL
   - Check if `g:sale_price` is correctly populated

**Result**: Google displays your sale price in the Shopping tab, and visitors see this price in your shop.

---

### How to: Set up repricing integration

**Goal**: Use individual prices via CSV import for repricing

**Prerequisites**:
- A repricing tool that exports CSV files
- Shopware Import/Export profile for products

**Steps**:

1. **Create import profile**
   - Navigate to: `Settings → Shop → Import/Export`
   - Click on **Profiles** → **Add Profile**
   - Select **Products** as entity
   - Add the following fields:
     - `productNumber` (required field for identification)
     - `customFields.webla_exportdiscount_product_discount`

2. **Prepare CSV file**
   - Create a CSV with the following structure:
     ```csv
     productNumber;customFields.webla_exportdiscount_product_discount
     SW10001;24.99
     SW10002;39.90
     SW10003;
     ```
   - Empty values remove the individual price

3. **Perform import**
   - Navigate to: `Settings → Shop → Import/Export`
   - Select your profile
   - Upload the CSV file
   - Start the import

4. **Adjust export settings**
   - Set **Discount Type** to `No discount`
   - The plugin will then only use the item-specific prices

**Result**: Each product has its individual export price based on your repricing tool.

**Troubleshooting**: If prices are not applied, check:
- Correct field name (`customFields.webla_exportdiscount_product_discount`)
- Decimal separator (period, not comma)
- Product number must match exactly

---

### How to: Enable discount only for single purchases

**Goal**: Only grant the discount when customers buy exactly 1 unit

**Prerequisites**:
- Plugin is installed and configured

**Steps**:

1. **Open plugin settings**
   - Navigate to: `Extensions → My Extensions`
   - Find **Shopping feed with unique discounts**
   - Click **Configure**

2. **Enable setting**
   - Enable **Apply discount only for single-unit purchases (quantity = 1)**
   - Click **Save**

3. **Test**
   - Open a product link with `source` parameter from the feed
   - Add 1 unit to cart → Discount price
   - Increase quantity to 2 → Normal price

**Result**: Customers receive the discount only for single purchases. Quantity purchases are calculated at the normal price.

---

### How to: Allow multiple discounted products

**Goal**: Customers should be able to buy multiple products at a discount from different feed clicks

**Prerequisites**:
- Plugin is installed and configured

**Steps**:

1. **Open plugin settings**
   - Navigate to: `Extensions → My Extensions`
   - Find **Shopping feed with unique discounts**
   - Click **Configure**

2. **Enable setting**
   - Enable **Allow multiple discounted products per session**
   - Click **Save**

3. **Test**
   - Open product A via feed link → Discount active
   - Open product B via another feed link → Discount also active
   - Both products in cart have the discount price

**Result**: Customers can buy multiple products with discount if they come through feed links for each.

---

## Quick Reference

| Task                          | Key Steps                                              | Required Settings                           |
| ----------------------------- | ------------------------------------------------------ | ------------------------------------------- |
| Set up global discount        | Sales Channels → Export → Discount Type/Value          | Discount Type, Discount Value               |
| Customize feed template       | Sales Channels → Export → Template                     | URL with source parameter, Price variable   |
| Set item price                | Catalogues → Product → Custom Fields                   | New price in export (gross)                 |
| Single purchases only         | Extensions → Plugin → Configure                        | Discount only for single-unit purchases     |
| Allow multiple products       | Extensions → Plugin → Configure                        | Allow multiple discounted products per session |
| Delete API sessions           | Extensions → Plugin → Configure                        | Delete API sessions button                  |

---

## Best Practices

1. **Always test first**: Use a test environment or incognito mode
2. **Start moderate**: Begin with 5-10% discount and monitor conversion
3. **Check feed URLs**: The `source` parameter in the seoUrl is essential
4. **Mind the cache**: Clear cache after configuration changes
5. **Monitor sessions**: Delete sessions manually if problems occur

## What to Avoid

- **Discount without URL parameter**: Without the `source` parameter in the seoUrl function, the plugin doesn't work
- **Too high discounts**: More than 20% can significantly strain margins
- **Forgotten template**: Without template customization, the feed contains normal prices
- **Disabled message queue**: Automatic session cleanup won't run
