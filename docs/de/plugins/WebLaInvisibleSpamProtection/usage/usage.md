# Verwendung

## Geschützte Formulare

| Formular | Was bei Silent Drop passiert |
| --- | --- |
| Kundenregistrierung und Gastbestellung | Weiterleitung zur Registrierungsseite mit dem Hinweis auf die Bestätigungs-E-Mail. Es wird kein Konto angelegt. |
| Newsletter-Anmeldung | Die Antwort entspricht einer neuen, noch unbestätigten Anmeldung. Es wird nichts gespeichert und keine E-Mail versendet. |
| Kontaktformular, auch in Erlebniswelten | Die normale Erfolgsmeldung erscheint. Es wird keine E-Mail versendet. |

Die Prüfung gilt für die Storefront und für die Store-API.

## Regeln

- **Versuchslimit**: Zählt jeden Versuch pro IP, auch fehlgeschlagene.
- **Erfolgslimit**: Zählt nur erfolgreich verarbeitete Einsendungen pro IP.
- **Schriftfilter**: Prüft die gewählten Felder auf gesperrte Schriftsysteme.
- **Namensprüfung**: Prüft auf URLs, Ausrufezeichen bei mindestens 3 Wörtern und identische lange Vor- und Nachnamen.
- **Adressprüfung**: Prüft, ob Straße und Hausnummer denselben Inhalt haben.
- **E-Mail-Filter**: Vergleicht die Adresse mit Sperrlisten und Freigaben.
- **Browser-Prüfung**: Prüft in Storefront-Formularen, ob das Formular im Browser ausgefüllt wurde und die Mindestzeit eingehalten ist.
- **Honeypot**: Ein für Besucher unsichtbares Feld, das nur Bots ausfüllen.

Löst eine Einsendung mehrere Regeln aus, gilt die stärkste Reaktion: Silent Drop vor Blockieren vor Nur protokollieren.

Fällt das Plugin technisch aus, werden Anfragen durchgelassen. So werden echte Kunden nicht ausgesperrt.

## Dashboard-Karte

Das Admin-Dashboard zeigt die Karte **Spam Schutz Easy Mode** mit diesen Werten:

- verhinderte Anfragen gesamt, heute und der letzten 7 und 30 Tage
- verhinderte Anfragen nach Regel und nach Formular
- Verlauf pro Tag

Benutzer benötigen das Leserecht auf das Spam-Protokoll (`webla_isp_log:read`), sonst wird die Karte ausgeblendet. Die Tageszähler enthalten keine personenbezogenen Daten.

## Datenschutz

Das Protokoll speichert Formular, Regel, Reaktion, Feldname und eine gekürzte, gesalzene IP-Kennung. Klartext-IPs und Formularinhalte werden nicht gespeichert. Einträge werden standardmäßig nach 7 Tagen gelöscht, höchstens nach 180 Tagen. Das Aufräumen läuft täglich über eine geplante Aufgabe.

## Deinstallation

Wenn Sie beim Deinstallieren die Daten nicht behalten, werden alle Tabellen der Erweiterung entfernt, auch die Statistik.
