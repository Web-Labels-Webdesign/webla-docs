# Konfigurationseinstellungen

> Dieses Plugin hat keine globalen Einstellungen unter **Erweiterungen → Meine Erweiterungen**.
> Alles wird direkt in den einzelnen Konfigurationen gepflegt.

**Navigation**: Marketing → Startseiten Steuerung

Eine *Konfiguration* verbindet eine Erlebniswelt mit den Regeln, unter denen sie als Startseite ausgespielt wird. Sie können beliebig viele Konfigurationen anlegen.

---

## Basis Informationen

Diese Felder finden Sie in der Karte **Basis Informationen** einer Konfiguration.

### Name

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | leer |
| **Erforderlich** | Ja   |

**Beschreibung**: Ihr interner Bezeichner für die Konfiguration. Er erscheint nur im Administrationsbereich, nie im Shop.

**Anwendungsbeispiel**: `Weihnachten 2026`, `B2B-Startseite`, `Black Week`.

---

### Aktiv

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Schalter |
| **Standard**     | Aus     |
| **Erforderlich** | Nein    |

**Beschreibung**: Nur aktive Konfigurationen werden überhaupt geprüft. Inaktive Konfigurationen bleiben mit allen Regeln erhalten, greifen aber nicht.

**Anwendungsbeispiel**: Legen Sie Ihre Weihnachtsaktion im Oktober fertig an und lassen Sie sie inaktiv, bis alles abgestimmt ist. Oder schalten Sie eine wiederkehrende Aktion nach der Saison einfach aus, statt sie zu löschen.

---

### Priorität

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Zahl (1 bis 100) |
| **Standard**     | leer           |
| **Erforderlich** | Ja             |

**Beschreibung**: Entscheidet, welche Konfiguration gewinnt, wenn mehrere gleichzeitig zutreffen. Der höchste Wert setzt sich durch, alle anderen werden ignoriert.

**Anwendungsbeispiel**: Ihre B2B-Startseite läuft dauerhaft mit Priorität `10`. Die Black-Week-Aktion bekommt Priorität `50` und überstimmt sie für eine Woche automatisch — danach greift wieder die B2B-Startseite, ohne dass Sie etwas umschalten müssen.

---

### Landing Page

| Eigenschaft      | Wert                        |
| ---------------- | --------------------------- |
| **Typ**          | Auswahl einer Erlebniswelt  |
| **Standard**     | leer                        |
| **Erforderlich** | Ja                          |

**Beschreibung**: Die Erlebniswelt, die als Startseite ausgespielt wird, sobald die Regeln dieser Konfiguration zutreffen. Sie legen die Erlebniswelt vorab unter **Inhalte → Erlebniswelten** an.

**Anwendungsbeispiel**: Ihre Erlebniswelt „Weihnachtswelt" mit Adventskalender, Geschenktipps und passendem Banner.

---

### Verkaufskanal

| Eigenschaft      | Wert                       |
| ---------------- | -------------------------- |
| **Typ**          | Auswahl eines Verkaufskanals |
| **Standard**     | leer (= alle Verkaufskanäle) |
| **Erforderlich** | Nein                       |

**Beschreibung**: Beschränkt die Konfiguration auf einen Verkaufskanal. Bleibt das Feld leer, gilt sie für **alle** Verkaufskanäle.

**Anwendungsbeispiel**: Ihre Weihnachtsaktion läuft nur im deutschen Shop, während der internationale Verkaufskanal seine reguläre Startseite behält.

---

### Regel-Operator

| Eigenschaft      | Wert              |
| ---------------- | ----------------- |
| **Typ**          | Auswahl           |
| **Standard**     | leer              |
| **Erforderlich** | Ja                |

**Beschreibung**: Bestimmt, wie die Regeln dieser Konfiguration verknüpft werden.

**Optionen**:
- `UND`: Die Konfiguration greift nur, wenn **alle** Regeln zutreffen
- `ODER`: Die Konfiguration greift, sobald **mindestens eine** Regel zutrifft

**Anwendungsbeispiel**: „Zeitraum 01.12.–24.12. **UND** Kundengruppe Endkunden" ergibt eine Weihnachtsseite nur für Endkunden. „Samstag **ODER** Sonntag" ergibt eine Wochenend-Startseite.

> **Wichtig**: Eine Konfiguration ohne jede Regel trifft mit dem Operator **UND** immer zu und übernimmt damit dauerhaft die Startseite. Mit **ODER** trifft sie nie zu. Legen Sie deshalb nach dem Speichern immer mindestens eine Regel an.

---

## Regeln

Die Karte **Regeln** erscheint erst, **nachdem** Sie die Konfiguration einmal gespeichert haben. Die einzelnen Regeltypen und ihr Verhalten sind in der [Nutzungsanleitung](../usage/usage.md) beschrieben.

---

## Verkaufskanal-spezifische Einstellungen

| Einstellung      | Geltungsbereich                             | Beschreibung                                        |
| ---------------- | ------------------------------------------- | --------------------------------------------------- |
| Gesamte Konfiguration | Pro Verkaufskanal oder global           | Über das Feld **Verkaufskanal** gesteuert           |

---

## Empfohlene Konfigurationen

### Für eine befristete Saison-Aktion

| Einstellung   | Empfohlener Wert                       |
| ------------- | -------------------------------------- |
| Priorität     | 50 (höher als Ihre Dauer-Konfigurationen) |
| Regel-Operator | UND                                   |
| Regeln        | Datumsbereich                          |
| Verkaufskanal | Der betroffene Kanal                   |

### Für eine dauerhafte Startseite je Kundengruppe

| Einstellung   | Empfohlener Wert          |
| ------------- | ------------------------- |
| Priorität     | 10                        |
| Regel-Operator | UND                      |
| Regeln        | Kundengruppe              |
| Verkaufskanal | leer, wenn es überall gilt |
