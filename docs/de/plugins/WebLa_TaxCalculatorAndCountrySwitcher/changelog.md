**Änderungsprotokoll — Steuernachkalkulation und Lieferländer**

Alle wichtigen Änderungen für Endbenutzer.

---

# 5.3.1

_Veröffentlicht am 2026-08-26_

**Fehlerbehebungen**

- Ein Serverfehler beim Länderwechsel wurde behoben, wenn die Seite, von der der Kunde kam, nicht als Weiterleitungsziel aufgelöst werden konnte. Solche Anfragen führen jetzt zurück auf die Startseite statt auf eine Fehlerseite. Damit ist auch ein Endpunkt geschlossen, über den sich von außen wiederholt Serverfehler auslösen ließen.
- Ein Serverfehler wurde behoben, wenn auf ein Land gewechselt wurde, das im Shop nicht mehr existiert oder dessen Währung in der Währungstabelle des Plugins fehlt. Betrifft nur den aktivierten Währungswechsel.
- Der HTTP-Cache der Storefront wurde für jeden Besucher übergangen. Das Plugin hat die Session des Besuchers in den Cache-Schlüssel aufgenommen, sodass keine Seite je aus dem Cache ausgeliefert wurde. Shops mit Reverse Proxy oder Varnish sollten eine deutlich bessere Trefferquote sehen.

**Verbesserungen**

- Der Länderwechsel leert nicht mehr bei jeder Anfrage den Cache aller Produkte, Kategorien und der Navigation. Lieferländer haben seit 5.1.9 ohnehin eigene Cache-Einträge, diese Arbeit blieb also wirkungslos und kostete nur Zeit. Je größer der Katalog, desto deutlicher der Unterschied.

# 5.3.0

_Veröffentlicht am 2026-07-28_

**Breaking Changes**

- Die Option „Lieferland aus der Storefront-Sprache vorauswählen" heißt jetzt „Lieferland aus der Storefront-Sprache setzen" und tut genau das: Sie setzt das tatsächliche Lieferland, statt es nur im Popup vorauszuwählen. Preise und Steuern passen ab dem ersten Seitenaufruf zur Sprach-Domain. Wenn Sie diese Option in 5.2.0 in der Erwartung einer reinen Vorauswahl aktiviert haben, ändern sich die Preise auf Ihren Sprach-Domains entsprechend. Die Option bleibt standardmäßig deaktiviert, und sowohl eine ausdrückliche Länderwahl des Kunden als auch die Lieferadresse eines eingeloggten Kunden haben weiterhin Vorrang.

**Fehlerbehebungen**

- Die Länderauswahl im Header zeigte ein anderes Land als der Rest der Seite, wenn ein Lieferland über die URL übergeben wurde. Zusätzlich erhält jedes Land jetzt einen eigenen zwischengespeicherten Header, statt sich einen zu teilen.
- Ein Serverfehler auf allen Storefront-Seiten wurde behoben, wenn der Länder-Parameter in der URL als Liste statt als einzelner Wert übergeben wurde.

# 5.2.0

_Veröffentlicht am 2026-07-21_

**Neue Funktionen**

- Neue Option, um im Willkommens-Popup das Lieferland anhand der Storefront-Sprache vorauszuwählen (z.B. wählt die niederländische Domain die Niederlande vor). Das Land wird aus der Locale-Region der Sprache abgeleitet und muss im Verkaufskanal lieferbar sein. Hat Vorrang vor GeoIP. Standardmäßig deaktiviert; aktivierbar in den Einstellungen des Länderauswahl-Popups. Nur Vorauswahl — Kunden bestätigen weiterhin selbst.

# 5.1.10

_Veröffentlicht am 2026-07-21_

**Fehlerbehebungen**

- Kunden bleiben nach der Auswahl eines Lieferlandes im Willkommens-Popup auf der aktuellen Seite. Zuvor wurde nach der Bestätigung eines Landes immer zur Startseite weitergeleitet, sodass Deep-Links aus Newslettern oder Social Media (zum Beispiel eine Produktseite) ihr Ziel verloren. Das Popup führt Besucher jetzt zurück auf die Seite, auf der sie angekommen sind – analog zur Länderauswahl in der Kopfzeile.

# 5.1.9

_Veröffentlicht am 2026-06-30_

