# Usage Guide

This guide covers all features of SplitCommission from both the customer's and administrator's perspective.

---

## Table of Contents

- [Commission Note on the Product Detail Page](#commission-note-on-the-product-detail-page)
- [Splitting a Cart Line Item](#splitting-a-cart-line-item)
- [Editing a Commission Note](#editing-a-commission-note)
- [Global Order Comment on the Checkout Page](#global-order-comment-on-the-checkout-page)
- [Display on the Order Confirmation Page](#display-on-the-order-confirmation-page)
- [Admin: Commission Notes in the Order Overview](#admin-commission-notes-in-the-order-overview)
- [Product Configuration: Enable Comments for Selected Products](#product-configuration-enable-comments-for-selected-products)
- [Commission Fields in Email Templates](#commission-fields-in-email-templates)
- [Troubleshooting](#troubleshooting)

---

## Commission Note on the Product Detail Page

### What It Does

On the product detail page, an input field for a commission note appears above the "Add to cart" button. If the customer enters a note and adds the item, it is placed in the cart as its own separately labeled line item.

### How to Use It (as a Customer)

1. Open the product detail page of a commission-enabled product.
2. In the **"Split line item into multiple parts"** section, you will see a text input field.
3. Enter your commission note (e.g. "Branch North" or "Order Ref. 2024-001").
4. Click **"Add to cart"**.
5. The item is added as its own labeled line item in the cart.

**Note**: If you add the same product again without a note, or with a different note, it creates another separate line item. All quantities are summed for tiered price calculation.

**Location**: Product detail page → buy widget (below the quantity selector)

---

## Splitting a Cart Line Item

### What It Does

For cart line items that do not yet have a commission note, a split form appears in the cart. This lets customers add a comment to an existing item and turn it into its own separate position.

### How to Use It (as a Customer)

1. Open the **cart** (cart page or off-canvas sidebar).
2. Below any commission-enabled item without a note, you will see the section **"Split line item into multiple parts"** with a text input.
3. Enter a commission note in the field.
4. Click **"Apply"**.
5. The item gets the note and is treated as its own separate position. Tiered pricing across all positions of the same product is preserved.

**Location**: Cart page or off-canvas cart → below each splittable line item

---

## Editing a Commission Note

### What It Does

Line items that already have a commission note show the note below the item number. A pencil button allows inline editing of the note directly in the cart.

### How to Use It (as a Customer)

1. Open the **cart**.
2. For items with a commission note set, you will see below the item number:
   - **Commission note**: [your entered text]
   - A **pencil button** next to it.
3. Click the **pencil button**.
4. The text field appears with the existing note pre-filled.
5. Edit the text and click the **checkmark button** to save.
6. The cart refreshes with the updated note.

**Location**: Cart page or off-canvas cart → on items with an existing commission note

---

## Global Order Comment on the Checkout Page

### What It Does

When **"Activate comment for whole order"** is enabled in the plugin settings, an additional text field appears on the checkout confirmation page for a single comment that applies to the entire order.

### How to Use It (as a Customer)

1. Add items to the cart and proceed to **checkout**.
2. On the **"Confirm your order"** page, locate the **"Commission note"** field (position depends on the configured setting: below the customer comment or below the shipping methods).
3. Enter your order comment (e.g. a project number or global delivery instruction).
4. Click the **checkmark icon** to save the comment.
5. To remove the comment, click the **trash icon** (visible when a comment is set).
6. Complete the order as usual.

**Location**: Checkout confirmation page → section position depends on configuration

---

## Display on the Order Confirmation Page

### What It Does

After successfully placing an order, the confirmation page displays the global order comment if one was entered.

**Location**: Order confirmation (thank you page) → order details section

The comment appears in the shipping information section, clearly labeled **"Commission note:"**.

---

## Admin: Commission Notes in the Order Overview

### What It Does

In the Shopware administration, commission notes are displayed directly on the respective line items in the order detail view.

### How to View Comments (as an Administrator)

1. Navigate to **Orders** in the Shopware administration.
2. Open an order placed using the SplitCommission plugin.
3. In the order line items table, you will see the commission note displayed below the product name, labeled **"Order note: [comment text]"**.

**Location**: Orders → Order detail → Line items table

---

## Product Configuration: Enable Comments for Selected Products

### What It Does

When the plugin setting **"Active for"** is set to **"Selected products"**, the commission field must be manually enabled per product.

### How to Enable It for a Product (as an Administrator)

1. Navigate to **Catalogues → Products**.
2. Open the desired product.
3. Switch to the **Specifications** tab.
4. Scroll to the **Commission** section.
5. Enable the **"Commission active"** toggle.
6. Click **Save**.

The commission comment field will now appear for this product in the storefront.

---

## Commission Fields in Email Templates

### What It Does

By default, the plugin displays commission notes on the order confirmation page, in documents (invoice, delivery note), and in the administration. However, email templates (e.g. order confirmation) require manual integration of the commission fields.

### Available Fields

There are two commission fields that can be used in email templates:

| Field | Variable | Description |
| ----- | -------- | ----------- |
| Commission note per line item | `lineItem.payload.commissionNote` | The commission note of an individual order line item |
| Global order comment | `order.customFields.webla_splitcomission_order_comment` | The overarching commission comment for the entire order |

### How to Add the Fields (as an Administrator)

1. Navigate to **Settings → Email Templates**.
2. Open the desired template (e.g. **Order confirmation**).
3. Add the desired code in the HTML or plain text template.

**Commission note per line item** (inside a line item loop):

```twig
{% for lineItem in order.lineItems %}
    {% if lineItem.payload.commissionNote is defined and lineItem.payload.commissionNote %}
        <br>Commission note: {{ lineItem.payload.commissionNote }}
    {% endif %}
{% endfor %}
```

**Global order comment** (e.g. below the order summary):

```twig
{% if order.customFields.webla_splitcomission_order_comment is defined and order.customFields.webla_splitcomission_order_comment %}
    <p><strong>Commission note:</strong> {{ order.customFields.webla_splitcomission_order_comment }}</p>
{% endif %}
```

**Location**: Settings → Email Templates → edit the desired template

---

## Troubleshooting

### The Commission Comment Field Does Not Appear

**Symptom**: No comment input field is visible on the product detail page or in the cart.

**Possible Causes and Solutions**:
1. **Plugin is disabled**: Check that the plugin is active under `Extensions → My Extensions`.
2. **Setting "Active for" = Selected products**: Enable the **"Commission active"** toggle for the affected product in its product details (Specifications tab).
3. **Wrong sales channel**: Make sure the plugin settings are configured for the correct sales channel.

---

### Tiered Price Is Not Applied Correctly

**Symptom**: After splitting into multiple positions, the lower tiered price is not applied.

**Cause**: The tiered price is recalculated on the next cart update (e.g. when adding or removing items).

**Solution**: Reload the cart page or briefly change a quantity to trigger a recalculation.

---

### The Global Order Comment Is Not Saved

**Symptom**: The comment field on the checkout page appears, but the comment is not stored with the order.

**Cause**: The comment must be explicitly confirmed by clicking the checkmark icon before the order is placed.

**Solution**: Enter the comment and click the checkmark icon to confirm it. Only then is it saved and attached to the order.
