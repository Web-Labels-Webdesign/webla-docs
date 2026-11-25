# Feldzuordnung und Varianten

> Teil des Plytix Connectors. [Zur Nutzungsanleitung](./usage.md)

## Übersicht

In Plytix vergeben Sie für jedes Attribut im Channel eine Ausgabe-Bezeichnung, zum Beispiel `Product Title` oder `Price (€)`. Genau diese Bezeichnungen stehen im Feed. Das Plugin kann deshalb nicht wissen, wie Ihre Felder heißen, und Sie legen es in der Karte **Feldzuordnung** fest.

**Ort**: Kataloge → Plytix Connector → Channel öffnen → Karte **Feldzuordnung**

Die Standardwerte sind die Bezeichnungen, die Plytix für die Felder verwendet, die jeder Channel-Export hat. Unter jedem Feld zeigt ein Hinweis den Standard an. Variantenoptionen, Eigenschaften, weitere Produktfelder und Übersetzungen haben keinen Standard: Variantenoptionen, Eigenschaften und Produktfelder wie Abmessungen oder Tags ordnen Sie auf der [Zuordnungsseite](#variantenoptionen-und-eigenschaften) aus den Bezeichnungen zu, die ein Synchronisationslauf in Ihrem Feed gefunden hat, Übersetzungen in der Liste **Übersetzungen**. **Zuordnung auf Standard zurücksetzen** stellt die Standardwerte der Felder wieder her und leert die Übersetzungen; Variantenoptionen und Eigenschaften bleiben. Die Änderung wird erst mit **Speichern** übernommen.

## Regeln

**Bezeichnungen aus der Liste wählen.** Jedes Feld bietet die Bezeichnungen des letzten Synchronisationslaufs an, eine entfernte Bezeichnung lässt sich also wieder auswählen. Vor dem ersten Lauf oder für eine Bezeichnung, die noch kein Lauf gefunden hat, tippen Sie sie ein. Groß- und Kleinschreibung, Leerzeichen und Sonderzeichen müssen genau so eingetragen werden wie in Plytix. Benennen Sie in Plytix eine Ausgabe-Bezeichnung um, müssen Sie die Zuordnung anpassen.

**Mehrere Bezeichnungen: die erste mit Wert gewinnt.** Sie können pro Feld mehrere Bezeichnungen wählen. Das Plugin nimmt die erste, die beim jeweiligen Produkt einen Wert hat. Beim Namen ist der Standard `Product Title, Label`: Hat ein Produkt keinen Product Title, wird das Label verwendet.

**Leeres Feld: Shopware-Daten bleiben unberührt.** Ist ein Feld in der Zuordnung leer, schreibt das Plugin es nie. Was Sie in Shopware eintragen, bleibt erhalten. Das gilt für **Name**, **Beschreibung**, **Kurzbeschreibung**, **Preis**, **EAN / GTIN**, **Status**, **Maximale Bestellmenge**, **Hersteller**, **Kategorien**, **Cross-Selling**, die **Eigenschaften** und für jedes Feld jeder Übersetzung einzeln. Bei den Bildern müssen **Vorschaubild** und **Bilder** beide leer sein. Ist eins davon belegt, verwaltet das Plugin die Bilder.

Dabei gibt es Grenzen:

- **SKU (Produktnummer)** darf nicht leer sein.
- Shopware braucht für ein neues Produkt einen Namen und einen Preis. Ist **Name** oder **Preis** leer, aktualisiert das Plugin vorhandene Produkte weiter, neue Produkte scheitern aber mit `PRODUCT_WRITE_FAILED`.
- **Variantenoptionen** verwaltet das Plugin immer.

**Zugeordnet, aber ohne Wert: Der Wert wird geleert.** Ist ein Feld zugeordnet und hat ein Produkt im Feed keinen Wert dafür, leert das Plugin das Feld in Shopware, denn Plytix ist die Quelle. Ausnahmen: Ein fehlender Status bedeutet aktiv, und ein Hauptprodukt ohne Name oder Preis wird samt Varianten übersprungen (`MAPPING_NAME_MISSING`, `MAPPING_PRICE_MISSING`). Bei einer Variante heißt ein leerer Wert, dass sie den Wert ihres Hauptprodukts erbt.

## Die Felder

| Feld in der Administration | Standard | Ziel in Shopware | Hinweise |
| --- | --- | --- | --- |
| SKU (Produktnummer) | `SKU` | Produktnummer | Erkennungsmerkmal. Vorhandene Shopware-Produkte mit gleicher Produktnummer werden übernommen statt doppelt angelegt. |
| SKU des Hauptprodukts | `Variant of` | Hauptprodukt einer Variante | Maßgeblich für die Variantenstruktur. |
| SKUs der Varianten | `Variants` | nur zur Kontrolle | Widersprüche zu „Variant of“ werden als Warnung gemeldet. |
| Name | `Product Title`, `Label` | Name | Pflicht für Hauptprodukte. |
| Beschreibung | `Long Description` | Beschreibung | Zeilenumbrüche bleiben als Zeilenumbrüche erhalten. |
| Kurzbeschreibung | `Short Description` | Zusatzfeld „Kurzbeschreibung“ im Set „Plytix“ | Siehe unten. |
| Preis | `Price (€)` | Preis | Siehe unten. |
| EAN / GTIN | `GTIN` | EAN | |
| Hersteller | `Brand` | Hersteller | Wird über den Namen gefunden oder neu angelegt. |
| Kategorien | `Categories` | Kategorien | Pfade wie `Wurzel>Kleidung>T-Shirts`, siehe [Kategorie-Wurzel](../configuration/settings.md#kategorie-wurzel-im-feed). |
| Vorschaubild | `Main Image`, `Thumbnail` | Vorschaubild | Ist immer auch Teil der Galerie. |
| Bilder | `Assets` | Bildergalerie | Werden im Hintergrund heruntergeladen. |
| Status | `Status` | Aktiv | Siehe [Statuswerte für aktive Produkte](../configuration/settings.md#statuswerte-für-aktive-produkte). |
| Maximale Bestellmenge | `Maximum Order Quantity` | Maximale Bestellmenge | Muss eine ganze Zahl größer 0 sein. |
| Cross-Selling | `Cross-sell` | Cross-Selling | Werte im Format `SKU#Menge`, die Menge wird ignoriert. |

### Preise

Der Preis muss eine einfache Zahl mit Punkt als Dezimaltrenner sein, also `29.99` oder `30`. Werte wie `29,99`, `1.299,00` oder `29.99 €` werden abgelehnt (`MAPPING_PRICE_INVALID`).

Jeder Lauf ersetzt den Preis eines geänderten Produkts komplett. Preise in weiteren Währungen, die Sie in Shopware von Hand ergänzt haben, gehen dabei verloren. In welcher Währung die Feed-Preise stehen und ob es Brutto- oder Nettopreise sind, stellen Sie im Channel ein.

### Kurzbeschreibung

Shopware hat kein eigenes Feld für eine Kurzbeschreibung. Das Plugin legt deshalb ein übersetzbares Zusatzfeld an: Set „Plytix“, Feld „Kurzbeschreibung“. Sie sehen es am Produkt bei den Zusatzfeldern. Im Storefront erscheint es nicht von selbst, Ihr Theme muss es ausgeben.

### Bilder

Bilder lädt das Plugin im Hintergrund über die Warteschlange `low_priority`. Jede Bild-URL wird nur einmal heruntergeladen und dann bei allen Produkten wiederverwendet, die sie enthalten. Die Bilder landen in der Medienverwaltung in einem Ordner „Plytix“ unterhalb des Ordners für Produktmedien und nutzen dessen Thumbnail-Größen. Eine Datei darf höchstens 50 MB groß sein.

Bis die Downloads fertig sind, kann ein Produkt ohne oder mit unvollständiger Galerie im Shop stehen. Bei 184 Bildern hat das in unseren Tests etwa anderthalb Minuten gedauert.

### Cross-Selling

Das Plugin schreibt Cross-Selling erst, wenn alle Produkte eines Laufs angelegt sind. Pro Produkt entsteht ein Cross-Selling vom Typ Produktliste mit dem Namen aus den [Import-Einstellungen](../configuration/settings.md#name-des-cross-sellings). Cross-Sellings, die Sie selbst in Shopware anlegen, bleiben unberührt.

Ziele müssen von demselben Channel importiert sein. Andere werden mit `CROSS_SELLING_TARGET_UNKNOWN` übersprungen. Verweist ein Eintrag auf eine Zwischenstufe einer dreistufigen Hierarchie, zeigt das Cross-Selling auf das zugehörige Hauptprodukt, weil Zwischenstufen in Shopware nicht existieren.

## Variantenoptionen und Eigenschaften

Variantenoptionen und Eigenschaften ordnen Sie auf einer eigenen Seite zu, weil ein Feed oft 40 Bezeichnungen und mehr hat. Sie listet die Bezeichnungen auf, die der letzte Synchronisationslauf in Ihrem Feed gefunden hat.

**Ort**: Channel öffnen → Karte **Feldzuordnung** → **Feed-Bezeichnungen zuordnen**

### Der Ablauf

1. **Erste Synchronisation**: Speichern Sie den Channel und starten Sie eine Synchronisation. Sie importiert die Produkte ohne Variantenoptionen und Eigenschaften und sammelt die Bezeichnungen des Feeds. Solange kein Lauf sie gesammelt hat, zeigt die Seite **Noch keine Feed-Bezeichnungen** mit der Schaltfläche **Jetzt synchronisieren**. Ist der Lauf fertig, erscheinen die Bezeichnungen, ohne dass Sie die Seite neu laden.
2. **Bezeichnungen zuordnen**: Legen Sie für jede Bezeichnung fest, was sie in Shopware wird, siehe unten.
3. **Speichern und synchronisieren**: Das Plugin speichert die Zuordnung und startet sofort eine Synchronisation. Weil sich die Zuordnung geändert hat, schreibt dieser Lauf alle Produkte des Channels mit den neuen Variantenoptionen und Eigenschaften neu. Läuft bereits eine Synchronisation, startet die neue direkt nach deren Ende. Eine Meldung zeigt, welcher der beiden Fälle eingetreten ist, und die Karte **Läufe** unten auf der Seite zeigt den Fortschritt. **Speichern** allein sichert die Zuordnung ohne Synchronisation; die nächste zeitgesteuerte, per Webhook oder manuell gestartete Synchronisation wendet sie an.

### Die Liste

Jede Zeile ist eine Feed-Bezeichnung:

- **Feed-Bezeichnung**: die Bezeichnung, ihre Werteart (**Einzelwert** oder **Liste**) und bis zu fünf Beispielwerte
- **Datensätze**: wie viele Produkte einen Wert haben, und wie viele davon Varianten sind
- **Verwenden als**: **Nicht zugeordnet**, **Variantenoption**, **Eigenschaft**, **Produktfeld**, **Zusatzfeld** oder **Ignorieren**
- **Ziel in Shopware**: die Eigenschaftsgruppe, das Produktfeld oder das Zusatzfeld, in das die Werte gehen

Zuerst stehen die Bezeichnungen, die Sie schon zugeordnet haben, danach alphabetisch alle, die noch kein Feld, keine Übersetzung, keine Variantenoption und keine Eigenschaft verwendet. Bezeichnungen der festen Felder und Übersetzungen aus der Karte **Feldzuordnung** erscheinen nicht.

Suchfeld und Filter (**Alle**, **Nicht zugeordnet**, **Zugeordnet**, **Ignoriert**, jeweils mit Anzahl) helfen bei langen Listen. Um viele Bezeichnungen auf einmal zu ignorieren, haken Sie ihre Zeilen an und klicken auf **Auswahl ignorieren**. Geänderte Zeilen sind mit **Geändert** markiert, und erst **Speichern** oder **Speichern und synchronisieren** übernimmt die Änderungen.

**Vorschläge**: Unter der Auswahl schlägt die Seite eine Verwendung vor. Eine Bezeichnung mit kurzen Werten, die sich bei mehreren Produkten wiederholen, wird als Variantenoption vorgeschlagen, wenn sich ihre Werte zwischen den Varianten eines Hauptprodukts unterscheiden, sonst als Eigenschaft. Kennungen, Zahlen, Links und lange Texte bekommen keinen Vorschlag. Solange der Channel noch keine Variantenoption hat, sind die vorgeschlagenen Variantenoptionen bereits ausgewählt. Prüfen Sie sie vor dem Speichern.

**Eigenschaftsgruppe**: Wählen Sie eine **Bestehende Gruppe**, landen die Werte genau in dieser Gruppe, egal wie sie heißt. Andernfalls tragen Sie einen Namen ein: Das Plugin verwendet die Gruppe mit diesem Namen oder legt sie an. Leer bedeutet: wie die Feed-Bezeichnung. Jede Gruppe darf nur einmal für Variantenoptionen und einmal für Eigenschaften verwendet werden. Ausprägungen werden innerhalb ihrer Gruppe über den Namen gefunden oder angelegt. Benennen Sie eine vom Plugin angelegte Gruppe oder Ausprägung in Shopware um, bleibt Ihr Name erhalten.

Wird eine gewählte bestehende Gruppe später gelöscht, meldet jeder Lauf `PROPERTY_GROUP_MISSING` und importiert für diese Bezeichnung nichts. Wählen Sie auf der Zuordnungsseite eine andere Gruppe.

**Ignorieren**: Eine ignorierte Bezeichnung erscheint nicht mehr als nicht zugeordnet, auch nicht nach späteren Läufen. Ignorieren ändert nichts im Shop, die Produkte werden deshalb nicht neu geschrieben. Um sie wieder zu sehen, setzen Sie sie zurück auf **Nicht zugeordnet**.

### Variantenoptionen

**Variantenoptionen** sind die Merkmale, nach denen sich Varianten unterscheiden, etwa Farbe und Größe. Daraus baut das Plugin die Variantenauswahl auf der Produktseite. Eine Variante ohne Wert für irgendeine Variantenoption kann im Storefront nicht ausgewählt werden und wird mit `MAPPING_VARIANT_OPTIONS_MISSING` gemeldet. Variantenoptionen verwaltet das Plugin immer, auch wenn keine zugeordnet sind.

> **Produkte, die es in Ihrem Shop schon gibt**: Übernimmt der Channel Produkte, die in Shopware bereits Variantenoptionen haben, entfernt die erste Synchronisation diese Optionen, weil noch keine zugeordnet sind. Die Synchronisation nach dem Speichern der Zuordnung weist sie wieder zu. Führen Sie die erste Synchronisation aus, bevor Kunden die Produkte sehen, oder zu einer ruhigen Zeit.

> **Alles als Eigenschaft zuordnen**: Eine Bezeichnung ist entweder Variantenoption oder Eigenschaft. Ist keine Bezeichnung eine Variantenoption, entfernt die nächste Synchronisation vorhandene Variantenoptionen und die Variantenauswahl, und neue Varianten entstehen ohne Optionen, sodass Kunden sie nicht wählen können. Die Zuordnungsseite warnt davor, und jeder Lauf meldet `MAPPING_VARIANT_OPTIONS_UNMAPPED`. Auch die Werte von Variantenoptionen lassen sich im Storefront filtern, sie brauchen also keine zusätzliche Eigenschaft.

### Eigenschaften

**Eigenschaften** sind filterbare Produktmerkmale wie Material oder Geschlecht. Mehrere Werte eines Attributs werden zu mehreren Ausprägungen. Entfernen Sie eine Eigenschaft, löscht der nächste Lauf die Zuordnungen dieser Gruppe an den Produkten. Ist keine Eigenschaft zugeordnet, fasst das Plugin keine Eigenschaften an.

Die Labels von Plytix wie `Option 1 Name - Size` taugen nicht als Variantenoption. Im Demo-Feed stehen darin vertauschte Werte. Ordnen Sie deshalb immer die Attribute mit den eigentlichen Werten zu.

### Produktfelder

**Produktfeld** schreibt den Wert einer Bezeichnung in ein normales Produktfeld von Shopware. Das Feld wählen Sie unter **Ziel in Shopware**. Jedes Feld nimmt eine Bezeichnung auf.

| Produktfeld | Wert im Feed | Hinweise |
| --- | --- | --- |
| Breite, Höhe, Länge | Zahl | Wählen Sie die Einheit der Feed-Werte: mm, cm oder m. Shopware speichert Millimeter. |
| Gewicht | Zahl | Wählen Sie kg oder g. Shopware speichert Kilogramm. |
| Hersteller-Produktnummer | Text | |
| Mindestabnahme, Staffelung | Ganze Zahl ab 1 | |
| Verkaufseinheit, Grundeinheit | Zahl | |
| Verpackungseinheit, Verpackungseinheit-Mehrzahl, Meta-Titel, Meta-Beschreibung | Text bis 255 Zeichen | Übersetztes Feld, siehe unten |
| Schlüsselwörter | Text | Übersetztes Feld; eine Liste wird mit Kommas verbunden |
| Such-Schlagwörter | Text oder Liste | Übersetztes Feld; jeder Listeneintrag wird ein Schlagwort |
| Erscheinungsdatum | Datum wie `2026-10-30` | Auch mit Uhrzeit, etwa `2026-10-30T10:00:00+02:00` |
| Versandkostenfrei, Produkt hervorheben, Abverkauf | Ja/Nein | `true`/`false`, `yes`/`no`, `1`/`0`, Groß- oder Kleinschreibung egal |
| Tags | Text oder Liste | Jeder Listeneintrag wird ein Tag. Tags werden per Name gefunden oder angelegt. Von Hand zugewiesene Tags entfernt das Plugin beim nächsten Schreiben, solange Tags zugeordnet ist. |
| Steuersatz | Text oder Zahl | Ordnen Sie jedem Feed-Wert einen Shopware-Steuersatz zu, siehe [Steuersatz](#steuersatz) |

Zahlen dürfen Punkt oder Komma als Dezimaltrennzeichen haben, etwa `12.5` oder `12,5`, aber keine Einheit und kein Tausendertrennzeichen. Einen Wert, den das Plugin nicht lesen kann, oder einen zu langen Text meldet es mit `MAPPING_FIELD_INVALID` und importiert ihn nicht; der Rest des Produkts wird importiert.

Es gelten die üblichen Regeln: Ein nicht zugeordnetes Feld bleibt unberührt, ein zugeordnetes Feld ohne Wert wird geleert, und eine Variante mit demselben Wert wie ihr Hauptprodukt erbt ihn. **Mindestabnahme**, **Staffelung** und die Ja/Nein-Felder können bei einem Hauptprodukt nicht leer sein; ohne Wert bekommen sie den Standard von Shopware (1 bzw. Nein).

Die übersetzten Felder erhalten den Feed-Wert nur für die Basissprache des Channels und, falls das eine andere ist, für die Standardsprache des Systems. Übersetzungen dieser Felder in weiteren Sprachen werden noch nicht importiert; was Shopware dort hat, bleibt.

### Zusatzfelder

**Zusatzfeld** schreibt den Wert einer Bezeichnung in ein Zusatzfeld, das es in Ihrem Shop schon gibt. Zur Auswahl stehen die aktiven Zusatzfelder aller Sets, die Produkten zugeordnet sind (Einstellungen → System → Zusatzfelder). Jedes Zusatzfeld nimmt eine Bezeichnung auf.

| Typ des Zusatzfelds | Wert im Feed | Hinweise |
| --- | --- | --- |
| Text, Farbe | Text, Zahl oder Liste | Eine Liste wird mit Kommas verbunden. Shopware entfernt HTML-Tags aus Textfeldern. |
| Texteditor | Text oder HTML | Zeilenumbrüche werden zu `<br>` |
| Zahl | Zahl | Punkt oder Komma als Dezimaltrennzeichen, negative Zahlen sind erlaubt. Ein Feld für ganze Zahlen nimmt nur ganze Zahlen. |
| Checkbox, Schalter | Ja/Nein | `true`/`false`, `yes`/`no`, `1`/`0` |
| Datum | Datum wie `2026-10-30` | Auch mit Uhrzeit |
| Auswahl | Text | Muss dem Wert oder einer Beschriftung einer Option entsprechen, Groß- oder Kleinschreibung egal. Optionen werden nie angelegt. |
| Mehrfachauswahl | Text oder Liste | Wie oben; passende Optionen werden importiert, auch wenn andere nicht passen |

Medien-, Entitäts- und Preisfelder lassen sich nicht zuordnen. Das eigene Kurzbeschreibungsfeld des Plugins füllt **Kurzbeschreibung** in der Karte **Feldzuordnung**.

Es gelten die üblichen Regeln: Ein nicht zugeordnetes Zusatzfeld bleibt unberührt, ein zugeordnetes ohne Wert wird geleert, und eine Variante mit demselben Wert wie ihr Hauptprodukt erbt ihn. Wie die übersetzten Produktfelder erhalten Zusatzfelder den Feed-Wert nur für die Basissprache und die Standardsprache des Systems. Entfernen Sie die Zuordnung, bleiben die Werte stehen.

Ein Wert, der nicht passt, wird mit `MAPPING_CUSTOM_FIELD_INVALID` gemeldet. Wird ein zugeordnetes Zusatzfeld gelöscht oder deaktiviert, meldet jeder Lauf `CUSTOM_FIELD_MISSING` und importiert für diese Bezeichnung nichts.

> **Benutzerrollen**: Damit Benutzer ohne Administratorrechte die Zusatzfelder sehen, müssen die Rechte des Plugins in ihrer Rolle einmal neu gespeichert werden.

### Steuersatz

Ordnen Sie **Steuersatz** zu, wenn ein Katalog Produkte mit verschiedenen Steuersätzen enthält, etwa Merchandise und Lebensmittel. Das Plugin listet bis zu fünf Werte auf, die die letzte Synchronisation für die Bezeichnung gefunden hat. Wählen Sie für jeden einen Shopware-Steuersatz; mit **Feed-Wert hinzufügen** tragen Sie weitere Werte ein. Groß- und Kleinschreibung spielt keine Rolle. Die Namen in Plytix und Shopware müssen nicht übereinstimmen.

- Ein Produkt ohne Wert bekommt den Steuersatz des Channels. Ein Wert ohne Steuersatz ebenfalls, er wird mit `MAPPING_TAX_UNMAPPED` gemeldet.
- Eine Variante ohne Wert erbt den Steuersatz ihres Hauptprodukts. Eine Variante mit einem anderen Steuersatz als ihr Hauptprodukt bekommt ihren eigenen.
- Brutto- und Nettopreise werden mit dem Steuersatz des Produkts berechnet.

## Übersetzungen

Plytix kennt keine Sprachen im Feed. Jede Sprache ist ein eigenes Attribut, etwa `Spanish Product Title`. In der Liste **Übersetzungen** ordnen Sie diese Attribute einer Sprache zu:

1. Klicken Sie auf **Locale hinzufügen**.
2. Tragen Sie bei **Locale** den Sprachcode ein, wie Shopware ihn verwendet, zum Beispiel `es-ES` oder `fr-FR`.
3. Wählen Sie die Feed-Bezeichnungen für **Name**, **Beschreibung** und **Kurzbeschreibung**. Felder ohne Eintrag schreibt das Plugin in dieser Sprache nicht, was dort in Shopware steht, bleibt. Ist ein Feld zugeordnet, hat aber beim Produkt keinen Wert, wird die Übersetzung geleert, und Shopware zeigt den Text der Standardsprache.

Übersetzt werden nur diese drei Felder. Die Sprache muss in Shopware angelegt sein, sonst überspringt das Plugin sie mit `TRANSLATION_LANGUAGE_MISSING`. Die Standardzuordnung enthält keine Übersetzungen. Channels, die vor Version 1.0.0 angelegt wurden, behalten ihre Zeile `es-ES`. Bieten Sie kein Spanisch an, entfernen Sie sie, damit die Warnung nicht bei jedem Lauf erscheint.

## Wie Varianten entstehen

Shopware kennt zwei Ebenen: ein Hauptprodukt und seine Varianten. Plytix erlaubt drei, zum Beispiel `TSH-11470` → `TSH-11470-W` (Farbe) → `TSH-11470-W-XL` (Größe). Das Plugin macht daraus zwei Ebenen:

- Die oberste Ebene wird das Hauptprodukt.
- Die unterste Ebene wird zu Varianten.
- Die mittlere Ebene wird nicht als Produkt angelegt. Ihre Werte gehen an die Varianten darunter: Ist ein Feld bei der Variante leer, nimmt das Plugin den Wert der Zwischenstufe.

Ein Produkt ohne Varianten wird ein normales Einzelprodukt.

### Vererbung

Hat eine Variante denselben Wert wie ihr Hauptprodukt, schreibt das Plugin den Wert bei der Variante leer. Shopware erbt ihn dann vom Hauptprodukt, wie bei Varianten üblich. Das gilt für Texte, Preis, EAN, Status, maximale Bestellmenge, Produktfelder, Hersteller, Kategorien, Eigenschaften, Bilder und Cross-Selling. Ist ein Feld bei der Variante leer, erbt sie ebenfalls. Ändern Sie später den Wert am Hauptprodukt in Plytix, ändert er sich bei allen erbenden Varianten mit.

Der Name einer Variante wird deshalb nur gesetzt, wenn er sich vom Namen des Hauptprodukts unterscheidet.

### Mehrere Werte in einer Variantenoption

Eine Variante kann in Shopware pro Gruppe nur eine Ausprägung haben. Plytix erlaubt aber zum Beispiel zwei Farben an einer Variante. Das Plugin verbindet die Werte dann zu einer Ausprägung: aus `Multicolor` und `White` wird `Multicolor / White`.

### Varianten ohne Hauptprodukt im Feed

Fehlt das Hauptprodukt im Feed, hängt das Plugin die Variante an ihr bisheriges Hauptprodukt, falls dieser Channel sie schon importiert hat, sonst an das bereits importierte Produkt mit der SKU aus „Variant of“. Gibt es keins von beiden, wird die Variante mit `HIERARCHY_PARENT_NOT_IN_FEED` übersprungen. Aktivieren Sie deshalb in Plytix den Export der übergeordneten Ebenen, siehe [Plytix-Channel einrichten](../how_to.md#anleitung-plytix-channel-einrichten).

## FAQ

**F: Ich habe ein Attribut in Plytix umbenannt, und jetzt fehlen Daten.**
A: Der Feed enthält jetzt die neue Bezeichnung. Tragen Sie sie in der Feldzuordnung ein und speichern Sie. Der nächste Lauf schreibt alle Produkte neu.

**F: Kann ich die Beschreibung in Shopware pflegen statt in Plytix?**
A: Ja. Leeren Sie die Zuordnung **Beschreibung** und speichern Sie. Danach schreibt das Plugin keine Beschreibung mehr, und Ihre Texte in Shopware bleiben. Übersetzte Beschreibungen schreibt es weiter, solange sie unter **Übersetzungen** zugeordnet sind. Das funktioniert genauso für jedes andere Feld.

**F: Wie importiere ich die Farben in die Farbgruppe, die mein Shop schon hat?**
A: Setzen Sie auf der Zuordnungsseite die Farb-Bezeichnung auf **Variantenoption** und wählen Sie Ihre Gruppe unter **Bestehende Gruppe**. Das Plugin verwendet dann genau diese Gruppe, egal wie sie heißt, und ergänzt fehlende Ausprägungen.

**F: Eine Bezeichnung, die ich nicht brauche, taucht auf der Zuordnungsseite immer wieder auf.**
A: Setzen Sie sie auf **Ignorieren** und speichern Sie. Ignorierte Bezeichnungen stehen nur noch unter dem Filter **Ignoriert** und lösen kein Neuschreiben der Produkte aus.
