# Configuration Settings

This document describes all available settings for Customer Specific Discounts.

**Navigation**: Extensions → My Extensions → Customer Specific Discounts → Configure

---

## Discount Settings

### Discount Label

| Property     | Value                                |
| ------------ | ------------------------------------ |
| **Type**     | Text                                 |
| **Default**  | `{category} - {discount}`            |
| **Required** | No                                   |

**Description**: Defines how the discount is labeled in the cart and at checkout. You can use various variables to make the label dynamic.

**Available Variables**:
- `{category}`: Name of the category or dynamic product group
- `{customer}`: Name of the customer
- `{customerGroup}`: Name of the customer group
- `{discount}`: The translated word "discount"
- `{value}`: The discount value in percent

**Example Use Case**: For B2B customers, the label could be `{customerGroup} - {value}` to display e.g. "Dealers - 15%".

---

### Add Discount as Separate Line Item

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, the discount is displayed as a separate line item in the cart. When disabled, the product price is directly reduced.

**Options**:
- `Enabled`: The discount appears as its own line in the cart (e.g. "Dealer discount -15%")
- `Disabled`: The product price is directly reduced and shows the crossed-out original price

**Example Use Case**: Enable this option if you want customers to see the discount as a separate item rather than just the reduced price.

---

### Add Discount Only Once Per Product

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Determines whether a discount is applied only once per product, even if the product is in multiple discount-eligible categories or product groups.

**Options**:
- `Enabled`: Each product receives at most one discount, even if it's in multiple discount-eligible areas
- `Disabled`: Discounts can be applied multiple times to the same product

**Example Use Case**: Keep this option enabled to prevent a product from being discounted multiple times.

---

### Discount Priority Mode

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | Individual first |
| **Required** | No     |

**Description**: Determines which discount is applied when multiple discount sources exist for a product.

**Options**:
- `Most specific first (Product > Individual > Customer > Group)`: The most specific discount takes precedence. Product discounts before individual customer discounts before global customer discounts before group discounts.
- `Individual first, then customer, then group`: Individual customer discounts (on categories/product groups) take precedence, global customer discounts as fallback, group discounts as last fallback.
- `Higher discount wins (customer-friendly)`: The highest available discount is applied - ideal when you want to give your customers the best price.
- `Lower discount wins (shop-friendly)`: The lowest available discount is applied - ideal when you want to handle discounts conservatively.

**Example Use Case**: For a customer-friendly B2B shop, choose "Higher discount wins". For maximum control over discounts, choose "Most specific first".

---

### Dynamic Product Group/Category from Customer Groups Have Priority

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, category or product stream discounts assigned to customer groups take absolute priority over all other discount types, bypassing the discount priority mode.

**Options**:
- `Enabled`: If a product matches a customer group category/product stream discount rule, that discount always wins regardless of the priority mode setting
- `Disabled`: All discount types are evaluated according to the discount priority mode (default behavior)

**Example Use Case**: You have a customer group with both a 20% global discount and a 25% discount on specific categories. With priority mode set to "Lower discount wins", the 20% would normally apply. Enable this setting to ensure the more targeted 25% category discount always takes precedence.

**Note**: This setting only affects products that match a category or product stream discount rule assigned to the customer group. For products not matching any targeted rule, the normal priority mode logic applies.

---

### Enable Customer Group Discounts

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Enables or disables the global discounts assigned via customer group settings (custom fields).

**Options**:
- `Enabled`: The global discount from customer group custom fields is applied
- `Disabled`: Global customer group discounts are ignored

**Example Use Case**: Temporarily disable this option if you want to pause group discounts without deleting them.

---

### Apply Default Group Discounts to Guests

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: When enabled, non-logged-in visitors will see prices with the default customer group's discount applied. This allows you to show promotional prices to all visitors without requiring them to log in.

**Options**:
- `Enabled`: Guests see prices with default group discounts applied
- `Disabled`: Only logged-in customers see discounted prices

**Example Use Case**: Enable this option if you want to display promotional prices to all visitors, encouraging them to browse your shop even without an account.

**Note**: This setting only applies to global group discounts from the default customer group. Individual customer discounts and category-specific discounts still require the customer to be logged in.

---

### Enable Product-Specific Discounts

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Allows setting discounts directly on individual products via custom fields.

**Options**:
- `Enabled`: Product-specific discounts from custom fields are considered
- `Disabled`: Product-specific discounts are ignored

**Example Use Case**: Enable this option if you want to give certain products a fixed discount.

---

### Enable Customer Global Discounts

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | On     |
| **Required** | No     |

**Description**: Allows setting a global discount on individual customers via custom fields in the customer profile.

**Options**:
- `Enabled`: Global customer discounts from custom fields are considered
- `Disabled`: Global customer discounts are ignored

**Example Use Case**: Enable this option to give VIP customers a flat discount on all products.

---

### Show Total Savings in Checkout

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Displays a "You save X" message in the cart and at checkout.

**Options**:
- `Enabled`: The total savings are prominently displayed
- `Disabled`: No additional savings display

**Example Use Case**: Enable this option to make customers aware of the value of their discounts.

---

### Show Original Price with Strikethrough

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Displays the original price with strikethrough next to the discounted price in checkout line items.

**Options**:
- `Enabled`: Original price is shown with strikethrough
- `Disabled`: Only the reduced price is shown

**Example Use Case**: Enable this option to visually highlight the discount.

---

## Recommended Configurations

### For B2B Shops with Dealer Discounts

| Setting                         | Recommended Value                   |
| ------------------------------- | ----------------------------------- |
| Discount Label                  | `{customerGroup} - {value}`         |
| Discount as Line Item           | Off                                 |
| Discount Priority Mode          | Higher discount wins                |
| Enable Customer Group Discounts | On                                  |
| Original Price Strikethrough    | On                                  |

### For Loyal Customer Pricing

| Setting                         | Recommended Value                   |
| ------------------------------- | ----------------------------------- |
| Discount Label                  | `Loyal customer discount {value}`   |
| Discount as Line Item           | On                                  |
| Discount Priority Mode          | Individual first                    |
| Enable Customer Global Discounts| On                                  |
| Show Total Savings              | On                                  |

### For Strict Discount Control

| Setting                         | Recommended Value                   |
| ------------------------------- | ----------------------------------- |
| Add Discount Only Once          | On                                  |
| Discount Priority Mode          | Lower discount wins                 |
| Original Price Strikethrough    | Off                                 |
