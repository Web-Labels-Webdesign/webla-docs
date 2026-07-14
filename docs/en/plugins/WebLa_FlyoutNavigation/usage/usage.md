# Usage guide

This guide describes every function of the **Flyout Navigation** plugin from the perspective of the shop operator and the shop's customers.

For the pure reference of every field see the [plugin settings](../configuration/settings.md); for typical setup steps and workflows see the [how-to guide](../how-to.md).

---

## Multi-level flyout navigation

**Shop operator**: Activates the flyout navigation per sales channel and decides how many levels are shown (global or per category). The trigger can be set independently for the main menu and for sublevels to hover or click.

**Customers**: See a modern, multi-level flyout instead of the classic Shopware navigation. Hovering or clicking a top-level category opens a panel with the subcategories; further levels expand – depending on the configuration – to the right or to the left.

---

## Full-width or compact dropdown mode

**Shop operator**: Chooses in *Flyout menu – settings* between a full-width flyout (mega-menu look with optional category image and close button) and a compact dropdown that only takes the width of its content and appears directly below the triggering menu item.

**Customers**: See either a mega menu stretched across the full viewport width (common for large assortments) or a classic compact dropdown directly underneath the menu item they hover/click.

---

## Opening direction (left / right)

**Shop operator**: Controls the opening direction of the non-full-width dropdowns. Three modes are available: *Only per category setting* (default; the per-category custom field decides), *From item 1–5 onwards* (threshold; the per-category custom field can still override), and *Never (always open to the right)* (a hard global lock). On top of that the per-category custom field *"Open dropdown to the left"* can be enabled.

**Customers**: Usually do not actively notice the feature – they simply experience that dropdowns which would otherwise overflow the right edge of the screen open neatly towards the left. While doing so, the arrow / chevron icon of the subcategories automatically moves to the front of the category name and points left, keeping the visual direction consistent with the actual opening direction.

---

## Automatic flip when there is no room

**Shop operator**: Nothing additional to configure – the plugin checks for every opening dropdown whether it would leave the viewport. If so it flips the direction automatically (unless the global "Never" mode is set). Works particularly well when the navigation bar wraps to two rows on smaller screens.

**Customers**: Never see a clipped flyout running off the screen edge – the navigation behaves predictably even in narrow layouts.

---

## "All categories" menu on desktop

**Shop operator**: Optionally activates an additional entry that exposes the complete category tree in a flyout. The label text and a burger icon in front of it are fully customisable.

**Customers**: Get a prominent entry point that exposes the entire category tree at a glance – particularly useful in shops with many top-level categories.

---

## Sticky header

**Shop operator**: Activates the sticky mode via a switch, optionally provides an alternative (typically smaller) logo for the sticky state, and can additionally hide the custom topbar in the sticky state to save space.

**Customers**: Keep the header and the navigation in view at all times while scrolling. The header slides to the top edge without a jump and – if configured that way – switches to a more compact logo.

---

## Close on scroll

**Shop operator**: Runs automatically, no configuration required.

**Customers**: If they accidentally keep scrolling while a dropdown is open, the flyout closes automatically – the menu does not "stick" on top of the page content and obstruct the view.

---

## Custom topbar

**Shop operator**: Maintains a slim bar above the header with up to three USP / contact items. Per item: text, link type (URL, email, phone), link target, an optional icon and an individual text color. Background color and alignment of the entire topbar are configurable as well.

**Customers**: Have important hints always in view – e.g. "Free shipping above €50", "Contact: +49 30 …" or a direct email/phone link. Clicking an entry triggers the standard action of the link type (open URL, launch the mail program, dial the phone number).

---

## Mobile navigation

**Shop operator**: Maintains the colors for the burger toggle, the active category and the home link inside the offcanvas. Optionally the mobile navigation can also be shown on desktop (e.g. for minimalist layouts or B2B shops).

**Customers on a smartphone**: Open the navigation through the burger button. The offcanvas navigation uses the colors picked in the plugin configuration and – where maintained on the category – also displays the category icon and the subcategory arrow, so the experience matches the desktop look.

**Customers on desktop (when the mobile mode is enabled there)**: See the same burger toggle as on the smartphone instead of the classic navigation bar.

---

## Category custom fields

**Shop operator**: Maintains per-category fine-grained options under *Catalogues → Categories → [category] → Custom fields → "Flyout Navigation Settings"*:

- **Disable dropdown navigation**: For marketing landing pages or individual campaigns that should not open a flyout.
- **Number of navigation levels**: Overrides the global level depth for the respective category.
- **Icon before category name**: Brand logo, symbol or topic icon in front of the category name.
- **Badge text + colors**: Hints such as "NEW" or "SALE" directly inside the flyout.
- **Hide from desktop navigation bar**: Category disappears from the main navigation but remains reachable through the "All categories" flyout.
- **Show image in flyout / alternative flyout image**: For full-width flyouts either show the category image or a dedicated motive.
- **Open dropdown to the left**: Forces the left opening direction for this specific category.

**Customers**: See directly inside the flyout what the operator maintained – an icon in front of the category name, a badge on a category ("NEW"), a large lifestyle image in the full-width flyout. Disabled dropdowns go straight to the category page without an intermediate flyout.

---

## Styling adjustments to your own theme

**Shop operator**: Sets colors, font sizes, hover behaviour, borders and paddings for the main navigation, the flyout, the close button, the mobile components and the topbar directly inside the plugin – without SCSS or theme adjustments.

**Customers**: Experience a navigation that matches the shop's branding. Hover states, active categories and badges pick up the brand colors and the flyout blends nicely into the theme.

---

## Keyboard control & accessibility

**Shop operator**: Runs automatically, no separate configuration. Worth knowing in the context of accessibility requirements (WCAG / German BFSG): the plugin ships a visible keyboard focus, correct ARIA attributes (`aria-haspopup`, `aria-expanded`) and full arrow-key / ESC operation.

**Customers using a keyboard / screen reader**:

- **Tab** moves the focus across the top-level categories.
- **Arrow down** opens the dropdown of the focused top-level category.
- **Arrow up / arrow down** move between items of the same level.
- **Arrow right** opens the next sublevel for a category that has subcategories.
- **Arrow left** closes the current sublevel and jumps back to the parent category. At the top level it closes the entire flyout.
- **Enter** follows the link of the focused category.
- **ESC** closes the active flyout and returns the focus to the triggering top-level category.
- A visible focus outline always indicates which element is currently active.
- Screen readers are informed through the ARIA attributes whether a dropdown is open.

---

## Sales-channel-specific configuration

**Shop operator**: Maintains all settings per sales channel. Multistore setups can use a different navigation look, a different topbar content and different trigger modes per channel – e.g. a full-width mega menu in the B2C shop and a compact dropdown mode in the B2B shop.

**Customers**: Experience exactly the navigation that was meant for the channel they are in – no code adjustment needed.
