# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das WebLa Subscription Plugin.

**Navigation**: Erweiterungen → Meine Erweiterungen → WebLa Subscription Plugin → Konfigurieren

---

## Allgemein

### Plugin aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Aktiviert oder deaktiviert das gesamte Abonnement-System. Wenn deaktiviert, werden keine Abonnement-Optionen in der Storefront angezeigt und keine automatischen Verlängerungen durchgeführt.

### Erlaubte Kundengruppen

| Eigenschaft      | Wert                                |
| ---------------- | ----------------------------------- |
| **Typ**          | Mehrfachauswahl (Kundengruppen)     |
| **Standard**     | Leer (alle Kundengruppen erlaubt)   |
| **Erforderlich** | Nein                                |

**Beschreibung**: Beschränkt Abonnements auf bestimmte Kundengruppen. Wenn keine Kundengruppe ausgewählt ist, können alle Kunden Abonnements abschließen.

**Anwendungsbeispiel**: Wählen Sie z. B. nur „B2B-Kunden", wenn Abonnements ausschließlich für Geschäftskunden verfügbar sein sollen.

---

## Abonnement-Intervalle

### Mindestintervall (Wochen)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 1      |
| **Erforderlich** | Nein   |

**Beschreibung**: Das kürzeste erlaubte Lieferintervall in Wochen. Kunden können kein kürzeres Intervall als diesen Wert wählen.

### Maximalintervall (Wochen)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 8      |
| **Erforderlich** | Nein   |

**Beschreibung**: Das längste erlaubte Lieferintervall in Wochen. Kunden können kein längeres Intervall als diesen Wert wählen.

### Intervalländerung durch Kunden erlauben

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Schalter     |
| **Standard**     | Deaktiviert  |
| **Erforderlich** | Nein         |

**Beschreibung**: Wenn aktiviert, können Kunden das Lieferintervall eines bestehenden Abonnements im Kundenportal selbst ändern.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie Ihren Kunden maximale Flexibilität bieten möchten.

### Vorzeitige Verlängerung verschiebt Datum

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Wenn ein Kunde eine Lieferung vorzeitig auslöst, wird das nächste Verlängerungsdatum basierend auf dem Zeitpunkt der vorzeitigen Bestellung neu berechnet. Ist diese Option deaktiviert, bleibt der ursprüngliche Rhythmus bestehen.

**Anwendungsbeispiel**: Aktiviert lassen, damit der Verlängerungszyklus immer ab der letzten tatsächlichen Lieferung zählt.

### Kunden dürfen Datumsverschiebung wählen

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Schalter     |
| **Standard**     | Deaktiviert  |
| **Erforderlich** | Nein         |

**Beschreibung**: Ermöglicht es Kunden, bei einer vorzeitigen Bestellung selbst zu entscheiden, ob der Verlängerungszyklus zurückgesetzt werden soll oder nicht.

### Warenkorb-Abonnement aktivieren

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Schalter     |
| **Standard**     | Deaktiviert  |
| **Erforderlich** | Nein         |

**Beschreibung**: Fügt bei Aktivierung einen Warenkorb-weiten Intervall-Auswähler zur Warenkorbseite, Offcanvas-Warenkorb, Adress-/Registrierungsschritt und Bestellabschluss hinzu. Kunden können den kompletten Warenkorb in ein Abonnement mit dem gewählten Intervall umwandeln. Alle Produkt-Line-Items — auch solche ohne produktspezifische Abo-Optionen — werden auf dieses Intervall gesetzt; die Auswahl überschreibt jede produktspezifische Auswahl.

**Anwendungsbeispiel**: Ein Boxen-Abo-Shop, in dem Kunden Produkte frei kombinieren und den gesamten Warenkorb im gleichen Rhythmus geliefert bekommen möchten.

### Warenkorb-Abo Intervalle

| Eigenschaft      | Wert                                                               |
| ---------------- | ------------------------------------------------------------------ |
| **Typ**          | Repeater (Wochen, Bezeichnung, Rabatt %)                           |
| **Standard**     | Leer                                                               |
| **Erforderlich** | Nur wenn **Warenkorb-Abonnement aktivieren** aktiv ist             |

**Beschreibung**: Definiert die Intervalle, die im Warenkorb-Auswähler angeboten werden. Jeder Eintrag hat drei Felder:

