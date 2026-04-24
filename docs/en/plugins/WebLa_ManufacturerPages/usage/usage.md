# Usage Guide

This guide covers all features and options of **Manufacturer Pages**.

---

## Table of Contents

- [Manufacturer Detail Page](#manufacturer-detail-page)
- [CMS Element Manufacturer Overview](#cms-element-manufacturer-overview)
- [Featured Manufacturers (Top)](#featured-manufacturers-top)
- [SEO URLs](#seo-urls)
- [Manufacturer-specific Fields](#manufacturer-specific-fields)
- [Admin Panel Features](#admin-panel-features)
- [Storefront Features](#storefront-features)
- [Troubleshooting](#troubleshooting)

---

## Manufacturer Detail Page

### What it does

A dedicated detail page is automatically provided for every created manufacturer. Customers see all products of that manufacturer, can filter, sort and paginate — exactly like on a normal category listing.

### How to use it

The page is **active automatically** after installation — no manual setup needed. It is reachable at:

- `/manufacturer/{id}` (standard)
- or `/<prefix>/<manufacturerName>` (when SEO URLs are enabled)

**Location in admin**: Manage manufacturers as usual under **Catalogues → Manufacturers**.

### Tips

- Upload a **logo** per manufacturer (media field) — it is shown on the overview and serves as a fallback banner on the detail page.
- Use the field **"Text at the end of the manufacturer"** (see below) for custom SEO texts or brand descriptions.

---

## CMS Element Manufacturer Overview

### What it does

The plugin registers a **CMS block** and a **CMS element** named *Manufacturer Overview* in the **Commerce** category. With these, you can drag the alphabetically sorted manufacturer list into any Shopping Experience.

### How to use it

1. Go to **Content → Shopping Experiences**.
2. Open or create a page (e.g. "Brand Overview").
3. Drag the block **Manufacturer Overview** from the **Commerce** category into your layout.
4. Save, and the storefront will display an A–Z grouped manufacturer list with a letter filter.

### Location

**CMS editor**: Blocks → Category **Commerce** → *Manufacturer Overview*

### Tips

- Link to the page via **Shop pages** in the footer or as a dedicated navigation entry.
- The display can be further customized via dedicated CSS classes (`webla_manufacturers_wrapper`, `webla_manufacturer`, `webla_manufacturers-key`) if you want individual styling.

---

## Featured Manufacturers (Top)

### What it does

Individual manufacturers can be marked as **Featured Manufacturers**. They then appear in a separate area above the alphabetical overview and are highlighted there.

### How to use it

1. Open a manufacturer under **Catalogues → Manufacturers**.
2. Scroll to the **Custom Fields** section.
3. Enable the switch **Featured manufacturer**.
4. Save.

In the storefront, the manufacturer now additionally appears in the top "Featured Manufacturers" area.

---

## SEO URLs

### What they do

Instead of the technical URL `/manufacturer/{id}`, speaking URLs like `/brand/acme` can be generated. This is better for search engines and for users sharing links.

### How to enable them

1. Go to **Extensions → My Extensions → Manufacturer Pages → Configure**.
2. Enable **"Activate SEO URL generation"**.
3. Set a prefix per language in the **SEO URL Prefix** field (e.g. `brand` for English, `hersteller` for German).
4. Optional: Enter a **Fallback SEO URL Prefix** in case the language-specific field is unset.
5. Save.

The URLs are generated periodically by the Shopware scheduled task **"GenerateSEOUrlTask"**. You can also trigger generation manually — see the [How-to Guides](../how_to.md).

---

## Manufacturer-specific Fields

On install, the plugin creates the following **custom fields** at the manufacturer level:

| Field                              | Type       | Purpose                                                                 |
| ---------------------------------- | ---------- | ----------------------------------------------------------------------- |
| **Hide manufacturer**              | Switch     | Hides the manufacturer from the overview and sitemap.                  |
| **Featured manufacturer**          | Switch     | Marks the manufacturer as featured and displays it in the highlighted area. |
| **Text at the end of the manufacturer** | Text editor (HTML) | Free text block displayed below the product listing on the manufacturer page. |

**Location**: Catalogues → Manufacturers → *select a manufacturer* → section **Custom Fields**.

---

## Admin Panel Features

### Configuration per sales channel

**Location**: Extensions → My Extensions → Manufacturer Pages → Configure

**Purpose**: All settings can be overridden per sales channel. So you can, for example, use different SEO prefixes in your DE store than in your EN store.

---

### CMS Elements

**Location**: Content → Shopping Experiences → *edit page* → section **Commerce**

**Purpose**: Insert manufacturer lists into any Shopping Experience.

---

### Custom Fields at manufacturer level

**Location**: Catalogues → Manufacturers → *edit manufacturer* → **Custom Fields**

**Purpose**: Per-manufacturer visibility control and individual text block.

---

## Storefront Features

### Manufacturer Detail Page

**Where it appears**: Under the SEO URL (e.g. `/brand/acme`) or `/manufacturer/{id}`.

**What customers see**: Manufacturer banner/logo, product listing with filter and sorting, optional text block below.

---

### Manufacturer Overview (CMS)

**Where it appears**: On every Shopping Experience where you inserted the block **Manufacturer Overview**.

**What customers see**: Alphabetically grouped manufacturer list (A–Z plus `0-9`), letter filter, "Reset all" button. Optionally above it, the marked featured manufacturers.

**Customization options**: Via custom CSS classes in the theme — the plugin does not provide a dedicated admin UI for styling.

---

## Troubleshooting

### Manufacturer does not appear in the overview

**Symptom**: A created manufacturer is missing from the CMS overview.

**Cause**: Either the manufacturer has no active product assigned, or the custom field **"Hide manufacturer"** is active, or the option **"Hide manufacturer with products without stock available"** applies.

**Solution**: Verify that at least one active product with stock is assigned to the manufacturer and that the "Hide manufacturer" switch is off.

---

### SEO URL is not generated automatically

**Symptom**: After enabling SEO URL generation, URLs still appear in the format `/manufacturer/{id}`.

**Cause**: The scheduled task **GenerateSEOUrlTask** has not yet been executed, or the Shopware message worker is not running.

**Solution**: Run the scheduled task manually (see [How-to Guides](../how_to.md)) or start the message worker. Then rebuild the cache (**Settings → Cache & Indexes → Clear cache**).

---

### Featured manufacturers are not displayed

**Symptom**: The "Featured manufacturers" area is empty even though manufacturers are marked.

**Cause**: The featured manufacturer is also hidden from the general manufacturer overview (e.g. via "Hide manufacturer" or the stock filter), or it has no active products.

**Solution**: Disable "Hide manufacturer" and check the product assignment.

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-to Guides](../how_to.md)
