# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Plugin Wunsch-Lieferdatum für Kunden.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Kunde legt Produkte in den Warenkorb
        ↓
Plugin berechnet frühestmögliches Lieferdatum
  (Produktlieferzeit + Pufferzeit + Bestellschnitt-Uhrzeit)
        ↓
Feiertage und gesperrte Wochentage werden übersprungen
        ↓
Kalender zeigt nur wählbare Termine ab dem Mindestdatum
        ↓
Kunde wählt Wunschliefertermin
        ↓
Datum wird im Warenkorb gespeichert
        ↓
Bei Bestellabschluss: Datum wird mit der Bestellung gespeichert
        ↓
Termin sichtbar in Bestellbestätigung, Admin-Bestellübersicht und Detailansicht
```

**Beispielablauf**:
1. Kunde legt ein Produkt mit "1-2 Wochen" Lieferzeit in den Warenkorb
2. Die Plugin-Konfiguration hat eine Fallback-Pufferzeit von 2 Tagen
3. Das Plugin berechnet: 2 Wochen = 14 Tage → frühestmöglich wäre der 14. Tag ab heute
4. Fällt dieser Tag auf einen Samstag (gesperrt), verschiebt sich das Minimum auf den nächsten Montag
5. Ist der Montag ein Feiertag, rückt es weiter auf den Dienstag
6. Der Kalender öffnet sich mit diesem Dienstag als frühestmöglichem wählbaren Datum

---

## Häufige Workflows

### Anleitung: Ersteinrichtung des Plugins

**Ziel**: Das Plugin nach der Installation grundlegend konfigurieren

**Schritte**:

1. **Plugin aktivieren**
   - Navigieren Sie zu: `Erweiterungen → Meine Erweiterungen`
   - Suchen Sie "Wunsch-Lieferdatum für Kunden" und klicken Sie auf **Aktivieren**

2. **Plugin konfigurieren öffnen**
   - Klicken Sie neben dem Plugin auf die drei Punkte → **Konfigurieren**
   - Alternativ: `Erweiterungen → Meine Erweiterungen → Wunsch-Lieferdatum → Konfigurieren`

3. **Bundesland auswählen**
   - Wählen Sie im Feld **"Bundesland"** das Bundesland aus, in dem Ihr Lager/Versandzentrum liegt
   - Damit werden automatisch die entsprechenden Feiertage geladen

4. **Nicht verfügbare Wochentage festlegen**
   - Im Feld **"Nicht verfügbare Tage"** wählen Sie die Wochentage aus, an denen Sie nicht liefern
   - Typischerweise: Samstag und Sonntag

5. **Fallback-Vorlaufzeit einstellen**
   - Im Feld **"Fallback Lieferdatum Vorlaufzeit"** geben Sie die Mindest-Pufferzeit ein (z.B. "2")
   - Im Feld **"Vorlaufzeit Einheit (Fallback)"** wählen Sie die Einheit (z.B. "Tage")

6. **Bestellschnitt-Uhrzeit festlegen (optional)**
   - Im Feld **"Lieferdatum Vorlaufzeit, nutze nächste Tage nach"** tragen Sie Ihren Bestellschnitt ein (z.B. "14:00")

7. **Einstellungen speichern**
   - Klicken Sie auf **Speichern**

**Ergebnis**: Im Checkout erscheint jetzt das Datumsfeld mit einem korrekt berechneten Mindestdatum.

---

### Anleitung: Betriebsferien als Sperrzeit eintragen

**Ziel**: Mehrere aufeinanderfolgende Tage als Betriebsferien sperren

**Schritte**:

1. **Feiertagsverwaltung öffnen**
   - Navigieren Sie zu: `Einstellungen → Erweiterungen → Wunschlieferdatum`

2. **Jeden Ferientag einzeln eintragen**
   - Klicken Sie auf **"Datum hinzufügen"**
   - Geben Sie im Feld **"Name"** z.B. "Betriebsferien" ein
   - Wählen Sie das gewünschte Datum aus
   - Klicken Sie auf **Speichern**
   - Wiederholen Sie diesen Vorgang für jeden Tag der Betriebsferien

**Ergebnis**: Die eingetragenen Tage werden im Checkout-Kalender für Kunden nicht mehr auswählbar angezeigt.

**Tipp**: Tragen Sie die Betriebsferien rechtzeitig vor Beginn ein, damit Kunden, die kurz vor den Ferien bestellen, keine Termine während der Ferien wählen können.

---

### Anleitung: Produktspezifische Vorlaufzeit festlegen

**Ziel**: Einem Produkt mit langer Herstellungszeit eine eigene Vorlaufzeit geben

**Schritte**:

1. **Produkt öffnen**
   - Navigieren Sie zu: `Kataloge → Produkte`
   - Öffnen Sie das gewünschte Produkt per Klick

2. **Zum Tab "Weitere Felder" wechseln**
   - Klicken Sie auf den Tab **"Weitere Felder"**

3. **Vorlaufzeit eintragen**
   - Suchen Sie das Feld **"Lieferdatum Vorlaufzeit"**
   - Geben Sie die Anzahl der Tage (oder Stunden, je nach Plugin-Konfiguration) ein, die das Produkt Vorlaufzeit benötigt
   - Beispiel: "14" für 14 Tage

4. **Produkt speichern**
   - Klicken Sie auf **Speichern**

**Ergebnis**: Sobald dieses Produkt im Warenkorb liegt, wird das frühestmögliche Lieferdatum automatisch um mindestens 14 Tage in die Zukunft verschoben.

---

### Anleitung: Plugin nur für bestimmte Versandarten aktivieren

**Ziel**: Den Wunschliefertermin nur bei Expresslieferung anbieten, nicht bei Standard-Versand

**Schritte**:

1. **Plugin-Konfiguration öffnen**
   - Navigieren Sie zu: `Erweiterungen → Meine Erweiterungen → Wunsch-Lieferdatum → Konfigurieren`

2. **"Aktiv" deaktivieren**
   - Schalten Sie den Schalter **"Aktiv"** aus

3. **Versandarten auswählen**
   - Im Feld **"Nur aktiv für diese Versandarten"** wählen Sie die gewünschten Versandarten aus (z.B. "Expresslieferung")

4. **Speichern**
   - Klicken Sie auf **Speichern**

**Ergebnis**: Der Wunschliefertermin wird nun nur angezeigt, wenn der Kunde im Checkout eine der ausgewählten Versandarten wählt.

---

### Anleitung: Bestellungen nach Wunschliefertermin filtern

**Ziel**: Alle Bestellungen mit Wunschliefertermin am heutigen Tag anzeigen

**Schritte**:

1. **Bestellübersicht öffnen**
   - Navigieren Sie zu: `Bestellungen → Übersicht`

2. **Filterbereich öffnen**
   - Klicken Sie auf das Filter-Symbol oder den Button **"Filter"** über der Bestellliste

3. **Datumsfilter setzen**
   - Suchen Sie den Filter **"Wunschliefertermin"**
   - Geben Sie im Feld **"Von"** das heutige Datum ein
   - Geben Sie im Feld **"Bis"** das heutige Datum ein

4. **Filter anwenden**
   - Klicken Sie auf **"Anwenden"** oder der Filter wird automatisch aktiv

**Ergebnis**: Die Bestellliste zeigt nur Bestellungen an, bei denen der Wunschliefertermin auf den heutigen Tag fällt.

---

### Anleitung: Feiertage manuell aktualisieren

**Ziel**: Die Feiertagsliste sofort aktualisieren, ohne auf die stündliche Automatik zu warten

**Via Admin (geplante Tasks)**:

1. Navigieren Sie zu: `Einstellungen → System → Geplante Tasks`
2. Suchen Sie den Task **"webla-update-storefront-holidays"**
3. Klicken Sie auf **"Ausführen"**

**Via Kommandozeile** (für Entwickler/Systemadministratoren):

```bash
bin/console webla:update-holidays
```

**Ergebnis**: Die Feiertagsliste wird sofort mit den aktuellen Daten von openholidaysapi.org aktualisiert.

---

## Schnellreferenz

| Aufgabe                              | Ort im Admin                                              | Wichtige Einstellung               |
| ------------------------------------ | --------------------------------------------------------- | ---------------------------------- |
| Plugin aktivieren/deaktivieren       | Erweiterungen → Meine Erweiterungen                       | Schalter "Aktiv"                   |
| Pufferzeit konfigurieren             | Plugin-Konfiguration                                      | Fallback Vorlaufzeit               |
| Feiertage / Sperrtermine verwalten   | Einstellungen → Erweiterungen → Wunschlieferdatum         | "Datum hinzufügen"-Button          |
| Produktspezifische Vorlaufzeit       | Kataloge → Produkte → Weitere Felder                      | Lieferdatum Vorlaufzeit            |
| Kategorie-Vorlaufzeit                | Kataloge → Kategorien → Weitere Felder                    | Lieferdatum Vorlaufzeit            |
| Versandart-Vorlaufzeit               | Einstellungen → Versand → Versandarten → Weitere Felder   | Vorlaufzeit                        |
| Bestellungen nach Termin filtern     | Bestellungen → Übersicht → Filter                         | Filter "Wunschliefertermin"        |
| Kundenspezifische Liefertage         | Kunden → Übersicht → [Kunde] → Weitere Felder             | Liefertag(e)                       |

---

## Best Practices

1. **Bundesland immer korrekt setzen**: Wählen Sie das Bundesland Ihres Lagers, nicht das Ihres Firmensitzes, da die Feiertage für den Versandstandort relevant sind.

2. **Bestellschnitt-Uhrzeit realistisch wählen**: Wenn Ihre Logistik Bestellungen bis 14:00 Uhr bearbeitet, tragen Sie "14:00" ein. Bestellungen nach diesem Zeitpunkt erhalten dann automatisch das nächste verfügbare Datum.

3. **Fallback-Vorlaufzeit als Minimum nutzen**: Setzen Sie die Fallback-Vorlaufzeit auf die minimale Produktionszeit Ihres einfachsten Produkts. Für komplexere Produkte setzen Sie dann produktspezifische Vorlaufzeiten.

4. **Betriebsferien rechtzeitig eintragen**: Tragen Sie Betriebsferien mindestens so früh ein, wie Ihre längste Produktvorlaufzeit beträgt, damit keine unrealistischen Termine vergeben werden.

5. **Maximales Lieferdatum setzen**: Setzen Sie ein sinnvolles Maximum (z.B. 3 Monate), um zu vermeiden, dass Kunden Termine sehr weit in der Zukunft auswählen.

## Was Sie vermeiden sollten

- Alle Wochentage als "nicht verfügbar" markieren — dann gibt es keine wählbaren Termine
- Eine zu kurze Fallback-Vorlaufzeit (z.B. 0 Tage) — Kunden könnten das heutige Datum wählen, bevor die Ware versandbereit ist
- Feiertage manuell pflegen, wenn die automatische API-Aktualisierung aktiv ist — manuelle Einträge werden nicht überschrieben, können aber die automatischen Einträge duplizieren
