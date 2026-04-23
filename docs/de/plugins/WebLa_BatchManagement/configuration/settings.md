# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für **Charge-Management**.

**Navigation**: Erweiterungen → Meine Erweiterungen → Charge-Management → … → Konfigurieren

---

## Grundeinstellungen

### Auftragsstatus, der eine Charge als bearbeitet kennzeichnet

| Eigenschaft      | Wert                                 |
| ---------------- | ------------------------------------ |
| **Typ**          | Einfachauswahl                       |
| **Standard**     | Keine Auswahl                        |
| **Erforderlich** | Ja, damit Chargen gebucht werden     |

**Beschreibung**: Legt fest, bei welchem Auftragsstatus die Chargen automatisch gebucht werden. Wechselt ein Auftrag in genau diesen Status, werden passende Chargen entsprechend Bestellmenge und Produktgewicht in der Reihenfolge ihrer Verfallsdaten verbraucht.

**Optionen**:
- `Offen`: Buchung erfolgt, sobald die Bestellung angenommen ist.
- `In Bearbeitung`: Buchung erfolgt bei Beginn der Kommissionierung.
- `Komplett`: Buchung erfolgt erst beim Abschluss der Bestellung.

**Anwendungsbeispiel**: In einem Lebensmittelshop werden Chargen erst gebucht, wenn die Ware kommissioniert wird. Wählen Sie hier `In Bearbeitung`, damit die Chargen-Abbuchung den realen Warenfluss abbildet.

---

### Auftragsstatus, der eine Chargenbuchung umkehrt

| Eigenschaft      | Wert                                              |
| ---------------- | ------------------------------------------------- |
| **Typ**          | Mehrfachauswahl                                   |
| **Standard**     | Keine Auswahl                                     |
| **Erforderlich** | Nein                                              |

**Beschreibung**: Wechselt ein Auftrag in einen der hier gewählten Status, werden die zuvor gebuchten Chargenmengen automatisch zurückgebucht. Die entsprechenden `Charge-Auftrag`-Einträge werden entfernt und die verbrauchte Menge der Charge wieder freigegeben.

**Optionen**:
- `Offen`
- `In Bearbeitung`
- `Komplett`
- `Abgebrochen`

**Anwendungsbeispiel**: Für Stornierungen wählen Sie `Abgebrochen`, damit die zuvor gebuchten Chargen beim Abbruch eines Auftrags wieder freigegeben werden.

> **Hinweis**: Die Rückbuchung funktioniert nur, wenn zusätzlich die Einstellung *„Soll die Verwendung von Chargen umgekehrt werden …"* aktiv ist.

---

### Soll die Verwendung von Chargen umgekehrt werden, wenn der Bestellstatus aufgehoben wird?

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Schalter    |
| **Standard**     | Aktiviert   |
| **Erforderlich** | Nein        |

**Beschreibung**: Hauptschalter für die Rückbuchungslogik. Ist der Schalter aus, werden bei keinem Statuswechsel Chargen zurückgebucht, selbst wenn ein Status unter *„Auftragsstatus, der eine Chargenbuchung umkehrt"* ausgewählt ist.

**Anwendungsbeispiel**: Deaktivieren Sie diese Option, wenn Sie Chargenbuchungen manuell kontrollieren möchten oder wenn abgebrochene Aufträge aus rechtlichen Gründen ihre Chargenzuordnung behalten sollen.

---

## Lagerbestandseinstellungen

### Anpassung des Lagerbestands basierend auf Chargen berechnen

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Schalter     |
| **Standard**     | Deaktiviert  |
| **Erforderlich** | Nein         |

**Beschreibung**: Aktiviert die automatische Neuberechnung des Produktbestands. Der Bestand wird aus der Summe der verbleibenden Chargenmengen geteilt durch das Produktgewicht ermittelt. Die Neuberechnung läuft:

- sofort beim Speichern einer Charge,
- alle 10 Minuten über den Hintergrundtask (beim Deaktivieren abgelaufener Chargen).

Bei Produkten mit Zusammensetzung wird die minimal mögliche herstellbare Menge aus allen Bestandteilen berechnet. Bei Varianten erfolgt die Berechnung je Variante.

**Anwendungsbeispiel**: Aktivieren Sie diese Einstellung, wenn der im Shop angezeigte Lagerbestand ausschließlich durch vorhandene Chargen bestimmt werden soll. Deaktivieren Sie sie, wenn Sie den Bestand manuell oder über andere Systeme (ERP, WaWi) pflegen.

> **Wichtig**: Damit die Berechnung funktioniert, muss jedes Produkt ein Gewicht größer 0 haben. Ohne Gewicht kann das Plugin die Bestandsmenge nicht ermitteln.

---

### Stückweise Verbrauchsberechnung als Fallback

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Schalter     |
| **Standard**     | Deaktiviert  |
| **Erforderlich** | Nein         |

**Beschreibung**: Steuert, wie Chargen bei Produkten **ohne Gewicht** und **ohne Komposition** verbraucht werden. Ist der Schalter aus (Standard), wird bei solchen Produkten nichts verbraucht — die Buchung basiert auf `Produktgewicht × Positionsmenge`. Ist der Schalter an, fällt das Plugin auf **1 Chargen-Einheit pro verkauftem Stück** zurück. So können stückweise geführte Shops (Kosmetik, Pharma, Einzelartikel) die Chargen korrekt verbrauchen, ohne ein künstliches Produktgewicht pflegen zu müssen.

Produkte mit Komposition sind nicht betroffen — sie buchen weiterhin nach den Einträgen der Zusammensetzung.

**Anwendungsbeispiel**: Ein Kosmetik-Shop verkauft Einzelartikel ohne Gewichtsangabe. Mit aktiviertem Schalter reduziert eine Bestellung über 3 Stück die passende Charge um 3 Einheiten.

> **Hinweis**: Lassen Sie den Schalter deaktiviert, wenn alle Ihre Produkte bereits ein sinnvolles Gewicht haben — die gewichtsbasierte Berechnung bleibt der Standard.

---

## Empfohlene Konfigurationen

### Für Lebensmittelshops mit chargenpflichtiger Ware

| Einstellung                                       | Empfohlener Wert              |
| ------------------------------------------------- | ----------------------------- |
| Auftragsstatus, der eine Charge kennzeichnet      | `In Bearbeitung`              |
| Auftragsstatus, der eine Buchung umkehrt          | `Abgebrochen`                 |
| Chargen-Umkehr bei Statusaufhebung                | Aktiviert                     |
| Lagerbestand basierend auf Chargen berechnen      | Aktiviert                     |

### Für nachgelagerte Chargenerfassung ohne Bestandsführung

| Einstellung                                       | Empfohlener Wert              |
| ------------------------------------------------- | ----------------------------- |
| Auftragsstatus, der eine Charge kennzeichnet      | `Komplett`                    |
| Auftragsstatus, der eine Buchung umkehrt          | Keine Auswahl                 |
| Chargen-Umkehr bei Statusaufhebung                | Deaktiviert                   |
| Lagerbestand basierend auf Chargen berechnen      | Deaktiviert                   |

---

## Zurück zur Übersicht

- [Plugin-Übersicht](../index.md)
- [Nutzungsanleitung](../usage/usage.md)
- [Anleitungen](../how_to.md)
