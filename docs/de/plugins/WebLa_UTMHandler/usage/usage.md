# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von UTM Source - Marketing Parameter.

---

## Inhaltsverzeichnis

- [Marketing-Daten in Bestellungen anzeigen](#marketing-daten-in-bestellungen-anzeigen)
- [Marketing-Parameter verwalten](#marketing-parameter-verwalten)
- [Automatische Datenerfassung](#automatische-datenerfassung)
- [Fehlerbehebung](#fehlerbehebung)

---

## Marketing-Daten in Bestellungen anzeigen

### Was es bewirkt

Nach Abschluss einer Bestellung werden alle erfassten Marketing-Daten automatisch in der Bestelldetailansicht angezeigt. Sie sehen auf einen Blick, über welchen Kanal der Kunde gekommen ist und welche Kampagne zur Bestellung geführt hat.

### So verwenden Sie es

1. Navigieren Sie zu **Bestellungen** im Admin-Bereich
2. Klicken Sie auf eine Bestellung, um die Detailansicht zu öffnen
3. Scrollen Sie zur Karte **UTM Source - Marketing Parameter**

### Angezeigte Informationen

Die Marketing-Daten werden in drei Bereichen dargestellt:

#### Gerät

| Spalte     | Beschreibung                                |
| ---------- | ------------------------------------------- |
| Typ        | Desktop, Mobile oder Tablet                 |
| Betriebsystem | Windows, macOS, iOS, Android, etc.       |
| Gerätename | Spezifisches Gerät (z.B. iPhone, Samsung)   |
| Browser    | Chrome, Firefox, Safari, Edge, etc.         |

#### Referrer

| Spalte    | Beschreibung                                         |
| --------- | ---------------------------------------------------- |
| Titel     | Automatisch erkannter Name der Quelle                |
| Parameter | Erkanntes Muster (z.B. "google.com")                 |
| Wert      | Vollständige Referrer-URL                            |

#### Parameter

| Spalte    | Beschreibung                                         |
| --------- | ---------------------------------------------------- |
| Titel     | Name des Parameters (z.B. "utm_source")              |
| Parameter | Technischer Parametername                            |
| Wert      | Erfasster Wert (z.B. "google", "newsletter_mai")     |

### Tipps & Best Practices

- Überprüfen Sie regelmäßig Bestellungen mit hohem Warenwert, um erfolgreiche Marketing-Kanäle zu identifizieren
- Exportieren Sie Bestellungen mit den UTM-Daten über die Shopware-API für tiefergehende Analysen
- Vergleichen Sie die Gerätedaten mit Ihrer Website-Optimierung – viele Mobile-Bestellungen = gute Mobile-Erfahrung

---

## Marketing-Parameter verwalten

### Was es bewirkt

Das Plugin erkennt automatisch neue Marketing-Parameter und Referrer. In der Parameter-Verwaltung können Sie diese ansehen, benennen und organisieren.

### So verwenden Sie es

**Navigation**: Marketing → UTM Source - Marketing Parameter

### Parameter-Liste

Die Liste zeigt alle erkannten Marketing-Parameter mit folgenden Informationen:

| Spalte    | Beschreibung                           |
| --------- | -------------------------------------- |
| Titel     | Anzeigename des Parameters             |
| Parameter | Technischer Name oder Muster           |
| Typ       | Get-Parameter oder Referrer            |
| Aktiv     | Ob der Parameter aktiv erfasst wird    |

### Neuen Parameter anlegen

1. Klicken Sie auf **Hinzufügen**
2. Füllen Sie die Felder aus:
   - **Titel**: Verständlicher Name (z.B. "Google Ads Kampagne")
   - **Parameter**: Technischer Name oder Muster
     - Für URL-Parameter: Der Parametername (z.B. "utm_campaign")
     - Für Referrer: Teil der URL (z.B. "google.com")
   - **Typ**: Wählen Sie "Get-Parameter" oder "Referrer"
   - **Aktiv**: Aktivieren Sie den Parameter
3. Klicken Sie auf **Speichern**

### Parameter bearbeiten

1. Klicken Sie auf einen Parameter in der Liste
2. Ändern Sie die gewünschten Felder
3. Klicken Sie auf **Speichern**

### Tipps & Best Practices

- Benennen Sie automatisch erkannte Parameter mit aussagekräftigen Titeln für bessere Übersichtlichkeit
- Deaktivieren Sie Parameter, die Sie nicht mehr benötigen, anstatt sie zu löschen
- Legen Sie für wiederkehrende Kampagnen einheitliche Parameterstrukturen fest

---

## Automatische Datenerfassung

### Wie es funktioniert

Das Plugin erfasst Marketing-Daten in mehreren Schritten:

1. **Beim Seitenaufruf**: URL-Parameter und Referrer werden erfasst
2. **Cookie-Speicherung**: Daten werden im Cookie gespeichert (falls zugestimmt)
3. **Session-Speicherung**: Bei aktivierter Cookie-loser Erfassung zusätzlich serverseitig
4. **Bei Bestellabschluss**: Alle erfassten Daten werden der Bestellung zugeordnet

### Unterstützte Parameter

Das Plugin erfasst automatisch alle URL-Parameter, nicht nur UTM-Parameter:

| Standard UTM-Parameter | Beschreibung            |
| ---------------------- | ----------------------- |
| utm_source             | Traffic-Quelle          |
| utm_medium             | Marketing-Medium        |
| utm_campaign           | Kampagnenname           |
| utm_term               | Bezahlte Suchbegriffe   |
| utm_content            | Anzeigeninhalt          |

**Zusätzlich**: Alle anderen URL-Parameter wie `fbclid`, `gclid`, `ref`, eigene Parameter usw.

### Geräteerkennung

Das Plugin erkennt automatisch:

- **Gerätetyp**: Desktop, Mobile, Tablet oder Sonstiges
- **Browser**: Chrome, Firefox, Safari, Edge und andere
- **Betriebssystem**: Windows, macOS, Linux, iOS, Android
- **Gerätename**: Spezifische Gerätemodelle (wo verfügbar)

---

## Fehlerbehebung

### Keine Marketing-Daten in der Bestellung

**Symptom**: Die Karte "UTM Source - Marketing Parameter" in der Bestelldetailansicht ist leer.

**Mögliche Ursachen und Lösungen**:

1. **Kunde hat Statistik-Cookies abgelehnt**
   - Aktivieren Sie "Aufzeichnung ohne Cookie" in den Plugin-Einstellungen
   - Prüfen Sie, ob der Cookie-Banner korrekt konfiguriert ist

2. **Bestellung ohne Referrer oder Parameter**
   - Der Kunde hat die Website direkt aufgerufen (kein Referrer)
   - Keine URL-Parameter in der Einstiegs-URL

3. **Browser blockiert Cookies/JavaScript**
   - Manche Browser oder Erweiterungen blockieren die Erfassung
   - Die serverseitige Erfassung (ohne Cookie) umgeht dieses Problem teilweise

### Referrer wird nicht erfasst

**Symptom**: In den Bestellungen erscheint kein Referrer, obwohl Kunden über Links kommen.

**Ursache**: Viele Websites senden aus Datenschutzgründen keinen Referrer mehr.

**Lösung**:
- Nutzen Sie UTM-Parameter in Ihren Marketing-Links
- Aktivieren Sie die Cookie-lose Erfassung für Server-seitige Speicherung

### Doppelte Parameter-Einträge

**Symptom**: Gleiche Parameter erscheinen mehrfach in der Parameter-Liste.

**Ursache**: Leicht unterschiedliche Schreibweisen oder Werte wurden als neue Parameter erkannt.

**Lösung**:
- Deaktivieren Sie doppelte Einträge
- Standardisieren Sie Ihre Marketing-Links mit einheitlichen Parameternamen

### Session-Tabelle wächst stark an

**Symptom**: Die Datenbank wird zunehmend größer.

**Lösung**:
- Reduzieren Sie den Wert für "Aufräumen der Sitzungstabelle" in den Einstellungen
- Stellen Sie sicher, dass der Shopware Scheduled Task Handler läuft

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
