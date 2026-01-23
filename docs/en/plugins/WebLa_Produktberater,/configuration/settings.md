# Configuration Settings

This document describes all available settings for the Product Advisor.

**Navigation**: `Catalogues → Product Advisor → [Select advisor]`

---

## Basic Settings

### Title

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | (empty) |
| **Required** | Yes   |
| **Translatable** | Yes |

**Description**: The name of the product advisor, displayed in the admin and optionally in the storefront.

**Example Use Case**: "Bike Finder", "Laptop Advisor", "Gift Finder"

---

### Active

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | No     |
| **Required** | No     |

**Description**: Activates or deactivates the product advisor. Only active advisors are displayed in the storefront.

**Example Use Case**: Temporarily deactivate an advisor while you're revising it, without deleting it.

---

## Product Selection

### Dynamic Product Group

| Property     | Value                  |
| ------------ | ---------------------- |
| **Type**     | Selection (Product Stream) |
| **Default**  | (none)                 |
| **Required** | No                     |

**Description**: Select a Dynamic Product Group (product stream) to pre-filter the products considered in the advisor. Only products matching the product group criteria will be recommended to the customer.

**Example Use Case**:
- Only show products in stock
- Only include products from a specific category
- Only consider products above a certain price

**Note**: Product groups are created and managed under `Catalogues → Dynamic Product Groups`.

---

### Product Sorting

| Property     | Value                |
| ------------ | -------------------- |
| **Type**     | Selection (Sorting)  |
| **Default**  | (none)               |
| **Required** | No                   |

**Description**: Choose a default sorting method for the product results. This sorting is applied when the customer doesn't choose their own sorting.

**Options**: Depending on the sortings configured in Shopware (e.g., Price ascending, Name A-Z, Newest first).

---

## Display Options

### Design

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Selection |
| **Default**  | Default   |
| **Required** | No        |

**Description**: Determines the layout of the product advisor.

**Options**:
- `Default`: Embedded presentation within the page
- `Full Page`: Full-screen presentation for an immersive experience

**Example Use Case**: Use "Full Page" for complex advisors with many questions to avoid distracting the customer.

---

### Display Type

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Selection |
| **Default**  | Text      |
| **Required** | No        |

**Description**: Determines how answers are displayed by default.

**Options**:
- `Text`: Text-only buttons
- `Media`: Answers with images (requires uploaded media for answers)
- `Select`: Dropdown menu
- `Colour`: Colour swatches (for colour selection questions)

**Example Use Case**: Choose "Media" when advising on visual products (clothing, furniture) where images facilitate selection.

---

### Number of Suggestions

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 1      |
| **Required** | No     |

**Description**: Number of products highlighted as main recommendations. These products are displayed prominently above the regular product list.

**Example Use Case**: Set the value to 3 to present the three best matches as top recommendations.

---

### Sorting Type

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Selection |
| **Default**  | Score     |
| **Required** | No        |

**Description**: Determines how result products are sorted.

**Options**:
- `Alphanumeric`: Alphabetical sorting by product name
- `Position`: Sorting by match score (default)

**Example Use Case**: Keep "Position" for relevance-based sorting based on weighted answers.

---

## Advanced Options

### Live Update

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | No     |
| **Required** | No     |

**Description**: When enabled, matching products are updated immediately after each answered question. The customer sees in real-time how their answers affect the product selection.

**Example Use Case**: Enable this option for an interactive advisor where customers want to see immediately how their choices influence the results.

**Note**: When live update is disabled, results are only shown after all questions have been answered.

---

### Exclude Non-Matching Products

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | No     |
| **Required** | No     |

**Description**: When enabled, only products matching at least one answer are displayed. Products without any match are completely hidden.

**Example Use Case**: Enable this option when you want strict filtering and only want to show exactly matching products.

**Note**: When disabled, all products are shown but sorted by relevance (better matching products appear higher).

---

### End Text

| Property     | Value       |
| ------------ | ----------- |
| **Type**     | Long text   |
| **Default**  | (predefined) |
| **Required** | No          |
| **Translatable** | Yes     |

**Description**: Text displayed after completing all questions, above the product recommendations.

**Default text**: "Done! We have found the right product for you. If you're not quite sure yet, you'll find more suggestions below. If you want to change your answers, simply go back."

**Example Use Case**: Customise the text to match your brand voice or add a call-to-action.

---

## Manufacturer Weighting

Under the "Manufacturers" tab, you can link manufacturers to the advisor and assign them a weighting.

### Add Manufacturer

| Property     | Value                 |
| ------------ | --------------------- |
| **Type**     | Selection (Manufacturer) |
| **Required** | No                    |

**Description**: Select manufacturers that should be preferred in the results.

### Weight

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 0      |
| **Required** | No     |

**Description**: Higher values mean products from this manufacturer appear higher in results.

**Example Use Case**: Set a higher weighting for your own brands to display them preferentially.

---

## Recommended Configurations

### For Simple Product Advice

| Setting                      | Recommended Value |
| ---------------------------- | ----------------- |
| Design                       | Default           |
| Live Update                  | Off               |
| Exclude Non-Matching Products | Off              |
| Number of Suggestions        | 1                 |

### For Interactive Product Finders

| Setting                      | Recommended Value |
| ---------------------------- | ----------------- |
| Design                       | Default           |
| Live Update                  | On                |
| Exclude Non-Matching Products | Off              |
| Number of Suggestions        | 3                 |

### For Strict Filtering

| Setting                      | Recommended Value |
| ---------------------------- | ----------------- |
| Design                       | Default           |
| Live Update                  | On                |
| Exclude Non-Matching Products | On               |
| Number of Suggestions        | 1                 |

---

## Related Documentation

- [Configuring Questions](../usage/questions.md)
- [Configuring Answers](../usage/answers.md)
- [How-To Guide](../how_to.md)
