# How-to & guides

Practical guidance for using the **Flyout Navigation** in your Shopware shop.

---

## How the plugin works

The plugin replaces the classic Shopware main navigation with a multi-level flyout and adds:

- a second display variant as either a **full-width flyout** (mega menu) or a **compact dropdown**,
- an optional **sticky header** that stays at the top of the viewport while scrolling,
- a **custom topbar** for USP / contact items above the header,
- **category custom fields** for fine-grained, per-category control of behaviour, content and styling,
- **keyboard navigation** and ARIA attributes as the foundation for accessible navigation.

All plugin settings are stored **per sales channel** – a shop with multiple storefronts can have its own navigation configuration per channel.

---

## Initial setup

1. **Install the plugin** in *Extensions → My extensions → Upload* (ZIP) or through composer integration. Then activate it via the switch.
2. **Compile the theme** (*Marketing → Theme manager → Assign / compile theme*) so the styles and scripts are deployed to the storefront.
3. Open the plugin configuration: *Extensions → My extensions → Flyout Navigation → Configure*.
4. **Select the sales channel** at the top of the configuration.
5. **Enable "Activate flyout navigation for this sales channel"** – without this master switch the plugin stays inactive in the storefront.
6. Review the **basic settings**:
   - choose the trigger mode (hover or click),
   - pick the number of navigation levels (default 3),
   - optionally enable the "All categories" entry or the mobile-on-desktop variant,
   - turn on sticky header and custom topbar as needed.
7. Adjust the **styling** in the "Navbar – Settings" and "Flyout menu – Settings" sections to match your theme.
8. Verify the result in the storefront, click through a category and test the sublevel behaviour.

A complete overview of every configuration field is available in the [plugin settings](configuration/settings.md).

---

## Category settings

Through *Catalogues → Categories → [category] → Custom fields → "Flyout Navigation Settings"* additional options can be maintained per category. Typical use cases:

- **Category without a flyout** (e.g. a marketing landing page): enable *"Disable dropdown navigation"*. The link then leads directly to the category page without opening the flyout.
- **Different level depth for a top-level category**: set *"Number of Navigation Levels"* to 1, 2, … (0 = use the global value).
- **Icon in front of the category name** (e.g. a brand logo): set *"Icon before category name"* through the media field.
- **Highlight badge** ("NEW", "SALE"): fill in *"Badge Text"* together with background and text color.
- **Hide the category from the navbar but keep it inside the flyout**: enable *"Hide from desktop navigation bar"* – the category disappears from the main row but remains reachable e.g. through "All categories".
- **Image inside the flyout** (full-width only): enable *"Show image in flyout"* and optionally provide a dedicated image via *"Alternative flyout image"*. Without a dedicated image the default category image is used.
- **Open dropdown to the left** (for categories at the right edge of the navbar): enable *"Open dropdown to the left"*. Important: this has no effect if the global mode is set to *"Never (always open to the right)"*.

---

## Common workflows

### Set up a full-width mega menu with category images

1. Open *Flyout menu – Settings* and enable *"Show flyout in full width"*.
2. On the top-level category, enable the *"Show image in flyout"* custom field.
3. The category image is shown in the flyout automatically. Use *"Alternative flyout image"* to provide a different image.
4. Optionally disable the close button via *"Hide close button"* or restyle it via *"Close-button background color"*.

### Compact flyout with left-opening dropdowns for right-edge categories

1. Disable *"Show flyout in full width"* in the *Flyout menu* settings.
2. Pick the global mode for the opening direction:
   - **"Only per category setting"** (default) if only individual categories should open to the left.
   - **"From item 3 onwards"** (or another value) if all dropdowns from a certain position onwards should open to the left.
3. Enable the *"Open dropdown to the left"* custom field on the individual categories.
4. As a safety net the plugin automatically flips the direction if the chosen one would otherwise overflow the viewport – in most cases the default mode is sufficient.

### Sticky header with an alternative logo and a hidden topbar

1. Enable *"Activate sticky header"*.
2. If needed, add a smaller / single-line logo under *"Sticky header logo"*.
3. If the topbar takes up too much space in the sticky state: enable *"Hide topbar when sticky"*.

### Custom topbar with USP items

