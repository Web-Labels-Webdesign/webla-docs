# Bundle-Gruppen

> Teil des Ultimativen Bundle Plugins - [Siehe Hauptanleitung](./usage.md)

## Übersicht

Bundle-Gruppen sind die Bausteine eines Bundles. Jede Gruppe enthält eine Auswahl an Produkten, aus denen Ihre Kunden wählen können. Ein Bundle kann beliebig viele Gruppen haben - zum Beispiel "Wählen Sie eine Hülle", "Wählen Sie ein Ladekabel" und "Wählen Sie Kopfhörer".

## Voraussetzungen

- Ein Bundle muss bereits erstellt sein
- Produkte, die in Gruppen verwendet werden, müssen im Shop angelegt sein

## Detaillierte Nutzung

### Gruppe erstellen

1. Öffnen Sie ein Bundle unter **Kataloge → Bundles → [Bundle-Name]**
2. Scrollen Sie zum Bereich **Gruppen**
3. Klicken Sie auf **Hinzufügen**
4. Eine neue Zeile erscheint in der Gruppentabelle
5. Geben Sie einen **Titel** ein (z.B. "Wählen Sie eine Hülle")
6. Klicken Sie auf den **Bearbeiten**-Button, um das Gruppendetail-Modal zu öffnen

### Gruppentypen

Im Gruppendetail-Modal können Sie den **Typ** der Produktquelle wählen:

**Produkte** (manuell):
- Sie wählen die Produkte einzeln über die Produktsuche aus
- Geeignet für kleine, kuratierte Auswahlen
- Volle Kontrolle über die angezeigten Produkte

**Produktstream**:
- Produkte werden dynamisch aus einem Produktstream geladen
- Ideal für große oder sich ändernde Sortimente
- Wählen Sie einen bestehenden Produktstream aus der Auswahl

**Kategorie**:
- Alle Produkte einer bestimmten Kategorie werden einbezogen
- Einschließlich aller Unterkategorien
- Geeignet für kategorie-basierte Bundles

### Optionale Gruppen

Wenn Sie eine Gruppe als **Optional** markieren, können Kunden diese Gruppe abwählen. In der Storefront erscheint eine Checkbox neben der Gruppe, mit der Kunden die Gruppe ein- oder ausschließen können.

**Wann optionale Gruppen sinnvoll sind**:
- Bei Zubehör-Bundles, wo nicht jeder Kunde alle Teile benötigt
- Bei "Wählen Sie Ihre Extras"-Szenarien
- Wenn Sie maximale Flexibilität für den Kunden bieten möchten

**Hinweis**: Optionale Gruppen, die der Kunde abwählt, werden bei der Rabattberechnung nicht berücksichtigt.

### Mengenauswahl pro Gruppe

Wenn Sie **Mengenauswahl erlauben** aktivieren, können Kunden die Stückzahl für die Produkte dieser Gruppe individuell festlegen. Ein Zahlenfeld erscheint neben dem Gruppenprodukt.

**Konfigurationsoptionen**:
- **Mengenauswahl erlauben**: Aktiviert das Mengenfeld (Standardmenge: 1)
- **Maximale Menge**: Begrenzt die auswählbare Menge (z.B. maximal 5 Stück)

**Anwendungsbeispiel**: In einem Bürobedarf-Bundle könnte die Gruppe "Druckerpapier" eine Mengenauswahl mit Maximum 10 haben, während die Gruppe "Drucker" keine Mengenauswahl benötigt.

### Mit Zubehör prüfen

Die Option **Mit Zubehör prüfen** bewirkt, dass das Bundle nur angezeigt wird, wenn ein Produkt der Gruppe auch in der Zubehör-/Cross-Selling-Liste des Warenkorbs vorhanden ist. Dies ist eine erweiterte Funktion für spezielle Kompatibilitätsszenarien.

### Gruppen löschen

1. Markieren Sie die gewünschten Gruppen in der Checkbox-Spalte
2. Klicken Sie auf **Löschen** oberhalb der Tabelle
3. Speichern Sie das Bundle

## Beispiele

### Beispiel 1: Smartphone-Komplett-Bundle

**Ziel**: Ein Bundle mit optionalem Zubehör für ein Smartphone erstellen.

**Gruppen**:
1. **Schutzhülle** (Typ: Produkte, Optional: Nein)
   - 3 verschiedene Hüllen zur Auswahl
2. **Displayschutz** (Typ: Produkte, Optional: Ja)
   - 2 Displayschutzfolien zur Auswahl
3. **Ladekabel** (Typ: Produkte, Optional: Ja, Mengenauswahl: Ja, Max: 3)
   - USB-C Kabel, Lightning-Kabel

**Ergebnis**: Kunden müssen eine Hülle wählen, können aber Displayschutz und Ladekabel optional hinzufügen. Beim Ladekabel können sie bis zu 3 Stück bestellen.

### Beispiel 2: Kategorie-basiertes Bundle

**Ziel**: Ein Bundle, das automatisch alle Produkte einer Kategorie als Optionen anbietet.

**Gruppen**:
1. **Passendes T-Shirt** (Typ: Kategorie → "Herren T-Shirts", Optional: Nein)
2. **Passende Hose** (Typ: Kategorie → "Herren Hosen", Optional: Nein)

**Ergebnis**: Wenn neue Produkte zur Kategorie hinzugefügt werden, erscheinen sie automatisch als Bundle-Option. Denken Sie daran, den Index nach Kategorieänderungen neu aufzubauen.

## FAQ

**F: Wie viele Gruppen kann ein Bundle haben?**
A: Es gibt keine technische Begrenzung. Beachten Sie jedoch, dass zu viele Gruppen die Übersichtlichkeit für den Kunden beeinträchtigen können.

**F: Kann ein Produkt in mehreren Gruppen sein?**
A: Ja, dasselbe Produkt kann in verschiedenen Gruppen verschiedener Bundles erscheinen.

**F: Was passiert, wenn ein Gruppenprodukt ausverkauft ist?**
A: Wenn die Einstellung "Produkte ohne Bestand ausblenden" im Bundle aktiviert ist, wird das Produkt automatisch ausgeblendet. Andernfalls wird es angezeigt, kann aber möglicherweise nicht bestellt werden.

**F: Muss der Index nach jeder Gruppenänderung aktualisiert werden?**
A: Bei manuell zugewiesenen Produkten nicht zwingend. Bei Produktstreams und Kategorien sollte der Index regelmäßig aktualisiert werden, um neue Produkte einzubeziehen.
