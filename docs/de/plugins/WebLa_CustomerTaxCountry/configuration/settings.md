# Einstellungen

Die globalen Einstellungen finden Sie unter **Einstellungen → System → Plugins → Customer Tax Country → … (Kontextmenü) → Konfiguration**.

Die Einstellungen gelten je Verkaufskanal. Wählen Sie oben den gewünschten Verkaufskanal aus oder belassen Sie „Alle Verkaufskanäle“ für einen shopweiten Wert.

## Customer Tax Country Einstellungen

### Globale Steuerbasis

Legt fest, welches Land als Steuerbasis dient, wenn weder am Kunden noch an der Kundengruppe eine Steuerbasis gesetzt ist.

| Option | Bedeutung |
| --- | --- |
| **Shopware-Standard** (Standardwert) | Shopware entscheidet wie gewohnt (Lieferland). |
| **Rechnungsland** | Steuerstatus und Steuersatz richten sich nach der im Checkout gewählten Rechnungsadresse. |
| **Lieferland** | Steuerstatus und Steuersatz richten sich nach der Lieferadresse. |

### Verhalten wenn der USt-Id-Prüfdienst (VIES) nicht erreichbar ist

Greift ausschließlich dann, wenn die Online-Prüfung bei VIES nicht antwortet. Eindeutige Online-Ergebnisse werden zwischengespeichert und von dieser Einstellung nicht beeinflusst.

| Option | Bedeutung |
| --- | --- |
| **Formale Prüfung (Offline-Formatprüfung)** (Standardwert) | Es wird nur geprüft, ob die USt-Id formal korrekt aufgebaut ist. |
| **Als gültig behandeln (0 % anwenden)** | Die USt-Id gilt als gültig, die Lieferung wird ohne Umsatzsteuer berechnet. |
| **Als ungültig behandeln (normale Steuer)** | Die USt-Id gilt als ungültig, es wird regulär besteuert. |

> **Hinweis:** „Als gültig behandeln“ berechnet im Ausfall des Prüfdienstes 0 % ohne bestätigte Prüfung. Das ist bequem für den Kunden, verlagert das steuerliche Risiko aber auf Sie.

## Einstellungen am Kunden und an der Kundengruppe

Zusätzlich zur globalen Einstellung installiert das Plugin das Zusatzfeld **Steuerbasis (Lieferland/Rechnungsland)** an Kunden und Kundengruppen. Details dazu unter [Bedienung](../usage/usage.md).
