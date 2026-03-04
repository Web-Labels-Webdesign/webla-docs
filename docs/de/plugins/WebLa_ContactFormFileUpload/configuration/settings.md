# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das Plugin „Kontaktformular – Datei-Upload".

**Navigation**: Erweiterungen → Meine Erweiterungen → Kontaktformular - Datei-Upload → Konfigurieren

Alle Einstellungen können global oder pro Verkaufskanal konfiguriert werden. Wählen Sie dazu oben in der Konfigurationsseite den gewünschten Verkaufskanal aus.

---

## Kontaktformular – Datei-Upload Konfiguration

### Datei-Upload für Standard-Kontaktformular aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Aktiviert oder deaktiviert das Upload-Feld im Standard-Kontaktformular von Shopware. Wenn deaktiviert, verhält sich das Kontaktformular wie gewohnt ohne Upload-Möglichkeit.

**Anwendungsbeispiel**: Deaktivieren Sie diese Option, wenn Sie den Upload nur im Form Builder (CMS Extensions) nutzen möchten, aber nicht im Standard-Kontaktformular.

---

### Erlaubte Dateierweiterungen

| Eigenschaft      | Wert                                       |
| ---------------- | ------------------------------------------ |
| **Typ**          | Textfeld                                   |
| **Standard**     | `gif,png,jpg,jpeg,pdf`                     |
| **Erforderlich** | Ja                                         |

**Beschreibung**: Kommagetrennte Liste der Dateiendungen, die Kunden hochladen dürfen. Das Plugin unterstützt alle hier eingetragenen Erweiterungen vollständig – auch Formate, die nicht zur Standard-Shopware Medienbibliothek gehören, wie CAD-Formate (DWG, DXF) oder andere branchenspezifische Dateitypen.

Groß- und Kleinschreibung spielt keine Rolle: `dwg` und `DWG` werden beide akzeptiert.

**Beispiele**:
- Standardformate: `gif,png,jpg,jpeg,pdf`
- Mit CAD-Dateien: `jpg,jpeg,png,pdf,dwg,dxf`
- Erweitert: `jpg,jpeg,png,gif,pdf,doc,docx,dwg,dxf,zip`

**Anwendungsbeispiel**: Ein Metallbau-Unternehmen trägt `jpg,pdf,dwg,dxf,step` ein, damit Kunden technische Zeichnungen direkt über das Kontaktformular übermitteln können.

---

### Maximale Dateigröße in MB

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Zahl    |
| **Standard**     | `20`    |
| **Einheit**      | MB      |
| **Erforderlich** | Ja      |

**Beschreibung**: Legt die maximale erlaubte Gesamtgröße aller hochgeladenen Dateien in Megabyte fest. Bei aktiviertem Mehrfach-Upload gilt dieser Wert als **Gesamtsumme** aller Dateien zusammen, nicht pro Datei.

**Anwendungsbeispiel**: Wenn Sie `20` eintragen und Mehrfach-Upload aktiviert ist, können Kunden z.B. 4 Dateien à 5 MB oder 1 Datei mit 20 MB hochladen – aber nicht 3 Dateien à 10 MB (30 MB > 20 MB).

> **Hinweis**: Stellen Sie sicher, dass der Wert mit den PHP-Einstellungen Ihres Servers (`upload_max_filesize`, `post_max_size`) kompatibel ist.

---

### Upload-Typ

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Auswahl                     |
| **Standard**     | Upload mehrerer Dateien     |
| **Erforderlich** | Ja                          |

**Beschreibung**: Legt fest, ob Kunden eine oder mehrere Dateien über das Dateiauswahl-Dialogfeld auswählen können.

**Optionen**:
- `Einzelner Datei-Upload`: Kunden können nur eine Datei über den Datei-Dialog auswählen
- `Upload mehrerer Dateien`: Kunden können mehrere Dateien gleichzeitig im Datei-Dialog markieren

> **Hinweis**: Per Drag & Drop können Kunden **immer** mehrere Dateien hochladen, unabhängig von dieser Einstellung. Die Einstellung gilt nur für den klassischen Datei-Dialog (Klick auf das Upload-Feld).

**Anwendungsbeispiel**: Wählen Sie „Einzelner Datei-Upload" für einfache Anfragen (z.B. Belegfotos), oder „Upload mehrerer Dateien" wenn Kunden häufig mehrere Dokumente einsenden (z.B. Planungsunterlagen aus mehreren Seiten).

---

### Ordner für hochgeladene Dateien

| Eigenschaft      | Wert             |
| ---------------- | ---------------- |
| **Typ**          | Ordnerauswahl    |
| **Standard**     | Kein (leer)      |
| **Erforderlich** | Empfohlen        |

**Beschreibung**: Wählen Sie den Ordner in der Shopware Medienverwaltung, in dem die per Kontaktformular hochgeladenen Dateien gespeichert werden sollen. Wenn kein Ordner ausgewählt ist, werden Dateien im Stammverzeichnis der Medienverwaltung abgelegt.

**Anwendungsbeispiel**: Erstellen Sie vorab einen Ordner „Kundenuploads" oder „Kontaktformular" in der Medienverwaltung und wählen Sie ihn hier aus, um alle Uploads übersichtlich zu verwalten.

---

## Verkaufskanal-spezifische Einstellungen

Alle oben genannten Einstellungen können pro Verkaufskanal unterschiedlich konfiguriert werden.

| Einstellung                          | Geltungsbereich         | Typischer Anwendungsfall                                              |
| ------------------------------------ | ----------------------- | --------------------------------------------------------------------- |
| Upload aktivieren                    | Global/Pro Verkaufskanal | Upload nur in bestimmten Shops aktivieren                            |
| Erlaubte Dateierweiterungen          | Global/Pro Verkaufskanal | B2B-Shop erlaubt DWG/DXF, B2C-Shop nur JPG/PDF                      |
| Maximale Dateigröße                  | Global/Pro Verkaufskanal | Größeres Limit für einen Fachhandels-Shop                            |
| Upload-Typ                           | Global/Pro Verkaufskanal | Mehrfach-Upload nur im B2B-Bereich                                   |
| Zielordner                           | Global/Pro Verkaufskanal | Getrennte Ordner pro Verkaufskanal für bessere Übersicht             |

---

## Empfohlene Konfigurationen

### Für allgemeine Online-Shops (B2C)

| Einstellung                 | Empfohlener Wert          |
| --------------------------- | ------------------------- |
| Upload aktivieren           | Aktiviert                 |
| Erlaubte Dateierweiterungen | `jpg,jpeg,png,gif,pdf`    |
| Maximale Dateigröße         | `10`                      |
| Upload-Typ                  | Upload mehrerer Dateien   |

### Für technische Shops oder B2B mit CAD-Dateien

| Einstellung                 | Empfohlener Wert                    |
| --------------------------- | ----------------------------------- |
| Upload aktivieren           | Aktiviert                           |
| Erlaubte Dateierweiterungen | `jpg,jpeg,png,pdf,dwg,dxf,step,stp` |
| Maximale Dateigröße         | `50`                                |
| Upload-Typ                  | Upload mehrerer Dateien             |
