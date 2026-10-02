# How-To Guides

This guide provides step-by-step workflows for common tasks with PayTR Integration.

---

## How the Plugin Works

### Data Flow Overview

```
Checkout (Shopware) → PayTR payment page → Customer pays
                              ↓
        PayTR reports result to callback URL → Payment status in Shopware
                              ↓
                  Customer returns to your shop
```

**Example flow**:
1. The customer orders using the PayTR payment method.
2. The plugin requests a payment session from PayTR and redirects the customer to the PayTR payment page.
3. After payment, PayTR reports the result to your shop. The order is set to **Paid** or **Failed**, and the customer lands back in your shop.

---

## Common Workflows

### How to: Set Up PayTR for the First Time

**Goal**: Offer PayTR as a payment method in your shop.

**Time required**: approx. 15 minutes

**Prerequisites**:
- Plugin is installed and activated
- Access to the PayTR Merchant Panel
- Shop is reachable via its public domain

**Steps**:

1. **Get your credentials from PayTR**
   - Log in to the PayTR Merchant Panel.
   - Open the **Information** page (Bilgi).
   - Note down **Mağaza No**, **Mağaza Şifresi**, and **Mağaza Gizli Anahtar**.

2. **Enter the credentials in Shopware**
   - Navigate to: `Extensions → My Extensions → PayTR Integration → Configure`
   - Enter the values: Mağaza No → **Merchant ID**, Mağaza Şifresi → **Merchant Key**, Mağaza Gizli Anahtar → **Merchant Salt**.
   - Leave **Test Mode** enabled.
   - Click **Save**.

3. **Test the credentials**
   - Click **Test API Credentials**.
   - Wait for the **API connection successful!** notification. If you get an error, see [Troubleshooting](usage/usage.md#troubleshooting).

4. **Enter the callback URL at PayTR**
   - In the **Setup Instructions** section, copy the **Callback URL**.
   - In the PayTR Merchant Panel, open **Support & Installation → Settings → Callback URL Settings**.
   - Paste the URL and save.

5. **Assign the payment method to your sales channel**
   - Navigate to: `Sales Channels → [Your sales channel]`
   - Add **PayTR** under **Payment methods** and click **Save**.

**Result**: PayTR appears in the checkout. Payments run in test mode.

**Troubleshooting**: If PayTR doesn't appear in the checkout, check step 5 and whether the shop uses a supported currency (TRY, EUR, USD, GBP, RUB).

---

### How to: Place a Test Order

**Goal**: Check the complete payment flow before real customers pay.

**Time required**: approx. 5 minutes

**Prerequisites**:
- Setup completed
- **Test Mode** is enabled
- PayTR test card details (available in the PayTR Merchant Panel or PayTR documentation)

**Steps**:

1. **Place an order**
   - Add an item to the cart in the storefront.
   - Select **PayTR** in the checkout and click **Submit order**.

2. **Make a test payment**
   - You're redirected to the PayTR payment page.
   - Enter the test card details and complete the payment.

3. **Check the result**
   - You land on your shop's order confirmation page.
   - Navigate to: `Orders → Overview → [Test order]`
   - The payment status must be **Paid**.

4. **Test a failed payment** (optional)
   - Repeat the process with a test card that triggers a decline.
   - The payment status must be **Failed**.

**Result**: The payment status updates correctly and the customer returns to the shop.

**Troubleshooting**: If the status stays **In Progress**, PayTR's notification isn't reaching your shop. Check the callback URL and reachability, see [Troubleshooting](usage/usage.md#troubleshooting).

---

### How to: Go Live

**Goal**: Accept real payments.

**Time required**: approx. 2 minutes

**Prerequisites**:
- Test order successful
- PayTR has approved your account for live payments

**Steps**:

1. **Disable test mode**
   - Navigate to: `Extensions → My Extensions → PayTR Integration → Configure`
   - Turn off **Test Mode** and click **Save**.
   - If you use sales channel-specific configuration, make sure test mode isn't still enabled in any sales channel.

2. **Test the credentials again**
   - Click **Test API Credentials**.

3. **Place a real order with a small amount** (recommended)
   - Check that the payment appears in the PayTR Merchant Panel and the order in Shopware shows **Paid**.
   - Then refund the payment in the PayTR Merchant Panel.

**Result**: Your shop accepts real payments via PayTR.

---

### How to: Configure Installments

**Goal**: Decide whether and how many installments customers can choose.

**Time required**: approx. 2 minutes

**Steps**:

1. **Open the configuration**
   - Navigate to: `Extensions → My Extensions → PayTR Integration → Configure → Payment Settings`

2. **Set installments**
   - No installments: turn on **Disable Installments**.
   - Limited installments: turn off **Disable Installments** and choose a maximum under **Maximum Installments**.

3. **Save**

**Result**: The PayTR payment page only shows the allowed installment options.

---

## Advanced Workflows

### Different PayTR Accounts per Sales Channel

**Complexity**: Medium

**When to use**: You run several shops (sales channels) that bill through separate PayTR merchant accounts.

1. Navigate to: `Extensions → My Extensions → PayTR Integration → Configure`
2. Select the sales channel in the **Sales Channel** field at the top.
3. Enter the credentials of the matching PayTR account and click **Save**.
4. With the sales channel still selected, click **Test API Credentials**, copy the **Callback URL**, and enter it in the matching account's PayTR Merchant Panel.
5. Repeat for each additional sales channel.
6. Place a test order in each sales channel.

---

## Quick Reference

| Task                    | Key Steps                                                     | Required Settings |
| ----------------------- | ------------------------------------------------------------- | ----------------- |
| Setup                   | Enter credentials, test, set callback URL, assign sales channel | Merchant ID, Merchant Key, Merchant Salt |
| Test order              | Order with test card, check payment status                    | Test Mode enabled |
| Go live                 | Test mode off, test again                                     | Test Mode         |
| Configure installments  | Disable installments or choose a maximum                      | Disable Installments, Maximum Installments |

---

## Best Practices

1. **Always check in test mode first**: A successful test order whose status changes to **Paid** is the only reliable proof that the callback URL works too.
2. **Update the callback URL after a domain change**: If your shop's domain changes, enter the new callback URL in the PayTR Merchant Panel.

## What to Avoid

- ❌ Going live with test mode enabled: customers "pay", but you receive no money.
- ❌ Copying the callback URL from a local or protected environment: PayTR can't reach it, and orders stay **In Progress**.
- ❌ Testing credentials without saving first: the test only checks saved values.
