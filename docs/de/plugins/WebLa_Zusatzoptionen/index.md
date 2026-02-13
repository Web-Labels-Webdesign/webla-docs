# WebLa Zusatzoptionen

> Erweitern Sie Produkte mit konfigurierbaren Zusatzoptionen, individueller Preisgestaltung, Versandbeschränkungen und automatischer Zuweisung durch Produktströme für mehr Flexibilität.

## Übersicht

Mit dem WebLa Zusatzoptionen Plugin können Sie Ihre Shopware 6 Produkte um flexible Zusatzoptionen erweitern. Bieten Sie Ihren Kunden beispielsweise Garantieverlängerungen, Serviceleistungen, Zubehör oder individuelle Konfigurationsmöglichkeiten direkt beim Produktkauf an.

Das Plugin ermöglicht es Ihnen, Optionen-Sets zu erstellen, die einzeln oder mehrfach auswählbar sind. Sie können Abhängigkeiten zwischen Optionen definieren, länderspezifische Preise festlegen und Optionen automatisch über Produktströme zuweisen. Die Optionen erscheinen sowohl auf der Produktdetailseite als auch im Warenkorb und können jederzeit vom Kunden angepasst werden.

Ideal für Shop-Betreiber, die ihre Produkte um Zusatzleistungen ergänzen möchten, ohne separate Produkte anlegen zu müssen. Das Plugin integriert sich nahtlos in Shopware 6 und unterstützt alle wichtigen Funktionen wie dynamische Steuersätze (OSS), Aktionen, Regeln und API-Zugriff.

## Hauptfunktionen

- **Flexible Optionen-Sets**: Erstellen Sie unbegrenzt viele Optionen-Sets mit Einzel- oder Mehrfachauswahl für jedes Produkt
- **Produktbasierte Optionen**: Nutzen Sie bestehende Produkte als Zusatzoptionen oder erstellen Sie textbasierte Eingabefelder
- **Automatische Zuweisung**: Weisen Sie Optionen automatisch über Produktströme zu, ohne jedes Produkt manuell konfigurieren zu müssen
- **Länderspezifische Preise**: Definieren Sie unterschiedliche Preise und Verfügbarkeiten je nach Lieferland des Kunden
- **Mengenstaffelung**: Ermöglichen Sie Mengenauswahl für Optionen mit automatischer Preisstaffelung
- **Versandbeschränkungen**: Beschränken Sie Optionen auf bestimmte Versandarten oder schließen Sie diese aus
- **Produktabhängigkeiten**: Definieren Sie bis zu 3 Ebenen von abhängigen Optionen (z.B. Option B wird nur angezeigt, wenn Option A gewählt wurde)
- **Inkompatibilitäten**: Schließen Sie bestimmte Optionen gegenseitig aus (z.B. Garantie-Option A und B können nicht gleichzeitig gewählt werden)
- **Pflichtfelder**: Markieren Sie Optionen als erforderlich, sodass der Kunde diese auswählen muss
- **Warenkorb-Integration**: Kunden können Optionen direkt im Warenkorb nachträglich hinzufügen oder ändern
- **Rule-Builder-Kompatibilität**: Steuern Sie die Verfügbarkeit von Optionen über Shopware-Regeln
- **Dynamische Steuersätze**: Volle Unterstützung für OSS (One Stop Shop) mit automatischer Anpassung der Steuersätze
- **Promotion-Support**: Optionen werden korrekt in Aktionen und Rabatte einbezogen
- **API-Unterstützung**: Vollständige API-Anbindung für externe Systeme und Headless-Commerce

## Voraussetzungen

- Shopware Version: 6.6.0 - 6.7.0
- PHP Version: 8.1+
- Composer

## Schnellstart

1. Installieren Sie das Plugin über den Plugin Manager oder Composer
2. Aktivieren Sie das Plugin unter **Erweiterungen → Meine Erweiterungen**
3. Konfigurieren Sie die Grundeinstellungen unter **Erweiterungen → Meine Erweiterungen → Produkt Zusatzoptionen Plugin → Konfigurieren**
4. Erstellen Sie Ihr erstes Optionen-Set: Navigieren Sie zu **Kataloge → Produkte**, wählen Sie ein Produkt aus und wechseln Sie zum Tab **Zusatzoptionen**
5. Fügen Sie Optionen hinzu und legen Sie Preise, Versandbeschränkungen und Abhängigkeiten fest
6. Optional: Nutzen Sie den **Optionen Seeder** unter **Erweiterungen → Optionen Seeder** für automatische Zuweisung über Produktströme

## Dokumentationsinhalt

- [Konfigurationseinstellungen](configuration/settings.md) - Alle verfügbaren Einstellungen erklärt
- [Nutzungsanleitung](usage/usage.md) - So nutzen Sie alle Plugin-Funktionen
- [Anleitungen](how_to.md) - Schritt-für-Schritt-Workflows für häufige Aufgaben
- [Änderungsprotokoll](changelog.md) - Versionshistorie und Updates

## Support

Dieses Plugin wird entwickelt und gepflegt von **Web Labels Webdesign GmbH**.

Bei Fragen oder Support-Anfragen wenden Sie sich bitte an:
- **Shopware Store**: [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
- **Dokumentation**: [https://docs.web-labels.de](https://docs.web-labels.de)

### Versions-Support

**Hinweis**: Wir folgen dem offiziellen Shopware Release-Zyklus. Neue Updates und Features werden ausschließlich für die von Shopware unterstützten Versionen bereitgestellt. Sicherheitsupdates erfolgen nur so lange, wie Shopware diese für die jeweilige Version zur Verfügung stellt.
