# Changelog — Flyout Navigation

All notable user-facing changes to the "Flyout Navigation" plugin.

## 1.1.4
Released on 2026-06-16

### Improvements

**Changes to the way the topbar icons are loaded.** Nothing changes visually in the shop.

## 1.1.3
Released on 2026-06-14

### Bug Fixes

**Clicking the main navigation while the sticky header is active.** When the header was in its sticky state and the user had scrolled down, clicking a top-level navigation item jumped back to the top of the page instead of opening the menu. The menu now opens as expected.

### Changed

**Top-level categories in click mode are now entry points.** When the main menu trigger is set to "click", top-level categories that have their own flyout act exclusively as menu triggers and no longer navigate directly to the category page. Direct navigation to the category is handled by the "Zur Kategorie XX" entry at the top of the flyout. Hover mode is unchanged: hover opens the menu and click still navigates to the category. Categories with the "Disable dropdown navigation" custom field remain regular links in both modes.

## 1.1.2
Released on 2026-06-14

### Improvements

**Addressed points from the Shopware review** (among others, removed unnecessary SCSS and an obsolete migration). Nothing changes functionally in the shop.

## 1.1.1
Released on 2026-06-14

### Improvements

**Extended documentation.** A bilingual (German / English) wiki documentation was added under `docs/` – with a plugin overview, a usage guide from the shop operator's and the customers' perspective, a full settings reference, how-to guides and a user-facing changelog.

## 1.1.0
Released on 2026-06-14

### New Features

**Let dropdowns open to the left.** For categories at the right edge of the navigation the opening direction can now be reversed – the dropdown opens towards the left so it no longer overflows the screen edge. The direction can be set per category through a new custom field or globally, starting from the 1st–5th main menu item. The behaviour can also be disabled globally.

**Automatic flip when there is no room.** Regardless of the configured direction, if the plugin detects that a dropdown would overflow the viewport, it flips the opening direction automatically. Also helps when the navigation bar wraps to two rows on smaller screens.

**Keyboard navigation.** The navigation can now be operated completely without a mouse: Arrow Down opens the main menu dropdown, Arrow Up/Down moves between items, Arrow Right opens subcategories, Arrow Left closes them, and ESC closes the whole flyout and returns focus to the trigger. Includes a visible focus outline for keyboard users and correct ARIA attributes for screen readers. An important step towards WCAG / German BFSG compliance.

### Improvements

**Arrow icon mirrors the direction.** When the dropdown opens to the left, the arrow icon (for categories with subcategories) automatically moves in front of the category name and points to the left – the visual direction now matches the actual opening direction.

**Chevron as default icon.** Newly installed shops use the chevron icon for categories with subcategories out of the box. Existing configurations remain unchanged.

**Automatic plugin update.** Plugin updates now ship new category custom fields automatically. Previously the plugin had to be reinstalled to pick them up.

### Bug Fixes

**Non-full-width dropdowns were pinned to the left edge.** In the compact (non-full-width) mode all dropdowns opened flush-left regardless of which menu item triggered them. They now appear correctly underneath the triggering menu item.

## 1.0.12
Released on 2026-05-13

### New Features

**Close on scroll.** Open flyouts now close automatically as soon as the page is scrolled. Prevents the menu from "sticking" on top of the content.

## 1.0.11
Released on 2026-04-15

### Bug Fixes

**Sticky-header logo no longer oversized.** The logo for the sticky header now has a sensible maximum height and no longer breaks the layout.

**Category custom fields on update.** The plugin's category custom fields are now cleanly re-created on plugin updates, even when they already exist in the database.

## 1.0.10
Released on 2026-04-15

### Bug Fixes

**Safer external topbar links.** External topbar links now carry the `rel="noopener"` attribute – important for security and performance. A typo was also fixed.

## 1.0.9
Released on 2026-03-04

### Improvements

**New plugin icon.** Fresher plugin icon in the Shopware admin and in the store.

**Support information added.** The `composer.json` now contains support information so shop operators know where to turn with questions or issues.

## 1.0.8
Released on 2026-02-27

### New Features

**Configurable topbar text color.** The text color of the topbar elements can now be configured centrally in the plugin settings.

### Bug Fixes

**Column spacing in the full-width flyout.** The left position of the columns inside the full-width flyout was fine-tuned so the columns now align evenly.

## 1.0.7
Released on 2026-02-24

### Bug Fixes

**Backdrop only for the full-width mode.** The darkened backdrop behind the flyout is now only shown in the full-width variant – in the compact mode it no longer interferes with the content.

**Header stacking in sticky mode.** The z-index of the header container was corrected so the header stays cleanly above all other elements while scrolling.

## 1.0.6
Released on 2026-02-23

### Bug Fixes

**Hover effect fixed.** The hover effect on menu items works correctly again.

## 1.0.5
Released on 2026-02-22

### Bug Fixes

**Subcategories rendered incorrectly.** The rendering of subcategories inside the flyout menu was fixed.

**Mobile navigation: missing icons.** The icons that were missing in the mobile navigation are now displayed reliably.

### Improvements

**Simpler plugin configuration.** The separate box-shadow toggle was removed; the plugin now uses a sensible default shadow.

## 1.0.4
Released on 2026-02-17

### Improvements

**Clean plugin uninstall.** Uninstalling the plugin now removes the category custom fields as well – no leftover data in the database.

**Tidied plugin configuration.** The plugin settings were grouped more clearly.

## 1.0.3
Released on 2026-02-17

### New Features

**Mobile toggle on desktop.** When the mobile navigation should also be shown on desktop, the mobile toggle button now appears correctly in the header.

### Bug Fixes

**Several fixes** to the plugin logic and styling.

## 1.0.2
Released on 2026-01-19

### Bug Fixes

**Overflow with many categories.** When a level contained more categories than the available space, they were cut off. The list now scrolls reliably as soon as it exceeds the available height.

## 1.0.1
Released on 2025-11-23

First plugin scaffold.

## 0.0.7
Released on 2025-11-22

Initial release.
