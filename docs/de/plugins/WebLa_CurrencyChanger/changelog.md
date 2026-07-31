**Changelog — Währungsanzeige**

Alle wesentlichen Änderungen für Anwender.

---

# 4.3.0

_Veröffentlicht am 2026-07-31_

**Fehlerbehebungen**

- Beim Wechsel der Währung landeten Besucher auf einer fremden Seite oder auf einer 404-Seite. Die Währungsauswahl hat die aktuelle Seite aus dem zwischengespeicherten Header von Shopware gelesen, sodass alle auf die Seite umgeleitet wurden, die diesen Cache zuerst gefüllt hat. Das ist behoben. Betrifft nur Shopware 6.7.
- Die gewählte Währung bleibt wieder erhalten. Shopware hat allen Besuchern denselben zwischengespeicherten Header ausgeliefert, sodass die Auswahl immer die Standardwährung des Shops zeigte und die eigene Wahl beim nächsten Seitenaufruf überschrieb.
- Umgerechnete Preise richten sich jetzt nach der Währung des jeweiligen Besuchers, auch wenn der HTTP-Cache aktiv ist. Bisher hat der erste Besucher einer Seite seine Währung für alle nachfolgenden Besucher im Cache festgeschrieben.

**Breaking Changes**

- Der Währungswechsel wird jetzt im Browser ausgeführt statt über eine Route abgeschickt. Die Route `/custom-currency-page` und der Template-Block `webla_currency_widget_form_redirect` wurden entfernt. Themes oder Plugins, die eines von beidem überschreiben, müssen angepasst werden.

---

# 4.2.1

_Veröffentlicht am 2026-07-24_

**Fehlerbehebungen**

- Das Plugin hat den Storefront-Header ersetzt, statt ihn zu erweitern. Änderungen anderer Plugins oder Themes am Header wurden dadurch stillschweigend verworfen und erschienen nicht in der Storefront. Das ist behoben. Betrifft nur Shopware 6.7.

---

# 4.2.0

_Veröffentlicht am 2026-07-20_

**Neue Funktionen**

- Neuer Preis-Aktualisierungsmodus. Im Modus „Shopware-Preisdaten aktualisieren" schreibt das Plugin die Wechselkurse in die Währungs- und Preisdaten von Shopware, statt Preise in der Storefront umzurechnen. Das Verhalten der Storefront bleibt standardmäßig unverändert.
- Neue Strategie für währungsspezifische Preise: entfernen und von Shopware aus der Standardwährung berechnen lassen, oder mit umgerechneten Werten überschreiben.

**Fehlerbehebungen**

- Ein JavaScript-Fehler auf Seiten ohne Währungsumschalter wurde behoben. Der Fehler konnte dazu führen, dass weitere Storefront-Skripte nicht mehr starteten.
- Der Shop-Preis wurde ein zweites Mal angezeigt, wenn keine Zielwährung ausgewählt war, etwa wenn eine gespeicherte Auswahl auf eine nicht mehr vorhandene Währung verwies. Das ist behoben.
- Das Plugin unterdrückt den Währungsumschalter von Shopware nicht mehr, wenn es selbst keinen anzeigt.

**Breaking Changes**

- Die Unterblöcke des plugin-eigenen Währungsumschalters wurden von layout_header_actions_currency_widget_form, _content, _dropdown_toggle, _dropdown_toggle_name, _form_items, _form_items_element, _form_items_element_label und _form_items_element_input in webla_currency_widget_form, _content, _dropdown_toggle, _dropdown_toggle_name, _form_items, _form_items_element, _form_items_element_label und _form_items_element_input umbenannt. Sie haben zuvor die gleichnamigen Blöcke von Shopware ersetzt, wodurch der Währungsumschalter von Shopware nicht angezeigt werden konnte. Themes oder Plugins, die die alten Blocknamen erweitern, müssen angepasst werden.

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
