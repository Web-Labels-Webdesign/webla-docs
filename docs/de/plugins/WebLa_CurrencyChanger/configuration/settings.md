# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für die Währungsanzeige.

**Navigation**: Erweiterungen → Meine Erweiterungen → Währungsanzeige → Konfigurieren

Alle Einstellungen lassen sich pro Verkaufskanal unterschiedlich setzen. Wählen Sie dazu oben in der Konfiguration den gewünschten Verkaufskanal aus.

---

## Currency Changer

### Update Url

| Eigenschaft      | Wert                                                            |
| ---------------- | --------------------------------------------------------------- |
| **Typ**          | Text                                                             |
| **Standard**     | `https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml` |
| **Erforderlich** | Ja                                                               |

**Beschreibung**: Die Adresse, von der die Wechselkurse geladen werden. Voreingestellt ist der offizielle Referenzkurs-Feed der Europäischen Zentralbank.

**Anwendungsbeispiel**: In der Regel ändern Sie diesen Wert nicht. Anpassungen sind nur nötig, wenn Sie die Kurse über einen eigenen Server spiegeln, etwa weil Ihr Shop keine ausgehenden Verbindungen zur EZB aufbauen darf. Der Ersatz-Feed muss dasselbe XML-Format liefern wie das Original.

---

### Default Target Currency

| Eigenschaft      | Wert  |
| ---------------- | ----- |
| **Typ**          | Text  |
| **Standard**     | `USD` |
| **Erforderlich** | Ja    |

**Beschreibung**: Die Währung, die einem Besucher angezeigt wird, solange er noch keine eigene Auswahl getroffen hat. Tragen Sie den dreistelligen Währungscode ein, zum Beispiel `USD`, `CHF` oder `GBP`.

**Anwendungsbeispiel**: Verkaufen Sie überwiegend in die Schweiz, setzen Sie hier `CHF`. Neue Besucher sehen dann sofort Schweizer Franken, ohne selbst umstellen zu müssen.

---

### Default Source Currency

| Eigenschaft      | Wert  |
| ---------------- | ----- |
| **Typ**          | Text  |
| **Standard**     | `EUR` |
| **Erforderlich** | Ja    |

**Beschreibung**: Die Ausgangswährung, aus der umgerechnet wird.

> **Hinweis**: Diese Einstellung sollte auf `EUR` bleiben. Die Kurse der Europäischen Zentralbank sind Euro-Referenzkurse, und die Preisanzeige im Shop ist auf Euro als Ausgangswährung ausgelegt. Ein anderer Wert führt dazu, dass keine Preise mehr angezeigt werden.

---

### Zeige Flaggen im Dropdown Menü

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aktiv    |
| **Erforderlich** | Nein     |

**Beschreibung**: Blendet zu jeder Währung im Auswahlmenü die passende Länderflagge ein.

**Anwendungsbeispiel**: Flaggen erleichtern die schnelle Orientierung. Passen sie nicht zu Ihrem Theme oder wirkt die Topbar zu unruhig, schalten Sie die Option ab.

---

### Anzeige des Währungsnamens anstelle des Symbols im Dropdown Menü

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aktiv    |
| **Erforderlich** | Nein     |

**Beschreibung**: Steuert die Beschriftung im Auswahlmenü. Ist die Option aktiv, erscheint der Währungscode (zum Beispiel `USD`). Ist sie inaktiv, erscheint stattdessen das Währungssymbol (zum Beispiel `$`).

**Anwendungsbeispiel**: Der Code ist eindeutig, das Symbol spart Platz. Da sich mehrere Währungen dasselbe Symbol teilen — `$` steht unter anderem für US-Dollar, Kanada-Dollar und Australischer Dollar — empfiehlt sich der Code, wenn Sie mehrere Dollar-Währungen anbieten.

---

## Preis-Aktualisierungsmodus

### Aktualisierungsmodus

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Auswahl                     |
| **Standard**     | `Nur Storefront-Anzeige`    |
| **Erforderlich** | Ja                          |

**Beschreibung**: Legt fest, ob Preise nur für die Anzeige umgerechnet werden oder ob der Wechselkurs direkt in die Währungs- und Preisdaten von Shopware geschrieben wird.

- `Nur Storefront-Anzeige` — das bisherige Verhalten. Preise werden ausschließlich für die Anzeige umgerechnet. Die Währungs- und Preisdaten von Shopware selbst bleiben unangetastet, Bestellung und Rechnung bleiben in Ihrer Shop-Standardwährung.
- `Shopware-Preisdaten aktualisieren` — der Wechselkurs wird stattdessen direkt in die Währungs- und Preisdaten von Shopware geschrieben. Die Storefront selbst bleibt vom Plugin vollständig unberührt, und Shopware übernimmt die Preisberechnung nativ überall: in der Storefront, im Warenkorb, in der Bestellung, über die API und in Exporten.

