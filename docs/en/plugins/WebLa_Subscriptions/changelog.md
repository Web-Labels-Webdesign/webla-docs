**Changelog — WebLa Subscription Plugin**

All notable changes to the WebLa Subscription Plugin for end users.

---

# 1.7.5

_Released 2026-07-22_

**Bug Fixes**

- Automatic (system-triggered) subscription renewals now apply the subscription discount again. Previously these renewal orders were charged at full price even though the original order received the discount.

**Improvements**

- Remove the unused default loyalty-discount tiers. They had no admin interface and no effect on pricing; the renewal discount now matches the discount from the original order exactly.

# 1.7.4

_Released 2026-07-20_

**Bug Fixes**

- Fix the "Change" buttons next to the payment method and interval fields on the subscription detail page sitting below the field they belong to instead of level with it.

# 1.7.3

_Released 2026-07-20_

**Bug Fixes**

- Fix subscriptions staying stuck on "Payment pending" after a successful payment. When one order contained products with different delivery intervals, the plugin created one subscription per interval but only activated a single one — the remaining subscriptions never left the pending state. Failed and cancelled payments were affected in the same way and now cancel every subscription of the order.
- Fix the next renewal date not moving when the delivery interval is changed in the administration. Changing the interval now recalculates the pending renewal from the last renewal date, so a subscription switched from 2 to 8 weeks is scheduled 8 weeks after its last delivery instead of keeping the old date.
- Fix the payment method dropdown showing up empty for subscriptions paid via PayPal (Mollie). PayPal was missing from the selectable methods in both the subscription detail page and the list filter, even though the payment method itself worked.

**Improvements**

- The "Change" buttons next to the payment method and interval fields no longer appear and disappear while editing. They are now always visible and stay disabled until the value actually changes, and the fields no longer stretch across the full column width.

# 1.7.2

_Released 2026-06-29_

**Bug Fixes**

- Remove a misleading "a subscription payment method is required" notice that appeared on the cart and checkout pages even though the correct subscription payment method was already selected.

# 1.7.1

_Released 2026-06-29_

**Bug Fixes**

- Fix a fatal startup error introduced in 1.7.0 where an internal payment service was referenced incorrectly, preventing the storefront and admin from loading. Automatic checkout payment-method selection works again.

# 1.7.0

_Released 2026-06-29_

**New Features**

- The matching payment method is now selected automatically at checkout based on whether the cart contains a subscription. Customers no longer end up with no payment method selected, and a regular order can no longer be placed with a subscription-only payment method (or vice versa).
- PayPal and Apple Pay express checkout buttons are now hidden while a subscription product is in the cart (cart, off-canvas cart and registration page). Express checkout cannot set up a subscription payment, so hiding it prevents broken subscriptions.

**Bug Fixes**

- Fixed a "payment token invalidated" error that could occur when placing a non-subscription order after a previous subscription purchase had stored a subscription payment method as the customer default.

**Improvements**

- The subscription account pages are now excluded from search engine indexing.

# 1.6.0

_Released 2026-06-12_

**New Features**

- Subscription notification emails for cancellation and reactivation. Customers are now informed by email when a subscription is cancelled or reactivated (from the backend or the customer account). The required Flow Builder flows and email templates are created automatically.
- Additional notification triggers are available in the Flow Builder: renewal reminder, renewed, price changed, payment failed, product removed and item out of stock. The situational ones (renewed, product removed, item out of stock) are pre-created as inactive flows you can switch on when needed.
- Readable trigger names: the subscription triggers now show proper English and German labels in the Flow Builder instead of technical keys.

**Bug Fixes**

- Subscription notification emails were never delivered: the events were not registered as Flow Builder triggers, so any flow using them showed "Unknown trigger" and was deactivated. The triggers are now registered correctly and the flows work.
- Product detail page: removed a duplicate unit/content line for products that have a purchase unit but no reference price on Shopware 6.6.

---

