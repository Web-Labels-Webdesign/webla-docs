**Changelog — Preferred Delivery Date for Customers**

All notable changes to the plugin for end users.

---

# 4.0.2

_Released 2026-06-01_

**Bug Fixes**

- Fix the scheduled automatic holiday update failing to run. The background task that refreshes public holidays could not be processed and was discarded with a "No handler for message" error; holidays now update automatically again.

---

# 4.0.1

_Released 2026-06-01_

**Bug Fixes**

- Fix the delivery date no longer appearing in the Shopware 6.7 administration (order list, order detail) and in product exports. The delivery-date association failed to register, which caused errors when opening the order views or running a product export.

---

# 4.0.0

_Released 2025_

**New Features**

- Shopware 6.6 and 6.7 in a single version: one plugin version now covers both Shopware major versions. No more switching between different plugin variants.
- One plugin for all: the plugin automatically detects your installed Shopware version and adapts accordingly.

**Improvements**

- Store listing revised: the plugin description and metadata in the Shopware Store have been updated for better discoverability and clearer communication.
- Faster date calculation: the calculation of the earliest possible delivery date for categories has been optimised and now runs significantly faster.

**Bug Fixes**

- Date picker label corrected: in the admin panel, the date input field incorrectly showed "Name" instead of "Date" as its label on Shopware 6.7.
- Cart error resolved: a bug in the off-canvas cart on Shopware 6.7, which caused an error message under certain circumstances, has been fixed.

---

**Compatibility**

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 4.0.x          | 6.6.0 – 6.7.x    | 8.1+        |

**Upgrade Notes**

When upgrading from an earlier version that only supported Shopware 6.6 or 6.7, no manual data migration steps are required. Simply run the update via Extensions → My Extensions — your settings and data will be preserved.
