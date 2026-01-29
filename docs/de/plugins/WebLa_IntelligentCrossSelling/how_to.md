# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit Intelligentes Cross-Selling.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

Das Plugin analysiert Produkteigenschaften und berechnet automatisch Ähnlichkeitsscores zwischen Produkten.

```
Kunde besucht Produktseite
         ↓
Plugin prüft: Ist intelligentes Cross-Selling aktiv?
         ↓
Ja → Plugin lädt Produkteigenschaften
         ↓
Plugin berechnet Ähnlichkeitsscores basierend auf Gewichtungen
         ↓
Top-N Produkte werden als Empfehlungen angezeigt
```

**Detaillierter Ablauf**:

1. **Kunde öffnet Produktdetailseite**
2. **Cache-Prüfung**: Plugin prüft, ob Empfehlungen bereits gecacht sind (1 Stunde gültig)
3. **Eigenschaftsabgleich**: Plugin vergleicht die Eigenschaften des aktuellen Produkts mit allen anderen Produkten
4. **Score-Berechnung**: Für jede übereinstimmende Eigenschaft wird die konfigurierte Gewichtung zum Score addiert
5. **Filterung**: Produkte werden nach konfigurierten Filtern (Kategorie, Lagerbestand, Artikeltyp) gefiltert
6. **Sortierung**: Produkte werden nach Score sortiert, höchste Scores zuerst
7. **Anzeige**: Die Top-N Produkte werden im Cross-Selling-Bereich angezeigt

---

## Häufige Workflows

### Anleitung: Erstmalige Einrichtung

**Ziel**: Das Plugin konfigurieren und erste Empfehlungen aktivieren

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Produkte haben gepflegte Eigenschaften

**Schritte**:

1. **Plugin-Bereich öffnen**
   - Navigieren Sie zu: `Erweiterungen → Intelligentes Cross Selling`

2. **Grundeinstellungen konfigurieren**
   - Setzen Sie "Anzahl der anzuzeigenden Produkte" auf **6**
   - Aktivieren Sie **"Produkte ohne Lagerbestand ausblenden"**
   - Optional: Aktivieren Sie **"Nur Produkte aus derselben Kategorie anzeigen"**

3. **Titel konfigurieren**
   - Geben Sie bei "Titel" ein: **"Das könnte Ihnen auch gefallen"**
   - Aktivieren Sie **"Titel anzeigen"**

4. **Einstellungen speichern**
   - Klicken Sie auf **"Einstellungen speichern"**

5. **Erste Gewichtung anlegen**
   - Klicken Sie auf **"Gewichtung anlegen"**
   - Wählen Sie Ihre wichtigste Eigenschaft (z.B. "Farbe")
   - Setzen Sie die Gewichtung auf **80**
   - Klicken Sie auf **"Speichern"**

6. **Weitere Gewichtungen hinzufügen**
   - Wiederholen Sie Schritt 5 für 2-3 weitere wichtige Eigenschaften
   - Beispiel: Material=50, Stil=40

7. **Plugin aktivieren**
   - Aktivieren Sie den Schalter **"Aktiv"**
   - Klicken Sie auf **"Einstellungen speichern"**

8. **Ergebnis prüfen**
   - Öffnen Sie eine Produktdetailseite in Ihrer Storefront
   - Prüfen Sie, ob relevante Empfehlungen angezeigt werden

**Ergebnis**: Intelligente Cross-Selling-Empfehlungen werden auf allen Produktdetailseiten angezeigt.

---

### Anleitung: Gewichtungen optimieren

**Ziel**: Die Qualität der Empfehlungen durch Anpassung der Gewichtungen verbessern

**Voraussetzungen**:
- Plugin ist aktiv und zeigt Empfehlungen an
- Sie haben Feedback gesammelt, welche Empfehlungen nicht optimal sind

**Schritte**:

1. **Analyse durchführen**
   - Öffnen Sie mehrere Produktdetailseiten in Ihrer Storefront
   - Notieren Sie, welche Empfehlungen gut passen und welche nicht

2. **Muster erkennen**
   - Fragen Sie sich: Welche Eigenschaft verbindet die guten Empfehlungen?
   - Welche Eigenschaft führt zu unpassenden Empfehlungen?

3. **Gewichtungen anpassen**
   - Navigieren Sie zu: `Erweiterungen → Intelligentes Cross Selling`
   - Doppelklicken Sie auf die Gewichtung, die Sie ändern möchten
   - **Erhöhen** Sie die Gewichtung für Eigenschaften, die gute Matches liefern
   - **Reduzieren** Sie die Gewichtung für Eigenschaften, die irrelevante Produkte liefern

4. **Neue Eigenschaften testen**
   - Eventuell fehlt eine wichtige Eigenschaft
   - Fügen Sie eine neue Gewichtung hinzu und beginnen Sie mit 30-40%

5. **Cache leeren**
   - Navigieren Sie zu: `Einstellungen → System → Caches & Indizes`
   - Klicken Sie auf **"Alle löschen"**

6. **Ergebnisse überprüfen**
   - Prüfen Sie erneut die Produktdetailseiten
   - Wiederholen Sie den Prozess bei Bedarf

**Ergebnis**: Verbesserte, relevantere Produktempfehlungen.

---

### Anleitung: Mehrsprachige Titel einrichten

**Ziel**: Unterschiedliche Titel für verschiedene Shop-Sprachen konfigurieren

**Voraussetzungen**:
- Plugin ist aktiv
- Shop hat mehrere Sprachen konfiguriert

**Schritte**:

