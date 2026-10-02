# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für PayTR Integration.

**Navigation**: Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren

> Alle Einstellungen können global oder pro Verkaufskanal festgelegt werden. Wählen Sie dazu oben in der Konfiguration den gewünschten Verkaufskanal aus.

---

## Einrichtungshinweise

### Callback-URL

| Eigenschaft      | Wert                             |
| ---------------- | -------------------------------- |
| **Typ**          | Anzeige (nur lesen, kopierbar)   |
| **Standard**     | `https://<Ihre-Domain>/api/paytr/callback` |
| **Erforderlich** | Muss im PayTR-Händlerpanel hinterlegt werden |

**Beschreibung**: Über diese Adresse meldet PayTR Ihrem Shop, ob eine Zahlung erfolgreich war oder fehlgeschlagen ist. Erst dadurch wird der Zahlungsstatus Ihrer Bestellungen automatisch aktualisiert.

Die URL wird aus den Domains Ihrer Verkaufskanäle gebildet. Ist oben ein Verkaufskanal ausgewählt, sehen Sie nur dessen URLs, sonst die URLs aller Verkaufskanäle. Gibt es mehrere Adressen, erscheint pro Adresse eine URL. In Klammern hinter **Callback-URL** stehen die Verkaufskanäle, die über diese Adresse erreichbar sind, z. B. **Callback-URL (Storefront, Headless)**. Verkaufskanäle ohne eigene Domain (z. B. Headless) werden der Adresse zugeordnet, unter der Sie die Administration geöffnet haben.

Sie benötigen nur eine URL: eine öffentlich erreichbare, die zu den Verkaufskanälen passt, in denen Sie PayTR anbieten.

Kopieren Sie die URL über das Kopiersymbol im Feld und fügen Sie sie im PayTR-Händlerpanel unter **Support & Installation → Settings → Callback URL Settings** ein.

> **Wichtig**: Verwenden Sie keine interne oder lokale Domain (z. B. `localhost`). Diese ist für PayTR nicht erreichbar.

---

## PayTR API-Zugangsdaten

Alle drei Zugangsdaten finden Sie im PayTR-Händlerpanel auf der Seite **Information** (Bilgi).

### Händler-ID (Mağaza No)

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | leer |
| **Erforderlich** | Ja   |

**Beschreibung**: Ihre Händlernummer bei PayTR.

---

### Händler-Schlüssel (Mağaza Şifresi)

| Eigenschaft      | Wert                  |
| ---------------- | --------------------- |
| **Typ**          | Passwort (verborgen)  |
| **Standard**     | leer                  |
| **Erforderlich** | Ja                    |

**Beschreibung**: Ihr geheimer Händler-Schlüssel. Er sichert die Kommunikation mit PayTR ab und wird auch verwendet, um die Echtheit der Zahlungsmeldungen von PayTR zu prüfen.

---

### Händler-Salt (Mağaza Gizli Anahtar)

| Eigenschaft      | Wert                  |
| ---------------- | --------------------- |
| **Typ**          | Passwort (verborgen)  |
| **Standard**     | leer                  |
| **Erforderlich** | Ja                    |

**Beschreibung**: Ihr zweiter geheimer Schlüssel bei PayTR. Er wird zusammen mit dem Händler-Schlüssel zur Absicherung verwendet.

> Achten Sie beim Kopieren auf führende oder nachgestellte Leerzeichen. Schon ein Leerzeichen zu viel führt dazu, dass PayTR die Anfrage ablehnt.

---

### Testmodus

| Eigenschaft      | Wert                |
| ---------------- | ------------------- |
| **Typ**          | Schalter            |
| **Standard**     | Aktiviert           |
| **Erforderlich** | Nein                |

**Beschreibung**: Im Testmodus werden keine echten Zahlungen ausgeführt. Sie können den Ablauf mit den Testkarten von PayTR durchspielen.

**Anwendungsbeispiel**: Lassen Sie den Testmodus während der Einrichtung aktiviert. Deaktivieren Sie ihn erst, wenn Testzahlungen erfolgreich durchlaufen und Ihr PayTR-Konto für Live-Zahlungen freigeschaltet ist.

> **Achtung**: Der Testmodus ist nach der Installation **aktiviert**. Solange er aktiv ist, erhalten Sie kein Geld für Bestellungen.

