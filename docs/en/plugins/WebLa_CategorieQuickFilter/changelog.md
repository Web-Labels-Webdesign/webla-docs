**Changelog — Category Quick Filter**

All notable changes for end users.

---

# 5.1.2

_Released 2026-07-29_

**Bug Fixes**

- Fixed the category quick filter not working at all on Shopware 6.6. In versions 5.1.0 and 5.1.1 the dropdowns stopped loading on Shopware 6.6 shops, so selecting a category had no effect. Shopware 6.7 shops were not affected. If you are on Shopware 6.6 and running 5.1.0 or 5.1.1, please update.

---

# 5.1.1

_Released 2026-07-23_

**Bug Fixes**

- Fixed the OncoCompatibilityFilter compatibility option: selecting a category through the quick filter now reliably clears that plugin's active product-property filter. The previous version could leave a stale filter applied because the cached listing was not refreshed on the new page.

---

# 5.1.0

_Released 2026-07-23_

**New Features**

- Added a compatibility option for the "OncoCompatibilityFilter" plugin. When enabled in the plugin settings, completing a selection in the category quick filter clears that plugin's object selection (session and cookie), so customers land on the new category listing without a leftover product-property filter applied. Disabled by default.

---

# 5.0.6

_Released 2026-07-03_

**Bug Fixes**

- Category dropdowns loaded after the first selection (for example the model level) were not sorted alphabetically — their order appeared random. All dropdown levels now use the same natural alphabetical sorting as the first level.

---

# 5.0.5

_Released 2026-05-29_

**Bug Fixes**

- Storefront plugin still failed with `TypeError: t is not a constructor` on Shopware 6.7. The plugin called the whole-registry `PluginManager.initializePlugins()`, which races Shopware 6.7's asynchronous core-plugin loading; on a failed lazy import the registry keeps the `() => import()` loader functions, which the initializer then calls with `new`, breaking every async plugin. The plugin now initializes only its own plugin via `PluginManager.initializePlugin('CategorySelectorPlugin', …)`.

---

# 5.0.4

_Released 2026-05-28_

**Bug Fixes**

- Storefront plugin failed to initialize with `TypeError: t is not a constructor` when the plugin bundle evaluated before the Shopware Storefront bundle had defined `window.PluginBaseClass`. The plugin class is now created lazily, after both `window.PluginManager` and `window.PluginBaseClass` are available.

---

# 5.0.3

_Released 2026-04-02_

**Bug Fixes**

- Top categories not highlighted: replaced CSS-based highlighting on native `<option>` elements (unsupported in Chrome, Edge, Safari) with cross-browser `<optgroup>` grouping. Top categories now appear in a clearly labeled "Top" group at the top of the dropdown.

---

# 5.0.2

_Released 2026-03-25_

**Bug Fixes**

- Shopware 6.6.8 compatibility: fixed Twig injection on older Shopware 6.6.x versions (e.g. 6.6.8) where the `controller.service_arguments` tag alone did not auto-inject Twig. An explicit `setTwig` call is now applied via the version-specific compatibility layer.

---

# 5.0.1

_Released 2026-03-25_

**Bug Fixes**

- Shopware 6.6 Twig injection: fixed a crash where the controller threw a `StorefrontException` because Twig was not injected. The controller now uses proper constructor injection with the `controller.service_arguments` tag, compatible with both Shopware 6.6 and 6.7.

---

# 5.0.0

_Released 2026-03-04_

**New Features**

- Shopware 6.7 support: the plugin is now fully compatible with Shopware 6.7.x.

**Improvements**

- Improved compatibility: an internal mechanism for automatic Shopware version detection ensures smooth operation on both 6.6.x and 6.7.x.
- Modernized JavaScript: the storefront widget has been migrated to a standalone, self-contained approach – better performance and no conflicts with other plugins.
- Code quality: all quality checks (PHPStan, ESLint) pass; the code meets the latest Shopware standards.
