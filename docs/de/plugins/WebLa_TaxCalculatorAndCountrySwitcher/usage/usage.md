# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen des Plugins *Steuernachkalkulation und Lieferländer* aus Sicht des Shopbetreibers und der Kunden.

---

## Inhaltsverzeichnis

- [Länderumschalter in der Storefront](#länderumschalter-in-der-storefront)
- [Automatische Preisneuberechnung](#automatische-preisneuberechnung)
- [Versandkostenanpassung](#versandkostenanpassung)
- [Länder vom Umschalter ausschließen](#länder-vom-umschalter-ausschließen)
- [Übergabe ins Checkout](#übergabe-ins-checkout)
- [Storefront-Integration anpassen](#storefront-integration-anpassen)
- [Fehlerbehebung](#fehlerbehebung)

---

## Länderumschalter in der Storefront

### Was sie bewirkt

Das Plugin blendet in der oberen Leiste (Topbar) jeder Storefront-Seite ein Dropdown ein, in dem Besucher ihr Lieferland wählen können. Die Auswahl wird per Cookie gespeichert und gilt für alle weiteren Seiten bis zum Abschluss des Kaufs.

### So verwenden Sie sie

1. Öffnen Sie die Plugin-Konfiguration unter `Erweiterungen → Meine Erweiterungen → Steuernachkalkulation und Lieferländer → Konfigurieren`
2. Aktivieren Sie den Schalter **Aktiviere das Auswahl-Dropdown**
3. Wählen Sie den gewünschten **Topbar-Anzeigemodus**
4. Optional: Konfigurieren Sie Flaggen-Anzeige, Label und Farben nach Ihren Theme-Vorgaben
5. Speichern und Storefront-Cache leeren (`Einstellungen → System → Cache & Indizes → Cache leeren`)

**Ort**: Oben auf jeder Storefront-Seite, in der Topbar (sofern Theme eine unterstützt)

### Tipps & Best Practices

- Lassen Sie nur die Länder zu, in die Sie tatsächlich liefern — die Liste basiert auf den im Verkaufskanal aktivierten Ländern
- Flaggen erhöhen die Conversion in internationalen Shops deutlich
- Testen Sie den Umschalter in allen Ihren Themes, falls Sie mehrere Verkaufskanäle betreiben

---

## Automatische Preisneuberechnung

### Was sie bewirkt

Sobald ein Besucher sein Lieferland wechselt, berechnet das Plugin alle Produktpreise im Shop neu — immer ausgehend vom hinterlegten Nettopreis und unter Anwendung des Steuersatzes des Ziellandes. Das betrifft:

- Reguläre Preise
- Günstigste Preise (z. B. bei Varianten)
- Staffelpreise
- UVP- und Streichpreise

### So verwenden Sie sie

Die Preisneuberechnung läuft **vollautomatisch** im Hintergrund — es ist keine manuelle Aktion nötig. Voraussetzung ist, dass Sie in Shopware korrekte Steuersätze pro Land gepflegt haben (`Einstellungen → Shop → Steuern`).

**Ort**: Betrifft alle Seiten mit Produktpreisen: Produktdetailseite, Listings, Warenkorb, Checkout.

### Tipps & Best Practices

- Pflegen Sie für jedes Lieferland einen eigenen Steuersatz mit den landesspezifischen Regeln
- Prüfen Sie die Preisberechnung stichprobenartig mit einem Testprodukt in mehreren Ländern
- Das Plugin verwendet die Shopware-Kassenrundung — achten Sie auf Ihre Rundungseinstellungen pro Währung

---

## Versandkostenanpassung

### Was sie bewirkt

Optional werden auch die Versandkosten pro Land neu berechnet: Der Nettobetrag bleibt konstant, der Bruttobetrag wird gemäß Landessteuersatz angepasst. So zeigen Sie international korrekte Versandkosten inklusive der jeweils geltenden Umsatzsteuer.

### So verwenden Sie sie

1. Öffnen Sie die Plugin-Konfiguration
2. Wechseln Sie zur Karte **Versandkosten-Konfiguration**
3. Aktivieren Sie **Versandkosten auf Basis der Nettokosten anpassen**
4. Speichern

### Tipps & Best Practices

- Für Länder in Ihrer Ausschlussliste (s. u.) wird die Versandkostenberechnung übersprungen und der Standardpreis verwendet
- Prüfen Sie Ihre Versandkosten-Matrizen: Das Plugin arbeitet mit den Nettowerten, die dort hinterlegt sind

---

## Länder vom Umschalter ausschließen

### Was sie bewirkt

Länder, die Sie in den Berechnungseinstellungen ausschließen, werden von der Plugin-Logik komplett übersprungen. Für diese Länder greifen die Standard-Shopware-Preise.

### So verwenden Sie sie

1. Öffnen Sie die Plugin-Konfiguration
2. Wechseln Sie zur Karte **Berechnungseinstellungen**
3. Fügen Sie im Feld **Wähle Länder aus, für die die Neuberechnung übersprungen werden soll** die gewünschten Länder hinzu
4. Speichern

**Anwendungsfall**: Ihr Heimatland, in dem die Produktpreise bereits korrekt inklusive der richtigen Mehrwertsteuer hinterlegt sind.

---

## Übergabe ins Checkout

### Was sie bewirkt

Das im Dropdown gewählte Lieferland wird automatisch in den Kaufabschluss übernommen und steht bei der Registrierung oder Gastbestellung bereits als Lieferadresse bereit. Der Kunde muss das Land nicht erneut auswählen.

### Ort

Diese Funktion ist immer aktiv und benötigt keine gesonderte Konfiguration.

### Tipps & Best Practices

- Prüfen Sie, dass alle im Dropdown verfügbaren Länder im Verkaufskanal auch als *aktiv* und *versandfähig* markiert sind

---

## Storefront-Integration anpassen

### Theme-Topbar erweitern

Wenn Ihr Theme bereits eine eigene Topbar hat (z. B. mit Kontaktinfos oder USP-Leiste), wählen Sie im Plugin den **Topbar-Anzeigemodus** `Theme-Topbar erweitern`. Der Länderumschalter wird dann zusätzlich eingeblendet, ohne Ihre bestehende Topbar zu überschreiben.

### Nur Widget (für Theme-Entwickler)

Im Modus `Nur Widget (keine Topbar-Änderung)` rendert das Plugin keine eigene Topbar. Stattdessen können Sie das Dropdown-Widget an beliebiger Stelle in Ihrem Theme per Twig einbinden. Details dazu entnehmen Sie den mitgelieferten Twig-Templates unter `Resources/views/storefront/layout/header/actions/`.

### Styling

Alle Styling-Einstellungen in der Plugin-Konfiguration werden als CSS-Variablen in die Storefront übergeben und überschreiben die Plugin-Defaults. So können Sie Farben, Abstände, Rahmen und Breite an Ihr Theme anpassen, ohne SCSS zu ändern.

---

## Fehlerbehebung

### Der Länderumschalter wird nicht angezeigt

**Symptom**: In der Storefront erscheint keine Topbar mit Länder-Dropdown.

**Ursache**: Plugin nicht aktiviert, Option `Aktiviere das Auswahl-Dropdown` ausgeschaltet, oder Theme unterstützt den Block `layout_header_top_bar` nicht.

**Lösung**:
1. Prüfen, ob das Plugin aktiviert ist (`Erweiterungen → Meine Erweiterungen`)
2. Option **Aktiviere das Auswahl-Dropdown** in der Plugin-Konfiguration einschalten
3. Storefront- und HTTP-Cache leeren (`Einstellungen → System → Cache & Indizes → Cache leeren`)
4. Falls Ihr Theme den Header-Top-Bar-Block überschreibt, wechseln Sie in den Modus `Nur Widget` und binden das Widget manuell ein

---

### Preise werden nach Länderwechsel nicht aktualisiert

**Symptom**: Nach Auswahl eines anderen Landes bleiben die Preise unverändert.

**Ursache**: HTTP-Cache liefert noch die alte Seite aus, oder das Land ist in der Ausschlussliste.

**Lösung**:
1. Prüfen, ob das betreffende Land in der Liste **Länder ausschließen** steht — ggf. entfernen
2. HTTP-Cache leeren und die Seite mit gedrückter `Strg`-Taste neu laden, um Browser-Cache zu umgehen
3. Wenn Sie einen Reverse Proxy oder CDN einsetzen, muss dieser den `country`-Request-Parameter in den Cache-Key aufnehmen

---

### Falscher Steuersatz wird angewendet

**Symptom**: Nach Länderwechsel erscheint ein falscher Bruttopreis.

**Ursache**: Der Steuersatz für das Zielland ist in Shopware nicht oder falsch gepflegt.

**Lösung**:
1. Navigieren Sie zu `Einstellungen → Shop → Steuern`
2. Prüfen Sie, ob für das betroffene Land ein passender Steuersatz mit Länderregel existiert
3. Legen Sie ggf. den korrekten Steuersatz an und weisen Sie ihn dem Produkt zu
4. Storefront-Cache leeren

---

### Versandkosten stimmen nicht

**Symptom**: Versandkosten werden nicht oder falsch angepasst.

**Ursache**: Option **Versandkosten auf Basis der Nettokosten anpassen** deaktiviert, oder das Land steht in der Ausschlussliste.

**Lösung**:
1. Option in der Karte **Versandkosten-Konfiguration** aktivieren
2. Land aus der Ausschlussliste entfernen, falls gewünscht
3. Prüfen, dass die Versandkostenmatrix Netto-Werte hinterlegt hat

---

## Verwandte Dokumentation

- [Konfigurationseinstellungen](../configuration/settings.md)
- [Anleitungen und Workflows](../how_to.md)
