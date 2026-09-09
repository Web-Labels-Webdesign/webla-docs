# Configuration Settings

This document describes all available settings of the address validation.

**Navigation**: Extensions → My Extensions → Address Validation for House Number and Special Characters → Configure

> Before editing, select the **sales channel** at the top of the configuration window. All settings apply to the selected sales channel.

---

## Address Validation Settings

### Enable for this sales channel

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Toggle |
| **Default**  | Off    |
| **Required** | Yes    |

**Description**: Switches the entire address validation on or off for the selected sales channel. While it is off, the address forms behave exactly as in the Shopware standard.

**Example use**: Enable the validation in a test sales channel first. Once the rules fit, switch it on in your live channel.

---

### Street - Allowed special characters

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | Empty |
| **Required** | No    |

**Description**: Defines which special characters are allowed in the street field. Enter the characters one after another without separators, for example `.-/`. Letters (including umlauts), digits and spaces are always allowed and do not need to be entered.

If the field stays empty, no character check takes place — every character is then allowed in the street field. The remaining rules (house number, minimum length, special character rules) still apply independently.

**Example use**: With `.-/`, `Example-Str. 12` and `Main Street 5/7` are valid, while `Example Street #12` is not.

---

### City - Allowed special characters

| Property     | Value |
| ------------ | ----- |
| **Type**     | Text  |
| **Default**  | Empty |
| **Required** | No    |

**Description**: Defines which special characters are allowed in the city field, for example `-()`. Letters and spaces are always allowed.

If the field stays empty, every character except digits is allowed. **Digits are never permitted in the city field** — regardless of what you enter here.

**Example use**: With `-()`, `Frankfurt (Oder)` and `Neustadt-Glewe` are valid, while `City123` and `Example/City` are not.

---

### Street - Minimum length

| Property     | Value            |
| ------------ | ---------------- |
| **Type**     | Number           |
| **Default**  | Empty (= off)    |
| **Required** | No               |

**Description**: Minimum number of characters that must be entered in the street field. The whole input is counted, including spaces and the house number, without leading and trailing spaces.

Leave the field empty or enter `0` to disable the check.

**Example use**: A value of `5` prevents short entries such as `ab 1`. Do not set the value too high — there are genuinely short street names such as `Au 3`.

---

### City - Minimum length

| Property     | Value            |
| ------------ | ---------------- |
| **Type**     | Number           |
| **Default**  | Empty (= off)    |
| **Required** | No               |

**Description**: Minimum number of characters for the city field. Empty or `0` disables the check.

**Example use**: A value of `3` catches entries such as `xy`. Keep short real city names such as `Ulm` or `Aue` in mind.

---

### House number required

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Toggle |
| **Default**  | On     |
| **Required** | No     |

**Description**: While this is on, the street field must contain at least one digit. Entries without a house number such as `Example Street` are rejected.

**Example use**: Switch the check off if you also have to accept addresses without a house number, for example PO boxes or deliveries to places without house numbering.

---

### Block consecutive special characters

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Toggle |
| **Default**  | On     |
| **Required** | No     |

**Description**: Blocks input containing two or more special characters in a row. The rule applies to street and city alike.

This rejects typical typing and spam entries such as `Muster..strasse 5`, `--City` or `Test///Str. 1`.

**Example use**: In real addresses two special characters practically never appear directly one after another. As a rule this setting can stay switched on.

---

### Block leading/trailing special characters

| Property     | Value  |
| ------------ | ------ |
| **Type**     | Toggle |
| **Default**  | On     |
| **Required** | No     |

**Description**: Blocks input starting or ending with a special character, for example `- Example Street 5` or `Example Street 5 -`.

A **trailing period or closing bracket stays allowed** so that common notations such as `Examplestr.` or `Frankfurt (Oder)` keep working.

**Example use**: Particularly useful when customers copy addresses from other programs and accidentally bring along bullet points or dashes.

---

## Sales Channel Specific Settings

All settings of this plugin apply per sales channel.

| Setting                                   | Scope             | Description                            |
| ----------------------------------------- | ----------------- | -------------------------------------- |
| Enable for this sales channel             | Per sales channel | Enables the validation for the channel |
| Street - Allowed special characters       | Per sales channel | Character set for the street field     |
| City - Allowed special characters         | Per sales channel | Character set for the city field       |
| Street - Minimum length                   | Per sales channel | Minimum characters for the street field |
| City - Minimum length                     | Per sales channel | Minimum characters for the city field  |
| House number required                     | Per sales channel | Digit requirement in the street field  |
| Block consecutive special characters      | Per sales channel | Rule against duplicated special characters |
| Block leading/trailing special characters | Per sales channel | Rule against special characters at the edges |

> Select **All sales channels** in the configuration window to set a shared default, then override it for individual channels where needed.

---

## Recommended Configurations

### For standard shipping within Germany

| Setting                                   | Recommended value |
| ----------------------------------------- | ----------------- |
| Enable for this sales channel             | On                |
| Street - Allowed special characters       | `.-/`             |
| City - Allowed special characters         | `-()`             |
| Street - Minimum length                   | `4`               |
| City - Minimum length                     | `3`               |
| House number required                     | On                |
| Block consecutive special characters      | On                |
| Block leading/trailing special characters | On                |

### For international sales channels

| Setting                                   | Recommended value |
| ----------------------------------------- | ----------------- |
| Enable for this sales channel             | On                |
| Street - Allowed special characters       | Empty             |
| City - Allowed special characters         | Empty             |
| Street - Minimum length                   | Empty             |
| City - Minimum length                     | Empty             |
| House number required                     | Off               |
| Block consecutive special characters      | On                |
| Block leading/trailing special characters | On                |

> International addresses follow different rules than German ones: house numbers sometimes precede the street name or are missing entirely, and the notations contain more special characters. Limit yourself to the two rules against obvious input errors there.
