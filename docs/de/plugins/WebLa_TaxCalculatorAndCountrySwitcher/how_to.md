# Anleitungen

Dieses Dokument bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Plugin *Steuernachkalkulation und Lieferländer*.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
[Besucher wählt Land im Dropdown]
                 ↓
[POST /switch_context mit country=ISO]
                 ↓
[CustomConfigureController schreibt sw-country-Cookie & leert Produkt-Cache]
                 ↓
[BaseContextFactoryDecorator überschreibt CountryId im SalesChannelContext]
                 ↓
 ┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
 ↓                          ↓                          ↓                          ↓
[CustomProductPrice    [CustomCartProcessor     [CustomDelivery       [Checkout / Registrierung
 Calculator             aktualisiert Cart-       Calculator passt      übernimmt vorausgewähltes
 rechnet Bruttos aus    Line-Items auf           Versandkosten an     Lieferland]
 Nettos & Landes-Tax]   neue Preise]             Landes-Tax an]
```

**Kurzfassung**: Der Umschalter setzt das Lieferland im Context-Objekt. Alle folgenden Preis-, Warenkorb- und Versandberechnungen laufen anschließend mit dem neuen Steuersatz durch — immer vom Netto her gerechnet.

---

## Häufige Workflows

### Anleitung: Plugin erstmalig einrichten

**Ziel**: Plugin nach Installation betriebsbereit konfigurieren

**Zeitaufwand**: ca. 15 Minuten

**Voraussetzungen**:
- Plugin installiert und aktiviert
- Mindestens ein Verkaufskanal mit aktivierten Lieferländern
- Korrekte Steuersätze pro Land in Shopware

**Schritte**:

1. **Plugin-Konfiguration öffnen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Steuernachkalkulation und Lieferländer → Konfigurieren`
   - Oben rechts den gewünschten Verkaufskanal auswählen

2. **Basis-Konfiguration einstellen**
   - `Aktiviere das Auswahl-Dropdown` → ein
   - `Zeige Flaggen im Dropdown Menü` → nach Wunsch
   - `Topbar-Anzeigemodus` → `Topbar ersetzen` für einfache Themes, `Theme-Topbar erweitern` wenn Ihr Theme bereits eine Topbar hat

3. **Heimatland ausschließen**
   - Karte `Berechnungseinstellungen` öffnen
   - Im Feld `Länder ausschließen` Ihr Heimatland (z. B. Deutschland) hinzufügen
   - Grund: Dort sind die Bruttopreise bereits korrekt hinterlegt

4. **Versandkosten aktivieren** (optional)
   - Karte `Versandkosten-Konfiguration`
   - `Versandkosten auf Basis der Nettokosten anpassen` aktivieren

5. **Speichern und Caches leeren**
   - Speichern-Button oben rechts
   - `Einstellungen → System → Cache & Indizes → Cache leeren`

**Ergebnis**: Der Länderumschalter erscheint in der Storefront und rechnet Preise für Nicht-Heimatländer automatisch neu.

**Fehlerbehebung**: Siehe Abschnitt „Fehlerbehebung" in der [Nutzungsanleitung](usage/usage.md#fehlerbehebung).

---

### Anleitung: Neues Lieferland zur Auswahl hinzufügen

**Ziel**: Ein bisher nicht angebotenes Land im Umschalter-Dropdown freischalten

**Zeitaufwand**: ca. 5 Minuten

**Schritte**:

1. **Land im Verkaufskanal aktivieren**
   - Navigieren zu: `Verkaufskanäle → [Ihr Verkaufskanal] → Allgemein → Länder`
   - Gewünschtes Land aktivieren und speichern

2. **Steuersatz für das Land prüfen**
   - Navigieren zu: `Einstellungen → Shop → Steuern`
   - Für jedes Produkt, das nach diesem Land geliefert werden kann, prüfen, ob eine passende Länderregel existiert
   - Falls nicht: neue Steuerregel mit dem korrekten Satz anlegen

3. **Versandmethode für das Land freigeben**
   - Navigieren zu: `Einstellungen → Shop → Versand`
   - Für relevante Versandmethoden das neue Land in der Verfügbarkeitsregel hinzufügen

4. **Caches leeren**

**Ergebnis**: Das neue Land erscheint im Dropdown und Preise werden korrekt neu berechnet.

---

### Anleitung: Styling an das Theme anpassen

**Ziel**: Dropdown-Farben und Abstände an das Corporate Design des Shops anpassen

**Zeitaufwand**: ca. 10 Minuten

**Schritte**:

1. **Plugin-Konfiguration öffnen**
2. **Karte `Styling-Konfiguration`** öffnen
3. **Farben setzen**
   - `Textfarbe des Select Feldes` — an Theme-Vordergrundfarbe anpassen
   - `Hintergrundfarbe des Select Feldes` — an Theme-Hintergrundfarbe anpassen
   - `Rahmenfarbe des Select Feldes` — z. B. Akzentfarbe Ihres Themes
