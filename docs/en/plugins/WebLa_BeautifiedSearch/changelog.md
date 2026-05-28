**Changelog — Search as Overlay**

All notable changes to the plugin for end users.

---

# 4.3.0

_Released 2026-05-27_

**New Features**

- Configurable product limit in the suggest overlay: choose 10, 20, 30, or 50 products via the new "Number of products in suggest overlay" setting (default 10)
- "Show all results" button below the product grid that links to the full search results page whenever more results are available than fit into the overlay

**Bug Fixes**

- Mobile view: the suggest overlay no longer overflows the viewport on small screens. The configured overlay width is now treated as a maximum width so the overlay fills the screen on mobile and is capped at the configured value on desktop

---

# 4.2.2

_Released 2026-02-03_

**Bug Fixes**

- Category Search: inactive categories no longer appear in search results, which previously caused 404 errors when clicked

---

# 4.2.1

_Released 2026-02-02_

**Bug Fixes**

- LibSass Compatibility: fixed SCSS compilation error on Shopware 6.5 by replacing the `sass:color` module's `color.adjust()` with the `lighten()` function

---

# 4.2.0

_Released 2026-02-02_

**New Features**

- Modern View Mode: new "View Mode" setting with two options:
  - Standard: classic tabbed interface (default)
  - Modern: side-by-side layout on desktop with products on the left and categories/blog in a sidebar on the right. Mobile devices fall back to the tabbed interface.

**Improvements**

- Refactored tab templates: extracted tab navigation and content into reusable partial templates for better maintainability
- Fixed duplicate Blog tab: resolved HTML validation issue when both NetzP and H1Web blog plugins are active

---

# 4.1.0

_Released 2026-01-30_

**New Features**

- Category sidebar on search results page: new option to replace the filter panel on the search results page with matching category results. Enable via "Replace sidebar filters with category results" in plugin settings.
- Configurable category limit: set the maximum number of categories displayed in the sidebar (5, 10, 15, or 20)

**Improvements**

- Refactored category search: extracted category search logic into a reusable `CategorySearchService` for better code organization

---

# 4.0.0

_Released 2026-01-30_

**Breaking Changes**

- Unified multi-version architecture: the plugin now supports Shopware 6.5, 6.6, and 6.7 with a single codebase. You no longer need different plugin versions for different Shopware versions.

**New Features**

- Complete search overlay functionality: tabbed interface with products, categories, blog, and manufacturers
- Configurable display: overlay width, column count, and box layout adjustable
- Extended product search: search by EAN, article number, and manufacturer number

**Improvements**

- Optimized build workflow for faster releases

---

# 3.0.1

_Released 2026-01-13_

**Bug Fixes**

- Manufacturer Search: fixed typo in variable name that could cause errors
- Stability: improved null check in SuggestPageSubscriber for more stable operation

---

# 3.0.0

_Released 2025-07-31_

**New Features**

- Shopware 6.7 support: full compatibility with Shopware 6.7

**Breaking Changes**

- This version is specifically designed for Shopware 6.7

---

# 2.0.5

_Released 2025-05-09_

**Bug Fixes**

- Various bug fixes and stability improvements

---

# 2.0.0

_Released 2024-12-27_

**New Features**

- Shopware 6.6 support: full compatibility with Shopware 6.6

**Breaking Changes**

- This version is specifically designed for Shopware 6.6

---

# 1.0.0

_Released 2024-02-09_

**New Features**

- Initial version: first release of the plugin
- Enhanced search overlay: modern interface with tab navigation
- Category search: integration of categories in search results
- Blog article search: support for NetzP Blog and H1 Web Blog
- Manufacturer search: integration of manufacturers (with Shopware Commercial)
- Configurable display: adjustable column count and layout options

---

**Version History Summary**

| Version | Release Date | Highlights                                          |
| ------- | ------------ | --------------------------------------------------- |
| 4.3.0   | 2026-05-27   | Mobile overlay fix, configurable suggest limit + show-all link |
| 4.2.2   | 2026-02-03   | Fix inactive categories in search results           |
| 4.2.1   | 2026-02-02   | LibSass compatibility fix for Shopware 6.5          |
| 4.2.0   | 2026-02-02   | Modern view mode with side-by-side layout           |
| 4.1.0   | 2026-01-30   | Category sidebar on search results page             |
| 4.0.0   | 2026-01-30   | Multi-version architecture (6.5, 6.6, 6.7)          |
| 3.0.1   | 2026-01-13   | Bugfix for manufacturer search                      |
| 3.0.0   | 2025-07-31   | Shopware 6.7 support                                |
| 2.0.5   | 2025-05-09   | Stability improvements                              |
| 2.0.0   | 2024-12-27   | Shopware 6.6 support                                |
| 1.0.0   | 2024-02-09   | Initial release                                     |

---

**Upgrade Notes**

**Upgrading to Version 4.0.0**

Version 4.0.0 unifies the codebase for all Shopware 6 versions. Please note:

1. Uninstall the existing plugin version
2. Install version 4.0.0
3. Verify your settings — they may need to be reconfigured
4. Clear all caches after the upgrade

**Compatibility**

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 4.0.0+         | 6.5.0 - 6.7.x    | 8.1+        |
| 3.0.x          | 6.7.x            | 8.1+        |
| 2.0.x          | 6.6.x            | 8.1+        |
| 1.0.x          | 6.5.x            | 8.1+        |
