**Changelog — Customer Tax Country**

All notable changes for end users.

---

# 1.0.0

_Released 2026-07-14_

**New Features**

- Tax base country configurable per customer, per customer group, or globally per sales channel: Shopware default, billing country, or shipping country
- In "billing country" mode, both the tax status and the applied tax rate follow the billing address chosen at checkout
- Intra-EU B2B deliveries are handled at 0% VAT for valid VAT IDs
- Configurable fallback when the VAT-ID service VIES is unavailable: formal check, treat as valid, or treat as invalid
