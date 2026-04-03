# Changelog

All notable changes to the **Category Quick Filter** for end users.

---

## [5.0.3] – 2026-04-02

### 🐛 Bug Fixes

- **Top categories not highlighted**: Replaced CSS-based highlighting on native `<option>` elements (unsupported in Chrome, Edge, Safari) with cross-browser `<optgroup>` grouping. Top categories now appear in a clearly labeled "Top" group at the top of the dropdown.

---

## [5.0.2] – 2026-03-25

### 🐛 Bug Fixes

- **Shopware 6.6.8 compatibility**: Fixed Twig injection on older Shopware 6.6.x versions (e.g. 6.6.8) where the `controller.service_arguments` tag alone did not auto-inject Twig. An explicit `setTwig` call is now applied via the version-specific compatibility layer.

---

## [5.0.1] – 2026-03-25

### 🐛 Bug Fixes

- **Shopware 6.6 Twig injection**: Fixed a crash where the controller threw a `StorefrontException` because Twig was not injected. The controller now uses proper constructor injection with the `controller.service_arguments` tag, compatible with both Shopware 6.6 and 6.7.

---

## [5.0.0] – 2026-03-04

### ✨ New Features

- **Shopware 6.7 support**: The plugin is now fully compatible with Shopware 6.7.x.

### 🔧 Improvements

- **Improved compatibility**: An internal mechanism for automatic Shopware version detection ensures smooth operation on both 6.6.x and 6.7.x.
- **Modernized JavaScript**: The storefront widget has been migrated to a standalone, self-contained approach – better performance and no conflicts with other plugins.
- **Code quality**: All quality checks (PHPStan, ESLint) pass; the code meets the latest Shopware standards.

---

## Version History Summary

| Version | Highlights                                         |
| ------- | -------------------------------------------------- |
| 5.0.3   | Fix top categories highlighting (cross-browser)    |
| 5.0.2   | Fix Twig injection on older Shopware 6.6.x         |
| 5.0.1   | Fix Twig injection crash on Shopware 6.6           |
| 5.0.0   | Shopware 6.7 support, code modernization           |

---

## Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 5.0.3          | 6.6.x – 6.7.x    | 8.2+        |
| 5.0.2          | 6.6.x – 6.7.x    | 8.2+        |
| 5.0.1          | 6.6.x – 6.7.x    | 8.2+        |
| 5.0.0          | 6.6.x – 6.7.x    | 8.2+        |
