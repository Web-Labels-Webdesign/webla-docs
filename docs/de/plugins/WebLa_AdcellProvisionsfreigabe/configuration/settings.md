# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für ADCELL Provisionsfreigabe.

**Navigation**: Erweiterungen → Meine Erweiterungen → ADCELL Provisionsfreigabe → Konfigurieren

---

## Test-Modus

### Test-Modus (kein Senden an Adcell)

| Eigenschaft      | Wert              |
| ---------------- | ----------------- |
| **Typ**          | Schalter (An/Aus) |
| **Standard**     | Aus               |
| **Erforderlich** | Nein              |

**Beschreibung**: Wenn aktiviert, werden Entscheidungen vorbereitet und gespeichert, aber **nicht** an die ADCELL-API übermittelt. Der gesamte Abgleich-Prozess läuft normal ab, nur der letzte Schritt (Senden an ADCELL) wird übersprungen.

**Anwendungsbeispiel**: Aktivieren Sie den Test-Modus bei der Ersteinrichtung, um das Plugin kennenzulernen und sicherzustellen, dass die Entscheidungen korrekt sind, bevor echte Daten an ADCELL gesendet werden. Nach erfolgreichen Tests deaktivieren Sie den Modus für den Produktivbetrieb.

---

## Automatische Freigabe

### Automatische Freigabe aktivieren

| Eigenschaft      | Wert              |
| ---------------- | ----------------- |
| **Typ**          | Schalter (An/Aus) |
| **Standard**     | Aus               |
| **Erforderlich** | Nein              |

**Beschreibung**: Aktiviert den täglichen automatischen Abgleich. Wenn eingeschaltet, führt ein Scheduled Task täglich einen Abgleich für alle aktiven ADCELL-Konten durch und sendet die Entscheidungen automatisch an ADCELL — ohne manuelle Überprüfung.

**Anwendungsbeispiel**: Aktivieren Sie die automatische Freigabe, wenn Sie dem Abgleich-Algorithmus vertrauen und die tägliche manuelle Überprüfung nicht mehr benötigen. Ideal für etablierte Shops mit wenigen Sonderfällen.

### Tage vor Auto-Accept-Deadline

| Eigenschaft      | Wert  |
| ---------------- | ----- |
| **Typ**          | Zahl  |
| **Standard**     | 3     |
| **Erforderlich** | Nein  |

**Beschreibung**: Bestimmt, wie viele Tage vor der automatischen Annahme durch ADCELL das Plugin die Provisionen verarbeitet. ADCELL akzeptiert Provisionen automatisch nach einer bestimmten Frist (meist 30–45 Tage). Diese Einstellung stellt sicher, dass das Plugin rechtzeitig vor diesem Zeitpunkt eingreift.

**Anwendungsbeispiel**: Bei einem Wert von 3 werden Provisionen verarbeitet, deren Auto-Accept-Deadline in den nächsten 3 Tagen liegt. Ein höherer Wert (z.B. 7) gibt Ihnen mehr Vorlauf, aber einige Bestellungen haben dann möglicherweise noch keinen endgültigen Status.

### Mindest-Bestellalter in Tagen

| Eigenschaft      | Wert  |
| ---------------- | ----- |
| **Typ**          | Zahl  |
| **Standard**     | 0     |
| **Erforderlich** | Nein  |

**Beschreibung**: Legt fest, wie viele Tage eine Bestellung mindestens alt sein muss, bevor die zugehörige Provision freigegeben wird. Provisionen für jüngere Bestellungen werden als „Überspringen" markiert (Grund: „Bestellung noch zu jung"). Stornierungen und Korrekturen werden unabhängig vom Bestellalter sofort durchgeführt. Bei 0 wird keine Wartezeit erzwungen.

**Anwendungsbeispiel**: Setzen Sie den Wert auf 14, um Provisionen erst nach Ablauf der typischen Widerrufsfrist freizugeben. So haben Kunden Zeit für Retouren und Stornierungen, bevor die Provision endgültig bestätigt wird.

---

## Betrags-Toleranz

### Toleranz in Prozent

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Dezimalzahl |
| **Standard**     | 1.0         |
| **Erforderlich** | Nein        |

**Beschreibung**: Prozentuale Abweichung zwischen dem ADCELL-Warenkorbwert und dem tatsächlichen Netto-Bestellwert (ohne Versandkosten), ab der eine Betragskorrektur (ADJUST) ausgelöst wird. Die Toleranz wird immer vom ADCELL-Warenkorbwert berechnet.

**Anwendungsbeispiel**: Bei 1.0% und einem ADCELL-Warenkorbwert von 100,00 EUR wird eine Korrektur erst ab einer Abweichung von mehr als 1,00 EUR ausgelöst. Erhöhen Sie den Wert, wenn geringfügige Rundungsdifferenzen häufig zu unnötigen Korrekturen führen.

### Toleranz absolut (EUR)

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Dezimalzahl |
| **Standard**     | 0.50        |
| **Erforderlich** | Nein        |

**Beschreibung**: Absoluter Mindestbetrag für die Toleranzberechnung in Euro. Die tatsächliche Toleranz ist immer der höhere Wert aus prozentualer und absoluter Toleranz. Damit wird verhindert, dass bei kleinen Bestellbeträgen bereits Cent-Differenzen zu Korrekturen führen.

**Anwendungsbeispiel**: Bei einer Bestellung von 10,00 EUR wäre die 1%-Toleranz nur 0,10 EUR — zu wenig für Rundungsdifferenzen. Der absolute Mindestwert von 0,50 EUR stellt sicher, dass erst ab 0,50 EUR Abweichung korrigiert wird.

---

## Empfohlene Konfigurationen

### Für den Einstieg (konservativ)

| Einstellung                    | Empfohlener Wert |
| ------------------------------ | ---------------- |
| Test-Modus                     | An               |
| Automatische Freigabe          | Aus              |
| Tage vor Deadline              | 3                |
| Toleranz Prozent               | 1.0              |
| Toleranz absolut               | 0.50             |

### Für den Produktivbetrieb (manuell)

| Einstellung                    | Empfohlener Wert |
| ------------------------------ | ---------------- |
| Test-Modus                     | Aus              |
| Automatische Freigabe          | Aus              |
| Tage vor Deadline              | 3                |
| Toleranz Prozent               | 1.0              |
| Toleranz absolut               | 0.50             |

### Für den Produktivbetrieb (vollautomatisch)

| Einstellung                    | Empfohlener Wert        |
| ------------------------------ | ----------------------- |
| Test-Modus                     | Aus                     |
| Automatische Freigabe          | An                      |
| Tage vor Deadline              | 3                       |
| Toleranz Prozent               | 1.0                     |
| Toleranz absolut               | 0.50                    |
| Mindest-Bestellalter           | 14                      |
