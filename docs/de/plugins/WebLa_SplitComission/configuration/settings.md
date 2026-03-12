# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für SplitCommission.

**Navigation**: Erweiterungen → Meine Erweiterungen → SplitCommission → Konfigurieren

> **Hinweis**: Alle Einstellungen können pro Verkaufskanal individuell konfiguriert werden. Öffnen Sie dafür zunächst den gewünschten Verkaufskanal in der Konfigurationsansicht.

---

## Aufteilung der Einzelposten in Teile Konfiguration

### Aufteilung der Einzelposten in Teile aktivieren

| Eigenschaft      | Wert            |
| ---------------- | --------------- |
| **Typ**          | Schalter (An/Aus) |
| **Standard**     | Aktiv           |
| **Erforderlich** | Nein            |

**Beschreibung**: Aktiviert oder deaktiviert das gesamte Plugin für den gewählten Verkaufskanal. Wenn deaktiviert, werden keine Kommissionskommentarfelder angezeigt und keine Aufteilung von Positionen vorgenommen.

**Anwendungsbeispiel**: Deaktivieren Sie diese Option, wenn Sie das Plugin temporär für einen bestimmten Verkaufskanal (z.B. einen B2C-Shop) ausschalten möchten, ohne es zu deinstallieren.

---

### Aktiv für

| Eigenschaft      | Wert              |
| ---------------- | ----------------- |
| **Typ**          | Auswahl           |
| **Standard**     | Alle Produkte     |
| **Erforderlich** | Nein              |

**Beschreibung**: Legt fest, für welche Produkte das Kommentarfeld und die Aufteilungsfunktion angezeigt werden.

**Optionen**:
- `Alle Produkte`: Das Kommentarfeld erscheint bei jedem Produkt im Shop automatisch.
- `Ausgewählte Produkte`: Das Kommentarfeld erscheint nur bei Produkten, bei denen in den Produktdetails (Reiter **Spezifikationen** → Bereich **Kommission**) die Option **Kommission aktiv** manuell aktiviert wurde.

**Anwendungsbeispiel**: Wählen Sie „Ausgewählte Produkte", wenn nur bestimmte Artikel – z.B. maßgefertigte oder B2B-spezifische Produkte – mit Kommissionskommentaren versehen werden sollen.

---

### Aufteilung der Einzelposten in Teile ohne Kommentar

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Inaktiv   |
| **Erforderlich** | Nein      |

**Beschreibung**: Wenn aktiviert, wird jede Warenkorb-Position automatisch als eigene separate Position behandelt, auch wenn kein Kommissionskommentar eingegeben wurde. Nützlich, wenn Sie die Staffelpreisfunktion auch ohne individuelle Kommentare nutzen möchten.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn jede Bestellposition grundsätzlich als eigenständige Position behandelt werden soll – beispielsweise wenn Ihre Lagerverwaltung separate Positionen pro Eintrag erwartet.

---

### Kommentar für Gesamtbestellung aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Inaktiv   |
| **Erforderlich** | Nein      |

**Beschreibung**: Blendet auf der Kassenseite (Bestellbestätigung) ein zusätzliches Textfeld ein, in dem der Kunde einen einzelnen Kommentar für die gesamte Bestellung hinterlassen kann. Dieser Kommentar wird in der Bestellzusammenfassung und auf der Bestellbestätigungsseite angezeigt.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Ihre Kunden übergeordnete Lieferhinweise oder Projektnummern für die gesamte Bestellung angeben sollen.

---

### Position des globalen Provisionsfeldes auf der Kassenseite

| Eigenschaft      | Wert                            |
| ---------------- | ------------------------------- |
| **Typ**          | Auswahl                         |
| **Standard**     | Unterhalb des Kundenkommentars  |
| **Erforderlich** | Nein                            |

**Beschreibung**: Legt fest, an welcher Stelle auf der Kassenseite das globale Kommentarfeld (siehe oben) angezeigt wird. Nur relevant, wenn **Kommentar für Gesamtbestellung aktivieren** eingeschaltet ist.

**Optionen**:
- `Unterhalb des Kundenkommentars`: Das Feld erscheint direkt unterhalb des Standard-Kundenkommentarfeldes.
- `Unterhalb der Zahlungs- und Versandarten`: Das Feld erscheint unterhalb der Auswahl für Zahlungs- und Versandmethoden.

---

## Verkaufskanal-spezifische Einstellungen

Alle Einstellungen können pro Verkaufskanal separat konfiguriert werden.

| Einstellung                                    | Geltungsbereich       | Beschreibung                                              |
| ---------------------------------------------- | --------------------- | --------------------------------------------------------- |
| Aufteilung aktivieren                          | Pro Verkaufskanal     | Plugin im jeweiligen Kanal ein- oder ausschalten          |
| Aktiv für                                      | Pro Verkaufskanal     | Alle oder ausgewählte Produkte aktivieren                 |
| Aufteilung ohne Kommentar                      | Pro Verkaufskanal     | Automatische Aufteilung ohne Kommentarpflicht             |
| Globaler Bestellkommentar                      | Pro Verkaufskanal     | Kommentarfeld für die Gesamtbestellung aktivieren         |
| Position des globalen Feldes                   | Pro Verkaufskanal     | Darstellungsposition auf der Kassenseite                  |

---

## Empfohlene Konfigurationen

### Für B2B-Shops mit Kommissionierung

| Einstellung                         | Empfohlener Wert      |
| ----------------------------------- | --------------------- |
| Aufteilung aktivieren               | Aktiv                 |
| Aktiv für                           | Ausgewählte Produkte  |
| Aufteilung ohne Kommentar           | Inaktiv               |
| Globaler Bestellkommentar           | Aktiv                 |
| Position des globalen Feldes        | Unterhalb des Kundenkommentars |

### Für vollautomatische Aufteilung

| Einstellung                         | Empfohlener Wert      |
| ----------------------------------- | --------------------- |
| Aufteilung aktivieren               | Aktiv                 |
| Aktiv für                           | Alle Produkte         |
| Aufteilung ohne Kommentar           | Aktiv                 |
| Globaler Bestellkommentar           | Inaktiv               |
