# Usage Guide

This guide describes how the individual checks of the address validation behave in your storefront.

---

## Table of Contents

- [Where the validation applies](#where-the-validation-applies)
- [Street validation](#street-validation)
- [City validation](#city-validation)
- [Special character rules](#special-character-rules)
- [Automatic corrections](#automatic-corrections)
- [Error messages in the storefront](#error-messages-in-the-storefront)
- [Troubleshooting](#troubleshooting)

---

## Where the validation applies

The address validation is active wherever your customers enter an address:

1. **Registration** — when creating a new customer account
2. **Address management** — when creating or editing addresses in the customer account
3. **Checkout** — when entering shipping and billing addresses

Only the **Street** and **City** fields are validated. All other address fields such as name, postal code or country remain untouched and are still validated by Shopware itself.

The validation runs in the browser: while the customer is typing and again when the form is submitted. If an input violates a rule, the form is not submitted and the message appears directly below the affected field.

---

## Street validation

### What it does

The street field is validated against up to five rules — depending on what you have configured:

| Rule                           | Effect                                                        |
| ------------------------------ | ------------------------------------------------------------- |
| Allowed special characters     | Only letters, digits, spaces and the special characters you permitted are accepted |
| House number required          | The input must contain at least one digit                     |
| Minimum length                 | The input must reach the configured number of characters      |
| Consecutive special characters | Two or more special characters in a row are not accepted      |
| Leading/trailing special characters | The input must not start or end with a special character |

### How to use it

1. Open **Extensions → My Extensions → Address Validation for House Number and Special Characters → Configure**.
2. Select the desired **sales channel** at the top.
3. Under **Street - Allowed special characters**, enter the permitted characters, for example `.-/`.
4. Use the toggles to decide which further rules apply.
5. Save and check the result in the storefront.

### Examples

Configuration: allowed special characters `.-/`, house number required, minimum length `4`.

| Input                | Result  | Reason                                |
| -------------------- | ------- | ------------------------------------- |
| `Examplestr. 12`     | Valid   | —                                     |
| `Main Street 5/7`    | Valid   | —                                     |
| `Sankt-Anna-Str. 3`  | Valid   | —                                     |
| `Example Street`     | Invalid | No house number                       |
| `Example Street #12` | Invalid | `#` is not permitted                  |
| `ab 1`               | Invalid | Below the minimum length              |
| `Muster..str. 5`     | Invalid | Two special characters in a row       |

### Tips

- Start with an empty list of allowed special characters and add characters only when you actually need them. Every permitted character is a character customers can also use incorrectly.
- Test a planned configuration against real orders from your shop before enabling it in your live channel.

---

## City validation

### What it does

The city field is validated against the same special character rules as the street, with two differences:

- **Digits are never allowed.** This rule always applies and cannot be switched off.
- There is naturally no house number check here.

### Examples

Configuration: allowed special characters `-()`, minimum length `3`.

| Input              | Result  | Reason                                |
| ------------------ | ------- | ------------------------------------- |
| `Hamburg`          | Valid   | —                                     |
| `Frankfurt (Oder)` | Valid   | —                                     |
| `Neustadt-Glewe`   | Valid   | —                                     |
| `City123`          | Invalid | Digits are not allowed in the city field |
| `Example/City`     | Invalid | `/` is not permitted                  |
| `xy`               | Invalid | Below the minimum length              |

---

## Special character rules

The two rules **Block consecutive special characters** and **Block leading/trailing special characters** apply to street and city alike. They take effect regardless of whether you configured allowed special characters.

**Counted as special characters** are all punctuation and symbol characters such as `.`, `,`, `-`, `/`, `(`, `)`, `#`, `*` or `@`.

**Not counted as special characters** are letters, digits and spaces. Accented letters such as `é`, `ł` or `ç` count as ordinary letters and are never rejected.

### Exception at the end of the input

A **period** and a **closing bracket** at the end of the input are deliberately not rejected. Otherwise common notations such as `Examplestr.` or `Frankfurt (Oder)` would no longer be possible. A trailing dash as in `Example Street -` is rejected.

---

## Automatic corrections

When the form is submitted, the plugin quietly cleans up the input without showing an error message:

| Correction                            | Before             | After              |
| ------------------------------------- | ------------------ | ------------------ |
| Leading and trailing spaces           | `  Hamburg  `      | `Hamburg`          |
| Multiple spaces                       | `Muster  str. 5`   | `Muster str. 5`    |
| Missing space before the house number | `Examplestr.1`     | `Examplestr. 1`    |

The last correction applies to the street field only. It produces consistent address data that is easier to evaluate and to hand over to shipping providers later on.

---

## Error messages in the storefront

Every rule has its own message. If an input violates **several** rules, all applicable messages appear at once below each other — so your customers do not have to submit repeatedly to find all problems.

If you configured allowed special characters, the list of those characters is appended to the message. Your customers then see directly what they are allowed to use.

The texts can be adjusted as usual in Shopware under **Settings → Shop → Snippets**. Search there for `address.validation`.

---

## Troubleshooting

### The validation does not apply at all

**Symptom**: Invalid addresses are still accepted.

**Cause**: Usually the plugin is not enabled for the affected sales channel. The setting **Enable for this sales channel** defaults to "Off" and has to be set per channel.

**Solution**: Open the configuration, select the affected sales channel at the top and switch the option on. Then check in the storefront with a deliberately invalid entry such as `Example Street` whether the message appears.

### A valid address is rejected

**Symptom**: Customers report that they cannot enter their correct address.

**Cause**: The rules are too strict for this case — often a special character is missing from the permitted list, or the minimum length is set too high.

**Solution**: Ask for the affected address and check it against your configuration. Add missing characters under **Street - Allowed special characters** or **City - Allowed special characters**, or lower the minimum length.

### Configuration changes do not take effect immediately

**Symptom**: After saving, the storefront still behaves as before.

**Cause**: The page cache is still delivering the previous version of the form.

**Solution**: Clear the cache under **Settings → System → Caches & indexes**. Then test in a private browser window to rule out the browser cache as well.

---

## Related Documentation

- [Configuration settings](../configuration/settings.md)
- [How-to guides](../how_to.md)
