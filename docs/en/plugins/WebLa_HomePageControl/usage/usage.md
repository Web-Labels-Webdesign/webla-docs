# Usage Guide

This guide describes every feature of Homepage Configuration.

---

## Table of Contents

- [Core Principle](#core-principle)
- [Managing Configurations](#managing-configurations)
- [The Rule Types](#the-rule-types)
- [Combining Rules](#combining-rules)
- [Priority and Sales Channels](#priority-and-sales-channels)
- [Time Zones](#time-zones)
- [Cache Behaviour](#cache-behaviour)
- [Troubleshooting](#troubleshooting)

---

## Core Principle

Every time the home page is opened, the plugin checks all **active** configurations that apply to the requested sales channel — in descending order of priority. The first configuration whose rules match wins: its shopping experience is served as the home page. No further configuration is evaluated.

When no configuration matches, nothing happens — the home page set in the sales channel is shown.

```
Visitor opens the home page → active configurations checked by priority
   → first match wins → its shopping experience is shown
   → no match → the sales channel's regular home page
```

---

## Managing Configurations

### What It Does

A configuration is the link between a shopping experience and the rules under which it takes effect.

### How to Use

1. Open **Marketing → Homepage Configuration**
2. The list shows all configurations with **Name**, **Landing Page** and **Active**
3. **Add Configuration** creates a new one, clicking a row opens it
4. Fill in the **Base Information** card and click **Save**
5. Only then does the **Rules** card appear

**Location**: Marketing → Homepage Configuration

> You need the **promotion.viewer** privilege to view and **promotion.editor** to edit. Rules can only be created while the administration is set to your shop's system language.

All fields of the **Base Information** card are described in the [Settings Reference](../configuration/settings.md).

### Tips & Best Practices

- Use descriptive names including the year — after two seasons you will no longer remember which campaign was which
- Finish the shopping experience completely **before** you activate the configuration

---

## The Rule Types

You create rules in the **Rules** card: pick a rule type, fill in the values, click **Add rule**. The rule then appears in the table below and can be deleted there via the context menu.

### Date range

A one-off time window with date **and** time. The rule matches while the current moment lies between **From** and **To**.

**Use**: Christmas campaign from 1 Dec 00:00 to 26 Dec 23:59.

> The values are stored and displayed in UTC — see [Time Zones](#time-zones).

### Customer group

Matches when the visitor belongs to the selected customer group. Visitors who are not logged in belong to the sales channel's default customer group.

**Use**: a dedicated home page for your B2B customers focusing on bulk sizes and terms.

### Customer status

Matches depending on whether the visitor is logged in:

- **Guest**: only for visitors who are not logged in
- **Logged in**: only for signed-in customers

**Use**: a new-customer pitch with benefit arguments for guests, an assortment and repeat-purchase focus for logged in customers.

### Time of day

A daily recurring window from **From** to **To**, independent of the date.

**Use**: a "happy hour" home page every day from 18:00 to 20:00.

> The window cannot cross midnight: **From** `22:00` to **To** `02:00` never matches. For a window over night, create two configurations — one from 22:00 to 23:59 and one from 00:00 to 02:00.

### Days of week

Matches on the selected weekdays, multiple selection possible.

**Use**: a weekend home page for Saturday and Sunday.

---

## Combining Rules

All rules of a configuration are joined by **one** operator — **AND** or **OR**, set in the **Base Information** card.

| Goal                                          | Rules                                      | Operator |
| --------------------------------------------- | ------------------------------------------ | -------- |
| Christmas page for retail customers only      | Date range + customer group                | AND      |
| Weekend page for Saturday and Sunday          | Days of week (both days in a single rule)  | AND      |
| Campaign for guests **or** on certain days    | Customer status + days of week             | OR       |

If you need a mix of AND and OR, split it across two configurations with different priorities.

---

## Priority and Sales Channels

When several configurations match at the same time, the one with the highest **priority** (1 to 100) wins. With equal priorities the order is not guaranteed — so give each configuration a distinct value.

The **Sales channel** field narrows a configuration down to one channel. Left empty, it applies to all channels. A channel-specific configuration only overrides a global one if its priority is higher — the sales channel alone does not decide.

---

## Time Zones

Rules of type **Date range** are stored in UTC and also displayed in UTC; a note below the rule table points this out. Evaluation happens in UTC as well.

Convert your local time accordingly: for Central Europe, UTC is one hour behind in winter and two hours behind in summer. To start a campaign on 1 December at 00:00 local time, enter **30 Nov, 23:00**.

---

## Cache Behaviour

The plugin works correctly with the HTTP cache enabled: the resolved shopping experience becomes part of the cache key, so different customer groups each get their own cached home page.

Time-based rules change the outcome without anyone saving anything in the shop. The plugin therefore ships a scheduled task (`webla.clean_up_rules`) that checks every five minutes whether the set of matching configurations has changed and clears the affected cache.

> For this to work, your shop's scheduled task runner and message queue consumer must be running. If in doubt, ask your hosting provider or agency.

A switch can therefore become visible up to five minutes after the configured moment. Allow for that lead time when a campaign has to be minute-accurate.

---

## Troubleshooting

### The home page does not switch

**Symptom**: the moment has passed, but the old home page is still shown.

**Cause**: the configuration is inactive, the sales channel does not match, the time was entered in local time instead of UTC, or a configuration with a higher priority takes effect.

**Solution**: check in this order: the **Active** switch, the **Sales channel** field, the time in UTC, then the priorities of all active configurations. Afterwards wait up to five minutes or clear the cache manually.

### The wrong shopping experience appears

**Symptom**: two campaigns run in parallel and the unwanted one is shown.

**Cause**: both configurations match and the other one has the higher priority.

**Solution**: raise the priority of the configuration you want, or narrow down the other one's rules.

### A configuration always takes effect

**Symptom**: a configuration owns the home page permanently although it should only apply temporarily.

**Cause**: it has no rule and uses the **AND** operator. Without a rule the AND condition is formally satisfied.

**Solution**: add at least one rule, or deactivate the configuration.

### The "Rules" card is missing

**Symptom**: after creating a configuration you only see the base information.

**Cause**: the configuration has not been saved yet.

**Solution**: click **Save**. The card appears afterwards.

### The "Add rule" button is disabled

**Symptom**: rules cannot be created.

**Cause**: the **promotion.editor** privilege is missing, or the administration is not set to the system language.

**Solution**: switch to your shop's system language in the top right, or have the privilege assigned to you.

---

## Related Documentation

- [Settings Reference](../configuration/settings.md)
- [How-To Guide](../how_to.md)
