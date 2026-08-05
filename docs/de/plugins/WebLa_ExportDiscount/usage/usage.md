# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von Shopping Feed mit einzigartigen Rabatten.

---

## Inhaltsverzeichnis

- [Export-Rabatt konfigurieren](#export-rabatt-konfigurieren)
- [Export-Template anpassen](#export-template-anpassen)
- [Artikel-spezifische Preise](#artikel-spezifische-preise)
- [Session-Management](#session-management)
- [Storefront Funktionen](#storefront-funktionen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Export-Rabatt konfigurieren

### Was es bewirkt

Der Export-Rabatt ermöglicht es Ihnen, einen globalen Rabatt für alle Produkte in einem bestimmten Produktexport zu definieren. Dieser Rabatt wird sowohl im Export-Feed als auch im Shop angezeigt, wenn ein Besucher über den Feed-Link auf Ihr Produkt klickt.

### So verwenden Sie es

1. Navigieren Sie zu `Verkaufskanäle → [Ihr Export-Kanal]`
2. Klicken Sie auf **Produktvergleich** in der linken Navigation
3. Scrollen Sie zum Bereich **Dynamischer Produkt-Stream**
4. Unterhalb des Produkt-Streams finden Sie die Felder **Rabatttyp** und **Rabattwert**
5. Wählen Sie den gewünschten Rabatttyp:
   - **Kein Rabatt**: Deaktiviert den Rabatt
   - **Absolut**: Fester Betrag in der Shop-Währung
   - **Prozentual**: Prozentualer Rabatt vom Originalpreis
6. Geben Sie den Rabattwert ein
7. Speichern Sie die Änderungen

**Ort**: Verkaufskanäle → [Export-Kanal] → Produktvergleich

### Tipps & Best Practices

- Beginnen Sie mit einem moderaten Rabatt (5-10%) und passen Sie nach Bedarf an
- Testen Sie den Rabatt immer in einer Testumgebung bevor Sie live gehen
- Der Rabatt wird auf den Bruttopreis angewendet

---

## Export-Template anpassen

### Was es bewirkt

Um die rabattierten Preise im Export-Feed anzuzeigen, müssen Sie Ihr Export-Template anpassen. Das Plugin stellt die rabattierten Preise über eine Extension am Produkt bereit.

### So verwenden Sie es

1. Navigieren Sie zu `Verkaufskanäle → [Ihr Export-Kanal] → Produktvergleich`
2. Scrollen Sie zum Bereich **Template**
3. Passen Sie Ihr Template wie folgt an:

**Für die Produkt-URL mit Tracking-Parameter:**

Die URL muss den `source`-Parameter enthalten. Dieser wird direkt in die `seoUrl`-Funktion integriert:

{% raw %}
```twig
{{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}
```
{% endraw %}

Der `source`-Parameter ist entscheidend - er enthält die Export-ID und ermöglicht dem Plugin zu erkennen, von welchem Feed der Besucher kommt.

**Für den rabattierten Preis (Sale Price):**

{% raw %}
```twig
{% if 'discount' in product.extensions|keys %}
    {% set newPrice = product.extensions.discount['discount'].last %}
    {{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}
{% endif %}
```
{% endraw %}

### Beispiel: Google Shopping Feed

Fügen Sie folgenden Code in den **Product Row** Bereich Ihres Templates ein:

{% raw %}
```xml
<item>
    <g:id>{{ product.productNumber }}</g:id>
    <g:title><![CDATA[{{ product.translated.name }}]]></g:title>
    <g:link>{{ seoUrl('frontend.detail.page', {'productId': product.id, 'source': export.id}) }}</g:link>
    <g:price>{{ product.calculatedPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:price>
    {% if 'discount' in product.extensions|keys %}
    {% set newPrice = product.extensions.discount['discount'].last %}
    <g:sale_price>{{ newPrice.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:sale_price>
    {% endif %}
</item>
```
{% endraw %}

### Tipps & Best Practices

- Der `source`-Parameter muss als Teil der `seoUrl`-Parameter übergeben werden, nicht als Query-String
- Testen Sie Ihren Feed nach Änderungen mit dem Shopware Feed-Preview
- Bei Google Shopping wird der `g:price` als Originalpreis und `g:sale_price` als rabattierter Preis angezeigt
- Nutzen Sie `context.currency.itemRounding.decimals` für korrekte Dezimalstellen

---

## Artikel-spezifische Preise

### Was es bewirkt

Mit artikel-spezifischen Preisen können Sie für einzelne Produkte einen individuellen Export-Preis festlegen. Dieser überschreibt den globalen Export-Rabatt vollständig und ist ideal für Repricing-Szenarien.

### So verwenden Sie es

**Manuell im Admin:**

1. Navigieren Sie zu `Kataloge → Produkte`
2. Öffnen Sie das gewünschte Produkt
3. Wechseln Sie zum Tab **Spezifikationen**
4. Scrollen Sie zu **Zusatzfelder**
5. Suchen Sie die Feldgruppe **Shopping Feed mit einzigartigen Rabatten**
6. Tragen Sie im Feld **Neuer Preis im Export (Brutto)** den gewünschten Preis ein
7. Speichern Sie das Produkt

**Per CSV-Import:**

Das Feld hat den technischen Namen `webla_exportdiscount_product_discount`. Sie können es in Ihren CSV-Import-Profilen verwenden:

| Produktnummer | Neuer Preis im Export (Brutto) |
| ------------- | ------------------------------ |
| SW10001       | 24.99                          |
| SW10002       | 39.90                          |

**Per API:**

```json
PATCH /api/product/{id}
{
    "customFields": {
        "webla_exportdiscount_product_discount": 24.99
    }
}
```

### Tipps & Best Practices

- Der Preis ist ein Bruttopreis (inkl. MwSt.)
- Ein leeres Feld bedeutet, dass der globale Export-Rabatt verwendet wird
- Ein Wert von 0 oder negativ wird ignoriert
- Ideal für die Integration mit Repricing-Tools

---

## Session-Management

### Was es bewirkt

Das Plugin speichert Sessions, um zu verfolgen, welche Besucher über welchen Export gekommen sind. Diese Sessions werden automatisch nach der eingestellten Gültigkeitsdauer bereinigt (Standard: 24 Stunden).

### Automatische Bereinigung

- Sessions werden alle 5 Minuten auf Ablauf geprüft
- Sessions, die älter als die eingestellte Gültigkeitsdauer sind, werden automatisch gelöscht
- Die Bereinigung läuft über die Shopware Scheduled Task Warteschlange

### Manuelle Bereinigung

**Ort**: Erweiterungen → Meine Erweiterungen → Shopping Feed mit einzigartigen Rabatten → Konfigurieren

1. Navigieren Sie zu den Plugin-Einstellungen
2. Klicken Sie auf **API-Sessions löschen**
3. Alle aktiven Sessions werden sofort entfernt

### Tipps & Best Practices

- Nutzen Sie die manuelle Bereinigung nach ausgiebigen Tests
- Stellen Sie sicher, dass die Shopware Message Queue läuft für die automatische Bereinigung
- Im Produktivbetrieb ist normalerweise keine manuelle Intervention nötig

---

## Storefront Funktionen

### Preisanzeige auf der Produktseite

**Wo es erscheint**: Produktdetailseite, wenn der Besucher über einen Feed-Link kam

**Was Kunden sehen**:
- Den rabattierten Preis als aktuellen Preis
- Den Originalpreis als durchgestrichenen Preis (Streichpreis)
- Die prozentuale Ersparnis (falls vom Theme unterstützt)

### Preisanzeige im Warenkorb

**Wo es erscheint**: Warenkorb und Checkout

**Was Kunden sehen**:
- Der rabattierte Preis wird durchgängig angezeigt
- Bei aktivierter "Nur Einzelkäufe"-Option: Mengen > 1 zeigen den Originalpreis

### 30-Tage-Preisanzeige

Das Plugin schreibt automatisch den günstigsten Preis in das Shopware-Standardfeld für den günstigsten Preis der letzten 30 Tage. Dies ist wichtig für die EU-Preisangabenverordnung (Omnibus-Richtlinie).

### Anpassungsmöglichkeiten

Die Preisanzeige nutzt die Standard-Shopware-Preisdarstellung. Anpassungen erfolgen über:
- Ihr Theme und dessen Konfiguration
- Twig-Template-Overrides
- CSS-Styling

---

## Fehlerbehebung

### Rabatt wird nicht im Shop angezeigt

**Symptom**: Der Besucher sieht den normalen Preis statt des Rabattpreises.

**Mögliche Ursachen und Lösungen**:

1. **Fehlender source-Parameter in der URL**
   - Prüfen Sie, ob die URL den `source`-Parameter enthält
   - Der Parameter wird über die seoUrl-Funktion gesetzt: `{'productId': product.id, 'source': export.id}`
   - Prüfen Sie Ihr Export-Template auf korrekte URL-Generierung

2. **Session existiert nicht**
   - Der Besucher muss direkt über den Feed-Link kommen
   - Links ohne source-Parameter erstellen keine Session

3. **Cache-Problem**
   - Leeren Sie den Shopware-Cache unter `Einstellungen → System → Caches & Indizes`
   - Das Plugin invalidiert Caches automatisch, aber bei Problemen hilft manuelles Leeren

4. **Produkt nicht im Export-Stream**
   - Prüfen Sie, ob das Produkt Teil des dynamischen Produkt-Streams ist

### Rabatt wird nicht im Feed angezeigt

**Symptom**: Der Feed enthält die normalen Preise.

**Mögliche Ursachen und Lösungen**:

1. **Template nicht angepasst**
   - Prüfen Sie, ob Sie `'discount' in product.extensions|keys` im Template verwenden
   - Greifen Sie auf den Preis mit `product.extensions.discount['discount'].last.unitPrice` zu

2. **Kein Rabatt konfiguriert**
   - Prüfen Sie die Rabatteinstellungen am Produktexport
   - Rabatttyp darf nicht "Kein Rabatt" sein

3. **Feed-Cache**
   - Generieren Sie den Feed neu unter `Verkaufskanäle → [Export] → Produktvergleich`

### Session wird nicht erstellt

**Symptom**: Trotz korrekter URL wird keine Session angelegt.

**Mögliche Ursachen und Lösungen**:

1. **Ungültige Export-ID**
   - Prüfen Sie, ob die Export-ID in der URL gültig ist
   - Die ID muss eine existierende Produktexport-ID sein

2. **Produkt-ID fehlt**
   - Die Session wird nur auf Produktdetailseiten erstellt
   - Kategorie- oder Suchergebnisseiten erstellen keine Session

3. **Bestehende Session**
   - Bei deaktivierter "Mehrere Produkte"-Option wird nur die erste Session behalten

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Schritt-für-Schritt-Anleitungen](../how_to.md)
