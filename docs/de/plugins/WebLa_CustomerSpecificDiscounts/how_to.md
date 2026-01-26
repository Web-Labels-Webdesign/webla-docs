# Anleitungen

Diese Anleitung bietet Schritt-für-Schritt-Workflows für häufige Aufgaben mit Kundenspezifische Rabatte.

---

## Wie das Plugin funktioniert

### Datenfluss-Übersicht

```
Kunde loggt sich ein → Plugin prüft alle Rabattquellen → Prioritätsmodus bestimmt Rabatt → Preis wird angepasst
```

**Detaillierter Ablauf**:
1. Ein Kunde loggt sich in den Shop ein
2. Das Plugin prüft alle verfügbaren Rabattquellen:
   - Produktspezifische Rabatte (Custom Field am Produkt)
   - Individuelle Kundenrabatte (Kategorie/Produktgruppe)
   - Globaler Kundenrabatt (Custom Field am Kunden)
   - Kundengruppen-Rabatte (Kategorie/Produktgruppe)
   - Globaler Gruppenrabatt (Custom Field an der Kundengruppe)
3. Der Prioritätsmodus bestimmt, welcher Rabatt angewendet wird
4. Der Preis wird in Produktlisting, Produktseite und Warenkorb angepasst

---

## Häufige Workflows

### Anleitung: B2B-Händlerrabatt einrichten

**Ziel**: Alle Händler erhalten 15% Rabatt auf alle Produkte

**Voraussetzungen**:
- Eine Kundengruppe "Händler" existiert oder muss erstellt werden
- Kunden sind dieser Gruppe zugeordnet

**Schritte**:

1. **Kundengruppe öffnen**
   - Navigieren Sie zu: `Einstellungen → Shop → Kundengruppen`
   - Klicken Sie auf die Kundengruppe "Händler"

2. **Globalen Rabatt setzen**
   - Wechseln Sie zum Tab "Weitere Felder"
   - Tragen Sie bei "Globaler Rabatt (%)" den Wert `15` ein

3. **Speichern und Cache leeren**
   - Klicken Sie auf "Speichern"
   - Navigieren Sie zu: `Einstellungen → System → Caches & Indizes`
   - Klicken Sie auf "Alle leeren"

**Ergebnis**: Alle Mitglieder der Händler-Gruppe sehen nun 15% reduzierte Preise auf alle Produkte.

---

### Anleitung: Kategorierabatt für einen Kunden

**Ziel**: Ein bestimmter Kunde erhält 10% Rabatt auf alle Produkte einer Kategorie

**Voraussetzungen**:
- Der Kunde existiert im System
- Die Kategorie existiert und enthält Produkte

**Schritte**:

1. **Kundenprofil öffnen**
   - Navigieren Sie zu: `Kunden → Übersicht`
   - Suchen Sie den Kunden und klicken Sie auf den Namen

2. **Kundenrabatte-Bereich finden**
   - Scrollen Sie nach unten zum Bereich "Kundenrabatte"

3. **Rabatt hinzufügen**
   - Wählen Sie im Dropdown "Kategorie" die gewünschte Kategorie
   - Lassen Sie "Dynamische Produktgruppe" leer
   - Geben Sie bei "Rabatt" den Wert `10` ein
   - Klicken Sie auf "Rabatt hinzufügen"

4. **Kunden speichern**
   - Klicken Sie oben rechts auf "Speichern"

**Ergebnis**: Der Kunde sieht nun 10% Rabatt auf alle Produkte der gewählten Kategorie.

**Fehlerbehebung**: Falls der Rabatt nicht erscheint, prüfen Sie:
- Ist der Kunde eingeloggt?
- Sind die Produkte der Kategorie zugeordnet?
- Wurde der Cache geleert?

---

### Anleitung: Staffelrabatte für Kundengruppen

**Ziel**: Verschiedene Kundengruppen erhalten unterschiedliche Rabatte auf eine Produktkategorie

**Voraussetzungen**:
- Mehrere Kundengruppen existieren (z.B. "Bronze", "Silber", "Gold")
- Eine Kategorie "Premium-Produkte" existiert

**Schritte**:

1. **Bronze-Gruppe konfigurieren**
   - Navigieren Sie zu: `Einstellungen → Shop → Kundengruppen`
   - Öffnen Sie die Gruppe "Bronze"
   - Scrollen Sie zum Bereich "Gruppenrabatte"
   - Wählen Sie Kategorie: "Premium-Produkte"
   - Rabatt: `5`
   - Klicken Sie auf "Rabatt hinzufügen" und "Speichern"

2. **Silber-Gruppe konfigurieren**
   - Öffnen Sie die Gruppe "Silber"
   - Kategorie: "Premium-Produkte", Rabatt: `10`
   - Speichern

3. **Gold-Gruppe konfigurieren**
   - Öffnen Sie die Gruppe "Gold"
   - Kategorie: "Premium-Produkte", Rabatt: `15`
   - Speichern

