# Hinweise zu Eigenschaften in Filter, Tabelle und Varianten

> Kurze Erklärungen direkt neben Ihren Eigenschaften: im Kategoriefilter, in der Eigenschaftstabelle und in der Variantenauswahl. Als Tooltip, Dialog oder Hover-Text.

## Übersicht

Eigenschaftsnamen sind Kurzschrift für alle, die das Produkt schon kennen. IP68, Shore A 70, 19,5 Mikron: präzise, und für die meisten Kunden ohne Aussage. Kunden, die nicht verstehen, wofür ein Filter oder eine Variante steht, wählen im Zweifel gar nichts aus.

Dieses Plugin stellt eine kurze Erklärung genau dorthin, wo die Frage aufkommt. Sie schreiben den Text einmal an der Eigenschaftsgruppe oder an einem einzelnen Wert, und legen anschließend fest, an welchen Stellen im Shop er erscheint.

Die Texte liegen als Zusatzfelder an Ihren vorhandenen Eigenschaften. Es gibt keine getrennte Verwaltung, keine Template-Anpassung, und die Hinweise sind übersetzbar wie jedes andere Zusatzfeld.

## Hauptfunktionen

- **Hinweise an Gruppen und an Werten**: Ein Text an der Gruppe *Material*, ein eigener Text am Wert *Merinowolle*.
- **Drei Anzeigeorte**: Kategoriefilter, Eigenschaftstabelle der Produktseite und Variantenauswahl.
- **Pro Hinweis schaltbar**: Vier Schalter je Hinweis entscheiden, wo er erscheint. Alle aus heißt unsichtbar, also lassen sich Texte in Ruhe vorbereiten.
- **Anzeige-Typ wählbar**: In der Variantenauswahl wahlweise Tooltip oder Dialog für Gruppen, Info-Icon oder Einblendung beim Überfahren für einzelne Werte.
- **Rich-Text**: Links, Listen und Bilder aus dem gewohnten Editor.

## Voraussetzungen

- Shopware: 6.6.0 bis einschließlich 6.7.x
- PHP: 8.2 oder neuer
- Storefront: Die Hinweise erscheinen im mitgelieferten Storefront und in Themes, die davon erben.

## Kompatibilität

Ein Paket deckt alle unterstützten Shopware-Versionen ab. Der Unterschied betrifft nur die Administration, nicht die Anzeige im Shop.

| Shopware-Version | Status         | Hinweise                                                                    |
| ---------------- | -------------- | --------------------------------------------------------------------------- |
| 6.6.x            | ✅ Unterstützt | Das Plugin ergänzt die Hinweisfelder am einzelnen Eigenschaftswert           |
| 6.7.0 – 6.7.1    | ✅ Unterstützt | wie 6.6                                                                     |
| ab 6.7.2         | ✅ Unterstützt | Shopware zeigt die Felder am Eigenschaftswert selbst an, das Plugin hält sich zurück |

Bedienung und Aussehen der Felder sind in allen Fällen gleich.

## Schnellstart

1. Plugin über **Erweiterungen → Meine Erweiterungen** installieren und aktivieren. Die Felder werden bei der Installation an Ihren Eigenschaften angelegt.
2. **Kataloge → Eigenschaften** öffnen und eine Gruppe wählen, zum Beispiel *Material*.
3. Zur Karte **Zusatzfelder** scrollen, Abschnitt **Hinweise zu Eigenschaften**, Text im Feld **Hinweis** eintragen.
4. Darunter die Schalter aktivieren, an welchen Stellen der Hinweis erscheinen soll, und **Speichern**.
5. Produktseite oder Kategorieseite im Shop aufrufen und das Info-Icon prüfen.

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) – Alle Felder eines Hinweises erklärt
- [Nutzungsanleitung](usage/usage.md) – Anzeigeorte, Anzeige-Typen und Fehlerbehebung
- [Anleitungen](how_to.md) – Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) – Versionshistorie

## Support

- Hersteller und Support: [Web Labels Webdesign GmbH im Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- Dokumentation: [docs.web-labels.de](https://docs.web-labels.de)
