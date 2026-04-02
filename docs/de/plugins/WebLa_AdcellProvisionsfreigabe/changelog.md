# Changelog

## 1.1.1 — 2026-04-02

### :bug: Fehlerbehebungen

- Batch-Tabellenzeilen waren nicht klickbar — nicht funktionales `@row-click` durch Kontextmenü und klickbaren Datums-Link ersetzt
- Dashboard-Statistik „Letzte 30 Tage" zählte Duplikate bei mehrfachem Abgleich desselben Zeitraums (jetzt werden nur gesendete Positionen gezählt)

## 1.1.0 — 2026-04-02

### :sparkles: Neue Funktionen

- Batch-Detailansicht: Klick auf eine Zeile in der „Letzte Abgleiche"-Tabelle im Dashboard öffnet vorbereitete Batches zum Prüfen und Senden

### :bug: Fehlerbehebungen

- Vollständige Zweisprachigkeit für Begründungscodes über Snippets, verbliebene Umlaut-Probleme behoben

## 1.0.5 — 2026-04-02

### :bug: Fehlerbehebungen

- Entscheidungsspalte in zwei separate Spalten aufgeteilt: „Entscheidung" (Badge) und „Überschreiben" (Select) für bessere Lesbarkeit
- Filter-Checkboxen vertikal zentriert (Standard-margin-bottom entfernt)
- Deutsche Umlaute (ä, ö, ü) in allen Snippets, Fehlermeldungen und Changelogs korrigiert

## 1.0.4 — 2026-04-02

### :bug: Fehlerbehebungen

- Ergebnis-Card und Entscheidungsspalte verbreitert, damit das Überschreiben-Dropdown vollständig sichtbar ist und kein horizontales Scrollen nötig ist

## 1.0.3 — 2026-04-02

### :bug: Fehlerbehebungen

- TypeError im Ergebnis-Grid des Abgleichs behoben: API-Antwort lieferte Items als JSON-Objekt statt Array, da Shopware-Entity-IDs als Schlüssel verwendet wurden

## 1.0.2 — 2026-04-02

### :bug: Fehlerbehebungen

- Abgleich lieferte weiterhin keine Ergebnisse: dateTo wurde um Mitternacht (00:00:00) statt zum Tagesende verglichen, wodurch alle Provisionen des letzten Tages ausgeschlossen wurden; Datums-Presets schauen jetzt vorwärts (nächste N Tage) statt rückwärts; API-endDate an Marketing-Plattform-Baseline angeglichen

## 1.0.1 — 2026-04-02

### :bug: Fehlerbehebungen

- Abgleich lieferte keine Ergebnisse (0 Positionen): Adcell-API wird jetzt mit einem 90-Tage-Rückblick abgefragt — Provisionen haben ein 30–45-tägiges Auto-Accept-Fenster, weshalb Erstellungs- und autoAcceptTime-Datumsbereich unterschiedlich sein müssen

## 1.0.0 — 2026-04-01

### :sparkles: Neue Funktionen

- Automatischer Abgleich und Freigabe von ADCELL Affiliate-Provisionen direkt im Shopware Admin
- Manuelle Stapelprüfung mit Überschreibungsmöglichkeit pro Position
- Betragskorrektur (ADJUST) mit konfigurierbarer prozentualer und absoluter Toleranz
- Tägliche automatische Freigabe über den Shopware Scheduled Task
- Test-Modus zum Deaktivieren aller Datenübertragungen an ADCELL während des Testbetriebs
- Programm-Mapping zur Verknüpfung von ADCELL-Programmen mit Shopware-Vertriebskanälen
