# Nutzungsanleitung

Diese Anleitung beschreibt, wie die einzelnen Prüfungen der Adressvalidierung in Ihrer Storefront wirken.

---

## Inhaltsverzeichnis

- [Wo die Prüfung greift](#wo-die-prüfung-greift)
- [Prüfung der Straße](#prüfung-der-straße)
- [Prüfung des Ortes](#prüfung-des-ortes)
- [Regeln für Sonderzeichen](#regeln-für-sonderzeichen)
- [Automatische Korrekturen](#automatische-korrekturen)
- [Fehlermeldungen in der Storefront](#fehlermeldungen-in-der-storefront)
- [Fehlerbehebung](#fehlerbehebung)

---

## Wo die Prüfung greift

Die Adressvalidierung ist überall dort aktiv, wo Ihre Kunden eine Adresse eingeben:

1. **Registrierung** — beim Anlegen eines neuen Kundenkontos
2. **Adressverwaltung** — beim Anlegen oder Bearbeiten von Adressen im Kundenkonto
3. **Checkout** — bei der Eingabe von Liefer- und Rechnungsadressen

Geprüft werden ausschließlich die Felder **Straße** und **Ort**. Alle anderen Adressfelder wie Name, Postleitzahl oder Land bleiben unverändert und werden weiterhin von Shopware selbst geprüft.

Die Prüfung findet im Browser statt: bereits während der Eingabe und noch einmal beim Absenden des Formulars. Verstößt eine Eingabe gegen eine Regel, wird das Formular nicht abgeschickt, und der Hinweis erscheint direkt unter dem betroffenen Feld.

---

## Prüfung der Straße

### Was sie bewirkt

Das Straßenfeld wird gegen bis zu fünf Regeln geprüft — je nachdem, was Sie konfiguriert haben:

| Regel                          | Wirkung                                                       |
| ------------------------------ | ------------------------------------------------------------- |
| Erlaubte Sonderzeichen         | Nur Buchstaben, Ziffern, Leerzeichen und die von Ihnen freigegebenen Sonderzeichen sind zulässig |
| Hausnummer erforderlich        | Die Eingabe muss mindestens eine Ziffer enthalten             |
| Mindestlänge                   | Die Eingabe muss die konfigurierte Zeichenzahl erreichen      |
| Aufeinanderfolgende Sonderzeichen | Zwei oder mehr Sonderzeichen direkt hintereinander sind unzulässig |
| Sonderzeichen am Anfang/Ende   | Die Eingabe darf nicht mit einem Sonderzeichen beginnen oder enden |

### So verwenden Sie sie

1. Öffnen Sie **Erweiterungen → Meine Erweiterungen → Adressvalidierung auf Hausnummer und Sonderzeichen → Konfigurieren**.
2. Wählen Sie oben den gewünschten **Verkaufskanal**.
3. Tragen Sie unter **Straße - Erlaubte Sonderzeichen** die zulässigen Zeichen ein, zum Beispiel `.-/`.
4. Legen Sie über die Schalter fest, welche weiteren Regeln greifen sollen.
5. Speichern Sie und prüfen Sie das Ergebnis in der Storefront.

### Beispiele

Konfiguration: erlaubte Sonderzeichen `.-/`, Hausnummer erforderlich, Mindestlänge `4`.

| Eingabe            | Ergebnis | Grund                                    |
| ------------------ | -------- | ---------------------------------------- |
| `Musterstr. 12`    | Gültig   | —                                        |
| `Hauptstraße 5/7`  | Gültig   | —                                        |
| `Sankt-Anna-Str. 3`| Gültig   | —                                        |
| `Musterstraße`     | Ungültig | Keine Hausnummer                         |
| `Musterstraße #12` | Ungültig | `#` ist nicht freigegeben                |
| `ab 1`             | Ungültig | Mindestlänge unterschritten              |
| `Muster..str. 5`   | Ungültig | Zwei Sonderzeichen hintereinander        |

### Tipps

- Beginnen Sie mit einem leeren Feld bei den erlaubten Sonderzeichen und ergänzen Sie Zeichen erst, wenn Sie sie tatsächlich brauchen. Jedes freigegebene Zeichen ist ein Zeichen, das Kunden auch falsch verwenden können.
- Prüfen Sie eine geplante Konfiguration gegen echte Bestellungen aus Ihrem Shop, bevor Sie sie im Live-Kanal aktivieren.

---

## Prüfung des Ortes

### Was sie bewirkt

Das Ortsfeld wird gegen dieselben Sonderzeichen-Regeln geprüft wie die Straße, mit zwei Unterschieden:

- **Ziffern sind niemals erlaubt.** Diese Regel gilt immer und lässt sich nicht abschalten.
- Eine Hausnummern-Prüfung gibt es hier naturgemäß nicht.

### Beispiele

Konfiguration: erlaubte Sonderzeichen `-()`, Mindestlänge `3`.

| Eingabe            | Ergebnis | Grund                             |
| ------------------ | -------- | --------------------------------- |
| `Hamburg`          | Gültig   | —                                 |
| `Frankfurt (Oder)` | Gültig   | —                                 |
| `Neustadt-Glewe`   | Gültig   | —                                 |
| `Stadt123`         | Ungültig | Ziffern sind im Ortsfeld unzulässig |
| `Muster/Stadt`     | Ungültig | `/` ist nicht freigegeben         |
| `xy`               | Ungültig | Mindestlänge unterschritten       |

---

## Regeln für Sonderzeichen

Die beiden Regeln **Aufeinanderfolgende Sonderzeichen blockieren** und **Sonderzeichen am Anfang/Ende blockieren** gelten für Straße und Ort gemeinsam. Sie wirken unabhängig davon, ob Sie erlaubte Sonderzeichen konfiguriert haben.

**Als Sonderzeichen gelten** alle Satz- und Sonderzeichen wie `.`, `,`, `-`, `/`, `(`, `)`, `#`, `*` oder `@`.

**Nicht als Sonderzeichen gelten** Buchstaben, Ziffern und Leerzeichen. Auch Buchstaben mit Akzenten wie `é`, `ł` oder `ç` zählen als normale Buchstaben und werden nie beanstandet.

### Ausnahme am Wortende

Ein **Punkt** und eine **schließende Klammer** am Ende der Eingabe werden bewusst nicht beanstandet. Andernfalls wären übliche Schreibweisen wie `Musterstr.` oder `Frankfurt (Oder)` nicht mehr möglich. Ein abschließender Bindestrich wie in `Musterstraße -` wird dagegen abgelehnt.

---

## Automatische Korrekturen

Beim Absenden des Formulars bereinigt das Plugin die Eingaben still, ohne eine Fehlermeldung anzuzeigen:

| Korrektur                         | Vorher            | Nachher            |
| --------------------------------- | ----------------- | ------------------ |
| Leerzeichen am Anfang und Ende    | `  Hamburg  `     | `Hamburg`          |
| Mehrfache Leerzeichen             | `Muster  str. 5`  | `Muster str. 5`    |
| Fehlendes Leerzeichen vor der Hausnummer | `Musterstr.1` | `Musterstr. 1`  |

Die letzte Korrektur gilt nur für das Straßenfeld. Sie sorgt für einheitliche Adressdaten, die sich später leichter auswerten und an Versanddienstleister übergeben lassen.

---

## Fehlermeldungen in der Storefront

Jede Regel hat ihren eigenen Hinweistext. Verstößt eine Eingabe gegen **mehrere** Regeln, erscheinen alle zutreffenden Hinweise gleichzeitig untereinander — Ihre Kunden müssen also nicht mehrfach absenden, um alle Probleme zu finden.

Haben Sie erlaubte Sonderzeichen konfiguriert, wird die Liste dieser Zeichen an den Hinweis angehängt. Ihre Kunden sehen dann direkt, was sie verwenden dürfen.

Die Texte lassen sich wie in Shopware üblich anpassen unter **Einstellungen → Shop → Textbausteine**. Suchen Sie dort nach `address.validation`.

---

## Fehlerbehebung

### Die Prüfung greift überhaupt nicht

**Symptom**: Ungültige Adressen werden weiterhin akzeptiert.

**Ursache**: Meist ist das Plugin für den betroffenen Verkaufskanal nicht aktiviert. Die Einstellung **Für diesen Verkaufskanal aktivieren** steht standardmäßig auf "Aus" und muss je Kanal einzeln gesetzt werden.

**Lösung**: Öffnen Sie die Konfiguration, wählen Sie oben den betroffenen Verkaufskanal und schalten Sie die Option ein. Prüfen Sie anschließend in der Storefront mit einer bewusst falschen Eingabe wie `Musterstraße`, ob der Hinweis erscheint.

### Eine gültige Adresse wird abgelehnt

**Symptom**: Kunden melden, dass sie ihre korrekte Adresse nicht eingeben können.

**Ursache**: Die Regeln sind für diesen Fall zu streng — häufig fehlt ein Sonderzeichen in der Freigabeliste, oder die Mindestlänge ist zu hoch angesetzt.

**Lösung**: Lassen Sie sich die betroffene Adresse nennen und prüfen Sie sie gegen Ihre Konfiguration. Ergänzen Sie fehlende Zeichen unter **Straße - Erlaubte Sonderzeichen** beziehungsweise **Stadt - Erlaubte Sonderzeichen**, oder senken Sie die Mindestlänge.

### Änderungen an der Konfiguration wirken nicht sofort

**Symptom**: Nach dem Speichern verhält sich die Storefront noch wie vorher.

**Ursache**: Der Seiten-Cache liefert noch die alte Fassung des Formulars aus.

**Lösung**: Leeren Sie den Cache unter **Einstellungen → System → Caches & Indizes**. Testen Sie anschließend in einem privaten Browserfenster, um auch den Browser-Cache auszuschließen.

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
