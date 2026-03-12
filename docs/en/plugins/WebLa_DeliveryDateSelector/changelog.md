# Changelog

All notable changes to the Preferred Delivery Date for Customers plugin for end users.

---

## 4.0.0 — 2025

### New Features

- **Shopware 6.6 and 6.7 in a single version**: One plugin version now covers both Shopware major versions. No more switching between different plugin variants.
- **One plugin for all**: The plugin automatically detects your installed Shopware version and adapts accordingly.

### Improvements

- **Store listing revised**: The plugin description and metadata in the Shopware Store have been updated for better discoverability and clearer communication.
- **Faster date calculation**: The calculation of the earliest possible delivery date for categories has been optimised and now runs significantly faster.

### Bug Fixes

- **Date picker label corrected**: In the admin panel, the date input field incorrectly showed "Name" instead of "Date" as its label on Shopware 6.7.
- **Cart error resolved**: A bug in the off-canvas cart on Shopware 6.7, which caused an error message under certain circumstances, has been fixed.

---

## Version History Summary

| Version | Highlights                                                                 |
| ------- | -------------------------------------------------------------------------- |
| 4.0.0   | Support for Shopware 6.6 and 6.7 in a single plugin version                |

---

## Upgrade Notes

### Upgrading to 4.0.0

If you are upgrading from an earlier version that only supported Shopware 6.6 or 6.7, no manual data migration steps are required. Simply run the update via **Extensions → My Extensions** — your settings and data will be preserved.

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 4.0.0          | 6.6.0 – 6.7.x    | 8.1+        |
