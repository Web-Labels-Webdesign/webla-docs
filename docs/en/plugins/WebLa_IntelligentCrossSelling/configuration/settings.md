# Configuration Settings

This document describes all available settings for Intelligent Cross-Selling.

---

## Plugin Configuration

**Navigation**: Extensions → My Extensions → Intelligent Cross Selling → Configure

These are global plugin settings that affect all cross-selling configurations.

### Show All Matching Configurations

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, products that match multiple cross-selling configurations will show all of them. When disabled, only the highest priority configuration is displayed.

**Example Use Case**: Enable this option when you have multiple cross-selling strategies (e.g., one for color matching, another for material matching) and want to show all relevant recommendations to customers.

### Show Native Cross-Selling As Well

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Controls what happens to cross-selling that you maintain directly on the product (Catalogues → Products → Cross Selling). When enabled, those sliders are shown in addition to the intelligent recommendations. When disabled, they are only shown if the intelligent recommendations return no products.

**Example Use Case**: Turn this off if you want the intelligent recommendations to fully take over the product detail page, and only fall back to your manually maintained cross-selling where the plugin finds no matches. Leave it on if manually curated sets (e.g. accessories, spare parts) must always stay visible.

---

## Cross-Selling Configurations

**Navigation**: Extensions → Intelligent Cross Selling

Starting with version 5.1.0, you can create multiple cross-selling configurations, each with its own settings, property weights, and assignment rules.

### Configuration List

The main page shows all your cross-selling configurations with:
- **Title**: The name of the configuration
- **Assignment Type**: Global, Category, or Dynamic Product Group
- **Priority**: Determines which configuration wins when a product matches multiple
- **Active**: Whether this configuration is enabled

Click on a configuration to edit it, or use **"Add configuration"** to create a new one.

---

## Cross Selling Settings

These settings control the behavior of each individual cross-selling configuration.

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

**Description**: Enables or disables this cross-selling configuration. When disabled, this configuration will not be used for recommendations.

**Example Use Case**: Temporarily disable this option when adjusting weights without customers seeing incomplete recommendations.

---

### Priority

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Number field |
| **Default**  | 0            |
| **Required** | No           |
| **Minimum**  | 0            |

**Description**: Determines the order in which configurations are evaluated. Higher priority configurations are checked first. When a product matches multiple configurations, the one with the highest priority wins (unless "Show all matching configurations" is enabled).

**Example Use Case**: Set priority 100 for category-specific rules, 50 for product stream rules, and 0 for global fallback rules.

---

### Assignment Type

| Property     | Value                                          |
| ------------ | ---------------------------------------------- |
| **Type**     | Select                                         |
| **Default**  | Global                                         |
| **Options**  | Global, Category, Dynamic Product Group        |
| **Required** | Yes                                            |

**Description**: Determines which products this configuration applies to.

- **Global**: This configuration applies to all products (fallback)
- **Category**: This configuration applies only to products in selected categories
- **Dynamic Product Group**: This configuration applies only to products matching selected dynamic product groups (Product Streams)

**Example Use Case**: Create a "Fashion" configuration with color-heavy weights assigned to your Clothing category, and a "Technical" configuration with brand-heavy weights assigned to your Electronics category.

---

### Categories (when Assignment Type = Category)

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Multi-select       |
| **Default**  | (empty)            |
| **Required** | When type=Category |

**Description**: Select which categories this configuration should apply to. Products in these categories (including subcategories) will use this cross-selling configuration.

---

### Dynamic Product Groups (when Assignment Type = Dynamic Product Group)

| Property     | Value                       |
| ------------ | --------------------------- |
| **Type**     | Multi-select                |
| **Default**  | (empty)                     |
| **Required** | When type=Dynamic Product Group |

**Description**: Select which dynamic product groups (Product Streams) this configuration should apply to. Products matching these streams will use this cross-selling configuration.

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

### Show One Variant Per Parent

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, at most one variant per parent product will appear in the cross-selling results. The highest-scoring variant is selected; if a storefront main variant is configured for the parent, that variant is preferred.

**Example Use Case**: Enable this option when your catalog has many variants per product (e.g., sizes or colors) and you want to avoid showing the same base product multiple times under different variant IDs. Customers see one representative variant and can switch to their preferred option on the product page.

**Note**: This option works independently of "Show only main articles" and "Show only variant articles". It does not filter by variant type — it only deduplicates so each parent appears once.

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
