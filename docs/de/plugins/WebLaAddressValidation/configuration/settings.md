# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für die Adressvalidierung.

**Navigation**: Erweiterungen → Meine Erweiterungen → Adressvalidierung auf Hausnummer und Sonderzeichen → Konfigurieren

> Wählen Sie vor dem Bearbeiten oben im Konfigurationsfenster den **Verkaufskanal** aus. Alle Einstellungen gelten jeweils für den gewählten Verkaufskanal.

---

## Adressvalidierung Einstellungen

### Für diesen Verkaufskanal aktivieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | Aus      |
| **Erforderlich** | Ja       |

**Beschreibung**: Schaltet die gesamte Adressvalidierung für den gewählten Verkaufskanal ein oder aus. Ist der Schalter aus, verhalten sich die Adressformulare genau wie im Shopware-Standard.

**Anwendungsbeispiel**: Aktivieren Sie die Prüfung zuerst nur in einem Test-Verkaufskanal. Wenn die Regeln passen, schalten Sie sie im Live-Kanal frei.

---

### Straße - Erlaubte Sonderzeichen

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | Leer |
| **Erforderlich** | Nein |

**Beschreibung**: Legt fest, welche Sonderzeichen im Straßenfeld erlaubt sind. Tragen Sie die Zeichen ohne Trennung direkt hintereinander ein, zum Beispiel `.-/`. Buchstaben (inklusive Umlauten), Ziffern und Leerzeichen sind immer erlaubt und müssen nicht eingetragen werden.

Bleibt das Feld leer, findet keine Zeichenprüfung statt — dann sind im Straßenfeld alle Zeichen erlaubt. Die übrigen Regeln (Hausnummer, Mindestlänge, Sonderzeichen-Regeln) greifen davon unabhängig weiterhin.

**Anwendungsbeispiel**: Mit `.-/` sind `Muster-Str. 12` und `Hauptstraße 5/7` gültig, `Musterstraße #12` dagegen nicht.

---

### Stadt - Erlaubte Sonderzeichen

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | Leer |
| **Erforderlich** | Nein |

**Beschreibung**: Legt fest, welche Sonderzeichen im Ortsfeld erlaubt sind, zum Beispiel `-()`. Buchstaben und Leerzeichen sind immer erlaubt.

Bleibt das Feld leer, sind alle Zeichen außer Ziffern erlaubt. **Ziffern sind im Ortsfeld grundsätzlich nie zulässig** — unabhängig davon, was Sie hier eintragen.

**Anwendungsbeispiel**: Mit `-()` sind `Frankfurt (Oder)` und `Neustadt-Glewe` gültig, `Stadt123` und `Muster/Stadt` dagegen nicht.

---

### Straße - Mindestlänge

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Zahl         |
| **Standard**     | Leer (= aus) |
| **Erforderlich** | Nein         |

**Beschreibung**: Mindestanzahl an Zeichen, die im Straßenfeld eingegeben werden müssen. Gezählt wird die gesamte Eingabe inklusive Leerzeichen und Hausnummer, ohne Leerzeichen am Anfang und Ende.

Lassen Sie das Feld leer oder tragen Sie `0` ein, um die Prüfung zu deaktivieren.

**Anwendungsbeispiel**: Ein Wert von `5` verhindert Kurzeingaben wie `ab 1`. Setzen Sie den Wert nicht zu hoch — es gibt reale kurze Straßennamen wie `Au 3`.

---

### Stadt - Mindestlänge

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Zahl         |
| **Standard**     | Leer (= aus) |
| **Erforderlich** | Nein         |

**Beschreibung**: Mindestanzahl an Zeichen für das Ortsfeld. Leer oder `0` deaktiviert die Prüfung.

**Anwendungsbeispiel**: Ein Wert von `3` fängt Eingaben wie `xy` ab. Beachten Sie kurze reale Ortsnamen wie `Ulm` oder `Aue`.

---

### Hausnummer erforderlich

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Ist der Schalter an, muss das Straßenfeld mindestens eine Ziffer enthalten. Damit werden Eingaben ohne Hausnummer wie `Musterstraße` abgelehnt.

**Anwendungsbeispiel**: Schalten Sie die Prüfung aus, wenn Sie auch Adressen ohne Hausnummer akzeptieren müssen, etwa bei Postfächern oder Lieferungen an Ortschaften ohne Hausnummerierung.

---

