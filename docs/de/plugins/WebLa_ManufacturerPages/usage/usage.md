# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von **Hersteller Seiten**.

---

## Inhaltsverzeichnis

- [Herstellerdetailseite](#herstellerdetailseite)
- [CMS-Element Hersteller-Übersicht](#cms-element-hersteller-übersicht)
- [Top-Hersteller (Featured)](#top-hersteller-featured)
- [SEO-URLs](#seo-urls)
- [Hersteller-spezifische Felder](#hersteller-spezifische-felder)
- [Admin-Bereich Funktionen](#admin-bereich-funktionen)
- [Storefront Funktionen](#storefront-funktionen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Herstellerdetailseite

### Was sie bewirkt

Für jeden angelegten Hersteller wird automatisch eine eigene Detailseite bereitgestellt. Dort sieht der Kunde alle Produkte dieses Herstellers, kann filtern, sortieren und durch die Seiten paginieren — genau wie in einer normalen Kategorie-Listing.

### So verwenden Sie sie

Die Seite ist nach der Installation **automatisch aktiv** — keine manuelle Einrichtung nötig. Sie ist erreichbar unter:

- `/manufacturer/{id}` (Standard)
- oder `/<prefix>/<herstellerName>` (wenn SEO-URLs aktiv sind)

**Ort im Admin**: Die Hersteller selbst pflegen Sie wie gewohnt unter **Kataloge → Hersteller**.

### Tipps

- Hinterlegen Sie pro Hersteller ein **Logo** (Medienfeld), das auf der Übersicht und als Fallback-Banner auf der Detailseite angezeigt wird.
- Nutzen Sie das Feld **„Text am Ende des Herstellers"** (siehe unten) für individuelle SEO-Texte oder Markenbeschreibungen.

---

## CMS-Element Hersteller-Übersicht

### Was es bewirkt

Das Plugin registriert einen **CMS-Block** und ein **CMS-Element** mit dem Namen *Herstellerübersicht* in der Kategorie **Kommerz**. Damit können Sie die alphabetisch sortierte Hersteller-Liste per Drag & Drop in jede Erlebniswelt einfügen.

### So verwenden Sie es

1. Gehen Sie zu **Inhalte → Erlebniswelten**.
2. Öffnen oder erstellen Sie eine Seite (z. B. „Markenübersicht").
3. Ziehen Sie den Block **Herstellerübersicht** aus der Kategorie **Kommerz** in Ihr Layout.
4. Speichern und der Storefront zeigt eine A–Z-gruppierte Hersteller-Liste mit Buchstaben-Filter.

### Ort

**CMS-Editor**: Blöcke → Kategorie **Kommerz** → *Herstellerübersicht*

### Tipps

- Platzieren Sie die Seite über **Shop-Seiten** im Footer oder als eigene Navigations-Einstiegsseite.
- Die Darstellung lässt sich über die eigenen CSS-Klassen (`webla_manufacturers_wrapper`, `webla_manufacturer`, `webla_manufacturers-key`) weiter anpassen, falls Sie ein individuelles Layout wünschen.

---

## Top-Hersteller (Featured)

### Was es bewirkt

Einzelne Hersteller können als **Top-Hersteller** markiert werden. Diese erscheinen dann in einem separaten Bereich oberhalb der alphabetischen Übersicht und werden dort besonders hervorgehoben.

### So verwenden Sie es

1. Öffnen Sie einen Hersteller unter **Kataloge → Hersteller**.
2. Scrollen Sie zum Bereich **Zusatzfelder** (Custom Fields).
3. Aktivieren Sie den Schalter **Top-Hersteller**.
4. Speichern.

Auf der Storefront erscheint der Hersteller jetzt zusätzlich im oberen „Top-Hersteller"-Bereich.

---

## SEO-URLs

### Was sie bewirken

Statt der technischen URL `/manufacturer/{id}` können sprechende URLs wie `/hersteller/acme` generiert werden. Das ist besser für Suchmaschinen und für Benutzer, die Links teilen.

### So aktivieren Sie sie

1. Gehen Sie zu **Erweiterungen → Meine Erweiterungen → Hersteller Seiten → Konfigurieren**.
2. Aktivieren Sie **„Aktivieren Sie die SEO-URL-Erzeugung"**.
3. Setzen Sie pro Sprache einen Präfix im **SEO-URL Prefix**-Feld (z. B. `hersteller` für Deutsch, `brand` für Englisch).
4. Optional: Tragen Sie einen **Fallback SEO-URL Prefix** ein, falls das sprachabhängige Feld einmal nicht gesetzt ist.
5. Speichern.

Die URLs werden durch den Shopware-Planner-Task **„GenerateSEOUrlTask"** periodisch automatisch erzeugt. Sie können die Erzeugung auch manuell anstoßen — siehe [Anleitungen](../how_to.md).

---

## Hersteller-spezifische Felder

Das Plugin legt beim Installieren folgende **Zusatzfelder** auf Hersteller-Ebene an:

| Feld                            | Typ       | Zweck                                                                       |
| ------------------------------- | --------- | --------------------------------------------------------------------------- |
| **Hersteller verstecken**       | Schalter  | Blendet den Hersteller aus Übersicht und Sitemap aus.                       |
| **Top-Hersteller**              | Schalter  | Markiert den Hersteller als „Top" und zeigt ihn im hervorgehobenen Bereich an. |
| **Text am Ende des Herstellers** | Texteditor (HTML) | Freier Textbaustein, der unterhalb des Produkt-Listings auf der Herstellerseite erscheint. |

**Ort**: Kataloge → Hersteller → *Hersteller auswählen* → Abschnitt **Zusatzfelder**.

---

## Admin-Bereich Funktionen

### Konfiguration pro Verkaufskanal

**Ort**: Erweiterungen → Meine Erweiterungen → Hersteller Seiten → Konfigurieren

**Zweck**: Alle Einstellungen lassen sich pro Verkaufskanal überschreiben. So können Sie z. B. im DE-Shop andere SEO-Präfixe vergeben als im EN-Shop.

---

### CMS-Elemente

**Ort**: Inhalte → Erlebniswelten → *Seite bearbeiten* → Abschnitt **Kommerz**

**Zweck**: Fügt Hersteller-Listen in beliebige Erlebniswelten ein.

---

### Zusatzfelder auf Hersteller-Ebene

**Ort**: Kataloge → Hersteller → *Hersteller bearbeiten* → **Zusatzfelder**

**Zweck**: Steuerung der Sichtbarkeit pro Hersteller und individueller Textbaustein.

---

## Storefront Funktionen

### Herstellerdetailseite

**Wo sie erscheint**: Unter der SEO-URL (z. B. `/hersteller/acme`) oder `/manufacturer/{id}`.

**Was Kunden sehen**: Banner/Logo des Herstellers, Produktlisting mit Filter und Sortierung, optional Textbaustein unterhalb.

---

### Hersteller-Übersicht (CMS)

**Wo sie erscheint**: Auf jeder Erlebniswelt, in die Sie den Block **Herstellerübersicht** eingefügt haben.

**Was Kunden sehen**: Alphabetisch gruppierte Hersteller-Liste (A–Z plus `0-9`), Buchstaben-Filter, „Alle zurücksetzen"-Button. Optional darüber die markierten Top-Hersteller.

**Anpassungsmöglichkeiten**: Über eigene CSS-Klassen im Theme — das Plugin liefert keine eigene Admin-UI für Styling.

---

## Fehlerbehebung

### Hersteller erscheint nicht in der Übersicht

**Symptom**: Ein angelegter Hersteller fehlt in der CMS-Übersicht.

**Ursache**: Entweder ist dem Hersteller kein aktives Produkt zugeordnet, oder das Zusatzfeld **„Hersteller verstecken"** ist aktiv, oder die Option **„Hersteller mit Produkten ohne Lagerbestände verstecken"** greift.

**Lösung**: Prüfen Sie, ob mindestens ein aktives Produkt mit Lagerbestand dem Hersteller zugeordnet ist und ob der Schalter „Hersteller verstecken" deaktiviert ist.

---

### SEO-URL wird nicht automatisch erzeugt

**Symptom**: Nach Aktivierung der SEO-URL-Erzeugung erscheinen noch immer URLs im Format `/manufacturer/{id}`.

**Ursache**: Der Planner-Task **GenerateSEOUrlTask** wurde noch nicht ausgeführt, oder der Shopware-Message-Worker läuft nicht.

**Lösung**: Führen Sie den Planner-Task manuell aus (siehe [Anleitungen](../how_to.md)) oder starten Sie den Message-Worker. Den Cache anschließend neu aufbauen (**Einstellungen → Cache & Indizes → Cache leeren**).

---

### Top-Hersteller werden nicht angezeigt

**Symptom**: Der Bereich „Top-Hersteller" bleibt leer, obwohl Hersteller markiert sind.

**Ursache**: Der Top-Hersteller ist gleichzeitig in der allgemeinen Hersteller-Übersicht ausgeblendet (z. B. durch „Hersteller verstecken" oder Lagerbestand-Filter), oder er hat keine aktiven Produkte.

**Lösung**: Deaktivieren Sie „Hersteller verstecken" und prüfen Sie die Produkt-Zuordnung.

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
