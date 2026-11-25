**Änderungsprotokoll — Plytix Connector**

Alle wichtigen Änderungen am Plytix Connector für Endbenutzer.

---

# 1.0.0

_Veröffentlicht am 2026-11-25_

**Neue Funktionen**

- **Plytix-Channels**: Mehrere NDJSON-Channels aus Plytix lassen sich anbinden, jeder mit eigener Feed-URL, eigenen Verkaufskanälen, eigenem Steuersatz, eigener Währung und Feldzuordnung.
- **Produkte und Varianten**: Import von Einzelprodukten, Hauptprodukten und Varianten. Dreistufige Plytix-Hierarchien werden auf die zwei Ebenen von Shopware abgebildet, gleiche Werte erben Varianten vom Hauptprodukt.
- **Feldzuordnung**: Frei einstellbare Zuordnung der Plytix-Ausgabe-Bezeichnungen zu Shopware-Feldern, Variantenoptionen, Eigenschaften und Übersetzungen. Die Felder bieten die Bezeichnungen der letzten Synchronisation zur Auswahl an.
- **Zugehörige Daten**: Kategorien, Hersteller, Eigenschaften, Bilder und Cross-Selling werden angelegt und zugeordnet. Bilder werden im Hintergrund geladen, jede URL nur einmal.
- **Synchronisation**: Start per Klick, nach Zeitplan, per Plytix-Webhook oder über den Konsolenbefehl `plytix:channel:sync`. Unveränderte Feeds und Produkte werden übersprungen.
- **Webhook während eines Laufs**: Ein Webhook-Aufruf, der auf einen laufenden Lauf trifft, wird gemerkt. Nach dem Ende des Laufs startet automatisch ein weiterer.
- **Entfernungen**: Optional werden Produkte deaktiviert, die nicht mehr im Feed stehen, geschützt durch eine einstellbare Sicherheitsgrenze.
- **Protokoll**: Jeder Lauf zeigt Status, Fortschritt und Zähler. Probleme lassen sich nach Schweregrad, Code und SKU filtern. Läufe werden nach 180 Tagen automatisch gelöscht.
- **Zuordnungsseite**: Variantenoptionen und Eigenschaften ordnen Sie auf einer eigenen Seite zu. Sie listet alle Bezeichnungen Ihres Feeds mit Beispielwerten, Anzahl der Datensätze und einem Vorschlag, mit Suche, Filter und Sammel-Ignorieren. **Speichern und synchronisieren** startet eine Synchronisation, die die Zuordnung auf alle Produkte anwendet; läuft gerade eine, folgt die neue direkt danach. **Speichern** allein wendet sie mit der nächsten Synchronisation an.
- **Bestehende Eigenschaftsgruppen**: Variantenoptionen und Eigenschaften lassen sich einer bestehenden Eigenschaftsgruppe Ihres Shops zuordnen, egal wie sie heißt.
- **Ignorierte Bezeichnungen**: Nicht benötigte Bezeichnungen lassen sich ignorieren und erscheinen dann nicht mehr als nicht zugeordnet.
- **Produktfelder**: Feed-Bezeichnungen lassen sich weiteren Produktfeldern von Shopware zuordnen: Abmessungen und Gewicht (mit der Einheit des Feeds), Hersteller-Produktnummer, Kaufeinstellungen und Einheiten, Erscheinungsdatum, Versandkostenfrei, Hervorheben, Abverkauf, Meta-Titel und -Beschreibung, Schlüsselwörter, Such-Schlagwörter und Tags.
- **Zusatzfelder**: Feed-Bezeichnungen lassen sich bestehenden Zusatzfeldern von Produkten zuordnen.
- **Mehrere Verkaufskanäle**: Ein Channel kann mehrere Verkaufskanäle haben, jeden mit der Einstiegskategorie für seine Kategorien. Entfernen Sie einen, verschwinden die Produkte daraus.
- **Steuersatz pro Produkt**: Der Steuersatz lässt sich auf der Zuordnungsseite einer Feed-Bezeichnung zuordnen, mit einem Shopware-Steuersatz für jeden Feed-Wert.
- **Meldungen in Ihrer Sprache**: Probleme und Fehler der Läufe erscheinen in der Sprache der Administration. Der Code des Problems bleibt englisch.
- **Ungespeicherte Änderungen**: Channel- und Zuordnungsseite fragen nach, bevor Sie sie mit ungespeicherten Änderungen verlassen oder eine Synchronisation starten.
- **Fehlende Variantenoptionen**: Zuordnungsseite und jeder Lauf warnen, wenn der Feed Varianten hat, aber keine Variantenoption zugeordnet ist.
- **Kompatibilität**: Eine Version für Shopware 6.5.7 bis 6.7.
