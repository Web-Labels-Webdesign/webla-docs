# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem WebLa Subscription Plugin.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Kunde bestellt Abo-Produkt → Abonnement wird erstellt → Automatische Verlängerung → Neue Bestellung
```

**Detaillierter Ablauf**:

1. **Bestellung**: Ein Kunde legt ein Produkt mit Abonnement-Option in den Warenkorb und schließt die Bestellung ab
2. **Erstellung**: Das Plugin erstellt automatisch ein Abonnement basierend auf dem gewählten Intervall und der Zahlungsart
3. **Erinnerung**: 3 Tage vor der nächsten Verlängerung erhält der Kunde eine Erinnerungs-E-Mail
4. **Verlängerung**: Zum Fälligkeitsdatum erstellt der Hintergrund-Task eine neue Bestellung und belastet die hinterlegte Zahlungsart
5. **Wiederholung**: Das nächste Verlängerungsdatum wird berechnet und der Zyklus beginnt von vorn

### Zahlungsfluss bei Mollie

```
Erstbestellung (sequenceType: first) → Mandat gespeichert → Verlängerung (sequenceType: recurring)
```

Bei der Erstbestellung wird ein Zahlungsmandat bei Mollie hinterlegt. Alle folgenden Verlängerungen nutzen dieses Mandat für automatische Abbuchungen.

### Zahlungsfluss bei Vorkasse

```
Verlängerung erstellt → Status: Warten auf Vorkasse → Zahlungseingang bestätigt → Abonnement aktiv
```

Bei Vorkasse pausiert das Abonnement nach der Verlängerung und wartet auf die Bestätigung des Zahlungseingangs.

---

## Häufige Workflows

### Anleitung: Erstes Abonnement-Produkt einrichten

**Ziel**: Ein bestehendes Produkt als Abonnement anbieten

**Zeitaufwand**: ca. 5 Minuten

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Grundkonfiguration ist abgeschlossen

**Schritte**:

1. **Plugin-Einstellungen prüfen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → WebLa Subscription Plugin → Konfigurieren`
   - Stellen Sie sicher, dass das Plugin aktiviert ist und die gewünschten Intervallgrenzen gesetzt sind

2. **Produkt bearbeiten**
   - Navigieren zu: `Kataloge → Produkte → [Ihr Produkt]`
   - Wechseln Sie zum Tab **Abonnement**

