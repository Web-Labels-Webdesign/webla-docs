# How-To Guide

Step-by-step workflows for common tasks with the **Category Quick Filter**.

---

## How the Plugin Works

### Data Flow Overview

```
[Shopping Experience Editor]  →  [Configuration saved]  →  [Page is loaded]
        ↓
[Plugin loads direct subcategories of the root category]
        ↓
[Customer selects a category in level 1]
        ↓
[AJAX request: load subcategories of the selected category]
        ↓
[Next level is populated / redirect triggered at deepest level]
```

**Example flow for vehicle selection:**
1. Page loads: Dropdown 1 shows all vehicle manufacturers.
2. Customer selects "BMW" → Dropdown 2 loads BMW model ranges.
3. Customer selects "3 Series" → Dropdown 3 loads 3 Series models.
4. Customer selects "320i" → Plugin automatically redirects to the "320i" category.

---

## How to: Set Up Your First Widget

**Goal**: Add a working category dropdown to an existing Shopping Experience.

**Prerequisites**:
- The plugin is installed and activated.
- A category structure with at least 2 levels exists in the shop.

**Steps**:

1. **Open a Shopping Experience**
   - Navigate to: `Content → Shopping Experiences`
   - Click on the desired Shopping Experience or create a new one.

2. **Add the block**
   - Click the `+` icon in a section.
   - Select the **Commerce** category in the block list.
   - Drag and drop the **Category Selector** block to the desired position.

3. **Configure the element**
   - Click the element → configuration panel opens on the right.
   - **Root Category**: Select the parent category for the dropdown structure.
   - **Depth**: Enter the number of selection levels (e.g., `3`).
   - **Dropdown Labels** (optional): Enter comma-separated placeholder texts.

4. **Save and publish**
   - Click **Save**.
   - Publish the Shopping Experience or test it in preview mode.

**Result**: The widget appears on the storefront page with the first dropdown populated.

---

## How to: Configure Top Categories

**Goal**: Pin specific categories to the top of the first dropdown level.

**Prerequisites**:
- A Category Selector element is already configured.

**Steps**:

1. **Edit the element**
   - Open the Shopping Experience: `Content → Shopping Experiences`
   - Click the element → configuration panel opens on the right.

2. **Select top categories**
   - Click into the **Top Categories** search field.
   - Type category names and select the desired categories.
   - Multiple categories can be added one after another.

3. **Save**
   - Click **Save** and publish the Shopping Experience.

**Result**: The selected categories appear at the top of the first dropdown, in addition to their alphabetical position.

**Tips**:
- Choose no more than 3–5 top categories to keep the list manageable.
- Use the CSS class `highlight` in your theme to visually emphasize top categories.

---

## How to: Enable Direct Product Redirect

**Goal**: Direct customers to the product page when a category contains only one product.

**Prerequisites**:
- Categories at the deepest level each contain exactly one active, available product.

**Steps**:

1. **Edit the element**
   - `Content → Shopping Experiences` → Open Shopping Experience → Click the element.

2. **Enable the option**
   - Turn on the **Open Product on Single Result** switch.

3. **Save**
   - Click **Save** and publish the Shopping Experience.

**Result**: When a customer selects the last category that contains exactly one product, they are redirected directly to the product detail page.

---

## How to: Set Up Two Widgets on One Page

**Goal**: Place two independent dropdown widgets with different root categories on the same page.

**Steps**:

1. **Add and configure the first block**
   - As described in "Set Up Your First Widget".

2. **Add the second block**
   - Add another **Category Selector** block to a different section.
   - Click the new element → configuration panel opens on the right.
   - Choose a different root category than the first widget.
   - Configure depth and labels independently.

3. **Save and test**
   - Save both widgets and test that they work independently of each other.

**Result**: Both dropdowns work completely independently – selecting in the first widget does not affect the second.

---

## Quick Reference

| Task                          | Key Steps                                              | Setting                    |
| ----------------------------- | ------------------------------------------------------ | -------------------------- |
| Add widget                    | Insert "Category Selector" block, choose root category | Root Category, Depth       |
| Customize placeholder texts   | Enter comma-separated texts in "Dropdown Labels"       | Dropdown Labels            |
| Enable product redirect       | Turn on "Open Product on Single Result" switch         | Open Product on Single Result |
| Pin top categories            | Select categories in "Top Categories" field            | Top Categories             |
| Add second widget             | Insert another block, configure separately             | Root Category (different)  |

---

## Best Practices

1. **Verify category structure first**: Before configuring, make sure the category structure in Shopware is active and complete. Inactive categories are not shown in the dropdown.
2. **Match depth to structure**: The configured depth should match the actual hierarchy depth. A depth that is too high leads to empty dropdowns on the final levels.
3. **Use dropdown labels**: Clear placeholder texts (e.g., "Select manufacturer") significantly improve usability – without labels, customers may not know what to select at each step.
4. **Use top categories sparingly**: Too many pinned categories make the list cluttered. 3–5 pinned entries are generally optimal.

## What to Avoid

- ❌ **Choosing a root category without subcategories** – The first dropdown will be empty and the widget will not work.
- ❌ **Setting the depth too high** – Levels without categories will appear empty and confuse customers.
- ❌ **Enabling product redirect without single-product categories** – If categories contain multiple products, the option has no effect and only adds unnecessary complexity during setup.
