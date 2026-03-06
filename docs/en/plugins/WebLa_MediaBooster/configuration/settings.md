# Configuration Settings

This document describes all available settings for Media Booster.

**Navigation**: Settings → Extensions → Media Booster

---

## Processing Settings

### Automatic Processing

| Property     | Value                                           |
| ------------ | ----------------------------------------------- |
| **Type**     | Select                                          |
| **Default**  | Manual only (no automatic processing)           |
| **Required** | No                                              |

**Description**: Determines how often Media Booster should automatically process images. In manual mode, you must start the process yourself via the dashboard.

**Options**:
- `Manual only (no automatic processing)`: No automatic processing. You start the process manually via the dashboard at Settings → Extensions → Media Booster
- `Once daily`: The plugin automatically processes new and unprocessed images once daily
- `Once weekly`: Weekly automatic processing
- `Once monthly`: Monthly automatic processing

**Example Use Case**: Choose "Once daily" if you regularly add new products and want images to be automatically optimized.

---

### Batch Size

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 50     |
| **Required** | No     |

**Description**: The number of images processed per run. Lower values reduce server load but increase total processing time.

**Example Use Case**: Reduce to 20-30 if you're on shared hosting with limited resources. Increase to 100+ if you have a powerful server.

---

## Image Resize

### Enable Image Resize

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, original images are resized to the configured maximum dimensions and overwritten. This saves storage space on the server.

**Important**: This function overwrites original images! Make sure you have a backup before enabling this feature.

**Example Use Case**: Enable this option if suppliers regularly deliver oversized product images (e.g., 5000x5000 pixels).

---

### Maximum Width (px)

| Property       | Value   |
| -------------- | ------- |
| **Type**       | Number  |
| **Default**    | (empty) |
| **Placeholder**| 2000    |
| **Required**   | No      |

**Description**: The maximum width in pixels to which images will be resized. Leave empty to not limit width.

**Example Use Case**: Set to 2000 or 2500 for high-resolution displays, or 1200-1500 for standard websites.

---

### Maximum Height (px)

| Property       | Value   |
| -------------- | ------- |
| **Type**       | Number  |
| **Default**    | (empty) |
| **Placeholder**| 2000    |
| **Required**   | No      |

**Description**: The maximum height in pixels to which images will be resized. Leave empty to not limit height.

**Example Use Case**: Set the same value as maximum width for consistent results.

---

### Resize Mode

| Property     | Value                                    |
| ------------ | ---------------------------------------- |
| **Type**     | Select                                   |
| **Default**  | Fit within bounds (keep aspect ratio)    |
| **Required** | No                                       |

**Description**: Determines how oversized images should be resized.

**Options**:
- `Fit within bounds (keep aspect ratio)`: The image is resized to fit completely within the specified maximum dimensions. The aspect ratio is preserved.
- `Limit largest side only`: Only the larger side (width or height) is limited to the maximum.

**Example Use Case**: Use "Fit within bounds" for most use cases, as this ensures no image exceeds the maximum dimensions.

---

## Image Conversion

### Conversion Mode

| Property     | Value                      |
| ------------ | -------------------------- |
| **Type**     | Select                     |
| **Default**  | Off - No conversion        |
| **Required** | No                         |

**Description**: Select the target format for image conversion. WebP and AVIF are modern image formats with better compression than JPG/PNG.

**Options**:
- `Off - No conversion`: No format conversion
- `WebP - Convert JPG, JPEG, PNG to WebP`: Converts all suitable images to WebP format. WebP is supported by all modern browsers.
- `AVIF - Convert JPG, JPEG, PNG, WebP to AVIF`: Converts images to AVIF format. AVIF offers even better compression than WebP but is not supported by older browsers.

**Note on AVIF Performance**: AVIF conversion works best with Imagick. When using the GD library fallback, images larger than 4 megapixels (e.g., 2000x2000) will be skipped because GD's AVIF encoder is significantly slower. If you see many skipped images during AVIF conversion, consider installing Imagick with AVIF support or using WebP instead.

