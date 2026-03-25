# Changelog

All notable changes to the Additional Options Plugin for end users.

---

## [5.3.3] - 2026-03-25

### 🐛 Bug Fixes

- **Seeder Re-Seeds Deleted Option Sets**: Fixed seeded option sets never being re-created after manual deletion from a product. The delete action no longer auto-excludes the product from the seeder — a simple delete allows re-seeding on the next sync cycle.
- **Seeder Timing Bug**: Fixed scheduled seeder task skipping seeders every other cycle due to sync progress updates bumping the `updated_at` timestamp.

### ♻️ Improvements

- **Delete Modal for Seeded Options**: When deleting a seeded option set, the confirmation dialog now explains the seeder behavior and offers two choices: "Delete" (will be re-seeded) or "Remove permanently" (excludes product from seeder).
- **Excluded Products Management**: The seeder detail page now shows excluded products as dismissable tags, allowing merchants to re-enable products for seeding directly from the seeder configuration.

---

## [5.3.2] - 2026-03-24

### ✨ New Features

- **Configurable Description Tooltip Icon**: The tooltip icon for option description texts is now configurable in the plugin settings under "Display Settings". Merchants can choose between a question mark (?) and an info icon (i). Both options use proper Shopware SVG icons instead of plain text.

### ♻️ Improvements

- **SCSS Cleanup**: Deduplicated storefront styles by properly importing the `_option-management.scss` partial and removing redundant CSS rules.

---

## [5.3.1] - 2026-03-20

### 🐛 Bug Fixes

- **Discount Applied to Option Prices**: Fixed promotions applying discounts to the full product price including options, even when the promotion's product rules excluded them. The parent line item is now always reset to its base unit price before discount calculation, so option prices are only discounted when explicitly targeted.
- **Explainer Text Custom Field Resolution**: Fixed description texts from custom fields not appearing in the storefront when the field was entered without the `customFields.` prefix — the plugin now automatically falls back to looking up the custom field if the direct path doesn't resolve.
- **Uninstall Stability**: Fixed `parent::uninstall()` not being called on full uninstall, and guarded `ALTER TABLE DROP COLUMN` against missing column errors on fresh install/uninstall.

---

## [5.3.0] - 2026-03-16

### ✨ New Features

- **Description / Explainer Texts for Options**: Options and option sets now support description texts that are shown as a tooltip icon (?) next to the option name in the storefront. Options can have a custom description, and option sets can specify a product field path (e.g. `description`) to automatically resolve descriptions from the linked product.

### 🐛 Bug Fixes

- **Cart Discounts with Options**: Fixed discounts not applying correctly to products with additional options — CartProcessor priority was adjusted so option prices are combined before discount calculation, and non-stackable option line items are temporarily made stackable during packager evaluation to prevent exclusion by Shopware's `CartScopeDiscountPackager`.

---

## [5.2.7] - 2026-03-13

### 🐛 Bug Fixes

- **Promotions Disappear After Removing Options**: Fixed discounts/promotions not being restored when all options are removed from a cart line item — Shopware's `CartScopeDiscountPackager` excludes non-stackable items, and the plugin left the item as non-stackable with stale option payload after removal.
- **Crash When Adding Options (getUnitPrice on null)**: Fixed `Call to a member function getUnitPrice() on null` when adding options to a cart item whose price hasn't been set yet — added null checks after replacing the removed `productDetailRoute` price lookup.
- **ChildCartProcessor Early Exit**: Fixed `return` instead of `continue` that caused remaining cart products to be skipped when one product had `optionSetId` payload but no children.

---

## [5.2.6] - 2026-03-12

### 🐛 Bug Fixes

- **Product Edit/Create Error in Administration**: Fixed `TypeError: t.product.isNew is not a function` crashing the product detail page on Shopware 6.6 — caused by our `sw-product-detail-base` override unnecessarily redefining `product` and `isLoading` computed properties, which returned a non-Entity object during Vue's reactive update cycle after the Vuex `setProduct` mutation fired.

---

## [5.2.5] - 2026-03-12

### 🐛 Bug Fixes

- **Discount Calculation with Options**: Fixed percentage discounts being calculated incorrectly when products have additional options — a broken filter caused option prices to be double-counted in the discount base. Also fixed the `applyDiscounts` config setting being ignored, so discounts can now correctly apply to base product only or base product + options.

