# Configuration Settings

This document describes all available settings for the Additional Options Plugin.

**Navigation**: Extensions → My Extensions → Product Additional Options Plugin → Configure

---

## Discount Settings

### Apply discounts to options even if they don't apply

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Enabled |
| **Required** | No      |

**Description**: This setting controls whether discounts and promotions should be applied to additional options, even if the promotion conditions don't explicitly include the options.

**How it works**:
- **Enabled**: Discounts are also applied to additional options if the main item benefits from a promotion
- **Disabled**: Discounts only apply to main products; additional options remain excluded from discounts

**Example Use Case**:
- If you have a promotion "10% off all electronics" and this setting is enabled, the warranty extension and assembly service will also receive a 10% discount
- With the setting disabled, only the main products (electronics) would receive the discount; additional options would keep their original price

**Recommendation**: Enable this setting if you want your customers to save on additional services during promotions. Disable it if additional options should always be sold at full price.

---

## Display Settings

### Description tooltip icon

| Property     | Value             |
| ------------ | ----------------- |
| **Type**     | Select (Dropdown) |
| **Default**  | Question mark (?) |
| **Required** | No                |

**Description**: Determines which icon is displayed next to option names that have a description text configured.

**Options**:
- `Question mark (?)`: Displays the Shopware `help` icon — a question mark
- `Info icon (i)`: Displays the Shopware `info` icon — a lowercase "i"

**Example Use Case**: Use the info icon if you consider descriptions as informational hints, or use the question mark if they serve as help/explainer texts.

---

### Position on product detail page

| Property     | Value                      |
| ------------ | -------------------------- |
| **Type**     | Select (Dropdown)          |
| **Default**  | Below "Add to cart" button |
| **Required** | No                         |

**Description**: Determines where the additional options are displayed on the product detail page relative to the "Add to cart" button and buy widget.

**Options**:
- `Show option selection above "Add to cart" Button`: The option selection appears directly above the cart button, so customers see it before adding to cart
- `Show option selection below "Add to cart" Button`: The option selection appears below the cart button but still inside the buy form area (default setting)
- `Show option selection below the entire buy widget`: The option selection appears after the entire buy widget — below the wishlist button, product number, and any other extensions that inject into the buy area

**Example Use Case**:
- **Position "Above"**: Ideal when additional options are important for the purchase decision (e.g., required fields like warranty extension)
- **Position "Below"**: Suitable for optional additional services that the customer can add after the main decision
- **Position "Below Widget"**: Use when other extensions (e.g., wishlist, configurators) conflict with the "Below" position by injecting content between the cart button and the options

**UI Impact**: This setting only affects the product detail page. In the shopping cart, options always appear directly under the respective item.

---

## Payment Settings

### Quantity handling of line items

| Property     | Value                           |
| ------------ | ------------------------------- |
| **Type**     | Select (Dropdown)               |
| **Default**  | Split all items into quantity 1 |
| **Required** | No                              |

**Description**: This setting controls how order items with different additional options are displayed in the shopping cart and order.

**Options**:
- `Split all line items into items with quantity 1`: Each combination of product and options is displayed as a separate item with quantity 1
- `Merge all same line items into one with with the relevant total quantity`: Identical combinations are merged and the quantity is added

**Example - "Split" Setting (Default)**:
```
Item 1: Laptop + 2-year warranty (Qty: 1) - €1,099
Item 2: Laptop + 2-year warranty (Qty: 1) - €1,099
Item 3: Laptop + 3-year warranty (Qty: 1) - €1,149
```

**Example - "Merge" Setting**:
```
Item 1: Laptop + 2-year warranty (Qty: 2) - €2,198
Item 2: Laptop + 3-year warranty (Qty: 1) - €1,149
```

**Example Use Case**:
- **Split**: Recommended for ERP systems that need to process each item individually (e.g., for serial number assignment)
- **Merge**: Clearer for the customer when ordering multiple identical items with the same options

**Important**: This setting affects not only the display but also the transfer to payment providers and external systems.

---

### Adjust order line items

| Property     | Value                                            |
| ------------ | ------------------------------------------------ |
| **Type**     | Select (Dropdown)                                |
| **Default**  | Recalculate line items to show individual prices |
| **Required** | No                                               |

**Description**: Controls whether the prices of order items are recalculated when transitioning from cart to order or whether cart prices are retained.

**Options**:
- `Recalculate line items in order to show individual prices`: Prices are recalculated during checkout to reflect the most current prices and discounts
- `Keep prices, as shown in cart, in the order`: The prices displayed in the cart are transferred to the order without recalculation

**Example Use Case**:
- **Recalculate**: Recommended if you frequently have price changes or use time-based discounts. Ensures the customer always pays the current price
- **Keep**: Makes sense if you want to guarantee that the price displayed in the cart is the final price - regardless of later price changes during the checkout process

**Technical Note**: Recalculation affects both main products and all additional options. With recalculation enabled, prices can change if during checkout:
- Prices are updated in the system
- Promotion periods expire
- Country-specific prices are adjusted when changing delivery country

