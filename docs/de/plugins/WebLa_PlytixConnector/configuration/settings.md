# Channel-Einstellungen

Das Plugin hat keine Einstellungen unter **Erweiterungen → Meine Erweiterungen**. Alles wird pro Channel eingestellt.

**Navigation**: Kataloge → Plytix Connector → Channel anlegen (oder einen bestehenden Channel öffnen)

Ein Channel in Shopware entspricht genau einem Channel in Plytix. Die Detailseite hat diese Karten:

- **Channel**: Feed, Steuersatz, Währung, Zeitplan
- **Verkaufskanäle**: wo die Produkte erscheinen, mit je einer Einstiegskategorie
- **Import-Einstellungen**: Preise, Lagerbestand, Kategorien, Status, Übernahme, Entfernungen
- **Feldzuordnung**: welches Plytix-Attribut in welches Shopware-Feld geht, siehe [Feldzuordnung und Varianten](../usage/mapping.md)
- **Webhook**: URL zum Eintragen in Plytix
- **Läufe**: die bisherigen Synchronisationen dieses Channels (erst nach dem ersten Speichern)

> Ändern Sie Verkaufskanäle, Steuersatz, Währung, Import-Einstellungen oder Feldzuordnung und speichern, schreibt der nächste Lauf alle Produkte dieses Channels neu. Das ist gewollt, damit die neue Konfiguration überall ankommt, dauert aber bei großen Katalogen entsprechend länger. Änderungen an Name, Feed-URL, Abrufintervall, Aktiv oder Webhook-Token sorgen nur dafür, dass der nächste Lauf den Feed nicht als unverändert überspringt. Die Produkte selbst bleiben dann unverändert.

---

## Karte „Channel“

### Name

| Eigenschaft      | Wert |
| ---------------- | ---- |
| **Typ**          | Text |
| **Standard**     | leer |
| **Erforderlich** | Ja   |

Interner Name des Channels. Er erscheint in der Channel-Liste und bei den Läufen. Über die Kommandozeile können Sie einen Channel auch mit diesem Namen ansprechen, deshalb sollte er eindeutig sein.

### Abrufintervall (Minuten)

| Eigenschaft      | Wert                              |
| ---------------- | --------------------------------- |
| **Typ**          | Zahl, mindestens 1                |
| **Standard**     | leer (kein zeitgesteuerter Abruf) |
| **Erforderlich** | Nein                              |

Wie oft das Plugin den Feed von sich aus abruft. Leer bedeutet: kein Zeitplan, nur manuelle Läufe und Webhook.

Die Prüfung läuft alle fünf Minuten. Bei jeder Prüfung startet ein neuer Lauf, wenn der letzte Lauf dieses Channels mindestens so viele Minuten zurückliegt, wie hier eingetragen ist. Dabei zählt jeder Lauf, egal ob manuell, per Webhook oder per Zeitplan gestartet. Praktisch wird das Intervall also auf die nächste Fünf-Minuten-Prüfung aufgerundet: Werte unter 5 wirken wie 5, und 7 Minuten werden zu etwa 10.

Zeitgesteuert abgerufen werden nur aktive Channels. Ein Abruf kostet wenig, wenn sich der Feed nicht geändert hat, denn dann wird der Lauf sofort als „Übersprungen, Feed unverändert“ beendet.

**Anwendungsbeispiel**: Plytix verarbeitet den Channel einmal pro Stunde. Ein Abrufintervall von 60 Minuten reicht dann. Wenn Sie zusätzlich den Webhook nutzen, dient der Zeitplan als Absicherung, falls ein Webhook-Aufruf Ihren Shop nicht erreicht.

### Feed-URL

| Eigenschaft      | Wert                       |
| ---------------- | -------------------------- |
| **Typ**          | Text (URL)                 |
| **Standard**     | leer                       |
| **Erforderlich** | Ja                         |

Die URL des NDJSON-Feeds aus Plytix, etwa `https://pim.plytix.com/channels/…/feed`. Sie muss mit `http://` oder `https://` beginnen.

Plytix schützt diese URL nicht. Wer sie kennt, kann Ihren kompletten Produktfeed herunterladen. Behandeln Sie die URL deshalb wie ein Passwort und geben Sie sie nicht in Tickets, Chats oder Screenshots weiter.

### Steuersatz

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | leer    |
| **Erforderlich** | Ja, für jeden Lauf |