**Fehlerbehebungen**

- Behebt einen Fehler, durch den unter Shopware 6.6 die Preise des gewählten Lieferlandes an andere Besucher weitergegeben wurden. Produkt-, Listen- und Kategorieseiten werden jetzt getrennt je gewähltem Lieferland zwischengespeichert, sodass ein für ein Land berechneter Preis nach einem Seitenaufruf nicht mehr anderen Kunden angezeigt wird. Shopware 6.7 war nicht betroffen.

# 5.1.8

_Veröffentlicht am 2026-06-09_

**Neue Funktionen**

- Neue Einstellungen, um den Preis-/MwSt.-Hinweis unter der Lieferland-Auswahl ein- oder auszublenden und dessen Ausrichtung (links, zentriert, rechts) zu wählen. Der Hinweistext selbst bleibt unter Einstellungen > Textbausteine bearbeitbar.

**Verbesserungen**

- Der Länder-Hinweis wird jetzt als dezenter, rechtsbündiger Text nahe der Lieferland-Auswahl angezeigt statt als vollbreiter, hervorgehobener Balken.

---

# 5.1.7

_Veröffentlicht am 2026-06-04_

**Fehlerbehebungen**

- Die Versandkosten-Anpassung auf Netto-Basis je Lieferland wird jetzt auch angewendet, wenn die Option für einen einzelnen Verkaufskanal aktiviert ist. Zuvor wurde die Einstellung nur aus dem globalen Standardwert gelesen, sodass eine kanalspezifische Konfiguration ignoriert und die Versandkosten unabhängig vom gewählten Land als reiner Brutto-Betrag angezeigt wurden.
- Die Netto-basierte Versandkosten-Anpassung bleibt jetzt erhalten, wenn das Plugin AcrisPartialDeliveryCS aktiv ist. Dieses Plugin berechnete jede Lieferung nach unserem Berechner neu und überschrieb die landesabhängig angepassten Versandkosten; die angepassten Lieferungen werden nun markiert, sodass sie erhalten bleiben.

---

# 5.1.6

_Veröffentlicht am 2026-06-03_

**Fehlerbehebungen**

- Länderauswahl im Storefront-Header und im Offcanvas-Menü (mobil) unter Shopware 6.7 wiederhergestellt. Shopware 6.7 lädt Header und Footer in separaten, eigenständig gecachten Fragmenten und hat die bisherige Template-Variable `page.header` entfernt — dadurch fehlten dem Länder-Hinweis und dem mobilen Länder-Dropdown ihre Werte. Beide lesen die Daten jetzt direkt aus dem Header-Pagelet, sodass Länderschalter und Länder-Hinweis unter Shopware 6.7 wieder korrekt angezeigt werden.

---

# 5.1.5

_Veröffentlicht am 2026-05-28_

**Fehlerbehebungen**

- Storefront-Absturz nach Plugin-Update behoben, der auftrat wenn andere Plugins oder Shopware selbst inaktive Service-Klassen mit Verweisen auf fehlende Interfaces enthalten (z. B. in Shopware 6.7 entfernte APIs, oder optionale Pakete die im Shop-Vendor nicht installiert sind wie `nikic/php-parser` aus `symfony/translation`). Der interne Kompatibilitäts-Compiler-Pass überspringt solche Service-Definitionen, deren Klasse sich nicht laden lässt, jetzt still — statt die Container-Kompilierung mit einem fatalen `ClassNotFoundError` abzubrechen, der die gesamte Storefront nach abgeschlossenem Plugin-Update lahmlegte.

---

# 5.1.4

_Veröffentlicht am 2026-05-27_

**Fehlerbehebungen**

- Im Preisberechner werden `PartialEntity`-Instanzen jetzt übersprungen. Bundle-Plugins laden Produkte über `Criteria::addFields` als Partial-Entities ohne typisierte Getter. Der Dekorator warf zuvor `UndefinedMethodError` beim Aufruf von `getTaxId()` — was alle Code-Pfade rund um Bundle-Artikel auf HTTP 500 laufen ließ, die PHP-FPM-Worker auslastete und schließlich den gesamten Shop unerreichbar machte. Der dekorierte Shopware-Berechner verarbeitet diese Produkte jetzt ohne Neuberechnung.
- Konflikt mit Drittanbieter-Plugins behoben, die auf Shopware 6.7 den finalen `CachedSalesChannelContextFactory`-Typ als Type-Hint verwenden. Der DI-Compiler-Pass erkennt jetzt den kollidierenden Type-Hint und überspringt die Dekoration, statt die Container-Kompilierung abzubrechen.

