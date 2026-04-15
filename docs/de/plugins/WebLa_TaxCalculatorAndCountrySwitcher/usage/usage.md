# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen des Plugins *Steuernachkalkulation und Lieferländer* aus Sicht des Shopbetreibers und der Kunden.

---

## Inhaltsverzeichnis

- [Länderumschalter in der Storefront](#länderumschalter-in-der-storefront)
- [Automatische Preisneuberechnung](#automatische-preisneuberechnung)
- [Versandkostenanpassung](#versandkostenanpassung)
- [Länder vom Umschalter ausschließen](#länder-vom-umschalter-ausschließen)
- [Übergabe ins Checkout](#übergabe-ins-checkout)
- [Länderauswahl-Popup (PAngV-Konformität)](#länderauswahl-popup-pangv-konformität)
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

## Länderauswahl-Popup (PAngV-Konformität)

### Was es bewirkt

Erstbesucher sehen ein blockierendes Modal, das sie nach ihrem Lieferland fragt — **bevor Preise angezeigt werden**. Die Auswahl wird in einem Cookie (`sw-switch-country`) gespeichert, sodass wiederkehrende Besucher das Popup überspringen. Dadurch entspricht der angezeigte Bruttopreis immer dem Preis, den der Kunde im Checkout zahlt — eine gesetzliche Vorgabe der deutschen Preisangabenverordnung (PAngV).

Zusätzliches Verhalten:

- **Optionale GeoIP-Vorauswahl** — falls konfiguriert, wird das Land des Besuchers über eine MaxMind-GeoLite2-Country-Datenbank erkannt und im Popup vorausgewählt. Reduziert die Interaktion auf einen einzigen Bestätigungsklick.
- **Checkout-Adressen-Abgleich** — wenn ein Kunde eine Lieferadresse mit einem anderen Land eingibt als im Popup gewählt, werden Preise und Cookie automatisch in `/checkout/confirm` angepasst und eine Info-Meldung angezeigt.
- **Veraltetes Cookie** — wenn das gespeicherte Land nicht mehr lieferbar ist (weil der Sales Channel neu konfiguriert wurde), wird das Cookie gelöscht und das Popup erscheint erneut.

### Aktivierung

1. Öffnen Sie die Plugin-Konfiguration unter `Erweiterungen → Meine Erweiterungen → Steuernachkalkulation und Lieferländer → Konfigurieren`
2. Wechseln Sie zur Karte **Länderauswahl-Popup**
3. Aktivieren Sie **Länderauswahl-Popup beim ersten Besuch anzeigen**
4. (Optional) Passen Sie **Gültigkeit des Länder-Cookies (Tage)** an — Standard 30
5. Speichern und HTTP-Cache leeren

### GeoIP-Vorauswahl einrichten

1. Besorgen Sie sich eine MaxMind-GeoLite2-Country-Datenbank (`.mmdb`) — ein kostenloses MaxMind-Konto ist erforderlich. Siehe https://dev.maxmind.com/geoip/geolite2-free-geolocation-data
2. Laden Sie die Datei auf Ihren Server, z. B. nach `/var/www/html/files/geoip/GeoLite2-Country.mmdb`
3. Stellen Sie sicher, dass die Datei vom PHP-FPM-Benutzer lesbar ist (`chmod 644` reicht meist)
4. Aktivieren Sie in der Plugin-Konfiguration unter der Karte **Länderauswahl-Popup** die Option **GeoIP-Vorauswahl aktivieren**
5. Tragen Sie den absoluten Pfad unter **Absoluter Pfad zur GeoLite2-Country.mmdb** ein
6. Speichern und HTTP-Cache leeren

### GeoIP-Datenbank aktuell halten

MaxMind aktualisiert GeoLite2 zweimal wöchentlich, und die Lizenz verlangt die Nutzung von Daten, die nicht älter als 30 Tage sind. Empfohlen: Richten Sie auf Ihrem Server einen wöchentlichen Cron-Job mit MaxMinds `geoipupdate`-Tool ein, um eine frische Kopie an den konfigurierten Pfad herunterzuladen.

### Popup deaktivieren

Wenn Sie das Popup deaktivieren, erscheint neben dem Länderschalter ein kleiner statischer Hinweis, dass die Preise das aktuell ausgewählte Lieferland widerspiegeln. Dies ist der Fallback für Shops, die rechtlich kein blockierendes Modal nutzen können oder eine leichtere UX bevorzugen — beachten Sie jedoch, dass dieser Fallback PAngV für Mehrländer-Shops **nicht** vollständig erfüllt, da der zuerst gerenderte Preis noch die falsche MwSt. zeigen kann.

### Tipps & Best Practices

- Lassen Sie das Popup in jedem Shop mit mehreren Ländern und unterschiedlichen MwSt.-Sätzen aktiviert
- Nutzen Sie GeoIP nur, wenn Sie die Aktualisierung der Datenbank sicherstellen können — eine veraltete DB ist zwar besser als keine, aber eine fehlende/nicht lesbare Datei fällt stillschweigend auf das Sales-Channel-Standardland zurück
- Testen Sie das Popup im Inkognito-Modus, um einen Erstbesucher zu simulieren
- Wenn Sie einen Reverse-Proxy oder Varnish verwenden, stellen Sie sicher, dass das `sw-switch-country`-Cookie im Cache-Key enthalten ist — das Plugin registriert es bereits über `HttpCacheKeyEvent`, aber Proxy-Ebenen benötigen möglicherweise zusätzliche Konfiguration

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
