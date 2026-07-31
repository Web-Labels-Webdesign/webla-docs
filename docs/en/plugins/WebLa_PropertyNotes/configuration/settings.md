# Configuration Settings

> This plugin has no configuration page of its own under **Extensions → My Extensions**. The **Configure** button is missing on purpose, that is not a fault.

Instead, every note is configured on its own, right on the property it belongs to.

**Navigation**: Catalogues → Properties → *select a group* → **Custom fields** card → **Property Information**

For a single value: open the same group, switch to its list of values and open one. The dialog contains the same section.

Both levels share the same set of fields. Only the **Display Type** options differ, because a group heading and a single value are rendered differently in the variant selection.

---

## Property Information

### Information

| Property     | Value                             |
| ------------ | --------------------------------- |
| **Type**     | Rich text editor                  |
| **Default**  | empty                             |
| **Required** | Yes, otherwise nothing happens    |

**Description**: The text your customers get to read. Formatting, links, lists and images are allowed.

**Example Use Case**: On the group *Ingress protection* you explain once what IP ratings mean. On the value *IP68* you write the concrete case: permanently watertight, even under water.

> Keep it short. In the variant selection and in the filter the text is shown as a tooltip, and a tooltip is about 300 pixels wide. For longer explanations, the display type **Modal with button** is the better choice.

---

### Show in Properties

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Shows the note in the property table on the product detail page. A group note appears next to the row label, a value note next to the value itself.

**Example Use Case**: The customer is already on the product page reading the technical data. That is exactly where the explanation of the *Ingress protection* row belongs.

---

### Show in variant selection

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Shows the note in the variant selection on the product detail page, next to the group heading or next to the matching option. This is the only place where **Display Type** takes effect.

**Example Use Case**: The customer has to choose between *Shore A 70* and *Shore A 90* and has no idea which one is harder.

---

### Show in filter

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Shows the note in the category filter, next to the filter heading or next to a single filter value. The presentation here is always an info icon with a tooltip.

**Example Use Case**: A filter *Ingress protection* offering IP54, IP65 and IP68 only becomes usable once the difference is clear.

---

### Show in all

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: A shortcut for the three switches above. With this one on, the note appears in all three places regardless of how the others are set.

> The switch adds locations, it never removes one. To exclude a location, leave **Show in all** off and turn on only the individual switches you want.

---

### Display Type

| Property     | Value                                |
| ------------ | ------------------------------------ |
| **Type**     | Select                               |
| **Default**  | Tooltip (group) / Info Icon (value)  |
| **Required** | No                                   |

**Description**: Controls the presentation in the variant selection on the product detail page. It has no effect on the filter or the property table, which always use an info icon with a tooltip.

**Options on a property group**:

- `Tooltip`: Info icon next to the group heading, the text appears on hover. Used by default when nothing is selected.
- `Modal with button`: A button next to the group heading, one click opens a wide dialog. For lists, longer explanations and images.

**Options on a single value**:

- `Info Icon`: A small icon next to the option, the text appears on hover. Used by default when nothing is selected.
- `Hover over option`: No icon. The text is revealed in a wide panel beside the option as soon as the customer hovers over it. Suitable for notes with an image.

**Example Use Case**: A group *Care instructions* with a five-item list is unreadable in a tooltip. Switch it to **Modal with button** and customers can read it properly.

---

## How the Switches Interact

A note appears in a location when a text is present **and** either the matching switch or **Show in all** is on.

| Desired result                     | Setting                                                     |
| ---------------------------------- | ----------------------------------------------------------- |
| Visible everywhere                 | **Show in all** on                                          |
| Filter only                        | only **Show in filter** on                                  |
| Everywhere except the filter       | **Show in Properties** and **Show in variant selection** on, **Show in all** off |
| Prepared but not yet visible       | Enter the text, leave all four switches off                 |

---

## Translations

The fields are translatable like any other custom field. Switch the language at the top of the form and enter the text again. Without a translation, Shopware falls back to the system language.
