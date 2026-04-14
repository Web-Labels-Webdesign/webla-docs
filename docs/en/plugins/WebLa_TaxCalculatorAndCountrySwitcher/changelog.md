# Changelog

All notable changes to the *Tax calculator and shipping country switch* plugin for end users.

---

## [5.0.0] - Unreleased

### ✨ New Features

- **One codebase for Shopware 6.6 and 6.7**: Starting with this version, the plugin supports both Shopware majors from a single installation. You no longer need to switch between plugin versions when upgrading Shopware.
- **Automated updates via GitHub Actions**: New versions are validated, built, and uploaded to the Shopware Store automatically — faster bug-fix cycles.
- **Conventional changelog**: Future versions generate their changelog automatically from commit messages.

### 🔧 Improvements

- **More robust country detection**: The target country lookup in the cart, shipping, and product price path now uses a more compatible Shopware call that works reliably on both majors.
- **More stable factory integration**: The internal integration with Shopware's sales channel context layer was migrated to the official adapter architecture — you benefit from more stable upgrades for future Shopware versions.

### ⚠️ Important Changes

- **Shopware 6.5 is no longer supported**: If you are still on Shopware 6.5, please stay on plugin version 2.x. Version 5.0.0 requires at least Shopware 6.6.
- **Minimum PHP version**: 8.2 or higher — make sure your server meets the requirement.

---

## [4.1.4] - 2025-12-12

### 🔧 Improvements

- Added flexbox styling for the country display in the topbar
- Introduced topbar display mode as a configuration option (Extend theme's topbar, Replace topbar, Widget only)
- Updated Docker setup for local development

---

## [4.1.3] - 2025-10-16

### 🔧 Improvements

- Streamlined release workflow for consistency
- Updated Docker image reference

---

## [2.0.2] - 2023-11-15

### 🐛 Bug Fixes

- Fixed issue in tax calculation

## [2.0.1] - 2023-08-21

### 🐛 Bug Fixes

- Fixed issue in tax calculation

## [2.0.0] - 2023-06-07

### ✨ New Features

- Added support for Shopware 6.5

---

## [1.0.17] - 2023-05-02

### ✨ New Features

- Added recalculation of shipping costs

## [1.0.13] - 2023-03-20

### ✨ New Features

- Added mobile support

## [1.0.12] - 2023-02-23

### ✨ New Features

- Added SVG flags for country selection

## [1.0.11] - 2023-02-09

### 🔧 Improvements

- Added switches to control flags and country representation

## [1.0.9] - 2022-09-13

### 🔧 Improvements

- Added support for ZeobvBundleProducts (bundled products)

## [1.0.7] - 2022-07-21

### ✨ New Features

- Initial official release

---

## Version History Summary

| Version | Release Date | Highlights                                              |
| ------- | ------------ | ------------------------------------------------------- |
| 5.0.0   | unreleased   | Unified codebase for SW 6.6 + 6.7                       |
| 4.1.4   | 2025-12-12   | Topbar mode, flexbox styling                            |
| 4.1.3   | 2025-10-16   | Release workflow tweaks                                 |
| 2.0.0   | 2023-06-07   | Support for Shopware 6.5                                |
| 1.0.17  | 2023-05-02   | Shipping cost recalculation                             |
| 1.0.7   | 2022-07-21   | Initial official release                                |

---

## Upgrade Notes

### Upgrading to 5.0.0

1. **Check Shopware version** — at least 6.6.0 is required
2. **Check PHP version** — 8.2 or higher
3. **Back up your database and plugin folder**
4. Update the plugin via the Plugin Manager
5. Activate and clear all caches:
   ```
   bin/console cache:clear
   ```
6. Test the storefront — all settings are preserved

**Migration from the sw66 branch installation**: If you previously had the separate `sw66` branch installed, a normal update is sufficient — the new version 5.0.0 automatically detects Shopware 6.6 and 6.7.

### Compatibility

| Plugin Version | Shopware 6.5 | Shopware 6.6 | Shopware 6.7 | PHP   |
| -------------- | ------------ | ------------ | ------------ | ----- |
| 5.x            | ❌            | ✅            | ✅            | ≥ 8.2 |
| 4.x            | ❌            | ❌            | ✅            | ≥ 8.2 |
| 3.x            | ❌            | ✅            | ❌            | ≥ 8.1 |
| 2.x            | ✅            | ❌            | ❌            | ≥ 8.0 |