---

# 5.1.3

_Veröffentlicht am 2026-05-15_

**Fehlerbehebungen**

- Endlos-Redirect ("zu viele Weiterleitungen") nach Login im Checkout behoben, wenn das Standard-Lieferland des Kundenkontos vom im Popup oder Länderschalter gewählten Land abweicht. Das Cookie wird jetzt direkt synchronisiert statt über einen Redirect auf dieselbe URI — der Fehler trat zuvor unter HTTP-Cache auf.
- Das Lieferland-Cookie wird beim Kunden-Login automatisch auf das Standard-Lieferland des Kontos gesetzt, sodass der Länderschalter im Header sofort das richtige Land zeigt und das Popup nach dem Login im Checkout nicht mehr aufpoppt.
- Das `secure`-Flag des Lieferland-Cookies wird jetzt vom Request-Schema abgeleitet — HTTPS-Storefronts setzen sichere Cookies, lokale HTTP-Entwicklung funktioniert weiterhin.
- Die Überschrift im Länder-Popup nutzt ein zugängliches Nicht-Überschrift-Element, damit die Template-Compliance-Prüfungen des Shopware Stores bestehen — Screenreader kündigen die Überschrift weiterhin als Ebene 2 an.

**Neue Funktionen**

- Das Lieferland-Cookie ist jetzt im Shopware-Cookie-Manager registriert, sodass Storefronts mit Consent-Banner `sw-switch-country` korrekt deklarieren und steuern können.

---

# 5.1.0

_Veröffentlicht am 2026-04-15_

**Neue Funktionen**

- **Länderauswahl-Popup beim ersten Besuch (PAngV-Konformität)**: Erstbesucher sehen jetzt ein blockierendes Popup, das sie nach ihrem Lieferland fragt, bevor Preise angezeigt werden. Dadurch entspricht der angezeigte Brutto-Preis dem Preis, den der Kunde beim Checkout zahlt — eine gesetzliche Vorgabe der deutschen Preisangabenverordnung.
- **Optionale GeoIP-Vorauswahl**: Wenn Sie eine MaxMind-GeoLite2-Country-Datenbank bereitstellen, wählt das Popup das Land des Besuchers automatisch vor. Fällt stillschweigend auf das Standardland des Sales Channels zurück, wenn GeoIP deaktiviert ist, die Datenbank fehlt oder das erkannte Land nicht lieferbar ist.
- **Abgleich bei abweichender Lieferadresse**: Wenn das Lieferland der Kundenadresse vom im Popup gewählten Land abweicht, werden Preise und Länder-Cookie im `/checkout/confirm` automatisch angepasst und eine sichtbare Info-Meldung angezeigt.
- **Statischer Fallback-Hinweis**: Wenn das Popup deaktiviert ist, erinnert ein kleiner Hinweis neben dem Länderschalter daran, dass die Preise das aktuell ausgewählte Land widerspiegeln.
- **Automatische Composer-Installation für Abhängigkeiten**: Das Plugin aktiviert `executeComposerCommands()`, sodass Shopware die neue GeoIP-Library automatisch während Plugin-Installation oder -Update installiert — kein manuelles `composer require` nötig.

**Verbesserungen**

- **Popup vom Länderschalter-Toggle entkoppelt**: Das Popup kann jetzt unabhängig vom Header-Länderschalter verwendet werden. Sie können eines aktivieren, ohne das andere zu brauchen.
- **Schutz vor veraltetem Cookie**: Zeigt das gespeicherte Länder-Cookie auf ein Land, das nicht mehr lieferbar ist (weil sich die Sales-Channel-Konfiguration geändert hat), wird das Cookie automatisch gelöscht und das Popup erscheint erneut.
- **Shopware 6.6 und 6.7 Parität**: Die Popup-Daten werden über `StorefrontRenderEvent` bereitgestellt, was auf beiden Majors konsistent funktioniert — 6.7 lädt den Header über einen ESI-Subrequest, wo der bisherige Pagelet-Pfad nicht verfügbar war.

