# Anleitungen

Schritt-für-Schritt-Workflows für die häufigsten Aufgaben.

---

## Wie das Plugin funktioniert

```
Hinweis an der Eigenschaft hinterlegen → Anzeigeorte schalten → Hinweis erscheint an jedem Produkt mit dieser Eigenschaft
```

**Beispielablauf**:

1. Sie tragen an der Eigenschaftsgruppe *Schutzart* eine Erklärung zu IP-Klassen ein.
2. Sie aktivieren **Zeige in allen**.
3. Jede Kategorieseite mit dem Filter *Schutzart*, jede Eigenschaftstabelle und jede Variantenauswahl mit dieser Gruppe zeigt das Info-Icon.

Es gibt keinen Zwischenschritt an einzelnen Produkten. Wer die Eigenschaft trägt, bekommt den Hinweis.

---

## Häufige Workflows

### Anleitung: Ersten Hinweis anlegen

**Ziel**: Eine Eigenschaftsgruppe im Shop erklären.

**Zeitaufwand**: 5 Minuten

**Voraussetzungen**:

- Plugin installiert und aktiviert
- Mindestens eine Eigenschaftsgruppe unter Kataloge → Eigenschaften

**Schritte**:

1. **Eigenschaftsgruppe öffnen**
   - Navigieren zu: Kataloge → Eigenschaften
   - Gruppe anklicken, zum Beispiel *Material*

2. **Text eintragen**
   - Zur Karte **Zusatzfelder** scrollen, Abschnitt **Hinweise zu Eigenschaften**
   - Im Feld **Hinweis** die Erklärung schreiben, zum Beispiel: „Das Obermaterial bestimmt Atmungsaktivität und Pflegeaufwand."

3. **Anzeigeorte wählen**
   - **Zeige in allen** aktivieren, um den Hinweis überall zu zeigen
   - Oder einzelne Schalter setzen, wenn er nur an bestimmten Stellen erscheinen soll

4. **Speichern**
   - Oben rechts auf **Speichern**

**Ergebnis**: Auf der Kategorieseite steht neben der Filterüberschrift *Material* ein Info-Icon. Beim Überfahren erscheint Ihr Text.

**Fehlerbehebung**: Nichts zu sehen? Cache leeren unter Einstellungen → System → Caches & Indizes.

---

### Anleitung: Einen einzelnen Wert erklären

**Ziel**: Statt der ganzen Gruppe einen bestimmten Wert erläutern.

**Zeitaufwand**: 3 Minuten je Wert

**Voraussetzungen**: Eine Eigenschaftsgruppe mit mindestens einem Wert.

**Schritte**:

1. **Zur Werteliste wechseln**
   - Navigieren zu: Kataloge → Eigenschaften → *Gruppe öffnen*
   - Zur Liste der Werte wechseln

2. **Wert öffnen**
   - Auf den Wert klicken, zum Beispiel *Merinowolle*
   - Es öffnet sich ein Dialog mit den Feldern unter **Hinweise zu Eigenschaften**

3. **Text und Schalter setzen**
   - Erklärung im Feld **Hinweis** eintragen
   - Anzeigeorte aktivieren

4. **Speichern**

**Ergebnis**: Im Filter, in der Eigenschaftstabelle und in der Variantenauswahl erscheint das Info-Icon direkt neben diesem Wert.

