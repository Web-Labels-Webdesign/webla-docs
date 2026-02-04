# Usage Guide

This guide covers all features and functionality of Product Slider Advanced.

---

## Table of Contents

- [Adding the Slider](#adding-the-slider)
- [Content Types](#content-types)
- [Teaser Features](#teaser-features)
- [Slider Settings](#slider-settings)
- [Responsive Behavior](#responsive-behavior)
- [Troubleshooting](#troubleshooting)

---

## Adding the Slider

### How to Add the Slider to a Shopping Experience

1. Open **Content → Shopping Experiences** in your Shopware Administration
2. Select an existing Shopping Experience or create a new one
3. Click on a section to add blocks
4. Under **Commerce**, select the **Product Slider Advanced** block
5. Drag the block to the desired position

**Location**: Content → Shopping Experiences → [Edit Shopping Experience]

### Configuring the Element

After inserting:
1. Click on the slider element within the block
2. The configuration panel opens on the right side
3. Configure the three tabs: **Content**, **Slider Teaser**, and **Settings**
4. Save the Shopping Experience

---

## Content Types

Product Slider Advanced supports four different content types. Each type is suitable for different use cases.

### Manual Products

**What It Does**: You specifically select individual products that should appear in the slider.

**How to Use**:
1. In the **Content** tab, select the content type **Manual products**
2. Click on the products field
3. Search for and select products
4. Products appear in the order you select them

**Tips & Best Practices**:
- Ideal for bestseller lists or seasonal highlights
- Make sure to only select active products
- Limit selection to 8-12 products for optimal performance

---

### Products by Category

**What It Does**: Automatically loads products from a selected category.

**How to Use**:
1. In the **Content** tab, select the content type **Products by Category**
2. Select the desired category
3. The sorting from the category configuration is automatically applied
4. Set **Max. items displayed** to control how many products are loaded

**Tips & Best Practices**:
- Use this for "New Products" or "Sale" categories
- Category sorting is respected (e.g., "Newest first")
- Combine with the variant display setting for clean results

---

### Categories

**What It Does**: Shows selected categories as slider elements - not products, but category cards with image and description.

**How to Use**:
1. In the **Content** tab, select the content type **Categories**
2. Select the categories to be displayed
3. Configure the **Background color** and **Text color** of category boxes
4. Adjust the **Max. length of description**

**Tips & Best Practices**:
- Ideal for the homepage to showcase main categories
- Make sure your categories have images
- Use Custom Fields for individual category images in the slider

**Category Custom Fields**:
The plugin supports special Custom Fields for categories:
- `webla_productslideradvanced_custom_fields_media`: Alternative image for the slider
- `webla_productslideradvanced_custom_fields_text`: Alternative description text

---

### Dynamic Product Group

**What It Does**: Loads products from a Product Stream (Dynamic Product Group) that updates automatically.

**How to Use**:
1. First create a Dynamic Product Group under **Catalogues → Dynamic Product Groups**
2. In the **Content** tab, select the content type **Dynamic product group**
3. Select the desired product group

**Tips & Best Practices**:
- Perfect for "Deals" with automatic price filters
- Ideal for "New Products" with date conditions
- Products update automatically based on the rules

---

## Teaser Features

The teaser is an optional area next to the slider that can display additional information or calls-to-action.

### Activating the Teaser

1. Switch to the **Slider Teaser** tab
2. Enable **Show teaser**
3. The slider now splits into teaser area and product slider

### Designing the Teaser Area

**Adding an Image**:
1. Click **Upload image** or select an image from the media library
2. Choose the **Display mode** (Cover, Contain, etc.)
3. The image is displayed as the teaser area background

**Adding Text**:
1. Enter a **Teaser Headline**
2. Optionally add **Teaser text**
3. Adjust the **Teaser font color** to match your image
4. Use the **Teaser overlay color** for better readability

**Adding a Link**:
1. Enter the **Teaser link target** (e.g., `/sale/`)
2. Add **Teaser link text** for the button (e.g., "Discover Now")
3. The entire teaser area becomes clickable

### Using Teaser as Headline

Enable **Show teaser as headline** to display the teaser headline as a title above the entire slider. This is useful for section titles like "Our Bestsellers".

### Adjusting Teaser Width

Under **Settings → Width of teaser**, you can set how much space the teaser occupies:
- 20-30%: Subtle teaser next to the slider
- 40-50%: Equal display
- 0%: Hide teaser (despite enabled option)

---

## Slider Settings

### Configuring Navigation

**Navigation Arrows**:
- Shows arrow buttons on the left and right of the slider
- Users can manually navigate through products

**Dot Navigation**:
- Enable **Navigation** for dots below the slider
- Shows current position and allows direct jumping

**Infinite Loop**:
- With **Infinite loop** enabled, the slider jumps from the last to the first element
- Disable this if a defined end is desired

### Automatic Sliding

1. Enable **Automatic sliding**
2. Set the **Speed** (in milliseconds)
   - 1500ms = 1.5 seconds between slides
   - 3000ms = 3 seconds between slides
3. The slider automatically pauses on hover (mouse over element)

### Visual Adjustments

**Product Box Layout**:
- `Standard`: Complete product card with all information
- `Image`: Focus on product image, reduced information
- `Minimal`: Compact display

**Border**:
- Adds a frame around the slider and navigation buttons

**Vertical Alignment**:
- Positions the slider within the CMS block (Top, Center, Bottom)

---

## Responsive Behavior

The plugin automatically adapts to different screen sizes.

### Automatic Adjustments

| Screen Size    | Products Shown | Spacing |
| -------------- | -------------- | ------- |
| XS (Mobile)    | 2              | 20px    |
| SM (Tablet)    | 2              | 20px    |
| MD             | 2              | 30px    |
| LG             | 3              | 30px    |
| XL             | 3              | 30px    |
| XXL            | 3              | 30px    |

### Teaser on Mobile Devices

Under **Slider Teaser → Teaser behavior on mobile devices**:
- `Show above slider`: The teaser appears above the products
- `Hide`: The teaser is hidden on mobile devices

### Adjusting Edge Padding

Use **Edge padding** and **Edge padding on mobile devices** for different spacing:
- Desktop: Use larger padding (20-50px) for more white space
- Mobile: Smaller padding (0-20px) for optimal space utilization

---

## Troubleshooting

### No Products Are Displayed

**Symptom**: The slider area is empty or shows no products.

**Possible Causes and Solutions**:
1. **No products selected**: Check the "Content" tab and select products/categories
2. **Products not active**: Make sure the products are active in the shop
3. **Category empty**: The selected category contains no active products
4. **Product Stream invalid**: Check the rules of your dynamic product group

### Teaser Is Not Displayed

**Symptom**: The teaser area doesn't appear despite being configured.

**Solutions**:
1. Make sure **Show teaser** is enabled
2. Check if **Width of teaser** is not set to 0%
3. On mobile devices: Check **Teaser behavior on mobile devices**

### Images Are Not Displayed Correctly

**Symptom**: Product images or teaser image appear distorted or cropped.

**Solutions**:
1. Adjust the **Display mode** (Cover, Contain, etc.)
2. Check the **Max. height of slider**
3. Ensure product images are in the correct resolution

### Slider Navigation Not Working

**Symptom**: Arrows or dots don't respond.

**Solutions**:
1. Make sure **Navigation arrows** is enabled
2. Check if there are enough products for navigation
3. Clear the Shopware cache under **Settings → System → Caches & Indexes**

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
