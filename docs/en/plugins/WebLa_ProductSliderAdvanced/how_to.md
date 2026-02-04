# How-To Guide

This guide provides step-by-step workflows for common tasks with Product Slider Advanced.

---

## How the Plugin Works

### Data Flow Overview

The plugin extends the Shopware CMS editor with a new block type for product and category sliders.

```
[Shopping Experience Editor] → [Configure Block] → [Select Data Source] → [Storefront Display]
```

**Example Flow**:
1. You add the "Product Slider Advanced" block to a Shopping Experience
2. You select a content type (products, category, etc.)
3. The plugin loads the corresponding products/categories at runtime
4. The content is displayed responsively in the slider

---

## Common Workflows

### How to: Create a Bestseller Slider on the Homepage

**Goal**: Display a manually curated slider with your top products on the homepage.

**Prerequisites**:
- Active products in the shop
- Access to the homepage Shopping Experience

**Steps**:

1. **Open Shopping Experience**
   - Navigate to: `Content → Shopping Experiences`
   - Open the homepage Shopping Experience

2. **Add Block**
   - Click on a section
   - Under "Commerce", select the **Product Slider Advanced** block
   - Drag the block to the desired position

3. **Select Products**
   - Click on the slider element
   - Select **Content type**: Manual products
   - Search for your bestsellers and select 6-10 products

4. **Configure Teaser as Headline**
   - Switch to the **Slider Teaser** tab
   - Enable **Show teaser as headline**
   - Enter "Our Bestsellers" as the headline

5. **Adjust Settings**
   - Switch to the **Settings** tab
   - Set **Navigation arrows** to On
   - Set **Automatic sliding** to Off (optional)

6. **Save and Review**
   - Save the Shopping Experience
   - Open the storefront and check the result

**Result**: A slider with the heading "Our Bestsellers" and your selected top products.

---

### How to: Create a Category Overview for the Homepage

**Goal**: Present main categories as visual cards in a slider.

**Prerequisites**:
- Categories with images configured
- Categories have descriptions

**Steps**:

1. **Insert Block**
   - Navigate to: `Content → Shopping Experiences`
   - Add the **Product Slider Advanced** block

2. **Choose Categories as Content Type**
   - Click on the element
   - Select **Content type**: Categories
   - Select your main categories (e.g., "Women", "Men", "Accessories")

3. **Style Category Boxes**
   - Set **Category box background color** to match your design
   - Choose a readable **Text color**
   - Limit the description to about 80 characters

4. **Add Teaser (optional)**
   - Enable **Show teaser**
   - Upload a suitable image
   - Add headline "Our Categories" and a link to the category overview

5. **Optimize Slider Settings**
   - Set **Max. items displayed** to the number of your categories
   - Enable **Infinite loop** only with more than 3 categories

**Result**: A visually appealing category slider that quickly guides customers to main areas.

---

### How to: Set Up an Automatic "Deals of the Week" Slider

**Goal**: Create a slider that automatically displays discounted products.

**Prerequisites**:
- A dynamic product group with price rules created

**Steps**:

1. **Create Dynamic Product Group** (if not already done)
   - Navigate to: `Catalogues → Dynamic Product Groups`
   - Click **New dynamic product group**
   - Name: "Deals of the Week"
   - Add a condition: "Product → Is discount" = Yes
   - Save the product group

2. **Insert Slider in Shopping Experience**
   - Open your Shopping Experience
   - Add the **Product Slider Advanced** block

3. **Link Product Group**
   - Select **Content type**: Dynamic product group
   - Select your created product group "Deals of the Week"
   - Set **Max. items displayed** to 8-12

4. **Design Teaser with Call-to-Action**
   - Enable the teaser
   - Upload an attractive "Sale" image
   - Headline: "Deals of the Week"
   - Link text: "All Deals"
   - Link target: `/deals/` (or your sale category)

5. **Enable Automatic Sliding** (optional)
   - Enable **Automatic sliding**
   - Set the speed to 3000ms

**Result**: A self-updating slider that always shows current deals.

---

### How to: Create a Hero Area with Teaser and Products

**Goal**: Create a prominent slider with a large teaser image and products.

**Steps**:

1. **Insert Full-Width Block**
   - Create a full-width section
   - Add the **Product Slider Advanced** block

2. **Design Prominent Teaser**
   - Enable **Show teaser**
   - Set **Width of teaser** to 40%
   - Upload a high-quality campaign image
   - Select **Display mode**: Cover

3. **Teaser Overlay for Readability**
   - Set **Teaser overlay color** to `rgba(0, 0, 0, 0.3)` for dark text
   - Or `rgba(255, 255, 255, 0.5)` for light text
   - Adjust **Teaser font color** accordingly

4. **Teaser Content**
   - Headline: "New Collection 2024"
   - Text: "Discover the latest trends"
   - Link text: "Shop Now"
   - Link target: URL to the collection

5. **Select Products**
   - Choose 6-8 highlight products from the collection

6. **Adjust Height**
   - Set **Max. height of slider** to 450-550px
   - Enable **Navigation arrows**

**Result**: A visually impressive hero area with campaign teaser and products.

---

### How to: Create a Mobile-Optimized Slider

**Goal**: Configure a slider that looks optimal on all devices.

**Steps**:

1. **Set Teaser Behavior on Mobile**
   - Decide: Show or hide teaser on mobile?
   - For complex teaser: Choose "Hide"
   - For simple teaser: Choose "Show above slider"

2. **Configure Edge Padding**
   - **Edge padding**: 30px (Desktop)
   - **Edge padding on mobile devices**: 10px

3. **Adjust Element Width**
   - Set **Slider item width** to 280px
   - This ensures optimal display on small screens

4. **Check Navigation**
   - Enable **Navigation arrows** for desktop
   - Disabled arrows allow touch swipe on mobile

5. **Test on Different Devices**
   - Open the storefront
   - Use browser developer tools for mobile view
   - Check touch gestures and readability

**Result**: A responsive slider that works optimally on desktop, tablet, and smartphone.

---

## Quick Reference

| Task | Key Steps | Required Settings |
| ---- | --------- | ----------------- |
| Bestseller Slider | Manual selection, Teaser as headline | Content type: Manual, Teaser as headline |
| Category Overview | Select categories, adjust colors | Content type: Categories, Box colors |
| Auto-Update Deals | Link Product Stream | Content type: Dynamic product group |
| Hero with Teaser | Teaser 40%, large image | Teaser active, Width 40%, Overlay |
| Mobile-Optimized | Edge padding, Element width | Mobile edge padding, Element width 280px |

---

## Best Practices

1. **Limit Product Count**: 8-12 products are ideal for performance and clarity
2. **Use High-Quality Images**: Especially for the teaser area and category sliders
3. **Test on Mobile Devices**: The majority of users shop on mobile
4. **Keep Texts Short**: Limit category descriptions to 80-100 characters
5. **Consistent Styling**: Match colors to your shop design

## What to Avoid

- Loading too many products (over 15) - impacts loading time
- Setting automatic scrolling too fast (under 2000ms)
- Enabling teaser without an image - looks incomplete
- Inconsistent product images - use uniform image sizes
- Duplicate sliders on one page with the same products