Shopware braucht für jedes Produkt einen Steuersatz, deshalb ist dieser hier Pflicht. Alle Produkte dieses Channels bekommen ihn, sofern Sie den Steuersatz nicht auf der [Zuordnungsseite](../usage/mapping.md#steuersatz) zuordnen. Das Formular lässt sich zwar ohne Steuersatz speichern, jeder Lauf schlägt dann aber mit `CHANNEL_CONFIGURATION_INVALID` fehl.

Ist der Steuersatz zugeordnet, bekommen Produkte ohne Steuerwert oder mit einem Wert, dem kein Steuersatz zugeordnet ist, den hier gewählten.

### Währung

| Eigenschaft      | Wert                            |
| ---------------- | ------------------------------- |
| **Typ**          | Auswahl                         |
| **Standard**     | leer (Standardwährung des Shops) |
| **Erforderlich** | Nein                            |

Die Währung, in der die Preise im Feed stehen. Ist es nicht die Standardwährung des Shops, schreibt das Plugin zusätzlich einen Preis in der Standardwährung, umgerechnet mit dem Währungsfaktor aus Shopware. Shopware verlangt diesen Preis.

### Aktiv

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | aus      |
| **Erforderlich** | Nein     |

Ein neuer Channel ist zunächst inaktiv. Inaktive Channels werden nicht zeitgesteuert abgerufen, und ihr Webhook nimmt keine Aufrufe an. **Jetzt synchronisieren** und die Kommandozeile funktionieren auch bei inaktiven Channels. So können Sie einen Channel erst von Hand testen und danach aktiv schalten.

---

## Karte „Verkaufskanäle“

Eine Liste von Verkaufskanälen. Klicken Sie für jeden Shop, in dem die Produkte erscheinen sollen, auf **Verkaufskanal hinzufügen**, und wählen Sie in jeder Zeile beide Felder:

| Eigenschaft      | Wert                                              |
| ---------------- | ------------------------------------------------- |
| **Typ**          | Liste aus **Verkaufskanal** und **Einstiegskategorie** |
| **Standard**     | leer                                              |
| **Erforderlich** | Nein, aber empfohlen; jede Zeile braucht beide Felder |

- **Verkaufskanal**: Importierte Hauptprodukte werden darin sichtbar. Jeder Verkaufskanal darf nur einmal vorkommen.
- **Einstiegskategorie**: Unter dieser Kategorie legt das Plugin die Kategorien aus dem Feed an, meist ist das der Navigations-Einstieg des Verkaufskanals. Vorhandene Kategorien gleichen Namens an derselben Stelle werden wiederverwendet. Das Plugin benennt Kategorien nie um, verschiebt oder löscht sie nicht. Neu angelegte Kategorien sind aktiv. Mehrere Zeilen dürfen dieselbe Einstiegskategorie haben; bei verschiedenen entsteht der Kategoriebaum unter jeder, und die Produkte werden allen zugewiesen.

**Zeile entfernen**: Die nächste Synchronisation nimmt die Produkte aus diesem Verkaufskanal und aus den importierten Kategorien unter seiner Einstiegskategorie, sofern keine andere Zeile dieselbe verwendet. Entfernt werden nur Sichtbarkeiten, die das Plugin angelegt hat. Selbst gesetzte Sichtbarkeiten bleiben, ebenso die von Produkten, die auch ein anderer Plytix-Channel importiert. Produkte, die nicht mehr im Feed stehen, bleiben unberührt.

Ohne Verkaufskanal werden keine Kategorien importiert (Problemcode `CATEGORY_PARENT_MISSING`). Wird ein eingetragener Verkaufskanal oder eine Einstiegskategorie später gelöscht, schlagen die Läufe mit `CHANNEL_CONFIGURATION_INVALID` fehl, bis Sie die Zeile ändern.

---

## Karte „Import-Einstellungen“

### Basissprache

| Eigenschaft      | Wert                              |
| ---------------- | --------------------------------- |
| **Typ**          | Auswahl                           |
| **Standard**     | leer (Standardsprache des Systems) |
| **Erforderlich** | Nein                              |

In welcher Sprache die Texte im Feed stehen, die keiner Übersetzung zugeordnet sind, also Name, Beschreibung und Kurzbeschreibung aus der Feldzuordnung.

Die Standardsprache des Systems bekommt immer Texte, weil Shopware das verlangt. Ist sie nicht die Basissprache und auch keiner Übersetzung zugeordnet, erhält sie die Texte der Basissprache.

**Anwendungsbeispiel**: Ihr Shop läuft mit Englisch als Standardsprache, Ihre Plytix-Texte sind aber deutsch. Wählen Sie dann Deutsch als Basissprache.

### Kategorie-Wurzel im Feed

| Eigenschaft      | Wert               |
| ---------------- | ------------------ |
| **Typ**          | Text               |
| **Standard**     | `Website Taxonomy` |
| **Erforderlich** | Nein               |

Plytix liefert Kategorien als Pfade wie `Website Taxonomy>Clothing>T-Shirts`. Häufig stehen im selben Attribut mehrere Bäume, zum Beispiel einer für die Website und einer für Google Shopping. Importiert werden nur Pfade unterhalb der hier eingetragenen Wurzel, die Wurzel selbst wird dabei weggelassen. Aus dem Beispiel entstehen also die Kategorien `Clothing` und darunter `T-Shirts`.

Lassen Sie das Feld leer, importiert das Plugin jeden Pfad vollständig, die Wurzel eingeschlossen. Aus dem Beispiel entstehen dann `Website Taxonomy`, darunter `Clothing` und darunter `T-Shirts`. Auch alle anderen Bäume im Attribut, etwa der für Google Shopping, landen dann im Shop.

### Lagerbestand für neue Produkte

| Eigenschaft      | Wert                |
| ---------------- | ------------------- |
| **Typ**          | Zahl, mindestens 0  |
| **Standard**     | 0                   |
| **Erforderlich** | Nein                |

Der Plytix-Feed enthält keinen Lagerbestand. Neue Produkte bekommen diesen Wert. Danach fasst das Plugin den Bestand nie wieder an, auch nicht bei späteren Läufen. Den Bestand pflegen Sie in Shopware oder über Ihre Warenwirtschaft.

### Name des Cross-Sellings

| Eigenschaft      | Wert                   |
| ---------------- | ---------------------- |
| **Typ**          | Text                   |
| **Standard**     | `Recommended products` |
| **Erforderlich** | Nein (leer = Standard) |

Für jedes Produkt mit Cross-Selling-Angaben im Feed legt das Plugin ein Cross-Selling vom Typ Produktliste an. So heißt der Reiter auf der Produktseite. Der Name wird in der Standardsprache des Systems gespeichert. Eine Änderung greift beim nächsten Lauf für alle Produkte.

**Anwendungsbeispiel**: In einem deutschsprachigen Shop tragen Sie „Passend dazu“ ein.

### Statuswerte für aktive Produkte

| Eigenschaft      | Wert                       |
| ---------------- | -------------------------- |
| **Typ**          | Liste von Texten           |
| **Standard**     | `Completed`                |
| **Erforderlich** | Nein                       |

Produkte, deren Status-Attribut einen dieser Werte hat, werden in Shopware aktiv, alle anderen inaktiv. Groß- und Kleinschreibung zählen, die Werte müssen exakt so eingetragen sein wie in Plytix. Produkte ganz ohne Status sind aktiv. Varianten ohne eigenen Status übernehmen den Status ihres Hauptprodukts.

**Anwendungsbeispiel**: Ihre Plytix-Statuswerte heißen „Freigegeben“ und „Entwurf“. Tragen Sie dann `Freigegeben` ein, sonst wird jedes Produkt inaktiv.

### Preise sind Bruttopreise

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | an       |
| **Erforderlich** | Nein     |

An: Die Preise im Feed enthalten die Steuer. Aus: Es sind Nettopreise, das Plugin rechnet den Bruttopreis mit dem Steuersatz des Produkts aus.

### Produkte anderer Channels übernehmen

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | aus      |
| **Erforderlich** | Nein     |

Ein Produkt, das bereits ein anderer Plytix-Channel importiert hat, wird standardmäßig übersprungen (Problemcode `PRODUCT_OWNED_BY_OTHER_CHANNEL`). So überschreiben sich zwei Channels nicht gegenseitig. Ist die Option an, schreibt auch dieser Channel das Produkt.

**Anwendungsbeispiel**: Sie ersetzen einen alten Plytix-Channel durch einen neuen und wollen die vorhandenen Produkte weiterverwenden.

### Feed enthält alle Produkte

| Eigenschaft      | Wert     |
| ---------------- | -------- |
| **Typ**          | Schalter |
| **Standard**     | aus      |
| **Erforderlich** | Nein     |

Ist die Option an, deaktiviert das Plugin am Ende eines Laufs alle Produkte dieses Channels, die nicht mehr im Feed stehen. Gelöscht wird nie etwas. Taucht ein Produkt später wieder im Feed auf, wird es beim nächsten Lauf wieder aktiv, sofern sein Status das vorsieht.

Ein Feed sagt nicht, ob er vollständig ist. Schalten Sie die Option deshalb nur ein, wenn der Plytix-Channel bei jeder Verarbeitung alle Produkte exportiert. Das Plugin überspringt die Entfernungen außerdem, wenn der Lauf Schreibfehler, fehlgeschlagene Pakete oder ungültige Feed-Zeilen hatte (`REMOVAL_SKIPPED_RUN_ERRORS`).

### Sicherheitsgrenze für Entfernungen (%)

| Eigenschaft      | Wert                 |
| ---------------- | -------------------- |
| **Typ**          | Zahl von 0 bis 100   |
| **Standard**     | 25                   |
| **Erforderlich** | Nein                 |

Nur bearbeitbar, wenn **Feed enthält alle Produkte** an ist. Würde ein Lauf mehr als diesen Anteil der Produkte des Channels deaktivieren, deaktiviert er gar nichts und meldet `REMOVAL_THRESHOLD_EXCEEDED`. Meist steckt dann ein unvollständiger Feed dahinter. Produkte, die schon ein früherer Lauf wegen Fehlens im Feed deaktiviert hat, zählen weder als fehlend noch zur Gesamtzahl.

**Anwendungsbeispiel**: Sie nehmen bewusst ein Drittel des Sortiments aus dem Channel. Setzen Sie die Grenze für einen Lauf auf 40 und danach wieder zurück.

---

## Karte „Webhook“

Hier erzeugen Sie die **Webhook-URL**, die Sie in Plytix eintragen. Die Einrichtung ist in den [Anleitungen](../how_to.md#anleitung-webhook-einrichten) beschrieben.

---

## Berechtigungen

Unter **Einstellungen → System → Benutzer & Rechte** finden Sie in den Rollen den Eintrag **Plytix Connector** im Bereich Kataloge. Die Stufen bedeuten:

| Stufe       | Erlaubt                                                        |
| ----------- | -------------------------------------------------------------- |
| Ansehen     | Channels, Läufe und Probleme ansehen                           |
| Bearbeiten  | Channels ändern und **Jetzt synchronisieren** verwenden         |
| Erstellen   | Neue Channels anlegen                                          |
| Löschen     | Channels löschen, samt ihrer Läufe, Probleme und Produktverknüpfungen |

Beim Löschen eines Channels bleiben die importierten Produkte in Shopware erhalten. Sie sind danach nur keinem Channel mehr zugeordnet.

---

## Technische Parameter für Hoster und Agenturen

Drei Werte gelten für alle Channels und lassen sich nur in der Shopware-Konfiguration ändern, nicht in der Administration. Legen Sie dazu im Shop eine Datei unter `config/packages/` an, zum Beispiel `config/packages/plytix.yaml`, und leeren Sie danach den Cache:

```yaml
parameters:
    webla_plytix_connector.batch_product_limit: 100
    webla_plytix_connector.stale_run_minutes: 60
    webla_plytix_connector.run_retention_days: 180
```

| Parameter | Standard | Bedeutung |
| --- | --- | --- |
| `webla_plytix_connector.batch_product_limit` | 100 | Produkte pro Paket. Jedes Paket ist eine eigene Nachricht in der Warteschlange. Ein Hauptprodukt kommt immer mit allen Varianten in dasselbe Paket, auch wenn das die Grenze überschreitet. |
| `webla_plytix_connector.stale_run_minutes` | 60 | Nach so vielen Minuten ohne Fortschritt bricht die Fünf-Minuten-Prüfung einen wartenden oder laufenden Lauf ab (`RUN_STALE_ABORTED`). Die Zeit, die der Abschluss eines Laufs auf die Indexierung von Shopware wartet, zählt mit. |
| `webla_plytix_connector.run_retention_days` | 180 | Beendete Läufe werden nach so vielen Tagen samt ihrer Probleme gelöscht. Die Fünf-Minuten-Prüfung löscht pro Durchgang bis zu 100 alte Läufe. |
