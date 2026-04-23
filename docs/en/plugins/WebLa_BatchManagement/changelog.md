# Changelog

All notable changes to **Batch-Management** for end users.

---

## [3.0.1] — 2026-04-23

### :sparkles: New Features

- **Piece-based consumption fallback**: New setting *Fallback to piece-based consumption* (Stock Configuration). When enabled, products without a weight and without a composition consume 1 batch-unit per ordered piece. Lets piece-based shops (cosmetics, pharma, individual items) run without assigning artificial product weights. Disabled by default — weight-based behaviour stays the same for existing installations.

### :bug: Bug Fixes

- **Batch quantity cap removed**: Batches now accept any quantity. The form previously blocked values above 100 even though the database column already supported them.
- **Batch list sorting**: Column sorting in the Batches overview works again.
- **No more 500 on order-state change**: The order state-machine subscriber now catches and logs exceptions instead of rolling back the state transition with a server error.

### :recycle: Improvements

- **Manual**: Installation manual now includes a technical workflow section so merchants understand when and how batches are consumed.

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
