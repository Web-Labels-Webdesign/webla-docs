# Anwendungsfälle

## Alle B2B-Kunden nach Rechnungsland besteuern

1. **Einstellungen → Shop → Kundengruppen** öffnen, Gruppe der B2B-Kunden auswählen.
2. Zusatzfeld **Steuerbasis (Lieferland/Rechnungsland)** auf **Rechnungsland** setzen, speichern.
3. Sicherstellen, dass an den einzelnen Kunden dieser Gruppe **Nicht gesetzt (Fallback)** steht, damit die Gruppeneinstellung greift.

## Einen einzelnen Kunden abweichend behandeln

1. Kunden unter **Kunden** öffnen.
2. Zusatzfeld **Steuerbasis (Lieferland/Rechnungsland)** auf **Rechnungsland** oder **Lieferland** setzen, speichern.

Der Wert am Kunden überschreibt die Kundengruppe und die globale Einstellung.

## Shopweit auf Rechnungsland umstellen

1. **Einstellungen → System → Plugins → Customer Tax Country → Konfiguration** öffnen.
2. Verkaufskanal wählen (oder „Alle Verkaufskanäle“).
3. **Globale Steuerbasis** auf **Rechnungsland** setzen, speichern.

## Ausfall der VIES-Prüfung absichern

1. Plugin-Konfiguration öffnen.
2. **Verhalten wenn der USt-Id-Prüfdienst (VIES) nicht erreichbar ist** wählen:
   - **Formale Prüfung** – ausgewogener Standard
   - **Als ungültig behandeln** – steuerlich konservativ, Kunde zahlt im Zweifel Umsatzsteuer
   - **Als gültig behandeln** – kundenfreundlich, steuerliches Risiko liegt bei Ihnen

## Prüfen, warum ein Kunde Umsatzsteuer zahlt

Gehen Sie diese Punkte der Reihe nach durch:

1. Hat der Kunde eine **USt-IdNr.** hinterlegt?
2. Ist das Steuerland (je nach Modus Rechnungs- oder Lieferland) ein **EU-Land**?
3. Unterscheidet sich dieses Land vom **Land des Verkaufskanals**? Inlandslieferungen bleiben immer steuerpflichtig.
4. Ist die USt-Id **gültig**? Prüfen Sie sie testweise direkt im VIES-Portal der EU.
5. Welche **Steuerbasis** greift tatsächlich – Kunde, Kundengruppe oder global?
