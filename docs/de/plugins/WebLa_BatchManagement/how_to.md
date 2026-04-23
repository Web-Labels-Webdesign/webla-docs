# Anleitungen

Schritt-für-Schritt-Workflows für häufige Aufgaben mit **Charge-Management**.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Charge anlegen → Auftrag erreicht Buchungsstatus → Chargen werden gebucht
                                                ↓
Chargen-Historie im Auftrag ← Auftrag → Bestandsneuberechnung (optional)
```

**Beispielablauf**:

1. Shop-Administrator legt Charge mit 10 kg und Verfallsdatum an.
2. Kunde bestellt 2 Stück eines Produkts mit 0,5 kg Gewicht.
3. Auftrag wechselt in den konfigurierten Status (z. B. `In Bearbeitung`).
4. Plugin bucht 1 kg (2 × 0,5 kg) aus der Charge mit dem aktuellsten Verfallsdatum.
5. Restmenge der Charge: 9 kg. Wenn *Lagerbestand berechnen* aktiv ist, wird der Produktbestand aktualisiert.

---

## Häufige Workflows

### Anleitung: Erste Charge für ein Produkt anlegen

**Ziel**: Für ein bestehendes Produkt eine einsatzbereite Charge erfassen.

**Zeitaufwand**: 2–3 Minuten

**Voraussetzungen**:
- Produkt mit gesetztem Gewicht existiert.
- Plugin ist installiert und aktiv.

**Schritte**:

1. **Zur Chargenverwaltung navigieren**
   - Öffnen Sie `Kataloge → Chargen`.

2. **Neue Charge starten**
   - Klicken Sie oben rechts auf **Charge hinzufügen**.

3. **Stammdaten erfassen**
   - Name z. B. `Sommerernte 2026`.
   - Chargennummer z. B. `SE-2026-001`.
   - Aktiv-Schalter einschalten.

4. **Produkt und Mengen setzen**
   - Produkt aus der Liste auswählen.
   - Menge eintragen (z. B. `10.000` für 10 kg).
   - Verfallsdatum setzen.

5. **Speichern**
   - Klicken Sie auf **Speichern**.

**Ergebnis**: Die Charge erscheint in der Chargenübersicht. Bei aktivierter Bestandsberechnung wird der Produktlagerbestand unmittelbar angepasst.

**Fehlerbehebung**: Schlägt das Speichern fehl, prüfen Sie, ob alle Pflichtfelder gefüllt sind und das Verfallsdatum in der Zukunft liegt.

---

### Anleitung: Chargenbuchung per Auftragsstatus aktivieren

**Ziel**: Die automatische Verbrauchsbuchung für eingehende Bestellungen einrichten.

**Zeitaufwand**: 1 Minute

**Voraussetzungen**:
- Plugin ist installiert und aktiv.

**Schritte**:

1. **Plugin-Konfiguration öffnen**
   - Navigieren Sie zu `Erweiterungen → Meine Erweiterungen → Charge-Management → … → Konfigurieren`.

2. **Buchungsstatus wählen**
   - Unter *Grundeinstellungen* den Status wählen, bei dem gebucht werden soll (z. B. `In Bearbeitung`).

3. **Optional: Rückbuchungsstatus konfigurieren**
   - Unter *Auftragsstatus, der eine Chargenbuchung umkehrt* den Status `Abgebrochen` auswählen.
   - *Soll die Verwendung … umgekehrt werden* aktiv lassen.

4. **Speichern**
   - Klicken Sie auf **Speichern**.

**Ergebnis**: Ab sofort werden bei jedem Statuswechsel passende Chargen gebucht bzw. zurückgebucht.

---

### Anleitung: Produktzusammensetzung einrichten

**Ziel**: Ein Produkt so konfigurieren, dass sein Bestand aus mehreren Bestandteilen berechnet wird.

**Zeitaufwand**: 3–5 Minuten

**Voraussetzungen**:
- Das Hauptprodukt und alle Bestandteilprodukte sind im Katalog vorhanden.

**Schritte**:

1. **Produkt öffnen**
   - `Kataloge → Produkte → [Hauptprodukt]`.

2. **Zum Tab Spezifikationen wechseln**
   - Klicken Sie auf **Spezifikationen** in der Navigation.

3. **Zusammensetzung hinzufügen**
   - Im Bereich *Zusammensetzung* auf **Zusammensetzung hinzufügen** klicken.
   - Bestandteilprodukt auswählen und Menge pro Einheit eintragen.
   - **Speichern**.

4. **Schritt 3 für jedes weitere Bestandteil wiederholen**.

**Ergebnis**: Bei einer Bestellung des Hauptprodukts werden Chargen jedes Bestandteils gemäß der angegebenen Mengen abgebucht.

---

### Anleitung: Rückruf einer Charge durchführen

**Ziel**: Bei problematischer Ware herausfinden, welche Bestellungen betroffen sind.

**Zeitaufwand**: 5 Minuten

**Schritte**:

1. **Charge finden**
   - `Kataloge → Chargen` → nach Chargennummer suchen.

2. **Detailansicht öffnen**
   - Klicken Sie auf die betroffene Charge.

3. **Historie einsehen**
   - Scrollen Sie zur Karte **Bestellungen**.

4. **Aufträge prüfen**
   - Klicken Sie auf jede Auftragsnummer, um zum Auftrag zu springen und die Kundendaten einzusehen.

5. **Charge deaktivieren**
   - Zurück zur Charge und den **Aktiv**-Schalter ausschalten.
   - **Speichern**.

**Ergebnis**: Die Charge wird nicht mehr für neue Buchungen herangezogen. Sie haben eine vollständige Liste der betroffenen Aufträge.

---

## Schnellreferenz

| Aufgabe                       | Wichtige Schritte                                               | Erforderliche Einstellungen                |
| ----------------------------- | --------------------------------------------------------------- | ------------------------------------------ |
| Charge anlegen                | Kataloge → Chargen → Charge hinzufügen                          | —                                          |
| Buchung aktivieren            | Plugin-Konfiguration → Buchungsstatus wählen                    | `orderStateToMarkBatch`                    |
| Rückbuchung aktivieren        | Plugin-Konfiguration → Umkehr-Status + Schalter                 | `orderStateToRevertBatch`, `shouldRevert`  |
| Bestandsberechnung aktivieren | Plugin-Konfiguration → Lagerbestandseinstellungen               | `calculateStock`                           |
| Zusammensetzung einrichten    | Produkt → Spezifikationen → Zusammensetzung hinzufügen          | —                                          |
| Rückruf                       | Chargen-Detail → Bestellungen prüfen → Charge deaktivieren      | —                                          |

---

## Best Practices

1. **Verfallsdaten realistisch setzen**: Die geplante Deaktivierung läuft alle 10 Minuten. Planen Sie entsprechend vorausschauend.
2. **Produktgewicht konsistent pflegen**: Chargenbuchung und Bestandsberechnung basieren auf dem Produktgewicht. Leere Gewichtsangaben verhindern die Funktion.
3. **Chargen nicht löschen, sondern deaktivieren**: So bleibt die Chargen-Historie im Auftrag für Rückrufe und Buchhaltung erhalten.
4. **Statuskonfiguration vor Go-Live testen**: Legen Sie eine Testbestellung an und prüfen Sie den Chargen-Abbuchungsverlauf über alle gewünschten Statusübergänge.

## Was Sie vermeiden sollten

- ❌ **Produktgewicht auf 0 setzen** — Ohne Gewicht kann weder gebucht noch der Bestand berechnet werden.
- ❌ **Rückbuchungsstatus ohne Hauptschalter wählen** — Ohne aktiviertes *shouldRevert* greift die Rückbuchung nicht.
- ❌ **Chargen-Detailseite für manuelle Verbrauchsanpassungen verwenden** — Das Feld *Verbrauchte Menge* wird vom System gepflegt. Manuelle Änderungen werden beim nächsten Ereignis überschrieben.
