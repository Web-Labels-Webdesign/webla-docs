# PayTR Integration

> PayTR Zahlungsanbieter Integration für Shopware 6. Akzeptieren Sie Kredit-, Debitkarten- und Ratenzahlungen von türkischen Kunden über das sichere PayTR-Checkout.

## Übersicht

Mit PayTR Integration bieten Sie Ihren Kunden die Zahlungsart **PayTR** im Shopware-Checkout an. PayTR ist einer der führenden Zahlungsdienstleister in der Türkei und unterstützt Kredit- und Debitkarten sowie Ratenzahlung (Taksit).

Nach dem Absenden der Bestellung wird der Kunde auf die sichere Zahlungsseite von PayTR weitergeleitet und gibt dort seine Kartendaten ein. Ihr Shop kommt mit Kartendaten nie in Berührung. Nach der Zahlung kehrt der Kunde automatisch in Ihren Shop zurück.

PayTR meldet das Ergebnis jeder Zahlung direkt an Ihren Shop. Der Zahlungsstatus der Bestellung wird automatisch auf **Bezahlt** oder **Fehlgeschlagen** gesetzt. Sie müssen nichts manuell abgleichen.

## Hauptfunktionen

- **Sichere Zahlungsseite**: Kartendaten werden ausschließlich bei PayTR eingegeben und verarbeitet.
- **Ratenzahlung**: Bieten Sie Ratenzahlungen an, begrenzen Sie die Anzahl der Raten oder schalten Sie Ratenzahlung ganz ab.
- **Automatischer Zahlungsstatus**: Bestellungen werden nach erfolgreicher oder fehlgeschlagener Zahlung automatisch aktualisiert.
- **Zugangsdaten-Test**: Prüfen Sie Ihre PayTR-Zugangsdaten per Knopfdruck direkt in der Plugin-Konfiguration.
- **Callback-URL zum Kopieren**: Die Adresse, die Sie im PayTR-Händlerpanel hinterlegen müssen, wird in der Konfiguration angezeigt.
- **Testmodus**: Testen Sie den gesamten Zahlungsablauf, ohne echte Zahlungen auszulösen.
- **Pro Verkaufskanal konfigurierbar**: Verwenden Sie für jeden Verkaufskanal eigene PayTR-Zugangsdaten.
- **Türkische Zahlungsseite**: Kunden mit türkischer Shop-Sprache sehen die PayTR-Zahlungsseite auf Türkisch, alle anderen auf Englisch.

## Voraussetzungen

- Shopware Version: 6.7.x
- PHP Version: 8.2 oder höher
- Ein aktives **PayTR-Händlerkonto** (Merchant Account) mit Zugriff auf das PayTR-Händlerpanel
- Ihr Shop muss aus dem Internet erreichbar sein, damit PayTR Zahlungsergebnisse melden kann
- Unterstützte Währungen: **TRY, EUR, USD, GBP, RUB**

## Schnellstart

1. Installieren Sie das Plugin über den Plugin Manager oder Composer.
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**.
3. Öffnen Sie **Erweiterungen → Meine Erweiterungen → PayTR Integration → Konfigurieren**.
4. Tragen Sie **Händler-ID**, **Händler-Schlüssel** und **Händler-Salt** aus Ihrem PayTR-Händlerpanel ein und klicken Sie auf **Speichern**.
5. Klicken Sie auf **API-Zugangsdaten testen**.
6. Kopieren Sie die angezeigte **Callback-URL** und hinterlegen Sie sie im PayTR-Händlerpanel.
7. Weisen Sie die Zahlungsart **PayTR** Ihrem Verkaufskanal zu.

Die ausführliche Anleitung finden Sie unter [Anleitungen](how_to.md).

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md): Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md): Zahlungsablauf, Admin- und Storefront-Funktionen, Fehlerbehebung
- [Anleitungen](how_to.md): Schritt-für-Schritt-Workflows für Einrichtung, Test und Livegang
- [Änderungsprotokoll](changelog.md): Versionshistorie und Updates
