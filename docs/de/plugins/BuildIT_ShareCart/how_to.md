# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit BuildIT Share Cart.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Kunde teilt Warenkorb -> Plugin erstellt Link + speichert Produkte -> Empfänger öffnet Link -> Landingpage zeigt Produkte -> "Alle hinzufügen" übernimmt Produkte
```

**Detaillierter Ablauf**:
1. Der Kunde klickt auf "Warenkorb teilen" und wählt eine Methode
2. Das Plugin erstellt einen eindeutigen Link und speichert alle Warenkorb-Produkte mit Mengen in der Datenbank
3. Der Link wird je nach Methode kopiert, per Mail verschickt oder über WhatsApp/Facebook geteilt
4. Beim Öffnen des Links wird der Zeitpunkt gespeichert (relevant für die Bereinigung)
5. Der Empfänger sieht alle Produkte und kann sie in den eigenen Warenkorb übernehmen
6. Die geplante Aufgabe bereinigt alte Einträge automatisch

---

## Häufige Workflows

### Anleitung: Plugin einrichten

**Ziel**: Das Plugin installieren und für den Einsatz konfigurieren

**Zeitaufwand**: ca. 5 Minuten

**Schritte**:

1. **Plugin aktivieren**
   - Navigieren zu: `Erweiterungen -> Meine Erweiterungen`
   - Suchen Sie **BuildIT Share Cart** und klicken Sie auf **Aktivieren**

2. **Teilmethoden konfigurieren**
   - Klicken Sie auf das Zahnrad-Symbol neben dem Plugin oder auf **Konfigurieren**
   - Aktivieren Sie die gewünschten Teilmethoden (Link, Mail, WhatsApp, Facebook)
   - Falls Facebook: Tragen Sie Ihre Facebook App ID ein

3. **Bereinigung anpassen** (optional)
   - Scrollen Sie zum Abschnitt **Warenkorb Teilen Einstellungen**
   - Passen Sie die Löschzeiträume an Ihre Bedürfnisse an

4. **Cache leeren**
   - Navigieren zu: `Einstellungen -> System -> Caches & Indizes`
   - Klicken Sie auf **Alle Caches leeren**

**Ergebnis**: Im Storefront erscheint auf der Warenkorb-Seite der "Warenkorb teilen"-Button mit den von Ihnen aktivierten Methoden.

---

### Anleitung: Facebook-Teilen einrichten

**Ziel**: Die Facebook-Teilmethode aktivieren

**Zeitaufwand**: ca. 10 Minuten

**Voraussetzungen**:
- Ein Facebook-Entwicklerkonto

**Schritte**:

1. **Facebook-App erstellen**
   - Besuchen Sie [developers.facebook.com](https://developers.facebook.com/docs/development/create-an-app)
   - Erstellen Sie eine neue App vom Typ "Business"
   - Notieren Sie sich die angezeigte **App-ID**

2. **App-ID im Plugin konfigurieren**
   - Navigieren zu: `Erweiterungen -> Meine Erweiterungen -> BuildIT Share Cart -> Konfigurieren`
   - Aktivieren Sie **Teilen mit Facebook aktivieren**
   - Tragen Sie die **App-ID** in das Feld **Facebook App ID** ein
   - Klicken Sie auf **Speichern**

**Ergebnis**: Kunden sehen nun die Facebook-Option beim Teilen des Warenkorbs.

---

### Anleitung: Alte Warenkörbe manuell bereinigen

**Ziel**: Geteilte Warenkörbe sofort löschen, ohne auf die automatische Bereinigung zu warten

**Voraussetzungen**:
- SSH-Zugang zum Server oder Zugang zur Shopware-CLI

**Schritte**:

1. **Geöffnete Warenkörbe bereinigen**
   - Führen Sie aus: `bin/console share-cart:cleanup`
   - Bestätigen Sie die Abfrage mit `y`

2. **Ungeöffnete Warenkörbe bereinigen**
   - Führen Sie aus: `bin/console share-cart:cleanup-stale`
   - Bestätigen Sie die Abfrage mit `y`

**Ergebnis**: Alle Warenkörbe, die älter als die konfigurierten Tage sind, werden sofort gelöscht.

---

## Schnellreferenz

| Aufgabe                        | Wichtige Schritte                              | Erforderliche Einstellungen |
| ------------------------------ | ---------------------------------------------- | --------------------------- |
| Plugin aktivieren              | Erweiterungen -> Aktivieren -> Konfigurieren   | Mindestens eine Methode     |
| Facebook einrichten            | Facebook-App erstellen -> App-ID eintragen     | Facebook + App-ID           |
| Bereinigung anpassen           | Konfigurieren -> Löschzeiträume ändern         | Tage-Werte                  |
| Manuelle Bereinigung           | SSH -> `bin/console share-cart:cleanup`         | SSH-Zugang                  |

---

## Best Practices

1. **Aktivieren Sie mindestens Link und eine Social-Methode**: Der Link ist die universellste Methode, WhatsApp die beliebteste bei Endkunden.
2. **Passen Sie die Bereinigung an Ihren Shop an**: B2B-Shops profitieren von längeren Zeiträumen, da Entscheidungsprozesse länger dauern.
3. **Leeren Sie den Cache nach Konfigurationsänderungen**: Änderungen an den Teilmethoden werden erst nach einem Cache-Clear im Storefront sichtbar.

## Was Sie vermeiden sollten

- Alle Teilmethoden deaktiviert lassen - dann erscheint kein Button im Storefront
- Facebook aktivieren ohne gültige App-ID - führt zu Fehlern beim Teilen
- Sehr kurze Bereinigungszeiten (unter 2 Tagen) - Empfänger haben möglicherweise nicht genug Zeit, den Link zu öffnen
