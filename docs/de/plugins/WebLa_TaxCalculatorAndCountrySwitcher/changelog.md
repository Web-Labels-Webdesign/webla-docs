# Änderungsprotokoll

Alle wichtigen Änderungen am Plugin *Steuernachkalkulation und Lieferländer* für Endbenutzer.

---

## [5.0.0] - Unveröffentlicht

### ✨ Neue Funktionen

- **Eine Code-Basis für Shopware 6.6 und 6.7**: Das Plugin unterstützt ab dieser Version beide Shopware-Majors aus einer einzigen Installation. Sie müssen nicht mehr zwischen verschiedenen Plugin-Versionen wechseln, wenn Sie Shopware aktualisieren.
- **Automatisierte Updates über GitHub-Actions**: Neue Versionen werden automatisch validiert, gebaut und in den Shopware Store hochgeladen — schnellere Bug-Fix-Zyklen.
- **Konventionelles Änderungsprotokoll**: Zukünftige Versionen generieren ihr Changelog automatisch aus den Commit-Nachrichten.

### 🔧 Verbesserungen

- **Robustere Länder-Erkennung**: Die Abfrage des Ziellands im Warenkorb, Versand und bei Produktpreisen nutzt jetzt einen kompatibleren Shopware-Aufruf, der auf beiden Majors zuverlässig funktioniert.
- **Stabilere Factory-Integration**: Die interne Integration mit Shopwares Sales-Channel-Context-Layer wurde auf die offizielle Adapter-Architektur umgestellt — Sie profitieren von stabileren Upgrades bei zukünftigen Shopware-Versionen.

### ⚠️ Wichtige Änderungen

- **Shopware 6.5 wird nicht mehr unterstützt**: Wenn Sie noch auf Shopware 6.5 sind, bleiben Sie bitte auf Plugin-Version 2.x. Die Version 5.0.0 setzt mindestens Shopware 6.6 voraus.
- **Mindest-PHP-Version**: 8.2 oder höher — stellen Sie sicher, dass Ihr Server die Anforderung erfüllt.

---

## [4.1.4] - 2025-12-12

### 🔧 Verbesserungen

- Flexbox-Styling für die Länder-Anzeige in der Topbar ergänzt
- Topbar-Anzeigemodus als Konfigurationsoption eingeführt (Theme-Topbar erweitern, Topbar ersetzen, Nur Widget)
- Docker-Setup für die lokale Entwicklung aktualisiert

---

## [4.1.3] - 2025-10-16

### 🔧 Verbesserungen

- Release-Workflow konsistenter gestaltet
- Docker-Image-Referenz aktualisiert

---

## [2.0.2] - 2023-11-15

### 🐛 Fehlerbehebungen

- Fehler in der Steuerberechnung behoben

## [2.0.1] - 2023-08-21

### 🐛 Fehlerbehebungen

- Fehler in der Steuerberechnung behoben

## [2.0.0] - 2023-06-07

### ✨ Neue Funktionen

- Unterstützung für Shopware 6.5 ergänzt

---

## [1.0.17] - 2023-05-02

### ✨ Neue Funktionen

- Neuberechnung der Versandkosten ergänzt

## [1.0.13] - 2023-03-20

### ✨ Neue Funktionen

- Mobile Darstellung ergänzt

## [1.0.12] - 2023-02-23

### ✨ Neue Funktionen

- SVG-Flaggen für die Länderauswahl hinzugefügt

## [1.0.11] - 2023-02-09

### 🔧 Verbesserungen

- Schalter für Flaggen und Länderdarstellung ergänzt

## [1.0.9] - 2022-09-13

### 🔧 Verbesserungen

- Unterstützung für ZeobvBundleProducts (gebundelte Produkte) ergänzt

## [1.0.7] - 2022-07-21

### ✨ Neue Funktionen

- Erste offizielle Veröffentlichung

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                              |
| ------- | ---------------- | ------------------------------------------------------- |
| 5.0.0   | unveröffentlicht | Einheitliche Codebasis für SW 6.6 + 6.7                 |
| 4.1.4   | 2025-12-12       | Topbar-Modus, Flexbox-Styling                           |
| 4.1.3   | 2025-10-16       | Release-Workflow-Anpassungen                            |
| 2.0.0   | 2023-06-07       | Unterstützung für Shopware 6.5                          |
| 1.0.17  | 2023-05-02       | Versandkostenneuberechnung                              |
| 1.0.7   | 2022-07-21       | Erste offizielle Veröffentlichung                       |

---

## Upgrade-Hinweise

### Upgrade auf 5.0.0

1. **Shopware-Version prüfen** — mindestens 6.6.0 erforderlich
2. **PHP-Version prüfen** — mindestens 8.2
3. **Datenbank und Plugin-Ordner sichern**
4. Plugin über den Plugin Manager aktualisieren
5. Aktivieren und alle Caches leeren:
   ```
   bin/console cache:clear
   ```
6. Storefront testen — alle Einstellungen bleiben erhalten

**Migration von der sw66-Branch-Installation**: Falls Sie bisher die separate `sw66`-Branch installiert hatten, reicht ein normales Update — die neue Version 5.0.0 erkennt Shopware 6.6 und 6.7 automatisch.

### Kompatibilität

| Plugin-Version | Shopware 6.5 | Shopware 6.6 | Shopware 6.7 | PHP   |
| -------------- | ------------ | ------------ | ------------ | ----- |
| 5.x            | ❌            | ✅            | ✅            | ≥ 8.2 |
| 4.x            | ❌            | ❌            | ✅            | ≥ 8.2 |
| 3.x            | ❌            | ✅            | ❌            | ≥ 8.1 |
| 2.x            | ✅            | ❌            | ❌            | ≥ 8.0 |
