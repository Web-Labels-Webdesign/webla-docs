# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für Kundenspezifische Rabatte.

**Navigation**: Erweiterungen → Meine Erweiterungen → Kundenspezifische Rabatte → Konfigurieren

---

## Rabatt-Einstellungen

### Rabatt-Bezeichnung

| Eigenschaft      | Wert                                  |
| ---------------- | ------------------------------------- |
| **Typ**          | Text                                  |
| **Standard**     | `{category} - {discount}`             |
| **Erforderlich** | Nein                                  |

**Beschreibung**: Legt fest, wie der Rabatt im Warenkorb und an der Kasse bezeichnet wird. Sie können verschiedene Variablen verwenden, um die Bezeichnung dynamisch zu gestalten.

**Verfügbare Variablen**:
- `{category}`: Name der Kategorie oder Dynamischen Produktgruppe
- `{customer}`: Name des Kunden
- `{customerGroup}`: Name der Kundengruppe
- `{discount}`: Das übersetzte Wort "Rabatt"
- `{value}`: Der Rabattwert in Prozent

**Anwendungsbeispiel**: Für B2B-Kunden könnte die Bezeichnung `{customerGroup} - {value}` lauten, um z.B. "Händler - 15%" anzuzeigen.

---

### Rabatt als eigenes Lineitem hinzufügen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, wird der Rabatt als separate Position im Warenkorb angezeigt. Wenn deaktiviert, wird der Produktpreis direkt reduziert.

**Optionen**:
- `Aktiviert`: Der Rabatt erscheint als eigene Zeile im Warenkorb (z.B. "Händlerrabatt -15%")
- `Deaktiviert`: Der Produktpreis wird direkt reduziert und zeigt den durchgestrichenen Originalpreis

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie möchten, dass Kunden den Rabatt als separate Position sehen und nicht nur den reduzierten Preis.

---

### Rabatt nur für ein Produkt anwenden

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Bestimmt, ob ein Rabatt nur einmal pro Produkt angewendet wird, auch wenn das Produkt in mehreren rabattberechtigten Kategorien oder Produktgruppen enthalten ist.

**Optionen**:
- `Aktiviert`: Jedes Produkt erhält maximal einen Rabatt, auch wenn es in mehreren rabattberechtigten Bereichen liegt
- `Deaktiviert`: Rabatte können mehrfach auf dasselbe Produkt angewendet werden

**Anwendungsbeispiel**: Lassen Sie diese Option aktiviert, um zu verhindern, dass ein Produkt mehrfach rabattiert wird.

---

### Rabatt-Prioritätsmodus

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Individuell zuerst |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, welcher Rabatt angewendet wird, wenn mehrere Rabattquellen für ein Produkt existieren.

**Optionen**:
- `Spezifischster zuerst (Produkt > Individuell > Kunde > Gruppe)`: Der spezifischste Rabatt hat Vorrang. Produktrabatte vor individuellen Kundenrabatten vor globalen Kundenrabatten vor Gruppenrabatten.
- `Individuell zuerst, dann Kunde, dann Gruppe`: Individuelle Kundenrabatte (auf Kategorien/Produktgruppen) haben Vorrang, globale Kundenrabatte als Fallback, Gruppenrabatte als letzter Fallback.
- `Höherer Rabatt gewinnt (kundenfreundlich)`: Der höchste verfügbare Rabatt wird angewendet - ideal wenn Sie Ihren Kunden den besten Preis geben möchten.
- `Niedrigerer Rabatt gewinnt (shopfreundlich)`: Der niedrigste verfügbare Rabatt wird angewendet - ideal wenn Sie Rabatte konservativ handhaben möchten.

**Anwendungsbeispiel**: Für einen kundenfreundlichen B2B-Shop wählen Sie "Höherer Rabatt gewinnt". Für maximale Kontrolle über Rabatte wählen Sie "Spezifischster zuerst".

---

### Dyn. Produktgruppe/Kategorie von Kundengruppen haben Priorität

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, haben Kategorie- oder Produktstrom-Rabatte, die Kundengruppen zugewiesen sind, absolute Priorität vor allen anderen Rabattarten und umgehen den Rabatt-Prioritätsmodus.

**Optionen**:
- `Aktiviert`: Wenn ein Produkt mit einer Kundengruppen-Kategorie-/Produktstrom-Rabattregel übereinstimmt, gewinnt dieser Rabatt immer, unabhängig von der Prioritätsmodus-Einstellung
- `Deaktiviert`: Alle Rabattarten werden gemäß dem Rabatt-Prioritätsmodus ausgewertet (Standardverhalten)

**Anwendungsbeispiel**: Sie haben eine Kundengruppe mit sowohl einem globalen 20%-Rabatt als auch einem 25%-Rabatt auf bestimmte Kategorien. Mit Prioritätsmodus "Niedrigerer Rabatt gewinnt" würde normalerweise der 20%-Rabatt gelten. Aktivieren Sie diese Einstellung, um sicherzustellen, dass der gezielter definierte 25%-Kategorierabatt immer Vorrang hat.