4. **Cache leeren**
   - Navigieren Sie zu: `Einstellungen → System → Caches & Indizes`
   - Klicken Sie auf "Alle leeren"

**Ergebnis**:
- Bronze-Kunden: 5% Rabatt auf Premium-Produkte
- Silber-Kunden: 10% Rabatt auf Premium-Produkte
- Gold-Kunden: 15% Rabatt auf Premium-Produkte

---

### Anleitung: VIP-Kunden pauschalen Rabatt geben

**Ziel**: Ein einzelner VIP-Kunde erhält 20% auf ALLE Produkte

**Schritte**:

1. **Kundenprofil öffnen**
   - Navigieren Sie zu: `Kunden → Übersicht`
   - Öffnen Sie das Profil des VIP-Kunden

2. **Globalen Kundenrabatt setzen**
   - Wechseln Sie zum Tab "Weitere Felder"
   - Suchen Sie das Feld "Globaler Kundenrabatt (%)"
   - Tragen Sie `20` ein

3. **Speichern**
   - Klicken Sie auf "Speichern"

**Ergebnis**: Der VIP-Kunde sieht 20% Rabatt auf alle Produkte im Shop.

---

### Anleitung: Aktionsprodukt mit festem Rabatt

**Ziel**: Ein bestimmtes Produkt soll immer 25% Rabatt haben (für alle eingeloggten Kunden)

**Schritte**:

1. **Produkt öffnen**
   - Navigieren Sie zu: `Kataloge → Produkte`
   - Öffnen Sie das gewünschte Produkt

2. **Produktrabatt setzen**
   - Wechseln Sie zum Tab "Weitere Felder"
   - Suchen Sie "Produktspezifischer Rabatt (%)"
   - Tragen Sie `25` ein

3. **Speichern**
   - Klicken Sie auf "Speichern"

**Ergebnis**: Alle eingeloggten Kunden sehen 25% Rabatt auf dieses Produkt.

**Hinweis**: Je nach Prioritätsmodus kann ein individueller Kundenrabatt diesen Produktrabatt überschreiben.

---

### Anleitung: Migration von WebLa_ProductGroupDiscount

**Ziel**: Bestehende Rabatte vom alten Plugin migrieren

**Voraussetzungen**:
- Das alte Plugin WebLa_ProductGroupDiscount war installiert
- Kundendaten enthalten das Feld `webla_product_group_discount_products`

**Schritte**:

1. **Plugin installieren und aktivieren**
   - Das neue Plugin erkennt automatisch die alten Rabattdaten
   - Ihre Kunden erhalten ihre Rabatte weiterhin

2. **Migrationstool nutzen** (optional)
   - Verbinden Sie sich per SSH mit Ihrem Server
   - Führen Sie aus:
     ```
     bin/console webla:migrate-product-group-discounts
     ```
   - Der Befehl konvertiert die Text-basierten Rabatte in die neue Tabellenstruktur

3. **Verifizieren**
   - Prüfen Sie die Kundenrabatte im Admin
   - Testen Sie mit einem Testkunden im Frontend

**Ergebnis**: Alle Rabatte sind in das neue System übertragen.

---

## Schnellreferenz

| Aufgabe | Navigation | Wichtige Einstellungen |
| ------- | ---------- | ---------------------- |
| Kundenrabatt hinzufügen | Kunden → [Kunde] → Kundenrabatte | Kategorie, Produktgruppe, Prozent |
| Gruppenrabatt hinzufügen | Einstellungen → Kundengruppen → [Gruppe] → Gruppenrabatte | Kategorie, Produktgruppe, Prozent |
| Globaler Kundenrabatt | Kunden → [Kunde] → Weitere Felder | Globaler Kundenrabatt (%) |
| Globaler Gruppenrabatt | Einstellungen → Kundengruppen → [Gruppe] → Weitere Felder | Globaler Rabatt (%) |
| Produktrabatt | Kataloge → Produkte → [Produkt] → Weitere Felder | Produktspezifischer Rabatt (%) |
| Priorität ändern | Erweiterungen → Kundenspezifische Rabatte → Konfigurieren | Rabatt-Prioritätsmodus |

---

## Best Practices

1. **Konsistente Namensgebung**: Benennen Sie Ihre Kundengruppen klar (z.B. "Händler 10%", "VIP 20%")
2. **Regelmäßige Überprüfung**: Prüfen Sie regelmäßig, welche Rabatte aktiv sind
3. **Cache beachten**: Nach Rabattänderungen immer den Cache leeren
4. **Testen vor Livegang**: Testen Sie neue Rabatte mit einem Testkunden
5. **Dokumentation pflegen**: Halten Sie fest, welche Kunden welche Sonderkonditionen haben

## Was Sie vermeiden sollten

- Überlappende Rabatte ohne klare Prioritätsregel - definieren Sie den Prioritätsmodus
- Zu viele individuelle Kundenrabatte - nutzen Sie Kundengruppen für gleichartige Rabatte
- Vergessen des Cache-Löschens - Rabattänderungen erscheinen erst nach Cache-Leerung
