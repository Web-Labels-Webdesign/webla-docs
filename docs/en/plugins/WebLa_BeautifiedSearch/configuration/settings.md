# Configuration Settings

This document describes all available settings for the "Search as Overlay" plugin.

**Navigation**: Extensions → My Extensions → Search as Overlay → Configure

---

## Display Configuration

These settings control the appearance of the search overlay and which content types are searched.

### View Mode

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Standard |
| **Required** | No     |

**Description**: Determines the layout style of the search overlay.

**Options**:
- `Standard`: Classic tabbed interface where products, categories, blog, and manufacturers are displayed in separate tabs. Users click tabs to switch between content types.
- `Modern`: Side-by-side layout on desktop devices. Products are displayed on the left side (taking up 2/3 of the width), while categories and blog results appear in a sidebar on the right (1/3 of the width). On mobile devices, the modern view falls back to the tabbed interface for better usability.

**Example Use Case**:
- Choose "Standard" for a traditional search experience that works consistently across all devices
- Choose "Modern" for a more contemporary look that shows multiple content types at once on larger screens, reducing the need to switch tabs

**Note**: The modern view currently displays products, categories, and blog articles. Manufacturer search results are only visible in the mobile tabbed fallback.

---

### Activate Category Search

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables an additional tab in the search overlay that shows matching categories for the search term. The search looks through category name, description, meta title, meta description, and keywords.

**Example Use Case**: Ideal for shops with many categories. When a customer searches for "jackets", categories like "Men's Jackets" or "Women's Jackets" are displayed alongside the products.

---

### Activate Blog Search

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables searching blog articles. An additional "Blog" tab is displayed in the search overlay. Supports NetzP Blog and H1 Web Blog.

**Prerequisite**: A compatible blog plugin must be installed (NetzP Blog or H1 Web Blog).

**Example Use Case**: Useful for shops with a content marketing strategy. When a customer searches for "care", blog articles like "Proper Leather Care" are also displayed.

---

### Width of the Search Overlay

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Text   |
| **Default**  | 500px  |
| **Required** | No     |

**Description**: Defines the width of the search overlay. You can use any valid CSS value (px, %, vw, etc.).

**Example Values**:
- `500px` - Fixed width of 500 pixels
- `50%` - 50% of viewport width
- `80vw` - 80% of viewport width

**Example Use Case**: Adjust the width to match your theme. For many products per row, a larger width like `800px` or `70%` is recommended.

---

### Number of Products per Column

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | 3      |
| **Required** | No     |

**Description**: Determines how many products are displayed per row in the search overlay.

**Options**:
- `2`: Two products per row - larger product display
- `3`: Three products per row - balanced layout (recommended)
- `4`: Four products per row - compact display
- `6`: Six products per row - very compact display

**Example Use Case**: Choose 2 or 3 for products where images are important (e.g., fashion). Choose 4 or 6 for technical products where text is more important.

---

### Number of Products in Suggest Overlay

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | 10     |
| **Required** | No     |

**Description**: Maximum number of products loaded into the suggest overlay. Whenever the search has more matches than this limit, a "Show all results" button appears below the product grid that links to the full search results page.

**Options**: `10`, `20`, `30`, `50`

**Example Use Case**: Keep the default of 10 if you want a compact, fast overlay. Raise to 20 or 30 if your customers benefit from seeing more matches directly without leaving the overlay. Higher limits slightly increase the search query load — for high-traffic shops, stay close to the default.

---

### Box Layout

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Search |
| **Required** | No     |

**Description**: Determines the appearance of product boxes in the search overlay.

**Options**:
- `Search`: Special search layout, optimized for quick overview
- `Standard`: Standard Shopware product box with all details
- `Big Image`: Image-oriented layout with large product image
- `Minimal`: Minimalist layout, only the most important information

**Example Use Case**:
- "Search" for quick product discovery
- "Big Image" for fashion or lifestyle shops
- "Minimal" for technical products or B2B shops

---

### Show Category Images

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Shows the category image next to the category name in search results.

