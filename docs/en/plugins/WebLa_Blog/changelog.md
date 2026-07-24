# Changelog

## 1.0.0

- Initial release of WebLa Blog for Shopware 6.6.4 – 6.7.
- Blog posts and categories with multilingual translations; the storefront falls back to the main language for any field that isn't translated.
- Preview/header image and image gallery per post.
- SEO-friendly, language-aware URLs via Shopware's native SEO URL system: clean canonical paths per language (e.g. /blog/{category}/{post}), automatic (re)generation when content changes, redirects when a slug changes, SEO meta fields and an XML sitemap built from the canonical URLs.
- JSON-LD structured data (BlogPosting, BreadcrumbList, CollectionPage) and canonical URLs.
- Inline content builder — a grid of text, image, gallery, FAQ accordion and table widgets with reusable templates — offered as a Shopware In-App Purchase (gated in both the storefront and the administration); the rest of the blog stays free.
- CMS shopping-experience blocks and elements: blog listing, blog news portal, blog slider, FAQ and table.
- Per-post product slider with manual selection, product stream or category source.
- Sales-channel assignment for posts and categories (empty = all channels).
- Dedicated administration modules for blog posts and categories, modelled on the product list/detail: reload action, filter sidebar, scoped search, entity count, in-viewport pagination, and a language switch with parent-translation inheritance shown as field placeholders.
- Configurable theming: accent colour, font family and font sizes with theme fallback.
