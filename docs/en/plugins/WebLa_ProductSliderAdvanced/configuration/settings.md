# Configuration Settings

This document describes all available settings for Product Slider Advanced.

**Navigation**: Content → Shopping Experiences → [Your Shopping Experience] → Edit Block → Element Settings

The settings are divided into three tabs: **Content**, **Slider Teaser**, and **Settings**.

---

## Tab: Content

In this tab, you select which content should be displayed in the slider.

### Content Type

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Manual |
| **Required** | Yes    |

**Description**: Determines where the slider content is loaded from.

**Options**:
- `Manual products`: You select individual products directly
- `Products by Category`: Products are loaded from a selected category
- `Categories`: Shows categories instead of products in the slider
- `Dynamic product group`: Products are loaded from a Product Stream

**Example Use Case**: Use "Manual products" for curated bestseller lists or "Dynamic product group" for automatically updated offers.

---

### Products (for manual selection)

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Multi-select |
| **Default**  | Empty        |
| **Required** | No           |

**Description**: Select the products to be displayed in the slider.

**Example Use Case**: Ideal for manually curated product lists like "Our Recommendations" or "New Arrivals".

---

### Category (for category selection)

| Property     | Value         |
| ------------ | ------------- |
| **Type**     | Single select |
| **Default**  | Empty         |
| **Required** | No            |

**Description**: Select the category from which products should be loaded. The category's sorting is respected.

**Example Use Case**: Automatically display the latest products from a category on the homepage.

---

### Categories (for categories mode)

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Multi-select |
| **Default**  | Empty        |
| **Required** | No           |

**Description**: Select multiple categories to be displayed as slider elements.

---

### Category Box Background Color

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Color picker |
| **Default**  | #ffffff      |
| **Required** | No           |

**Description**: Sets the background color of individual category cards in the slider.

**Example Use Case**: Match the color to your shop design.

---

### Category Box Text Color

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Color picker |
| **Default**  | #444444      |
| **Required** | No           |

**Description**: Determines the text color within category cards.

---

### Max. Length of Description

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 100    |
| **Required** | No     |

**Description**: Limits the character count of category descriptions. Longer texts are truncated with "...".

**Example Use Case**: Set the value to 50 for compact displays or 200 for more detailed descriptions.

---

### Dynamic Product Group

| Property     | Value         |
| ------------ | ------------- |
| **Type**     | Single select |
| **Default**  | Empty         |
| **Required** | No            |

**Description**: Select a Product Stream whose products will be displayed in the slider.

**Example Use Case**: Use dynamic product groups for "Weekly Deals" or "Products under $50" that update automatically.

---

## Tab: Slider Teaser

The teaser is an optional area next to the slider that can display additional content such as an image, headline, and link.

### Show Teaser

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables or disables the teaser area next to the slider.

**Example Use Case**: Enable the teaser to display a call-to-action or campaign graphic alongside your products.

---

### Show Teaser as Headline

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Shows the teaser headline as a heading above the entire slider area, instead of within the teaser image.

**Example Use Case**: Use this option for headings like "Our Bestsellers" or "New Collection".

---

### Teaser Headline

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | Empty |
| **Required** | No    |

**Description**: The main headline displayed in the teaser area.

---

### Teaser Text

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | Empty |
| **Required** | No    |

**Description**: Descriptive text below the teaser headline.

---

### Teaser Link Target

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | Empty |
| **Required** | No    |

**Description**: The URL the teaser links to. The entire teaser area becomes clickable.

**Example Use Case**: Link to a promotion page or category, e.g., `/sale/` or `/new-collection/`.

---

### Teaser Link Text

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | Empty |
| **Required** | No    |

**Description**: The button text displayed in the teaser.

**Example Use Case**: "Discover Now", "View All", or "Shop Sale".

---

### Teaser Font Color

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Color picker |
| **Default**  | #000000      |
| **Required** | No           |

**Description**: The color for text and button in the teaser area.

---

### Teaser Overlay Color

| Property     | Value                  |
| ------------ | ---------------------- |
| **Type**     | Color picker           |
| **Default**  | rgba(208, 207, 207, 0) |
| **Required** | No                     |

**Description**: A semi-transparent color layer over the teaser image that improves text readability.

**Example Use Case**: Use `rgba(0, 0, 0, 0.3)` for a light dark overlay on bright images.

---

### Teaser Image

| Property     | Value         |
| ------------ | ------------- |
| **Type**     | Media select  |
| **Default**  | Empty         |
| **Required** | No            |

**Description**: The background image for the teaser area.

---

### Display Mode (Teaser Image)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Cover  |
| **Required** | No     |

**Description**: Determines how the teaser image is scaled.

