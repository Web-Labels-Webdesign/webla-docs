# Charge-Management

> Verwalten Sie Chargen, Verfallsdaten und Lagerbestände im Shopware-Admin. Mit automatischer Chargen-Historie pro Auftrag, geplanter Bestandsaktualisierung und Unterstützung für Produktzusammensetzungen.

## Übersicht

Charge-Management erweitert Shopware 6 um eine vollständige Chargenverwaltung für Produkte mit begrenzter Haltbarkeit oder nachverfolgbaren Losen. Sie legen pro Produkt beliebig viele Chargen an, jede mit eigenem Verfallsdatum, Mengenvorrat und optionaler Chargennummer.

Sobald ein Auftrag einen konfigurierbaren Status erreicht, werden passende Chargen automatisch in der benötigten Menge gebucht. Ein geplanter Hintergrundprozess deaktiviert abgelaufene Chargen und kann bei Bedarf den Produktlagerbestand auf Basis der noch verfügbaren Chargenmengen neu berechnen. Produkte mit Zusammensetzungen (z. B. ein Produkt, das sich aus mehreren Bestandteilen ergibt) werden dabei mitberücksichtigt.

Das Plugin richtet sich an Shops mit chargenpflichtigen Waren — Lebensmittel, Kosmetik, Pharma, Chemie oder sonstige Produkte mit Mindesthaltbarkeit oder Chargenrückverfolgung.

## Hauptfunktionen

- **Chargenverwaltung im Admin**: Eigenes Modul unter *Kataloge* zum Anlegen, Bearbeiten und Löschen von Chargen je Produkt.
- **Verfallsdatum pro Charge**: Jede Charge trägt ein Ablaufdatum. Abgelaufene Chargen werden automatisch deaktiviert.
- **Automatische Chargenbuchung bei Auftragsstatus**: Erreicht ein Auftrag den konfigurierten Status, werden Chargen gemäß Bestellmenge und Produktgewicht gebucht.
- **Reversible Buchungen**: Wird der Auftragsstatus auf einen konfigurierten "Rückgängig"-Status gesetzt, werden die gebuchten Mengen automatisch in die Chargen zurückgeführt.
- **Chargen-Historie pro Auftrag**: Jede Charge zeigt die zugeordneten Aufträge mit Auftragsnummer, Position und gebuchter Menge.
- **Produktzusammensetzungen**: Ein Produkt kann aus mehreren Einzelprodukten bestehen. Chargenbuchung und Bestandsberechnung laufen dann über alle Bestandteile.
- **Geplante Bestandsaktualisierung**: Alle 10 Minuten prüft ein Hintergrundtask die Chargen und passt optional den Produktlagerbestand an.
- **Variantenunterstützung**: Bei Produkten mit Varianten wird der Bestand je Variante kalkuliert.

## Voraussetzungen

- Shopware Version: 6.6.0 bis 6.7.x
- PHP Version: 8.2 oder höher
- Aktivierte Scheduled-Task-Verarbeitung (Message Queue Worker)

## Schnellstart

1. Installieren Sie das Plugin über den Plugin-Manager oder per `composer require webla/batchmanagement`.
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**.
3. Öffnen Sie **Erweiterungen → Meine Erweiterungen → Charge-Management → … → Konfigurieren** und legen Sie fest, bei welchem Auftragsstatus Chargen gebucht werden sollen.
4. Wechseln Sie in **Kataloge → Chargen** und legen Sie für Ihre ersten Produkte Chargen mit Menge und Verfallsdatum an.
5. Optional: Aktivieren Sie unter *Lagerbestandseinstellungen* die Bestandsberechnung auf Basis der Chargen.

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) — So nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) — Datenfluss und Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) — Versionshistorie und Updates

## Support

- Hersteller: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- Support-Portal: <https://www.web-labels.de/support>
