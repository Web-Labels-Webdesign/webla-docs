# Configuration Settings

This document describes all available settings for PayTR Integration.

**Navigation**: Extensions → My Extensions → PayTR Integration → Configure

> All settings can be set globally or per sales channel. Select the sales channel at the top of the configuration page.

---

## Setup Instructions

### Callback URL

| Property     | Value                          |
| ------------ | ------------------------------ |
| **Type**     | Display (read-only, copyable)  |
| **Default**  | `https://<your-domain>/api/paytr/callback` |
| **Required** | Must be entered in the PayTR Merchant Panel |

**Description**: PayTR uses this address to tell your shop whether a payment succeeded or failed. Your orders' payment status is only updated automatically once this is set up.

The URL is built from your sales channels' domains. If a sales channel is selected at the top, you only see its URLs; otherwise you see the URLs of all sales channels. If there are several addresses, one URL appears per address. The brackets after **Callback URL** list the sales channels reachable via that address, e.g. **Callback URL (Storefront, Headless)**. Sales channels without a domain of their own (e.g. Headless) are grouped under the address you opened the Administration on.

You only need one URL: a publicly reachable one that matches the sales channels where you offer PayTR.

Copy the URL with the copy icon in the field and paste it into the PayTR Merchant Panel under **Support & Installation → Settings → Callback URL Settings**.

> **Important**: Don't use an internal or local domain (e.g. `localhost`). PayTR can't reach it.

---

## PayTR API Credentials

You'll find all three credentials in the PayTR Merchant Panel on the **Information** page (Bilgi).

### Merchant ID (Mağaza No)

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | empty |
| **Required** | Yes   |

**Description**: Your merchant number at PayTR.

---

### Merchant Key (Mağaza Şifresi)

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Password (hidden)  |
| **Default**  | empty              |
| **Required** | Yes                |

**Description**: Your secret merchant key. It secures communication with PayTR and is also used to verify that payment notifications really come from PayTR.

---

### Merchant Salt (Mağaza Gizli Anahtar)

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Password (hidden)  |
| **Default**  | empty              |
| **Required** | Yes                |

**Description**: Your second secret key at PayTR. It is used together with the Merchant Key for security.

> Watch out for leading or trailing spaces when copying. Even one extra space causes PayTR to reject the request.

---

### Test Mode

| Property     | Value    |
| ------------ | -------- |
| **Type**     | Switch   |
| **Default**  | Enabled  |
| **Required** | No       |

**Description**: In test mode, no real payments are made. You can run through the flow using PayTR's test cards.

**Use case**: Keep test mode enabled during setup. Only disable it once test payments go through successfully and your PayTR account is approved for live payments.

> **Caution**: Test mode is **enabled** after installation. As long as it is on, you don't receive any money for orders.

---

### Test API Credentials

| Property | Value  |
| -------- | ------ |
| **Type** | Button |

**Description**: Sends a test request to PayTR using the **saved** credentials of the sales channel selected at the top and shows the result as a notification. If the sales channel has no credentials of its own, the global credentials are checked.

- **API connection successful!**: The credentials are valid.
- **Error message**: Shows the reason, e.g. invalid Merchant ID, wrong key/salt, or missing credentials.

> Save the configuration **before** running the test. Unsaved input is not checked.

---

## Payment Settings

### Disable Installments

| Property     | Value     |
| ------------ | --------- |
| **Type**     | Switch    |
| **Default**  | Disabled  |
| **Required** | No        |

**Description**: When enabled, PayTR shows no installment options on the payment page. Customers can only pay in full.

**Use case**: Enable this if you don't want to offer installments or your PayTR contract doesn't include them.

---

### Maximum Installments

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Select             |
| **Default**  | Maximum Available  |
| **Required** | No                 |

**Description**: Sets the maximum number of installments a customer can choose.

**Options**:
- `Maximum Available`: All installment options PayTR offers for your account and the customer's card
- `2`, `3`, `4`, `6`, `9`, `12`: At most this many installments

**Use case**: Limit installments to e.g. `6` if longer terms cost you too much in fees.

> This setting has no effect when **Disable Installments** is on. Which installment options actually appear also depends on your PayTR contract and the customer's card.

---

## Sales Channel-Specific Settings

| Setting              | Scope                        | Description |
| -------------------- | ---------------------------- | ----------- |
| Merchant ID          | Global / Per sales channel   | A separate PayTR account per sales channel is possible |
| Merchant Key         | Global / Per sales channel   | Belongs to the respective Merchant ID |
| Merchant Salt        | Global / Per sales channel   | Belongs to the respective Merchant ID |
| Test Mode            | Global / Per sales channel   | E.g. test mode only in a test sales channel |
| Disable Installments | Global / Per sales channel   | |
| Maximum Installments | Global / Per sales channel   | |

If a sales channel has no value of its own, the global setting (**All Sales Channels**) applies.

> If you use different PayTR accounts in multiple sales channels, you need to enter the callback URL in **each** PayTR Merchant Panel.

---

## Recommended Configurations

### For Setup and Testing

| Setting              | Recommended Value  |
| -------------------- | ------------------ |
| Test Mode            | Enabled            |
| Disable Installments | As needed          |
| Maximum Installments | Maximum Available  |

### For Live Operation

| Setting              | Recommended Value                            |
| -------------------- | -------------------------------------------- |
| Test Mode            | Disabled                                     |
| Disable Installments | According to your PayTR contract             |
| Maximum Installments | Matching your installment fees, e.g. `6`     |
