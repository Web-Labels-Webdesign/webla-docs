# WebLa Subscription Plugin

> Flexible subscription plugin for Shopware 6 with automatic renewals, configurable intervals, Mollie payment integration, and a self-service customer portal for recurring orders.

## Overview

The WebLa Subscription Plugin enables you to offer a complete subscription system in your Shopware shop. Your customers can order products as recurring deliveries and benefit from automatic discounts. Renewals are processed automatically in the background — including payment processing via Mollie (credit card, SEPA direct debit) or manual payment methods (invoice, prepayment).

Through a self-service portal in the customer account, your customers can manage their subscriptions independently: pause, cancel, change intervals, add or remove products, and consolidate deliveries. In the admin panel, you get a dashboard with key metrics, an overview list of all subscriptions, and detailed editing capabilities.

## Key Features

- **Flexible Intervals**: Delivery intervals from 1 to 8 weeks (configurable), customers can optionally change intervals themselves
- **Automatic Renewals**: Background task automatically creates new orders on the due date
- **Subscription Discounts**: Percentage discounts on subscription orders, plus loyalty tiers based on number of renewals
- **Mollie Payment Integration**: Recurring payments via credit card and SEPA direct debit with automatic mandate management
- **Offline Payment Methods**: Invoice and prepayment as alternative payment methods for subscriptions
- **Customer Portal**: Self-service area in the customer account for managing all subscriptions
- **Delivery Consolidation**: Customers can combine multiple subscriptions to a shared delivery date
- **Admin Dashboard**: Key metrics for active subscribers, monthly revenue, upcoming renewals, and churn rate
- **Reminder Emails**: Automatic notification 3 days before each renewal
- **Product Configuration**: Subscription options configurable directly on the product, including "subscription only" mode
- **Free Items**: Add free products to renewals
- **Change Log**: Complete audit trail of all subscription changes

## Requirements

- Shopware Version: 6.6.0 or higher (up to 6.7.x)
- PHP Version: 8.1 or higher
- Mollie PHP SDK: Version 3.9 or higher (installed automatically)
- Mollie Account: Required for credit card and SEPA direct debit

## Quick Start

1. Install the plugin via Plugin Manager or Composer (`composer require webla/subscriptions`)
2. Activate the plugin in **Extensions → My Extensions**
3. Configure basic settings in **Extensions → My Extensions → WebLa Subscription Plugin → Configure**
4. Enter your Mollie API keys in the plugin configuration
5. Configure your desired intervals and discounts
6. Enable subscription options on desired products under **Catalogues → Products → [Product] → Subscription**

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — All available settings explained
- [Usage Guide](usage/usage.md) — How to use all plugin features
- [Subscription Management (Storefront)](usage/subscriptions.md) — The customer portal in detail
- [Admin Features](usage/admin.md) — Dashboard, lists, and detail views
- [How-To Guide](how_to.md) — Step-by-step workflows
- [Changelog](changelog.md) — Version history and updates

## Support

- Documentation: [docs.web-labels.de](https://docs.web-labels.de/)
- Shopware Store: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
