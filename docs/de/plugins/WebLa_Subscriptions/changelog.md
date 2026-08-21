**Änderungsprotokoll — WebLa Subscription Plugin**

Alle wichtigen Änderungen am WebLa Subscription Plugin für Endbenutzer.

---

# 1.10.0

_Veröffentlicht am 2026-08-21_

**Verbesserungen**

- Zahlungen enthalten jetzt die Shopware-Bestellnummer. Eine Bestellung lässt sich dadurch direkt im Mollie-Dashboard finden, statt sie über Betrag und Datum zuordnen zu müssen.
- Die mitgelieferte Mollie-Bibliothek wurde auf die aktuelle Version aktualisiert.

# 1.9.1

_Veröffentlicht am 2026-08-06_

**Fehlerbehebungen**

- Verlängerungen schlagen nicht mehr fehl, wenn die Verfügbarkeit eines Produkts über eine Regel gesteuert wird. Der Warenkorb der Verlängerung wurde ohne initialisiertes Regelwerk aufgebaut, wodurch ein per Regel freigegebenes Produkt als nicht verfügbar galt und die Verlängerung mit einem Warenkorbfehler abgebrochen wurde, obwohl das Produkt aktiv und im Shop bestellbar war. Betroffene Abonnements verlängern sich wieder normal.
- Eine fehlgeschlagene Verlängerung nennt jetzt das betroffene Produkt im Protokoll statt einer internen Kennung, die an keiner anderen Stelle auftauchte. Die Ursache eines Fehlers lässt sich damit ohne Rätselraten nachvollziehen.

**Verbesserungen**

- Die Verlängerungsaufgabe läuft jetzt zweimal täglich statt einmal, wodurch ein fällig gewordenes Abonnement früher berücksichtigt wird.

# 1.9.0

_Veröffentlicht am 2026-07-27_

**Neue Funktionen**

- Änderungen an Abonnements werden jetzt protokolliert. Jede Änderung an einem Abonnement wird zusammen mit dem auslösenden Benutzer oder der Integration in einem Verlaufseintrag festgehalten — auch dann, wenn sie außerhalb der Plugin-Oberfläche erfolgt, etwa über die API oder einen Import. Bisher hinterließ eine solche Änderung keinerlei Spur, sodass sich im Nachhinein nicht mehr nachvollziehen ließ, wie ein Abonnement zu unerwarteten Einstellungen gekommen war.

**Fehlerbehebungen**

- Automatische Verlängerungen schlagen nicht mehr fehl, wenn die Nachrichtenverarbeitung über den Admin-Worker läuft. In dieser Konstellation lief eine Verlängerung innerhalb einer Administrations-Anfrage, wodurch Erweiterungen, die für die Storefront entwickelt wurden, die Verlängerung mit einem Fehler abbrachen. Betroffene Abonnements scheiterten bei jedem Versuch erneut, bis es auffiel.
- Eine fehlgeschlagene wiederkehrende Zahlung erzeugt nicht mehr bei jedem Versuch eine neue unbezahlte Bestellung. Die Verlängerungsbestellung wird vor dem Zahlungseinzug angelegt, sodass eine abgelehnte oder unmögliche Zahlung das Abonnement bisher weiterhin als fällig zurückließ und der nächste Lauf eine weitere Bestellung für denselben Zeitraum anlegte. Das Abonnement wird jetzt markiert und der Kunde benachrichtigt, genau wie bei einer fehlgeschlagenen Lastschrift.
- Abonnements speichern jetzt die Zahlungsart, mit der tatsächlich bezahlt wurde. Brach ein Kunde beim Zahlungsanbieter ab und schloss die Bestellung mit einer anderen Zahlungsart ab, behielt das Abonnement die zuerst gewählte Zahlungsart — die Verlängerung suchte dann nach einer Zahlungsfreigabe, die nie erteilt worden war.
- Wiederkehrende Zahlungen scheitern nicht mehr bei Kunden, deren Zahlungsfreigabe gespeichert wurde, während sie noch bestätigt wurde. Eine solche Freigabe wurde danach nie aktualisiert, sodass jede spätere Verlängerung meldete, es liege keine gültige Freigabe vor.
- Verkaufskanäle mit eigenen Mollie-Zugangsdaten speichern Zahlungsfreigaben jetzt korrekt. Die Bestätigungs-Rückmeldung verwendete die globalen Zugangsdaten, wodurch die Freigabe unbemerkt verloren ging und spätere Verlängerungen fehlschlugen.
- Eine Verlängerung kann das nächste Verlängerungsdatum nicht mehr in die Vergangenheit setzen. Ein Abonnement, dessen Datum zurückgefallen war, wurde einmal pro Intervall belastet, bis es aufgeholt hatte.
- Die Intervalländerung verhält sich in der Administration und im Kundenkonto jetzt identisch und bleibt auch dann korrekt, wenn Abonnements auf einen gemeinsamen Liefertermin zusammengelegt oder ein Datum manuell korrigiert wurde.
- Das Verlängerungsprotokoll weist bewusst übersprungene Abonnements jetzt als übersprungen aus, statt sie als erfolgreich verarbeitet zu zählen.
- Wird eine Intervalländerung eines Kunden abgelehnt, etwa weil sie das konfigurierte Maximum überschreitet, wird der Grund jetzt protokolliert statt verworfen.

