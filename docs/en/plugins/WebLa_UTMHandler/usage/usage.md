# Usage Guide

This guide covers all features and functionality of UTM Source - Marketing Parameter.

---

## Table of Contents

- [Viewing Marketing Data in Orders](#viewing-marketing-data-in-orders)
- [Managing Marketing Parameters](#managing-marketing-parameters)
- [Automatic Data Capture](#automatic-data-capture)
- [Troubleshooting](#troubleshooting)

---

## Viewing Marketing Data in Orders

### What It Does

After an order is completed, all captured marketing data is automatically displayed in the order detail view. You can see at a glance which channel the customer came from and which campaign led to the order.

### How to Use

1. Navigate to **Orders** in the admin area
2. Click on an order to open the detail view
3. Scroll to the **UTM Source - Marketing Parameter** card

### Displayed Information

Marketing data is presented in three sections:

#### Device

| Column    | Description                               |
| --------- | ----------------------------------------- |
| Type      | Desktop, Mobile, or Tablet                |
| Operating System | Windows, macOS, iOS, Android, etc. |
| Device Name | Specific device (e.g., iPhone, Samsung) |
| Browser   | Chrome, Firefox, Safari, Edge, etc.       |

#### Referrer

| Column    | Description                                          |
| --------- | ---------------------------------------------------- |
| Title     | Automatically recognized source name                 |
| Parameter | Recognized pattern (e.g., "google.com")              |
| Value     | Complete referrer URL                                |

#### Parameter

| Column    | Description                                          |
| --------- | ---------------------------------------------------- |
| Title     | Parameter name (e.g., "utm_source")                  |
| Parameter | Technical parameter name                             |
| Value     | Captured value (e.g., "google", "newsletter_may")    |

### Tips & Best Practices

- Regularly review high-value orders to identify successful marketing channels
- Export orders with UTM data via the Shopware API for deeper analysis
- Compare device data with your website optimization – many mobile orders = good mobile experience

---

## Managing Marketing Parameters

### What It Does

The plugin automatically recognizes new marketing parameters and referrers. In the parameter management, you can view, name, and organize these.

### How to Use

**Navigation**: Marketing → UTM Source - Marketing Parameter

### Parameter List

The list shows all recognized marketing parameters with the following information:

| Column    | Description                            |
| --------- | -------------------------------------- |
| Title     | Display name of the parameter          |
| Parameter | Technical name or pattern              |
| Type      | Get-Parameter or Referrer              |
| Active    | Whether the parameter is actively captured |

### Creating a New Parameter

1. Click **Add**
2. Fill in the fields:
   - **Title**: Understandable name (e.g., "Google Ads Campaign")
   - **Parameter**: Technical name or pattern
     - For URL parameters: The parameter name (e.g., "utm_campaign")
     - For referrers: Part of the URL (e.g., "google.com")
   - **Type**: Select "Get-Parameter" or "Referrer"
   - **Active**: Activate the parameter
3. Click **Save**

### Editing Parameters

1. Click on a parameter in the list
2. Change the desired fields
3. Click **Save**

### Tips & Best Practices

- Rename automatically recognized parameters with meaningful titles for better clarity
- Deactivate parameters you no longer need instead of deleting them
- Establish consistent parameter structures for recurring campaigns

---

## Automatic Data Capture

### How It Works

The plugin captures marketing data in several steps:

1. **On page load**: URL parameters and referrer are captured
2. **Cookie storage**: Data is stored in a cookie (if consented)
3. **Session storage**: With cookie-less capture enabled, additionally stored server-side
4. **On checkout completion**: All captured data is assigned to the order

### Supported Parameters

The plugin automatically captures all URL parameters, not just UTM parameters:

| Standard UTM Parameters | Description           |
| ----------------------- | --------------------- |
| utm_source              | Traffic source        |
| utm_medium              | Marketing medium      |
| utm_campaign            | Campaign name         |
| utm_term                | Paid search terms     |
| utm_content             | Ad content            |

**Additionally**: All other URL parameters such as `fbclid`, `gclid`, `ref`, custom parameters, etc.

### Device Detection

The plugin automatically detects:

- **Device type**: Desktop, Mobile, Tablet, or Other
- **Browser**: Chrome, Firefox, Safari, Edge, and others
- **Operating system**: Windows, macOS, Linux, iOS, Android
- **Device name**: Specific device models (where available)

---

## Troubleshooting

### No Marketing Data in Order

**Symptom**: The "UTM Source - Marketing Parameter" card in the order detail view is empty.

**Possible Causes and Solutions**:

1. **Customer declined statistical cookies**
   - Enable "Record referrer without cookie" in plugin settings
   - Check if the cookie banner is correctly configured

2. **Order without referrer or parameters**
   - Customer accessed the website directly (no referrer)
   - No URL parameters in the entry URL

3. **Browser blocks cookies/JavaScript**
   - Some browsers or extensions block capture
   - Server-side capture (without cookie) partially bypasses this issue

### Referrer Not Captured

**Symptom**: No referrer appears in orders, even though customers come through links.

**Cause**: Many websites no longer send referrers for privacy reasons.

**Solution**:
- Use UTM parameters in your marketing links
- Enable cookie-less capture for server-side storage

### Duplicate Parameter Entries

**Symptom**: Same parameters appear multiple times in the parameter list.

**Cause**: Slightly different spellings or values were recognized as new parameters.

**Solution**:
- Deactivate duplicate entries
- Standardize your marketing links with consistent parameter names

### Session Table Growing Rapidly

**Symptom**: The database is increasing in size.

**Solution**:
- Reduce the value for "Clean session table entries" in settings
- Ensure the Shopware Scheduled Task Handler is running

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
