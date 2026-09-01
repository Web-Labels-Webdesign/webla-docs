# Anleitungen

Schritt-für-Schritt-Workflows für typische Aufgaben mit der Startseiten Steuerung.

---

## Wie das Plugin funktioniert

```
Besucher öffnet die Startseite
   → Plugin prüft alle aktiven Konfigurationen des Verkaufskanals, nach Priorität sortiert
   → erste Konfiguration, deren Regeln zutreffen, gewinnt
   → deren Erlebniswelt wird als Startseite ausgespielt
```

Trifft keine Konfiguration zu, bleibt die im Verkaufskanal hinterlegte Startseite bestehen.

---

## Häufige Workflows

### Anleitung: Saisonale Aktion zeitgesteuert ausspielen

**Ziel**: Eine Weihnachts-Landingpage erscheint automatisch am 1. Dezember und verschwindet nach dem 26. Dezember wieder.

**Zeitaufwand**: 10 Minuten (ohne Gestaltung der Erlebniswelt)

**Voraussetzungen**:
- Die Erlebniswelt ist unter **Inhalte → Erlebniswelten** angelegt und fertig gestaltet
- Sie kennen den Start- und Endzeitpunkt in UTC

**Schritte**:

1. **Konfiguration anlegen**
   - Navigieren zu: **Marketing → Startseiten Steuerung**
   - **Konfiguration hinzufügen** klicken

2. **Basis Informationen ausfüllen**
   - **Name**: `Weihnachten 2026`
   - **Priorität**: `50` — höher als Ihre dauerhaften Konfigurationen
   - **Landing Page**: Ihre Weihnachts-Erlebniswelt
   - **Verkaufskanal**: den betroffenen Kanal wählen oder leer lassen für alle
   - **Regel-Operator**: `UND`
   - **Aktiv**: einschalten
   - **Speichern** klicken

3. **Zeitregel anlegen**
   - In der nun sichtbaren Karte **Regeln** den **Regel-Typ** `Datumsbereich` wählen
   - **Von**: `30.11.2026, 23:00` (entspricht 1. Dezember 00:00 deutscher Winterzeit)
   - **Bis**: `26.12.2026, 22:59`
   - **Regel hinzufügen** klicken

**Ergebnis**: Ab dem Startzeitpunkt zeigt Ihre Startseite die Weihnachts-Erlebniswelt, danach automatisch wieder die reguläre Startseite.

**Fehlerbehebung**: Der Wechsel kann bis zu fünf Minuten dauern, weil der geplante Task den Cache in diesem Intervall aktualisiert. Wenn nichts passiert, prüfen Sie den Schalter **Aktiv** und die Zeitangabe in UTC.

---

### Anleitung: Eigene Startseite für eine Kundengruppe

**Ziel**: B2B-Kunden sehen dauerhaft eine andere Startseite als Endkunden.

**Zeitaufwand**: 5 Minuten

**Voraussetzungen**:
- Die B2B-Kundengruppe existiert unter **Einstellungen → Shop → Kundengruppen**
- Eine passende Erlebniswelt ist angelegt

**Schritte**:

1. **Konfiguration anlegen**
   - Navigieren zu: **Marketing → Startseiten Steuerung → Konfiguration hinzufügen**
   - **Name**: `B2B-Startseite`, **Priorität**: `10`, **Regel-Operator**: `UND`
   - **Landing Page**: Ihre B2B-Erlebniswelt
   - **Aktiv** einschalten und **Speichern**

2. **Kundengruppen-Regel anlegen**
   - **Regel-Typ**: `Kundengruppe`
   - Ihre B2B-Kundengruppe auswählen
   - **Regel hinzufügen** klicken

**Ergebnis**: Eingeloggte B2B-Kunden sehen die B2B-Startseite, alle anderen die reguläre.

**Fehlerbehebung**: Nicht eingeloggte Besucher gehören zur Standard-Kundengruppe des Verkaufskanals. Kombinieren Sie bei Bedarf zusätzlich mit einer Regel vom Typ **Kundenstatus**.

---

### Anleitung: Gäste und eingeloggte Kunden unterschiedlich ansprechen

**Ziel**: Neue Besucher bekommen eine werbliche Startseite, wiederkehrende Kunden eine sortimentsorientierte.

**Zeitaufwand**: 10 Minuten

**Schritte**:

1. **Erste Konfiguration für Gäste**
   - **Name**: `Startseite Gäste`, **Priorität**: `20`, **Regel-Operator**: `UND`
   - Regel vom Typ **Kundenstatus** mit dem Wert `Gast`

