# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten von Kundenspezifische Rabatte.

---

## Inhaltsverzeichnis

- [Rabattarten im Überblick](#rabattarten-im-überblick)
- [Individuelle Kundenrabatte](#individuelle-kundenrabatte)
- [Kundengruppen-Rabatte](#kundengruppen-rabatte)
- [Produktspezifische Rabatte](#produktspezifische-rabatte)
- [Globale Kundenrabatte](#globale-kundenrabatte)
- [Globale Gruppenrabatte](#globale-gruppenrabatte)
- [Storefront-Anzeige](#storefront-anzeige)
- [Fehlerbehebung](#fehlerbehebung)

---

## Rabattarten im Überblick

Das Plugin bietet fünf verschiedene Rabattebenen, die je nach Konfiguration zusammenwirken:

| Rabattart | Anwendungsbereich | Verwaltungsort |
| --------- | ----------------- | -------------- |
| Produktrabatt | Einzelnes Produkt | Produkt → Weitere Felder |
| Individueller Kundenrabatt | Kategorie oder Produktgruppe pro Kunde | Kunde → Kundenrabatte |
| Globaler Kundenrabatt | Alle Produkte für einen Kunden | Kunde → Weitere Felder |
| Kundengruppen-Rabatt | Kategorie oder Produktgruppe für Kundengruppe | Kundengruppe → Rabatte |
| Globaler Gruppenrabatt | Alle Produkte für Kundengruppe | Kundengruppe → Weitere Felder |

---

## Individuelle Kundenrabatte

### Was sie bewirken

Individuelle Kundenrabatte ermöglichen es, einem bestimmten Kunden einen prozentualen Rabatt auf alle Produkte einer Kategorie oder Dynamischen Produktgruppe zu geben.

### So verwenden Sie sie

1. Navigieren Sie zu **Kunden → Übersicht** im Admin
2. Öffnen Sie das Kundenprofil durch Klick auf den Kundennamen
3. Scrollen Sie nach unten zum Bereich **Kundenrabatte**
4. Wählen Sie eine **Kategorie** und/oder eine **Dynamische Produktgruppe**
5. Geben Sie den **Rabatt in Prozent** ein (z.B. 10 für 10%)
6. Klicken Sie auf **Rabatt hinzufügen**
7. Speichern Sie den Kunden über den **Speichern**-Button oben rechts

### Wichtige Hinweise

- Sie müssen mindestens eine Kategorie ODER eine Dynamische Produktgruppe auswählen
- Wenn Sie beides auswählen, müssen beide Kriterien erfüllt sein (UND-Verknüpfung)
- Der Rabattwert muss zwischen 0 und 100 liegen
- Änderungen werden erst nach dem Speichern des Kundenprofils aktiv

### Tipps & Best Practices

- Verwenden Sie Dynamische Produktgruppen für flexible Rabattregeln, die automatisch neue Produkte einschließen
- Nutzen Sie Kategorien für einfache, statische Rabattzuweisungen
- Prüfen Sie die Prioritätseinstellungen, wenn ein Kunde mehrere Rabatte haben soll

---

## Kundengruppen-Rabatte

### Was sie bewirken

Kundengruppen-Rabatte ermöglichen es, allen Mitgliedern einer Kundengruppe automatisch einen Rabatt auf bestimmte Kategorien oder Produktgruppen zu geben. Dies ist ideal für B2B-Staffelpreise oder Händlerrabatte.

### So verwenden Sie sie

1. Navigieren Sie zu **Einstellungen → Shop → Kundengruppen**
2. Öffnen Sie eine Kundengruppe durch Klick auf den Namen
3. Scrollen Sie nach unten zum Bereich **Gruppenrabatte**
4. Wählen Sie eine **Kategorie** und/oder eine **Dynamische Produktgruppe**
5. Geben Sie den **Rabatt in Prozent** ein
6. Klicken Sie auf **Rabatt hinzufügen**
7. Speichern Sie die Kundengruppe

### Unterschied zu individuellen Rabatten

- Kundengruppen-Rabatte gelten automatisch für ALLE Mitglieder der Gruppe
- Sie müssen nicht jeden Kunden einzeln konfigurieren
- Bei der Priorität stehen individuelle Rabatte standardmäßig über Gruppenrabatten

### Tipps & Best Practices

- Erstellen Sie separate Kundengruppen für verschiedene Rabattstufen (z.B. "Händler Bronze", "Händler Silber", "Händler Gold")
- Kombinieren Sie mit globalen Gruppenrabatten für Basisrabatte plus Kategorierabatte

---

## Produktspezifische Rabatte

### Was sie bewirken

Produktspezifische Rabatte ermöglichen es, einen festen Rabatt auf einzelne Produkte zu setzen - unabhängig vom Kunden.

### So verwenden Sie sie

1. Navigieren Sie zu **Kataloge → Produkte**
2. Öffnen Sie ein Produkt
3. Wechseln Sie zum Tab **Weitere Felder**
4. Suchen Sie das Feld **Produktspezifischer Rabatt (%)**
5. Geben Sie den Rabattwert ein (z.B. 20 für 20%)
6. Speichern Sie das Produkt

### Wichtige Hinweise

- Produktrabatte werden nur für eingeloggte Kunden angezeigt
- Diese Rabatte können mit anderen Rabattarten kombiniert werden (je nach Prioritätsmodus)
- Sie können diese Funktion in den Plugin-Einstellungen deaktivieren

---

## Globale Kundenrabatte

### Was sie bewirken

Ein globaler Kundenrabatt gilt für ALLE Produkte im Shop für einen bestimmten Kunden.

### So verwenden Sie sie

1. Navigieren Sie zu **Kunden → Übersicht**
2. Öffnen Sie das Kundenprofil
3. Wechseln Sie zum Tab **Weitere Felder**
4. Suchen Sie das Feld **Globaler Kundenrabatt (%)**
5. Geben Sie den Rabattwert ein
6. Speichern Sie den Kunden

### Anwendungsbeispiel

Ideal für VIP-Kunden oder langjährige Stammkunden, die einen pauschalen Rabatt auf alles erhalten sollen.

---

## Globale Gruppenrabatte

### Was sie bewirken

Ein globaler Gruppenrabatt gilt für ALLE Produkte im Shop für ALLE Mitglieder einer Kundengruppe.

### So verwenden Sie sie

1. Navigieren Sie zu **Einstellungen → Shop → Kundengruppen**
2. Öffnen Sie eine Kundengruppe
3. Wechseln Sie zum Tab **Weitere Felder**
4. Suchen Sie das Feld **Globaler Rabatt (%)**
5. Geben Sie den Rabattwert ein
6. Speichern Sie die Kundengruppe

### Wichtige Hinweise

- Diese Funktion muss in den Plugin-Einstellungen aktiviert sein
- Der Rabatt gilt als Fallback, wenn kein spezifischerer Rabatt existiert

---

## Storefront-Anzeige

### Produktlisting und Produktseite

Wenn ein eingeloggter Kunde einen Rabatt hat, sieht er:
- Den reduzierten Preis als Hauptpreis
- Den Originalpreis durchgestrichen (falls konfiguriert)
- Die prozentuale Ersparnis

### Warenkorb und Checkout

Je nach Konfiguration wird der Rabatt angezeigt als:
- **Separate Rabattposition**: Eine eigene Zeile mit negativem Betrag
- **Reduzierter Preis**: Der Produktpreis ist bereits reduziert, Originalpreis durchgestrichen

### Gesamtersparnis

Falls aktiviert, erscheint eine "Sie sparen X" Meldung im Warenkorb und Checkout.

---

## Fehlerbehebung

### Rabatt wird nicht angezeigt

**Symptom**: Der Kunde sieht den Originalpreis statt den Rabattpreis

**Mögliche Ursachen**:
1. Der Kunde ist nicht eingeloggt
2. Die entsprechende Rabattart ist in den Einstellungen deaktiviert
3. Das Produkt liegt nicht in der rabattberechtigten Kategorie/Produktgruppe
4. Der Cache wurde nicht geleert

**Lösung**:
- Prüfen Sie den Login-Status
- Überprüfen Sie die Plugin-Einstellungen
- Leeren Sie den Cache unter **Einstellungen → System → Caches & Indizes**

### Falscher Rabatt wird angewendet

**Symptom**: Ein anderer Rabatt als erwartet wird angewendet

**Ursache**: Der Prioritätsmodus bestimmt, welcher Rabatt bei Überschneidungen gilt

**Lösung**:
- Prüfen Sie den Prioritätsmodus in den Plugin-Einstellungen
- Prüfen Sie alle Rabattquellen für den Kunden (individuell, global, Gruppe)

### Rabatt erscheint doppelt

**Symptom**: Ein Produkt wird mehrfach rabattiert

**Ursache**: Die Option "Rabatt nur einmal anwenden" ist deaktiviert

**Lösung**: Aktivieren Sie die Option in den Plugin-Einstellungen

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Schritt-für-Schritt Anleitungen](../how_to.md)
