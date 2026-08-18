**Changelog — Customer Specific Discounts**

All notable changes for end users.

---

# 1.5.21

_Released 2026-08-18_

**Bug Fixes**

- **Discount note ran into the total price in the cart**: In the "Total" column the discounted price, the note "Customer discount: 3%" and the struck-through original price were printed on a single line without separation, so the column read as "910.83 €*inkl. Rabatt: 3%939,00". The total price now stands on its own line, with the original price and the discount note beneath it in smaller, muted type. The display no longer depends on the plugin's own stylesheet, so it is also correct in themes that do not include plugin styles.

---

# 1.5.20

_Released 2026-08-18_

**Bug Fixes**

- **Discount was not applied to products with additional options (WebLa_Zusatzoptionen) on Shopware 6.5**: In the cart the price of a product with a selected additional option stayed at the full amount, even though the line item already showed the discount — a set at 939.00 € with a 3% discount was still charged at 939.00 € instead of 910.83 €. On Shopware 6.5 the additional options plugin re-applies its own combined price after the discount has been calculated, which silently removed the reduction again. The discounted price is now handed over to it, so the cart, the order and the totals show the reduced amount. The setting "Add discount as separate line item" was not affected and already calculated correctly. Shopware 6.6 and 6.7 are affected by neither the problem nor the change.

---

# 1.5.19

_Released 2026-07-16_

**Bug Fixes**

- **Price kept dropping every time the cart was opened**: Shopware recalculates the cart several times per page view, and the discount was applied again on each of those passes instead of only once. The price therefore fell further with every view or reload of the cart — a product at 2,349.00 € with a 20% discount reached 315.28 € instead of 1,879.20 €. The discount is now always calculated from the product's original price and is applied exactly once, no matter how often Shopware recalculates the cart. Existing carts showing a repeatedly reduced price correct themselves the next time the cart is calculated. This completes the correction started in 1.5.18, which only covered products with selected additional options and therefore did not resolve the issue.

---

# 1.5.18

_Released 2026-07-16_

**Bug Fixes**

- **Price fell far below the discount for products with additional options (WebLa_Zusatzoptionen)**: When a product with an option set was placed in the cart without selecting any option, the discount was applied again on every cart calculation instead of only once. The price dropped further with each view of the cart or the off-canvas cart — a product at 2,349.00 € with a 20% discount ended up at 315.28 € instead of 1,879.20 €. The discount is now always calculated from the product's original price, so it is applied exactly once no matter how often the cart is recalculated. Carts that already show a repeatedly reduced price correct themselves with the next cart calculation. Products for which an option was actively selected were not affected.

---

# 1.5.17

_Released 2026-07-13_

**Bug Fixes**

- **Undiscounted main product price in the order, invoice and admin (WebLa_Zusatzoptionen)**: For products with additional options, the order, the invoice and the order view in the administration showed the main product's full price instead of the discounted one, while the order total was correct — so the individual positions did not add up to the total. The discounted price is now also stored on the order, and the positions reconcile with the total again. Applies to the Zusatzoptionen setting "Adjust order line items" set to "Recalculate line items in order to show individual prices" (the default). Already placed orders keep their stored prices and are not corrected retroactively.

---

# 1.5.16

_Released 2026-07-13_

**Bug Fixes**

- **Additional options (WebLa_Zusatzoptionen) were discounted without a matching discount rule**: Every option of a discounted product was reduced, even options that belong to no discounted category or dynamic product group. An option is now only discounted when its own product matches a discount rule; options without a matching rule keep their full price. This also corrects the cart total, which previously reduced all option prices together with the product.
- **Option discounted although only the option qualifies**: If the option's product is in a discounted category or dynamic product group but the main product is not, the option is now discounted as well. Previously the whole product was skipped and the option kept its full price.
- **Discount as separate line item reduced options too**: With "show discount as separate line item" enabled, the discount position was calculated from the product price including all option surcharges, so options were discounted regardless of their own rules. The discount position now only covers the parts that actually qualify.

---

# 1.5.15

_Released 2026-07-10_

**Bug Fixes**

- **Percentage promotion discounted too much on top of a customer discount**: When a percentage promotion (discount campaign) was combined with a customer-specific discount, the promotion was calculated on the full price before the customer discount was applied, so the combined discount was too high. The customer discount is now applied first, and the promotion is calculated on the already-reduced price.
- **Additional options (WebLa_Zusatzoptionen) not shown discounted**: Options added to a product via WebLa_Zusatzoptionen were displayed at their full price on the product detail page and in the cart, even when a customer-specific discount applied to the product. The option prices now show the discount everywhere they appear, and the discounted option price is also carried into the order for connected systems such as an ERP.

---

# 1.5.14

_Released 2026-07-06_

**Bug Fixes**

- **Product set main product transferred to ERP with undiscounted price**: When a customer discount applied to a product set (SwkwebProductSet) and "show discount as separate line item" was disabled, the set's main product kept its full, undiscounted price when the order was transferred to connected systems such as an ERP — even though the cart total was correct. The discount is now applied to the main product line item itself, so external systems receive the correct reduced price.

---

# 1.5.13

