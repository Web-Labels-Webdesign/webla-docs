# Changelog

All notable changes to **Batch-Management** for end users.

---

## [3.0.0] — 2026-04-22

### ✨ New Features

- **Shopware 6.7 support**: The plugin now runs on Shopware 6.7. A single ZIP covers both 6.6 and 6.7.

### 🔧 Improvements

- **Automatic UI adaptation**: Admin components detect the Shopware version at runtime and render the appropriate UI elements, so views behave identically on 6.6 and 6.7.

### 🐛 Bug Fixes

- **Uninstall**: Plugin tables are only dropped during uninstall when *Keep user data* is left unchecked — no more accidental data loss.

### ⚠️ Important Changes

- **Shopware 6.5 dropped**: From this version onwards Shopware 6.5 is no longer supported. Users still on 6.5 can obtain the last compatible build from the `trunk` branch.

---

## Version History Summary

| Version | Release Date | Highlights                                  |
| ------- | ------------ | ------------------------------------------- |
| 3.0.0   | 2026-04-22   | Shopware 6.7 support, single ZIP for 6.6+6.7 |

---

## Upgrade Notes

### Upgrading to 3.0.0

1. **Before the upgrade**: Confirm your Shopware version is at least 6.6.0. Shops on 6.5 must upgrade to 6.6 first.
2. **Update the plugin**: Through the Plugin Manager or via Composer.
3. **After the update**: No manual data migration is required. Existing batches, consumption records and compositions are preserved.

### Compatibility

| Plugin version | Shopware version      | PHP version |
| -------------- | --------------------- | ----------- |
| 3.0.0          | 6.6.0 – 6.7.x         | 8.2+        |
