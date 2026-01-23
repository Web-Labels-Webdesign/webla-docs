# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für Media Booster.

**Navigation**: Einstellungen → Erweiterungen → Media Booster

---

## Verarbeitungseinstellungen

### Automatische Verarbeitung

| Eigenschaft      | Wert                                                              |
| ---------------- | ----------------------------------------------------------------- |
| **Typ**          | Auswahl                                                           |
| **Standard**     | Nur manuell (keine automatische Verarbeitung)                     |
| **Erforderlich** | Nein                                                              |

**Beschreibung**: Legt fest, wie oft Media Booster automatisch Bilder verarbeiten soll. Im manuellen Modus müssen Sie die Verarbeitung selbst über das Dashboard starten.

**Optionen**:
- `Nur manuell (keine automatische Verarbeitung)`: Keine automatische Verarbeitung. Sie starten den Prozess manuell über das Dashboard unter Einstellungen → Erweiterungen → Media Booster
- `1x täglich`: Das Plugin verarbeitet einmal täglich automatisch neue und unverarbeitete Bilder
- `1x wöchentlich`: Wöchentliche automatische Verarbeitung
- `1x monatlich`: Monatliche automatische Verarbeitung

**Anwendungsbeispiel**: Wählen Sie "1x täglich", wenn Sie regelmäßig neue Produkte hinzufügen und möchten, dass Bilder automatisch optimiert werden.

---

### Stapelgröße

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 50     |
| **Erforderlich** | Nein   |

**Beschreibung**: Die Anzahl der Bilder, die pro Durchlauf verarbeitet werden. Niedrigere Werte reduzieren die Serverlast, erhöhen aber die Gesamtdauer der Verarbeitung.

**Anwendungsbeispiel**: Reduzieren Sie den Wert auf 20-30, wenn Sie auf einem Shared Hosting mit begrenzten Ressourcen arbeiten. Erhöhen Sie ihn auf 100+, wenn Sie einen leistungsstarken Server haben.

---

## Bildgrößenänderung

### Bildgrößenänderung aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Wenn aktiviert, werden Originalbilder auf die konfigurierten Maximalabmessungen verkleinert und überschrieben. Dies spart Speicherplatz auf dem Server.

**Wichtig**: Diese Funktion überschreibt die Originalbilder! Stellen Sie sicher, dass Sie ein Backup haben, bevor Sie diese Funktion aktivieren.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Lieferanten Ihnen regelmäßig zu große Produktbilder (z.B. 5000x5000 Pixel) liefern.

---

### Maximale Breite (px)

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Zahl      |
| **Standard**     | (leer)    |
| **Platzhalter**  | 2000      |
| **Erforderlich** | Nein      |

**Beschreibung**: Die maximale Breite in Pixel, auf die Bilder verkleinert werden. Leer lassen, um die Breite nicht zu begrenzen.

**Anwendungsbeispiel**: Setzen Sie den Wert auf 2000 oder 2500 für hochauflösende Displays, oder auf 1200-1500 für Standard-Webseiten.

---

### Maximale Höhe (px)

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Zahl      |
| **Standard**     | (leer)    |
| **Platzhalter**  | 2000      |
| **Erforderlich** | Nein      |

**Beschreibung**: Die maximale Höhe in Pixel, auf die Bilder verkleinert werden. Leer lassen, um die Höhe nicht zu begrenzen.

**Anwendungsbeispiel**: Setzen Sie den gleichen Wert wie bei der maximalen Breite für konsistente Ergebnisse.

---

### Größenänderungsmodus

| Eigenschaft      | Wert                                       |
| ---------------- | ------------------------------------------ |
| **Typ**          | Auswahl                                    |
| **Standard**     | In Grenzen einpassen (Seitenverhältnis beibehalten) |
| **Erforderlich** | Nein                                       |

**Beschreibung**: Bestimmt, wie übergroße Bilder verkleinert werden sollen.