---

## [5.2.4] - 2026-03-11

### 🐛 Bug Fixes

- **Option Appears Disabled and Non-Deselectable**: Fixed options with `requiredFromPrice` appearing as checked but disabled on the product detail page — the availability AJAX endpoint returned `active=false` (no cart context), which the JS incorrectly interpreted as "disable checkbox". Now only rule-based deactivation disables options.
- **requiredFromPrice=0 Always Activating**: Fixed `requiredFromPrice = 0.00` trivially matching all cart totals (0 <= any price), causing the option to always be auto-checked. Zero is now treated as "not configured".
- **Admin Option Price Modal**: Fixed null reference error when opening the option price modal without a default currency available

---

## [5.2.3] - 2026-03-10

### 🐛 Bug Fixes

- **Storefront JS on Cloud**: Fixed plugin options not loading on Shopware Cloud — removed the IIFE bundle and manual script injection in favour of the standard pre-built `dist/` approach that is correctly picked up by `theme:compile`

---

## [5.2.2] - 2026-03-05

### 🐛 Bug Fixes

- **Deselected Options Reappearing**: Fixed options that were deselected on the product detail page being automatically re-added on cart page refresh — caused by a variable shadowing bug that prevented deselection tracking
- **Cart Total Not Updating**: Fixed cart total price not reflecting option changes when toggling services on the checkout page — a downstream effect of the deselection tracking bug
- **Option Availability Check**: Fixed `isRequired` check in the option availability controller calling the wrong object (extension instead of option entity)
- **Option Widget Container**: Added fallback chain for finding the additional-items-container on product pages with non-standard layouts

---

## [5.2.1] - 2026-03-05

### 🐛 Bug Fixes

- **Admin Menu Items**: Fixed plugin menu items ("Option Seeder" and "Additional Options Configuration") not appearing in the administration — caused by a missing variable declaration in the production JS bundle

---

## [5.2.0] - 2026-03-05

### ✨ New Features

- **"Below Widget" Position Option**: New third position option for the product detail page — places the option selection below the entire buy widget (after wishlist, product number, and other extensions), avoiding conflicts with extensions that inject into the buy form area

---

## [5.1.2] - 2026-03-05

### 🐛 Bug Fixes

- **Seeder Sync**: Changes to seeder settings (e.g. "Open by default") now correctly propagate to all existing product option sets on the next sync cycle — previously, edits to a seeder were never applied to already-seeded products

---

## [5.1.1] - 2026-03-02

### 🐛 Bug Fixes

- **Migration Compatibility**: Seeder migrations are now fully MySQL-compatible — the `ADD COLUMN` statements are idempotent and no longer fail on clean installs or re-runs

---

## [5.1.0] - 2026-02-19

### ✨ New Features

- **Exclude Products from Seeder**: Specific products can now be excluded from a seeder's automatic option set assignment — useful for exceptions and special products that should not receive the assigned options
- **Bulk Seeder Management Actions**: New "Sync Now" and "Reset Seeder" bulk actions in the seeder list allow managing multiple seeders at once without opening each one individually

### 🔧 Improvements

- **Reset Confirmation Dialog**: Resetting a seeder now shows a confirmation dialog to prevent accidental data loss
- **Improved Error Handling**: Better error feedback and validation in the seeder admin interface

### 🐛 Bug Fixes

- **Options Position "Below"**: Options configured to display "below the Add to Cart button" now correctly appear directly below the cart button — before the wishlist and article number — matching the setting description
- **Default Position Rendering**: Options now render correctly when the position setting has never been configured (defaults to "below")

---

## [5.0.0] - 2026-02-10

### ✨ New Features

- **Multiple Selection for Option Seeder**: You can now select multiple product streams in one seeder to assign option sets more efficiently to multiple product groups
- **Synchronization Status for Seeder**: New status indicator shows whether seeder synchronization is running, completed, or failed
- **Auto-Open Container**: New "Container Open" option for option sets - ideal for required fields so customers see them immediately

### 🔧 Improvements

