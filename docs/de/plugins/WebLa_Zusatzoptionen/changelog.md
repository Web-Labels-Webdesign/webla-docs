**Änderungsprotokoll — Zusatzoptionen Plugin**

Alle wichtigen Änderungen am Zusatzoptionen Plugin für Endbenutzer.

---

# 5.7.3

_Veröffentlicht am 2026-08-19_

**Fehlerbehebungen**

- Die Mehrwertsteuer eines prozentualen Rabatts war falsch, sobald das rabattierte Produkt eine Option trägt. Optionen sind vom Rabattbetrag bewusst ausgenommen, der Rabatt zog seinen Anteil aber trotzdem aus der Mehrwertsteuer der Option. Dadurch wies die Bestellung zu wenig Mehrwertsteuer und zu viel Netto aus. Bei einer 40-Prozent-Aktion auf ein Produkt zu 7.604,00 € mit einer Option zu 20,00 € standen 486,91 € Mehrwertsteuer statt 485,63 €. Betroffen sind auch Verkaufskanäle mit vertikaler Steuerberechnung: dort wirkte die Bestellsumme korrekt, während die Positionen dahinter und damit die Rechnung es nicht waren.

---

# 5.7.2

_Veröffentlicht am 2026-08-19_

**Fehlerbehebungen**

- Die Mehrwertsteuer einer Bestellung stimmte in Verkaufskanälen mit horizontaler Steuerberechnung nicht mit der Summe ihrer eigenen Positionen überein. Der Optionspreis wurde in die Produktposition eingerechnet und als ein Betrag versteuert, während die Bestellung jede Option als eigene Position speichert. Beides rundete unterschiedlich, die Bestellsumme lag um einen Cent daneben.
- Statt des Warenkorbs erschien eine Fehlerseite, wenn das Produkt hinter einer Option nicht auflösbar ist, etwa nachdem dessen Versandart aus dem Optionsset entfernt wurde oder das Produkt deaktiviert, ausverkauft oder ausgeblendet ist. Die Option wird jetzt übersprungen.
- Zahlungsarten lehnten Bestellungen ab, solange „Positionen neu berechnen" auf „Überspringen" steht. Optionspreise wurden in der flachen Positionsliste der Bestellung doppelt gezählt, wodurch Mollie, Klarna und Adyen einen höheren Betrag als die Bestellsumme sahen.

---

# 5.7.1

_Veröffentlicht am 2026-07-13_

**Fehlerbehebungen**

- Behoben, dass das Plugin-Paket unter Shopware 6.7 ein veraltetes Administrations-Bundle auslieferte. Die Einstellung „Auswahl erforderlich" und die Performance-Verbesserung im Produktformular aus 5.7.0 fehlten dadurch in der Administration, bis die Assets manuell neu gebaut wurden. Ein manueller Rebuild ist nicht mehr nötig.

---

# 5.7.0

_Veröffentlicht am 2026-07-10_

**Neue Funktionen**

- **Pflichtauswahl von Optionen**: Ein Optionsset kann nun als „Auswahl erforderlich" markiert werden, wodurch Kunden mindestens eine Option in diesem Set auswählen müssen, bevor das Produkt in den Warenkorb gelegt werden kann. Produkte mit einem erforderlichen Optionsset zeigen in Listen einen Link „Option wählen", der zur Produktseite führt, die gewählte Option kann im Warenkorb nicht entfernt werden (ein Wechsel zu einer anderen Option im selben Set bleibt möglich) und der Checkout wird blockiert, bis eine gültige Auswahl getroffen wurde. Verfügbar sowohl für manuell zugewiesene Optionssets als auch für den Seeder und standardmäßig deaktiviert, sodass bestehende Optionssets nicht betroffen sind.

**Fehlerbehebungen**

- Doppelte Anzeige von Optionen im Warenkorb unter Shopware 6.7.10.0 und neuer verhindert, wo die Plattform die Positions-Unterelemente nun automatisch rendert.

---

# 5.6.0

_Veröffentlicht am 2026-07-01_

**Neue Funktionen**

