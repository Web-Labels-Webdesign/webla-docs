**Changelog**

# 1.5.2

_Veröffentlicht am 2026-11-13_

**Fehlerbehebungen**

- In den Abgleichsergebnissen stehen die Auswahl der Entscheidung und das Feld für den korrigierten Wert in der Spalte „Überschreiben" jetzt nebeneinander in der Zeile und werden nicht mehr abgeschnitten

# 1.5.1

_Veröffentlicht am 2026-11-12_

**Verbesserungen**

- Die Ergebnisse eines Abgleichs werden jetzt seitenweise angezeigt (25, 50, 100 oder 250 Zeilen pro Seite), sodass die Seite auch bei tausenden Provisionen flüssig bleibt. Filter, Zählungen und das Senden umfassen weiterhin alle Provisionen des Abgleichs

# 1.5.0

_Veröffentlicht am 2026-11-12_

**Verbesserungen**

- Abgleiche laufen jetzt in mehreren kurzen Schritten: Provisionen werden seitenweise mit Fortschrittsanzeige von ADCELL geladen und anschließend ausgewertet. Große Zeiträume (z.B. 90 Tage) bei Konten mit vielen Provisionen brechen nicht mehr mit einem Timeout ab
- Die Begrenzung auf 2000 Provisionen pro Abgleich entfällt
- Entscheidungen werden in Blöcken von 50 an ADCELL gesendet, sodass auch große Abgleiche ohne Timeout gesendet werden können
- Abgleiche, die nicht vollständig geladen werden konnten, erhalten den Status „Fehlgeschlagen" und können nicht gesendet werden

# 1.4.0

_Veröffentlicht am 2026-11-12_

**Neue Funktionen**

- Neue Einstellung „Bestandene Provisionen überspringen": Provisionen, die alle Prüfungen bestehen, werden auf „Überspringen" statt „Freigeben" gesetzt und nicht an ADCELL gesendet – ADCELL gibt sie nach Ablauf der Auto-Accept-Frist automatisch frei. Stornierungen und Korrekturen werden weiterhin vorgeschlagen und gesendet

**Fehlerbehebungen**