- **Optimized Seeder Performance**: Synchronization of large product catalogs (>1,000 products) now runs significantly faster through improved message queue processing
- **Enhanced Cart Integration**: Options can now be edited more smoothly in the cart - without page reload
- **Extended Price Tiering**: More precise calculation of quantity tier prices with floating-point tolerance

### 🐛 Bug Fixes

- **Circular Dependency Fixed**: Plugin no longer loads cart multiple times when options are queried during cart processing - prevents infinite loops
- **Deterministic IDs for Product Stream Options**: Product stream options now use stable IDs so selection is preserved when reloading the page
- **Null Price Handling**: Options with invalid prices are no longer added to the cart - prevents errors in checkout
- **Promotion Compatibility**: Discounts and promotions are now correctly applied to options - both at cart and set level

### ⚠️ Important Changes

- **Shopware Compatibility**: Now supports Shopware 6.6.0 - 6.7.0. Older versions (< 6.6.0) are no longer supported
- **PHP Version**: Minimum PHP 8.1 required

---

## [3.1.15] - 2026-02-10

### 🐛 Bug Fixes

- **8 Critical Fixes**: Data integrity, performance improvements, and circular dependency resolution
- **Checkout Options**: Improved processing of options in checkout process

---

## [3.1.14] - 2026-01-29

### ✨ New Features

- **Option Handling in Checkout**: Extended support for option selection during checkout process
- **LineItemSubscriber Improvements**: Optimized processing of options when adding to cart

---

## [3.1.5] - 2025-11-XX

### ✨ New Features

- **Quantity Selection for Options**: Customers can now choose the quantity for each option individually (+/- buttons)
- **Quantity Selection at Set Level**: Enable quantity selection for all options in a set at once
- **Text Field Input**: New possibility for free text input with options (e.g., engravings, personalizations)
- **Rule Builder Integration**: Options can now be dynamically enabled or disabled via Shopware rules

### 🔧 Improvements

- **Extended Price Tiering**: New OptionPrice table enables detailed quantity tier prices
- **Country-Specific Configuration**: Improved UI for country and postal code-based option availability
- **Option Seeder Optimizations**: Faster and more reliable automatic assignment of option sets

### 🐛 Bug Fixes

- **Requirement Fields**: Correct processing of dependent options over 3 levels
- **Shipping-Method Filter**: Shipping restrictions are now correctly applied at option level

---

## [3.0.0] - 2025-06-XX

### ✨ New Features

- **Option Seeder**: Automatic assignment of option sets via product streams
- **Scheduled Task**: Automatic hourly synchronization of seeders
- **Message Queue Integration**: Asynchronous processing of large product assignments
- **Sorting**: Options and sets can now be manually sorted

### 🔧 Improvements

- **Performance**: Optimized database queries for large product catalogs
- **UI/UX**: Redesigned admin interface for easier option management
- **API Support**: Complete API endpoints for seeder management

---

## [2.5.0] - 2024-12-XX

### ✨ New Features

- **Incompatible Products**: Define options that are mutually exclusive
- **Required Fields**: Mark options as required
- **Dependencies**: Create multi-level option dependencies (up to 3 levels)

### 🔧 Improvements

- **Checkout Validation**: Improved validation of required options in checkout
- **Cart Display**: Clearer display of options in cart

---

## [2.0.0] - 2024-06-XX

### ✨ New Features

- **Country-Specific Prices**: Different prices for options depending on delivery country
- **Shipping Restrictions**: Options can be restricted to specific shipping methods
- **Dynamic Tax Rates**: Full support for OSS (One Stop Shop)
- **Promotion Integration**: Options are correctly included in Shopware promotions

### 🔧 Improvements

- **Price Calculation**: More precise calculation of option prices including taxes
- **Cart Integration**: Options can now be edited in the cart

---

## [1.5.0] - 2024-02-XX

### ✨ New Features

- **Multiple Selection**: Option sets now support multiple selection (checkboxes)
- **Single Selection**: Radio buttons for exclusive option selection
- **Images and Manufacturers**: Optional product images and manufacturer names can be displayed with options

### 🔧 Improvements

- **Storefront Design**: Accordion-based display for clearer option selection
- **Mobile Optimization**: Improved display on smartphones and tablets

---

## [1.0.0] - 2023-12-XX

### ✨ New Features

