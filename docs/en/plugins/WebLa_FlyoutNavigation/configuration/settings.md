# Configuration settings

This document describes every available setting for the **Flyout Navigation** plugin.

**Navigation**: Extensions → My extensions → Flyout Navigation → Configure

> Note: All settings are maintained **per sales channel**. Make sure the correct sales channel is selected at the top of the configuration page before making changes.

---

## Basic settings

Master switch, general behaviour and high-level layout options.

| Setting | Type | Description |
|---------|------|-------------|
| Activate flyout navigation for this sales channel | Switch | Master switch. Until enabled the shop behaves as if the plugin were not installed. |
| Header background color | Colorpicker | Background color of the header bar. |
| Show Home link in navigation | Switch | Adds an extra "Home" entry at the start of the main navigation. |
| Number of navigation levels to show for flyouts (global) | Number | How many levels the flyout renders (default 3). Can be overridden per category. |
| Main flyout trigger | Select (Hover / Click) | How the top-level dropdown opens. |
| Sublevel trigger | Select (Hover / Click) | How subcategories inside the flyout open. |
| Show "All categories" navigation on desktop | Switch | Shows a prominent "All categories" entry at the start of the navigation. **Not** combinable with "Show mobile navigation on desktop". |
| Show burger icon before label | Switch | Shows the stack/burger icon in front of the "All categories" label. |
| Label for "All categories" | Text | Customisable label for the "All categories" entry. Default: "All categories". |
| Show mobile navigation on desktop | Switch | Replaces the classic desktop navigation with the burger toggle / offcanvas navigation. **Not** combinable with "All categories". |
| Activate sticky header | Switch | Keeps the header visible at the top of the viewport while scrolling. |
| Activate custom topbar | Switch | Activates the custom topbar above the header. Maintain its items in the "Custom Topbar" section. |
| Hide topbar when sticky | Switch | Hides the topbar as soon as the header enters its sticky state. Only effective if "Activate sticky header" is on. |
| Sticky header logo | Media field | Optional alternative logo used in the sticky state. Falls back to the default logo if empty. |

---

## Navbar

Styling of the main navigation (typography, colors, spacing, border).

| Setting | Type | Description |
|---------|------|-------------|
| Background color for navigation list | Colorpicker | Background of the main navigation. |
| Font size for navigation items (px) | Text | e.g. `16px`. |
| Font color for main navigation items | Colorpicker | Default text color for the menu items. |
| Hover color for navigation items | Colorpicker | Text color when hovered. |
| Background color on hover for menu items | Colorpicker | Background of a menu item in the hover state. |
| Color for active category | Colorpicker | Highlight color for the currently active category. |
| Border-bottom for menu items | Text | CSS border definition, e.g. `1px solid #e0e0e0`. Empty = no border. |
| Padding for navbar items | Text | CSS padding, e.g. `0.5rem 1rem`. |

---

## Flyout menu

Behaviour and styling of the dropdown / flyout panels themselves.

### Behaviour

| Setting | Type | Description |
|---------|------|-------------|
| Show flyout in full width | Switch | The flyout spans the full viewport width (mega-menu layout). Disabled = compact dropdown directly below the trigger. |
| From which main menu item the dropdown should open to the left | Select (Only per category setting / From item 1–5 / Never) | Controls the global opening direction for non-full-width flyouts. The default ("Only per category setting") lets the per-category custom field decide; a threshold makes every dropdown from the Nth item onwards open to the left (and the per-category field can still override individual dropdowns); "Never" forces all dropdowns to open to the right and ignores the per-category field. |
| Icon for categories with subcategories | Select (None / Arrow right / Chevron right) | Icon shown next to categories that have subcategories. Default: chevron right. In left-opening flyouts the icon automatically moves to the front of the category name and points left. |
| Hide close button | Switch | Hides the close button inside the flyout. The button is only displayed in the full-width variant anyway. |

### Styling