_Released 2026-07-01_

**Bug Fixes**

- **Product set price not discounted when "separate discount" is disabled**: With the "show discount as separate line item" setting turned off, product sets (SwkwebProductSet) still received a separate discount position and kept their full price instead of showing the reduced price inline. The discount is now applied directly to the product set's price, matching the behavior of regular products.

---

# 1.5.12

_Released 2026-05-12_

**Bug Fixes**

- **Empty "Targeted Customer Group Discounts" grid in admin on Shopware 6.5 / 6.6**: The list of customer-group discounts on the customer-group detail page stayed empty even when rows existed in the database. The override of the native customer-group detail component relied on a `customerGroupCriteria` computed property that only exists on Shopware 6.7+, so on 6.5 and 6.6 the `discounts` association was never requested. The plugin now wraps the `customerGroupRepository.get` call to attach the discounts associations on every Shopware version, and existing rows render again.

---

# 1.5.11

_Released 2026-05-11_

**Bug Fixes**

- **Fatal error on Shopware 6.5 / 6.6 storefront**: Fixed `ArgumentCountError: Too few arguments to function CacheSubscriber::__construct(), 0 passed and exactly 1 expected`. The version-specific compiler pass only injected the `CacheKeyService` dependency for Shopware 6.7; on 6.5 and 6.6 the subscriber was registered without arguments, causing the storefront to crash on cache warm-up. The dependency is now injected for all supported Shopware versions.

---

# 1.5.10

_Released 2026-04-24_

**Bug Fixes**

- **SwkwebProductSet option double discount on the Set configuration page**: Customer-specific discounts on Set option products are now applied exactly once. Previously the discount was applied both by the entity-loaded subscriber and by the SwkwebProductSet expression handler, which compounded the percentage on the option price (5% became 9.75%).
- **Wrong cart total for orders containing SwkwebProductSet line items**: The cart was applying the customer discount to the full Set total, including the option discount that the expression handler had already baked in, so the cart total was too low by `option_price * discount%`. The discount line item now only covers the main product portion of the Set; option discounts remain in the option line prices.

---

# 1.5.9

_Released 2026-04-24_

**Bug Fixes**

- **Discount in product listings**: The customer discount is now applied reliably on every product render path — including CMS product-box / product-slider slots, cross-selling, widgets and quickview. Previously the discount badge was rendered in listings while the displayed price stayed at the original value. The subscriber now hooks `sales_channel.product.loaded` (priority `-100`) and mutates `CalculatedPrice`, tier prices and `CalculatedCheapestPrice` in place.
- **Plugin update from 1.5.6 / 1.5.7**: Fixed `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry 'webla_customer_discount_global_discount' for key 'uniq.custom_field.name'` on plugin update. Existing custom field set, field and relation IDs are now preserved during the upsert so it acts as an update instead of an insert.
- **Store documentation link**: External documentation link in the Shopware Store description now uses HTTPS.

---

# 1.5.8

_Released 2026-04-13_

**Bug Fixes**

- **Custom Fields on Update**: Product, customer, and customer-group discount custom fields added in 1.5.7 are now installed on plugin update, so existing shops receive them without requiring a reinstall.
- **Migration Command Context**: The migration command now uses `Context::createCLIContext()` for correct CLI execution.
- **Documentation**: Removed the support contact section from docs referenced by the store listing to comply with Shopware Store guidelines.

---

# 1.5.7

_Released 2026-03-20_

**Bug Fixes**

- **Store Quality Compliance**: Custom database tables (`webla_customer_discount_extension`, `webla_customer_group_discount`) are now properly dropped on full uninstall when "Keep user data" is unchecked. Added `rel="noopener"` to external links in store descriptions. Resized plugin icon to required 112×112 px.
- **Install Manual**: Replaced disallowed `<code>` HTML tags with `<strong>` in store installation manuals to comply with Shopware Store tag restrictions.

---

# 1.5.6

_Released 2026-03-20_

**Bug Fixes**

- **Product Set Discount Display**: Fixed customer-specific discounts not being applied to individual product options within the Set Konfigurator (SwkwebProductSet). Option boxes now show the correct discounted price and the total "Gesamtpreis" reflects the discount. Works for initial page load, AJAX variant switching, and CMS rendering. The integration is fully optional — no dependency on the Set Konfigurator plugin.

---

# 1.5.5

_Released 2026-03-04_

**Bug Fixes**

- **OscWare Integration**: Added a synthetic `productNumber` (formatted as `DISC-{productNumber}`) to each discount line item's payload, preventing middleware like OscWare from merging all discount positions into a single collective entry (Sammelposition) in Lexoffice/Lexware.

---

# 1.5.4

_Released 2026-03-03_

**Bug Fixes**

- **Service Configuration**: Fixed an incorrect service ID for the sales channel product repository (`sales_channel_product.repository` → `sales_channel.product.repository`), which caused a dependency injection error on container build.

---

# 1.5.3

_Released 2026-03-03_

**Bug Fixes**

- **Cart Hash Mismatch**: Fixed a "cart has changed" error in Shopware 6.7+ when the "Separate Discount" option is active. Discount line items were previously created with random UUIDs on every cart recalculation, causing the cart hash to change between checkout and order placement. Discount line items now use a deterministic, stable ID derived from the product they apply to.

