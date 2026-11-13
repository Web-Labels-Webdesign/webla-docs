**Changelog**

# 1.5.2

_Released 2026-11-13_

**Bug Fixes**

- In the reconciliation results, the decision selection and the corrected value field in the "Override" column now sit side by side in the row instead of being cut off

# 1.5.1

_Released 2026-11-12_

**Improvements**

- The reconciliation results are now shown in pages (25, 50, 100 or 250 rows per page), so the page stays responsive with thousands of commissions. Filters, counts and sending still cover all commissions of the batch

# 1.5.0

_Released 2026-11-12_

**Improvements**

- Reconciliations now run in several short steps: commissions are loaded from ADCELL page by page with a progress display, then evaluated. Large date ranges (e.g. 90 days) on accounts with many commissions no longer abort with a timeout
- The limit of 2000 commissions per reconciliation has been removed
- Decisions are sent to ADCELL in blocks of 50, so large batches can be sent without a timeout
- Batches that could not be loaded completely are shown with the status "Failed" and cannot be sent

# 1.4.0

_Released 2026-11-12_

**New Features**

- New setting "Skip commissions that pass all checks": commissions that pass all checks are set to "Skip" instead of "Approve" and are not sent to ADCELL, which accepts them automatically once the auto-accept period ends. Cancellations and adjustments are still proposed and sent

**Bug Fixes**

- Changing a decision in the "Override" column no longer jumps back to the original decision
- New program mappings now save the program name, so programs are shown by name instead of ID
- Reconciliations of accounts with many commissions no longer abort after 30 seconds ("timeout of 30000ms exceeded")
- The quick select buttons now use the local date; shortly after midnight the range was shifted back by one day

**Improvements**

- Past dates can no longer be selected in the date range, and a hint explains that the range refers to the auto-accept date at ADCELL, not the order date

# 1.3.0

_Released 2026-11-10_

**New Features**

- New setting "ADCELL lookback in days" (default 90): controls how far back commissions are requested from ADCELL, for programs with auto-accept periods longer than 90 days
- Access control: the ADCELL module now has its own admin permissions (view, edit, create, delete), so access can be granted per user role

**Bug Fixes**

- Partially refunded orders are now detected and held for review (Adjust without a value) instead of being approved at the full cart value
- Partially shipped orders are now treated as shipped instead of being cancelled
- Adjust decisions without a corrected cart value are no longer sent; enter the value manually first. Automatic approval skips them
- If an order number exists in several sales channels and the mapping has no sales channel, the commission is skipped instead of matched to a random order
- The payment state is now taken from the latest transaction
- ADCELL error messages no longer contain passwords or tokens in logs

**Improvements**

- Automatic approval no longer cancels commissions for orders that are missing or not yet shipped; they are skipped for manual review
- Partially paid orders are skipped for manual review; reminded payments count as unpaid
- A batch can no longer be sent twice at the same time
- Decisions that were already sent to ADCELL can no longer be changed

# 1.2.0

_Released 2026-04-02_

**New Features**

- Minimum order age setting: commissions are only approved once the order is at least X days old, giving time for returns and cancellations
- Full Shopware Store listing with descriptions, installation manual, screenshots, FAQ, and documentation link

**Improvements**

- Added logging to ReconciliationService for batch preparation and push results
- Resized plugin icon to 112x112 px (Store compliance)
- Switched config.xml default language to English with de-DE translations (fixes German admin display)
- Removed unused notification email setting
- Added full plugin documentation (index, settings, usage, how-to guides) in DE and EN

# 1.1.1

_Released 2026-04-02_

**Bug Fixes**

- Fixed batch table rows not being clickable — replaced non-functional `@row-click` with context menu and clickable date link
- Fixed dashboard "Last 30 days" stats inflating when running the same reconciliation multiple times (now only counts sent items)

# 1.1.0

_Released 2026-04-02_

**New Features**

- Batch detail view: click any row in the "Recent reconciliations" dashboard table to view, review, and resume prepared batches

**Bug Fixes**

- Full dual-language support for reason codes via snippets, fixed remaining umlaut issues

# 1.0.5

_Released 2026-04-02_

**Bug Fixes**

- Split decision column into separate "Entscheidung" (badge) and "Überschreiben" (select) columns for better readability
- Fixed filter checkbox alignment by removing default margin-bottom on checkboxes
- Restored proper German umlauts (ä, ö, ü) throughout all snippets, error messages, and changelogs

# 1.0.4

_Released 2026-04-02_

**Bug Fixes**

- Widened reconciliation result card and decision column so the override select dropdown is fully visible without horizontal scrolling

# 1.0.3

_Released 2026-04-02_

**Bug Fixes**

- Fixed TypeError in reconciliation result grid: API response returned items as a JSON object instead of an array because Shopware entity IDs were used as keys

# 1.0.2

_Released 2026-04-02_

**Bug Fixes**

- Fixed reconciliation still returning zero results: dateTo was compared at midnight (00:00:00) instead of end-of-day, excluding all same-day commissions; date presets now look forward (next N days) instead of backward; API endDate aligned with marketing platform baseline

# 1.0.1

_Released 2026-04-02_

**Bug Fixes**

- Fixed reconciliation returning zero items by using a 90-day lookback when querying the Adcell API — commissions have a 30–45 day auto-accept window so creation date and autoAcceptTime ranges must differ

# 1.0.0

_Released 2026-04-01_

**New Features**

- Automatic reconciliation and approval of ADCELL affiliate commissions directly in Shopware Admin
- Manual batch review with per-item override support
- Amount adjustment (ADJUST) with configurable percentage and absolute tolerance
- Daily scheduled auto-approval via Shopware scheduled task
- Test mode toggle to prevent any data from being sent to ADCELL during testing
- Program mapping configuration to link ADCELL programs to Shopware sales channels
