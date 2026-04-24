# Changelog

All notable changes to **Manufacturer Pages** for end users.

A complete technical change history is available in [CHANGELOG.md](../../CHANGELOG.md) in the plugin repository.

---

## Version 5.0.0

### ✨ New Features

- **One ZIP for Shopware 6.6 and 6.7**: A single plugin version now covers both Shopware major releases — no parallel downloads anymore.

### 🔧 Improvements

- **Store quality**: Link titles on all manufacturer links (better accessibility and SEO).
- **Administration**: Compatible with the new Meteor/Vue 3 administration in Shopware 6.7, without losing functionality on 6.6.
- **Performance**: SEO URL generation now loads manufacturers only once per run instead of once per language — noticeably faster processing in large stores.
- **Code quality**: Comprehensive clean-up (PHPStan clean, Stylelint clean).

### ⚠️ Breaking Changes

- **Minimum version**: Shopware 6.6.0 is still supported. Shopware 6.5 and earlier are no longer supported.
- **Updating from 4.x**: Perform a cache rebuild after the upgrade (**Settings → Cache & Indexes → Clear cache**).

---

## Earlier Versions

For details on versions prior to 5.0.0 see [CHANGELOG.md](../../CHANGELOG.md) in the repository.

| Version | Highlights                                                 |
| ------- | ---------------------------------------------------------- |
| 4.x     | Shopware 6.7 support (separate branch)                     |
| 3.x     | Shopware 6.6 support, alphabet filter, logo fallback       |
| 2.x     | Shopware 6.5 support, multi-language SEO URLs              |
| 1.x     | Initial release for Shopware 6.4                           |

---

## Upgrade Notes

### Upgrading to 5.0.0

1. **Before the upgrade**: Back up your shop database.
2. **Perform the upgrade**: Plugin Manager → Manufacturer Pages → Update.
3. **After the upgrade**:
   - Clear the cache (**Settings → Cache & Indexes**).
   - Check your configuration settings once (**Extensions → Manufacturer Pages → Configure**) — they remain unchanged, but a quick check does not hurt.
   - If SEO URLs are active: run the scheduled task **GenerateSEOUrlTask** once manually so all URLs are regenerated.

### Compatibility

| Plugin version | Shopware version | PHP version |
| -------------- | ---------------- | ----------- |
| 5.0.x          | 6.6.x, 6.7.x     | 8.2+        |
| 4.x            | 6.7.x            | 8.2+        |
| 3.x            | 6.6.x            | 8.2+        |
| 2.x            | 6.5.x            | 8.1+        |
