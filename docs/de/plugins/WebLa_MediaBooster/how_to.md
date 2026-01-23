# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit Media Booster.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

Media Booster verarbeitet Bilder in drei unabhängigen Schritten:

```
[Medienbibliothek] → [Media Booster Queue] → [Verarbeitete Bilder]
       ↓                    ↓                       ↓
   Original-JPG         Hintergrund-           WebP-Version +
   PNG-Dateien         verarbeitung            optimierte Metadaten
```

**Verarbeitungsablauf**:
1. Sie starten die Verarbeitung manuell oder das Plugin startet automatisch (je nach Konfiguration)
2. Media Booster holt unverarbeitete Bilder aus der Medienbibliothek
3. Jedes Bild wird in einem Stapel (Batch) verarbeitet
4. Der Fortschritt wird im Dashboard angezeigt
5. Nach Abschluss werden Statistiken aktualisiert

---

## Häufige Workflows

### Anleitung: Erste Einrichtung des Plugins

**Ziel**: Media Booster nach der Installation optimal konfigurieren

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Zugang zur Shopware Administration

**Schritte**:

1. **Server-Kompatibilität prüfen**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Prüfen Sie den Bereich "Server-Informationen"
   - Notieren Sie, welche Funktionen verfügbar sind (Imagick, WebP, AVIF)

2. **Plugin-Einstellungen öffnen**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Alternativ: Im Dashboard auf "Plugin-Einstellungen" klicken

3. **Grundeinstellungen konfigurieren**
   - Stapelgröße: 50 (Standardwert, bei Bedarf anpassen)
   - Automatische Verarbeitung: "Nur manuell" für den Anfang

4. **Konvertierung aktivieren (empfohlen)**
   - Konvertierungsmodus: "WebP" auswählen
   - Bildqualität: 80
   - Thumbnail-Qualität: 60

5. **SEO-Optimierung aktivieren (optional)**
   - Alt Tag Modus: "Alt Tags optimieren"
   - Aktualisierungsmodus: "Nur leere ergänzen"

6. **Einstellungen speichern**
   - Klicken Sie auf "Speichern"

7. **Erste Verarbeitung starten**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Klicken Sie auf "Alle starten"
   - Beobachten Sie den Fortschritt

**Ergebnis**: Das Plugin ist konfiguriert und beginnt mit der Bildoptimierung.

---

### Anleitung: Bestehende Bilder zu WebP konvertieren

**Ziel**: Alle vorhandenen Bilder in der Medienbibliothek zu WebP konvertieren

**Voraussetzungen**:
- WebP wird vom Server unterstützt (im Dashboard prüfen)

**Schritte**:

1. **Einstellungen anpassen**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Konvertierungsmodus: "WebP" auswählen
   - Bildqualität: 80 (oder nach Bedarf)
   - Speichern

2. **Konvertierung starten**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Klicken Sie auf "Konvertierung"

3. **Fortschritt überwachen**
   - Die Seite aktualisiert sich automatisch
   - Warten Sie, bis der Fortschrittsbalken 100% erreicht

4. **Ergebnis prüfen**
   - Öffnen Sie Ihren Shop im Browser
   - Öffnen Sie die Entwicklertools (F12)
   - Prüfen Sie im Netzwerk-Tab, dass Bilder als WebP geladen werden

**Ergebnis**: Alle geeigneten Bilder haben nun WebP-Versionen, die automatisch ausgeliefert werden.

**Hinweis**: Die Originalbilder bleiben erhalten und dienen als Fallback für ältere Browser.

---

### Anleitung: Speicherplatz durch Bildverkleinerung sparen

**Ziel**: Übergroße Originalbilder auf vernünftige Maße reduzieren

**Voraussetzungen**:
- Imagick ist auf dem Server installiert
- **Wichtig**: Backup der Mediendateien erstellt!

**Schritte**:

1. **Backup erstellen**
   - Sichern Sie das Verzeichnis `/public/media/` auf Ihrem Server
   - Dies ist wichtig, da Originalbilder überschrieben werden!

2. **Einstellungen konfigurieren**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - "Bildgrößenänderung aktivieren": Ein
   - Maximale Breite: 2000 (oder nach Bedarf)
   - Maximale Höhe: 2000 (oder nach Bedarf)
   - Größenänderungsmodus: "In Grenzen einpassen"
   - Speichern

3. **Verarbeitung starten**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Klicken Sie auf "Größenänderung"

4. **Ergebnis prüfen**
   - Beobachten Sie die "Speicher gespart" Statistik
   - Prüfen Sie stichprobenartig Produktbilder auf Qualität

**Ergebnis**: Alle übergroßen Bilder wurden auf die Maximalmaße reduziert.

**Fehlerbehebung**: Bei Qualitätsproblemen Backup wiederherstellen und höhere Maximalmaße wählen.

---

### Anleitung: SEO-Optimierung für alle Produktbilder

**Ziel**: Fehlende Alt-Tags und Titel automatisch mit Produktinformationen füllen

**Voraussetzungen**:
- Produkte haben gepflegte Namen

**Schritte**:

1. **SEO-Einstellungen konfigurieren**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Alt Tag Modus: "Alt Tags optimieren"
   - Produktbilder - Aktualisierungsmodus: "Nur leere ergänzen" (empfohlen)
   - Produktbilder - Alt Vorlage: "Produktname" oder "Produktname + Shopname"
   - Title-Optimierung aktivieren: Ein (optional)
   - Speichern

2. **SEO-Optimierung starten**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Klicken Sie auf "SEO"

3. **Ergebnis prüfen**
   - Öffnen Sie ein Produktbild in der Medienbibliothek
   - Prüfen Sie, ob Alt-Tag und Title gesetzt sind
   - Testen Sie im Frontend (Quelltext ansehen)

