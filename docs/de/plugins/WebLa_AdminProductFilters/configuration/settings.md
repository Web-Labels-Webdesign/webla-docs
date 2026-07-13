# Konfigurationseinstellungen

> Dieses Plugin verfügt über keine konfigurierbaren Einstellungen.
> Es funktioniert direkt nach der Installation und Aktivierung.

Sie finden unter **Erweiterungen → Meine Erweiterungen** daher auch keine Schaltfläche *Konfigurieren* für dieses Plugin. Das ist beabsichtigt und kein Fehler.

## Was stattdessen steuerbar ist

Die eigentliche Steuerung erfolgt nicht im Plugin, sondern an zwei bekannten Stellen von Shopware:

| Was Sie steuern möchten                        | Wo Sie es einstellen                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| Welche Zusatzfelder als Spalte angeboten werden | **Einstellungen → System → Zusatzfelder** – das Feldset muss der Entität *Produkte* zugeordnet sein |
| Welche Spalten tatsächlich angezeigt werden     | Spalteneinstellungen der Produktliste unter **Kataloge → Produkte** (pro Benutzer)    |
| Wie eine Spalte beschriftet wird                | Bezeichnung von Feldset und Zusatzfeld unter **Einstellungen → System → Zusatzfelder** |
| Wie breit eine Spalte ist                       | Spaltenrand in der Produktliste mit der Maus ziehen                                   |

Details dazu finden Sie in der [Nutzungsanleitung](../usage/usage.md).
