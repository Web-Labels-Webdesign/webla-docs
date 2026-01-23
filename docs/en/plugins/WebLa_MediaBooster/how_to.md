# How-To Guide

This guide provides step-by-step workflows for common tasks with Media Booster.

---

## How the Plugin Works

### Data Flow Overview

Media Booster processes images in three independent steps:

```
[Media Library] → [Media Booster Queue] → [Processed Images]
      ↓                   ↓                      ↓
  Original JPG        Background             WebP version +
  PNG files           processing             optimized metadata
```

**Processing Flow**:
1. You start processing manually or the plugin starts automatically (depending on configuration)
2. Media Booster fetches unprocessed images from the media library
3. Each image is processed in a batch
4. Progress is displayed in the dashboard
5. After completion, statistics are updated

---

## Common Workflows

### How to: Initial Plugin Setup

**Goal**: Optimally configure Media Booster after installation

**Prerequisites**:
- Plugin is installed and activated
- Access to Shopware Administration

**Steps**:

1. **Check server compatibility**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Check the "Server Information" section
   - Note which features are available (Imagick, WebP, AVIF)

2. **Open plugin settings**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Alternatively: Click "Plugin Settings" in the dashboard

3. **Configure basic settings**
   - Batch Size: 50 (default value, adjust if needed)
   - Automatic Processing: "Manual only" for the beginning

4. **Enable conversion (recommended)**
   - Conversion Mode: Select "WebP"
   - Image Quality: 80
   - Thumbnail Quality: 60

5. **Enable SEO optimization (optional)**
   - Alt Tag Mode: "Optimize Alt Tags"
   - Update Mode: "Only fill empty"

6. **Save settings**
   - Click "Save"

7. **Start first processing**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Click "Start All"
   - Monitor the progress

**Result**: The plugin is configured and begins image optimization.

---

### How to: Convert Existing Images to WebP

**Goal**: Convert all existing images in the media library to WebP

**Prerequisites**:
- WebP is supported by the server (check in dashboard)

**Steps**:

1. **Adjust settings**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Conversion Mode: Select "WebP"
   - Image Quality: 80 (or as needed)
   - Save

2. **Start conversion**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Click "Convert"

3. **Monitor progress**
   - The page refreshes automatically
   - Wait until the progress bar reaches 100%

4. **Verify result**
   - Open your shop in a browser
   - Open developer tools (F12)
   - Check in the Network tab that images are loading as WebP

**Result**: All suitable images now have WebP versions that are automatically delivered.

**Note**: Original images remain and serve as fallback for older browsers.

---

### How to: Save Storage Space Through Image Resizing

**Goal**: Reduce oversized original images to reasonable dimensions

**Prerequisites**:
- Imagick is installed on the server
- **Important**: Backup of media files created!

**Steps**:

1. **Create backup**
   - Back up the `/public/media/` directory on your server
   - This is important as original images will be overwritten!

2. **Configure settings**
   - Navigate to: `Settings → Extensions → Media Booster`
   - "Enable Image Resize": On
   - Maximum Width: 2000 (or as needed)
   - Maximum Height: 2000 (or as needed)
   - Resize Mode: "Fit within bounds"
   - Save

3. **Start processing**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Click "Resize"

4. **Verify result**
   - Observe the "Space saved" statistic
   - Randomly check product images for quality

**Result**: All oversized images have been reduced to maximum dimensions.

**Troubleshooting**: If quality issues arise, restore backup and choose higher maximum dimensions.

---

### How to: SEO Optimization for All Product Images

**Goal**: Automatically fill missing alt tags and titles with product information

**Prerequisites**:
- Products have maintained names

**Steps**:

1. **Configure SEO settings**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Alt Tag Mode: "Optimize Alt Tags"
   - Product Images - Update Mode: "Only fill empty" (recommended)
   - Product Images - Alt Template: "Product Name" or "Product Name + Shop Name"
   - Enable Title Optimization: On (optional)
   - Save

2. **Start SEO optimization**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Click "SEO"

3. **Verify result**
   - Open a product image in the media library
   - Check that alt tag and title are set
   - Test in the frontend (view source code)

**Result**: All product images without alt tags now have meaningful alternative texts.

---

### How to: Set Up Automatic Daily Optimization

**Goal**: New images are automatically optimized every night

**Prerequisites**:
- Shopware Scheduled Tasks are correctly configured
- Cron job runs regularly

**Steps**:

1. **Enable automatic processing**
   - Navigate to: `Settings → Extensions → Media Booster`
   - Automatic Processing: "Once daily"
   - Enable all other desired functions
   - Save

2. **Verify cron job**
   - Ensure the Shopware Scheduled Task Runner is running
   - Typical cron entry: `* * * * * php /path/to/shopware/bin/console scheduled-task:run`

**Result**: Media Booster automatically processes new images once daily.

---

### How to: Reset Progress and Start Over

**Goal**: Process all images again (e.g., after changing quality settings)

**Steps**:

1. **Open dashboard**
   - Navigate to: `Settings → Extensions → Media Booster`

2. **Reset progress**
   - Click "Reset Progress"
   - Confirm the action

3. **Start processing again**
   - Click "Start All"

**Result**: All images are processed again, regardless of previous status.

**Note**: For WebP/AVIF conversion, existing converted files are skipped if they already exist.

---

## Quick Reference

| Task                           | Key Steps                                                   | Required Settings                  |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------------- |
| Enable WebP                    | Conversion Mode → WebP → Save → Dashboard → Start           | convertMode                        |
| Reduce image size              | Enable resize → Set max dimensions → Start                  | resizeEnabled, resizeMaxWidth/Height |
| Fill alt tags                  | Alt Tag Mode → Optimize → Choose template → Start           | seoAltMode, seoAltProductTemplate  |
| Optimize filenames             | Choose filename template → Start                            | seoFilenameProductTemplate         |
| Daily automatic processing     | Automatic Processing → Once daily                           | scheduleMode                       |

---

## Best Practices

1. **Backup before resizing**: The resize function overwrites originals. Always back up first!

2. **WebP before AVIF**: WebP has better browser support. Only use AVIF if you know your target audience uses modern browsers.

3. **Test quality**: Process a few images first and check quality before processing entire inventory.

4. **SEO gradually**: Use "Only fill empty" to not overwrite manually maintained data.

5. **Adjust batch size**: Lower values (20-30) for shared hosting, higher values (100+) for dedicated servers.

6. **Clear cache**: Clear Shopware cache and any CDN cache after processing.

## What to Avoid

- **No backups**: Never start image resizing without a prior backup
- **Too low quality**: Values below 60 can create visible artifacts
- **Too small dimensions**: Below 1500px can affect quality on Retina displays
- **Overwrite all without checking**: Can destroy manually maintained SEO data
- **Large batches on weak servers**: Can lead to timeouts and aborted processing