- **First Version**: Basic functionality for product-based additional options
- **Option Sets**: Container for related options
- **Product Selection**: Use existing products as options
- **Pricing**: Automatic price adoption from products
- **Admin UI**: Integration in Shopware admin via product view

---

## Version History Summary

| Version | Release Date | Highlights                                                     |
| ------- | ------------ | -------------------------------------------------------------- |
| 5.1.0   | 2026-02-19   | Exclude products from seeder, bulk sync/reset actions, position fix |
| 5.0.0   | 2026-02-10   | Multiple selection seeder, container opening, 8 critical fixes |
| 3.1.15  | 2026-02-10   | Data integrity & performance fixes                             |
| 3.1.14  | 2026-01-29   | Checkout optimizations                                         |
| 3.1.5   | 2025-11      | Quantity selection, text fields, rule builder                  |
| 3.0.0   | 2025-06      | Option Seeder, automatic assignment                            |
| 2.5.0   | 2024-12      | Incompatibilities, required fields, dependencies               |
| 2.0.0   | 2024-06      | Country-specific prices, shipping restrictions                 |
| 1.5.0   | 2024-02      | Multiple selection, images, manufacturer display               |
| 1.0.0   | 2023-12      | First release                                                  |

---

## Upgrade Notes

### Upgrading to 5.0.0

**Important**: This update requires Shopware 6.6.0 or higher.

**Steps**:
1. Create a backup of your database
2. Update the plugin via Plugin Manager
3. Run migrations: `bin/console database:migrate --all WebLa_Zusatzoptionen`
4. Clear cache: `bin/console cache:clear`
5. Check existing option sets and seeders for compatibility
6. Thoroughly test option selection in storefront

**Using New Features**:
- Enable "Container Open" for sets with required fields
- Use multiple selection in seeders for more efficient assignments
- Check the synchronization status display for running seeders

**Breaking Changes**:
- Shopware 6.6.0 minimum required (6.5.x is no longer supported)
- PHP 8.1+ required (PHP 8.0 is no longer supported)

### Upgrading to 3.0.0

**Important**: This major update brings the Option Seeder - a powerful new feature for automatic assignments.

**Steps**:
1. Create a backup
2. Update the plugin
3. Run migrations
4. Clear cache
5. New admin section "Option Seeder" becomes available under `Extensions → Option Seeder`

**Using New Features**:
- Create product streams under `Catalogues → Dynamic Product Groups`
- Set up seeders for automatic option assignment
- Use time-controlled assignments for seasonal offers

### Upgrading to 2.0.0

**Important**: This update brings country-specific prices and shipping restrictions.

**After Update**:
- Existing options keep their prices as default prices
- Define country-specific prices for international shops
- Configure shipping restrictions for shipping-method-dependent options

---

## Compatibility

| Plugin Version | Shopware Version | PHP Version | Notes                              |
| -------------- | ---------------- | ----------- | ---------------------------------- |
| 5.1.0          | 6.6.0 - 6.7.0    | 8.1+        | Current version                    |
| 5.0.0          | 6.6.0 - 6.7.0    | 8.1+        | Major rewrite                      |
| 3.1.15         | 6.6.0 - 6.7.0    | 8.1+        | Bugfixes                           |
| 3.1.14         | 6.5.0 - 6.6.9    | 8.0+        | Checkout optimizations             |
| 3.1.5          | 6.5.0 - 6.6.0    | 8.0+        | Quantity selection, rule builder   |
| 3.0.0          | 6.5.0 - 6.6.0    | 8.0+        | Option Seeder                      |
| 2.5.0          | 6.4.0 - 6.5.0    | 7.4+        | Incompatibilities, required fields |
| 2.0.0          | 6.4.0 - 6.5.0    | 7.4+        | Country-specific prices            |
| 1.x            | 6.4.0+           | 7.4+        | Basic functionality                |

---

## Support & Updates

**Important Note**: We follow the official Shopware release cycle.

- **New Features**: Only for Shopware-supported versions
- **Bugfixes**: For all supported Shopware versions
- **Security Updates**: As long as Shopware provides them for the respective version

**Support Channels**:
- Shopware Store: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- Documentation: [https://docs.web-labels.de](https://docs.web-labels.de)

For questions about updates or compatibility, please contact support.
