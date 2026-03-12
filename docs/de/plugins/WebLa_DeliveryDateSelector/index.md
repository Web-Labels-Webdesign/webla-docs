# Wunsch-Lieferdatum für Kunden

> Wunschlieferdatum mit konfigurierbaren Pufferzeiten, automatischer Feiertags-Verwaltung je Bundesland und Berücksichtigung von Produkt-Lieferzeiten. Kompatibel mit Shopware 6.6 und 6.7.

## Übersicht

Das Plugin **Wunsch-Lieferdatum für Kunden** ermöglicht es Ihren Kunden, im Checkout einen gewünschten Liefertermin auszuwählen. Der Kalender zeigt dabei ausschließlich Termine an, die realistisch lieferbar sind — basierend auf den Lieferzeiten Ihrer Produkte, Ihren konfigurierten Puffertagen sowie gesperrten Tagen wie Feiertagen oder Betriebsruhetagen.

Das Plugin berechnet das frühestmögliche Lieferdatum automatisch: Es ermittelt die längste Lieferzeit aller Produkte im Warenkorb, addiert Ihre Pufferzeiten und schließt gesperrte Tage aus. So kann Ihr Kunde nur aus realistischen Terminen wählen — und Sie erhalten keine Bestellungen mit unrealistischen Lieferwünschen.

Der ausgewählte Wunschliefertermin wird mit der Bestellung gespeichert und ist im Admin-Bereich in der Bestellübersicht, der Bestelldetailansicht sowie in Bestelldokumenten sichtbar.

## Hauptfunktionen

- **Intelligente Datumsberechnung**: Das frühestmögliche Lieferdatum wird automatisch aus Produktlieferzeiten, Puffertagen und gesperrten Tagen berechnet
- **Automatische Feiertagsverwaltung**: Öffentliche Feiertage werden automatisch über eine externe API geladen — national oder je deutschem Bundesland
- **Manuelle Sperrtermine**: Zusätzlich zu Feiertagen können beliebige Tage manuell gesperrt werden (z.B. Betriebsferien)
- **Flexible Pufferzeiten**: Konfigurierbare Vorlaufzeit zwischen Bestelleingang und Versand, mit Unterstützung für Stunden, Tage, Wochen und Monate
- **Produktspezifische Vorlaufzeiten**: Pro Produkt, Kategorie und Versandart kann eine eigene Vorlaufzeit hinterlegt werden
- **Wochentage sperren**: Definieren Sie, an welchen Wochentagen keine Lieferung erfolgt (z.B. Samstag und Sonntag)
- **Bestellübersicht im Admin**: Wunschliefertermin als Spalte und Filter in der Bestellliste
- **Sichtbar in der Bestellbestätigung**: Der Wunschliefertermin erscheint auf der Danke-Seite und in Bestelldokumenten
- **Shopware-Regelwerk-Integration**: Eigene Regelbedingungen für den Wunschliefertermin-Wochentag und ob ein Termin gesetzt wurde
- **Kundenspezifische Liefertage**: Optional können für einzelne Kunden individuelle Liefertage hinterlegt werden

## Voraussetzungen

- Shopware Version: 6.6.0 oder höher (kompatibel bis 6.7.x)
- PHP Version: 8.1 oder höher

## Schnellstart

1. Installieren Sie das Plugin über den Plugin Manager oder Composer
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**
3. Öffnen Sie die Konfiguration unter **Erweiterungen → Meine Erweiterungen → Wunsch-Lieferdatum für Kunden → Konfigurieren**
4. Wählen Sie Ihr Bundesland (oder "Nur nationale Feiertage"), damit die Feiertage automatisch geladen werden
5. Konfigurieren Sie die Pufferzeit (Mindestvorlaufzeit zwischen Bestellung und Lieferung)
6. Legen Sie fest, welche Wochentage für Lieferungen nicht verfügbar sind

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) — So nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) — Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) — Versionshistorie und Updates

## Support

Bei Fragen oder Problemen wenden Sie sich bitte an den Support über den Shopware Store oder besuchen Sie die vollständige Dokumentation unter [docs.web-labels.de](https://docs.web-labels.de).

Hersteller: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
