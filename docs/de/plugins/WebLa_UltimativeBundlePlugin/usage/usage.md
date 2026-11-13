# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten des Ultimativen Bundle Plugins.

---

## Inhaltsverzeichnis

- [Bundles erstellen](#bundles-erstellen)
- [Bundles bearbeiten](#bundles-bearbeiten)
- [Bundle-Gruppen verwalten](#bundle-gruppen-verwalten)
- [Storefront-Darstellung](#storefront-darstellung)
- [Warenkorb-Verhalten](#warenkorb-verhalten)
- [Bundle-Index](#bundle-index)
- [Fehlerbehebung](#fehlerbehebung)

---

## Bundles erstellen

### Was es bewirkt

Sie können Produktbundles erstellen, die auf den Produktdetailseiten der enthaltenen Produkte angezeigt werden. Kunden sehen das Bundle-Angebot mit allen Gruppenprodukten und können es mit einem Klick in den Warenkorb legen.

### So erstellen Sie ein Bundle

1. Navigieren Sie zu **Kataloge → Bundles**
2. Klicken Sie auf **Bundle anlegen**
3. Füllen Sie die Grundeinstellungen aus:
   - **Titel**: Geben Sie einen aussagekräftigen Namen für das Bundle ein (z.B. "Komplett-Set Smartphone")
   - **Aktiv**: Aktivieren Sie das Bundle für die Anzeige in der Storefront
   - **Rabattart**: Wählen Sie zwischen **Prozentual (%)** und **Fester Betrag**
   - **Rabatt in Prozent**: Legen Sie den prozentualen Rabatt fest (z.B. 10 für 10%). Wird bei der Rabattart "Prozentual" angezeigt.
   - **Rabatt (fester Betrag)**: Legen Sie einen festen Rabatt pro Bundle in der Standardwährung fest (z.B. 10,00). Wird bei der Rabattart "Fester Betrag" angezeigt.
4. Wählen Sie den **Bundle-Typ**:
   - **Produkte**: Wählen Sie manuell die Hauptprodukte aus, bei denen das Bundle angezeigt werden soll
   - **Produktstream**: Wählen Sie einen Produktstream, dessen Produkte automatisch als Bundle-Trigger dienen
5. Klicken Sie auf **Speichern**

### Erweiterte Bundle-Optionen

- **Rabatt auf Hauptprodukt anwenden**: Wenn aktiviert, wird der Rabatt auf den Gesamtpreis (Hauptprodukt + Gruppenprodukte) berechnet. Wenn deaktiviert, gilt der Rabatt nur für die Gruppenprodukte.
- **Kein Rabatt**: Deaktiviert den Rabatt komplett für dieses Bundle. Nützlich für Werbe-Bundles ohne Preisnachlass.
- **Produkte ohne Bestand ausblenden**: Blendet Produkte automatisch aus, die nicht auf Lager sind.

### Rabatt als fester Betrag

Mit der Rabattart **Fester Betrag** gewährt das Bundle statt eines Prozentsatzes einen festen Rabatt:

- Der Betrag gilt einmal pro Bundle. Legt ein Kunde das Bundle zweimal in den Warenkorb, verdoppelt sich der Rabatt (z.B. 10,00 wird zu 20,00).
- Der Betrag wird so abgezogen, wie die Kundengruppe Preise sieht: bei Brutto-Kunden brutto, bei Netto-Kunden (z.B. B2B) netto.
- Andere Währungen werden über den Währungsfaktor umgerechnet.
- Der Rabatt übersteigt nie den Preis der rabattierten Positionen. Ob das Hauptprodukt dazugehört, legt **Rabatt auf Hauptprodukt anwenden** fest.

---

## Bundles bearbeiten

### So bearbeiten Sie ein bestehendes Bundle

1. Navigieren Sie zu **Kataloge → Bundles**
2. Klicken Sie auf das gewünschte Bundle in der Liste
3. Nehmen Sie Ihre Änderungen vor
4. Klicken Sie auf **Speichern** (oder verwenden Sie die Tastenkombination `Strg+S` / `Cmd+S`)

**Tipp**: Verwenden Sie die **Sprachumschaltung** oben rechts, um den Bundle-Titel in verschiedenen Sprachen zu pflegen.

---

## Bundle-Gruppen verwalten

Bundle-Gruppen sind das Herzstück des Plugins. Jede Gruppe enthält eine Auswahl an Produkten, aus denen Kunden wählen können.

Für eine detaillierte Anleitung zu Gruppen, optionalen Gruppen und der Mengenauswahl, lesen Sie die [Bundle-Gruppen Dokumentation](bundle-groups.md).

### Kurzübersicht: Gruppe hinzufügen

1. Öffnen Sie ein Bundle zur Bearbeitung
2. Scrollen Sie zum Bereich **Gruppen**
3. Klicken Sie auf **Hinzufügen**
4. Geben Sie einen Titel ein und klicken Sie auf **Bearbeiten**, um die Gruppendetails zu öffnen
5. Konfigurieren Sie die Gruppenoptionen im Modal:
   - **Titel**: Anzeigename der Gruppe
   - **Typ**: Produktquelle (Produkte, Produktstream oder Kategorie)
   - **Aktiv**: Gruppe anzeigen oder ausblenden
   - **Optional**: Kunden können diese Gruppe abwählen
   - **Mengenauswahl erlauben**: Kunden können die Menge pro Artikel wählen
   - **Maximale Menge**: Obergrenze für die Mengenauswahl
6. Wählen Sie die Produkte basierend auf dem gewählten Typ aus
7. Klicken Sie auf **Übernehmen**

---

## Storefront-Darstellung

### Desktop-Ansicht

Auf der Produktdetailseite werden Bundles als horizontale Karte dargestellt:

- Links: Hauptprodukt-Bild
- Mitte: Gruppenprodukte verbunden durch **+**-Zeichen
- Rechts: Preisbereich mit:
  - Originalpreis (durchgestrichen)
  - Bundle-Preis (hervorgehoben)
  - Ersparnis-Anzeige
  - "In den Warenkorb"-Button

Bei Gruppen mit mehreren Produkten wird ein **"Option wählen"**-Button angezeigt, der ein Modal mit allen verfügbaren Optionen öffnet.

### Mobile Ansicht

Unterhalb einer Browser-Fensterbreite von 992 Pixeln wird eine kompaktere, vertikale Darstellung verwendet. Maßgeblich ist allein die Fensterbreite, nicht das Endgerät – dieselbe Bildschirmgröße zeigt also immer dieselbe Darstellung:

- Bundle-Vorschau mit kleinen Produktbildern
- Ausklappbare Detailansicht
- Preise und Aktionsbutton im ausgeklappten Bereich
- Optimiert für Touch-Bedienung

### Position der Bundle-Anzeige

Die Position auf der Produktseite kann in den [Konfigurationseinstellungen](../configuration/settings.md) angepasst werden:
- Unter dem "In den Warenkorb"-Button
- Über der Produktbeschreibung (Standard)
- Unter der Produktbeschreibung

---

## Warenkorb-Verhalten

### Bundle im Warenkorb

Wenn ein Kunde ein Bundle in den Warenkorb legt, erscheint das Hauptprodukt als übergeordnete Position. Die Bundle-Gruppenprodukte werden als untergeordnete Positionen angezeigt.

### Automatische Bundle-Erstellung

Wenn die Einstellung **Bundles automatisch erstellen** aktiviert ist, erkennt das Plugin automatisch, wenn ein zum Warenkorb hinzugefügtes Produkt ein Bundle vervollständigt, und gruppiert die Produkte automatisch.

### Rabattanzeige im Warenkorb

Je nach Konfiguration wird der Rabatt als:
- **Eigene Position**: Negative Rabattposition unterhalb der Bundle-Produkte
- **Direktabzug**: Bereits im Produktpreis verrechnet (unsichtbar als separate Position)

---

## Bundle-Index

Der Bundle-Index ist ein Hintergrundsystem, das die Bundle-Produkt-Zuordnungen vorberechnet, um eine schnelle Darstellung in der Storefront zu gewährleisten.

### Wann muss der Index neu aufgebaut werden?

- Nach dem Erstellen oder Ändern von Bundles mit Produktstreams
- Nach dem Ändern von Kategoriezuordnungen bei Gruppen mit Kategorie-Typ
- Bei Inkonsistenzen in der Bundle-Anzeige

### Index manuell neu aufbauen

Führen Sie folgenden Befehl in der Konsole aus:

```bash
php bin/console wl-bundles:index
```

---

## Fehlerbehebung

### Bundle wird nicht auf der Produktseite angezeigt

**Symptom**: Das Bundle ist im Admin angelegt, erscheint aber nicht auf der Produktdetailseite.

**Mögliche Ursachen und Lösungen**:
1. **Bundle nicht aktiv**: Prüfen Sie, ob das Bundle und alle Gruppen auf "Aktiv" gesetzt sind
2. **Einstellung "Bundles aktivieren" deaktiviert**: Prüfen Sie die globale Einstellung unter **Erweiterungen → Meine Erweiterungen → Ultimatives Bundle Plugin → Konfigurieren**
3. **Produkt nicht zugewiesen**: Stellen Sie sicher, dass das Produkt im Bundle oder im gewählten Produktstream/der Kategorie enthalten ist
4. **Index veraltet**: Bauen Sie den Index mit `php bin/console wl-bundles:index` neu auf
5. **Cache leeren**: Leeren Sie den Shopware-Cache unter **Einstellungen → System → Caches & Indizes**

### Rabatt wird nicht berechnet

**Symptom**: Das Bundle wird angezeigt, aber es wird kein Rabatt abgezogen.

**Mögliche Ursachen und Lösungen**:
1. **Rabatt auf 0 gesetzt**: Prüfen Sie je nach Rabattart den Rabattprozentsatz oder den festen Betrag im Bundle
2. **"Kein Rabatt" aktiviert**: Prüfen Sie, ob die Option "Kein Rabatt" im Bundle deaktiviert ist
3. **Unvollständiges Bundle**: Stellen Sie sicher, dass alle Pflichtgruppen ein Produkt ausgewählt haben (sofern "Unvollständige Bundles erlauben" deaktiviert ist)

### Produkte in einer Gruppe werden nicht angezeigt

**Symptom**: Eine Bundle-Gruppe zeigt keine Produkte an.

**Mögliche Ursachen und Lösungen**:
1. **Gruppe nicht aktiv**: Aktivieren Sie die Gruppe im Bundle-Detail
2. **Keine Produkte zugewiesen**: Prüfen Sie die Produktzuweisung in der Gruppe
3. **Produkte nicht verfügbar**: Wenn "Produkte ohne Bestand ausblenden" aktiv ist, werden ausverkaufte Produkte nicht angezeigt
4. **Index veraltet**: Bauen Sie den Index neu auf

---

## Verwandte Dokumentation

- [Bundle-Gruppen im Detail](bundle-groups.md)
- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
