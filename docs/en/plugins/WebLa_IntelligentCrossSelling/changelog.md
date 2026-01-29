# Changelog

All notable changes to Intelligent Cross-Selling for end users.

---

## [5.0.0] - 2026-01-29

### New Features

- **Unified Multi-Version Support**: The plugin now supports Shopware 6.5, 6.6, and 6.7 from a single codebase
- **Automatic Version Detection**: The plugin automatically detects your Shopware version and loads the appropriate components

### Improvements

- **Modern Admin Interface**: The user interface has been optimized for Vue 3
- **Improved Stability**: All migrations are now compatible with various database versions

### Important Changes

- The plugin requires at least Shopware 6.5.0
- Maximum supported version is Shopware 6.7.x

### Migration from 4.x

- No configuration changes required
- All features from version 4.x are preserved
- The plugin automatically detects your Shopware version

---

## [4.1.0] - 2026-01-16

### New Features

- **Multilingual Titles**: The cross-selling section title can now be defined differently for each language
- Use the language switcher in the admin area to maintain titles in different languages

---

## [4.0.1] - 2025-10-17

### Bug Fixes

- **Migration issues fixed**: The plugin now checks if columns already exist before migration
- Prevents errors during repeated installation

---

## [4.0.0] - 2025-07-21

### Improvements

- **Shopware 6.7 Compatibility**: Full support for Shopware 6.7

---

## Version History Summary

| Version | Release Date | Highlights |
|---------|--------------|------------|
| 5.0.0 | 2026-01-29 | Multi-version support (SW 6.5-6.7) |
| 4.1.0 | 2026-01-16 | Multilingual titles |
| 4.0.1 | 2025-10-17 | Migration bugfix |
| 4.0.0 | 2025-07-21 | Shopware 6.7 support |

---

## Upgrade Notes

### Upgrading to 5.0.0

- **No action required**: The upgrade happens automatically
- All existing settings and weights are preserved
- The plugin detects your Shopware version automatically

### Upgrading to 4.1.0

- After upgrading, you can set up multilingual titles
- Existing titles are preserved in the default language

### Compatibility

| Plugin Version | Shopware Version | PHP Version |
|----------------|------------------|-------------|
| 5.0.x | 6.5.0 - 6.7.x | 8.1+ |
| 4.1.x | 6.6.x | 8.1+ |
| 4.0.x | 6.6.x - 6.7.x | 8.1+ |
