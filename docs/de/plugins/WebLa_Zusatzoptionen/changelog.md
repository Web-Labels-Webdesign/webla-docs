# Änderungsprotokoll

Alle wichtigen Änderungen am Zusatzoptionen Plugin für Endbenutzer.

---

## [5.3.2] - 2026-03-24

### ✨ Neue Funktionen

- **Konfigurierbares Beschreibungstext-Icon**: Das Tooltip-Icon für Options-Beschreibungstexte ist jetzt in den Plugin-Einstellungen unter „Anzeige-Einstellungen" konfigurierbar. Händler können zwischen einem Fragezeichen (?) und einem Info-Symbol (i) wählen. Beide Varianten verwenden echte Shopware SVG-Icons statt reinem Text.

### ♻️ Verbesserungen

- **SCSS-Bereinigung**: Duplizierte Storefront-Styles wurden durch korrekten Import der `_option-management.scss`-Datei und Entfernung redundanter CSS-Regeln bereinigt.

---

## [5.3.1] - 2026-03-20

### 🐛 Fehlerbehebungen

- **Rabatt auf Optionspreise angewendet**: Aktionen wendeten Rabatte auf den gesamten Produktpreis inklusive Optionen an, auch wenn die Produktregeln der Aktion die Optionen ausschlossen. Der Eltern-Artikel wird jetzt vor der Rabattberechnung immer auf seinen Basispreis zurückgesetzt, sodass Optionspreise nur rabattiert werden, wenn sie explizit einbezogen sind.
- **Erklärtext-Auflösung für Zusatzfelder**: Beschreibungstexte aus Zusatzfeldern wurden im Storefront nicht angezeigt, wenn das Feld ohne das Präfix `customFields.` eingegeben wurde — das Plugin sucht nun automatisch im Zusatzfeld-Pfad, wenn der direkte Pfad nicht auflösbar ist.
- **Deinstallations-Stabilität**: `parent::uninstall()` wurde bei vollständiger Deinstallation nicht aufgerufen. Außerdem wird `ALTER TABLE DROP COLUMN` nun gegen fehlende Spalten abgesichert.

---

## [5.3.0] - 2026-03-16

### ✨ Neue Funktionen

- **Beschreibungs-/Erklärungstexte für Optionen**: Optionen und Optionen-Sets unterstützen jetzt Beschreibungstexte, die als Tooltip-Icon (?) neben dem Optionsnamen im Storefront angezeigt werden. Optionen können eine individuelle Beschreibung haben, und Optionen-Sets können einen Produktfeld-Pfad (z.B. `description`) angeben, um Beschreibungen automatisch vom verknüpften Produkt zu übernehmen.

### 🐛 Fehlerbehebungen

- **Warenkorb-Rabatte mit Optionen**: Rabatte wurden bei Produkten mit Zusatzoptionen nicht korrekt angewendet — die CartProcessor-Priorität wurde angepasst, damit Optionspreise vor der Rabattberechnung kombiniert werden, und nicht-stapelbare Options-Positionen werden während der Packager-Auswertung vorübergehend als stapelbar markiert, um den Ausschluss durch Shopwares `CartScopeDiscountPackager` zu verhindern.

---

## [5.2.7] - 2026-03-13

### 🐛 Fehlerbehebungen

- **Rabatte verschwinden nach Entfernen von Optionen**: Rabatte/Aktionen wurden nicht wiederhergestellt, wenn alle Optionen von einem Warenkorb-Artikel entfernt wurden — Shopwares `CartScopeDiscountPackager` schließt nicht-stapelbare Artikel aus, und das Plugin hinterließ den Artikel nach dem Entfernen als nicht-stapelbar mit veralteten Options-Payload-Daten.
- **Absturz beim Hinzufügen von Optionen (getUnitPrice on null)**: Behebt `Call to a member function getUnitPrice() on null` beim Hinzufügen von Optionen zu einem Warenkorb-Artikel, dessen Preis noch nicht gesetzt war — Null-Prüfungen hinzugefügt nach Entfernung der `productDetailRoute`-Preisabfrage.
- **ChildCartProcessor vorzeitiger Abbruch**: `return` statt `continue` behoben, wodurch verbleibende Warenkorb-Produkte übersprungen wurden, wenn ein Produkt `optionSetId`-Payload aber keine Kinder hatte.

