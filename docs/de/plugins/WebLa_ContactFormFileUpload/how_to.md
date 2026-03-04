# Anleitungen

Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Plugin „Kontaktformular – Datei-Upload".

---

## Wie das Plugin funktioniert

### Ablauf eines Datei-Uploads

```
Kunde wählt Datei → Plugin prüft Erweiterung & Größe → Datei wird in Medienverwaltung gespeichert → E-Mail mit Anhang wird versendet
```

**Detaillierter Ablauf**:
1. Kunde füllt das Kontaktformular aus und wählt eine oder mehrere Dateien
2. Nach dem Absenden prüft das Plugin, ob die Dateiendung in der erlaubten Liste steht
3. Das Plugin prüft, ob die Gesamtgröße das konfigurierte Limit nicht überschreitet
4. Gültige Dateien werden in der Shopware Medienverwaltung im gewählten Ordner gespeichert
5. Die gespeicherten Dateien werden als Anhänge an die Kontaktformular-E-Mail angehängt
6. Der Shop-Betreiber erhält die E-Mail mit allen Anhängen

---

## Häufige Workflows

### Anleitung: Plugin erstmalig einrichten

**Ziel**: Das Upload-Feld im Kontaktformular aktivieren und konfigurieren

**Zeitaufwand**: ca. 5 Minuten

**Voraussetzungen**:
- Plugin installiert und aktiviert
- Mindestens ein Medienordner in der Medienverwaltung vorhanden (empfohlen)

**Schritte**:

1. **Medienordner anlegen** (einmalig, empfohlen)
   - Navigieren zu: `Inhalte → Medienverwaltung`
   - Auf **„Ordner erstellen"** klicken
   - Ordner benennen, z.B. „Kontaktformular-Uploads"
   - Speichern

2. **Plugin-Konfiguration öffnen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen`
   - Beim Plugin „Kontaktformular - Datei-Upload" auf **„Konfigurieren"** klicken

3. **Dateitypen festlegen**
   - Im Feld **„Erlaubte Dateierweiterungen"** die gewünschten Endungen eintragen
   - Beispiel: `jpg,jpeg,png,pdf`
   - Für CAD-Dateien ergänzen: `jpg,jpeg,png,pdf,dwg,dxf`

4. **Größenlimit festlegen**
   - **„Maximale Dateigröße in MB"** auf den gewünschten Wert setzen (Standard: 20 MB)

5. **Upload-Typ wählen**
   - **„Upload mehrerer Dateien"** für die meisten Anwendungsfälle empfohlen

6. **Zielordner auswählen**
   - Im Feld **„Ordner für hochgeladene Dateien"** den zuvor erstellten Ordner wählen

7. **Speichern und testen**
   - Auf **„Speichern"** klicken
   - Im Storefront das Kontaktformular aufrufen und das Upload-Feld überprüfen

**Ergebnis**: Das Upload-Feld erscheint im Kontaktformular und Kunden können Dateien anhängen.

---

### Anleitung: Neue Dateierweiterung hinzufügen (z.B. DWG)

**Ziel**: Eine bislang nicht erlaubte Dateiendung für den Upload freischalten

**Zeitaufwand**: ca. 2 Minuten

**Schritte**:

1. **Plugin-Konfiguration öffnen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Kontaktformular - Datei-Upload → Konfigurieren`

2. **Erweiterung hinzufügen**
   - Das Textfeld **„Erlaubte Dateierweiterungen"** anklicken
   - Am Ende der bestehenden Liste `,dwg` ergänzen
   - Beispiel vorher: `jpg,jpeg,png,pdf`
   - Beispiel nachher: `jpg,jpeg,png,pdf,dwg`

3. **Speichern**
   - Auf **„Speichern"** klicken

**Ergebnis**: Kunden können ab sofort DWG-Dateien hochladen. Das Plugin unterstützt alle eingetragenen Erweiterungen – auch Formate außerhalb der Standard-Shopware-Medienbibliothek.

> **Hinweis**: Groß- und Kleinschreibung wird automatisch berücksichtigt. Sie müssen `DWG` und `dwg` nicht separat eintragen.

---

### Anleitung: Upload pro Verkaufskanal konfigurieren

