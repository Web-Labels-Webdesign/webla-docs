# Changelog

All notable changes to the address validation for end-users.

---

## [1.1.0]

### ✨ New Features

- **Block consecutive special characters**: Prevents entries such as `Muster..strasse 5` or `--City`. The rule applies to street and city and can be switched off individually.
- **Block leading/trailing special characters**: Prevents entries such as `- Example Street 5` or `Example Street 5 -`. A trailing period or closing bracket stays allowed so that `Examplestr.` and `Frankfurt (Oder)` keep working.

### 🔧 Improvements

- **Combined messages**: If an input violates several rules, all messages now appear at once. Your customers do not have to submit repeatedly to find all problems.

---

## [1.0.0]

First version of the plugin.

### ✨ New Features

- **Special character check**: You define per field which special characters are allowed in street and city. Digits are never permitted in the city field.
- **House number check**: The street field must contain at least one digit. The check can be switched off if you also accept addresses without a house number.
- **Minimum length**: You can define a minimum number of characters for street and city to catch short entries such as `ab 1`.
- **Automatic space before the house number**: On submit, `Examplestr.1` becomes `Examplestr. 1`.
- **Configuration per sales channel**: Every sales channel can have its own rules.

---

## Version Overview

| Version | Release | Highlights                                                                                           |
| ------- | ------- | ---------------------------------------------------------------------------------------------------- |
| 1.1.0   | pending | Two new rules against typical special character input errors                                         |
| 1.0.0   | pending | First version: validation of street and city for special characters, house number and minimum length |

---

## Upgrade Notes

### After installation

After installation the plugin is **inactive**. Enable it per sales channel via the setting **Enable for this sales channel**. Until then the address forms behave as in the Shopware standard.

### Compatibility

| Plugin version | Shopware version |
| -------------- | ---------------- |
| 1.x            | 6.6.x, 6.7.x     |

### Upgrading to 1.1.0

The two new rules are **enabled by default** after the update. Check whether your customers can still enter all common addresses afterwards — especially if you sell internationally. Both rules can be switched off individually in the plugin configuration.
