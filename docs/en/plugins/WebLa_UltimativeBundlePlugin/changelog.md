**Changelog — Ultimate Bundle Plugin**

All notable changes to the Ultimate Bundle Plugin for end users.

---

# 5.1.10

_Released 2026-08-20_

**Bug Fixes**

- On smartphones, component images are no longer shrunk to a fraction of their intended size. The image now keeps a fixed width regardless of how long the product name next to it is, and a sharper image file is loaded.
- In the administration, editing a bundle no longer triggers the same save action twice for a changed field.

---

# 5.1.9

_Released 2026-08-17_

**Bug Fixes**

- Additional notes beneath a component's price, such as the tax hint, no longer appear in the large bold price style.
- The mobile bundle preview now adjusts its height to its content instead of cutting it off at a fixed height.
- The quantity control of a component is aligned with the left edge of its box instead of being centered.

---

# 5.1.8

_Released 2026-08-03_

**Bug Fixes**

- Deselecting an optional component or changing a quantity no longer rebuilds the entire bundle area. Only the prices are updated, so an opened section on smartphones stays exactly as it was instead of visibly reloading. Choosing a different product alternative still rebuilds the view, because the components themselves change in that case.
- Changing several components in quick succession can no longer leave an outdated price on screen. A slower earlier calculation is now discarded once a newer one has started.

---

# 5.1.7

_Released 2026-08-03_

**Bug Fixes**

- On smartphones, the opened bundle area no longer closes when an optional component is deselected or a quantity is changed. The area was rebuilt after every price recalculation and fell back to its collapsed state; it now stays open.
- A bundle no longer grants its discount once every optional component has been deselected. Only the main product remains in that case, so it goes into the cart at its regular price, and the product page stops showing a saving or a crossed-out price.

---

# 5.1.6

_Released 2026-07-28_

**Bug Fixes**

- Bundle groups based on a dynamic product group now include product variants. Such a group only ever collected products that carry their own manufacturer, price or category — values a variant inherits from its main product instead of storing them itself. Variants were therefore skipped while the bundle index was built, and a group made up entirely of variants stayed empty, which hid the whole bundle on the product page. Groups based on a category were affected in the same way. Manually selected products never were. After updating, run the bundle index or wait for the scheduled task so the missing variants are picked up.

---

# 5.1.5

_Released 2026-07-27_

**Bug Fixes**

- The bundle display no longer changes on its own. The layout was picked from the visitor's device on the server and then stored in the page cache, so whichever device opened a product page first decided the layout for everyone until that cache entry was refreshed. Because stock and release-date changes refresh it, the display appeared to follow a product's availability. The layout now depends only on the browser window width: the compact view below 992 pixels, the full-width view above it.
- Removed a leftover debug output that printed internal page data onto every product detail page.
- Bundle option dialogs now use current Bootstrap 5 attributes, so the "no background overlay" setting takes effect again.
- On Shopware 6.7.10 and newer, bundle components are no longer listed twice in the cart. Shopware renders them itself in these versions, and the plugin no longer adds a second copy.

---

# 5.1.4

_Released 2026-07-06_

**Bug Fixes**

- Bundles with a pre-order component now show the release date ("Dieses Produkt erscheint am …") on the bundle line in the cart and use it for the delivery date, instead of the bundle's normal delivery time.

---

# 5.1.3

_Released 2026-07-06_

**Bug Fixes**

- Bundles now show the correct delivery date. When a bundled product has a later release date, is on backorder, or has a longer delivery time, the entire bundle now reflects that latest date instead of the main product's shorter delivery time.

---

# 5.1.1

_Released 2026-03-27_

**Bug Fixes**

- Fixed admin fields (quantity selection, optional groups) not visible on Shopware 6.7 due to stale pre-built assets

---

# 5.1.0

_Released 2026-03-26_

**New Features**

- **Quantity selection per group**: Customers can now set the quantity per bundle group individually. Admins can enable quantity selection and set a maximum quantity per group.
- **Optional groups**: Bundle groups can be marked as optional so customers can decide whether to include them via a checkbox, with live price recalculation in the storefront.

**Bug Fixes**

- Fixed excluded groups state not persisting across AJAX price updates

---

# 5.0.0

_Released 2026-03-26_

**Breaking Changes**

- **New architecture**: The plugin now supports Shopware 6.6 and 6.7 from a single version. It is no longer necessary to use different plugin versions for different Shopware versions. The plugin automatically detects your Shopware version and loads the appropriate adapters.

**New Features**

- **Multi-version support**: Support for Shopware 6.6 and 6.7 from a single codebase
- **Activate/deactivate bundles**: New global setting to quickly enable and disable all bundles
- **Incomplete bundles**: New option to add bundles to the cart without complete group selection

**Improvements**

- **Product availability**: Improved filtering of unavailable products in the bundle display
- **Cart stability**: More stable discount calculation and improved cart hash handling
- **Error handling**: More robust processing of bundle selections and discounts

**Migration from 4.x**

- No configuration changes required
- All features from version 4.x are preserved
- The plugin automatically detects your Shopware version

---

# 2.0.11

_Released 2023-11-06_

**Improvements**

- Minor bug fixes and stability improvements

---

# 2.0.10

_Released 2023-10-05_

**Improvements**

- Minor bug fixes and stability improvements

---

# 2.0.9

_Released 2023-09-25_

**Improvements**

- Minor bug fixes

---

# 2.0.8

_Released 2023-09-25_

**New Features**

- **Discount control**: New switch to control the discount behaviour per bundle

---

# 2.0.7

_Released 2023-09-25_

**Improvements**

- Bug fixes and improvements for the final release

---

# 2.0.6

_Released 2023-08-31_

**Improvements**

- Bug fixes and improvements for the final release

---

# 2.0.2

_Released 2023-08-03_

**Improvements**

- Minor bug fixes and improvements

---

# 2.0.1

_Released 2023-08-03_

**Improvements**

- Minor bug fixes and improvements

---

# 2.0.0

_Released 2023-08-03_

**New Features**

- **Shopware 6.5 support**: Full compatibility with Shopware 6.5

---

# 1.0.8

_Released 2023-08-03_

**Initial Release**

- Initial release of the Ultimate Bundle Plugin

---

**Compatibility**

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 5.1.x          | 6.6.0 - 6.7.x    | 8.2+        |
| 5.0.0          | 6.6.0 - 6.7.x    | 8.2+        |
| 2.0.x          | 6.5.x            | 8.1+        |
| 1.0.8          | 6.4.x            | 8.0+        |
