# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit der Währungsanzeige.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
EZB veröffentlicht Kurse  →  Geplante Aufgabe holt sie ab  →  Kursliste im Admin
                                                                      ↓
Besucher wählt Währung  →  Auswahl im Cookie gespeichert  →  Umgerechneter Preis im Shop
```

**Beispielablauf**:

1. Die Europäische Zentralbank veröffentlicht am Nachmittag die Referenzkurse des Tages.
2. Die geplante Aufgabe des Plugins ruft diese Kurse ab und aktualisiert die Kursliste.
3. Ein Besucher wählt im Shop „US Dollar" aus.
4. Die Auswahl wird in einem Cookie festgehalten und gilt für alle weiteren Seiten.
5. Unter jedem Preis erscheint der umgerechnete Betrag als „ungefährer Preis".

Die Zahlung selbst erfolgt weiterhin in Ihrer Shop-Standardwährung.

---

## Häufige Workflows

### Anleitung: Plugin erstmalig einrichten

**Ziel**: Das Plugin nach der Installation betriebsbereit machen.

**Zeitaufwand**: Etwa 10 Minuten, zuzüglich Wartezeit auf den ersten Kursabruf.

**Voraussetzungen**:

- Shop-Standardwährung ist Euro
- Die geplanten Aufgaben von Shopware laufen auf dem Server

**Schritte**:

1. **Plugin aktivieren**
   - Navigieren zu: **Erweiterungen → Meine Erweiterungen**
   - Schalter bei **Währungsanzeige** auf aktiv setzen

2. **Zielwährung festlegen**
   - Navigieren zu: **Erweiterungen → Meine Erweiterungen → Währungsanzeige → Konfigurieren**
   - Oben den gewünschten Verkaufskanal auswählen
   - Bei **Default Target Currency** den dreistelligen Code Ihres Hauptmarkts eintragen, etwa `USD`
   - **Default Source Currency** unverändert auf `EUR` lassen
   - Speichern

3. **Ersten Kursabruf abwarten oder anstoßen**
   - Die Aufgabe läuft spätestens nach 30 Minuten von selbst
   - Alternativ manuell anstoßen — siehe den folgenden Workflow

4. **Ergebnis prüfen**
   - Navigieren zu: **Einstellungen → Erweiterungen → Storefront Währungen**
   - Die Liste sollte nun Währungspaare enthalten

**Ergebnis**: Im Shop erscheint im Kopfbereich die Währungsauswahl, und unter den Preisen steht der umgerechnete Betrag.

**Fehlerbehebung**: Bleibt die Liste leer, prüfen Sie, ob die geplanten Aufgaben laufen und ob Ihr Server ausgehende Verbindungen zur EZB aufbauen darf.

---

### Anleitung: Kursaktualisierung manuell anstoßen

**Ziel**: Kurse sofort abrufen, ohne auf die geplante Aufgabe zu warten.

**Zeitaufwand**: Unter einer Minute.

**Voraussetzungen**: Zugang zur Kommandozeile des Servers.

**Schritte**:

1. **Auf dem Server in das Shopware-Verzeichnis wechseln**

2. **Befehl ausführen**

   ```bash
   bin/console webla:update-storefront-currencies
   ```

3. **Ausgabe prüfen**
   - Der Befehl gibt eine Tabelle aller Währungspaare mit Kurs und Aktualisierungsdatum aus

**Ergebnis**: Die Kursliste ist auf dem neuesten Stand, die Währungsauswahl erscheint im Shop.

**Fehlerbehebung**: Schlägt der Abruf fehl, meldet der Befehl den Fehler im Klartext und schreibt ihn zusätzlich ins Shop-Log. Häufigste Ursache ist eine Firewall, die den Zugriff auf die EZB-Adresse blockiert.

> Haben Sie keinen Kommandozeilenzugang, wenden Sie sich an Ihren Hoster oder warten Sie den nächsten automatischen Durchlauf ab.

---

### Anleitung: Eigenen Umrechnungskurs hinterlegen

**Ziel**: Für ein Währungspaar dauerhaft einen abweichenden Kurs verwenden.

**Zeitaufwand**: Etwa 2 Minuten.

**Voraussetzungen**: Die Kursliste ist bereits gefüllt.

**Schritte**:

1. **Kursliste öffnen**
   - Navigieren zu: **Einstellungen → Erweiterungen → Storefront Währungen**

2. **Spalte einblenden**
   - Über das Zahnrad-Symbol oben rechts die Spalte **Eigener Umrechnungskurs** aktivieren

3. **Wert eintragen**
   - In der Zeile des gewünschten Währungspaars den abweichenden Kurs eintragen und speichern

**Ergebnis**: Für dieses Währungspaar gilt Ihr eigener Kurs. Die automatische Aktualisierung überschreibt ihn nicht.

**Fehlerbehebung**: Soll wieder der offizielle Kurs gelten, leeren Sie das Feld.

---

### Anleitung: Darstellung der Währungsauswahl anpassen

**Ziel**: Aussehen des Auswahlmenüs an Ihr Theme angleichen.

**Zeitaufwand**: Etwa 5 Minuten.

**Schritte**:

1. **Konfiguration öffnen**
   - Navigieren zu: **Erweiterungen → Meine Erweiterungen → Währungsanzeige → Konfigurieren**

2. **Darstellung wählen**
   - **Zeige Flaggen im Dropdown Menü**: Länderflaggen ein- oder ausblenden
   - **Anzeige des Währungsnamens anstelle des Symbols**: aktiv zeigt den Code (`USD`), inaktiv das Symbol (`$`)

3. **Im Shop prüfen**
   - Shop in einem neuen Tab öffnen und das Auswahlmenü im Kopfbereich ansehen

**Ergebnis**: Das Auswahlmenü erscheint in der gewünschten Darstellung.

---

## Schnellreferenz

| Aufgabe                       | Wichtige Schritte                                                     | Erforderliche Einstellungen |
| ----------------------------- | --------------------------------------------------------------------- | --------------------------- |
| Einrichten                    | Aktivieren → Zielwährung setzen → ersten Abruf abwarten                | Default Target Currency     |
| Kurse sofort holen            | `bin/console webla:update-storefront-currencies`                      | –                           |
| Abweichenden Kurs setzen      | Storefront Währungen → Spalte einblenden → Wert eintragen             | Eigener Umrechnungskurs     |
| Darstellung ändern            | Konfiguration → Flaggen und Beschriftung wählen                        | Zeige Flaggen, Währungsname |
| Kurse prüfen                  | Einstellungen → Erweiterungen → Storefront Währungen                   | –                           |

---

## Best Practices

1. **Zielwährung zum Hauptmarkt passend wählen**: Besucher sollen ihre Währung möglichst gar nicht erst umstellen müssen.
2. **Geplante Aufgaben überwachen**: Laufen sie nicht, veralten die Kurse unbemerkt. Ein Blick auf **Aktualisiert am** in der Kursliste genügt.
3. **Währungscode statt Symbol bei mehreren Dollar-Währungen**: `$` allein ist mehrdeutig.
4. **Nach dem Einrichten selbst testen**: Einmal durch Produktseite, Warenkorb und Checkout klicken und prüfen, ob der umgerechnete Betrag überall erscheint.

## Was Sie vermeiden sollten

- ❌ **Den Wert unter Umrechnungskurs manuell ändern** – er wird beim nächsten Durchlauf überschrieben. Nutzen Sie stattdessen den eigenen Umrechnungskurs.
- ❌ **Default Source Currency auf etwas anderes als `EUR` setzen** – die Preisanzeige entfällt dann vollständig.
- ❌ **Den umgerechneten Betrag als verbindlichen Preis kommunizieren** – maßgeblich ist der Betrag in der Shop-Standardwährung. Deshalb die Kennzeichnung „ungefährer Preis".
- ❌ **Das Plugin ohne laufende geplante Aufgaben betreiben** – ohne sie werden nie Kurse geladen.
