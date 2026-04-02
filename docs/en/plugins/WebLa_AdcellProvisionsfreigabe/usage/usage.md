# Usage Guide

This guide covers all features and functionality of the ADCELL Commission Approval plugin.

---

## Table of Contents

- [Dashboard](#dashboard)
- [Managing Accounts](#managing-accounts)
- [Program Mapping](#program-mapping)
- [Running a Reconciliation](#running-a-reconciliation)
- [Batch Details and History](#batch-details-and-history)
- [Automatic Approval](#automatic-approval)
- [Troubleshooting](#troubleshooting)

---

## Dashboard

**Location**: Orders → ADCELL Commission Approval → Dashboard

The dashboard provides a quick overview of plugin activity.

### Last 30 Days

Shows the total number of **sent** decisions from the last 30 days, broken down into:

- **Approved**: Commissions reported to ADCELL as "accepted"
- **Cancelled**: Commissions that were cancelled (e.g. order not found, return)
- **Adjusted**: Commissions where the cart value was corrected
- **Pending**: Commissions without mapping or skipped items

### Recent Reconciliations

Table of the last 10 reconciliations. You can open any entry via the **date link** or the **context menu** (three dots) to view details or resume a prepared batch.

### Quick Actions

Buttons for common actions: **New reconciliation** and **Manage accounts**.

---

## Managing Accounts

**Location**: Orders → ADCELL Commission Approval → Accounts

Manage your ADCELL credentials here. The plugin supports multiple accounts.

### Creating an Account

1. Click **Create account**
2. Enter a **name** for identification (e.g. "Main account")
3. Enter your ADCELL **username** and **password**
4. Click **Save**

The password is stored encrypted in the database (AES-256-GCM).

### Testing the Connection

After saving, use the **Test connection** button to verify your credentials. On success, the connection status is set to "Connected".

### Deactivating an Account

Set the **Active** switch to Off to temporarily exclude an account from automatic reconciliations without deleting it.

---

## Program Mapping

**Location**: Orders → ADCELL Commission Approval → Program Mapping

Program mapping links your ADCELL programs to Shopware sales channels. Commissions without a valid mapping are marked as "Not mapped".

### Setting Up a Mapping

1. Select an **account** from the dropdown
2. Click **Load programs** — the plugin queries available programs from the ADCELL API
3. Click **Create mapping**
4. Select the **ADCELL program** and the corresponding **Sales Channel**
5. Enable the **Active** switch
6. Save the mapping

### Tips

- Each ADCELL program should be mapped to exactly one sales channel
- Deactivate mappings for programs you no longer use
- Programs without a mapping result in the "Not mapped" (NOT_MAPPED) decision

---

## Running a Reconciliation

**Location**: Orders → ADCELL Commission Approval → Reconciliation

Reconciliation is a 3-step process:

### Step 1: Choose Parameters

1. Select the **account**
2. Set the **date range** — this refers to the auto-accept deadline period, not the commission creation date. Use the **quick select** buttons (7, 14, 30, 60, 90 days) for common ranges
3. Optional: Select a specific **program** or leave "All programs" selected
4. Click **Start reconciliation**

### Step 2: Processing

The plugin:
- Fetches open commissions from the ADCELL API
- Filters by the chosen date range (auto-accept date)
- Loads the corresponding Shopware orders
- Checks statuses and amounts
- Makes decisions according to the decision algorithm

### Step 3: Review and Send Results

After reconciliation, you see a results table with all commissions:

| Column | Description |
| ------ | ----------- |
| Commission ID | The ADCELL commission ID |
| Order no. | The Shopware order number |
| Program | The ADCELL program |
| ADCELL value | The cart value reported by ADCELL |
| Shop value | The actual net order value (excluding shipping) |
| Difference | Deviation between ADCELL and shop value |
| Decision | The automatically determined decision (badge) |
| Override | Dropdown to manually change the decision |
| Reason | Explanation for the decision |

#### Overriding Decisions

You can manually change any decision before sending:

- Select a different decision from the **Override** dropdown
- For **Adjust**, you can also modify the adjusted amount
- Overridden entries are marked as such

#### Using Filters

Use the **filter bar** to narrow the display to specific decisions (e.g. show only cancellations).

#### Sending Results

Click **Send to ADCELL** to submit all decisions (except "Not mapped" and "Skip") to ADCELL. In test mode, this step is skipped.

---

## Batch Details and History

**Location**: Dashboard → Recent reconciliations → Click date link or context menu → "View details"

Every reconciliation is saved as a batch. You can:

- **Open prepared batches** to adjust decisions and then send them
- **View sent batches** to review the results
- Check the **summary** with totals and duration

### Batch Statuses

| Status | Meaning |
| ------ | ------- |
| Prepared | Reconciliation completed, not yet sent to ADCELL |
| Sent | All decisions successfully submitted to ADCELL |
| Completed | Partially sent (some items could not be sent) |

---

## Automatic Approval

When enabled (see [Settings](../configuration/settings.md)), a scheduled task runs daily and automatically:

1. Loads all active ADCELL accounts
2. Runs a reconciliation for each account (range: today to today + configured days)
3. Sends all decisions automatically to ADCELL
4. Logs results and any errors

Automatic approval works via Shopware's message queue and requires a running worker (`bin/console messenger:consume`).

---

## Troubleshooting

### Reconciliation Returns No Results

**Symptom**: After starting a reconciliation, 0 items are shown.

**Possible Causes**:
- The chosen date range contains no commissions with an auto-accept deadline in that period
- There are no open commissions in the ADCELL account
- Program mapping is missing

**Solution**: Choose a wider date range (e.g. 90 days) and check whether open commissions exist in the ADCELL backend.

### Connection Test Fails

**Symptom**: "Connection failed" after testing an account.

**Solution**: Verify username and password in the ADCELL backend. Ensure API access is enabled for your account.

### Decisions Are Not Sent

**Symptom**: Clicking "Send to ADCELL" has no effect or shows an error.

**Possible Causes**:
- **Test mode** is enabled — decisions are saved but not sent
- The batch has already been sent (status "Sent")

**Solution**: Check test mode under Extensions → My Extensions → ADCELL Commission Approval → Configure.

### Automatic Approval Is Not Running

**Symptom**: No new automatic reconciliations visible in the dashboard.

**Possible Causes**:
- Automatic approval is not enabled in settings
- The Shopware message queue worker is not running
- No active ADCELL account exists

**Solution**: Enable automatic approval, ensure `bin/console messenger:consume` is running, and verify that at least one account is marked as "Active".

---

## Related Documentation

- [Configuration Settings](../configuration/settings.md)
- [How-To Guide and Workflows](../how_to.md)
