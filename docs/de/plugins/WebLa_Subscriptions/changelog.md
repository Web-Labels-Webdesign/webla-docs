**Änderungsprotokoll — WebLa Subscription Plugin**

Alle wichtigen Änderungen am WebLa Subscription Plugin für Endbenutzer.

---

# 1.3.2

_Veröffentlicht am 2026-04-24_

**Fehlerbehebungen**

- **PHP 8.1 Deprecation in gebündelter Mollie-Bibliothek**: Signatur von `CreatePaymentRefundRequest::__construct()` korrigiert — der optionale Parameter `$description` stand vor dem erforderlichen `$amount`, was unter PHP 8.1+ eine Deprecation-Warnung auslöste und die automatisierte Shopware-Store-Prüfung blockierte.

---

# 1.3.1

_Veröffentlicht am 2026-04-24_

**Fehlerbehebungen**

- **Mollie-PayPal-Label im Admin**: Fehlende Übersetzung für `webla_subscription_mollie_paypal` in den englischen und deutschen Admin-Locales ergänzt. Abonnement-Liste und Detailansicht zeigen nun „PayPal (Mollie)" anstelle des rohen Snippet-Keys.

---

# 1.3.0

_Veröffentlicht am 2026-04-21_

**Neue Funktionen**

- **Warenkorb-Abonnement**: Neuer Intervall-Auswähler im gesamten Checkout (Warenkorbseite, Offcanvas-Warenkorb, Adress-/Registrierungsschritt, Bestellabschluss), der den kompletten Warenkorb in ein Abonnement umwandelt. Wenn aktiviert, werden alle Produkt-Line-Items — auch ohne produktspezifische Abo-Optionen — auf das gewählte Intervall gesetzt. Die Auswahl wird als Cart-Extension gespeichert und übersteht Neuberechnungen. Der Offcanvas aktualisiert sich per AJAX ohne Seitenreload, analog zur Gutschein-Eingabe im Core.
- **Editor für Warenkorb-Intervalle**: Neue Plugin-Konfiguration unter *Abonnement-Intervalle* mit eigenem Admin-Editor für die Liste der verfügbaren Warenkorb-Intervalle. Jeder Eintrag enthält Wochen, Bezeichnung und Rabatt-Prozentsatz. Kompatibel mit Shopware 6.6 (`sw-*` Komponenten) und 6.7 (`mt-*` Komponenten) via Laufzeiterkennung.

**Verbesserungen**

- **Zahlungsarten-Karte**: Felder neu sortiert — abo-fähige Mollie-Methoden (Karte, SEPA, PayPal) stehen vor Nicht-Wiederholungsmethoden (Rechnung, Vorkasse).
- **Versandart für Verlängerungen**: Von *Zahlungsarten* nach *Verlängerungsverhalten* verschoben, wo sie semantisch hingehört. Hilfetext präzisiert das Fallback-Verhalten auf die Erstbestellung.

---

# 1.2.0

_Veröffentlicht am 2026-04-13_

**Neue Funktionen**

- **Mollie PayPal als Abonnement-Zahlungsart**: `webla_subscription_mollie_paypal` als wiederkehrungsfähige Mollie-Zahlungsart hinzugefügt. Abonnements können nun über eine PayPal-Einzugsermächtigung via Mollie-Mandat-API abgebucht werden. Standardmäßig inaktiv registriert — erfordert aktivierte PayPal Reference Transactions in der Mollie/PayPal-Verbindung des Händlers vor Aktivierung.
- **Versandart aus Erstbestellung bei Verlängerung**: Verlängerungs-Warenkörbe übernehmen nun die Versandart aus der ursprünglichen Abo-Bestellung, sofern diese noch aktiv ist. Andernfalls wird auf die konfigurierte `renewalShippingMethodId` zurückgegriffen. Kunden behalten damit ihre ursprüngliche Versandoption bei Verlängerungen.

---

# 1.1.5

_Veröffentlicht am 2026-03-31_

**Fehlerbehebungen**