- **Intervall (Wochen)**: Anzahl Wochen zwischen Verlängerungen
- **Bezeichnung**: Anzeigetext im Storefront-Dropdown (z. B. *Alle 4 Wochen*)
- **Rabatt (%)**: Optionaler Rabatt pro Intervall, der auf alle Line-Items angewendet wird, wenn dieses Intervall gewählt ist

Das Storefront-Dropdown zeigt immer zuerst *Einmalkauf*, gefolgt von jedem konfigurierten Intervall.

**Anwendungsbeispiel**: `4 / "Alle 4 Wochen" / 10` und `8 / "Alle 8 Wochen" / 15` konfigurieren, um zwei Rhythmen mit gestaffelten Rabatten anzubieten.

---

## Preise & Rabatte

### Abonnement-Rabatt (%)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 5      |
| **Erforderlich** | Nein   |

**Beschreibung**: Prozentualer Rabatt, der automatisch auf alle Abonnement-Bestellungen angewendet wird. Dieser Basisrabatt gilt für jede Verlängerung.

**Anwendungsbeispiel**: Setzen Sie den Wert auf 10, um Kunden einen dauerhaften 10%-Rabatt auf Abonnement-Artikel zu gewähren.

> **Hinweis**: Zusätzlich zum Basisrabatt können über die Admin-Oberfläche Treue-Staffeln eingerichtet werden, die ab einer bestimmten Anzahl an Verlängerungen greifen.

---

## Zahlungsarten

### SEPA-Lastschrift aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Aktiviert SEPA-Lastschrift als Zahlungsart für Abonnements. Erfordert ein Mollie-Konto mit aktiviertem SEPA-Lastschriftverfahren.

### Maximale SEPA-Wiederholungsversuche

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 3      |
| **Erforderlich** | Nein   |

**Beschreibung**: Anzahl der Wiederholungsversuche bei fehlgeschlagenen SEPA-Lastschriften, bevor das Abonnement als fehlgeschlagen markiert wird.

### Rechnungs-Zahlungsart

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Auswahl (Zahlungsarten) |
| **Standard**     | Nicht ausgewählt        |
| **Erforderlich** | Nein                    |

**Beschreibung**: Wählen Sie die Shopware-Zahlungsart, die für Abonnements auf Rechnung verwendet werden soll. Bei Rechnungszahlung bleibt das Abonnement nach der Verlängerung aktiv — Sie müssen den Zahlungseingang manuell prüfen.

### Vorkasse-Zahlungsart

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Auswahl (Zahlungsarten) |
| **Standard**     | Nicht ausgewählt        |
| **Erforderlich** | Nein                    |

**Beschreibung**: Wählen Sie die Shopware-Zahlungsart für Vorkasse-Abonnements. Bei Vorkasse wechselt der Status auf „Warten auf Vorkasse" — das Abonnement wird erst nach Zahlungsbestätigung fortgesetzt.

### Versandart für Verlängerungen

| Eigenschaft      | Wert                   |
| ---------------- | ---------------------- |
| **Typ**          | Auswahl (Versandarten) |
| **Standard**     | Nicht ausgewählt       |
| **Erforderlich** | Nein                   |

**Beschreibung**: Die Versandart, die für automatisch erzeugte Verlängerungsbestellungen verwendet wird. Wenn nicht ausgewählt, wird die Standard-Versandart des Verkaufskanals verwendet.

### SEPA-Zahlungsart

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Auswahl (Zahlungsarten) |
| **Standard**     | Nicht ausgewählt        |
| **Erforderlich** | Nein                    |

**Beschreibung**: Die Shopware-Zahlungsart, die für SEPA-Lastschrift-Abonnements verwendet wird.

### Kreditkarten-Zahlungsart

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Auswahl (Zahlungsarten) |
| **Standard**     | Nicht ausgewählt        |
| **Erforderlich** | Nein                    |

**Beschreibung**: Die Shopware-Zahlungsart, die für Kreditkarten-Abonnements über Mollie verwendet wird.

---

## Mollie API

### Testmodus

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Wenn aktiviert, werden alle Mollie-Zahlungen über die Test-API abgewickelt. Deaktivieren Sie diese Option erst, wenn Sie den Live-Betrieb starten möchten.

### Test-API-Schlüssel

| Eigenschaft      | Wert            |
| ---------------- | --------------- |
| **Typ**          | Passwort-Feld   |
| **Standard**     | Leer            |
| **Erforderlich** | Ja (für Tests)  |

