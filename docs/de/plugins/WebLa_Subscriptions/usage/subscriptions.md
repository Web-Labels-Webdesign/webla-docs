# Abonnement-Verwaltung (Kundenportal)

> Teil des WebLa Subscription Plugins — [Siehe Hauptanleitung](./usage.md)

## Übersicht

Das Kundenportal ist der zentrale Bereich, in dem Ihre Kunden ihre Abonnements selbstständig verwalten. Es ist im Kundenkonto unter **Mein Konto → Abonnements** erreichbar und bietet volle Kontrolle über Lieferintervalle, Artikel, Pausierungen und Kündigungen.

---

## Abonnement-Übersicht

**Ort in der Storefront**: Mein Konto → Abonnements

### Was Kunden sehen

Die Übersichtsseite zeigt alle Abonnements des Kunden als Karten an:

- **Status-Indikator**: Farblich markierter Status (Aktiv, Pausiert, Gekündigt, etc.)
- **Produktbilder**: Vorschaubilder der enthaltenen Artikel
- **Intervall**: Das aktuelle Lieferintervall (z. B. „Alle 2 Wochen")
- **Nächste Lieferung**: Datum der nächsten geplanten Verlängerung
- **Preis pro Lieferung**: Gesamtpreis einer Lieferung
- **Verwalten-Link**: Direkter Zugang zur Detailansicht

### Lieferungen zusammenlegen

Wenn ein Kunde mehrere aktive Abonnements hat, wird ein Button **Lieferungen zusammenlegen** angezeigt. Damit können Abonnements auf ein gemeinsames Verlängerungsdatum zusammengelegt werden, um Versandkosten zu sparen.

1. Klicken Sie auf **Lieferungen zusammenlegen**
2. Wählen Sie im Modal die Abonnements aus, die zusammengelegt werden sollen
3. Bestätigen Sie die Zusammenlegung
4. Alle ausgewählten Abonnements erhalten das gleiche nächste Verlängerungsdatum

---

## Abonnement-Detailansicht

**Ort in der Storefront**: Mein Konto → Abonnements → [Abonnement auswählen]

### Statusanzeige

Am oberen Rand der Seite zeigt ein farbiges Banner den aktuellen Status an:

| Status                  | Farbe  | Beschreibung                                      |
| ----------------------- | ------ | ------------------------------------------------- |
| **Aktiv**               | Grün   | Abonnement läuft, nächste Verlängerung geplant    |
| **Pausiert**            | Gelb   | Vom Kunden oder Admin pausiert                     |
| **Gekündigt**           | Rot    | Endgültig beendet                                  |
| **SEPA fehlgeschlagen** | Orange | Zahlung fehlgeschlagen, Handlung erforderlich      |
| **Warten auf Vorkasse** | Blau   | Vorkasse-Zahlung ausstehend                        |
| **Zahlung ausstehend**  | Grau   | Zahlung wird verarbeitet                           |

### Artikel verwalten

Im Abschnitt **Artikel** sehen Kunden alle Produkte ihres Abonnements:

- **Produktbild und -name**: Visuelle Identifikation
- **Menge**: Aktuelle Bestellmenge
- **Stückpreis**: Preis pro Einheit
- **Menge ändern**: Eingabefeld zur Mengenänderung
- **Artikel entfernen**: Button zum Entfernen eines Artikels aus dem Abonnement

#### Menge ändern

1. Ändern Sie die Zahl im Mengenfeld
2. Klicken Sie auf **Aktualisieren**
3. Die Änderung gilt ab der nächsten Verlängerung

#### Artikel entfernen

1. Klicken Sie auf das **Entfernen**-Symbol neben dem Artikel
2. Bestätigen Sie im Dialog die Entfernung
3. Der Artikel wird aus dem Abonnement entfernt

---

## Aktionen

### Vorzeitig bestellen

Löst sofort eine Verlängerung aus, ohne auf das nächste geplante Datum zu warten.

1. Klicken Sie auf **Jetzt bestellen**
2. Bestätigen Sie im Modal
3. Eine neue Bestellung wird erstellt
4. Das nächste Verlängerungsdatum wird neu berechnet (falls konfiguriert)

### Abonnement pausieren

Setzt das Abonnement vorübergehend aus. Während der Pause werden keine Verlängerungen durchgeführt.

1. Klicken Sie auf **Pausieren**
2. Wählen Sie optional ein Datum, bis zu dem pausiert werden soll
3. Bestätigen Sie die Pausierung
4. Das Abonnement wird erst nach Ablauf der Pause oder nach manuellem Fortsetzen wieder verlängert

### Abonnement fortsetzen

Reaktiviert ein pausiertes Abonnement.

1. Klicken Sie auf **Fortsetzen**
2. Das Abonnement wechselt zurück in den Status „Aktiv"
3. Das nächste Verlängerungsdatum wird berechnet

### Intervall ändern

Verfügbar wenn vom Shop-Betreiber freigeschaltet (siehe [Einstellungen](../configuration/settings.md)).

1. Klicken Sie auf **Intervall ändern**
2. Wählen Sie das gewünschte neue Intervall aus dem Dropdown
3. Bestätigen Sie die Änderung
4. Ab der nächsten Verlängerung gilt das neue Intervall

### Abonnement kündigen

Beendet das Abonnement endgültig. Diese Aktion kann nicht rückgängig gemacht werden.

1. Klicken Sie auf **Kündigen**
2. Geben Sie optional einen Kündigungsgrund ein
3. Bestätigen Sie die Kündigung
4. Sie erhalten eine Bestätigungs-E-Mail

---

## Bestellhistorie

Im Abschnitt **Bestellhistorie** sehen Kunden alle bisherigen Verlängerungen:

- **Verlängerungsnummer**: Fortlaufende Nummer (1, 2, 3, ...)
- **Bestelldatum**: Datum der Verlängerungsbestellung
- **Typ**: Erstbestellung oder Verlängerung
- **Link zur Bestellung**: Direkter Link zur Bestelldetailseite

---

## Häufig gestellte Fragen

**F: Kann ich ein gekündigtes Abonnement wieder aktivieren?**
A: Nein, eine Kündigung ist endgültig. Sie müssen das Produkt erneut als Abonnement bestellen.

**F: Was passiert mit meinem Abonnement, wenn ein Produkt nicht mehr verfügbar ist?**
A: Das hängt von der Shop-Konfiguration ab. Mögliche Verhaltensweisen: Der Artikel wird übersprungen, das Abonnement wird pausiert, oder die Bestellung wird ohne den Artikel durchgeführt.

**F: Kann ich mehrere Abonnements zu einem zusammenlegen?**
A: Ja, über die Funktion „Lieferungen zusammenlegen" auf der Abonnement-Übersichtsseite. Die Abonnements bleiben getrennt, werden aber auf das gleiche Lieferdatum synchronisiert.

**F: Warum sehe ich bei der Bestellung nur bestimmte Zahlungsarten?**
A: Wenn Abonnement-Artikel im Warenkorb sind, werden nur für Abonnements geeignete Zahlungsarten angezeigt (Kreditkarte, SEPA-Lastschrift, Rechnung, Vorkasse).
