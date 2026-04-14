# Changelog

All notable changes to Intelligent Cross-Selling for end users.

---

## [5.2.8] - 2026-04-14

### Bug Fixes

- **Massively faster product detail pages on large catalogs**: Cross-selling queries now route through Elasticsearch (when enabled) and the MySQL JSON indices instead of falling back to `LIKE '%uuid%'` full table scans. Replaced `ContainsFilter` on `propertyIds` and `categoryIds` with the ES-compatible `EqualsFilter`, eliminating multi-second cold loads on catalogs with millions of products
- **Removed duplicate native cross-selling load**: The native Shopware cross-selling route is no longer invoked on every request to merge its results on top of ours. It is now only used as a fallback when our loader yields zero matches, or when explicitly enabled via the new `mergeNativeCrossSelling` config option

### Improvements

- **Slimmer product preload**: The preloaded product entity and `ConfigurationResolverService::loadProduct` no longer request the `properties.group`, `options.group`, or `categories` associations. Scoring relies on denormalized scalar fields (`propertyIds`, `optionIds`, `categoryIds`, `streamIds`), which loads significantly faster on products with many categories or variants
- **Smaller candidate pool**: Reduced the candidate fetch ceiling from `max(length*10, 200)` to `max(length*5, 50)`, cutting MySQL fallback cost by roughly 4× on shops where Elasticsearch is unavailable

---

## [5.2.7] - 2026-03-27

### Bug Fixes

- **Fixed extremely slow global cross-selling mode**: Replaced expensive ProductStreamBuilder queries with in-memory `streamIds` lookup, eliminating N database queries per product page for stream-based configurations
- **Added category-first candidate query**: Products from the same category are now queried first (fast), falling back to the full catalog only when insufficient results are found — dramatically reducing query load on large shops
- **Fixed empty cross-selling for variant-only properties**: Properties used exclusively as variant options (e.g. Size) are now included in weight matching alongside regular product properties
- **Fixed empty results when product has no matching weighted properties**: Instead of returning nothing, the plugin now falls back to showing products from the same category or catalog

### Improvements

- **Cached active configurations per request**: The plugin configuration query now runs once per request instead of once per product, reducing redundant database queries

---

## [5.2.6] - 2026-03-16

### Bug Fixes

- **Fixed slow cold load times on product detail pages**: Eliminated N+1 query pattern in the cross-selling recommendation engine. Previously, each weighted property option triggered a separate database query with expensive JOIN-based filters — with 15 weighted options this meant 18+ queries per request. Now uses a single batched query with lightweight JSON column filters and PHP-side scoring, reducing total plugin queries from N+3 to 2-3

---

## [5.2.5] - 2026-03-13

### Bug Fixes

- **Fixed crash on variant deduplication**: Resolved `ParentAssociationCanNotBeFetched` exception when the "one variant per parent" option is enabled. The parent association cannot be fetched directly in Shopware's DAL — parent products are now loaded via a separate query instead

---

## [5.2.4] - 2026-03-11

### Bug Fixes

- **Fixed empty cross-selling for products without properties**: Products without any assigned properties now receive cross-selling recommendations based on category, stock, and visibility filters instead of returning an empty result
- **Added fallback to native cross-selling on error**: If the plugin's recommendation logic encounters an unexpected error, it now gracefully falls back to Shopware's native cross-selling instead of breaking the entire cross-selling section

---

## [5.2.3] - 2026-03-11

### Bug Fixes

- **Fixed migration crash when upgrading from older versions**: Five ALTER TABLE migrations referenced the old table name `webla_intelligent_cross_selling_settings` without checking if it had already been renamed to `webla_cross_selling`. This caused upgrades from versions prior to 5.0 to fail. All migrations now resolve the correct table name dynamically and check for existing columns before altering.

---

## [5.2.2] - 2026-03-10

### Bug Fixes

- **Fixed migration crash on reinstall after "keep data" uninstall**: Two early migrations (`Migration1649663958Initialisation` and `Migration1650453780UpdateSettings`) used bare `CREATE TABLE` without `IF NOT EXISTS`. When uninstalling with "keep user data", Shopware removes migration records but leaves tables intact — causing a crash on reinstall that also broke storefront product pages

---

## [5.2.1] - 2026-03-05

### Bug Fixes

- **Fixed fresh installation failure**: Migration `AddOneVariantPerParentSwitch` referenced the old table name `webla_intelligent_cross_selling_settings` instead of the renamed `webla_cross_selling`, causing fresh plugin installations to fail

---

## [5.2.0] - 2026-03-03

### New Features

- **Show one variant per parent**: New option to display only one variant per parent product in cross-selling results, preventing duplicate parent products from appearing in recommendations

---

## [5.1.2] - 2026-03-02

### Bug Fixes

- **Fixed crash on missing translations**: Resolved a TypeError where `getTitle()` crashed when translation rows were missing, causing "something went wrong" errors on product detail pages in the storefront
- **Fixed incomplete uninstall**: Added missing `DROP TABLE` statements for `webla_cross_selling_category` and `webla_cross_selling_product_stream` tables, which caused FK constraint failures during uninstall — leaving orphaned data that broke reinstallation
- **Null-safe entity getters**: `isActive()`, `isShowTitle()`, and `getMaxProducts()` now return safe defaults instead of crashing when properties are null

---

