**Changelog — Product Advisor Plugin**

All notable changes to the Product Advisor Plugin for end users.

---

# 7.2.2

_Released 2026-06-10_

**Bug Fixes**

- **Installation fails on MySQL 8.4**: Removed the foreign keys from the answer and manufacturer tables referencing `product_manufacturer`. MySQL 8.4 rejects these when `restrict_fk_on_non_standard_key` is enabled (the default, e.g. on Azure Database for MySQL Flexible Server), because `product_manufacturer` uses a composite primary key. The relation is still enforced by Shopware's data layer, and a migration removes the foreign keys on existing installations.

---

# 7.2.1

_Released 2026-05-11_

**Bug Fixes**

- **Variants with parent-level property missing from results**: Fixed an issue where matching variants disappeared from advisor results when the searched property (e.g. "without underwire", color, material) was assigned to the parent product and the parent was flagged unavailable by Shopware (for example because a single variant was out of stock). The inheritance logic now gates only on the variant's own availability, not on the parent's aggregate availability flag.

---

# 7.2.0

_Released 2026-04-14_

**Breaking Changes**

- **Dropped Shopware 6.5 support**: Minimum required Shopware version is now 6.6.0. Shops still on 6.5 must stay on 7.1.x. Composer constraint updated to `>=6.6.0 <6.8.0`.

**Improvements**

- **Standard storefront plugin loading**: The Product Advisor JavaScript is now registered through Shopware's standard `PluginManager.register()` API instead of a manually injected `<script>` tag. Dropped the custom `base.html.twig` override and `StorefrontAssetExtension` Twig function. Storefront assets are emitted directly to `src/Resources/public/storefront/js/` by `shopware-cli extension build` — no manual copy step needed.
- **Simplified compatibility layer**: Removed all Shopware 6.5 branches from `ShopwareVersionFactory` and `FeatureFlags` (no more `isVersion65()` / `supportsAsyncStorefrontPlugins()`). Admin version detector no longer exposes a 6.5 path.
- **Simplified release workflow**: GitHub Actions no longer needs to manually copy the ESBuild output into `public/` before zipping.

---

# 7.1.1

_Released 2026-04-13_

**Bug Fixes**

- **Admin save broken on legacy advisors**: Fixed the advisor detail page in the admin where saving was impossible after upgrading to 7.1.0 — the Save button was unresponsive and the Design dropdown could not be changed. The new `showAllVariants` field was incorrectly flagged as required, which blocked DAL writes on advisors created before the upgrade.
- **Design dropdown not selectable (Shopware 6.7)**: Replaced the Design dropdown's `sw-select-field` with `sw-single-select` so value changes persist correctly under Vue 3.
- **Storefront JS bundle returning 404**: Fixed the standalone Product Advisor JavaScript bundle URL (`/bundles/webla_produktberater/storefront/js/web-la--produktberater.js`) — the Twig path contained a duplicate segment that prevented the script from loading.
- **CMS slot disappears on schema mismatch**: The CMS element resolver now degrades silently when the advisor entity cannot be loaded (e.g. after a partial upgrade where the database migration has not yet run), instead of taking the entire slot down.

---

# 7.1.0

_Released 2026-03-04_

**New Features**

- **Show all variants**: New advisor option "Show all variants" displays every individual matching variant in the results instead of one representative product per parent. Useful when a product stream targets variant/child products directly.

**Bug Fixes**

- **Product stream returns 0 results when targeting variants**: Fixed an issue where an advisor with a product stream that filters by variant products (e.g. product number starting with a specific prefix) returned zero results. A hardcoded `childCount < 1` filter was incorrectly excluding all parent-level products the stream was targeting.

---

# 7.0.8

_Released 2026-02-19_

**Bug Fixes**

- **Product stream returning no products (Shopware 6.7)**: Fixed an issue where advisors with a configured product stream would return zero products on Shopware 6.7. The root cause was a registry initialization error triggered by direct `ProductDefinition` injection. The fix replaces the manual filter parsing with Shopware's official `ProductStreamBuilderInterface::buildFilters()` API, which is compatible with Shopware 6.5, 6.6, and 6.7.

---

# 7.0.7

