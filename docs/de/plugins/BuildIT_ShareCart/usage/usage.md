# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von BuildIT Share Cart.

---

## Storefront-Funktionen

### Warenkorb teilen

#### Was sie bewirkt

Ihre Kunden können den aktuellen Warenkorb über verschiedene Kanäle mit anderen Personen teilen. Ein teilbarer Link wird erstellt, der alle Produkte und Mengen enthält.

#### So verwenden Ihre Kunden die Funktion

1. Der Kunde legt Produkte in den Warenkorb
2. Auf der Warenkorb-Seite erscheint der Button **Warenkorb teilen**
3. Ein Modal öffnet sich mit den verfügbaren Teilmethoden (abhängig von Ihrer Konfiguration)
4. Der Kunde wählt eine Teilmethode (Link, E-Mail, WhatsApp oder Facebook)
5. Optional: Der Kunde gibt einen Titel und eine persönliche Nachricht ein
6. Der Kunde klickt auf **Absenden**

**Ort**: Storefront -> Warenkorb-Seite -> Unterhalb der Produktliste

#### Teilmethoden im Detail

**Link kopieren**:
- Ein eindeutiger Link wird generiert
- Der Link wird in ein Textfeld angezeigt
- Der Kunde klickt auf den Kopieren-Button, um den Link in die Zwischenablage zu kopieren

**Per E-Mail teilen**:
- Das Standard-E-Mail-Programm des Kunden öffnet sich
- Betreff und Nachricht sind vorausgefüllt mit dem vom Kunden eingegebenen Titel und der Nachricht
- Der Warenkorb-Link ist automatisch enthalten

**Per WhatsApp teilen**:
- Auf Mobilgeräten: Die WhatsApp-App öffnet sich direkt
- Auf dem Desktop: WhatsApp Web wird geöffnet
- Die Nachricht enthält Titel, Nachricht und den Warenkorb-Link

**Per Facebook teilen**:
- Der Facebook-Senden-Dialog öffnet sich in einem neuen Tab
- Der Empfänger erhält den Warenkorb-Link als Facebook-Nachricht

---

### Geteilten Warenkorb empfangen

#### Was sie bewirkt

Empfänger eines geteilten Warenkorbs sehen eine Landingpage mit allen Produkten und können diese in den eigenen Warenkorb übernehmen.

#### Was der Empfänger sieht

1. Der Empfänger klickt auf den geteilten Link
2. Eine Landingpage zeigt alle Produkte mit:
   - Produktbild und Name
   - Menge pro Produkt
   - Einzelpreis
3. Ein **Alle hinzufügen**-Button fügt sämtliche Produkte in den eigenen Warenkorb ein
4. Alternativ kann jedes Produkt einzeln über den **Kaufen**-Button in den Warenkorb gelegt werden

**Ort**: Storefront -> `/share-cart/{id}` (automatisch generierte URL)

#### Tipps

- Wenn ein Produkt nicht mehr verfügbar ist, wird es auf der Landingpage als nicht verfügbar angezeigt
- Der Empfänger muss kein Kundenkonto haben, um den geteilten Warenkorb zu sehen

---

## Admin-Bereich Funktionen

### Plugin-Konfiguration

**Ort**: Erweiterungen -> Meine Erweiterungen -> BuildIT Share Cart -> Konfigurieren

Hier aktivieren und deaktivieren Sie die einzelnen Teilmethoden und konfigurieren die Bereinigungszeiten. Siehe [Konfigurationseinstellungen](../configuration/settings.md) für eine vollständige Beschreibung aller Optionen.

---

## Automatische Bereinigung

Das Plugin enthält eine geplante Aufgabe (`buildit.share-cart.cleanup`), die alle 5 Minuten läuft und alte geteilte Warenkörbe automatisch löscht:

- **Geöffnete Warenkörbe**: Werden nach der konfigurierten Anzahl an Tagen gelöscht (Standard: 5 Tage)
- **Ungeöffnete Warenkörbe**: Werden nach der konfigurierten Anzahl an Tagen gelöscht (Standard: 30 Tage)

Die geplante Aufgabe wird automatisch beim Aktivieren des Plugins registriert. Sie können den Status unter **Einstellungen -> System -> Geplante Aufgaben** überprüfen.

---

## Fehlerbehebung

### Der "Warenkorb teilen"-Button erscheint nicht

**Symptom**: Auf der Warenkorb-Seite ist kein Teilen-Button sichtbar.

**Ursache**: Keine Teilmethode ist aktiviert.

**Lösung**: Aktivieren Sie mindestens eine Teilmethode unter **Erweiterungen -> Meine Erweiterungen -> BuildIT Share Cart -> Konfigurieren**.

---

### Facebook-Teilen funktioniert nicht

**Symptom**: Beim Klick auf Facebook passiert nichts oder es erscheint eine Fehlermeldung.

**Ursache**: Keine oder ungültige Facebook App ID konfiguriert.

**Lösung**: Erstellen Sie eine Facebook-App unter [developers.facebook.com](https://developers.facebook.com/docs/development/create-an-app) und tragen Sie die App-ID in den Plugin-Einstellungen ein.

---

### Geteilter Link zeigt "Nicht gefunden"

**Symptom**: Der Empfänger sieht eine "Nicht gefunden"-Meldung statt der Produktliste.

**Ursache**: Der geteilte Warenkorb wurde durch die automatische Bereinigung gelöscht.

**Lösung**: Erhöhen Sie die Bereinigungszeiten in den Plugin-Einstellungen oder bitten Sie den Absender, den Warenkorb erneut zu teilen.

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