3. **Abonnement-Optionen hinzufügen**
   - Klicken Sie auf **Option hinzufügen**
   - Tragen Sie ein: Intervall (z. B. 2 Wochen), Bezeichnung (z. B. „Alle 2 Wochen"), Position (1)
   - Wiederholen Sie dies für weitere Intervalle (z. B. 4 Wochen, 6 Wochen)
   - Aktivieren Sie alle gewünschten Optionen

4. **Produkt speichern**
   - Klicken Sie auf **Speichern**

**Ergebnis**: Auf der Produktdetailseite in der Storefront erscheint die Auswahl zwischen Einzelkauf und Abonnement mit den konfigurierten Intervallen.

---

### Anleitung: Mollie-Zahlungen einrichten

**Ziel**: Kreditkarte und SEPA-Lastschrift für Abonnements aktivieren

**Zeitaufwand**: ca. 10 Minuten

**Voraussetzungen**:
- Mollie-Konto vorhanden
- Mollie-API-Schlüssel verfügbar

**Schritte**:

1. **API-Schlüssel eintragen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → WebLa Subscription Plugin → Konfigurieren`
   - Abschnitt **Mollie API**
   - Tragen Sie den **Test-API-Schlüssel** ein
   - Klicken Sie auf **API-Verbindung testen**

2. **Zahlungsarten zuordnen**
   - Abschnitt **Zahlungsarten**
   - Wählen Sie bei **Kreditkarten-Zahlungsart** die Mollie-Kreditkarten-Zahlungsart aus Ihrem Shop
   - Wählen Sie bei **SEPA-Zahlungsart** die Mollie-SEPA-Zahlungsart

3. **SEPA konfigurieren**
   - Aktivieren Sie **SEPA-Lastschrift aktivieren**
   - Setzen Sie die **Maximalen SEPA-Wiederholungsversuche** (empfohlen: 3)

4. **Speichern und testen**
   - Speichern Sie die Konfiguration
   - Führen Sie eine Testbestellung mit Abonnement durch
   - Prüfen Sie im Mollie-Dashboard, ob die Zahlung eingegangen ist

5. **Live-Betrieb starten**
   - Tragen Sie den **Live-API-Schlüssel** ein
   - Deaktivieren Sie den **Testmodus**
   - Speichern Sie erneut

**Ergebnis**: Kunden können bei Abonnement-Bestellungen Kreditkarte oder SEPA-Lastschrift wählen. Verlängerungen werden automatisch über Mollie abgewickelt.

---

### Anleitung: Pausiertes Abonnement bearbeiten

**Ziel**: Ein pausiertes Abonnement reaktivieren oder anpassen

**Zeitaufwand**: ca. 2 Minuten

**Schritte**:

1. **Abonnement finden**
   - Navigieren zu: `Bestellungen → Abonnements`
   - Filtern Sie nach Status „Pausiert"
   - Klicken Sie auf das gewünschte Abonnement

2. **Status prüfen**
   - Prüfen Sie den Grund der Pausierung (Notizen-Feld)
   - Prüfen Sie, ob alle Artikel verfügbar sind

3. **Änderungen vornehmen** (optional)
   - Passen Sie das Intervall an
   - Ändern Sie die Zahlungsart
   - Aktualisieren Sie Artikelmengen

4. **Reaktivieren**
   - Klicken Sie auf **Reaktivieren**
   - Das nächste Verlängerungsdatum wird automatisch berechnet

**Ergebnis**: Das Abonnement ist wieder aktiv und wird zum berechneten Datum verlängert.

---

### Anleitung: SEPA-Fehlschlag behandeln

**Ziel**: Ein Abonnement mit fehlgeschlagener SEPA-Zahlung reparieren

**Zeitaufwand**: ca. 5 Minuten

**Schritte**:

1. **Abonnement finden**
   - Navigieren zu: `Bestellungen → Abonnements`
   - Filtern Sie nach Status „SEPA fehlgeschlagen"

2. **Situation bewerten**
   - Öffnen Sie die Detailansicht
   - Prüfen Sie den **SEPA-Fehlerzähler** — wie oft wurde bereits versucht?
   - Prüfen Sie die Notizen für zusätzliche Informationen

3. **Zahlungsart ändern** (falls nötig)
   - Ändern Sie die Zahlungsart auf eine alternative Methode (z. B. Kreditkarte oder Rechnung)
   - Speichern Sie die Änderung

4. **Reaktivieren**
   - Klicken Sie auf **Reaktivieren**
   - Der SEPA-Fehlerzähler wird zurückgesetzt

5. **Kunden informieren**
   - Kontaktieren Sie den Kunden und bitten Sie um Aktualisierung der Zahlungsdaten

**Ergebnis**: Das Abonnement ist wieder aktiv mit einer funktionierenden Zahlungsart.

---

## Erweiterte Workflows

### Rabatt-Staffeln verwalten

**Komplexität**: Mittel

**Wann zu verwenden**: Wenn Sie treue Kunden mit zusätzlichen Rabatten belohnen möchten

Die Rabatt-Staffeln werden in der Datenbank-Tabelle `webla_subscription_discount` verwaltet. Jede Staffel definiert:

- **Mindest-Verlängerungsnummer**: Ab welcher Verlängerung der Rabatt greift
- **Rabatt-Prozentsatz**: Wie viel zusätzlicher Rabatt gewährt wird
- **Aktiv**: Ob die Staffel angewendet wird

Bei Erstinstallation werden Standard-Staffeln angelegt.

---

## Schnellreferenz

| Aufgabe                          | Wichtige Schritte                                                    | Erforderliche Einstellungen      |
| -------------------------------- | -------------------------------------------------------------------- | -------------------------------- |
| Produkt als Abo anbieten         | Produkt → Tab Abonnement → Optionen hinzufügen                      | Plugin aktiv                     |
| Mollie einrichten                | Konfiguration → API-Schlüssel → Zahlungsarten zuordnen               | Mollie-Konto                     |
| Verlängerung erzwingen           | Abonnement → Detailansicht → Verlängerung erzwingen                  | —                                |
| Abonnement pausieren             | Abonnement → Detailansicht → Pausieren                               | —                                |
| Intervall ändern (Admin)         | Abonnement → Detailansicht → Intervall-Feld → Speichern             | —                                |
| Intervall ändern (Kunde)         | Mein Konto → Abonnements → Intervall ändern                         | Intervalländerung aktiviert      |
| SEPA-Fehler beheben              | Status-Filter „SEPA fehlgeschlagen" → Zahlungsart ändern → Reaktivieren | —                            |

---

## Best Practices

1. **Testmodus zuerst**: Richten Sie immer zuerst alles im Mollie-Testmodus ein und führen Sie Testbestellungen durch, bevor Sie live gehen
2. **Erinnerungen aktiviert lassen**: Die automatischen Erinnerungs-E-Mails reduzieren die Kündigungsrate, da Kunden vor der Abbuchung informiert werden
3. **Moderate Rabatte**: Beginnen Sie mit einem moderaten Basisrabatt (5%) und nutzen Sie Treue-Staffeln für Langzeitkunden
4. **Regelmäßige Prüfung**: Überprüfen Sie regelmäßig das Dashboard auf fehlgeschlagene Zahlungen und pausierte Abonnements
5. **SEPA-Retries**: Halten Sie die maximale Anzahl an SEPA-Wiederholungsversuchen bei 3, um Kunden nicht übermäßig zu belasten

## Was Sie vermeiden sollten

- ❌ Direkt in den Live-Modus wechseln, ohne Testbestellungen durchzuführen
- ❌ Alle Intervalloptionen gleichzeitig aktivieren — bieten Sie 2–3 sinnvolle Intervalle an
- ❌ Hohe Rabatte ohne Treue-Staffeln — das mindert den Wert für Neukunden
- ❌ SEPA-Wiederholungsversuche auf mehr als 5 setzen — dies kann Kundenvertrauen beschädigen
- ❌ Abonnements manuell in der Datenbank ändern — nutzen Sie immer die Admin-Oberfläche