# 1.8.0

_Veröffentlicht am 2026-07-23_

**Neue Funktionen**

- Neue Einstellung „Kombination des Abo-Rabatts mit Aktionen verhindern". Ist sie aktiviert, lassen sich Rabattcodes nicht mehr mit einem Abonnement kombinieren: Gibt ein Kunde in einem Warenkorb mit Abo einen Code ein, erscheint ein Hinweis und der Code wird nicht angewendet — der Bestellvorgang läuft aber normal weiter. Die Einstellung ist standardmäßig deaktiviert, das bisherige Verhalten (Rabattcodes und Abo-Rabatt sind kombinierbar) bleibt also unverändert, und sie ist je Verkaufskanal konfigurierbar.

# 1.7.5

_Veröffentlicht am 2026-07-22_

**Fehlerbehebungen**

- Automatische (systemseitig ausgelöste) Abo-Verlängerungen wenden den Abo-Rabatt wieder an. Zuvor wurden diese Verlängerungsbestellungen zum vollen Preis berechnet, obwohl die ursprüngliche Bestellung den Rabatt erhalten hatte.

**Verbesserungen**

- Entfernen der ungenutzten Standard-Treuerabatt-Stufen. Sie hatten keine Verwaltungsoberfläche und keinen Einfluss auf die Preise; der Verlängerungsrabatt entspricht jetzt exakt dem Rabatt der ursprünglichen Bestellung.

# 1.7.4

_Veröffentlicht am 2026-07-20_

**Fehlerbehebungen**

- Behoben: Die Schaltflächen „Ändern“ neben Zahlungsart und Intervall in der Abonnement-Detailansicht saßen unterhalb des zugehörigen Feldes statt auf gleicher Höhe.

# 1.7.3

_Veröffentlicht am 2026-07-20_

**Fehlerbehebungen**

- Behoben: Abonnements blieben nach erfolgreicher Zahlung im Status „Zahlung ausstehend“. Enthielt eine Bestellung Produkte mit unterschiedlichen Lieferintervallen, legte das Plugin pro Intervall ein eigenes Abonnement an, aktivierte aber nur eines davon — die übrigen verblieben dauerhaft im ausstehenden Status. Fehlgeschlagene und abgebrochene Zahlungen waren gleichermaßen betroffen und stornieren nun alle Abonnements der Bestellung.
- Behoben: Die nächste Verlängerung wurde nicht angepasst, wenn das Lieferintervall in der Administration geändert wurde. Eine Intervalländerung berechnet den anstehenden Verlängerungstermin jetzt ausgehend von der letzten Verlängerung neu — ein von 2 auf 8 Wochen umgestelltes Abonnement wird damit 8 Wochen nach der letzten Lieferung fällig statt am alten Termin.
- Behoben: Bei Abonnements mit PayPal (Mollie) blieb die Auswahl der Zahlungsart leer. PayPal fehlte sowohl in der Detailansicht als auch im Listenfilter unter den wählbaren Zahlungsarten, obwohl die Zahlungsart selbst funktionierte.

