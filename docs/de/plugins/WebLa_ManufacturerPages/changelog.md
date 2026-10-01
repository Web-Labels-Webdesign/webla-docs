# Änderungsprotokoll

Alle wichtigen Änderungen an **Hersteller Seiten** für Endbenutzer.

Eine vollständige technische Änderungshistorie finden Sie in der Datei [CHANGELOG.md](../../CHANGELOG.md) im Plugin-Repository.

---

## Version 5.1.0

### ✨ Neue Funktionen

- **Linkziel in der Herstellerübersicht**: Neue Einstellung, mit der die Hersteller-Kacheln (Übersicht und Top-Hersteller) auf die im Hersteller hinterlegte **Webseite** verlinken können — z. B. auf eine bestehende Marken-Kategorieseite. Es werden nur Links verwendet, die in den eigenen Shop zeigen. Externe Hersteller-Webseiten werden ignoriert, damit das Produkt-Listing des Herstellers erreichbar bleibt.

### 🔧 Verbesserungen

- **Zukunftssicherheit**: Veraltete Shopware-Aufrufe ersetzt, die mit Shopware 6.8 entfallen.

---

## Version 5.0.0

### ✨ Neue Funktionen

- **Eine ZIP-Datei für Shopware 6.6 und 6.7**: Ab sofort genügt eine einzige Plugin-Version für beide Shopware-Hauptversionen — kein paralleler Download mehr nötig.

### 🔧 Verbesserungen

- **Store-Qualität**: Link-Titel auf allen Hersteller-Verknüpfungen (bessere Barrierefreiheit und SEO).
- **Administration**: Kompatibel mit der neuen Meteor/Vue 3-Administration in Shopware 6.7 ohne Funktionsverlust für 6.6.
- **Performance**: SEO-URL-Erzeugung lädt Hersteller nur noch einmal pro Lauf statt pro Sprache — deutlich schnellere Verarbeitung in großen Shops.
- **Code-Qualität**: Umfassende Aufräumarbeiten (PHPStan clean, Stylelint clean).

### ⚠️ Wichtige Änderungen

- **Mindestversion**: Shopware 6.6.0 wird weiterhin unterstützt. Shopware 6.5 und früher werden nicht mehr unterstützt.
- **Aktualisierung von 4.x**: Führen Sie nach dem Upgrade einen Cache-Rebuild durch (**Einstellungen → Cache & Indizes → Cache leeren**).

---

## Frühere Versionen

Für Details zu Versionen vor 5.0.0 siehe [CHANGELOG.md](../../CHANGELOG.md) im Repository.

| Version | Highlights                                                |
| ------- | --------------------------------------------------------- |
| 4.x     | Shopware 6.7-Support (separate Branch)                    |
| 3.x     | Shopware 6.6-Support, Alphabet-Filter, Logo-Fallback      |
| 2.x     | Shopware 6.5-Support, mehrsprachige SEO-URLs              |
| 1.x     | Initialrelease für Shopware 6.4                           |

---

## Upgrade-Hinweise

### Upgrade auf 5.1.0

1. **Upgrade durchführen**: Plugin Manager → Hersteller Seiten → Aktualisieren.
2. **Cache leeren** (**Einstellungen → Cache & Indizes**).
3. Das Verhalten bleibt unverändert, bis Sie die neue Einstellung **„Linkziel in der Herstellerübersicht“** aktiv umstellen.

### Upgrade auf 5.0.0

1. **Vor dem Upgrade**: Sichern Sie Ihre Shop-Datenbank.
2. **Upgrade durchführen**: Plugin Manager → Hersteller Seiten → Aktualisieren.
3. **Nach dem Upgrade**:
   - Cache leeren (**Einstellungen → Cache & Indizes**).
   - Prüfen Sie einmal Ihre Konfigurations-Einstellungen (**Erweiterungen → Hersteller Seiten → Konfigurieren**) — sie bleiben unverändert, aber ein kurzer Check schadet nicht.
   - Wenn SEO-URLs aktiv sind: Planner-Task **GenerateSEOUrlTask** einmal manuell ausführen, damit alle URLs neu generiert werden.

### Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 5.x            | 6.6.x, 6.7.x     | 8.2+        |
| 4.x            | 6.7.x            | 8.2+        |
| 3.x            | 6.6.x            | 8.2+        |
| 2.x            | 6.5.x            | 8.1+        |
