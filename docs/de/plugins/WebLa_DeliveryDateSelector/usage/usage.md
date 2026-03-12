# Nutzungsanleitung

Diese Anleitung beschreibt alle Funktionen und Möglichkeiten des Plugins Wunsch-Lieferdatum für Kunden.

---

## Inhaltsverzeichnis

- [Datumsauswahl im Checkout](#datumsauswahl-im-checkout)
- [Feiertagsverwaltung im Admin](#feiertagsverwaltung-im-admin)
- [Wunschliefertermin in der Bestellübersicht](#wunschliefertermin-in-der-bestellubersicht)
- [Wunschliefertermin in der Bestelldetailansicht](#wunschliefertermin-in-der-bestelldetailansicht)
- [Individuelle Vorlaufzeiten pro Produkt, Kategorie und Versandart](#individuelle-vorlaufzeiten)
- [Kundenspezifische Liefertage](#kundenspezifische-liefertage)
- [Shopware-Regeln](#shopware-regeln)
- [Fehlerbehebung](#fehlerbehebung)

---

## Datumsauswahl im Checkout

### Was sie bewirkt

Im Checkout-Bereich Ihres Shops erscheint ein Datumsfeld, über das der Kunde seinen Wunschliefertermin auswählen kann. Der Kalender zeigt dabei nur Termine an, die frühestens lieferbar sind — basierend auf den Lieferzeiten der Produkte im Warenkorb, Ihren Puffertagen, gesperrten Wochentagen und Feiertagen.

### Wo die Datumsauswahl erscheint

Das Datumsfeld wird an folgenden Stellen angezeigt:

- **Off-Canvas-Warenkorb**: Das kleine Warenkorb-Panel, das sich seitlich öffnet
- **Warenkorb-Seite**: Die vollständige Warenkorb-Übersicht
- **Adress-/Registrierungsseite**: Die Seite zur Adresseingabe im Checkout
- **Bestellbestätigungs-Seite**: Die finale Zusammenfassung vor dem Kauf
- **Danke-Seite (nach Bestellung)**: Der ausgewählte Termin wird nach der Bestellung zur Bestätigung angezeigt

### Kalender-Verhalten

- Das **frühestmögliche Datum** ist vorberechnet und kann vom Kunden nicht unterschritten werden
- Gesperrte Wochentage und Feiertage sind im Kalender ausgegraut und nicht auswählbar
- Falls ein **maximales Lieferdatum** konfiguriert ist, werden auch Termine danach ausgegraut
- Wenn der "Bestätigungs-Button" in der Konfiguration aktiviert ist, muss der Kunde nach der Auswahl auf das Häkchen klicken. Andernfalls wird das Datum sofort automatisch gespeichert.

### Datum entfernen

Neben dem Datumsfeld befindet sich ein Papierkorb-Button, mit dem der Kunde den ausgewählten Termin wieder entfernen kann.

### Datum in den Warenkorb-Positionen

Sobald ein Termin ausgewählt wurde, wird dieser auch bei den einzelnen Warenkorb-Positionen als Information angezeigt.

---

## Feiertagsverwaltung im Admin

### Was sie bewirkt

In der Admin-Oberfläche gibt es eine eigene Seite zur Verwaltung von gesperrten Tagen. Hier werden sowohl automatisch geladene Feiertage als auch manuell hinzugefügte Tage (z.B. Betriebsferien) verwaltet.

**Ort**: Einstellungen → Erweiterungen → Wunschlieferdatum (Kalender-Icon)

### Automatische Feiertage

Das Plugin lädt stündlich alle öffentlichen Feiertage über die API [openholidaysapi.org](https://openholidaysapi.org) — je nach konfiguriertem Bundesland. Diese Einträge sind in der Liste mit dem Typ "api" gekennzeichnet und werden automatisch für das aktuelle und das folgende Jahr geladen.

### Manuelle Sperrtermine hinzufügen

1. Navigieren Sie zu **Einstellungen → Erweiterungen → Wunschlieferdatum**
2. Klicken Sie auf **"Datum hinzufügen"**
3. Geben Sie einen Namen für den Sperrtag ein (z.B. "Betriebsurlaub")
4. Wählen Sie das gewünschte Datum aus
5. Klicken Sie auf **Speichern**

Der Tag ist sofort gesperrt und wird im Checkout-Kalender nicht mehr auswählbar angezeigt.

### Bestehende Einträge bearbeiten

Klicken Sie in der Liste direkt auf ein Datumsfeld, um es inline zu bearbeiten. Einträge können auch über die Aktionen-Spalte gelöscht werden.

### Eintrag deaktivieren statt löschen

Jeder Eintrag kann über den "Aktiv"-Schalter in der Liste deaktiviert werden, ohne ihn zu löschen. Deaktivierte Einträge werden im Checkout-Kalender wieder als wählbar angezeigt.

---

## Wunschliefertermin in der Bestellubersicht

### Was sie bewirkt

In der Bestellliste im Admin-Bereich wird der Wunschliefertermin als zusätzliche Spalte angezeigt. Außerdem steht ein Datumsfilter zur Verfügung, mit dem Sie Bestellungen nach ihrem Wunschliefertermin filtern können.

**Ort**: Bestellungen → Übersicht

### Spalte "Wunschliefertermin"

Die Spalte erscheint ganz rechts in der Bestelltabelle. Das Datum wird im Format TT.MM.JJJJ angezeigt. Bestellungen ohne Wunschliefertermin zeigen in dieser Spalte nichts an.

### Filter "Wunschliefertermin"

Im Filterbereich über der Bestellliste finden Sie den Filter "Wunschliefertermin". Damit können Sie einen Zeitraum ("von" bis "bis") eingeben, um alle Bestellungen mit einem Wunschliefertermin in diesem Zeitraum anzuzeigen.

**Anwendungsbeispiel**: Sie möchten alle Bestellungen sehen, die am heutigen Tag geliefert werden sollen — geben Sie das heutige Datum in beide Felder ein.

---

## Wunschliefertermin in der Bestelldetailansicht

### Was sie bewirkt

In der Detailansicht einer Bestellung wird der Wunschliefertermin direkt unter den allgemeinen Bestellinformationen angezeigt.

**Ort**: Bestellungen → Übersicht → [Bestellung anklicken] → Allgemeine Informationen

Das Datum erscheint im Abschnitt "Allgemeine Informationen" der Bestelldetailansicht unterhalb der Standard-Bestelldaten.

---

## Individuelle Vorlaufzeiten

### Wie die Berechnung funktioniert

Das Plugin ermittelt das frühestmögliche Lieferdatum, indem es folgende Vorlaufzeiten vergleicht und den **höchsten Wert** verwendet:

1. **Produkt-Vorlaufzeit** (Custom Field am Produkt)
2. **Kategorie-Vorlaufzeit** (Custom Field an der Kategorie des Produkts)
3. **Versandart-Vorlaufzeit** (Custom Field an der gewählten Versandart)
4. **Shopware-Lieferzeit** (native Lieferzeit am Produkt in Shopware)
5. **Fallback-Vorlaufzeit** (aus der Plugin-Konfiguration)

Hat ein Warenkorb mehrere Produkte, wird das späteste Ergebnis aller Produkte als Mindestdatum verwendet.

### Vorlaufzeit am Produkt hinterlegen

1. Navigieren Sie zu **Kataloge → Produkte**
2. Öffnen Sie das gewünschte Produkt
3. Wechseln Sie zum Tab **Weitere Felder**
4. Geben Sie im Feld **"Lieferdatum Vorlaufzeit"** die gewünschte Zahl ein
5. Speichern Sie das Produkt

Die Einheit (Tage oder Stunden) wird global in der Plugin-Konfiguration unter "Lieferdatum Vorlaufzeit Einheit" festgelegt.

### Vorlaufzeit an einer Kategorie hinterlegen

1. Navigieren Sie zu **Kataloge → Kategorien**
2. Öffnen Sie die gewünschte Kategorie
3. Wechseln Sie zum Tab **Weitere Felder**
4. Geben Sie im Feld **"Lieferdatum Vorlaufzeit"** die gewünschte Zahl ein
5. Speichern Sie die Kategorie

**Hinweis**: Die Kategorie-Vorlaufzeit greift nur, wenn am Produkt selbst keine Vorlaufzeit hinterlegt ist.

### Vorlaufzeit an einer Versandart hinterlegen

1. Navigieren Sie zu **Einstellungen → Versand → Versandarten**
2. Öffnen Sie die gewünschte Versandart
3. Wechseln Sie zum Tab **Weitere Felder**
4. Geben Sie im Feld **"Vorlaufzeit"** die gewünschte Zahl ein
5. Speichern Sie die Versandart

---

## Kundenspezifische Liefertage

### Was das bewirkt

Für einzelne Kunden können individuelle Liefertage festgelegt werden. Wenn diese Funktion genutzt wird, sieht ein bestimmter Kunde nur die für ihn konfigurierten Wochentage im Kalender — unabhängig von den globalen Einstellungen.

Dies ist nützlich für B2B-Shops, bei denen bestimmte Kunden z.B. nur dienstags und donnerstags beliefert werden.

### Einrichtung

1. Navigieren Sie zu **Kunden → Übersicht**
2. Öffnen Sie den gewünschten Kunden
3. Wechseln Sie zum Tab **Weitere Felder**
4. Im Feld **"Liefertag(e)"** wählen Sie die erlaubten Wochentage für diesen Kunden
5. Im Feld **"Versandarten für die die Liefertage gelten"** wählen Sie die Versandarten, für die diese Einschränkung gilt
6. Speichern Sie den Kunden

**Hinweis**: Die kundenspezifischen Liefertage greifen nur, wenn eine der konfigurierten Versandarten im Checkout aktiv ist.

---

## Shopware-Regeln

Das Plugin fügt zwei neue Regelbedingungen zum Shopware-Regelwerk hinzu. Diese können in **Einstellungen → Shopware Regeln** verwendet werden.

### Regel: Wunschliefertermin gesetzt

**Regelname**: `Wunschliefertermin gesetzt`

Prüft, ob der Kunde im Checkout einen Wunschliefertermin ausgewählt hat oder nicht.

**Anwendungsbeispiel**: Gewähren Sie einen Rabatt, wenn der Kunde einen Wunschliefertermin festlegt (da dies die Planung erleichtert).

### Regel: Wunschliefertermin — Wochentag

**Regelname**: `Wunschliefertermin Wochentag`

Prüft, auf welchen Wochentag der gewählte Wunschliefertermin fällt. Kann auf einen oder mehrere Wochentage geprüft werden (ist gleich / ist nicht gleich).

**Anwendungsbeispiel**: Zeigen Sie einen bestimmten Versandhinweis nur an, wenn der Wunschliefertermin auf einen Montag fällt.

---

## Fehlerbehebung

### Der Kalender zeigt kein Datum als "frühestmöglich" an

**Symptom**: Der Kalender ist leer oder alle Daten sind ausgegraut.

**Ursache**: Möglicherweise gibt es keine verfügbaren Wochentage, weil alle Wochentage als "nicht verfügbar" konfiguriert sind, oder alle Termine sind durch Feiertage gesperrt.

**Lösung**: Prüfen Sie unter **Erweiterungen → Konfigurieren → Nicht verfügbare Tage**, ob mindestens ein Wochentag verfügbar ist. Prüfen Sie außerdem die Feiertags-Liste unter **Einstellungen → Erweiterungen → Wunschlieferdatum**.

---

### Der Wunschliefertermin erscheint nicht im Checkout

**Symptom**: Das Datumsfeld wird im Checkout nicht angezeigt.

**Ursache**: Das Plugin ist inaktiv oder für die gewählte Versandart nicht aktiviert.

**Lösung**: Prüfen Sie, ob das Plugin unter **Erweiterungen → Meine Erweiterungen** aktiv ist. Prüfen Sie außerdem die Einstellung "Aktiv" in der Plugin-Konfiguration. Falls "Aktiv" deaktiviert ist, stellen Sie sicher, dass die aktuelle Versandart unter "Nur aktiv für diese Versandarten" ausgewählt ist.

---

### Feiertage werden nicht automatisch aktualisiert

**Symptom**: Neue oder geänderte Feiertage erscheinen nicht in der Feiertagsliste.

**Ursache**: Die stündliche Aktualisierung über den geplanten Task hat möglicherweise noch nicht ausgeführt, oder der Task ist deaktiviert.

**Lösung**: Prüfen Sie unter **Einstellungen → System → Geplante Tasks**, ob der Task `webla-update-storefront-holidays` aktiv ist und zuletzt ausgeführt wurde. Sie können den Task dort auch manuell anstoßen. Alternativ können Sie den Update-Befehl manuell ausführen: `bin/console webla:update-holidays`

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
