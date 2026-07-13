# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen des Plugins *Zusatzfelder in der Admin-Produktübersicht*.

---

## Inhaltsverzeichnis

- [Zusatzfelder als Spalten einblenden](#zusatzfelder-als-spalten-einblenden)
- [Spaltenbeschriftung und Sprache](#spaltenbeschriftung-und-sprache)
- [Spaltenbreite anpassen](#spaltenbreite-anpassen)
- [Neue Zusatzfelder](#neue-zusatzfelder)
- [Fehlerbehebung](#fehlerbehebung)

---

## Zusatzfelder als Spalten einblenden

### Was sie bewirkt

Das Plugin ergänzt die Produktübersicht um eine Spalte je Zusatzfeld. So sehen Sie Werte, die sonst nur in der Detailansicht eines Produkts sichtbar wären, direkt in der Liste – für alle Produkte auf einen Blick.

Wichtig: **Alle ergänzten Spalten sind zunächst ausgeblendet.** Ihre Produktübersicht sieht nach der Installation also unverändert aus. Erst wenn Sie eine Spalte einblenden, erscheint sie in der Tabelle.

### So verwenden Sie sie

1. Öffnen Sie **Kataloge → Produkte**.
2. Klicken Sie oben rechts an der Tabelle auf das Einstellungs-Symbol, um die Spalteneinstellungen zu öffnen.
3. In der Liste finden Sie neben den Standardspalten auch alle Zusatzfelder Ihrer Produkte, beschriftet als *Feldset: Feld*.
4. Aktivieren Sie die Zusatzfelder, die Sie sehen möchten.
5. Schließen Sie die Spalteneinstellungen. Die gewählten Spalten erscheinen in der Produktübersicht.

**Ort**: Kataloge → Produkte → Spalteneinstellungen (Einstellungs-Symbol oben rechts an der Tabelle)

### Tipps & Best Practices

- Blenden Sie nur die Felder ein, die Sie wirklich brauchen. Zu viele Spalten machen die Tabelle unübersichtlich und erzwingen horizontales Scrollen.
- Die Auswahl wird **pro Admin-Benutzer** gespeichert. Ihre Kollegen im Einkauf können sich eine andere Ansicht einrichten als die Redaktion – ohne sich gegenseitig zu stören.
- Nutzen Sie die Übersicht, um Lücken zu finden: Eine Spalte mit vielen leeren Zellen zeigt Produkte, bei denen ein wichtiges Zusatzfeld noch nicht gepflegt ist.

---

## Spaltenbeschriftung und Sprache

Jede Spalte wird nach dem Muster **Feldset: Feld** beschriftet, zum Beispiel `Logistik: Lieferzeit`. So bleiben gleichnamige Felder aus verschiedenen Feldsets unterscheidbar.

Die Beschriftung richtet sich nach der Sprache Ihrer Administration. Ist für die aktuelle Sprache keine Bezeichnung hinterlegt, verwendet das Plugin automatisch die Fallback-Sprache Ihres Shops.

Die Bezeichnungen pflegen Sie unter **Einstellungen → System → Zusatzfelder** – sowohl am Feldset als auch am einzelnen Zusatzfeld.

---

## Spaltenbreite anpassen

Alle ergänzten Spalten lassen sich in der Breite verändern – genau wie die Standardspalten von Shopware. Ziehen Sie dazu mit der Maus am rechten Rand des Spaltenkopfes.

---

## Neue Zusatzfelder

Legen Sie ein neues Zusatzfeld an, steht es sofort als Spalte zur Verfügung. Ein Plugin-Update ist dafür nicht nötig.

Damit ein Zusatzfeld in der Produktübersicht erscheint, muss sein **Feldset der Entität *Produkte* zugeordnet** sein. Das prüfen und ändern Sie unter **Einstellungen → System → Zusatzfelder** im Bereich *Zuordnungen*.

Laden Sie die Administration nach dem Anlegen eines neuen Feldes einmal neu, damit die Spalte in den Spalteneinstellungen auftaucht.

---

## Admin-Bereich Funktionen

### Erweiterte Produktübersicht

**Ort**: Kataloge → Produkte

**Zweck**: Zeigt Zusatzfeld-Werte direkt in der Produktliste, ohne dass ein Produkt geöffnet werden muss.

**Verwendung**: Siehe [Zusatzfelder als Spalten einblenden](#zusatzfelder-als-spalten-einblenden).

Das Plugin erweitert ausschließlich diese eine Ansicht. Es fügt keine eigenen Menüpunkte, Module oder Einstellungsseiten hinzu.

---

## Fehlerbehebung

### Nach der Installation sehe ich keine neuen Spalten

**Symptom**: Die Produktübersicht sieht unverändert aus.

**Ursache**: Das ist das erwartete Verhalten. Alle ergänzten Spalten sind bewusst ausgeblendet, damit Ihre gewohnte Ansicht nicht durcheinandergerät.

**Lösung**: Öffnen Sie die Spalteneinstellungen oben rechts an der Tabelle und aktivieren Sie die gewünschten Zusatzfelder. Falls dort keine Zusatzfelder auftauchen, laden Sie die Administration einmal neu (Browser-Reload).

---

### Ein bestimmtes Zusatzfeld wird nicht angeboten

**Symptom**: Ein Zusatzfeld, das Sie angelegt haben, erscheint nicht in den Spalteneinstellungen.

**Ursache**: Das Feldset des Zusatzfeldes ist nicht der Entität *Produkte* zugeordnet. Das Plugin bietet nur Felder an, die tatsächlich an Produkten hängen.

**Lösung**: Öffnen Sie **Einstellungen → System → Zusatzfelder**, wählen Sie das Feldset und prüfen Sie unter *Zuordnungen*, ob *Produkte* aktiviert ist. Laden Sie die Administration danach neu.

---

### Die Spaltenbeschriftung ist leer oder in der falschen Sprache

**Symptom**: Eine Spalte zeigt keinen oder einen fremdsprachigen Titel.

**Ursache**: Für die Sprache Ihrer Administration ist am Feldset oder am Zusatzfeld keine Bezeichnung hinterlegt. Das Plugin greift dann auf die Fallback-Sprache zurück.

**Lösung**: Ergänzen Sie die fehlende Bezeichnung unter **Einstellungen → System → Zusatzfelder** – jeweils am Feldset *und* am einzelnen Feld.

---

### Meine Spaltenauswahl ist bei einem Kollegen nicht sichtbar

**Symptom**: Sie haben Spalten eingeblendet, ein Kollege sieht sie nicht.

**Ursache**: Kein Fehler. Die Spaltenauswahl gehört zu den persönlichen Einstellungen der Produktliste und wird pro Admin-Benutzer gespeichert.

**Lösung**: Jeder Benutzer blendet die für ihn passenden Spalten selbst ein.

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen](../how_to.md)
