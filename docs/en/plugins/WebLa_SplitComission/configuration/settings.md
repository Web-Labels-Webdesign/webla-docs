# Configuration Settings

This document describes all available settings for SplitCommission.

**Navigation**: Extensions → My Extensions → SplitCommission → Configure

> **Note**: All settings can be configured individually per sales channel. Select the desired sales channel in the configuration dropdown at the top of the settings panel.

---

## Division of Line Items into Parts Configuration

### Activate Division of Line Items into Parts

| Property     | Value          |
| ------------ | -------------- |
| **Type**     | Switch (On/Off) |
| **Default**  | Active         |
| **Required** | No             |

**Description**: Enables or disables the entire plugin for the selected sales channel. When disabled, no commission comment fields are shown and no line item splitting occurs.

**Example Use Case**: Disable this if you want to temporarily turn off the plugin for a specific sales channel (e.g. a B2C storefront) without uninstalling it.

---

### Active For

| Property     | Value         |
| ------------ | ------------- |
| **Type**     | Select        |
| **Default**  | All products  |
| **Required** | No            |

**Description**: Determines which products show the comment input field and the split functionality.

**Options**:
- `All products`: The comment field appears on every product in the shop automatically.
- `Selected products`: The comment field only appears on products where **Commission active** has been manually enabled in the product details (tab **Specifications** → section **Commission**).

**Example Use Case**: Choose "Selected products" when only certain items — such as custom-made or B2B-specific products — should support commission notes.

---

### Activate Division of Line Items without Comment

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Switch   |
| **Default**  | Inactive |
| **Required** | No       |

**Description**: When enabled, every cart line item is automatically treated as its own separate position even without a commission comment being entered. Useful when you want the tiered pricing feature without requiring individual notes.

**Example Use Case**: Enable this if your warehouse management system expects each cart entry to be a separate line item regardless of whether it has a comment.

---

### Activate Comment for Whole Order

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Switch   |
| **Default**  | Inactive |
| **Required** | No       |

**Description**: Displays an additional text field on the checkout confirmation page, allowing the customer to enter a single comment for the entire order. This comment is stored with the order and shown on the order success page.

**Example Use Case**: Enable this if customers should be able to provide an overarching delivery instruction or project reference number that applies to the whole order.

---

### Position of Global Commission Field on Checkout Page

| Property     | Value                          |
| ------------ | ------------------------------ |
| **Type**     | Select                         |
| **Default**  | Below customer comment         |
| **Required** | No                             |

**Description**: Determines where on the checkout confirmation page the global order comment field (see above) is displayed. Only relevant when **Activate Comment for Whole Order** is turned on.

**Options**:
- `Below customer comment`: The field appears directly below the standard customer comment field.
- `Below payment and shipping method`: The field appears below the payment and shipping method selection.

---

## Sales Channel Specific Settings

All settings can be configured separately per sales channel.

| Setting                               | Scope                | Description                                              |
| ------------------------------------- | -------------------- | -------------------------------------------------------- |
| Activate plugin                       | Per sales channel    | Enable or disable the plugin in each channel             |
| Active for                            | Per sales channel    | All products or selected products                        |
| Split without comment                 | Per sales channel    | Automatic split without requiring a note                 |
| Global order comment                  | Per sales channel    | Enable the whole-order comment field                     |
| Global comment field position         | Per sales channel    | Display position on the checkout page                    |

---

## Recommended Configurations

### For B2B Shops with Commission Tracking

| Setting                              | Recommended Value           |
| ------------------------------------ | --------------------------- |
| Activate plugin                      | Active                      |
| Active for                           | Selected products           |
| Split without comment                | Inactive                    |
| Global order comment                 | Active                      |
| Global comment field position        | Below customer comment      |

### For Fully Automatic Line Item Splitting

| Setting                              | Recommended Value     |
| ------------------------------------ | --------------------- |
| Activate plugin                      | Active                |
| Active for                           | All products          |
| Split without comment                | Active                |
| Global order comment                 | Inactive              |
