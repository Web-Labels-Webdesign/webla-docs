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
