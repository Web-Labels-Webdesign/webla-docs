# Homepage Configuration

> Serve shopping experiences as your home page — on a schedule and depending on who is visiting.

## Overview

Your shop has exactly one home page, set in the sales channel. With this plugin you decide by rules which shopping experience your visitors get instead — based on date, time of day, weekday, customer group and whether someone is logged in.

You create as many configurations as you like. Each configuration links a shopping experience to a set of rules. When a configuration matches the current visitor, its shopping experience is served as the home page. When none matches, the home page set in the sales channel stays in place — so there is no state in which your shop ends up without a home page.

Typical uses: a Christmas or Easter landing page that switches itself on at the cut-off date and disappears afterwards. A Black Week campaign that only runs on certain days. A dedicated home page for your B2B customer group. A welcome page for guests and a different one for logged in customers. No template changes, and no working late at the keyboard.

## Key Features

- **Scheduling**: configurations switch themselves on and off at a given date and time
- **Recurring rules**: time of day and weekdays can be controlled independently of the date
- **Audiences**: a separate home page per customer group, for guests or for logged in customers
- **Combinable rules**: several rules per configuration, joined with **AND** or **OR**
- **Priority**: when several configurations match, the highest value wins
- **Per sales channel**: each configuration applies to one sales channel or to all of them
- **Cache safe**: the plugin works correctly with the HTTP cache enabled and clears the cache itself when a time window opens or closes

## Requirements

- Shopware from version 6.6.6.0 up to and including 6.7.x
- At least one shopping experience of the layout type home page
- Your shop's scheduled task runner and message queue consumer must be running — otherwise timed switches take effect late while the cache is enabled

## Compatibility

This plugin supports both current Shopware major versions from a single download:

| Shopware Version  | Status      | Notes                                                                        |
| ----------------- | ----------- | ---------------------------------------------------------------------------- |
| 6.6.6 and newer   | ✅ Supported | 6.6.6 is the minimum; earlier 6.6 patch levels lack the required cache features |
| 6.7.x             | ✅ Supported | —                                                                            |
| 6.5.x             | ❌           | Use plugin version 2.x                                                       |

## Quick Start

1. Install and activate the plugin in **Extensions → My Extensions**
2. Prepare a shopping experience in **Content → Shopping Experiences** (layout type: home page)
3. Go to **Marketing → Homepage Configuration** and click **Add Configuration**
4. Set name, priority, shopping experience and rule operator, then click **Save**
5. After saving, add your rules in the **Rules** section

For a detailed walkthrough see the [How-To Guide](how_to.md).

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — every field of a configuration explained
- [Usage Guide](usage/usage.md) — all rule types and how they behave
- [How-To Guide](how_to.md) — step-by-step workflows for typical campaigns
- [Changelog](changelog.md) — version history

## Support

- Manufacturer and support: https://store.shopware.com/web-labels-webdesign-gmbh.html
- Documentation: https://docs.web-labels.de