**Verbesserungen**

- Die Schaltflächen „Ändern“ neben Zahlungsart und Intervall erscheinen und verschwinden beim Bearbeiten nicht mehr. Sie sind jetzt dauerhaft sichtbar und bleiben deaktiviert, bis der Wert tatsächlich geändert wurde; die Felder ziehen sich außerdem nicht mehr über die gesamte Spaltenbreite.

# 1.7.2

_Veröffentlicht am 2026-06-29_

**Fehlerbehebungen**

- Entfernt einen irreführenden Hinweis „Für Abonnement-Artikel ist eine Abo-Zahlungsart erforderlich", der auf der Warenkorb- und Checkout-Seite erschien, obwohl bereits die richtige Abo-Zahlungsart ausgewählt war.

# 1.7.1

_Veröffentlicht am 2026-06-29_

**Fehlerbehebungen**

- Behoben: schwerwiegender Startfehler aus 1.7.0, durch den ein interner Zahlungsdienst falsch referenziert wurde und Storefront sowie Admin nicht luden. Die automatische Zahlartenauswahl im Checkout funktioniert wieder.

# 1.7.0

_Veröffentlicht am 2026-06-29_

**Neue Funktionen**

- Die passende Zahlungsart wird im Checkout jetzt automatisch ausgewählt, je nachdem ob der Warenkorb ein Abonnement enthält. Kunden haben dadurch keine leere Zahlartenauswahl mehr, und eine reguläre Bestellung kann nicht mehr mit einer reinen Abo-Zahlart abgeschlossen werden (und umgekehrt).
- PayPal- und Apple-Pay-Express-Buttons werden ausgeblendet, solange ein Abo-Artikel im Warenkorb liegt (Warenkorb, Off-Canvas-Warenkorb und Registrierungsseite). Der Express-Checkout kann keine Abo-Zahlung einrichten – das Ausblenden verhindert defekte Abonnements.

**Fehlerbehebungen**

- Behoben: Fehler „Zahlungstoken ungültig", der beim Abschluss einer Nicht-Abo-Bestellung auftreten konnte, nachdem ein vorheriger Abo-Kauf eine Abo-Zahlart als Standard des Kunden hinterlegt hatte.

**Verbesserungen**

- Die Abo-Kontoseiten werden jetzt von der Suchmaschinen-Indexierung ausgeschlossen.

# 1.6.0

_Veröffentlicht am 2026-06-12_

**Neue Funktionen**

- Benachrichtigungs-E-Mails für Kündigung und Reaktivierung von Abonnements. Kunden werden jetzt per E-Mail informiert, wenn ein Abonnement gekündigt oder reaktiviert wird (über das Backend oder das Kundenkonto). Die benötigten Flow-Builder-Flows und E-Mail-Vorlagen werden automatisch angelegt.
- Weitere Benachrichtigungs-Trigger stehen im Flow Builder zur Verfügung: Verlängerungserinnerung, Verlängert, Preis geändert, Zahlung fehlgeschlagen, Produkt entfernt und Artikel nicht vorrätig. Die situationsbezogenen Trigger (Verlängert, Produkt entfernt, Artikel nicht vorrätig) werden als inaktive Flows angelegt, die Sie bei Bedarf aktivieren können.
- Lesbare Trigger-Namen: Die Abo-Trigger werden im Flow Builder jetzt mit deutschen und englischen Bezeichnungen statt technischer Schlüssel angezeigt.

**Fehlerbehebungen**

- Benachrichtigungs-E-Mails wurden nie versendet: Die Events waren nicht als Flow-Builder-Trigger registriert, sodass jeder Flow „Unbekannter Trigger" anzeigte und deaktiviert wurde. Die Trigger werden nun korrekt registriert und die Flows funktionieren.
- Produktdetailseite: doppelte Einheiten-/Inhaltszeile für Produkte mit Verkaufseinheit ohne Grundpreis unter Shopware 6.6 entfernt.

---

# 1.5.1

_Veröffentlicht am 2026-06-10_

**Fehlerbehebungen**

