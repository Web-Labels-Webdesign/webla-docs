# Zusatzfelder in der Admin-Produktübersicht

> Zeigt jedes Produkt-Zusatzfeld als optionale Spalte in der Produktübersicht des Shopware-Admins an.

## Übersicht

Die Produktübersicht im Shopware-Admin zeigt nur einen festen Satz an Spalten – Name, Hersteller, Preis, Status und einige mehr. Alles, was Sie in Zusatzfeldern pflegen (Lieferantennummern, interne Notizen, Lieferzeiten, ERP-Kennungen), bleibt unsichtbar, bis Sie jedes Produkt einzeln öffnen.

Dieses Plugin erweitert die Produktübersicht um alle Zusatzfelder, die Ihren Produkten zugeordnet sind. Jedes Zusatzfeld steht als zusätzliche Spalte zur Verfügung. Sie entscheiden, welche davon eingeblendet werden.

Das Plugin richtet sich an Shop-Betreiber und Mitarbeiter, die täglich mit dem Produktkatalog arbeiten – Einkauf, Redaktion und Support. Es erweitert ausschließlich die Administration; an der Storefront ändert sich nichts.

## Hauptfunktionen

- **Alle Zusatzfelder automatisch verfügbar**: Jedes Zusatzfeld, dessen Feldset der Entität *Produkte* zugeordnet ist, wird als Spalte angeboten – ohne Zuordnung oder Pflege.
- **Sie entscheiden, was sichtbar ist**: Alle ergänzten Spalten sind zunächst ausgeblendet. Die Produktübersicht bleibt unverändert, bis Sie eine Spalte selbst einblenden.
- **Pro Benutzer gespeichert**: Die Spaltenauswahl ist Teil der normalen Shopware-Einstellungen der Produktliste. Jeder Admin-Benutzer behält seine eigene Ansicht.
- **Breite anpassbar**: Jede ergänzte Spalte lässt sich wie eine native Spalte in der Breite verändern.
- **Übersetzte Spaltentitel**: Die Beschriftung erfolgt als *Feldset: Feld* in der Sprache der Administration, mit automatischem Fallback, wenn eine Übersetzung fehlt.
- **Neue Felder erscheinen sofort**: Legen Sie ein neues Zusatzfeld an, steht es unmittelbar als Spalte bereit – ohne Plugin-Update.

## Voraussetzungen

- Shopware-Version: 6.6.0 bis 6.7.x
- Mindestens ein Zusatzfeld, dessen Feldset der Entität *Produkte* zugeordnet ist

## Kompatibilität

Dieses Plugin unterstützt mehrere Shopware-Versionen aus einer Codebasis. Es gibt nur eine Installationsdatei für beide Versionen.

| Shopware-Version | Status         | Hinweise                                  |
| ---------------- | -------------- | ----------------------------------------- |
| 6.6.x            | ✅ Unterstützt | Ab Plugin-Version 4.1.0                   |
| 6.7.x            | ✅ Unterstützt | Ab Plugin-Version 4.0.0                   |

## Schnellstart

1. Installieren Sie das Plugin über **Erweiterungen → Meine Erweiterungen**.
2. Aktivieren Sie das Plugin.
3. Laden Sie die Administration einmal neu, damit die neuen Spalten registriert werden.
4. Öffnen Sie **Kataloge → Produkte** und blenden Sie über die Spalteneinstellungen der Tabelle die gewünschten Zusatzfelder ein.

Eine Konfiguration ist nicht erforderlich – das Plugin hat keine Einstellungsseite.

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) – Hinweise zur Konfiguration
- [Nutzungsanleitung](usage/usage.md) – So nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) – Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) – Versionshistorie und Updates
