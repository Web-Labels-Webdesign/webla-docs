**Changelog: Property Notes**

Notable changes for shop operators.

---

# 4.1.0

_Released 2026-07-31_

**New Features**

- Shopware 6.6 is supported again. A single package now covers 6.6 and 6.7.

**Improvements**

- On Shopware 6.7.2 and newer, Shopware renders the note fields on a property option itself. The plugin detects this and no longer adds a second card.
- Store listing, screenshots and installation manual rewritten.

**Bug Fixes**

- Notes on a property option no longer render twice, and no longer hide custom field sets that belong to other extensions or to your own shop.
- Uninstalling now removes the note fields in one database operation instead of one call per field.

---

# 4.0.2

_Released 2026-07-31_

**Bug Fixes**

- Fixed the note fields on a property option appearing twice on Shopware 6.7.2 and newer, which also hid every other custom field set assigned to property options.

**Breaking Changes**

- Minimum Shopware version raised to 6.7.2. Reverted in 4.1.0, which supports 6.6 again.

---

# 4.0.0

_Released 2025-07-25_

**New Features**

- Support for Shopware 6.7.