- **Doppelter Grundpreis**: Die Grundpreiszeile (z. B. „Inhalt: 0.5 kg (40,00 € / 1 kg)") erscheint unter dem Produktpreis auf der Detailseite nicht mehr doppelt, wenn die dynamische Abo-Preisanzeige aktiv ist. Unter Shopware 6.7 wurde die Preiseinheit in eine eigene Vorlage verschoben, wodurch das Plugin die Zeile ein zweites Mal ausgegeben hat.

---

# 1.5.0

_Veröffentlicht am 2026-06-10_

**Neue Funktionen**

- **Dynamischer Hauptpreis**: Der Produktpreis im Buy-Widget wechselt jetzt live zwischen dem regulären Preis und dem rabattierten Abo-Preis, wenn der Kunde zwischen den Kacheln „Einmalkauf" und „Abonnement" wechselt. Die neue Einstellung `dynamicPriceDisplayEnabled` ermöglicht es, dieses Verhalten bei Bedarf zu deaktivieren.
- **Konfigurierbarer Standard-Kauftyp**: Die neue Einstellung `defaultPurchaseType` legt fest, welche Kachel beim Laden der Produktdetailseite vorausgewählt ist — Abonnement oder Einmalkauf. Produkte, die als „Nur als Abonnement" markiert sind, werden unabhängig von dieser Einstellung immer mit der Abo-Kachel vorausgewählt.
- **Zahlungsart-Lebenszyklus**: Die abo-spezifischen Zahlungsarten des Plugins werden automatisch deaktiviert, wenn das Plugin im Shopware-Admin deaktiviert wird, und beim Aktivieren des Plugins wieder aktiviert. So erscheinen die Methoden nicht im Checkout, solange das Plugin nicht aktiv ist.

**Fehlerbehebungen**

- **Kachelauswahl per Klick**: Ein Klick auf eine beliebige Stelle der Kauftyp-Kachel wählt diese jetzt korrekt aus. Zuvor wurde die Auswahl nur registriert, wenn direkt auf den Radiobutton geklickt wurde.
- **Nur-Abonnement-Kachelstatus**: Produkte, die als „Nur als Abonnement" konfiguriert sind, zeigen die Abo-Kachel beim Seitenaufruf korrekt als ausgewählt an. Der aktive Zustand wurde in der vorherigen Version fälschlicherweise entfernt.
- **Rabatt-Fallback im Warenkorb**: Abo-Bestellungen, die den Rabattpfad „Alle Artikel mit gleicher Option" verwenden, greifen nun korrekt auf den globalen Rabattprozentsatz zurück, wenn eine einzelne Option keinen eigenen Rabatt konfiguriert hat. Zuvor erhielten diese Bestellungen stattdessen 0 % Rabatt.

---

# 1.3.5

_Veröffentlicht am 2026-05-13_

**Neue Funktionen**

- **Abonnement-Vererbung für Varianten**: Eine Produktvariante übernimmt die Abonnement-Optionen des Hauptprodukts jetzt automatisch, solange sie keine eigenen Optionen besitzt. Die Karte in der Produktdetailseite im Admin zeigt den Vererbungszustand klar an und bietet eine Aktion „Für diese Variante überschreiben", die die Optionen des Hauptprodukts in eigene, editierbare Zeilen kopiert, sowie eine Aktion „Auf Hauptprodukt zurücksetzen", die die Überschreibung wieder verwirft.

**Fehlerbehebungen**

- **Variantenanzeige in der Storefront**: Der Abonnement-Auswähler erscheint nun auch auf der Produktdetailseite einer Variante, wenn das Hauptprodukt Abonnement-Optionen konfiguriert hat. Bisher wurde ausschließlich nach den Optionen der Variante gesucht und auf Variantenseiten nichts angezeigt.
- **Warenkorb-Validierung für Varianten**: Das Hinzufügen einer Varianten-Subscription in den Warenkorb verwirft die Subscription-Information nicht mehr, wenn die zugehörige Option dem Hauptprodukt gehört. Der Warenkorb-Validator akzeptiert nun sowohl die eigene Option der Variante als auch eine vererbte Option vom Hauptprodukt.
- **Rabattsemantik pro Option**: Ein Abonnement, dessen Rabatt (%) auf `0` steht oder leer ist, wendet jetzt keinen Rabatt mehr in Storefront, Warenkorb und Verlängerungen an. Die globale Plugin-Konfiguration `aboDiscountPercent` greift weiterhin für warenkorbweite Abonnements, füllt aber keine leeren Werte pro Option mehr auf.
- **Buy-Widget-Layout**: Mengeneingabe und „In den Warenkorb"-Button bleiben jetzt nebeneinander in derselben Zeile (Shopware-Standardlayout), auch wenn der Abonnement-Auswähler angezeigt wird. Der Auswähler liegt in einer eigenen Zeile darüber.

**Verbesserungen**

- Einmalige Migration `Migration1742000000BackfillNullDiscountPercent` setzt vorhandene `NULL`-Werte im Rabatt-Feld pro Option auf `0`, sodass Admin-Anzeige und Storefront-Verhalten ohne manuelles Nacharbeiten übereinstimmen.

---

# 1.3.4

_Veröffentlicht am 2026-05-13_

**Fehlerbehebungen**

- **DAL-Entitätsfelder**: Die Entity-Klassen (`SubscriptionEntity`, `SubscriptionItemEntity`, `SubscriptionOrderEntity`, `FreeItemEntity`) wurden an die Spaltennamen ihrer DAL-Definitionen angeglichen. Das Framework meldet die fehlenden Reference-Version-Felder nicht mehr.
- **Mollie-Webhook-Antwort**: Der Mollie-Webhook-Controller liefert jetzt einen nicht-leeren `200 OK`-Body. Mollie wertet ausschließlich den Statuscode aus, das Verhalten ändert sich nicht.

**Verbesserungen**

- **Überschriftenhierarchie im Storefront**: Bare `<h1>` – `<h6>`-Tags in den Vorlagen des Abonnement-Portals wurden durch `<span class="h*">` ersetzt, damit das Plugin keine eigene Überschriftenhierarchie über das Shop-Theme hinzufügt.
- **Barrierefreie Links**: Fehlende `title`-Attribute an Anker-Tags im Abonnement-Portal wurden für Hilfstechnologien ergänzt.

---

# 1.3.3

_Veröffentlicht am 2026-05-13_

**Fehlerbehebungen**

- **Zahlartenfilter im Warenkorb (Shopware 6.6)**: Die Zahlartenauswahl auf der Warenkorbseite blendet jetzt Abonnement-Zahlarten aus, wenn kein Abonnement im Warenkorb liegt — und Standard-Zahlarten, wenn ein Abonnement im Warenkorb ist. Bisher griff der Filter nur auf der Bestellabschluss- und Bestelländerungs-Seite, sodass die Warenkorb-Auswahl ungefiltert blieb.
- **Korrekte Erkennung warenkorbweiter Abonnements**: Bei aktiviertem warenkorbweitem Abonnement wird der Warenkorb nun korrekt als Abonnement-Bestellung erkannt. Die vorherige Erkennung nutzte `_subscriptionOptionId`, das bei warenkorbweiten Abos `null` ist — Abonnement-Zahlarten wurden dadurch fälschlich ausgeblendet.
- **Filterung im Gastwarenkorb**: Die abonnementabhängige Zahlartenfilterung greift jetzt auch im Gastwarenkorb. Der SEPA-Mandatsfilter setzt weiterhin einen eingeloggten Kunden voraus.

**Verbesserungen**

- **Kompatibilität auf der Produktdetailseite**: Der Abonnement-Intervallauswähler auf der Produktdetailseite wird nun in einen engeren, seltener von Drittanbietern überschriebenen Twig-Block (`buy_widget_buy_product_buy_info`) eingehängt. Dadurch sinkt das Risiko, dass andere Plugins oder Themes die Buy-Widget-Blöcke ohne `parent()` ersetzen und damit unseren Auswähler entfernen. Zusätzlich wird die Template-Priorität des Plugins erhöht, sodass unsere Erweiterungen Erweiterungen mit Standardpriorität ummanteln. Die Position des Auswählers verschiebt sich zwischen Mengenfeld und Kauf-Button.

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
