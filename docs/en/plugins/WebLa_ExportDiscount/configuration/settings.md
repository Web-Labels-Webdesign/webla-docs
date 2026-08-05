# Configuration Settings

This document describes all available settings for Shopping feed with unique discounts.

---

## Plugin Basic Settings

**Navigation**: Extensions → My Extensions → Shopping feed with unique discounts → Configure

### Apply discount only for single-unit purchases (quantity = 1)

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Switch (Yes/No) |
| **Default**  | No              |
| **Required** | No              |

**Description**: When enabled, the export discount is only applied when the customer buys exactly one unit of the product. For bulk purchases (2 or more units), the regular price is calculated.

**Example Use Case**: Enable this option if you want to prevent customers from buying large quantities at the discounted price. This is useful for products with low margins where a quantity discount would not be economical.

---

### Allow multiple discounted products per session

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Switch (Yes/No) |
| **Default**  | No              |
| **Required** | No              |

**Description**: When enabled, visitors can browse multiple products from the export and each of these products will receive the discount. By default, only the first clicked product is discounted.

**Example Use Case**: Enable this option if you want customers to be able to purchase multiple products from different price comparisons at a discount in one session. This can increase conversion but may reduce your margin.

---

### Discount validity after the feed visit (hours)

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Number (hours)  |
| **Default**  | 24              |
| **Required** | No              |

**Description**: Sets how long a visitor who arrived through the price comparison feed keeps the discounted price. Once the time is up, the visitor cookie expires and the matching session is cleaned up — the visitor sees the regular price again.

While the validity lasts, the pages showing the discounted price are served uncached for that visitor. A shorter value therefore means fewer uncached page views. The setting applies shop-wide, not per sales channel.

**Example Use Case**: Lower the value to 1–3 hours if cache efficiency matters more to you than giving customers a long window to decide. Raise it if your customers typically order hours after the first visit.

---

### Delete API Sessions (Button)

| Property     | Value          |
| ------------ | -------------- |
| **Type**     | Action (Button)|
| **Default**  | -              |
| **Required** | No             |

**Description**: This button allows you to manually delete all active discount sessions. This removes all stored associations between visitors and discounted products.

**Example Use Case**: Use this function after testing the plugin or when you want to ensure no old sessions are still active. Normally, sessions are automatically cleaned up after the configured validity period.

---

## Product Export Settings

**Navigation**: Sales Channels → [Your Export Channel] → Product Comparison

The export-specific discount settings are configured directly on the product export, not in the plugin settings.

### Discount Type

| Property     | Value                              |
| ------------ | ---------------------------------- |
| **Type**     | Select                             |
| **Default**  | No discount                        |
| **Required** | Yes (if discount is desired)       |

**Description**: Choose how the discount should be calculated.

**Options**:
- `No discount`: No discounting for this export
- `Absolute`: A fixed amount is deducted from the price (e.g., €5 discount)
- `Percentage`: A percentage is deducted from the price (e.g., 10% discount)

**Example Use Case**: Choose "Percentage" for a uniform discount across all price ranges, or "Absolute" if you want to discount a fixed amount.

---

### Discount Value

| Property     | Value                                    |
| ------------ | ---------------------------------------- |
| **Type**     | Number (Decimal)                         |
| **Default**  | 0                                        |
| **Required** | Yes (if discount type is set)            |
| **Maximum**  | 100 (for percent) / 9999 (for absolute)  |

**Description**: The value of the discount. For "Percentage", enter the percentage (e.g., 10 for 10%), for "Absolute" enter the monetary amount (e.g., 5 for €5).

**Example Use Case**: Enter "10" with discount type "Percentage" for a 10% discount, or "5.00" with "Absolute" for €5 discount.

---

## Item-Specific Price (Product Field)

**Navigation**: Catalogues → Products → [Edit Product] → Specifications → Custom Fields

### New price in export (gross)

| Property         | Value                                    |
| ---------------- | ---------------------------------------- |
| **Type**         | Number (Decimal)                         |
| **Default**      | Empty (no individual price)              |
| **Required**     | No                                       |
| **Field Group**  | Shopping feed with unique discounts      |
| **Technical Name** | `webla_exportdiscount_product_discount`|

**Description**: An individual gross price for this product in the export. This price completely overrides the global export discount. The field is used for price display in the store and in the export.

**Example Use Case**:
- Repricing tools can populate this field via CSV import or API
- Set a specific competitive price for individual items
- The price entered here is used 1:1 as the new price (no further discount calculation)

---

## Recommended Configurations

### For simple price comparison integration

| Setting                            | Recommended Value |
| ---------------------------------- | ----------------- |
| Discount Type                      | Percentage        |
| Discount Value                     | 5-15              |
| Discount only for single units     | No                |
| Allow multiple discounted products | No                |

### For repricing with individual prices

| Setting                            | Recommended Value |
| ---------------------------------- | ----------------- |
| Discount Type                      | No discount       |
| Discount Value                     | 0                 |
| New price in export (per product)  | Individual        |
| Discount only for single units     | Optional          |
| Allow multiple discounted products | No                |

### For maximum customer friendliness

| Setting                            | Recommended Value |
| ---------------------------------- | ----------------- |
| Discount Type                      | Percentage        |
| Discount Value                     | 10                |
| Discount only for single units     | No                |
| Allow multiple discounted products | Yes               |

---

## Sales Channel Specific Settings

| Setting                           | Scope       | Description                                      |
| --------------------------------- | ----------- | ------------------------------------------------ |
| Discount Type & Discount Value    | Per Export  | Each product export can have its own discounts   |
| Single units only                 | Global      | Applies to all sales channels                    |
| Multiple products per session     | Global      | Applies to all sales channels                    |
| Item-specific price               | Per Product | Overrides the export discount for the product    |