### Aufeinanderfolgende Sonderzeichen blockieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Blockiert Eingaben, in denen zwei oder mehr Sonderzeichen direkt hintereinander stehen. Die Regel gilt für Straße und Ort gleichermaßen.

Abgelehnt werden dadurch typische Tipp- und Spam-Eingaben wie `Muster..straße 5`, `--Ort` oder `Test///Str. 1`.

**Anwendungsbeispiel**: In echten Adressen stehen zwei Sonderzeichen praktisch nie direkt hintereinander. Die Einstellung kann in aller Regel eingeschaltet bleiben.

---

### Sonderzeichen am Anfang/Ende blockieren

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | An       |
| **Erforderlich** | Nein     |

**Beschreibung**: Blockiert Eingaben, die mit einem Sonderzeichen beginnen oder enden, zum Beispiel `- Musterstraße 5` oder `Musterstraße 5 -`.

Ein **abschließender Punkt oder eine schließende Klammer bleiben erlaubt**, damit gängige Schreibweisen wie `Musterstr.` oder `Frankfurt (Oder)` weiterhin funktionieren.

**Anwendungsbeispiel**: Besonders nützlich, wenn Kunden Adressen aus anderen Programmen kopieren und dabei Aufzählungszeichen oder Bindestriche mitkopiert werden.

---

## Verkaufskanal-spezifische Einstellungen

Alle Einstellungen dieses Plugins gelten pro Verkaufskanal.

| Einstellung                                  | Geltungsbereich   | Beschreibung                             |
| -------------------------------------------- | ----------------- | ---------------------------------------- |
| Für diesen Verkaufskanal aktivieren          | Pro Verkaufskanal | Schaltet die Prüfung für den Kanal frei  |
| Straße - Erlaubte Sonderzeichen              | Pro Verkaufskanal | Zeichenvorrat für das Straßenfeld        |
| Stadt - Erlaubte Sonderzeichen               | Pro Verkaufskanal | Zeichenvorrat für das Ortsfeld           |
| Straße - Mindestlänge                        | Pro Verkaufskanal | Mindestzeichen für das Straßenfeld       |
| Stadt - Mindestlänge                         | Pro Verkaufskanal | Mindestzeichen für das Ortsfeld          |
| Hausnummer erforderlich                      | Pro Verkaufskanal | Ziffernpflicht im Straßenfeld            |
| Aufeinanderfolgende Sonderzeichen blockieren | Pro Verkaufskanal | Regel gegen doppelte Sonderzeichen       |
| Sonderzeichen am Anfang/Ende blockieren      | Pro Verkaufskanal | Regel gegen Sonderzeichen an den Rändern |

> Wählen Sie im Konfigurationsfenster **Alle Verkaufskanäle**, um einen gemeinsamen Standard zu setzen, und überschreiben Sie ihn anschließend bei Bedarf für einzelne Kanäle.

---

## Empfohlene Konfigurationen

### Für den deutschen Standardversand

| Einstellung                                  | Empfohlener Wert |
| -------------------------------------------- | ---------------- |
| Für diesen Verkaufskanal aktivieren          | An               |
| Straße - Erlaubte Sonderzeichen              | `.-/`            |
| Stadt - Erlaubte Sonderzeichen               | `-()`            |
| Straße - Mindestlänge                        | `4`              |
| Stadt - Mindestlänge                         | `3`              |
| Hausnummer erforderlich                      | An               |
| Aufeinanderfolgende Sonderzeichen blockieren | An               |
| Sonderzeichen am Anfang/Ende blockieren      | An               |

### Für internationale Verkaufskanäle

| Einstellung                                  | Empfohlener Wert |
| -------------------------------------------- | ---------------- |
| Für diesen Verkaufskanal aktivieren          | An               |
| Straße - Erlaubte Sonderzeichen              | Leer             |
| Stadt - Erlaubte Sonderzeichen               | Leer             |
| Straße - Mindestlänge                        | Leer             |
| Stadt - Mindestlänge                         | Leer             |
| Hausnummer erforderlich                      | Aus              |
| Aufeinanderfolgende Sonderzeichen blockieren | An               |
| Sonderzeichen am Anfang/Ende blockieren      | An               |

> Internationale Adressen folgen anderen Regeln als deutsche: Hausnummern stehen teils vor dem Straßennamen oder fehlen ganz, und die Schreibweisen enthalten mehr Sonderzeichen. Beschränken Sie sich dort auf die beiden Regeln gegen offensichtliche Fehleingaben.
