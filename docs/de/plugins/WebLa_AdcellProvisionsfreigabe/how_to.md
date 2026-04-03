# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit ADCELL Provisionsfreigabe.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
ADCELL-API (offene Provisionen) → Plugin (Abgleich mit Shopware-Bestellungen) → Entscheidungen → ADCELL-API (Freigabe/Stornierung)
```

**Detaillierter Ablauf**:

1. Das Plugin ruft offene Provisionen von der ADCELL-API ab
2. Für jede Provision wird die zugehörige Shopware-Bestellung gesucht (über die Bestellnummer im Feld „reference")
3. Der Entscheidungsalgorithmus prüft in dieser Reihenfolge:
   - Ist ein Programm-Mapping vorhanden? → Wenn nein: **Nicht zugeordnet**
   - Existiert die Bestellung in Shopware? → Wenn nein: **Stornieren**
   - Ist die Bestellung storniert/fehlgeschlagen? → **Stornieren**
   - Wurde die Lieferung komplett retourniert? → **Stornieren**
   - Wurde die Zahlung komplett erstattet? → **Stornieren**
   - Ist die Zahlung offen/ausstehend? → **Stornieren**
   - Ist die Zahlung fehlgeschlagen? → **Stornieren**
   - Wurde noch nicht versendet? → **Stornieren**
   - Liegt eine Teilerstattung vor? → **Korrigieren**
   - Weicht der Warenkorbwert ab (über Toleranz)? → **Korrigieren**
   - Alles in Ordnung? → **Freigeben**
4. Die Entscheidungen werden als Batch gespeichert (Status: „Vorbereitet")
5. Sie prüfen die Ergebnisse und können Entscheidungen überschreiben
6. Beim Senden werden die Entscheidungen an die ADCELL-API übermittelt

### Betragsberechnung

Der **Shop-Wert** wird wie folgt berechnet:

```
Shop-Wert = Netto-Bestellwert − Netto-Versandkosten
```

Bei Brutto-Shops (B2C) wird die Mehrwertsteuer automatisch herausgerechnet. Dieser Wert wird mit dem ADCELL-Warenkorbwert verglichen.

---

## Häufige Workflows

### Anleitung: Ersteinrichtung

**Ziel**: Das Plugin vollständig einrichten und den ersten Abgleich durchführen.

**Zeitaufwand**: ca. 10 Minuten

**Schritte**:

1. **Plugin aktivieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen`
   - ADCELL Provisionsfreigabe aktivieren

