# Configuration Settings

This document describes all available settings for **Images in Product Reviews**.

**Navigation**: Extensions → My Extensions → Images in product reviews → Configure

Every setting can be overridden per sales channel — use the sales channel selector at the top of the configuration dialog.

---

## Review File Upload Configuration

### Optional override media folder

| Property     | Value                                 |
| ------------ | ------------------------------------- |
| **Type**     | Select (media folder)                 |
| **Default**  | Empty (plugin's "Image Reviews" folder used) |
| **Required** | No                                    |

**Description**: On install the plugin creates its own "Image Reviews" media folder. All customer uploads are stored there by default. Set this option only if you want review uploads routed into a different existing folder instead.

**Example Use Case**: You already manage media in a dedicated folder structure and want review uploads to land there — for example, in a "Customer Content" folder.

---

### Image displayed below the "Add new review" button

| Property     | Value         |
| ------------ | ------------- |
| **Type**     | Media select  |
| **Default**  | Empty         |
| **Required** | No            |

**Description**: Select an image from the media library that will be displayed below the "Add new review" button in the storefront. Typical use: a banner encouraging customers to upload their own photos.

**Example Use Case**: A call-to-action banner that motivates customers to share product photos with their review.

---

### Image displayed when the review gallery is empty

| Property     | Value         |
| ------------ | ------------- |
| **Type**     | Media select  |
| **Default**  | Empty         |
| **Required** | No            |

**Description**: Select an image shown in the background of the gallery when a product does not have any review images yet. Keeps the layout visually complete even without content.

**Example Use Case**: A subtle placeholder graphic or a "No customer photos yet" message.

---

### Show images from all variants in gallery

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, the product page gallery aggregates review images from **all** variants of the product, not just the currently selected variant.

**Options**:
- `Off`: Only images from reviews of the currently selected variant are shown.
- `On`: Images from reviews of every variant are displayed together.

**Example Use Case**: Products with many color or size variants — you want every visitor to see the full visual feedback regardless of the selected variant.

---

## Sales Channel Specific Settings

| Setting                                   | Scope             |
| ----------------------------------------- | ----------------- |
| Optional override media folder            | Per sales channel |
| Image below "Add new review" button       | Per sales channel |
| Image displayed when gallery is empty     | Per sales channel |
| Show images from all variants             | Per sales channel |

---

## Recommended Configurations

### For shops with many product variants

| Setting                        | Recommended Value |
| ------------------------------ | ----------------- |
| Show images from all variants  | On                |

### For shops with centralized media organization

| Setting                        | Recommended Value                 |
| ------------------------------ | --------------------------------- |
| Optional override media folder | Custom folder (e.g., "Customer Content") |
