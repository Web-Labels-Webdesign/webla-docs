# How-To-Leitfaden

Dieser Leitfaden zeigt Schritt-für-Schritt-Abläufe für die häufigsten Aufgaben mit dem
Kategorie-Sortierer.

---

## So funktioniert das Plugin

```
Kategorie im Baum wählen → Sortierung anwenden → Unterkategorien in A–Z-Reihenfolge
```

1. Sie wählen eine Kategorie auf der Plugin-Seite aus.
2. Das Plugin ordnet deren direkte Unterkategorien alphanumerisch (bei Bedarf rekursiv).
3. Die neue Reihenfolge ist sofort im Kategoriebaum unter **Kataloge → Kategorien**
   sichtbar.

---

## Häufige Abläufe

### Ablauf: Unterkategorien einer Kategorie sortieren

**Ziel**: Die direkten Unterkategorien einer Kategorie alphanumerisch ordnen.

**Schritte**:

1. **Plugin-Seite öffnen**
   - Navigieren zu: `Einstellungen → Plugins → Kategorie-Sortierer`
2. **Kategorie wählen**
   - Im Feld **Kategorie** den Baum aufklappen und die gewünschte Kategorie anklicken.
3. **Sortierung starten**
   - Auf **Unterkategorien sortieren** klicken.

**Ergebnis**: Die direkten Unterkategorien der gewählten Kategorie stehen in
alphanumerischer Reihenfolge (A–Z). Eine Meldung nennt die Anzahl der neu geordneten
Kategorien.

---

### Ablauf: Den gesamten Unterbaum sortieren (rekursiv)

**Ziel**: Nicht nur die direkten Kinder, sondern alle darunterliegenden Ebenen sortieren.

**Schritte**:

1. Plugin-Seite öffnen und eine Kategorie wählen (siehe oben).
2. **Rekursiv sortieren** aktivieren.
3. Auf **Unterkategorien sortieren** klicken.

**Ergebnis**: Die gewählte Kategorie und jede darunterliegende Ebene werden bis in die
tiefste Ebene sortiert.

---

### Ablauf: Mehrere Kategorien gleichzeitig sortieren

**Voraussetzung**: In-App-Kauf **Mehrfachauswahl** (`multiselect`) aktiv.

**Schritte**:

1. Plugin-Seite öffnen.
2. Im Kategorie-Baum mehrere Kategorien per Kontrollkästchen auswählen.
3. Optional **Rekursiv sortieren** aktivieren.
4. Auf **Unterkategorien sortieren** klicken.

**Ergebnis**: Die Unterkategorien aller gewählten Kategorien werden sortiert.

> Ist die Mehrfachauswahl nicht freigeschaltet, klicken Sie auf **Mehrfachauswahl
> freischalten**, um den In-App-Kauf zu starten.

---

### Ablauf: Automatische Sortierung einrichten

**Voraussetzung**: In-App-Kauf **Automatische Sortierung** (`scheduled-sort`) aktiv.

**Schritte**:

1. Plugin-Seite öffnen und die zu sortierenden Kategorien auswählen.
2. In der Karte **Automatische Sortierung** das **Ausführungsintervall (Sekunden)**
   festlegen (z. B. `86400` für einmal täglich).
3. Oben rechts auf **Speichern** klicken.

**Ergebnis**: Die gespeicherte Auswahl wird automatisch im festgelegten Intervall
sortiert. Änderungen am Intervall werden sofort beim Speichern übernommen.

**Wichtig**: Die automatische Sortierung läuft nur, wenn ein Message-Queue-Worker aktiv
ist (Admin-Worker oder `bin/console messenger:consume`).

---

## Schnellübersicht

| Aufgabe                      | Kurzschritte                                                        | Voraussetzung     |
| ---------------------------- | ------------------------------------------------------------------ | ----------------- |
| Eine Kategorie sortieren     | Kategorie wählen → **Unterkategorien sortieren**                   | –                 |
| Rekursiv sortieren           | **Rekursiv sortieren** aktivieren → sortieren                       | –                 |
| Mehrere Kategorien           | Mehrere im Baum wählen → sortieren                                  | `multiselect`     |
| Automatisch sortieren        | Auswahl + Intervall → **Speichern**                                | `scheduled-sort`  |

---

## Empfehlungen

1. **Vor dem ersten Lauf prüfen**: Kontrollieren Sie die Kategorienamen – die Sortierung
   richtet sich exakt nach dem Namen (natürliche A–Z-Reihenfolge).
2. **Rekursiv gezielt einsetzen**: Bei großen Bäumen ordnet der rekursive Modus sehr viele
   Kategorien neu – setzen Sie ihn bewusst ein.

## Was Sie vermeiden sollten

- ❌ Automatische Sortierung ohne laufenden Worker erwarten – ohne Worker wird die geplante
  Aufgabe nicht ausgeführt.
- ❌ Annehmen, dass mehrere Kategorien ohne den `multiselect`-Kauf sortiert werden – ohne
  ihn wird nur die erste Kategorie berücksichtigt.