**Prerequisite**: Categories must have images assigned (under Catalogues → Categories → [Category] → Image).

**Example Use Case**: Enable this option if your categories have meaningful images that facilitate navigation.

---

### Show Manufacturer Images

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Shows the manufacturer logo next to the manufacturer name in search results.

**Prerequisite**: Manufacturers must have logos assigned (under Catalogues → Manufacturers → [Manufacturer] → Logo).

**Example Use Case**: Particularly useful for shops with well-known brands, as logos are recognized faster than text.

---

## Search Configuration

These settings enable more precise product search using unique identifiers.

### Activate Search for Unique Products

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables the extended search function that finds products by their unique identifiers (EAN, article number, manufacturer number). This search is more exact than full-text search.

**Example Use Case**: Ideal for B2B shops or technical products where customers often search for exact numbers. When a customer enters "4006381333931" (EAN), the correct product is displayed directly.

---

### Specifically Search by

| Property     | Value        |
| ------------ | ------------ |
| **Type**     | Multi-select |
| **Default**  | All active   |
| **Required** | No           |

**Description**: Determines which product fields are used for unique search.

**Options**:
- `Product Number`: Your internal article number (SKU)
- `Manufacturer's Number`: The manufacturer's article number (MPN)
- `EAN/GTIN`: The product's barcode

**Example Use Case**: Disable fields that are not maintained or not relevant in your shop. B2B shops should leave all options enabled.

---

### Remove Formatting from Search Term

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Removes spaces, hyphens, and other formatting characters from the search term before searching. A search for "XY 00-11" will then also find products with the number "XY0011".

**Note**: This function is not reversible. Searching for "XY0011" will automatically also find "XY 00-11".

**Example Use Case**: Very useful when article numbers can be entered in different formats (with/without hyphens, with/without spaces).

---

### Search Includes Parent Products

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: When enabled, the parent product's article number is also searched. If a variant has the same number as its main product, the matching product is displayed.

**Example Use Case**: Important for shops with variants where the main product has an overarching article number. Disable this option if each variant should have a completely independent number.

---

## Sales Channel Specific Settings

All settings can be configured individually per sales channel.

| Setting                              | Scope             |
| ------------------------------------ | ----------------- |
| View Mode                            | Per Sales Channel |
| Activate Category Search             | Per Sales Channel |
| Activate Blog Search                 | Per Sales Channel |
| Width of the Search Overlay          | Per Sales Channel |
| Number of Products per Column        | Per Sales Channel |
| Number of Products in Suggest Overlay| Per Sales Channel |
| Box Layout                           | Per Sales Channel |
| Show Category Images                 | Per Sales Channel |
| Show Manufacturer Images             | Per Sales Channel |
| Activate Search for Unique Products  | Per Sales Channel |
| Specifically Search by               | Per Sales Channel |
| Remove Formatting from Search Term   | Per Sales Channel |
| Search Includes Parent Products      | Per Sales Channel |

**Navigation**: Extensions → My Extensions → Search as Overlay → Configure → Select Sales Channel

---

## Recommended Configurations

### For B2C Shops (Fashion, Lifestyle)

| Setting                            | Recommended Value   |
| ---------------------------------- | ------------------- |
| View Mode                          | Modern              |
| Activate Category Search           | On                  |
| Activate Blog Search               | On (if blog exists) |
| Width of the Search Overlay        | 600px               |
| Number of Products per Column      | 3                   |
| Box Layout                         | Big Image           |
| Show Category Images               | On                  |
| Activate Search for Unique Products | Off                |

### For B2B Shops (Technical Products)

| Setting                             | Recommended Value |
| ----------------------------------- | ----------------- |
| View Mode                           | Standard          |
| Activate Category Search            | On                |
| Activate Blog Search                | Off               |
| Width of the Search Overlay         | 700px             |
| Number of Products per Column       | 4                 |
| Box Layout                          | Minimal           |
| Activate Search for Unique Products | On                |
| Specifically Search by              | All Options       |
| Remove Formatting from Search Term  | On                |
| Search Includes Parent Products     | On                |
