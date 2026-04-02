# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten des Plugins ADCELL Provisionsfreigabe.

---

## Inhaltsverzeichnis

- [Dashboard](#dashboard)
- [Konten verwalten](#konten-verwalten)
- [Programm-Mapping](#programm-mapping)
- [Abgleich durchführen](#abgleich-durchführen)
- [Batch-Details und Historie](#batch-details-und-historie)
- [Automatische Freigabe](#automatische-freigabe)
- [Fehlerbehebung](#fehlerbehebung)

---

## Dashboard

**Ort**: Bestellungen → ADCELL Provisionsfreigabe → Dashboard

Das Dashboard bietet Ihnen einen schnellen Überblick über die Aktivitäten des Plugins.

### Letzte 30 Tage

Zeigt die Gesamtzahl der **gesendeten** Entscheidungen der letzten 30 Tage, aufgeteilt in:

- **Freigegeben**: Provisionen, die an ADCELL als „akzeptiert" gemeldet wurden
- **Storniert**: Provisionen, die storniert wurden (z.B. Bestellung nicht gefunden, Retoure)
- **Korrigiert**: Provisionen, bei denen der Warenkorbwert angepasst wurde
- **Offen**: Provisionen ohne Mapping oder übersprungene Positionen

### Letzte Abgleiche

Tabelle der letzten 10 durchgeführten Abgleiche. Sie können jeden Eintrag über den **Datums-Link** oder das **Kontextmenü** (drei Punkte) öffnen, um die Details einzusehen oder einen vorbereiteten Abgleich fortzusetzen.

### Schnellzugriff

Buttons für häufige Aktionen: **Neuer Abgleich** und **Konten verwalten**.

---

## Konten verwalten

**Ort**: Bestellungen → ADCELL Provisionsfreigabe → Konten

Hier verwalten Sie Ihre ADCELL-Zugangsdaten. Das Plugin unterstützt mehrere Konten.

### Konto anlegen

1. Klicken Sie auf **Konto anlegen**
2. Vergeben Sie einen **Namen** zur Identifikation (z.B. „Hauptkonto")
3. Tragen Sie Ihren ADCELL **Benutzernamen** und **Passwort** ein
4. Klicken Sie auf **Speichern**

Das Passwort wird verschlüsselt in der Datenbank gespeichert (AES-256-GCM).

### Verbindung testen

Nach dem Speichern können Sie über den Button **Verbindung testen** prüfen, ob die Zugangsdaten korrekt sind. Bei Erfolg wird der Verbindungsstatus auf „Verbunden" gesetzt.

### Konto deaktivieren

Setzen Sie den Schalter **Aktiv** auf Aus, um ein Konto vorübergehend von automatischen Abgleichen auszuschließen, ohne es zu löschen.

---

## Programm-Mapping

**Ort**: Bestellungen → ADCELL Provisionsfreigabe → Programm-Mapping

Das Programm-Mapping verknüpft Ihre ADCELL-Programme mit Shopware-Verkaufskanälen. Provisionen ohne gültiges Mapping werden als „Nicht zugeordnet" markiert.

### Mapping einrichten

1. Wählen Sie ein **Konto** aus der Dropdown-Liste
2. Klicken Sie auf **Programme laden** — das Plugin fragt die verfügbaren Programme von der ADCELL-API ab
3. Klicken Sie auf **Mapping anlegen**
4. Wählen Sie das **ADCELL-Programm** und den zugehörigen **Sales Channel**
5. Aktivieren Sie den Schalter **Aktiv**
6. Speichern Sie das Mapping

### Tipps

- Jedes ADCELL-Programm sollte genau einem Verkaufskanal zugeordnet werden
- Deaktivieren Sie Mappings für Programme, die Sie nicht mehr nutzen
- Programme ohne Mapping führen zu der Entscheidung „Nicht zugeordnet" (NOT_MAPPED)

---

## Abgleich durchführen

**Ort**: Bestellungen → ADCELL Provisionsfreigabe → Abgleich

Der Abgleich ist ein 3-Schritte-Prozess:

### Schritt 1: Parameter wählen

1. Wählen Sie das **Konto** aus
2. Legen Sie den **Zeitraum** fest — das ist der Zeitraum der Auto-Accept-Deadline, nicht das Erstellungsdatum der Provision. Nutzen Sie die **Schnellauswahl** (7, 14, 30, 60, 90 Tage) für gängige Zeiträume
3. Optional: Wählen Sie ein bestimmtes **Programm** oder lassen Sie „Alle Programme" ausgewählt
4. Klicken Sie auf **Abgleich starten**

### Schritt 2: Verarbeitung

Das Plugin:
- Ruft offene Provisionen von der ADCELL-API ab
- Filtert nach dem gewählten Zeitraum (Auto-Accept-Datum)
- Lädt die zugehörigen Shopware-Bestellungen
- Prüft Status und Beträge
- Trifft Entscheidungen nach dem Entscheidungsalgorithmus

### Schritt 3: Ergebnisse prüfen und senden

Nach dem Abgleich sehen Sie eine Ergebnistabelle mit allen Provisionen:

| Spalte | Beschreibung |
| ------ | ------------ |
| Provisions-ID | Die ADCELL Commission-ID |
| Bestellnr. | Die Shopware-Bestellnummer |
| Programm | Das ADCELL-Programm |
| ADCELL-Wert | Der von ADCELL gemeldete Warenkorbwert |
| Shop-Wert | Der tatsächliche Netto-Bestellwert (ohne Versand) |
| Differenz | Abweichung zwischen ADCELL- und Shop-Wert |
| Entscheidung | Die automatisch getroffene Entscheidung (Badge) |
| Überschreiben | Dropdown zum manuellen Ändern der Entscheidung |
| Grund | Begründung für die Entscheidung |

#### Entscheidungen überschreiben

Sie können jede Entscheidung vor dem Senden manuell ändern:

- Wählen Sie im **Überschreiben**-Dropdown eine andere Entscheidung
- Bei **Korrigieren** können Sie zusätzlich den korrigierten Betrag anpassen
- Überschriebene Einträge werden als solche markiert

#### Filter verwenden

Über die **Filterleiste** können Sie die Anzeige auf bestimmte Entscheidungen einschränken (z.B. nur Stornierungen anzeigen).

#### Ergebnisse senden

Klicken Sie auf **An ADCELL senden**, um alle Entscheidungen (außer „Nicht zugeordnet" und „Überspringen") an ADCELL zu übermitteln. Im Test-Modus wird dieser Schritt übersprungen.

---

## Batch-Details und Historie

**Ort**: Dashboard → Letzte Abgleiche → Klick auf Datums-Link oder Kontextmenü → „Details anzeigen"

Jeder durchgeführte Abgleich wird als Batch gespeichert. Sie können jederzeit:

- **Vorbereitete Batches** öffnen, Entscheidungen anpassen und dann senden
- **Gesendete Batches** einsehen, um die Ergebnisse zu überprüfen
- Die **Zusammenfassung** mit Gesamtzahlen und Dauer einsehen

### Batch-Status

| Status | Bedeutung |
| ------ | --------- |
| Vorbereitet | Abgleich durchgeführt, noch nicht an ADCELL gesendet |
| Gesendet | Alle Entscheidungen erfolgreich an ADCELL übermittelt |
| Abgeschlossen | Teilweise gesendet (einige Positionen konnten nicht gesendet werden) |

---

## Automatische Freigabe

Wenn aktiviert (siehe [Einstellungen](../configuration/settings.md)), führt ein Scheduled Task täglich automatisch folgende Schritte durch:

1. Lädt alle aktiven ADCELL-Konten
2. Führt für jedes Konto einen Abgleich durch (Zeitraum: heute bis heute + konfigurierte Tage)
3. Sendet alle Entscheidungen automatisch an ADCELL
4. Protokolliert Ergebnis und eventuelle Fehler

Die automatische Freigabe funktioniert über Shopwares Message Queue und erfordert einen laufenden Worker (`bin/console messenger:consume`).

---

## Fehlerbehebung

### Abgleich liefert keine Ergebnisse

**Symptom**: Nach dem Start des Abgleichs werden 0 Positionen angezeigt.

**Mögliche Ursachen**:
- Der gewählte Zeitraum enthält keine Provisionen mit Auto-Accept-Deadline in diesem Bereich
- Es gibt keine offenen Provisionen im ADCELL-Konto
- Das Programm-Mapping fehlt (Provisionen werden dann als „Nicht zugeordnet" gezählt, aber die Gesamtzahl könnte 0 sein wenn gar keine Provisionen existieren)

**Lösung**: Wählen Sie einen größeren Zeitraum (z.B. 90 Tage) und prüfen Sie, ob im ADCELL-Backend offene Provisionen vorhanden sind.

### Verbindungstest schlägt fehl

**Symptom**: „Verbindung fehlgeschlagen" nach dem Testen eines Kontos.

**Lösung**: Prüfen Sie Benutzername und Passwort im ADCELL-Backend. Stellen Sie sicher, dass API-Zugang für Ihr Konto freigeschaltet ist.

### Entscheidungen werden nicht gesendet

**Symptom**: Klick auf „An ADCELL senden" zeigt keine Reaktion oder Fehler.

**Mögliche Ursachen**:
- **Test-Modus** ist aktiviert — Entscheidungen werden gespeichert, aber nicht gesendet
- Der Batch wurde bereits gesendet (Status „Gesendet")

**Lösung**: Prüfen Sie den Test-Modus unter Erweiterungen → Meine Erweiterungen → ADCELL Provisionsfreigabe → Konfigurieren.

### Automatische Freigabe läuft nicht

**Symptom**: Keine neuen automatischen Abgleiche im Dashboard sichtbar.

**Mögliche Ursachen**:
- Automatische Freigabe ist nicht aktiviert in den Einstellungen
- Der Shopware Message Queue Worker läuft nicht
- Kein aktives ADCELL-Konto vorhanden

**Lösung**: Aktivieren Sie die automatische Freigabe, stellen Sie sicher, dass `bin/console messenger:consume` läuft, und prüfen Sie, ob mindestens ein Konto als „Aktiv" markiert ist.

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen und Workflows](../how_to.md)
