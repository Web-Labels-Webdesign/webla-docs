# Changelog

All notable changes to Product Slider Advanced for end users.

---

## [v5.0.4] - 2026-03-05

### 🐛 Bug Fixes

- **Mobile overflow in column layouts**: Fixed an issue where the slider content overflowed its container on mobile devices when embedded in third-party column layouts (e.g. Themeware 2-column grids). The slider now correctly constrains to its parent container width.

---

## [v5.0.3] - 2026-02-04

### 🐛 Bug Fixes

- **CSS inline styles fixed**: Fixed an issue with CSS escaping that broke inline styles in the slider. This fixes display issues with teaser width and other style properties.

---

## [v5.0.2] - 2026-02-04

### 🐛 Bug Fixes

- **Data attribute fixed**: Updated the data attribute for the product slider to improve functionality

---

## [v5.0.1] - 2026-02-04

### 🐛 Bug Fixes

- **Vertical alignment**: Removed an unnecessary condition for vertical alignment that caused display issues in certain cases
- **Performance optimizations**: Improvements in security, performance, and code quality

---

## [v5.0.0] - 2026-02-04

### ✨ New Features

- **Unified version support**: The plugin now supports Shopware 6.5, 6.6, and 6.7 in a single version. You no longer need to switch between different plugin versions for different Shopware versions.

### 🐛 Bug Fixes

- **Store images**: Converted store images from JPEG to PNG format for better quality
- **Meta title**: Shortened the meta title to comply with the 50-character limit

---

## [v2.0.2] - 2023-10-20

### 🐛 Bug Fixes

- **Deleting categories**: Fixed an issue that occurred when deleting categories

---

## [v2.0.0] - 2023-06-09

### ✨ New Features

- **Shopware 6.5 support**: The plugin is now compatible with Shopware 6.5

---

## [v1.0.8] - 2022-09-02

### 🔧 Improvements

- **Administration**: Updated data handling in the administration area

---

## [v1.0.6] - 2022-09-01

### 🔧 Improvements

- **Frontend data**: Updated frontend data handling

---

## [v1.0.3] - 2022-08-22

### 🔧 Improvements

- **Image height**: Improved handling of image height

---

## [v1.0.2] - 2022-08-05

### ✨ New Features

- **Max height for slider**: New setting for the maximum height of the slider (default: 250px)
- **Category Custom Fields**: New Custom Fields for categories:
  - Individual image for the category slider
  - Individual description text for the slider
- **Description limit**: New value to limit the category description with "..." after reaching the limit

### 🔧 Improvements

- **Image display**: Improved handling of images in the storefront
- **Slider elements**: Adjusted image behavior within slider elements and category images
- **Flexible height**: The slider now supports the value `auto` for height

### 🐛 Bug Fixes

- **Administration translations**: Fixed translations in the administration area

---

## [v1.0.1] - 2022-07-28

### ✨ Initial Release

- Product slider for Shopping Experiences
- Support for manual product selection
- Support for products from categories
- Support for dynamic product groups
- Category slider mode
- Integrated teaser area
- Responsive design
- Navigation arrows and automatic scrolling

---

## Version History Summary

| Version | Release Date | Highlights |
| ------- | ------------ | ---------- |
| v5.0.4  | 2026-03-05   | Bugfix for mobile overflow in column layouts |
| v5.0.3  | 2026-02-04   | Bugfix for CSS inline styles |
| v5.0.2  | 2026-02-04   | Bugfix for slider functionality |
| v5.0.1  | 2026-02-04   | Performance optimizations |
| v5.0.0  | 2026-02-04   | Unified support for SW 6.5-6.7 |
| v2.0.2  | 2023-10-20   | Bugfix for categories |
| v2.0.0  | 2023-06-09   | Shopware 6.5 support |
| v1.0.2  | 2022-08-05   | Category Custom Fields, height settings |
| v1.0.1  | 2022-07-28   | Initial release |

---

## Upgrade Notes

### Upgrading to v5.0.0

Version 5.0.0 introduces a unified codebase for Shopware 6.5, 6.6, and 6.7. When upgrading:

1. Back up your shop before upgrading
2. Update the plugin via Plugin Manager or Composer
3. Clear the cache under **Settings → System → Caches & Indexes**
4. Your existing slider configurations will be preserved

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| v5.0.4         | 6.5.0 - 6.7.x    | 8.1+        |
| v2.0.x         | 6.5.x            | 8.1+        |
| v1.0.x         | 6.4.x            | 7.4+        |
