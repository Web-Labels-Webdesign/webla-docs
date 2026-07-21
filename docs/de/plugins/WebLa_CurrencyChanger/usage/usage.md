# Nutzungsanleitung

Diese Anleitung behandelt alle Funktionen und Möglichkeiten der Währungsanzeige.

---

## Inhaltsverzeichnis

- [Wechselkurse verwalten](#wechselkurse-verwalten)
- [Eigener Umrechnungskurs](#eigener-umrechnungskurs)
- [Automatische Kursaktualisierung](#automatische-kursaktualisierung)
- [Storefront Funktionen](#storefront-funktionen)
- [Preis-Aktualisierungsmodus](#preis-aktualisierungsmodus)
- [Cookie-Hinweis](#cookie-hinweis)
- [Fehlerbehebung](#fehlerbehebung)

---

## Wechselkurse verwalten

### Was sie bewirkt

Alle Währungspaare, die das Plugin kennt, sind in einer zentralen Übersicht einsehbar. Dort prüfen Sie, welche Kurse aktuell gelten und wann sie zuletzt aktualisiert wurden.

### So verwenden Sie sie

1. Öffnen Sie **Einstellungen → Erweiterungen → Storefront Währungen**.
2. Sie sehen eine Liste aller Währungspaare mit den Spalten **Quell Währung**, **Ziel Währung** und **Umrechnungskurs**.
3. Über das Bearbeiten-Symbol am Zeilenende ändern Sie einen Wert direkt in der Liste.

**Ort**: Einstellungen → Erweiterungen → Storefront Währungen

### Tipps & Best Practices

- Die Liste füllt sich erst, wenn die automatische Kursaktualisierung mindestens einmal gelaufen ist. Direkt nach der Installation ist sie leer.
- Ändern Sie den Wert in **Umrechnungskurs** nicht von Hand. Er wird beim nächsten Durchlauf überschrieben. Für dauerhaft abweichende Kurse nutzen Sie den eigenen Umrechnungskurs.

---

## Eigener Umrechnungskurs

### Was sie bewirkt

Neben dem offiziellen EZB-Kurs lässt sich je Währungspaar ein eigener Kurs hinterlegen. Damit federn Sie Wechselkursschwankungen ab oder kalkulieren einen Aufschlag ein, der Ihre Kosten bei Auslandszahlungen deckt.

### So verwenden Sie sie

1. Öffnen Sie **Einstellungen → Erweiterungen → Storefront Währungen**.
2. Blenden Sie über das Zahnrad-Symbol oben rechts die Spalte **Eigener Umrechnungskurs** ein, falls sie nicht sichtbar ist.
3. Tragen Sie den gewünschten Wert in der betreffenden Zeile ein und speichern Sie.

### Tipps & Best Practices

- Der eigene Kurs wird von der automatischen Aktualisierung **nicht** überschrieben. Nur der Wert in **Umrechnungskurs** wird erneuert.
- Setzen Sie den Wert zurück, wenn wieder der offizielle Kurs gelten soll.

---

## Automatische Kursaktualisierung

### Was sie bewirkt

Ein Hintergrundprozess prüft regelmäßig, ob neue Kurse vorliegen, und schreibt Änderungen in die Kursliste. Sie müssen dafür nichts tun.

### Wie oft sie läuft

Die Aufgabe ist auf ein Intervall von **30 Minuten** eingestellt. Die Europäische Zentralbank veröffentlicht ihre Referenzkurse allerdings nur **einmal pro Bankarbeitstag**, üblicherweise am Nachmittag. Häufigere Durchläufe liefern deshalb in der Regel keine neuen Werte, sie stellen lediglich sicher, dass ein neuer Kurs zeitnah ankommt.

An Wochenenden und Feiertagen veröffentlicht die EZB keine neuen Kurse. Der zuletzt gültige Wert bleibt dann bestehen.

### Status prüfen

Unter **Einstellungen → System → Aufgaben** finden Sie die Aufgabe `webla-update-storefront-currencies` mit ihrer nächsten geplanten Ausführung.

> **Voraussetzung**: Die geplanten Aufgaben von Shopware müssen auf Ihrem Server laufen. Ist das nicht der Fall, aktualisieren sich die Kurse nie. Fragen Sie im Zweifel Ihren Hoster.

---

## Storefront Funktionen

### Währungsauswahl in der Topbar

**Wo sie erscheint**: Im Kopfbereich des Shops, in derselben Leiste wie die Sprachauswahl.

**Was Kunden sehen**: Ein Auswahlmenü mit allen verfügbaren Währungen. Je nach Konfiguration mit Länderflagge und Währungscode oder kompakt mit Währungssymbol. Die getroffene Auswahl gilt sofort für den gesamten Shop.

**Anpassungsmöglichkeiten**: Flaggen und Beschriftung steuern Sie über die [Einstellungen](../configuration/settings.md).

### Preisanzeige

**Wo sie erscheint**: Überall dort, wo ein Preis steht:

- Produktdetailseite
- Produktlisten in Kategorien und Suchergebnissen
- Warenkorb und Offcanvas-Warenkorb
- Checkout inklusive Gesamtsumme und Steuerausweis

**Was Kunden sehen**: Unter dem regulären Preis erscheint der umgerechnete Betrag, gekennzeichnet als **ungefährer Preis**. Diese Kennzeichnung ist bewusst gewählt: Der tatsächlich abgebuchte Betrag richtet sich nach dem Kurs der Bank des Kunden zum Zeitpunkt der Zahlung und kann geringfügig abweichen.

### Was in der Shop-Währung bleibt

Der umgerechnete Betrag ist reine Information. Unverändert in Ihrer Shop-Standardwährung bleiben:

- Der tatsächlich belastete Zahlbetrag
- Die Bestellung im Admin-Bereich
- Rechnungen und alle weiteren Belege

---

## Preis-Aktualisierungsmodus

Das Plugin kann in einem von zwei Modi arbeiten, gesteuert über die Einstellung **Aktualisierungsmodus** im Bereich **Preis-Aktualisierungsmodus** der Plugin-Konfiguration (**Erweiterungen → Meine Erweiterungen → Währungsanzeige → Konfigurieren**). Der Modus entscheidet, ob die Währungsumrechnung eine rein optische Ergänzung der Storefront bleibt, oder ob daraus echter, nativer Mehrwährungsverkauf wird, den Shopware selbst übernimmt. Die Einstellung selbst ist in der [Einstellungsreferenz](../configuration/settings.md) beschrieben.

### Nur Storefront-Anzeige (Standard)

So hat das Plugin schon immer gearbeitet, und jeder bestehende Shop behält dieses Verhalten nach einem Update unverändert bei.

- Preise werden ausschließlich **für die Anzeige** umgerechnet und neben dem regulären Shop-Preis eingeblendet — genau wie oben unter [Storefront Funktionen](#storefront-funktionen) beschrieben.
- Die Währungs- und Preisdaten von Shopware selbst bleiben unangetastet.
- Der Besucher wählt seine Währung über **die eigene Währungsauswahl des Plugins** im Kopfbereich.
- **Bestellung und Rechnung bleiben in der Standardwährung des Shops.** Die dem Besucher angezeigte Umrechnung ist reine Information.

### Shopware-Preisdaten aktualisieren

- Die Wechselkurse werden direkt in die **Währungs- und Preisdaten von Shopware** geschrieben. Ab diesem Zeitpunkt übernimmt Shopware die Preisberechnung nativ überall: in der Storefront, im Warenkorb, in der Bestellung, über die API und in Exporten.
- Die Storefront bleibt in diesem Modus vom Plugin vollständig unberührt — **die eigene Währungsauswahl des Plugins wird nicht mehr angezeigt**.
- Da Shopware die Preisberechnung nun selbst übernimmt, werden **Bestellung und Rechnung in der vom Kunden gewählten Währung ausgestellt**. Das ist ein echter Währungswechsel und keine reine Anzeige-Umrechnung — der entscheidende praktische Unterschied zum Standardmodus, und der Punkt, den Sie vor dem Umschalten verstanden haben sollten.

Ein von Hand für eine bestimmte Währung hinterlegter Preis — etwa ein bewusst gewählter Preis von 9,99 — übersteht in diesem Modus die nächste Aktualisierung nicht. Je nach der in der [Einstellungsreferenz](../configuration/settings.md) gewählten Strategie wird er entweder entfernt oder mit dem umgerechneten Wert überschrieben — in beiden Fällen wird der Wechselkurs zur einzigen maßgeblichen Quelle für diesen Preis.

### Shopwares eigene Währungsauswahl einrichten

Der Wechsel zu **Shopware-Preisdaten aktualisieren** lässt nicht automatisch eine Währungsauswahl in der Storefront erscheinen. Eine in diesem Modus angezeigte Auswahl ist **Shopwares eigene**, nicht die des Plugins, und Shopware zeigt sie nur an, wenn sie richtig eingerichtet wurde.

1. Legen Sie alle gewünschten Währungen unter **Einstellungen → Währungen** an, falls noch nicht vorhanden.
2. Weisen Sie jede Währung dem betreffenden Verkaufskanal zu: Öffnen Sie **Verkaufskanal → (Kanal auswählen) → Registerkarte „Allgemein"** und tragen Sie die Währungen im Mehrfachauswahlfeld **Währungen** ein. Legen Sie an derselben Stelle die **Standardwährung** für diesen Verkaufskanal fest.
3. **Shopware zeigt eine Währungsauswahl erst an, wenn mindestens zwei Währungen dem Verkaufskanal zugewiesen sind.** Ist nur eine Währung zugewiesen, erscheint überhaupt keine Auswahl — das ist reguläres Shopware-Verhalten und keine Einschränkung des Plugins.
4. Eine Währung, die unter Einstellungen → Währungen existiert, aber keinem Verkaufskanal zugewiesen ist, erscheint niemals in der Storefront — unabhängig davon, wie viele Währungen Sie angelegt haben.

> **Tipp**: Die Reihenfolge der Währungen in Shopwares eigener Auswahl folgt der internen Sortierung von Shopware, nicht dem Alphabet.

### Den passenden Modus wählen

- Wählen Sie **Nur Storefront-Anzeige**, um Besuchern einen Preis in einer vertrauten Währung zu zeigen, während Sie weiterhin in Ihrer eigenen Shop-Währung verkaufen und abrechnen. Die Auswirkung ist gering: An Ihren Katalog- und Preisdaten ändert sich nichts.
- Wählen Sie **Shopware-Preisdaten aktualisieren**, um tatsächlich in mehreren Währungen zu verkaufen — Shopware wickelt Warenkorb, Bestellung und Rechnung dann in der vom Kunden gewählten Währung ab. Die Auswirkung ist größer, da gespeicherte Preisdaten verändert werden — die Warnhinweise dazu finden Sie in der [Einstellungsreferenz](../configuration/settings.md).

---

## Cookie-Hinweis

Damit die Währungsauswahl eines Besuchers über die Sitzung hinweg erhalten bleibt, setzt das Plugin ein Cookie mit dem Namen `custom_currency_selection` und einer Laufzeit von einem Tag.

Das Cookie erscheint im Cookie-Hinweis Ihres Shops in der Gruppe der **technisch notwendigen** Cookies unter der Bezeichnung **ausgewählte Währung**. Es speichert ausschließlich den gewählten Währungscode und keinerlei personenbezogene Daten.

---

## Fehlerbehebung

### Die Währungsauswahl erscheint nicht im Shop

**Symptom**: Im Kopfbereich ist kein Auswahlmenü zu sehen.

**Ursache**: In den allermeisten Fällen liegen noch keine Kurse vor, weil die automatische Aktualisierung noch nicht gelaufen ist.

**Lösung**: Prüfen Sie unter **Einstellungen → Erweiterungen → Storefront Währungen**, ob die Liste Einträge enthält. Ist sie leer, stoßen Sie die Aktualisierung manuell an — siehe [Anleitungen](../how_to.md). Bleibt sie auch danach leer, prüfen Sie, ob die geplanten Aufgaben auf Ihrem Server laufen und ob Ihr Server die EZB-Adresse erreichen darf.

### Es werden keine umgerechneten Preise angezeigt

**Symptom**: Das Auswahlmenü ist da, unter den Preisen steht aber nichts.

**Ursache**: Die Standardwährung Ihres Shops ist nicht Euro, oder unter **Default Source Currency** steht ein anderer Wert als `EUR`.

**Lösung**: Setzen Sie **Default Source Currency** zurück auf `EUR`. Das Plugin rechnet ausgehend von den Euro-Referenzkursen der EZB und benötigt Euro als Shop-Standardwährung.

### Die Kurse sind veraltet

**Symptom**: Der Wert unter **Aktualisiert am** liegt mehrere Tage zurück.

**Ursache**: Die geplanten Aufgaben laufen nicht, oder Ihr Server erreicht die EZB nicht.

**Lösung**: Prüfen Sie unter **Einstellungen → System → Aufgaben** den Status der Aufgabe `webla-update-storefront-currencies`. Ein Rückstand von zwei bis drei Tagen über ein langes Wochenende ist dagegen normal, weil die EZB an Feiertagen keine Kurse veröffentlicht.

### Eine bestimmte Währung fehlt

**Symptom**: Die gewünschte Währung steht nicht im Auswahlmenü.

**Ursache**: Das Plugin bietet genau die Währungen an, die die Europäische Zentralbank veröffentlicht. Währungen außerhalb dieser Liste sind nicht verfügbar.

**Lösung**: Hierfür gibt es keine Einstellung. Sprechen Sie uns an, wenn Sie eine zusätzliche Währung benötigen.

---

## Verwandte Dokumentation

- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
