# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Produkt Berater Plugin.

---

## Wie der Produktberater funktioniert

### Datenfluss-Übersicht

```
Kunde startet Berater
        ↓
   Frage anzeigen
        ↓
  Antwort auswählen
        ↓
 ┌──────┴──────┐
 │  Sprungziel │──→ Zur Ziel-Frage springen
 │  vorhanden? │
 └──────┬──────┘
        │ Nein
        ↓
   Nächste Frage
        ↓
 ┌──────┴──────┐
 │   Weitere   │──→ Zurück zu "Frage anzeigen"
 │   Fragen?   │
 └──────┬──────┘
        │ Nein
        ↓
  Produkte filtern und bewerten
        ↓
  Ergebnisse sortieren (nach Score/Gewichtung)
        ↓
  Produktempfehlungen anzeigen
```

### Bewertungslogik

1. **Grundbewertung**: Jedes Produkt startet mit Score 0
2. **Antwort-Matching**: Für jede passende Antwort wird die Frage-Gewichtung addiert
3. **Hersteller-Bonus**: Falls konfiguriert, wird die Herstellergewichtung addiert
4. **Sortierung**: Produkte werden nach Gesamtscore sortiert (höchster zuerst)

---

## Häufige Workflows

### Anleitung: Ersten Produktberater erstellen

**Ziel**: Einen funktionierenden Produktberater von Grund auf erstellen

**Voraussetzungen**:
- Plugin installiert und aktiviert
- Produkte mit Eigenschaften im Shop vorhanden

**Schritte**:

1. **Produktberater anlegen**
   - Navigieren zu: `Kataloge → Produktberater`
   - Klicken Sie auf **Hinzufügen**
   - Titel eingeben: z.B. "Laptop-Finder"
   - Aktivieren Sie den Berater
   - **Speichern**

2. **Erste Frage erstellen**
   - Tab **Fragen** öffnen
   - Klicken Sie auf **Frage hinzufügen**
   - Titel: "Verwendungszweck"
   - Fragetext: "Wofür benötigen Sie das Notebook hauptsächlich?"
   - Fragetyp: "Eigenschaften"
   - Frageformat: "Buttons"
   - Eigenschaftsgruppe: Wählen Sie eine passende Gruppe (z.B. "Kategorie" oder "Verwendung")
   - Position: 1
   - Gewichtung: 5
   - **Speichern**

3. **Antworten hinzufügen**
   - Tab **Antworten** in der Frage öffnen
   - Für jede Antwortoption:
     - Klicken Sie auf **Antwort hinzufügen**
     - Antworttext eingeben (z.B. "Büroarbeit", "Gaming", "Grafikdesign")
     - Eigenschaftsoption auswählen
     - Position festlegen
     - **Speichern**

4. **Weitere Fragen und Antworten hinzufügen**
   - Wiederholen Sie die Schritte für weitere Fragen (z.B. Budget, Bildschirmgröße)

5. **In Erlebniswelt einbinden**
   - Navigieren zu: `Inhalte → Erlebniswelten`
   - Erlebniswelt öffnen oder neue erstellen
   - Block **Produktberater** aus Sidebar hinzufügen
   - Berater auswählen
   - **Speichern** und **Veröffentlichen**

**Ergebnis**: Der Berater ist live und Kunden können ihn nutzen.

---

### Anleitung: Sprunglogik einrichten

**Ziel**: Fragen basierend auf vorherigen Antworten überspringen

**Voraussetzungen**:
- Bestehender Produktberater mit mehreren Fragen

**Schritte**:

1. **Fragenstruktur planen**

   | Frage | Position | Beschreibung |
   |-------|----------|--------------|
   | Erfahrungslevel | 1 | Bestimmt, ob Anfänger-Fragen gezeigt werden |
   | Anfänger-Hilfe | 2 | Nur für Anfänger |
   | Einsteiger-Features | 3 | Nur für Anfänger |
   | Budget | 4 | Für alle |
   | Zusatzfunktionen | 5 | Für alle |

2. **Sprungziel bei der Antwort definieren**
   - Öffnen Sie Frage 1 "Erfahrungslevel"
   - Öffnen Sie die Antwort "Experte" oder "Viel Erfahrung"
   - Setzen Sie **Sprung zu**: 4
   - **Speichern**

3. **Testen**
   - Öffnen Sie die Storefront
   - Starten Sie den Berater
   - Wählen Sie "Experte" bei Frage 1
   - Prüfen Sie, ob direkt zu Frage 4 gesprungen wird

**Ergebnis**: Experten überspringen die Anfänger-Fragen automatisch.

**Fehlerbehebung**: Falls der Sprung nicht funktioniert:
- Prüfen Sie, ob die Position korrekt ist (Zahl, nicht Frage-ID)
- Stellen Sie sicher, dass die Ziel-Frage existiert

---

### Anleitung: Preisbereich-Frage erstellen

**Ziel**: Kunden nach Budget filtern lassen

**Voraussetzungen**:
- Produkte mit unterschiedlichen Preisen im Shop

**Schritte**:

1. **Neue Frage erstellen**
   - Titel: "Budget"
   - Fragetext: "Wie viel möchten Sie maximal ausgeben?"
   - Fragetyp: **Preis**
   - Frageformat: **Bereich** (für Schieberegler) oder **Buttons** (für vordefinierte Bereiche)
   - Position: Passend einordnen
   - Gewichtung: z.B. 3
   - **Speichern**

