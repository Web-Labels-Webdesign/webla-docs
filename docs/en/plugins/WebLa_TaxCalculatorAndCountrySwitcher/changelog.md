**Changelog — Tax calculator and shipping country switch**

All notable changes for end users.

---

# 5.1.6

_Released 2026-06-03_

**Bug Fixes**

- Restore the country selection in the storefront header and the offcanvas (mobile) menu on Shopware 6.7. Shopware 6.7 loads the header and footer in separate, independently cached fragments and removed the old `page.header` template data, which left the country hint and the mobile country dropdown without their values. Both now read from the header pagelet directly, so the country switcher and the country hint message display correctly again on Shopware 6.7.

---

# 5.1.5

_Released 2026-05-28_

**Bug Fixes**

- Prevent storefront crash after plugin update when other plugins or Shopware itself contain dormant service classes referencing missing interfaces (e.g. APIs removed in Shopware 6.7, or optional dependencies not installed in the shop's vendor directory such as `nikic/php-parser` used by `symfony/translation`). The internal compatibility compiler pass now silently skips service definitions whose class cannot be loaded, instead of aborting container compilation with a fatal `ClassNotFoundError` that took the entire storefront down after the plugin update completed.

---

# 5.1.4

_Released 2026-05-27_

**Bug Fixes**

- Skip `PartialEntity` instances in the product price calculator. Bundle plugins load products via `Criteria::addFields`, yielding partial entities without typed getters. The decorator previously threw `UndefinedMethodError` on `getTaxId()`, cascading to HTTP 500 on every code path resolving bundle items and saturating PHP-FPM workers until the shop became unreachable. The decorated Shopware calculator now handles those products without recalculation.
- Coexist with third-party plugins that type-hint the final `CachedSalesChannelContextFactory` on Shopware 6.7. The DI compiler pass now detects the conflicting type-hint and skips the decoration instead of aborting container compilation.

---

# 5.1.3

_Released 2026-05-15_

**Bug Fixes**

- Fix infinite redirect loop ("too many redirects") after logging in during checkout when the customer's default shipping country differs from the country selected via the country dropdown or popup. The cookie is now synced inline instead of via a redirect to the same URI, removing the failure mode that surfaced under HTTP cache.
- Synchronise the delivery-country cookie automatically when a customer logs in, so the header country widget reflects the customer's default shipping country immediately and the popup no longer reopens on the checkout page after login.
- Set the `secure` flag on the delivery-country cookie based on the request scheme, so HTTPS storefronts emit secure cookies while local HTTP development still works.
- Replace the popup title heading with an accessible non-heading element so Shopware Store template-compliance checks pass while screen readers still announce a level-2 heading.

**New Features**

- Register the delivery-country cookie with Shopware's cookie configuration manager so storefronts running the consent banner can declare and govern the `sw-switch-country` cookie correctly.

---

# 5.1.0

_Released 2026-04-15_

**New Features**

- **Country selection popup on first visit (PAngV compliance)**: First-time visitors now see a blocking popup asking for their delivery country before any prices are rendered. This ensures the displayed gross price matches the price the customer pays at checkout — a legal requirement under the German *Preisangabenverordnung*.
- **Optional GeoIP pre-selection**: If you supply a MaxMind GeoLite2-Country database, the popup pre-selects the visitor's country automatically. Falls back silently to the sales channel default when GeoIP is disabled, the database is missing, or the detected country is not shippable.
- **Checkout address mismatch reconciliation**: If a customer's shipping address country differs from the country they selected in the popup, prices and the country cookie are automatically reconciled at `/checkout/confirm` with a visible info notice.
- **Static fallback hint**: When the popup is disabled, a small notice near the country widget reminds visitors that prices reflect the currently selected country.
- **Automatic composer install for dependencies**: The plugin's `executeComposerCommands()` is now enabled, so Shopware installs the new GeoIP library automatically during plugin install or update — no manual `composer require` needed.

**Improvements**

- **Decoupled popup from country widget toggle**: The popup can now be used independently of the header country switcher. You can enable one without the other.
- **Stale cookie guard**: If the persisted country cookie points to a country that is no longer shippable (because the sales channel configuration changed), the cookie is cleared automatically and the popup re-appears.
- **Shopware 6.6 and 6.7 parity**: The popup data is attached via `StorefrontRenderEvent`, which works consistently on both majors — 6.7 loads the header via an ESI sub-request where the previous pagelet path was not available.

**Configuration**

New settings in the plugin configuration under **Country popup**:

- **Show country selection popup on first visit** — toggle
- **Country cookie lifetime (days)** — default 30
- **Enable GeoIP pre-selection** — toggle
- **Absolute path to GeoLite2-Country.mmdb** — merchant-supplied path

---

# 5.0.0

_Released 2026-04-14_

**New Features**

- **One codebase for Shopware 6.6 and 6.7**: Starting with this version, the plugin supports both Shopware majors from a single installation. You no longer need to switch between plugin versions when upgrading Shopware.
- **Automated updates via GitHub Actions**: New versions are validated, built, and uploaded to the Shopware Store automatically — faster bug-fix cycles.
- **Conventional changelog**: Future versions generate their changelog automatically from commit messages.

**Improvements**

- **More robust country detection**: The target country lookup in the cart, shipping, and product price path now uses a more compatible Shopware call that works reliably on both majors.
- **More stable factory integration**: The internal integration with Shopware's sales channel context layer was migrated to the official adapter architecture — you benefit from more stable upgrades for future Shopware versions.

**Breaking Changes**

- **Shopware 6.5 is no longer supported**: If you are still on Shopware 6.5, please stay on plugin version 2.x. Version 5.0.0 requires at least Shopware 6.6.
- **Minimum PHP version**: 8.2 or higher — make sure your server meets the requirement.

---

# 4.1.4

_Released 2025-12-12_

**Improvements**

- Added flexbox styling for the country display in the topbar.
- Introduced topbar display mode as a configuration option (Extend theme's topbar, Replace topbar, Widget only).
- Updated Docker setup for local development.

---

# 4.1.3

_Released 2025-10-16_

**Improvements**

- Streamlined release workflow for consistency.
- Updated Docker image reference.

---

# 2.0.2

_Released 2023-11-15_

**Bug Fixes**

- Fixed issue in tax calculation.

---

# 2.0.1

_Released 2023-08-21_

**Bug Fixes**

- Fixed issue in tax calculation.

---

# 2.0.0

_Released 2023-06-07_

**New Features**

- Added support for Shopware 6.5.

---

# 1.0.17

_Released 2023-05-02_

**New Features**

- Added recalculation of shipping costs.

---

# 1.0.13

_Released 2023-03-20_

**New Features**

- Added mobile support.

---

# 1.0.12

_Released 2023-02-23_

**New Features**

- Added SVG flags for country selection.

---

# 1.0.11

_Released 2023-02-09_

**Improvements**

- Added switches to control flags and country representation.

---

# 1.0.9

_Released 2022-09-13_

**Improvements**

- Added support for ZeobvBundleProducts (bundled products).

---

# 1.0.7

_Released 2022-07-21_

**New Features**

- Initial official release.
