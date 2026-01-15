# How-To Guide

This guide provides step-by-step workflows for common tasks with the Product Advisor Plugin.

---

## How the Product Advisor Works

### Data Flow Overview

```
Customer starts advisor
        ↓
   Display question
        ↓
   Select answer
        ↓
 ┌──────┴──────┐
 │ Jump target │──→ Jump to target question
 │   exists?   │
 └──────┬──────┘
        │ No
        ↓
   Next question
        ↓
 ┌──────┴──────┐
 │    More     │──→ Back to "Display question"
 │ questions?  │
 └──────┬──────┘
        │ No
        ↓
  Filter and score products
        ↓
  Sort results (by score/weight)
        ↓
  Display product recommendations
```

### Scoring Logic

1. **Base score**: Each product starts with score 0
2. **Answer matching**: For each matching answer, the question weight is added
3. **Manufacturer bonus**: If configured, the manufacturer weight is added
4. **Sorting**: Products are sorted by total score (highest first)

---

## Common Workflows

### How to: Create Your First Product Advisor

**Goal**: Create a working product advisor from scratch

**Prerequisites**:
- Plugin installed and activated
- Products with properties in the shop

**Steps**:

1. **Create the product advisor**
   - Navigate to: `Catalogues → Product Advisor`
   - Click **Add**
   - Enter title: e.g., "Laptop Finder"
   - Activate the advisor
   - **Save**

2. **Create the first question**
   - Open the **Questions** tab
   - Click **Add question**
   - Title: "Intended Use"
   - Question text: "What will you mainly use the notebook for?"
   - Question type: "Properties"
   - Question format: "Buttons"
   - Property group: Select an appropriate group (e.g., "Category" or "Usage")
   - Position: 1
   - Weight: 5
   - **Save**

3. **Add answers**
   - Open the **Answers** tab in the question
   - For each answer option:
     - Click **Add answer**
     - Enter answer text (e.g., "Office Work", "Gaming", "Graphic Design")
     - Select property option
     - Set position
     - **Save**

4. **Add more questions and answers**
   - Repeat the steps for additional questions (e.g., Budget, Screen Size)

5. **Embed in Shopping Experience**
   - Navigate to: `Content → Shopping Experiences`
   - Open Shopping Experience or create a new one
   - Add **Product Advisor** block from sidebar
   - Select advisor
   - **Save** and **Publish**

**Result**: The advisor is live and customers can use it.

---

### How to: Set Up Jump Logic

**Goal**: Skip questions based on previous answers

**Prerequisites**:
- Existing product advisor with multiple questions

**Steps**:

1. **Plan question structure**

   | Question | Position | Description |
   |----------|----------|-------------|
   | Experience Level | 1 | Determines if beginner questions are shown |
   | Beginner Help | 2 | Only for beginners |
   | Starter Features | 3 | Only for beginners |
   | Budget | 4 | For everyone |
   | Additional Features | 5 | For everyone |

2. **Define jump target on the answer**
   - Open Question 1 "Experience Level"
   - Open the answer "Expert" or "Lots of experience"
   - Set **Jump to**: 4
   - **Save**

3. **Test**
   - Open the storefront
   - Start the advisor
   - Select "Expert" for question 1
   - Verify it jumps directly to question 4

**Result**: Experts automatically skip the beginner questions.

**Troubleshooting**: If the jump doesn't work:
- Check whether the position is correct (number, not question ID)
- Ensure the target question exists

---

### How to: Create a Price Range Question

**Goal**: Let customers filter by budget

**Prerequisites**:
- Products with different prices in the shop

**Steps**:

1. **Create new question**
   - Title: "Budget"
   - Question text: "What's the maximum you want to spend?"
   - Question type: **Price**
   - Question format: **Range** (for slider) or **Buttons** (for predefined ranges)
   - Position: Position appropriately
   - Weight: e.g., 3
   - **Save**

2. **For Buttons format: Price ranges as answers**

   | Answer | Price From | Price To | Position |
   |--------|------------|----------|----------|
   | Under 100 Euro | 0 | 100 | 1 |
   | 100 - 300 Euro | 100 | 300 | 2 |
   | 300 - 500 Euro | 300 | 500 | 3 |
   | Over 500 Euro | 500 | (empty) | 4 |

3. **For Range format: Min/Max values**
   - Format automatically shows sliders
   - Customers can enter their own values

**Result**: Products are filtered by price.

---

### How to: Prioritise Manufacturers

**Goal**: Prefer certain brands in the results

**Prerequisites**:
- Products from various manufacturers in the shop

**Steps**:

1. **Enable manufacturer weighting**
   - Open the product advisor
   - Switch to the **Manufacturers** tab
   - Click **Add manufacturer**

2. **Link manufacturers with weighting**

   | Manufacturer | Weight | Effect |
   |--------------|--------|--------|
   | Own Brand | 10 | Strongly preferred |
   | Partner Brand | 5 | Slightly preferred |
   | Others | 0 | Neutral |

3. **Save and test**
   - **Save**
   - In the advisor, products from Own Brand will rank higher with equal scores

**Result**: Your preferred brands appear higher in the results.

---

### How to: Enable Live Update

**Goal**: Customers see results in real-time during consultation

**Prerequisites**:
- Existing product advisor

**Steps**:

1. **Enable setting**
   - Open the product advisor
   - Enable **Live Update**
   - **Save**

2. **Test**
   - Open the advisor in the storefront
   - After each answer, the product list should update

**Result**: Customers immediately see how their selection affects the product recommendations.

**Note**: Live update can cause delays with many products or slow servers.

---

### How to: Create Advisors for Different Categories

**Goal**: Different advisors for different product categories

**Steps**:

1. **Create Dynamic Product Group**
   - Navigate to: `Catalogues → Dynamic Product Groups`
   - **Add**
   - Name: e.g., "Bicycles"
   - Conditions: Category = Bicycles
   - **Save**

2. **Link advisor to product group**
   - Open the product advisor
   - At **Dynamic Product Group**: Select "Bicycles"
   - **Save**

3. **Repeat for other categories**
   - Create separate advisors for Laptops, Cameras, etc.
   - Each advisor has its own category-specific questions

**Result**: Category-specific advice without irrelevant products.

---

## Quick Reference

| Task | Key Steps | Settings |
|------|-----------|----------|
| Create advisor | Catalogues → Product Advisor → Add | Title, Active |
| Create question | Advisor → Questions → Add | Question type, Format, Position |
| Create answer | Question → Answers → Add | Text, Property/Manufacturer/Price |
| Jump logic | Answer → Jump to | Position of target question |
| CMS embed | Shopping Experience → Block → Product Advisor | Select advisor |
| Manufacturer priority | Advisor → Manufacturers → Add | Manufacturer, Weight |

---

## Best Practices

1. **Less is more**: Limit yourself to 3-7 questions for optimal conversion
2. **Important first**: Ask the crucial questions at the beginning
3. **Use weighting**: Differentiate between critical and optional criteria
4. **Test thoroughly**: Go through all paths of your advisor
5. **Incorporate feedback**: Observe where customers drop off

## What to Avoid

- Too many questions (leads to abandonment)
- Too complex jump logic (difficult to maintain)
- Missing property links (no results)
- Invalid jump targets (unexpected behaviour)
- Overlapping price ranges (duplicate results)

---

## Related Documentation

- [Usage Guide](usage/usage.md)
- [Configuring Questions](usage/questions.md)
- [Configuring Answers](usage/answers.md)
- [Configuration Settings](configuration/settings.md)