2. **Zweite Konfiguration für eingeloggte Kunden**
   - **Name**: `Startseite Kunden`, **Priorität**: `21`, **Regel-Operator**: `UND`
   - Regel vom Typ **Kundenstatus** mit dem Wert `Eingeloggt`

**Ergebnis**: Beide Gruppen sehen jeweils ihre Startseite. Die Prioritäten unterscheiden sich, damit die Reihenfolge eindeutig bleibt — da sich die Regeln gegenseitig ausschließen, greift ohnehin immer nur eine.

---

### Anleitung: Wochenend- oder Happy-Hour-Startseite

**Ziel**: Eine Startseite, die regelmäßig wiederkehrt statt einmalig zu laufen.

**Schritte**:

1. Konfiguration wie gewohnt anlegen und speichern
2. Für ein Wochenende: Regel-Typ **Tage der Woche**, Samstag und Sonntag in **einer** Regel auswählen
3. Für ein Zeitfenster am Tag: Regel-Typ **Zeit des Tages**, **Von** `18:00` und **Bis** `20:00`

**Ergebnis**: Die Erlebniswelt erscheint in jedem passenden Fenster erneut, ohne Enddatum.

**Fehlerbehebung**: Sollen beide Bedingungen gleichzeitig gelten (Samstag **und** zwischen 18 und 20 Uhr), setzen Sie den **Regel-Operator** auf `UND` und legen Sie beide Regeln in derselben Konfiguration an.

---

## Erweiterte Workflows

### Befristete Aktion über eine Dauerkonfiguration legen

**Komplexität**: Mittel

**Wann zu verwenden**: Sie haben eine dauerhafte Startseite je Kundengruppe und möchten für eine Woche eine Kampagne darüberlegen, ohne die bestehende Konfiguration anzufassen.

1. Lassen Sie die dauerhafte Konfiguration unverändert, zum Beispiel mit Priorität `10`
2. Legen Sie die Kampagne mit Priorität `50` und einer Regel vom Typ **Datumsbereich** an
3. Aktivieren Sie beide

Solange das Zeitfenster läuft, gewinnt die Kampagne. Endet es, greift die Dauerkonfiguration von selbst wieder — Sie müssen nichts abschalten.

---

## Schnellreferenz

| Aufgabe                        | Wichtige Schritte                                      | Regeltyp        |
| ------------------------------ | ------------------------------------------------------ | --------------- |
| Saisonale Aktion               | Hohe Priorität + Zeitfenster in UTC                    | Datumsbereich   |
| Startseite je Kundengruppe     | Kundengruppe auswählen                                 | Kundengruppe    |
| Gäste vs. eingeloggte Kunden   | Zwei Konfigurationen mit unterschiedlicher Priorität   | Kundenstatus    |
| Wiederkehrendes Tagesfenster   | Von/Bis-Uhrzeit setzen                                 | Zeit des Tages  |
| Wochenendaktion                | Mehrere Tage in einer Regel auswählen                  | Tage der Woche  |

---

## Best Practices

1. **Prioritäten eindeutig vergeben**: Nutzen Sie Abstufungen wie 10 / 20 / 50, damit Sie später Aktionen dazwischenschieben können, ohne alles neu zu nummerieren.
2. **Vorher testen**: Aktivieren Sie eine neue Konfiguration zunächst mit einem kurzen Zeitfenster und prüfen Sie das Ergebnis im Shop, bevor Sie die eigentliche Aktion einplanen.
3. **UTC einplanen**: Rechnen Sie Start- und Endzeit einmal sauber um und notieren Sie sich die Ortszeit im Namen der Konfiguration.
4. **Nach der Saison deaktivieren statt löschen**: Im nächsten Jahr passen Sie nur die Datumsangaben an.

## Was Sie vermeiden sollten

- ❌ Konfiguration ohne Regel mit Operator **UND** — sie übernimmt die Startseite dauerhaft
- ❌ Gleiche Priorität für zwei Konfigurationen, die gleichzeitig zutreffen können — das Ergebnis ist dann nicht vorhersehbar
- ❌ Ortszeit in eine Datumsbereich-Regel eintragen — die Aktion startet sonst um ein bis zwei Stunden versetzt
- ❌ Eine Aktion minutengenau planen — der Cache wird nur alle fünf Minuten aktualisiert
- ❌ Ein Uhrzeit-Fenster über Mitternacht anlegen — teilen Sie es auf zwei Konfigurationen auf
