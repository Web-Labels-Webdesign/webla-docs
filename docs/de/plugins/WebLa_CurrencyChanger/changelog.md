**Changelog — Währungsanzeige**

Alle wesentlichen Änderungen für Anwender.

---

# 4.1.0

_Veröffentlicht am 2026-07-20_

**Neue Funktionen**

- Unterstützung für Shopware 6.6 und 6.7 aus einer Installation. Eine Version deckt jetzt beide Major-Releases ab, das Plugin muss beim Shop-Update also nicht mehr gewechselt werden.

**Fehlerbehebungen**

- Behebt einen schwerwiegenden Fehler, der die automatische Kursaktualisierung unter Shopware 6.7 abbrach. Die Aufgabe endete, bevor Kurse gespeichert wurden.
- Behebt die fehlende Währungsauswahl im Storefront-Header unter Shopware 6.6.
- Zeigt die Währungsauswahl auch in Shops mit nur einer Sprache und Währung an, in denen sie zuvor ausgeblendet blieb.
- Behebt das Feld für den eigenen Umrechnungskurs, das zwar konfiguriert, aber nie auslesbar war und immer leer zurückkam.

**Verbesserungen**

- Reduziert die Kursaktualisierung auf einen Lese- und einen Schreibvorgang pro Durchlauf statt einer Abfrage und eines Schreibvorgangs je Währung.
- Protokolliert eine fehlgeschlagene Kursaktualisierung und meldet sie als Fehler, statt sie stillschweigend zu verwerfen.
