**Changelog — Currency Changer**

All notable changes for end users.

---

# 4.2.1

_Released 2026-07-24_

**Bug Fixes**

- Fixed the plugin replacing the storefront header instead of extending it. Changes other plugins or themes made to the header were silently dropped and never appeared in the storefront. Affects Shopware 6.7 only.

---

# 4.2.0

_Released 2026-07-20_

**New Features**

- Added a price update mode. In "Update Shopware price data" the plugin writes exchange rates into Shopware's own currency and price data instead of converting prices in the storefront. Storefront behaviour is unchanged by default.
- Added a strategy for currency-specific prices: remove them and let Shopware calculate every price from the default currency, or overwrite them with converted values.

**Bug Fixes**

- Fixed a JavaScript error on pages where no currency switcher is rendered. The error could stop other storefront scripts from starting up.
- Fixed the shop price being displayed a second time when no target currency was selected, for example when a saved selection referred to a currency that is no longer available.
- The plugin no longer suppresses Shopware's own currency switcher when it does not display one of its own.

**Breaking Changes**

- The sub-blocks of the plugin's currency switcher were renamed from layout_header_actions_currency_widget_form, _content, _dropdown_toggle, _dropdown_toggle_name, _form_items, _form_items_element, _form_items_element_label and _form_items_element_input to webla_currency_widget_form, _content, _dropdown_toggle, _dropdown_toggle_name, _form_items, _form_items_element, _form_items_element_label and _form_items_element_input. They previously replaced Shopware's blocks of the same name, which prevented Shopware's own currency switcher from being displayed. Themes or plugins that extend the old block names must be adjusted.

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
