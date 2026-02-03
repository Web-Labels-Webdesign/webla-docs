# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit Shopping Feed mit einzigartigen Rabatten.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

Das Plugin funktioniert nach folgendem Prinzip:

```
Preissuchmaschine → Feed-URL mit source-Parameter → Shop erkennt Quelle → Session wird erstellt → Rabatt wird angezeigt
```

**Detaillierter Ablauf**:

1. **Export-Generierung**: Das Plugin berechnet den rabattierten Preis und stellt ihn im Feed-Template bereit
2. **Feed-Abruf**: Die Preissuchmaschine (Google, idealo, etc.) lädt Ihren Feed
3. **Klick im Preisvergleich**: Ein Kunde klickt auf Ihr Produkt in der Preissuchmaschine
4. **Weiterleitung**: Der Kunde wird zu `ihre-domain.de/produkt-url` mit dem `source`-Parameter weitergeleitet
5. **Session-Erstellung**: Das Plugin erkennt den `source`-Parameter und erstellt eine Session
6. **Preisanzeige**: Der rabattierte Preis wird auf der Produktseite, im Warenkorb und Checkout angezeigt
7. **Bestellung**: Der Kunde bestellt zum rabattierten Preis
8. **Bereinigung**: Die Session wird nach 24 Stunden automatisch gelöscht

---

## Häufige Workflows

### Anleitung: Plugin erstmalig einrichten

**Ziel**: Das Plugin für Ihren ersten Produktexport einrichten

**Voraussetzungen**:
- Plugin ist installiert und aktiviert
- Ein Produktexport (Produktvergleich-Verkaufskanal) existiert

**Schritte**:

1. **Produktexport öffnen**
   - Navigieren zu: `Verkaufskanäle → [Ihr Export-Kanal]`
   - Klicken Sie auf **Produktvergleich** in der linken Navigation

2. **Rabatt konfigurieren**
   - Scrollen Sie zum Bereich unterhalb **Dynamischer Produkt-Stream**
   - Wählen Sie bei **Rabatttyp**: `Prozentual`
   - Geben Sie bei **Rabattwert** ein: `10` (für 10% Rabatt)
   - Klicken Sie auf **Speichern**

3. **Export-Template anpassen**
   - Scrollen Sie zum Bereich **Template**
   - Passen Sie die Produkt-URL an (der `source`-Parameter wird in die seoUrl-Funktion integriert):
     {% raw %}
     ```twig
     {{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}
     ```
     {% endraw %}
   - Fügen Sie den Sale-Preis hinzu:
     {% raw %}
     ```twig
     {% if 'discount' in product.extensions|keys %}
         {% set newPrice = product.extensions.discount['discount'].last %}
         {{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}
     {% endif %}
     ```
     {% endraw %}

4. **Feed testen**
   - Klicken Sie auf **Vorschau anzeigen** am Ende der Seite
   - Prüfen Sie, ob die URLs den `source`-Parameter enthalten
   - Prüfen Sie, ob die rabattierten Preise korrekt sind

5. **Im Shop testen**
   - Kopieren Sie eine URL aus dem Feed-Preview
   - Öffnen Sie die URL in einem Inkognito-/Privatfenster
   - Prüfen Sie, ob der rabattierte Preis angezeigt wird

**Ergebnis**: Ihr Feed zeigt rabattierte Preise an, und Besucher über den Feed sehen diese Preise im Shop.

---

### Anleitung: Google Shopping Feed einrichten

**Ziel**: Einen Google Shopping kompatiblen Feed mit Rabattpreisen erstellen

**Voraussetzungen**:
- Ein Produktexport für Google Shopping existiert
- Plugin-Rabatt ist konfiguriert

**Schritte**:

1. **Export öffnen**
   - Navigieren zu: `Verkaufskanäle → [Google Shopping Export]`
   - Klicken Sie auf **Produktvergleich**

2. **Template bearbeiten**
   - Scrollen Sie zum **Template**-Bereich
   - Verwenden Sie folgendes Body-Template:

{% raw %}
```xml
<item>
<g:id>{{ product.productNumber }}</g:id>
<g:title><![CDATA[{{ product.translated.name }}]]></g:title>
<g:description><![CDATA[{{ product.translated.description|striptags|slice(0, 5000) }}]]></g:description>
<g:link>{{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}</g:link>
<g:image_link>{{ product.cover.media.url }}</g:image_link>
<g:availability>{% if product.availableStock > 0 %}in_stock{% else %}out_of_stock{% endif %}</g:availability>
<g:price>{{ product.calculatedPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:price>
{% if 'discount' in product.extensions|keys %}
{% set newPrice = product.extensions.discount['discount'].last %}
<g:sale_price>{{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:sale_price>
{% endif %}
<g:brand>{{ product.manufacturer.translated.name }}</g:brand>
<g:gtin>{{ product.ean }}</g:gtin>
<g:mpn>{{ product.manufacturerNumber }}</g:mpn>
<g:condition>new</g:condition>
</item>
```
{% endraw %}

3. **Feed generieren und testen**
   - Klicken Sie auf **Speichern**
   - Generieren Sie den Feed über die Feed-URL
   - Prüfen Sie, ob `g:sale_price` korrekt befüllt ist

**Ergebnis**: Google zeigt Ihren Sale-Preis im Shopping-Tab an, und Besucher sehen diesen Preis in Ihrem Shop.

---

### Anleitung: Repricing-Integration einrichten

**Ziel**: Individuelle Preise per CSV-Import für Repricing verwenden

**Voraussetzungen**:
- Ein Repricing-Tool, das CSV-Dateien exportiert
- Shopware Import/Export-Profil für Produkte

**Schritte**:

