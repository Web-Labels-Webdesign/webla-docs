# WebLa Blog

A full blog system for Shopware 6.6.4 – 6.7 with an inline content builder, CMS shopping-experience blocks and SEO. The plugin itself is free; the inline content builder is unlocked through a Shopware In-App Purchase.

## Feature overview

- **Posts & categories** with multilingual translations, preview/header image and image gallery. Untranslated fields fall back to the main language automatically.
- **Inline content builder** directly on the post: rows with 1–4 columns and the widgets text, image, gallery, FAQ (accordion) and table – no separate shopping experience needed. Unlocked through a Shopware In-App Purchase (gated in both storefront and administration until purchased).
- **Reusable templates**: save the structure of a post and load it into new posts.
- **CMS blocks** for shopping experiences: blog overview, blog slider, news portal, FAQ, table.
- **Product slider** per post (manual selection, product stream or category).
- **Sales-channel assignment** for posts and categories (empty = all channels).
- **SEO**: native, language-aware SEO URLs, automatic (re)generation and redirects on slug changes, sitemap integration, JSON-LD (BlogPosting, BreadcrumbList, CollectionPage) and canonical URLs.
- **Administration**: dedicated modules for posts and categories, modelled on the product list/detail.
- **Theming**: configurable accent colour, font family and font sizes, otherwise theme values.

## Requirements

- Shopware 6.6.4 – 6.7

## Installation

1. Place the plugin in `custom/plugins/WebLa_Blog`.
2. Run `bin/console plugin:install --activate WebLa_Blog`.
3. Rebuild the administration (`bin/build-administration.sh`) and clear the cache.

## Storefront routes

- `/blog` – overview
- `/blog/{category}` – category
- `/blog/{category}/{post}` – post

## Configuration

Extensions → WebLa Blog → Configuration:

- **Appearance**: accent colour (empty = primary theme colour), font family as CSS `font-family` (empty = theme font).
- **Font sizes – overview**: heading and teaser of the post cards.
- **Font sizes – detail page**: headline, body text and H2–H6.

All fields are optional – an empty field uses the corresponding theme default.

See [How-to](how-to.md) for guides and the [Changelog](changelog.md) for the version history.

## Support

WebLabels – https://web-labels.de · info@web-labels.de
