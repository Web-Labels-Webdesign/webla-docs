# Usage Guide

This guide covers all features and functionality of BuildIT Share Cart.

---

## Storefront Features

### Sharing a Cart

#### What It Does

Your customers can share their current cart with others through various channels. A shareable link is created that contains all products and quantities.

#### How Your Customers Use It

1. The customer adds products to the cart
2. On the cart page, a **Share Cart** button appears
3. A modal opens with the available sharing methods (depending on your configuration)
4. The customer selects a sharing method (Link, Email, WhatsApp, or Facebook)
5. Optional: The customer enters a title and personal message
6. The customer clicks **Submit**

**Location**: Storefront -> Cart page -> Below the product list

#### Sharing Methods in Detail

**Copy link**:
- A unique link is generated
- The link is displayed in a text field
- The customer clicks the copy button to copy the link to the clipboard

**Share via email**:
- The customer's default email client opens
- Subject and message are pre-filled with the customer's title and message
- The cart link is automatically included

**Share via WhatsApp**:
- On mobile: The WhatsApp app opens directly
- On desktop: WhatsApp Web opens
- The message contains the title, message, and cart link

**Share via Facebook**:
- The Facebook send dialog opens in a new tab
- The recipient receives the cart link as a Facebook message

---

### Receiving a Shared Cart

#### What It Does

Recipients of a shared cart see a landing page with all products and can add them to their own cart.

#### What the Recipient Sees

1. The recipient clicks the shared link
2. A landing page displays all products with:
   - Product image and name
   - Quantity per product
   - Unit price
3. An **Add All** button adds all products to their own cart at once
4. Alternatively, each product can be added individually via the **Buy** button

**Location**: Storefront -> `/share-cart/{id}` (automatically generated URL)

#### Tips

- If a product is no longer available, it will be shown as unavailable on the landing page
- The recipient does not need a customer account to view the shared cart

---

## Admin Panel Features

### Plugin Configuration

**Location**: Extensions -> My Extensions -> BuildIT Share Cart -> Configure

Here you enable and disable individual sharing methods and configure cleanup times. See [Configuration Settings](../configuration/settings.md) for a complete description of all options.

---

## Automatic Cleanup

The plugin includes a scheduled task (`buildit.share-cart.cleanup`) that runs every 5 minutes and automatically deletes old shared carts:

- **Opened carts**: Deleted after the configured number of days (default: 5 days)
- **Unopened carts**: Deleted after the configured number of days (default: 30 days)

The scheduled task is automatically registered when the plugin is activated. You can check its status in **Settings -> System -> Scheduled Tasks**.

---

## Troubleshooting

### The "Share Cart" button doesn't appear

**Symptom**: No sharing button is visible on the cart page.

**Cause**: No sharing method is enabled.

**Solution**: Enable at least one sharing method in **Extensions -> My Extensions -> BuildIT Share Cart -> Configure**.

---

### Facebook sharing doesn't work

**Symptom**: Nothing happens when clicking Facebook, or an error message appears.

**Cause**: No or invalid Facebook App ID configured.

**Solution**: Create a Facebook app at [developers.facebook.com](https://developers.facebook.com/docs/development/create-an-app) and enter the App ID in the plugin settings.

---

### Shared link shows "Not found"

**Symptom**: The recipient sees a "Not found" message instead of the product list.

**Cause**: The shared cart was deleted by automatic cleanup.

**Solution**: Increase the cleanup times in the plugin settings or ask the sender to share the cart again.

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [How-To Guide](../how_to.md)
