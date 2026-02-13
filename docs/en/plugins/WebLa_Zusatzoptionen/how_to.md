# How-To Guide

This guide provides step-by-step workflows for common tasks with the WebLa Additional Options Plugin.

---

## How the Plugin Works

### Data Flow Overview

The plugin extends the standard Shopware order process with configurable additional options:

```
[Customer selects product]
    → [Option sets are loaded and displayed]
    → [Customer selects options]
    → [Options are added to cart]
    → [Prices are calculated and validated]
    → [Order is created with all options]
```

**Example Flow**:

1. **Product Page**: Customer opens the detail page of a laptop
2. **Load Options**: Plugin checks if option sets are defined for this product
3. **Filtering**: Plugin filters options based on:
   - Customer's delivery country
   - Selected shipping method (if already chosen)
   - Active rules
   - Product incompatibilities
4. **Display**: Filtered options are displayed in accordion containers
5. **Selection**: Customer selects "2-Year Warranty" and "Assembly Service"
6. **Cart**: Customer clicks "Add to Cart"
   - Main product is added
   - Selected options are added as child items
7. **Price Calculation**: Plugin calculates total price:
   - Laptop: €999.00
   - + 2-Year Warranty: €49.90
   - + Assembly Service: €29.90
   - = Total: €1,078.80
8. **Checkout**: Customer completes order
9. **Order**: All items (main product + options) are saved in the order

**Special Features**:
- Options can be changed in the cart at any time
- When changing shipping method, options are automatically filtered again
- When changing delivery country, prices are automatically adjusted
- Required options are validated and prevent checkout if not selected

---

## Common Workflows

### How to: Set Up Simple Additional Options

**Goal**: Add additional options to a product (e.g., warranty extension)

**Time Required**: 5-10 minutes

**Prerequisites**:
- Plugin is installed and activated
- You have admin access to Shopware
- Products are already created

**Steps**:

1. **Open Product**
   - Navigate to: `Catalogues → Products`
   - Select the desired product from the list

2. **Switch to Additional Options Tab**
   - Click on the **Additional Options** tab in the product view
   - If the tab is not visible: Check plugin installation and clear cache

3. **Create Option Set**
   - Click **Add Option Set**
   - Enter a name: e.g., "Warranty Extension"
   - Description (optional): e.g., "Extend your warranty by additional years"
   - Type: Select **Products**
   - Multiple Selection: **Disabled** (only one warranty option should be selectable)
   - Click **Save**

4. **Add Options**
   - In the newly created set: Click **Add Option**
   - Select an existing product (e.g., "2-Year Warranty - €49.90")
   - Enable **Active**
   - Set **Sorting** to 1
   - Click **Save**
   - Repeat the process for additional options (e.g., "3-Year Warranty - €79.90") with sorting 2

5. **Clear Cache**
   - Navigate to: `Settings → System → Caches & Indexes`
   - Click **Clear Cache**

6. **Test**
   - Open the product page in the storefront
   - Check if the options are displayed
   - Test the selection and add the product to the cart
   - Check in the cart if options are displayed correctly

**Result**: The product now shows an option set "Warranty Extension" with selectable warranty options. Customers can choose one option and the price is automatically added.

**Troubleshooting**:
- Options not visible? → Clear cache and reload page
- Prices missing? → Check if the selected product has a price
- Set does not appear? → Ensure at least one option is active

---

### How to: Set Up Country-Specific Prices

**Goal**: Set different prices for options depending on delivery country

**Time Required**: 10-15 minutes

**Prerequisites**:
- Option set is already created
- Options are added
- Multiple countries are enabled in the sales channel

**Steps**:

1. **Open Option**
   - Navigate to: `Catalogues → Products → [Product] → Additional Options`
   - Open the option set
   - Click on the option for which you want to set country-specific prices

2. **Add Country Configuration**
   - Scroll to the **Country Configuration** section
   - Click **Add Country**

