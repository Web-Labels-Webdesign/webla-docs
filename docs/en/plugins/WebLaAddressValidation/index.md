# Address Validation for House Number and Special Characters

> Validates the "Street" and "City" address fields for special characters, minimum length and a present house number.

## Overview

Faulty address data costs time and money: shipments come back, support has to follow up, and orders are delayed. Most of these errors happen during input — a forgotten house number, a typo like `Muster..strasse`, or a placeholder entry.

This plugin validates the **Street** and **City** fields directly in your customers' browser, while they type and again when they submit the form. If something does not match, a specific message appears below the affected field and the form is not submitted. Your customers can fix the problem right away instead of being contacted by support later on.

You decide how strict the validation is: every rule can be switched on and off individually and configured differently per sales channel. After installation the plugin is inactive — it only takes effect once you enable it for a sales channel.

## Key Features

- **Special character check**: You define per field which special characters are allowed. Everything else is rejected.
- **House number check**: The street field must contain at least one digit. If it does not, the input is rejected.
- **Minimum length**: You can enforce a minimum number of characters for street and city.
- **Protection against typical input errors**: Consecutive special characters (`Muster..strasse`) and special characters at the beginning or end (`- Example Street`) are blocked.
- **Automatic correction**: A missing space before the house number is added on submit, turning `Examplestr.1` into `Examplestr. 1`.
- **Clear error messages**: Every rule has its own, understandable message. If an input violates several rules, all messages appear at once.
- **Configurable per sales channel**: Every sales channel can have its own rules.

## Requirements

- Shopware version: 6.6.0 or newer (supported up to and including 6.7.x)
- PHP version: as required by your Shopware installation
- No further dependencies or external services

## Compatibility

This plugin supports several Shopware versions from a single codebase:

| Shopware version | Status       | Notes                                             |
| ---------------- | ------------ | ------------------------------------------------- |
| 6.6.x            | ✅ Supported | Full range of features                            |
| 6.7.x            | ✅ Supported | Full range of features, adapted to the new address fields |

## Quick Start

1. Install the plugin via the Plugin Manager or Composer.
2. Activate the plugin under **Extensions → My Extensions**.
3. Open the configuration under **Extensions → My Extensions → Address Validation for House Number and Special Characters → Configure**.
4. Select the desired **sales channel** at the top and switch on **Enable for this sales channel**.
5. Under **Street - Allowed special characters**, enter the characters you want to permit, for example `.-/`.
6. Save and test the result in the customer account of your storefront.

> **Important**: Without step 4 the plugin has no effect. Activation is deliberately per sales channel so that you can try the validation in a test channel first.

## Documentation Contents

- [Configuration settings](configuration/settings.md) — All available settings explained
- [Usage guide](usage/usage.md) — How each check behaves in the storefront
- [How-to guides](how_to.md) — Step-by-step workflows
- [Changelog](changelog.md) — Version history and updates

## Support

- Documentation: [https://docs.web-labels.de](https://docs.web-labels.de)
- Manufacturer: [Web Labels Webdesign GmbH](https://web-labels.de)