**Hinweis**: Diese Einstellung wirkt sich nur auf Produkte aus, die mit einer Kategorie- oder Produktstrom-Rabattregel übereinstimmen, die der Kundengruppe zugewiesen ist. Für Produkte, die mit keiner gezielten Regel übereinstimmen, gilt die normale Prioritätsmodus-Logik.

---

### Kundengruppen-Rabatte aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert oder deaktiviert die globalen Rabatte, die über die Kundengruppen-Einstellungen (Custom Fields) vergeben werden.

**Optionen**:
- `Aktiviert`: Der globale Rabatt aus den Kundengruppen-Custom-Fields wird angewendet
- `Deaktiviert`: Globale Kundengruppen-Rabatte werden ignoriert

**Anwendungsbeispiel**: Deaktivieren Sie diese Option temporär, wenn Sie Gruppenrabatte pausieren möchten, ohne sie zu löschen.

---

### Standard-Gruppenrabatte für Gäste anwenden

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, sehen nicht eingeloggte Besucher Preise mit dem Rabatt der Standard-Kundengruppe. Dies ermöglicht es, Aktionspreise allen Besuchern zu zeigen, ohne dass eine Anmeldung erforderlich ist.

**Optionen**:
- `Aktiviert`: Gäste sehen Preise mit Standard-Gruppenrabatten
- `Deaktiviert`: Nur eingeloggte Kunden sehen rabattierte Preise

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie Aktionspreise allen Besuchern anzeigen möchten, um sie zum Stöbern in Ihrem Shop zu ermutigen, auch ohne ein Konto.

**Hinweis**: Diese Einstellung gilt nur für globale Gruppenrabatte der Standard-Kundengruppe. Individuelle Kundenrabatte und kategoriespezifische Rabatte erfordern weiterhin, dass der Kunde eingeloggt ist.

---

### Produktspezifische Rabatte aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Ermöglicht das Setzen von Rabatten direkt auf einzelne Produkte über Custom Fields.

**Optionen**:
- `Aktiviert`: Produktspezifische Rabatte aus Custom Fields werden berücksichtigt
- `Deaktiviert`: Produktspezifische Rabatte werden ignoriert

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie bestimmte Produkte mit einem festen Rabatt versehen möchten.

---

### Globale Kundenrabatte aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Ermöglicht das Setzen eines globalen Rabatts auf einzelne Kunden über Custom Fields im Kundenprofil.

**Optionen**:
- `Aktiviert`: Globale Kundenrabatte aus Custom Fields werden berücksichtigt
- `Deaktiviert`: Globale Kundenrabatte werden ignoriert

**Anwendungsbeispiel**: Aktivieren Sie diese Option, um VIP-Kunden einen pauschalen Rabatt auf alle Produkte zu geben.

---

### Gesamtersparnis im Checkout anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt eine "Sie sparen X" Nachricht im Warenkorb und an der Kasse an.

**Optionen**:
- `Aktiviert`: Die Gesamtersparnis wird prominent angezeigt
- `Deaktiviert`: Keine zusätzliche Sparanzeige

**Anwendungsbeispiel**: Aktivieren Sie diese Option, um Kunden den Wert ihrer Rabatte deutlich zu machen.

---

### Originalpreis durchgestrichen anzeigen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Zeigt den Originalpreis durchgestrichen neben dem reduzierten Preis in Checkout-Positionen an.

**Optionen**:
- `Aktiviert`: Originalpreis wird durchgestrichen angezeigt
- `Deaktiviert`: Nur der reduzierte Preis wird angezeigt

**Anwendungsbeispiel**: Aktivieren Sie diese Option, um den Rabatt visuell hervorzuheben.

---

## Empfohlene Konfigurationen

### Für B2B-Shops mit Händlerrabatten

| Einstellung                     | Empfohlener Wert                    |
| ------------------------------- | ----------------------------------- |
| Rabatt-Bezeichnung              | `{customerGroup} - {value}`         |
| Rabatt als Lineitem             | Aus                                 |
| Rabatt-Prioritätsmodus          | Höherer Rabatt gewinnt              |
| Kundengruppen-Rabatte aktivieren| An                                  |
| Originalpreis durchgestrichen   | An                                  |

### Für Stammkundenpreise

| Einstellung                     | Empfohlener Wert                    |
| ------------------------------- | ----------------------------------- |
| Rabatt-Bezeichnung              | `Stammkundenrabatt {value}`         |
| Rabatt als Lineitem             | An                                  |
| Rabatt-Prioritätsmodus          | Individuell zuerst                  |
| Globale Kundenrabatte aktivieren| An                                  |
| Gesamtersparnis anzeigen        | An                                  |

### Für strenge Rabattkontrolle

| Einstellung                     | Empfohlener Wert                    |
| ------------------------------- | ----------------------------------- |
| Rabatt nur einmal anwenden      | An                                  |
| Rabatt-Prioritätsmodus          | Niedrigerer Rabatt gewinnt          |
| Originalpreis durchgestrichen   | Aus                                 |