**Important**: Original images are NOT deleted! Media Booster creates additional WebP/AVIF files alongside the originals. The storefront then automatically delivers the optimized format when the browser supports it.

**Example Use Case**: Choose "WebP" for maximum browser compatibility or "AVIF" for best compression with modern browsers.

---

### Image Quality (1-100)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 80     |
| **Required** | No     |

**Description**: The quality level for converted images. Higher values mean better quality but larger files.

**Example Use Case**: 80-85 is a good compromise between quality and file size. For products with many details (e.g., jewelry) you can use 90+.

---

### Thumbnail Quality (1-100)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 60     |
| **Required** | No     |

**Description**: The quality level for converted thumbnails. Since thumbnails are smaller, they can be saved at lower quality without visible difference.

**Example Use Case**: 60-70 is sufficient for most shops. Increase the value if thumbnails are displayed very large on your site.

---

### Frontend Extension Priority

| Property     | Value                                  |
| ------------ | -------------------------------------- |
| **Type**     | Select                                 |
| **Default**  | Original format (JPG, PNG, etc.)       |
| **Required** | No                                     |

**Description**: Controls which image format is prioritized when serving images to visitors in the storefront. This determines whether the browser receives the original file or a converted AVIF/WebP version.

**Options**:
- `AVIF`: Serve AVIF versions when available (best compression, modern browsers)
- `WebP`: Serve WebP versions when available (good compression, broad browser support)
- `Original format (JPG, PNG, etc.)`: Always serve the original file, even if converted versions exist

**Note**: If the preferred format is not available for a specific image, the plugin falls back to the next best available format (AVIF → WebP → Original).

**Example Use Case**: Set to "WebP" after running conversion to immediately serve optimized images. Use "Original" to temporarily disable optimized delivery without deleting converted files.

---

## SEO - Alt Tag

### Alt Tag Mode

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Select   |
| **Default**  | Disabled |
| **Required** | No       |

**Description**: Enables or disables automatic optimization of alt tags for images.

**Options**:
- `Disabled`: No automatic alt tag optimization
- `Optimize Alt Tags`: Alt tags are automatically set based on configured templates

**Example Use Case**: Enable this option if many of your product images have no or poor alt tags.

---

### Product Images - Update Mode

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Select          |
| **Default**  | Only fill empty |
| **Required** | No              |

**Description**: Determines whether existing alt tags should be overwritten.

**Options**:
- `Overwrite all`: All alt tags are overwritten with generated values
- `Only fill empty`: Only images without alt tags receive a new value

**Example Use Case**: Choose "Only fill empty" if you already have manually optimized alt tags that should not be overwritten.

---

### Product Images - Alt Template

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Select       |
| **Default**  | Product Name |
| **Required** | No           |

**Description**: The template for automatically generated alt tags on product images.

**Options**:
- `Product Name`: The alt tag contains only the product name (e.g., "Red T-Shirt XL")
- `Product Name + Shop Name`: The alt tag contains product name and shop name (e.g., "Red T-Shirt XL My Shop")

**Example Use Case**: Use "Product Name + Shop Name" for better brand recognition in image search.

---

### Content Images - Alt Template

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Select    |
| **Default**  | Shop Name |
| **Required** | No        |

**Description**: The template for alt tags on content images (non-product images like banners, logos, etc.).

**Options**:
- `Shop Name`: Only the shop name is used
- `Custom Text`: A self-defined text
- `Custom Text + Shop Name`: Combination of custom text followed by shop name
- `Shop Name + Custom Text`: Combination of shop name followed by custom text

---

### Content Images - Custom Text

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Text    |
| **Default**  | (empty) |
| **Required** | No      |

**Description**: The custom text used for alt tags on content images (only relevant when a template with "Custom Text" is selected).

---

## SEO - Title

### Enable Title Optimization

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables automatic optimization of the image title attribute. The title attribute is displayed as a tooltip when the user hovers over the image.

---

### Product Images - Update Mode (Title)