_Released 2026-02-09_

**Bug Fixes**

- **Jump logic editing**: Fixed the "Jump to Question (Position)" field in the answer list being non-editable. The field now supports inline editing as intended.

---

# 7.0.6

_Released 2026-01-30_

**New Features**

- **Plug-and-play installation**: The plugin now works immediately on Shopware 6.5, 6.6, and 6.7 without requiring `bin/build-storefront.sh`. A standalone JavaScript bundle is automatically loaded via script injection.

**Bug Fixes**

- **Admin select fields (6.7)**: Fixed display issue where Format and Type dropdowns showed "Select..." instead of the selected value in Shopware 6.7 admin.
- **Multi-version compatibility**: Improved component bindings to work correctly across all supported Shopware versions.

---

# 7.0.5

_Released 2026-01-26_

**Bug Fixes**

- **Shopware 6.6 compatibility**: Plugin now works immediately after installation without requiring manual `bin/build-storefront`. Compiled storefront assets are now included in the plugin package.

---

# 7.0.4

_Released 2026-01-15_

**Improvements**

- **Changelog generation**: Improved automatic changelog creation for releases.

---

# 7.0.3

_Released 2026-01-13_

**Bug Fixes**

- **Store images**: Images for the Shopware Store were converted to correct PNG format.

---

# 7.0.2

_Released 2026-01-13_

**Bug Fixes**

- **Code optimisation**: Removed unused dependencies and optimised question retrieval.

**Performance Improvements**

- **Session management**: Session clearing has been optimised to cause fewer server requests.

---

# 7.0.1

_Released 2026-01-13_

**Bug Fixes**

- **Jump logic**: Fixed a bug where the advisor ended prematurely when a jump target was NULL. Invalid jump targets are now correctly ignored.

---

# 7.0.0

_Released 2026-01-13_

**New Features**

- **Multi-version architecture**: The plugin now supports Shopware 6.5 to 6.7 from a single code branch. This simplifies updates and ensures consistent functionality across all supported versions.

**Important Changes**

- **Shopware compatibility**: Now supports Shopware 6.5.0 to 6.8.0.

**Breaking Changes**

- **CMS Block re-configuration required**: Due to internal component naming fixes, existing Product Advisor blocks in Shopping Experiences will no longer display. You must remove and re-add the Product Advisor block in each affected Shopping Experience. Your advisor configurations (questions, answers, settings) are preserved.

---

# 6.0.3

_Released 2025-08-15_

**Improvements**

- **JavaScript optimisation**: Updated JavaScript bundle with improved plugin loading.
- **Database performance**: Enhanced SQL query performance in AdvisorResultService through UNION ALL optimisation.
- **Error handling**: Improved error handling and logging in JavaScript plugins.
- **Code quality**: General improvements and cleanup.

---

# 3.0.2

_Released 2023-08-31_

**New Features**

- **B2B compatibility**: Added compatibility with Shopware B2B Suite.

---

# 3.0.1

_Released 2023-06-13_

**Bug Fixes**

- **Property gathering**: Fixed algorithm for gathering properties from products.

---

# 3.0.0

_Released 2023-06-07_

**New Features**

- **Shopware 6.5**: Added support for Shopware 6.5.

---

# 2.3.17

_Released 2023-06-01_

**Improvements**

- **Variant search**: The search algorithm now also searches variant options (not just properties).
- **Main products**: Main products with variants are no longer shown in search (only the variants).
- **Filtering**: Non-matching results can now be filtered per question.

---

# 2.3.16

_Released 2023-03-01_

**Bug Fixes**

- **Performance**: Fixed performance issues.

---

# 2.3.15

_Released 2022-12-15_

**Bug Fixes**

- **Update issue**: Fixed an update issue.
- **Internal name**: Removed the requirement for an internal name.

---

# 2.3.14

_Released 2022-10-19_

**New Features**

- **Exclude non-matching**: Added option to completely exclude non-matching products.

---

# 2.3.0

_Released 2022-10-06_

**New Features**

- **Translations**: All visible texts can now be translated.

---

# 2.1.16

_Released 2022-02-16_

**Initial Release**

- First public version of the Product Advisor Plugin.
