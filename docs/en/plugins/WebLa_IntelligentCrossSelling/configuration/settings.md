# Configuration Settings

This document describes all available settings for Intelligent Cross-Selling.

**Navigation**: Extensions → Intelligent Cross Selling

---

## Cross Selling Settings

These settings control the basic behavior of the plugin.

### Title

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Text field |
| **Default**  | (empty)    |
| **Required** | No         |

**Description**: The title displayed above the cross-selling section on the product detail page. This title can be defined differently for each language.

**Example Use Case**: Enter something like "You might also like" or "Matching Products" to draw customers' attention to the recommendations.

**Note**: To maintain the title in different languages, switch languages using the language selector in the upper right corner.

---

### Max Products to Show

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Number field |
| **Default**  | 10           |
| **Required** | Yes          |
| **Minimum**  | 1            |
| **Maximum**  | 100          |

**Description**: Determines how many products will be displayed as cross-selling recommendations at maximum.

**Example Use Case**: For a clean slider, 4-8 products are recommended. For a more comprehensive selection, you can set up to 100 products.

---

### Active

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables or disables intelligent cross-selling. When disabled, only native Shopware cross-selling rules will be used.

**Example Use Case**: Temporarily disable this option when adjusting weights without customers seeing incomplete recommendations.

---

### Only Show Products from Same Category

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, only products from the same category as the currently displayed product will be recommended.

**Example Use Case**: Enable this option to ensure that, for example, when viewing a t-shirt, only other t-shirts are recommended rather than pants or accessories.

---

### Show Title

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Controls whether the configured title is displayed above the cross-selling section.

**Example Use Case**: Enable this option when you want to display an inviting title like "Matching Products" above the recommendations.

---

### Hide Products Without Stock

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, only products with available stock will be shown as recommendations. Products without stock will be hidden.

**Example Use Case**: Enable this option to prevent customers from clicking on sold-out products they cannot order.

**Note**: This setting additionally respects the Shopware system setting "Hide sold-out products" (`core.listing.hideCloseoutProductsWhenOutOfStock`).

---

### Show Only Main Articles

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, only main articles (products without a parent) will be recommended. Variants will not be displayed.

**Example Use Case**: Enable this option when you want to always show only the main article for variant products, from which the customer can then select their variant.

**Note**: This option and "Show only variant articles" are mutually exclusive. Do not enable both simultaneously.

---

### Show Only Variant Articles

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, only variant articles (products with a parent) will be recommended. Main articles will not be displayed.

**Example Use Case**: Enable this option when you want to recommend specific variants, e.g., a red t-shirt in size M alongside another red product.

**Note**: This option and "Show only main articles" are mutually exclusive. Do not enable both simultaneously.

---

## Cross Selling Weights

The weights determine how strongly individual product properties are considered when calculating recommendations.

### Adding a Property

Click **"Add weight rule"** to add a new property weight.

#### Property

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Dropdown select |
| **Default**  | (no selection)  |
| **Required** | Yes             |

**Description**: Select the product property that should be considered for cross-selling calculations.

**Options**: All property groups created in your shop (e.g., Color, Material, Size, Style)

---

#### Weight

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Number field |
| **Default**  | 50           |
| **Required** | Yes          |
| **Minimum**  | 1            |
| **Maximum**  | 100          |

**Description**: Determines how strongly this property is weighted when calculating product similarity. The value is used as a percentage.

**Example Use Case**:
- **Color: 80%** – Products with the same color are strongly preferred
- **Material: 50%** – Same material is important but not decisive
- **Size: 20%** – Size has less influence on recommendations

---

## Calculation Logic

The plugin calculates a similarity score for each product compared to all other products:

1. For each configured property, it checks whether both products have the same property option
2. When matching, the weight (as a decimal) is added to the total score
3. Products can achieve a higher score through multiple matching properties
4. Products with the highest scores are shown as recommendations

**Example**:
- Product A has: Color=Red, Material=Cotton, Style=Casual
- Product B has: Color=Red, Material=Cotton, Style=Sport
- Configured weights: Color=80%, Material=50%, Style=30%
- Score for Product B: 0.8 (Color) + 0.5 (Material) = 1.3

---

## Recommended Configurations

### For Fashion/Apparel

| Setting                  | Recommended Value |
| ------------------------ | ----------------- |
| Active                   | On                |
| Max Products             | 8                 |
| Same Category Only       | On                |
| Main Articles Only       | On                |
| Hide Out of Stock        | On                |

**Weights:**
| Property | Weight |
| -------- | ------ |
| Color    | 80%    |
| Material | 50%    |
| Style    | 40%    |
| Size     | 20%    |

### For Electronics/Technology

| Setting                  | Recommended Value |
| ------------------------ | ----------------- |
| Active                   | On                |
| Max Products             | 6                 |
| Same Category Only       | Off               |
| Main Articles Only       | On                |
| Hide Out of Stock        | On                |

**Weights:**
| Property     | Weight |
| ------------ | ------ |
| Brand        | 70%    |
| Compatible   | 90%    |
| Product Line | 60%    |

### For Furniture/Home Decor

| Setting                  | Recommended Value |
| ------------------------ | ----------------- |
| Active                   | On                |
| Max Products             | 4                 |
| Same Category Only       | Off               |
| Main Articles Only       | On                |
| Hide Out of Stock        | On                |

**Weights:**
| Property | Weight |
| -------- | ------ |
| Style    | 80%    |
| Color    | 70%    |
| Material | 50%    |
| Series   | 90%    |
