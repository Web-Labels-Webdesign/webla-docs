# Configuration Settings

This document describes all available settings for the Ultimate Bundle Plugin.

**Navigation**: Extensions → My Extensions → Ultimate Bundle Plugin → Configure

---

## Bundle Configuration

### Activate Bundles

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Enabled |
| **Required** | No      |

**Description**: Global on/off switch for the entire bundle functionality. When disabled, no bundles are displayed on the storefront.

**Example Use Case**: Temporarily disable this setting when reconfiguring bundles so customers don't see incomplete offers.

---

### Create Bundles Automatically

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Enabled |
| **Required** | No      |

**Description**: When enabled, bundles are automatically assembled in the cart as soon as a matching product is added. The plugin detects whether the added product is part of a bundle and links it automatically.

**Example Use Case**: Enable this setting when customers should automatically benefit from bundle discounts without explicitly selecting the bundle on the product page.

---

### Discount Representation

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Discount position in the shopping cart |
| **Required** | No     |

**Description**: Determines how the bundle discount is displayed in the shopping cart.

**Options**:
- `Discount position in the shopping cart`: The discount is shown as a separate, negative line item in the cart
- `Direct deduction from the product price`: The discount is deducted directly from the product price and is not visible as a separate item in the cart

**Example Use Case**: Choose "Discount position" when customers should transparently see the discount as its own line item. Choose "Direct deduction" when the reduced price should be shown directly on the product.

---

## Additional Options Compatibility Configuration

### Display Configuration

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Show both |
| **Required** | No     |

**Description**: Controls how bundles and additional options are displayed on the product page.

**Options**:
- `Show bundles only`: Shows only the bundle selection
- `Hide bundle items`: Hides the individual bundle items in the display
- `Show both`: Shows both bundles and additional options

**Example Use Case**: If you use an additional options plugin alongside this plugin, you can control here how both features are displayed together.

---

### Discount Calculation

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Include bundles only |
| **Required** | No     |

**Description**: Determines which products are included in the discount calculation.

**Options**:
- `Include bundles only`: The discount is calculated only on the bundle group products
- `Calculate additional options as bundle item`: Additional options from other plugins are treated like bundle products and included in the discount calculation
- `Calculate additional options as main product`: Additional options are added to the main product price and the discount is calculated on the total price

**Example Use Case**: If you use an additional options plugin and want the option prices to also be discounted, choose one of the last two options.

---

### Position of the Bundle Selector

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Above product description |
| **Required** | No     |

**Description**: Determines where the bundle selection is displayed on the product detail page.

**Options**:
- `Below "add to cart" button`: The bundle selection appears directly below the cart button
- `Above product description`: The bundle selection appears above the description/reviews area
- `Below product description`: The bundle selection appears below the description/reviews area

**Example Use Case**: Choose "Below the cart button" when bundles should be placed as close to the purchase action as possible to maximize conversion.

---

### Inherit Bundle to Variants

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Switch   |
| **Default**  | Disabled |
| **Required** | No       |

**Description**: When enabled, bundles assigned to a parent product are also displayed on its variants.

**Example Use Case**: Enable this setting when you've created a bundle for a t-shirt and want it to automatically appear on all colour variants.

---

### Allow Incomplete Bundles in Cart

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Switch   |
| **Default**  | Disabled |
| **Required** | No       |

**Description**: When enabled, bundles can be added to the cart even if not all bundle groups have a selected product. When disabled, all required groups must have a product selected before the bundle is formed.

**Example Use Case**: Enable this setting when customers should be able to select only some parts of a bundle without having to fill all groups.

---

## Payment Settings

### Adjust Order Line Items

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Recalculate |
| **Required** | No     |

**Description**: Controls how order line items are handled after the order is completed.

**Options**:
- `Recalculate line items in order to show individual prices`: The original prices of individual products are restored in the order, making individual prices visible
- `Keep prices, as shown in cart, in the order`: Prices remain as they were displayed in the cart (including any discounts)

**Example Use Case**: Choose "Recalculate" if you want to see the original prices of individual products in the order overview and on invoices. Choose "Keep prices" if prices should be displayed exactly as they appeared in the cart.

---

## Recommended Configurations

### For Simple Bundle Offers

| Setting                          | Recommended Value                        |
| -------------------------------- | ---------------------------------------- |
| Activate Bundles                 | Enabled                                  |
| Create Bundles Automatically     | Disabled                                 |
| Discount Representation          | Discount position in the shopping cart   |
| Position of Bundle Selector      | Above product description                |
| Allow Incomplete Bundles         | Disabled                                 |
| Adjust Order Line Items          | Recalculate                              |

### For Maximum Conversion

| Setting                          | Recommended Value                        |
| -------------------------------- | ---------------------------------------- |
| Activate Bundles                 | Enabled                                  |
| Create Bundles Automatically     | Enabled                                  |
| Discount Representation          | Direct deduction from the product price  |
| Position of Bundle Selector      | Below "add to cart" button               |
| Allow Incomplete Bundles         | Enabled                                  |
| Adjust Order Line Items          | Recalculate                              |

### For Shops with Additional Options Plugin

| Setting                          | Recommended Value                                |
| -------------------------------- | ------------------------------------------------ |
| Display Configuration            | Show both                                        |
| Discount Calculation             | Calculate additional options as bundle item       |
