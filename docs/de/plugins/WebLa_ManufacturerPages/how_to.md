# Anleitungen

Schritt-für-Schritt-Workflows für häufige Aufgaben mit **Hersteller Seiten**.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Produkt-Hersteller (Katalog) → Plugin-Logik → Storefront-Seite + CMS-Element + Sitemap-Eintrag
```

**Beispielablauf**:

1. Ein Produkt wird im Katalog einem Hersteller „Acme" zugeordnet.
2. Das Plugin erfasst „Acme" automatisch als verfügbaren Hersteller.
3. In der Storefront erscheint „Acme" in der Hersteller-Übersicht (falls das CMS-Element platziert ist), unter `/manufacturer/{id}` bzw. `/hersteller/acme` sowie in der Sitemap.

---

## Häufige Workflows

### Anleitung: Hersteller-Landingpage einrichten

**Ziel**: Eine eigene Seite im Shop, die alle Hersteller alphabetisch auflistet.

**Zeitaufwand**: ca. 10 Minuten

**Voraussetzungen**:
- Plugin ist installiert und aktiviert.
- Es existieren mindestens einige Produkte mit zugeordnetem Hersteller.

**Schritte**:

1. **Neue Erlebniswelt anlegen**
   - Navigieren zu: **Inhalte → Erlebniswelten → Neue Erlebniswelt**
   - Typ: *Shop-Seite*, Name: z. B. „Markenübersicht".

2. **Hersteller-Block einfügen**
   - Im Layout-Editor auf **Block hinzufügen** klicken.
   - Kategorie **Kommerz** öffnen → Block **Herstellerübersicht** auswählen und ins Layout ziehen.

3. **Speichern und Vorschau**
   - Erlebniswelt speichern.
   - Erlebniswelt einem Verkaufskanal und einer Seite zuordnen (z. B. Shop-Seite „Hersteller").

4. **Im Storefront verlinken**
   - Navigieren zu: **Kataloge → Kategorien** und legen Sie optional einen Menüpunkt zur neuen Seite an, oder verlinken Sie sie aus dem Footer.

**Ergebnis**: Kunden sehen unter `/hersteller` (oder der gewählten URL) eine vollständige A–Z-Hersteller-Übersicht.

**Fehlerbehebung**: Falls die Liste leer bleibt, prüfen Sie, dass mindestens ein **aktiver** Hersteller mindestens einem **aktiven** Produkt zugeordnet ist.

---

### Anleitung: SEO-URLs einmalig erzeugen (manuell)

**Ziel**: Sofortige Generierung aller SEO-URLs, ohne auf den nächsten Planner-Lauf zu warten.

**Zeitaufwand**: wenige Sekunden

**Voraussetzungen**:
- Option **„Aktivieren Sie die SEO-URL-Erzeugung"** ist aktiv.
- Zugriff auf die Shopware-Verwaltung.

**Schritte**:

1. **Planner-Task ausführen**
   - Navigieren zu: **Einstellungen → System → Planner**
   - Suchen Sie den Task mit dem Namen **webla_manufacturerpages.seo_url.task** (oder ähnlich, je nach Shopware-Version).
   - Klicken Sie auf **Jetzt ausführen**.

2. **Ergebnis prüfen**
   - Öffnen Sie eine Herstellerseite in der Storefront — die URL sollte jetzt `/<prefix>/<herstellerName>` statt `/manufacturer/{id}` lauten.

**Ergebnis**: Alle Hersteller haben sprechende URLs pro aktivierter Sprache.

**Fehlerbehebung**: Läuft der Message-Worker nicht, wird der Task zwar in die Queue gelegt, aber nicht abgearbeitet. Starten Sie den Message-Worker (`bin/console messenger:consume`) oder wenden Sie sich an Ihren Hoster.

---

### Anleitung: Einzelnen Hersteller verstecken

**Ziel**: Ein Hersteller, der im Shop nicht mehr angezeigt werden soll (z. B. ausgelistete Marke), wird aus der Übersicht und Sitemap entfernt — ohne ihn zu löschen.

**Zeitaufwand**: 1 Minute

**Schritte**:

1. **Hersteller öffnen**
   - Navigieren zu: **Kataloge → Hersteller**
   - Den gewünschten Hersteller öffnen.

2. **Zusatzfeld setzen**
   - Im Bereich **Zusatzfelder** den Schalter **Hersteller verstecken** aktivieren.
   - Speichern.

**Ergebnis**: Der Hersteller erscheint nicht mehr in der Hersteller-Übersicht und wird aus der nächsten Sitemap-Generierung ausgeschlossen.

---

### Anleitung: Top-Hersteller definieren

**Ziel**: Ausgewählte Hersteller (z. B. Haupt-Marken) werden prominent oberhalb der allgemeinen Liste angezeigt.

**Zeitaufwand**: 1 Minute pro Hersteller

**Schritte**:

1. **Hersteller öffnen** (**Kataloge → Hersteller**).
2. **Zusatzfeld setzen** — Schalter **Top-Hersteller** aktivieren.
3. Speichern.
4. Für weitere Top-Hersteller wiederholen.

**Ergebnis**: Auf der Storefront-Übersicht erscheinen die markierten Hersteller zusätzlich im Bereich „Top-Hersteller".

---

## Erweiterte Workflows

### Individuellen Textbaustein pro Hersteller pflegen

**Komplexität**: Niedrig

**Wann zu verwenden**: Für individuelle SEO-Texte, Markenbeschreibungen oder rechtliche Hinweise, die nur auf einer bestimmten Herstellerseite erscheinen sollen.

**Schritte**:

1. Hersteller öffnen (**Kataloge → Hersteller**).
2. Im Bereich **Zusatzfelder** das Feld **Text am Ende des Herstellers** ausfüllen (HTML-Editor mit Formatierung).
3. Speichern. Der Text erscheint unterhalb des Produkt-Listings auf der Detailseite.

---

## Schnellreferenz

| Aufgabe                              | Wichtige Schritte                                                           | Erforderliche Einstellungen |
| ------------------------------------ | --------------------------------------------------------------------------- | --------------------------- |
| Hersteller-Landingpage einrichten    | Erlebniswelt → Block **Herstellerübersicht** einfügen → speichern           | —                           |
| SEO-URLs aktivieren                  | Konfiguration öffnen → „SEO-URL-Erzeugung" an → Prefix setzen               | `seoactive`, `seoprefixlang`, `seoprefix` |
| SEO-URLs manuell erzeugen            | Planner → Task **GenerateSEOUrlTask** → **Jetzt ausführen**                 | Task-Worker läuft           |
| Hersteller verstecken                | Hersteller öffnen → Zusatzfeld **Hersteller verstecken** aktivieren         | —                           |
| Top-Hersteller markieren             | Hersteller öffnen → Zusatzfeld **Top-Hersteller** aktivieren                | —                           |

---

## Best Practices

1. **Kategorie für Breadcrumbs anlegen**: Eine eigene Kategorie „Hersteller" im Katalog verbessert die Navigation und SEO, auch wenn sie nicht im Hauptmenü sichtbar ist.
2. **Pro Sprache eigenen SEO-Präfix setzen**: Vermeiden Sie `/manufacturer/` im deutschen Shop — nutzen Sie `/hersteller/` für bessere Ergebnisse in deutschsprachigen Suchmaschinen.
3. **Top-Hersteller sparsam einsetzen**: 5–10 hervorgehobene Hersteller wirken besser als 50 „Top-Hersteller" — sonst verliert die Hervorhebung ihre Wirkung.

## Was Sie vermeiden sollten

- ❌ **Hersteller nach Installation aktivieren und Cache nicht neu aufbauen** — die SEO-URLs werden erst nach einem Cache-Rebuild korrekt generiert.
- ❌ **SEO-URL Prefix auf leeren String setzen** — das erzeugt URLs wie `//acme` statt `/hersteller/acme`.
- ❌ **Planner-Task deaktivieren, aber SEO-URL-Erzeugung aktiviert lassen** — neue Hersteller bekommen dann nie sprechende URLs.
