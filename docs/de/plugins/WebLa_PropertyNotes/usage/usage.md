# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen von *Hinweise zu Eigenschaften in Filter, Tabelle und Varianten*.

---

## Inhaltsverzeichnis

- [Das Grundprinzip](#das-grundprinzip)
- [Admin-Bereich Funktionen](#admin-bereich-funktionen)
- [Storefront Funktionen](#storefront-funktionen)
- [Anzeige-Typen](#anzeige-typen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Das Grundprinzip

### Was es bewirkt

Ein Hinweis besteht aus einem Text und der Entscheidung, wo er erscheint. Beides hängt an der Eigenschaft selbst, nicht am Produkt. Sie pflegen den Text einmal, und er erscheint an jedem Produkt, das diese Eigenschaft trägt.

Es gibt zwei Ebenen:

- **Eigenschaftsgruppe**, zum Beispiel *Material*. Der Hinweis erklärt die Kategorie als Ganzes.
- **Einzelner Wert**, zum Beispiel *Merinowolle*. Der Hinweis erklärt genau diesen Wert.

Beide Ebenen sind unabhängig voneinander. Sie können nur die Gruppe erklären, nur einzelne Werte, oder beides.

### Tipps & Best Practices

- Erklären Sie zuerst die Gruppen. Ein Satz an *Schutzart* hilft mehr als zwanzig Sätze an den einzelnen Werten.
- Am Wert lohnt sich ein Hinweis dort, wo Kunden zwischen zwei Optionen schwanken.
- Lassen Sie alle vier Schalter aus, solange Sie Texte vorbereiten. Ohne aktiven Schalter bleibt der Hinweis unsichtbar.

---

## Admin-Bereich Funktionen

### Hinweis an einer Eigenschaftsgruppe

**Ort**: Kataloge → Eigenschaften → *Gruppe wählen* → Karte **Zusatzfelder** → **Hinweise zu Eigenschaften**

**Zweck**: Erklärt die Bedeutung einer ganzen Eigenschaftskategorie.

**Verwendung**:

1. Gruppe öffnen und zur Karte **Zusatzfelder** scrollen.
2. Text im Feld **Hinweis** eintragen.
3. Anzeigeorte über die Schalter aktivieren.
4. Bei Bedarf **Anzeige Typ** auf *Tooltip* oder *Modal mit Button* stellen.
5. **Speichern**.

### Hinweis an einem einzelnen Wert

**Ort**: Kataloge → Eigenschaften → *Gruppe wählen* → Liste der Werte → *Wert öffnen* → **Hinweise zu Eigenschaften**

**Zweck**: Erklärt einen konkreten Wert innerhalb der Gruppe.

**Verwendung**: Wie bei der Gruppe. Beim **Anzeige Typ** stehen hier *Info Icon* und *Hover über Option* zur Auswahl.

> Ab Shopware 6.7.2 zeigt Shopware die Zusatzfelder eines Werts selbst an. In älteren Versionen ergänzt das Plugin diese Karte. Die Felder sehen in beiden Fällen gleich aus.

Eine Beschreibung aller Felder steht in der [Einstellungsreferenz](../configuration/settings.md).

---

## Storefront Funktionen

### Kategoriefilter

**Wo sie erscheint**: In der Filterleiste einer Kategorieseite, sobald ein Eigenschaftsfilter aufgeklappt wird.

**Was Kunden sehen**: Ein Info-Icon neben der Filterüberschrift zeigt den Hinweis der Gruppe. Ein Info-Icon neben einem einzelnen Filterwert zeigt den Hinweis dieses Werts. In beiden Fällen erscheint der Text als Tooltip beim Überfahren mit der Maus.

**Voraussetzung**: Schalter **Zeige in Filter** oder **Zeige in allen**.

**Anpassungsmöglichkeiten**: Keine. Der Filter verwendet immer das Info-Icon, unabhängig vom gewählten **Anzeige Typ**.

### Eigenschaftstabelle der Produktseite

**Wo sie erscheint**: Im Reiter mit den Eigenschaften auf der Produktdetailseite.

**Was Kunden sehen**: Ein Info-Icon neben der Zeilenbeschriftung für den Hinweis der Gruppe, ein Info-Icon hinter dem jeweiligen Wert für dessen Hinweis.

**Voraussetzung**: Schalter **Zeigen in Eigenschaften** oder **Zeige in allen**.

**Anpassungsmöglichkeiten**: Keine. Auch hier gilt immer das Info-Icon.

### Variantenauswahl

**Wo sie erscheint**: Im Kaufbereich der Produktdetailseite, bei Produkten mit Varianten. Auch in einer Kauf-Box, die über die Erlebniswelten eingebunden ist.

**Was Kunden sehen**: Neben der Gruppenüberschrift ein Tooltip oder ein Button, der einen Dialog öffnet. Neben der einzelnen Option ein Info-Icon oder ein Text, der beim Überfahren eingeblendet wird.

**Voraussetzung**: Schalter **Zeige in Varianten Auswahl** oder **Zeige in allen**.

**Anpassungsmöglichkeiten**: Das Feld **Anzeige Typ** wirkt ausschließlich hier.

---

## Anzeige-Typen

Der **Anzeige Typ** betrifft nur die Variantenauswahl. Diese Übersicht zeigt, was wo gilt:

| Ort                    | Hinweis der Gruppe                    | Hinweis eines Werts                      |
| ---------------------- | ------------------------------------- | ---------------------------------------- |
| Kategoriefilter        | Info-Icon mit Tooltip                 | Info-Icon mit Tooltip                    |
| Eigenschaftstabelle    | Info-Icon mit Tooltip                 | Info-Icon mit Tooltip                    |
| Variantenauswahl       | *Tooltip* oder *Modal mit Button*     | *Info Icon* oder *Hover über Option*     |

**Tooltip** ist die schmale Sprechblase beim Überfahren, etwa 300 Pixel breit. Gut für ein bis zwei Sätze.

**Modal mit Button** öffnet auf Klick einen breiten Dialog. Die richtige Wahl für Aufzählungen, längere Erklärungen und Bilder.

**Info Icon** setzt ein kleines Icon neben die Option, der Text erscheint als Tooltip.

**Hover über Option** verzichtet auf das Icon. Der Text wird eingeblendet, sobald der Kunde die Option überfährt, in einem breiten Feld daneben. Auf Touchgeräten gibt es kein Überfahren, dort ist *Info Icon* die verlässlichere Wahl.

---

## Fehlerbehebung

### Der Hinweis erscheint nicht im Shop

**Symptom**: Text ist eingetragen und gespeichert, im Shop ist nichts zu sehen.

**Ursache**: Meist steht kein Schalter auf an, oder der falsche.

**Lösung**: Prüfen Sie, ob für den betreffenden Ort **Zeigen in Eigenschaften**, **Zeige in Varianten Auswahl**, **Zeige in Filter** oder **Zeige in allen** aktiv ist. Leeren Sie anschließend den Cache unter **Einstellungen → System → Caches & Indizes**.

### In der Variantenauswahl fehlen die Hinweise der einzelnen Werte

**Symptom**: Der Hinweis der Gruppe erscheint, die Hinweise der Optionen nicht.

**Ursache**: Die Eigenschaftsgruppe ist auf die Darstellung **Dropdown** gestellt. In einem Auswahlfeld ist neben den Einträgen kein Platz für Icons oder eingeblendete Texte.

**Lösung**: Unter Kataloge → Eigenschaften die Gruppe öffnen und **Darstellung der Ausprägungsauswahl** auf *Text*, *Bild* oder *Farbe* stellen. Alternativ den Hinweis zusätzlich in der Eigenschaftstabelle ausgeben, dort erscheint er unabhängig von der Darstellung.

### Der Hinweis ist abgeschnitten oder unleserlich

**Symptom**: Der Tooltip ist zu schmal für den Text.

**Ursache**: Ein Tooltip ist auf etwa 300 Pixel begrenzt.

**Lösung**: Bei einer Gruppe den **Anzeige Typ** auf *Modal mit Button* stellen, bei einem Wert auf *Hover über Option*. Beide bieten deutlich mehr Platz.

### Auf dem Smartphone erscheint kein Text

**Symptom**: Am Desktop funktioniert alles, auf dem Touchgerät nicht.

**Ursache**: **Hover über Option** setzt einen Mauszeiger voraus.

**Lösung**: **Info Icon** verwenden, das lässt sich antippen.

### Der Hinweis erscheint in der falschen Sprache

**Symptom**: In einer Sprache steht der Text der Systemsprache.

**Ursache**: Für diese Sprache ist keine Übersetzung hinterlegt.

**Lösung**: Eigenschaft öffnen, oben im Formular die Sprache wechseln und den Text erneut eintragen.

### Nach dem Update fehlen die Felder

**Symptom**: Die Karte **Hinweise zu Eigenschaften** ist verschwunden.

**Ursache**: Meist ein veralteter Administrations-Cache.

**Lösung**: Cache unter **Einstellungen → System → Caches & Indizes** leeren und den Browser mit `Strg`+`F5` neu laden.

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
