# Configuration Settings

This document describes all available settings for the Preferred Delivery Date for Customers plugin.

**Navigation**: Extensions → My Extensions → Preferred Delivery Date for Customers → Configure

---

## Basic Configuration

### State

| Property     | Value                  |
| ------------ | ---------------------- |
| **Type**     | Select (single-select) |
| **Default**  | Only nationwide holidays |
| **Required** | No                     |

**Description**: Defines which German federal state's public holidays are automatically loaded. Holidays are fetched from the external API [openholidaysapi.org](https://openholidaysapi.org) and updated every hour.

**Options**:
- `Only nationwide holidays`: Only nationwide holidays are blocked (e.g., Christmas, German Unity Day)
- `Brandenburg`, `Berlin`, `Baden-Württemberg`, `Bavaria`, `Bremen`, `Hesse`, `Hamburg`, `Mecklenburg-Vorpommern`, `Lower Saxony`, `North Rhine-Westphalia`, `Rhineland-Palatinate`, `Schleswig-Holstein`, `Saarland`, `Saxony`, `Saxony-Anhalt`, `Thuringia`: In addition to nationwide holidays, the regional holidays of the selected state are also blocked

**Example Use Case**: If your warehouse is in Bavaria, select "Bavaria" so that regional holidays like Assumption Day are automatically blocked as delivery days.

---

### Active

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Switch  |
| **Default**  | Active  |
| **Required** | No      |

**Description**: Activates or deactivates the plugin for all customers and shipping methods. When deactivated, the "Only active for these shipping methods" setting takes effect.

**Example Use Case**: Disable this switch if you want to offer the plugin only for specific shipping methods (e.g., express delivery only).

---

### Only active for these shipping methods

| Property     | Value                       |
| ------------ | --------------------------- |
| **Type**     | Multi-select (shipping methods) |
| **Default**  | Empty (no restriction)      |
| **Required** | No                          |

**Description**: When "Active" is disabled, you can select specific shipping methods for which the preferred delivery date should still be shown. Only applicable when the "Active" switch is turned off.

**Example Use Case**: Enable this for "Express Delivery" if the preferred delivery date should only apply to express shipments, not standard parcels.

---

## Preferred Delivery Date Configuration

### Unavailable Days

| Property     | Value                      |
| ------------ | -------------------------- |
| **Type**     | Multi-select (weekdays)    |
| **Default**  | Saturday, Sunday           |
| **Required** | No                         |

**Description**: Weekdays on which delivery is not possible. These days are shown as unavailable (greyed out) in the date picker calendar.

**Options**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday

**Example Use Case**: If your logistics partner only delivers Monday through Friday, select Saturday and Sunday.

---

### Fallback Lead Time Unit

| Property     | Value                  |
| ------------ | ---------------------- |
| **Type**     | Select (single-select) |
| **Default**  | Days                   |
| **Required** | No                     |

**Description**: Sets the unit for the fallback lead time, which is used when a product has no delivery time configured in Shopware.

**Options**:
- `Hours`: The fallback lead time is specified in hours
- `Days`: The fallback lead time is specified in days
- `Weeks`: The fallback lead time is specified in weeks
- `Months`: The fallback lead time is specified in months

---

### Fallback Delivery Lead Time

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Number |
| **Default**  | 2      |
| **Required** | No     |

**Description**: The default lead time value used when a product has no delivery time configured. Combined with "Fallback Lead Time Unit", this results in e.g. "2 days".

**Example Use Case**: If your products generally need 2 days of lead time, enter "2" and select "Days" as the unit.

---

### Delivery Lead Time Unit

| Property     | Value                  |
| ------------ | ---------------------- |
| **Type**     | Select (single-select) |
| **Default**  | Days                   |
| **Required** | No                     |

**Description**: The unit used for the individual lead times that can be set on products, categories, and shipping methods as custom fields. This unit applies to all such individual lead times.

**Options**: `Days`, `Hours`

---

### Delivery Lead Time — Use Next Day After (Hour)

| Property     | Value   |
| ------------ | ------- |
| **Type**     | Time    |
| **Default**  | 23:59   |
| **Required** | No      |

