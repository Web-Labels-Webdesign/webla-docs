**Changelog — Home Page Control**

All notable changes for shop owners and administrators.

---

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
