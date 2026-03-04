# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für die **Kategorie Schnellauswahl**.

Das Plugin wird nicht über eine globale Plugin-Konfiguration eingestellt, sondern direkt im CMS-Element der Erlebniswelt. Jedes Widget hat seine eigenen Einstellungen, die beim Bearbeiten des Elements im Erlebniswelt-Editor vorgenommen werden.

**Navigation**: Inhalte → Erlebniswelten → [Ihre Erlebniswelt] → Element bearbeiten

---

## Elementeinstellungen

### Wurzelkategorie

| Eigenschaft      | Wert                       |
| ---------------- | -------------------------- |
| **Typ**          | Kategorieauswahl (Pflicht) |
| **Standard**     | Kein                       |
| **Erforderlich** | Ja                         |

**Beschreibung**: Die Kategorie, deren direkte Unterkategorien als erste Auswahlstufe im Dropdown angezeigt werden. Die Wurzelkategorie selbst erscheint nicht im Dropdown – nur ihre Kinder.

**Anwendungsbeispiel**: Bei einem Kfz-Shop wählen Sie hier die Oberkategorie „Ersatzteile". Die erste Dropdown-Stufe zeigt dann alle direkten Unterkategorien wie „Bremsen", „Motor", „Fahrwerk" usw.

---

### Tiefe

| Eigenschaft      | Wert             |
| ---------------- | ---------------- |
| **Typ**          | Ganzzahl         |
| **Standard**     | 3                |
| **Minimum**      | 1                |
| **Maximum**      | 10               |
| **Erforderlich** | Ja               |

**Beschreibung**: Legt fest, wie viele Dropdown-Stufen angezeigt werden. Bei einer Tiefe von 3 sieht der Kunde drei aufeinanderfolgende Auswahlfelder, die sich von links nach rechts füllen.

**Wichtig**: Die Tiefe sollte der tatsächlichen Tiefe Ihrer Kategoriestruktur entsprechen. Ist die Tiefe höher als die vorhandene Kategoriehierarchie, werden leere Dropdown-Stufen angezeigt. Ist sie niedriger, wird früher weitergeleitet.

**Anwendungsbeispiel**: Für die Struktur Hersteller → Modellreihe → Modell stellen Sie die Tiefe auf 3 ein.

---

### Dropdown-Beschriftungen

| Eigenschaft      | Wert                         |
| ---------------- | ---------------------------- |
| **Typ**          | Text (kommagetrennt)         |
| **Standard**     | Leer (allgemeiner Hinweis)   |
| **Erforderlich** | Nein                         |

**Beschreibung**: Kommagetrennte Texte für die Platzhaltertexte der einzelnen Dropdown-Stufen. Der erste Wert gilt für die erste Stufe, der zweite für die zweite usw.

Ist dieses Feld leer, wird für jede Stufe ein allgemeiner Hinweistext aus den Sprachübersetzungen verwendet.

**Anwendungsbeispiel**: Für einen Kfz-Shop: `Hersteller wählen,Modellreihe wählen,Modell wählen`

Die Dropdown-Felder zeigen dann „Hersteller wählen", „Modellreihe wählen" und „Modell wählen" als Standardoption.

---

### Zum Produkt weiterleiten

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Schalter (Ja/Nein) |
| **Standard**     | Nein           |
| **Erforderlich** | Nein           |

**Beschreibung**: Wenn aktiviert und die ausgewählte Kategorie enthält genau ein einziges verfügbares und aktives Produkt, leitet das Plugin direkt zur Produktdetailseite weiter – anstatt zur Kategorieseite.

Ist diese Option deaktiviert oder enthält die Kategorie mehrere Produkte, wird immer zur Kategorieseite weitergeleitet.

**Anwendungsbeispiel**: In einem Shop mit einzigartigen Produktkombinationen (z. B. spezifische Fahrzeugteile für exakt ein Modell) ermöglicht diese Option eine direkte Produktweiterleitung ohne Zwischenschritt.

---

### Top-Kategorien

| Eigenschaft      | Wert                                  |
| ---------------- | ------------------------------------- |
| **Typ**          | Mehrfachauswahl Kategorien (optional) |
| **Standard**     | Keine                                 |
| **Erforderlich** | Nein                                  |

**Beschreibung**: Kategorien, die in der ersten Dropdown-Stufe oben fixiert angezeigt werden sollen – unabhängig von der alphabetischen Sortierung. Fixierte Kategorien erhalten außerdem eine CSS-Klasse `highlight`, mit der Sie sie per Theme individuell gestalten können.

**Anwendungsbeispiel**: In einem Kfz-Shop werden die meistverkauften Marken (z. B. „BMW", „VW", „Mercedes") oben fixiert, damit Kunden diese sofort sehen, ohne scrollen zu müssen.

---

## Empfohlene Konfigurationen

### Für Fahrzeugauswahl (3-stufig)

| Einstellung              | Empfohlener Wert                              |
| ------------------------ | --------------------------------------------- |
| Wurzelkategorie          | Ihre Fahrzeug-Oberkategorie                   |
| Tiefe                    | 3                                             |
| Dropdown-Beschriftungen  | `Hersteller wählen,Modell wählen,Typ wählen`  |
| Zum Produkt weiterleiten | Nein (zur Kategorieseite)                     |
| Top-Kategorien           | Meistverkaufte Marken                         |

### Für Druckerzubehör (3-stufig, Produktweiterleitung)

| Einstellung              | Empfohlener Wert                                     |
| ------------------------ | ---------------------------------------------------- |
| Wurzelkategorie          | Ihre Drucker-Oberkategorie                           |
| Tiefe                    | 3                                                    |
| Dropdown-Beschriftungen  | `Hersteller wählen,Modellserie wählen,Modell wählen` |
| Zum Produkt weiterleiten | Ja (bei eindeutigem Suchergebnis)                    |
| Top-Kategorien           | Beliebte Druckerhersteller                           |
