**Changelog**

All notable changes to BuildIT Share Cart for end users.

---

# 5.0.2

_Released 2026-07-31_

**Bug Fixes**

- **Sharing via email**: When title and message were left empty, the cart link was inserted into the subject line together with a stray `&body=` marker. Subject and message are now passed correctly, and the link always lands in the message body.
- **Sharing via WhatsApp and Facebook**: Special characters such as `&` or `#` in the title or message no longer truncate or garble the shared text.
- **Sharing via Facebook**: The share dialog is now opened over `https` instead of `http`.

---

# 5.0.1

_Released 2026-03-30_

**Bug Fixes**

- **Database compatibility**: Fixed collation mismatch (`utf8_unicode_ci` vs `utf8mb4_unicode_ci`) that caused query errors on servers with `utf8mb4_general_ci` as default collation

---

# 5.0.0

_Released 2026-03-25_

**New Features**

- **Multi-version support**: The plugin now supports Shopware 6.6 and 6.7 with a single installation. You no longer need separate plugin versions for different Shopware versions.

**Improvements**

- **Modernized build process**: Plugin build migrated to the official `shopware-cli` tooling
- **Optimized store texts**: Descriptions, highlights, and features in the Shopware Store have been revised
- **Code quality**: Various PHPStan warnings and typos in settings labels have been fixed

**Important Changes**

- **Shopware 6.5 is no longer supported**: Please update to at least Shopware 6.6 before upgrading to version 5.0.0
- **No configuration changes needed**: All existing settings are preserved

---

# 4.0.0

_Released 2025-07-31_

**New Features**

- **Shopware 6.7 support**: Full compatibility with Shopware 6.7

---

# 3.0.0

_Released 2024-12-27_

**New Features**

- **Shopware 6.6 support**: Full compatibility with Shopware 6.6

---

# 1.0.6

_Released 2023-06-13_

**New Features**

- **Shopware 6.5 support**: Compatibility with Shopware 6.5 added

**Bug Fixes**

- **Database**: Fixed naming collision in database tables

---

# 1.0.5

_Released 2023-03-09_

**Bug Fixes**

- **Compatibility**: Fixed issues with Shopware versions before 6.4.9

---

# 1.0.4

_Released 2022-06-26_

**New Features**

- **Automatic cleanup**: Scheduled task for automatically deleting old carts
- **Cleanup configuration**: Configurable time periods for cart deletion
- **Add all button**: Button on the landing page to add all products to cart at once

---

# 1.0.3

_Released 2022-06-09_

**Improvements**

- **Uninstallation**: Improved uninstallation process

---

# 1.0.0

_Released 2022-06-04_

**New Features**

- **Initial release**: Share cart via link, email, WhatsApp, and Facebook

---

**Version History Summary**

| Version | Release Date | Highlights                             |
| ------- | ------------ | -------------------------------------- |
| 5.0.2   | 2026-07-31   | Share link and encoding fixes          |
| 5.0.1   | 2026-03-30   | Database collation fix                 |
| 5.0.0   | 2026-03-25   | Multi-version support for SW 6.6 + 6.7 |
| 4.0.0   | 2025-07-31   | Shopware 6.7 support                   |
| 3.0.0   | 2024-12-27   | Shopware 6.6 support                   |
| 1.0.6   | 2023-06-13   | Shopware 6.5 + database fix            |
| 1.0.4   | 2022-06-26   | Automatic cleanup + add all button     |
| 1.0.0   | 2022-06-04   | Initial release                        |

---

**Upgrade Notes**

**Upgrading to 5.0.0**

- Ensure you are running at least Shopware 6.6
- No configuration changes required
- All existing shared carts are preserved

**Compatibility**

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 5.x            | 6.6, 6.7         | 8.2+        |
| 4.x            | 6.7              | 8.2+        |
| 3.x            | 6.6              | 8.2+        |
| 1.x            | 6.4 - 6.5        | 8.1+        |
