# Nutzungsanleitung

Diese Anleitung beschreibt alle Funktionen der Startseiten Steuerung.

---

## Inhaltsverzeichnis

- [Grundprinzip](#grundprinzip)
- [Konfigurationen verwalten](#konfigurationen-verwalten)
- [Die Regeltypen](#die-regeltypen)
- [Regeln kombinieren](#regeln-kombinieren)
- [Priorität und Verkaufskanäle](#prioritat-und-verkaufskanale)
- [Zeitzonen](#zeitzonen)
- [Cache-Verhalten](#cache-verhalten)
- [Fehlerbehebung](#fehlerbehebung)

---

## Grundprinzip

Bei jedem Aufruf der Startseite prüft das Plugin alle **aktiven** Konfigurationen, die für den aufgerufenen Verkaufskanal gelten — in absteigender Reihenfolge der Priorität. Die erste Konfiguration, deren Regeln zutreffen, gewinnt: Ihre Erlebniswelt wird als Startseite ausgespielt. Alle weiteren Konfigurationen werden nicht mehr geprüft.

Trifft keine Konfiguration zu, passiert schlicht nichts — die Startseite, die im Verkaufskanal hinterlegt ist, wird angezeigt.

```
Besucher öffnet Startseite → Aktive Konfigurationen nach Priorität prüfen
   → erste zutreffende gewinnt → deren Erlebniswelt wird angezeigt
   → keine trifft zu → normale Startseite des Verkaufskanals
```

---

## Konfigurationen verwalten

### Was sie bewirken

Eine Konfiguration ist die Verbindung aus einer Erlebniswelt und den Regeln, unter denen sie greift.

### So verwenden Sie sie

1. Öffnen Sie **Marketing → Startseiten Steuerung**
2. Die Liste zeigt alle Konfigurationen mit **Name**, **Landing Page** und **Aktiv**
3. **Konfiguration hinzufügen** legt eine neue an, ein Klick auf eine Zeile öffnet sie
4. Füllen Sie die Karte **Basis Informationen** aus und klicken Sie **Speichern**
5. Erst danach erscheint die Karte **Regeln**

**Ort**: Marketing → Startseiten Steuerung

> Sie brauchen die Berechtigung **promotion.viewer** zum Ansehen und **promotion.editor** zum Bearbeiten. Regeln lassen sich außerdem nur in der Systemsprache Ihres Shops anlegen.

Alle Felder der Karte **Basis Informationen** sind in der [Einstellungsreferenz](../configuration/settings.md) beschrieben.

### Tipps & Best Practices

- Vergeben Sie sprechende Namen mit Jahreszahl — nach zwei Saisons wissen Sie sonst nicht mehr, welche Aktion welche war
- Legen Sie die Erlebniswelt vollständig an, **bevor** Sie die Konfiguration aktivieren

---

## Die Regeltypen

Regeln legen Sie in der Karte **Regeln** an: Regel-Typ wählen, Werte ausfüllen, **Regel hinzufügen** klicken. Die Regel erscheint danach in der Tabelle darunter und lässt sich dort über das Kontextmenü wieder löschen.

### Datumsbereich

Ein einmaliges Zeitfenster mit Datum **und** Uhrzeit. Die Regel trifft zu, solange der aktuelle Zeitpunkt zwischen **Von** und **Bis** liegt.

**Anwendung**: Weihnachtsaktion vom 01.12. 00:00 Uhr bis 26.12. 23:59 Uhr.

> Die Werte werden in UTC gespeichert und angezeigt — siehe [Zeitzonen](#zeitzonen).

### Kundengruppe

Trifft zu, wenn der Besucher der ausgewählten Kundengruppe angehört. Für nicht eingeloggte Besucher gilt die Standard-Kundengruppe des Verkaufskanals.

**Anwendung**: Eine eigene Startseite für Ihre B2B-Kunden mit Fokus auf Großgebinde und Konditionen.

### Kundenstatus

Trifft zu, je nachdem ob der Besucher eingeloggt ist:

- **Gast**: nur für Besucher, die nicht eingeloggt sind
- **Eingeloggt**: nur für angemeldete Kunden

**Anwendung**: Neukunden-Ansprache mit Vorteilsargumenten für Gäste, Sortiments- und Nachkauf-Fokus für eingeloggte Kunden.

### Zeit des Tages

Ein täglich wiederkehrendes Uhrzeit-Fenster von **Von** bis **Bis**, unabhängig vom Datum.

**Anwendung**: Eine „Happy Hour"-Startseite jeden Tag von 18:00 bis 20:00 Uhr.

> Das Fenster kann nicht über Mitternacht hinausgehen: **Von** `22:00` bis **Bis** `02:00` trifft nie zu. Legen Sie für ein Nachtfenster zwei Konfigurationen an — eine von 22:00 bis 23:59 und eine von 00:00 bis 02:00.

### Tage der Woche

Trifft an den ausgewählten Wochentagen zu, Mehrfachauswahl möglich.

**Anwendung**: Eine Wochenend-Startseite für Samstag und Sonntag.

---

## Regeln kombinieren

Alle Regeln einer Konfiguration werden mit **einem** Operator verknüpft — **UND** oder **ODER**, eingestellt in der Karte **Basis Informationen**.

| Ziel                                              | Regeln                                       | Operator |
| ------------------------------------------------- | -------------------------------------------- | -------- |
| Weihnachtsseite nur für Endkunden                 | Datumsbereich + Kundengruppe                 | UND      |
| Wochenendseite für Samstag und Sonntag            | Tage der Woche (beide Tage in einer Regel)   | UND      |
| Aktion für Gäste **oder** an bestimmten Tagen     | Kundenstatus + Tage der Woche                | ODER     |

Brauchen Sie eine Mischung aus UND und ODER, teilen Sie das auf zwei Konfigurationen mit unterschiedlicher Priorität auf.

---

## Priorität und Verkaufskanäle

Treffen mehrere Konfigurationen gleichzeitig zu, gewinnt die mit der höchsten **Priorität** (1 bis 100). Bei gleicher Priorität ist die Reihenfolge nicht garantiert — vergeben Sie deshalb eindeutige Werte.

Das Feld **Verkaufskanal** grenzt eine Konfiguration auf einen Kanal ein. Bleibt es leer, gilt sie für alle Kanäle. Eine kanalspezifische Konfiguration überstimmt eine globale nur dann, wenn ihre Priorität höher ist — der Verkaufskanal allein entscheidet nicht.

---

## Zeitzonen

Regeln vom Typ **Datumsbereich** werden in UTC gespeichert und in der Übersicht auch in UTC angezeigt; darauf weist ein Hinweis unter der Regel-Tabelle hin. Auch die Auswertung erfolgt in UTC.

Rechnen Sie deshalb Ihre Ortszeit um: Für Deutschland liegt UTC im Winter eine Stunde, im Sommer zwei Stunden zurück. Soll eine Aktion am 1. Dezember um 00:00 Uhr deutscher Zeit starten, tragen Sie **30.11., 23:00** ein.

---

## Cache-Verhalten

Das Plugin arbeitet bei aktivem HTTP-Cache korrekt: Die ermittelte Erlebniswelt fließt in den Cache-Schlüssel ein, sodass verschiedene Kundengruppen ihre jeweils eigene gecachte Startseite bekommen.

Zeitbasierte Regeln ändern das Ergebnis, ohne dass jemand im Shop etwas speichert. Deshalb bringt das Plugin einen geplanten Task (`webla.clean_up_rules`) mit, der alle fünf Minuten prüft, ob sich die Menge der zutreffenden Konfigurationen geändert hat, und den betroffenen Cache leert.

> Damit das funktioniert, müssen der Scheduled Task Runner und der Message Queue Consumer Ihres Shops laufen. Fragen Sie im Zweifel Ihren Hoster oder Ihre Agentur.

Ein Wechsel kann daher bis zu fünf Minuten nach dem eingestellten Zeitpunkt sichtbar werden. Planen Sie bei minutengenauen Aktionen einen entsprechenden Vorlauf ein.

---

## Fehlerbehebung

### Die Startseite wechselt nicht

**Symptom**: Der Zeitpunkt ist erreicht, aber es erscheint weiter die alte Startseite.

**Ursache**: Die Konfiguration ist inaktiv, der Verkaufskanal passt nicht, die Zeit wurde in Ortszeit statt UTC eingetragen, oder eine Konfiguration mit höherer Priorität greift.

**Lösung**: Prüfen Sie in dieser Reihenfolge: Schalter **Aktiv**, Feld **Verkaufskanal**, die Zeitangabe in UTC, danach die Prioritäten aller aktiven Konfigurationen. Warten Sie anschließend bis zu fünf Minuten oder leeren Sie den Cache manuell.

### Es erscheint die falsche Erlebniswelt

**Symptom**: Zwei Aktionen laufen parallel, angezeigt wird die unerwünschte.

**Ursache**: Beide Konfigurationen treffen zu, die andere hat die höhere Priorität.

**Lösung**: Erhöhen Sie die Priorität der gewünschten Konfiguration oder grenzen Sie die Regeln der anderen enger ein.

### Eine Konfiguration greift immer

**Symptom**: Eine Konfiguration übernimmt die Startseite dauerhaft, obwohl sie nur zeitweise gelten soll.

**Ursache**: Sie enthält keine Regel und hat den Operator **UND**. Ohne Regel ist die UND-Bedingung formal erfüllt.

**Lösung**: Legen Sie mindestens eine Regel an oder deaktivieren Sie die Konfiguration.

### Die Karte „Regeln" fehlt

**Symptom**: Nach dem Anlegen sehen Sie nur die Basis Informationen.

**Ursache**: Die Konfiguration wurde noch nicht gespeichert.

**Lösung**: Klicken Sie **Speichern**. Danach erscheint die Karte.

### Die Schaltfläche „Regel hinzufügen" ist deaktiviert

**Symptom**: Regeln lassen sich nicht anlegen.

**Ursache**: Fehlende Berechtigung **promotion.editor**, oder die Administration steht nicht auf der Systemsprache.

**Lösung**: Wechseln Sie oben rechts auf die Systemsprache Ihres Shops beziehungsweise lassen Sie sich die Berechtigung zuweisen.

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
