# Configuring Questions

> Part of the Product Advisor Plugin - [See main usage guide](./usage.md)

## Overview

Questions are the heart of the product advisor. Each question allows the customer to specify their requirements. The answers to these questions are weighted and lead to an intelligent product recommendation.

## Prerequisites

- A created product advisor (see [Usage Guide](./usage.md))
- For property questions: Products with corresponding properties in the shop

## Creating a Question

1. Open a product advisor under `Catalogues → Product Advisor`
2. Switch to the **Questions** tab
3. Click **Add question**
4. Fill in the required fields
5. Click **Save**

---

## Basic Settings

### Title

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Required** | Yes   |
| **Translatable** | Yes |

**Description**: Internal name of the question, displayed in the progress indicator and in the admin.

**Example**: "Intended Use", "Price Range", "Colour"

---

### Question Text

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Required** | Yes   |
| **Translatable** | Yes |

**Description**: The actual question shown to the customer.

**Example**: "What will you mainly use the bike for?"

---

### Description

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Long text (HTML) |
| **Required** | No              |
| **Translatable** | Yes         |

**Description**: Additional help text below the question. Supports HTML formatting.

**Example**: "Choose the main use case. You can specify more criteria later."

---

### Position

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Required** | Yes    |
| **Default**  | 0      |

**Description**: Determines the order of questions. Lower values appear first.

**Example**: Position 1, 2, 3 for the question sequence.

---

## Question Types

The question type determines how answers are linked to products.

### Properties (TYPE_PROPERTY)

| Property | Value |
| -------- | ----- |
| **Usage** | Filter by product properties |

**Description**: Links answers with Shopware product properties. Ideal for size, material, colour, etc.

**Prerequisite**: A property group must be selected.

**Example Use Case**: "What size do you need?" → Answers: S, M, L, XL (linked to size property)

---

### Manufacturer (TYPE_MANUFACTURER)

| Property | Value |
| -------- | ----- |
| **Usage** | Filter by product manufacturer |

**Description**: Links answers with manufacturers. The customer can select preferred brands.

**Example Use Case**: "Do you have a preferred brand?" → Answers: Apple, Samsung, Sony

---

### Price (TYPE_PRICE)

| Property | Value |
| -------- | ----- |
| **Usage** | Filter by price range |

**Description**: Enables filtering by price ranges. Ideal with the "Range" format.

**Example Use Case**: "How much do you want to spend?" → Slider from 0 to 1000 Euro

---

### Text (TYPE_TEXT)

| Property | Value |
| -------- | ----- |
| **Usage** | Free text search in products |

**Description**: Enables free text search. The entered text is searched in product names and descriptions.

**Example Use Case**: "Are you looking for a specific feature?" → Input field for search term

---

### Compare (TYPE_COMPARE)

| Property | Value |
| -------- | ----- |
| **Usage** | Product comparison mode |

**Description**: Special mode for direct product comparison.

---

## Question Formats

The format determines how answers are presented to the customer.

### Buttons (FORMAT_BUTTONS)

**Display**: Clickable buttons in a grid

**Options**:
- Images per answer possible
- Description text per answer
- Optional input field below the buttons

**Ideal for**: Few, clearly distinguishable options (3-6 answers)

**Additional Options** (in question options):
- `showInputBelow`: Shows an additional text field below the buttons
- `placeholder`: Placeholder text for the input field

---

### Select (FORMAT_SELECT)

**Display**: Dropdown menu with search function

**Options**:
- Searchable with many options
- "No suitable answer" option
- "Doesn't matter to me" option

**Ideal for**: Many options (more than 6 answers)

**Additional Options** (in question options):
- `showNotFound`: Shows "No suitable answer found" option
- `showNoMatter`: Shows "Doesn't matter to me" option
- `showSearch`: Enables the search function in the dropdown

---

### Range (FORMAT_RANGE)

**Display**: Two sliders for minimum and maximum values

**Ideal for**: Price, size or value ranges

**Note**: Answers define the available ranges (price from/to).

---

### Input (FORMAT_INPUT)

**Display**: Simple text field

**Ideal for**: Free text search or specific requests

**Additional Options** (in question options):
- `placeholder`: Placeholder text for the input field

---

## Advanced Settings

### Weight

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 0      |

**Description**: Determines how strongly the answers to this question factor into the product rating. Higher values = more important question.

**Example**:
- Technical requirements: Weight 10
- Colour preference: Weight 2

This way, technical criteria are weighted more heavily than visual ones.

---

### Required Question

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | No     |

**Description**: When enabled, the customer must select an answer before proceeding. The "Skip" button is hidden.

---

### Multiple Selection

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | No     |

**Description**: Allows the customer to select multiple answers simultaneously.

**Example Use Case**: "Which features are important to you?" → Customer can select multiple.

---

### Exclude Non-Matching

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | No     |

**Description**: When enabled, products that don't match any selected answer for this question are completely removed from the results.

**Example Use Case**: Enable for "Size" so only products in the selected size are shown.

---

### Property Group

| Property     | Value                     |
| ------------ | ------------------------- |
| **Type**     | Selection (Property Group) |
| **Required** | For TYPE_PROPERTY         |

**Description**: Links the question to a Shopware property group. The answers can then be linked to specific property values.

---

## Jump Logic (Jump To)

Jump logic allows skipping questions based on previous answers.

### How It Works

1. A **jump target** (position of another question) is defined for an answer
2. If the customer selects this answer, the advisor jumps to the specified question
3. All questions in between are skipped

### Example

| Question | Position | Answer | Jump Target |
|----------|----------|--------|-------------|
| "Do you have experience?" | 1 | "Yes, lots" | 3 |
| "Do you have experience?" | 1 | "No" | (empty) |
| "Need beginner tips?" | 2 | ... | (empty) |
| "What's your budget?" | 3 | ... | (empty) |

If the customer selects "Yes, lots", they jump directly to question 3 and skip the beginner tips.

**Note**: Jump targets are configured on individual answers (see [Configuring Answers](answers.md)).

---

## Best Practices

### Question Order

1. **General questions first**: Start with broad categories
2. **Specific questions later**: Details like colour or size at the end
3. **Important questions early**: Technical requirements before preferences

### Using Weights Effectively

- Critical criteria (compatibility, size): High weight (8-10)
- Important preferences (brand, price): Medium weight (4-6)
- Optional wishes (colour, design): Low weight (1-3)

### Number of Questions

- **Optimal**: 3-7 questions
- **Minimum**: 2 questions for meaningful filtering
- **Maximum**: 10+ questions only with jump logic to avoid abandonment

---

## Related Documentation

- [Configuring Answers](answers.md)
- [Configuration Settings](../configuration/settings.md)
- [How-To Guide](../how_to.md)
