# Changelog

All notable changes to Customer Specific Discounts for end users.

---

## [1.2.0] - 2026-01-26

### New Features

- **Customer Group Discounts on Categories/Product Groups**: You can now assign discounts for entire customer groups on specific categories or dynamic product groups. This complements the global group discount with targeted discounts.

### Improvements

- **Product Detail Page**: Discounts are now correctly displayed on the product detail page, even when CMS elements like the buy box are used.

---

## [1.1.0] - 2026-01-25

### New Features

- **Product-Specific Discounts**: Set discounts directly on individual products via custom fields.
- **Global Customer Discounts**: Give individual customers a flat discount on all products.
- **Extended Priority Modes**: New "Most specific first" mode for precise discount control.
- **Show Total Savings**: Optional "You save X" message in checkout.
- **Original Price Strikethrough**: Display the original price visually crossed out.

### Improvements

- **Improved Performance**: Optimized caching for faster discount calculation.
- **Better Admin Interface**: Clearer presentation of customer discounts.

---

## [1.0.1] - 2026-01-20

### Bug Fixes

- **PHPStan Compatibility**: Fixed type errors for strict PHP analysis.
- **ESLint Validation**: Corrected JavaScript formatting in admin.

---

## [1.0.0] - 2026-01-15

### New Features

- **Individual Customer Discounts**: Assign discounts per customer on categories or dynamic product groups.
- **Global Customer Group Discounts**: Set flat discounts for entire customer groups.
- **Flexible Priority Control**: Choose between "Higher wins", "Lower wins", or "Individual first".
- **Discount as Line Item**: Option to display the discount as a separate line item.
- **Customizable Labels**: Configurable discount labels with variables.
- **Compatibility with WebLa_ProductGroupDiscount**: Automatic support for existing discount data.

---

## Version History Summary

| Version | Release Date | Highlights |
| ------- | ------------ | ---------- |
| 1.2.0   | 2026-01-26   | Customer group discounts on categories/product groups |
| 1.1.0   | 2026-01-25   | Product discounts, global customer discounts, extended priority modes |
| 1.0.1   | 2026-01-20   | Bug fixes for PHP and JS validation |
| 1.0.0   | 2026-01-15   | Initial release |

---

## Upgrade Notes

### Upgrading to 1.2.0

After updating:
1. Clear the cache under Settings → System → Caches & Indexes
2. The new customer group discounts can be found in customer group settings under "Group Discounts"

### Upgrading to 1.1.0

After updating:
1. Clear the cache
2. New settings are available in the plugin configuration
3. Product discounts can be set via Product → Custom Fields

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 1.2.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.1.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
