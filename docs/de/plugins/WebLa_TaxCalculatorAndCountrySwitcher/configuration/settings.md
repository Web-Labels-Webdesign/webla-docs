# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das Plugin *Steuernachkalkulation und Lieferländer*.

**Navigation**: Erweiterungen → Meine Erweiterungen → Steuernachkalkulation und Lieferländer → Konfigurieren

Die Einstellungen sind in vier Karten gruppiert: **Basis-Konfiguration**, **Styling-Konfiguration**, **Berechnungseinstellungen** und **Versandkosten-Konfiguration**.

---

## Basis-Konfiguration

Steuert die Sichtbarkeit und Darstellung des Länderumschalters im Frontend.

### Aktiviere das Auswahl-Dropdown

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Schalter   |
| **Standard**     | Aktiviert  |
| **Erforderlich** | Ja         |

**Beschreibung**: Zentraler Ein-/Aus-Schalter für den Länderumschalter in der Storefront. Wenn deaktiviert, läuft der Shop wie ohne Plugin — die Steuernachkalkulation findet dann nicht statt.

**Anwendungsbeispiel**: Deaktivieren Sie diese Option während der Ersteinrichtung oder für Wartungsarbeiten, ohne das Plugin deinstallieren zu müssen.

---

### Zeige Flaggen im Dropdown Menü

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Schalter   |
| **Standard**     | Aktiviert  |
| **Erforderlich** | Nein       |

**Beschreibung**: Zeigt neben jedem Land im Dropdown die zugehörige SVG-Landesflagge an. Dies erleichtert internationalen Kunden die schnelle Auswahl.

**Anwendungsbeispiel**: In Shops mit internationalen Kunden empfohlen. Deaktivieren, wenn ein sehr minimalistisches Layout gewünscht ist.

---

### Zeige Länder als ISO Code im Dropdown Menü

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Schalter    |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein        |

**Beschreibung**: Stellt Länder als zweistelligen ISO-Code (z. B. `DE`, `FR`, `AT`) statt mit vollem Landesnamen dar. Spart Platz in der Topbar.

**Anwendungsbeispiel**: Bei kompaktem Theme oder sehr vielen verfügbaren Ländern sinnvoll.

---

### Zeige Label vor dem Dropdown Menü

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Schalter    |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein        |

**Beschreibung**: Blendet einen Text-Hinweis (aus den Snippets) vor dem Dropdown ein, z. B. „Liefern nach:".

**Anwendungsbeispiel**: Aktivieren, wenn Besucher den Zweck des Umschalters nicht sofort erkennen.

---

### Ändern der Währung in die lokale Währung des ausgewählten Landes

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Schalter    |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein        |

**Beschreibung**: Wechselt den Verkaufskanal beim Länderwechsel automatisch auf die Landeswährung (sofern im Verkaufskanal verfügbar).

**Anwendungsbeispiel**: Nur aktivieren, wenn Sie alle relevanten Währungen im Verkaufskanal gepflegt und mit korrektem Umrechnungsfaktor versehen haben.

---

### Topbar-Anzeigemodus

| Eigenschaft      | Wert                    |
| ---------------- | ----------------------- |
| **Typ**          | Auswahl (Einzelauswahl) |
| **Standard**     | Topbar ersetzen         |
| **Erforderlich** | Ja                      |

**Beschreibung**: Wählen Sie, wie das Plugin mit der Topbar Ihres Themes integriert wird.

**Optionen**:
- `Theme-Topbar erweitern`: Der Länderumschalter wird zusätzlich zur bestehenden Theme-Topbar angezeigt
- `Topbar ersetzen`: Die gesamte Topbar wird durch den Plugin-Umschalter ersetzt (Standard)
- `Nur Widget (keine Topbar-Änderung)`: Das Plugin rendert keine Topbar — Integration erfolgt manuell per Twig-Block

**Anwendungsbeispiel**: Verwenden Sie `Theme-Topbar erweitern`, wenn Ihr Theme bereits eine Topbar mit wichtigen Informationen (z. B. Kontaktdaten, USPs) hat, die nicht verloren gehen soll.

---

## Styling-Konfiguration

Passt das Aussehen des Länderumschalters an Ihr Theme an. Alle Werte werden als CSS-Variablen ausgegeben und überschreiben die Plugin-Standardwerte.

### Farbe des Label vor dem Dropdown Menü

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Farbwähler |
| **Standard**     | (leer)     |
| **Erforderlich** | Nein       |

**Beschreibung**: Schriftfarbe des optionalen Labels vor dem Dropdown.

---

### Textfarbe des Select Feldes

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Farbwähler |
| **Standard**     | (leer)     |
| **Erforderlich** | Nein       |

**Beschreibung**: Schriftfarbe des ausgewählten Landes und der Optionen im Dropdown.