**Optionen**:
- `In Grenzen einpassen (Seitenverhältnis beibehalten)`: Das Bild wird so verkleinert, dass es vollständig in die angegebenen Maximalmaße passt. Das Seitenverhältnis bleibt erhalten.
- `Nur größte Seite begrenzen`: Nur die jeweils größere Seite (Breite oder Höhe) wird auf das Maximum begrenzt.

**Anwendungsbeispiel**: Verwenden Sie "In Grenzen einpassen" für die meisten Anwendungsfälle, da so sichergestellt wird, dass kein Bild die Maximalmaße überschreitet.

---

## Bildkonvertierung

### Konvertierungsmodus

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Auswahl                     |
| **Standard**     | Aus - Keine Konvertierung   |
| **Erforderlich** | Nein                        |

**Beschreibung**: Wählen Sie das Zielformat für die Bildkonvertierung. WebP und AVIF sind moderne Bildformate mit besserer Kompression als JPG/PNG.

**Optionen**:
- `Aus - Keine Konvertierung`: Keine Formatkonvertierung
- `WebP - JPG, JPEG, PNG in WebP umwandeln`: Konvertiert alle geeigneten Bilder in das WebP-Format. WebP wird von allen modernen Browsern unterstützt.
- `AVIF - JPG, JPEG, PNG, WebP in AVIF umwandeln`: Konvertiert Bilder in das AVIF-Format. AVIF bietet noch bessere Kompression als WebP, wird aber von älteren Browsern nicht unterstützt.

**Hinweis zur AVIF-Performance**: AVIF-Konvertierung funktioniert am besten mit Imagick. Bei Verwendung der GD-Bibliothek als Fallback werden Bilder größer als 4 Megapixel (z.B. 2000x2000) übersprungen, da der GD AVIF-Encoder deutlich langsamer ist. Falls viele Bilder bei der AVIF-Konvertierung übersprungen werden, empfehlen wir Imagick mit AVIF-Unterstützung zu installieren oder stattdessen WebP zu verwenden.

**Wichtig**: Die Originalbilder werden NICHT gelöscht! Media Booster erstellt zusätzliche WebP/AVIF-Dateien neben den Originalen. Die Storefront liefert dann automatisch das optimierte Format aus, wenn der Browser es unterstützt.

**Anwendungsbeispiel**: Wählen Sie "WebP" für maximale Browserkompatibilität oder "AVIF" für bestmögliche Kompression bei modernen Browsern.

---

### Bildqualität (1-100)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 80     |
| **Erforderlich** | Nein   |

**Beschreibung**: Die Qualitätsstufe für konvertierte Bilder. Höhere Werte bedeuten bessere Qualität, aber größere Dateien.

**Anwendungsbeispiel**: 80-85 ist ein guter Kompromiss zwischen Qualität und Dateigröße. Für Produkte mit vielen Details (z.B. Schmuck) können Sie 90+ verwenden.

---

### Thumbnail-Qualität (1-100)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 60     |
| **Erforderlich** | Nein   |

**Beschreibung**: Die Qualitätsstufe für konvertierte Thumbnails. Da Thumbnails kleiner sind, können sie mit niedrigerer Qualität gespeichert werden, ohne dass es sichtbar wird.

**Anwendungsbeispiel**: 60-70 ist für die meisten Shops ausreichend. Erhöhen Sie den Wert, wenn Thumbnails auf Ihrer Seite sehr groß dargestellt werden.

---

## SEO - Alt Tag

### Alt Tag Modus

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Auswahl    |
| **Standard**     | Deaktiviert|
| **Erforderlich** | Nein       |

**Beschreibung**: Aktiviert oder deaktiviert die automatische Optimierung von Alt-Tags für Bilder.

**Optionen**:
- `Deaktiviert`: Keine automatische Alt-Tag-Optimierung
- `Alt Tags optimieren`: Alt-Tags werden basierend auf den konfigurierten Vorlagen automatisch gesetzt

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn viele Ihrer Produktbilder keine oder schlechte Alt-Tags haben.

---

