**Changelog — Custom fields in the admin product overview**

All notable changes, from a user's perspective.

---

# 4.1.0

_Released 2026-07-13_

**New Features**

- One installation for Shopware 6.6 and 6.7. Previously there were separate plugin versions per Shopware version. From now on, a single installation file covers both. You no longer need to swap the plugin when updating Shopware.

**Bug Fixes**

- Selected custom field columns now persist. Previously, columns you enabled and reordered were lost again when you switched to another menu, and had to be selected anew. Standard columns were unaffected. The cause was a loading race: the columns were sometimes reported to the product list too late, so Shopware discarded them when saving the column settings. They are now reported only once fully loaded.
- If your column selection has already been lost, set it up once after the update. It will then persist.
- Reliable column labels. Labels could appear in the wrong language because the admin language had not always finished loading by the time the columns were built.

**Improvements**

- Reworked documentation and store texts. Description, installation manual and FAQ were rewritten from scratch. The installation manual previously pointed to the wrong place for the column settings.

---

# 4.0.0

_Released 2025-07-31_

**Breaking Changes**

- Support for Shopware 6.7. This version runs on Shopware 6.7 only. For Shopware 6.6 use version 3.x, or version 4.1.0, which covers both.

---

# 3.0.3

_Released 2025-07-04_

**Bug Fixes**

- More robust handling of incomplete custom fields. A custom field without a stored label could disrupt the build-up of the column list. Affected fields are now skipped instead of blocking the remaining columns.

---

# 3.0.0

_Released 2024-12-27_

**Breaking Changes**

- Support for Shopware 6.6. This version runs on Shopware 6.6.

---

# 2.0.0

_Released 2023-06-14_

**Breaking Changes**

- Support for Shopware 6.5.

---

## Version overview

| Version | Release    | Highlights                                |
| ------- | ---------- | ----------------------------------------- |
| 4.1.0   | 2026-07-13 | One installation for Shopware 6.6 and 6.7 |
| 4.0.0   | 2025-07-31 | Shopware 6.7                              |
| 3.0.3   | 2025-07-04 | Fix for incomplete custom fields          |
| 3.0.0   | 2024-12-27 | Shopware 6.6                              |
| 2.0.0   | 2023-06-14 | Shopware 6.5                              |

Entries before version 2.0.0 are not reliably documented and have deliberately been omitted here.

## Upgrade notes

### Upgrading to 4.1.0

No steps are required. Your column selection is preserved, because it is stored in Shopware's product list settings and not in the plugin.

If you previously had to switch between plugin version 3.x and 4.0.0 depending on your Shopware version, that is no longer necessary from 4.1.0 onwards.

### Compatibility

| Plugin version | Shopware version |
| -------------- | ---------------- |
| 4.1.0          | 6.6.0 – 6.7.x    |
| 4.0.0          | 6.7.x            |
| 3.x            | 6.6.x            |
| 2.x            | 6.5.x            |
