# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit dem Ultimativen Bundle Plugin.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Admin: Bundle erstellen → Gruppen & Produkte zuweisen → Index wird aktualisiert
                                                              ↓
Storefront: Kunde besucht Produktseite → Bundle wird angezeigt → Kunde wählt Optionen
                                                                        ↓
Warenkorb: Bundle wird als Gruppe hinzugefügt → Rabatt wird berechnet → Bestellung
```

**Beispielablauf**:
1. Sie erstellen ein Bundle "Smartphone-Set" mit 10% Rabatt und zwei Gruppen
2. Ein Kunde besucht die Produktseite des Smartphones
3. Das Bundle wird mit allen Gruppenoptionen angezeigt
4. Der Kunde wählt Produkte aus jeder Gruppe und legt das Bundle in den Warenkorb
5. Im Warenkorb werden das Hauptprodukt und die Gruppenprodukte als zusammengehörig angezeigt, der Rabatt wird automatisch berechnet

---

## Häufige Workflows

### Anleitung: Erstes Bundle einrichten

**Ziel**: Ein einfaches Bundle mit manuell ausgewählten Produkten erstellen.

**Zeitaufwand**: ca. 5 Minuten

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Mindestens 3 Produkte sind im Shop angelegt

**Schritte**:

1. **Plugin-Einstellungen prüfen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen → Ultimatives Bundle Plugin → Konfigurieren`
   - Stellen Sie sicher, dass "Bundles aktivieren" aktiv ist

2. **Neues Bundle anlegen**
   - Navigieren zu: `Kataloge → Bundles`
   - Klicken Sie auf **Bundle anlegen**
   - Titel eingeben: z.B. "Starter-Paket"
   - Rabatt: z.B. 15
   - Typ: "Produkte"
   - Wählen Sie das Hauptprodukt aus, bei dem das Bundle erscheinen soll
   - Klicken Sie auf **Speichern**

3. **Erste Gruppe erstellen**
   - Im Bereich "Gruppen" auf **Hinzufügen** klicken
   - Titel eingeben: z.B. "Passendes Zubehör"
   - Auf **Bearbeiten** klicken
   - Im Modal: Typ "Produkte" wählen, gewünschte Produkte auswählen
   - Auf **Übernehmen** klicken

4. **Bundle aktivieren und testen**
   - Setzen Sie den Schalter "Aktiv" auf aktiv
   - Speichern Sie das Bundle
   - Öffnen Sie die Produktdetailseite des Hauptprodukts in der Storefront

**Ergebnis**: Auf der Produktseite sehen Sie das Bundle mit der Produktgruppe und dem berechneten Rabatt.

**Fehlerbehebung**: Falls das Bundle nicht erscheint, leeren Sie den Shopware-Cache unter `Einstellungen → System → Caches & Indizes`.

---

### Anleitung: Bundle mit optionalen Gruppen erstellen

**Ziel**: Ein flexibles Bundle erstellen, bei dem Kunden selbst entscheiden können, welche Gruppen sie hinzufügen möchten.

**Zeitaufwand**: ca. 10 Minuten

**Voraussetzungen**:
- Ein Bundle ist bereits erstellt
- Verschiedene Produktkategorien sind vorhanden

**Schritte**:

1. **Bundle öffnen**
   - Navigieren zu: `Kataloge → Bundles → [Ihr Bundle]`

2. **Pflichtgruppe erstellen**
   - Neue Gruppe hinzufügen (z.B. "Hauptzubehör")
   - Im Modal: "Optional" **deaktiviert** lassen
   - Produkte zuweisen und **Übernehmen** klicken

3. **Optionale Gruppe erstellen**
   - Weitere Gruppe hinzufügen (z.B. "Extras")
   - Im Modal: **Optional** aktivieren
   - Produkte zuweisen und **Übernehmen** klicken

4. **Speichern und testen**
   - Bundle speichern
   - In der Storefront: Die optionale Gruppe zeigt eine Checkbox zum Ein-/Ausschließen

**Ergebnis**: Kunden müssen ein Produkt aus der Pflichtgruppe wählen, können die optionale Gruppe aber per Checkbox abwählen.

---

### Anleitung: Dynamisches Bundle mit Produktstream

**Ziel**: Ein Bundle erstellen, dessen Produktauswahl sich automatisch anhand eines Produktstreams aktualisiert.

**Zeitaufwand**: ca. 10 Minuten

**Voraussetzungen**:
- Ein Produktstream ist unter `Kataloge → Produktstreams` angelegt

**Schritte**:

1. **Bundle anlegen**
   - Navigieren zu: `Kataloge → Bundles → Bundle anlegen`
   - Typ: "Produktstream"
   - Wählen Sie den gewünschten Produktstream aus
   - Rabatt und Titel konfigurieren

2. **Gruppen mit Produktstream erstellen**
   - Neue Gruppe hinzufügen
   - Im Modal: Typ "Produktstream" wählen
   - Den passenden Stream auswählen
   - Übernehmen und speichern