**Konfiguration**

Neue Einstellungen in der Plugin-Konfiguration unter **Länderauswahl-Popup**:

- **Länderauswahl-Popup beim ersten Besuch anzeigen** — Umschalter
- **Gültigkeit des Länder-Cookies (Tage)** — Standard 30
- **GeoIP-Vorauswahl aktivieren** — Umschalter
- **Absoluter Pfad zur GeoLite2-Country.mmdb** — Pfad vom Händler bereitgestellt

---

# 5.0.0

_Veröffentlicht am 2026-04-14_

**Neue Funktionen**

- **Eine Code-Basis für Shopware 6.6 und 6.7**: Das Plugin unterstützt ab dieser Version beide Shopware-Majors aus einer einzigen Installation. Sie müssen nicht mehr zwischen verschiedenen Plugin-Versionen wechseln, wenn Sie Shopware aktualisieren.
- **Automatisierte Updates über GitHub-Actions**: Neue Versionen werden automatisch validiert, gebaut und in den Shopware Store hochgeladen — schnellere Bug-Fix-Zyklen.
- **Konventionelles Änderungsprotokoll**: Zukünftige Versionen generieren ihr Changelog automatisch aus den Commit-Nachrichten.

**Verbesserungen**

- **Robustere Länder-Erkennung**: Die Abfrage des Ziellands im Warenkorb, Versand und bei Produktpreisen nutzt jetzt einen kompatibleren Shopware-Aufruf, der auf beiden Majors zuverlässig funktioniert.
- **Stabilere Factory-Integration**: Die interne Integration mit Shopwares Sales-Channel-Context-Layer wurde auf die offizielle Adapter-Architektur umgestellt — Sie profitieren von stabileren Upgrades bei zukünftigen Shopware-Versionen.

**Breaking Changes**

- **Shopware 6.5 wird nicht mehr unterstützt**: Wenn Sie noch auf Shopware 6.5 sind, bleiben Sie bitte auf Plugin-Version 2.x. Die Version 5.0.0 setzt mindestens Shopware 6.6 voraus.
- **Mindest-PHP-Version**: 8.2 oder höher — stellen Sie sicher, dass Ihr Server die Anforderung erfüllt.

---

# 4.1.4

_Veröffentlicht am 2025-12-12_

**Verbesserungen**

- Flexbox-Styling für die Länder-Anzeige in der Topbar ergänzt.
- Topbar-Anzeigemodus als Konfigurationsoption eingeführt (Theme-Topbar erweitern, Topbar ersetzen, Nur Widget).
- Docker-Setup für die lokale Entwicklung aktualisiert.

---

# 4.1.3

_Veröffentlicht am 2025-10-16_

**Verbesserungen**

- Release-Workflow konsistenter gestaltet.
- Docker-Image-Referenz aktualisiert.

---

# 2.0.2

_Veröffentlicht am 2023-11-15_

**Fehlerbehebungen**

- Fehler in der Steuerberechnung behoben.

---

# 2.0.1

_Veröffentlicht am 2023-08-21_

**Fehlerbehebungen**

- Fehler in der Steuerberechnung behoben.

---

# 2.0.0

_Veröffentlicht am 2023-06-07_

**Neue Funktionen**

- Unterstützung für Shopware 6.5 ergänzt.

---

# 1.0.17

_Veröffentlicht am 2023-05-02_

**Neue Funktionen**

- Neuberechnung der Versandkosten ergänzt.

---

# 1.0.13

_Veröffentlicht am 2023-03-20_

**Neue Funktionen**

- Mobile Darstellung ergänzt.

---

# 1.0.12

_Veröffentlicht am 2023-02-23_

**Neue Funktionen**

- SVG-Flaggen für die Länderauswahl hinzugefügt.

---

# 1.0.11

_Veröffentlicht am 2023-02-09_

**Verbesserungen**

- Schalter für Flaggen und Länderdarstellung ergänzt.

---

# 1.0.9

_Veröffentlicht am 2022-09-13_

**Verbesserungen**

- Unterstützung für ZeobvBundleProducts (gebundelte Produkte) ergänzt.

---

# 1.0.7

_Veröffentlicht am 2022-07-21_

**Neue Funktionen**

- Erste offizielle Veröffentlichung.
