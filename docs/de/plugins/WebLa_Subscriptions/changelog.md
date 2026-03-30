# Änderungsprotokoll

Alle wichtigen Änderungen am WebLa Subscription Plugin für Endbenutzer.

---

## [1.0.0] - 2026-03-30

### ✨ Neue Funktionen

- **Abonnement-System**: Vollständiges Abonnement-System für Shopware 6 mit automatischen Verlängerungen
- **Kundenportal**: Self-Service-Bereich im Kundenkonto zum Verwalten von Abonnements (pausieren, kündigen, Intervall ändern, Artikel verwalten)
- **Admin-Dashboard**: Übersicht mit KPIs — aktive Abonnenten, monatlicher Umsatz, anstehende Verlängerungen, Kündigungsrate
- **Admin-Verwaltung**: Liste aller Abonnements mit Filtern, Detailansicht mit Bearbeitungsmöglichkeiten
- **Mollie-Integration**: Automatische wiederkehrende Zahlungen über Kreditkarte und SEPA-Lastschrift
- **Offline-Zahlungsarten**: Rechnung und Vorkasse als alternative Zahlungsarten
- **Flexible Intervalle**: Konfigurierbare Lieferintervalle von 1 bis 8 Wochen
- **Abonnement-Rabatte**: Prozentualer Basisrabatt plus Treue-Staffeln
- **Gratisartikel**: Kostenlose Produkte bei Verlängerungen
- **Produktkonfiguration**: Abonnement-Optionen direkt am Produkt, inklusive „Nur als Abonnement"-Modus
- **E-Mail-Benachrichtigungen**: Verlängerungserinnerung, Kündigung, SEPA-Fehler, Preisänderung
- **Lieferungen zusammenlegen**: Mehrere Abonnements auf ein gemeinsames Datum synchronisieren
- **Zahlungsstatus-Abfrage**: Automatische Statusaktualisierung über Mollie-Polling
- **Vorkasse-Überwachung**: Automatische Erkennung ausstehender Vorkasse-Zahlungen
- **Änderungsprotokoll**: Lückenlose Nachverfolgung aller Änderungen an Abonnements
- **Warenkorb-Integration**: Abonnement-Hinweise und Zahlungsart-Filterung im Checkout

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                            |
| ------- | ---------------- | ------------------------------------- |
| 1.0.0   | 2026-03-30       | Erstveröffentlichung mit vollem Funktionsumfang |

---

## Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 1.0.0          | 6.6.0 – 6.7.x   | 8.1+        |
