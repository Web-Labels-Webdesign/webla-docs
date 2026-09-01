# Configuration Settings

> This plugin has no global settings under **Extensions → My Extensions**.
> Everything is maintained directly in the individual configurations.

**Navigation**: Marketing → Homepage Configuration

A *configuration* links a shopping experience to the rules under which it is served as the home page. You can create as many configurations as you like.

---

## Base Information

You find these fields in the **Base Information** card of a configuration.

### Name

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | empty |
| **Required** | Yes   |

**Description**: Your internal label for the configuration. It only ever appears in the administration, never in the shop.

**Example Use Case**: `Christmas 2026`, `B2B home page`, `Black Week`.

---

### Active

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Switch |
| **Default**  | Off    |
| **Required** | No     |

**Description**: Only active configurations are evaluated at all. Inactive ones keep all their rules but never take effect.

**Example Use Case**: Build your Christmas campaign in October and leave it inactive until everything is signed off. Or switch a recurring campaign off after the season instead of deleting it.

---

### Priority

| Property     | Value            |
| ------------ | ---------------- |
| **Type**     | Number (1 to 100) |
| **Default**  | empty            |
| **Required** | Yes              |

**Description**: Decides which configuration wins when several match at the same time. The highest value takes over, all others are ignored.

**Example Use Case**: Your B2B home page runs permanently at priority `10`. The Black Week campaign gets priority `50` and overrides it automatically for a week — afterwards the B2B home page takes over again without you switching anything.

---

### Landing Page

| Property     | Value                        |
| ------------ | ---------------------------- |
| **Type**     | Shopping experience selection |
| **Default**  | empty                        |
| **Required** | Yes                          |

**Description**: The shopping experience served as the home page as soon as this configuration's rules match. You create the shopping experience beforehand in **Content → Shopping Experiences**.

**Example Use Case**: Your "Christmas world" experience with advent calendar, gift ideas and a matching banner.

---

### Sales Channel

| Property     | Value                          |
| ------------ | ------------------------------ |
| **Type**     | Sales channel selection        |
| **Default**  | empty (= all sales channels)   |
| **Required** | No                             |

**Description**: Restricts the configuration to one sales channel. Leave the field empty and it applies to **all** sales channels.

**Example Use Case**: Your Christmas campaign runs in the German shop only, while the international sales channel keeps its regular home page.

---

### Rule Operator

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Select |
| **Default**  | empty  |
| **Required** | Yes    |

**Description**: Determines how this configuration's rules are joined.

**Options**:
- `AND`: the configuration only takes effect when **all** rules match
- `OR`: the configuration takes effect as soon as **at least one** rule matches

**Example Use Case**: "Date range 1 Dec – 24 Dec **AND** customer group Retail" gives you a Christmas page for retail customers only. "Saturday **OR** Sunday" gives you a weekend home page.

> **Important**: A configuration without any rule always matches when the operator is **AND**, and therefore takes over the home page permanently. With **OR** it never matches. Always add at least one rule after saving.

---

## Rules

The **Rules** card only appears **after** you have saved the configuration once. The individual rule types and their behaviour are described in the [Usage Guide](../usage/usage.md).

---

## Sales Channel Specific Settings

| Setting             | Scope                          | Description                          |
| ------------------- | ------------------------------ | ------------------------------------ |
| Whole configuration | Per sales channel or global    | Controlled by the **Sales channel** field |

---

## Recommended Configurations

### For a limited seasonal campaign

| Setting       | Recommended Value                          |
| ------------- | ------------------------------------------ |
| Priority      | 50 (higher than your permanent configurations) |
| Rule operator | AND                                        |
| Rules         | Date range                                 |
| Sales channel | The channel concerned                      |

### For a permanent home page per customer group

| Setting       | Recommended Value              |
| ------------- | ------------------------------ |
| Priority      | 10                             |
| Rule operator | AND                            |
| Rules         | Customer group                 |
| Sales channel | empty if it applies everywhere |
