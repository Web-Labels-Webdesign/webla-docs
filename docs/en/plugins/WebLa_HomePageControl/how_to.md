# How-To Guide

Step-by-step workflows for typical tasks with Homepage Configuration.

---

## How the Plugin Works

```
Visitor opens the home page
   → plugin checks all active configurations of the sales channel, sorted by priority
   → the first configuration whose rules match wins
   → its shopping experience is served as the home page
```

If no configuration matches, the home page set in the sales channel stays in place.

---

## Common Workflows

### How to: run a seasonal campaign on a schedule

**Goal**: a Christmas landing page appears automatically on 1 December and disappears after 26 December.

**Time Required**: 10 minutes (excluding designing the shopping experience)

**Prerequisites**:
- The shopping experience is created and finished under **Content → Shopping Experiences**
- You know the start and end time in UTC

**Steps**:

1. **Create the configuration**
   - Navigate to: **Marketing → Homepage Configuration**
   - Click **Add Configuration**

2. **Fill in the base information**
   - **Name**: `Christmas 2026`
   - **Priority**: `50` — higher than your permanent configurations
   - **Landing Page**: your Christmas shopping experience
   - **Sales channel**: pick the channel concerned or leave empty for all
   - **Rule operator**: `AND`
   - **Active**: switch on
   - Click **Save**

3. **Add the time rule**
   - In the **Rules** card that is now visible, pick the **Rule type** `Date range`
   - **From**: `30/11/2026, 23:00` (equals 1 December 00:00 Central European winter time)
   - **To**: `26/12/2026, 22:59`
   - Click **Add rule**

**Result**: from the start time your home page shows the Christmas shopping experience, afterwards the regular home page returns automatically.

**Troubleshooting**: the switch can take up to five minutes because the scheduled task refreshes the cache at that interval. If nothing happens, check the **Active** switch and the time in UTC.

---

### How to: give a customer group its own home page

**Goal**: B2B customers permanently see a different home page than retail customers.

**Time Required**: 5 minutes

**Prerequisites**:
- The B2B customer group exists under **Settings → Shop → Customer groups**
- A matching shopping experience is created

**Steps**:

1. **Create the configuration**
   - Navigate to: **Marketing → Homepage Configuration → Add Configuration**
   - **Name**: `B2B home page`, **Priority**: `10`, **Rule operator**: `AND`
   - **Landing Page**: your B2B shopping experience
   - Switch **Active** on and click **Save**

2. **Add the customer group rule**
   - **Rule type**: `Customer group`
   - Select your B2B customer group
   - Click **Add rule**

**Result**: logged in B2B customers see the B2B home page, everyone else the regular one.

**Troubleshooting**: visitors who are not logged in belong to the sales channel's default customer group. Combine with a **Customer status** rule if you need to separate them.

---

### How to: address guests and logged in customers differently

**Goal**: new visitors get a promotional home page, returning customers an assortment-focused one.

**Time Required**: 10 minutes

**Steps**:

1. **First configuration for guests**
   - **Name**: `Home page guests`, **Priority**: `20`, **Rule operator**: `AND`
   - Rule of type **Customer status** with the value `Guest`

2. **Second configuration for logged in customers**
   - **Name**: `Home page customers`, **Priority**: `21`, **Rule operator**: `AND`
   - Rule of type **Customer status** with the value `Logged in`

**Result**: each group gets its own home page. The priorities differ to keep the order unambiguous — since the rules are mutually exclusive, only one ever matches anyway.

---

### How to: build a weekend or happy hour home page

**Goal**: a home page that recurs regularly instead of running once.

**Steps**:

1. Create and save the configuration as usual
2. For a weekend: rule type **Days of week**, select Saturday and Sunday in **one** rule
3. For a window during the day: rule type **Time of day**, **From** `18:00` and **To** `20:00`

**Result**: the shopping experience reappears in every matching window, with no end date.

**Troubleshooting**: if both conditions have to apply at once (Saturday **and** between 18:00 and 20:00), set the **Rule operator** to `AND` and create both rules in the same configuration.

---

## Advanced Workflows

### Layering a limited campaign over a permanent configuration

**Complexity**: Medium

**When to Use**: you have a permanent home page per customer group and want to layer a campaign on top for a week without touching the existing configuration.

1. Leave the permanent configuration untouched, for example at priority `10`
2. Create the campaign with priority `50` and a rule of type **Date range**
3. Activate both

While the time window runs, the campaign wins. Once it ends, the permanent configuration takes over again by itself — you do not have to switch anything off.

---

## Quick Reference

| Task                          | Key Steps                                      | Rule Type      |
| ----------------------------- | ---------------------------------------------- | -------------- |
| Seasonal campaign             | High priority + time window in UTC             | Date range     |
| Home page per customer group  | Select the customer group                      | Customer group |
| Guests vs. logged in          | Two configurations with different priorities   | Customer status |
| Recurring daily window        | Set from/to time                               | Time of day    |
| Weekend campaign              | Select several days in a single rule           | Days of week   |

---

## Best Practices

1. **Assign distinct priorities**: use steps such as 10 / 20 / 50 so you can slot campaigns in between later without renumbering everything.
2. **Test first**: activate a new configuration with a short time window and check the result in the shop before scheduling the real campaign.
3. **Plan in UTC**: convert start and end time once, carefully, and note the local time in the configuration name.
4. **Deactivate rather than delete after the season**: next year you only adjust the dates.

## What to Avoid

- ❌ A configuration without rules using the **AND** operator — it takes over the home page permanently
- ❌ The same priority for two configurations that can match at the same time — the outcome is then unpredictable
- ❌ Entering local time in a date range rule — the campaign starts one or two hours off
- ❌ Planning a campaign to the minute — the cache is only refreshed every five minutes
- ❌ Creating a time-of-day window that crosses midnight — split it across two configurations