**Fehlerbehebung**: In der Variantenauswahl fehlt das Icon? Dann steht die Gruppe auf **Dropdown**, siehe [Fehlerbehebung](usage/usage.md#fehlerbehebung).

---

### Anleitung: Längere Erklärung als Dialog zeigen

**Ziel**: Eine Erklärung mit Aufzählung oder Bild lesbar unterbringen.

**Zeitaufwand**: 5 Minuten

**Schritte**:

1. **Eigenschaftsgruppe öffnen** und den Text im Feld **Hinweis** formatieren, mit Liste, Zwischenüberschrift oder Bild.
2. **Zeige in Varianten Auswahl** oder **Zeige in allen** aktivieren.
3. **Anzeige Typ** auf *Modal mit Button* stellen.
4. **Speichern**.

**Ergebnis**: In der Variantenauswahl steht ein Button neben der Gruppenüberschrift. Ein Klick öffnet einen breiten Dialog mit dem vollständigen Text.

> Im Filter und in der Eigenschaftstabelle bleibt es beim Tooltip. Sehr lange Texte gehören deshalb an Stellen, an denen der Dialog greift.

---

### Anleitung: Hinweise in einer weiteren Sprache pflegen

**Ziel**: Denselben Hinweis auf Englisch ausgeben.

**Zeitaufwand**: 2 Minuten je Hinweis

**Voraussetzungen**: Eine zweite Sprache ist im Shop eingerichtet.

**Schritte**:

1. **Eigenschaft öffnen**, deren Hinweis übersetzt werden soll.
2. **Sprache umschalten** über die Sprachauswahl oben im Formular.
3. **Text erneut eintragen**, diesmal in der Zielsprache.
4. **Speichern**.

**Ergebnis**: Kunden sehen den Hinweis in der Sprache ihres Verkaufskanals.

> Die Schalter und der **Anzeige Typ** gelten für alle Sprachen. Nur der Text wird übersetzt.

---

### Anleitung: Hinweise vorbereiten, ohne sie zu zeigen

**Ziel**: Texte in Ruhe schreiben und später gemeinsam sichtbar machen.

**Schritte**:

1. Texte an allen betroffenen Eigenschaften eintragen und **alle vier Schalter aus** lassen.
2. Speichern und die Texte in Ruhe abstimmen.
3. Zum Starttermin je Eigenschaft **Zeige in allen** aktivieren.

**Ergebnis**: Bis zum letzten Schritt sieht kein Kunde etwas.

---

## Schnellreferenz

| Aufgabe                            | Wichtige Schritte                                              | Erforderliche Felder                          |
| ---------------------------------- | -------------------------------------------------------------- | --------------------------------------------- |
| Gruppe erklären                    | Kataloge → Eigenschaften → Gruppe → Zusatzfelder                | **Hinweis** + mindestens ein Schalter         |
| Wert erklären                      | Gruppe → Werteliste → Wert öffnen                              | **Hinweis** + mindestens ein Schalter         |
| Nur im Filter zeigen               | Nur **Zeige in Filter** aktivieren                             | **Zeige in Filter**                           |
| Langen Text lesbar machen          | Gruppe → **Anzeige Typ** auf *Modal mit Button*                | **Zeige in Varianten Auswahl**, **Anzeige Typ** |
| Text ohne Icon einblenden          | Wert → **Anzeige Typ** auf *Hover über Option*                 | **Zeige in Varianten Auswahl**, **Anzeige Typ** |
| Hinweis vorübergehend ausblenden   | Alle vier Schalter aus                                          | –                                             |

---

## Best Practices

1. **Erst die Gruppen, dann die Werte**: Eine Erklärung an der Gruppe deckt oft schon die Frage ab und ist mit einem Text erledigt.
2. **Ein bis zwei Sätze im Tooltip**: Alles Längere gehört in den Dialog.
3. **Filter zuerst bestücken**: Dort entscheidet sich, ob ein Kunde die Auswahl überhaupt benutzt.
4. **Nach jeder Änderung eine Seite im Shop prüfen**: Filter, Eigenschaftstabelle und Variantenauswahl sehen unterschiedlich aus.
5. **Vor der Deinstallation exportieren**: Ohne **Benutzerdaten beibehalten** werden alle Felder samt Texten entfernt.

## Was Sie vermeiden sollten

- ❌ **Jeden Wert einzeln erklären** – Aufwand ohne Wirkung, wenn der Gruppen-Hinweis schon alles sagt.
- ❌ **Lange Texte im Tooltip** – der Tooltip ist etwa 300 Pixel breit, der Rest bricht unschön um.
- ❌ **Hover über Option in einem Shop mit viel mobilem Traffic** – ohne Mauszeiger passiert nichts.
- ❌ **Deinstallieren ohne Benutzerdaten beizubehalten** – die Felder und alle gespeicherten Hinweise sind danach weg.
