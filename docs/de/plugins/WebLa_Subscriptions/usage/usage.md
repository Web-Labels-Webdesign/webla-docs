# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten des WebLa Subscription Plugins.

---

## Inhaltsverzeichnis

- [Produkte für Abonnements einrichten](#produkte-für-abonnements-einrichten)
- [Zahlungsarten konfigurieren](#zahlungsarten-konfigurieren)
- [Rabatte und Treue-Staffeln](#rabatte-und-treue-staffeln)
- [Gratisartikel](#gratisartikel)
- [E-Mail-Benachrichtigungen](#e-mail-benachrichtigungen)
- [Hintergrund-Aufgaben](#hintergrund-aufgaben)

---

## Produkte für Abonnements einrichten

### Was es bewirkt

Sie können für jedes Produkt individuelle Abonnement-Optionen konfigurieren. In der Storefront sehen Kunden dann eine Auswahl zwischen Einzelkauf und Abonnement mit verschiedenen Intervallen.

### So richten Sie es ein

1. Navigieren Sie zu **Kataloge → Produkte → [Ihr Produkt]**
2. Wechseln Sie zum Tab **Abonnement** (hinzugefügt durch das Plugin)
3. Klicken Sie auf **Abonnement-Option hinzufügen**
4. Konfigurieren Sie für jede Option:
   - **Intervall (Wochen)**: Das Lieferintervall für diese Option
   - **Bezeichnung**: Der angezeigte Name (z. B. „Alle 2 Wochen")
   - **Position**: Reihenfolge in der Anzeige
   - **Aktiv**: Ob diese Option sichtbar ist
5. Speichern Sie das Produkt

### Nur als Abonnement verkaufen

Wenn ein Produkt ausschließlich als Abonnement verfügbar sein soll:

1. Öffnen Sie das Produkt unter **Kataloge → Produkte → [Ihr Produkt]**
2. Wechseln Sie zum Tab **Spezifikationen**
3. Suchen Sie das Custom Field **Nur als Abonnement**
4. Aktivieren Sie das Häkchen
5. Speichern Sie das Produkt

In der Storefront wird dann die Einzelkauf-Option ausgeblendet und Kunden können das Produkt nur als Abonnement bestellen.

### Darstellung in der Storefront

Auf der Produktdetailseite sehen Kunden:

- **Einzelkauf / Abonnieren**: Auswahlmöglichkeit zwischen einmaliger Bestellung und Abonnement
- **Intervall-Dropdown**: Wahl des gewünschten Lieferintervalls (falls mehrere Optionen konfiguriert)
- **Rabatt-Hinweis**: Anzeige des Abonnement-Rabatts (z. B. „5% sparen")

---

## Zahlungsarten konfigurieren

### Unterstützte Zahlungsarten

Das Plugin bietet vier Zahlungsarten für Abonnements:

| Zahlungsart          | Automatisch | Mollie erforderlich | Beschreibung                                    |
| -------------------- | ----------- | ------------------- | ----------------------------------------------- |
| **Kreditkarte**      | Ja          | Ja                  | Automatische Abbuchung per Mollie               |
| **SEPA-Lastschrift** | Ja          | Ja                  | Automatische Lastschrift per Mollie              |
| **Rechnung**         | Nein        | Nein                | Manuelle Zahlung, Abonnement bleibt aktiv       |
| **Vorkasse**         | Nein        | Nein                | Wartet auf Zahlungseingang vor Aktivierung       |

### Mollie einrichten

1. Navigieren Sie zu **Erweiterungen → Meine Erweiterungen → WebLa Subscription Plugin → Konfigurieren**
2. Scrollen Sie zum Abschnitt **Mollie API**
3. Tragen Sie Ihren **Test-API-Schlüssel** ein (beginnt mit `test_`)
4. Klicken Sie auf **API-Verbindung testen**
5. Bei erfolgreicher Verbindung: Tragen Sie auch den **Live-API-Schlüssel** ein
6. Deaktivieren Sie den **Testmodus** erst, wenn Sie bereit für den Echtbetrieb sind

### Zahlungsarten zuordnen

1. Bleiben Sie in der Plugin-Konfiguration
2. Im Abschnitt **Zahlungsarten**:
   - Wählen Sie bei **Kreditkarten-Zahlungsart** die entsprechende Mollie-Kreditkarten-Zahlungsart
   - Wählen Sie bei **SEPA-Zahlungsart** die Mollie-SEPA-Lastschrift-Zahlungsart
   - Wählen Sie bei **Rechnungs-Zahlungsart** Ihre Rechnungszahlungsart (optional)
   - Wählen Sie bei **Vorkasse-Zahlungsart** Ihre Vorkasse-Zahlungsart (optional)
3. Wählen Sie die **Versandart für Verlängerungen** (optional, sonst wird die Standard-Versandart verwendet)
4. Speichern Sie die Konfiguration

### Zahlungsart-Filterung im Checkout

Wenn ein Kunde Abonnement-Artikel im Warenkorb hat, werden im Checkout automatisch nur die für Abonnements konfigurierten Zahlungsarten angezeigt. Nicht-Abonnement-Zahlungsarten werden ausgeblendet.

---

## Rabatte und Treue-Staffeln

### Basis-Abonnement-Rabatt

Der unter **Konfiguration → Preise & Rabatte → Abonnement-Rabatt (%)** eingestellte Prozentsatz wird automatisch auf jede Abonnement-Bestellung angewendet.

### Treue-Staffeln (Loyalty Discounts)

Zusätzlich zum Basisrabatt können Sie Staffelrabatte einrichten, die ab einer bestimmten Anzahl an Verlängerungen gelten:

1. Navigieren Sie im Admin zu **Bestellungen → Abonnements → Dashboard**
2. Die Rabatt-Staffeln werden über die Datenbank verwaltet (Tabelle `webla_subscription_discount`)

Beispiel:
| Ab Verlängerung | Zusätzlicher Rabatt |
| --------------- | ------------------- |
| 3               | 2%                  |
| 6               | 5%                  |
| 12              | 8%                  |

---

## Gratisartikel

Sie können Abonnements kostenlose Produkte hinzufügen, die bei jeder Verlängerung automatisch mitgeliefert werden.

Gratisartikel werden pro Abonnement in der Detailansicht verwaltet:

1. Öffnen Sie ein Abonnement unter **Bestellungen → Abonnements → [Abonnement]**
2. Im Abschnitt **Artikel** können Gratisartikel hinzugefügt werden
3. Geben Sie Produkt und Menge an
4. Speichern Sie die Änderungen

---

## E-Mail-Benachrichtigungen

Das Plugin versendet vier Arten von E-Mails:

### Verlängerungserinnerung

- **Wann**: 3 Tage vor der nächsten Verlängerung
- **Inhalt**: Nächstes Verlängerungsdatum, Link zur Abonnement-Verwaltung
- **Template-Name**: `webla_subscription.renewal_reminder`

### Kündigungsbestätigung

- **Wann**: Sofort nach Kündigung durch Kunden oder Admin
- **Inhalt**: Bestätigung der Kündigung, optionaler Kündigungsgrund
- **Template-Name**: `webla_subscription.cancelled`

### SEPA-Zahlung fehlgeschlagen

- **Wann**: Bei fehlgeschlagener SEPA-Lastschrift
- **Inhalt**: Information über fehlgeschlagene Zahlung, Hinweis zur Zahlungsart-Aktualisierung
- **Template-Name**: `webla_subscription.sepa_failed`

### Preisänderung

- **Wann**: Wenn sich der Preis eines Abonnement-Produkts ändert
- **Inhalt**: Alter und neuer Preis, Gültigkeitsdatum
- **Template-Name**: `webla_subscription.price_changed`

### E-Mail-Templates anpassen

Sie können die E-Mail-Vorlagen unter **Einstellungen → System → E-Mail-Templates** bearbeiten. Suchen Sie nach den oben genannten Template-Namen.

---

## Hintergrund-Aufgaben

Das Plugin registriert vier automatische Hintergrund-Tasks, die in regelmäßigen Abständen von Shopware ausgeführt werden:

### Abonnement-Verlängerung

Prüft alle aktiven Abonnements auf Fälligkeit und erstellt automatisch neue Bestellungen. Berücksichtigt dabei die konfigurierten Verhaltensweisen bei nicht vorrätigen oder gelöschten Produkten.

### Verlängerungserinnerungen

Versendet Erinnerungs-E-Mails 3 Tage vor jeder anstehenden Verlängerung. Jede Erinnerung wird nur einmal pro Verlängerungszyklus versendet.

### Mollie-Zahlungsstatus-Abfrage

Fragt den aktuellen Zahlungsstatus bei Mollie ab, um lokale Bestellstatus zu aktualisieren. Verarbeitet bis zu 200 Transaktionen pro Durchlauf mit einem Rückblick von 7 Tagen.

### Vorkasse-Überwachung

Überwacht offene Vorkasse-Bestellungen und markiert diese als unbezahlt, wenn die Zahlung nicht innerhalb des konfigurierten Zeitraums eingeht. Pausiert das zugehörige Abonnement bei ausbleibender Zahlung.

---

## Verwandte Dokumentation

- [Kundenportal (Storefront)](subscriptions.md)
- [Admin-Funktionen](admin.md)
- [Einstellungsreferenz](../configuration/settings.md)
- [Schritt-für-Schritt-Anleitungen](../how_to.md)
