**Changelog — Shopping Feed with Unique Discounts**

All notable changes for end users.

---

# 5.1.2

_Released 2026-04-30_

**Bug Fixes**

- Caching: pages reached via the price-comparison feed parameter `?source=...` are no longer stored in any HTTP cache (Shopware reverse proxy, Symfony HttpCache, external Varnish/CDN) or in Shopware's data-layer route cache. Previously these pages were cached per `source` token and never invalidated when the special price was edited in admin, so visitors could see the old price for hours until the cached entry expired. The cart was always correct because it recalculates live; only the rendered PDP was stale.

---

# 5.1.1

_Released 2026-04-28_

**Bug Fixes**

- SEO: also drop the DreiscSeoPro `dreiscSeoInstallmentRobotsTagData` page extension when `?source=` is present. DreiscSeoPro's `meta.html.twig` reads its own extension before `metaInformation.robots`, so without this fix the rendered `<meta name="robots">` tag still showed `index,follow` on shops using DreiscSeoPro, even though `metaInformation.robots` was correctly set to `noindex, nofollow`. The `X-Robots-Tag` HTTP header was unaffected.

---

# 5.1.0

_Released 2026-04-28_

**New Features**

- SEO: pages reached via the price-comparison feed parameter `?source=...` now return `X-Robots-Tag: noindex, nofollow` and a matching `<meta name="robots">` tag, so Google no longer indexes deeplink variants of product detail pages.

**Bug Fixes**

- Hardened the `webla-session` cookie with explicit `secure`, `httpOnly`, and `SameSite=Lax` attributes (previously secure depended on the request scheme).

**Improvements**

- Polished store listing metadata: explicit `compatibility_date` and longer `meta_description` for better search-snippet rendering.

**Breaking Changes**

- Dropped support for Shopware 6.5. The plugin now requires Shopware 6.6 or 6.7. Merchants on 6.5 must stay on plugin v5.0.x.

---

# 5.0.5

_Released 2026-04-15_

**Bug Fixes**

- **Constructor Argument Mismatch (Hotfix for v5.0.4)**: Fixed a fatal error "Too few arguments to function ExportDiscountPriceCalculator::__construct(), 9 passed... 10 expected" that broke the plugin completely after installing v5.0.4. The v5.0.4 fix added a `ProductDefinition` constructor argument via `services.xml`, but the `CompatibilityCompilerPass` rebuilds the service arguments at container compile time and its hardcoded argument list silently overrode `services.xml`, still passing only 9 arguments. The compiler pass now passes all 10 arguments for both the SW 6.5 and SW 6.6+ branches.

---

# 5.0.4

_Released 2026-04-15_

**Bug Fixes**

- **Uninitialized EntityDefinition Registry**: Fixed a fatal error "Typed property `EntityDefinition::$registry` must not be accessed before initialization" that occurred when opening a product via a discount link, mostly in incognito mode. The price calculator instantiated `ProductDefinition` manually via `new`, producing an unregistered definition whose `$registry` was never injected. `QueryStringParser::fromArray` then crashed when filter parsing walked fields or associations. The `ProductDefinition` is now injected from the DI container, so the registry is properly wired.

---

# 5.0.3

_Released 2026-02-20_

**Bug Fixes**

- **Sequential Product Discounts**: Fixed a bug where only the first product visited via a feed deeplink received the discounted price when `allowMultiple=true`. Subsequent products incorrectly showed the full price. The price calculator now resolves the matching discount session per product inside the loop, rather than using a single pre-loaded session for all products.

---

# 5.0.2

_Released 2026-02-19_

**Bug Fixes**

- **Price DB Contamination**: Fixed a bug where `listPrice` was incorrectly written to the database for products where the merchant never set one. The root cause was shallow-clone semantics allowing entity Price objects to be mutated before Shopware's `EntityWrittenEvent` flushed the entity. All three price calculation methods now build new `Price` objects instead of mutating the entity's own objects, preventing any unintended DB writes.

---

# 5.0.1

_Released 2026-02-03_

**Bug Fixes**

- **Customer Feedback**: Fixed issues based on customer feedback.

---

# 5.0.0

_Released 2026-02-03_

**New Features**

- **Multi-Version Support**: Full compatibility with Shopware 6.5, 6.6, and 6.7.
- **Improved Architecture**: Optimized compatibility layer for different Shopware versions.

---

# 2.0.1

_Released 2023-10-20_

**Improvements**

- **New Caching Strategy**: Improved performance through optimized caching.

---

# 2.0.0

_Released 2023-06-13_

**New Features**

- **Shopware 6.5 Support**: Full compatibility with Shopware 6.5.

---

# 1.0.11

_Released 2023-05-30_

**New Features**

- **30-Day Price Display**: Automatic creation of lowest price in last 30 days when a visitor comes through the export.

---

# 1.0.10

_Released 2023-05-16_

**New Features**

- **New Product Price Setting**: Custom field for individual export prices per product.

---

# 1.0.9

_Released 2023-03-22_

**Improvements**

- **Shopware Requirements**: Adjustments for Shopware compatibility.

---

# 1.0.8

_Released 2023-03-09_

**Improvements**

- **Shopware Requirements**: Further adjustments for Shopware compatibility.

---

# 1.0.7

_Released 2023-03-09_

**Improvements**

- **Shopware Requirements**: Adjustments for Shopware compatibility.

---

# 1.0.6

_Released 2023-02-15_

**Improvements**

- **Rounding**: Improved price rounding.

---

# 1.0.5

_Released 2022-11-21_

**Bug Fixes**

- **Error Handling**: Prevention of errors in certain scenarios.

---

# 1.0.4

_Released 2022-11-10_

**Improvements**

- **Tiered Pricing**: Improved handling of advanced prices.

---

# 1.0.3

_Released 2022-11-03_

**Improvements**

- **Handling**: Improved handling and documentation.

---

# 1.0.1

_Released 2022-10-05_

**New Features**

- **Automatic Cleanup**: Added scheduled task for automatic session cleanup.

---

# 1.0.0

_Released 2022-10-05_

**New Features**

- **Initial Release**: Initial version of the plugin.
- Global discount for product exports.
- Session-based discount display in storefront.
- Support for Google Shopping, idealo, billiger.de.