| Property     | Value           |
| ------------ | --------------- |
| **Type**     | Select          |
| **Default**  | Only fill empty |
| **Required** | No              |

**Description**: Determines whether existing title attributes should be overwritten.

**Options**:
- `Overwrite all`: All title attributes are overwritten
- `Only fill empty`: Only images without title receive a new value

---

### Product Images - Title Template

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Select       |
| **Default**  | Product Name |
| **Required** | No           |

**Description**: The template for automatically generated title attributes on product images.

**Options**:
- `Product Name`: Only the product name
- `Product Name + Shop Name`: Product name followed by shop name

---

### Content Images - Title Template

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Select    |
| **Default**  | Shop Name |
| **Required** | No        |

**Description**: The template for title attributes on content images.

**Options**:
- `Shop Name`: Only the shop name
- `Custom Text`: A self-defined text
- `Custom Text + Shop Name`: Custom text followed by shop name
- `Shop Name + Custom Text`: Shop name followed by custom text

---

### Content Images - Custom Text (Title)

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Text    |
| **Default**  | (empty) |
| **Required** | No      |

**Description**: The custom text for title attributes on content images.

---

## SEO - Filename

### Product Images - Filename Template

| Property     | Value      |
| ------------ | ---------- |
| **Type**     | Select     |
| **Default**  | No change  |
| **Required** | No         |

**Description**: Determines if and how product image filenames should be optimized for SEO.

**Options**:
- `No change`: Filenames remain unchanged
- `Product Name`: e.g., "red-t-shirt-xl.jpg"
- `Product Name - Shop Name`: e.g., "red-t-shirt-xl-my-shop.jpg"
- `Product Name - Product Number`: e.g., "red-t-shirt-xl-sw12345.jpg"
- `Product Name - Manufacturer Number`: e.g., "red-t-shirt-xl-man123.jpg"
- `Product Name - Product Number - Shop Name`: e.g., "red-t-shirt-xl-sw12345-my-shop.jpg"
- `Product Name - Manufacturer Number - Shop Name`: e.g., "red-t-shirt-xl-man123-my-shop.jpg"

**Important**: This function physically renames files. After renaming, thumbnails are automatically regenerated.

**Example Use Case**: Use "Product Name" or "Product Name - Product Number" for SEO-friendly filenames that rank better in Google Image Search.

---

### Variant Handling

| Property     | Value          |
| ------------ | -------------- |
| **Type**     | Select         |
| **Default**  | Parent product |
| **Required** | No             |

**Description**: Determines which product is preferred for filename generation when an image is shared by parent and variant products.

**Options**:
- `Parent product`: The name of the main product is used
- `Variant product`: The name of the variant is used

**Example Use Case**: Choose "Parent product" if your variants don't have meaningful individual names.

---

## Recommended Configurations

### For Beginners (safe default settings)

| Setting               | Recommended Value    |
| --------------------- | -------------------- |
| Automatic Processing  | Manual only          |
| Batch Size            | 50                   |
| Image Resize          | Off                  |
| Conversion Mode       | WebP                 |
| Image Quality         | 80                   |
| Thumbnail Quality     | 60                   |
| Alt Tag Mode          | Optimize Alt Tags    |
| Alt Tag Update        | Only fill empty      |

### For Performance Optimization (maximum savings)

| Setting               | Recommended Value    |
| --------------------- | -------------------- |
| Automatic Processing  | Once daily           |
| Batch Size            | 100                  |
| Image Resize          | On                   |
| Maximum Width         | 2000                 |
| Maximum Height        | 2000                 |
| Conversion Mode       | WebP                 |
| Image Quality         | 80                   |
| Thumbnail Quality     | 60                   |

### For SEO Focus

| Setting               | Recommended Value              |
| --------------------- | ------------------------------ |
| Alt Tag Mode          | Optimize Alt Tags              |
| Alt Tag Update        | Only fill empty                |
| Alt Tag Template      | Product Name + Shop Name       |
| Title Optimization    | On                             |
| Filename Template     | Product Name - Product Number  |
