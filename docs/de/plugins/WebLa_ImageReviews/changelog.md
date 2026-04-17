# Änderungsprotokoll

Alle wichtigen Änderungen an **Bilder in Produktbewertungen** für Endbenutzer.

---

## [3.1.1] – 2026-04-15

### 🔧 Verbesserungen

- **Eigener Medienordner „Image Reviews"**: Bei der Installation legt das Plugin nun einen eigenen Standard-Medienordner mit sinnvollen Thumbnail- und Seitenverhältnis-Einstellungen an. Bewertungs-Uploads landen automatisch dort und halten die Medienverwaltung übersichtlich.
- **Sauberes Deinstallieren**: Ist die Option *Nutzerdaten behalten* deaktiviert, entfernt das Plugin jetzt tatsächlich seinen Medienordner-Eintrag und löscht die zugehörige Datentabelle. Vorher blieb der Aufräumschritt wirkungslos.
- **Barrierefreiheit im Storefront**: Der Upload-Link und das Upload-Icon in der Galerie haben jetzt passende `title`- und `alt`-Attribute – besser für Screenreader.
- **Shopware Store Installationsanleitung**: Versehentlich enthaltene `<code>`-Tags und das `→`-HTML-Entity, die in manchen Store-Ansichten fehlerhaft dargestellt wurden, wurden entfernt.

### Migration von 3.1.0

Keine Aktion nötig. Der Medienordner wird beim Update automatisch angelegt. Vorhandene Uploads funktionieren unverändert weiter; die bisherige Plugin-Einstellung `mediaFolderId` bleibt als optionale Überschreibung erhalten.

---

## [3.1.0] – 2026-04-15

### ✨ Neue Funktionen

- **Eine Version für Shopware 6.6 und 6.7**: Ab sofort deckt ein einziges Plugin-Paket beide Shopware-Hauptversionen ab. Kein Wechsel zwischen getrennten Branches mehr nötig.

### 🔧 Verbesserungen

- **Admin-Konfiguration in Erlebniswelten**: Die Medienauswahl im CMS-Element-Konfigurator wurde auf die aktuelle Shopware-Administrationstechnik (Vue 3) angepasst. Das Element lässt sich wieder zuverlässig konfigurieren und speichern.
- **Automatisierte Release-Pipeline**: Neue Veröffentlichungen landen direkt im Shopware Store ohne manuelle Zwischenschritte.

### ⚠️ Wichtige Änderungen

- **Keine getrennten Distributionen mehr**: Der frühere Branch `sw66` entfällt. Nutzer der Version 2.0.x unter Shopware 6.6 werden gebeten, direkt auf 3.1.x zu aktualisieren.

### Migration von 3.0.x / 2.0.x

Keine Konfigurationsänderungen erforderlich. Vorhandene Einstellungen und Bewertungsmedien bleiben erhalten. Ein einziges ZIP deckt nun Shopware 6.6 und 6.7 ab.

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                          |
| ------- | ---------------- | --------------------------------------------------- |
| 3.1.1   | 2026-04-15       | Eigener Medienordner, sauberes Uninstall, a11y      |
| 3.1.0   | 2026-04-15       | Vereinheitlichung Shopware 6.6 + 6.7                |

---

## Upgrade-Hinweise

### Upgrade auf 3.1.1

1. Plugin über den Shopware Store aktualisieren.
2. Cache leeren.
3. Keine weiteren Schritte nötig – der Medienordner „Image Reviews" wird automatisch angelegt.

### Upgrade auf 3.1.0

1. Plugin über den Shopware Store aktualisieren.
2. Cache leeren.
3. Keine weiteren Schritte nötig – Einstellungen und Daten bleiben erhalten.

### Kompatibilität

| Plugin-Version | Shopware 6.6 | Shopware 6.7 | PHP   |
| -------------- | ------------ | ------------ | ----- |
| 3.1.x          | ✅            | ✅            | ≥ 8.2 |
| 3.0.x (legacy) | ❌            | ✅            | ≥ 8.2 |
| 2.0.x (legacy) | ✅            | ❌            | ≥ 8.2 |
