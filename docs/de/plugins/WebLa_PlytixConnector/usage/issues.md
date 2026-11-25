# Läufe und Problemcodes

> Teil des Plytix Connectors. [Zur Nutzungsanleitung](./usage.md)

## Status eines Laufs

Jede Synchronisation ist ein Lauf. Den Status sehen Sie in der Liste **Läufe** auf der Channel-Seite, unter **Alle Läufe** und auf der Detailseite eines Laufs. Die Detailseite aktualisiert sich selbst, solange der Lauf noch arbeitet.

| Status | Bedeutung |
| --- | --- |
| Wartend | Der Lauf ist angelegt und wartet auf einen Worker. Bleibt er lange hier stehen, laufen keine Worker. |
| Läuft | Der Feed wird geladen, geprüft und in Paketen importiert. |
| Abgeschlossen | Fertig, ohne Fehler. Warnungen kann es trotzdem geben. |
| Mit Fehlern abgeschlossen | Fertig, aber mindestens ein Problem hat den Schweregrad Fehler. Die übrigen Produkte sind importiert. |
| Fehlgeschlagen | Der Lauf wurde abgebrochen, bevor oder nachdem die Produkte geschrieben wurden, zum Beispiel weil der Feed nicht abrufbar war. Der Grund steht im Feld **Fehler** und als Problem. |
| Übersprungen, Feed unverändert | Der Feed ist byte-gleich mit dem zuletzt erfolgreich importierten. Es wurde nichts geschrieben. |
| Abgebrochen | Der Lauf hat 60 Minuten (Standardwert) lang keinen Fortschritt gemacht und wurde automatisch beendet. Fast immer fehlen Worker. |

Pro Channel kann immer nur ein Lauf wartend oder laufend sein. Ein weiterer Start wird abgelehnt, bis der aktuelle fertig ist. Nur einen Webhook-Aufruf merkt sich das Plugin und startet den Lauf danach.

