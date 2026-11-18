**Changelog**

All notable changes to WebLa Blog for end users.

---

# 1.0.1

_Released 2026-11-18_

- Fixed: the "Content Builder" In-App Purchase can now be purchased and unlocked in the administration. The plugin now requests it under its correct technical name.
- Fixed: the FAQ element used the CMS type `webla-faq` — the same type webla_richsnippets registers for its own FAQ element. In shops running both plugins, plugin load order alone decided which of the two FAQ elements actually rendered; the other stayed empty. The type is now `webla-blog-faq`, existing content is migrated automatically.
- Security: structured data on the post and listing pages now escapes angle brackets in the JSON-LD blocks (`JSON_HEX_TAG`).
- Changed: `mainEntityOfPage` in the BlogPosting schema now points at the page's WebPage entry (`#webpage`) instead of the bare URL — consistent with webla_richsnippets' WebPage schema, where installed.

---

# 1.0.0

- Initial release of WebLa Blog for Shopware 6.6. – 6.7.
- Blog posts and categories with multilingual translations; the storefront falls back to the main language for any field that isn't translated.
- SEO-friendly, language-aware URLs for posts and categories via Shopware's native SEO URL system: clean canonical paths per language (e.g. /blog/{category}/{post}), automatic (re)generation when content changes, redirects when a slug changes, SEO meta fields and an XML sitemap built from the canonical URLs.
- Inline content builder — a grid of text, image, gallery, FAQ and table widgets with reusable templates — offered as a Shopware In-App Purchase (gated in both the storefront and the administration); the rest of the blog stays free.
- CMS blocks and elements for shopping experiences: blog listing, blog news portal, blog slider, FAQ and table.
- Per-post product slider with manual selection, product stream or category source.
- Configurable theming: accent colour, font family and font sizes.
- Dedicated administration modules for blog posts and categories, modelled on the product list/detail: reload action, filter sidebar, scoped search, entity count, in-viewport pagination, and a language switch with parent-translation inheritance shown as field placeholders.
