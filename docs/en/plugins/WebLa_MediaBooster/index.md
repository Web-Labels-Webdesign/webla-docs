# Media Booster

> Automatic image optimization for Shopware 6. Compresses images, converts to WebP/AVIF and optimizes SEO metadata for faster loading times and better search rankings.

## Overview

Media Booster is a powerful image optimization plugin for Shopware 6 that automatically processes your product images and media. The plugin significantly reduces file sizes while maintaining visual quality - resulting in faster loading times and a better shopping experience.

Optimization runs automatically in the background or can be started manually via a clear dashboard. Not only are the images themselves optimized, but their SEO-relevant metadata such as alt tags, titles, and filenames can also be automatically adjusted.

## Key Features

- **Image Resizing**: Automatically shrinks oversized original images to configurable maximum dimensions to save storage space
- **WebP Conversion**: Converts JPG, JPEG, and PNG images to the modern WebP format for up to 30% smaller files
- **AVIF Conversion**: Converts images to the highly efficient AVIF format for even better compression
- **SEO Alt Tag Optimization**: Automatically fills empty alt tags with product names or configurable texts
- **SEO Title Optimization**: Optimizes image titles for better search engine indexing
- **SEO Filename Optimization**: Renames product images to SEO-friendly names based on product name, article number, or manufacturer
- **Background Processing**: Processes images gently in the background without impacting shop performance
- **Dashboard**: Clear admin panel with progress display and statistics

## Requirements

- Shopware Version: 6.5.0 or higher (up to 6.7.x)
- PHP Version: 8.1 or higher
- PHP Imagick extension (recommended for best results) or GD Library
- WebP support in Imagick or GD for WebP conversion
- AVIF support in Imagick or GD for AVIF conversion

## Quick Start

1. Install the plugin via Plugin Manager or Composer
2. Activate the plugin in **Extensions → My Extensions**
3. Configure basic settings in **Settings → Extensions → Media Booster**
4. Open the dashboard at **Settings → Extensions → Media Booster** and start processing with "Start All"

## Documentation Contents

- [Configuration Settings](configuration/settings.md) - All available settings explained
- [Usage Guide](usage/usage.md) - How to use all plugin features
- [How-To Guide](how_to.md) - Step-by-step workflows
- [Changelog](changelog.md) - Version history and updates

## Support

For questions or issues, please visit our documentation page at [https://docs.web-labels.de/](https://docs.web-labels.de/) or contact us through the Shopware Store.
