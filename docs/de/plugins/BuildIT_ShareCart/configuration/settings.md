# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für BuildIT Share Cart.

**Navigation**: Erweiterungen -> Meine Erweiterungen -> BuildIT Share Cart -> Konfigurieren

---

## Warenkorb Teilen Konfiguration

### Teilen als Link aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aus       |
| **Erforderlich** | Nein      |

**Beschreibung**: Aktiviert die Option, den Warenkorb als kopierbaren Link zu teilen. Ihre Kunden können den Link in die Zwischenablage kopieren und beliebig weitergeben.

**Anwendungsbeispiel**: Aktivieren Sie diese Option als grundlegende Teilmethode. Der Link funktioniert unabhängig von externen Diensten.

---

### Teilen als Mail aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aus       |
| **Erforderlich** | Nein      |

**Beschreibung**: Aktiviert die Option, den Warenkorb per E-Mail zu teilen. Es öffnet sich das Standard-E-Mail-Programm des Kunden mit vorausgefülltem Betreff und Nachricht.

**Anwendungsbeispiel**: Ideal für B2B-Kunden, die Einkaufslisten per E-Mail an Kollegen oder Vorgesetzte zur Freigabe senden möchten.

---

### Teilen mit WhatsApp aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aus       |
| **Erforderlich** | Nein      |

**Beschreibung**: Aktiviert die Option, den Warenkorb über WhatsApp zu teilen. Funktioniert sowohl auf Mobilgeräten (öffnet die WhatsApp-App) als auch auf dem Desktop (öffnet WhatsApp Web).

**Anwendungsbeispiel**: Besonders beliebt bei Endkunden, die Produktempfehlungen schnell und unkompliziert an Freunde senden möchten.

---

### Teilen mit Facebook aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aus       |
| **Erforderlich** | Nein      |

**Beschreibung**: Aktiviert die Option, den Warenkorb über den Facebook-Senden-Dialog zu teilen. Erfordert eine gültige Facebook App ID (siehe nächste Einstellung).

**Anwendungsbeispiel**: Nützlich, wenn Ihre Zielgruppe Facebook als Kommunikationskanal nutzt.

---

### Facebook App ID

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Textfeld  |
| **Standard**     | Leer      |
| **Erforderlich** | Nur wenn Facebook-Teilen aktiviert ist |

**Beschreibung**: Die App-ID Ihrer Facebook-Anwendung. Diese wird benötigt, um den Facebook-Senden-Dialog zu nutzen.

**So erhalten Sie eine Facebook App ID**:
1. Besuchen Sie [developers.facebook.com](https://developers.facebook.com/docs/development/create-an-app)
2. Erstellen Sie eine neue App
3. Kopieren Sie die App-ID in dieses Feld

---

## Warenkorb Teilen Einstellungen

### Geöffnete Warenkörbe löschen nach (Tage)

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Zahl      |
| **Standard**     | 5         |
| **Erforderlich** | Nein      |

**Beschreibung**: Geteilte Warenkörbe, die bereits geöffnet (angeklickt) wurden, werden nach dieser Anzahl an Tagen automatisch gelöscht. Dies hält Ihre Datenbank sauber.

**Anwendungsbeispiel**: Setzen Sie den Wert höher (z.B. 14 Tage), wenn Ihre Kunden längere Entscheidungszeiträume haben. Setzen Sie ihn niedriger (z.B. 3 Tage), wenn Sie die Datenbank schlank halten möchten.

---

### Ungeöffnete Warenkörbe löschen nach (Tage)

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Zahl      |
| **Standard**     | 30        |
| **Erforderlich** | Nein      |

**Beschreibung**: Geteilte Warenkörbe, die nie geöffnet wurden, werden nach dieser Anzahl an Tagen automatisch gelöscht. Ungeöffnete Warenkörbe haben einen längeren Standard-Zeitraum, da der Empfänger den Link möglicherweise noch nicht gesehen hat.

**Anwendungsbeispiel**: Der Standardwert von 30 Tagen ist für die meisten Shops geeignet. Reduzieren Sie den Wert, wenn sehr viele Warenkörbe geteilt werden und die Datenbank schnell wächst.

---

## Verkaufskanal-spezifische Einstellungen

Alle Einstellungen können pro Verkaufskanal konfiguriert werden. Wählen Sie oben in der Konfiguration den gewünschten Verkaufskanal aus, um abweichende Einstellungen vorzunehmen.

| Einstellung                    | Geltungsbereich        |
| ------------------------------ | ---------------------- |
| Teilen als Link                | Pro Verkaufskanal      |
| Teilen als Mail                | Pro Verkaufskanal      |
| Teilen mit WhatsApp            | Pro Verkaufskanal      |
| Teilen mit Facebook            | Pro Verkaufskanal      |
| Facebook App ID                | Pro Verkaufskanal      |
| Geöffnete Warenkörbe löschen  | Pro Verkaufskanal      |
| Ungeöffnete Warenkörbe löschen | Pro Verkaufskanal     |

---

## Empfohlene Konfigurationen

### Für B2C-Shops

| Einstellung        | Empfohlener Wert |
| ------------------ | ---------------- |
| Link               | Aktiviert        |
| Mail               | Aktiviert        |
| WhatsApp           | Aktiviert        |
| Facebook           | Optional         |
| Geöffnete löschen | 5 Tage           |
| Ungeöffnete löschen | 30 Tage        |

### Für B2B-Shops

| Einstellung        | Empfohlener Wert |
| ------------------ | ---------------- |
| Link               | Aktiviert        |
| Mail               | Aktiviert        |
| WhatsApp           | Deaktiviert      |
| Facebook           | Deaktiviert      |
| Geöffnete löschen | 14 Tage          |
| Ungeöffnete löschen | 60 Tage        |
