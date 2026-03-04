# Nutzungsanleitung

Diese Anleitung erklärt alle Funktionen und Möglichkeiten der **Kategorie Schnellauswahl**.

---

## Inhaltsverzeichnis

- [Das Widget in der Erlebniswelt einbinden](#das-widget-in-der-erlebniswelt-einbinden)
- [Das Element konfigurieren](#das-element-konfigurieren)
- [Mehrere Widgets auf einer Seite](#mehrere-widgets-auf-einer-seite)
- [Top-Kategorien verwenden](#top-kategorien-verwenden)
- [Produktweiterleitung aktivieren](#produktweiterleitung-aktivieren)
- [Storefront-Verhalten](#storefront-verhalten)
- [Fehlerbehebung](#fehlerbehebung)

---

## Das Widget in der Erlebniswelt einbinden

### Was es bewirkt

Das Plugin stellt einen neuen CMS-Block in der Kategorie **Commerce** bereit. Dieser Block enthält das interaktive Kategorie-Dropdown und kann in beliebige Erlebniswelten eingefügt werden.

### So fügen Sie den Block ein

1. Navigieren Sie zu **Inhalte → Erlebniswelten**.
2. Öffnen Sie die gewünschte Erlebniswelt oder erstellen Sie eine neue.
3. Klicken Sie auf **Block hinzufügen** in dem Abschnitt, wo das Dropdown erscheinen soll.
4. Wechseln Sie zur Kategorie **Commerce** in der Blockliste.
5. Wählen Sie den Block **Category Selector** und ziehen Sie ihn an die gewünschte Position.
6. Speichern Sie die Erlebniswelt.

**Ort**: Inhalte → Erlebniswelten → [Erlebniswelt] → Block hinzufügen → Commerce

---

## Das Element konfigurieren

### Was es bewirkt

Nach dem Einfügen des Blocks muss das enthaltene Element konfiguriert werden. Hier legen Sie fest, welche Kategoriestruktur das Dropdown abbilden soll.

### So konfigurieren Sie das Element

1. Klicken Sie auf das eingefügte Element im Erlebniswelt-Editor.
2. Das Konfigurationspanel öffnet sich auf der rechten Seite.
3. **Wurzelkategorie**: Wählen Sie die Oberkategorie, deren Unterkategorien in der ersten Dropdown-Stufe erscheinen sollen.
4. **Tiefe**: Geben Sie die Anzahl der Auswahlstufen ein (z. B. `3` für Hersteller → Modell → Typ).
5. **Dropdown-Beschriftungen** (optional): Geben Sie kommagetrennte Hinweistexte für jede Stufe ein, z. B. `Hersteller wählen,Modell wählen,Typ wählen`.
6. **Zum Produkt weiterleiten** (optional): Aktivieren Sie diesen Schalter, wenn das Widget bei einem Einzelergebnis direkt zur Produktseite weiterleiten soll.
7. **Top-Kategorien** (optional): Wählen Sie Kategorien aus, die in der ersten Stufe oben fixiert erscheinen sollen.
8. Klicken Sie auf **Speichern** und veröffentlichen Sie die Erlebniswelt.

**Ort**: Element anklicken → Konfigurationspanel rechts

### Tipps & Best Practices

- Stellen Sie sicher, dass die gewählte Wurzelkategorie aktive Unterkategorien hat, damit das erste Dropdown befüllt wird.
- Wählen Sie eine Tiefe, die der tatsächlichen Ebenenanzahl Ihrer Kategoriestruktur entspricht.
- Testen Sie das Widget im Vorschaumodus, bevor Sie die Erlebniswelt veröffentlichen.

---

## Mehrere Widgets auf einer Seite

### Was es bewirkt

Mehrere Instanzen des Widgets können auf derselben Seite platziert werden. Jede Instanz arbeitet vollständig unabhängig – die Auswahl in einem Widget beeinflusst die anderen nicht.

### So richten Sie mehrere Widgets ein

1. Fügen Sie in der Erlebniswelt mehrere **Category Selector**-Blöcke ein.
2. Konfigurieren Sie jedes Element mit einer anderen Wurzelkategorie.
3. Vergeben Sie bei Bedarf unterschiedliche Dropdown-Beschriftungen pro Widget, damit Kunden den Kontext der jeweiligen Auswahl verstehen.

**Anwendungsfall**: Eine Seite zeigt oben die Fahrzeugauswahl (Hersteller → Modell → Typ) und darunter die Auswahl nach Produkttyp (Kategorie → Unterkategorie).

---

## Top-Kategorien verwenden

### Was es bewirkt

Mit der Einstellung **Top-Kategorien** können Sie ausgewählte Kategorien dauerhaft oben in der ersten Dropdown-Stufe anzeigen. Diese Kategorien erscheinen zusätzlich zur normalen alphabetischen Liste – einmal oben und einmal an ihrer üblichen alphabetischen Position.

Fixierte Kategorien erhalten die CSS-Klasse `highlight`, die Sie in Ihrem Theme für eine visuelle Hervorhebung (z. B. Fettschrift, andere Farbe) nutzen können.

### So fügen Sie Top-Kategorien hinzu

1. Öffnen Sie die Elementkonfiguration.
2. Klicken Sie in das Feld **Top-Kategorien**.
3. Suchen Sie nach den gewünschten Kategorien und wählen Sie sie aus.
4. Speichern Sie das Element.

**Anwendungsfall**: In einem Kfz-Shop werden „BMW", „Mercedes-Benz" und „Volkswagen" oben fixiert, da diese Marken den größten Anteil der Bestellungen ausmachen.

---

## Produktweiterleitung aktivieren

### Was es bewirkt

Wenn die Option **Zum Produkt weiterleiten** aktiviert ist, prüft das Plugin beim Erreichen der tiefsten Kategorie, ob in dieser Kategorie genau ein einziges aktives und verfügbares Produkt vorhanden ist. Falls ja, leitet es direkt zur Produktdetailseite weiter – ohne Umweg über die Kategorieseite.

Enthält die Kategorie mehrere Produkte oder kein Produkt, wird wie gewohnt zur Kategorieseite weitergeleitet.

### Voraussetzungen

- Die Option **Zum Produkt weiterleiten** muss in der Elementkonfiguration aktiviert sein.
- Das Produkt in der Zielkategorie muss aktiv und verfügbar sein.

---

## Storefront-Verhalten

### Wie der Kunde das Widget erlebt

1. Der Kunde sieht zunächst nur das erste Dropdown mit den direkten Unterkategorien der konfigurierten Wurzelkategorie. Alle weiteren Dropdowns sind ausgegraut.
2. Nach der Auswahl in der ersten Stufe werden die Unterkategorien der gewählten Kategorie dynamisch im zweiten Dropdown geladen. Das Widget zeigt einen kurzen Ladezustand.
3. Dieser Vorgang wiederholt sich bis zur konfigurierten Tiefe.
4. Bei der letzten Auswahl prüft das Plugin: Gibt es Unterkategorien für die nächste Stufe? Falls ja, wird diese gefüllt. Falls nein (tiefste Ebene erreicht), wird automatisch zur Kategorieseite (oder bei Einzelprodukt zur Produktseite) weitergeleitet.
5. Wählt der Kunde in einer höheren Stufe neu, werden alle nachfolgenden Dropdowns geleert und neu geladen.

### Sortierung der Kategorien

Kategorien werden alphabetisch sortiert (natürliche Sortierung, Groß-/Kleinschreibung ignoriert). Top-Kategorien erscheinen zusätzlich am Anfang der Liste.

---

## Fehlerbehebung

### Das erste Dropdown ist leer

**Symptom**: Das erste Dropdown zeigt keine Kategorien außer dem Hinweistext.

**Ursache**: Die gewählte Wurzelkategorie hat keine aktiven Unterkategorien.

**Lösung**: Überprüfen Sie unter **Kataloge → Kategorien**, ob die Wurzelkategorie direkte Unterkategorien hat und ob diese als aktiv markiert sind.

---

### Das Widget leitet nicht weiter

**Symptom**: Der Kunde wählt die letzte Stufe, aber nichts passiert.

**Ursache**: Möglicherweise hat die gewählte Kategorie keine Produkte oder die Kategorie hat keine SEO-URL.

**Lösung**: Stellen Sie sicher, dass die Zielkategorie aktive Produkte enthält. Generieren Sie unter **Einstellungen → System → Cache** den Cache neu, um SEO-URLs zu aktualisieren.

---

### „Zum Produkt weiterleiten" leitet nicht zur Produktseite

**Symptom**: Die Option ist aktiviert, aber es wird zur Kategorieseite weitergeleitet.

**Ursache**: Die Kategorie enthält mehr als ein verfügbares Produkt, oder das Produkt ist nicht aktiv/verfügbar.

**Lösung**: Prüfen Sie, ob in der Zielkategorie genau ein aktives und auf Lager befindliches Produkt vorhanden ist.

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