3. **Define Country and Price**
   - Select the first country (e.g., **Germany**)
   - Enter the price: e.g., €29.90
   - Click **Save**

4. **Add More Countries**
   - Repeat steps 2-3 for additional countries:
     - **Austria**: €49.90
     - **Switzerland**: 59.90 CHF
     - **Netherlands**: €34.90

5. **Keep Default Price**
   - The default product price applies to all countries for which NO country-specific price is defined
   - If you want the option to be ONLY available in certain countries:
     - Enable **Only available in configured countries**

6. **Test**
   - Open the product page in the storefront
   - Change the delivery country in the customer account or during checkout
   - Check if the option price adjusts accordingly

**Result**: The option automatically displays the correct price based on the customer's delivery country. When changing the delivery country, the price is updated immediately.

**Troubleshooting**:
- Price does not change? → Clear cache and reload
- Wrong price? → Check the currency setting of the delivery country
- Option not available? → "Only in configured countries" is enabled - add the country

---

### How to: Automatic Assignment with Product Streams

**Goal**: Automatically assign option set to all products in a category

**Time Required**: 15-20 minutes

**Prerequisites**:
- Option set is already created
- Products are categorized
- You understand the basics of product streams

**Steps**:

1. **Create Product Stream** (if not already available)
   - Navigate to: `Catalogues → Dynamic Product Groups`
   - Click **New Dynamic Product Group**
   - Enter a name: e.g., "Electronics Products over €500"
   - Add conditions:
     - Condition 1: Category = "Electronics"
     - Condition 2: Price > €500.00
   - Click **Save**
   - Check the preview to see if the correct products are found

2. **Create Option Seeder**
   - Navigate to: `Extensions → Option Seeder`
   - Click **Add Seeder**

3. **Configure Seeder**
   - **Name**: "Warranty for Electronics"
   - **Option Set**: Select the desired option set (e.g., "Warranty Extension")
   - **Product Stream**: Select the stream created in step 1
   - **Active**: Enable the seeder
   - **Priority**: 1 (lower number = higher priority)
   - **Date (From)**: Leave empty or set a start date
   - **Date (To)**: Leave empty or set an end date for time-limited promotions
   - Click **Save**

4. **Start Synchronization**
   - **Manual**: Click **Synchronize** in the seeder list for the created seeder
   - **Automatic**: Wait for the next automatic synchronization (runs hourly)
   - Status changes to "Processing" and after completion to "Done"

5. **Check Result**
   - Open a product that is included in the product stream
   - Switch to the **Additional Options** tab
   - The option set should now be automatically assigned
   - Check 2-3 more products to be sure

6. **Storefront Test**
   - Open a product in the storefront
   - Check if the options are displayed correctly
   - Test the functionality

**Result**: The option set is automatically assigned to all products that meet the product stream conditions. New products that later meet the conditions receive the set at the next synchronization.

**Troubleshooting**:
- Seeder not running? → Check if "Active" is enabled
- Products do not receive the set? → Check the product stream for correct conditions
- Synchronization takes long? → Normal for large product catalogs (several thousand products)
- Set assigned twice? → Check if not assigned both manually AND via seeder

---

### How to: Create Dependent Options (Multi-Level)

**Goal**: Create options that only appear when a parent option is selected

**Time Required**: 15-20 minutes

**Prerequisites**:
- Option set is created
- At least one option is available

**Example Scenario**:
```
Level 1: "Would you like a warranty extension?" (Yes/No)
  └─ Level 2: "Choose the warranty duration" (2 Years / 3 Years)
      └─ Level 3: "With On-Site Service?" (Yes / No)
```

**Steps**:

1. **Level 1: Create Main Option**
   - Navigate to: `Catalogues → Products → [Product] → Additional Options`
   - Open the option set
   - Click **Add Option**
   - Select a product: e.g., "Warranty Basic" (Price: €0.00)
   - **Active**: Enabled
   - **Auto-Selected**: Disabled
   - Note the **ID** of this option (will be needed later)
   - Click **Save**