### Produktbilder - Aktualisierungsmodus

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Auswahl    |
| **Standard**     | Nur leere ergänzen |
| **Erforderlich** | Nein       |

**Beschreibung**: Bestimmt, ob vorhandene Alt-Tags überschrieben werden sollen.

**Optionen**:
- `Alle überschreiben`: Alle Alt-Tags werden mit den generierten Werten überschrieben
- `Nur leere ergänzen`: Nur Bilder ohne Alt-Tag erhalten einen neuen Wert

**Anwendungsbeispiel**: Wählen Sie "Nur leere ergänzen", wenn Sie bereits manuell optimierte Alt-Tags haben, die nicht überschrieben werden sollen.

---

### Produktbilder - Alt Vorlage

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Auswahl    |
| **Standard**     | Produktname|
| **Erforderlich** | Nein       |

**Beschreibung**: Die Vorlage für automatisch generierte Alt-Tags bei Produktbildern.

**Optionen**:
- `Produktname`: Der Alt-Tag enthält nur den Produktnamen (z.B. "Rotes T-Shirt XL")
- `Produktname + Shopname`: Der Alt-Tag enthält Produktname und Shopname (z.B. "Rotes T-Shirt XL Mein Shop")

**Anwendungsbeispiel**: Verwenden Sie "Produktname + Shopname" für bessere Markenwahrnehmung in der Bildersuche.

---

### Inhaltsbilder - Alt Vorlage

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Auswahl    |
| **Standard**     | Shopname   |
| **Erforderlich** | Nein       |

**Beschreibung**: Die Vorlage für Alt-Tags bei Inhaltsbildern (nicht-Produktbilder wie Banner, Logos etc.).

**Optionen**:
- `Shopname`: Nur der Shopname wird verwendet
- `Eigener Text`: Ein selbst definierter Text
- `Eigener Text + Shopname`: Kombination aus eigenem Text gefolgt vom Shopnamen
- `Shopname + Eigener Text`: Kombination aus Shopname gefolgt vom eigenen Text

---

### Inhaltsbilder - Eigener Text

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Standard**     | (leer) |
| **Erforderlich** | Nein   |

**Beschreibung**: Der eigene Text, der für Alt-Tags bei Inhaltsbildern verwendet wird (nur relevant, wenn eine Vorlage mit "Eigener Text" gewählt ist).

---

## SEO - Title

### Title-Optimierung aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert die automatische Optimierung des Bild-Title-Attributs. Das Title-Attribut wird als Tooltip angezeigt, wenn der Benutzer mit der Maus über das Bild fährt.

---

### Produktbilder - Aktualisierungsmodus (Title)

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Auswahl    |
| **Standard**     | Nur leere ergänzen |
| **Erforderlich** | Nein       |

**Beschreibung**: Bestimmt, ob vorhandene Title-Attribute überschrieben werden sollen.

**Optionen**:
- `Alle überschreiben`: Alle Title-Attribute werden überschrieben
- `Nur leere ergänzen`: Nur Bilder ohne Title erhalten einen neuen Wert

---

### Produktbilder - Title Vorlage

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Auswahl    |
| **Standard**     | Produktname|
| **Erforderlich** | Nein       |

**Beschreibung**: Die Vorlage für automatisch generierte Title-Attribute bei Produktbildern.

**Optionen**:
- `Produktname`: Nur der Produktname
- `Produktname + Shopname`: Produktname gefolgt vom Shopnamen

---

### Inhaltsbilder - Title Vorlage

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Auswahl    |
| **Standard**     | Shopname   |
| **Erforderlich** | Nein       |

**Beschreibung**: Die Vorlage für Title-Attribute bei Inhaltsbildern.

**Optionen**:
- `Shopname`: Nur der Shopname
- `Eigener Text`: Ein selbst definierter Text
- `Eigener Text + Shopname`: Eigener Text gefolgt vom Shopnamen
- `Shopname + Eigener Text`: Shopname gefolgt vom eigenen Text

---

