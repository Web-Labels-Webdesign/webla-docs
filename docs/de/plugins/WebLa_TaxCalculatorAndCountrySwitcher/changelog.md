# Änderungsprotokoll

Alle wichtigen Änderungen am Plugin *Steuernachkalkulation und Lieferländer* für Endbenutzer.

---

## [5.1.0] - 2026-04-15

### ✨ Neue Funktionen

- **Länderauswahl-Popup beim ersten Besuch (PAngV-Konformität)**: Erstbesucher sehen jetzt ein blockierendes Popup, das sie nach ihrem Lieferland fragt, bevor Preise angezeigt werden. Dadurch entspricht der angezeigte Brutto-Preis dem Preis, den der Kunde beim Checkout zahlt — eine gesetzliche Vorgabe der deutschen Preisangabenverordnung.
- **Optionale GeoIP-Vorauswahl**: Wenn Sie eine MaxMind-GeoLite2-Country-Datenbank bereitstellen, wählt das Popup das Land des Besuchers automatisch vor. Fällt stillschweigend auf das Standardland des Sales Channels zurück, wenn GeoIP deaktiviert ist, die Datenbank fehlt oder das erkannte Land nicht lieferbar ist.
- **Abgleich bei abweichender Lieferadresse**: Wenn das Lieferland der Kundenadresse vom im Popup gewählten Land abweicht, werden Preise und Länder-Cookie im `/checkout/confirm` automatisch angepasst und eine sichtbare Info-Meldung angezeigt.
- **Statischer Fallback-Hinweis**: Wenn das Popup deaktiviert ist, erinnert ein kleiner Hinweis neben dem Länderschalter daran, dass die Preise das aktuell ausgewählte Land widerspiegeln.
- **Automatische Composer-Installation für Abhängigkeiten**: Das Plugin aktiviert `executeComposerCommands()`, sodass Shopware die neue GeoIP-Library automatisch während Plugin-Installation oder -Update installiert — kein manuelles `composer require` nötig.

### 🔧 Verbesserungen

- **Popup vom Länderschalter-Toggle entkoppelt**: Das Popup kann jetzt unabhängig vom Header-Länderschalter verwendet werden. Sie können eines aktivieren, ohne das andere zu brauchen.
- **Schutz vor veraltetem Cookie**: Zeigt das gespeicherte Länder-Cookie auf ein Land, das nicht mehr lieferbar ist (weil sich die Sales-Channel-Konfiguration geändert hat), wird das Cookie automatisch gelöscht und das Popup erscheint erneut.
- **Shopware 6.6 und 6.7 Parität**: Die Popup-Daten werden über `StorefrontRenderEvent` bereitgestellt, was auf beiden Majors konsistent funktioniert — 6.7 lädt den Header über einen ESI-Subrequest, wo der bisherige Pagelet-Pfad nicht verfügbar war.

### ⚙️ Konfiguration

Neue Einstellungen in der Plugin-Konfiguration unter **Länderauswahl-Popup**:

- **Länderauswahl-Popup beim ersten Besuch anzeigen** — Umschalter
- **Gültigkeit des Länder-Cookies (Tage)** — Standard 30
- **GeoIP-Vorauswahl aktivieren** — Umschalter
- **Absoluter Pfad zur GeoLite2-Country.mmdb** — Pfad vom Händler bereitgestellt

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
