# Nutzungsanleitung

Diese Anleitung beschreibt alle Funktionen von **Bilder in Produktbewertungen**.

---

## Inhaltsverzeichnis

- [Bild-Upload im Bewertungsformular](#bild-upload-im-bewertungsformular)
- [Galerie auf der Produktseite](#galerie-auf-der-produktseite)
- [Admin-Bereich Funktionen](#admin-bereich-funktionen)
- [Storefront Funktionen](#storefront-funktionen)
- [CMS-Element Bewertungsbilder](./cms-element.md)
- [Fehlerbehebung](#fehlerbehebung)

---

## Bild-Upload im Bewertungsformular

### Was sie bewirkt

Kunden können beim Verfassen einer Produktbewertung ein oder mehrere Bilder hochladen. Die Bilder werden gemeinsam mit der Bewertung gespeichert und erscheinen – nach Freigabe durch Shopware – zusammen mit der Bewertung in der Storefront.

### So verwenden Sie sie

1. Kunde öffnet die Produktdetailseite.
2. Kunde klickt auf **Neue Bewertung hinzufügen**.
3. Im Bewertungsformular erscheint ein Upload-Bereich (Drop-Zone mit „Dateien auswählen"-Link).
4. Kunde wählt Bilder aus oder zieht sie per Drag & Drop in die Drop-Zone.
5. Kunde füllt Bewertung aus und sendet sie ab.
6. Administrator gibt die Bewertung unter **Katalog → Bewertungen** frei. Danach sind Bewertung und Bilder in der Storefront sichtbar.

### Tipps & Best Practices

- Die Bewertungsfreigabe erfolgt über den Standard-Shopware-Workflow. Bilder werden erst nach Freigabe der zugehörigen Bewertung öffentlich sichtbar.
- Hochgeladene Dateien landen im konfigurierten Medienordner (standardmäßig „Image Reviews").

---

## Galerie auf der Produktseite

### Was sie bewirkt

Alle Bilder aus freigegebenen Bewertungen eines Produkts werden direkt auf der Produktdetailseite als Galerie angezeigt – sowohl gesammelt als Produktgalerie als auch einzeln neben der jeweiligen Bewertung.

### Ort

**Navigation**: Storefront → Produktdetailseite → Abschnitt Bewertungen

### Anpassungsmöglichkeiten

- **Leerzustand**: Definieren Sie in den Einstellungen ein Hintergrundbild für Produkte ohne Bewertungsbilder. Siehe [Einstellungen](../configuration/settings.md#bild-bei-leerer-bewertungsgalerie).
- **Varianten**: Wenn Sie Bilder aus allen Varianten bündeln möchten, aktivieren Sie die entsprechende Option. Siehe [Einstellungen](../configuration/settings.md#bilder-aller-varianten-in-galerie-anzeigen).
- **Call-to-Action**: Hinterlegen Sie ein Motivationsbild unter dem „Neue Bewertung hinzufügen"-Button. Siehe [Einstellungen](../configuration/settings.md#bild-unter-dem-button-neue-bewertung-hinzufügen).

---

## Admin-Bereich Funktionen

### Bewertungsdetail mit Bild-Uploads

**Ort**: Katalog → Bewertungen → [Bewertung auswählen]

**Zweck**: In der Detailansicht einer Produktbewertung sehen Administratoren alle vom Kunden hochgeladenen Bilder in einer eigenen Karte „Bild-Uploads" oberhalb der Standard-Bewertungsfelder.

**Verwendung**:
1. Navigieren zu **Katalog → Bewertungen**.
2. Gewünschte Bewertung öffnen.
3. Die Karte „Bild-Uploads" zeigt eine Vorschau aller beigefügten Bilder.
4. Prüfen Sie Inhalte und geben Sie die Bewertung anschließend frei oder lehnen Sie sie ab.

### Medienverwaltung

**Ort**: Inhalte → Medien → Image Reviews (Standardordner)

Alle Upload-Dateien werden als reguläre Shopware-Medien geführt. Sie können sie dort einzeln öffnen, umbenennen, verschieben oder löschen.

---

## Storefront Funktionen

### Upload-Feld im Bewertungsformular

**Wo es erscheint**: Produktdetailseite → Bewertungsformular

**Was Kunden sehen**: Eine Drop-Zone mit einer Upload-Schaltfläche, Drag-&-Drop-Hinweis und einer Liste der erlaubten Dateitypen. Bereits hinzugefügte Bilder erscheinen als Vorschau mit Entfernen-Button (×).

### Bewertungsgalerie

**Wo sie erscheint**: Produktdetailseite im Bewertungsbereich.

**Was Kunden sehen**: Miniatur-Thumbnails der Bewertungsbilder, klickbar zur Großansicht.

---

## Fehlerbehebung

### Bilder erscheinen nicht in der Storefront

**Symptom**: Kunden laden Bilder hoch, aber die Galerie bleibt leer.

**Ursache**: Die zugehörige Bewertung wurde noch nicht durch den Administrator freigegeben.

**Lösung**: Unter **Katalog → Bewertungen** die Bewertung öffnen und Status auf freigegeben setzen.

### Upload schlägt fehl

**Symptom**: Fehlermeldung beim Absenden der Bewertung mit Bildern.

**Ursache**: Die Datei überschreitet die PHP-Upload-Limits (`upload_max_filesize`, `post_max_size`) oder der Dateityp ist nicht erlaubt.

**Lösung**: PHP-Upload-Limits in der Serverkonfiguration erhöhen und sicherstellen, dass nur erlaubte Bildformate hochgeladen werden.

### Galerie zeigt Bilder anderer Varianten nicht an

**Symptom**: Pro Variante sind nur wenige Bilder sichtbar.

**Ursache**: Die Option „Bilder aller Varianten in Galerie anzeigen" ist deaktiviert.

**Lösung**: Option unter **Erweiterungen → Meine Erweiterungen → Bilder in Produktbewertungen → Konfigurieren** aktivieren.

---

## Verwandte Dokumentation

- [CMS-Element Bewertungsbilder](./cms-element.md)
- [Einstellungsreferenz](../configuration/settings.md)
- [Anleitungen](../how_to.md)
