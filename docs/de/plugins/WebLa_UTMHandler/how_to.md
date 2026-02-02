# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit UTM Source - Marketing Parameter.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Kunde besucht Shop → Daten erfasst → Bei Bestellung gespeichert → In Admin sichtbar
       ↓                  ↓                    ↓                        ↓
  URL-Parameter      Cookie/Session       Bestellzuordnung        Bestelldetails
  + Referrer         + Server-DB          + Gerätedaten           + Reports
  + Gerät
```

**Beispielablauf**:
1. Kunde klickt auf Google-Anzeige mit `?utm_source=google&utm_campaign=winter_sale`
2. Plugin erfasst: Referrer (google.com), Parameter (utm_source, utm_campaign), Gerät (Mobile, iOS, Safari)
3. Daten werden im Cookie und/oder Server-Session gespeichert
4. Kunde bestellt → Alle Daten werden der Bestellung zugeordnet
5. Sie sehen die vollständigen Marketing-Daten in der Bestelldetailansicht

---

## Häufige Workflows

### Anleitung: UTM-Parameter für Marketing-Links erstellen

**Ziel**: Sicherstellen, dass Ihre Marketing-Links korrekt getrackt werden

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Zugriff auf Ihre Marketing-Plattform (Google Ads, Facebook, Newsletter-Tool)

**Schritte**:

1. **Basis-URL ermitteln**
   - Wählen Sie die Zielseite in Ihrem Shop aus
   - Beispiel: `https://mein-shop.de/angebot`

2. **UTM-Parameter hinzufügen**
   - Fügen Sie die Parameter an die URL an:
   ```
   https://mein-shop.de/angebot?utm_source=google&utm_medium=cpc&utm_campaign=winter_2024
   ```

3. **Standard-Parameter verwenden**

   | Parameter    | Zweck                  | Beispielwerte                    |
   | ------------ | ---------------------- | -------------------------------- |
   | utm_source   | Woher kommt der Traffic | google, facebook, newsletter     |
   | utm_medium   | Marketing-Kanal        | cpc, social, email               |
   | utm_campaign | Kampagnenname          | winter_2024, black_friday        |
   | utm_content  | Anzeigeninhalt         | banner_rot, text_link            |
   | utm_term     | Suchbegriff            | schuhe_kaufen                    |

4. **Link testen**
   - Öffnen Sie den Link in einem Inkognito-Fenster
   - Führen Sie eine Testbestellung durch
   - Überprüfen Sie die Marketing-Daten in der Bestellansicht

**Ergebnis**: Alle Bestellungen über diesen Link zeigen die konfigurierten UTM-Parameter an.

---

### Anleitung: Marketing-Erfolg einer Kampagne analysieren

**Ziel**: Herausfinden, welche Bestellungen von einer bestimmten Kampagne stammen

**Voraussetzungen**:
- Abgeschlossene Bestellungen mit UTM-Daten
- Zugriff auf den Admin-Bereich

**Schritte**:

1. **Bestellübersicht öffnen**
   - Navigieren Sie zu: `Bestellungen`

2. **Bestellungen durchsuchen**
   - Öffnen Sie einzelne Bestellungen
   - Scrollen Sie zur Karte **UTM Source - Marketing Parameter**

3. **Kampagnen-Daten identifizieren**
   - Suchen Sie nach dem Parameter `utm_campaign`
   - Notieren Sie den Wert (z.B. "winter_2024")

4. **Für tiefere Analyse: API nutzen**
   - Exportieren Sie Bestellungen über die Shopware Admin API
   - Die UTM-Daten sind im Feld `utmConfiguration` verfügbar

**Ergebnis**: Sie wissen, welche Bestellungen von welcher Kampagne stammen.

**Tipp**: Für umfangreiche Analysen empfehlen wir den Export in ein Analyse-Tool oder eine Tabellenkalkulation.

---

### Anleitung: Cookie-loses Tracking einrichten

**Ziel**: Marketing-Daten auch bei Cookie-Ablehnung erfassen

**Voraussetzungen**:
- Admin-Zugriff auf Plugin-Einstellungen

**Schritte**:

1. **Plugin-Konfiguration öffnen**
   - Navigieren Sie zu: `Erweiterungen → Meine Erweiterungen`
   - Suchen Sie **UTM Source - Marketing Parameter**
   - Klicken Sie auf **Konfigurieren**

2. **Einstellung aktivieren**
   - Aktivieren Sie: **Aufzeichnung des Referrers ohne Cookie**
   - Klicken Sie auf **Speichern**

3. **Bereinigungsintervall anpassen (optional)**
   - Setzen Sie **Aufräumen der Sitzungstabelle** auf einen passenden Wert
   - Empfehlung: 30 Tage

4. **Funktionalität testen**
   - Öffnen Sie Ihren Shop in einem Inkognito-Fenster
   - Lehnen Sie alle Cookies ab
   - Kommen Sie über einen Referrer-Link
   - Führen Sie eine Testbestellung durch
   - Prüfen Sie, ob der Referrer in der Bestellung erscheint

**Ergebnis**: Referrer werden auch ohne Cookie-Zustimmung erfasst.

---

### Anleitung: Erkannte Parameter organisieren

**Ziel**: Automatisch erkannte Parameter mit aussagekräftigen Namen versehen

**Voraussetzungen**:
- Bestellungen mit erfassten Marketing-Daten

**Schritte**:

1. **Parameter-Verwaltung öffnen**
   - Navigieren Sie zu: `Marketing → UTM Source - Marketing Parameter`

2. **Parameter identifizieren**
   - Suchen Sie Parameter mit technischen Namen (z.B. "fbclid")
   - Diese wurden automatisch beim ersten Auftreten angelegt

3. **Parameter umbenennen**
   - Klicken Sie auf den Parameter
   - Ändern Sie den **Titel** zu einem verständlichen Namen
     - Beispiel: "fbclid" → "Facebook Click ID"
   - Klicken Sie auf **Speichern**

4. **Inaktive Parameter deaktivieren**
   - Finden Sie Parameter, die Sie nicht mehr nutzen
   - Setzen Sie **Aktiv** auf "Aus"
   - Speichern Sie die Änderung

**Ergebnis**: Ihre Parameter-Liste ist übersichtlich und verständlich.

---

## Schnellreferenz

| Aufgabe                              | Wichtige Schritte                                    | Erforderliche Einstellungen |
| ------------------------------------ | ---------------------------------------------------- | --------------------------- |
| Marketing-Daten anzeigen             | Bestellungen → Bestellung öffnen → UTM-Karte         | Keine                       |
| Cookie-loses Tracking aktivieren     | Plugin-Konfig → Ohne Cookie aktivieren               | Ohne Cookie: An             |
| Parameter umbenennen                 | Marketing → UTM Source → Parameter → Titel ändern    | Keine                       |
| Alte Session-Daten schneller löschen | Plugin-Konfig → Aufräumen-Tage reduzieren            | Aufräumen: z.B. 7           |

---

## Best Practices

1. **Einheitliche UTM-Struktur**: Verwenden Sie in allen Marketing-Kanälen die gleiche Namenskonvention für utm_source, utm_medium und utm_campaign

2. **Kleinschreibung verwenden**: Nutzen Sie durchgehend Kleinbuchstaben in UTM-Parametern (google statt Google), um Duplikate zu vermeiden

3. **Regelmäßige Überprüfung**: Schauen Sie monatlich in die Parameter-Verwaltung und benennen/organisieren Sie neue Einträge

4. **Test vor Live-Schaltung**: Testen Sie neue Marketing-Links immer mit einer Testbestellung, bevor Sie die Kampagne starten

5. **Dokumentation**: Führen Sie eine Liste Ihrer verwendeten UTM-Werte, damit das gesamte Team einheitlich arbeitet

## Was Sie vermeiden sollten

- **Leerzeichen in Parameterwerten** – Verwenden Sie Unterstriche oder Bindestriche
- **Sonderzeichen** – Beschränken Sie sich auf Buchstaben, Zahlen und _/-
- **Zu lange Parameterwerte** – Halten Sie Werte kurz und prägnant (max. 50 Zeichen)
- **Inkonsistente Schreibweisen** – "Google", "google" und "GOOGLE" werden als drei verschiedene Quellen erfasst