4. **Abstände und Rahmen**
   - `Innerer Abstand des Select Feldes`: z. B. `8px 12px`
   - `Radius des Select Feldes`: z. B. `4px`
   - `Dicke des Rahmens des Select Feldes`: z. B. `1px`
   - `Breite des Select Feldes`: z. B. `180px` oder `auto`
5. **Speichern** und Storefront-Cache leeren

**Ergebnis**: Der Länderumschalter übernimmt die neuen CSS-Variablen im Frontend.

---

### Anleitung: Upgrade von 4.x oder 3.x auf 5.0.0

**Ziel**: Bestehende Installation auf die Multi-Version-Code-Basis umstellen

**Zeitaufwand**: ca. 10 Minuten

**Voraussetzungen**:
- Shopware 6.6 oder 6.7
- Backup der Datenbank und `custom/plugins/WebLa_TaxCalculatorAndCountrySwitcher/`

**Schritte**:

1. **Backup erstellen** — Datenbank und Plugin-Ordner
2. **Shopware-Version prüfen** — mindestens 6.6.0 erforderlich
3. **Altes Plugin deaktivieren**: `Erweiterungen → Meine Erweiterungen → Deaktivieren`
4. **Neues ZIP hochladen** über den Plugin Manager oder direkt in `custom/plugins/` ersetzen
5. **Plugin aktualisieren und aktivieren**:
   ```
   bin/console plugin:refresh
   bin/console plugin:update WebLa_TaxCalculatorAndCountrySwitcher
   bin/console plugin:activate WebLa_TaxCalculatorAndCountrySwitcher
   bin/console cache:clear
   ```
6. **Konfiguration prüfen** — alle Einstellungen bleiben erhalten
7. **Storefront testen** — Länderumschalter in allen Verkaufskanälen stichprobenartig verwenden

**Ergebnis**: Die Installation läuft auf Version 5.0.0 mit der Multi-Version-Code-Basis. Alle Einstellungen und Verkaufskanal-Konfigurationen bleiben erhalten.

---

## Schnellreferenz

| Aufgabe                                  | Wichtige Schritte                                          | Erforderliche Einstellungen                 |
| ---------------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| Plugin aktivieren                        | Erweiterungen → Aktivieren → Konfigurieren                 | Aktiviere das Auswahl-Dropdown              |
| Flaggen einblenden                       | Konfiguration → Basis-Konfiguration                        | Zeige Flaggen im Dropdown Menü              |
| Heimatland überspringen                  | Konfiguration → Berechnungseinstellungen                   | Länder ausschließen                         |
| Versandkosten neu berechnen              | Konfiguration → Versandkosten-Konfiguration                | Versandkosten auf Basis der Nettokosten anpassen |
| Topbar des Themes erhalten               | Konfiguration → Basis-Konfiguration                        | Topbar-Anzeigemodus = `Theme-Topbar erweitern` |
| Dropdown-Styling                         | Konfiguration → Styling-Konfiguration                      | Alle Styling-Felder                         |

---

## Best Practices

1. **Heimatland immer ausschließen**: In Ihrem Hauptmarkt sind die Bruttopreise korrekt gepflegt — doppelte Berechnung vermeidet unnötige Last und Rundungsunterschiede
2. **Steuersätze pro Land konsequent pflegen**: Das Plugin kann nur so gut rechnen, wie die hinterlegten Landes-Steuerregeln es erlauben
3. **Testprodukt anlegen**: Ein fixes Testprodukt mit bekanntem Nettopreis hilft, die Korrektheit der Berechnung für jedes Zielland zu überprüfen
4. **Cache-Verhalten beachten**: Das Plugin ergänzt den `country`-Parameter im HTTP-Cache-Key — CDN und Reverse Proxies müssen diesen Parameter beachten
5. **Pro Verkaufskanal konfigurieren**: Unterschiedliche Shops (z. B. B2C und B2B) haben oft unterschiedliche Anforderungen — nutzen Sie die Verkaufskanal-spezifische Konfiguration

## Was Sie vermeiden sollten

- ❌ **Alle Länder gleichzeitig ausschließen** — dann hat das Plugin keine Wirkung mehr, Sie können es ebenso deaktivieren
- ❌ **Preise im Heimatland doppelt berechnen lassen** — Heimatland immer in die Ausschlussliste aufnehmen
- ❌ **Fehlende Steuerregeln ignorieren** — ohne Landes-Steuerregel greift ein Fallback, der zu falschen Bruttopreisen führen kann
- ❌ **Storefront-Cache nach Konfigurationsänderung nicht leeren** — alte Werte bleiben sonst im HTTP-Cache
