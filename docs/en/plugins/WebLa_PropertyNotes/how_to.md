# How-To Guide

Step-by-step workflows for the most common tasks.

---

## How the Plugin Works

```
Store a note on the property → Switch on the locations → The note appears on every product with that property
```

**Example Flow**:

1. You enter an explanation of IP ratings on the property group *Ingress protection*.
2. You turn on **Show in all**.
3. Every category page with the *Ingress protection* filter, every property table and every variant selection using that group shows the info icon.

There is no intermediate step on individual products. Whatever carries the property gets the note.

---

## Common Workflows

### How to: Create your first note

**Goal**: Explain one property group in the shop.

**Time Required**: 5 minutes

**Prerequisites**:

- Plugin installed and activated
- At least one property group under Catalogues → Properties

**Steps**:

1. **Open the property group**
   - Navigate to: Catalogues → Properties
   - Click a group, for example *Material*

2. **Enter the text**
   - Scroll to the **Custom fields** card, section **Property Information**
   - Write the explanation in the **Information** field, for example: "The outer material determines breathability and how much care the item needs."

3. **Choose the locations**
   - Turn on **Show in all** to show the note everywhere
   - Or set individual switches if it should only appear in certain places

4. **Save**
   - Click **Save** in the top right

**Result**: The category page now shows an info icon next to the *Material* filter heading. Hovering it reveals your text.

**Troubleshooting**: Nothing visible? Clear the cache under Settings → System → Caches & indexes.

---

### How to: Explain a single value

**Goal**: Explain one specific value instead of the whole group.

**Time Required**: 3 minutes per value

**Prerequisites**: A property group with at least one value.

**Steps**:

1. **Switch to the list of values**
   - Navigate to: Catalogues → Properties → *open a group*
   - Switch to its list of values

2. **Open the value**
   - Click the value, for example *Merino wool*
   - A dialog opens containing the fields under **Property Information**

3. **Set the text and the switches**
   - Enter the explanation in the **Information** field
   - Turn on the locations you want

4. **Save**

**Result**: In the filter, the property table and the variant selection, an info icon appears right beside that value.

**Troubleshooting**: No icon in the variant selection? The group is set to **Dropdown**, see [Troubleshooting](usage/usage.md#troubleshooting).

---

### How to: Show a longer explanation as a dialog

**Goal**: Fit an explanation with a list or an image into a readable space.

**Time Required**: 5 minutes

**Steps**:

1. **Open the property group** and format the text in the **Information** field, using a list, a subheading or an image.
2. Turn on **Show in variant selection** or **Show in all**.
3. Set **Display Type** to *Modal with button*.
4. **Save**.

**Result**: The variant selection shows a button next to the group heading. One click opens a wide dialog holding the full text.

> The filter and the property table stick to the tooltip. Very long texts therefore belong where the dialog applies.

---

### How to: Maintain notes in another language

**Goal**: Publish the same note in English as well.

**Time Required**: 2 minutes per note

**Prerequisites**: A second language is set up in the shop.

**Steps**:

1. **Open the property** whose note needs translating.
2. **Switch the language** using the language picker at the top of the form.
3. **Enter the text again**, this time in the target language.
4. **Save**.

**Result**: Customers see the note in the language of their sales channel.

> The switches and **Display Type** apply to every language. Only the text is translated.

---

### How to: Prepare notes without showing them

**Goal**: Draft texts calmly and publish them together later.

**Steps**:

1. Enter the texts on all affected properties and **leave all four switches off**.
2. Save and review the wording at your own pace.
3. On launch day, turn on **Show in all** per property.

**Result**: Until that last step, no customer sees anything.

---

## Quick Reference

| Task                             | Key Steps                                                | Settings Required                             |
| -------------------------------- | -------------------------------------------------------- | --------------------------------------------- |
| Explain a group                  | Catalogues → Properties → group → Custom fields          | **Information** + at least one switch         |
| Explain a value                  | Group → list of values → open a value                    | **Information** + at least one switch         |
| Show in the filter only          | Turn on **Show in filter** only                          | **Show in filter**                            |
| Make a long text readable        | Group → **Display Type** to *Modal with button*          | **Show in variant selection**, **Display Type** |
| Reveal text without an icon      | Value → **Display Type** to *Hover over option*          | **Show in variant selection**, **Display Type** |
| Hide a note temporarily          | All four switches off                                     | –                                             |

---

## Best Practices

1. **Groups first, values second**: An explanation on the group often answers the question already, and it is one text instead of many.
2. **One or two sentences in a tooltip**: Anything longer belongs in the dialog.
3. **Cover the filters first**: That is where a customer decides whether to use the selection at all.
4. **Check one storefront page after every change**: The filter, the property table and the variant selection look different from each other.
5. **Export before uninstalling**: Without **keep user data**, all fields and their texts are removed.

## What to Avoid

- ❌ **Explaining every single value** – effort without effect when the group note already covers it.
- ❌ **Long texts in a tooltip** – the tooltip is roughly 300 pixels wide, the rest wraps badly.
- ❌ **Hover over option in a shop with heavy mobile traffic** – without a mouse pointer, nothing happens.
- ❌ **Uninstalling without keeping user data** – the fields and every stored note are gone afterwards.
