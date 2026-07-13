# Anleitungen

Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Plugin *Zusatzfelder in der Admin-Produktübersicht*.

---

## Wie das Plugin funktioniert

```
Zusatzfeld am Produkt gepflegt → Plugin bietet es als Spalte an → Sie blenden die Spalte ein → Wert steht in der Produktübersicht
```

**Beispielablauf**:

1. Sie legen unter **Einstellungen → System → Zusatzfelder** ein Feldset *Logistik* mit dem Feld *Lieferzeit* an und ordnen es der Entität *Produkte* zu.
2. Sie pflegen die Lieferzeit an Ihren Produkten.
3. Das Plugin bietet in den Spalteneinstellungen der Produktliste die Spalte *Logistik: Lieferzeit* an.
4. Sie blenden die Spalte ein und sehen die Lieferzeit für alle Produkte auf einen Blick.

---

## Häufige Workflows

### Anleitung: Ein Zusatzfeld in der Produktübersicht anzeigen

**Ziel**: Einen bereits gepflegten Zusatzfeld-Wert in der Produktliste sichtbar machen.

**Zeitaufwand**: ca. 1 Minute

**Voraussetzungen**:
- Das Plugin ist installiert und aktiviert
- Das Zusatzfeld existiert und sein Feldset ist der Entität *Produkte* zugeordnet

**Schritte**:

1. **Produktübersicht öffnen**
   - Navigieren zu: `Kataloge → Produkte`

2. **Spalteneinstellungen öffnen**
   - Klicken Sie oben rechts an der Tabelle auf das Einstellungs-Symbol.

3. **Zusatzfeld aktivieren**
   - Suchen Sie den Eintrag im Format *Feldset: Feld*, z. B. *Logistik: Lieferzeit*.
   - Aktivieren Sie den Schalter.

4. **Spaltenbreite anpassen** (optional)
   - Ziehen Sie am rechten Rand des Spaltenkopfes, bis der Inhalt gut lesbar ist.

**Ergebnis**: Die Spalte erscheint in der Produktübersicht und zeigt den Wert des Zusatzfeldes für jedes Produkt.

**Fehlerbehebung**: Taucht das Feld nicht in der Liste auf, laden Sie die Administration neu. Bleibt es aus, prüfen Sie die Zuordnung des Feldsets zur Entität *Produkte*.

---

### Anleitung: Ein neues Zusatzfeld anlegen und sofort anzeigen

**Ziel**: Ein neues Feld einführen und direkt in der Übersicht nutzen.

**Zeitaufwand**: ca. 5 Minuten

**Schritte**:

1. **Feldset anlegen oder wählen**
   - Navigieren zu: `Einstellungen → System → Zusatzfelder`
   - Legen Sie ein neues Feldset an oder öffnen Sie ein bestehendes.

2. **Der Entität *Produkte* zuordnen**
   - Aktivieren Sie im Bereich *Zuordnungen* den Eintrag **Produkte**.
   - Ohne diese Zuordnung erscheint das Feld nicht in der Produktübersicht.

3. **Zusatzfeld hinzufügen**
   - Legen Sie das gewünschte Feld an und vergeben Sie eine **technische Bezeichnung** sowie eine **Beschriftung** in allen von Ihnen genutzten Admin-Sprachen.

4. **Administration neu laden**
   - Führen Sie einen Browser-Reload durch, damit die neue Spalte angeboten wird.

5. **Spalte einblenden**
   - Wie in der Anleitung oben unter `Kataloge → Produkte`.

**Ergebnis**: Das neue Feld steht als Spalte bereit – ohne Plugin-Update.

---

### Anleitung: Unvollständig gepflegte Produkte finden

**Ziel**: Produkte identifizieren, bei denen ein wichtiges Zusatzfeld noch leer ist.

**Zeitaufwand**: ca. 2 Minuten

**Schritte**:

1. Öffnen Sie `Kataloge → Produkte`.
2. Blenden Sie die Spalte des betreffenden Zusatzfeldes ein.
3. Gehen Sie die Liste durch: Leere Zellen zeigen Produkte ohne gepflegten Wert.
4. Öffnen Sie die betroffenen Produkte und ergänzen Sie den Wert.

**Ergebnis**: Sie sehen ohne Umwege, wo Daten fehlen, statt jedes Produkt einzeln öffnen zu müssen.

---

### Anleitung: Team-spezifische Ansichten einrichten

**Ziel**: Einkauf, Redaktion und Support arbeiten mit jeweils passenden Spalten.

**Hintergrund**: Die Spaltenauswahl wird **pro Admin-Benutzer** gespeichert. Es gibt keine gemeinsame, globale Ansicht.

**Schritte**:

1. Jeder Mitarbeiter meldet sich mit seinem eigenen Admin-Benutzer an.
2. Jeder blendet unter `Kataloge → Produkte` die für seine Aufgabe relevanten Zusatzfelder ein – etwa Lieferantennummer für den Einkauf, Pflegestatus für die Redaktion.

**Ergebnis**: Jedes Team hat seine eigene Sicht auf denselben Katalog, ohne die Ansicht der anderen zu verändern.

---

## Schnellreferenz

| Aufgabe                                  | Wichtige Schritte                                                            |
| ---------------------------------------- | --------------------------------------------------------------------------- |
| Zusatzfeld anzeigen                      | Kataloge → Produkte → Spalteneinstellungen → Feld aktivieren                 |
| Zusatzfeld wird nicht angeboten          | Einstellungen → System → Zusatzfelder → Zuordnung *Produkte* prüfen → Reload |
| Spaltenbeschriftung korrigieren          | Einstellungen → System → Zusatzfelder → Bezeichnung an Feldset und Feld      |
| Spalte verbreitern                       | Spaltenrand in der Produktliste ziehen                                       |

---

## Best Practices

1. **Sprechende Bezeichnungen vergeben**: Die Spalte heißt *Feldset: Feld*. Kurze, klare Namen halten die Tabelle lesbar.
2. **Bezeichnungen in allen Admin-Sprachen pflegen**: Sonst greift der Fallback und die Spalte trägt womöglich einen fremdsprachigen Titel.
3. **Nur wenige Spalten gleichzeitig einblenden**: Die Produktliste bleibt so übersichtlich und ohne horizontales Scrollen nutzbar.

## Was Sie vermeiden sollten

- ❌ **Alle Zusatzfelder auf einmal einblenden** – die Tabelle wird unlesbar und Sie müssen weit horizontal scrollen.
- ❌ **Eine Konfigurationsseite des Plugins suchen** – es gibt keine. Gesteuert wird über die Zusatzfelder und die Spalteneinstellungen der Produktliste.
- ❌ **Erwarten, dass Ihre Spaltenauswahl für alle gilt** – sie wird pro Benutzer gespeichert.
