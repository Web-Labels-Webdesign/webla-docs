# Changelog

All notable changes to Media Booster for end users.

---

## [1.0.1] - 2026-01-23

### Documentation
- Added README with installation and usage instructions
- Added user documentation (EN/DE)

---

## [1.0.0] - 2026-01-23

### Initial Release

**Image Optimization**
- Automatic resizing of oversized original images to configurable maximum dimensions
- Flexible resize modes: "Fit" (within both bounds) or "Largest" (limit largest side only)
- Supports JPG, JPEG, PNG, BMP, and GIF formats

**Modern Format Conversion**
- Convert images to WebP for up to 30% smaller file sizes
- Convert images to AVIF for up to 50% smaller file sizes
- Original files preserved for full Shopware compatibility
- Automatic thumbnail conversion included
- Configurable quality settings for images and thumbnails separately

**SEO Optimization**
- Automatic alt text generation for product and content images
- Automatic title attribute optimization
- SEO-friendly filename generation with multiple templates
- Support for product name, shop name, product number, and manufacturer number
- Multi-language support

**Administration Dashboard**
- Real-time progress tracking with percentage and processed images
- Batch processing with configurable batch size
- Start/stop processing controls
- Detailed statistics and error logging
- Server capability detection (Imagick/GD, WebP/AVIF support)

**Technical Features**
- Shopware 6.5, 6.6, and 6.7 compatibility
- Scheduled task support for automatic background processing
- Message queue integration for async processing
- Twig filter for WebP image delivery in storefront
- Automatic cleanup of WebP/AVIF files when media is deleted

---

## Compatibility

| Plugin Version | Shopware Version | PHP Version |
| -------------- | ---------------- | ----------- |
| 1.0.x          | 6.5.0 - 6.7.x    | 8.1+        |