**Description**: Orders placed after this time will have the earliest possible delivery date shifted by one additional day. The default of 23:59 means this mechanism effectively never triggers. If you have an order cut-off at 2:00 PM, enter "14:00".

**Example Use Case**: If your logistics team can only process orders placed before 12:00 PM on the same day, set this to "12:00". Orders after noon will automatically receive the next available delivery date.

---

### Maximum Delivery Date Unit

| Property     | Value                  |
| ------------ | ---------------------- |
| **Type**     | Select (single-select) |
| **Default**  | Months                 |
| **Required** | No                     |

**Description**: The unit for the maximum delivery date range that customers are allowed to select. Combined with "Maximum Delivery Date", this results in e.g. "3 months".

**Options**: `Days`, `Weeks`, `Months`

---

### Maximum Delivery Date

| Property     | Value              |
| ------------ | ------------------ |
| **Type**     | Number             |
| **Default**  | 0 (unlimited)      |
| **Required** | No                 |

**Description**: The maximum time span into the future that customers are allowed to select a preferred delivery date. At "0" there is no upper limit. Together with "Maximum Delivery Date Unit", this value determines the latest selectable date in the calendar.

**Example Use Case**: If you don't want customers to book dates more than 3 months in advance, enter "3" and select "Months" as the unit.

---

### Show Confirm Button

| Property     | Value       |
| ------------ | ----------- |
| **Type**     | Switch      |
| **Default**  | Disabled    |
| **Required** | No          |

**Description**: When enabled, a confirm button (checkmark) appears next to the date field, which the customer must click after selecting a date. When disabled, the date is automatically saved upon selection (auto-submit).

**Example Use Case**: Enable this switch if your customers frequently accidentally tap the wrong date and it gets saved immediately.

---

## Tag-Based Override

### Override Tag

| Property     | Value                |
| ------------ | -------------------- |
| **Type**     | Multi-select (tags)  |
| **Default**  | Empty (disabled)     |
| **Required** | No                   |

**Description**: When one or more tags are selected here and products with that tag are present in the cart, the delivery date is calculated **exclusively** based on those tagged products — all other products in the cart are ignored for date calculation. Leave empty to disable this feature.

**Example Use Case**: You have special items with very long lead times that shouldn't affect the overall delivery date calculation. Create a "Priority" tag, assign it to the relevant products. When such products are in the cart, only these determine the earliest possible date.

---

## Individual Lead Times (Custom Fields)

In addition to the global configuration, individual lead times can be set at various levels:

### Product: Delivery Date Lead Time

**Location**: Catalogues → Products → [Product] → Additional Fields → Delivery Date Lead Time

Sets a product-specific buffer time. The highest value from product, category, shipping method, and fallback is used.

### Category: Delivery Date Lead Time

**Location**: Catalogues → Categories → [Category] → Additional Fields → Delivery Date Lead Time

Sets a category-wide buffer time. Applies to all products in that category, provided the product itself has no lead time set.

### Shipping Method: Lead Time

**Location**: Settings → Shipping → Shipping Methods → [Shipping Method] → Additional Fields → Lead Time

Sets a shipping method-specific buffer time. Useful when certain shipping methods (e.g., express delivery) require a different lead time than others.

---

## Recommended Configurations

### Standard Setup (Small to Medium Shops)

| Setting                        | Recommended Value       |
| ------------------------------ | ----------------------- |
| State                          | Select your state       |
| Active                         | Active                  |
| Unavailable Days               | Saturday, Sunday        |
| Fallback Lead Time Unit        | Days                    |
| Fallback Lead Time             | 2                       |
| Lead Time Unit                 | Days                    |
| Order Cut-off Time             | 14:00 (or 23:59)        |
| Maximum Delivery Date          | 3 (Months)              |
| Show Confirm Button            | Disabled                |

### Express Delivery Only

| Setting                        | Recommended Value             |
| ------------------------------ | ----------------------------- |
| Active                         | Disabled                      |
| Only active for shipping methods | [Your express method]       |
| Unavailable Days               | Saturday, Sunday              |
| Fallback Lead Time             | 1 Day                         |
