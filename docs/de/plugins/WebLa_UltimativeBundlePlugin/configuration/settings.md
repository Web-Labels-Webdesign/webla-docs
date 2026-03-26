# Konfigurationseinstellungen

Dieses Dokument beschreibt alle verfügbaren Einstellungen für das Ultimative Bundle Plugin.

**Navigation**: Erweiterungen → Meine Erweiterungen → Ultimatives Bundle Plugin → Konfigurieren

---

## Bundle Konfiguration

### Bundles aktivieren

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Globaler Ein-/Ausschalter für die gesamte Bundle-Funktionalität. Wenn deaktiviert, werden keine Bundles auf der Storefront angezeigt.

**Anwendungsbeispiel**: Deaktivieren Sie diese Einstellung vorübergehend, wenn Sie Bundles neu konfigurieren möchten, ohne dass Kunden unfertige Angebote sehen.

---

### Bundles automatisch erstellen

| Eigenschaft      | Wert      |
| ---------------- | --------- |
| **Typ**          | Schalter  |
| **Standard**     | Aktiviert |
| **Erforderlich** | Nein      |

**Beschreibung**: Wenn aktiviert, werden Bundles automatisch im Warenkorb zusammengestellt, sobald ein passendes Produkt hinzugefügt wird. Das Plugin erkennt, ob das hinzugefügte Produkt Teil eines Bundles ist, und verknüpft es automatisch.

**Anwendungsbeispiel**: Aktivieren Sie diese Einstellung, wenn Kunden automatisch von Bundle-Rabatten profitieren sollen, ohne das Bundle explizit auf der Produktseite auswählen zu müssen.

---

### Rabatt-Darstellung

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Rabattposition im Warenkorb |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, wie der Bundle-Rabatt im Warenkorb dargestellt wird.

**Optionen**:
- `Rabattposition im Warenkorb`: Der Rabatt wird als eigene, separate Position im Warenkorb angezeigt (negative Position)
- `Direktabzug vom Produktpreis`: Der Rabatt wird direkt vom Produktpreis abgezogen und ist als solcher nicht separat im Warenkorb sichtbar

**Anwendungsbeispiel**: Wählen Sie "Rabattposition im Warenkorb", wenn Kunden den Rabatt transparent als eigene Position sehen sollen. Wählen Sie "Direktabzug", wenn der reduzierte Preis direkt am Produkt angezeigt werden soll.

---

## Zusatzoptionen Kompatibilitätskonfiguration

### Darstellungs-Konfiguration

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Beides anzeigen |
| **Erforderlich** | Nein    |

**Beschreibung**: Steuert, wie Bundles und Zusatzoptionen auf der Produktseite angezeigt werden.

**Optionen**:
- `Nur Bundles anzeigen`: Zeigt ausschließlich die Bundle-Auswahl an
- `Bundle-Items verstecken`: Versteckt die einzelnen Bundle-Artikel in der Anzeige
- `Beides anzeigen`: Zeigt sowohl Bundles als auch Zusatzoptionen an

**Anwendungsbeispiel**: Wenn Sie zusätzlich zu diesem Plugin ein Zusatzoptionen-Plugin verwenden, können Sie hier steuern, wie beide Funktionen zusammen dargestellt werden.

---

### Rabatt Berechnung

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Nur Bundles berücksichtigen |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, welche Produkte in die Rabattberechnung einbezogen werden.

**Optionen**:
- `Nur Bundles berücksichtigen`: Der Rabatt wird nur auf die Bundle-Gruppenprodukte berechnet
- `Zusatzoptionen als Bundle-Item berechnen`: Zusatzoptionen anderer Plugins werden wie Bundle-Produkte behandelt und in die Rabattberechnung einbezogen
- `Zusatzoptionen als Hauptartikel berechnen`: Zusatzoptionen werden zum Hauptproduktpreis addiert und der Rabatt auf den Gesamtpreis berechnet

**Anwendungsbeispiel**: Wenn Sie ein Zusatzoptionen-Plugin verwenden und die Optionspreise ebenfalls rabattiert werden sollen, wählen Sie eine der letzten beiden Optionen.

---

### Position der Bundle-Auswahl

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Über der Produktbeschreibung |
| **Erforderlich** | Nein    |

**Beschreibung**: Bestimmt, an welcher Position die Bundle-Auswahl auf der Produktdetailseite angezeigt wird.

