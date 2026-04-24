# How-to Guides

Step-by-step workflows for common tasks with **Manufacturer Pages**.

---

## How the Plugin Works

### Data Flow Overview

```
Product manufacturer (catalog) → Plugin logic → Storefront page + CMS element + sitemap entry
```

**Example flow**:

1. A product is assigned to a manufacturer "Acme" in the catalog.
2. The plugin automatically picks up "Acme" as an available manufacturer.
3. In the storefront, "Acme" appears in the manufacturer overview (if the CMS element is placed), under `/manufacturer/{id}` or `/brand/acme`, and in the sitemap.

---

## Common Workflows

### How to: Set up a manufacturer landing page

**Goal**: A dedicated page in the store that lists all manufacturers alphabetically.

**Time required**: ~ 10 minutes

**Prerequisites**:
- Plugin is installed and activated.
- At least some products are assigned to manufacturers.

**Steps**:

1. **Create a new Shopping Experience**
   - Navigate to: **Content → Shopping Experiences → New Shopping Experience**
   - Type: *Shop page*, name: e.g. "Brand Overview".

2. **Insert the manufacturer block**
   - In the layout editor click **Add block**.
   - Open the **Commerce** category → select the **Manufacturer Overview** block and drag it into the layout.

3. **Save and preview**
   - Save the Shopping Experience.
   - Assign the Shopping Experience to a sales channel and a page (e.g. a shop page "Manufacturers").

4. **Link it in the storefront**
   - Navigate to: **Catalogues → Categories** and optionally create a menu entry pointing to the new page, or link it from the footer.

**Result**: Customers see a complete A–Z manufacturer overview at `/manufacturers` (or your chosen URL).

**Troubleshooting**: If the list stays empty, check that at least one **active** manufacturer is assigned to at least one **active** product.

---

### How to: Generate SEO URLs one-off (manually)

**Goal**: Immediate generation of all SEO URLs without waiting for the next scheduled run.

**Time required**: a few seconds

**Prerequisites**:
- Option **"Activate SEO URL generation"** is on.
- Access to Shopware administration.

**Steps**:

1. **Run the scheduled task**
   - Navigate to: **Settings → System → Scheduled Tasks**
   - Locate the task named **webla_manufacturerpages.seo_url.task** (or similar, depending on your Shopware version).
   - Click **Run now**.

2. **Verify the result**
   - Open a manufacturer page in the storefront — the URL should now be `/<prefix>/<manufacturerName>` instead of `/manufacturer/{id}`.

**Result**: All manufacturers have speaking URLs per activated language.

**Troubleshooting**: If the message worker is not running, the task will be queued but not processed. Start the message worker (`bin/console messenger:consume`) or contact your hosting provider.

---

### How to: Hide a single manufacturer

**Goal**: A manufacturer that should no longer appear in the store (e.g. a discontinued brand) is removed from overview and sitemap — without deleting it.

**Time required**: 1 minute

**Steps**:

1. **Open the manufacturer**
   - Navigate to: **Catalogues → Manufacturers**
   - Open the desired manufacturer.

2. **Set the custom field**
   - In the **Custom Fields** section activate the switch **Hide manufacturer**.
   - Save.

**Result**: The manufacturer no longer appears in the manufacturer overview and is excluded from the next sitemap generation.

---

### How to: Define featured manufacturers

**Goal**: Selected manufacturers (e.g. headline brands) are displayed prominently above the general list.

**Time required**: 1 minute per manufacturer

**Steps**:

1. **Open the manufacturer** (**Catalogues → Manufacturers**).
2. **Set the custom field** — activate the switch **Featured manufacturer**.
3. Save.
4. Repeat for additional featured manufacturers.

**Result**: On the storefront overview the marked manufacturers additionally appear in the "Featured Manufacturers" area.

---

## Advanced Workflows

### Maintain a custom text block per manufacturer

**Complexity**: Low

**When to use**: For individual SEO texts, brand descriptions, or legal notes that should appear only on one specific manufacturer page.

**Steps**:

1. Open the manufacturer (**Catalogues → Manufacturers**).
2. In the **Custom Fields** section fill the field **Text at the end of the manufacturer** (HTML editor with formatting).
3. Save. The text appears below the product listing on the detail page.

---

## Quick Reference

| Task                                 | Key steps                                                               | Required settings            |
| ------------------------------------ | ----------------------------------------------------------------------- | ---------------------------- |
| Set up manufacturer landing page     | Shopping Experience → insert **Manufacturer Overview** block → save    | —                            |
| Enable SEO URLs                      | Open configuration → "SEO URL generation" on → set prefix              | `seoactive`, `seoprefixlang`, `seoprefix` |
| Generate SEO URLs manually           | Scheduled Tasks → **GenerateSEOUrlTask** → **Run now**                 | task worker running          |
| Hide a manufacturer                  | Open manufacturer → custom field **Hide manufacturer** on              | —                            |
| Mark featured manufacturers          | Open manufacturer → custom field **Featured manufacturer** on          | —                            |

---

## Best Practices

1. **Create a category for breadcrumbs**: A dedicated "Manufacturers" category in the catalog improves navigation and SEO, even if it is not visible in the main menu.
2. **Set a language-specific SEO prefix**: Avoid `/manufacturer/` in a German store — use `/hersteller/` for better results in German-language search engines.
3. **Use featured manufacturers sparingly**: 5–10 highlighted manufacturers work better than 50 "featured" ones — otherwise the highlighting loses its effect.

## What to Avoid

- ❌ **Activating a manufacturer after installation and not rebuilding the cache** — SEO URLs are only generated correctly after a cache rebuild.
- ❌ **Setting the SEO URL Prefix to an empty string** — this produces URLs like `//acme` instead of `/brand/acme`.
- ❌ **Disabling the scheduled task but leaving SEO URL generation on** — new manufacturers will never get speaking URLs.
