# Changelog

All notable changes to the Product Advisor Plugin for end users.

---

## [7.0.8] - 2026-02-19

### Bug Fixes

- :bug: **Product stream returning no products (Shopware 6.7)**: Fixed an issue where advisors with a configured product stream would return zero products on Shopware 6.7. The root cause was a registry initialization error triggered by direct `ProductDefinition` injection. The fix replaces the manual filter parsing with Shopware's official `ProductStreamBuilderInterface::buildFilters()` API, which is compatible with Shopware 6.5, 6.6, and 6.7.

---

## [7.0.7] - 2026-02-09

### Bug Fixes

- :bug: **Jump logic editing**: Fixed the "Jump to Question (Position)" field in the answer list being non-editable. The field now supports inline editing as intended.

---

## [7.0.6] - 2026-01-30

### New Features

- **Plug-and-play installation**: The plugin now works immediately on Shopware 6.5, 6.6, and 6.7 without requiring `bin/build-storefront.sh`. A standalone JavaScript bundle is automatically loaded via script injection.

### Bug Fixes

- **Admin select fields (6.7)**: Fixed display issue where Format and Type dropdowns showed "Select..." instead of the selected value in Shopware 6.7 admin
- **Multi-version compatibility**: Improved component bindings to work correctly across all supported Shopware versions

---

## [7.0.5] - 2026-01-26

### Bug Fixes

- **Shopware 6.6 compatibility**: Plugin now works immediately after installation without requiring manual `bin/build-storefront`. Compiled storefront assets are now included in the plugin package.

---

## [7.0.4] - 2026-01-15

### Improvements

- **Changelog generation**: Improved automatic changelog creation for releases

---

## [7.0.3] - 2026-01-13

### Bug Fixes

- **Store images**: Images for the Shopware Store were converted to correct PNG format

---

## [7.0.2] - 2026-01-13

### Bug Fixes

- **Code optimisation**: Removed unused dependencies and optimised question retrieval

### Performance Improvements

- **Session management**: Session clearing has been optimised to cause fewer server requests

---

## [7.0.1] - 2026-01-13

### Bug Fixes

- **Jump logic**: Fixed a bug where the advisor ended prematurely when a jump target was NULL. Invalid jump targets are now correctly ignored.

---

## [7.0.0] - 2026-01-13

### New Features

- **Multi-version architecture**: The plugin now supports Shopware 6.5 to 6.7 from a single code branch. This simplifies updates and ensures consistent functionality across all supported versions.

### Important Changes

- **Shopware compatibility**: Now supports Shopware 6.5.0 to 6.8.0

### Breaking Changes

- **CMS Block re-configuration required**: Due to internal component naming fixes, existing Product Advisor blocks in Shopping Experiences will no longer display. You must **remove and re-add** the Product Advisor block in each affected Shopping Experience. Your advisor configurations (questions, answers, settings) are preserved.

---

## [6.0.3] - 2025-08-15

### Improvements

- **JavaScript optimisation**: Updated JavaScript bundle with improved plugin loading
- **Database performance**: Enhanced SQL query performance in AdvisorResultService through UNION ALL optimisation
- **Error handling**: Improved error handling and logging in JavaScript plugins
- **Code quality**: General improvements and cleanup

---

## [3.0.2] - 2023-08-31

### New Features

- **B2B compatibility**: Added compatibility with Shopware B2B Suite

---

## [3.0.1] - 2023-06-13

### Bug Fixes

- **Property gathering**: Fixed algorithm for gathering properties from products

---

## [3.0.0] - 2023-06-07

### New Features

- **Shopware 6.5**: Added support for Shopware 6.5

---

## [2.3.17] - 2023-06-01

### Improvements

- **Variant search**: The search algorithm now also searches variant options (not just properties)
- **Main products**: Main products with variants are no longer shown in search (only the variants)
- **Filtering**: Non-matching results can now be filtered per question

---

## [2.3.16] - 2023-03-01

### Bug Fixes

- **Performance**: Fixed performance issues

---

## [2.3.15] - 2022-12-15

### Bug Fixes

- **Update issue**: Fixed an update issue
- **Internal name**: Removed the requirement for an internal name

---

## [2.3.14] - 2022-10-19

### New Features

- **Exclude non-matching**: Added option to completely exclude non-matching products

---

## [2.3.0] - 2022-10-06

### New Features

- **Translations**: All visible texts can now be translated

---

## [2.1.16] - 2022-02-16

### Initial Release

- First public version of the Product Advisor Plugin

---

## Version History Summary

| Version | Release Date | Highlights |
|---------|--------------|------------|
| 7.0.7 | 2026-02-09 | Jump logic editing fix |
| 7.0.6 | 2026-01-30 | Plug-and-play for 6.5/6.6/6.7 |
| 7.0.5 | 2026-01-26 | Shopware 6.6 ready-to-use fix |
| 7.0.4 | 2026-01-15 | Changelog improvements |
| 7.0.3 | 2026-01-13 | Store image correction |
| 7.0.2 | 2026-01-13 | Performance optimisation |
| 7.0.1 | 2026-01-13 | Jump logic bugfix |
| 7.0.0 | 2026-01-13 | Multi-version support (6.5-6.7) |
| 6.0.3 | 2025-08-15 | JS optimisation, SQL performance |
| 3.0.2 | 2023-08-31 | B2B Suite compatibility |
| 3.0.0 | 2023-06-07 | Shopware 6.5 support |
| 2.3.17 | 2023-06-01 | Variant search |
| 2.3.14 | 2022-10-19 | Exclude option |
| 2.3.0 | 2022-10-06 | Full translations |
| 2.1.16 | 2022-02-16 | Initial release |

---

## Upgrade Notes

### Upgrading to 7.0.0

The plugin has been converted to a multi-version architecture. When upgrading from older versions:

1. Create a backup of your database
2. Deactivate the old plugin
3. Install the new version
4. Activate the plugin
5. Clear the cache
6. **Re-add Product Advisor blocks** in your Shopping Experiences (see Breaking Changes above)

Existing product advisors, questions and answers are preserved. Only the CMS block placement needs to be refreshed.

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
|----------------|------------------|-------------|
| 7.0.x | 6.5.0 - 6.8.0 | 8.1+ |
| 6.0.x | 6.6.x | 8.1+ |
| 3.0.x | 6.5.x | 8.1+ |
| 2.3.x | 6.4.x | 7.4+ |

---

## Support

For questions or issues, contact us at **plugin@web-labels.de** or use the Shopware ticket support.
