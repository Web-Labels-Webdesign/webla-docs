**Änderungsprotokoll — Adressvalidierung**

Alle wichtigen Änderungen an der Adressvalidierung für Endbenutzer.

---

# 1.2.0

_Veröffentlicht am 2026-11-10_

**Neue Funktionen**

- **Unsichtbare Zeichen bereinigen**: Adressen, die aus einer E-Mail, einem PDF oder einer Webseite kopiert werden, enthalten oft unsichtbare Zeichen (z.B. Zero-Width-Space oder weiche Trennzeichen) oder geschützte Leerzeichen. Diese werden jetzt direkt beim Einfügen in Straße und Ort entfernt bzw. durch ein normales Leerzeichen ersetzt, und beim Absenden noch einmal. Shopware selbst speichert diese Zeichen unverändert.

**Verbesserungen**

- Kürzere, klarere Plugin-Beschreibung in der Erweiterungsübersicht.

---

# 1.1.0

_Veröffentlicht am 2026-09-09_

**Neue Funktionen**

- **Aufeinanderfolgende Sonderzeichen blockieren**: Verhindert Eingaben wie `Muster..straße 5` oder `--Ort`. Die Regel gilt für Straße und Ort und lässt sich einzeln abschalten.
- **Sonderzeichen am Anfang/Ende blockieren**: Verhindert Eingaben wie `- Musterstraße 5` oder `Musterstraße 5 -`. Ein abschließender Punkt oder eine schließende Klammer bleiben erlaubt, damit `Musterstr.` und `Frankfurt (Oder)` weiterhin funktionieren.

**Verbesserungen**

- **Sammelanzeige der Hinweise**: Verstößt eine Eingabe gegen mehrere Regeln, erscheinen jetzt alle Hinweise gleichzeitig. Ihre Kunden müssen nicht mehrfach absenden, um alle Probleme zu finden.

---

# 1.0.0

Erste Version des Plugins.

**Neue Funktionen**

- **Sonderzeichen-Prüfung**: Sie legen je Feld fest, welche Sonderzeichen in Straße und Ort erlaubt sind. Ziffern sind im Ortsfeld grundsätzlich nicht zulässig.
- **Hausnummern-Prüfung**: Das Straßenfeld muss mindestens eine Ziffer enthalten. Die Prüfung lässt sich abschalten, wenn Sie auch Adressen ohne Hausnummer annehmen.
- **Mindestlänge**: Für Straße und Ort lässt sich eine Mindestanzahl an Zeichen festlegen, um Kurzeingaben wie `ab 1` abzufangen.
- **Leerzeichen bereinigen**: Leerzeichen am Anfang und Ende werden entfernt, mehrfache Leerzeichen auf eines reduziert (`Muster  str. 5` wird zu `Muster str. 5`).
- **Automatisches Leerzeichen vor der Hausnummer**: Aus `Musterstr.1` wird beim Absenden `Musterstr. 1`.
- **Konfiguration pro Verkaufskanal**: Jeder Verkaufskanal kann eigene Regeln haben.

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                                                               |
| ------- | ---------------- | ---------------------------------------------------------------------------------------- |
| 1.2.0   | 2026-11-10       | Unsichtbare Zeichen aus Copy & Paste werden automatisch bereinigt                         |
| 1.1.0   | 2026-09-09       | Zwei neue Regeln gegen typische Fehleingaben mit Sonderzeichen                            |
| 1.0.0   | —                | Erste Version: Prüfung von Straße und Ort auf Sonderzeichen, Hausnummer und Mindestlänge |

---

## Upgrade-Hinweise

### Nach der Installation

Das Plugin ist nach der Installation zunächst **inaktiv**. Aktivieren Sie es je Verkaufskanal über die Einstellung **Für diesen Verkaufskanal aktivieren**. Bis dahin verhalten sich die Adressformulare wie im Shopware-Standard.

### Kompatibilität

| Plugin-Version | Shopware-Version |
| -------------- | ---------------- |
| 1.x            | 6.6.x, 6.7.x     |

### Update auf 1.2.0

Keine Schritte nötig. Die Bereinigung unsichtbarer Zeichen ist immer aktiv, sobald das Plugin für einen Verkaufskanal eingeschaltet ist. Sie entfernt nur Zeichen, die ohnehin nicht sichtbar sind.

### Update auf 1.1.0

Die beiden neuen Regeln sind nach dem Update **standardmäßig aktiv**. Prüfen Sie nach dem Update, ob Ihre Kunden weiterhin alle üblichen Adressen eingeben können — insbesondere, wenn Sie international verkaufen. Beide Regeln lassen sich einzeln über die Plugin-Konfiguration abschalten.
