# Configuring Answers

> Part of the Product Advisor Plugin - [See main usage guide](./usage.md)

## Overview

Answers are the options presented to the customer for each question. Each answer can be linked to product properties, manufacturers or price ranges to control product filtering.

## Prerequisites

- A created product advisor with at least one question
- For property answers: Products with corresponding properties in the shop

## Creating an Answer

1. Open a question under `Catalogues → Product Advisor → [Advisor] → Questions → [Question]`
2. Switch to the **Answers** tab
3. Click **Add answer**
4. Fill in the required fields
5. Click **Save**

---

## Basic Settings

### Answer Text

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Required** | Yes   |
| **Translatable** | Yes |

**Description**: The text displayed to the customer as an answer option.

**Example**: "Red", "Under 100 Euro", "For beginners"

---

### Description

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Long text (HTML) |
| **Required** | No              |
| **Translatable** | Yes         |

**Description**: Additional explanation for the answer. Displayed below the answer text or as a tooltip depending on the format.

**Example**: "Ideal for the daily commute to work"

---

### Position

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Required** | Yes    |
| **Default**  | 0      |

**Description**: Determines the order of answers. Lower values appear first.

---

## Visual Display

### Image/Media

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Media selection |
| **Required** | No              |

**Description**: An image displayed next to or instead of the answer text. Particularly effective with visual display type.

**Example Use Case**: Colour swatch images for colour selection, product images for categories

**Recommended Size**: Square images (e.g., 200x200 pixels) for consistent display

---

### CSS Class

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Required** | No    |

**Description**: Custom CSS class for individual styling of this answer.

**Example Use Case**: "highlight-answer" for special emphasis

---

## Product Filtering

The filter options depend on the **question type** of the parent question.

### For Property Questions (TYPE_PROPERTY)

#### Property Option

| Property     | Value                      |
| ------------ | -------------------------- |
| **Type**     | Selection (Property value) |
| **Required** | Yes (for TYPE_PROPERTY)    |

**Description**: Links the answer to a specific property value. Only products with this property value are filtered.

**Prerequisite**: The question must be linked to a property group.

**Example**:
- Question "What colour?" (Property group: Colour)
- Answer "Red" → Property option: "Red" from the colours group

---

### For Manufacturer Questions (TYPE_MANUFACTURER)

#### Manufacturer

| Property     | Value                    |
| ------------ | ------------------------ |
| **Type**     | Selection (Manufacturer) |
| **Required** | Yes (for TYPE_MANUFACTURER) |

**Description**: Links the answer to a manufacturer. Only products from this manufacturer are filtered.

**Example**:
- Question "Which brand do you prefer?"
- Answer "Apple" → Manufacturer: Apple

---

### For Price Questions (TYPE_PRICE)

#### Price From

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Required** | No     |

**Description**: Minimum price for the price range.

#### Price To

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Required** | No     |

**Description**: Maximum price for the price range.

**Example**:
- Answer "Budget" → Price from: 0, Price to: 50
- Answer "Mid-range" → Price from: 50, Price to: 150
- Answer "Premium" → Price from: 150, Price to: (empty)

---

## Jump Logic

### Jump To (Jump Target)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Required** | No     |

**Description**: Position of the question to jump to when this answer is selected. All questions between the current and target question are skipped.

**Important Rules**:
- The value must be the **position** of an existing question
- Invalid values (null, 0, negative) are ignored
- With multiple selection, the first valid jump target is used

### Example: Beginners vs Experts

**Question 1: "How much experience do you have?" (Position: 1)**

| Answer | Jump To |
|--------|---------|
| "No experience" | (empty) |
| "Some experience" | (empty) |
| "Lots of experience" | 4 |

**Question 2: "Do you need an introduction?" (Position: 2)**
- Only displayed if "Lots of experience" was NOT selected

**Question 3: "Which beginner features are important?" (Position: 3)**
- Only displayed if "Lots of experience" was NOT selected

**Question 4: "What's your budget?" (Position: 4)**
- Always displayed (directly after question 1 for "Lots of experience")

---

## Advanced Options

### Operator (for advanced filtering)

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Required** | No    |

**Description**: Comparison operator for advanced filter logic.

### Operator Value

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Required** | No    |

**Description**: Value to compare against with the operator.

---

## Best Practices

### Structuring Answers

1. **Clear, unambiguous texts**: Avoid ambiguity
2. **Consistent length**: Similarly long answer texts for better appearance
3. **Logical order**: From general to specific or ascending/descending

### Using Images Effectively

- **Uniform size**: All images the same size for consistent display
- **Meaningful images**: The image should visually explain the answer
- **Optimised file size**: Compressed images for fast loading times

### Using Jump Logic Wisely

| Scenario | Recommendation |
|----------|----------------|
| Distinguish beginners/experts | Experts skip introductory questions |
| Product category selection | Different detail questions per category |
| Budget dependency | Skip premium questions for low budget |

### Defining Price Ranges

- **Non-overlapping**: Ranges should not overlap
- **Gapless**: All prices should be covered
- **Sensible graduation**: Ranges adapted to your product range

**Example for a shop with products from 10-500 Euro:**

| Answer | Price From | Price To |
|--------|------------|----------|
| Budget | 0 | 50 |
| Standard | 50 | 150 |
| Premium | 150 | 300 |
| Luxury | 300 | (empty) |

---

## Avoiding Common Mistakes

### Missing Property Link

**Problem**: Answer shows no products

**Solution**: Ensure the property option is correctly linked and products have this property.

### Invalid Jump Targets

**Problem**: Advisor behaves unexpectedly

**Solution**: Check whether the jump target corresponds to the correct position and the target question exists.

### Overlapping Price Ranges

**Problem**: Products appear multiple times

**Solution**: Define price ranges without overlap (e.g., 0-49, 50-99 instead of 0-50, 50-100).

---

## Related Documentation

- [Configuring Questions](questions.md)
- [Configuration Settings](../configuration/settings.md)
- [How-To Guide](../how_to.md)