---

## [5.2.6] - 2026-03-12

### 🐛 Fehlerbehebungen

- **Fehler bei Produkt bearbeiten/anlegen in der Administration**: Behebt `TypeError: t.product.isNew is not a function`, der die Produktdetailseite in Shopware 6.6 zum Absturz brachte — verursacht durch unsere `sw-product-detail-base`-Überschreibung, die die Computed Properties `product` und `isLoading` unnötigerweise neu definierte und dabei während des reaktiven Update-Zyklus von Vue nach dem Vuex-`setProduct`-Mutation ein Nicht-Entity-Objekt zurückgab.

---

## [5.2.5] - 2026-03-12

### 🐛 Fehlerbehebungen

- **Rabattberechnung mit Optionen**: Prozentuale Rabatte wurden bei Produkten mit Zusatzoptionen falsch berechnet — ein fehlerhafter Filter führte dazu, dass Optionspreise doppelt in die Rabattbasis einflossen. Außerdem wurde die `applyDiscounts`-Konfiguration korrigiert, sodass Rabatte nun korrekt nur auf das Basisprodukt oder auf Basisprodukt + Optionen angewendet werden können.

---

## [5.2.4] - 2026-03-11

### 🐛 Fehlerbehebungen

- **Option erscheint deaktiviert und nicht abwählbar**: Optionen mit `requiredFromPrice` wurden auf der Produktdetailseite als angehakt aber deaktiviert angezeigt — der Verfügbarkeits-AJAX-Endpunkt gab `active=false` zurück (kein Warenkorb-Kontext), was das JS fälschlicherweise als „Checkbox deaktivieren" interpretierte. Jetzt deaktiviert nur noch die regelbasierte Deaktivierung Optionen.
- **requiredFromPrice=0 aktiviert immer**: `requiredFromPrice = 0.00` erfüllte trivialerweise alle Warenkorbsummen (0 <= beliebiger Preis), wodurch die Option immer automatisch angehakt wurde. Null wird jetzt als „nicht konfiguriert" behandelt.
- **Admin-Optionspreis-Modal**: Null-Referenz-Fehler beim Öffnen des Optionspreis-Modals ohne verfügbare Standardwährung behoben

---

## [5.2.3] - 2026-03-10

### 🐛 Fehlerbehebungen

- **Storefront-JS auf Cloud**: Behebt das Problem, dass die Plugin-Optionen auf Shopware Cloud nicht geladen wurden — das IIFE-Bundle und die manuelle Script-Einbindung wurden zugunsten des standardmäßigen `dist/`-Ansatzes entfernt, der von `theme:compile` korrekt erkannt wird

---

## [5.2.2] - 2026-03-05

### 🐛 Fehlerbehebungen

- **Abgewählte Optionen erscheinen erneut**: Optionen, die auf der Produktdetailseite abgewählt wurden, werden beim Aktualisieren der Warenkorbseite nicht mehr automatisch wieder hinzugefügt — Ursache war ein Variablen-Shadowing-Bug, der die Abwahl-Verfolgung verhinderte
- **Warenkorb-Gesamtpreis aktualisiert sich nicht**: Der Gesamtpreis im Warenkorb spiegelt nun korrekt Änderungen an Zusatzoptionen wider, wenn Services auf der Checkout-Seite an- oder abgewählt werden
- **Optionsverfügbarkeitsprüfung**: Die `isRequired`-Prüfung im Verfügbarkeitscontroller verwendet nun das korrekte Objekt (Option-Entity statt Extension)
- **Options-Widget-Container**: Fallback-Kette für die Suche des Zusatzoptionen-Containers auf Produktseiten mit nicht-standardmäßigem Layout hinzugefügt

---

## [5.2.1] - 2026-03-05

### 🐛 Fehlerbehebungen