**Ziel**: Unterschiedliche Upload-Einstellungen für verschiedene Verkaufskanäle

**Zeitaufwand**: ca. 5 Minuten pro Verkaufskanal

**Anwendungsbeispiel**: B2B-Shop erlaubt DWG/DXF-Dateien, B2C-Shop nur JPG/PDF

**Schritte**:

1. **Plugin-Konfiguration öffnen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Kontaktformular - Datei-Upload → Konfigurieren`

2. **Verkaufskanal auswählen**
   - Im Dropdown oben auf der Seite den gewünschten Verkaufskanal wählen (statt „Alle Verkaufskanäle")

3. **Kanal-spezifische Einstellungen vornehmen**
   - Gewünschte Einstellungen anpassen (diese gelten nur für den gewählten Verkaufskanal)

4. **Speichern**
   - Auf **„Speichern"** klicken

5. **Für weitere Verkaufskanäle wiederholen**

**Ergebnis**: Jeder Verkaufskanal hat eigene Upload-Einstellungen.

---

### Anleitung: Upload-Feld im Form Builder verwenden

**Ziel**: Ein Upload-Feld in ein benutzerdefiniertes Formular (Erlebniswelt) einbauen

**Voraussetzungen**: Shopware Plan Rise, Evolve oder Beyond (CMS Extensions)

**Schritte**:

1. **Erlebniswelt öffnen**
   - Navigieren zu: `Inhalte → Erlebniswelten`
   - Gewünschte Erlebniswelt auswählen und bearbeiten

2. **Formular-Block finden**
   - Den CMS-Block mit dem Formular im Layout-Editor auswählen

3. **Upload-Feld hinzufügen**
   - Im Formular-Editor auf **„Feld hinzufügen"** klicken
   - Als Feldtyp **„Datei-Upload"** oder **„Datei-Upload (Mehrfach)"** wählen
   - Feldbezeichnung eintragen (z.B. „Anhang" oder „Technische Zeichnung")

4. **Speichern und veröffentlichen**
   - Änderungen speichern
   - Erlebniswelt veröffentlichen

**Ergebnis**: Das Upload-Feld steht im benutzerdefinierten Formular zur Verfügung.

---

## Schnellreferenz

| Aufgabe                         | Navigation                                                                   | Wichtige Einstellung              |
| ------------------------------- | ---------------------------------------------------------------------------- | --------------------------------- |
| Dateitypen anpassen             | Erweiterungen → Meine Erweiterungen → Plugin → Konfigurieren                 | Erlaubte Dateierweiterungen       |
| Größenlimit ändern              | Erweiterungen → Meine Erweiterungen → Plugin → Konfigurieren                 | Maximale Dateigröße in MB         |
| Upload deaktivieren             | Erweiterungen → Meine Erweiterungen → Plugin → Konfigurieren                 | Upload aktivieren (Schalter aus)  |
| Zielordner wechseln             | Erweiterungen → Meine Erweiterungen → Plugin → Konfigurieren                 | Ordner für hochgeladene Dateien   |
| Hochgeladene Dateien einsehen   | Inhalte → Medienverwaltung → [Zielordner]                                    | –                                 |

---

## Best Practices

1. **Zielordner immer festlegen**: Ein dedizierter Ordner (z.B. „Kontaktformular") hält die Medienverwaltung übersichtlich
2. **Nur notwendige Dateitypen erlauben**: Schränken Sie die erlaubten Erweiterungen auf tatsächlich benötigte Formate ein
3. **Größenlimit am Server orientieren**: Der Wert sollte kleiner als die PHP-Einstellungen `upload_max_filesize` und `post_max_size` sein
4. **Regelmäßig aufräumen**: Alte Uploads in der Medienverwaltung periodisch löschen, um Speicherplatz zu sparen

## Was Sie vermeiden sollten

- ❌ **Alle Dateitypen erlauben** (`*`) – Verwenden Sie immer eine konkrete Liste erlaubter Erweiterungen
- ❌ **Zu großes Größenlimit** ohne Serveranpassung – Der PHP-Upload-Limit muss mindestens genauso groß sein
- ❌ **Keinen Zielordner wählen** – Uploads landen dann im Stammverzeichnis der Medienverwaltung und sind schwer auffindbar