# 1.5.1

_Released 2026-06-10_

**Bug Fixes**

- **Duplicate Reference Price**: The base/reference price line (e.g. "Content: 0.5 kg (€40.00 / 1 kg)") no longer appears twice below the product price on the detail page when the dynamic subscription price display is active. On Shopware 6.7 the product price unit moved into its own template, which caused the plugin to render the line a second time.

---

# 1.5.0

_Released 2026-06-10_

**New Features**

- **Dynamic Header Price**: The main product price in the buy widget now switches live between the regular price and the discounted subscription price when the customer toggles between the one-time and subscription tiles. A new `dynamicPriceDisplayEnabled` configuration option lets shop owners disable this behaviour if needed.
- **Configurable Default Purchase Type**: A new `defaultPurchaseType` configuration option controls which tile is pre-selected when the product detail page loads — subscription or one-time purchase. Products marked as subscription-only always default to subscription regardless of this setting.
- **Payment Method Lifecycle**: The plugin's subscription-specific payment methods are automatically deactivated when the plugin is deactivated in the Shopware admin and reactivated when the plugin is activated again. This prevents the methods from appearing at checkout when the plugin is not active.

**Bug Fixes**

- **Subscription Tile Interaction**: Clicking anywhere on a purchase-type tile now correctly selects it. Previously only clicking directly on the radio button registered the selection.
- **Subscription-Only Tile State**: Products configured as subscription-only correctly show the subscription tile as selected on page load. The active highlight was incorrectly removed in the previous release.
- **Cart Discount Fallback**: Subscription orders using the "all items must have the same option" discount path now correctly fall back to the global discount percentage when an individual option has no per-option discount configured. Previously these orders received a 0 % discount instead.

---

# 1.3.5

_Released 2026-05-13_

**New Features**

- **Variant Subscription Inheritance**: A product variant now automatically inherits the main product's subscription options when it has none of its own. The admin product detail card shows the inheritance state explicitly with an "Override for this variant" action that clones the parent options into editable variant rows, and a "Revert to main product" action that drops the override and inherits again.

**Bug Fixes**

- **Variant Storefront PDP**: The subscription selector now appears on a variant's product detail page when the main product has subscription options configured. Previously the storefront only queried the variant's own options and showed nothing on variants.
- **Variant Cart Validation**: Adding a variant subscription to the cart no longer drops the subscription payload because the matched option belongs to the parent product. The cart validator accepts either the variant's own option or one inherited from its parent.
- **Per-Option Discount Semantics**: A subscription option whose "Discount (%)" is `0` or empty now applies no per-option discount in the storefront, cart, and renewal orders. The plugin's global `aboDiscountPercent` configuration still applies to cart-wide subscriptions but no longer fills in an empty per-option value.
- **Buy-Widget Layout**: The quantity input and "Add to shopping cart" button stay on the same row (the Shopware default layout) when the subscription selector is rendered. The selector now sits on its own row above the buy controls.

**Improvements**

- One-time `Migration1742000000BackfillNullDiscountPercent` rewrites any pre-existing `NULL` per-option discount values to `0` so admin display and storefront behavior match without requiring a manual touch of every row.

---

# 1.3.4

_Released 2026-05-13_

**Bug Fixes**

- **DAL Entity Field Mappings**: Aligned the entity classes (`SubscriptionEntity`, `SubscriptionItemEntity`, `SubscriptionOrderEntity`, `FreeItemEntity`) with the column names declared in their DAL definitions so the framework no longer reports missing reference-version-field properties.
- **Mollie Webhook Response**: The Mollie webhook controller now returns a non-empty `200 OK` body. Mollie inspects only the status code, behaviour is unchanged.

**Improvements**

- **Storefront Heading Hierarchy**: Replaced bare `<h1>` – `<h6>` tags in the customer subscription portal templates with `<span class="h*">` equivalents so the plugin no longer introduces its own heading hierarchy on top of the shop theme.
- **Accessible Anchors**: Added missing `title` attributes to anchor tags in the subscription portal for assistive technologies.