- **Admin-Menüpunkte**: Die Plugin-Menüpunkte („Optionen Seeder" und „Zusatzoptionen Konfiguration") werden nun wieder korrekt in der Administration angezeigt — Ursache war eine fehlende Variablendeklaration im produktiven JS-Bundle

---

## [5.2.0] - 2026-03-05

### ✨ Neue Funktionen

- **Positionsoption „Unter dem Kaufen-Widget"**: Neue dritte Positionsoption für die Produktdetailseite — platziert die Optionsauswahl unterhalb des gesamten Kaufen-Widgets (nach Wunschliste, Artikelnummer und anderen Erweiterungen), um Konflikte mit Erweiterungen zu vermeiden, die in den Kaufen-Bereich einfügen

---

## [5.1.2] - 2026-03-05

### 🐛 Fehlerbehebungen

- **Seeder-Synchronisation**: Änderungen an Seeder-Einstellungen (z.B. „Standardmäßig geöffnet") werden jetzt korrekt bei der nächsten Synchronisation auf alle bestehenden Produkt-Optionen-Sets übertragen — zuvor wurden Änderungen an einem Seeder nie auf bereits geseedete Produkte angewandt

---

## [5.1.1] - 2026-03-02

### 🐛 Fehlerbehebungen

- **Migrations-Kompatibilität**: Seeder-Migrationen sind jetzt vollständig MySQL-kompatibel — die `ADD COLUMN`-Anweisungen sind idempotent und schlagen bei Neuinstallationen oder erneuten Ausführungen nicht mehr fehl

---

## [5.1.0] - 2026-02-19

### ✨ Neue Funktionen

- **Produkte vom Seeder ausschließen**: Bestimmte Produkte können jetzt von der automatischen Optionen-Set-Zuweisung eines Seeders ausgeschlossen werden — nützlich für Ausnahmen und Sonderprodukte, die die zugewiesenen Optionen nicht erhalten sollen
- **Massen-Aktionen für Seeder-Verwaltung**: Neue "Jetzt synchronisieren"- und "Seeder zurücksetzen"-Massenaktionen in der Seeder-Liste ermöglichen die Verwaltung mehrerer Seeder auf einmal, ohne jeden einzeln zu öffnen

### 🔧 Verbesserungen

- **Zurücksetzen-Bestätigungsdialog**: Das Zurücksetzen eines Seeders zeigt nun einen Bestätigungsdialog, um versehentlichen Datenverlust zu verhindern
- **Verbesserte Fehlerbehandlung**: Besseres Fehler-Feedback und Validierung in der Seeder-Admin-Oberfläche

### 🐛 Fehlerbehebungen

- **Options-Position "Unter"**: Optionen, die "unter dem 'In den Warenkorb'-Button" angezeigt werden sollen, erscheinen jetzt korrekt direkt unterhalb des Buttons — vor Wunschliste und Artikelnummer — entsprechend der Einstellungsbeschreibung
- **Standard-Position-Darstellung**: Optionen werden jetzt korrekt angezeigt, wenn die Positions-Einstellung nie konfiguriert wurde (Standard: "Unter")

---

## [5.0.0] - 2026-02-10

### ✨ Neue Funktionen

- **Mehrfachauswahl bei Optionen Seeder**: Sie können nun mehrere dynamische Produktgruppen in einem Seeder auswählen, um Optionen-Sets effizienter mehreren Produktgruppen zuzuweisen
- **Synchronisationsstatus für Seeder**: Neuer Status-Indikator zeigt an, ob die Seeder-Synchronisation läuft, abgeschlossen ist oder fehlgeschlagen ist
- **Container automatisch öffnen**: Neue Option "Container geöffnet" bei Optionen-Sets - ideal für Pflichtfelder, damit Kunden diese sofort sehen

### 🔧 Verbesserungen

- **Optimierte Seeder-Performance**: Synchronisation großer Produktkataloge (>1.000 Produkte) läuft nun deutlich schneller durch verbesserte Message-Queue-Verarbeitung
- **Verbesserte Warenkorb-Integration**: Optionen können jetzt flüssiger im Warenkorb bearbeitet werden - ohne Seiten-Neuladeung
- **Erweiterte Preisstaffelung**: Präzisere Berechnung von Mengenstaffel-Preisen mit Floating-Point-Toleranz

### 🐛 Fehlerbehebungen

- **Zirkuläre Abhängigkeit behoben**: Das Plugin lädt den Warenkorb nicht mehr mehrfach, wenn Optionen während des Cart-Processing abgefragt werden - verhindert Endlosschleifen
- **Deterministische IDs für Produktstream-Optionen**: Produkt-Stream-Optionen verwenden jetzt stabile IDs, sodass die Auswahl beim Neuladen der Seite erhalten bleibt
- **Null-Preis-Handling**: Optionen mit ungültigen Preisen werden nicht mehr zum Warenkorb hinzugefügt - verhindert Fehler im Checkout
- **Promotion-Kompatibilität**: Rabatte und Aktionen werden jetzt korrekt auf Optionen angewendet - sowohl auf Warenkorb- als auch auf Set-Ebene

### ⚠️ Wichtige Änderungen

- **Shopware-Kompatibilität**: Unterstützt nun Shopware 6.6.0 - 6.7.0. Ältere Versionen (< 6.6.0) werden nicht mehr unterstützt
- **PHP-Version**: Mindestversion PHP 8.1 erforderlich

---

## [3.1.15] - 2026-02-10

### 🐛 Fehlerbehebungen

- **8 kritische Fixes**: Datenintegrität, Performance-Verbesserungen und Behebung von zirkulären Abhängigkeiten
- **Checkout-Optionen**: Verbesserte Verarbeitung von Optionen im Checkout-Prozess

---

## [3.1.14] - 2026-01-29

### ✨ Neue Funktionen

- **Option-Handling im Checkout**: Erweiterte Unterstützung für Optionsauswahl während des Checkout-Prozesses
- **LineItemSubscriber Verbesserungen**: Optimierte Verarbeitung von Optionen beim Hinzufügen zum Warenkorb

---

## [3.1.5] - 2025-11-XX

### ✨ Neue Funktionen

- **Mengenauswahl für Optionen**: Kunden können nun die Menge für jede Option individuell wählen (+/- Buttons)
- **Mengenauswahl auf Set-Ebene**: Aktivieren Sie die Mengenauswahl für alle Optionen in einem Set gleichzeitig
- **Textfeld-Eingabe**: Neue Möglichkeit für Freitext-Eingaben bei Optionen (z.B. Gravuren, Personalisierungen)
- **Rule-Builder-Integration**: Optionen können jetzt über Shopware-Regeln dynamisch aktiviert oder deaktiviert werden

### 🔧 Verbesserungen

- **Erweiterte Preisstaffelung**: Neue OptionPrice-Tabelle ermöglicht detaillierte Mengenstaffel-Preise
- **Länderspezifische Konfiguration**: Verbesserte UI für Länder- und Postleitzahlen-basierte Optionsverfügbarkeit
- **Optionen Seeder Optimierungen**: Schnellere und zuverlässigere automatische Zuweisung von Optionen-Sets

### 🐛 Fehlerbehebungen

- **Anforderungsfelder**: Korrekte Verarbeitung von abhängigen Optionen über 3 Ebenen
- **Shipping-Method-Filter**: Versandbeschränkungen werden jetzt korrekt auf Options-Ebene angewendet

---

## [3.0.0] - 2025-06-XX

### ✨ Neue Funktionen

- **Optionen Seeder**: Automatische Zuweisung von Optionen-Sets über dynamische Produktgruppen
- **Scheduled Task**: Automatische stündliche Synchronisation von Seedern
- **Message Queue Integration**: Asynchrone Verarbeitung großer Produkt-Zuweisungen
- **Sortierung**: Optionen und Sets können nun manuell sortiert werden

### 🔧 Verbesserungen

- **Performance**: Optimierte Datenbankabfragen für große Produktkataloge
- **UI/UX**: Überarbeitete Admin-Oberfläche für einfacheres Optionen-Management
- **API-Unterstützung**: Vollständige API-Endpunkte für Seeder-Verwaltung

---

## [2.5.0] - 2024-12-XX

### ✨ Neue Funktionen

- **Inkompatible Produkte**: Definieren Sie Optionen, die sich gegenseitig ausschließen
- **Pflichtfelder**: Markieren Sie Optionen als erforderlich
- **Abhängigkeiten**: Erstellen Sie mehrstufige Optionsabhängigkeiten (bis zu 3 Ebenen)

### 🔧 Verbesserungen

- **Checkout-Validierung**: Verbesserte Validierung von Pflichtoptionen im Checkout
- **Warenkorb-Darstellung**: Übersichtlichere Anzeige von Optionen im Warenkorb

---

## [2.0.0] - 2024-06-XX

### ✨ Neue Funktionen

- **Länderspezifische Preise**: Unterschiedliche Preise für Optionen je nach Lieferland
- **Versandbeschränkungen**: Optionen können auf bestimmte Versandarten beschränkt werden
- **Dynamische Steuersätze**: Volle Unterstützung für OSS (One Stop Shop)
- **Promotion-Integration**: Optionen werden korrekt in Shopware-Aktionen einbezogen

### 🔧 Verbesserungen

- **Preis-Berechnung**: Präzisere Berechnung von Optionspreisen inkl. Steuern
- **Warenkorb-Integration**: Optionen können jetzt im Warenkorb bearbeitet werden

---

## [1.5.0] - 2024-02-XX

### ✨ Neue Funktionen

- **Mehrfachauswahl**: Optionen-Sets unterstützen nun Mehrfachauswahl (Checkboxen)
- **Einzelauswahl**: Radio-Buttons für exklusive Optionsauswahl
- **Bilder und Hersteller**: Optional können Produktbilder und Herstellernamen bei Optionen angezeigt werden

### 🔧 Verbesserungen

- **Storefront-Design**: Accordion-basierte Darstellung für übersichtlichere Optionsauswahl
- **Mobile Optimierung**: Verbesserte Darstellung auf Smartphones und Tablets

---

## [1.0.0] - 2023-12-XX

### ✨ Neue Funktionen

- **Erste Version**: Grundlegende Funktionalität für produktbasierte Zusatzoptionen
- **Optionen-Sets**: Container für zusammengehörige Optionen
- **Produktauswahl**: Nutzen Sie bestehende Produkte als Optionen
- **Preisgestaltung**: Automatische Preisübernahme von Produkten
- **Admin-UI**: Integration in Shopware-Admin über Produktansicht

---

## Versionsübersicht

| Version | Veröffentlichung | Highlights                                                         |
| ------- | ---------------- | ------------------------------------------------------------------ |
| 5.1.0   | 2026-02-19       | Produkte ausschließen, Massen-Sync/Reset, Positions-Fehlerbehebung |
| 5.0.0   | 2026-02-10       | Mehrfachauswahl Seeder, Container-Öffnung, 8 kritische Fixes       |
| 3.1.15  | 2026-02-10       | Datenintegrität & Performance-Fixes                                |
| 3.1.14  | 2026-01-29       | Checkout-Optimierungen                                             |
| 3.1.5   | 2025-11          | Mengenauswahl, Textfelder, Rule-Builder                            |
| 3.0.0   | 2025-06          | Optionen Seeder, Automatische Zuweisung                            |
| 2.5.0   | 2024-12          | Inkompatibilitäten, Pflichtfelder, Abhängigkeiten                  |
| 2.0.0   | 2024-06          | Länderspezifische Preise, Versandbeschränkungen                    |
| 1.5.0   | 2024-02          | Mehrfachauswahl, Bilder, Hersteller-Anzeige                        |
| 1.0.0   | 2023-12          | Erste Veröffentlichung                                             |

---

## Upgrade-Hinweise

### Upgrade auf 5.0.0

**Wichtig**: Dieses Update erfordert Shopware 6.6.0 oder höher.

**Schritte**:
1. Erstellen Sie ein Backup Ihrer Datenbank
2. Aktualisieren Sie das Plugin über den Plugin Manager
3. Führen Sie die Migrationen aus: `bin/console database:migrate --all WebLa_Zusatzoptionen`
4. Leeren Sie den Cache: `bin/console cache:clear`
5. Prüfen Sie bestehende Optionen-Sets und Seeder auf Kompatibilität
6. Testen Sie die Optionsauswahl im Storefront gründlich

**Neue Features nutzen**:
- Aktivieren Sie "Container geöffnet" bei Sets mit Pflichtfeldern
- Nutzen Sie Mehrfachauswahl bei Seedern für effizientere Zuweisungen
- Prüfen Sie die Synchronisationsstatus-Anzeige für laufende Seeder

**Breaking Changes**:
- Mindestens Shopware 6.6.0 erforderlich (6.5.x wird nicht mehr unterstützt)
- PHP 8.1+ erforderlich (PHP 8.0 wird nicht mehr unterstützt)

### Upgrade auf 3.0.0

**Wichtig**: Dieses Major-Update bringt den Optionen Seeder - eine leistungsstarke neue Funktion für automatische Zuweisungen.

**Schritte**:
1. Erstellen Sie ein Backup
2. Aktualisieren Sie das Plugin
3. Führen Sie Migrationen aus
4. Leeren Sie den Cache
5. Neue Admin-Sektion "Optionen Seeder" wird verfügbar unter `Erweiterungen → Optionen Seeder`

**Neue Features nutzen**:
- Erstellen Sie dynamische Produktgruppen unter `Kataloge → Dynamische Produktgruppen`
- Richten Sie Seeder ein für automatische Optionen-Zuweisung
- Nutzen Sie zeitgesteuerte Zuweisungen für saisonale Angebote

### Upgrade auf 2.0.0

**Wichtig**: Dieses Update bringt länderspezifische Preise und Versandbeschränkungen.

**Nach dem Update**:
- Bestehende Optionen behalten ihre Preise als Standard-Preise
- Definieren Sie länderspezifische Preise für internationale Shops
- Konfigurieren Sie Versandbeschränkungen für versandartabhängige Optionen

---

## Kompatibilität

| Plugin-Version | Shopware-Version | PHP-Version | Besonderheiten                    |
| -------------- | ---------------- | ----------- | --------------------------------- |
| 5.1.0          | 6.6.0 - 6.7.0    | 8.1+        | Aktuelle Version                  |
| 5.0.0          | 6.6.0 - 6.7.0    | 8.1+        | Großes Rewrite                    |
| 3.1.15         | 6.6.0 - 6.7.0    | 8.1+        | Bugfixes                          |
| 3.1.14         | 6.5.0 - 6.6.9    | 8.0+        | Checkout-Optimierungen            |
| 3.1.5          | 6.5.0 - 6.6.0    | 8.0+        | Mengenauswahl, Rule-Builder       |
| 3.0.0          | 6.5.0 - 6.6.0    | 8.0+        | Optionen Seeder                   |
| 2.5.0          | 6.4.0 - 6.5.0    | 7.4+        | Inkompatibilitäten, Pflichtfelder |
| 2.0.0          | 6.4.0 - 6.5.0    | 7.4+        | Länderspezifische Preise          |
| 1.x            | 6.4.0+           | 7.4+        | Basis-Funktionalität              |

---

## Support & Updates

**Wichtiger Hinweis**: Wir folgen dem offiziellen Shopware Release-Zyklus.

- **Neue Features**: Nur für aktuell von Shopware unterstützte Versionen
- **Bugfixes**: Für alle unterstützten Shopware-Versionen
- **Sicherheitsupdates**: So lange Shopware diese für die jeweilige Version bereitstellt

**Support-Kanäle**:
- Shopware Store: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- Dokumentation: [https://docs.web-labels.de](https://docs.web-labels.de)

Bei Fragen zu Updates oder Kompatibilität kontaktieren Sie bitte den Support.
