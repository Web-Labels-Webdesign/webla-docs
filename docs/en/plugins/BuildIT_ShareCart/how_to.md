# How-To Guide

This guide provides step-by-step workflows for common tasks with BuildIT Share Cart.

---

## How the Plugin Works

### Data Flow Overview

```
Customer shares cart -> Plugin creates link + stores products -> Recipient opens link -> Landing page shows products -> "Add All" imports products
```

**Detailed flow**:
1. The customer clicks "Share Cart" and selects a method
2. The plugin creates a unique link and stores all cart products with quantities in the database
3. The link is copied, emailed, or shared via WhatsApp/Facebook depending on the method
4. When the link is opened, the timestamp is recorded (relevant for cleanup)
5. The recipient sees all products and can add them to their own cart
6. The scheduled task automatically cleans up old entries

---

## Common Workflows

### How to: Set Up the Plugin

**Goal**: Install and configure the plugin for use

**Time Required**: approx. 5 minutes

**Steps**:

1. **Activate the plugin**
   - Navigate to: `Extensions -> My Extensions`
   - Find **BuildIT Share Cart** and click **Activate**

2. **Configure sharing methods**
   - Click the gear icon next to the plugin or click **Configure**
   - Enable the desired sharing methods (Link, Mail, WhatsApp, Facebook)
   - If Facebook: Enter your Facebook App ID

3. **Adjust cleanup** (optional)
   - Scroll to the **Share Cart Settings** section
   - Adjust the deletion periods to your needs

4. **Clear cache**
   - Navigate to: `Settings -> System -> Caches & Indexes`
   - Click **Clear all caches**

**Result**: A "Share Cart" button now appears on the cart page in the storefront with the methods you enabled.

---

### How to: Set Up Facebook Sharing

**Goal**: Enable the Facebook sharing method

**Time Required**: approx. 10 minutes

**Prerequisites**:
- A Facebook developer account

**Steps**:

1. **Create a Facebook app**
   - Visit [developers.facebook.com](https://developers.facebook.com/docs/development/create-an-app)
   - Create a new app of type "Business"
   - Note the displayed **App ID**

2. **Configure the App ID in the plugin**
   - Navigate to: `Extensions -> My Extensions -> BuildIT Share Cart -> Configure`
   - Enable **Activate share via Facebook**
   - Enter the **App ID** in the **Facebook App ID** field
   - Click **Save**

**Result**: Customers now see the Facebook option when sharing their cart.

---

### How to: Manually Clean Up Old Carts

**Goal**: Delete shared carts immediately without waiting for automatic cleanup

**Prerequisites**:
- SSH access to the server or Shopware CLI access

**Steps**:

1. **Clean up opened carts**
   - Run: `bin/console share-cart:cleanup`
   - Confirm the prompt with `y`

2. **Clean up unopened carts**
   - Run: `bin/console share-cart:cleanup-stale`
   - Confirm the prompt with `y`

**Result**: All carts older than the configured days are deleted immediately.

---

## Quick Reference

| Task                       | Key Steps                                     | Settings Required        |
| -------------------------- | --------------------------------------------- | ------------------------ |
| Activate plugin            | Extensions -> Activate -> Configure            | At least one method      |
| Set up Facebook            | Create Facebook app -> Enter App ID            | Facebook + App ID        |
| Adjust cleanup             | Configure -> Change deletion periods           | Day values               |
| Manual cleanup             | SSH -> `bin/console share-cart:cleanup`         | SSH access               |

---

## Best Practices

1. **Enable at least Link and one social method**: The link is the most universal method, WhatsApp is the most popular with end consumers.
2. **Adjust cleanup to your shop**: B2B shops benefit from longer periods as decision processes take more time.
3. **Clear the cache after configuration changes**: Changes to sharing methods only become visible in the storefront after clearing the cache.

## What to Avoid

- Leaving all sharing methods disabled - no button will appear in the storefront
- Enabling Facebook without a valid App ID - causes errors when sharing
- Very short cleanup times (under 2 days) - recipients may not have enough time to open the link
