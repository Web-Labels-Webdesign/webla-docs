# Anleitungen

Schritt-für-Schritt-Workflows für die häufigsten Aufgaben mit der Adressvalidierung.

---

## Wie das Plugin funktioniert

### Ablauf-Übersicht

```
Kunde tippt Adresse → Prüfung im Browser → Hinweis am Feld oder Formular wird abgeschickt
```

**Beispielablauf**:

1. Ein Kunde gibt im Checkout `Musterstraße` in das Straßenfeld ein.
2. Das Plugin prüft die Eingabe gegen Ihre Regeln und stellt fest, dass die Hausnummer fehlt.
3. Unter dem Feld erscheint der Hinweis "Bitte geben Sie eine Hausnummer ein.", das Feld wird rot markiert, und das Formular wird nicht abgeschickt.
4. Der Kunde ergänzt `12`. Der Hinweis verschwindet, das Formular lässt sich absenden.

Die Prüfung läuft vollständig im Browser des Kunden. Es werden keine Daten an Dritte übertragen und keine externen Dienste angefragt.

---

## Häufige Workflows

### Anleitung: Adressvalidierung einrichten

**Ziel**: Die Prüfung für einen Verkaufskanal aktivieren und sinnvoll konfigurieren.

**Zeitaufwand**: etwa 10 Minuten

**Voraussetzungen**:

- Das Plugin ist installiert und aktiviert
- Sie wissen, welcher Verkaufskanal betroffen ist

**Schritte**:

1. **Konfiguration öffnen**
   - Navigieren zu: **Erweiterungen → Meine Erweiterungen**
   - Suchen Sie den Eintrag **Adressvalidierung auf Hausnummer und Sonderzeichen** und klicken Sie auf **Konfigurieren**

2. **Verkaufskanal wählen**
   - Wählen Sie oben im Konfigurationsfenster den gewünschten Verkaufskanal
   - Beginnen Sie nach Möglichkeit mit einem Testkanal

3. **Prüfung aktivieren**
   - Schalten Sie **Für diesen Verkaufskanal aktivieren** ein
   - Ohne diesen Schritt bleiben alle weiteren Einstellungen wirkungslos

4. **Regeln festlegen**
   - **Straße - Erlaubte Sonderzeichen**: für deutsche Adressen bewährt sich `.-/`
   - **Stadt - Erlaubte Sonderzeichen**: für deutsche Adressen bewährt sich `-()`
   - **Hausnummer erforderlich**: eingeschaltet lassen, sofern Sie keine Postfach-Adressen annehmen
   - Die beiden Schalter gegen aufeinanderfolgende und randständige Sonderzeichen können eingeschaltet bleiben

5. **Speichern und testen**
   - Klicken Sie auf **Speichern**
   - Öffnen Sie die Storefront und legen Sie im Kundenkonto testweise eine Adresse an

**Ergebnis**: Ungültige Eingaben werden mit einem konkreten Hinweis abgelehnt, gültige Adressen lassen sich wie gewohnt speichern.

**Fehlerbehebung**: Erscheint kein Hinweis, prüfen Sie zuerst, ob Sie den richtigen Verkaufskanal konfiguriert haben, und leeren Sie anschließend den Cache unter **Einstellungen → System → Caches & Indizes**.

---

### Anleitung: Passende Sonderzeichen ermitteln

**Ziel**: Herausfinden, welche Sonderzeichen Sie freigeben müssen, ohne echte Kunden auszusperren.

**Zeitaufwand**: etwa 20 Minuten

**Schritte**:

1. **Bestehende Adressen sichten**
   - Navigieren zu: **Kunden → Kunden**
   - Sehen Sie sich die Adressen der letzten Wochen an und notieren Sie, welche Sonderzeichen tatsächlich vorkommen

2. **Liste zusammenstellen**
   - In deutschen Straßennamen sind das meist Punkt, Bindestrich und Schrägstrich
   - In Ortsnamen meist Bindestrich und Klammern

3. **Zeichen eintragen**
   - Tragen Sie die Zeichen direkt hintereinander ohne Trennzeichen ein, also `.-/` statt `. - /`

4. **Gegenprobe machen**
   - Testen Sie zwei bis drei echte Adressen aus Ihrem Kundenbestand in der Storefront

**Ergebnis**: Eine Freigabeliste, die zu Ihrem tatsächlichen Kundenkreis passt.