---

# 1.5.2

_Released 2026-02-17_

**Bug Fixes**

- **Cart Product Loading**: Fixed issue where product entities were not reliably available in cart data after page reload or from cache, causing category/product stream discount matching to fail. Now fetches products directly from repository as fallback to ensure consistent discount application.

**Improvements**

- **Performance**: Optimized product loading to only fetch necessary IDs without loading full category and stream associations, reducing database overhead.

---

# 1.5.1

_Released 2026-02-17_

**Bug Fixes**

- **Cart Discount Matching**: Fixed an issue where customer group category/product stream discounts were not properly detected in the cart, causing the global group discount to be applied instead of the more specific targeted discount. The cart now correctly loads product entities to match category and product stream IDs, ensuring consistent discount behavior between product pages and cart.

---

# 1.5.0

_Released 2026-02-17_

**New Features**

- **Customer Group Category Priority Setting**: New configuration option to give absolute priority to customer group category/product stream discounts. When enabled, targeted category or product stream discounts assigned to customer groups take precedence over all other discount types, bypassing the discount priority mode. This ensures specifically assigned group discounts always apply, regardless of global settings.

---

# 1.4.1

_Released 2026-02-13_

**Improvements**

- **Set Konfigurator Compatibility**: Added support for product sets from the Set Konfigurator plugin. Product sets now receive customer-specific discounts and display savings correctly in cart and checkout.

---

# 1.4.0

_Released 2026-01-28_

**New Features**

- **Guest Discounts**: Apply default customer group discounts to non-logged-in users. Enable via the new "Apply default group discounts to guests" config option. Perfect for showing promotional prices to all visitors without requiring login.

**Improvements**

- **Shopware 6.7+ Compatibility**: Improved caching implementation using the new HttpCacheCookieEvent for better compatibility with Shopware 6.7 and future versions.

---

# 1.2.0

_Released 2026-01-26_

**New Features**

- **Customer Group Discounts on Categories/Product Groups**: You can now assign discounts for entire customer groups on specific categories or dynamic product groups. This complements the global group discount with targeted discounts.

**Improvements**

- **Product Detail Page**: Discounts are now correctly displayed on the product detail page, even when CMS elements like the buy box are used.

---

# 1.1.0

_Released 2026-01-25_

**New Features**

- **Product-Specific Discounts**: Set discounts directly on individual products via custom fields.
- **Global Customer Discounts**: Give individual customers a flat discount on all products.
- **Extended Priority Modes**: New "Most specific first" mode for precise discount control.
- **Show Total Savings**: Optional "You save X" message in checkout.
- **Original Price Strikethrough**: Display the original price visually crossed out.

**Improvements**

- **Improved Performance**: Optimized caching for faster discount calculation.
- **Better Admin Interface**: Clearer presentation of customer discounts.

---

# 1.0.1

_Released 2026-01-20_

**Bug Fixes**

- **PHPStan Compatibility**: Fixed type errors for strict PHP analysis.
- **ESLint Validation**: Corrected JavaScript formatting in admin.

---

# 1.0.0

_Released 2026-01-15_

**New Features**

- **Individual Customer Discounts**: Assign discounts per customer on categories or dynamic product groups.
- **Global Customer Group Discounts**: Set flat discounts for entire customer groups.
- **Flexible Priority Control**: Choose between "Higher wins", "Lower wins", or "Individual first".
- **Discount as Line Item**: Option to display the discount as a separate line item.
- **Customizable Labels**: Configurable discount labels with variables.
- **Compatibility with WebLa_ProductGroupDiscount**: Automatic support for existing discount data.

---

**Version History Summary**

| Version | Release Date | Highlights |
| ------- | ------------ | ---------- |
| 1.4.1   | 2026-02-13   | Set Konfigurator compatibility |
| 1.4.0   | 2026-01-28   | Guest discounts, Shopware 6.7+ caching improvements |
| 1.2.0   | 2026-01-26   | Customer group discounts on categories/product groups |
| 1.1.0   | 2026-01-25   | Product discounts, global customer discounts, extended priority modes |
| 1.0.1   | 2026-01-20   | Bug fixes for PHP and JS validation |
| 1.0.0   | 2026-01-15   | Initial release |

---

**Upgrade Notes**

**Upgrading to 1.4.0**

After updating:
1. Clear the cache under Settings → System → Caches & Indexes
2. The new "Apply default group discounts to guests" setting is available in the plugin configuration
3. No action required for the Shopware 6.7+ compatibility improvements - they are applied automatically

**Upgrading to 1.2.0**

After updating:
1. Clear the cache under Settings → System → Caches & Indexes
2. The new customer group discounts can be found in customer group settings under "Group Discounts"

**Upgrading to 1.1.0**

After updating:
1. Clear the cache
2. New settings are available in the plugin configuration
3. Product discounts can be set via Product → Custom Fields

**Compatibility**

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 1.4.1          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.4.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.2.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.1.0          | 6.5.0 - 6.7.x    | 8.1+        |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