**Options**:
- `Default`: No special scaling
- `Fill`: Image fills the entire area (may be distorted)
- `Cover`: Image fills the area while maintaining aspect ratio (may be cropped)
- `Contain`: Entire image visible (may have borders)

---

### Teaser Behavior on Mobile Devices

| Property     | Value             |
| ------------ | ----------------- |
| **Type**     | Select            |
| **Default**  | Show above slider |
| **Required** | No                |

**Description**: Determines how the teaser is displayed on mobile devices.

**Options**:
- `Hide`: The teaser is hidden on mobile devices
- `Show above slider`: The teaser appears above the slider

**Example Use Case**: Choose "Hide" if the teaser takes up too much space on small screens.

---

## Tab: Settings

Here you'll find all technical and visual settings for the slider.

### Display Mode (Product Images)

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Select  |
| **Default**  | Contain |
| **Required** | No      |

**Description**: Determines how product images are displayed in the slider.

**Options**:
- `Standard`: Normal display
- `Cover`: Image fills the available area completely
- `Contain`: Entire image visible

---

### Vertical Alignment

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Center |
| **Required** | No     |

**Description**: Determines the vertical alignment of the slider within the CMS block.

**Options**:
- `Top`: Aligned to the top edge
- `Center`: Vertically centered
- `Bottom`: Aligned to the bottom edge

---

### Product Box Layout

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Select   |
| **Default**  | Standard |
| **Required** | No       |

**Description**: The layout of individual product cards in the slider.

**Options**:
- `Standard`: Complete product card with image, title, and price
- `Image`: Focus on the product image
- `Minimal`: Compact display

---

### Border

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Adds a border around the slider and navigation buttons.

---

### Navigation Arrows

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Shows arrow buttons for manually navigating through the slider.

---

### Automatic Sliding

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables automatic advancement of slider elements.

---

### Automatic Slider Speed

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 1500   |
| **Required** | No     |

**Description**: The time in milliseconds between automatic slide changes.

**Example Use Case**: Set the value to 3000 for a slower, more leisurely transition (3 seconds).

---

### Max. Items Displayed

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 10     |
| **Required** | No     |

**Description**: The maximum number of products or categories loaded in the slider.

---

### Slider Item Width

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | 300px |
| **Required** | No    |

**Description**: The minimum width of each individual slider element. Affects how many elements are visible simultaneously.

**Example Use Case**: Use "400px" for larger product cards or "200px" for more products at once.

---

### Width of Teaser

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | 20%    |
| **Required** | No     |

**Description**: The percentage width of the teaser area relative to the slider.

**Options**: 0% to 100% in 10% increments, plus 25% and 75%

**Example Use Case**: Choose 30% for a prominent teaser or 0% to hide the teaser.

---

### Max. Height of Slider

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | 650px |
| **Required** | No    |

**Description**: The maximum height of the entire slider area.

**Example Use Case**: Use "auto" for automatic height or "500px" for a compact display.

---

### Variant Display

| Property     | Value            |
| ------------ | ---------------- |
| **Type**     | Select           |
| **Default**  | Show all products |
| **Required** | No               |

**Description**: Controls which product types are displayed for products with variants.

**Options**:
- `Show all products`: Shows both parent products and variants
- `Only show variants`: Shows only individual variants
- `Only show parent products`: Shows only parent products

**Example Use Case**: Choose "Only show parent products" to avoid duplicate entries.

---

### Edge Padding

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 0      |
| **Required** | No     |

**Description**: The spacing in pixels at the left and right edges of the slider (desktop).

---

### Edge Padding on Mobile Devices

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 0      |
| **Required** | No     |

**Description**: The spacing in pixels at the left and right edges of the slider on mobile devices.

---

### Infinite Loop

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Enables endless browsing through the slider (from the last element back to the first).

---

### Navigation

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Shows dot navigation below the slider.

---

## Recommended Configurations

### For a Product Preview on the Homepage

| Setting                  | Recommended Value      |
| ------------------------ | ---------------------- |
| Content Type             | Dynamic product group  |
| Max. Items Displayed     | 8                      |
| Navigation Arrows        | On                     |
| Automatic Sliding        | Off                    |
| Product Box Layout       | Standard               |
| Slider Item Width        | 300px                  |

### For a Category Overview

| Setting                  | Recommended Value    |
| ------------------------ | -------------------- |
| Content Type             | Categories           |
| Show Teaser              | On                   |
| Teaser Headline          | "Our Categories"     |
| Show Teaser as Headline  | On                   |
| Max. Length of Description | 80                 |

### For a Hero Slider with Teaser

| Setting                  | Recommended Value   |
| ------------------------ | ------------------- |
| Content Type             | Manual products     |
| Show Teaser              | On                  |
| Width of Teaser          | 30%                 |
| Navigation Arrows        | On                  |
| Border                   | Off                 |
