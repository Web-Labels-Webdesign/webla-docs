# Changelog

All notable changes to Customer Specific Discounts for end users.

---

## [1.5.2] - 2026-02-17

### Bug Fixes

- **Cart Product Loading**: Fixed issue where product entities were not reliably available in cart data after page reload or from cache, causing category/product stream discount matching to fail. Now fetches products directly from repository as fallback to ensure consistent discount application.

### Improvements

- **Performance**: Optimized product loading to only fetch necessary IDs without loading full category and stream associations, reducing database overhead.

---

## [1.5.1] - 2026-02-17

### Bug Fixes

- **Cart Discount Matching**: Fixed an issue where customer group category/product stream discounts were not properly detected in the cart, causing the global group discount to be applied instead of the more specific targeted discount. The cart now correctly loads product entities to match category and product stream IDs, ensuring consistent discount behavior between product pages and cart.

---

## [1.5.0] - 2026-02-17

### New Features

- **Customer Group Category Priority Setting**: New configuration option to give absolute priority to customer group category/product stream discounts. When enabled, targeted category or product stream discounts assigned to customer groups take precedence over all other discount types, bypassing the discount priority mode. This ensures specifically assigned group discounts always apply, regardless of global settings.

---

## [1.4.1] - 2026-02-13

### Improvements

- **Set Konfigurator Compatibility**: Added support for product sets from the Set Konfigurator plugin. Product sets now receive customer-specific discounts and display savings correctly in cart and checkout.

---

## [1.4.0] - 2026-01-28

### New Features

- **Guest Discounts**: Apply default customer group discounts to non-logged-in users. Enable via the new "Apply default group discounts to guests" config option. Perfect for showing promotional prices to all visitors without requiring login.

### Improvements

- **Shopware 6.7+ Compatibility**: Improved caching implementation using the new HttpCacheCookieEvent for better compatibility with Shopware 6.7 and future versions.

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
| 1.4.1   | 2026-02-13   | Set Konfigurator compatibility |
| 1.4.0   | 2026-01-28   | Guest discounts, Shopware 6.7+ caching improvements |
| 1.2.0   | 2026-01-26   | Customer group discounts on categories/product groups |
| 1.1.0   | 2026-01-25   | Product discounts, global customer discounts, extended priority modes |
| 1.0.1   | 2026-01-20   | Bug fixes for PHP and JS validation |
| 1.0.0   | 2026-01-15   | Initial release |

---

## Upgrade Notes

### Upgrading to 1.4.0

After updating:
1. Clear the cache under Settings → System → Caches & Indexes
2. The new "Apply default group discounts to guests" setting is available in the plugin configuration
3. No action required for the Shopware 6.7+ compatibility improvements - they are applied automatically

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
| 1.4.1          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.4.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.2.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.1.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
