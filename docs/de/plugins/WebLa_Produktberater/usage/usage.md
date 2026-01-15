# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten des Produkt Berater Plugins.

---

## Inhaltsverzeichnis

- [Produktberater verwalten](#produktberater-verwalten)
- [Fragen und Antworten](#fragen-und-antworten)
- [CMS-Integration](#cms-integration)
- [Kundenerlebnis in der Storefront](#kundenerlebnis-in-der-storefront)
- [Fehlerbehebung](#fehlerbehebung)

---

## Produktberater verwalten

### Neuen Berater erstellen

1. Navigieren Sie zu `Kataloge → Produktberater`
2. Klicken Sie auf **Hinzufügen**
3. Geben Sie einen **Titel** für den Berater ein
4. Konfigurieren Sie die gewünschten Einstellungen (siehe [Konfigurationseinstellungen](../configuration/settings.md))
5. Klicken Sie auf **Speichern**

### Berater bearbeiten

1. Navigieren Sie zu `Kataloge → Produktberater`
2. Klicken Sie auf den gewünschten Berater in der Liste
3. Nehmen Sie Ihre Änderungen vor
4. Klicken Sie auf **Speichern**

### Berater löschen

1. Navigieren Sie zu `Kataloge → Produktberater`
2. Wählen Sie den zu löschenden Berater aus
3. Klicken Sie auf das Papierkorb-Symbol oder wählen Sie "Löschen" aus dem Kontextmenü
4. Bestätigen Sie die Löschung

**Hinweis**: Das Löschen eines Beraters entfernt auch alle zugehörigen Fragen und Antworten unwiderruflich.

---

## Fragen und Antworten

Jeder Produktberater besteht aus einer oder mehreren Fragen. Jede Frage hat wiederum Antwortoptionen, die der Kunde auswählen kann.

### Fragen hinzufügen

1. Öffnen Sie einen Produktberater
2. Wechseln Sie zum Tab **Fragen**
3. Klicken Sie auf **Frage hinzufügen**
4. Konfigurieren Sie die Frage (Details siehe [Fragen konfigurieren](questions.md))
5. Speichern Sie die Frage

### Antworten hinzufügen

1. Öffnen Sie eine Frage
2. Wechseln Sie zum Tab **Antworten**
3. Klicken Sie auf **Antwort hinzufügen**
4. Konfigurieren Sie die Antwort (Details siehe [Antworten konfigurieren](answers.md))
5. Speichern Sie die Antwort

### Reihenfolge ändern

Die Reihenfolge der Fragen und Antworten wird über das **Position**-Feld gesteuert. Niedrigere Werte erscheinen zuerst.

---

## CMS-Integration

Der Produktberater wird über CMS-Blöcke in Ihre Erlebniswelten eingebunden.

### Berater in Erlebniswelt einbinden

1. Navigieren Sie zu `Inhalte → Erlebniswelten`
2. Öffnen Sie die gewünschte Erlebniswelt oder erstellen Sie eine neue
3. Wählen Sie einen Bereich aus, in den Sie den Berater einfügen möchten
4. Klicken Sie in der Sidebar auf **Blöcke**
5. Suchen Sie nach "Produktberater" im Block-Katalog (Kategorie: Sidebar)
6. Ziehen Sie den Block **Produktberater** in den gewünschten Bereich
7. Klicken Sie auf den platzierten Block
8. Wählen Sie im Konfigurationsbereich den gewünschten **Produktberater** aus
9. Speichern und veröffentlichen Sie die Erlebniswelt

### Block-Positionierung

Der Produktberater-Block ist für die Sidebar optimiert, kann aber auch in anderen Bereichen platziert werden:

- **Sidebar**: Ideale Position für begleitende Beratung
- **Hauptbereich**: Für prominente Platzierung als eigenständiges Element

---

## Kundenerlebnis in der Storefront

### Fragenverlauf

Kunden sehen den Berater als interaktiven Assistenten:

1. **Kopfzeile**: Zeigt alle Fragen als Fortschrittsanzeige
2. **Fragenbereich**: Aktuelle Frage mit Antwortoptionen
3. **Fußzeile**: Navigation (Zurück, Überspringen, Weiter) und Zusammenfassung der bisherigen Auswahl

### Antwortformate

Je nach Konfiguration sehen Kunden unterschiedliche Eingabeformate:

| Format | Darstellung |
|--------|-------------|
| Buttons | Klickbare Schaltflächen, optional mit Bildern |
| Auswahl | Dropdown-Menü mit Suchfunktion |
| Bereich | Zwei Schieberegler für Min/Max-Werte |
| Eingabe | Textfeld für freie Eingabe |

### Navigation

- **Zurück**: Kehrt zur vorherigen Frage zurück und verwirft die aktuelle Auswahl
- **Überspringen**: Springt zur nächsten Frage ohne Auswahl (nur bei optionalen Fragen)
- **Weiter**: Bestätigt die Auswahl und geht zur nächsten Frage

### Ergebnisanzeige

Nach Beantwortung aller Fragen (oder bei aktivierter Live-Aktualisierung bereits während des Durchlaufs):

1. **Abschlusstext**: Individualisierbare Nachricht
2. **Top-Empfehlung**: Das am besten passende Produkt wird hervorgehoben
3. **Produktliste**: Weitere passende Produkte in einer sortierbaren Liste
4. **Keine Ergebnisse**: Falls kein Produkt passt, wird eine entsprechende Meldung angezeigt

---

## Fehlerbehebung

### Berater wird nicht in der Storefront angezeigt

**Symptom**: Der CMS-Block ist platziert, aber nichts wird angezeigt.

**Mögliche Ursachen und Lösungen**:
1. **Berater nicht aktiv**: Prüfen Sie unter `Kataloge → Produktberater`, ob der Berater auf "Aktiv" gesetzt ist
2. **Erlebniswelt nicht veröffentlicht**: Speichern und veröffentlichen Sie die Erlebniswelt erneut
3. **Kein Berater ausgewählt**: Klicken Sie auf den Block und wählen Sie einen Berater aus
4. **Cache leeren**: Leeren Sie den Shopware-Cache unter `Einstellungen → System → Caches & Indizes`

### Keine Produkte in den Ergebnissen

**Symptom**: Der Berater zeigt "Kein Produkt gefunden" an.

**Mögliche Ursachen und Lösungen**:
1. **Zu restriktive Produktgruppe**: Prüfen Sie die verknüpfte Dynamische Produktgruppe
2. **Keine passenden Eigenschaften**: Stellen Sie sicher, dass Produkte die in den Antworten verknüpften Eigenschaften haben
3. **"Nicht passende ausschließen" aktiv**: Deaktivieren Sie diese Option für weniger strenge Filterung

### Fragen werden übersprungen

**Symptom**: Bestimmte Fragen werden nicht angezeigt.

**Mögliche Ursachen**:
1. **Sprunglogik**: Eine vorherige Antwort hat einen Sprung zu einer späteren Frage ausgelöst
2. **Position-Werte**: Prüfen Sie, ob alle Fragen korrekte Position-Werte haben

### Live-Aktualisierung funktioniert nicht

**Symptom**: Produkte werden nicht nach jeder Antwort aktualisiert.

**Lösung**: Aktivieren Sie "Live-Aktualisierung" in den Berater-Einstellungen.

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Fragen konfigurieren](questions.md)
- [Antworten konfigurieren](answers.md)
- [Anleitungen](../how_to.md)
