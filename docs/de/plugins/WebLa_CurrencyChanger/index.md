# Währungsanzeige (Currency Changer)

> Zeigt jeden Preis zusätzlich in einer vom Besucher gewählten Währung an, mit tagesaktuellen Kursen der Europäischen Zentralbank.

## Übersicht

Internationale Besucher können einen Preis nur schwer einschätzen, wenn er in einer fremden Währung angegeben ist. Dieses Plugin blendet neben Ihrem regulären Preis einen zweiten Betrag in der Währung ein, die der Besucher selbst auswählt. Die Umrechnungskurse stammen direkt von der Europäischen Zentralbank und werden automatisch aktualisiert.

Wichtig ist dabei, was das Plugin **nicht** tut: Bestellung, Checkout-Abwicklung und Rechnung laufen unverändert in Ihrer Shop-Standardwährung. Der umgerechnete Betrag ist eine reine Orientierungshilfe für den Kunden und wird als „ungefährer Preis" ausgewiesen. Ihre Buchhaltung, Steuerlogik und Zahlungsabwicklung bleiben dadurch unberührt.

Das Plugin richtet sich an Shops, die international verkaufen, aber den Aufwand eines echten Mehrwährungs-Setups vermeiden möchten.

## Hauptfunktionen

- **Zweitwährung im gesamten Shop**: Der umgerechnete Preis erscheint auf der Produktdetailseite, in Listen- und Suchansichten, im Warenkorb und im Checkout inklusive Summen und Steuerausweis.
- **Über 30 Währungen**: Alle von der EZB veröffentlichten Referenzwährungen stehen mit übersetzten Namen zur Verfügung.
- **Automatische Kursaktualisierung**: Ein Hintergrundprozess holt die aktuellen Kurse, ohne dass Sie eingreifen müssen.
- **Währungsauswahl in der Topbar**: Der Besucher wählt seine Währung über ein Dropdown im Kopfbereich, wahlweise mit Länderflaggen oder Währungssymbolen.
- **Eigener Umrechnungskurs**: Je Währungspaar kann ein abweichender Kurs hinterlegt werden, etwa um Wechselkursschwankungen abzufedern.

## Preis-Aktualisierungsmodus

Das Plugin kann in zwei Modi arbeiten, die Sie unter **Preis-Aktualisierungsmodus → Aktualisierungsmodus** einstellen.

- **Nur Storefront-Anzeige** (Standard): Preise werden ausschließlich für die Anzeige in der Storefront umgerechnet. Die Währungs- und Preisdaten von Shopware selbst bleiben unangetastet, Bestellung und Rechnung bleiben in Ihrer Shop-Standardwährung. So hat das Plugin schon immer gearbeitet, und jeder bestehende Shop behält dieses Verhalten nach einem Update bei — der Wechsel in den anderen Modus ist eine bewusste Entscheidung und geschieht nicht von selbst.
- **Shopware-Preisdaten aktualisieren**: Der Wechselkurs wird stattdessen direkt in die Währungs- und Preisdaten von Shopware geschrieben. Die Storefront selbst bleibt vom Plugin vollständig unberührt, und Shopware übernimmt die Preisberechnung nativ überall: in der Storefront, im Warenkorb, in der Bestellung, über die API und in Exporten.

**Bevor Sie in den Modus „Shopware-Preisdaten aktualisieren" wechseln, sollten Sie wissen, was mit Preisen geschieht, die Sie selbst für eine Währung hinterlegt haben.** Eine zweite Einstellung, **Umgang mit währungsspezifischen Preisen**, legt fest, was mit einem solchen Preis passiert — etwa einem bewusst gewählten Preis von 9,99 £:

- **Entfernen und von Shopware berechnen lassen** (Standard): Der hinterlegte Währungspreis wird gelöscht, Shopware berechnet diesen Preis stattdessen aus dem Preis in der Standardwährung und dem Wechselkurs.
- **Mit umgerechneten Werten überschreiben**: Der hinterlegte Währungspreis bleibt erhalten, sein Wert wird aber bei jeder Aktualisierung durch den umgerechneten Betrag ersetzt.

In beiden Fällen wird der Wechselkurs zur einzigen maßgeblichen Quelle für diesen Preis. Ein von Hand gewählter Betrag übersteht die nächste Aktualisierung nicht — das ist der Sinn dieses Modus, das sollte für Sie aber keine Überraschung sein.

Das gilt zusätzlich nur bei der Strategie „Mit umgerechneten Werten überschreiben": Enthält ein währungsspezifischer Preis einen Streichpreis oder einen „Günstigster Preis (letzten 30 Tage)"-Eintrag, den der Preis in der Standardwährung nicht hat, entfällt dieser Eintrag, da keine Berechnungsgrundlage vorhanden ist. Wenn Sie solche Preise pflegen, verwenden Sie stattdessen „Entfernen und von Shopware berechnen lassen".

**Versionshinweis**: Das gilt immer, wenn der Aktualisierungsmodus auf „Shopware-Preisdaten aktualisieren" steht, unabhängig von der gewählten Strategie. Unter Shopware-Versionen vor 6.6.10 kann der Cache nach einer Kursänderung nicht automatisch geleert werden. Die Storefront zeigt dann möglicherweise noch die vorherigen Preise an, bis der Cache abläuft — standardmäßig nach bis zu zwei Stunden. Ab Shopware 6.6.10 geschieht dies automatisch.

## Voraussetzungen

- **Shopware-Version**: 6.6.0 bis einschließlich 6.7.x
- **PHP-Version**: 8.2 oder höher (Anforderung von Shopware 6.6/6.7)
- **Shop-Standardwährung muss Euro sein**: Die Kurse der Europäischen Zentralbank sind Euro-Referenzkurse. Das Plugin rechnet ausgehend von Euro um und funktioniert daher nur in Shops, deren Standardwährung Euro ist. Eine Erweiterung auf andere Basiswährungen ist auf Anfrage möglich.

## Kompatibilität

Dieses Plugin unterstützt mehrere Shopware-Versionen aus einer Codebasis:

| Shopware-Version | Status         | Hinweise                                                        |
| ---------------- | -------------- | --------------------------------------------------------------- |
| 6.6.x            | ✅ Unterstützt | Vollständig unterstützt                                          |
| 6.7.x            | ✅ Unterstützt | Vollständig unterstützt                                          |
| 6.5.x und älter  | ❌ Nicht mehr  | Letzte unterstützte Version war 2.0.1                            |

Sie benötigen für ein Shop-Update von 6.6 auf 6.7 keine andere Plugin-Version. Dieselbe Installation deckt beide Major-Versionen ab.

## Schnellstart

1. Installieren Sie das Plugin über **Erweiterungen → Meine Erweiterungen** oder via Composer.
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**.
3. Legen Sie unter **Erweiterungen → Meine Erweiterungen → Währungsanzeige → Konfigurieren** die Standard-Zielwährung fest.
4. Warten Sie den ersten Durchlauf der automatischen Kursaktualisierung ab (spätestens nach 30 Minuten) oder stoßen Sie ihn manuell an — siehe [Anleitungen](how_to.md). **Vor dem ersten Durchlauf ist die Währungsauswahl im Shop nicht sichtbar**, weil noch keine Kurse vorliegen.
5. Prüfen Sie das Ergebnis unter **Einstellungen → Erweiterungen → Storefront Währungen**.

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) – Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) – So nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) – Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) – Versionshistorie und Updates