**Fehlerbehebung**: Wird eine echte Adresse abgelehnt, fehlt in aller Regel genau ein Zeichen in der Liste. Der Hinweis in der Storefront zeigt Ihren Kunden die erlaubten Zeichen an — das hilft auch Ihnen beim Testen.

---

### Anleitung: Fehlermeldungen anpassen

**Ziel**: Die Hinweistexte an die Ansprache Ihres Shops anpassen.

**Zeitaufwand**: etwa 5 Minuten

**Schritte**:

1. **Textbausteine öffnen**
   - Navigieren zu: **Einstellungen → Shop → Textbausteine**

2. **Texte suchen**
   - Suchen Sie nach `address.validation`
   - Sie finden je einen Textbaustein pro Regel, zum Beispiel `address.validation.streetMissingHouseNumber`

3. **Text überschreiben**
   - Klicken Sie den gewünschten Eintrag an und tragen Sie Ihren eigenen Text ein
   - Bei den Mindestlängen-Texten bleibt der Platzhalter `%minLength%` erhalten — er wird durch den konfigurierten Wert ersetzt

**Ergebnis**: Ihre Kunden sehen Hinweise in der Sprache und Tonalität Ihres Shops.

---

## Erweiterte Workflows

### Unterschiedliche Regeln je Verkaufskanal

**Komplexität**: Mittel

**Wann zu verwenden**: Wenn Sie neben einem deutschen Shop auch international verkaufen.

Deutsche Adressen folgen einem sehr einheitlichen Muster, internationale nicht: Hausnummern stehen dort teils vor dem Straßennamen oder fehlen ganz.

1. Setzen Sie zunächst unter **Alle Verkaufskanäle** eine zurückhaltende Grundkonfiguration: erlaubte Sonderzeichen leer lassen, **Hausnummer erforderlich** ausschalten, die beiden Sonderzeichen-Regeln einschalten.
2. Wechseln Sie anschließend auf Ihren deutschen Verkaufskanal und verschärfen Sie dort: erlaubte Sonderzeichen setzen, **Hausnummer erforderlich** einschalten, Mindestlängen vergeben.
3. Testen Sie beide Kanäle getrennt in der Storefront.

---

## Schnellreferenz

| Aufgabe                        | Wichtige Schritte                                              | Erforderliche Einstellungen                     |
| ------------------------------ | -------------------------------------------------------------- | ----------------------------------------------- |
| Prüfung aktivieren             | Konfiguration öffnen, Verkaufskanal wählen, Schalter einschalten | Für diesen Verkaufskanal aktivieren             |
| Hausnummer erzwingen           | Schalter einschalten                                            | Hausnummer erforderlich                         |
| Fake-Eingaben erschweren       | Mindestlängen setzen, Sonderzeichen-Regeln einschalten          | Straße/Stadt - Mindestlänge, beide Blockier-Regeln |
| Prüfung vorübergehend abschalten | Schalter im betroffenen Kanal ausschalten                      | Für diesen Verkaufskanal aktivieren             |

---

## Best Practices

1. **Zuerst im Testkanal**: Aktivieren Sie neue Regeln erst in einem Verkaufskanal ohne echte Kunden. Eine zu strenge Regel im Checkout kostet unmittelbar Bestellungen.
2. **An echten Daten prüfen**: Testen Sie jede Konfiguration gegen Adressen aus Ihrem tatsächlichen Kundenbestand, nicht gegen ausgedachte Beispiele.
3. **Mit wenig anfangen**: Aktivieren Sie zunächst Hausnummern-Prüfung und die beiden Sonderzeichen-Regeln. Mindestlängen und Zeichenfreigaben können Sie später ergänzen.
4. **Meldungen im Blick behalten**: Häufen sich Support-Anfragen zu Adresseingaben, ist meist eine Regel zu streng eingestellt.

## Was Sie vermeiden sollten

- ❌ **Regeln direkt im Live-Kanal ausprobieren** — jede zu strenge Einstellung wirkt sofort im Checkout und kann Bestellabbrüche verursachen.
- ❌ **Mindestlängen zu hoch ansetzen** — es gibt reale kurze Straßen- und Ortsnamen wie `Au 3` oder `Ulm`.
- ❌ **Sonderzeichen ohne Prüfung freigeben** — jedes zusätzlich erlaubte Zeichen schwächt die Prüfung.
- ❌ **Die Prüfung als Adressverifikation verstehen** — das Plugin prüft die Form der Eingabe, nicht die Existenz der Adresse. Ob es die Straße wirklich gibt, kann es nicht feststellen.