- Eine geänderte Entscheidung in der Spalte „Überschreiben" springt nicht mehr auf die ursprüngliche Entscheidung zurück
- Neue Programm-Mappings speichern jetzt den Programmnamen, Programme werden dadurch mit Namen statt ID angezeigt
- Abgleiche für Konten mit vielen Provisionen brechen nicht mehr nach 30 Sekunden ab („timeout of 30000ms exceeded")
- Die Schnellauswahl verwendet jetzt das lokale Datum; kurz nach Mitternacht war der Zeitraum um einen Tag nach hinten verschoben

**Verbesserungen**

- Im Zeitraum lassen sich keine vergangenen Daten mehr auswählen; ein Hinweis erklärt, dass sich der Zeitraum auf das Auto-Accept-Datum bei ADCELL bezieht, nicht auf das Bestelldatum

# 1.3.0

_Veröffentlicht am 2026-11-10_

**Neue Funktionen**

- Neue Einstellung „ADCELL-Rückblick in Tagen" (Standard 90): legt fest, wie weit zurück Provisionen bei ADCELL abgefragt werden – für Programme mit Auto-Accept-Fristen über 90 Tage
- Zugriffsrechte: Das ADCELL-Modul hat eigene Admin-Berechtigungen (Ansehen, Bearbeiten, Anlegen, Löschen) und lässt sich pro Benutzerrolle freigeben

**Fehlerbehebungen**

- Teilerstattete Bestellungen werden jetzt erkannt und zur Prüfung zurückgehalten (Korrektur ohne Wert), statt mit dem vollen Warenkorbwert freigegeben zu werden
- Teilweise versandte Bestellungen gelten jetzt als versendet und werden nicht mehr storniert
- Korrekturen ohne eingetragenen Warenkorbwert werden nicht mehr gesendet; der Wert muss zuerst manuell eingetragen werden. Die automatische Freigabe überspringt sie
- Existiert eine Bestellnummer in mehreren Verkaufskanälen und das Mapping hat keinen Verkaufskanal, wird die Provision übersprungen statt einer beliebigen Bestellung zugeordnet
- Der Zahlungsstatus wird jetzt aus der neuesten Transaktion ermittelt
- ADCELL-Fehlermeldungen enthalten in Logs keine Passwörter oder Tokens mehr

**Verbesserungen**

- Die automatische Freigabe storniert Provisionen für fehlende oder noch nicht versendete Bestellungen nicht mehr, sondern überspringt sie zur manuellen Prüfung
- Teilweise bezahlte Bestellungen werden zur manuellen Prüfung übersprungen; gemahnte Zahlungen gelten als unbezahlt
- Ein Batch kann nicht mehr gleichzeitig doppelt gesendet werden
- Bereits an ADCELL gesendete Entscheidungen können nicht mehr geändert werden

# 1.2.0

_Veröffentlicht am 2026-04-02_

**Neue Funktionen**

- Mindest-Bestellalter: Provisionen werden erst freigegeben, wenn die Bestellung mindestens X Tage alt ist — gibt Zeit für Retouren und Stornierungen
- Vollständiger Shopware-Store-Eintrag mit Beschreibungen, Installationsanleitung, Screenshots, FAQ und Dokumentations-Link

**Verbesserungen**

- Logging im ReconciliationService für Batch-Vorbereitung und Sende-Ergebnisse hinzugefügt
- Plugin-Icon auf 112x112 px verkleinert (Store-Konformität)
- Standardsprache in config.xml auf Englisch mit de-DE-Übersetzungen umgestellt (behebt deutsche Admin-Anzeige)
- Ungenutzte Benachrichtigungs-E-Mail-Einstellung entfernt
- Vollständige Plugin-Dokumentation (Übersicht, Einstellungen, Nutzung, Anleitungen) in DE und EN hinzugefügt

# 1.1.1

_Veröffentlicht am 2026-04-02_

**Fehlerbehebungen**

- Batch-Tabellenzeilen waren nicht klickbar — nicht funktionales `@row-click` durch Kontextmenü und klickbaren Datums-Link ersetzt
- Dashboard-Statistik „Letzte 30 Tage" zählte Duplikate bei mehrfachem Abgleich desselben Zeitraums (jetzt werden nur gesendete Positionen gezählt)

# 1.1.0

_Veröffentlicht am 2026-04-02_

**Neue Funktionen**

- Batch-Detailansicht: Klick auf eine Zeile in der „Letzte Abgleiche"-Tabelle im Dashboard öffnet vorbereitete Batches zum Prüfen und Senden

**Fehlerbehebungen**

- Vollständige Zweisprachigkeit für Begründungscodes über Snippets, verbliebene Umlaut-Probleme behoben

# 1.0.5

_Veröffentlicht am 2026-04-02_

**Fehlerbehebungen**

- Entscheidungsspalte in zwei separate Spalten aufgeteilt: „Entscheidung" (Badge) und „Überschreiben" (Select) für bessere Lesbarkeit
- Filter-Checkboxen vertikal zentriert (Standard-margin-bottom entfernt)
- Deutsche Umlaute (ä, ö, ü) in allen Snippets, Fehlermeldungen und Changelogs korrigiert

# 1.0.4

_Veröffentlicht am 2026-04-02_

**Fehlerbehebungen**

- Ergebnis-Card und Entscheidungsspalte verbreitert, damit das Überschreiben-Dropdown vollständig sichtbar ist und kein horizontales Scrollen nötig ist

# 1.0.3

_Veröffentlicht am 2026-04-02_

**Fehlerbehebungen**

- TypeError im Ergebnis-Grid des Abgleichs behoben: API-Antwort lieferte Items als JSON-Objekt statt Array, da Shopware-Entity-IDs als Schlüssel verwendet wurden

# 1.0.2

_Veröffentlicht am 2026-04-02_

**Fehlerbehebungen**

- Abgleich lieferte weiterhin keine Ergebnisse: dateTo wurde um Mitternacht (00:00:00) statt zum Tagesende verglichen, wodurch alle Provisionen des letzten Tages ausgeschlossen wurden; Datums-Presets schauen jetzt vorwärts (nächste N Tage) statt rückwärts; API-endDate an Marketing-Plattform-Baseline angeglichen

# 1.0.1

_Veröffentlicht am 2026-04-02_

**Fehlerbehebungen**

- Abgleich lieferte keine Ergebnisse (0 Positionen): Adcell-API wird jetzt mit einem 90-Tage-Rückblick abgefragt — Provisionen haben ein 30–45-tägiges Auto-Accept-Fenster, weshalb Erstellungs- und autoAcceptTime-Datumsbereich unterschiedlich sein müssen

# 1.0.0

_Veröffentlicht am 2026-04-01_

**Neue Funktionen**

- Automatischer Abgleich und Freigabe von ADCELL Affiliate-Provisionen direkt im Shopware Admin
- Manuelle Stapelprüfung mit Überschreibungsmöglichkeit pro Position
- Betragskorrektur (ADJUST) mit konfigurierbarer prozentualer und absoluter Toleranz
- Tägliche automatische Freigabe über den Shopware Scheduled Task
- Test-Modus zum Deaktivieren aller Datenübertragungen an ADCELL während des Testbetriebs
- Programm-Mapping zur Verknüpfung von ADCELL-Programmen mit Shopware-Vertriebskanälen
