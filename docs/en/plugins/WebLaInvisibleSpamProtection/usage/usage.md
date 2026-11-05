# Usage

## Protected forms

| Form | What happens on silent drop |
| --- | --- |
| Customer registration and guest order | Redirect to the registration page with the notice about the confirmation e-mail. No account is created. |
| Newsletter subscription | The response matches a new, unconfirmed subscription. Nothing is saved and no e-mail is sent. |
| Contact form, including in Shopping Experiences | The normal success message appears. No e-mail is sent. |

The checks apply to the Storefront and the Store API.

## Rules

- **Attempt limit**: Counts every attempt per IP, including failed ones.
- **Success limit**: Counts only successfully processed submissions per IP.
- **Script filter**: Checks the selected fields for blocked scripts.
- **Name check**: Checks for URLs, exclamation marks with at least 3 words and identical long first and last names.
- **Address check**: Checks whether street and house number have the same content.
- **E-mail filter**: Compares the address with the blocklists and allowlists.
- **Browser check**: Checks in Storefront forms whether the form was filled in using a browser and the minimum time was met.
- **Honeypot**: A field invisible to visitors that only bots fill in.

If a submission triggers several rules, the strongest action applies: silent drop before block before log only.

If the extension fails technically, requests are let through, so real customers are not locked out.

## Dashboard card

The admin dashboard shows the **Invisible Spam Protection** card with these values:

- prevented submissions in total, today and for the last 7 and 30 days
- prevented submissions by rule and by form
- daily history

Users need read permission on the spam log (`webla_isp_log:read`), otherwise the card is hidden. The daily counters contain no personal data.

## Privacy

The log stores form, rule, action, field name and a truncated, salted IP identifier. Plain IP addresses and form contents are not stored. Entries are deleted after 7 days by default and after 180 days at most. Cleanup runs daily through a scheduled task.

## Uninstalling

If you do not keep the data when uninstalling, all tables of the extension are removed, including the statistics.