---

### Hintergrundfarbe des Select Feldes

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Farbwähler |
| **Standard**     | (leer)     |
| **Erforderlich** | Nein       |

**Beschreibung**: Hintergrundfarbe des Dropdown-Feldes.

---

### Innerer Abstand des Select Feldes

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Text (CSS)    |
| **Standard**     | (leer)        |
| **Erforderlich** | Nein          |

**Beschreibung**: CSS-Padding-Wert, z. B. `5px 10px`.

---

### Breite des Select Feldes

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Text (CSS)    |
| **Standard**     | (leer)        |
| **Erforderlich** | Nein          |

**Beschreibung**: CSS-Wert für die Breite, z. B. `200px` oder `auto`.

---

### Rahmenfarbe des Select Feldes

| Eigenschaft      | Wert       |
| ---------------- | ---------- |
| **Typ**          | Farbwähler |
| **Standard**     | (leer)     |
| **Erforderlich** | Nein       |

**Beschreibung**: Farbe des Rahmens um das Dropdown-Feld.

---

### Radius des Select Feldes

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Text (CSS)    |
| **Standard**     | (leer)        |
| **Erforderlich** | Nein          |

**Beschreibung**: Eckenrundung des Rahmens, z. B. `4px`.

---

### Dicke des Rahmens des Select Feldes

| Eigenschaft      | Wert          |
| ---------------- | ------------- |
| **Typ**          | Text (CSS)    |
| **Standard**     | (leer)        |
| **Erforderlich** | Nein          |

**Beschreibung**: Rahmenbreite, z. B. `1px`.

---

## Berechnungseinstellungen

### Wähle Länder aus, für die die Neuberechnung übersprungen werden soll

| Eigenschaft      | Wert                           |
| ---------------- | ------------------------------ |
| **Typ**          | Länder-Mehrfachauswahl         |
| **Standard**     | Leer (alle Länder neu berechnen) |
| **Erforderlich** | Nein                           |

**Beschreibung**: Länder, die in dieser Liste ausgewählt sind, werden von der Plugin-Logik komplett ignoriert — es erfolgt weder eine Preis- noch eine Versandkostenneuberechnung. Shopware verwendet in diesem Fall die Standardpreise aus dem Produkt.

**Anwendungsbeispiel**: Tragen Sie hier typischerweise Ihr Heimatland ein, da dort bereits die korrekten Bruttopreise hinterlegt sind und keine Neuberechnung nötig ist. Das spart Rechenzeit beim Seitenaufruf.

---

## Versandkosten-Konfiguration

### Versandkosten auf Basis der Nettokosten anpassen

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Schalter    |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein        |

**Beschreibung**: Wenn aktiviert, werden auch die Versandkosten nach dem gleichen Netto-Prinzip neu berechnet wie Produktpreise. Der Netto-Versandkostenbetrag bleibt pro Land konstant, der Bruttobetrag passt sich an den landesspezifischen Steuersatz an.

**Anwendungsbeispiel**: Empfohlen für OSS-konforme Shops, die rechtlich verpflichtet sind, korrekte Bruttoversandkosten je Zielland auszuweisen.

---

## Verkaufskanal-spezifische Einstellungen

Alle Einstellungen können **pro Verkaufskanal** gepflegt werden. Wählen Sie in der Konfigurationsansicht oben rechts den gewünschten Verkaufskanal aus, um abweichende Werte zu hinterlegen. So können z. B. für den B2C-Shop Steuerneuberechnung aktiviert und für den B2B-Shop deaktiviert sein.

---

## Empfohlene Konfigurationen

### Für OSS-B2C-Shop mit mehreren EU-Ländern

| Einstellung                                                                    | Empfohlener Wert                        |
| ------------------------------------------------------------------------------ | --------------------------------------- |
| Aktiviere das Auswahl-Dropdown                                                 | Aktiviert                               |
| Zeige Flaggen im Dropdown Menü                                                 | Aktiviert                               |
| Topbar-Anzeigemodus                                                            | Topbar ersetzen                         |
| Länder ausschließen                                                            | Heimatland (z. B. Deutschland)          |
| Versandkosten auf Basis der Nettokosten anpassen                               | Aktiviert                               |
| Ändern der Währung in die lokale Währung des ausgewählten Landes               | Deaktiviert (außer EUR-Ausland)         |

### Für reinen Länderumschalter ohne Neuberechnung

| Einstellung                                                                    | Empfohlener Wert                        |
| ------------------------------------------------------------------------------ | --------------------------------------- |
| Aktiviere das Auswahl-Dropdown                                                 | Aktiviert                               |
| Länder ausschließen                                                            | Alle Länder eintragen                   |
| Versandkosten auf Basis der Nettokosten anpassen                               | Deaktiviert                             |
