# Nutzungsanleitung

Diese Anleitung beschreibt alle Funktionen des Plugins „Kontaktformular – Datei-Upload" aus Sicht des Shop-Betreibers und der Kunden.

---

## Inhaltsverzeichnis

- [Das Upload-Feld im Storefront](#das-upload-feld-im-storefront)
- [Drag & Drop](#drag--drop)
- [Mehrfach-Upload](#mehrfach-upload)
- [Hochgeladene Dateien im Admin](#hochgeladene-dateien-im-admin)
- [Form Builder Integration](#form-builder-integration)
- [Fehlerbehebung](#fehlerbehebung)

---

## Das Upload-Feld im Storefront

### Was es bewirkt

Unterhalb des Standard-Kontaktformulars erscheint automatisch ein Upload-Feld, sobald das Plugin aktiviert ist. Kunden können hierüber Dateien anhängen, bevor sie das Formular absenden.

### Was Kunden sehen

Das Upload-Feld besteht aus:
- Einem Upload-Symbol mit Beschriftung
- Einem Klick-Bereich zum Öffnen des Datei-Dialogs
- Einem Drag & Drop-Bereich
- Einer Vorschau der ausgewählten Dateien (Dateinamen)

**Ort im Storefront**: Das Upload-Feld erscheint direkt im Kontaktformular, vor den Pflichtfeldhinweisen.

### So laden Kunden Dateien hoch

1. Das Kontaktformular aufrufen (z.B. unter `/kontakt`)
2. Formularfelder ausfüllen (Name, E-Mail, Nachricht)
3. Im Upload-Bereich auf das Feld klicken → Datei-Dialog öffnet sich
4. Gewünschte Datei(en) auswählen und bestätigen
5. Die ausgewählten Dateien erscheinen in der Vorschau
6. Formular absenden – Dateien werden automatisch mitgeschickt

---

## Drag & Drop

### Was es bewirkt

Kunden können Dateien direkt vom Desktop oder Datei-Explorer in das Upload-Feld ziehen, ohne den Datei-Dialog zu öffnen.

### Besonderheit

Drag & Drop erlaubt **immer** das Hochladen mehrerer Dateien gleichzeitig – unabhängig davon, ob in den Plugin-Einstellungen „Einzelner Datei-Upload" oder „Upload mehrerer Dateien" gewählt wurde. Die Upload-Typ-Einstellung gilt nur für den klassischen Datei-Dialog.

### So funktioniert es

1. Datei(en) im Datei-Explorer markieren
2. Dateien auf das Upload-Feld im Kontaktformular ziehen
3. Maustaste loslassen – Dateien werden sofort hinzugefügt
4. Dateinamen erscheinen in der Vorschau

---

## Mehrfach-Upload

### Was es bewirkt

Mit aktiviertem Mehrfach-Upload können Kunden im Datei-Dialog mehrere Dateien gleichzeitig auswählen (Strg+Klick oder Shift+Klick).

### Größenlimit beachten

Das in den Einstellungen konfigurierte Größenlimit gilt als **Gesamtsumme** aller hochgeladenen Dateien. Wird das Limit überschritten, erscheint eine Fehlermeldung und das Formular wird nicht abgesendet.

### Konfiguration

Der Mehrfach-Upload wird in den Plugin-Einstellungen unter **Upload-Typ** gesteuert. Siehe [Konfigurationseinstellungen](../configuration/settings.md).

---

## Hochgeladene Dateien im Admin

### Wo Dateien gespeichert werden

Alle per Kontaktformular hochgeladenen Dateien werden in der Shopware Medienverwaltung gespeichert:

**Navigation**: Inhalte → Medienverwaltung → [Gewählter Zielordner]

Der Zielordner wird in den Plugin-Einstellungen unter **Ordner für hochgeladene Dateien** festgelegt.

### E-Mail-Anhänge

Die hochgeladenen Dateien werden automatisch als Anhänge an die Kontaktformular-E-Mail angehängt. Der Shop-Betreiber erhält die Dateien direkt in der Benachrichtigungs-E-Mail.

### Dateien in der Medienverwaltung

Hochgeladene Dateien verbleiben dauerhaft in der Medienverwaltung. Sie können dort:
- Eingesehen werden
- Heruntergeladen werden
- Bei Bedarf manuell gelöscht werden

> **Empfehlung**: Legen Sie einen dedizierten Ordner (z.B. „Kontaktformular-Uploads") an und wählen Sie diesen in den Plugin-Einstellungen, um eine übersichtliche Struktur zu gewährleisten.

---

## Form Builder Integration

### Voraussetzungen

- Shopware Plan Rise, Evolve oder Beyond
- CMS Extensions Plugin von Shopware

### Was es bewirkt

Wenn Sie den Form Builder von Shopware nutzen, stehen in den Formular-Feldern zwei zusätzliche Feldtypen zur Verfügung:
- **Datei-Upload** (Einzeldatei)
- **Datei-Upload (Mehrfach)**

Diese Felder können in beliebigen Erlebniswelt-Formularen verwendet werden.

### Feldtyp hinzufügen

1. **Inhalte → Erlebniswelten** aufrufen
2. Gewünschte Erlebniswelt öffnen und den Form Builder-Block bearbeiten
3. Im Formular-Editor ein neues Feld hinzufügen
4. Als Feldtyp **„Datei-Upload"** oder **„Datei-Upload (Mehrfach)"** wählen
5. Feldbezeichnung und weitere Optionen einstellen
6. Änderungen speichern und Erlebniswelt veröffentlichen

---

## Fehlerbehebung

### Upload-Feld erscheint nicht im Kontaktformular

**Symptom**: Das Upload-Feld ist im Storefront nicht sichtbar.

**Mögliche Ursachen und Lösungen**:
1. Plugin nicht aktiviert → Unter **Erweiterungen → Meine Erweiterungen** prüfen
2. „Datei-Upload für Standard-Kontaktformular aktivieren" deaktiviert → In den Plugin-Einstellungen aktivieren
3. Theme-Cache nicht geleert → **Einstellungen → System → Caches** → Alle Caches leeren

---

### Fehlermeldung: Dateiformat nicht erlaubt

**Symptom**: Kunden erhalten eine Fehlermeldung beim Upload einer bestimmten Datei.

**Ursache**: Die Dateiendung ist nicht in den erlaubten Erweiterungen eingetragen.

**Lösung**: Die gewünschte Erweiterung in den Plugin-Einstellungen unter **Erlaubte Dateierweiterungen** hinzufügen (z.B. `dwg` für CAD-Dateien).

---

### Fehlermeldung: Datei zu groß

**Symptom**: Kunden erhalten eine Meldung, dass die Datei zu groß ist.

**Ursache**: Die Gesamtgröße der hochgeladenen Dateien überschreitet das konfigurierte Limit.

**Lösung**:
1. Maximale Dateigröße in den Plugin-Einstellungen erhöhen
2. Sicherstellen, dass die PHP-Einstellungen des Servers (`upload_max_filesize`, `post_max_size`) ebenfalls ausreichend groß sind

---

### Anhänge fehlen in der Kontaktformular-E-Mail

**Symptom**: Dateien werden hochgeladen, erscheinen aber nicht als Anhänge in der E-Mail.

**Lösung**:
1. Prüfen, ob der gewählte Zielordner in der Medienverwaltung noch existiert
2. PHP-Fehlerlog des Servers prüfen
3. Sicherstellen, dass der E-Mail-Versand grundsätzlich funktioniert (Test ohne Anhang)

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
