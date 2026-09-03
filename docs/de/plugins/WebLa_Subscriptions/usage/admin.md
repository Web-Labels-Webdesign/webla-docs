# Admin-Funktionen

> Teil des Abonnement Plugins für Mollie — [Siehe Hauptanleitung](./usage.md)

## Übersicht

Im Shopware-Admin finden Sie alle Werkzeuge zur Verwaltung von Abonnements. Das Plugin fügt einen neuen Bereich unter **Bestellungen → Abonnements** hinzu, der ein Dashboard, eine Listenansicht und Detailseiten umfasst.

---

## Dashboard

**Ort**: Bestellungen → Abonnements → Dashboard

Das Dashboard bietet einen Überblick über die wichtigsten Kennzahlen Ihres Abonnement-Geschäfts:

### KPI-Karten

| Kennzahl                    | Beschreibung                                                |
| --------------------------- | ----------------------------------------------------------- |
| **Aktive Abonnements**      | Anzahl der Abonnements im Status *Aktiv*                    |
| **Anstehende Verlängerungen** | Aktive Abonnements, die in den nächsten 7 Tagen fällig sind |
| **Monatlicher Umsatz (MRR)** | Geschätzter wiederkehrender Monatsumsatz — der Grundpreis jedes aktiven Abonnements auf einen Monat (4,33 Wochen) normalisiert |
| **Kündigungsrate (Churn)**  | In den letzten 30 Tagen gekündigte Abonnements, geteilt durch aktive plus kürzlich gekündigte |

Unterhalb der KPI-Karten schlüsselt das Dashboard alle Abonnements nach Status auf (aktiv, pausiert, gekündigt, abgelaufen, SEPA fehlgeschlagen, Warten auf Vorkasse, Zahlung ausstehend) und blendet Hinweisbanner ein, wenn SEPA-Fehlschläge oder offene Vorkassen existieren.

---

## Abonnement-Liste

**Ort**: Bestellungen → Abonnements

### Spalten

| Spalte            | Beschreibung                                    |
| ----------------- | ----------------------------------------------- |
| **Kunde**         | Name des Kunden                                 |
| **Status**        | Aktueller Abonnement-Status mit Farbindikator   |
| **Intervall**     | Lieferintervall in Wochen                       |
| **Nächste Verlängerung** | Datum der nächsten geplanten Verlängerung |
| **Zahlungsart**   | Konfigurierte Zahlungsart                       |
| **Erstellt am**   | Datum der Abonnement-Erstellung                 |

### Filtern und Sortieren

Die Filter liegen in der Seitenleiste (Trichter-Symbol):

- **Status**: aktiv, pausiert, gekündigt, abgelaufen, SEPA fehlgeschlagen, Warten auf Vorkasse, Zahlung ausstehend
- **Zahlungsart**: Kreditkarte, SEPA, PayPal, Rechnung, Vorkasse
- **Intervall**: Filter nach Intervall in Wochen
- **Nächste Verlängerung von / bis**: Zeitraum für das nächste Verlängerungsdatum
- **Sortierung**: Klicken Sie auf eine Spaltenüberschrift zum Sortieren
- **Suche**: Die Suchleiste findet Kundenname, E-Mail-Adresse und Kundennummer

> **Hinweis**: Ein CSV-Export existiert als API-Endpunkt (`POST /api/_action/webla-subscription/export`), hat aber keine Schaltfläche in der Administration.

---

## Abonnement-Detailansicht

**Ort**: Bestellungen → Abonnements → [Abonnement auswählen]

Die Detailseite ist in mehrere Tabs unterteilt:

### Tab: Allgemein

Zeigt alle grundlegenden Informationen zum Abonnement:

- **Kunde**: Name und Link zum Kundenprofil
- **Verkaufskanal**: Der zugehörige Verkaufskanal
- **Status**: Aktueller Status mit Änderungsmöglichkeit
- **Intervall**: Lieferintervall (änderbar)
- **Nächste Verlängerung**: Geplantes Datum
- **Zahlungsart**: Aktuelle Zahlungsart (änderbar)
- **Erstbestellung**: Link zur ursprünglichen Bestellung
- **Basispreis**: Gesamtpreis pro Lieferung
- **Gutschein angewendet**: Ob ein Gutschein auf der Erstbestellung verwendet wurde

#### Mollie-Daten (falls zutreffend)

- **Mollie-Kunden-ID**: Die ID des Kunden bei Mollie
- **Mollie-Mandat-ID**: Die ID des Zahlungsmandats
- **SEPA-Fehlerzähler**: Anzahl fehlgeschlagener SEPA-Lastschriften

#### Notizen

Freitext-Feld für interne Anmerkungen zum Abonnement. Diese sind nur im Admin sichtbar und werden nicht an den Kunden kommuniziert.

### Tab: Artikel

Zeigt alle Produkte im Abonnement:

- **Produktname**: Mit Link zum Produkt
- **Menge**: Bestellmenge pro Verlängerung
- **Stückpreis**: Preis pro Einheit
- **Mengenänderung**: Menge direkt anpassen

### Tab: Bestellhistorie

Chronologische Auflistung aller bisherigen Verlängerungen:

