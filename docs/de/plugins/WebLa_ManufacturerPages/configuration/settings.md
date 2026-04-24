# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für **Hersteller Seiten**.

**Navigation**: Erweiterungen → Meine Erweiterungen → Hersteller Seiten → Konfigurieren

Alle Einstellungen sind **pro Verkaufskanal** konfigurierbar. Wenn Sie kein konkreten Verkaufskanal auswählen, gilt der Wert als globaler Standard.

---

## Hersteller Seiten Konfiguration

### Hersteller mit Produkten ohne Lagerbestände verstecken

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Schalter (an/aus) |
| **Standard**     | Aus            |
| **Erforderlich** | Nein           |

**Beschreibung**: Wenn aktiviert, werden Hersteller, deren Produkte alle ausverkauft oder inaktiv sind, aus der Hersteller-Übersicht ausgeblendet.

**Anwendungsbeispiel**: Aktivieren Sie diese Option, wenn Sie keine „toten" Hersteller anzeigen möchten, deren Produkte derzeit nicht bestellbar sind.

---

### Aktivieren Sie die SEO-URL-Erzeugung

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Schalter (an/aus) |
| **Standard**     | Aus            |
| **Erforderlich** | Nein           |

**Beschreibung**: Wenn aktiviert, generiert das Plugin automatisch sprechende URLs für jede Herstellerseite (z. B. `/hersteller/acme` statt `/manufacturer/{id}`). Die Erzeugung erfolgt über einen Shopware-Planner-Task.

**Anwendungsbeispiel**: Aktivieren Sie dies für bessere Suchmaschinen-Platzierung und für URLs, die Kunden teilen können.

---

### Wählen Sie die Kategorie für die Herstellerseite aus

| Eigenschaft      | Wert                       |
| ---------------- | -------------------------- |
| **Typ**          | Kategorie-Auswahl           |
| **Standard**     | — (nicht gesetzt)          |
| **Erforderlich** | Nein                       |

**Beschreibung**: Legt die Kategorie fest, unter der Herstellerseiten im Breadcrumb-Pfad eingeordnet werden. Die Kategorie muss **manuell im Katalog angelegt** und anschließend hier verlinkt werden.

**Anwendungsbeispiel**: Legen Sie eine Kategorie „Hersteller" oder „Marken" im Katalog an, deaktivieren Sie sie im Hauptmenü (falls unerwünscht) und wählen Sie sie hier aus, damit Kunden wissen, in welchem Bereich Ihres Shops sie sich befinden.

---

### SEO-URL Prefix

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Snippet (sprachabhängiger Text) |
| **Standard**     | `hersteller` (de-DE) / `manufacturer` (en-GB) |
| **Erforderlich** | Nein           |

**Beschreibung**: Der sprachabhängige Präfix, der in der finalen SEO-URL erscheint. Die fertige URL hat das Format `/<prefix>/<herstellerName>`.

**Anwendungsbeispiel**: Tragen Sie für den deutschen Verkaufskanal `hersteller` und für den englischen `brands` ein — das Plugin erzeugt dann passende URLs pro Sprache.

---

### Fallback SEO-URL Prefix

| Eigenschaft      | Wert           |
| ---------------- | -------------- |
| **Typ**          | Text           |
| **Standard**     | — (intern: `manufacturer`) |
| **Erforderlich** | Nein           |

**Beschreibung**: Wird verwendet, wenn für die aktive Sprache kein SEO-URL-Prefix über das Snippet-Feld definiert wurde.

**Anwendungsbeispiel**: Setzen Sie einen neutralen Wert wie `brand`, um zu verhindern, dass URLs aus einer Sprache ungewollt in einer anderen erscheinen.

---

## Empfohlene Konfigurationen

### Für stark markenorientierte Shops

| Einstellung                          | Empfohlener Wert        |
| ------------------------------------ | ----------------------- |
| Hersteller ohne Lagerbestand verstecken | Aus                     |
| SEO-URL-Erzeugung                    | An                      |
| Kategorie für Herstellerseite        | Eigene Kategorie „Marken" |
| SEO-URL Prefix                       | `marken` / `brands`     |

### Für Shops mit großem Sortiment und Lagerrotation

| Einstellung                          | Empfohlener Wert        |
| ------------------------------------ | ----------------------- |
| Hersteller ohne Lagerbestand verstecken | An                      |
| SEO-URL-Erzeugung                    | An                      |
| Kategorie für Herstellerseite        | optional                |