### Inhaltsbilder - Eigener Text (Title)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Text   |
| **Standard**     | (leer) |
| **Erforderlich** | Nein   |

**Beschreibung**: Der eigene Text für Title-Attribute bei Inhaltsbildern.

---

## SEO - Dateiname

### Produktbilder - Dateiname Vorlage

| Eigenschaft      | Wert             |
| ---------------- | ---------------- |
| **Typ**          | Auswahl          |
| **Standard**     | Keine Änderung   |
| **Erforderlich** | Nein             |

**Beschreibung**: Bestimmt, ob und wie Produktbild-Dateinamen für SEO optimiert werden sollen.

**Optionen**:
- `Keine Änderung`: Dateinamen bleiben unverändert
- `Produktname`: z.B. "rotes-t-shirt-xl.jpg"
- `Produktname - Shopname`: z.B. "rotes-t-shirt-xl-mein-shop.jpg"
- `Produktname - Produktnummer`: z.B. "rotes-t-shirt-xl-sw12345.jpg"
- `Produktname - Herstellernummer`: z.B. "rotes-t-shirt-xl-man123.jpg"
- `Produktname - Produktnummer - Shopname`: z.B. "rotes-t-shirt-xl-sw12345-mein-shop.jpg"
- `Produktname - Herstellernummer - Shopname`: z.B. "rotes-t-shirt-xl-man123-mein-shop.jpg"

**Wichtig**: Diese Funktion benennt die Dateien physisch um. Nach der Umbenennung werden die Thumbnails automatisch neu generiert.

**Anwendungsbeispiel**: Verwenden Sie "Produktname" oder "Produktname - Produktnummer" für SEO-freundliche Dateinamen, die in der Google-Bildersuche besser gefunden werden.

---

### Variantenbehandlung

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Auswahl       |
| **Standard**     | Elternartikel |
| **Erforderlich** | Nein          |

**Beschreibung**: Bestimmt, welches Produkt für die Dateinamen-Generierung bevorzugt wird, wenn ein Bild von Eltern- und Variantenartikeln geteilt wird.

**Optionen**:
- `Elternartikel`: Der Name des Hauptprodukts wird verwendet
- `Variantenartikel`: Der Name der Variante wird verwendet

**Anwendungsbeispiel**: Wählen Sie "Elternartikel", wenn Ihre Varianten keine aussagekräftigen eigenen Namen haben.

---

## Empfohlene Konfigurationen

### Für Einsteiger (sichere Standardeinstellungen)

| Einstellung               | Empfohlener Wert                   |
| ------------------------- | ---------------------------------- |
| Automatische Verarbeitung | Nur manuell                        |
| Stapelgröße               | 50                                 |
| Bildgrößenänderung        | Aus                                |
| Konvertierungsmodus       | WebP                               |
| Bildqualität              | 80                                 |
| Thumbnail-Qualität        | 60                                 |
| Alt Tag Modus             | Alt Tags optimieren                |
| Alt-Tag Aktualisierung    | Nur leere ergänzen                 |

### Für Performance-Optimierung (maximale Einsparung)

| Einstellung               | Empfohlener Wert                   |
| ------------------------- | ---------------------------------- |
| Automatische Verarbeitung | 1x täglich                         |
| Stapelgröße               | 100                                |
| Bildgrößenänderung        | Ein                                |
| Maximale Breite           | 2000                               |
| Maximale Höhe             | 2000                               |
| Konvertierungsmodus       | WebP                               |
| Bildqualität              | 80                                 |
| Thumbnail-Qualität        | 60                                 |

### Für SEO-Fokus

| Einstellung                 | Empfohlener Wert                   |
| --------------------------- | ---------------------------------- |
| Alt Tag Modus               | Alt Tags optimieren                |
| Alt-Tag Aktualisierung      | Nur leere ergänzen                 |
| Alt-Tag Vorlage             | Produktname + Shopname             |
| Title-Optimierung           | Ein                                |
| Dateiname Vorlage           | Produktname - Produktnummer        |