2. **Für Buttons-Format: Preisbereiche als Antworten**

   | Antwort | Preis von | Preis bis | Position |
   |---------|-----------|-----------|----------|
   | Unter 100 Euro | 0 | 100 | 1 |
   | 100 - 300 Euro | 100 | 300 | 2 |
   | 300 - 500 Euro | 300 | 500 | 3 |
   | Über 500 Euro | 500 | (leer) | 4 |

3. **Für Bereich-Format: Min/Max-Werte**
   - Format zeigt automatisch Schieberegler
   - Kunden können eigene Werte eingeben

**Ergebnis**: Produkte werden nach Preis gefiltert.

---

### Anleitung: Hersteller priorisieren

**Ziel**: Bestimmte Marken in den Ergebnissen bevorzugen

**Voraussetzungen**:
- Produkte verschiedener Hersteller im Shop

**Schritte**:

1. **Herstellergewichtung aktivieren**
   - Öffnen Sie den Produktberater
   - Wechseln Sie zum Tab **Hersteller**
   - Klicken Sie auf **Hersteller hinzufügen**

2. **Hersteller mit Gewichtung verknüpfen**

   | Hersteller | Gewichtung | Effekt |
   |------------|------------|--------|
   | Eigenmarke | 10 | Stark bevorzugt |
   | Partner-Marke | 5 | Leicht bevorzugt |
   | Andere | 0 | Neutral |

3. **Speichern und Testen**
   - **Speichern**
   - Im Berater werden Produkte der Eigenmarke bei gleichem Score höher gerankt

**Ergebnis**: Ihre bevorzugten Marken erscheinen weiter oben in den Ergebnissen.

---

### Anleitung: Live-Aktualisierung aktivieren

**Ziel**: Kunden sehen Ergebnisse in Echtzeit während der Beratung

**Voraussetzungen**:
- Bestehender Produktberater

**Schritte**:

1. **Einstellung aktivieren**
   - Öffnen Sie den Produktberater
   - Aktivieren Sie **Live-Aktualisierung**
   - **Speichern**

2. **Testen**
   - Öffnen Sie den Berater in der Storefront
   - Nach jeder Antwort sollte die Produktliste aktualisiert werden

**Ergebnis**: Kunden sehen sofort, wie ihre Auswahl die Produktempfehlungen beeinflusst.

**Hinweis**: Live-Aktualisierung kann bei vielen Produkten oder langsamen Servern zu Verzögerungen führen.

---

### Anleitung: Berater für verschiedene Kategorien erstellen

**Ziel**: Unterschiedliche Berater für verschiedene Produktkategorien

**Schritte**:

1. **Dynamische Produktgruppe erstellen**
   - Navigieren zu: `Kataloge → Dynamische Produktgruppen`
   - **Hinzufügen**
   - Name: z.B. "Fahrräder"
   - Bedingungen: Kategorie = Fahrräder
   - **Speichern**

2. **Berater mit Produktgruppe verknüpfen**
   - Öffnen Sie den Produktberater
   - Bei **Dynamische Produktgruppe**: Wählen Sie "Fahrräder"
   - **Speichern**

3. **Wiederholen für andere Kategorien**
   - Erstellen Sie separate Berater für Laptops, Kameras, etc.
   - Jeder Berater hat eigene, kategoriespezifische Fragen

**Ergebnis**: Kategoriespezifische Beratung ohne irrelevante Produkte.

---

## Schnellreferenz

| Aufgabe | Wichtige Schritte | Einstellungen |
|---------|-------------------|---------------|
| Berater erstellen | Kataloge → Produktberater → Hinzufügen | Titel, Aktiv |
| Frage erstellen | Berater → Fragen → Hinzufügen | Fragetyp, Format, Position |
| Antwort erstellen | Frage → Antworten → Hinzufügen | Text, Eigenschaft/Hersteller/Preis |
| Sprunglogik | Antwort → Sprung zu | Position der Ziel-Frage |
| CMS einbinden | Erlebniswelt → Block → Produktberater | Berater auswählen |
| Herstellerpriorität | Berater → Hersteller → Hinzufügen | Hersteller, Gewichtung |

---

## Best Practices

1. **Weniger ist mehr**: Beschränken Sie sich auf 3-7 Fragen für optimale Conversion
2. **Wichtiges zuerst**: Stellen Sie die entscheidenden Fragen am Anfang
3. **Gewichtung nutzen**: Differenzieren Sie zwischen kritischen und optionalen Kriterien
4. **Testen Sie gründlich**: Durchlaufen Sie alle Pfade Ihres Beraters
5. **Feedback einbinden**: Beobachten Sie, wo Kunden abbrechen

## Was Sie vermeiden sollten

- Zu viele Fragen (führt zu Abbrüchen)
- Zu komplexe Sprunglogik (schwer zu warten)
- Fehlende Eigenschaftsverknüpfungen (keine Ergebnisse)
- Ungültige Sprungziele (unerwartetes Verhalten)
- Überlappende Preisbereiche (doppelte Ergebnisse)

---

## Verwandte Dokumentation

- [Nutzungsanleitung](usage/usage.md)
- [Fragen konfigurieren](usage/questions.md)
- [Antworten konfigurieren](usage/answers.md)
- [Konfigurationseinstellungen](configuration/settings.md)
