# Usage Guide

This guide covers all features and functionality of the Product Advisor Plugin.

---

## Table of Contents

- [Managing Product Advisors](#managing-product-advisors)
- [Questions and Answers](#questions-and-answers)
- [CMS Integration](#cms-integration)
- [Customer Experience in the Storefront](#customer-experience-in-the-storefront)
- [Troubleshooting](#troubleshooting)

---

## Managing Product Advisors

### Creating a New Advisor

1. Navigate to `Catalogues → Product Advisor`
2. Click **Add**
3. Enter a **Title** for the advisor
4. Configure the desired settings (see [Configuration Settings](../configuration/settings.md))
5. Click **Save**

### Editing an Advisor

1. Navigate to `Catalogues → Product Advisor`
2. Click on the desired advisor in the list
3. Make your changes
4. Click **Save**

### Deleting an Advisor

1. Navigate to `Catalogues → Product Advisor`
2. Select the advisor to delete
3. Click the bin icon or select "Delete" from the context menu
4. Confirm the deletion

**Note**: Deleting an advisor also permanently removes all associated questions and answers.

---

## Questions and Answers

Each product advisor consists of one or more questions. Each question has answer options that the customer can select.

### Adding Questions

1. Open a product advisor
2. Switch to the **Questions** tab
3. Click **Add question**
4. Configure the question (details in [Configuring Questions](questions.md))
5. Save the question

### Adding Answers

1. Open a question
2. Switch to the **Answers** tab
3. Click **Add answer**
4. Configure the answer (details in [Configuring Answers](answers.md))
5. Save the answer

### Changing Order

The order of questions and answers is controlled via the **Position** field. Lower values appear first.

---

## CMS Integration

The product advisor is embedded into your Shopping Experiences via CMS blocks.

### Embedding Advisor in Shopping Experience

1. Navigate to `Content → Shopping Experiences`
2. Open the desired Shopping Experience or create a new one
3. Select an area where you want to insert the advisor
4. Click on **Blocks** in the sidebar
5. Search for "Product Advisor" in the block catalogue (Category: Sidebar)
6. Drag the **Product Advisor** block into the desired area
7. Click on the placed block
8. Select the desired **Product Advisor** in the configuration area
9. Save and publish the Shopping Experience

### Block Positioning

The Product Advisor block is optimised for the sidebar but can also be placed in other areas:

- **Sidebar**: Ideal position for accompanying advice
- **Main Area**: For prominent placement as a standalone element

---

## Customer Experience in the Storefront

### Question Flow

Customers see the advisor as an interactive assistant:

1. **Header**: Shows all questions as a progress indicator
2. **Question Area**: Current question with answer options
3. **Footer**: Navigation (Back, Skip, Next) and summary of previous selections

### Answer Formats

Depending on configuration, customers see different input formats:

| Format | Display |
|--------|---------|
| Buttons | Clickable buttons, optionally with images |
| Select | Dropdown menu with search function |
| Range | Two sliders for min/max values |
| Input | Text field for free entry |

### Navigation

- **Back**: Returns to the previous question and discards the current selection
- **Skip**: Jumps to the next question without selection (only for optional questions)
- **Next**: Confirms the selection and proceeds to the next question

### Results Display

After answering all questions (or with live update enabled, already during the process):

1. **End Text**: Customisable message
2. **Top Recommendation**: The best-matching product is highlighted
3. **Product List**: Additional matching products in a sortable list
4. **No Results**: If no product matches, a corresponding message is displayed

---

## Troubleshooting

### Advisor Not Displayed in Storefront

**Symptom**: The CMS block is placed but nothing is displayed.

**Possible Causes and Solutions**:
1. **Advisor not active**: Check under `Catalogues → Product Advisor` whether the advisor is set to "Active"
2. **Shopping Experience not published**: Save and publish the Shopping Experience again
3. **No advisor selected**: Click on the block and select an advisor
4. **Clear cache**: Clear the Shopware cache under `Settings → System → Caches & Indexes`

### No Products in Results

**Symptom**: The advisor shows "No product found".

**Possible Causes and Solutions**:
1. **Too restrictive product group**: Check the linked Dynamic Product Group
2. **No matching properties**: Ensure products have the properties linked in the answers
3. **"Exclude non-matching" active**: Disable this option for less strict filtering

### Questions Being Skipped

**Symptom**: Certain questions are not displayed.

**Possible Causes**:
1. **Jump logic**: A previous answer triggered a jump to a later question
2. **Position values**: Check whether all questions have correct position values

### Live Update Not Working

**Symptom**: Products are not updated after each answer.

**Solution**: Enable "Live Update" in the advisor settings.

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [Configuring Questions](questions.md)
- [Configuring Answers](answers.md)
- [How-To Guide](../how_to.md)
