# Changelog

## 1.1.1 — 2026-04-02

### :bug: Bug Fixes

- Fixed batch table rows not being clickable — replaced non-functional `@row-click` with context menu and clickable date link
- Fixed dashboard "Last 30 days" stats inflating when running the same reconciliation multiple times (now only counts sent items)

## 1.1.0 — 2026-04-02

### :sparkles: New Features

- Batch detail view: click any row in the "Recent reconciliations" dashboard table to view, review, and resume prepared batches

### :bug: Bug Fixes

- Full dual-language support for reason codes via snippets, fixed remaining umlaut issues

## 1.0.5 — 2026-04-02

### :bug: Bug Fixes

- Split decision column into separate "Entscheidung" (badge) and "Überschreiben" (select) columns for better readability
- Fixed filter checkbox alignment by removing default margin-bottom on checkboxes
- Restored proper German umlauts (ä, ö, ü) throughout all snippets, error messages, and changelogs

## 1.0.4 — 2026-04-02

### :bug: Bug Fixes

- Widened reconciliation result card and decision column so the override select dropdown is fully visible without horizontal scrolling

## 1.0.3 — 2026-04-02

### :bug: Bug Fixes

- Fixed TypeError in reconciliation result grid: API response returned items as a JSON object instead of an array because Shopware entity IDs were used as keys

## 1.0.2 — 2026-04-02

### :bug: Bug Fixes

- Fixed reconciliation still returning zero results: dateTo was compared at midnight (00:00:00) instead of end-of-day, excluding all same-day commissions; date presets now look forward (next N days) instead of backward; API endDate aligned with marketing platform baseline

## 1.0.1 — 2026-04-02

### :bug: Bug Fixes

- Fixed reconciliation returning zero items by using a 90-day lookback when querying the Adcell API — commissions have a 30–45 day auto-accept window so creation date and autoAcceptTime ranges must differ

## 1.0.0 — 2026-04-01

### :sparkles: New Features

- Automatic reconciliation and approval of ADCELL affiliate commissions directly in Shopware Admin
- Manual batch review with per-item override support
- Amount adjustment (ADJUST) with configurable percentage and absolute tolerance
- Daily scheduled auto-approval via Shopware scheduled task
- Test mode toggle to prevent any data from being sent to ADCELL during testing
- Program mapping configuration to link ADCELL programs to Shopware sales channels
