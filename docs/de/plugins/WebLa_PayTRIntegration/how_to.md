# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit PayTR Integration.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Checkout (Shopware) → PayTR-Zahlungsseite → Zahlung durch Kunden
                              ↓
              PayTR meldet Ergebnis an Callback-URL → Zahlungsstatus in Shopware
                              ↓
                  Kunde kehrt in Ihren Shop zurück
```

**Beispielablauf**:
1. Der Kunde bestellt mit der Zahlungsart PayTR.
2. Das Plugin fordert bei PayTR eine Zahlungssitzung an und leitet den Kunden zur PayTR-Zahlungsseite weiter.
3. Nach der Zahlung meldet PayTR das Ergebnis an Ihren Shop. Die Bestellung wird auf **Bezahlt** oder **Fehlgeschlagen** gesetzt, und der Kunde landet wieder in Ihrem Shop.

---

## Häufige Workflows

### Anleitung: PayTR erstmalig einrichten

**Ziel**: PayTR als Zahlungsart im Shop anbieten.

**Zeitaufwand**: ca. 15 Minuten

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Zugang zum PayTR-Händlerpanel
- Shop ist über seine öffentliche Domain erreichbar

**Schritte**:

1. **Zugangsdaten bei PayTR abrufen**
   - Melden Sie sich im PayTR-Händlerpanel an.
   - Öffnen Sie die Seite **Information** (Bilgi).
   - Notieren Sie **Mağaza No**, **Mağaza Şifresi** und **Mağaza Gizli Anahtar**.

2. **Zugangsdaten in Shopware eintragen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren`
   - Tragen Sie die Werte ein: Mağaza No → **Händler-ID**, Mağaza Şifresi → **Händler-Schlüssel**, Mağaza Gizli Anahtar → **Händler-Salt**.
   - Lassen Sie **Testmodus** aktiviert.
   - Klicken Sie auf **Speichern**.

