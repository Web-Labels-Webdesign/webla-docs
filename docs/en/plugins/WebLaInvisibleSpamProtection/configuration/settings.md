# Configuration settings

This document describes all settings of Invisible Spam Protection (Easy Mode).

**Navigation**: Extensions → My extensions → Invisible Spam Protection (Easy Mode) → Configure

All settings can be overridden per sales channel.

## Actions

Most rules let you choose one of these actions:

| Action | Effect |
| --- | --- |
| Silent drop | The sender receives an inconspicuous confirmation, nothing is processed. |
| Block | The sender receives a regular error message. |
| Log only | The request is processed normally and the hit is logged. |

Success cannot be faked for registrations through the Store API, so silent drop behaves like block there.

## General

| Setting | Default | Description |
| --- | --- | --- |
| Spam protection active | On | Turns the entire protection on or off. |
| Test mode: log all rules only | Off | Blocks nothing but writes every hit to the log. |
| Count IP limits per sales channel | Off | Off: one counter for the whole shop instance. |
| Log retention (days) | 7 | 1 to 180 days. Old entries are deleted daily. |
| Allowed IPs / ranges | empty | One per line, CIDR ranges allowed. Only bypasses the IP limits, not the content rules. |
| Allowed e-mail addresses | empty | One per line. Only bypasses the e-mail blocklists. |
| Allowed e-mail domains | empty | One per line. Takes precedence over blocked domains and TLDs. |

## Customer registration, newsletter subscription and contact form

These three sections have the same settings. Only the default limits differ.

| Setting | Registration | Newsletter | Contact | Description |
| --- | --- | --- | --- | --- |
| Protect this form | On | On | On | Turns protection for this form on or off. |
| Successful submissions per IP | 1 | 1 | 2 | Only successfully processed submissions count. 0 = no limit. |
| Success limit window (hours, rolling) | 24 | 24 | 24 | Period the success limit applies to. |
| Action when success limit is exceeded | Log only | Log only | Log only | See [Actions](#actions). |
| Attempts per IP (incl. failed) | 5 | 5 | 6 | Brake against mass submissions. 0 = no limit. |
| Attempt limit window (minutes) | 10 | 10 | 10 | Period the attempt limit applies to. |
| Action when attempt limit is exceeded | Log only | Log only | Log only | See [Actions](#actions). |

Customer registration only:

| Setting | Default | Description |
| --- | --- | --- |
| Count guest orders towards success limit | Off | Off: only real customer accounts count. |

## Script filter

| Setting | Default | Description |
| --- | --- | --- |
| Blocked scripts | Cyrillic | Latin script incl. accents and umlauts, digits, punctuation and emojis are never affected. |
| Additional Unicode scripts | empty | Script names, comma-separated, e.g. Ethiopic, Khmer. |
| Checked fields | Names, company, address | Also available: subject and message of the contact form. |
| Additional field names | empty | Technical field names, comma-separated. Never enter passwords or tokens. |
| Action: Customer registration | Silent drop | Action on a hit in this form. |
| Action: Newsletter subscription | Silent drop | Action on a hit in this form. |
| Action: Contact form | Log only | Action on a hit in this form. |

## Name plausibility

| Setting | Default | Description |
| --- | --- | --- |
| Detect ad texts in name fields | On | Hits: URL in the name, exclamation mark with at least 3 words, identical first and last name with 13 or more characters. |
| Action | Silent drop | See [Actions](#actions). |

## Address plausibility

| Setting | Default | Description |
| --- | --- | --- |
| Detect identical street and house number | On | Typical bot pattern, also when written in one field. Street = city stays allowed (village addresses). |
| Action | Silent drop | See [Actions](#actions). |

## E-mail filter

| Setting | Default | Description |
| --- | --- | --- |
| Blocked TLDs | empty | One per line, e.g. `.ru`. Exact match: `.ru` blocks `mail.ru` but not `guru.de`. |
| Blocked domains | empty | One per line, incl. subdomains. Do not block large providers across the board. |
| Action | Block | See [Actions](#actions). |

## Browser check

| Setting | Default | Description |
| --- | --- | --- |
| Browser check active | On | Checks whether the form was filled in using a real browser and how long the visitor was on the page. |
| Minimum time on page (seconds) | 2 | 0 to 30. 0 only checks that the script ran. |
| Also check Store API requests | Off | Only for shops without headless frontends or apps: Store API requests never contain the value and would all be hits. |
| Action for registration | Log only | See [Actions](#actions). |
| Action for newsletter | Log only | See [Actions](#actions). |
| Action for contact form | Log only | See [Actions](#actions). |

Express checkouts of payment providers are not affected by the browser check.

## Honeypot

| Setting | Default | Description |
| --- | --- | --- |
| Additional hidden field | On | Complements the Shopware honeypot. Invisible to visitors, only bots fill it in. |
| Action | Silent drop | See [Actions](#actions). |