3. **Index aktualisieren**
   - Führen Sie in der Konsole aus: `php bin/console wl-bundles:index`
   - Oder warten Sie auf die automatische Indexierung

**Ergebnis**: Neue Produkte, die dem Produktstream entsprechen, werden automatisch als Bundle-Optionen verfügbar.

**Fehlerbehebung**: Wenn neue Produkte nicht erscheinen, aktualisieren Sie den Index manuell.

---

### Anleitung: Bundle mit Mengenauswahl einrichten

**Ziel**: Ein Bundle erstellen, bei dem Kunden die Menge pro Gruppenprodukt wählen können.

**Zeitaufwand**: ca. 5 Minuten

**Voraussetzungen**:
- Ein Bundle mit mindestens einer Gruppe ist erstellt

**Schritte**:

1. **Gruppe bearbeiten**
   - Öffnen Sie das Bundle und klicken Sie bei der gewünschten Gruppe auf **Bearbeiten**

2. **Mengenauswahl aktivieren**
   - Im Modal: **Mengenauswahl erlauben** aktivieren
   - **Maximale Menge** festlegen (z.B. 5)
   - Auf **Übernehmen** klicken

3. **Speichern und testen**
   - Bundle speichern
   - In der Storefront erscheint nun ein Mengenfeld neben dem Gruppenprodukt

**Ergebnis**: Kunden können die Stückzahl pro Gruppenprodukt zwischen 1 und der konfigurierten Maximalmenge wählen.

---

## Erweiterte Workflows

### Bundle ohne Rabatt (Werbe-Bundle)

**Komplexität**: Niedrig

**Wann zu verwenden**: Sie möchten Produkte als Set empfehlen, ohne einen Preisnachlass zu gewähren.

1. Erstellen Sie ein Bundle wie gewohnt
2. Aktivieren Sie die Option **Kein Rabatt** im Bundle
3. Alternativ setzen Sie den Rabatt auf 0%

Das Bundle wird auf der Produktseite angezeigt, zeigt aber keinen Rabatt oder durchgestrichenen Originalpreis an.

### Varianten-Bundle

**Komplexität**: Mittel

**Wann zu verwenden**: Sie möchten, dass ein Bundle, das einem Hauptprodukt zugewiesen ist, auch bei allen Varianten dieses Produkts erscheint.

1. Aktivieren Sie in den Plugin-Einstellungen: **Bundle auf Varianten vererben**
2. Erstellen Sie das Bundle und weisen Sie das **Hauptprodukt** (nicht die Variante) zu
3. Aktualisieren Sie den Index: `php bin/console wl-bundles:index`

Das Bundle erscheint nun auf der Produktseite des Hauptprodukts und aller seiner Varianten.

---

## Schnellreferenz

| Aufgabe                        | Wichtige Schritte                                    | Erforderliche Einstellungen      |
| ------------------------------ | ---------------------------------------------------- | -------------------------------- |
| Bundle erstellen               | Kataloge → Bundles → Anlegen                         | Bundles aktivieren               |
| Gruppe hinzufügen              | Bundle bearbeiten → Gruppen → Hinzufügen             | -                                |
| Optionale Gruppe               | Gruppe bearbeiten → Optional aktivieren              | -                                |
| Mengenauswahl                  | Gruppe bearbeiten → Mengenauswahl aktivieren          | -                                |
| Automatische Bundles           | -                                                    | Automatische Bundles aktivieren  |
| Index aktualisieren            | `php bin/console wl-bundles:index`                   | -                                |
| Rabattdarstellung ändern       | Plugin-Konfiguration → Rabatt-Darstellung            | -                                |

---

## Best Practices

1. **Bundles übersichtlich halten**: Verwenden Sie 2-4 Gruppen pro Bundle. Zu viele Gruppen können Kunden überfordern.
2. **Aussagekräftige Titel**: Verwenden Sie beschreibende Gruppentitel wie "Wählen Sie Ihre Hülle" statt "Gruppe 1".
3. **Regelmäßige Indexierung**: Planen Sie bei dynamischen Bundles (Produktstreams/Kategorien) regelmäßige Index-Updates ein.
4. **Testen auf verschiedenen Geräten**: Prüfen Sie die Darstellung sowohl auf Desktop als auch auf Mobilgeräten.
5. **Rabatte sinnvoll setzen**: Ein Rabatt von 5-15% ist in der Regel attraktiv genug, ohne die Marge zu stark zu belasten.

## Was Sie vermeiden sollten

- Zu viele aktive Bundles pro Produkt - dies kann die Seite unübersichtlich machen
- Bundles mit ausverkauften Produkten, wenn "Produkte ohne Bestand ausblenden" deaktiviert ist
- Vergessen, den Index nach Änderungen an Produktstreams oder Kategorien zu aktualisieren
