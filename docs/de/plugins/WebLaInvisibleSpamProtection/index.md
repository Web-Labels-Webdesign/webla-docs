# Spam Schutz Easy Mode

> Stoppt Spam in Registrierung, Newsletter und Kontaktformular ohne Captcha.

## Übersicht

Bots legen Kundenkonten an, tragen Fake-Adressen in den Newsletter ein und füllen das Kontaktformular mit Werbung. Spam Schutz Easy Mode prüft diese Einsendungen unsichtbar im Hintergrund, bevor ein Konto angelegt, eine Newsletter-Anmeldung gespeichert oder eine E-Mail versendet wird. Ihre Kunden müssen dafür kein Captcha lösen.

Für jede Regel legen Sie fest, wie der Shop reagiert. Im Testmodus werden alle Treffer nur protokolliert, sodass Sie Regeln gefahrlos ausprobieren können.

## Hauptfunktionen

- **IP-Limits**: Begrenzen Versuche und erfolgreiche Übermittlungen pro IP-Adresse.
- **Schriftfilter**: Erkennt unerwünschte Schriftsysteme wie Kyrillisch in Namen, Firma und Adresse.
- **Namensprüfung**: Erkennt Links und Werbetexte in Namensfeldern.
- **Adressprüfung**: Erkennt identische Angaben für Straße und Hausnummer.
- **E-Mail-Filter**: Sperrt Domains und Domain-Endungen, Freigaben haben Vorrang.
- **Browser-Prüfung und Honeypot**: Entlarven Bots über die Zeit auf der Seite und ein verstecktes Feld.
- **Dashboard-Karte**: Zeigt, wie viele Spam-Anfragen verhindert wurden.

## Voraussetzungen

- Shopware 6.7 ab Version 6.7.9

## Schnellstart

1. Installieren und aktivieren Sie die Erweiterung unter **Erweiterungen → Meine Erweiterungen**.
2. Öffnen Sie **Erweiterungen → Meine Erweiterungen → Spam Schutz Easy Mode → Konfigurieren**.
3. Aktivieren Sie den **Testmodus** und speichern Sie.
4. Prüfen Sie nach einigen Tagen die Karte auf dem Dashboard und deaktivieren Sie den Testmodus.

## Dokumentationsinhalt

- [Einstellungen](configuration/settings.md)
- [Verwendung](usage/usage.md)
- [Anleitungen](how_to.md)
- [Änderungsprotokoll](changelog.md)
