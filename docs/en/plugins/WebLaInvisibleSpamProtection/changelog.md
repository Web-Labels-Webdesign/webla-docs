# 1.0.0

_Released 2026-11-05_

**New Features**

- Invisible spam protection without captchas for customer registration, guest orders, newsletter subscription and contact form, in the Storefront and the Store API
- Attempt and success limits per IP, with IPv6 counted per /64 network
- Script filter for Unicode scripts per field group, with Cyrillic in names, company and address as the default
- Name check for URLs, ad texts and identical first and last names
- Address check for identical street and house number
- E-mail blocklists for domains and domain endings, with allowlists that take precedence
- Additional honeypot field and browser check with a minimum time on the page
- Configurable response per rule: silent drop, block or log only
- Test mode that only logs every rule
- Dashboard card with prevented submissions in total, today, for 7 and 30 days, and by rule and form, in German and English
- Log without plain IP addresses or form contents, with a retention of up to 180 days and daily cleanup
