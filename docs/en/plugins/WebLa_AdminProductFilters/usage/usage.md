# Usage guide

This guide covers all features of *Custom fields in the admin product overview*.

---

## Table of contents

- [Showing custom fields as columns](#showing-custom-fields-as-columns)
- [Column labels and language](#column-labels-and-language)
- [Resizing columns](#resizing-columns)
- [New custom fields](#new-custom-fields)
- [Troubleshooting](#troubleshooting)

---

## Showing custom fields as columns

### What it does

The plugin adds one column per custom field to the product overview. This lets you see values that would otherwise only be visible in a product's detail view directly in the list – for all products at a glance.

Important: **all added columns start hidden.** Your product overview therefore looks unchanged after installation. A column only appears once you enable it yourself.

### How to use it

1. Open **Catalogues → Products**.
2. Click the settings icon at the top right of the table to open the column settings.
3. Alongside the standard columns, the list contains all custom fields of your products, labelled *Field set: Field*.
4. Enable the custom fields you want to see.
5. Close the column settings. The selected columns appear in the product overview.

**Location**: Catalogues → Products → column settings (settings icon at the top right of the table)

### Tips & best practices

- Only enable the fields you really need. Too many columns make the table cluttered and force horizontal scrolling.
- The selection is stored **per admin user**. Your colleagues in purchasing can set up a different view than the editorial team – without getting in each other's way.
- Use the overview to find gaps: a column with many empty cells reveals products where an important custom field has not been filled in yet.

---

## Column labels and language

Every column is labelled using the pattern **Field set: Field**, for example `Logistics: Delivery time`. This keeps identically named fields from different field sets distinguishable.

The label follows the language of your administration. If no label is stored for the current language, the plugin automatically uses your shop's fallback language.

You maintain the labels under **Settings → System → Custom fields** – both on the field set and on the individual custom field.

---

## Resizing columns

All added columns can be resized – exactly like Shopware's standard columns. Drag the right edge of the column header with your mouse.

---

## New custom fields

When you create a new custom field, it becomes available as a column immediately. No plugin update is required.

For a custom field to appear in the product overview, its **field set must be assigned to the *Products* entity**. You can check and change this under **Settings → System → Custom fields** in the *Assignments* section.

Reload the administration after creating a new field so the column shows up in the column settings.

---

## Admin panel features

### Extended product overview

**Location**: Catalogues → Products

**Purpose**: Shows custom field values directly in the product list, without having to open a product.

**Usage**: See [Showing custom fields as columns](#showing-custom-fields-as-columns).

The plugin extends this single view only. It adds no menu entries, modules or settings pages of its own.

---

## Troubleshooting

### I see no new columns after installing

**Symptom**: The product overview looks unchanged.

**Cause**: This is the expected behaviour. All added columns are deliberately hidden so your familiar view is not disrupted.

**Solution**: Open the column settings at the top right of the table and enable the custom fields you want. If no custom fields appear there, reload the administration (browser reload).

---

### A particular custom field is not offered

**Symptom**: A custom field you created does not appear in the column settings.

**Cause**: The field set of that custom field is not assigned to the *Products* entity. The plugin only offers fields that are actually attached to products.

**Solution**: Open **Settings → System → Custom fields**, select the field set and check under *Assignments* whether *Products* is enabled. Reload the administration afterwards.

---

### A column label is empty or in the wrong language

**Symptom**: A column shows no title, or one in a foreign language.

**Cause**: No label is stored on the field set or the custom field for the language of your administration. The plugin then falls back to the fallback language.

**Solution**: Add the missing label under **Settings → System → Custom fields** – on the field set *and* on the individual field.

---

### My colleague cannot see my column selection

**Symptom**: You enabled columns, but a colleague does not see them.

**Cause**: Not a fault. The column selection belongs to the personal settings of the product list and is stored per admin user.

**Solution**: Each user enables the columns that suit them.

---

## Related documentation

- [Configuration settings](../configuration/settings.md)
- [How-to guides](../how_to.md)
