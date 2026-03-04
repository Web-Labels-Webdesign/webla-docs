# Anleitungen

Schritt-für-Schritt-Workflows für typische Aufgaben mit der **Kategorie Schnellauswahl**.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
[Erlebniswelt-Editor]  →  [Konfiguration gespeichert]  →  [Seite wird aufgerufen]
        ↓
[Plugin lädt direkte Unterkategorien der Wurzelkategorie]
        ↓
[Kunde wählt Kategorie in Stufe 1]
        ↓
[AJAX-Anfrage: Lade Unterkategorien der gewählten Kategorie]
        ↓
[Nächste Stufe wird befüllt / Weiterleitung bei letzter Stufe]
```

**Beispielablauf für Fahrzeugauswahl:**
1. Seite lädt: Dropdown 1 zeigt alle Fahrzeughersteller.
2. Kunde wählt „BMW" → Dropdown 2 lädt die BMW-Modellreihen.
3. Kunde wählt „3er" → Dropdown 3 lädt die 3er-Modelle.
4. Kunde wählt „320i" → Plugin leitet automatisch zur Kategorie „320i" weiter.

---

## Anleitung: Erstes Widget einrichten

**Ziel**: Ein funktionsfähiges Kategorie-Dropdown in eine bestehende Erlebniswelt einbinden.

**Voraussetzungen**:
- Das Plugin ist installiert und aktiviert.
- Eine Kategoriestruktur mit mindestens 2 Ebenen ist im Shop vorhanden.

**Schritte**:

1. **Erlebniswelt öffnen**
   - Navigieren zu: `Inhalte → Erlebniswelten`
   - Gewünschte Erlebniswelt anklicken oder neue erstellen.

2. **Block hinzufügen**
   - Auf das `+`-Symbol in einem Abschnitt klicken.
   - In der Blockliste die Kategorie **Commerce** wählen.
   - Den Block **Category Selector** per Drag & Drop einfügen.

3. **Element konfigurieren**
   - Auf das Element klicken → Konfigurationspanel öffnet sich rechts.
   - **Wurzelkategorie**: Die Oberkategorie der gewünschten Struktur wählen.
   - **Tiefe**: Anzahl der Dropdown-Stufen eingeben (z. B. `3`).
   - **Dropdown-Beschriftungen** (optional): Kommagetrennte Hinweistexte eingeben.

4. **Speichern und veröffentlichen**
   - Auf **Speichern** klicken.
   - Erlebniswelt veröffentlichen oder im Vorschaumodus testen.

**Ergebnis**: Das Widget erscheint auf der Storefront-Seite mit dem befüllten ersten Dropdown.

---

## Anleitung: Top-Kategorien konfigurieren

**Ziel**: Bestimmte Kategorien oben im ersten Dropdown fixieren.

**Voraussetzungen**:
- Ein Category-Selector-Element ist bereits konfiguriert.

**Schritte**:

1. **Element bearbeiten**
   - Erlebniswelt öffnen: `Inhalte → Erlebniswelten`
   - Element anklicken → Konfigurationspanel öffnet sich rechts.

2. **Top-Kategorien auswählen**
   - Im Feld **Top-Kategorien** auf das Suchfeld klicken.
   - Kategorienamen eingeben und die gewünschten Kategorien auswählen.
   - Mehrere Kategorien können nacheinander hinzugefügt werden.

3. **Speichern**
   - Auf **Speichern** klicken und die Erlebniswelt veröffentlichen.

**Ergebnis**: Die ausgewählten Kategorien erscheinen oben im ersten Dropdown, zusätzlich an ihrer alphabetischen Position.

**Tipps**:
- Wählen Sie nicht mehr als 3–5 Top-Kategorien, damit die Liste übersichtlich bleibt.
- Mit der CSS-Klasse `highlight` können Sie Top-Kategorien im Theme visuell hervorheben.

---

## Anleitung: Direktweiterleitung zum Produkt aktivieren

**Ziel**: Kunden direkt zur Produktseite leiten, wenn eine Kategorie nur ein Produkt enthält.

**Voraussetzungen**:
- Kategorien auf der tiefsten Ebene enthalten jeweils nur ein aktives, verfügbares Produkt.

**Schritte**:

1. **Element bearbeiten**
   - `Inhalte → Erlebniswelten` → Erlebniswelt öffnen → Element anklicken.

2. **Option aktivieren**
   - Den Schalter **Zum Produkt weiterleiten** aktivieren.

3. **Speichern**
   - Auf **Speichern** klicken und die Erlebniswelt veröffentlichen.

**Ergebnis**: Wählt ein Kunde die letzte Kategorie mit genau einem Produkt, wird er direkt zur Produktdetailseite weitergeleitet.

---

## Anleitung: Zwei Widgets auf einer Seite einrichten

**Ziel**: Zwei unabhängige Dropdown-Widgets mit verschiedenen Wurzelkategorien auf derselben Seite platzieren.

**Schritte**:

1. **Ersten Block einfügen und konfigurieren**
   - Wie in „Erstes Widget einrichten" beschrieben.

2. **Zweiten Block einfügen**
   - Weiteren **Category Selector**-Block in einen anderen Abschnitt einfügen.
   - Auf das neue Element klicken → Konfigurationspanel öffnet sich rechts.
   - Eine andere Wurzelkategorie wählen als beim ersten Widget.
   - Tiefe und Beschriftungen separat konfigurieren.

3. **Speichern und testen**
   - Beide Widgets testen, um sicherzustellen, dass sie unabhängig voneinander funktionieren.

**Ergebnis**: Beide Dropdowns funktionieren vollständig unabhängig – die Auswahl im ersten Widget beeinflusst das zweite Widget nicht.

---

## Schnellreferenz

| Aufgabe                         | Wichtige Schritte                                          | Einstellung                  |
| ------------------------------- | ---------------------------------------------------------- | ---------------------------- |
| Widget einbinden                | Block „Category Selector" einfügen, Wurzelkategorie wählen | Wurzelkategorie, Tiefe       |
| Hinweistexte anpassen           | Kommagetrennte Texte in „Dropdown-Beschriftungen" eingeben | Dropdown-Beschriftungen      |
| Produktweiterleitung aktivieren | Schalter „Zum Produkt weiterleiten" aktivieren             | Zum Produkt weiterleiten     |
| Top-Kategorien fixieren         | Kategorien im Feld „Top-Kategorien" auswählen              | Top-Kategorien               |
| Zweites Widget hinzufügen       | Weiteren Block einfügen, separate Konfiguration vornehmen  | Wurzelkategorie (verschieden) |

---

## Best Practices

1. **Kategoriestruktur prüfen**: Stellen Sie vor der Konfiguration sicher, dass die Kategoriestruktur in Shopware aktiv und vollständig ist. Deaktivierte Kategorien werden nicht im Dropdown angezeigt.
2. **Tiefe passend wählen**: Die eingestellte Tiefe sollte der tatsächlichen Hierarchietiefe entsprechen. Eine zu hohe Tiefe führt zu leeren Dropdowns auf den letzten Stufen.
3. **Beschriftungen nutzen**: Klare Hinweistexte (z. B. „Hersteller wählen") verbessern die Usability erheblich – ohne Beschriftung weiß der Kunde möglicherweise nicht, was er auswählen soll.
4. **Top-Kategorien sparsam einsetzen**: Zu viele Top-Kategorien machen die Liste unübersichtlich. 3–5 fixierte Einträge sind in der Regel optimal.

## Was Sie vermeiden sollten

- ❌ **Wurzelkategorie ohne Unterkategorien wählen** – Das erste Dropdown bleibt leer, und das Widget funktioniert nicht.
- ❌ **Tiefe zu hoch setzen** – Stufen ohne Kategorien bleiben leer und irritieren Kunden.
- ❌ **Produktweiterleitung aktivieren ohne Einzelprodukte** – Wenn die Kategorien mehrere Produkte enthalten, hat die Option keine Wirkung und verwirrt nur im Setup.
