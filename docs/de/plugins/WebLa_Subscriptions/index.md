# WebLa Subscription Plugin

> Erweiterbares Abonnement-Plugin für Shopware 6 mit automatischer Verlängerung, flexiblen Intervallen, Mollie-Zahlungsanbindung und Kundenportal für wiederkehrende Bestellungen.

## Übersicht

Das WebLa Subscription Plugin ermöglicht es Ihnen, in Ihrem Shopware-Shop ein vollständiges Abonnement-System anzubieten. Ihre Kunden können Produkte als wiederkehrende Lieferungen bestellen und profitieren dabei von automatischen Rabatten. Die Verlängerung erfolgt automatisch im Hintergrund — inklusive Zahlungsabwicklung über Mollie (Kreditkarte, SEPA-Lastschrift) oder manuelle Zahlungsarten (Rechnung, Vorkasse).

Über ein Self-Service-Portal im Kundenkonto können Ihre Kunden ihre Abonnements selbst verwalten: pausieren, kündigen, Intervalle ändern, Produkte hinzufügen oder entfernen und Lieferungen zusammenlegen. Im Admin-Bereich erhalten Sie ein Dashboard mit wichtigen Kennzahlen, eine Übersichtsliste aller Abonnements und detaillierte Bearbeitungsmöglichkeiten.

## Hauptfunktionen

- **Flexible Intervalle**: Lieferintervalle von 1 bis 8 Wochen (konfigurierbar), Kunden können Intervalle optional selbst ändern
- **Automatische Verlängerung**: Hintergrund-Task erstellt automatisch neue Bestellungen zum Fälligkeitsdatum
- **Abonnement-Rabatte**: Prozentuale Rabatte auf Abonnement-Bestellungen, plus Treue-Staffeln basierend auf der Anzahl der Verlängerungen
- **Mollie-Zahlungsintegration**: Wiederkehrende Zahlungen über Kreditkarte und SEPA-Lastschrift mit automatischer Mandatsverwaltung
- **Offline-Zahlungsarten**: Rechnung und Vorkasse als alternative Zahlungsarten für Abonnements
- **Kundenportal**: Self-Service-Bereich im Kundenkonto zum Verwalten aller Abonnements
- **Lieferungen zusammenlegen**: Kunden können mehrere Abonnements auf einen gemeinsamen Liefertermin zusammenführen
- **Admin-Dashboard**: Kennzahlen zu aktiven Abonnenten, monatlichem Umsatz, anstehenden Verlängerungen und Kündigungsrate
- **Erinnerungs-E-Mails**: Automatische Benachrichtigung 3 Tage vor jeder Verlängerung
- **Produktkonfiguration**: Abonnement-Optionen direkt am Produkt konfigurierbar, inklusive „Nur als Abonnement"-Modus
- **Gratisartikel**: Kostenlose Produkte bei Verlängerungen hinzufügbar
- **Änderungsprotokoll**: Lückenlose Nachverfolgung aller Änderungen an Abonnements

## Voraussetzungen

- Shopware Version: 6.6.0 oder höher (bis 6.7.x)
- PHP Version: 8.1 oder höher
- Mollie PHP SDK: Version 3.9 oder höher (wird automatisch installiert)
- Mollie-Konto: Erforderlich für Kreditkarte und SEPA-Lastschrift

## Schnellstart

1. Installieren Sie das Plugin über den Plugin Manager oder Composer (`composer require webla/subscriptions`)
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**
3. Konfigurieren Sie die Grundeinstellungen unter **Erweiterungen → Meine Erweiterungen → WebLa Subscription Plugin → Konfigurieren**
4. Hinterlegen Sie Ihre Mollie-API-Schlüssel in der Plugin-Konfiguration
5. Konfigurieren Sie die gewünschten Intervalle und Rabatte
6. Aktivieren Sie Abonnement-Optionen an den gewünschten Produkten unter **Kataloge → Produkte → [Produkt] → Abonnement**

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) — So nutzen Sie alle Plugin-Funktionen
- [Abonnement-Verwaltung (Storefront)](usage/subscriptions.md) — Das Kundenportal im Detail
- [Admin-Funktionen](usage/admin.md) — Dashboard, Listen und Detailansichten
- [Anleitungen](how_to.md) — Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) — Versionshistorie und Updates

## Support

- Dokumentation: [docs.web-labels.de](https://docs.web-labels.de/)
- Shopware Store: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
