# How-To Guide

Step-by-step workflows for common tasks with **Images in Product Reviews**.

---

## How the Plugin Works

### Data Flow Overview

```
[Customer uploads image in review form]
        ↓
[Image is stored in "Image Reviews" media folder]
        ↓
[Review + image reference live in the Shopware backend]
        ↓
[Administrator approves review]
        ↓
[Gallery on product page + CMS element render the image]
```

**Example Flow**:
1. A customer writes a review and drops two photos into the upload zone.
2. On submit, the files are stored in the "Image Reviews" folder and linked to the review.
3. The administrator moderates the review under **Catalogues → Reviews** and sets the status to approved.
4. Images immediately appear in the product page gallery and, if placed, in the CMS element.

---

## Common Workflows

### How to: Set up the plugin

**Goal**: Configure the plugin for production use after installation.

**Time Required**: ~5 minutes

**Prerequisites**:
- Plugin installed
- Administrator rights

**Steps**:

1. **Activate the plugin**
   - Navigate to: `Extensions → My Extensions`
   - Activate the plugin **Images in product reviews**.

2. **Open the configuration**
   - Click **···** next to the plugin → **Configure**.
   - Optionally pick a sales channel at the top of the dialog.

3. **Assign fallback images (optional)**
   - Pick an image under **Image displayed below the "Add new review" button**.
   - Pick an image under **Image displayed when the review gallery is empty**.

4. **Decide on the variant option**
   - If you want images from all variants bundled, enable the switch.

5. **Save**.

**Result**: Customers can now attach images to their reviews. The gallery is wired up on the product page automatically.

---

### How to: Approve a review with images

**Goal**: Publish a new customer review including its images.

**Time Required**: 1–2 minutes per review

**Steps**:

1. **Open the review list**
   - Navigate to: `Catalogues → Reviews`

2. **Select the review**
   - Open a new review with status "not approved".

3. **Inspect the image uploads**
   - The **Image uploads** card at the top shows every attached preview.
   - Watch out for unsuitable or legally questionable content.

4. **Approve or delete**
   - To approve: set the status switch to **approved** and save.
   - To reject: delete the review. Orphaned media can be cleaned up later under `Content → Media → Image Reviews`.

**Result**: Approved reviews (with images) instantly show up in the storefront.

---

### How to: Embed the review gallery in a Shopping Experience

**Goal**: Place review images as a dedicated block inside a product page Shopping Experience.

**Time Required**: 3–5 minutes

**Steps**:

1. **Open the Shopping Experience**
   - Navigate to: `Content → Shopping Experiences`
   - Open a **Product page** layout or create a new one.

2. **Add the block**
   - **Add block** → category **Commerce** → drag **Review Images** into the target section.

3. **Save and assign**
   - Save the layout.
   - Under `Catalogues → Products → [Product] → Layout` assign the new layout to the product.

**Result**: The gallery renders in the chosen position on the product page.

---

### How to: Route uploads to a custom media folder

**Goal**: Collect new review images inside an existing media folder.

**Time Required**: 2 minutes

**Steps**:

1. **Prepare the target folder**
   - Under `Content → Media`, create or pick the desired folder.

2. **Open plugin configuration**
   - `Extensions → My Extensions → Images in product reviews → Configure`

3. **Pick the folder**
   - Select it under **Optional override media folder**.
   - Save.

**Result**: All new uploads land in the chosen folder. Previously uploaded images stay in their current folder.

---

## Quick Reference

| Task                         | Key Steps                                               | Settings Required              |
| ---------------------------- | ------------------------------------------------------- | ------------------------------ |
| Set up plugin                | Activate → Configure → fallback images                  | all settings (optional)        |
| Approve review               | Catalogues → Reviews → status approved                  | none                           |
| Embed CMS element            | Shopping Experience → Commerce block → Review Images    | none                           |
| Bundle variants              | Enable switch                                           | Show images from all variants  |

---

## Best Practices

1. **Establish moderation**: Always review reviews (and their images) before publishing — customer photos may contain unwanted content.
2. **Use fallback images**: A background image for empty galleries keeps the product page visually complete.
3. **Dedicated media folder**: Keep customer uploads organizationally separated from editorial media by sticking with the default "Image Reviews" folder.
4. **Variant-rich products**: Enable the cross-variant gallery so customers see the full visual feedback.

## What to Avoid

- ❌ **Auto-approving reviews**: without moderation, unsuitable images may go live.
- ❌ **Deleting the "Image Reviews" folder**: existing review images lose their association.
- ❌ **Manually moving individual media files**: references are not rewritten automatically — only move files if your media structure truly requires it.
