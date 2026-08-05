**Changelog — Shopping Feed with Unique Discounts**

All notable changes for end users.

---

# 5.2.2

_Released 2026-08-04_

**Improvements**

- New setting "Discount validity after the feed visit (hours)". You now decide yourself how long a visitor arriving from a price comparison keeps the discounted price — and therefore how long the affected pages are served uncached for that visitor. This was previously fixed at 24 hours; that stays the default, and a shorter value takes load off the cache.

---

# 5.2.1

_Released 2026-07-10_

**Bug Fixes**

- With "Apply discount only for single-unit purchases" enabled, the discounted price is now shown only for quantity 1 on the product page. Quantity graduations (bulk prices) keep their normal prices, matching what the cart charges for larger quantities. Previously every quantity tier showed the single-unit discount.

---

# 5.2.0

_Released 2026-07-10_

**Bug Fixes**

- The special price from a price-comparison feed link is now reliably kept in the cart all the way through checkout — including guest checkout, registration, and logging into an existing account. Previously the discount could silently disappear from the cart at checkout even though it was shown on the product page.
- Business (net/B2B) customers are now charged the correct discounted price. Previously, if a customer added a discounted product while seeing gross prices and then became a net customer, tax was added on top of the gross figure and the customer was overcharged.
- The discounted price now shows the correct tax breakdown and keeps the unit/base-price (Grundpreis) display intact.
- Product prices are no longer written to the database while a page is rendered, so a feed visitor can no longer affect the strike-through/reference price shown to normal customers.

**Improvements**

- Caching was reworked: for a feed visitor, only the pages that actually show a special price are served uncached; the rest of the shop — and every normal visitor and search-engine crawler — continues to use the full page cache. This ends the earlier behaviour where a single feed link could serve much of the shop uncached.
- The discount now follows a stable per-visitor identity that survives login, registration, and session or token changes, so what the customer saw on the page is what they pay.

---

# 5.1.4

_Released 2026-07-02_

**Bug Fixes**

- Discounted product pages are cached again and shared between visitors who have the same special price. Previously the plugin wrote a strike-through (regulation) price to the product on every render of a discounted page, which invalidated that product's cache on each view — so the discounted page was never served from cache and was rendered from scratch every time. The price is now written only when it actually changes.

**Improvements**

- Visitors who arrived through a price-comparison feed no longer receive a private, uncached copy of unrelated product pages. Only the discounted product's own detail page is cached per discount; every other product page is served from the normal shared cache. Normal prices and normal cache performance are kept on all non-offer pages, including cross-selling.

---

# 5.1.3

_Released 2026-07-01_

**Bug Fixes**

- Visiting a price-comparison feed link (`?source=...`) no longer forces the whole shop to be served uncached. Previously a single feed visit set a site-wide cookie that bypassed the cache on every page for 24 hours, so search-engine crawlers or visitors could browse the entire shop uncached. Only the pages that actually show the discounted price are affected now.

**Improvements**

- Discounted pages are now cached per discount instead of per visitor: visitors arriving with the same special price share one cached page, greatly reducing cache load and speeding up delivery.
- Editing a product stream or discount now immediately clears the affected discounted pages from the cache, so a changed or removed promotion no longer lingers until the cache expires.

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
