# Konfigurationseinstellungen

> Dieses Plugin hat keine eigene Konfigurationsseite unter **Erweiterungen → Meine Erweiterungen**. Der Button **Konfigurieren** fehlt, das ist kein Fehler.

Eingestellt wird stattdessen jeder Hinweis für sich, direkt an der Eigenschaft, zu der er gehört.

**Navigation**: Kataloge → Eigenschaften → *Gruppe wählen* → Karte **Zusatzfelder** → **Hinweise zu Eigenschaften**

Für einen einzelnen Wert: dieselbe Gruppe öffnen, zur Liste der Werte wechseln, einen Wert öffnen. Der Dialog enthält denselben Abschnitt.

Beide Ebenen haben denselben Satz Felder. Nur beim **Anzeige Typ** unterscheiden sich die Auswahlmöglichkeiten, weil eine Gruppenüberschrift und ein einzelner Wert in der Variantenauswahl unterschiedlich dargestellt werden.

---

## Hinweise zu Eigenschaften

### Hinweis

| Eigenschaft      | Wert                     |
| ---------------- | ------------------------ |
| **Typ**          | Rich-Text-Editor         |
| **Standard**     | leer                     |
| **Erforderlich** | Ja, sonst passiert nichts |

**Beschreibung**: Der Text, den Ihre Kunden zu sehen bekommen. Formatierung, Links, Listen und Bilder sind erlaubt.

**Anwendungsbeispiel**: An der Gruppe *Schutzart* erklären Sie einmal, was IP-Klassen bedeuten. Am Wert *IP68* schreiben Sie den konkreten Fall: dauerhaft wasserdicht, auch unter Wasser.

> Halten Sie sich kurz. In der Variantenauswahl und im Filter erscheint der Text als Tooltip, und ein Tooltip ist etwa 300 Pixel breit. Für längere Erklärungen ist der Anzeige-Typ **Modal mit Button** die bessere Wahl.

---

### Zeigen in Eigenschaften

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt den Hinweis in der Eigenschaftstabelle der Produktdetailseite. Der Hinweis einer Gruppe erscheint neben der Zeilenbeschriftung, der Hinweis eines Werts neben dem Wert selbst.

**Anwendungsbeispiel**: Der Kunde ist schon auf der Produktseite und liest die technischen Daten. Genau dort steht die Erklärung zur Zeile *Schutzart*.

---

### Zeige in Varianten Auswahl

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt den Hinweis in der Variantenauswahl auf der Produktdetailseite, also neben der Gruppenüberschrift beziehungsweise neben der jeweiligen Option. Nur hier wirkt das Feld **Anzeige Typ**.

**Anwendungsbeispiel**: Der Kunde muss sich zwischen *Shore A 70* und *Shore A 90* entscheiden und weiß nicht, was härter ist.

---

### Zeige in Filter

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt den Hinweis im Kategoriefilter, neben der Filterüberschrift beziehungsweise neben dem einzelnen Filterwert. Hier ist die Darstellung immer ein Info-Icon mit Tooltip.

**Anwendungsbeispiel**: Ein Filter *Schutzart* mit den Werten IP54, IP65 und IP68 wird erst zum Filter, wenn klar ist, worin sie sich unterscheiden.

---

### Zeige in allen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Abkürzung für die drei Schalter darüber. Ist dieser Schalter an, erscheint der Hinweis an allen drei Orten, unabhängig davon, wie die anderen Schalter stehen.

> Der Schalter fügt Orte hinzu, er nimmt keine weg. Um einen Ort auszuschließen, lassen Sie **Zeige in allen** aus und aktivieren nur die gewünschten Einzelschalter.

---

### Anzeige Typ

| Eigenschaft      | Wert                                    |
| ---------------- | --------------------------------------- |
| **Typ**          | Auswahl                                 |
| **Standard**     | Tooltip (Gruppe) / Info Icon (Wert)     |
| **Erforderlich** | Nein                                    |

**Beschreibung**: Bestimmt die Darstellung in der Variantenauswahl auf der Produktdetailseite. Auf Filter und Eigenschaftstabelle hat das Feld keine Wirkung, dort wird immer ein Info-Icon mit Tooltip verwendet.

**Optionen an einer Eigenschaftsgruppe**:

- `Tooltip`: Info-Icon neben der Gruppenüberschrift, Text erscheint beim Überfahren mit der Maus. Standard, wenn nichts gewählt ist.
- `Modal mit Button`: Button neben der Gruppenüberschrift, ein Klick öffnet einen breiten Dialog. Für längere Texte, Listen und Bilder.

**Optionen an einem einzelnen Wert**:

- `Info Icon`: Kleines Icon neben der Option, Text erscheint beim Überfahren mit der Maus. Standard, wenn nichts gewählt ist.
- `Hover über Option`: Kein Icon. Der Text wird eingeblendet, sobald der Kunde die Option überfährt, in einem breiten Feld daneben. Geeignet für Hinweise mit Bild.

**Anwendungsbeispiel**: Eine Gruppe *Pflegehinweis* mit einer Aufzählung aus fünf Punkten ist im Tooltip unlesbar. Auf **Modal mit Button** stellen, und der Kunde bekommt sie in Ruhe zu lesen.

---

## Zusammenspiel der Schalter

Ein Hinweis erscheint an einem Ort, wenn ein Text eingetragen ist **und** der zugehörige Schalter oder **Zeige in allen** aktiv ist.

| Gewünschtes Ergebnis                   | Einstellung                                          |
| -------------------------------------- | ---------------------------------------------------- |
| Überall sichtbar                       | **Zeige in allen** an                                |
| Nur im Filter                          | nur **Zeige in Filter** an                           |
| Überall außer im Filter                | **Zeigen in Eigenschaften** und **Zeige in Varianten Auswahl** an, **Zeige in allen** aus |
| Vorbereitet, aber noch nicht sichtbar  | Text eintragen, alle vier Schalter aus               |

---

## Übersetzungen

Die Felder sind übersetzbar wie jedes andere Zusatzfeld. Wechseln Sie oben im Formular die Sprache und tragen Sie den Text erneut ein. Ohne Übersetzung greift Shopware auf die Systemsprache zurück.