1. **Import-Profil erstellen**
   - Navigieren zu: `Einstellungen → Shop → Import/Export`
   - Klicken Sie auf **Profile** → **Profil hinzufügen**
   - Wählen Sie **Produkte** als Entität
   - Fügen Sie folgende Felder hinzu:
     - `productNumber` (Pflichtfeld zur Identifikation)
     - `customFields.webla_exportdiscount_product_discount`

2. **CSV-Datei vorbereiten**
   - Erstellen Sie eine CSV mit folgender Struktur:
     ```csv
     productNumber;customFields.webla_exportdiscount_product_discount
     SW10001;24.99
     SW10002;39.90
     SW10003;
     ```
   - Leere Werte entfernen den individuellen Preis

3. **Import durchführen**
   - Navigieren zu: `Einstellungen → Shop → Import/Export`
   - Wählen Sie Ihr Profil
   - Laden Sie die CSV-Datei hoch
   - Starten Sie den Import

4. **Export-Einstellungen anpassen**
   - Setzen Sie den **Rabatttyp** auf `Kein Rabatt`
   - Das Plugin verwendet dann nur die artikel-spezifischen Preise

**Ergebnis**: Jedes Produkt hat seinen individuellen Export-Preis basierend auf Ihrem Repricing-Tool.

**Fehlerbehebung**: Falls Preise nicht übernommen werden, prüfen Sie:
- Korrekte Feldbezeichnung (`customFields.webla_exportdiscount_product_discount`)
- Dezimaltrenner (Punkt, nicht Komma)
- Produktnummer muss exakt übereinstimmen

---

### Anleitung: Rabatt nur für Einzelkäufe aktivieren

**Ziel**: Den Rabatt nur gewähren, wenn Kunden genau 1 Stück kaufen

**Voraussetzungen**:
- Plugin ist installiert und konfiguriert

**Schritte**:

1. **Plugin-Einstellungen öffnen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen`
   - Suchen Sie **Shopping Feed mit einzigartigen Rabatten**
   - Klicken Sie auf **Konfigurieren**

2. **Einstellung aktivieren**
   - Aktivieren Sie **Rabatt nur bei Einzelkäufen anwenden (Menge = 1)**
   - Klicken Sie auf **Speichern**

3. **Testen**
   - Öffnen Sie einen Produktlink mit `source`-Parameter aus dem Feed
   - Fügen Sie 1 Stück zum Warenkorb hinzu → Rabattpreis
   - Erhöhen Sie die Menge auf 2 → Normalpreis

**Ergebnis**: Kunden erhalten den Rabatt nur bei Einzelkäufen. Mengenrabatte werden zum normalen Preis berechnet.

---

### Anleitung: Mehrere rabattierte Produkte erlauben

**Ziel**: Kunden sollen mehrere Produkte aus verschiedenen Feed-Klicks rabattiert kaufen können

**Voraussetzungen**:
- Plugin ist installiert und konfiguriert

**Schritte**:

1. **Plugin-Einstellungen öffnen**
   - Navigieren zu: `Erweiterungen → Meine Erweiterungen`
   - Suchen Sie **Shopping Feed mit einzigartigen Rabatten**
   - Klicken Sie auf **Konfigurieren**

2. **Einstellung aktivieren**
   - Aktivieren Sie **Erlaube mehrere rabattierte Produkte pro Session**
   - Klicken Sie auf **Speichern**

3. **Testen**
   - Öffnen Sie Produkt A über Feed-Link → Rabatt aktiv
   - Öffnen Sie Produkt B über anderen Feed-Link → Rabatt auch aktiv
   - Beide Produkte im Warenkorb haben den Rabattpreis

**Ergebnis**: Kunden können mehrere Produkte mit Rabatt kaufen, wenn sie jeweils über Feed-Links kommen.

---

## Schnellreferenz

| Aufgabe                    | Wichtige Schritte                        | Erforderliche Einstellungen              |
| -------------------------- | ---------------------------------------- | ---------------------------------------- |
| Globalen Rabatt einrichten | Verkaufskanäle → Export → Rabatttyp/Wert | Rabatttyp, Rabattwert                    |
| Feed-Template anpassen     | Verkaufskanäle → Export → Template       | URL mit source-Parameter, Preis-Variable |
| Artikel-Preis setzen       | Kataloge → Produkt → Zusatzfelder        | Neuer Preis im Export (Brutto)           |
| Nur Einzelkäufe            | Erweiterungen → Plugin → Konfigurieren   | Rabatt nur bei Einzelkäufen              |
| Mehrere Produkte erlauben  | Erweiterungen → Plugin → Konfigurieren   | Mehrere rabattierte Produkte pro Session |
| API-Sessions löschen       | Erweiterungen → Plugin → Konfigurieren   | API-Sessions löschen Button              |

---

## Best Practices

1. **Testen Sie immer zuerst**: Nutzen Sie eine Testumgebung oder Inkognito-Modus
2. **Moderat starten**: Beginnen Sie mit 5-10% Rabatt und beobachten Sie die Conversion
3. **Feed-URLs prüfen**: Der `source`-Parameter in der seoUrl ist essenziell
4. **Cache beachten**: Nach Konfigurationsänderungen Cache leeren
5. **Sessions überwachen**: Bei Problemen Sessions manuell löschen

## Was Sie vermeiden sollten

- **Rabatt ohne URL-Parameter**: Ohne den `source`-Parameter in der seoUrl-Funktion funktioniert das Plugin nicht
- **Zu hohe Rabatte**: Mehr als 20% kann die Marge stark belasten
- **Vergessenes Template**: Ohne Template-Anpassung enthält der Feed normale Preise
- **Deaktivierte Message Queue**: Automatische Session-Bereinigung läuft nicht
