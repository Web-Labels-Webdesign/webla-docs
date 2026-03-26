# Configuration Settings

This document describes all available settings for BuildIT Share Cart.

**Navigation**: Extensions -> My Extensions -> BuildIT Share Cart -> Configure

---

## Share Cart Configuration

### Activate share as link

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Off       |
| **Required** | No        |

**Description**: Enables the option to share the cart as a copyable link. Your customers can copy the link to their clipboard and share it however they like.

**Example Use Case**: Enable this as the most basic sharing method. The link works independently of any external services.

---

### Activate share as mail

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Off       |
| **Required** | No        |

**Description**: Enables the option to share the cart via email. The customer's default email client opens with a pre-filled subject and message.

**Example Use Case**: Ideal for B2B customers who want to send purchase lists to colleagues or superiors for approval.

---

### Activate share via WhatsApp

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Off       |
| **Required** | No        |

**Description**: Enables the option to share the cart via WhatsApp. Works on mobile devices (opens the WhatsApp app) and desktop (opens WhatsApp Web).

**Example Use Case**: Especially popular with end consumers who want to quickly send product recommendations to friends.

---

### Activate share via Facebook

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Off       |
| **Required** | No        |

**Description**: Enables the option to share the cart through the Facebook send dialog. Requires a valid Facebook App ID (see next setting).

**Example Use Case**: Useful if your target audience uses Facebook as a communication channel.

---

### Facebook App ID

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Text      |
| **Default**  | Empty     |
| **Required** | Only when Facebook sharing is enabled |

**Description**: The App ID of your Facebook application. Required to use the Facebook send dialog.

**How to get a Facebook App ID**:
1. Visit [developers.facebook.com](https://developers.facebook.com/docs/development/create-an-app)
2. Create a new app
3. Copy the App ID into this field

---

## Share Cart Settings

### Delete opened carts older than (days)

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Number    |
| **Default**  | 5         |
| **Required** | No        |

**Description**: Shared carts that have already been opened (clicked) will be automatically deleted after this number of days. This keeps your database clean.

**Example Use Case**: Set a higher value (e.g., 14 days) if your customers need longer decision periods. Set it lower (e.g., 3 days) if you want to keep the database lean.

---

### Delete unopened carts older than (days)

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Number    |
| **Default**  | 30        |
| **Required** | No        |

**Description**: Shared carts that have never been opened are automatically deleted after this number of days. Unopened carts have a longer default period since the recipient may not have seen the link yet.

**Example Use Case**: The default of 30 days is suitable for most shops. Reduce the value if many carts are shared and the database grows quickly.

---

## Sales Channel Specific Settings

All settings can be configured per sales channel. Select the desired sales channel at the top of the configuration page to set different values.

| Setting                    | Scope              |
| -------------------------- | ------------------ |
| Share as link              | Per Sales Channel  |
| Share as mail              | Per Sales Channel  |
| Share via WhatsApp         | Per Sales Channel  |
| Share via Facebook         | Per Sales Channel  |
| Facebook App ID            | Per Sales Channel  |
| Delete opened carts        | Per Sales Channel  |
| Delete unopened carts      | Per Sales Channel  |

---

## Recommended Configurations

### For B2C Shops

| Setting              | Recommended Value |
| -------------------- | ----------------- |
| Link                 | Enabled           |
| Mail                 | Enabled           |
| WhatsApp             | Enabled           |
| Facebook             | Optional          |
| Delete opened        | 5 days            |
| Delete unopened      | 30 days           |

### For B2B Shops

| Setting              | Recommended Value |
| -------------------- | ----------------- |
| Link                 | Enabled           |
| Mail                 | Enabled           |
| WhatsApp             | Disabled          |
| Facebook             | Disabled          |
| Delete opened        | 14 days           |
| Delete unopened      | 60 days           |
