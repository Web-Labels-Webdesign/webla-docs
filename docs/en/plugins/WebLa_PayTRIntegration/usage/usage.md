# Usage Guide

This guide covers all features and capabilities of PayTR Integration.

---

## Table of Contents

- [PayTR Payment Method](#paytr-payment-method)
- [Payment Flow](#payment-flow)
- [Installments](#installments)
- [Currencies and Language](#currencies-and-language)
- [Admin Panel Features](#admin-panel-features)
- [Storefront Features](#storefront-features)
- [Troubleshooting](#troubleshooting)

---

## PayTR Payment Method

### What It Does

On installation, the plugin automatically creates the **PayTR** payment method with the description "Pay securely with PayTR". It is activated when you activate the plugin and deactivated when you deactivate or uninstall it.

### How to Use It

For customers to see PayTR in the checkout, assign the payment method to your sales channel:

1. Open **Sales Channels → [Your sales channel]**.
2. Add **PayTR** to the **Payment methods** field.
3. Click **Save**.

You can change the name, description, logo, and position of the payment method under **Settings → Shop → Payment methods → PayTR**.

### Tips & Best Practices

- Mention in the description which cards are accepted and whether installments are available, e.g. "Credit and debit card, installments available".
- To offer PayTR only to certain customers (e.g. shipping country Turkey only), use Shopware's Rule Builder via the payment method's **Availability rule**.

---

## Payment Flow

### What Happens During an Order

```
Customer submits order → Redirect to PayTR payment page → Customer pays
        → PayTR reports result to your shop → Payment status is updated
        → Customer returns to the shop
```

1. The customer selects **PayTR** in the checkout and clicks **Submit order**.
2. Shopware creates the order. The payment status changes to **In Progress**.
3. The customer is redirected to PayTR's secure payment page and enters their card details there, with 3D Secure confirmation if required.
4. PayTR reports the result to your shop in the background (via the callback URL):
   - Payment successful → payment status **Paid**
   - Payment failed → payment status **Failed**
5. The customer is sent back to your shop and sees the order confirmation, or, if the payment failed, the option to try again.

### Good to Know

- The customer has **30 minutes** to complete payment on the PayTR page.
- The payment status is determined solely by PayTR's notification to the callback URL, not by the customer returning. If the customer closes the browser after paying, the order is still marked as paid.
- Every notification from PayTR is verified. Forged notifications are rejected.
- PayTR receives the cart (item name, price, quantity) as well as the customer's name, email address, billing address, and phone number. The customer also sees this data on the payment page.

---

## Installments

PayTR shows customers suitable installment options for their card on the payment page. You control this with two settings:

| Goal                                | Setting |
| ----------------------------------- | ------- |
| Don't offer installments            | Turn on **Disable Installments** |
| Limit installments to a maximum     | Set **Maximum Installments** to `2`–`12` |
| Offer all available installments    | Set **Maximum Installments** to `Maximum Available` |

For details, see [Configuration Settings](../configuration/settings.md#payment-settings).

---

## Currencies and Language

### Supported Currencies

| Shop currency           | At PayTR |
| ----------------------- | -------- |
| Turkish lira (TRY)      | TL       |
| Euro (EUR)              | EUR      |
| US dollar (USD)         | USD      |
| British pound (GBP)     | GBP      |
| Russian ruble (RUB)     | RUB      |

> For any other currency (e.g. CHF), the plugin automatically hides PayTR in the checkout. If a customer switches currency after selecting PayTR, the payment is declined and the customer can choose a different payment method.

Also check with PayTR which foreign currencies are enabled for your merchant account.

### Payment Page Language

- If the customer's shop language is **Turkish**, the PayTR payment page appears in Turkish.
- For all other languages it appears in **English**.

---

## Admin Panel Features

### Callback URL Display

**Location**: Extensions → My Extensions → PayTR Integration → Configure → Setup Instructions

**Purpose**: Shows the address you need to enter as the callback URL in the PayTR Merchant Panel.

**Usage**:
1. Select the sales channel you need the URL for at the top.
2. Click the copy icon in the **Callback URL** field.
3. Paste the URL into the PayTR Merchant Panel under **Support & Installation → Settings → Callback URL Settings**.

### Test API Credentials

**Location**: Extensions → My Extensions → PayTR Integration → Configure → PayTR API Credentials

**Purpose**: Checks whether PayTR accepts the selected sales channel's saved credentials, without you having to place a test order.

**Usage**:
1. Enter Merchant ID, Merchant Key, and Merchant Salt.
2. Click **Save**.
3. Click **Test API Credentials**.
4. **API connection successful!** or an error message with the reason appears in the top right.

### Payment Status in Orders

**Location**: Orders → Overview → [Order] → Status

**Purpose**: The plugin maintains the payment status automatically:

| Status          | Meaning |
| --------------- | ------- |
| **Open**        | Order created, customer not yet redirected to PayTR |
| **In Progress** | Customer is on the PayTR payment page or left it without paying |
| **Paid**        | PayTR confirmed the successful payment |
| **Failed**      | PayTR declined the payment (e.g. card declined, 3D Secure failed) |

You'll find the exact decline reason in the PayTR Merchant Panel for the respective transaction.

---

## Storefront Features

### Payment Method in Checkout

**Where it appears**: Checkout → Complete order → Payment method

**What customers see**: The **PayTR** payment method with the description you set. After submitting the order, they are redirected to the PayTR payment page.

### Paying Later

**Where it appears**: My account → Orders → [Order]

**What customers see**: If a payment failed or was cancelled, customers can restart the payment from their account or choose a different payment method, as long as your Shopware settings allow it.

---

## Troubleshooting

### PayTR Doesn't Appear in the Checkout

**Symptom**: Customers can't select PayTR.

**Cause**: The payment method isn't assigned to the sales channel, is inactive, is excluded by an availability rule, or the customer is using a currency PayTR doesn't support.

**Solution**: Check **Sales Channels → [Your sales channel] → Payment methods**, **Settings → Shop → Payment methods → PayTR** (**Active** switch, **Availability rule**), and the shop currency (TRY, EUR, USD, GBP, or RUB).

### Error Message Right After "Submit order"

**Symptom**: The customer isn't redirected to PayTR and sees a payment error instead.

**Cause**: PayTR rejected the request, usually because of missing or wrong credentials, or your server couldn't reach PayTR.

**Solution**: Click **Test API Credentials** in the plugin configuration and fix the reported errors. If you use sales channel-specific credentials, check the right sales channel.

### Order Stays "In Progress" Although the Customer Paid

**Symptom**: The PayTR Merchant Panel shows a successful payment, but the payment status in Shopware doesn't change.

**Cause**: PayTR's notification doesn't reach your shop. Common reasons:
- The callback URL is missing or wrong in the PayTR Merchant Panel
- The shop isn't publicly reachable (e.g. password-protected staging system or local environment)
- A firewall or bot protection blocks requests from PayTR
- The PayTR Merchant Panel and Shopware use different credentials

**Solution**: Compare the callback URL in the plugin configuration with the entry in the PayTR Merchant Panel, make sure `/api/paytr/callback` is publicly reachable, and check the credentials. The PayTR Merchant Panel shows for each transaction whether the notification was delivered successfully.

### Test Payments Work, Live Payments Don't

**Symptom**: After disabling test mode, payments are declined.

**Cause**: Your PayTR account isn't approved for live payments yet.

**Solution**: Check your account's activation status with PayTR.

### "Invalid Merchant ID" or "Invalid Key/Salt" During the Test

**Symptom**: The credential test fails.

**Cause**: Typos, spaces picked up when copying, or credentials from a different PayTR account.

**Solution**: Copy all three values again from the **Information** page in the PayTR Merchant Panel, save, and test again.

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guides](../how_to.md)
