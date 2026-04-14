# Changelog

All notable changes to the WebLa Subscription Plugin for end users.

---

## [1.2.0] - 2026-04-13

### :sparkles: New Features

- **Mollie PayPal Subscription Method**: Added `webla_subscription_mollie_paypal` as a recurring-capable Mollie payment method. Subscriptions can now charge against a PayPal Billing Agreement via Mollie's mandate API. Registered inactive by default — requires PayPal Reference Transactions to be enabled on the merchant's Mollie/PayPal connection before activation.
- **Renewal Shipping Method from Initial Order**: Renewal carts now reuse the shipping method from the subscription's initial order when it is still active, falling back to the configured `renewalShippingMethodId` otherwise. Customers keep their original delivery option across renewals.

---

## [1.1.5] - 2026-03-31

### :bug: Bug Fixes

- **Standalone Mollie Support**: Bundled Mollie API 3.9.0 under scoped namespace `WebLa\Subscriptions\Vendor\Mollie\Api\` so the plugin works fully standalone without the official Mollie Shopware plugin. When both are installed, each uses its own isolated copy — zero conflicts. Added Makefile target (`make mollie-vendor`) for updating the scoped copy.

---

## [1.1.4] - 2026-03-31

### :bug: Bug Fixes

- **Mollie Dependency Conflict**: Removed `mollie/mollie-api-php` from Composer require entirely. The official Mollie Shopware plugin bundles its own copy in `vendor_manual/` with different constant names — having it in our require caused version conflicts on install. Mollie API classes are now provided by the Mollie plugin at runtime.
- **Mollie as Soft Dependency**: Added `MollieOptionalCompilerPass` that removes Mollie-related services when the Mollie API library is absent. Invoice and Prepayment subscriptions work without the Mollie plugin installed.
- **Sequence Type Constants**: Replaced `SequenceType::FIRST`/`RECURRING` constants with string literals `'first'`/`'recurring'` for compatibility with the Mollie plugin's bundled library version.

---

## [1.1.3] - 2026-03-31

### :bug: Bug Fixes

- **Payment Handler Compile Error on Shopware < 6.6.5**: Restructured all payment handlers using conditional `class_exists()` base classes and a shared logic trait, so new-style method signatures are used on 6.6.5+/6.7 and legacy interface signatures on 6.6.0–6.6.4 without PHP compile errors

---

## [1.1.2] - 2026-03-31

### :bug: Bug Fixes

- **Shopware 6.6.0–6.6.4 Compatibility**: Payment handlers now use `class_exists()` conditional base classes (like the official Mollie plugin) instead of directly extending `AbstractPaymentHandler` which only exists from 6.6.5
- **Dual Payment Handler Tags**: Services register both `shopware.payment.method` (6.6.5+/6.7) and legacy `shopware.payment.method.async`/`sync` (6.6.0–6.6.4) tags for full version coverage

---

## [1.1.1] - 2026-03-31

### :bug: Bug Fixes

- **Mollie API Version Conflict**: Widened `mollie/mollie-api-php` constraint from `^3.9` to `^2.0 || ^3.0` to avoid downgrading the library when coexisting with the official Mollie Shopware plugin, which caused `Undefined constant PaymentMethod::BIZUM` errors
- **Uninstallation Failed on Shopware 6.7**: Custom field removal used raw SQL referencing `custom_field_set_id` column which no longer exists in Shopware 6.7; now uses cascading delete on the set instead

---

## [1.1.0] - 2026-03-31

### :sparkles: New Features

- **Per-Option Discount Override**: Product subscription options can now have their own discount percentage, overriding the global default. NULL = use global. Shown in admin product card and storefront selector.
- **Customer Settings Lifecycle**: Customer subscription settings are now automatically created on first subscription. SEPA lock is set automatically when max failures are reached and cleared on admin unlock.
- **Customer Settings Admin UI**: Admin customer detail page now shows toggles for "Interval change allowed" and "SEPA locked" per customer.
- **Customer Settings API**: New GET/PATCH endpoints for managing per-customer subscription settings.
- **Webhook URL Placeholder**: Plugin config shows the expected webhook URL structure as placeholder text.

### :bug: Bug Fixes

- **Customer Detail Card**: Fixed override template block name so the subscription card actually appears on the customer detail page.
- **Customer Card Payment Method**: Payment method column now shows translated names instead of raw technical names.
- **Add Item Route**: Fixed missing `seo => false` option on the storefront add-item route causing 404 errors.
- **Storefront Source Tracking**: Removed erroneous `.gitignore` entry that excluded the Storefront controller directory.

---

## [1.0.1] - 2026-03-31

### :bug: Bug Fixes

- **Shopware 6.7 Payment Handlers**: Use unified `shopware.payment.method` service tag instead of deprecated `shopware.payment.method.async`/`shopware.payment.method.sync` tags, fixing `CHECKOUT__UNKNOWN_PAYMENT_METHOD` error during checkout
- **Shopware 6.7 Admin Input Bindings**: Replace `v-model` with `:value`/`@update:value` on deprecated components so payment method, interval, notes, and cancel reason fields display correctly
- **Admin Detail Header**: Only show relevant action buttons for the current subscription status instead of showing all buttons disabled
- **Admin Detail Header Spacing**: Add gap between smart bar action buttons
- **Admin Items Table**: Replace `sw-number-field` with compact native input for quantity column to fix vertical stretching
- **Admin Items Table Column Widths**: Set explicit widths on quantity and unit price columns to prevent disproportionate sizing
- **Admin Dashboard Status Overflow**: Switch status grid from fixed 7-column layout to flexible wrapping for long German labels
- **Product Card Empty State**: Styled empty state with dashed border box, hide save button when no new options exist
- **Product Card Toggle Feedback**: Show success notification when toggling "Subscription only" switch

---

## [1.0.0] - 2026-03-30

### ✨ New Features

- **Subscription System**: Complete subscription system for Shopware 6 with automatic renewals
- **Customer Portal**: Self-service area in the customer account for managing subscriptions (pause, cancel, change interval, manage items)
- **Admin Dashboard**: Overview with KPIs — active subscribers, monthly revenue, upcoming renewals, churn rate
- **Admin Management**: List of all subscriptions with filters, detail view with editing capabilities
- **Mollie Integration**: Automatic recurring payments via credit card and SEPA direct debit
- **Offline Payment Methods**: Invoice and prepayment as alternative payment methods
- **Flexible Intervals**: Configurable delivery intervals from 1 to 8 weeks
- **Subscription Discounts**: Percentage base discount plus loyalty tiers
- **Free Items**: Free products with renewals
- **Product Configuration**: Subscription options directly on the product, including "subscription only" mode
- **Email Notifications**: Renewal reminder, cancellation, SEPA failure, price change
- **Delivery Consolidation**: Synchronise multiple subscriptions to a shared date
- **Payment Status Polling**: Automatic status updates via Mollie polling
- **Prepayment Monitoring**: Automatic detection of outstanding prepayments
- **Change Log**: Complete audit trail of all subscription changes
- **Cart Integration**: Subscription hints and payment method filtering at checkout

---

## Version History Summary

| Version | Release Date | Highlights                                          |
| ------- | ------------ | --------------------------------------------------- |
| 1.1.5   | 2026-03-31   | Standalone Mollie via scoped vendor namespace         |
| 1.1.4   | 2026-03-31   | Mollie soft dependency, no more version conflicts    |
| 1.1.3   | 2026-03-31   | Fix payment handler compile error on SW < 6.6.5     |
| 1.1.2   | 2026-03-31   | Shopware 6.6.0+ payment handler compatibility       |
| 1.1.1   | 2026-03-31   | Fix Mollie API version conflict                     |
| 1.1.0   | 2026-03-31   | Per-option discounts, customer settings, admin fixes |
| 1.0.1   | 2026-03-31   | Shopware 6.7 compatibility fixes                    |
| 1.0.0   | 2026-03-30   | Initial release with full feature set |

---

## Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 1.1.5          | 6.6.0 – 6.7.x   | 8.1+        |
| 1.1.4          | 6.6.0 – 6.7.x   | 8.1+        |
| 1.1.3          | 6.6.0 – 6.7.x   | 8.1+        |
| 1.1.2          | 6.6.0 – 6.7.x   | 8.1+        |
| 1.1.1          | 6.6.0 – 6.7.x   | 8.1+        |
| 1.1.0          | 6.6.0 – 6.7.x   | 8.1+        |
| 1.0.1          | 6.6.0 – 6.7.x   | 8.1+        |
| 1.0.0          | 6.6.0 – 6.7.x   | 8.1+        |
