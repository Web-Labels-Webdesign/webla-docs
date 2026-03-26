# Bundle Groups

> Part of the Ultimate Bundle Plugin - [See main usage guide](./usage.md)

## Overview

Bundle groups are the building blocks of a bundle. Each group contains a selection of products for your customers to choose from. A bundle can have any number of groups - for example "Choose your case", "Choose your charging cable" and "Choose your headphones".

## Prerequisites

- A bundle must already be created
- Products used in groups must exist in the shop

## Detailed Usage

### Creating a Group

1. Open a bundle under **Catalogues → Bundles → [Bundle Name]**
2. Scroll to the **Groups** section
3. Click **Add**
4. A new row appears in the group table
5. Enter a **title** (e.g. "Choose your case")
6. Click the **Edit** button to open the group detail modal

### Group Types

In the group detail modal, you can choose the **type** of product source:

**Products** (manual):
- You select products individually via the product search
- Suitable for small, curated selections
- Full control over displayed products

**Product stream**:
- Products are loaded dynamically from a product stream
- Ideal for large or changing assortments
- Select an existing product stream from the dropdown

**Category**:
- All products from a specific category are included
- Including all subcategories
- Suitable for category-based bundles

### Optional Groups

When you mark a group as **Optional**, customers can deselect this group. In the storefront, a checkbox appears next to the group, allowing customers to include or exclude it.

**When optional groups make sense**:
- For accessory bundles where not every customer needs all parts
- For "Choose your extras" scenarios
- When you want to provide maximum flexibility for the customer

**Note**: Optional groups that the customer deselects are not included in the discount calculation.

### Quantity Selection per Group

When you enable **Allow quantity selection**, customers can set the quantity for the products in this group individually. A number field appears next to the group product.

**Configuration options**:
- **Allow quantity selection**: Enables the quantity field (default quantity: 1)
- **Maximum quantity**: Limits the selectable quantity (e.g. maximum 5 items)

**Example use case**: In an office supplies bundle, the "Printer paper" group could have quantity selection with a maximum of 10, while the "Printer" group doesn't need quantity selection.

### Check With Accessories

The **Check with accessories** option causes the bundle to only be displayed if a product from the group also exists in the cart's accessory/cross-selling list. This is an advanced feature for specific compatibility scenarios.

### Deleting Groups

1. Select the desired groups using the checkbox column
2. Click **Delete** above the table
3. Save the bundle

## Examples

### Example 1: Complete Smartphone Bundle

**Goal**: Create a bundle with optional accessories for a smartphone.

**Groups**:
1. **Protective case** (Type: Products, Optional: No)
   - 3 different cases to choose from
2. **Screen protector** (Type: Products, Optional: Yes)
   - 2 screen protector films to choose from
3. **Charging cable** (Type: Products, Optional: Yes, Quantity selection: Yes, Max: 3)
   - USB-C cable, Lightning cable

**Result**: Customers must choose a case but can optionally add screen protector and charging cable. For the charging cable, they can order up to 3 items.

### Example 2: Category-Based Bundle

**Goal**: A bundle that automatically offers all products from a category as options.

**Groups**:
1. **Matching t-shirt** (Type: Category → "Men's T-Shirts", Optional: No)
2. **Matching trousers** (Type: Category → "Men's Trousers", Optional: No)

**Result**: When new products are added to the category, they automatically appear as bundle options. Remember to rebuild the index after category changes.

## FAQ

**Q: How many groups can a bundle have?**
A: There is no technical limit. However, note that too many groups can be overwhelming for the customer.

**Q: Can a product be in multiple groups?**
A: Yes, the same product can appear in different groups of different bundles.

**Q: What happens when a group product is sold out?**
A: If the "Hide products without stock" setting is enabled in the bundle, the product is automatically hidden. Otherwise, it is displayed but may not be orderable.

**Q: Does the index need to be updated after every group change?**
A: Not necessarily for manually assigned products. For product streams and categories, the index should be updated regularly to include new products.
