# Configuration Settings

This document describes all available settings for the **Category Quick Filter**.

The plugin is not configured through a global plugin configuration page. Instead, each widget is configured directly within the CMS element in the Shopping Experience editor. Every widget has its own independent settings.

**Navigation**: Content → Shopping Experiences → [Your Shopping Experience] → Edit element

---

## Element Settings

### Root Category

| Property     | Value                    |
| ------------ | ------------------------ |
| **Type**     | Category select (required) |
| **Default**  | None                     |
| **Required** | Yes                      |

**Description**: The category whose direct subcategories are shown as the first selection step in the dropdown. The root category itself does not appear in the dropdown – only its children.

**Example Use Case**: In an automotive shop, select the top-level category "Spare Parts" here. The first dropdown level will then show all direct subcategories such as "Brakes", "Engine", "Suspension", etc.

---

### Depth

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Integer  |
| **Default**  | 3        |
| **Minimum**  | 1        |
| **Maximum**  | 10       |
| **Required** | Yes      |

**Description**: Defines how many dropdown levels are displayed. With a depth of 3, the customer sees three consecutive selection fields that fill from left to right.

**Important**: The depth should match the actual depth of your category structure. If the depth is set higher than the available category hierarchy, empty dropdown levels will appear. If set lower, the redirect will occur earlier.

**Example Use Case**: For a structure of Manufacturer → Model Range → Model, set the depth to 3.

---

### Dropdown Labels

| Property     | Value                        |
| ------------ | ---------------------------- |
| **Type**     | Text (comma-separated)       |
| **Default**  | Empty (generic placeholder)  |
| **Required** | No                           |

**Description**: Comma-separated placeholder texts for each dropdown level. The first value applies to the first level, the second to the second level, and so on.

If this field is empty, a generic placeholder from the language translations is used for each level.

**Example Use Case**: For an automotive shop: `Select manufacturer,Select model range,Select model`

The dropdown fields will then show "Select manufacturer", "Select model range", and "Select model" as their default option.

---

### Open Product on Single Result

| Property     | Value          |
| ------------ | -------------- |
| **Type**     | Switch (Yes/No) |
| **Default**  | No             |
| **Required** | No             |

**Description**: When enabled and the selected category contains exactly one active and available product, the plugin redirects directly to the product detail page instead of the category page.

If this option is disabled, or the category contains multiple products, the plugin always redirects to the category page.

**Example Use Case**: In a shop with unique product combinations (e.g., specific automotive parts for exactly one model), this option allows a direct product redirect without an intermediate step.

---

### Top Categories

| Property     | Value                              |
| ------------ | ---------------------------------- |
| **Type**     | Multi-select categories (optional) |
| **Default**  | None                               |
| **Required** | No                                 |

**Description**: Categories that should be pinned to the top of the first dropdown level – regardless of alphabetical sorting. Pinned categories also receive the CSS class `highlight`, which you can use in your theme to apply custom styling (e.g., bold text, different color).

**Example Use Case**: In an automotive shop, the best-selling brands (e.g., "BMW", "VW", "Mercedes") are pinned to the top so customers see them immediately without scrolling.

---

## Recommended Configurations

### For Vehicle Selection (3 levels)

| Setting                       | Recommended Value                                     |
| ----------------------------- | ----------------------------------------------------- |
| Root Category                 | Your top-level vehicle category                       |
| Depth                         | 3                                                     |
| Dropdown Labels               | `Select manufacturer,Select model,Select type`        |
| Open Product on Single Result | No (redirect to category page)                        |
| Top Categories                | Best-selling brands                                   |

### For Printer Supplies (3 levels, product redirect)

| Setting                       | Recommended Value                                          |
| ----------------------------- | ---------------------------------------------------------- |
| Root Category                 | Your top-level printer category                            |
| Depth                         | 3                                                          |
| Dropdown Labels               | `Select manufacturer,Select model range,Select model`      |
| Open Product on Single Result | Yes (redirect to product on single result)                 |
| Top Categories                | Popular printer manufacturers                              |
