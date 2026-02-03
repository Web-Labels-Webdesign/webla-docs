# Changelog

All notable changes to the "Search as Overlay" plugin for end users.

---

## [4.2.2] - 2026-02-03

### :bug: Bug Fixes

- **Category Search**: Fixed inactive categories appearing in search results, which caused 404 errors when clicked

---

## [4.2.1] - 2026-02-02

### :bug: Bug Fixes

- **LibSass Compatibility**: Fixed SCSS compilation error on Shopware 6.5 by replacing `sass:color` module's `color.adjust()` with `lighten()` function for LibSass compatibility

---

## [4.2.0] - 2026-02-02

### :sparkles: New Features

- **Modern View Mode**: New "View Mode" setting with two options:
  - **Standard**: Classic tabbed interface (default)
  - **Modern**: Side-by-side layout on desktop with products on the left and categories/blog in a sidebar on the right. Mobile devices fall back to tabbed interface.

### :recycle: Improvements

- **Refactored Tab Templates**: Extracted tab navigation and content into reusable partial templates for better maintainability
- **Fixed Duplicate Blog Tab**: Resolved HTML validation issue when both NetzP and H1Web blog plugins are active

---

## [4.1.0] - 2026-01-30

### :sparkles: New Features

- **Category Sidebar on Search Results Page**: New option to replace the filter panel on the search results page with matching category results. Enable via "Replace sidebar filters with category results" in plugin settings.
- **Configurable Category Limit**: Set the maximum number of categories displayed in the sidebar (5, 10, 15, or 20)

### :recycle: Improvements

- **Refactored Category Search**: Extracted category search logic into reusable `CategorySearchService` for better code organization

---

## [4.0.0] - 2026-01-30

### :boom: Important Changes

- **Unified Multi-Version Architecture**: The plugin now supports Shopware 6.5, 6.6, and 6.7 with a single codebase. You no longer need different plugin versions for different Shopware versions.

### :sparkles: New Features

- **Complete Search Overlay Functionality**: Tabbed interface with products, categories, blog, and manufacturers
- **Configurable Display**: Overlay width, column count, and box layout adjustable
- **Extended Product Search**: Search by EAN, article number, and manufacturer number

### :recycle: Improvements

- Optimized build workflow for faster releases

---

## [3.0.1] - 2026-01-13

### :bug: Bug Fixes

- **Manufacturer Search**: Fixed typo in variable name that could cause errors
- **Stability**: Improved null check in SuggestPageSubscriber for more stable operation

---

## [3.0.0] - 2025-07-31

### :sparkles: New Features

- **Shopware 6.7 Support**: Full compatibility with Shopware 6.7

### :boom: Important Changes

- This version is specifically designed for Shopware 6.7

---

## [2.0.5] - 2025-05-09

### :bug: Bug Fixes

- Various bug fixes and stability improvements

---

## [2.0.0] - 2024-12-27

### :sparkles: New Features

- **Shopware 6.6 Support**: Full compatibility with Shopware 6.6

### :boom: Important Changes

- This version is specifically designed for Shopware 6.6

---

## [1.0.0] - 2024-02-09

### :sparkles: New Features

- **Initial Version**: First release of the plugin
- **Enhanced Search Overlay**: Modern interface with tab navigation
- **Category Search**: Integration of categories in search results
- **Blog Article Search**: Support for NetzP Blog and H1 Web Blog
- **Manufacturer Search**: Integration of manufacturers (with Shopware Commercial)
- **Configurable Display**: Adjustable column count and layout options

---

## Version History Summary

| Version | Release Date | Highlights                               |
| ------- | ------------ | ---------------------------------------- |
| 4.2.2   | 2026-02-03   | Fix inactive categories in search results |
| 4.2.1   | 2026-02-02   | LibSass compatibility fix for Shopware 6.5 |
| 4.2.0   | 2026-02-02   | Modern view mode with side-by-side layout |
| 4.1.0   | 2026-01-30   | Category sidebar on search results page  |
| 4.0.0   | 2026-01-30   | Multi-version architecture (6.5, 6.6, 6.7) |
| 3.0.1   | 2026-01-13   | Bugfix for manufacturer search           |
| 3.0.0   | 2025-07-31   | Shopware 6.7 support                     |
| 2.0.5   | 2025-05-09   | Stability improvements                   |
| 2.0.0   | 2024-12-27   | Shopware 6.6 support                     |
| 1.0.0   | 2024-02-09   | Initial release                          |

---

## Upgrade Notes

### Upgrading to Version 4.0.0

Version 4.0.0 unifies the codebase for all Shopware 6 versions. Please note:

1. **Uninstall old version**: First uninstall the existing plugin version
2. **Install new version**: Install version 4.0.0
3. **Check configuration**: Your settings may need to be reconfigured
4. **Clear cache**: Clear all caches after the upgrade

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 4.0.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 3.0.x          | 6.7.x            | 8.1+        |
| 2.0.x          | 6.6.x            | 8.1+        |
| 1.0.x          | 6.5.x            | 8.1+        |
