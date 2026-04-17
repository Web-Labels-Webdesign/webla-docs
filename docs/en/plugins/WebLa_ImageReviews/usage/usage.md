# Usage Guide

This guide covers all features of **Images in Product Reviews**.

---

## Table of Contents

- [Image upload in the review form](#image-upload-in-the-review-form)
- [Gallery on the product page](#gallery-on-the-product-page)
- [Admin Panel Features](#admin-panel-features)
- [Storefront Features](#storefront-features)
- [CMS Element Review Images](./cms-element.md)
- [Troubleshooting](#troubleshooting)

---

## Image upload in the review form

### What It Does

Customers can attach one or more images while writing a product review. The images are stored together with the review and — once approved by Shopware — appear alongside the review in the storefront.

### How to Use

1. The customer opens the product detail page.
2. The customer clicks **Add new review**.
3. The review form shows an upload zone (drop zone with a file picker link).
4. The customer selects images or drags them into the drop zone.
5. The customer fills in the review and submits it.
6. The administrator approves the review under **Catalogues → Reviews**. Once approved, review and images are visible in the storefront.

### Tips & Best Practices

- Review approval follows the standard Shopware workflow. Images only appear publicly after the underlying review is approved.
- Uploaded files are stored in the configured media folder (default: "Image Reviews").

---

## Gallery on the product page

### What It Does

All images from approved reviews of a product are shown directly on the product detail page — both as an aggregated product gallery and next to each individual review.

### Location

**Navigation**: Storefront → Product detail page → Reviews section

### Customization Options

- **Empty state**: Configure a background image for products without review images. See [Settings](../configuration/settings.md#image-displayed-when-the-review-gallery-is-empty).
- **Variants**: Enable the variant-aggregation option if you want all variant images bundled. See [Settings](../configuration/settings.md#show-images-from-all-variants-in-gallery).
- **Call-to-action**: Add a motivational image below the "Add new review" button. See [Settings](../configuration/settings.md#image-displayed-below-the-add-new-review-button).

---

## Admin Panel Features

### Review detail with image uploads

**Location**: Catalogues → Reviews → [select review]

**Purpose**: The product review detail view shows every uploaded image in a dedicated "Image uploads" card above the standard review fields.

**Usage**:
1. Navigate to **Catalogues → Reviews**.
2. Open the review you want to moderate.
3. The "Image uploads" card shows a preview of each attached image.
4. Inspect the content and either approve or delete the review.

### Media Management

**Location**: Content → Media → Image Reviews (default folder)

All uploaded files are regular Shopware media entries. You can open, rename, move, or delete them individually.

---

## Storefront Features

### Upload field in the review form

**Where It Appears**: Product detail page → review form

**What Customers See**: A drop zone with an upload button, a drag-and-drop hint, and a list of allowed file types. Already added images appear as previews with a remove button (×).

### Review gallery

**Where It Appears**: Product detail page, inside the reviews section.

**What Customers See**: Thumbnail previews of review images, clickable to open full-size.

---

## Troubleshooting

### Images do not appear in the storefront

**Symptom**: Customers upload images but the gallery stays empty.

**Cause**: The underlying review has not been approved yet.

**Solution**: Under **Catalogues → Reviews**, open the review and set the status to approved.

### Upload fails

**Symptom**: Error message when submitting the review with images.

**Cause**: The file exceeds PHP upload limits (`upload_max_filesize`, `post_max_size`), or the file type is not allowed.

**Solution**: Increase the PHP upload limits in the server configuration and make sure only allowed image formats are uploaded.

### Gallery does not show images from other variants

**Symptom**: Only a few images appear per variant.

**Cause**: The "Show images from all variants in gallery" option is disabled.

**Solution**: Enable the option under **Extensions → My Extensions → Images in product reviews → Configure**.

---

## Related Documentation

- [CMS Element Review Images](./cms-element.md)
- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