1. Enable *"Activate custom topbar"*.
2. Maintain text, link type, link target, icon and color per item.
3. Choose *"Topbar items alignment"* (left / center / right).
4. Items with empty text are hidden automatically – unused items can simply be left blank.

---

## Mutually exclusive options

| Option A | Option B | Behaviour / recommendation |
|----------|----------|----------------------------|
| **Show "All categories" navigation on desktop** | **Show mobile navigation on desktop** | Do not combine – the two options render different trigger elements. If both are enabled the "All categories" entry takes precedence and the mobile toggle is ignored. Pick exactly one of the two concepts. |
| **Activate sticky header** = off | **Hide topbar when sticky** | Has no effect – the sticky state is never reached. |
| **Show flyout in full width** = off | **Hide close button** | Has no effect – the close button is only displayed in the full-width mode anyway. |
| **Show flyout in full width** | **From which main menu item the dropdown should open to the left** | Has no effect – the opening direction setting only applies to non-full-width flyouts. |
| **From which main menu item …** = "Never" | Category custom field **"Open dropdown to the left"** | The global "Never" mode is a hard lock and overrides the per-category field. To open individual categories to the left, switch the global mode back to "Only per category setting" (or a threshold). |
| Category custom field **"Disable dropdown navigation"** | Other category custom fields (flyout image, badges, sublevel depth …) | Once a category's dropdown is disabled, flyout-related custom fields (image in flyout, badge only in flyout, level count …) become meaningless. These fields are not evaluated in the storefront for that category. |
| Category custom field **"Show image in flyout"** + compact (non-full-width) flyout | – | The image is not rendered in compact mode; the option only takes effect together with "Show flyout in full width". |

---

## What you should avoid

- **Disabling the plugin globally while bulk-maintaining custom fields** – the fields are only evaluated once the plugin is active in the sales channel. Order matters: activate first, then maintain.
- **Too many levels** (`Number of navigation levels` > 4) without a real need. Deeper structures get confusing in the flyout fast, the UX suffers and mobile users scroll a lot. Recommendation: 3 levels for most shops.
- **Very long category names without padding adjustments** – can lead to line breaks and a noisy layout. Either shorten the names or increase the *"Padding for navbar items"* value.
- **Maintaining the same content in multiple topbar items** – the plugin renders every entry separately, no deduplication.
- **Maintaining the configuration only in the default sales channel while multiple channels exist** – every channel has its own settings. Always double-check the active sales channel in the top selector before saving.
- **Manual edits to the compiled file** under `src/Resources/app/storefront/dist/`. The file is overwritten on plugin updates; customisations belong in your theme or a separate plugin.
- **Non-full-width flyout in extremely narrow sales-channel layouts** (e.g. an unusually constrained `.container` width). The dropdown might land in an awkward position despite the auto-flip – switch to full-width when in doubt.

---

## Tips & best practices

- **Keyboard test**: after every larger configuration change, walk through the navigation with `Tab`, the arrow keys and `ESC`. If that works, screen reader users are likely fine too.
- **Full-width vs. compact**: full-width works best for product catalogues with large top-level categories and images, the compact dropdown fits smaller catalogues or classic B2B navigation.
- **Hover vs. click**: hover is faster, click is more accessible and touch-friendly. When the top-level categories themselves are important landing pages, click mode is usually the better choice – hover mode follows the link with the real navigation, which can surprise mouse users.
- **Trigger changes require a storefront rebuild / cache clear** – always clear the Shopware cache after plugin updates and rebuild the theme if necessary.

---

## When something does not work

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Nothing changes in the storefront although options have been saved | The wrong sales channel was selected in the configuration | Pick the correct sales channel at the top of the configuration and save again. |
| Plugin looks the same in the frontend after an update | Storefront bundle has not been rebuilt yet | Compile the theme / clear the storefront cache. |
| Custom field on the category is not visible | The plugin was updated but the custom-field set still has the old structure | Update the plugin to a newer version – from 1.1.0 onwards the set is automatically re-created on every update. |
| "Open dropdown to the left" has no effect | Global mode is set to "Never (always open to the right)" | Switch the global mode to "Only per category setting" or to a threshold. |
| Mobile toggle does not appear in the header | Both "All categories" and "Show mobile navigation on desktop" are active | Disable one of the two. |