---

# 1.3.3

_Released 2026-05-13_

**Bug Fixes**

- **Payment Method Filtering on Cart Page (Shopware 6.6)**: The cart page payment-method dropdown now hides subscription-only methods when no subscription is in the cart, and hides standard methods when a subscription is present. Previously the filter only ran on the confirm and edit-order pages, leaving the cart page dropdown unfiltered.
- **Cart-wide Subscriptions Detected Correctly**: When the cart-wide subscription mode is active, payment-method filtering now recognises the cart as a subscription order. Prior detection used `_subscriptionOptionId` which is `null` for cart-wide subscriptions, so subscription-only methods were incorrectly hidden.
- **Guest Cart Filtering**: Subscription-aware payment-method filtering now applies to guest carts as well. The SEPA-mandate filter still requires a logged-in customer.

**Improvements**

- **Product Detail Page Compatibility**: The subscription interval selector on the product detail page is now injected into a narrower, less commonly contested Twig block (`buy_widget_buy_product_buy_info`), reducing the chance that third-party plugins or themes override the buy widget without preserving the selector. Plugin template priority is raised so our extensions wrap default-priority extensions instead of being wrapped by them. The selector position shifts to between the quantity input and the buy button.

---

# 1.3.2

_Released 2026-04-24_

**Bug Fixes**

- **PHP 8.1 Deprecation in Bundled Mollie Library**: Fixed `CreatePaymentRefundRequest::__construct()` signature where the optional `$description` parameter was declared before the required `$amount`, triggering a deprecation notice under PHP 8.1+ and blocking the Shopware Store's automated review.

---

# 1.3.1

_Released 2026-04-24_

**Bug Fixes**

- **Mollie PayPal Admin Label**: Added the missing translation for `webla_subscription_mollie_paypal` in both English and German admin locales. Subscription list and detail views now display "PayPal (Mollie)" instead of the raw snippet key.

---

# 1.3.0

_Released 2026-04-21_

**New Features**

- **Cart-wide Subscription**: Added an interval selector rendered across the entire checkout (cart page, offcanvas cart, address/register step, confirm step) that turns the whole cart into one subscription. When enabled, all product line items — even those without per-product subscription options — are forced onto the chosen interval. Selection persists as a Cart extension and survives recalculation. The offcanvas updates via AJAX without reloading the page, matching the core promo-code flow.
- **Cart-wide Interval Editor**: New plugin configuration under *Subscription Intervals* with a dedicated admin editor for managing the list of available cart-wide intervals. Each entry holds weeks, label, and discount percent. Compatible with both Shopware 6.6 (`sw-*` components) and 6.7 (`mt-*` components) via runtime detection.

**Improvements**

- **Payment Methods Card**: Reordered fields so subscription-capable Mollie methods (Card, SEPA, PayPal) appear before non-recurring methods (Invoice, Prepayment).
- **Renewal Shipping Method**: Moved from *Payment Methods* to *Renewal Behavior* card where it semantically belongs, with clarified help text explaining the initial-order fallback.

---

# 1.2.0

_Released 2026-04-13_

**New Features**

- **Mollie PayPal Subscription Method**: Added `webla_subscription_mollie_paypal` as a recurring-capable Mollie payment method. Subscriptions can now charge against a PayPal Billing Agreement via Mollie's mandate API. Registered inactive by default — requires PayPal Reference Transactions to be enabled on the merchant's Mollie/PayPal connection before activation.
- **Renewal Shipping Method from Initial Order**: Renewal carts now reuse the shipping method from the subscription's initial order when it is still active, falling back to the configured `renewalShippingMethodId` otherwise. Customers keep their original delivery option across renewals.

---

# 1.1.5

_Released 2026-03-31_

**Bug Fixes**

