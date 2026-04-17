# CMS Element Review Images

> Part of **Images in Product Reviews** – [Main usage guide](./usage.md)

## Overview

The plugin provides a dedicated CMS element "Review Images" (`image-reviews`). With it, you can freely place galleries of customer review images inside your Shopping Experiences — independent of the standard review section on the product detail page.

## Prerequisites

- Plugin installed and activated.
- At least one approved product review with image uploads.
- A Shopping Experience of type **Product page** or **Product listing**.

## Adding the Element

1. Navigate to **Content → Shopping Experiences**.
2. Open an existing layout or create a new one (type: Product page or Product listing).
3. In the editor, click **Add block**.
4. Choose the **Review Images** block from the **Commerce** category and drag it into the desired section.
5. Save the layout.

## Configuration

The element automatically uses review data of the current product (for Product page layouts) or the product listing. No manual product assignment is required.

Standard CMS options such as spacing and background are available in the element's config sidebar.

## Examples

### Example: Gallery section above the product description

**Goal**: Display review images as a standalone section above the product description.

**Steps**:
1. Open the product page layout.
2. Insert a new section above the description.
3. Add the **Review Images** block from the Commerce category.
4. Save the layout and assign it to the product.

**Result**: Visitors see the review gallery prominently above the product description.

## FAQ

**Q: Do I need a dedicated layout for every product?**
A: No. The element picks up the active product automatically via the Shopping Experience context.

**Q: What happens when no review images exist?**
A: If a fallback image for empty galleries is configured in plugin settings, it is displayed. Otherwise the area stays empty.

**Q: Does the element work in product listing layouts?**
A: Yes, the element supports both product page and product listing layouts.