## [5.1.1] - 2026-02-19

### Improvements

- **Faster cache hits**: Eliminated all database queries on cached cross-selling requests — the configuration ID lookup that ran on every request (even cache hits) has been removed
- **Reduced DB queries on cache miss**: Property weights are now read from already-loaded configuration data instead of triggering a separate query per configuration
- **Product preloading**: The source product is loaded once and reused across all configurations when showing multiple cross-selling groups
- **Leaner search queries**: Removed unnecessary association loading from ID-only search queries

---

## [5.1.0] - 2026-02-05

### New Features

- **Multiple Configurations**: Create multiple cross-selling configurations, each with its own property weights and settings
- **Category Assignment**: Assign configurations to specific categories - products in those categories use that configuration
- **Dynamic Product Group Assignment**: Assign configurations to dynamic product groups (Product Streams) for flexible targeting
- **Priority-Based Resolution**: Set priorities to control which configuration wins when a product matches multiple
- **Show All Matching**: New plugin setting to show all matching configurations instead of just the highest priority one

### Bug Fixes

- **Shopware 6.7 Compatibility**: Fixed entity multi-select components not working in Shopware 6.7 (Vue 3)
- **Cross-Version Support**: Entity selectors now work correctly on Shopware 6.5, 6.6, and 6.7

### Improvements

- **Restructured Admin UI**: New list/detail pattern for managing multiple configurations
- **Better Organization**: Group cross-selling rules by product categories or dynamic groups

---

## [5.0.1] - 2026-01-29

### Bug Fixes

- **Fixed recommendation accuracy**: Resolved a critical bug where product filters accumulated across property iterations, causing increasingly incorrect results
- **Fixed crash on missing products**: Added null checks to prevent errors when a product doesn't exist or has no properties
- **Fixed variant exclusion**: Main articles no longer incorrectly show their own variants in cross-selling results
- **Fixed empty category handling**: Resolved edge case where empty category trees could cause filter errors

### Improvements

- **Optimized performance**: Weight lookups now use O(1) hash map instead of O(n) linear search
- **Better cache invalidation**: Cache now properly clears when property weights or settings change
- **Improved weight validation**: Invalid weights (null, zero, negative) are now skipped

---

## [5.0.0] - 2026-01-29

### New Features

- **Unified Multi-Version Support**: The plugin now supports Shopware 6.5, 6.6, and 6.7 from a single codebase
- **Automatic Version Detection**: The plugin automatically detects your Shopware version and loads the appropriate components

### Improvements

- **Modern Admin Interface**: The user interface has been optimized for Vue 3
- **Improved Stability**: All migrations are now compatible with various database versions

### Important Changes

- The plugin requires at least Shopware 6.5.0
- Maximum supported version is Shopware 6.7.x

### Migration from 4.x

- No configuration changes required
- All features from version 4.x are preserved
- The plugin automatically detects your Shopware version

---

## [4.1.0] - 2026-01-16

### New Features

- **Multilingual Titles**: The cross-selling section title can now be defined differently for each language
- Use the language switcher in the admin area to maintain titles in different languages

---

## [4.0.1] - 2025-10-17

### Bug Fixes

- **Migration issues fixed**: The plugin now checks if columns already exist before migration
- Prevents errors during repeated installation

---

## [4.0.0] - 2025-07-21

### Improvements

- **Shopware 6.7 Compatibility**: Full support for Shopware 6.7

---

## Version History Summary

| Version | Release Date | Highlights |
|---------|--------------|------------|
| 5.2.6 | 2026-03-16 | Performance: eliminate N+1 query pattern, 83% fewer DB queries |
| 5.2.5 | 2026-03-13 | Fix crash on variant deduplication |
| 5.2.4 | 2026-03-11 | Fix empty cross-selling for products without properties, error fallback |
| 5.2.3 | 2026-03-11 | Fix migration crash on upgrade from older versions |
| 5.2.2 | 2026-03-10 | Fix migration crash on reinstall after keep-data uninstall |
| 5.2.1 | 2026-03-05 | Fix fresh installation failure |
| 5.2.0 | 2026-03-03 | Show one variant per parent option |
| 5.1.2 | 2026-03-02 | Fix crash on missing translations, fix uninstall |
| 5.1.1 | 2026-02-19 | Performance: zero DB queries on cache hit |
| 5.1.0 | 2026-02-05 | Multiple configurations, category/stream assignment |
| 5.0.1 | 2026-01-29 | Critical bug fixes, performance optimization |
| 5.0.0 | 2026-01-29 | Multi-version support (SW 6.5-6.7) |
| 4.1.0 | 2026-01-16 | Multilingual titles |
| 4.0.1 | 2025-10-17 | Migration bugfix |
| 4.0.0 | 2025-07-21 | Shopware 6.7 support |

---

## Upgrade Notes

### Upgrading to 5.0.0

- **No action required**: The upgrade happens automatically
- All existing settings and weights are preserved
- The plugin detects your Shopware version automatically

### Upgrading to 4.1.0

- After upgrading, you can set up multilingual titles
- Existing titles are preserved in the default language

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
|----------------|------------------|-------------|
| 5.0.x | 6.5.0 - 6.7.x | 8.1+ |
| 4.1.x | 6.6.x | 8.1+ |
| 4.0.x | 6.6.x - 6.7.x | 8.1+ |