3. **Zugangsdaten testen**
   - Klicken Sie auf **API-Zugangsdaten testen**.
   - Warten Sie auf die Meldung **API-Verbindung erfolgreich!**. Bei einem Fehler siehe [Fehlerbehebung](usage/usage.md#fehlerbehebung).

4. **Callback-URL bei PayTR hinterlegen**
   - Kopieren Sie im Bereich **Einrichtungshinweise** die **Callback-URL**.
   - Öffnen Sie im PayTR-Händlerpanel **Support & Installation → Settings → Callback URL Settings**.
   - Fügen Sie die URL ein und speichern Sie.

5. **Zahlungsart dem Verkaufskanal zuweisen**
   - Navigieren zu: `Verkaufskanäle → [Ihr Verkaufskanal]`
   - Fügen Sie unter **Zahlungsarten** den Eintrag **PayTR** hinzu und klicken Sie auf **Speichern**.

**Ergebnis**: PayTR erscheint im Checkout. Zahlungen laufen im Testmodus.

**Fehlerbehebung**: Erscheint PayTR nicht im Checkout, prüfen Sie Schritt 5 und ob der Shop eine unterstützte Währung verwendet (TRY, EUR, USD, GBP, RUB).

---

### Anleitung: Testbestellung durchführen

**Ziel**: Den kompletten Zahlungsablauf prüfen, bevor echte Kunden zahlen.

**Zeitaufwand**: ca. 5 Minuten

**Voraussetzungen**:
- Einrichtung abgeschlossen
- **Testmodus** ist aktiviert
- Testkartendaten von PayTR (im PayTR-Händlerpanel bzw. der PayTR-Dokumentation zu finden)

**Schritte**:

1. **Bestellung aufgeben**
   - Legen Sie in der Storefront einen Artikel in den Warenkorb.
   - Wählen Sie im Checkout **PayTR** und klicken Sie auf **Zahlungspflichtig bestellen**.

2. **Testzahlung durchführen**
   - Sie werden zur PayTR-Zahlungsseite weitergeleitet.
   - Geben Sie die Testkartendaten ein und schließen Sie die Zahlung ab.

3. **Ergebnis prüfen**
   - Sie landen auf der Bestellbestätigung Ihres Shops.
   - Navigieren zu: `Bestellungen → Übersicht → [Testbestellung]`
   - Der Zahlungsstatus muss **Bezahlt** sein.

4. **Fehlgeschlagene Zahlung testen** (optional)
   - Wiederholen Sie den Vorgang mit einer Testkarte, die eine Ablehnung auslöst.
   - Der Zahlungsstatus muss **Fehlgeschlagen** sein.

**Ergebnis**: Zahlungsstatus wird korrekt aktualisiert, der Kunde kommt in den Shop zurück.

**Fehlerbehebung**: Bleibt der Status auf **In Bearbeitung**, erreicht die Meldung von PayTR Ihren Shop nicht. Prüfen Sie Callback-URL und Erreichbarkeit, siehe [Fehlerbehebung](usage/usage.md#fehlerbehebung).

---

### Anleitung: Live schalten

**Ziel**: Echte Zahlungen annehmen.

**Zeitaufwand**: ca. 2 Minuten

**Voraussetzungen**:
- Testbestellung erfolgreich
- PayTR hat Ihr Konto für Live-Zahlungen freigeschaltet

**Schritte**:

1. **Testmodus deaktivieren**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren`
   - Schalten Sie **Testmodus** aus und klicken Sie auf **Speichern**.
   - Prüfen Sie bei Verkaufskanal-spezifischer Konfiguration, dass der Testmodus nicht in einem Verkaufskanal noch aktiviert ist.

2. **Zugangsdaten erneut testen**
   - Klicken Sie auf **API-Zugangsdaten testen**.

3. **Echte Bestellung mit kleinem Betrag durchführen** (empfohlen)
   - Prüfen Sie, ob die Zahlung im PayTR-Händlerpanel erscheint und die Bestellung in Shopware auf **Bezahlt** steht.
   - Erstatten Sie die Zahlung anschließend im PayTR-Händlerpanel.

**Ergebnis**: Ihr Shop nimmt echte Zahlungen über PayTR an.

---

### Anleitung: Ratenzahlung einstellen

**Ziel**: Festlegen, ob und wie viele Raten Kunden wählen können.

**Zeitaufwand**: ca. 2 Minuten

**Schritte**:

1. **Konfiguration öffnen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren → Zahlungseinstellungen`

2. **Ratenzahlung festlegen**
   - Keine Raten: **Ratenzahlung deaktivieren** einschalten.
   - Begrenzte Raten: **Ratenzahlung deaktivieren** ausschalten und unter **Maximale Raten** eine Höchstzahl wählen.

3. **Speichern**

**Ergebnis**: Die PayTR-Zahlungsseite zeigt nur noch die erlaubten Ratenoptionen.

---

## Erweiterte Workflows

### Unterschiedliche PayTR-Konten pro Verkaufskanal

**Komplexität**: Mittel

**Wann zu verwenden**: Sie betreiben mehrere Shops (Verkaufskanäle), die über getrennte PayTR-Händlerkonten abrechnen.

1. Navigieren zu: `Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren`
2. Wählen Sie oben im Feld **Verkaufskanal** den gewünschten Verkaufskanal.
3. Tragen Sie die Zugangsdaten des zugehörigen PayTR-Kontos ein und klicken Sie auf **Speichern**.
4. Klicken Sie bei weiterhin ausgewähltem Verkaufskanal auf **API-Zugangsdaten testen**, kopieren Sie die **Callback-URL** und hinterlegen Sie sie im PayTR-Händlerpanel des zugehörigen Kontos.
5. Wiederholen Sie die Schritte für jeden weiteren Verkaufskanal.
6. Führen Sie in jedem Verkaufskanal eine Testbestellung durch.

---

## Schnellreferenz

| Aufgabe                 | Wichtige Schritte                                           | Erforderliche Einstellungen |
| ----------------------- | ----------------------------------------------------------- | --------------------------- |
| Einrichtung             | Zugangsdaten eintragen, testen, Callback-URL hinterlegen, Verkaufskanal zuweisen | Händler-ID, Händler-Schlüssel, Händler-Salt |
| Testbestellung          | Mit Testkarte bestellen, Zahlungsstatus prüfen               | Testmodus aktiviert         |
| Live schalten           | Testmodus aus, erneut testen                                 | Testmodus                   |
| Ratenzahlung einstellen | Raten deaktivieren oder Höchstzahl wählen                    | Ratenzahlung deaktivieren, Maximale Raten |

---

## Best Practices

1. **Immer zuerst im Testmodus prüfen**: Eine erfolgreiche Testbestellung mit Statuswechsel auf **Bezahlt** ist der einzige sichere Beweis, dass auch die Callback-URL funktioniert.
2. **Callback-URL nach Domainwechsel aktualisieren**: Ändert sich die Domain Ihres Shops, müssen Sie die neue Callback-URL im PayTR-Händlerpanel eintragen.

## Was Sie vermeiden sollten

- ❌ Live gehen mit aktiviertem Testmodus: Kunden „zahlen“, aber Sie erhalten kein Geld.
- ❌ Callback-URL aus einer lokalen oder geschützten Umgebung kopieren: PayTR kann sie nicht erreichen, Bestellungen bleiben auf **In Bearbeitung**.
- ❌ Zugangsdaten testen, ohne vorher zu speichern: Der Test prüft nur gespeicherte Werte.