- **Verlängerungsnummer**: Fortlaufende Nummer
- **Bestellnummer**: Link zur zugehörigen Bestellung
- **Typ**: Erstbestellung oder Verlängerung
- **Datum**: Zeitpunkt der Bestellung

---

## Admin-Aktionen

### Abonnement pausieren

1. Öffnen Sie das Abonnement in der Detailansicht
2. Klicken Sie auf **Pausieren**
3. Das Abonnement wird sofort pausiert

### Abonnement reaktivieren

1. Öffnen Sie ein pausiertes Abonnement
2. Klicken Sie auf **Reaktivieren**
3. Das Abonnement wird wieder aktiviert, ein neues Verlängerungsdatum wird berechnet

### Abonnement kündigen

1. Öffnen Sie das Abonnement in der Detailansicht
2. Klicken Sie auf **Kündigen**
3. Das Abonnement wird beendet und ist für den Kunden im Portal nicht mehr verwaltbar

> **Hinweis**: Anders als Kunden können Admins ein gekündigtes Abonnement wieder reaktivieren — Kündigungsdatum und -grund werden dabei zurückgesetzt.

### Verlängerung erzwingen

Erstellt sofort eine Verlängerungsbestellung, unabhängig vom geplanten Datum.

1. Öffnen Sie das Abonnement in der Detailansicht
2. Klicken Sie auf **Verlängerung erzwingen**
3. Eine neue Bestellung wird erstellt

### Intervall ändern

1. Öffnen Sie das Abonnement in der Detailansicht
2. Ändern Sie den Wert im Feld **Intervall**
3. Speichern Sie die Änderung

### Zahlungsart ändern

1. Öffnen Sie das Abonnement in der Detailansicht
2. Wählen Sie eine neue **Zahlungsart**
3. Speichern Sie die Änderung

### Artikelmengen anpassen

1. Öffnen Sie den Tab **Artikel**
2. Ändern Sie die Menge im Eingabefeld
3. Die Änderung wird automatisch gespeichert

### Notizen bearbeiten

1. Öffnen Sie den Tab **Allgemein**
2. Schreiben Sie Ihre Notiz in das Freitext-Feld
3. Klicken Sie auf **Notizen speichern**

---

## Integration in andere Admin-Bereiche

### Kundenprofil

Im Kundenprofil (**Kunden → [Kunde]**) wird eine zusätzliche Karte **Abonnements** angezeigt, die alle Abonnements des Kunden auflistet. Von hier können Sie direkt zur Abonnement-Detailansicht navigieren. Die Karte enthält außerdem den Schalter **Intervallwechsel erlaubt**, der die globale Einstellung für diesen einen Kunden überschreibt.

### Produktdetails

Auf der Produktseite (**Kataloge → Produkte → [Produkt]**) ergänzt das Plugin am Ende des Tabs **Allgemein** die Karte **Abonnement-Optionen**, in der Sie die verfügbaren Abonnement-Optionen und den Modus *Nur als Abonnement* für dieses Produkt konfigurieren.

---

## Berechtigungen

Das Plugin definiert eigene Berechtigungen, die über Rollen zugewiesen werden können:

| Berechtigung                       | Beschreibung                        |
| ---------------------------------- | ----------------------------------- |
| `webla_subscription:read`          | Abonnements lesen und auflisten     |
| `webla_subscription:create`        | Abonnements erstellen               |
| `webla_subscription:update`        | Abonnements bearbeiten              |
| `webla_subscription:delete`        | Abonnements löschen                 |
| `webla_product_subscription_option:read`    | Produktoptionen lesen       |
| `webla_product_subscription_option:create`  | Produktoptionen erstellen   |
| `webla_product_subscription_option:update`  | Produktoptionen bearbeiten  |
| `webla_product_subscription_option:delete`  | Produktoptionen löschen     |

Konfigurieren Sie diese unter **Einstellungen → System → Benutzer & Rechte → Rollen**.

---

## Bedingungen im Rule Builder

Das Plugin ergänzt den Rule Builder (**Einstellungen → Regeln**) um drei Bedingungen. Damit lassen sich Versandarten, Zahlungsarten oder Rabatte von Abonnements abhängig machen.

| Bedingung | Gruppe | Beschreibung |
| --------- | ------ | ------------ |
| **Warenkorb enthält Abo-Produkt** | Warenkorb | Trifft zu, sobald mindestens eine Position im Warenkorb ein Abonnement ist — sowohl produktbezogene Optionen als auch warenkorb-weite Abos. |
| **Position ist ein Abo-Produkt** | Position | Bewertet eine einzelne Warenkorbposition, etwa für Rabatte und positionsbezogene Regeln. |
| **Anzahl aktiver Abos** | Kunde | Vergleicht die Anzahl der aktiven Abonnements des angemeldeten Kunden, zum Beispiel "mindestens 1". |

Typische Anwendungsfälle: eine Zahlungsart auf Abo-Warenkörbe beschränken, Expressversand für Abonnements ausblenden oder einen Rabatt nur an Kunden mit bestehendem Abonnement vergeben.

Die Bedingung **Anzahl aktiver Abos** wird bei der Warenkorbberechnung ausgewertet. Sie funktioniert daher für Versandarten, Zahlungsarten, Rabatte und Warenkorbregeln, nicht jedoch für Regeln ohne Warenkorb wie dynamische Produktgruppen oder Produktpreisregeln.
