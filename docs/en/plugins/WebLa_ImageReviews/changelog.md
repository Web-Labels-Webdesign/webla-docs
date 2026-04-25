**Changelog — Images in Product Reviews**

All notable changes for end users.

---

# 3.1.2

_Released 2026-04-24_

**🔧 Improvements**

- **Technical name alignment**: the plugin technical name is now `WebLa_ImageReviews`, consistent with other Web Labels extensions.
- **Storefront asset URL fix**: the upload-icon image in the review gallery now points at the correct lowercase bundle path and renders reliably.

**⚠️ Important Changes**

- The plugin technical name changed from `WebLaImageReviews` to `WebLa_ImageReviews`. Shopware treats this as a new plugin, so existing installations must be reinstalled and reconfigured (media folder, promo images, variant-gallery toggle).

**Upgrading to 3.1.2**

1. Uninstall the previous version (choose *Keep user data* if you want existing review images preserved).
2. Install and activate the new version from the Shopware Store.
3. Re-enter the plugin settings (media folder override, promo images, gallery variant toggle) — they live under the new plugin identity.
4. Clear the cache.

---

# 3.1.1

_Released 2026-04-15_

**🔧 Improvements**

- **Dedicated "Image Reviews" media folder**: On install the plugin now creates its own media default folder with sensible thumbnail and aspect-ratio settings. Review uploads are stored there automatically, keeping your media library tidy.
- **Clean uninstall**: When uninstalling with *Keep user data* disabled, the plugin now correctly removes its media folder entry and drops its data table. Previously the cleanup step did nothing.
- **Storefront accessibility**: Added descriptive `title` and `alt` attributes to the review upload link and upload icon in the gallery, improving screen-reader support.
- **Shopware Store install manual**: Removed stray `<code>` tag and `→` HTML entity that rendered incorrectly in some store contexts.

**Migration from 3.1.0**

No action required. The media folder is created automatically on update. Existing uploads keep working; the legacy `mediaFolderId` plugin setting is still honoured as an optional override.

**Upgrading to 3.1.1**

1. Update the plugin via the Shopware Store.
2. Clear the cache.
3. No further action required — the "Image Reviews" media folder is created automatically.

---

# 3.1.0

_Released 2026-04-15_

**✨ New Features**

- **Single package for Shopware 6.6 and 6.7**: One plugin package now covers both Shopware major versions. No more switching between separate distributions.

**🔧 Improvements**

- **Shopping Experiences admin config**: The media select in the CMS element config has been migrated to the current Shopware administration stack (Vue 3). The element can be configured and saved reliably again.
- **Automated release pipeline**: New releases ship directly to the Shopware Store without manual intermediate steps.

**⚠️ Important Changes**

- **No separate distributions**: The previous `sw66` branch is gone. Users on version 2.0.x running Shopware 6.6 should upgrade directly to 3.1.x.

**Migration from 3.0.x / 2.0.x**

No configuration changes required. Existing settings and review media are preserved. A single ZIP now covers Shopware 6.6 and 6.7.

**Upgrading to 3.1.0**

1. Update the plugin via the Shopware Store.
2. Clear the cache.
3. No further action required — settings and data are preserved.

---

**Version History Summary**

| Version | Release Date | Highlights                                         |
| ------- | ------------ | -------------------------------------------------- |
| 3.1.2   | 2026-04-24   | Technical-name alignment, asset URL fix            |
| 3.1.1   | 2026-04-15   | Own media folder, clean uninstall, a11y fixes      |
| 3.1.0   | 2026-04-15   | Unified Shopware 6.6 + 6.7 distribution            |

**Compatibility**

| Plugin Version | Shopware 6.6 | Shopware 6.7 | PHP   |
| -------------- | ------------ | ------------ | ----- |
| 3.1.x          | ✅            | ✅            | ≥ 8.2 |
| 3.0.x (legacy) | ❌            | ✅            | ≥ 8.2 |
| 2.0.x (legacy) | ✅            | ❌            | ≥ 8.2 |
