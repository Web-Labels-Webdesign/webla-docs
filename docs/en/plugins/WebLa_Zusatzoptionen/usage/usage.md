# Usage Guide

This guide covers all features and functionality of the Additional Options Plugin.

---

## Table of Contents

- [Creating and Managing Option Sets](#creating-and-managing-option-sets)
- [Adding and Configuring Options](#adding-and-configuring-options)
- [Pricing](#pricing)
- [Shipping Restrictions](#shipping-restrictions)
- [Country-Specific Configuration](#country-specific-configuration)
- [Product Dependencies and Incompatibilities](#product-dependencies-and-incompatibilities)
- [Automatic Assignment with Option Seeder](#automatic-assignment-with-option-seeder)
- [Quantity Selection](#quantity-selection)
- [Required Fields and Requirements](#required-fields-and-requirements)
- [Rule Builder Integration](#rule-builder-integration)
- [Storefront Features](#storefront-features)
- [Troubleshooting](#troubleshooting)

---

## Creating and Managing Option Sets

### What are Option Sets?

Option sets are containers for related additional options. For example, a set might be called "Warranty Extensions" or "On-Site Services" and contain multiple selectable options.

### How to Create an Option Set

1. Navigate to `Catalogues → Products`
2. Select a product to which you want to add additional options
3. Switch to the **Additional Options** tab
4. Click **Add Option Set**
5. Enter the following information:
   - **Name**: Display name of the set (e.g., "Warranty Extension")
   - **Description** (optional): Additional information for the customer
   - **Type**:
     - `Products`: Use existing products as options
     - `Text Field`: Allow free text input (e.g., engraving text)
   - **Multiple Selection**: Enable if multiple options can be selected simultaneously

### Option Set Settings

**Location**: Catalogues → Products → [Product] → Additional Options

| Setting                | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| **Name**               | Displayed to the customer on the product page and in the cart         |
| **Description**        | Optional: Additional text under the name                              |
| **Type**               | `Products` for product-based options or `Text Field` for input fields |
| **Multiple Selection** | Allows selection of multiple options instead of just one              |
| **Sorting**            | Order in which sets are displayed (lower number = higher up)          |
| **Show Image**         | Displays product images with the options                              |
| **Show Manufacturer**  | Displays manufacturer names with the options                          |
| **Quantity Selection** | Allows the customer to choose quantity for all options in this set    |
| **Container Open**     | Set is expanded by default (recommended for required fields)          |
| **Description Path**   | Product field path (e.g. `description`) to auto-resolve option descriptions from the linked product — shown as a tooltip icon (?) next to the option name |

### Tips & Best Practices

- Group thematically related options in one set
- Use meaningful names like "Warranty Extension" instead of "Options 1"
- Enable "Container Open" for sets with required fields so customers see them immediately
- Use sorting to display more important sets higher up

---

## Adding and Configuring Options

### Adding an Option to a Set

1. Open an option set in the product view (`Catalogues → Products → [Product] → Additional Options`)
2. Click **Add Option**
3. Select an existing product or create a custom option
4. Configure the option:
   - **Product**: Select the product to serve as an option
   - **Active**: Only active options are displayed and can be selected
   - **Auto-Selected**: Option is pre-selected when loading the page
   - **Required**: Customer must select this option (only works with single selection)
   - **Preselected**: Option is checked by default when loading the page but can be unchecked by the customer
   - **Sorting**: Order within the set

### Explainer / Description Texts

Each option can have a description text that is shown as a tooltip icon (?) next to the option name in the storefront. There are two ways to provide descriptions:

**Option-level description** (custom text per option):
1. Open the option in edit mode
2. Enter text in the **Description** field (e.g., "Extends the warranty by 2 additional years")
3. This text is shown as a tooltip when the customer hovers over the (?) icon

**Option set-level description path** (auto-resolved from product):
1. Open the option set settings
2. Enter a product field path in **Description Path** (e.g., `description`)
3. For each option in the set, the plugin automatically resolves the description from the linked product's field
4. If an option also has a custom description, the custom description takes priority

**Example Use Cases**:
- Use option-level descriptions for custom explanatory text (e.g., "Includes on-site repair within 48 hours")
- Use the description path `description` to automatically show product descriptions as tooltips for product-based options

### Options with Text Field Input

For individual customer input (e.g., engravings):

1. Create an option set with type `Text Field`
2. Add an option
3. Enable **Enable Text Field**
4. The customer can then enter free text when selecting the option

**Example Use Cases**:
- Engraving text for jewelry
- Personalized dedications for gifts
- Special requests for services

---

## Pricing

### Simple Pricing

If you use an existing product as an option, its price is automatically adopted.

**Example**: A product "2-Year Warranty" with price €49.90 is displayed as an option with €49.90.

### Quantity Tiered Pricing

You can set different prices based on the order quantity:

1. Open the option in edit mode
2. Switch to the **Price Tiering** section
3. Click **Add Price**
4. Define:
   - **From Quantity**: From which quantity this price applies
   - **To Quantity**: Up to which quantity this price applies (optional)
   - **Price**: The price for this quantity range

**Example - Quantity Discount**:
```
Quantity 1-5:   €49.90 per piece
Quantity 6-10:  €44.90 per piece
Quantity 11+:   €39.90 per piece
```

**Note**: Quantity tiering refers to the total quantity of the main product in the cart, not the quantity of the option itself.

### Price Calculation in Cart

Option prices are automatically added to the product price:

```
Laptop:             €999.00
+ 2-Year Warranty:   €49.90
+ Assembly Service:  €29.90
= Total:          €1,078.80
```

In the cart, all items are displayed individually with an asterisk note (*) for VAT.

---

## Shipping Restrictions

### Restricting Options to Specific Shipping Methods

You can specify that certain options are only available with certain shipping methods:

1. Open the option in edit mode
2. Switch to the **Shipping Methods** section
3. Click **Add Shipping Method**
4. Select the allowed shipping methods

**Example Use Case**:
- "Assembly Service" only available with shipping method "Freight Forwarding"
- "Express Delivery" only available with shipping method "DHL Express"

**How it works**:
- If the customer selects a shipping method where the option is not available, the option is hidden or disabled
- Already selected options are automatically removed from the cart when the shipping method is changed

### Global Shipping Restrictions for Option Sets

You can also define shipping restrictions at the set level:

1. Open the option set
2. Switch to the **Shipping Methods** section
3. Select allowed or excluded shipping methods

This affects all options in the set.

---

## Country-Specific Configuration

### Different Prices per Country

You can define country-specific prices for each option:

1. Open the option in edit mode
2. Switch to the **Country Configuration** section
3. Click **Add Country**
4. Select the country and enter the specific price

**Example**:
```
Assembly Service:
- Germany:   €29.90
- Austria:   €49.90
- Switzerland: 69.90 CHF
```

**How it works**:
- The price is automatically adjusted when the customer changes the delivery country during checkout
- If no country-specific price is defined, the default product price is used

### Making Options Available Only in Certain Countries

1. Open the option in edit mode
2. Switch to the **Country Configuration** section
3. Add only the countries where the option should be available
4. Enable **Only available in configured countries**

**Example Use Case**:
- "2-Man Delivery" only available in Germany and Austria
- "Customs Clearance" only for delivery to Switzerland

### Postal Code-Based Availability

For even more precise restrictions, you can define postal code ranges:

1. Open the option in edit mode
2. Switch to the **Postal Code Configuration** section
3. Click **Add Postal Code**
4. Enter from and to postal codes (e.g., 10000 - 19999 for Berlin)

**Example Use Case**:
- "Assembly Service" only available in postal code areas served by your service team

---

## Product Dependencies and Incompatibilities

### Dependent Options (up to 3 Levels)

You can create options that only become visible when a parent option is selected.

**Example - 3-Level Dependency**:
```
Level 1: Warranty Extension (Yes/No)
  └─ Level 2: 2-Year Warranty / 3-Year Warranty
      └─ Level 3: With On-Site Service / Without On-Site Service
```

**How to Create Dependent Options**:

1. First create the parent option (Level 1)
2. Create the dependent option (Level 2)
3. Set the **Requirement - Parent ID** field to the ID of the parent option
4. The dependent option will only appear when the parent option is selected

**Requirement Fields**:
- **Requirement - Parent ID**: ID of the parent option
- **Requirement - Active**: Option must be active for dependent options to appear
- **Requirement - Selected**: Parent option must be selected

### Defining Incompatible Products

You can specify that certain options are mutually exclusive:

1. Open the option in edit mode
2. Switch to the **Incompatible Products** section
3. Click **Add Product**
4. Select the products that cannot be selected simultaneously with this option

**How it works**:
- If the customer selects Option A, Option B is automatically grayed out and cannot be selected
- This also works in reverse: If B is selected, A is grayed out

**Example Use Cases**:
- 2-Year Warranty and 3-Year Warranty are mutually exclusive
- "Express Delivery" and "In-Store Pickup" are not compatible

---

## Automatic Assignment with Option Seeder

### What is the Option Seeder?

The Option Seeder allows you to automatically assign option sets to multiple products without having to edit each product individually. This is especially useful for large product catalogs.

**Location**: Extensions → Option Seeder

### Creating a Seeder

1. Navigate to `Extensions → Option Seeder`
2. Click **Add Seeder**
3. Configure the seeder:
   - **Name**: Internal name (e.g., "Warranty for Electronics")
   - **Option Set**: Select the option set to be assigned
   - **Product Stream**: Select an existing product stream or create a new one
   - **Active**: Enable to start automatic assignment
   - **Priority**: With multiple seeders, priority determines the order
   - **Date (From/To)**: Optional time-controlled assignment
   - **Exclude Products**: Select specific products that should NOT receive the option set, even if they match the product stream

### Using Product Streams

Product streams are dynamic product groups based on conditions:

**Example - Product Stream for Electronics**:
```
Conditions:
- Category = "Electronics"
- Price > €500
- In Stock = Yes
```

All products that meet these conditions automatically receive the assigned option set.

### Seeder Synchronization

Assignment occurs:
- **Automatically**: Via a scheduled task (runs hourly in the background)
- **Manually**: Click "Synchronize" in the seeder list

**Important**: After creating or changing a seeder, it takes until the next automatic synchronization, or you start manual synchronization.

### Multiple Selection for Seeder

Since version 3.1.14, you can select multiple product streams per seeder:

1. Enable **Multiple Selection** in the seeder
2. Add multiple product streams
3. The option set is assigned to all products contained in at least one of the selected streams

**Example Use Case**:
```
Seeder: "Warranty Offer"
Product Streams:
- Electronics over €500
- All Household Appliances
- Premium Tools Category
```

### Bulk Seeder Management

The seeder list supports bulk actions to manage multiple seeders at once:

1. Select one or more seeders using the checkboxes in the list
2. Open the bulk actions menu and choose:
   - **Sync Now**: Immediately triggers synchronization for the selected seeders — no need to wait for the hourly scheduled task
   - **Reset Seeder**: Removes all option set assignments created by the selected seeders and re-queues them for re-synchronization. A confirmation dialog is shown before the reset.

**When to use Reset**:
- After changing the product stream conditions on a seeder
- When assignments are out of sync and need to be rebuilt from scratch
- After excluding products to remove previously assigned options

### Tips & Best Practices

- Test product streams first under `Catalogues → Dynamic Product Groups` before using them in a seeder
- Use meaningful names for seeders to easily identify them later
- Check individual products after synchronization to ensure the assignment worked correctly
- Use the date field for time-limited promotions (e.g., "Christmas Service Package")
- Use **Exclude Products** for individual exceptions instead of creating complex stream conditions

---

## Quantity Selection

### Enabling Quantity Selection for Options

You can allow customers to choose the quantity of an option (e.g., 2x warranty extension for 2 laptops):

**At Set Level**:
1. Open the option set
2. Enable **Quantity Selection**
3. All options in this set automatically receive quantity selection fields

**At Option Level** (individual):
1. Open the option in edit mode
2. Enable **Quantity Selection Enabled**
3. Only this specific option receives a quantity selection field

**How it works in Storefront**:
- Customers see +/- buttons next to the option
- Quantity can be increased or decreased
- Price is automatically multiplied by the quantity

**Technical Limits**:
- **Minimum**: Inherited from product setting `minPurchase` (default: 1)
- **Maximum**: Inherited from product setting `calculatedMaxPurchase`

**Example Use Cases**:
- Customer buys 3 laptops and wants 3x warranty extension
- Customer buys a piece of furniture and wants 2x assembly service (for 2 rooms)

---

## Required Fields and Requirements

### Marking an Option as Required

You can define options as required so customers cannot add the product to the cart without making a selection:

1. Open the option in edit mode
2. Enable **Required**
3. The option is now pre-selected and cannot be deselected

**Important**: Required fields only work in option sets with **Single Selection**. With multiple selection sets, the customer must select at least one option, but there is no specific required option.

**How it works**:
- The checkbox is pre-selected and grayed out
- The customer can select other options in the set (with single selection, the required option is then deselected)
- Without selecting an option, the product cannot be added to the cart

### Validation in Cart

The plugin automatically validates that all required options are selected:
- If required options are missing, an error message appears
- The checkout process is blocked until requirements are met

**Example Error Message**:
```
"Please select an option from the set 'Warranty Extension' for the product 'Laptop XYZ'."
```

### Preselected Options (without Requirement)

If you want an option to be checked by default but allow the customer to uncheck it, use the **Preselected** setting instead of **Required**:

1. Open the option in edit mode
2. Enable **Preselected**
3. The option is now checked when loading the page but can be unchecked by the customer

**Example Use Cases**:
- Recommended warranty extension that the customer can opt out of
- Default service package that most customers want
- Opt-out instead of opt-in for popular additional services

**Difference from Required**: Required fields cannot be deselected and block checkout. Preselected options are a recommendation that the customer can remove at any time.

### Best Practices for Required Fields

- Use required fields only when truly necessary (e.g., legal requirements)
- Use **Preselected** instead of **Required** when the customer should be able to opt out
- Enable "Container Open" in the set so required fields are immediately visible
- Don't combine required fields with too many options - keep it simple
- Inform customers about required fields (e.g., in the set description)

---

## Rule Builder Integration

### Controlling Options via Shopware Rules

The plugin supports the Shopware Rule Builder to dynamically enable or disable options:

**Location**: Settings → Shopware → Rules

### Disabling an Option via Rule

You can create rules that automatically disable options:

1. Create a rule under `Settings → Shopware → Rules`
2. Define conditions (e.g., "Cart total < €500")
3. Link the rule with the option:
   - Open the option in edit mode
   - Select the created rule in the **Deactivate by Rule** field

**How it works**:
- If the rule applies (e.g., cart under €500), the option is grayed out and cannot be selected
- As soon as the condition no longer applies (e.g., cart over €500), the option becomes active again

**Example Use Cases**:
```
Rule 1: "Premium Service only from €1,000 cart value"
  Condition: Cart total < €1,000
  Action: Disable option "Premium Assembly Service"

Rule 2: "Express Delivery only for Business Customers"
  Condition: Customer Group != Business
  Action: Disable option "Express Delivery 24h"

Rule 3: "Free Warranty for Newsletter Subscribers"
  Condition: Tag "newsletter_subscriber" = Yes
  Action: Set price for "2-Year Warranty" to €0
```

### Combined Conditions

You can create complex rules with multiple conditions:

```
Rule: "VIP Service for Premium Customers at High Cart Value"
  Conditions (AND):
    - Customer Group = "Premium"
    - Cart Total > €500
    - Delivery Country = "Germany"
  Action: Enable option "VIP On-Site Service Free"
```

### Tips & Best Practices

- Test rules thoroughly before going live
- Use meaningful rule names (e.g., "Disable Express at Low Cart Value")
- Combine rules with promotions to enable dynamic prices
- Document complex rules for your team

---

## Storefront Features

### Options on Product Detail Page

**Location**: Product Detail Page (Storefront)

Additional options appear as accordion containers:
- **Accordion Header**: Shows the name of the option set
- **Accordion Body**: Contains all options with checkboxes

**Display**:
- Sets with required fields or enabled "Container Open" are expanded by default
- Other sets are collapsed and can be opened with a click
- Active options are marked with a checkmark
- Disabled options are grayed out

**Elements per Option**:
- **Checkbox**: For selecting/deselecting
- **Product Image**: Optional if "Show Image" is enabled
- **Product Name**: Including variant information
- **Manufacturer Name**: Optional if "Show Manufacturer" is enabled
- **Tooltip Icon (?)**: Shown on hover if the option has a description (custom or auto-resolved from description path)
- **Quantity Selection**: If enabled, +/- buttons
- **Price**: Displayed with currency and tax note (*)

### Editing Options in Cart

**Location**: Shopping Cart Page

Customers can modify options in the cart after the fact:
1. Under each product, the same accordion container appears as on the product page
2. Customers can add options, remove them, or change the quantity
3. The cart total price is updated immediately

**How it works**:
- Changes are saved via AJAX (no page reload)
- Prices are recalculated
- Incompatible options are automatically removed
- Shipping restrictions are checked

### Options in Checkout

**Location**: Checkout Process

Options are displayed in checkout as follows:
- **Overview**: Each option appears as a separate item under the main product
- **Indentation**: Options are visually indented to show association with the main product
- **Price**: Option price is displayed individually and in the total price

**Validation**:
- Required fields are checked before completion
- Shipping restrictions are validated when changing shipping method
- If errors occur, an error message appears with a note about the affected product

### Options in Order Overview

**Location**: My Account → Orders → Order Details

In the order overview, customers see:
- All ordered options under the respective main product
- Product name, quantity, and unit price of the option
- Total price including all options

---

## Troubleshooting

### Problem: Options are not displayed on the product page

**Symptom**: Customer does not see any additional options on the product detail page

**Possible Causes & Solutions**:

1. **Option set is not active**
   - Check: `Catalogues → Products → [Product] → Additional Options`
   - Solution: Ensure the option set is enabled

2. **All options are inactive or disabled**
   - Check: Open each option and check "Active"
   - Solution: Enable at least one option

3. **Shipping restrictions apply**
   - Check: Shipping method configuration of options
   - Solution: Adjust shipping restrictions or select different shipping method

4. **Cache issue**
   - Solution: Clear the Shopware cache under `Settings → System → Caches & Indexes`

### Problem: Option price is not calculated correctly

**Symptom**: The displayed price does not match the expected price

**Possible Causes & Solutions**:

1. **Country-specific price is defined**
   - Check: Country configuration of the option
   - Solution: Ensure prices are stored for all relevant countries

2. **Quantity tier prices are active**
   - Check: Price tiering of the option
   - Solution: Review the defined quantity ranges

3. **Promotions/discounts affect the price**
   - Check: Plugin configuration "Apply Discounts"
   - Solution: Disable the setting if options should always have full price

4. **Recalculation is enabled**
   - Check: Plugin configuration "Adjust Order Items"
   - Solution: Select "Keep" to retain cart prices

### Problem: Option cannot be selected

**Symptom**: Checkbox is grayed out or cannot be clicked

**Possible Causes & Solutions**:

1. **Option is defined as incompatible**
   - Check: Another already selected option excludes this one
   - Solution: Remove the incompatible option first

2. **Rule disables the option**
   - Check: "Deactivate by Rule" setting of the option
   - Solution: Check rule conditions or remove rule link

3. **Option is marked as required and already selected**
   - Check: "Required" setting of the option
   - Solution: For required fields, this is the expected behavior

4. **Requirements are not met**
   - Check: Requirement fields (Parent ID, active, selected)
   - Solution: First select the parent option

### Problem: Options disappear when changing shipping method

**Symptom**: After changing the shipping method, options are no longer in the cart

**Cause**: Shipping restrictions are defined for this shipping method

**Solution**:
- Expected behavior: Options not available for the new shipping method are automatically removed
- Alternative: Adjust shipping restrictions to allow options for multiple shipping methods

### Problem: Seeder does not automatically assign options

**Symptom**: Products in the product stream do not receive the option set

**Possible Causes & Solutions**:

1. **Seeder is not active**
   - Check: `Extensions → Option Seeder` → Seeder status
   - Solution: Enable the seeder

2. **Product stream is empty or faulty**
   - Check: `Catalogues → Dynamic Product Groups` → Open the stream
   - Solution: Correct the conditions of the product stream

3. **Synchronization has not been executed yet**
   - Solution: Click "Synchronize" in the seeder list or wait for automatic synchronization

4. **Date restriction is active**
   - Check: From/To date in the seeder
   - Solution: Ensure the current date is within the defined period

### Problem: Options are displayed twice in the cart

**Symptom**: Same option appears multiple times with quantity 1

**Cause**: Plugin setting "Quantity Handling" is set to "Split"

**Solution**:
- Expected behavior with "Split" setting
- Change the setting to "Merge" under `Extensions → My Extensions → Product Additional Options Plugin → Configure → Payment Settings`

### Further Help

If your problem is not listed here:
1. Check the [Plugin Configuration](../configuration/settings.md)
2. Consult the [How-To Guides](../how_to.md) for specific workflows
3. Contact support via the [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html)

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [How-To Guides for Common Tasks](../how_to.md)
- [Changelog](../changelog.md)