| Setting | Type | Description |
|---------|------|-------------|
| Flyout background color | Colorpicker | Background of the flyout panel. |
| Border-top for flyout | Text | CSS border separating the flyout from the menu bar, e.g. `2px solid #e0e0e0`. |
| Font size for flyout items (px) | Text | e.g. `16px`. |
| Flyout font color | Colorpicker | Default text color of the flyout items. |
| Flyout hover color | Colorpicker | Text color on hover. |
| Background color on hover for flyout items | Colorpicker | Background of a flyout item in the hover state. |
| Padding for flyout menu items | Text | CSS padding, e.g. `0.5rem 1rem`. |
| Border-bottom for flyout items | Text | Separator line between flyout items, e.g. `1px solid #e0e0e0`. |
| Close-button background color | Colorpicker | Only visible in the full-width mode. |
| Close-button icon color | Colorpicker | Icon color of the close button. |

---

## "All categories" entry – styling

Visual fine-tuning for the optional "All categories" entry.

| Setting | Type | Description |
|---------|------|-------------|
| All Categories background color | Colorpicker | Background of the button in the navbar. |
| All Categories font color | Colorpicker | Label color. |
| All Categories icon color | Colorpicker | Icon color (only visible when the burger icon is enabled). |

---

## Mobile navigation – styling

Visual fine-tuning for the mobile offcanvas navigation and the burger toggle.

| Setting | Type | Description |
|---------|------|-------------|
| Burger background color | Colorpicker | Background of the burger toggle button in the header. |
| Burger icon color | Colorpicker | Icon color of the burger toggle button. |
| Color for the active category | Colorpicker | Highlight for the currently active category in the offcanvas. |
| Color for "Show all categories" | Colorpicker | Color of the home/root link inside the offcanvas. |

---

## Custom topbar

A thin bar above the header with up to three USP / contact items. Requires: **"Activate custom topbar"** is on in the basic settings **and** at least one item text is filled in.

### General

| Setting | Type | Description |
|---------|------|-------------|
| Topbar items alignment | Select (Left / Center / Right) | Horizontal position of the items within the topbar. |
| Topbar background color | Colorpicker | Background of the entire topbar. |
| Text color for topbar items | Colorpicker | Default text color for all items, unless individually overridden. |

### Topbar items 1, 2 and 3

Identical fields per item. Items with empty text are hidden.

| Setting | Type | Description |
|---------|------|-------------|
| Topbar Item X – Text | Text | Display text of the item. Empty = item is hidden. |
| Topbar Item X – Link type | Select (URL / Email / Phone) | How the "Link to" value is interpreted. |
| Topbar Item X – Link to | Text | Link target. URL e.g. `https://…`, email address for email, phone number for phone. Leave empty for a label without link. |
| Topbar Item X – Icon | Select | Optional icon in front of the text. Wide selection (social media, contact, USP symbols, arrows, etc.). "None" leaves it out. |
| Topbar Item X – Text color | Colorpicker | Individual text color, overrides the general topbar text color. |

---

## Category custom fields

These fields are not maintained in the plugin configuration but directly on the category:

**Navigation**: Catalogues → Categories → [pick a category] → Custom fields → "Flyout Navigation Settings"

| Field | Type | Description |
|-------|------|-------------|
| Disable dropdown navigation | Switch | Prevents the flyout from opening for this category. The link goes directly to the category page. |
| Number of Navigation Levels | Number (0–10) | Overrides the global level depth for this category. `0` or empty = global value. |
| Icon before category name | Media field | Image/icon shown in front of the category name inside the flyout. |
| Badge Text | Text | Text for a hint badge on the category (e.g. "NEW", "SALE"). |
| Badge Background Color | Colorpicker | Background color of the badge. |
| Badge Text Color | Colorpicker | Text color of the badge. |
| Hide from desktop navigation bar | Switch | The category disappears from the main navbar but stays reachable through the flyout (e.g. under "All categories"). |
| Show image in flyout | Switch | Only for full-width flyouts: shows an image inside the flyout. Defaults to the category image. |
| Alternative flyout image | Media field | Overrides the default category image inside the flyout. |
| Open dropdown to the left | Switch | The flyout for this category opens to the left instead of to the right. Useful for categories at the right edge of the navigation. Overridden by the global "Never (always open to the right)" mode. |