- **Eigenständiger Mollie-Betrieb**: Mollie API 3.9.0 unter eigenem Namespace `WebLa\Subscriptions\Vendor\Mollie\Api\` gebündelt, sodass das Plugin vollständig ohne das offizielle Mollie-Shopware-Plugin funktioniert. Bei gleichzeitiger Installation nutzt jedes Plugin seine eigene isolierte Kopie — keine Konflikte. Makefile-Target (`make mollie-vendor`) zum Aktualisieren der Kopie hinzugefügt.

---

# 1.1.4

_Veröffentlicht am 2026-03-31_

**Fehlerbehebungen**

- **Mollie-Abhängigkeitskonflikt**: `mollie/mollie-api-php` komplett aus Composer-Require entfernt. Das offizielle Mollie-Shopware-Plugin bündelt eine eigene Kopie in `vendor_manual/` mit anderen Konstantennamen — die Abhängigkeit in unserem Require verursachte Versionskonflikte bei der Installation. Mollie-API-Klassen werden nun zur Laufzeit vom Mollie-Plugin bereitgestellt.
- **Mollie als optionale Abhängigkeit**: `MollieOptionalCompilerPass` hinzugefügt, der Mollie-bezogene Services entfernt wenn die Mollie-API-Bibliothek nicht vorhanden ist. Rechnungs- und Vorkasse-Abonnements funktionieren ohne das Mollie-Plugin.
- **Sequenztyp-Konstanten**: `SequenceType::FIRST`/`RECURRING`-Konstanten durch String-Literale `'first'`/`'recurring'` ersetzt für Kompatibilität mit der gebündelten Bibliotheksversion des Mollie-Plugins.

---

# 1.1.3

_Veröffentlicht am 2026-03-31_

**Fehlerbehebungen**

- **Payment-Handler Kompilierfehler auf Shopware < 6.6.5**: Alle Payment-Handler mit bedingten `class_exists()`-Basisklassen und einem gemeinsamen Logic-Trait umstrukturiert, sodass neue Methodensignaturen auf 6.6.5+/6.7 und Legacy-Interface-Signaturen auf 6.6.0–6.6.4 ohne PHP-Kompilierfehler verwendet werden.

---

# 1.1.2

_Veröffentlicht am 2026-03-31_

**Fehlerbehebungen**

- **Shopware 6.6.0–6.6.4 Kompatibilität**: Payment-Handler nutzen nun `class_exists()`-basierte Basisklassen (wie das offizielle Mollie-Plugin) statt `AbstractPaymentHandler` direkt zu erweitern, das erst ab 6.6.5 existiert.
- **Doppelte Payment-Handler-Tags**: Services registrieren sowohl `shopware.payment.method` (6.6.5+/6.7) als auch Legacy-Tags `shopware.payment.method.async`/`sync` (6.6.0–6.6.4).

---

# 1.1.1

_Veröffentlicht am 2026-03-31_

**Fehlerbehebungen**

- **Mollie API Versionskonflikt**: `mollie/mollie-api-php`-Abhängigkeit von `^3.9` auf `^2.0 || ^3.0` erweitert, um Konflikte mit dem offiziellen Mollie-Shopware-Plugin zu vermeiden (`Undefined constant PaymentMethod::BIZUM`).
- **Deinstallation fehlgeschlagen**: Entfernung von Custom Fields nutzt nun kaskadierende Löschung statt direkter SQL-Abfrage auf nicht existierende Spalte `custom_field_set_id` in Shopware 6.7.

---

# 1.1.0

_Veröffentlicht am 2026-03-31_

**Neue Funktionen**

- **Optionsspezifischer Rabatt**: Produkt-Abonnementoptionen können nun einen eigenen Rabattprozentsatz haben, der den globalen Standard überschreibt. NULL = global. Anzeige im Admin-Produktkarten und Storefront-Selektor.
- **Kundeneinstellungen-Lebenszyklus**: Kundenabonnement-Einstellungen werden automatisch beim ersten Abonnement erstellt. SEPA-Sperre wird automatisch bei Erreichen der maximalen Fehlversuche gesetzt und beim Admin-Entsperren aufgehoben.
- **Kundeneinstellungen Admin-UI**: Admin-Kundendetailseite zeigt nun Schalter für „Intervall-Änderung erlaubt" und „SEPA gesperrt" pro Kunde.
- **Kundeneinstellungen API**: Neue GET/PATCH-Endpunkte zur Verwaltung kundenspezifischer Abonnementeinstellungen.
- **Webhook-URL-Platzhalter**: Plugin-Konfiguration zeigt die erwartete Webhook-URL-Struktur als Platzhaltertext.

**Fehlerbehebungen**

- **Kundendetail-Karte**: Template-Block-Name korrigiert, damit die Abonnementkarte tatsächlich auf der Kundendetailseite erscheint.
- **Kundenkarte Zahlungsart**: Zahlungsart-Spalte zeigt nun übersetzte Namen statt technischer Bezeichnungen.
- **Artikel-hinzufügen-Route**: Fehlende `seo => false`-Option bei der Storefront-Route behoben, die 404-Fehler verursachte.
- **Storefront-Quellcode-Tracking**: Fehlerhafte `.gitignore`-Regel entfernt, die das Storefront-Controller-Verzeichnis ausschloss.

---

# 1.0.1

_Veröffentlicht am 2026-03-31_

**Fehlerbehebungen**

- **Shopware 6.7 Payment Handler**: Einheitliches `shopware.payment.method` Service-Tag statt veralteter `shopware.payment.method.async`/`shopware.payment.method.sync` Tags, behebt `CHECKOUT__UNKNOWN_PAYMENT_METHOD`-Fehler beim Checkout.
- **Shopware 6.7 Admin-Eingabefelder**: `v-model` durch `:value`/`@update:value` bei veralteten Komponenten ersetzt, damit Zahlungsart, Intervall, Notizen und Kündigungsgrund korrekt angezeigt werden.
- **Admin-Detailansicht Header**: Nur relevante Aktions-Buttons für den aktuellen Abonnement-Status anzeigen statt alle Buttons deaktiviert darzustellen.
- **Admin-Detailansicht Header Abstand**: Abstand zwischen Smart-Bar-Aktions-Buttons hinzugefügt.
- **Admin-Artikeltabelle**: `sw-number-field` durch kompaktes natives Eingabefeld für Mengenspalte ersetzt, um vertikale Dehnung zu beheben.
- **Admin-Artikeltabelle Spaltenbreiten**: Explizite Breiten für Mengen- und Einzelpreisspalte gesetzt.
- **Admin-Dashboard Statusüberlauf**: Status-Raster von fester 7-Spalten-Darstellung auf flexibles Wrapping umgestellt.
- **Produktkarte Leerzustand**: Leerzustand mit gestricheltem Rahmen gestaltet, Speichern-Button ausgeblendet wenn keine neuen Optionen vorhanden.
- **Produktkarte Toggle-Feedback**: Erfolgsmeldung beim Umschalten des „Nur als Abonnement"-Schalters.

---

# 1.0.0

_Veröffentlicht am 2026-03-30_

**Neue Funktionen**

- **Abonnement-System**: Vollständiges Abonnement-System für Shopware 6 mit automatischen Verlängerungen.
- **Kundenportal**: Self-Service-Bereich im Kundenkonto zum Verwalten von Abonnements (pausieren, kündigen, Intervall ändern, Artikel verwalten).
- **Admin-Dashboard**: Übersicht mit KPIs — aktive Abonnenten, monatlicher Umsatz, anstehende Verlängerungen, Kündigungsrate.
- **Admin-Verwaltung**: Liste aller Abonnements mit Filtern, Detailansicht mit Bearbeitungsmöglichkeiten.
- **Mollie-Integration**: Automatische wiederkehrende Zahlungen über Kreditkarte und SEPA-Lastschrift.
- **Offline-Zahlungsarten**: Rechnung und Vorkasse als alternative Zahlungsarten.
- **Flexible Intervalle**: Konfigurierbare Lieferintervalle von 1 bis 8 Wochen.
- **Abonnement-Rabatte**: Prozentualer Basisrabatt plus Treue-Staffeln.
- **Gratisartikel**: Kostenlose Produkte bei Verlängerungen.
- **Produktkonfiguration**: Abonnement-Optionen direkt am Produkt, inklusive „Nur als Abonnement"-Modus.
- **E-Mail-Benachrichtigungen**: Verlängerungserinnerung, Kündigung, SEPA-Fehler, Preisänderung.
- **Lieferungen zusammenlegen**: Mehrere Abonnements auf ein gemeinsames Datum synchronisieren.
- **Zahlungsstatus-Abfrage**: Automatische Statusaktualisierung über Mollie-Polling.
- **Vorkasse-Überwachung**: Automatische Erkennung ausstehender Vorkasse-Zahlungen.
- **Änderungsprotokoll**: Lückenlose Nachverfolgung aller Änderungen an Abonnements.
- **Warenkorb-Integration**: Abonnement-Hinweise und Zahlungsart-Filterung im Checkout.

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                                |
| ------- | ---------------- | --------------------------------------------------------- |
| 1.3.2   | 2026-04-24       | PHP-8.1-Deprecation in gebündelter Mollie-Bibliothek      |
| 1.3.1   | 2026-04-24       | Store-Release, PayPal-Admin-Label-Korrektur               |
| 1.3.0   | 2026-04-21       | Warenkorb-Abonnement-Selektor                             |
| 1.2.0   | 2026-04-13       | Mollie PayPal + Versandart aus Erstbestellung             |
| 1.1.5   | 2026-03-31       | Eigenständiger Mollie-Betrieb via Namespace-Scoping       |
| 1.1.4   | 2026-03-31       | Mollie optionale Abhängigkeit, keine Versionskonflikte    |
| 1.1.3   | 2026-03-31       | Payment-Handler Kompilierfehler auf SW < 6.6.5 behoben    |
| 1.1.2   | 2026-03-31       | Shopware 6.6.0+ Payment-Handler-Kompatibilität            |
| 1.1.1   | 2026-03-31       | Mollie-Versionskonflikt und Deinstallation behoben         |
| 1.1.0   | 2026-03-31       | Optionsrabatte, Kundeneinstellungen, Admin-Korrekturen    |
| 1.0.1   | 2026-03-31       | Shopware 6.7 Kompatibilitätskorrekturen                    |
| 1.0.0   | 2026-03-30       | Erstveröffentlichung mit vollem Funktionsumfang           |

---

## Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version |
| -------------- | ---------------- | ----------- |
| 1.3.2          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.3.1          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.3.0          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.2.0          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.5          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.4          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.3          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.2          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.1          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.1.0          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.0.1          | 6.6.0 – 6.7.x    | 8.1+        |
| 1.0.0          | 6.6.0 – 6.7.x    | 8.1+        |
