# Adressvalidierung auf Hausnummer und Sonderzeichen

> Prüft die Eingaben in den Adressfeldern "Straße" und "Ort" auf Sonderzeichen, Mindestlänge und eine vorhandene Hausnummer.

## Übersicht

Fehlerhafte Adressdaten kosten Zeit und Geld: Sendungen kommen zurück, der Support muss nachfassen, und Bestellungen verzögern sich. Häufig entstehen solche Fehler schon bei der Eingabe — durch vergessene Hausnummern, Tippfehler wie `Muster..straße` oder Platzhalter-Eingaben.

Dieses Plugin prüft die Felder **Straße** und **Ort** direkt im Browser Ihrer Kunden, während der Eingabe und beim Absenden des Formulars. Passt etwas nicht, erscheint ein konkreter Hinweis unter dem betroffenen Feld, und das Formular wird nicht abgeschickt. Ihre Kunden können den Fehler sofort korrigieren, statt später vom Support kontaktiert zu werden.

Sie entscheiden selbst, wie streng geprüft wird: Alle Regeln lassen sich einzeln ein- und ausschalten und pro Verkaufskanal unterschiedlich konfigurieren. Nach der Installation ist das Plugin zunächst inaktiv — es greift erst, wenn Sie es für einen Verkaufskanal aktivieren.

## Hauptfunktionen

- **Sonderzeichen-Prüfung**: Sie legen je Feld fest, welche Sonderzeichen erlaubt sind. Alles andere wird abgelehnt.
- **Hausnummern-Prüfung**: Das Straßenfeld muss mindestens eine Ziffer enthalten. Fehlt sie, wird die Eingabe abgelehnt.
- **Mindestlänge**: Für Straße und Ort lässt sich eine Mindestanzahl an Zeichen erzwingen.
- **Schutz vor typischen Fehleingaben**: Aufeinanderfolgende Sonderzeichen (`Muster..straße`) und Sonderzeichen am Anfang oder Ende (`- Musterstraße`) werden blockiert.
- **Automatische Korrektur**: Vor der Hausnummer wird beim Absenden ein fehlendes Leerzeichen ergänzt, aus `Musterstr.1` wird `Musterstr. 1`.
- **Klare Fehlermeldungen**: Jede Regel hat einen eigenen, verständlichen Hinweistext. Verstößt eine Eingabe gegen mehrere Regeln, erscheinen alle Hinweise gleichzeitig.
- **Pro Verkaufskanal konfigurierbar**: Jeder Verkaufskanal kann eigene Regeln haben.

## Voraussetzungen

- Shopware-Version: 6.6.0 oder neuer (unterstützt bis einschließlich 6.7.x)
- PHP-Version: gemäß den Anforderungen Ihrer Shopware-Installation
- Keine weiteren Abhängigkeiten oder externen Dienste

## Kompatibilität

Dieses Plugin unterstützt mehrere Shopware-Versionen aus einer Codebasis:

| Shopware-Version | Status         | Hinweise                                                        |
| ---------------- | -------------- | --------------------------------------------------------------- |
| 6.6.x            | ✅ Unterstützt | Vollständiger Funktionsumfang                                    |
| 6.7.x            | ✅ Unterstützt | Vollständiger Funktionsumfang, angepasst an die neuen Adressfelder |

## Schnellstart

1. Installieren Sie das Plugin über den Plugin Manager oder Composer.
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**.
3. Öffnen Sie die Konfiguration unter **Erweiterungen → Meine Erweiterungen → Adressvalidierung auf Hausnummer und Sonderzeichen → Konfigurieren**.
4. Wählen Sie oben den gewünschten **Verkaufskanal** aus und schalten Sie **Für diesen Verkaufskanal aktivieren** ein.
5. Tragen Sie unter **Straße - Erlaubte Sonderzeichen** die Zeichen ein, die Sie zulassen möchten, zum Beispiel `.-/`.
6. Speichern Sie und testen Sie das Ergebnis im Kundenkonto Ihrer Storefront.

> **Wichtig**: Ohne Schritt 4 bleibt das Plugin wirkungslos. Die Aktivierung erfolgt bewusst pro Verkaufskanal, damit Sie die Prüfung zunächst in einem Testkanal ausprobieren können.

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) — Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) — So wirken die einzelnen Prüfungen in der Storefront
- [Anleitungen](how_to.md) — Schritt-für-Schritt-Workflows
- [Änderungsprotokoll](changelog.md) — Versionshistorie und Updates

## Support

- Dokumentation: [https://docs.web-labels.de](https://docs.web-labels.de)
- Hersteller: [Web Labels Webdesign GmbH](https://web-labels.de)
