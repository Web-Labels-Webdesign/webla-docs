# ADCELL Commission Approval

> Automatic reconciliation and approval of ADCELL affiliate commissions directly in Shopware Admin.

## Overview

The **ADCELL Commission Approval** plugin automates the time-consuming process of approving commissions in the ADCELL affiliate network. Instead of manually reviewing each commission in the ADCELL backend, the plugin automatically reconciles open commissions against your Shopware orders and makes informed decisions.

For each commission, the plugin checks the order status, payment status, shipping status, and cart value. Based on this data, it automatically decides whether to approve, cancel, or adjust a commission. You remain in full control: before sending, you can review and override every decision individually.

## Key Features

- **Automatic Reconciliation**: Compares open ADCELL commissions with your Shopware orders and makes decisions based on order, payment, and shipping status
- **Manual Review**: All decisions are prepared first and can be reviewed and overridden individually before sending
- **Amount Adjustment**: Automatically detects discrepancies between ADCELL cart values and actual net order values, correcting amounts as needed
- **Daily Auto-Approval**: Optional scheduled task that automatically reconciles and approves commissions before the auto-accept deadline
- **Test Mode**: Allows full testing without sending any data to ADCELL
- **Batch History**: All reconciliations are saved and can be viewed and resumed from the dashboard at any time
- **Program Mapping**: Link ADCELL programs to Shopware sales channels for targeted assignment
- **Account Management**: Manage multiple ADCELL accounts with encrypted password storage

## Requirements

- Shopware Version: 6.6.0 or higher (up to 6.7.x)
- PHP Version: 8.1 or higher
- An active ADCELL merchant account with API access

## Quick Start

1. Install the plugin via **Extensions → My Extensions**
2. Activate the plugin
3. Navigate to **Orders → ADCELL Commission Approval → Accounts**
4. Create your ADCELL account and test the connection
5. Set up program mapping under **Program Mapping** to link your ADCELL programs to sales channels
6. Start your first reconciliation under **Reconciliation**

## Documentation Contents

- [Configuration Settings](configuration/settings.md) — All available settings explained
- [Usage Guide](usage/usage.md) — How to use all plugin features
- [How-To Guide](how_to.md) — Step-by-step workflows and data flow
- [Changelog](changelog.md) — Version history and updates

## Support

For questions or issues, contact [Web Labels Webdesign GmbH](https://www.web-labels.de/kontakt).