1. **Deutsche Version pflegen**
   - Navigieren Sie zu: `Erweiterungen → Intelligentes Cross Selling`
   - Stellen Sie sicher, dass "Deutsch" im Sprachumschalter ausgewählt ist
   - Geben Sie bei "Titel" ein: **"Das könnte Ihnen auch gefallen"**
   - Aktivieren Sie **"Titel anzeigen"**
   - Klicken Sie auf **"Einstellungen speichern"**

2. **Zur englischen Version wechseln**
   - Klicken Sie oben rechts auf den **Sprachumschalter**
   - Wählen Sie **"English"**

3. **Englischen Titel eingeben**
   - Geben Sie bei "Title" ein: **"You might also like"**
   - Klicken Sie auf **"Einstellungen speichern"**

4. **Weitere Sprachen**
   - Wiederholen Sie die Schritte 2-3 für alle weiteren Sprachen

5. **Testen**
   - Öffnen Sie Ihre Storefront in verschiedenen Sprachen
   - Prüfen Sie, ob der jeweils richtige Titel angezeigt wird

**Ergebnis**: Jede Sprachversion Ihres Shops zeigt den passenden Titel.

---

### Anleitung: Fashion-Shop konfigurieren

**Ziel**: Optimale Einstellungen für einen Mode-/Bekleidungsshop

**Schritte**:

1. **Grundeinstellungen**
   - Navigieren Sie zu: `Erweiterungen → Intelligentes Cross Selling`
   - Anzahl Produkte: **8**
   - Aktivieren: **"Aktiv"**
   - Aktivieren: **"Nur Produkte aus derselben Kategorie"**
   - Aktivieren: **"Produkte ohne Lagerbestand ausblenden"**
   - Aktivieren: **"Nur Hauptartikel anzeigen"**

2. **Gewichtungen für Fashion**

   | Eigenschaft | Gewichtung | Begründung |
   |-------------|------------|------------|
   | Farbe | 85% | Kunden suchen oft passende Farben |
   | Material | 50% | Ähnliches Material = ähnliches Tragegefühl |
   | Stil | 60% | Casual zu Casual, Elegant zu Elegant |
   | Marke | 40% | Markentreue ist relevant |

3. **Titel**
   - Deutsch: "Passend zu Ihrem Stil"
   - English: "Complete your look"

4. **Speichern und testen**

**Ergebnis**: Mode-relevante Empfehlungen, die Kunden helfen, Outfits zu kombinieren.

---

### Anleitung: Elektronik-Shop konfigurieren

**Ziel**: Optimale Einstellungen für einen Elektronik-/Technikshop

**Schritte**:

1. **Grundeinstellungen**
   - Navigieren Sie zu: `Erweiterungen → Intelligentes Cross Selling`
   - Anzahl Produkte: **6**
   - Aktivieren: **"Aktiv"**
   - **Deaktivieren**: "Nur Produkte aus derselben Kategorie" (Zubehör aus anderen Kategorien empfehlen)
   - Aktivieren: **"Produkte ohne Lagerbestand ausblenden"**
   - Aktivieren: **"Nur Hauptartikel anzeigen"**

2. **Gewichtungen für Elektronik**

   | Eigenschaft | Gewichtung | Begründung |
   |-------------|------------|------------|
   | Kompatibilität | 95% | Wichtigste Eigenschaft für Zubehör |
   | Marke | 70% | Kunden bleiben oft bei einer Marke |
   | Produktlinie | 80% | Innerhalb einer Serie passt alles |
   | Anschlusstyp | 60% | Technische Kompatibilität |

3. **Titel**
   - Deutsch: "Passendes Zubehör"
   - English: "Compatible accessories"

4. **Speichern und testen**

**Ergebnis**: Technisch kompatible Produktempfehlungen und passendes Zubehör.

---

## Schnellreferenz

| Aufgabe | Wichtige Schritte | Erforderliche Einstellungen |
|---------|-------------------|----------------------------|
| Plugin aktivieren | Erweiterungen → Intelligentes Cross Selling → "Aktiv" aktivieren | Aktiv |
| Gewichtung anlegen | "Gewichtung anlegen" → Eigenschaft wählen → Wert eingeben | Mindestens eine Gewichtung |
| Titel mehrsprachig | Sprachumschalter → Sprache wählen → Titel eingeben → Speichern | Titel, Titel anzeigen |
| Cache leeren | Einstellungen → System → Caches & Indizes → Alle löschen | - |

---

## Best Practices

1. **Weniger ist mehr**: Beginnen Sie mit 3-4 Gewichtungen und erweitern Sie bei Bedarf
2. **Höchste Gewichtung für Hauptmerkmal**: Die wichtigste Eigenschaft sollte 70-90% erhalten
3. **Regelmäßig prüfen**: Überprüfen Sie monatlich die Qualität der Empfehlungen
4. **Kategorie-Filter bei großen Sortimenten**: Bei vielen unterschiedlichen Produktkategorien hilft der Kategorie-Filter
5. **Lagerbestand-Filter aktivieren**: Empfehlen Sie nur verfügbare Produkte

## Was Sie vermeiden sollten

- **Zu viele Gewichtungen**: Mehr als 6-8 Gewichtungen verwässern die Ergebnisse
- **Gleiche Gewichtungen überall**: Differenzieren Sie – nicht alle Eigenschaften sind gleich wichtig
- **Beide Artikeltyp-Filter gleichzeitig**: "Nur Hauptartikel" und "Nur Varianten" schließen sich aus
- **Cache ignorieren**: Nach Änderungen immer den Cache leeren, um Ergebnisse zu sehen
