# Änderungsprotokoll

Alle wichtigen Änderungen am Plugin „Kontaktformular – Datei-Upload" aus Nutzersicht.

---

## [5.0.6] – 2026-04-20

### 🐛 Fehlerbehebungen

- **Kompatibilität mit Shopware 6.7.9.0**: Behebt einen Fehler in Storefronts mit Shopware 6.7.9.0, bei dem das neue Widerrufsformular zur Fehlermeldung „controller is not callable" führte. Das Plugin leitet Widerrufsanfragen nun an Shopwares eigene Verarbeitung weiter und bleibt dabei mit älteren Shopware-Versionen kompatibel.

---

## [5.0.5] – 2026-03-04

### 🐛 Fehlerbehebungen

- **Beliebige Dateitypen**: DWG, DXF und andere nicht standardmäßige Dateiformate können jetzt erfolgreich hochgeladen werden. Zuvor schlug der Upload mit der Meldung „file extension not supported" fehl, obwohl die Erweiterung in den Plugin-Einstellungen erlaubt war. Das Plugin erweitert nun Shopwares eigene Dateiformat-Whitelist automatisch mit allen konfigurierten Erweiterungen.

---

## [5.0.4] – 2026-01-06

### 🔧 Verbesserungen

- **Interne Optimierungen**: Verzeichnisstruktur des Plugins wurde bereinigt und Konfiguration für Shopware Store und Build-Prozess verbessert.

---

## [5.0.3] – 2026-01-06

### 🐛 Fehlerbehebungen

- **Konfiguration**: Dienstdefinitionen wurden präzisiert, um mögliche Konflikte mit anderen Plugins zu vermeiden.

---

## [5.0.2] – 2026-01-06

### ✨ Neue Funktionen

- **Verbesserte Upload-Komponente**: Das Upload-Feld zeigt hochgeladene Dateien nun als Vorschau mit Dateinamen an und validiert Dateien bereits vor dem Absenden des Formulars.

### 🐛 Fehlerbehebungen

- **Konfiguration**: Fehlende Konfigurationssektion in der Plugin-Beschreibung ergänzt.

---

## [2.0.0] – 2023-06-07

### ✨ Neue Funktionen

- **Shopware 6.5 Unterstützung**: Das Plugin unterstützt jetzt Shopware 6.5.
- **Datei entfernen**: Kunden können ausgewählte Dateien vor dem Absenden des Formulars wieder entfernen.

---

## [1.0.7] – 2023-03-06

### 🐛 Fehlerbehebungen

- **Größenlimit**: Das konfigurierte Dateigrößenlimit wird jetzt korrekt eingehalten.

---

## [1.0.6] – 2023-02-27

### ✨ Neue Funktionen

- **Größenlimit**: Neue Einstellung zur Begrenzung der maximalen Upload-Dateigröße.

---

## [1.0.5] – 2023-02-27

### ✨ Neue Funktionen

- **Mehrfach-Upload**: Kunden können jetzt mehrere Dateien gleichzeitig hochladen.

### 🐛 Fehlerbehebungen

- Kompatibilitätsproblem mit Shopware-Versionen vor 6.4.10 behoben.

---

## [1.0.1] – 2022-10-30

### ✨ Neue Funktionen

- **Übersetzungen**: Plugin-Texte sind jetzt auf Deutsch und Englisch verfügbar.
- **Ordnerauswahl**: Zielordner für hochgeladene Dateien in der Medienverwaltung wählbar.

---

## [1.0.0] – 2022-10-30

### 🎉 Erstveröffentlichung

- Datei-Upload im Kontaktformular
- Grundlegende Konfiguration (erlaubte Dateitypen, Größenlimit)

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                              |
| ------- | ---------------- | ------------------------------------------------------- |
| 5.0.5   | 2026-03-04       | Upload von DWG, DXF und beliebigen Dateitypen           |
| 5.0.2   | 2026-01-06       | Verbesserte Upload-Komponente mit Dateivorschau         |
| 2.0.0   | 2023-06-07       | Shopware 6.5 Unterstützung, Datei-entfernen-Funktion    |
| 1.0.6   | 2023-02-27       | Konfigurierbare Dateigrößenbegrenzung                   |
| 1.0.5   | 2023-02-27       | Mehrfach-Upload                                         |
| 1.0.0   | 2022-10-30       | Erstveröffentlichung                                    |

---

## Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 5.0.x          | 6.6.x, 6.7.x     | 8.1+        |
| 2.0.x          | 6.5.x            | 8.0+        |
| 1.x            | 6.4.x            | 8.0+        |
