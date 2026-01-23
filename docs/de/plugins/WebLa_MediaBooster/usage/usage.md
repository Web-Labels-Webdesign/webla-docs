# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von Media Booster.

---

## Inhaltsverzeichnis

- [Dashboard](#dashboard)
- [Bildgrößenänderung](#bildgrößenänderung)
- [Bildkonvertierung (WebP/AVIF)](#bildkonvertierung-webpavif)
- [SEO-Optimierung](#seo-optimierung)
- [Server-Informationen](#server-informationen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Dashboard

### Was es bewirkt

Das Dashboard ist die zentrale Anlaufstelle für Media Booster. Hier sehen Sie den aktuellen Verarbeitungsstatus, Statistiken und können die Bildoptimierung manuell starten.

### So finden Sie das Dashboard

**Ort**: Einstellungen → Erweiterungen → Media Booster

### Übersicht der Bereiche

#### Statistiken

Im oberen Bereich sehen Sie vier Kennzahlen:
- **Bilder verkleinert**: Anzahl der Bilder, deren Größe reduziert wurde
- **Bilder konvertiert**: Anzahl der zu WebP/AVIF konvertierten Bilder
- **SEO optimiert**: Anzahl der Bilder mit optimierten Metadaten
- **Speicher gespart**: Gesamte Speicherplatz-Einsparung in MB

#### Manuelle Verarbeitung

Hier können Sie die Verarbeitung manuell starten:
- **Alle starten**: Führt alle aktivierten Optimierungen durch (Größenänderung, Konvertierung, SEO)
- **Größenänderung**: Startet nur die Bildgrößenänderung
- **Konvertierung**: Startet nur die WebP/AVIF-Konvertierung
- **SEO**: Startet nur die SEO-Optimierung

#### Fortschritt

Zeigt den aktuellen Status jeder Funktion:
- Anzahl verarbeiteter Bilder / Gesamtzahl
- Prozentualer Fortschritt
- Zeitpunkt des letzten Durchlaufs
- Status-Badges (Deaktiviert, Nicht verfügbar)

#### Server-Informationen

Zeigt die verfügbaren Server-Funktionen:
- Imagick installiert: Ja/Nein
- WebP unterstützt: Ja/Nein
- AVIF unterstützt: Ja/Nein

### Tipps & Best Practices

- Starten Sie die Verarbeitung außerhalb der Stoßzeiten (z.B. nachts)
- Beobachten Sie den Fortschritt bei der ersten Verarbeitung
- Nutzen Sie "Zähler aktualisieren", wenn neue Bilder nicht erkannt werden

---

## Bildgrößenänderung

### Was sie bewirkt

Die Bildgrößenänderung verkleinert übergroße Originalbilder auf konfigurierbare Maximalmaße. Dies spart Speicherplatz auf dem Server und beschleunigt die Thumbnail-Generierung.

### Voraussetzungen

- Imagick PHP-Erweiterung muss installiert sein
- Die Funktion muss in den Plugin-Einstellungen aktiviert sein

### So verwenden Sie sie

1. Navigieren Sie zu **Einstellungen → Erweiterungen → Media Booster**
2. Aktivieren Sie "Bildgrößenänderung aktivieren"
3. Geben Sie die gewünschte maximale Breite und/oder Höhe ein (z.B. 2000 px)
4. Wählen Sie den Größenänderungsmodus
5. Speichern Sie die Einstellungen
6. Öffnen Sie das Dashboard unter **Einstellungen → Erweiterungen → Media Booster**
7. Klicken Sie auf "Größenänderung" oder "Alle starten"

### Wichtige Hinweise

- **Originalbilder werden überschrieben!** Erstellen Sie vor der ersten Nutzung ein Backup
- Die Funktion ist nur verfügbar, wenn Imagick auf dem Server installiert ist
- Das Seitenverhältnis der Bilder bleibt immer erhalten
- Bilder, die bereits kleiner als die Maximalmaße sind, werden übersprungen

### Tipps & Best Practices

- Wählen Sie Maximalmaße, die für Retina-Displays ausreichen (2000-2500 px)
- Testen Sie die Funktion zuerst mit wenigen Bildern
- Überprüfen Sie nach der Verarbeitung stichprobenartig die Bildqualität

---

## Bildkonvertierung (WebP/AVIF)

### Was sie bewirkt

Die Konvertierung erstellt optimierte WebP- oder AVIF-Versionen Ihrer Bilder. Diese modernen Formate bieten bessere Kompression bei gleicher visueller Qualität und beschleunigen so die Ladezeiten Ihres Shops.

### Voraussetzungen

- Für WebP: Imagick mit WebP-Unterstützung oder GD mit WebP-Funktionen
- Für AVIF: Imagick mit AVIF-Unterstützung oder PHP 8.1+ mit GD AVIF-Funktionen

### So verwenden Sie sie

1. Navigieren Sie zu **Einstellungen → Erweiterungen → Media Booster**
2. Wählen Sie unter "Konvertierungsmodus" entweder "WebP" oder "AVIF"
3. Passen Sie optional die Qualitätseinstellungen an (Standard: 80 für Bilder, 60 für Thumbnails)
4. Speichern Sie die Einstellungen
5. Öffnen Sie das Dashboard unter **Einstellungen → Erweiterungen → Media Booster**
6. Klicken Sie auf "Konvertierung" oder "Alle starten"

### Wie funktioniert die Auslieferung?

Media Booster erstellt die WebP/AVIF-Dateien **parallel** zu den Originalen. Die Originaldateien bleiben erhalten!

In der Storefront wird automatisch die WebP/AVIF-Version ausgeliefert, wenn:
- Eine WebP/AVIF-Version des Bildes existiert
- Der Browser das Format unterstützt

Dies geschieht durch einen integrierten Twig-Filter, der die Bild-URLs automatisch anpasst.

### Tipps & Best Practices

- WebP wird von allen modernen Browsern unterstützt (auch Safari seit 2020)
- AVIF bietet bessere Kompression, hat aber weniger Browser-Unterstützung
- Eine Qualität von 80 ist für die meisten Bilder ausreichend
- Für Thumbnails reicht eine Qualität von 60

---

## SEO-Optimierung

### Was sie bewirkt

Die SEO-Optimierung verbessert die Suchmaschinenfreundlichkeit Ihrer Bilder durch automatische Anpassung von Alt-Tags, Title-Attributen und Dateinamen.

### Alt-Tag Optimierung

Alt-Tags sind wichtig für:
- Barrierefreiheit (Screenreader lesen Alt-Tags vor)
- SEO (Suchmaschinen nutzen Alt-Tags zur Bildindexierung)
- Anzeige, wenn Bilder nicht geladen werden können

**So verwenden Sie sie:**

1. Navigieren Sie zu **Einstellungen → Erweiterungen → Media Booster**
2. Setzen Sie "Alt Tag Modus" auf "Alt Tags optimieren"
3. Wählen Sie den Aktualisierungsmodus (empfohlen: "Nur leere ergänzen")
4. Wählen Sie die gewünschte Vorlage
5. Speichern und im Dashboard "SEO" starten

### Title-Optimierung

Das Title-Attribut wird als Tooltip angezeigt, wenn Benutzer mit der Maus über ein Bild fahren.

**So verwenden Sie sie:**

1. Aktivieren Sie "Title-Optimierung aktivieren"
2. Wählen Sie den Aktualisierungsmodus und die Vorlage
3. Speichern und im Dashboard "SEO" starten

### Dateinamen-Optimierung

SEO-freundliche Dateinamen helfen bei der Bildersuche in Suchmaschinen.

**Beispiel-Transformation:**
- Vorher: `IMG_12345.jpg`
- Nachher: `rotes-t-shirt-xl-sw10001.jpg`

**So verwenden Sie sie:**

1. Wählen Sie unter "Produktbilder - Dateiname Vorlage" das gewünschte Format
2. Speichern und im Dashboard "SEO" starten

**Wichtig:**
- Dateinamen werden physisch umbenannt
- Thumbnails werden automatisch neu generiert
- URLs in CMS-Inhalten müssen ggf. manuell angepasst werden

### Tipps & Best Practices

- Nutzen Sie "Nur leere ergänzen", um manuell gepflegte Alt-Tags zu erhalten
- Der Produktname sollte in der Standardsprache gepflegt sein
- Testen Sie die Dateinamen-Umbenennung zuerst mit wenigen Produkten

---

## Server-Informationen

### Was sie zeigt

Der Bereich "Server-Informationen" im Dashboard zeigt, welche Funktionen auf Ihrem Server verfügbar sind.

### Imagick installiert

- **Ja** (grün): Alle Funktionen sind verfügbar
- **Nein** (rot): Bildgrößenänderung ist nicht verfügbar, Konvertierung nur eingeschränkt

### WebP unterstützt

- **Ja** (grün): WebP-Konvertierung ist verfügbar
- **Nein** (rot): WebP-Konvertierung nicht möglich

### AVIF unterstützt

- **Ja** (grün): AVIF-Konvertierung ist verfügbar
- **Nein** (rot): AVIF-Konvertierung nicht möglich

### Was tun bei fehlender Unterstützung?

Kontaktieren Sie Ihren Hosting-Anbieter und bitten Sie um:
- Installation der PHP Imagick-Erweiterung
- Aktivierung der WebP-Unterstützung in Imagick oder GD
- Aktivierung der AVIF-Unterstützung (PHP 8.1+ empfohlen)

---

## Fehlerbehebung

### Verarbeitung bleibt hängen

**Symptom**: Der Fortschrittsbalken aktualisiert sich nicht mehr, Status zeigt "Läuft"

**Ursache**: Die Verarbeitung wurde unterbrochen (z.B. durch Server-Timeout)

**Lösung**:
1. Klicken Sie auf "Laufstatus zurücksetzen" im Dashboard
2. Starten Sie die Verarbeitung erneut

---

### "Imagick-Erweiterung nicht installiert" Warnung

**Symptom**: Warnung im Dashboard, Bildgrößenänderung nicht verfügbar

**Ursache**: Die PHP Imagick-Erweiterung ist nicht auf dem Server installiert

**Lösung**: Kontaktieren Sie Ihren Hosting-Anbieter und bitten Sie um Installation von Imagick

---

### Bilder werden nicht konvertiert

**Symptom**: Konvertierung läuft, aber keine WebP/AVIF-Dateien werden erstellt

**Mögliche Ursachen und Lösungen**:

1. **Format nicht unterstützt**: Prüfen Sie die Server-Informationen im Dashboard
2. **Zu wenig Speicherplatz**: Stellen Sie sicher, dass ausreichend Festplattenspeicher verfügbar ist
3. **Dateiberechtigungen**: Das Media-Verzeichnis muss beschreibbar sein

---

### SEO-Änderungen werden nicht übernommen

**Symptom**: Alt-Tags oder Title bleiben nach der Verarbeitung leer

**Mögliche Ursachen und Lösungen**:

1. **Modus "Nur leere ergänzen"**: Wenn bereits Werte vorhanden sind, werden diese nicht überschrieben
2. **Kein Produktname**: Stellen Sie sicher, dass Produkte Namen haben
3. **Cache leeren**: Leeren Sie den Shopware-Cache nach der Verarbeitung

---

### Letzte Fehler anzeigen

Im Dashboard gibt es einen Bereich "Letzte Fehler", der die letzten 10 Fehler anzeigt. Nutzen Sie diese Informationen zur Diagnose:

- **File not found**: Die Bilddatei existiert nicht mehr
- **Insufficient disk space**: Nicht genug Speicherplatz
- **Convert failed**: Konvertierung fehlgeschlagen (prüfen Sie Imagick/GD)

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Schritt-für-Schritt Anleitungen](../how_to.md)