**Ergebnis**: Alle Produktbilder ohne Alt-Tags haben nun aussagekräftige Alternativtexte.

---

### Anleitung: Automatische tägliche Optimierung einrichten

**Ziel**: Neue Bilder werden automatisch jede Nacht optimiert

**Voraussetzungen**:
- Shopware Scheduled Tasks sind korrekt konfiguriert
- Cron-Job läuft regelmäßig

**Schritte**:

1. **Automatische Verarbeitung aktivieren**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`
   - Automatische Verarbeitung: "1x täglich"
   - Alle anderen gewünschten Funktionen aktivieren
   - Speichern

2. **Cron-Job prüfen**
   - Stellen Sie sicher, dass der Shopware Scheduled Task Runner läuft
   - Typischer Cron-Eintrag: `* * * * * php /pfad/zu/shopware/bin/console scheduled-task:run`

**Ergebnis**: Media Booster verarbeitet automatisch neue Bilder einmal täglich.

---

### Anleitung: Fortschritt zurücksetzen und von vorne beginnen

**Ziel**: Alle Bilder erneut verarbeiten (z.B. nach Änderung der Qualitätseinstellungen)

**Schritte**:

1. **Dashboard öffnen**
   - Navigieren zu: `Einstellungen → Erweiterungen → Media Booster`

2. **Fortschritt zurücksetzen**
   - Klicken Sie auf "Fortschritt zurücksetzen"
   - Bestätigen Sie die Aktion

3. **Verarbeitung neu starten**
   - Klicken Sie auf "Alle starten"

**Ergebnis**: Alle Bilder werden erneut verarbeitet, unabhängig vom vorherigen Status.

**Hinweis**: Bei WebP/AVIF-Konvertierung werden bestehende konvertierte Dateien übersprungen, wenn sie bereits existieren.

---

## Schnellreferenz

| Aufgabe                           | Wichtige Schritte                                              | Erforderliche Einstellungen        |
| --------------------------------- | -------------------------------------------------------------- | ---------------------------------- |
| WebP aktivieren                   | Konvertierungsmodus → WebP → Speichern → Dashboard → Starten   | Konvertierungsmodus                |
| Bildgröße reduzieren              | Resize aktivieren → Max. Maße setzen → Starten                 | resizeEnabled, resizeMaxWidth/Height |
| Alt-Tags füllen                   | Alt Tag Modus → Optimieren → Vorlage wählen → Starten          | seoAltMode, seoAltProductTemplate  |
| Dateinamen optimieren             | Dateiname Vorlage wählen → Starten                             | seoFilenameProductTemplate         |
| Täglich automatisch verarbeiten   | Automatische Verarbeitung → 1x täglich                         | scheduleMode                       |

---

## Best Practices

1. **Backup vor Bildgrößenänderung**: Die Resize-Funktion überschreibt Originale. Immer vorher sichern!

2. **WebP vor AVIF**: WebP hat bessere Browser-Unterstützung. Nutzen Sie AVIF nur, wenn Sie wissen, dass Ihre Zielgruppe moderne Browser verwendet.

3. **Qualität testen**: Verarbeiten Sie zuerst wenige Bilder und prüfen Sie die Qualität, bevor Sie den gesamten Bestand verarbeiten.

4. **SEO schrittweise**: Nutzen Sie "Nur leere ergänzen", um manuell gepflegte Daten nicht zu überschreiben.

5. **Stapelgröße anpassen**: Bei Shared Hosting niedrigere Werte (20-30), bei dedizierten Servern höhere Werte (100+).

6. **Cache leeren**: Leeren Sie nach der Verarbeitung den Shopware-Cache und ggf. CDN-Cache.

## Fehlerbehebung

### Große Bilder werden bei AVIF-Konvertierung übersprungen

**Symptom**: Viele Bilder werden bei der AVIF-Konvertierung als fehlgeschlagen/übersprungen markiert.

**Ursache**: Ihr Server verwendet die GD-Bibliothek anstelle von Imagick für die AVIF-Konvertierung. Der GD AVIF-Encoder ist deutlich langsamer (10-50x) als Imagick, daher werden Bilder größer als 4 Megapixel automatisch übersprungen, um Timeouts zu vermeiden.

**Lösungen**:
1. **Imagick mit AVIF-Unterstützung installieren** (empfohlen): Bitten Sie Ihren Hosting-Anbieter, Imagick mit AVIF-Format-Unterstützung zu installieren oder zu aktualisieren
2. **Stattdessen WebP verwenden**: WebP bietet gute Kompression und funktioniert zuverlässig mit Imagick und GD
3. **Bildgrößen vorher reduzieren**: Verwenden Sie die Resize-Funktion, um Bilder vor der AVIF-Konvertierung auf unter 2000x2000 Pixel zu reduzieren

**So prüfen Sie**: Der Bereich "Server-Informationen" im Dashboard zeigt, welche Bibliothek verwendet wird, und zeigt eine Warnung an, wenn GD für AVIF verwendet wird.

---

## Was Sie vermeiden sollten

- **Keine Backups**: Starten Sie die Bildgrößenänderung niemals ohne vorheriges Backup
- **Zu niedrige Qualität**: Werte unter 60 können sichtbare Artefakte erzeugen
- **Zu kleine Maximalmaße**: Unter 1500px kann die Qualität auf Retina-Displays leiden
- **Alle überschreiben ohne Prüfung**: Kann manuell gepflegte SEO-Daten zerstören
- **Große Stapel auf schwachen Servern**: Kann zu Timeouts und abgebrochenen Verarbeitungen führen
- **AVIF mit GD bei großen Bildern**: Verwenden Sie WebP oder installieren Sie Imagick für zuverlässige AVIF-Konvertierung großer Bilder
