**Changelog — Home Page Control**

All notable changes for shop owners and administrators.

---

# 4.1.2

_Released 2026-11-12_

**Bug Fixes**

- Compatible with MySQL 8.4. The link to the shopping experience now uses its complete key, so installing the plugin and importing a database backup no longer fail on MySQL 8.4, and bin/console dal:validate no longer reports the plugin's foreign keys. Existing configurations are kept during the update.

**Improvements**

- The configured home page no longer relies on a cache event that Shopware removes in 6.8. On Shopware 6.6 a configured home page is never served from the store API cache, so a campaign shows up as soon as its time window opens.

# 4.1.1

_Released 2026-09-01_

**Bug Fixes**

- The "weekday" rule works again. It never matched, so a configuration restricted to certain weekdays was skipped and the home page stayed unchanged.

# 4.1.0

_Released 2026-09-01_

**New Features**

- Support for Shopware 6.6.6 and newer from the same plugin version as 6.7 — one download covers both majors

**Improvements**

- Cache variance for Shopware 6.6 is handled through the category route cache key, so each customer group keeps its own cached home page with the HTTP cache switched on
- Build and release moved to shopware-cli, which also ships the administration assets for 6.6 and 6.7 from a single build

**Bug Fixes**

- The "date range" rule type no longer falls through and pre-fills itself with the customer group value
- The home page is no longer lost with a fatal error when no sales channel matches the current request
- Missing entity fields (CMS page, configuration, home page configuration id) are available again

**Breaking Changes**

- The "referrer" rule type has been removed. It was never evaluated, so it had no effect on which home page was shown. Existing rules of that type are deleted automatically when the plugin is updated.
