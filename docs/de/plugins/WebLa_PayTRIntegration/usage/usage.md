# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von PayTR Integration.

---

## Inhaltsverzeichnis

- [Zahlungsart PayTR](#zahlungsart-paytr)
- [Zahlungsablauf](#zahlungsablauf)
- [Ratenzahlung](#ratenzahlung)
- [Währungen und Sprache](#währungen-und-sprache)
- [Admin-Bereich Funktionen](#admin-bereich-funktionen)
- [Storefront Funktionen](#storefront-funktionen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Zahlungsart PayTR

### Was sie bewirkt

Bei der Installation legt das Plugin automatisch die Zahlungsart **PayTR** mit der Beschreibung „Sicher bezahlen mit PayTR“ an. Beim Aktivieren des Plugins wird sie aktiviert, beim Deaktivieren oder Deinstallieren wieder deaktiviert.

### So verwenden Sie sie

Damit Kunden PayTR im Checkout sehen, müssen Sie die Zahlungsart Ihrem Verkaufskanal zuweisen:

1. Öffnen Sie **Verkaufskanäle → [Ihr Verkaufskanal]**.
2. Fügen Sie im Feld **Zahlungsarten** den Eintrag **PayTR** hinzu.
3. Klicken Sie auf **Speichern**.

Name, Beschreibung, Logo und Reihenfolge der Zahlungsart können Sie unter **Einstellungen → Shop → Zahlungsarten → PayTR** anpassen.

### Tipps & Best Practices

- Ergänzen Sie in der Beschreibung, welche Karten und ob Ratenzahlung angeboten werden, z. B. „Kredit- und Debitkarte, Ratenzahlung möglich“.
- Wenn Sie PayTR nur für bestimmte Kunden anbieten möchten (z. B. nur Lieferland Türkei), nutzen Sie dafür den Rule Builder von Shopware in der Zahlungsart unter **Verfügbarkeitsregel**.

---

## Zahlungsablauf

### Was passiert bei einer Bestellung

```
Kunde schließt Bestellung ab → Weiterleitung zur PayTR-Zahlungsseite → Kunde zahlt
        → PayTR meldet Ergebnis an Ihren Shop → Zahlungsstatus wird aktualisiert
        → Kunde kehrt in den Shop zurück
```

1. Der Kunde wählt **PayTR** im Checkout und klickt auf **Zahlungspflichtig bestellen**.
2. Shopware legt die Bestellung an. Der Zahlungsstatus wechselt auf **In Bearbeitung**.
3. Der Kunde wird auf die sichere Zahlungsseite von PayTR weitergeleitet und gibt dort seine Kartendaten ein, ggf. mit 3D-Secure-Bestätigung.
4. PayTR meldet das Ergebnis im Hintergrund an Ihren Shop (über die Callback-URL):
   - Zahlung erfolgreich → Zahlungsstatus **Bezahlt**
   - Zahlung fehlgeschlagen → Zahlungsstatus **Fehlgeschlagen**
5. Der Kunde wird zurück in Ihren Shop geleitet und sieht die Bestellbestätigung bzw. bei Fehlschlag die Möglichkeit, die Zahlung erneut zu versuchen.

### Wichtig zu wissen

- Für die Zahlung hat der Kunde auf der PayTR-Seite **30 Minuten** Zeit.
- Maßgeblich für den Zahlungsstatus ist ausschließlich die Meldung von PayTR an die Callback-URL, nicht die Rückkehr des Kunden. Schließt der Kunde nach der Zahlung den Browser, wird die Bestellung trotzdem als bezahlt markiert.
- Jede Meldung von PayTR wird auf Echtheit geprüft. Gefälschte Meldungen werden abgewiesen.
- PayTR übermittelt den Warenkorb (Artikelbezeichnung, Preis, Menge) sowie Name, E-Mail-Adresse, Rechnungsanschrift und Telefonnummer des Kunden. Diese Daten sieht der Kunde auch auf der Zahlungsseite.

---

## Ratenzahlung

PayTR zeigt Kunden auf der Zahlungsseite passende Ratenoptionen für ihre Karte an. Sie steuern das über zwei Einstellungen:

| Ziel                                | Einstellung |
| ----------------------------------- | ----------- |
| Keine Ratenzahlung anbieten         | **Ratenzahlung deaktivieren** einschalten |
| Raten auf eine Höchstzahl begrenzen | **Maximale Raten** auf `2`–`12` setzen |
| Alle verfügbaren Raten anbieten     | **Maximale Raten** auf `Maximum verfügbar` |

Details siehe [Konfigurationseinstellungen](../configuration/settings.md#zahlungseinstellungen).

---

## Währungen und Sprache

### Unterstützte Währungen

| Shop-Währung      | Bei PayTR |
| ----------------- | --------- |
| Türkische Lira (TRY) | TL     |
| Euro (EUR)        | EUR       |
| US-Dollar (USD)   | USD       |
| Britisches Pfund (GBP) | GBP  |
| Russischer Rubel (RUB) | RUB  |

> Bei anderen Währungen (z. B. CHF) blendet das Plugin PayTR im Checkout automatisch aus. Wechselt ein Kunde die Währung erst nach der Auswahl von PayTR, wird die Zahlung abgelehnt und der Kunde kann eine andere Zahlungsart wählen.

Prüfen Sie außerdem mit PayTR, welche Fremdwährungen für Ihr Händlerkonto freigeschaltet sind.

### Sprache der Zahlungsseite

- Ist die Sprache des Kunden im Shop **Türkisch**, erscheint die PayTR-Zahlungsseite auf Türkisch.
- Bei allen anderen Sprachen erscheint sie auf **Englisch**.

---

## Admin-Bereich Funktionen

### Callback-URL anzeigen

**Ort**: Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren → Einrichtungshinweise

**Zweck**: Zeigt die Adresse an, die Sie im PayTR-Händlerpanel als Callback-URL eintragen müssen.

**Verwendung**:
1. Wählen Sie oben den Verkaufskanal, für den Sie die URL benötigen.
2. Klicken Sie auf das Kopiersymbol im Feld **Callback-URL**.
3. Fügen Sie die URL im PayTR-Händlerpanel unter **Support & Installation → Settings → Callback URL Settings** ein.

### API-Zugangsdaten testen

**Ort**: Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren → PayTR API-Zugangsdaten

**Zweck**: Prüft, ob die gespeicherten Zugangsdaten des ausgewählten Verkaufskanals von PayTR akzeptiert werden, ohne dass Sie eine Testbestellung aufgeben müssen.

**Verwendung**:
1. Tragen Sie Händler-ID, Händler-Schlüssel und Händler-Salt ein.
2. Klicken Sie auf **Speichern**.
3. Klicken Sie auf **API-Zugangsdaten testen**.
4. Oben rechts erscheint **API-Verbindung erfolgreich!** oder eine Fehlermeldung mit dem Grund.

### Zahlungsstatus in Bestellungen

**Ort**: Bestellungen → Übersicht → [Bestellung] → Status

**Zweck**: Den Zahlungsstatus pflegt das Plugin automatisch:

| Status           | Bedeutung |
| ---------------- | --------- |
| **Offen**        | Bestellung angelegt, Kunde wurde noch nicht zu PayTR weitergeleitet |
| **In Bearbeitung** | Kunde befindet sich auf der PayTR-Zahlungsseite oder hat sie verlassen, ohne zu zahlen |
| **Bezahlt**      | PayTR hat die erfolgreiche Zahlung bestätigt |
| **Fehlgeschlagen** | PayTR hat die Zahlung abgelehnt (z. B. Karte abgelehnt, 3D-Secure fehlgeschlagen) |

Den genauen Ablehnungsgrund sehen Sie im PayTR-Händlerpanel unter der jeweiligen Transaktion.

---

## Storefront Funktionen

### Zahlungsart im Checkout

**Wo sie erscheint**: Checkout → Bestellung abschließen → Zahlungsart

**Was Kunden sehen**: Die Zahlungsart **PayTR** mit der von Ihnen gepflegten Beschreibung. Nach dem Absenden der Bestellung folgt die Weiterleitung zur PayTR-Zahlungsseite.

### Zahlung nachträglich durchführen

**Wo sie erscheint**: Mein Konto → Bestellungen → [Bestellung]

**Was Kunden sehen**: Ist eine Zahlung fehlgeschlagen oder abgebrochen worden, können Kunden die Zahlung aus ihrem Kundenkonto erneut starten oder eine andere Zahlungsart wählen, sofern Sie das in Shopware erlauben.

---

## Fehlerbehebung

### PayTR erscheint nicht im Checkout

**Symptom**: Kunden können PayTR nicht auswählen.

**Ursache**: Die Zahlungsart ist dem Verkaufskanal nicht zugewiesen, inaktiv, durch eine Verfügbarkeitsregel ausgeschlossen, oder der Kunde nutzt eine von PayTR nicht unterstützte Währung.

**Lösung**: Prüfen Sie **Verkaufskanäle → [Ihr Verkaufskanal] → Zahlungsarten** und **Einstellungen → Shop → Zahlungsarten → PayTR** (Schalter **Aktiv**, **Verfügbarkeitsregel**) sowie die Währung im Shop (TRY, EUR, USD, GBP oder RUB).

### Fehlermeldung direkt nach „Zahlungspflichtig bestellen“

**Symptom**: Der Kunde wird nicht zu PayTR weitergeleitet, sondern sieht eine Zahlungsfehlermeldung.

**Ursache**: PayTR hat die Anfrage abgelehnt, meist wegen fehlender oder falscher Zugangsdaten, oder Ihr Server konnte PayTR nicht erreichen.

**Lösung**: Klicken Sie in der Plugin-Konfiguration auf **API-Zugangsdaten testen** und korrigieren Sie die gemeldeten Fehler. Prüfen Sie bei Verkaufskanal-spezifischen Zugangsdaten den richtigen Verkaufskanal.

### Bestellung bleibt auf „In Bearbeitung“, obwohl der Kunde bezahlt hat

**Symptom**: Im PayTR-Händlerpanel ist die Zahlung erfolgreich, in Shopware ändert sich der Zahlungsstatus aber nicht.

**Ursache**: Die Meldung von PayTR erreicht Ihren Shop nicht. Typische Gründe:
- Callback-URL ist im PayTR-Händlerpanel nicht oder falsch hinterlegt
- Shop ist nicht öffentlich erreichbar (z. B. Testsystem mit Passwortschutz oder lokale Umgebung)
- Firewall oder Bot-Schutz blockiert Anfragen von PayTR
- Im PayTR-Händlerpanel und in Shopware sind unterschiedliche Zugangsdaten hinterlegt

**Lösung**: Vergleichen Sie die Callback-URL aus der Plugin-Konfiguration mit dem Eintrag im PayTR-Händlerpanel, stellen Sie sicher, dass `/api/paytr/callback` öffentlich erreichbar ist, und prüfen Sie die Zugangsdaten. Im PayTR-Händlerpanel sehen Sie bei jeder Transaktion, ob die Benachrichtigung erfolgreich zugestellt wurde.

### Testzahlungen funktionieren, Live-Zahlungen nicht

**Symptom**: Nach dem Deaktivieren des Testmodus werden Zahlungen abgelehnt.

**Ursache**: Ihr PayTR-Konto ist noch nicht für Live-Zahlungen freigeschaltet.

**Lösung**: Klären Sie den Freischaltungsstatus mit PayTR.

### „Ungültige Händler-ID“ oder „Ungültiger Schlüssel/Salt“ beim Test

**Symptom**: Der Zugangsdaten-Test schlägt fehl.

**Ursache**: Tippfehler, Leerzeichen beim Kopieren oder Zugangsdaten eines anderen PayTR-Kontos.

**Lösung**: Kopieren Sie die drei Werte erneut von der Seite **Information** im PayTR-Händlerpanel, speichern Sie und testen Sie erneut.

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
