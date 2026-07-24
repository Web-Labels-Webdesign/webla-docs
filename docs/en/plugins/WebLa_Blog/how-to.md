# How-to

Practical guides for everyday work with WebLa Blog.

## Create a category

1. In the administration open **WebLa Blog → Categories**.
2. **Add category**, set the name and slug (the slug forms the SEO URL `/blog/{category}`).
3. Optionally assign sales channels. Leave empty = visible in all channels.
4. Maintain translations via the language switch; empty fields inherit the main-language value (shown as a placeholder).

## Create a post

1. **WebLa Blog → Posts → Add post**.
2. Set title, slug, category, preview/header image and optionally an image gallery.
3. Build the content with the **inline content builder** (see below).
4. Optionally configure a **product slider**: manual selection, product stream or category as the source.
5. Assign sales channels (empty = all) and save.

## Using the inline content builder

> The content builder is unlocked through a Shopware In-App Purchase. Without the purchase the widgets are gated in both the administration and the storefront; the rest of the blog stays usable.

1. Add a **row** with 1–4 columns to the post.
2. Per column pick a widget: **text, image, gallery, FAQ (accordion)** or **table**.
3. Rows can be reordered and combined freely.

## Reusing templates

1. Save the structure of a finished post as a **template**.
2. In a new post, load the template – rows and widgets are copied over and can be adjusted.

## CMS blocks in shopping experiences

In **Content → Shopping Experiences** the blog blocks are available: blog overview, blog slider, news portal, FAQ and table. Insert a block and link it to posts/categories via the element settings.

## Adjusting the appearance

Under **Extensions → WebLa Blog → Configuration** you can set the accent colour, font family and font sizes. Every field is optional – empty means the theme default is used.

## SEO

Posts and categories automatically receive language-aware SEO URLs. When a slug changes, redirects are created, and the URLs feed into the XML sitemap. Structured data (JSON-LD) and canonical URLs are emitted automatically.
