# How-To Guide

This guide provides step-by-step workflows for common tasks with ADCELL Commission Approval.

---

## How the Plugin Works

### Data Flow Overview

```
ADCELL API (open commissions) → Plugin (reconciliation with Shopware orders) → Decisions → ADCELL API (approval/cancellation)
```

**Detailed Flow**:

1. The plugin fetches open commissions from the ADCELL API
2. For each commission, the corresponding Shopware order is looked up (via the order number in the "reference" field)
3. The decision algorithm checks in this order:
   - Is there a program mapping? → If no: **Not mapped**
   - Does the order exist in Shopware? → If no: **Cancel**
   - Is the order cancelled/failed? → **Cancel**
   - Was the delivery fully returned? → **Cancel**
   - Was the payment fully refunded? → **Cancel**
   - Is the payment open/pending? → **Cancel**
   - Did the payment fail? → **Cancel**
   - Has it not been shipped yet? → **Cancel**
   - Is there a partial refund? → **Adjust**
   - Does the cart value deviate (beyond tolerance)? → **Adjust**
   - Everything OK? → **Approve**
4. Decisions are saved as a batch (status: "Prepared")
5. You review the results and can override decisions
6. When sending, decisions are submitted to the ADCELL API

### Amount Calculation

The **shop value** is calculated as follows:

```
Shop value = Net order value − Net shipping costs
```

For gross-priced shops (B2C), VAT is automatically deducted. This value is compared against the ADCELL cart value.

---

## Common Workflows

### How to: Initial Setup

**Goal**: Fully set up the plugin and run the first reconciliation.

**Time Required**: Approximately 10 minutes

**Steps**:

1. **Activate the plugin**
   - Navigate to: `Extensions → My Extensions`
   - Activate ADCELL Commission Approval

2. **Enable test mode**
   - Navigate to: `Extensions → My Extensions → ADCELL Commission Approval → Configure`
   - Set Test mode to **On**
   - Save

3. **Create an ADCELL account**
   - Navigate to: `Orders → ADCELL Commission Approval → Accounts`
   - Create an account with username and password
   - Test the connection

4. **Set up program mapping**
   - Navigate to: `Orders → ADCELL Commission Approval → Program Mapping`
   - Select account → Load programs
   - Create a mapping for each active program to the appropriate sales channel

5. **Run the first reconciliation**
   - Navigate to: `Orders → ADCELL Commission Approval → Reconciliation`
   - Select account and date range (e.g. 30 days)
   - Start reconciliation and review results

6. **Disable test mode** (after successful review)
   - Settings → Set Test mode to **Off**

**Result**: The plugin is ready for production. The next reconciliation will send decisions to ADCELL.

---

### How to: Run a Manual Reconciliation

**Goal**: Review open commissions and send decisions to ADCELL.

**Steps**:

1. **Start reconciliation**
   - Navigate to: `Orders → ADCELL Commission Approval → Reconciliation`
   - Select account and date range
   - Start reconciliation

2. **Review results**
   - Use filters to focus on specific decisions (e.g. cancellations only)
   - Override individual decisions via the dropdown if needed

3. **Send to ADCELL**
   - Click **Send to ADCELL**
   - Wait for the confirmation message

**Result**: All decisions have been submitted to ADCELL. The batch appears in the dashboard.

---

### How to: Resume a Prepared Batch

**Goal**: Open a previously created reconciliation that has not been sent yet and send it.

**Steps**:

1. **Open the dashboard**
   - Navigate to: `Orders → ADCELL Commission Approval → Dashboard`

2. **Select the batch**
   - In the "Recent reconciliations" table, find the desired batch (status: "Prepared")
   - Click the **date link** or use the **context menu** (three dots) → "View details"

3. **Review and send**
   - Review decisions, adjust if needed
   - Click **Send to ADCELL**

---

### How to: Set Up Automatic Approval

**Goal**: Have commissions reconciled and approved automatically every day.

**Prerequisites**:
- At least one active ADCELL account
- Program mappings configured
- Shopware message queue worker running

**Steps**:

1. **Configure settings**
   - Navigate to: `Extensions → My Extensions → ADCELL Commission Approval → Configure`
   - **Enable automatic approval**: On
   - **Days before auto-accept deadline**: 3 (recommended)
   - Optional: Enter a **notification email**
   - Save

2. **Ensure the message queue is running**
   - Verify that `bin/console messenger:consume` is running as a cron job or Supervisor process

**Result**: The plugin runs a daily reconciliation and sends decisions to ADCELL automatically.

---

## Quick Reference

| Task | Location | Prerequisites |
| ---- | -------- | ------------- |
| Create account | Accounts | ADCELL credentials |
| Set up mapping | Program Mapping | Active account |
| Manual reconciliation | Reconciliation | Account + Mapping |
| Resume batch | Dashboard → Click batch | Prepared batch |
| Auto-approval | Settings | Account + Mapping + Worker |

---

## Best Practices

1. **Test first**: Use test mode to verify decisions before going live
2. **Reconcile regularly**: Run reconciliations at least weekly to act before the auto-accept deadline
3. **Keep mappings current**: New ADCELL programs should be mapped to a sales channel promptly
4. **Use email notifications**: Enable the notification email when using automatic approval

## What to Avoid

- Do not leave **test mode** accidentally enabled in production — decisions will not be sent
- Do not run the same reconciliation multiple times without sending previous batches — dashboard statistics only count sent items, but you create unnecessary prepared batches
- Do not set **tolerance values** too high, as legitimate adjustments may be skipped
