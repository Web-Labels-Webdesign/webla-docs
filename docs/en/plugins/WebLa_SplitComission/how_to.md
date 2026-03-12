# How-To Guide

Step-by-step workflows for common tasks with SplitCommission.

---

## How the Plugin Works

### Data Flow Overview

```
Customer enters note → Item added with note as own cart position → Cart contains separate positions → Tiered price calculated across all partial quantities → Order placed with labeled positions
```

**Example Flow**:
1. Customer opens product detail page and types "Branch North" as a note
2. Item is added to the cart as its own labeled line item
3. Customer adds the same product again with "Branch South" → second separate position
4. Plugin sums both quantities for tiered price calculation
5. Both positions receive the cheaper tiered price based on the combined total
6. Order contains both labeled positions — visible in the admin

---

## Common Workflows

### How to: Add a Product with a Commission Note

**Goal**: Place a product in the cart with an individual commission comment as its own line item.

**Prerequisites**:
- Plugin is active
- Product is enabled for commission (or "All products" is active)

**Steps**:

1. **Open the product detail page**
   - Navigate to the desired product in the storefront.

2. **Enter a commission note**
   - Locate the input field in the **"Split line item into multiple parts"** section above the "Add to cart" button.
   - Type your commission note (e.g. branch name, project number, order reference).

3. **Add the product to the cart**
   - Select the desired quantity.
   - Click **"Add to cart"**.

4. **Verify the result**
   - Open the cart.
   - The product appears as its own line item with your note displayed below the item number.

**Result**: The product is a separately labeled line item in the cart, ready for checkout or further splitting.

---

### How to: Split an Existing Cart Line Item

**Goal**: Add a commission note to an item already in the cart, turning it into a separate labeled position.

**Prerequisites**:
- Plugin is active
- The item is in the cart without a commission note

**Steps**:

1. **Open the cart**
   - Click the cart icon or navigate to the cart page.

2. **Find the split form**
   - Below the desired item (without a note), you will see the **"Split line item into multiple parts"** section with an input field.

3. **Enter a note and confirm**
   - Type your commission note.
   - Click **"Apply"**.

4. **Verify the result**
   - The item now shows the commission note.
   - Tiered pricing is recalculated across all positions of the same product.

**Result**: The cart line item has a commission note and is shown as a separate labeled position.

---

### How to: Edit an Existing Commission Note

**Goal**: Correct a commission note that is already set on a cart line item.

**Steps**:

1. **Open the cart**

2. **Find the item with the note**
   - Below the item number you will see: **Commission note**: [current text] with a pencil icon.

3. **Start editing**
   - Click the **pencil icon** next to the note.
   - The text field appears pre-filled with the current note.

4. **Update the note and save**
   - Edit the text.
   - Click the **checkmark icon** to save.

**Result**: The note is updated and the cart refreshes automatically.

---

### How to: Add a Global Order Comment

**Goal**: Leave a single overarching comment for the entire order.

**Prerequisites**:
- "Activate comment for whole order" is enabled in the plugin settings

**Steps**:

1. **Navigate to checkout**
   - Add all items to the cart and click **"Proceed to checkout"**.

2. **Find the global comment field**
   - On the **"Confirm your order"** page, locate the **"Commission note"** field (position depends on configuration: below the customer comment or below the shipping methods).

3. **Enter the comment and confirm**
   - Type your comment (e.g. project number, reference, delivery instruction).
   - Click the **checkmark icon** to save.

4. **Complete the order**
   - Select payment and shipping method and finalize the order.
   - The comment is saved with the order.

**Result**: The comment appears on the order confirmation page and is visible in the Shopware admin order detail.

---

### How to: Enable the Plugin for Selected Products

**Goal**: Show the commission comment field only on specific products.

**Prerequisites**:
- Plugin setting "Active for" is set to **"Selected products"**

**Steps**:

1. **Open the product**
   - Navigate to **Catalogues → Products** and open the desired product.

2. **Go to the Specifications tab**
   - Switch to the **Specifications** tab in the product form.

3. **Enable commission**
   - Scroll to the **Commission** section.
   - Enable the **"Commission active"** toggle.

4. **Save**
   - Click **Save** (top right).

**Result**: The commission comment field now appears for this product in the storefront.

---

## Quick Reference

| Task                                       | Location                         | Required Setting                      |
| ------------------------------------------ | -------------------------------- | ------------------------------------- |
| Add a note when adding to cart             | Product detail page              | Plugin active, product enabled        |
| Split an existing cart item                | Cart / off-canvas cart           | Plugin active                         |
| Edit an existing note                      | Cart / off-canvas cart           | Plugin active                         |
| Add a global order comment                 | Checkout confirmation page       | Global comment field enabled          |
| Enable comment field for a product         | Admin → Product → Specifications | "Active for" = Selected products      |

---

## Best Practices

1. **Use meaningful notes**: Use clear labels like a branch name, project number, or order reference — these appear directly in the admin order overview, making fulfillment easier.
2. **Review all notes before checkout**: Check all commission notes in the cart before proceeding to checkout.
3. **Watch the tiered pricing**: The best tiered price applies when split positions of the same item reach the required combined quantity. Verify prices after each split.

## What to Avoid

- ❌ **Leaving a note field without confirming** — A note that has been typed but not confirmed with the checkmark icon will not be saved.
- ❌ **Submitting the order before confirming the global comment** — The global order comment field must be explicitly confirmed before placing the order.