---

## Seeder Settings

### Remove seeded options from excluded products

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Checkbox |
| **Default**  | Disabled |
| **Required** | No       |

**Description**: Controls what happens to options that a seeder previously assigned to a product when that product becomes excluded from the seeder.

**Behavior**:
- **Enabled**: Excluding a product from the seeder also deletes its already-seeded options on the next synchronization.
- **Disabled** (default): Excluded products keep their previously seeded options; only products that leave the seeder's product group entirely are cleaned up.

**Note**: Products that leave the seeder's product group completely are always cleaned up on the next sync, regardless of this setting.

---

### Deactivate option sets when the seeder is deactivated

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Checkbox |
| **Default**  | Disabled |
| **Required** | No       |

**Description**: Controls whether deactivating a seeder also deactivates the option sets that seeder created on the products.

**Behavior**:
- **Enabled**: Deactivating a seeder deactivates every option set it created, so they no longer appear in the storefront. Activating the seeder again re-activates them.
- **Disabled** (default): The option sets stay active and visible in the storefront even while the seeder is deactivated. The seeder merely stops creating new assignments.

**Note**: The option sets and their options are never deleted, only marked inactive. All settings, prices and configurations are kept and are available unchanged once the seeder is activated again.

---

### Delete option sets when the seeder is deleted

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Checkbox |
| **Default**  | Enabled  |
| **Required** | No       |

**Description**: Controls what happens to the option sets a seeder created when that seeder is deleted.

**Behavior**:
- **Enabled** (default): Deleting a seeder also deletes every option set it created, together with their options.
- **Disabled**: The option sets stay on the products and are no longer managed by any seeder. They can then be edited directly on the product like manually created option sets.

**Caution**: Deleting a seeder cannot be undone. With this setting enabled, the seeded option sets are lost irrecoverably. To take a seeder out of service temporarily, deactivate it instead.

---

## Sales Channel Specific Settings

All settings mentioned above can be configured individually per sales channel, with
one exception: the **Seeder Settings** apply globally. Seeding runs in the background
without a sales channel context, so only the value set for "All Sales Channels" is used.

| Setting                  | Scope                    | Description                                       |
| ------------------------ | ------------------------ | ------------------------------------------------- |
| Apply discounts          | Global/Per Sales Channel | Can be enabled differently per sales channel      |
| Description tooltip icon | Global/Per Sales Channel | Can use different icon per sales channel           |
| Position on product page | Global/Per Sales Channel | Can be positioned differently per sales channel   |
| Quantity handling        | Global/Per Sales Channel | Can have different display per sales channel      |
| Adjust order items       | Global/Per Sales Channel | Can use different pricing logic per sales channel |

**How to configure sales channel-specific settings**:

1. Navigate to `Extensions → My Extensions → Product Additional Options Plugin → Configure`
2. Select the desired sales channel in the top right (instead of "All Sales Channels")
3. Adjust the settings for this sales channel
4. Click "Save"

---

## Recommended Configurations

### For B2C Shops with Promotions and Discounts

| Setting                  | Recommended Value          |
| ------------------------ | -------------------------- |
| Apply discounts          | Enabled                    |
| Position on product page | Below "Add to cart" button |
| Quantity handling        | Merge                      |
| Adjust order items       | Recalculate                |

**Rationale**: Customers benefit from discounts on additional options, the display is clear, and prices are always current.

---

### For B2B Shops with Fixed Prices

| Setting                  | Recommended Value          |
| ------------------------ | -------------------------- |
| Apply discounts          | Disabled                   |
| Position on product page | Above "Add to cart" button |
| Quantity handling        | Split (Quantity 1)         |
| Adjust order items       | Keep                       |

**Rationale**: Additional options have fixed prices, are clearly visible before purchase completion, each item is listed individually for ERP systems, and prices remain guaranteed.

---

### For Shops with Mandatory Additional Options (e.g., Insurance)

| Setting                  | Recommended Value          |
| ------------------------ | -------------------------- |
| Apply discounts          | Disabled                   |
| Position on product page | Above "Add to cart" button |
| Quantity handling        | As needed                  |
| Adjust order items       | Recalculate                |

**Rationale**: Mandatory additional options (e.g., legally required insurance) should be sold without discounts, prominently positioned, and have current prices.

---

## Frequently Asked Questions

**Q: What happens if I change the discount setting later?**
A: The change only affects new shopping carts. Existing orders remain unchanged.

**Q: Can I set different positions for options for different products?**
A: No, the position is set globally or per sales channel. However, you can implement product-specific displays via CSS customizations.

**Q: Are additional options listed individually in the payment provider when using "Split" quantity handling?**
A: Yes, most payment providers receive the items individually. This can lead to longer invoices but is important for correct processing.

**Q: Does recalculation also affect promotions?**
A: Yes, with recalculation enabled, all current rules, promotions, and discounts are reapplied. This can lead to price changes if promotions have started or ended in the meantime.
