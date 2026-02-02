# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für UTM Source - Marketing Parameter.

**Navigation**: Erweiterungen → Meine Erweiterungen → UTM Source - Marketing Parameter → Konfigurieren

---

## UTM Handler Konfiguration

### Aufzeichnung des Referrers ohne Cookie

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Nein     |

**Beschreibung**: Aktiviert die Server-seitige Erfassung des Referrers ohne Verwendung von Cookies im Browser des Kunden.

**Wie es funktioniert**:
- **Deaktiviert (Standard)**: Der Referrer und URL-Parameter werden in einem Cookie (`webla_utm_param`) im Browser des Kunden gespeichert. Dieses Cookie gehört zur Kategorie "Statistik" und erfordert die Zustimmung des Kunden über den Cookie-Banner.
- **Aktiviert**: Der Referrer wird zusätzlich in einer Server-seitigen Session-Tabelle gespeichert. Dies ermöglicht die Erfassung auch dann, wenn der Kunde keine Statistik-Cookies akzeptiert hat.

**Anwendungsbeispiele**:
- Aktivieren Sie diese Option, wenn Sie die Marketing-Datenerfassung maximieren möchten, auch bei Kunden, die Cookies ablehnen
- Nützlich für Shops, die einen hohen Anteil an Cookie-Ablehnungen haben
- Empfohlen für DSGVO-sensible Branchen, bei denen Cookie-Zustimmung selten erteilt wird

**Hinweis**: Diese Einstellung beeinflusst nicht die Erfassung von URL-Parametern – diese werden weiterhin über den Cookie erfasst, wenn der Kunde zugestimmt hat.

---

### Aufräumen der Sitzungstabelle (Tage)

| Eigenschaft      | Wert   |
| ---------------- | ------ |
| **Typ**          | Zahl   |
| **Standard**     | 30     |
| **Erforderlich** | Nein   |

**Beschreibung**: Legt fest, nach wie vielen Tagen alte Einträge in der Session-Tabelle automatisch gelöscht werden.

**Wie es funktioniert**:
Eine geplante Aufgabe (Scheduled Task) läuft regelmäßig und löscht alle Session-Einträge, die älter als die angegebene Anzahl an Tagen sind. Dies hält die Datenbank sauber und verhindert unnötiges Datenwachstum.

**Empfohlene Werte**:
- **30 Tage (Standard)**: Ausreichend für die meisten Shops, da die Daten bei Bestellabschluss bereits der Bestellung zugeordnet wurden
- **7-14 Tage**: Für Shops mit vielen Besuchern und wenigen Bestellungen (reduziert Datenbankgröße)
- **60-90 Tage**: Wenn Sie längere Analysezeiträume benötigen oder Kunden häufig mehrere Besuche vor einem Kauf haben

**Anwendungsbeispiel**: Setzen Sie den Wert niedriger, wenn Ihre Datenbank schnell wächst und Sie Speicherplatz sparen möchten. Die relevanten Marketing-Daten bleiben bei abgeschlossenen Bestellungen erhalten.

---

## Cookie-Einstellungen

Das Plugin registriert automatisch einen Cookie in der Kategorie "Statistik" des Shopware Cookie-Banners:

| Cookie-Name       | Kategorie  | Gültigkeit |
| ----------------- | ---------- | ---------- |
| `webla_utm_param` | Statistik  | 30 Tage    |

**Wichtig**: Der Cookie wird nur gesetzt, wenn der Kunde Statistik-Cookies über den Cookie-Banner akzeptiert hat. Bei Ablehnung werden die Daten zunächst im Session-Speicher des Browsers gehalten und erst bei erneuter Zustimmung synchronisiert.

---

## Empfohlene Konfigurationen

### Für maximale Datenerfassung

| Einstellung                            | Empfohlener Wert |
| -------------------------------------- | ---------------- |
| Aufzeichnung ohne Cookie               | Aktiviert        |
| Aufräumen der Sitzungstabelle (Tage)   | 30               |

### Für minimale Datenhaltung (DSGVO-fokussiert)

| Einstellung                            | Empfohlener Wert |
| -------------------------------------- | ---------------- |
| Aufzeichnung ohne Cookie               | Deaktiviert      |
| Aufräumen der Sitzungstabelle (Tage)   | 7                |

### Für Shops mit langen Kaufentscheidungszyklen

| Einstellung                            | Empfohlener Wert |
| -------------------------------------- | ---------------- |
| Aufzeichnung ohne Cookie               | Aktiviert        |
| Aufräumen der Sitzungstabelle (Tage)   | 60               |
