**Changelog — SplitCommission**

All notable changes for end users.

---

# 5.1.1

_Released 2026-05-29_

**Bug Fixes**

- The commission comment field did not appear on the product page in Shopware 6.7. It now renders correctly again (Shopware 6.7 moved the product buy-widget templates).
- Splitting a cart item into parts could target the wrong item or fail with an error when several items were splittable. Splitting now always applies to the item it was triggered on and no longer errors.

**Improvements**

- "Active for all products" now shows the comment field on every product as intended, without also requiring the per-product switch.

---

# 5.1.0

_Released 2026-05-29_

**New Features**

- Wishlist commission notes — when the PremsWishlist plugin is installed, commission comments entered on a product are now carried over to the wishlist and shown next to the product. Enable it under the plugin settings ("Carry commission notes into the wishlist").

**Compatibility**

- Optional integration. Requires the PremsWishlist plugin and Shopware 6.7. Without PremsWishlist the plugin behaves exactly as before.

---

# 5.0.1

_Released 2026-05-28_

**Improvements**

- Refreshed Shopware Store listing — extension icon, descriptions, and metadata now display correctly.

---

# 5.0.0

_Released 2026-05-28_

**New Features**

- Shopware 6.6 support — one plugin version now works on both Shopware 6.6 and 6.7.

**Improvements**

- Unified codebase for Shopware 6.6 and 6.7 — no separate branches needed.
- Modernized release pipeline — faster, more reliable Shopware Store deliveries.
- Added integration guide for adding commission fields to Shopware email templates (German and English).

**Compatibility**

- Plugin 5.x: Shopware 6.6.0–6.7.x, PHP 8.2+
- Plugin 4.x (legacy): Shopware 6.7.0–6.7.x, PHP 8.2+

**Upgrade Notes**

- No configuration changes required. Existing settings preserved. Install via Plugin Manager or Shopware Store and clear the cache.

---

# 4.0.0

_Released 2025-07-28_

**New Features**

- Initial stable release for Shopware 6.7.
- Commission note input field on the product detail page.
- Line item split functionality in the cart and off-canvas cart.
- Inline editing of commission notes in the cart.
- Optional global order comment field on the checkout confirmation page.
- Global comment displayed on the order success page.
- Commission notes shown in the Shopware admin order line items view.
- Tiered/bulk pricing preserved across split positions.
- Activatable globally for all products or individually per product (via custom field).