- **Standalone Mollie Support**: Bundled Mollie API 3.9.0 under scoped namespace `WebLa\Subscriptions\Vendor\Mollie\Api\` so the plugin works fully standalone without the official Mollie Shopware plugin. When both are installed, each uses its own isolated copy — zero conflicts. Added Makefile target (`make mollie-vendor`) for updating the scoped copy.

---

# 1.1.4

_Released 2026-03-31_

**Bug Fixes**

- **Mollie Dependency Conflict**: Removed `mollie/mollie-api-php` from Composer require entirely. The official Mollie Shopware plugin bundles its own copy in `vendor_manual/` with different constant names — having it in our require caused version conflicts on install. Mollie API classes are now provided by the Mollie plugin at runtime.
- **Mollie as Soft Dependency**: Added `MollieOptionalCompilerPass` that removes Mollie-related services when the Mollie API library is absent. Invoice and Prepayment subscriptions work without the Mollie plugin installed.
- **Sequence Type Constants**: Replaced `SequenceType::FIRST`/`RECURRING` constants with string literals `'first'`/`'recurring'` for compatibility with the Mollie plugin's bundled library version.

---

# 1.1.3

_Released 2026-03-31_

**Bug Fixes**

- **Payment Handler Compile Error on Shopware < 6.6.5**: Restructured all payment handlers using conditional `class_exists()` base classes and a shared logic trait, so new-style method signatures are used on 6.6.5+/6.7 and legacy interface signatures on 6.6.0–6.6.4 without PHP compile errors.

---

# 1.1.2

_Released 2026-03-31_

**Bug Fixes**

- **Shopware 6.6.0–6.6.4 Compatibility**: Payment handlers now use `class_exists()` conditional base classes (like the official Mollie plugin) instead of directly extending `AbstractPaymentHandler` which only exists from 6.6.5.
- **Dual Payment Handler Tags**: Services register both `shopware.payment.method` (6.6.5+/6.7) and legacy `shopware.payment.method.async`/`sync` (6.6.0–6.6.4) tags for full version coverage.

---

# 1.1.1

_Released 2026-03-31_

**Bug Fixes**

- **Mollie API Version Conflict**: Widened `mollie/mollie-api-php` constraint from `^3.9` to `^2.0 || ^3.0` to avoid downgrading the library when coexisting with the official Mollie Shopware plugin, which caused `Undefined constant PaymentMethod::BIZUM` errors.
- **Uninstallation Failed on Shopware 6.7**: Custom field removal used raw SQL referencing `custom_field_set_id` column which no longer exists in Shopware 6.7; now uses cascading delete on the set instead.

---

# 1.1.0

_Released 2026-03-31_

**New Features**

- **Per-Option Discount Override**: Product subscription options can now have their own discount percentage, overriding the global default. NULL = use global. Shown in admin product card and storefront selector.
- **Customer Settings Lifecycle**: Customer subscription settings are now automatically created on first subscription. SEPA lock is set automatically when max failures are reached and cleared on admin unlock.
- **Customer Settings Admin UI**: Admin customer detail page now shows toggles for "Interval change allowed" and "SEPA locked" per customer.
- **Customer Settings API**: New GET/PATCH endpoints for managing per-customer subscription settings.
- **Webhook URL Placeholder**: Plugin config shows the expected webhook URL structure as placeholder text.

**Bug Fixes**

- **Customer Detail Card**: Fixed override template block name so the subscription card actually appears on the customer detail page.
- **Customer Card Payment Method**: Payment method column now shows translated names instead of raw technical names.
- **Add Item Route**: Fixed missing `seo => false` option on the storefront add-item route causing 404 errors.
- **Storefront Source Tracking**: Removed erroneous `.gitignore` entry that excluded the Storefront controller directory.

---

# 1.0.1

_Released 2026-03-31_

**Bug Fixes**

- **Shopware 6.7 Payment Handlers**: Use unified `shopware.payment.method` service tag instead of deprecated `shopware.payment.method.async`/`shopware.payment.method.sync` tags, fixing `CHECKOUT__UNKNOWN_PAYMENT_METHOD` error during checkout.
- **Shopware 6.7 Admin Input Bindings**: Replace `v-model` with `:value`/`@update:value` on deprecated components so payment method, interval, notes, and cancel reason fields display correctly.
- **Admin Detail Header**: Only show relevant action buttons for the current subscription status instead of showing all buttons disabled.
- **Admin Detail Header Spacing**: Add gap between smart bar action buttons.
- **Admin Items Table**: Replace `sw-number-field` with compact native input for quantity column to fix vertical stretching.
- **Admin Items Table Column Widths**: Set explicit widths on quantity and unit price columns to prevent disproportionate sizing.
- **Admin Dashboard Status Overflow**: Switch status grid from fixed 7-column layout to flexible wrapping for long German labels.
- **Product Card Empty State**: Styled empty state with dashed border box, hide save button when no new options exist.
- **Product Card Toggle Feedback**: Show success notification when toggling "Subscription only" switch.

---

# 1.0.0

_Released 2026-03-30_

**New Features**

- **Subscription System**: Complete subscription system for Shopware 6 with automatic renewals.
- **Customer Portal**: Self-service area in the customer account for managing subscriptions (pause, cancel, change interval, manage items).
- **Admin Dashboard**: Overview with KPIs — active subscribers, monthly revenue, upcoming renewals, churn rate.
- **Admin Management**: List of all subscriptions with filters, detail view with editing capabilities.
- **Mollie Integration**: Automatic recurring payments via credit card and SEPA direct debit.
- **Offline Payment Methods**: Invoice and prepayment as alternative payment methods.
- **Flexible Intervals**: Configurable delivery intervals from 1 to 8 weeks.
- **Subscription Discounts**: Percentage base discount plus loyalty tiers.
- **Free Items**: Free products with renewals.
- **Product Configuration**: Subscription options directly on the product, including "subscription only" mode.
- **Email Notifications**: Renewal reminder, cancellation, SEPA failure, price change.
- **Delivery Consolidation**: Synchronise multiple subscriptions to a shared date.
- **Payment Status Polling**: Automatic status updates via Mollie polling.
- **Prepayment Monitoring**: Automatic detection of outstanding prepayments.
- **Change Log**: Complete audit trail of all subscription changes.
- **Cart Integration**: Subscription hints and payment method filtering at checkout.

---

## Version History Summary

| Version | Release Date | Highlights                                            |
| ------- | ------------ | ----------------------------------------------------- |
| 1.3.2   | 2026-04-24   | Fix PHP 8.1 deprecation in bundled Mollie library     |
| 1.3.1   | 2026-04-24   | Store release, PayPal admin label fix                 |
| 1.3.0   | 2026-04-21   | Cart-wide subscription selector                       |
| 1.2.0   | 2026-04-13   | Mollie PayPal + renewal shipping from initial order   |
| 1.1.5   | 2026-03-31   | Standalone Mollie via scoped vendor namespace         |
| 1.1.4   | 2026-03-31   | Mollie soft dependency, no more version conflicts     |
| 1.1.3   | 2026-03-31   | Fix payment handler compile error on SW < 6.6.5       |
| 1.1.2   | 2026-03-31   | Shopware 6.6.0+ payment handler compatibility         |
| 1.1.1   | 2026-03-31   | Fix Mollie API version conflict                       |
| 1.1.0   | 2026-03-31   | Per-option discounts, customer settings, admin fixes  |
| 1.0.1   | 2026-03-31   | Shopware 6.7 compatibility fixes                      |
| 1.0.0   | 2026-03-30   | Initial release with full feature set                 |

---

## Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 1.3.2          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.3.1          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.3.0          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.2.0          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.5          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.4          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.3          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.2          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.1          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.0          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.0.1          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.0.0          | 6.6.0 – 6.7.x    | 8.1+        |
