# Änderungsprotokoll

Alle wichtigen Änderungen an der Adressvalidierung für Endbenutzer.

---

## [1.1.0]

### ✨ Neue Funktionen

- **Aufeinanderfolgende Sonderzeichen blockieren**: Verhindert Eingaben wie `Muster..straße 5` oder `--Ort`. Die Regel gilt für Straße und Ort und lässt sich einzeln abschalten.
- **Sonderzeichen am Anfang/Ende blockieren**: Verhindert Eingaben wie `- Musterstraße 5` oder `Musterstraße 5 -`. Ein abschließender Punkt oder eine schließende Klammer bleiben erlaubt, damit `Musterstr.` und `Frankfurt (Oder)` weiterhin funktionieren.

### 🔧 Verbesserungen

- **Sammelanzeige der Hinweise**: Verstößt eine Eingabe gegen mehrere Regeln, erscheinen jetzt alle Hinweise gleichzeitig. Ihre Kunden müssen nicht mehrfach absenden, um alle Probleme zu finden.

---

## [1.0.0]

Erste Version des Plugins.

### ✨ Neue Funktionen

- **Sonderzeichen-Prüfung**: Sie legen je Feld fest, welche Sonderzeichen in Straße und Ort erlaubt sind. Ziffern sind im Ortsfeld grundsätzlich nicht zulässig.
- **Hausnummern-Prüfung**: Das Straßenfeld muss mindestens eine Ziffer enthalten. Die Prüfung lässt sich abschalten, wenn Sie auch Adressen ohne Hausnummer annehmen.
- **Mindestlänge**: Für Straße und Ort lässt sich eine Mindestanzahl an Zeichen festlegen, um Kurzeingaben wie `ab 1` abzufangen.
- **Automatisches Leerzeichen vor der Hausnummer**: Aus `Musterstr.1` wird beim Absenden `Musterstr. 1`.
- **Konfiguration pro Verkaufskanal**: Jeder Verkaufskanal kann eigene Regeln haben.

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                                                               |
| ------- | ---------------- | ---------------------------------------------------------------------------------------- |
| 1.1.0   | noch offen       | Zwei neue Regeln gegen typische Fehleingaben mit Sonderzeichen                            |
| 1.0.0   | noch offen       | Erste Version: Prüfung von Straße und Ort auf Sonderzeichen, Hausnummer und Mindestlänge |

---

## Upgrade-Hinweise

### Nach der Installation

Das Plugin ist nach der Installation zunächst **inaktiv**. Aktivieren Sie es je Verkaufskanal über die Einstellung **Für diesen Verkaufskanal aktivieren**. Bis dahin verhalten sich die Adressformulare wie im Shopware-Standard.

### Kompatibilität

| Plugin-Version | Shopware-Version |
| -------------- | ---------------- |
| 1.x            | 6.6.x, 6.7.x     |

### Update auf 1.1.0

Die beiden neuen Regeln sind nach dem Update **standardmäßig aktiv**. Prüfen Sie nach dem Update, ob Ihre Kunden weiterhin alle üblichen Adressen eingeben können — insbesondere, wenn Sie international verkaufen. Beide Regeln lassen sich einzeln über die Plugin-Konfiguration abschalten.
