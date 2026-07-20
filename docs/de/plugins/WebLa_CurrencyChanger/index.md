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
