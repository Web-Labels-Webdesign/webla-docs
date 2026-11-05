# How-to guides

## Introduce the protection safely

1. Open **Extensions → My extensions → Invisible Spam Protection (Easy Mode) → Configure**.
2. Under **General**, enable **Test mode** and save.
3. Watch the dashboard card for a few days. The **logged only** values show which rules would trigger.
4. Disable **Test mode**.

## Make IP limits take effect

By default, the IP limits only log.

1. Open the section of the form you want, for example **Customer registration**.
2. Set **Action when attempt limit is exceeded** and **Action when success limit is exceeded** to **Silent drop** or **Block**.
3. Save.

Customers behind the same IP address, for example in a company network, share the limit. Add such addresses under **Allowed IPs / ranges**.

## Stop spam in foreign scripts

1. Under **Script filter**, select the **Blocked scripts**.
2. Under **Checked fields**, select the fields to check.
3. Set the **Action** per form and save.

For the contact form the action defaults to **Log only**. Only block scripts if none of your customers use them.

## Block e-mail domains

1. Under **E-mail filter**, enter endings such as `.xyz` or individual domains, one per line.
2. Add exceptions under **General → Allowed e-mail domains**.
3. Save.

## Make the browser check take effect

By default, the browser check only logs.

1. Check on the dashboard card how many hits the browser check has.
2. Under **Browser check**, set the actions per form to **Silent drop** or **Block**.
3. Save.

Visitors without JavaScript do not pass the browser check.

## If a real customer is blocked

1. Check on the dashboard card which rule triggers.
2. Add an allowlist entry for the IP address or e-mail address, or set the rule to **Log only**.

Allowlist entries only apply to the IP limits or the e-mail blocklists, not to the other content rules.