---

### API-Zugangsdaten testen

| Eigenschaft | Wert       |
| ----------- | ---------- |
| **Typ**     | Schaltfläche |

**Beschreibung**: Sendet eine Testanfrage mit den **gespeicherten** Zugangsdaten des oben ausgewählten Verkaufskanals an PayTR und zeigt das Ergebnis als Meldung an. Hat der Verkaufskanal keine eigenen Zugangsdaten, werden die globalen Zugangsdaten geprüft.

- **API-Verbindung erfolgreich!**: Die Zugangsdaten sind gültig.
- **Fehlermeldung**: Zeigt den Grund an, z. B. ungültige Händler-ID, falscher Schlüssel/Salt oder fehlende Zugangsdaten.

> Speichern Sie die Konfiguration, **bevor** Sie den Test starten. Nicht gespeicherte Eingaben werden nicht geprüft.

---

## Zahlungseinstellungen

### Ratenzahlung deaktivieren

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Schalter      |
| **Standard**     | Deaktiviert   |
| **Erforderlich** | Nein          |

**Beschreibung**: Wenn aktiviert, zeigt PayTR auf der Zahlungsseite keine Ratenzahlungsoptionen an. Kunden können dann nur in einer Summe zahlen.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie keine Ratenzahlung anbieten möchten oder Ihr PayTR-Vertrag keine Ratenzahlung vorsieht.

---

### Maximale Raten

| Eigenschaft      | Wert                |
| ---------------- | ------------------- |
| **Typ**          | Auswahl             |
| **Standard**     | Maximum verfügbar   |
| **Erforderlich** | Nein                |

**Beschreibung**: Legt fest, wie viele Raten der Kunde höchstens wählen kann.

**Optionen**:
- `Maximum verfügbar`: Alle Ratenoptionen, die PayTR für Ihr Konto und die Karte des Kunden anbietet
- `2`, `3`, `4`, `6`, `9`, `12`: Höchstens so viele Raten

**Anwendungsbeispiel**: Begrenzen Sie die Raten z. B. auf `6`, wenn längere Laufzeiten für Sie zu hohe Gebühren verursachen.

> Diese Einstellung hat keine Wirkung, wenn **Ratenzahlung deaktivieren** eingeschaltet ist. Welche Ratenoptionen tatsächlich angezeigt werden, hängt außerdem von Ihrem PayTR-Vertrag und der Karte des Kunden ab.

---

## Verkaufskanal-spezifische Einstellungen

| Einstellung             | Geltungsbereich               | Beschreibung |
| ----------------------- | ----------------------------- | ------------ |
| Händler-ID              | Global / Pro Verkaufskanal    | Eigenes PayTR-Konto je Verkaufskanal möglich |
| Händler-Schlüssel       | Global / Pro Verkaufskanal    | Gehört zur jeweiligen Händler-ID |
| Händler-Salt            | Global / Pro Verkaufskanal    | Gehört zur jeweiligen Händler-ID |
| Testmodus               | Global / Pro Verkaufskanal    | Z. B. Testmodus nur in einem Test-Verkaufskanal |
| Ratenzahlung deaktivieren | Global / Pro Verkaufskanal  | |
| Maximale Raten          | Global / Pro Verkaufskanal    | |

Ist für einen Verkaufskanal kein eigener Wert gesetzt, gilt die globale Einstellung (**Alle Verkaufskanäle**).

> Wenn Sie in mehreren Verkaufskanälen unterschiedliche PayTR-Konten verwenden, müssen Sie die Callback-URL in **jedem** PayTR-Händlerpanel hinterlegen.

---

## Empfohlene Konfigurationen

### Für die Einrichtung und Tests

| Einstellung               | Empfohlener Wert     |
| ------------------------- | -------------------- |
| Testmodus                 | Aktiviert            |
| Ratenzahlung deaktivieren | Nach Bedarf          |
| Maximale Raten            | Maximum verfügbar    |

### Für den Live-Betrieb

| Einstellung               | Empfohlener Wert                        |
| ------------------------- | --------------------------------------- |
| Testmodus                 | Deaktiviert                             |
| Ratenzahlung deaktivieren | Laut Ihrem PayTR-Vertrag                |
| Maximale Raten            | Passend zu Ihren Ratengebühren, z. B. `6` |
