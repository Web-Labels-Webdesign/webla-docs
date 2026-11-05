# Invisible Spam Protection (Easy Mode)

> Stops spam in registration, newsletter and contact form without captchas.

## Overview

Bots create customer accounts, sign fake addresses up for your newsletter and fill your contact form with ads. Invisible Spam Protection checks these submissions in the background, before an account is created, a newsletter subscription is saved or an e-mail is sent. Your customers never have to solve a captcha.

You decide how the shop responds for each rule. In test mode every hit is only logged, so you can try rules safely.

## Key features

- **IP limits**: Limit attempts and successful submissions per IP address.
- **Script filter**: Detects unwanted scripts such as Cyrillic in names, company and address.
- **Name check**: Detects links and ad texts in name fields.
- **Address check**: Detects identical street and house number entries.
- **E-mail filter**: Blocks domains and domain endings, allowlists take precedence.
- **Browser check and honeypot**: Expose bots through the time spent on the page and a hidden field.
- **Dashboard card**: Shows how many spam submissions were prevented.

## Requirements

- Shopware 6.7 from version 6.7.9

## Quick start

1. Install and activate the extension under **Extensions → My extensions**.
2. Open **Extensions → My extensions → Invisible Spam Protection (Easy Mode) → Configure**.
3. Enable **Test mode** and save.
4. After a few days, review the card on the dashboard and disable test mode.

## Contents

- [Settings](configuration/settings.md)
- [Usage](usage/usage.md)
- [How-to guides](how_to.md)
- [Changelog](changelog.md)
