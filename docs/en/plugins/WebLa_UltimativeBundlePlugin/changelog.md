# Changelog

All notable changes to the Ultimate Bundle Plugin for end users.

---

## [5.1.0] - 2026-03-26

### :sparkles: New Features

- **Quantity selection per group**: Customers can now set the quantity per bundle group individually. Admins can enable quantity selection and set a maximum quantity per group.
- **Optional groups**: Bundle groups can be marked as optional so customers can decide whether to include them via a checkbox, with live price recalculation in the storefront.

### :bug: Bug Fixes

- Fixed excluded groups state not persisting across AJAX price updates

---

## [5.0.0] - 2026-03-26

### :boom: Important Changes

- **New architecture**: The plugin now supports Shopware 6.6 and 6.7 from a single version. It is no longer necessary to use different plugin versions for different Shopware versions. The plugin automatically detects your Shopware version and loads the appropriate adapters.

### :sparkles: New Features

- **Multi-version support**: Support for Shopware 6.6 and 6.7 from a single codebase
- **Activate/deactivate bundles**: New global setting to quickly enable and disable all bundles
- **Incomplete bundles**: New option to add bundles to the cart without complete group selection

### :wrench: Improvements

- **Product availability**: Improved filtering of unavailable products in the bundle display
- **Cart stability**: More stable discount calculation and improved cart hash handling
- **Error handling**: More robust processing of bundle selections and discounts

### :arrow_up: Migration from 4.x

- No configuration changes required
- All features from version 4.x are preserved
- The plugin automatically detects your Shopware version

---

## [2.0.11] - 2023-11-06

### :wrench: Improvements

- Minor bug fixes and stability improvements

---

## [2.0.10] - 2023-10-05

### :wrench: Improvements

- Minor bug fixes and stability improvements

---

## [2.0.9] - 2023-09-25

### :wrench: Improvements

- Minor bug fixes

---

## [2.0.8] - 2023-09-25

### :sparkles: New Features

- **Discount control**: New switch to control the discount behaviour per bundle

---

## [2.0.7] - 2023-09-25

### :wrench: Improvements

- Bug fixes and improvements for the final release

---

## [2.0.6] - 2023-08-31

### :wrench: Improvements

- Bug fixes and improvements for the final release

---

## [2.0.2] - 2023-08-03

### :wrench: Improvements

- Minor bug fixes and improvements

---

## [2.0.1] - 2023-08-03

### :wrench: Improvements

- Minor bug fixes and improvements

---

## [2.0.0] - 2023-08-03

### :sparkles: New Features

- **Shopware 6.5 support**: Full compatibility with Shopware 6.5

---

## [1.0.8] - 2023-08-03

### :tada: Initial Release

- Initial release of the Ultimate Bundle Plugin

---

## Version History Summary

| Version | Release Date | Highlights                                              |
| ------- | ------------ | ------------------------------------------------------- |
| 5.1.0   | 2026-03-26   | Quantity selection per group, optional bundle groups                       |
| 5.0.0   | 2026-03-26   | Multi-version support (SW 6.6 & 6.7), single codebase architecture       |
| 2.0.8   | 2023-09-25   | Per-bundle discount control                             |
| 2.0.0   | 2023-08-03   | Shopware 6.5 support                                    |
| 1.0.8   | 2023-08-03   | Initial release                                         |

---

## Upgrade Notes

### Upgrading to Version 5.0.0

- Install the new version as usual via Plugin Manager
- No manual configuration changes required
- The plugin automatically detects your Shopware version (6.6 or 6.7)
- Separate version branches (sw65, sw66) are no longer needed

### Compatibility

| Plugin Version | Shopware Version  | PHP Version |
| -------------- | ----------------- | ----------- |
| 5.1.0          | 6.6.0 - 6.7.x    | 8.2+        |
| 5.0.0          | 6.6.0 - 6.7.x    | 8.2+        |
| 2.0.x          | 6.5.x             | 8.1+        |
| 1.0.8          | 6.4.x             | 8.0+        |