- **Automatische Bereinigung veralteter Optionen**: Wenn ein Produkt nicht mehr zur dynamischen Produktgruppe eines Seeders passt, werden die automatisch zugewiesenen Optionssets bei der Synchronisierung nun entfernt. So bleiben die Produktoptionen mit Ihren Stream-Regeln im Einklang.
- **Optionales Entfernen für ausgeschlossene Produkte**: Eine neue Einstellung steuert, ob Optionssets von Produkten entfernt werden, die eine Seeder-Produktgruppe verlassen. Standardmäßig deaktiviert, sodass bestehende Zuweisungen unverändert bleiben, sofern Sie es nicht aktivieren.

**Fehlerbehebungen**

- Die Seeder-Synchronisierung wird nun auch für leere Produktgruppen korrekt abgeschlossen, anstatt hängen zu bleiben.
- Das Entfernen von Optionssets betrifft nun nur noch vom Seeder erstellte Sets, wodurch das versehentliche Entfernen manuell zugewiesener Optionen verhindert wird.

---

# 5.5.0

_Veröffentlicht am 2026-06-10_

**Neue Funktionen**

- **Mengenauswahl in derselben Zeile**: Eine neue Anzeige-Einstellung zeigt die Mengenauswahl in derselben Zeile wie die Option an – zwischen Auswahlkästchen und Optionsbezeichnung – statt in einer separaten Zeile darunter. Standardmäßig deaktiviert, sodass bestehende Layouts unverändert bleiben.

**Verbesserungen**

- **Aufgeräumtere Optionszeilen ohne Bild**: Optionszeilen ohne Produktbild reservieren keinen leeren Platz mehr an der Stelle des Bildes, wodurch das Layout kompakter wird.

---

# 5.4.6

_Veröffentlicht am 2026-06-02_

**Fehlerbehebungen**

- **Duplikat-Bereinigung läuft jetzt zuverlässig**: Die in 5.4.5 eingeführte automatische Bereinigung doppelter Optionspreise lief als einmaliger Hintergrundauftrag, der durch das Plugin-Update ausgelöst wurde. In Shops ohne laufenden Task-Worker wurde dieser nie verarbeitet und nie erneut versucht, sodass die Duplikate nie entfernt wurden. Die Bereinigung läuft jetzt als wiederkehrende tägliche geplante Aufgabe, die von selbst fortgesetzt wird, bis der Shop vollständig bereinigt ist. Betroffene Shops werden so ohne manuelles Eingreifen bereinigt.

---

# 5.4.5

_Veröffentlicht am 2026-06-01_

**Fehlerbehebungen**

- **Seeder legte doppelte Optionspreise an**: Behebt ein Problem, bei dem der dynamische Options-Seeder bei jedem Sync-Lauf dieselben Optionspreise erneut anlegte. Dadurch konnten einer einzelnen Option mit der Zeit Millionen von Preiszeilen anwachsen, was Produktseiten und Warenkorb verlangsamte. Preise werden jetzt idempotent geschrieben, und der Seeder synchronisiert unveränderte Produkte nicht mehr bei jedem geplanten Lauf neu.
- **Länderspezifische Alternativprodukte**: Behebt, dass pro Lieferland konfigurierte Alternativprodukte nie angewendet wurden. Ein Wechsel des Lieferlandes wechselt jetzt wieder korrekt zum konfigurierten Alternativprodukt.
- **Automatische Bereinigung vorhandener Duplikate**: Vorhandene doppelte Optionspreise aus älteren Versionen werden nach dem Update automatisch im Hintergrund entfernt, ohne das Update oder die Storefront zu blockieren.

**Verbesserungen**

- **Schnellere Produktdetailseiten und Warenkorb**: Die Optionsverfügbarkeit wird jetzt pro Kundenkontext zwischengespeichert und Produktdaten werden in weniger Datenbankabfragen geladen. Das reduziert spürbar die Ladezeit der Produktdetailseiten, die Wartezeit beim In-den-Warenkorb-Legen und die Datenbanklast in Shops mit vielen Optionen.

---

# 5.4.4

_Veröffentlicht am 2026-05-27_

**Fehlerbehebungen**

