**Changelog — Currency Changer**

All notable changes for end users.

---

# 4.1.0

_Released 2026-07-20_

**New Features**

- Support for Shopware 6.6 and 6.7 from a single installation. One version now covers both major releases, so the plugin no longer has to be swapped when the shop is updated.

**Bug Fixes**

- Fix a fatal error that stopped the scheduled exchange rate update on Shopware 6.7. The task aborted before any rates were written.
- Fix the currency selector not appearing in the storefront header on Shopware 6.6.
- Show the currency selector on shops that offer only a single language and currency, where it was previously hidden.
- Fix the custom exchange rate field, which was configured but never readable and always returned empty.

**Improvements**

- Reduce the exchange rate update to a single database read and a single write per run, instead of one query and one write per currency.
- Report a failed exchange rate update in the log and as a command error instead of discarding it silently.