2. **Test-Modus einschalten**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → ADCELL Provisionsfreigabe → Konfigurieren`
   - Test-Modus auf **An** setzen
   - Speichern

3. **ADCELL-Konto anlegen**
   - Navigieren zu: `Bestellungen → ADCELL Provisionsfreigabe → Konten`
   - Konto anlegen mit Benutzername und Passwort
   - Verbindung testen

4. **Programm-Mapping einrichten**
   - Navigieren zu: `Bestellungen → ADCELL Provisionsfreigabe → Programm-Mapping`
   - Konto auswählen → Programme laden
   - Für jedes aktive Programm ein Mapping zum passenden Verkaufskanal erstellen

5. **Ersten Abgleich durchführen**
   - Navigieren zu: `Bestellungen → ADCELL Provisionsfreigabe → Abgleich`
   - Konto und Zeitraum wählen (z.B. 30 Tage)
   - Abgleich starten und Ergebnisse prüfen

6. **Test-Modus deaktivieren** (nach erfolgreicher Prüfung)
   - Einstellungen → Test-Modus auf **Aus**

**Ergebnis**: Das Plugin ist einsatzbereit. Beim nächsten Abgleich werden Entscheidungen an ADCELL gesendet.

---

### Anleitung: Manuellen Abgleich durchführen

**Ziel**: Offene Provisionen prüfen und Entscheidungen an ADCELL senden.

**Schritte**:

1. **Abgleich starten**
   - Navigieren zu: `Bestellungen → ADCELL Provisionsfreigabe → Abgleich`
   - Konto und Zeitraum wählen
   - Abgleich starten

2. **Ergebnisse prüfen**
   - Filter verwenden, um gezielt Stornierungen oder Korrekturen zu sehen
   - Bei Bedarf einzelne Entscheidungen über das Dropdown überschreiben

3. **An ADCELL senden**
   - Auf **An ADCELL senden** klicken
   - Warten, bis die Bestätigung erscheint

**Ergebnis**: Alle Entscheidungen sind an ADCELL übermittelt. Der Batch erscheint im Dashboard.

---

### Anleitung: Vorbereiteten Batch fortsetzen

**Ziel**: Einen zuvor erstellten Abgleich, der noch nicht gesendet wurde, öffnen und senden.

**Schritte**:

1. **Dashboard öffnen**
   - Navigieren zu: `Bestellungen → ADCELL Provisionsfreigabe → Dashboard`

2. **Batch auswählen**
   - In der Tabelle „Letzte Abgleiche" den gewünschten Batch finden (Status: „Vorbereitet")
   - Auf den **Datums-Link** klicken oder über das **Kontextmenü** (drei Punkte) → „Details anzeigen"

3. **Prüfen und senden**
   - Entscheidungen überprüfen, ggf. anpassen
   - Auf **An ADCELL senden** klicken

---

### Anleitung: Automatische Freigabe einrichten

**Ziel**: Provisionen täglich automatisch abgleichen und freigeben lassen.

**Voraussetzungen**:
- Mindestens ein aktives ADCELL-Konto
- Programm-Mappings eingerichtet
- Shopware Message Queue Worker läuft

**Schritte**:

1. **Einstellungen konfigurieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → ADCELL Provisionsfreigabe → Konfigurieren`
   - **Automatische Freigabe aktivieren**: An
   - **Tage vor Auto-Accept-Deadline**: 3 (empfohlen)
   - Speichern

2. **Message Queue sicherstellen**
   - Prüfen Sie, dass `bin/console messenger:consume` als Cronjob oder Supervisor-Prozess läuft

**Ergebnis**: Das Plugin führt täglich automatisch einen Abgleich durch und sendet Entscheidungen an ADCELL.

---

## Schnellreferenz

| Aufgabe | Ort | Voraussetzungen |
| ------- | --- | --------------- |
| Konto anlegen | Konten | ADCELL-Zugangsdaten |
| Mapping einrichten | Programm-Mapping | Aktives Konto |
| Manueller Abgleich | Abgleich | Konto + Mapping |
| Batch fortsetzen | Dashboard → Klick auf Batch | Vorbereiteter Batch |
| Auto-Freigabe | Einstellungen | Konto + Mapping + Worker |

---

## Best Practices

1. **Erst testen**: Nutzen Sie den Test-Modus, um Entscheidungen zu prüfen, bevor Sie live gehen
2. **Regelmäßig abgleichen**: Führen Sie Abgleiche mindestens wöchentlich durch, um vor der Auto-Accept-Deadline zu handeln
3. **Mappings aktuell halten**: Neue ADCELL-Programme sollten zeitnah einem Verkaufskanal zugeordnet werden
4. **Mindest-Bestellalter setzen**: Nutzen Sie das Mindest-Bestellalter (z.B. 14 Tage), um Provisionen erst nach Ablauf der Widerrufsfrist freizugeben

## Was Sie vermeiden sollten

- Lassen Sie den **Test-Modus** nicht versehentlich im Produktivbetrieb aktiviert — Entscheidungen werden dann nicht gesendet
- Führen Sie den gleichen Abgleich nicht mehrfach durch, ohne vorherige Batches zu senden — die Dashboard-Statistik zählt nur gesendete Positionen, aber Sie erzeugen unnötige vorbereitete Batches
- Ändern Sie die **Toleranzwerte** nicht zu hoch, da sonst berechtigte Korrekturen unterbleiben
