# Configuration Settings

This document describes all available settings for **Manufacturer Pages**.

**Navigation**: Extensions → My Extensions → Manufacturer Pages → Configure

All settings are configurable **per sales channel**. If you do not pick a specific sales channel, the value applies as the global default.

---

## Manufacturer Pages Configuration

### Hide manufacturer with products without stock available

| Property         | Value                |
| ---------------- | -------------------- |
| **Type**         | Switch (on/off)      |
| **Default**      | Off                  |
| **Required**    | No                   |

**Description**: When enabled, manufacturers whose products are all sold out or inactive are hidden from the manufacturer overview.

**Use case**: Enable this option if you do not want to display "dead" manufacturers whose products are currently not orderable.

---

### Activate SEO URL generation

| Property         | Value                |
| ---------------- | -------------------- |
| **Type**         | Switch (on/off)      |
| **Default**      | Off                  |
| **Required**    | No                   |

**Description**: When enabled, the plugin automatically generates speaking URLs for every manufacturer page (e.g. `/brand/acme` instead of `/manufacturer/{id}`). Generation runs via a Shopware scheduled task.

**Use case**: Enable this for better search engine ranking and for URLs that customers can share.

---

### Choose the category for the manufacturer page

| Property         | Value              |
| ---------------- | ------------------ |
| **Type**         | Category selection |
| **Default**      | — (not set)        |
| **Required**    | No                 |

**Description**: Defines the category under which manufacturer pages appear in the breadcrumb path. The category must be **created manually in the catalog** and then linked here.

**Use case**: Create a category "Manufacturers" or "Brands" in the catalog, disable it in the main menu (if unwanted), and select it here so that customers know which area of your store they are in.

---

### SEO URL Prefix

| Property         | Value                                 |
| ---------------- | ------------------------------------- |
| **Type**         | Snippet (language-dependent text)     |
| **Default**      | `manufacturer` (en-GB) / `hersteller` (de-DE) |
| **Required**    | No                                    |

**Description**: The language-specific prefix that appears in the final SEO URL. The resulting URL has the format `/<prefix>/<manufacturerName>`.

**Use case**: Enter `brand` for the English sales channel and `hersteller` for the German one — the plugin generates matching URLs per language.

---

### Fallback SEO URL Prefix

| Property         | Value                         |
| ---------------- | ----------------------------- |
| **Type**         | Text                          |
| **Default**      | — (internal: `manufacturer`)  |
| **Required**    | No                            |

**Description**: Used when no SEO URL prefix has been defined for the active language via the snippet field.

**Use case**: Set a neutral value like `brand` to prevent URLs from one language accidentally appearing in another.

---

## Recommended Configurations

### For strongly brand-focused stores

| Setting                              | Recommended value        |
| ------------------------------------ | ------------------------ |
| Hide out-of-stock manufacturers      | Off                      |
| SEO URL generation                   | On                       |
| Category for manufacturer page       | Own category "Brands"    |
| SEO URL Prefix                       | `brand` / `brands`       |

### For stores with large assortments and high stock rotation

| Setting                              | Recommended value        |
| ------------------------------------ | ------------------------ |
| Hide out-of-stock manufacturers      | On                       |
| SEO URL generation                   | On                       |
| Category for manufacturer page       | optional                 |