Beendete Läufe und ihre Probleme werden nach 180 Tagen automatisch gelöscht. Den Zeitraum kann Ihr Hoster ändern, siehe [Technische Parameter](../configuration/settings.md#technische-parameter-für-hoster-und-agenturen).

### Zähler

| Zähler | Bedeutung |
| --- | --- |
| Von Plytix gemeldete Produkte | Die Anzahl, die Plytix im Webhook mitgeschickt hat. Nur bei Läufen per Webhook. |
| Datensätze im Feed | Zeilen im Feed, also Produkte aller Ebenen |
| Verarbeitet | Bisher abgearbeitete Produkte. Zwischenstufen dreistufiger Hierarchien zählen nicht mit, weil sie in Shopware nicht als Produkt entstehen. Deshalb kann die Zahl am Ende kleiner sein als die Datensätze im Feed. |
| Angelegt | Neu in Shopware angelegte Produkte |
| Aktualisiert | Geänderte und neu geschriebene Produkte |
| Unverändert | Produkte ohne Änderung seit dem letzten Lauf. Sie werden nicht angefasst. |
| Übersprungen | Datensätze und Produkte, die wegen eines Problems nicht geschrieben wurden |

## Probleme

Auf der Detailseite eines Laufs (in der Liste **Läufe** auf **Probleme anzeigen** klicken) stehen alle Probleme dieses Laufs. Sie können nach **Schweregrad** und **Code** filtern und nach einer **SKU** suchen. Die Spalte **Meldung** zeigt die Meldung in der Sprache Ihrer Administration und darunter den Code des Problems, die Spalte **Details** enthält Zusatzangaben wie Zeilennummer oder Bild-URL. Fehlertexte von Shopware, PHP oder dem Webserver und der erwartete Wert einer ungültigen Channel-Einstellung bleiben englisch. Probleme und Fehler von Läufen aus der Zeit vor Version 1.0.0 behalten ihre englische Meldung.

Es gibt zwei Schweregrade:

- **Fehler**: Daten wurden nicht importiert, oder der Lauf ist gescheitert. Mindestens ein Fehler macht aus „Abgeschlossen“ den Status „Mit Fehlern abgeschlossen“.
- **Warnung**: Der Import lief weiter, aber etwas ist nicht so, wie es sein sollte. Manche Warnungen sind reine Information.

Die Codes ändern sich zwischen Plugin-Versionen nicht. Wenn Sie uns kontaktieren, nennen Sie bitte den Code und die SKU.

### Feed

| Code | Schweregrad | Bedeutung | Was Sie tun können |
| --- | --- | --- | --- |
| `FEED_FETCH_FAILED` | Fehler | Der Feed konnte nicht heruntergeladen werden: HTTP-Fehler, Zeitüberschreitung oder eine URL, die nicht mit `http://` oder `https://` beginnt. Der Lauf schlägt fehl. | Feed-URL prüfen und im Browser aufrufen: Der Download muss starten. Prüfen, ob der Channel in Plytix verarbeitet wurde. |
| `FEED_NO_RECORDS` | Fehler | Der Feed ist leer, nicht im NDJSON-Format, oder kein Datensatz hat eine verwertbare SKU. Der Lauf schlägt fehl. | Prüfen, ob der Plytix-Channel das Format NDJSON hat und verarbeitet wurde. Die Zuordnung **SKU (Produktnummer)** prüfen. |
| `FEED_RECORD_COUNT_MISMATCH` | Warnung | Plytix hat im Webhook eine andere Produktanzahl gemeldet, als der Feed Datensätze enthält. Eventuell war der Feed noch nicht aktualisiert. | Einige Minuten später **Jetzt synchronisieren** klicken. Tritt die Warnung dauerhaft auf, die Produktanzahl im Plytix-Channel prüfen. |
| `FEED_INVALID_JSON` | Fehler | Eine Zeile im Feed ist kein gültiges JSON und wird übersprungen. Entfernungen werden in diesem Lauf nicht ausgeführt. | Meist ein abgebrochener Download. Lauf wiederholen. Bleibt der Fehler, Zeilennummer aus den Details an uns schicken. |
| `FEED_LINE_NOT_OBJECT` | Fehler | Eine Zeile ist gültiges JSON, aber kein Produktdatensatz. Sie wird übersprungen, Entfernungen entfallen. | Wie bei `FEED_INVALID_JSON`. |

### Produktstruktur

| Code | Schweregrad | Bedeutung | Was Sie tun können |
| --- | --- | --- | --- |
| `HIERARCHY_DUPLICATE_SKU` | Fehler | Eine SKU steht mehrmals im Feed. Alle diese Zeilen und alle Varianten darunter werden übersprungen. | SKU in Plytix eindeutig machen. Prüfen, ob die Zuordnung **SKU (Produktnummer)** das richtige Attribut nutzt. |
| `HIERARCHY_PARENT_NOT_IN_FEED` | Fehler | Das Hauptprodukt einer Variante fehlt im Feed und wurde von diesem Channel auch nie importiert. Die Variante wird übersprungen. | In Plytix den Export der übergeordneten Ebenen einschalten oder das Hauptprodukt in den Channel aufnehmen. |
| `HIERARCHY_CYCLE` | Fehler | Die „Variant of“-Angaben bilden einen Kreis (A ist Variante von B, B von A). Die betroffenen Produkte werden übersprungen. | Die Produktbeziehungen in Plytix korrigieren. |
| `HIERARCHY_VARIANT_NOT_LISTED` | Warnung | Ein Produkt nennt ein Hauptprodukt, das es aber nicht in seiner Variantenliste führt. Importiert wird nach „Variant of“. | Beziehungen in Plytix prüfen. Meist harmlos. |
| `HIERARCHY_LISTED_VARIANT_MISMATCH` | Warnung | Ein Hauptprodukt führt eine Variante, die es nicht als Hauptprodukt nennt oder nicht im Feed steht. | Beziehungen in Plytix prüfen. Prüfen, ob alle Varianten im Channel enthalten sind. |

### Feldzuordnung und Inhalte

| Code | Schweregrad | Bedeutung | Was Sie tun können |
| --- | --- | --- | --- |
| `MAPPING_SKU_MISSING` | Fehler | Eine Zeile hat keine SKU und wird übersprungen. | SKU in Plytix pflegen oder die Zuordnung **SKU (Produktnummer)** korrigieren. |
| `MAPPING_NAME_MISSING` | Fehler | Ein Hauptprodukt hat keinen Namen. Es wird mit allen Varianten übersprungen. | Namen in Plytix pflegen oder die Zuordnung **Name** prüfen. |
| `MAPPING_PRICE_MISSING` | Fehler | Ein Hauptprodukt hat keinen Preis. Es wird mit allen Varianten übersprungen. | Preis in Plytix pflegen oder die Zuordnung **Preis** prüfen. |
| `MAPPING_PRICE_INVALID` | Fehler | Der Preis ist keine einfache Zahl mit Punkt. Das Produkt wird übersprungen, bei einem Hauptprodukt samt Varianten. | Preis in Plytix im Format `29.99` ausgeben, ohne Währungszeichen und Tausendertrennzeichen. |
| `MAPPING_MAX_PURCHASE_INVALID` | Warnung | Die maximale Bestellmenge ist keine ganze Zahl größer 0. Das Feld bleibt leer, das Produkt wird importiert. | Wert in Plytix korrigieren. |
| `MAPPING_FIELD_INVALID` | Warnung | Der Wert eines Produktfelds ist nicht lesbar, etwa eine Breite mit Einheit (`12 cm`), ein Datum in anderem Format oder ein Text über 255 Zeichen. Der Wert wird nicht importiert, der Rest des Produkts schon. Die Details nennen Feld und Wert. | Wert in Plytix korrigieren oder auf der Zuordnungsseite die Einheit des Feeds wählen. |
| `MAPPING_CUSTOM_FIELD_INVALID` | Warnung | Der Wert passt nicht zum Typ oder zu den Optionen eines Zusatzfelds. Er wird nicht importiert, der Rest des Produkts schon. | Wert in Plytix korrigieren oder die Option im Zusatzfeld ergänzen. |
| `MAPPING_TAX_UNMAPPED` | Warnung | Dem Steuerwert eines Produkts ist kein Shopware-Steuersatz zugeordnet. Ein Hauptprodukt bekommt den Steuersatz des Channels, eine Variante den ihres Hauptprodukts. | Dem Wert auf der [Zuordnungsseite](./mapping.md#steuersatz) einen Steuersatz zuordnen oder den Wert in Plytix korrigieren. |
| `MAPPING_VARIANT_OPTIONS_MISSING` | Warnung | Eine Variante hat für keine Variantenoption einen Wert und ist im Storefront nicht auswählbar. | Attributwerte in Plytix pflegen oder die Variantenoptionen auf der [Zuordnungsseite](./mapping.md#variantenoptionen-und-eigenschaften) zuordnen. |
| `MAPPING_VARIANT_OPTIONS_UNMAPPED` | Warnung | Der Feed hat Varianten, aber keine Bezeichnung ist als Variantenoption zugeordnet. Kunden können keine Variante wählen. Beim ersten Lauf eines neuen Channels zu erwarten. | Variantenoptionen auf der [Zuordnungsseite](./mapping.md#variantenoptionen-und-eigenschaften) zuordnen. |
| `TRANSLATION_LANGUAGE_MISSING` | Warnung | Für eine zugeordnete Locale gibt es keine Sprache in Shopware. Deren Texte werden nicht importiert. | Sprache in Shopware anlegen oder die Zeile unter **Übersetzungen** entfernen. |
| `CATEGORY_PARENT_MISSING` | Warnung | Der Channel hat keinen Verkaufskanal mit Einstiegskategorie. Kategorien werden nicht importiert. | Eine Zeile bei **Verkaufskanäle** hinzufügen. |
| `PROPERTY_GROUP_MISSING` | Warnung | Die bestehende Eigenschaftsgruppe, die für eine Variantenoption oder Eigenschaft gewählt wurde, gibt es nicht mehr. Diese Bezeichnung wird nicht importiert. | Auf der [Zuordnungsseite](./mapping.md#variantenoptionen-und-eigenschaften) eine andere Gruppe wählen oder einen Namen eintragen. |
| `CUSTOM_FIELD_MISSING` | Warnung | Ein zugeordnetes Zusatzfeld gibt es nicht, es ist inaktiv oder sein Typ kann nicht importiert werden. Diese Bezeichnung wird nicht importiert. | Zusatzfeld aktivieren oder auf der [Zuordnungsseite](./mapping.md#zusatzfelder) ein anderes wählen. |
| `CROSS_SELLING_TARGET_UNKNOWN` | Warnung | Ein Cross-Selling verweist auf eine SKU, die dieser Channel nicht importiert hat. Der Eintrag wird übersprungen. | Zielprodukt in den Plytix-Channel aufnehmen oder den Verweis in Plytix entfernen. |

### Schreiben in Shopware

| Code | Schweregrad | Bedeutung | Was Sie tun können |
| --- | --- | --- | --- |
| `PRODUCT_OWNED_BY_OTHER_CHANNEL` | Warnung | Das Produkt gehört schon zu einem anderen Plytix-Channel und wird übersprungen. | Gewollt? Dann nichts tun. Sonst **Produkte anderer Channels übernehmen** einschalten. |
| `PRODUCT_WRITE_FAILED` | Fehler | Shopware hat das Speichern eines Produkts samt Varianten abgelehnt. Die Meldung nennt den Grund. Der nächste Lauf versucht es erneut, auch bei unverändertem Feed. Entfernungen entfallen. | Die Meldung enthält die Fehlermeldung von Shopware. Daten in Plytix entsprechend korrigieren. Bei Unklarheit Meldung an uns schicken. |
| `MEDIA_DOWNLOAD_FAILED` | Warnung | Ein Bild konnte nicht geladen werden, zum Beispiel wegen eines Fehlers 404, einer Zeitüberschreitung oder einer Datei über 50 MB. Die übrigen Bilder werden zugeordnet, der nächste Lauf versucht es erneut. Der Code erscheint auch, wenn die Bilder eines Produkts nach allen Wiederholungen nicht verarbeitet werden konnten. Diese Warnung kann nach dem Ende des Laufs noch erscheinen. | Bild-URL aus den Details im Browser prüfen. Bild in Plytix ersetzen, wenn es fehlt oder zu groß ist. |

### Entfernungen

| Code | Schweregrad | Bedeutung | Was Sie tun können |
| --- | --- | --- | --- |
| `REMOVAL_PRODUCT_DEACTIVATED` | Warnung | Das Produkt steht nicht mehr im Feed und wurde deaktiviert. Reine Information. | Nichts, wenn gewollt. Sonst das Produkt wieder in den Plytix-Channel aufnehmen. |
| `REMOVAL_THRESHOLD_EXCEEDED` | Fehler | Es fehlen mehr Produkte als die Sicherheitsgrenze erlaubt. Es wurde nichts deaktiviert. | Prüfen, ob der Feed vollständig ist. Ist die Lücke gewollt, die **Sicherheitsgrenze für Entfernungen (%)** für einen Lauf anheben. |
| `REMOVAL_SKIPPED_RUN_ERRORS` | Warnung | Entfernungen wurden übersprungen, weil der Lauf Schreibfehler, fehlgeschlagene Pakete oder ungültige Feed-Zeilen hatte. | Die anderen Fehler des Laufs beheben. Der nächste fehlerfreie Lauf holt die Entfernungen nach. |

### Ablauf

| Code | Schweregrad | Bedeutung | Was Sie tun können |
| --- | --- | --- | --- |
| `CHANNEL_CONFIGURATION_INVALID` | Fehler | Die Einstellungen des Channels sind ungültig, zum Beispiel kein Steuersatz oder ein gelöschter Verkaufskanal, Steuersatz, eine gelöschte Einstiegskategorie oder Basissprache. Der Lauf schlägt fehl. Die Meldung nennt die betroffene Einstellung. | Einstellung korrigieren und speichern. |
| `RUN_START_FAILED` | Fehler | Der Lauf konnte aus einem anderen Grund nicht vorbereitet oder in die Warteschlange gestellt werden. | Meldung lesen und Lauf erneut starten. Bei mehreren Servern das gemeinsame private Dateisystem prüfen. |
| `RUN_BATCH_FAILED` | Fehler | Ein Paket ist auch nach mehreren Wiederholungen gescheitert. Seine Produkte zählen als übersprungen, die Details nennen die SKUs der Hauptprodukte. Der nächste Lauf importiert erneut. Entfernungen entfallen. | Meldung lesen und Lauf erneut starten. Bleibt der Fehler, Meldung an uns schicken. |
| `RUN_FINALIZE_FAILED` | Fehler | Der Abschluss des Laufs mit Cross-Selling und Entfernungen ist gescheitert. Der Lauf schlägt fehl. | Lauf erneut starten. |
| `RUN_STALE_ABORTED` | Fehler | Der Lauf hat 60 Minuten (Standardwert) lang keinen Fortschritt gemacht und wurde abgebrochen. | Prüfen, ob die Worker für `async` und `low_priority` laufen. Siehe [Voraussetzungen](../index.md#hintergrund-worker-sind-pflicht). |