**Beschreibung**: Ihr Mollie Test-API-Schlüssel (beginnt mit `test_`). Diesen finden Sie in Ihrem Mollie-Dashboard unter **Entwickler → API-Schlüssel**.

### Live-API-Schlüssel

| Eigenschaft      | Wert               |
| ---------------- | ------------------ |
| **Typ**          | Passwort-Feld      |
| **Standard**     | Leer               |
| **Erforderlich** | Ja (für Live)      |

**Beschreibung**: Ihr Mollie Live-API-Schlüssel (beginnt mit `live_`). Wird nur verwendet, wenn der Testmodus deaktiviert ist.

### Webhook-URL

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Textfeld   |
| **Standard**     | Leer       |
| **Erforderlich** | Nein       |

**Beschreibung**: Die URL, an die Mollie Zahlungsbenachrichtigungen sendet. In den meisten Fällen wird diese automatisch konfiguriert. Nur manuell setzen, wenn Sie einen Proxy oder Tunnel verwenden.

### API-Verbindung testen

**Typ**: Schaltfläche

**Beschreibung**: Klicken Sie auf diese Schaltfläche, um die Verbindung zu Mollie mit den hinterlegten API-Schlüsseln zu testen. Sie erhalten eine Bestätigung, ob die Verbindung erfolgreich ist.

---

## Verlängerungsverhalten

### Verhalten bei nicht vorrätigem Artikel

| Eigenschaft      | Wert                               |
| ---------------- | ---------------------------------- |
| **Typ**          | Auswahl                            |
| **Standard**     | Überspringen                       |
| **Erforderlich** | Nein                               |

**Optionen**:
- `Überspringen`: Der Artikel wird bei dieser Verlängerung ausgelassen, die Bestellung wird ohne ihn erstellt
- `Pausieren und erneut versuchen`: Das Abonnement wird pausiert und beim nächsten Durchlauf erneut geprüft
- `Ohne Artikel ausführen`: Die Verlängerung wird ohne den nicht vorrätigen Artikel durchgeführt

**Anwendungsbeispiel**: Wählen Sie „Pausieren und erneut versuchen", wenn alle Artikel eines Abonnements unbedingt geliefert werden müssen.

### Verhalten bei gelöschtem Produkt

| Eigenschaft      | Wert                               |
| ---------------- | ---------------------------------- |
| **Typ**          | Auswahl                            |
| **Standard**     | Überspringen                       |
| **Erforderlich** | Nein                               |

**Optionen**:
- `Überspringen`: Der gelöschte Artikel wird übersprungen, die restlichen Artikel werden bestellt
- `Pausieren und erneut versuchen`: Das Abonnement wird pausiert, bis ein Admin eingreift
- `Ohne Artikel ausführen`: Die Verlängerung wird ohne den gelöschten Artikel durchgeführt

**Anwendungsbeispiel**: Wählen Sie „Pausieren und erneut versuchen", wenn Sie bei gelöschten Produkten manuell ein Ersatzprodukt einsetzen möchten.

---

## Empfohlene Konfigurationen

### Für den Einstieg (Testbetrieb)

| Einstellung                     | Empfohlener Wert  |
| ------------------------------- | ----------------- |
| Plugin aktivieren               | Aktiviert         |
| Testmodus                       | Aktiviert         |
| Abonnement-Rabatt               | 5%                |
| Mindestintervall                | 1 Woche           |
| Maximalintervall                | 8 Wochen          |
| Intervalländerung durch Kunden  | Deaktiviert       |
| SEPA-Lastschrift                | Aktiviert         |

### Für maximale Kundenflexibilität

| Einstellung                     | Empfohlener Wert  |
| ------------------------------- | ----------------- |
| Intervalländerung durch Kunden  | Aktiviert         |
| Datumsverschiebung wählen       | Aktiviert         |
| Abonnement-Rabatt               | 10%               |
| Verhalten bei nicht vorrätig    | Ohne Artikel      |

### Für strenge Kontrolle

| Einstellung                     | Empfohlener Wert       |
| ------------------------------- | ---------------------- |
| Intervalländerung durch Kunden  | Deaktiviert            |
| Datumsverschiebung wählen       | Deaktiviert            |
| Verhalten bei nicht vorrätig    | Pausieren              |
| Verhalten bei gelöschtem Produkt| Pausieren              |
| Maximale SEPA-Versuche          | 2                      |
