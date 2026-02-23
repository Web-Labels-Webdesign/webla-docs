# Changelog

All notable changes to Shopping Feed with Unique Discounts for end users.

---

## [v5.0.3] - 2026-02-20

### Bug Fixes

- :bug: **Sequential Product Discounts**: Fixed a bug where only the first product visited via a feed deeplink received the discounted price when `allowMultiple=true`. Subsequent products incorrectly showed the full price. The price calculator now resolves the matching discount session per product inside the loop, rather than using a single pre-loaded session for all products.

---

## [v5.0.2] - 2026-02-19

### Bug Fixes

- :bug: **Price DB Contamination**: Fixed a bug where `listPrice` was incorrectly written to the database for products where the merchant never set one. The root cause was shallow-clone semantics allowing entity Price objects to be mutated before Shopware's `EntityWrittenEvent` flushed the entity. All three price calculation methods now build new `Price` objects instead of mutating the entity's own objects, preventing any unintended DB writes.

---

## [v5.0.1] - 2026-02-03

### Bug Fixes

- **Customer Feedback**: Fixed issues based on customer feedback

---

## [v5.0.0] - 2026-02-03

### New Features

- **Multi-Version Support**: Full compatibility with Shopware 6.5, 6.6 and 6.7
- **Improved Architecture**: Optimized compatibility layer for different Shopware versions

---

## [2.0.1] - 2023-10-20

### Improvements

- **New Caching Strategy**: Improved performance through optimized caching

---

## [2.0.0] - 2023-06-13

### New Features

- **Shopware 6.5 Support**: Full compatibility with Shopware 6.5

---

## [1.0.11] - 2023-05-30

### New Features

- **30-Day Price Display**: Automatic creation of lowest price in last 30 days when a visitor comes through the export

---

## [1.0.10] - 2023-05-16

### New Features

- **New Product Price Setting**: Custom field for individual export prices per product

---

## [1.0.9] - 2023-03-22

### Improvements

- **Shopware Requirements**: Adjustments for Shopware compatibility

---

## [1.0.8] - 2023-03-09

### Improvements

- **Shopware Requirements**: Further adjustments for Shopware compatibility

---

## [1.0.7] - 2023-03-09

### Improvements

- **Shopware Requirements**: Adjustments for Shopware compatibility

---

## [1.0.6] - 2023-02-15

### Improvements

- **Rounding**: Improved price rounding

---

## [1.0.5] - 2022-11-21

### Bug Fixes

- **Error Handling**: Prevention of errors in certain scenarios

---

## [1.0.4] - 2022-11-10

### Improvements

- **Tiered Pricing**: Improved handling of advanced prices

---

## [1.0.3] - 2022-11-03

### Improvements

- **Handling**: Improved handling and documentation

---

## [1.0.1] - 2022-10-05

### New Features

- **Automatic Cleanup**: Added scheduled task for automatic session cleanup

---

## [1.0.0] - 2022-10-05

### New Features

- **Initial Release**: Initial version of the plugin
- Global discount for product exports
- Session-based discount display in storefront
- Support for Google Shopping, idealo, billiger.de

---

## Version History Summary

| Version | Release Date | Highlights                               |
| ------- | ------------ | ---------------------------------------- |
| v5.0.3  | 2026-02-20   | Bug fix: discount for sequential products with allowMultiple=true |
| v5.0.2  | 2026-02-19   | Bug fix: price DB contamination          |
| v5.0.1  | 2026-02-03   | Bug fixes based on customer feedback     |
| v5.0.0  | 2026-02-03   | Shopware 6.5/6.6/6.7 multi-version support |
| 2.0.1   | 2023-10-20   | New caching strategy                     |
| 2.0.0   | 2023-06-13   | Shopware 6.5 support                     |
| 1.0.11  | 2023-05-30   | 30-day price display                     |
| 1.0.10  | 2023-05-16   | Individual product prices                |
| 1.0.0   | 2022-10-05   | Initial release                          |

---

## Upgrade Notes

### Upgrading to v5.0.0

This version provides full compatibility with Shopware 6.5, 6.6 and 6.7. An upgrade from version 2.x is possible without data migration.

**Important**: After upgrading, you should:
1. Clear the cache
2. Review the plugin configuration
3. Test your export templates

### Compatibility

| Plugin Version | Shopware Version      | PHP Version |
| -------------- | --------------------- | ----------- |
| 5.0.x          | 6.5.0 - 6.7.x         | 8.1+        |
| 2.0.x          | 6.5.0 - 6.5.x         | 8.1+        |
| 1.0.x          | 6.4.x                 | 7.4+        |
