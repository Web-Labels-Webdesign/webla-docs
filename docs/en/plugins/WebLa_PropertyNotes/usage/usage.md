# Usage Guide

This guide covers every feature of *Property notes in filters, table and variant selection*.

---

## Table of Contents

- [The Basic Idea](#the-basic-idea)
- [Admin Panel Features](#admin-panel-features)
- [Storefront Features](#storefront-features)
- [Display Types](#display-types)
- [Troubleshooting](#troubleshooting)

---

## The Basic Idea

### What It Does

A note consists of a text plus the decision where it appears. Both belong to the property, not to the product. You maintain the text once and it shows up on every product carrying that property.

There are two levels:

- **Property group**, for example *Material*. The note explains the category as a whole.
- **Single value**, for example *Merino wool*. The note explains that one value.

The two levels are independent. Explain only the group, only individual values, or both.

### Tips & Best Practices

- Start with the groups. One sentence on *Ingress protection* helps more than twenty sentences on its values.
- On a value, a note pays off where customers hesitate between two options.
- Leave all four switches off while you are still drafting. Without an active switch the note stays hidden.

---

## Admin Panel Features

### Note on a property group

**Location**: Catalogues → Properties → *select a group* → **Custom fields** card → **Property Information**

**Purpose**: Explains what an entire property category means.

**Usage**:

1. Open the group and scroll to the **Custom fields** card.
2. Enter your text in the **Information** field.
3. Turn on the switches for the locations you want.
4. If needed, set **Display Type** to *Tooltip* or *Modal with button*.
5. Click **Save**.

### Note on a single value

**Location**: Catalogues → Properties → *select a group* → list of values → *open a value* → **Property Information**

**Purpose**: Explains one concrete value inside the group.

**Usage**: Same as for the group. For **Display Type**, the options here are *Info Icon* and *Hover over option*.

> From Shopware 6.7.2 on, Shopware renders the custom fields of a value itself. On earlier versions the plugin adds that card. The fields look identical either way.

A description of every field is in the [settings reference](../configuration/settings.md).

---

## Storefront Features

### Category filter

**Where It Appears**: In the filter bar of a category page, as soon as a property filter is expanded.

**What Customers See**: An info icon next to the filter heading shows the group note. An info icon next to a single filter value shows that value's note. In both cases the text appears as a tooltip on hover.

**Requires**: The switch **Show in filter** or **Show in all**.

**Customization Options**: None. The filter always uses the info icon, regardless of the chosen **Display Type**.

### Property table on the product page

**Where It Appears**: In the properties section of the product detail page.

**What Customers See**: An info icon next to the row label for the group note, and an info icon behind each value for its own note.

**Requires**: The switch **Show in Properties** or **Show in all**.

**Customization Options**: None. The info icon applies here as well.

### Variant selection

**Where It Appears**: In the buy area of the product detail page, on products with variants. Also in a buy box placed through Shopping Experiences.

**What Customers See**: Next to the group heading, a tooltip or a button that opens a dialog. Next to a single option, an info icon or a text revealed on hover.

**Requires**: The switch **Show in variant selection** or **Show in all**.

**Customization Options**: The **Display Type** field takes effect here and nowhere else.

---

## Display Types

**Display Type** only concerns the variant selection. This table shows what applies where:

| Location            | Group note                          | Value note                             |
| ------------------- | ----------------------------------- | -------------------------------------- |
| Category filter     | Info icon with tooltip              | Info icon with tooltip                 |
| Property table      | Info icon with tooltip              | Info icon with tooltip                 |
| Variant selection   | *Tooltip* or *Modal with button*    | *Info Icon* or *Hover over option*     |

**Tooltip** is the narrow bubble on hover, roughly 300 pixels wide. Good for one or two sentences.

**Modal with button** opens a wide dialog on click. The right choice for lists, longer explanations and images.

**Info Icon** places a small icon next to the option, the text appears as a tooltip.

**Hover over option** drops the icon. The text is revealed in a wide panel beside the option as soon as the customer hovers over it. Touch devices have no hover, so *Info Icon* is the more reliable choice there.

---

## Troubleshooting

### The note does not show up in the shop

**Symptom**: The text is entered and saved, but nothing appears in the storefront.

**Cause**: Usually no switch is on, or the wrong one.

**Solution**: Check whether **Show in Properties**, **Show in variant selection**, **Show in filter** or **Show in all** is active for that location. Then clear the cache under **Settings → System → Caches & indexes**.

### Value notes are missing in the variant selection

**Symptom**: The group note appears, the option notes do not.

**Cause**: The property group is set to the **Dropdown** presentation. A select field leaves no room beside its entries for icons or revealed text.

**Solution**: Open the group under Catalogues → Properties and set **Value display type** to *Text*, *Image* or *Colour*. Alternatively show the note in the property table as well, where it appears regardless of the presentation.

### The note is cut off or hard to read

**Symptom**: The tooltip is too narrow for the text.

**Cause**: A tooltip is limited to roughly 300 pixels.

**Solution**: On a group, set **Display Type** to *Modal with button*; on a value, to *Hover over option*. Both offer considerably more room.

### No text appears on a smartphone

**Symptom**: Everything works on desktop but not on a touch device.

**Cause**: **Hover over option** requires a mouse pointer.

**Solution**: Use **Info Icon** instead, which can be tapped.

### The note appears in the wrong language

**Symptom**: One language shows the text of the system language.

**Cause**: No translation is stored for that language.

**Solution**: Open the property, switch the language at the top of the form and enter the text again.

### The fields are gone after an update

**Symptom**: The **Property Information** card has disappeared.

**Cause**: Usually a stale administration cache.

**Solution**: Clear the cache under **Settings → System → Caches & indexes** and reload the browser with `Ctrl`+`F5`.

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