- **Aktionsrabatt traf die falsche Warenkorbposition**: Behebt ein Problem, bei dem die Warenkorb-Aktion „10 % Rabatt auf den teuersten Artikel" auf die falsche Position angewendet wurde, sobald eine Position eine Zusatzoption (z. B. eine Versicherung) enthielt. Die Aktion vergleicht die Positionen jetzt anhand des kundensichtbaren Gesamtpreises (Grundprodukt + gewählte Option) — genau wie er im Warenkorb steht — sodass tatsächlich die teuerste Position rabattiert wird. Der Optionspreis selbst bleibt wie bisher vom Rabatt ausgenommen.
- **Stackable-Status wird während der Rabattberechnung nicht mehr verändert**: Behebt einen Nebeneffekt im Promotion-Calculator, der andere Warenkorbpositionen während der Rabattberechnung als nicht-stackable markierte. Eine zweite Aktion im selben Warenkorb konnte dadurch gültige Positionen übergehen.

---

# 5.4.3

_Veröffentlicht am 2026-05-27_

**Fehlerbehebungen**

- **Preisaufschaukeln im Warenkorb beim Umschalten von Optionen**: Behebt ein Problem, bei dem das wiederholte An- und Abwählen einer Option im Warenkorb dazu führte, dass der Preis des Mutterprodukts mit jedem Durchlauf wuchs (z. B. 849,00 → 948,90 → 1.048,80). Das Entfernen der letzten Option aus einer Warenkorbposition setzt den Preis des Mutterprodukts jetzt wieder korrekt auf den Basispreis zurück, sodass ein erneutes Hinzufügen den Optionspreis nicht mehr auf einen bereits erhöhten Gesamtwert addiert.

**Verbesserungen**