**Anwendungsbeispiel**: Bestehende Shops sind von dieser Einstellung nach einem Update nicht betroffen — der Standardwert erhält das bisherige Verhalten, und der Wechsel zu `Shopware-Preisdaten aktualisieren` ist eine bewusste Entscheidung, die der Shop selbst treffen muss, etwa um umgerechnete Preise auch über die API oder in Exporten bereitzustellen und nicht nur in der Storefront.

---

### Umgang mit währungsspezifischen Preisen

| Eigenschaft      | Wert                                          |
| ---------------- | ---------------------------------------------- |
| **Typ**          | Auswahl                                        |
| **Standard**     | `Entfernen und von Shopware berechnen lassen`  |
| **Erforderlich** | Ja                                              |

**Beschreibung**: Gilt nur, wenn **Aktualisierungsmodus** auf `Shopware-Preisdaten aktualisieren` steht. Legt fest, was mit einem Preis geschieht, den Sie selbst für eine bestimmte Währung hinterlegt haben — etwa einem bewusst gewählten Preis von 9,99 £.

- `Entfernen und von Shopware berechnen lassen` — der hinterlegte Währungspreis wird entfernt, sodass Shopware jeden Preis aus dem Preis in der Standardwährung und dem Wechselkurs berechnet.
- `Mit umgerechneten Werten überschreiben` — der hinterlegte Währungspreis bleibt erhalten, sein Wert wird aber bei jeder Aktualisierung durch den umgerechneten Betrag ersetzt.

In beiden Fällen übersteht ein von Hand gewählter Preis die nächste Aktualisierung nicht — der Wechselkurs wird zur einzigen maßgeblichen Quelle für diesen Preis. Das ist der Sinn dieses Modus, das sollte für Sie aber keine Überraschung sein.

Das gilt zusätzlich nur bei der Option „Mit umgerechneten Werten überschreiben": Enthält ein währungsspezifischer Preis einen Streichpreis oder einen „Günstigster Preis (letzten 30 Tage)"-Eintrag, den der Preis in der Standardwährung nicht hat, entfällt dieser Eintrag, da keine Berechnungsgrundlage vorhanden ist. Wenn Sie solche Preise pflegen, wählen Sie stattdessen „Entfernen und von Shopware berechnen lassen".

**Anwendungsbeispiel**: Wählen Sie „Entfernen und von Shopware berechnen lassen", wenn Sie sich auf die Streichpreis- und Günstigster-Preis-Logik von Shopware pro Währung verlassen. Wählen Sie „Mit umgerechneten Werten überschreiben", wenn Sie für jede Währung einen eigenen hinterlegten Preis führen möchten, der stets zum aktuellen Wechselkurs passt.

> **Versionshinweis**: Dies gilt immer, wenn **Aktualisierungsmodus** auf `Shopware-Preisdaten aktualisieren` steht, unabhängig von der gewählten Strategie für währungsspezifische Preise. Unter Shopware-Versionen vor 6.6.10 kann der Cache nach einer Kursänderung nicht automatisch geleert werden. Die Storefront zeigt dann möglicherweise noch die vorherigen Preise an, bis der Cache abläuft — standardmäßig nach bis zu zwei Stunden. Ab Shopware 6.6.10 geschieht dies automatisch.

---

## Verkaufskanal-spezifische Einstellungen

| Einstellung                    | Geltungsbereich   | Beschreibung                                          |
| ------------------------------ | ----------------- | ----------------------------------------------------- |
| Update Url                     | Pro Verkaufskanal | Quelle der Wechselkurse                               |
| Default Target Currency        | Pro Verkaufskanal | Vorausgewählte Zielwährung                            |
| Default Source Currency        | Pro Verkaufskanal | Ausgangswährung, praktisch immer `EUR`                |
| Zeige Flaggen                  | Pro Verkaufskanal | Flaggen im Auswahlmenü                                |
| Währungsnamen statt Symbol     | Pro Verkaufskanal | Beschriftung im Auswahlmenü                           |

Die Wechselkurse selbst gelten dagegen **global** für alle Verkaufskanäle. Sie werden zentral unter **Einstellungen → Erweiterungen → Storefront Währungen** verwaltet.

---

## Empfohlene Konfigurationen

### Für den europäischen Markt

| Einstellung                | Empfohlener Wert |
| -------------------------- | ---------------- |
| Default Target Currency    | `CHF` oder `GBP` |
| Zeige Flaggen              | Aktiv            |
| Währungsnamen statt Symbol | Aktiv            |

### Für den nordamerikanischen Markt

| Einstellung                | Empfohlener Wert |
| -------------------------- | ---------------- |
| Default Target Currency    | `USD`            |
| Zeige Flaggen              | Aktiv            |
| Währungsnamen statt Symbol | Aktiv            |

Der Währungscode ist hier wichtig, weil sich US-Dollar und Kanada-Dollar dasselbe Symbol teilen.

### Für eine besonders schlanke Topbar

| Einstellung                | Empfohlener Wert |
| -------------------------- | ---------------- |
| Zeige Flaggen              | Inaktiv          |
| Währungsnamen statt Symbol | Inaktiv          |
