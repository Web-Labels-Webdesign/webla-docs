# How-to guides

Step-by-step workflows for common tasks with *Custom fields in the admin product overview*.

---

## How the plugin works

```
Custom field maintained on product → plugin offers it as a column → you enable the column → the value appears in the product overview
```

**Example flow**:

1. Under **Settings → System → Custom fields** you create a field set *Logistics* with the field *Delivery time* and assign it to the *Products* entity.
2. You maintain the delivery time on your products.
3. The plugin offers the column *Logistics: Delivery time* in the column settings of the product list.
4. You enable the column and see the delivery time for all products at a glance.

---

## Common workflows

### How to: show a custom field in the product overview

**Goal**: Make an already maintained custom field value visible in the product list.

**Time required**: about 1 minute

**Prerequisites**:
- The plugin is installed and activated
- The custom field exists and its field set is assigned to the *Products* entity

**Steps**:

1. **Open the product overview**
   - Navigate to: `Catalogues → Products`

2. **Open the column settings**
   - Click the settings icon at the top right of the table.

3. **Enable the custom field**
   - Find the entry in the format *Field set: Field*, e.g. *Logistics: Delivery time*.
   - Turn the switch on.

4. **Adjust the column width** (optional)
   - Drag the right edge of the column header until the content is comfortably readable.

**Result**: The column appears in the product overview and shows the custom field value for every product.

**Troubleshooting**: If the field does not appear in the list, reload the administration. If it still does not show up, check that the field set is assigned to the *Products* entity.

---

### How to: create a new custom field and show it immediately

**Goal**: Introduce a new field and use it in the overview right away.

**Time required**: about 5 minutes

**Steps**:

1. **Create or choose a field set**
   - Navigate to: `Settings → System → Custom fields`
   - Create a new field set or open an existing one.

2. **Assign it to the *Products* entity**
   - In the *Assignments* section, enable **Products**.
   - Without this assignment the field will not appear in the product overview.

3. **Add the custom field**
   - Create the field and give it a **technical name** as well as a **label** in every admin language you use.

4. **Reload the administration**
   - Perform a browser reload so the new column is offered.

5. **Enable the column**
   - As described in the guide above, under `Catalogues → Products`.

**Result**: The new field is available as a column – without a plugin update.

---

### How to: find incompletely maintained products

**Goal**: Identify products where an important custom field is still empty.

**Time required**: about 2 minutes

**Steps**:

1. Open `Catalogues → Products`.
2. Enable the column for the custom field in question.
3. Scan the list: empty cells reveal products with no value maintained.
4. Open the affected products and add the value.

**Result**: You see immediately where data is missing, instead of having to open every product one by one.

---

### How to: set up team-specific views

**Goal**: Purchasing, editorial and support each work with the columns that suit them.

**Background**: The column selection is stored **per admin user**. There is no shared, global view.

**Steps**:

1. Each staff member signs in with their own admin user.
2. Under `Catalogues → Products`, each of them enables the custom fields relevant to their task – for example the supplier number for purchasing, the content status for the editorial team.

**Result**: Every team gets its own view of the same catalogue, without changing anyone else's view.

---

## Quick reference

| Task                              | Key steps                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------- |
| Show a custom field               | Catalogues → Products → column settings → enable field                           |
| Custom field is not offered       | Settings → System → Custom fields → check *Products* assignment → reload         |
| Fix a column label                | Settings → System → Custom fields → label on field set and field                 |
| Widen a column                    | Drag the column border in the product list                                       |

---

## Best practices

1. **Use meaningful labels**: The column is named *Field set: Field*. Short, clear names keep the table readable.
2. **Maintain labels in all admin languages**: Otherwise the fallback kicks in and the column may carry a foreign-language title.
3. **Only enable a few columns at a time**: This keeps the product list readable and usable without horizontal scrolling.

## What to avoid

- ❌ **Enabling all custom fields at once** – the table becomes unreadable and you have to scroll far horizontally.
- ❌ **Looking for a plugin configuration page** – there is none. Control happens via the custom fields and the column settings of the product list.
- ❌ **Expecting your column selection to apply to everyone** – it is stored per user.
