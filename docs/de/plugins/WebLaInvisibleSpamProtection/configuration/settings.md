# Konfigurationseinstellungen

Dieses Dokument beschreibt alle Einstellungen von Spam Schutz Easy Mode.

**Navigation**: Erweiterungen → Meine Erweiterungen → Spam Schutz Easy Mode → Konfigurieren

Alle Einstellungen können pro Verkaufskanal abweichend gesetzt werden.

## Reaktionen

Bei den meisten Regeln wählen Sie eine dieser Reaktionen:

| Reaktion | Wirkung |
| --- | --- |
| Silent Drop | Der Absender erhält eine unauffällige Bestätigung, verarbeitet wird nichts. |
| Blockieren | Der Absender erhält eine reguläre Fehlermeldung. |
| Nur protokollieren | Die Anfrage wird normal verarbeitet, der Treffer wird protokolliert. |

Über die Store-API lässt sich bei der Registrierung kein Erfolg vortäuschen. Silent Drop verhält sich dort wie Blockieren.

## Allgemein

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Spam-Schutz aktiv | An | Schaltet den gesamten Schutz ein oder aus. |
| Testmodus: alle Regeln nur protokollieren | Aus | Blockiert nichts, schreibt aber jeden Treffer ins Protokoll. |
| IP-Limits pro Verkaufskanal zählen | Aus | Aus: ein Zähler für die ganze Shop-Instanz. |
| Protokoll aufbewahren (Tage) | 7 | 1 bis 180 Tage. Ältere Einträge werden täglich gelöscht. |
| Freigegebene IPs / IP-Bereiche | leer | Eine pro Zeile, CIDR möglich. Gilt nur für IP-Limits, nicht für Inhaltsregeln. |
| Freigegebene E-Mail-Adressen | leer | Eine pro Zeile. Umgeht nur die E-Mail-Sperren. |
| Freigegebene E-Mail-Domains | leer | Eine pro Zeile. Hat Vorrang vor gesperrten Domains und Endungen. |

## Kundenregistrierung, Newsletter-Anmeldung und Kontaktformular

Diese drei Bereiche haben dieselben Einstellungen. Die Standardwerte unterscheiden sich nur bei den Limits.

| Einstellung | Registrierung | Newsletter | Kontakt | Beschreibung |
| --- | --- | --- | --- | --- |
| Schutz aktiv | An | An | An | Schaltet den Schutz für dieses Formular ein oder aus. |
| Erfolgreiche Übermittlungen pro IP | 1 | 1 | 2 | Nur erfolgreich verarbeitete Einträge zählen. 0 = kein Limit. |
| Zeitfenster Erfolgslimit (Stunden, rollierend) | 24 | 24 | 24 | Zeitraum, für den das Erfolgslimit gilt. |
| Reaktion bei überschrittenem Erfolgslimit | Nur protokollieren | Nur protokollieren | Nur protokollieren | Siehe [Reaktionen](#reaktionen). |
| Versuche pro IP (auch fehlgeschlagene) | 5 | 5 | 6 | Bremse gegen Massenanfragen. 0 = kein Limit. |
| Zeitfenster Versuchslimit (Minuten) | 10 | 10 | 10 | Zeitraum, für den das Versuchslimit gilt. |
| Reaktion bei überschrittenem Versuchslimit | Nur protokollieren | Nur protokollieren | Nur protokollieren | Siehe [Reaktionen](#reaktionen). |

Nur bei der Kundenregistrierung:

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Gastbestellungen auf das Erfolgslimit anrechnen | Aus | Aus: Nur echte Kundenkonten zählen. |

## Zeichen- und Schriftfilter

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Gesperrte Schriftsysteme | Kyrillisch | Lateinische Schrift inkl. Umlaute, Ziffern, Satzzeichen und Emojis sind nie betroffen. |
| Weitere Unicode-Skripte | leer | Skriptnamen, kommagetrennt, z. B. Ethiopic, Khmer. |
| Geprüfte Felder | Namen, Firma, Adresse | Zusätzlich wählbar: Betreff und Nachricht des Kontaktformulars. |
| Weitere Feldnamen | leer | Technische Feldnamen, kommagetrennt. Passwörter und Tokens nie eintragen. |
| Reaktion: Kundenregistrierung | Silent Drop | Reaktion bei einem Treffer in diesem Formular. |
| Reaktion: Newsletter-Anmeldung | Silent Drop | Reaktion bei einem Treffer in diesem Formular. |
| Reaktion: Kontaktformular | Nur protokollieren | Reaktion bei einem Treffer in diesem Formular. |

## Namensprüfung

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Werbetexte in Namensfeldern erkennen | An | Treffer: URL im Namen, Ausrufezeichen bei mindestens 3 Wörtern, identischer Vor- und Nachname ab 13 Zeichen. |
| Reaktion | Silent Drop | Siehe [Reaktionen](#reaktionen). |

## Adressprüfung

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Straße und Hausnummer mit gleichem Inhalt erkennen | An | Typisches Bot-Muster, auch zusammengeschrieben. Straße = Ort bleibt erlaubt (Dorfadressen). |
| Reaktion | Silent Drop | Siehe [Reaktionen](#reaktionen). |

## E-Mail-Filter

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Gesperrte Domain-Endungen | leer | Eine pro Zeile, z. B. `.ru`. Exakter Vergleich: `.ru` sperrt `mail.ru`, aber nicht `guru.de`. |
| Gesperrte Domains | leer | Eine pro Zeile, inkl. Subdomains. Große Anbieter nicht pauschal sperren. |
| Reaktion | Blockieren | Siehe [Reaktionen](#reaktionen). |

## Browser-Prüfung

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Browser-Prüfung aktiv | An | Prüft, ob das Formular in einem echten Browser ausgefüllt wurde und wie lange der Besucher auf der Seite war. |
| Mindestzeit auf der Seite (Sekunden) | 2 | 0 bis 30. Bei 0 wird nur geprüft, ob das Skript gelaufen ist. |
| Auch Store-API-Anfragen prüfen | Aus | Nur für Shops ohne Headless-Frontend oder App: Store-API-Anfragen enthalten den Wert nie und wären alle Treffer. |
| Reaktion bei Registrierung | Nur protokollieren | Siehe [Reaktionen](#reaktionen). |
| Reaktion bei Newsletter | Nur protokollieren | Siehe [Reaktionen](#reaktionen). |
| Reaktion bei Kontaktformular | Nur protokollieren | Siehe [Reaktionen](#reaktionen). |

Express-Checkouts von Zahlungsanbietern sind von der Browser-Prüfung nicht betroffen.

## Honeypot

| Einstellung | Standard | Beschreibung |
| --- | --- | --- |
| Zusätzliches verstecktes Feld | An | Ergänzt den Shopware-Honeypot. Für Besucher unsichtbar, nur Bots füllen es aus. |
| Reaktion | Silent Drop | Siehe [Reaktionen](#reaktionen). |
