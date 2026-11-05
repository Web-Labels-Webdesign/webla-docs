# 1.0.0

_Veröffentlicht am 2026-11-05_

**Neue Funktionen**

- Unsichtbarer Spam-Schutz ohne Captcha für Kundenregistrierung, Gastbestellung, Newsletter-Anmeldung und Kontaktformular, in der Storefront und der Store-API
- Versuchs- und Erfolgslimit pro IP, IPv6 wird als /64-Anschluss gezählt
- Schriftfilter für Unicode-Schriftsysteme pro Feldgruppe, Standard ist Kyrillisch in Namen, Firma und Adresse
- Namensprüfung auf URLs, Werbetexte und identische Vor- und Nachnamen
- Adressprüfung auf identische Straße und Hausnummer
- E-Mail-Sperren für Domains und Domain-Endungen, Freigaben haben Vorrang
- Zusätzliches Honeypot-Feld und Browser-Prüfung mit Mindestzeit auf der Seite
- Reaktion pro Regel einstellbar: Silent Drop, Blockieren oder Nur protokollieren
- Testmodus, in dem alle Regeln nur protokollieren
- Dashboard-Karte mit verhinderten Anfragen gesamt, heute, für 7 und 30 Tage sowie nach Regel und Formular, in Deutsch und Englisch
- Protokoll ohne Klartext-IPs und Formularinhalte, Aufbewahrung bis zu 180 Tage und tägliche Bereinigung
