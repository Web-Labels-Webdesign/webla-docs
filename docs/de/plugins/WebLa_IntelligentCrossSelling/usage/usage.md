# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von Intelligentes Cross-Selling.

---

## Inhaltsverzeichnis

- [Erste Einrichtung](#erste-einrichtung)
- [Eigenschaftsgewichtungen verwalten](#eigenschaftsgewichtungen-verwalten)
- [Mehrsprachige Titel](#mehrsprachige-titel)
- [Storefront-Anzeige](#storefront-anzeige)
- [Fehlerbehebung](#fehlerbehebung)

---

## Erste Einrichtung

### Was Sie benötigen

Bevor Sie das Plugin nutzen können, stellen Sie sicher, dass:

1. **Produkteigenschaften angelegt sind**: Ihre Produkte müssen Eigenschaften wie Farbe, Material, Größe etc. haben
2. **Produkte mit Eigenschaften versehen sind**: Je mehr Produkte gepflegte Eigenschaften haben, desto besser funktionieren die Empfehlungen

### Plugin aktivieren

1. Navigieren Sie zu `Erweiterungen → Intelligentes Cross Selling`
2. Aktivieren Sie den Schalter **"Aktiv"**
3. Klicken Sie auf **"Einstellungen speichern"**

### Grundlegende Einstellungen vornehmen

1. **Anzahl Produkte festlegen**: Geben Sie bei "Anzahl der anzuzeigenden Produkte" ein, wie viele Empfehlungen angezeigt werden sollen (empfohlen: 4-8)
2. **Titel konfigurieren** (optional):
   - Geben Sie einen Titel ein, z.B. "Das könnte Ihnen auch gefallen"
   - Aktivieren Sie "Titel anzeigen", damit der Titel in der Storefront erscheint
3. **Filter aktivieren** (optional):
   - "Nur Produkte aus derselben Kategorie" – für thematisch passende Empfehlungen
   - "Produkte ohne Lagerbestand ausblenden" – um verfügbare Produkte zu priorisieren

---

## Eigenschaftsgewichtungen verwalten

Die Gewichtungen sind das Herzstück des Plugins. Sie bestimmen, welche Produkteigenschaften bei der Berechnung von Empfehlungen berücksichtigt werden.

### Neue Gewichtung anlegen

1. Navigieren Sie zu `Erweiterungen → Intelligentes Cross Selling`
2. Klicken Sie auf **"Gewichtung anlegen"**
3. Wählen Sie eine **Eigenschaft** aus der Dropdown-Liste (z.B. "Farbe")
4. Geben Sie eine **Gewichtung** zwischen 1 und 100 ein
   - **1-30**: Geringe Bedeutung – Eigenschaft wird leicht berücksichtigt
   - **31-60**: Mittlere Bedeutung – Eigenschaft hat spürbaren Einfluss
   - **61-100**: Hohe Bedeutung – Eigenschaft ist entscheidend für Empfehlungen
5. Klicken Sie auf **"Speichern"**

### Gewichtung bearbeiten

1. In der Tabelle "Cross Selling Gewichtungen" sehen Sie alle konfigurierten Eigenschaften
2. Doppelklicken Sie auf die **Gewichtung** einer Zeile, um sie direkt zu bearbeiten
3. Ändern Sie den Wert und drücken Sie Enter oder klicken Sie außerhalb des Feldes

### Gewichtung löschen

1. Klicken Sie in der Zeile der zu löschenden Gewichtung auf das **Kontextmenü** (drei Punkte)
2. Wählen Sie **"Delete"**
3. Bestätigen Sie die Löschung im Dialog

### Tipps zur Gewichtung

- **Beginnen Sie mit 2-3 Eigenschaften**: Starten Sie nicht mit zu vielen Gewichtungen
- **Höchste Gewichtung für Kernmerkmale**: Die wichtigste Eigenschaft (z.B. Farbe bei Mode) sollte 70-90% erhalten
- **Kombinierte Wirkung beachten**: Produkte, die mehrere gewichtete Eigenschaften teilen, erhalten höhere Scores
- **Testen Sie verschiedene Kombinationen**: Prüfen Sie auf Produktdetailseiten, ob die Empfehlungen sinnvoll sind

---

## Mehrsprachige Titel

Das Plugin unterstützt mehrsprachige Titel für die Cross-Selling-Sektion.

### Titel in verschiedenen Sprachen pflegen

1. Navigieren Sie zu `Erweiterungen → Intelligentes Cross Selling`
2. Klicken Sie oben rechts auf den **Sprachumschalter**
3. Wählen Sie die gewünschte Sprache (z.B. "English")
4. Geben Sie den Titel in dieser Sprache ein (z.B. "You might also like")
5. Klicken Sie auf **"Einstellungen speichern"**
6. Wiederholen Sie für alle Sprachen in Ihrem Shop

### Hinweis zur Sprachumschaltung

Der Sprachumschalter wird erst aktiv, nachdem Sie die Einstellungen mindestens einmal gespeichert haben. Wenn Sie die Seite zum ersten Mal öffnen, speichern Sie zunächst die Grundeinstellungen.

---

## Storefront-Anzeige

### Wo erscheinen die Empfehlungen?

Die intelligenten Cross-Selling-Empfehlungen erscheinen auf der **Produktdetailseite**, typischerweise:

- Im Cross-Selling-Bereich unterhalb der Produktbeschreibung
- Vor oder nach manuell gepflegten Cross-Selling-Gruppen (je nach Theme)

### Zusammenspiel mit nativen Cross-Selling-Regeln

Das Plugin **ergänzt** die nativen Shopware Cross-Selling-Funktionen:

1. Die intelligenten Empfehlungen werden als erste Cross-Selling-Gruppe angezeigt
2. Manuell gepflegte Cross-Selling-Gruppen erscheinen danach
3. Sie können beide Funktionen parallel nutzen

Gesteuert wird dies über die Plugin-Einstellung **Natives Cross-Selling zusätzlich anzeigen** (standardmäßig aktiviert). Wenn Sie sie deaktivieren, dient das am Produkt gepflegte Cross-Selling nur noch als Rückfallebene — es erscheint dann ausschließlich, wenn die intelligenten Empfehlungen keine Produkte liefern.

### Cache-Verhalten

- Empfehlungen werden für **1 Stunde** gecacht
- Bei Produktänderungen wird der Cache automatisch invalidiert
- Für sofortige Aktualisierung nach Konfigurationsänderungen leeren Sie den Shop-Cache unter `Einstellungen → System → Caches & Indizes`

---

## Fehlerbehebung

### Keine Empfehlungen werden angezeigt

**Symptom**: Auf der Produktdetailseite erscheinen keine Cross-Selling-Empfehlungen.

**Mögliche Ursachen und Lösungen**:

1. **Plugin nicht aktiv**
   - Prüfen Sie, ob der Schalter "Aktiv" eingeschaltet ist
   - Speichern Sie die Einstellungen erneut

2. **Keine Gewichtungen konfiguriert**
   - Legen Sie mindestens eine Eigenschaftsgewichtung an
   - Ohne Gewichtungen werden keine Empfehlungen berechnet

3. **Produkte haben keine Eigenschaften**
   - Prüfen Sie, ob Ihre Produkte die gewichteten Eigenschaften haben
   - Produkte ohne Eigenschaften können weder empfohlen werden noch Empfehlungen erhalten

4. **Zu restriktive Filter**
   - Deaktivieren Sie testweise "Nur Produkte aus derselben Kategorie"
   - Deaktivieren Sie "Produkte ohne Lagerbestand ausblenden"

5. **Cache nicht aktualisiert**
   - Leeren Sie den Cache unter `Einstellungen → System → Caches & Indizes`

---

### Falsche oder irrelevante Empfehlungen

**Symptom**: Die angezeigten Empfehlungen passen nicht zum Produkt.

**Lösungen**:

1. **Gewichtungen überprüfen**
   - Priorisieren Sie Eigenschaften, die wirklich relevant für Produktähnlichkeit sind
   - Erhöhen Sie die Gewichtung der wichtigsten Eigenschaft

2. **Kategorie-Filter aktivieren**
   - Aktivieren Sie "Nur Produkte aus derselben Kategorie", um thematisch passende Empfehlungen zu erhalten

3. **Artikeltyp-Filter nutzen**
   - Nutzen Sie "Nur Hauptartikel" oder "Nur Varianten" je nach Shop-Struktur

---

### Titel wird nicht angezeigt

**Symptom**: Der konfigurierte Titel erscheint nicht in der Storefront.

**Lösungen**:

1. **"Titel anzeigen" aktivieren**
   - Stellen Sie sicher, dass der Schalter "Titel anzeigen" aktiviert ist

2. **Titel eingeben**
   - Prüfen Sie, ob im Feld "Titel" tatsächlich ein Text eingetragen ist

3. **Richtige Sprache prüfen**
   - Wechseln Sie zur Sprache Ihrer Storefront und prüfen Sie, ob der Titel dort gepflegt ist

---

### Performance-Probleme

**Symptom**: Die Produktdetailseite lädt langsam.

**Lösungen**:

1. **Anzahl Produkte reduzieren**
   - Reduzieren Sie "Anzahl der anzuzeigenden Produkte" auf 4-8

2. **Anzahl Gewichtungen reduzieren**
   - Beschränken Sie sich auf 3-5 wesentliche Eigenschaften

3. **Cache prüfen**
   - Stellen Sie sicher, dass der Shopware HTTP-Cache aktiv ist

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
