# Bedienung

## Steuerbasis am einzelnen Kunden setzen

1. **Kunden** öffnen und den gewünschten Kunden auswählen.
2. Zum Bereich **Zusatzfelder** scrollen, Gruppe **Customer Tax Country**.
3. Feld **Steuerbasis (Lieferland/Rechnungsland)** setzen:
   - **Nicht gesetzt (Fallback)** – die Kundengruppe bzw. die globale Einstellung entscheidet
   - **Rechnungsland**
   - **Lieferland**
4. **Speichern**.

Die Einstellung am Kunden hat immer Vorrang vor Kundengruppe und globaler Einstellung.

## Steuerbasis an einer Kundengruppe setzen

1. **Einstellungen → Shop → Kundengruppen** öffnen und die Kundengruppe auswählen.
2. Zum Bereich **Zusatzfelder** scrollen, Gruppe **Customer Tax Country**.
3. Feld **Steuerbasis (Lieferland/Rechnungsland)** setzen und **speichern**.

Die Einstellung gilt für alle Kunden der Gruppe, die selbst keine eigene Steuerbasis gesetzt haben.

## Verhalten im Checkout

- **Rechnungsland**: Ändert der Kunde im Checkout die Rechnungsadresse, wird die Steuer sofort neu berechnet – sowohl der Steuerstatus (brutto/netto/steuerfrei) als auch der angewendete Steuersatz.
- **Lieferland**: Maßgeblich ist die Lieferadresse.
- **Shopware-Standard**: Es bleibt beim Standardverhalten von Shopware.

## Innergemeinschaftliche B2B-Lieferung (0 % USt.)

Ohne Umsatzsteuer wird berechnet, wenn **alle** Bedingungen erfüllt sind:

- Der Kunde hat eine USt-Id hinterlegt,
- die USt-Id ist gültig,
- das Steuerland des Kunden liegt in der EU,
- das Land des Verkaufskanals liegt in der EU,
- und es handelt sich um ein **anderes** Land als das des Verkaufskanals.

Die USt-Id wird online beim EU-Dienst VIES geprüft. Ergebnisse werden zwischengespeichert (gültig: 7 Tage, ungültig: 1 Tag), damit der Checkout nicht bei jeder Neuberechnung erneut anfragt. Antwortet VIES nicht, greift die Einstellung [Verhalten wenn der USt-Id-Prüfdienst (VIES) nicht erreichbar ist](../configuration/settings.md#verhalten-wenn-der-ust-id-prüfdienst-vies-nicht-erreichbar-ist).

## USt-Id pflegen

Die USt-Id wird im Kundenkonto bzw. im Administrationsbereich des Kunden gepflegt (Feld **USt-IdNr.**). Ohne hinterlegte USt-Id greift die 0-%-Regel nicht.
