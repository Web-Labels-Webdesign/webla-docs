# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für **Bilder in Produktbewertungen**.

**Navigation**: Erweiterungen → Meine Erweiterungen → Bilder in Produktbewertungen → Konfigurieren

Alle Einstellungen können pro Verkaufskanal überschrieben werden – nutzen Sie dazu oben im Konfigurationsdialog die Verkaufskanal-Auswahl.

---

## Bewertung Datei-Upload Konfiguration

### Optionaler Ziel-Medienordner

| Eigenschaft      | Wert                                      |
| ---------------- | ----------------------------------------- |
| **Typ**          | Auswahl (Medienordner)                    |
| **Standard**     | Leer (Ordner „Image Reviews" wird genutzt) |
| **Erforderlich** | Nein                                      |

**Beschreibung**: Bei der Installation legt das Plugin einen eigenen Medienordner „Image Reviews" an. In diesem Ordner werden alle von Kunden hochgeladenen Bewertungsbilder abgelegt. Setzen Sie diese Option nur, wenn Sie die Uploads stattdessen in einen anderen bereits vorhandenen Ordner umleiten möchten.

**Anwendungsbeispiel**: Sie verwalten Ihre Medien bereits in einer eigenen Ordnerstruktur und möchten, dass Bewertungsbilder dort abgelegt werden – z. B. in einem Ordner „Kundeninhalte".

---

### Bild unter dem Button „Neue Bewertung hinzufügen"

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Medienauswahl |
| **Standard**     | Leer          |
| **Erforderlich** | Nein          |

**Beschreibung**: Wählen Sie ein Bild aus der Medienverwaltung, das in der Storefront unterhalb des Buttons „Neue Bewertung hinzufügen" angezeigt wird. Dieses Bild kann z. B. ein Hinweis oder eine Aufforderung zum Hochladen eigener Fotos enthalten.

**Anwendungsbeispiel**: Ein Banner, das Kunden motiviert, eigene Produktfotos mit ihrer Bewertung hochzuladen.

---

### Bild bei leerer Bewertungsgalerie

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Medienauswahl |
| **Standard**     | Leer          |
| **Erforderlich** | Nein          |

**Beschreibung**: Wählen Sie ein Bild, das im Hintergrund der Galerie angezeigt wird, wenn für ein Produkt noch keine Bewertungsbilder vorhanden sind. So wirkt der Bereich auch ohne Inhalte visuell vollständig.

**Anwendungsbeispiel**: Ein dezentes Platzhalter-Bild oder eine Grafik mit dem Hinweis „Noch keine Kundenfotos verfügbar".

---

### Bilder aller Varianten in Galerie anzeigen

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Schalter |
| **Standard**     | Aus    |
| **Erforderlich** | Nein   |

**Beschreibung**: Wenn aktiviert, werden in der Galerie auf der Produktseite nicht nur die Bilder zur aktuell angezeigten Produktvariante angezeigt, sondern Bilder aus Bewertungen **aller** Varianten desselben Produkts.

**Optionen**:
- `Aus`: Nur Bilder zu Bewertungen der aktuell ausgewählten Variante werden angezeigt.
- `An`: Bilder aus Bewertungen aller Varianten werden gemeinsam angezeigt.

**Anwendungsbeispiel**: Bei Produkten mit vielen Farb- oder Größenvarianten möchten Sie allen Besuchern die gesamte Bildvielfalt zeigen, unabhängig davon, welche Variante gerade ausgewählt ist.

---

## Verkaufskanal-spezifische Einstellungen

| Einstellung                          | Geltungsbereich  |
| ------------------------------------ | ---------------- |
| Optionaler Ziel-Medienordner         | Pro Verkaufskanal |
| Bild unter „Neue Bewertung"-Button   | Pro Verkaufskanal |
| Bild bei leerer Bewertungsgalerie    | Pro Verkaufskanal |
| Bilder aller Varianten anzeigen      | Pro Verkaufskanal |

---

## Empfohlene Konfigurationen

### Für Shops mit vielen Produktvarianten

| Einstellung                      | Empfohlener Wert |
| -------------------------------- | ---------------- |
| Bilder aller Varianten anzeigen  | An               |

### Für Shops mit zentraler Medienorganisation

| Einstellung                  | Empfohlener Wert                    |
| ---------------------------- | ----------------------------------- |
| Optionaler Ziel-Medienordner | Eigener Ordner (z. B. „Kundeninhalte") |