- **Zugängliche Akkordeon-Überschriften**: Die wörtliche `<h2>`-Auszeichnung rund um Optionsgruppen-Titel in der Storefront wurde durch einen Container mit Heading-Rolle ersetzt. Damit verschwindet eine ungewollte Überschrift aus der Dokumentstruktur, während Bootstrap-Akkordeon-Styling und Screenreader-Semantik erhalten bleiben.
- **Indexierung der AJAX-Endpunkte**: Alle Antworten der Option-Handler- und Option-Verfügbarkeits-Endpunkte senden jetzt `X-Robots-Tag: noindex, nofollow`, damit sie nicht versehentlich in Suchmaschinen-Indizes auftauchen.
- **Plugin-Anzeigename**: Der Anzeigename des Plugins wurde auf „Produkt Zusatzoptionen" / „Product Additional Options" angepasst (das überflüssige Suffix „Plugin" entfernt), passend zu den Namensrichtlinien des Shopware Stores.

---

# 5.4.2

_Veröffentlicht am 2026-05-19_

**Fehlerbehebungen**

- **Storefront-Absturz nach Update auf 5.4.1**: Behebt einen kritischen Fehler, der die Storefront-Darstellung unter Shopware 6.6 unterbrach („Leider ist etwas schiefgelaufen"). Das Plugin übergab einen dynamischen, konfigurierbaren Icon-Namen an den Icon-Tag von Shopware, den Shopware 6.6 nur als festen, literalen Wert akzeptiert. Das konfigurierbare Icon des Beschreibungs-Tooltips wird jetzt so dargestellt, dass es sowohl unter Shopware 6.6 als auch 6.7 funktioniert.

---

# 5.4.1

_Veröffentlicht am 2026-05-06_

**Fehlerbehebungen**

- **Eingefrorenes Produkt-Speichern in der Administration**: Behebt lange Wartezeiten und blockierte Speichern-Aktionen auf der Produktdetailseite bei Produkten mit vielen vom Seeder erzeugten Optionen. Das Plugin lädt die vollständige Optionen-Struktur (Übersetzungen, Varianten-Eigenschaften, referenzierte Produktdaten) jetzt erst beim Öffnen des Tabs „Zusatzoptionen" und nicht mehr beim Laden der Produktseite. Die im Browser gehaltene Datenmenge sinkt bei optionsreichen Produkten um ca. 95 %.

---

# 5.4.0

_Veröffentlicht am 2026-03-31_

**Neue Funktionen**

- **Vorauswahl für Optionen**: Neue Einstellung „Vorausgewählt" für Optionen — ermöglicht es Händlern, Optionen standardmäßig angehakt anzuzeigen, ohne sie als Pflichtfeld zu markieren. Kunden können die Option jederzeit abwählen. Konfigurierbar sowohl in der Optionen-Detailansicht als auch im Optionen Seeder.

---

# 5.3.3

_Veröffentlicht am 2026-03-25_

**Fehlerbehebungen**

- **Seeder erstellt gelöschte Option Sets neu**: Geseedete Option Sets wurden nach manueller Löschung vom Produkt nie wieder erstellt. Die Lösch-Aktion schließt das Produkt nicht mehr automatisch vom Seeder aus — ein einfaches Löschen ermöglicht das erneute Seeden beim nächsten Sync-Zyklus.
- **Seeder Timing-Bug**: Der geplante Seeder-Task hat jeden zweiten Zyklus Seeder übersprungen, weil Sync-Fortschrittsupdates den `updated_at`-Zeitstempel aktualisiert haben.

**Verbesserungen**

- **Lösch-Dialog für geseedete Optionen**: Beim Löschen eines geseedeten Option Sets erklärt der Bestätigungsdialog nun das Seeder-Verhalten und bietet zwei Optionen: „Löschen" (wird erneut geseeded) oder „Dauerhaft entfernen" (schließt Produkt vom Seeder aus).
- **Ausgeschlossene Produkte verwalten**: Die Seeder-Detailseite zeigt ausgeschlossene Produkte als entfernbare Tags an, sodass Händler Produkte direkt aus der Seeder-Konfiguration wieder für das Seeding freigeben können.

---

# 5.3.2

_Veröffentlicht am 2026-03-24_

**Neue Funktionen**

- **Konfigurierbares Beschreibungstext-Icon**: Das Tooltip-Icon für Options-Beschreibungstexte ist jetzt in den Plugin-Einstellungen unter „Anzeige-Einstellungen" konfigurierbar. Händler können zwischen einem Fragezeichen (?) und einem Info-Symbol (i) wählen. Beide Varianten verwenden echte Shopware SVG-Icons statt reinem Text.

**Verbesserungen**

- **SCSS-Bereinigung**: Duplizierte Storefront-Styles wurden durch korrekten Import der `_option-management.scss`-Datei und Entfernung redundanter CSS-Regeln bereinigt.

---

# 5.3.1

_Veröffentlicht am 2026-03-20_

**Fehlerbehebungen**

- **Rabatt auf Optionspreise angewendet**: Aktionen wendeten Rabatte auf den gesamten Produktpreis inklusive Optionen an, auch wenn die Produktregeln der Aktion die Optionen ausschlossen. Der Eltern-Artikel wird jetzt vor der Rabattberechnung immer auf seinen Basispreis zurückgesetzt, sodass Optionspreise nur rabattiert werden, wenn sie explizit einbezogen sind.
- **Erklärtext-Auflösung für Zusatzfelder**: Beschreibungstexte aus Zusatzfeldern wurden im Storefront nicht angezeigt, wenn das Feld ohne das Präfix `customFields.` eingegeben wurde — das Plugin sucht nun automatisch im Zusatzfeld-Pfad, wenn der direkte Pfad nicht auflösbar ist.
- **Deinstallations-Stabilität**: `parent::uninstall()` wurde bei vollständiger Deinstallation nicht aufgerufen. Außerdem wird `ALTER TABLE DROP COLUMN` nun gegen fehlende Spalten abgesichert.

---

# 5.3.0

_Veröffentlicht am 2026-03-16_

**Neue Funktionen**

- **Beschreibungs-/Erklärungstexte für Optionen**: Optionen und Optionen-Sets unterstützen jetzt Beschreibungstexte, die als Tooltip-Icon (?) neben dem Optionsnamen im Storefront angezeigt werden. Optionen können eine individuelle Beschreibung haben, und Optionen-Sets können einen Produktfeld-Pfad (z.B. `description`) angeben, um Beschreibungen automatisch vom verknüpften Produkt zu übernehmen.

**Fehlerbehebungen**

- **Warenkorb-Rabatte mit Optionen**: Rabatte wurden bei Produkten mit Zusatzoptionen nicht korrekt angewendet — die CartProcessor-Priorität wurde angepasst, damit Optionspreise vor der Rabattberechnung kombiniert werden, und nicht-stapelbare Options-Positionen werden während der Packager-Auswertung vorübergehend als stapelbar markiert, um den Ausschluss durch Shopwares `CartScopeDiscountPackager` zu verhindern.

---

# 5.2.7

_Veröffentlicht am 2026-03-13_

**Fehlerbehebungen**

- **Rabatte verschwinden nach Entfernen von Optionen**: Rabatte/Aktionen wurden nicht wiederhergestellt, wenn alle Optionen von einem Warenkorb-Artikel entfernt wurden — Shopwares `CartScopeDiscountPackager` schließt nicht-stapelbare Artikel aus, und das Plugin hinterließ den Artikel nach dem Entfernen als nicht-stapelbar mit veralteten Options-Payload-Daten.
- **Absturz beim Hinzufügen von Optionen (getUnitPrice on null)**: Behebt `Call to a member function getUnitPrice() on null` beim Hinzufügen von Optionen zu einem Warenkorb-Artikel, dessen Preis noch nicht gesetzt war — Null-Prüfungen hinzugefügt nach Entfernung der `productDetailRoute`-Preisabfrage.
- **ChildCartProcessor vorzeitiger Abbruch**: `return` statt `continue` behoben, wodurch verbleibende Warenkorb-Produkte übersprungen wurden, wenn ein Produkt `optionSetId`-Payload aber keine Kinder hatte.

---

# 5.2.6

_Veröffentlicht am 2026-03-12_

**Fehlerbehebungen**

- **Fehler bei Produkt bearbeiten/anlegen in der Administration**: Behebt `TypeError: t.product.isNew is not a function`, der die Produktdetailseite in Shopware 6.6 zum Absturz brachte — verursacht durch unsere `sw-product-detail-base`-Überschreibung, die die Computed Properties `product` und `isLoading` unnötigerweise neu definierte und dabei während des reaktiven Update-Zyklus von Vue nach dem Vuex-`setProduct`-Mutation ein Nicht-Entity-Objekt zurückgab.

---

# 5.2.5

_Veröffentlicht am 2026-03-12_

**Fehlerbehebungen**

- **Rabattberechnung mit Optionen**: Prozentuale Rabatte wurden bei Produkten mit Zusatzoptionen falsch berechnet — ein fehlerhafter Filter führte dazu, dass Optionspreise doppelt in die Rabattbasis einflossen. Außerdem wurde die `applyDiscounts`-Konfiguration korrigiert, sodass Rabatte nun korrekt nur auf das Basisprodukt oder auf Basisprodukt + Optionen angewendet werden können.

---

# 5.2.4

_Veröffentlicht am 2026-03-11_

**Fehlerbehebungen**

- **Option erscheint deaktiviert und nicht abwählbar**: Optionen mit `requiredFromPrice` wurden auf der Produktdetailseite als angehakt aber deaktiviert angezeigt — der Verfügbarkeits-AJAX-Endpunkt gab `active=false` zurück (kein Warenkorb-Kontext), was das JS fälschlicherweise als „Checkbox deaktivieren" interpretierte. Jetzt deaktiviert nur noch die regelbasierte Deaktivierung Optionen.
- **requiredFromPrice=0 aktiviert immer**: `requiredFromPrice = 0.00` erfüllte trivialerweise alle Warenkorbsummen (0 <= beliebiger Preis), wodurch die Option immer automatisch angehakt wurde. Null wird jetzt als „nicht konfiguriert" behandelt.
- **Admin-Optionspreis-Modal**: Null-Referenz-Fehler beim Öffnen des Optionspreis-Modals ohne verfügbare Standardwährung behoben.

---

# 5.2.3

_Veröffentlicht am 2026-03-10_

**Fehlerbehebungen**

- **Storefront-JS auf Cloud**: Behebt das Problem, dass die Plugin-Optionen auf Shopware Cloud nicht geladen wurden — das IIFE-Bundle und die manuelle Script-Einbindung wurden zugunsten des standardmäßigen `dist/`-Ansatzes entfernt, der von `theme:compile` korrekt erkannt wird.

---

# 5.2.2

_Veröffentlicht am 2026-03-05_

**Fehlerbehebungen**

- **Abgewählte Optionen erscheinen erneut**: Optionen, die auf der Produktdetailseite abgewählt wurden, werden beim Aktualisieren der Warenkorbseite nicht mehr automatisch wieder hinzugefügt — Ursache war ein Variablen-Shadowing-Bug, der die Abwahl-Verfolgung verhinderte.
- **Warenkorb-Gesamtpreis aktualisiert sich nicht**: Der Gesamtpreis im Warenkorb spiegelt nun korrekt Änderungen an Zusatzoptionen wider, wenn Services auf der Checkout-Seite an- oder abgewählt werden.
- **Optionsverfügbarkeitsprüfung**: Die `isRequired`-Prüfung im Verfügbarkeitscontroller verwendet nun das korrekte Objekt (Option-Entity statt Extension).
- **Options-Widget-Container**: Fallback-Kette für die Suche des Zusatzoptionen-Containers auf Produktseiten mit nicht-standardmäßigem Layout hinzugefügt.

---

# 5.2.1

_Veröffentlicht am 2026-03-05_

**Fehlerbehebungen**

- **Admin-Menüpunkte**: Die Plugin-Menüpunkte („Optionen Seeder" und „Zusatzoptionen Konfiguration") werden nun wieder korrekt in der Administration angezeigt — Ursache war eine fehlende Variablendeklaration im produktiven JS-Bundle.

---

# 5.2.0

_Veröffentlicht am 2026-03-05_

**Neue Funktionen**

- **Positionsoption „Unter dem Kaufen-Widget"**: Neue dritte Positionsoption für die Produktdetailseite — platziert die Optionsauswahl unterhalb des gesamten Kaufen-Widgets (nach Wunschliste, Artikelnummer und anderen Erweiterungen), um Konflikte mit Erweiterungen zu vermeiden, die in den Kaufen-Bereich einfügen.

---

# 5.1.2

_Veröffentlicht am 2026-03-05_

**Fehlerbehebungen**

- **Seeder-Synchronisation**: Änderungen an Seeder-Einstellungen (z.B. „Standardmäßig geöffnet") werden jetzt korrekt bei der nächsten Synchronisation auf alle bestehenden Produkt-Optionen-Sets übertragen — zuvor wurden Änderungen an einem Seeder nie auf bereits geseedete Produkte angewandt.

---

# 5.1.1

_Veröffentlicht am 2026-03-02_

**Fehlerbehebungen**

- **Migrations-Kompatibilität**: Seeder-Migrationen sind jetzt vollständig MySQL-kompatibel — die `ADD COLUMN`-Anweisungen sind idempotent und schlagen bei Neuinstallationen oder erneuten Ausführungen nicht mehr fehl.

---

# 5.1.0

_Veröffentlicht am 2026-02-19_

**Neue Funktionen**

- **Produkte vom Seeder ausschließen**: Bestimmte Produkte können jetzt von der automatischen Optionen-Set-Zuweisung eines Seeders ausgeschlossen werden — nützlich für Ausnahmen und Sonderprodukte, die die zugewiesenen Optionen nicht erhalten sollen.
- **Massen-Aktionen für Seeder-Verwaltung**: Neue „Jetzt synchronisieren"- und „Seeder zurücksetzen"-Massenaktionen in der Seeder-Liste ermöglichen die Verwaltung mehrerer Seeder auf einmal, ohne jeden einzeln zu öffnen.

**Verbesserungen**

- **Zurücksetzen-Bestätigungsdialog**: Das Zurücksetzen eines Seeders zeigt nun einen Bestätigungsdialog, um versehentlichen Datenverlust zu verhindern.
- **Verbesserte Fehlerbehandlung**: Besseres Fehler-Feedback und Validierung in der Seeder-Admin-Oberfläche.

**Fehlerbehebungen**

- **Options-Position „Unter"**: Optionen, die „unter dem 'In den Warenkorb'-Button" angezeigt werden sollen, erscheinen jetzt korrekt direkt unterhalb des Buttons — vor Wunschliste und Artikelnummer — entsprechend der Einstellungsbeschreibung.
- **Standard-Position-Darstellung**: Optionen werden jetzt korrekt angezeigt, wenn die Positions-Einstellung nie konfiguriert wurde (Standard: „Unter").

---

# 5.0.0

_Veröffentlicht am 2026-02-10_

**Neue Funktionen**

- **Mehrfachauswahl bei Optionen Seeder**: Sie können nun mehrere dynamische Produktgruppen in einem Seeder auswählen, um Optionen-Sets effizienter mehreren Produktgruppen zuzuweisen.
- **Synchronisationsstatus für Seeder**: Neuer Status-Indikator zeigt an, ob die Seeder-Synchronisation läuft, abgeschlossen ist oder fehlgeschlagen ist.
- **Container automatisch öffnen**: Neue Option „Container geöffnet" bei Optionen-Sets — ideal für Pflichtfelder, damit Kunden diese sofort sehen.

**Verbesserungen**

- **Optimierte Seeder-Performance**: Synchronisation großer Produktkataloge (>1.000 Produkte) läuft nun deutlich schneller durch verbesserte Message-Queue-Verarbeitung.
- **Verbesserte Warenkorb-Integration**: Optionen können jetzt flüssiger im Warenkorb bearbeitet werden — ohne Seiten-Neuladen.
- **Erweiterte Preisstaffelung**: Präzisere Berechnung von Mengenstaffel-Preisen mit Floating-Point-Toleranz.

**Fehlerbehebungen**

- **Zirkuläre Abhängigkeit behoben**: Das Plugin lädt den Warenkorb nicht mehr mehrfach, wenn Optionen während des Cart-Processing abgefragt werden — verhindert Endlosschleifen.
- **Deterministische IDs für Produktstream-Optionen**: Produkt-Stream-Optionen verwenden jetzt stabile IDs, sodass die Auswahl beim Neuladen der Seite erhalten bleibt.
- **Null-Preis-Handling**: Optionen mit ungültigen Preisen werden nicht mehr zum Warenkorb hinzugefügt — verhindert Fehler im Checkout.
- **Promotion-Kompatibilität**: Rabatte und Aktionen werden jetzt korrekt auf Optionen angewendet — sowohl auf Warenkorb- als auch auf Set-Ebene.

**Breaking Changes**

- **Shopware-Kompatibilität**: Unterstützt nun Shopware 6.6.0 - 6.7.0. Ältere Versionen (< 6.6.0) werden nicht mehr unterstützt.
- **PHP-Version**: Mindestversion PHP 8.1 erforderlich.

---

# 3.1.15

_Veröffentlicht am 2026-02-10_

**Fehlerbehebungen**

- **8 kritische Fixes**: Datenintegrität, Performance-Verbesserungen und Behebung von zirkulären Abhängigkeiten.
- **Checkout-Optionen**: Verbesserte Verarbeitung von Optionen im Checkout-Prozess.

---

# 3.1.14

_Veröffentlicht am 2026-01-29_

**Neue Funktionen**

- **Option-Handling im Checkout**: Erweiterte Unterstützung für Optionsauswahl während des Checkout-Prozesses.
- **LineItemSubscriber Verbesserungen**: Optimierte Verarbeitung von Optionen beim Hinzufügen zum Warenkorb.

---

# 3.1.5

_Veröffentlicht am 2025-11_

**Neue Funktionen**

- **Mengenauswahl für Optionen**: Kunden können nun die Menge für jede Option individuell wählen (+/- Buttons).
- **Mengenauswahl auf Set-Ebene**: Aktivieren Sie die Mengenauswahl für alle Optionen in einem Set gleichzeitig.
- **Textfeld-Eingabe**: Neue Möglichkeit für Freitext-Eingaben bei Optionen (z.B. Gravuren, Personalisierungen).
- **Rule-Builder-Integration**: Optionen können jetzt über Shopware-Regeln dynamisch aktiviert oder deaktiviert werden.

**Verbesserungen**

- **Erweiterte Preisstaffelung**: Neue OptionPrice-Tabelle ermöglicht detaillierte Mengenstaffel-Preise.
- **Länderspezifische Konfiguration**: Verbesserte UI für Länder- und Postleitzahlen-basierte Optionsverfügbarkeit.
- **Optionen Seeder Optimierungen**: Schnellere und zuverlässigere automatische Zuweisung von Optionen-Sets.

**Fehlerbehebungen**

- **Anforderungsfelder**: Korrekte Verarbeitung von abhängigen Optionen über 3 Ebenen.
- **Shipping-Method-Filter**: Versandbeschränkungen werden jetzt korrekt auf Options-Ebene angewendet.

---

# 3.0.0

_Veröffentlicht am 2025-06_

**Neue Funktionen**

- **Optionen Seeder**: Automatische Zuweisung von Optionen-Sets über dynamische Produktgruppen.
- **Scheduled Task**: Automatische stündliche Synchronisation von Seedern.
- **Message Queue Integration**: Asynchrone Verarbeitung großer Produkt-Zuweisungen.
- **Sortierung**: Optionen und Sets können nun manuell sortiert werden.

**Verbesserungen**

- **Performance**: Optimierte Datenbankabfragen für große Produktkataloge.
- **UI/UX**: Überarbeitete Admin-Oberfläche für einfacheres Optionen-Management.
- **API-Unterstützung**: Vollständige API-Endpunkte für Seeder-Verwaltung.

---

# 2.5.0

_Veröffentlicht am 2024-12_

**Neue Funktionen**

- **Inkompatible Produkte**: Definieren Sie Optionen, die sich gegenseitig ausschließen.
- **Pflichtfelder**: Markieren Sie Optionen als erforderlich.
- **Abhängigkeiten**: Erstellen Sie mehrstufige Optionsabhängigkeiten (bis zu 3 Ebenen).

**Verbesserungen**

- **Checkout-Validierung**: Verbesserte Validierung von Pflichtoptionen im Checkout.
- **Warenkorb-Darstellung**: Übersichtlichere Anzeige von Optionen im Warenkorb.

---

# 2.0.0

_Veröffentlicht am 2024-06_

**Neue Funktionen**

- **Länderspezifische Preise**: Unterschiedliche Preise für Optionen je nach Lieferland.
- **Versandbeschränkungen**: Optionen können auf bestimmte Versandarten beschränkt werden.
- **Dynamische Steuersätze**: Volle Unterstützung für OSS (One Stop Shop).
- **Promotion-Integration**: Optionen werden korrekt in Shopware-Aktionen einbezogen.

**Verbesserungen**

- **Preis-Berechnung**: Präzisere Berechnung von Optionspreisen inkl. Steuern.
- **Warenkorb-Integration**: Optionen können jetzt im Warenkorb bearbeitet werden.

---

# 1.5.0

_Veröffentlicht am 2024-02_

**Neue Funktionen**

- **Mehrfachauswahl**: Optionen-Sets unterstützen nun Mehrfachauswahl (Checkboxen).
- **Einzelauswahl**: Radio-Buttons für exklusive Optionsauswahl.
- **Bilder und Hersteller**: Optional können Produktbilder und Herstellernamen bei Optionen angezeigt werden.

**Verbesserungen**

- **Storefront-Design**: Accordion-basierte Darstellung für übersichtlichere Optionsauswahl.
- **Mobile Optimierung**: Verbesserte Darstellung auf Smartphones und Tablets.

---

# 1.0.0

_Veröffentlicht am 2023-12_

**Neue Funktionen**

- **Erste Version**: Grundlegende Funktionalität für produktbasierte Zusatzoptionen.
- **Optionen-Sets**: Container für zusammengehörige Optionen.
- **Produktauswahl**: Nutzen Sie bestehende Produkte als Optionen.
- **Preisgestaltung**: Automatische Preisübernahme von Produkten.
- **Admin-UI**: Integration in Shopware-Admin über Produktansicht.
