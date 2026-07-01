# How-To Guide

This guide provides step-by-step workflows for the most common tasks with Category Sorter.

---

## How the Plugin Works

```
Pick a category from the tree → Apply sorting → Subcategories in A–Z order
```

1. You select a category on the plugin page.
2. The plugin orders its direct subcategories alphanumerically (recursively if requested).
3. The new order is immediately visible in the category tree under **Catalogues →
   Categories**.

---

## Common Workflows

### How to: Sort a category's subcategories

**Goal**: Put a category's direct subcategories into alphanumeric order.

**Steps**:

1. **Open the plugin page**
   - Navigate to: `Settings → Plugins → Category Sorter`
2. **Pick a category**
   - In the **Category** field, expand the tree and click the category you want.
3. **Start sorting**
   - Click **Sort subcategories**.

**Result**: The chosen category's direct subcategories are in alphanumeric order (A–Z). A
message reports how many categories were reordered.

---

### How to: Sort the entire subtree (recursive)

**Goal**: Sort not just the direct children, but every level below them.

**Steps**:

1. Open the plugin page and pick a category (see above).
2. Enable **Sort recursively**.
3. Click **Sort subcategories**.

**Result**: The selected category and every level beneath it are sorted down to the
deepest level.

---

### How to: Sort multiple categories at once

**Prerequisite**: The **multiselect** In-App Purchase (`multiselect`) is active.

**Steps**:

1. Open the plugin page.
2. In the category tree, select several categories via their checkboxes.
3. Optionally enable **Sort recursively**.
4. Click **Sort subcategories**.

**Result**: The subcategories of all selected categories are sorted.

> If multiselect is not unlocked, click **Unlock multiselect** to start the In-App
> Purchase.

---

### How to: Set up automatic sorting

**Prerequisite**: The **automatic sorting** In-App Purchase (`scheduled-sort`) is active.

**Steps**:

1. Open the plugin page and select the categories to sort.
2. In the **Automatic sorting** card, set the **Run interval (seconds)** (e.g. `86400` for
   once per day).
3. Click **Save** in the top right.

**Result**: The saved selection is sorted automatically at the defined interval. Interval
changes take effect immediately on save.

**Important**: Automatic sorting only runs while a message queue worker is active (admin
worker or `bin/console messenger:consume`).

---

## Quick Reference

| Task                     | Key steps                                          | Requires         |
| ------------------------ | -------------------------------------------------- | ---------------- |
| Sort one category        | Pick category → **Sort subcategories**             | –                |
| Sort recursively         | Enable **Sort recursively** → sort                 | –                |
| Multiple categories      | Select several in the tree → sort                  | `multiselect`    |
| Sort automatically       | Selection + interval → **Save**                    | `scheduled-sort` |

---

## Best Practices

1. **Check names before the first run**: Sorting follows the category name exactly
   (natural A–Z order), so verify the names first.
2. **Use recursive deliberately**: On large trees, recursive mode reorders a great many
   categories — apply it consciously.

## What to Avoid

- ❌ Expecting automatic sorting without a running worker — without a worker the scheduled
  task will not execute.
- ❌ Assuming multiple categories are sorted without the `multiselect` purchase — without
  it, only the first category is taken into account.
