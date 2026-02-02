# Configuration Settings

This document describes all available settings for UTM Source - Marketing Parameter.

**Navigation**: Extensions → My Extensions → UTM Source - Marketing Parameter → Configure

---

## UTM Handler Configuration

### Record referrer without setting a cookie

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Enables server-side referrer capture without using cookies in the customer's browser.

**How it works**:
- **Disabled (Default)**: The referrer and URL parameters are stored in a cookie (`webla_utm_param`) in the customer's browser. This cookie belongs to the "Statistical" category and requires customer consent via the cookie banner.
- **Enabled**: The referrer is additionally stored in a server-side session table. This allows capture even when the customer has not accepted statistical cookies.

**Example Use Cases**:
- Enable this option if you want to maximize marketing data capture, even for customers who decline cookies
- Useful for shops with a high rate of cookie rejections
- Recommended for GDPR-sensitive industries where cookie consent is rarely granted

**Note**: This setting does not affect URL parameter capture – these are still captured via cookie when the customer has consented.

---

### Clean session table entries older than (days)

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 30     |
| **Required** | No     |

**Description**: Specifies after how many days old entries in the session table are automatically deleted.

**How it works**:
A scheduled task runs regularly and deletes all session entries older than the specified number of days. This keeps the database clean and prevents unnecessary data growth.

**Recommended values**:
- **30 days (Default)**: Sufficient for most shops, as data is already assigned to the order upon checkout completion
- **7-14 days**: For shops with many visitors and few orders (reduces database size)
- **60-90 days**: When you need longer analysis periods or customers frequently make multiple visits before purchasing

**Example Use Case**: Set a lower value if your database grows quickly and you want to save storage space. Relevant marketing data remains preserved for completed orders.

---

## Cookie Settings

The plugin automatically registers a cookie in the "Statistical" category of the Shopware cookie banner:

| Cookie Name       | Category    | Validity |
| ----------------- | ----------- | -------- |
| `webla_utm_param` | Statistical | 30 days  |

**Important**: The cookie is only set when the customer accepts statistical cookies via the cookie banner. If declined, data is initially kept in the browser's session storage and synchronized only upon renewed consent.

---

## Recommended Configurations

### For maximum data capture

| Setting                                | Recommended Value |
| -------------------------------------- | ----------------- |
| Record referrer without cookie         | Enabled           |
| Clean session table entries (days)     | 30                |

### For minimal data retention (GDPR-focused)

| Setting                                | Recommended Value |
| -------------------------------------- | ----------------- |
| Record referrer without cookie         | Disabled          |
| Clean session table entries (days)     | 7                 |

### For shops with long purchase decision cycles

| Setting                                | Recommended Value |
| -------------------------------------- | ----------------- |
| Record referrer without cookie         | Enabled           |
| Clean session table entries (days)     | 60                |
