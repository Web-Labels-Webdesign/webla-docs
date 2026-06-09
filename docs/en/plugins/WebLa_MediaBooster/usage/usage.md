# Usage Guide

This guide covers all features and functionality of Media Booster.

---

## Table of Contents

- [Dashboard](#dashboard)
- [Image Resizing](#image-resizing)
- [Image Conversion (WebP/AVIF)](#image-conversion-webpavif)
- [SEO Optimization](#seo-optimization)
- [Server Information](#server-information)
- [Troubleshooting](#troubleshooting)

---

## Dashboard

### What It Does

The dashboard is the central hub for Media Booster. Here you can see the current processing status, statistics, and manually start image optimization.

### How to Access the Dashboard

**Location**: Settings → Extensions → Media Booster

### Overview of Sections

#### Statistics

In the upper area, you see four key metrics:
- **Images resized**: Number of images whose size was reduced
- **Images converted**: Number of images converted to WebP/AVIF
- **SEO optimized**: Number of images with optimized metadata
- **Space saved**: Total storage space savings in MB

#### Manual Processing

Here you can start processing manually:
- **Start All**: Runs all enabled optimizations (resize, conversion, SEO)
- **Resize**: Starts only image resizing
- **Convert**: Starts only WebP/AVIF conversion
- **SEO**: Starts only SEO optimization

#### Progress

Shows the current status of each function:
- Number of processed images / total count
- Percentage progress
- Time of last run
- Status badges (Disabled, Unavailable)

#### Server Information

Shows available server capabilities:
- Imagick installed: Yes/No
- WebP supported: Yes/No
- AVIF supported: Yes/No

### Tips & Best Practices

- Start processing outside of peak hours (e.g., at night)
- Monitor progress during first-time processing
- Use "Refresh Counts" if new images are not recognized

---

## Image Resizing

### What It Does

Image resizing shrinks oversized original images to configurable maximum dimensions. This saves storage space on the server and speeds up thumbnail generation.

### Prerequisites

- Imagick PHP extension must be installed
- The function must be enabled in plugin settings

### How to Use

1. Navigate to **Settings → Extensions → Media Booster**
2. Enable "Enable Image Resize"
3. Enter desired maximum width and/or height (e.g., 2000 px)
4. Choose the resize mode
5. Save the settings
6. Open the dashboard at **Settings → Extensions → Media Booster**
7. Click "Resize" or "Start All"

### Important Notes

- **Original images are overwritten!** Create a backup before first use
- The function is only available when Imagick is installed on the server
- The aspect ratio of images is always preserved
- Images already smaller than maximum dimensions are skipped

### Tips & Best Practices

- Choose maximum dimensions suitable for Retina displays (2000-2500 px)
- Test the function first with a few images
- Check image quality randomly after processing

---

## Image Conversion (WebP/AVIF)

### What It Does

Conversion creates optimized WebP or AVIF versions of your images. These modern formats offer better compression at the same visual quality, speeding up your shop's loading times.

### Prerequisites

- For WebP: Imagick with WebP support or GD with WebP functions
- For AVIF: Imagick with AVIF support or PHP 8.1+ with GD AVIF functions

### How to Use

1. Navigate to **Settings → Extensions → Media Booster**
2. Under "Conversion Mode", select either "WebP" or "AVIF"
3. Optionally adjust quality settings (default: 80 for images, 60 for thumbnails)
4. Save the settings
5. Open the dashboard at **Settings → Extensions → Media Booster**
6. Click "Convert" or "Start All"

### How Delivery Works

Media Booster creates WebP/AVIF files **parallel** to the originals. The original files remain!

In the storefront, the WebP/AVIF version is automatically delivered when:
- A WebP/AVIF version of the image exists
- The browser supports the format

This is achieved through an integrated Twig filter that automatically adjusts image URLs.

### Tips & Best Practices

- WebP is supported by all modern browsers (including Safari since 2020)
- AVIF offers better compression but has less browser support
- A quality of 80 is sufficient for most images
- For thumbnails, a quality of 60 is enough

---

## SEO Optimization

### What It Does

SEO optimization improves the search engine friendliness of your images through automatic adjustment of alt tags, title attributes, and filenames.

### Alt Tag Optimization

Alt tags are important for:
- Accessibility (screen readers read alt tags aloud)
- SEO (search engines use alt tags for image indexing)
- Display when images cannot be loaded

**How to Use:**

1. Navigate to **Settings → Extensions → Media Booster**
2. Set "Alt Tag Mode" to "Optimize Alt Tags"
3. Choose the update mode (recommended: "Only fill empty")
4. Choose the desired template
5. Save and start "SEO" in the dashboard

### Title Optimization

The title attribute is displayed as a tooltip when users hover over an image.

**How to Use:**

1. Enable "Enable Title Optimization"
2. Choose the update mode and template
3. Save and start "SEO" in the dashboard

### Filename Optimization

SEO-friendly filenames help with image search in search engines.

**Example Transformation:**
- Before: `IMG_12345.jpg`
- After: `red-t-shirt-xl-sw10001.jpg`

**How to Use:**

1. Under "Product Images - Filename Template", choose the desired format
2. Save and start "SEO" in the dashboard

**Important:**
- Filenames are physically renamed
- Thumbnails are automatically regenerated
- URLs in CMS content may need to be manually updated

### Tips & Best Practices

- Use "Only fill empty" to preserve manually maintained alt tags
- Product names should be maintained in the default language
- Test filename renaming with a few products first

---

## Server Information

### What It Shows

The "Server Information" section in the dashboard shows which features are available on your server.

### Imagick Installed

- **Yes** (green): All features are available
- **No** (red): Image resizing not available, conversion only limited

### WebP Supported

- **Yes** (green): WebP conversion is available
- **No** (red): WebP conversion not possible

### AVIF Supported

- **Yes** (green): AVIF conversion is available
- **No** (red): AVIF conversion not possible

### What to Do If Support Is Missing

Contact your hosting provider and ask for:
- Installation of the PHP Imagick extension
- Enabling WebP support in Imagick or GD
- Enabling AVIF support (PHP 8.1+ recommended)

---

## Troubleshooting

### Processing Gets Stuck

**Symptom**: Progress bar no longer updates, status shows "Running"

**Cause**: Processing was interrupted (e.g., by server timeout)

**Solution**:
1. Click "Force Reset Running State" in the dashboard
2. Start processing again

---

### Worker Runs Out of Memory on Large Batches (and Crons Stop)

**Symptom**: During a large run (especially AVIF conversion of thousands of
images) the queue worker dies with `Allowed memory size of ... bytes exhausted`,
and afterwards **all scheduled tasks / crons appear to hang**.

**Cause**: A long-running `messenger:consume` worker (under Supervisor/systemd)
processes many messages in one process. Image encoding — AVIF via Imagick in
particular — grows the process memory over time and does not fully release it.
After enough images the PHP `memory_limit` is hit and the process is killed
mid-message. Because Shopware routes scheduled tasks through the same message
transport, a worker stuck dying on that batch stops draining the queue, so every
cron stalls.

Raising the PHP `memory_limit` only delays the crash — it does not fix it.

**Solution**:
1. Stop the worker, then in the dashboard click **Force Reset Running State**.
2. Run the consumer so it **recycles before** hitting the PHP limit. Set the
   memory limit *lower* than the PHP CLI `memory_limit` so the worker exits
   cleanly (finishing the current message) and is restarted fresh:
   ```
   bin/console messenger:consume async low_priority --memory-limit=512M --time-limit=300
   ```
   Keep `autorestart=true` in your Supervisor/systemd config so a fresh process
   starts immediately after each clean exit.
3. For constrained hosts, lower **Batch Size** in the settings (e.g. 25) to
   reduce per-message load during AVIF conversion.

---

### "Imagick Extension Not Installed" Warning

**Symptom**: Warning in dashboard, image resizing not available

**Cause**: The PHP Imagick extension is not installed on the server

**Solution**: Contact your hosting provider and request installation of Imagick

---

### Images Are Not Being Converted

**Symptom**: Conversion runs, but no WebP/AVIF files are created

**Possible Causes and Solutions**:

1. **Format not supported**: Check server information in the dashboard
2. **Not enough disk space**: Ensure sufficient disk space is available
3. **File permissions**: The media directory must be writable

---

### "Palette image not supported" or "Output file is empty" Error

**Symptom**: Certain PNG images (especially logos, icons, or simple graphics) fail to convert with errors like:
- "Warning: imagewebp(): Palette image not supported by webp"
- "Conversion failed - output file is empty"

**Cause**: This occurs when the server uses the GD library (instead of Imagick) for conversion. GD cannot directly convert **palette images** (PNGs with indexed colors) to WebP or AVIF format.

**What are palette images?**
Palette images use a limited color table (like GIF files) instead of full RGB color information. They are common in:
- Logos and brand graphics
- Icons and simple illustrations
- Screenshots with limited colors
- Graphics exported from design tools with "indexed color" option

**Solution**: This issue has been fixed in Media Booster v1.0.2+. The plugin now automatically converts palette images to true color before WebP/AVIF conversion.

**If you still encounter this error**:
1. Make sure you are using Media Booster v1.0.2 or later
2. Ask your hosting provider to install Imagick with WebP/AVIF support (Imagick handles palette images automatically)
3. As a workaround, open the problematic PNG in an image editor and save it as "RGB Color" or "True Color" instead of "Indexed Color"

---

### SEO Changes Are Not Applied

**Symptom**: Alt tags or titles remain empty after processing

**Possible Causes and Solutions**:

1. **"Only fill empty" mode**: If values already exist, they are not overwritten
2. **No product name**: Ensure products have names
3. **Clear cache**: Clear Shopware cache after processing

---

### View Recent Errors

In the dashboard, there is a "Recent Errors" section showing the last 10 errors. Use this information for diagnosis:

- **File not found**: The image file no longer exists
- **Insufficient disk space**: Not enough storage space
- **Convert failed**: Conversion failed (check Imagick/GD)

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [Step-by-Step Guides](../how_to.md)
