**Changelog — Customer Tax Country**

Alle wesentlichen Änderungen für Anwender.

---

# 1.0.0

_Veröffentlicht am 2026-07-14_

**Neue Funktionen**

- Steuerliches Basisland konfigurierbar je Kunde, je Kundengruppe oder global je Verkaufskanal: Shopware-Standard, Rechnungsland oder Lieferland
- Im Modus "Rechnungsland" folgen sowohl der Steuerstatus als auch der angewendete Steuersatz der im Checkout gewählten Rechnungsadresse
- Innergemeinschaftliche B2B-Lieferungen werden bei gültiger USt-Id mit 0 % USt. behandelt
- Konfigurierbarer Fallback, falls der USt-Id-Prüfdienst VIES nicht erreichbar ist: formale Prüfung, als gültig behandeln oder als ungültig behandeln
