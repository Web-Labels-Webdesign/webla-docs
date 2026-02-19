# Changelog

All notable changes to the Additional Options Plugin for end users.

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
