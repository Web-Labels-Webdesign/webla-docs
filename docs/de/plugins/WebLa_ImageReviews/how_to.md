# Anleitungen

Schritt-für-Schritt-Workflows für häufige Aufgaben mit **Bilder in Produktbewertungen**.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
[Kunde lädt Bild im Bewertungsformular hoch]
        ↓
[Bild wird im Medienordner "Image Reviews" gespeichert]
        ↓
[Bewertung + Bildreferenz liegen im Shopware-Backend]
        ↓
[Administrator gibt Bewertung frei]
        ↓
[Galerie auf Produktseite + CMS-Element zeigt Bild]
```

**Beispielablauf**:
1. Kunde schreibt Bewertung und zieht zwei Fotos per Drag & Drop in die Upload-Zone.
2. Nach dem Absenden werden die Dateien im Ordner „Image Reviews" abgelegt und mit der Bewertung verknüpft.
3. Administrator prüft die Bewertung unter **Katalog → Bewertungen** und setzt den Status auf freigegeben.
4. Die Bilder erscheinen sofort in der Galerie auf der Produktseite – und, falls eingebunden, im CMS-Element.

---

## Häufige Workflows

### Anleitung: Plugin einrichten

**Ziel**: Plugin nach der Installation einsatzbereit konfigurieren.

**Zeitaufwand**: ca. 5 Minuten

**Voraussetzungen**:
- Plugin installiert
- Administratorrechte

**Schritte**:

1. **Plugin aktivieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen`
   - Plugin **Bilder in Produktbewertungen** aktivieren.

2. **Konfiguration öffnen**
   - Auf **···** neben dem Plugin klicken → **Konfigurieren**.
   - Optional Verkaufskanal oben im Dialog auswählen.

3. **Fallback-Bilder festlegen (optional)**
   - Bild unter **Bild unter dem Button „Neue Bewertung hinzufügen"** auswählen.
   - Bild unter **Bild bei leerer Bewertungsgalerie** auswählen.

4. **Variantenoption entscheiden**
   - Falls alle Variantenbilder gebündelt angezeigt werden sollen: Schalter aktivieren.

5. **Speichern**.

**Ergebnis**: Kunden können nun Bilder zu ihren Bewertungen hochladen. Die Galerie wird auf der Produktseite automatisch eingebunden.

---

### Anleitung: Bewertung mit Bildern freigeben

**Ziel**: Eine neue Kundenbewertung inklusive Bildern veröffentlichen.

**Zeitaufwand**: 1–2 Minuten pro Bewertung

**Schritte**:

1. **Bewertungsliste öffnen**
   - Navigieren zu: `Kataloge → Bewertungen`

2. **Bewertung auswählen**
   - Neue Bewertung mit Status „nicht freigegeben" öffnen.

3. **Bild-Uploads prüfen**
   - Im oberen Bereich der Karte **Bild-Uploads** erscheinen alle hochgeladenen Vorschaubilder.
   - Auf unpassende oder rechtlich problematische Inhalte achten.

4. **Freigeben oder löschen**
   - Bei Freigabe: Statusschalter auf **freigegeben** setzen und speichern.
   - Bei Ablehnung: Bewertung löschen. Medien können anschließend unter `Inhalte → Medien → Image Reviews` bereinigt werden.

**Ergebnis**: Freigegebene Bewertungen inklusive Bilder erscheinen umgehend in der Storefront.

---

### Anleitung: Bewertungsgalerie in Erlebniswelt einbinden

**Ziel**: Bewertungsbilder als eigenes Element in einer Produktseiten-Erlebniswelt platzieren.

**Zeitaufwand**: 3–5 Minuten

**Schritte**:

1. **Erlebniswelt öffnen**
   - Navigieren zu: `Inhalte → Erlebniswelten`
   - Layout vom Typ **Produktseite** öffnen oder neu anlegen.

2. **Block hinzufügen**
   - **Block hinzufügen** → Kategorie **Commerce** → **Bewertungsbilder** in die gewünschte Sektion ziehen.

3. **Speichern und zuweisen**
   - Layout speichern.
   - Unter `Kataloge → Produkte → [Produkt] → Layout` das neue Layout dem Produkt zuordnen.

**Ergebnis**: Die Galerie erscheint an der gewünschten Stelle der Produktseite.

---

### Anleitung: Uploads in eigenen Medienordner umleiten

**Ziel**: Neue Bewertungsbilder in einem bestehenden Medienordner sammeln.

**Zeitaufwand**: 2 Minuten

**Schritte**:

1. **Zielordner sicherstellen**
   - Unter `Inhalte → Medien` den gewünschten Ordner anlegen oder auswählen.

2. **Plugin-Konfiguration öffnen**
   - `Erweiterungen → Meine Erweiterungen → Bilder in Produktbewertungen → Konfigurieren`

3. **Ordner auswählen**
   - Unter **Optionaler Ziel-Medienordner** den gewünschten Ordner wählen.
   - Speichern.

**Ergebnis**: Alle neuen Uploads landen ab sofort im gewählten Ordner. Bereits vorhandene Bilder bleiben im bisherigen Ordner.

---

## Schnellreferenz

| Aufgabe                           | Wichtige Schritte                                         | Erforderliche Einstellungen      |
| --------------------------------- | --------------------------------------------------------- | -------------------------------- |
| Plugin einrichten                 | Aktivieren → Konfigurieren → Fallback-Bilder              | alle Einstellungen (optional)    |
| Bewertung freigeben               | Katalog → Bewertungen → Status freigegeben                | keine                            |
| CMS-Element einbinden             | Erlebniswelt → Block Commerce → Bewertungsbilder          | keine                            |
| Varianten bündeln                 | Schalter aktivieren                                       | Bilder aller Varianten anzeigen  |

---

## Best Practices

1. **Moderation etablieren**: Alle Bewertungen inklusive Bilder vor Veröffentlichung prüfen – Kundenfotos können ungewollte Inhalte enthalten.
2. **Fallback-Bilder setzen**: Ein Hintergrundbild für leere Galerien sorgt für ein vollständigeres Produktseiten-Layout.
3. **Eigener Medienordner**: Trennen Sie Kundenuploads organisatorisch von redaktionellen Medien, indem Sie den Standardordner „Image Reviews" beibehalten.
4. **Variantenreiche Produkte**: Aktivieren Sie die variantenübergreifende Galerie, damit Kunden das gesamte visuelle Feedback sehen.

## Was Sie vermeiden sollten

- ❌ **Automatische Freigabe aller Bewertungen**: ohne Prüfung können unpassende Bilder veröffentlicht werden.
- ❌ **Löschen des Ordners „Image Reviews"**: bereits hochgeladene Bewertungsbilder verlieren ihre Zuordnung.
- ❌ **Manuelles Verschieben einzelner Medien**: solange keine Referenzen aktualisiert werden, bleiben die Galerien konsistent – verschieben Sie nur, wenn Sie Ihrer Medienstruktur folgen müssen.
