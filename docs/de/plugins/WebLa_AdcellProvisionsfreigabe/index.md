# ADCELL Provisionsfreigabe

> Automatischer Abgleich und Freigabe von ADCELL Affiliate-Provisionen direkt im Shopware Admin.

## Übersicht

Das Plugin **ADCELL Provisionsfreigabe** automatisiert den zeitaufwändigen Prozess der Provisionsfreigabe im ADCELL Affiliate-Netzwerk. Statt jede Provision einzeln im ADCELL-Backend zu prüfen, gleicht das Plugin die offenen Provisionen automatisch mit Ihren Shopware-Bestellungen ab und trifft fundierte Entscheidungen.

Das Plugin prüft für jede Provision den Bestellstatus, Zahlungsstatus, Versandstatus und Warenkorbwert. Basierend auf diesen Daten wird automatisch entschieden, ob eine Provision freigegeben, storniert oder im Betrag korrigiert werden soll. Sie behalten dabei jederzeit die volle Kontrolle: Vor dem Senden können Sie jede Entscheidung manuell überprüfen und anpassen.

## Hauptfunktionen

- **Automatischer Abgleich**: Vergleicht offene ADCELL-Provisionen mit Ihren Shopware-Bestellungen und trifft Entscheidungen basierend auf Bestell-, Zahlungs- und Versandstatus
- **Manuelle Überprüfung**: Alle Entscheidungen werden zunächst vorbereitet und können vor dem Senden einzeln überprüft und überschrieben werden
- **Betragskorrektur**: Erkennt automatisch Abweichungen zwischen ADCELL-Warenkorbwert und tatsächlichem Netto-Bestellwert und korrigiert den Betrag bei Bedarf
- **Tägliche automatische Freigabe**: Optionaler Scheduled Task, der Provisionen vor der Auto-Accept-Deadline automatisch abgleicht und freigibt
- **Test-Modus**: Ermöglicht vollständige Tests ohne Daten an ADCELL zu senden
- **Batch-Historie**: Alle durchgeführten Abgleiche werden gespeichert und können jederzeit im Dashboard eingesehen und fortgesetzt werden
- **Programm-Mapping**: Verknüpfung von ADCELL-Programmen mit Shopware-Verkaufskanälen für gezielte Zuordnung
- **Kontenverwaltung**: Verwaltung mehrerer ADCELL-Konten mit verschlüsselter Passwortspeicherung

## Voraussetzungen

- Shopware Version: 6.6.0 oder höher (bis 6.7.x)
- PHP Version: 8.1 oder höher
- Ein aktives ADCELL Merchant-Konto mit API-Zugang

## Schnellstart

1. Installieren Sie das Plugin über **Erweiterungen → Meine Erweiterungen**
2. Aktivieren Sie das Plugin
3. Navigieren Sie zu **Bestellungen → ADCELL Provisionsfreigabe → Konten**
4. Legen Sie Ihr ADCELL-Konto an und testen Sie die Verbindung
5. Richten Sie unter **Programm-Mapping** die Zuordnung Ihrer ADCELL-Programme zu Verkaufskanälen ein
6. Starten Sie Ihren ersten Abgleich unter **Abgleich**

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) — So nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) — Schritt-für-Schritt-Workflows und Datenfluss
- [Änderungsprotokoll](changelog.md) — Versionshistorie und Updates

## Support

Bei Fragen oder Problemen wenden Sie sich an [Web Labels Webdesign GmbH](https://www.web-labels.de/kontakt).