2. **Level 2: Create Dependent Option**
   - Click **Add Option** again
   - Select a product: e.g., "2-Year Warranty" (Price: €49.90)
   - **Active**: Enabled
   - Scroll to the **Requirements** section
   - **Requirement - Parent ID**: Enter the ID from step 1
   - **Requirement - Active**: Enabled (option must be active)
   - **Requirement - Selected**: Enabled (parent option must be selected)
   - Click **Save**

3. **Add Another Level-2 Option**
   - Repeat step 2 for "3-Year Warranty" (Price: €79.90)
   - Use the same Parent ID
   - Click **Save**

4. **Level 3: Even Deeper Dependency**
   - Note the ID of "2-Year Warranty" from step 2
   - Click **Add Option**
   - Select a product: e.g., "On-Site Service" (Price: €39.90)
   - **Active**: Enabled
   - **Requirement - Parent ID**: Enter the ID of "2-Year Warranty"
   - **Requirement - Selected**: Enabled
   - Click **Save**

5. **Test Logic in Backend**
   - The option hierarchy should now look like this:
     ```
     Warranty Basic (ID: 123)
       ├─ 2-Year Warranty (ID: 124) [Parent: 123]
       │   └─ On-Site Service (ID: 126) [Parent: 124]
       └─ 3-Year Warranty (ID: 125) [Parent: 123]
     ```

6. **Storefront Test**
   - Open the product page in the storefront
   - Initially only "Warranty Basic" should be visible
   - **Test 1**: Select "Warranty Basic"
     - → "2-Year Warranty" and "3-Year Warranty" are displayed
   - **Test 2**: Select "2-Year Warranty"
     - → "On-Site Service" is displayed
   - **Test 3**: Deselect "2-Year Warranty"
     - → "On-Site Service" disappears again

**Result**: Options appear step-by-step based on the customer's selection. This reduces complexity and guides the customer through the selection process.

**Troubleshooting**:
- Dependent option does not appear? → Check the Parent ID (must match exactly)
- Option always appears? → "Requirement - Selected" must be enabled
- Wrong hierarchy? → Note all IDs and check the parent links

---

### How to: Define Incompatible Options

**Goal**: Prevent certain options from being selected simultaneously

**Time Required**: 5-10 minutes

**Prerequisites**:
- Option set with multiple options is available

**Steps**:

1. **Open First Option**
   - Navigate to: `Catalogues → Products → [Product] → Additional Options`
   - Open the option set (e.g., "Warranty Extension")
   - Click on the first option (e.g., "2-Year Warranty")

2. **Define Incompatible Products**
   - Scroll to the **Incompatible Products** section
   - Click **Add Product**
   - Select the products that should not be selectable simultaneously:
     - e.g., "3-Year Warranty" (ID: xyz)
   - Click **Save**

3. **Set Up Mutual Incompatibility**
   - Now open the second option (e.g., "3-Year Warranty")
   - Scroll to the **Incompatible Products** section
   - Click **Add Product**
   - Select the first option: "2-Year Warranty"
   - Click **Save**
   - **Important**: Incompatibility must be defined in BOTH directions

4. **Adjust Option Set**
   - Ensure the set is set to **Multiple Selection**
   - With single selection (radio buttons), incompatibility is not necessary

5. **Test**
   - Open the product page in the storefront
   - **Test 1**: Select "2-Year Warranty"
     - → "3-Year Warranty" is grayed out
   - **Test 2**: Remove "2-Year Warranty"
     - → "3-Year Warranty" becomes selectable again
   - **Test 3**: Select "3-Year Warranty"
     - → "2-Year Warranty" is grayed out

**Result**: Customers can only select one of the incompatible options. When they select one option, the incompatible options are automatically grayed out and cannot be selected.

**Troubleshooting**:
- Incompatibility only works one-way? → Check if both directions are defined
- Options are always grayed out? → Check if too many incompatibilities were accidentally defined
- No effect? → Clear cache and reload page

---

### How to: Set Up Quantity-Based Prices