**Optionen**:
- `Unter "in den Warenkorb" Button`: Die Bundle-Auswahl erscheint direkt unter dem Warenkorb-Button
- `Über der Produktbeschreibung`: Die Bundle-Auswahl erscheint oberhalb des Beschreibungs-/Bewertungsbereichs
- `Unter der Produktbeschreibung`: Die Bundle-Auswahl erscheint unterhalb des Beschreibungs-/Bewertungsbereichs

**Anwendungsbeispiel**: Wählen Sie "Unter dem Warenkorb-Button", wenn die Bundles möglichst nah an der Kaufaktion platziert sein sollen, um die Conversion zu maximieren.

---

### Bundle auf Varianten vererben

| Eigenschaft      | Wert         |
| ---------------- | ------------ |
| **Typ**          | Schalter     |
| **Standard**     | Deaktiviert  |
| **Erforderlich** | Nein         |

**Beschreibung**: Wenn aktiviert, werden Bundles, die einem Hauptprodukt zugewiesen sind, auch auf dessen Varianten angezeigt.

**Anwendungsbeispiel**: Aktivieren Sie diese Einstellung, wenn Sie ein Bundle für ein T-Shirt erstellt haben und es automatisch bei allen Farbvarianten angezeigt werden soll.

---

### Unvollständige Bundles im Warenkorb erlauben

| Eigenschaft      | Wert        |
| ---------------- | ----------- |
| **Typ**          | Schalter    |
| **Standard**     | Deaktiviert |
| **Erforderlich** | Nein        |

**Beschreibung**: Wenn aktiviert, können Bundles auch dann in den Warenkorb gelegt werden, wenn nicht alle Bundle-Gruppen ein ausgewähltes Produkt haben. Wenn deaktiviert, müssen alle Pflicht-Gruppen ein Produkt enthalten, bevor das Bundle gebildet wird.

**Anwendungsbeispiel**: Aktivieren Sie diese Einstellung, wenn Kunden nur einzelne Teile eines Bundles auswählen können sollen, ohne alle Gruppen befüllen zu müssen.

---

## Zahlungs-Einstellungen

### Bestellpositionen anpassen

| Eigenschaft      | Wert    |
| ---------------- | ------- |
| **Typ**          | Auswahl |
| **Standard**     | Neuberechnung |
| **Erforderlich** | Nein    |

**Beschreibung**: Steuert, wie die Bestellpositionen nach Abschluss der Bestellung behandelt werden.

**Optionen**:
- `Neuberechnung von Positionen, um individuelle Preise anzuzeigen`: Die Originalpreise der einzelnen Produkte werden in der Bestellung wiederhergestellt, sodass die Einzelpreise sichtbar sind
- `Preise, wie im Warenkorb angezeigt, in der Bestellung beibehalten`: Die Preise bleiben so, wie sie im Warenkorb angezeigt wurden (inklusive eventueller Rabattierung)

**Anwendungsbeispiel**: Wählen Sie "Neuberechnung", wenn Sie in der Bestellübersicht und auf Rechnungen die Originalpreise der einzelnen Produkte sehen möchten. Wählen Sie "Beibehalten", wenn die Preise exakt wie im Warenkorb dargestellt werden sollen.

---

## Empfohlene Konfigurationen

### Für einfache Bundle-Angebote

| Einstellung                         | Empfohlener Wert                   |
| ----------------------------------- | ---------------------------------- |
| Bundles aktivieren                  | Aktiviert                          |
| Bundles automatisch erstellen       | Deaktiviert                        |
| Rabatt-Darstellung                  | Rabattposition im Warenkorb        |
| Position der Bundle-Auswahl         | Über der Produktbeschreibung       |
| Unvollständige Bundles erlauben     | Deaktiviert                        |
| Bestellpositionen anpassen          | Neuberechnung                      |

### Für maximale Conversion

| Einstellung                         | Empfohlener Wert                   |
| ----------------------------------- | ---------------------------------- |
| Bundles aktivieren                  | Aktiviert                          |
| Bundles automatisch erstellen       | Aktiviert                          |
| Rabatt-Darstellung                  | Direktabzug vom Produktpreis       |
| Position der Bundle-Auswahl         | Unter "in den Warenkorb" Button    |
| Unvollständige Bundles erlauben     | Aktiviert                          |
| Bestellpositionen anpassen          | Neuberechnung                      |

### Für Shops mit Zusatzoptionen-Plugin

| Einstellung                         | Empfohlener Wert                              |
| ----------------------------------- | ---------------------------------------------- |
| Darstellungs-Konfiguration          | Beides anzeigen                                |
| Rabatt Berechnung                   | Zusatzoptionen als Bundle-Item berechnen       |
