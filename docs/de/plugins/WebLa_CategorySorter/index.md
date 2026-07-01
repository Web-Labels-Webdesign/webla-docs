# Kategorie-Sortierer

> Sortiert die direkten Unterkategorien einer gewählten Kategorie alphanumerisch – direkt in der Administration.

## Überblick

Der Kategorie-Sortierer ergänzt die Shopware-Administration um eine Seite, mit der Sie
die Unterkategorien einer Kategorie per Klick in eine natürliche, alphanumerische
Reihenfolge (A–Z) bringen. Das manuelle Ziehen von Kategorien in die richtige Reihenfolge
entfällt.

Die Sortierung berücksichtigt Zahlen auf natürliche Weise, sodass zum Beispiel „Item 2"
vor „Item 10" einsortiert wird. Auf Wunsch wird der gesamte Unterbaum bis in die tiefste
Ebene sortiert. Für wiederkehrende Aufgaben lässt sich die Sortierung zusätzlich
automatisieren.

Das Plugin verändert ausschließlich die **Reihenfolge** vorhandener Kategorien. Es werden
keine Kategorien angelegt, gelöscht oder einem anderen übergeordneten Element zugeordnet.

## Hauptfunktionen

- **Sortierung per Klick**: Ordnet die direkten Unterkategorien einer Kategorie
  alphanumerisch (A–Z).
- **Natürliche Sortierung**: Von Groß-/Kleinschreibung unabhängig und zahlenbewusst
  („Item 2" vor „Item 10").
- **Rekursiver Modus**: Sortiert optional den gesamten Unterbaum bis zur tiefsten Ebene.
- **Mehrfachauswahl** *(In-App-Kauf)*: Sortiert mehrere Kategorien gleichzeitig statt nur
  einer.
- **Automatische Sortierung** *(In-App-Kauf)*: Hält ausgewählte Kategorien nach einem
  konfigurierbaren Zeitplan sortiert.

## Voraussetzungen

- Shopware-Version: 6.6 – 6.7 (`shopware/core: >= 6.6.0 < 6.8.0`)
- PHP-Version: 8.2 oder höher

## Kompatibilität

Das Plugin unterstützt mehrere Shopware-Versionen aus einer einzigen Codebasis:

| Shopware-Version | Status         | Hinweise                |
| ---------------- | -------------- | ----------------------- |
| 6.6.x            | ✅ Unterstützt | Vollständig unterstützt |
| 6.7.x            | ✅ Unterstützt | Vollständig unterstützt |

## Schnellstart

1. Plugin unter **Erweiterungen → Meine Erweiterungen** installieren und aktivieren.
2. Bei Aufforderung den Cache leeren.
3. **Einstellungen → Plugins → Kategorie-Sortierer** öffnen.
4. Eine Kategorie aus dem Baum wählen und **Unterkategorien sortieren** klicken.

## Bedienung

Die Plugin-Seite besteht aus zwei Karten:

- **Unterkategorien sortieren** – Kategorie im Baum auswählen, optional **Rekursiv
  sortieren** aktivieren und die Reihenfolge sofort per **Unterkategorien sortieren**
  anwenden.
- **Automatische Sortierung** – Mit dem passenden In-App-Kauf die gespeicherte Auswahl in
  einem festgelegten **Ausführungsintervall (Sekunden)** automatisch sortieren lassen.

Über die Schaltfläche **Speichern** oben rechts werden Kategorieauswahl, Rekursiv-Option
und Intervall gespeichert. Ausführliche Abläufe finden Sie im
[How-To-Leitfaden](how-to.md).

## In-App-Käufe

Ohne Kauf sortiert das Plugin **eine** Kategorie manuell über die Admin-Seite – kostenlos.
Die kostenpflichtigen Stufen werden sowohl in der Oberfläche als auch serverseitig
durchgesetzt:

| Kennung          | Schaltet frei                                                  |
| ---------------- | -------------------------------------------------------------- |
| `multiselect`    | Auswahl und Sortierung mehrerer Kategorien gleichzeitig.       |
| `scheduled-sort` | Die automatische geplante Aufgabe samt editierbarem Intervall. |

Ist `multiselect` nicht aktiv, wird nur die erste Kategorie gelesen, angezeigt, sortiert
und gespeichert. Eine zuvor gespeicherte, umfangreichere Auswahl bleibt erhalten und wird
bei erneuter Aktivierung wiederhergestellt.

## Dokumentationsinhalt

- [How-To-Leitfaden](how-to.md) – Schritt-für-Schritt-Abläufe
- [Changelog](changelog.md) – Versionsverlauf und Änderungen

## Support

- Dokumentation: [docs.web-labels.de](https://docs.web-labels.de/)
- Hersteller: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
