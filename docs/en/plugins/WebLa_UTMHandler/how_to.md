# How-To Guide

This guide provides step-by-step workflows for common tasks with UTM Source - Marketing Parameter.

---

## How the Plugin Works

### Data Flow Overview

```
Customer visits shop → Data captured → Stored on order → Visible in admin
        ↓                   ↓                ↓                   ↓
   URL parameters      Cookie/Session    Order assignment    Order details
   + Referrer          + Server DB       + Device data       + Reports
   + Device
```

**Example Flow**:
1. Customer clicks on Google ad with `?utm_source=google&utm_campaign=winter_sale`
2. Plugin captures: Referrer (google.com), Parameters (utm_source, utm_campaign), Device (Mobile, iOS, Safari)
3. Data is stored in cookie and/or server session
4. Customer places order → All data is assigned to the order
5. You see the complete marketing data in the order detail view

---

## Common Workflows

### How to: Create UTM Parameters for Marketing Links

**Goal**: Ensure your marketing links are correctly tracked

**Prerequisites**:
- Plugin is installed and activated
- Access to your marketing platform (Google Ads, Facebook, newsletter tool)

**Steps**:

1. **Determine base URL**
   - Select the target page in your shop
   - Example: `https://my-shop.com/offer`

2. **Add UTM parameters**
   - Append parameters to the URL:
   ```
   https://my-shop.com/offer?utm_source=google&utm_medium=cpc&utm_campaign=winter_2024
   ```

3. **Use standard parameters**

   | Parameter    | Purpose               | Example values                   |
   | ------------ | --------------------- | -------------------------------- |
   | utm_source   | Where traffic comes from | google, facebook, newsletter  |
   | utm_medium   | Marketing channel     | cpc, social, email               |
   | utm_campaign | Campaign name         | winter_2024, black_friday        |
   | utm_content  | Ad content            | red_banner, text_link            |
   | utm_term     | Search term           | buy_shoes                        |

4. **Test the link**
   - Open the link in an incognito window
   - Complete a test order
   - Check the marketing data in the order view

**Result**: All orders through this link show the configured UTM parameters.

---

### How to: Analyze Marketing Success of a Campaign

**Goal**: Find out which orders came from a specific campaign

**Prerequisites**:
- Completed orders with UTM data
- Access to the admin area

**Steps**:

1. **Open order overview**
   - Navigate to: `Orders`

2. **Search through orders**
   - Open individual orders
   - Scroll to the **UTM Source - Marketing Parameter** card

3. **Identify campaign data**
   - Look for the `utm_campaign` parameter
   - Note the value (e.g., "winter_2024")

4. **For deeper analysis: Use API**
   - Export orders via the Shopware Admin API
   - UTM data is available in the `utmConfiguration` field

**Result**: You know which orders came from which campaign.

**Tip**: For comprehensive analyses, we recommend exporting to an analysis tool or spreadsheet.

---

### How to: Set Up Cookie-less Tracking

**Goal**: Capture marketing data even when cookies are declined

**Prerequisites**:
- Admin access to plugin settings

**Steps**:

1. **Open plugin configuration**
   - Navigate to: `Extensions → My Extensions`
   - Find **UTM Source - Marketing Parameter**
   - Click **Configure**

2. **Enable setting**
   - Enable: **Record referrer without setting a cookie**
   - Click **Save**

3. **Adjust cleanup interval (optional)**
   - Set **Clean session table entries older than** to an appropriate value
   - Recommendation: 30 days

4. **Test functionality**
   - Open your shop in an incognito window
   - Decline all cookies
   - Come through a referrer link
   - Complete a test order
   - Check if the referrer appears in the order

**Result**: Referrers are captured even without cookie consent.

---

### How to: Organize Recognized Parameters

**Goal**: Give automatically recognized parameters meaningful names

**Prerequisites**:
- Orders with captured marketing data

**Steps**:

1. **Open parameter management**
   - Navigate to: `Marketing → UTM Source - Marketing Parameter`

2. **Identify parameters**
   - Look for parameters with technical names (e.g., "fbclid")
   - These were automatically created on first occurrence

3. **Rename parameters**
   - Click on the parameter
   - Change the **Title** to an understandable name
     - Example: "fbclid" → "Facebook Click ID"
   - Click **Save**

4. **Deactivate unused parameters**
   - Find parameters you no longer use
   - Set **Active** to "Off"
   - Save the change

**Result**: Your parameter list is organized and understandable.

---

## Quick Reference

| Task                                 | Key Steps                                            | Required Settings         |
| ------------------------------------ | ---------------------------------------------------- | ------------------------- |
| View marketing data                  | Orders → Open order → UTM card                       | None                      |
| Enable cookie-less tracking          | Plugin config → Enable without cookie                | Without cookie: On        |
| Rename parameters                    | Marketing → UTM Source → Parameter → Change title    | None                      |
| Delete old session data faster       | Plugin config → Reduce cleanup days                  | Cleanup: e.g., 7          |

---

## Best Practices

1. **Consistent UTM structure**: Use the same naming convention across all marketing channels for utm_source, utm_medium, and utm_campaign

2. **Use lowercase**: Consistently use lowercase letters in UTM parameters (google instead of Google) to avoid duplicates

3. **Regular review**: Check the parameter management monthly and name/organize new entries

4. **Test before launch**: Always test new marketing links with a test order before starting the campaign

5. **Documentation**: Maintain a list of your used UTM values so the entire team works consistently

## What to Avoid

- **Spaces in parameter values** – Use underscores or hyphens
- **Special characters** – Limit yourself to letters, numbers, and _/-
- **Too long parameter values** – Keep values short and concise (max 50 characters)
- **Inconsistent capitalization** – "Google", "google", and "GOOGLE" are captured as three different sources