**Goal**: Apply discounts for higher quantities of the main product to the options

**Time Required**: 10-15 minutes

**Prerequisites**:
- Option set with options is available
- You understand quantity tiering in Shopware

**Example Scenario**:
```
Customer buys 1-5 laptops    → Warranty costs €49.90 per piece
Customer buys 6-10 laptops   → Warranty costs €44.90 per piece
Customer buys 11+ laptops    → Warranty costs €39.90 per piece
```

**Steps**:

1. **Open Option**
   - Navigate to: `Catalogues → Products → [Product] → Additional Options`
   - Open the option set
   - Click on the option for which you want to set tiered pricing

2. **Add Price Tiering - Tier 1**
   - Scroll to the **Price Tiering** section
   - Click **Add Price**
   - **From Quantity**: 1
   - **To Quantity**: 5
   - **Price**: €49.90
   - Click **Save**

3. **Add More Tiers - Tier 2**
   - Click **Add Price** again
   - **From Quantity**: 6
   - **To Quantity**: 10
   - **Price**: €44.90
   - Click **Save**

4. **Add More Tiers - Tier 3**
   - Click **Add Price** again
   - **From Quantity**: 11
   - **To Quantity**: Leave empty (means: from 11 without upper limit)
   - **Price**: €39.90
   - Click **Save**

5. **Check Overview**
   - The tiers should now be complete:
     ```
     Tier 1:  1-5 pieces   → €49.90
     Tier 2:  6-10 pieces  → €44.90
     Tier 3:  11+ pieces   → €39.90
     ```

6. **Test**
   - Open the product page in the storefront
   - **Test 1**: Add 3 laptops with warranty to cart
     - → Price per warranty: €49.90
   - **Test 2**: Increase quantity to 7 laptops
     - → Price per warranty: €44.90
   - **Test 3**: Increase quantity to 12 laptops
     - → Price per warranty: €39.90

**Result**: Option prices automatically adjust to the quantity of the main product. Customers automatically receive discounts at higher quantities.

**Troubleshooting**:
- Price does not change? → Clear cache and reload cart
- Wrong price? → Check quantity ranges for overlaps or gaps
- Tiers trigger too early/late? → Check "From/To Quantity" values

---

### How to: Set Up Required Options

**Goal**: Force customers to select an option before they can purchase the product

**Time Required**: 5 minutes

**Prerequisites**:
- Option set is available
- Set is set to **Single Selection** (not multiple selection)

**Steps**:

1. **Open Option**
   - Navigate to: `Catalogues → Products → [Product] → Additional Options`
   - Open the option set
   - Click on the option that should be required

2. **Enable Required Field**
   - Enable the checkbox **Required**
   - Optional: Also enable **Auto-Selected** (recommended)
   - Click **Save**

3. **Adjust Set Settings**
   - Open the option set settings
   - Enable **Container Open**
   - This ensures required options are immediately visible
   - Click **Save**

4. **Test - Validation**
   - Open the product page in the storefront
   - The required option should be pre-selected and grayed out
   - Try to add the product to cart WITHOUT selecting another option
   - It should work because the required option is already selected
   - Select another option (with single selection, the required option is deselected)
   - Now try to add the product to cart
   - An error message should appear: "Please select an option from the set..."

5. **Test Cart Validation**
   - Add the product with a selected option to the cart
   - Try to remove the option in the cart
   - A validation message should appear

**Result**: Customers must select an option from the set before they can purchase the product. This is useful for legally required options or product configurations.

**Troubleshooting**:
- Validation does not work? → Check if "Required" is really enabled
- Option can still be deselected? → Check if set is on "Single Selection"
- Error message does not appear? → Clear cache and test again

---

## Advanced Workflows

### Time-Controlled Options with Seeder

**Complexity**: Medium

**When to Use**: Seasonal offers or time-limited services (e.g., "Christmas Gift Wrapping only in December")

**Steps**:

1. Create an option set with time-limited options
2. Create an Option Seeder under `Extensions → Option Seeder`
3. Select the option set and a product stream
4. Set **Date (From)**: e.g., 01.12.2026
5. Set **Date (To)**: e.g., 31.12.2026
6. Enable the seeder
7. The seeder automatically assigns the options only in the defined period
8. After the date expires, the options are automatically removed again

**Note**: Synchronization occurs automatically. Plan the start time in advance.

---

### Rule-Based Dynamic Pricing

**Complexity**: High

**When to Use**: Customer group-specific prices or cart value-dependent discounts

**Steps**:

1. Create a rule under `Settings → Shopware → Rules`:
   - Name: e.g., "Free Service from €1,000 Cart Value"
   - Condition: "Cart Value >= €1,000"
2. Create a second rule:
   - Name: e.g., "Disable Service under €1,000"
   - Condition: "Cart Value < €1,000"
3. Link the second rule with an option:
   - Open the option in edit mode
   - **Deactivate by Rule**: Select "Disable Service under €1,000"
4. Create a promotion for the free service:
   - `Marketing → Promotions`
   - Create new promotion
   - Rule: "Free Service from €1,000 Cart Value"
   - Discount: 100% on specific product (service option)
5. Test with different cart values

---

## Quick Reference

| Task                                | Key Steps                                                                 | Required Settings                            |
| ----------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------- |
| Add simple options                  | Open product → Additional Options tab → Create set → Add options          | Active, Sorting                              |
| Country-specific prices             | Open option → Country configuration → Add country + price                 | Country, Price                               |
| Automatic assignment                | Create product stream → Create seeder → Synchronize                       | Active, Product Stream                       |
| Dependent options                   | Create parent option → Link child option with Parent ID                   | Parent ID, Requirement Selected              |
| Incompatible options                | Option A → Add incompatibility to B → Option B → Add incompatibility to A | Incompatible Products (both directions)      |
| Quantity tier pricing               | Open option → Price tiering → Multiple tiers with From/To quantity        | From/To Quantity, Price                      |
| Required options                    | Open option → Enable "Required" → Set "Container Open"                    | Required, Container Open                     |
| Shipping restrictions               | Open option → Shipping methods → Select allowed methods                   | Shipping Methods                             |

---

## Best Practices

1. **Clear Naming**: Use meaningful names for sets and options (e.g., "2-Year Warranty Extension" instead of "Option 1")

2. **Test Before Going Live**: Thoroughly test all options in the storefront before releasing them to customers

3. **Cache Management**: Always clear the cache after changes to options or seeders

4. **Use Quantity Tiering Wisely**: Define gapless quantity ranges to avoid price jumps

5. **Visual Hierarchy**: Use sorting to display more important options higher up

6. **Validate Product Streams**: Check product streams in preview before using them in seeders

7. **Document Incompatibilities**: Keep track of which options are mutually exclusive - this helps with future adjustments

8. **Use Required Fields Sparingly**: Only use required fields when truly necessary - too many required fields can deter customers

9. **Container Opening**: Only enable "Container Open" for important sets (required fields) - too many open containers look cluttered

10. **Communicate Shipping Restrictions**: Inform customers in the set description if options are shipping-method-dependent

## What to Avoid

- ❌ **Too many options per set**: More than 5-7 options become confusing - better split into multiple sets
- ❌ **Overlapping quantity tiers**: Avoid gaps or overlaps in quantity ranges (e.g., 1-5 and 4-10)
- ❌ **Circular dependencies**: Option A must not depend on Option B if Option B depends on Option A
- ❌ **Missing reverse direction for incompatibilities**: If Option A is incompatible with B, B must also be incompatible with A
- ❌ **Not clearing cache**: After changes ALWAYS clear the cache, otherwise changes will not be visible
- ❌ **Untested product streams**: Always test product streams before using them in seeders - faulty streams can lead to incorrect assignments
- ❌ **Price €0.00 for free options without rule**: Better: Create a rule for "free" - this keeps it traceable why the option is free
