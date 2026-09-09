# How-To Guides

Step-by-step workflows for the most common tasks with the address validation.

---

## How the plugin works

### Process overview

```
Customer types address → validation in the browser → message at the field or form is submitted
```

**Example flow**:

1. A customer enters `Example Street` into the street field during checkout.
2. The plugin validates the input against your rules and finds that the house number is missing.
3. The message "Please enter a house number." appears below the field, the field is marked red, and the form is not submitted.
4. The customer adds `12`. The message disappears and the form can be submitted.

The validation runs entirely in the customer's browser. No data is transferred to third parties and no external services are queried.

---

## Common workflows

### How to: Set up the address validation

**Goal**: Enable the validation for a sales channel and configure it sensibly.

**Time required**: about 10 minutes

**Prerequisites**:

- The plugin is installed and activated
- You know which sales channel is affected

**Steps**:

1. **Open the configuration**
   - Navigate to: **Extensions → My Extensions**
   - Find the entry **Address Validation for House Number and Special Characters** and click **Configure**

2. **Select the sales channel**
   - Select the desired sales channel at the top of the configuration window
   - Start with a test channel where possible

3. **Enable the validation**
   - Switch on **Enable for this sales channel**
   - Without this step all further settings have no effect

4. **Define the rules**
   - **Street - Allowed special characters**: `.-/` has proven itself for German addresses
   - **City - Allowed special characters**: `-()` has proven itself for German addresses
   - **House number required**: leave it on unless you accept PO box addresses
   - The two toggles against consecutive and edge special characters can stay on

5. **Save and test**
   - Click **Save**
   - Open the storefront and create a test address in the customer account

**Result**: Invalid entries are rejected with a specific message, valid addresses can be saved as usual.

**Troubleshooting**: If no message appears, first check whether you configured the correct sales channel, then clear the cache under **Settings → System → Caches & indexes**.

---

### How to: Determine the right special characters

**Goal**: Find out which special characters you have to permit without locking out real customers.

**Time required**: about 20 minutes

**Steps**:

1. **Review existing addresses**
   - Navigate to: **Customers → Customers**
   - Look at the addresses of the last few weeks and note which special characters actually occur

2. **Compile the list**
   - In German street names these are mostly period, dash and slash
   - In city names mostly dash and brackets

3. **Enter the characters**
   - Enter the characters directly one after another without separators, so `.-/` instead of `. - /`

4. **Cross-check**
   - Test two or three real addresses from your customer base in the storefront

**Result**: A permitted list that matches your actual customer base.

**Troubleshooting**: If a real address is rejected, usually exactly one character is missing from the list. The message in the storefront shows your customers the allowed characters — which helps you while testing, too.

---

### How to: Adjust the error messages

**Goal**: Adapt the messages to the tone of your shop.

**Time required**: about 5 minutes

**Steps**:

1. **Open the snippets**
   - Navigate to: **Settings → Shop → Snippets**

2. **Find the texts**
   - Search for `address.validation`
   - You will find one snippet per rule, for example `address.validation.streetMissingHouseNumber`

3. **Override the text**
   - Click the desired entry and enter your own text
   - In the minimum length texts, keep the placeholder `%minLength%` — it is replaced by the configured value

**Result**: Your customers see messages in the language and tone of your shop.

---

## Advanced workflows

### Different rules per sales channel

**Complexity**: Medium

**When to use**: If you sell internationally alongside a German shop.

German addresses follow a very consistent pattern, international ones do not: house numbers there sometimes precede the street name or are missing entirely.

1. First set a restrained base configuration under **All sales channels**: leave the allowed special characters empty, switch **House number required** off, switch both special character rules on.
2. Then switch to your German sales channel and tighten the rules there: set allowed special characters, switch **House number required** on, assign minimum lengths.
3. Test both channels separately in the storefront.

---

## Quick Reference

| Task                             | Key steps                                                     | Required settings                                    |
| -------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------- |
| Enable the validation            | Open configuration, select sales channel, switch toggle on    | Enable for this sales channel                        |
| Enforce a house number           | Switch the toggle on                                          | House number required                                |
| Make fake entries harder         | Set minimum lengths, switch special character rules on        | Street/City - Minimum length, both blocking rules    |
| Temporarily disable validation   | Switch the toggle off in the affected channel                 | Enable for this sales channel                        |

---

## Best Practices

1. **Test channel first**: Enable new rules in a sales channel without real customers first. A rule that is too strict in checkout costs orders immediately.
2. **Verify against real data**: Test every configuration against addresses from your actual customer base, not against invented examples.
3. **Start small**: Begin with the house number check and the two special character rules. Minimum lengths and character permissions can follow later.
4. **Watch the feedback**: If support requests about address input pile up, a rule is usually set too strictly.

## What to avoid

- ❌ **Trying out rules directly in the live channel** — every setting that is too strict takes effect in checkout immediately and can cause abandoned orders.
- ❌ **Setting minimum lengths too high** — there are genuinely short street and city names such as `Au 3` or `Ulm`.
- ❌ **Permitting special characters without checking** — every additionally allowed character weakens the validation.
- ❌ **Mistaking the validation for address verification** — the plugin validates the form of the input, not the existence of the address. It cannot determine whether the street really exists.
