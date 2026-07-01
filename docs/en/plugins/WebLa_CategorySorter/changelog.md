# Changelog

All notable changes to Category Sorter for end users.

---

## 1.0.0 – Initial release

### ✨ New Features

- **Admin page**: New page under **Settings → Plugins → Category Sorter** to
  alphanumerically sort a category's direct subcategories.
- **Natural ordering**: Case-insensitive and number-aware, so "Item 2" is placed before
  "Item 10".
- **Recursive mode**: Optionally sort the entire subtree down to the deepest level.
- **Manual sorting**: A **Sort subcategories** action that reorders the selected category's
  children on demand.
- **Multi-category selection**: Sort several categories at once, unlocked via the
  `multiselect` In-App Purchase.
- **Automatic sorting**: Scheduled automatic sorting, unlocked via the `scheduled-sort`
  In-App Purchase.
- **Configurable interval**: A run interval (in seconds) for the scheduled task that takes
  effect immediately on save.
- **Smart-bar save**: Persists the category selection, the recursive option and the
  interval.

---

## Version History Summary

| Version | Highlights                                                          |
| ------- | ------------------------------------------------------------------- |
| 1.0.0   | Initial release with manual, recursive and scheduled sorting        |

---

## Compatibility

| Plugin version | Shopware version | PHP version |
| -------------- | ---------------- | ----------- |
| 1.0.0          | 6.6 – 6.7        | 8.2+        |
