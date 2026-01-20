# Webla Shopware Plugins

Willkommen zur offiziellen Dokumentation der Shopware 6 Plugins von **Web Labels Webdesign GmbH**.

Hier finden Sie Installationsanleitungen, Konfigurationsoptionen und Best Practices für alle unsere Plugins.

## Verfügbare Plugins

| Plugin | Beschreibung | Version | Voraussetzungen |
|--------|--------------|---------|-----------------|
{% for plugin in plugins %}| [{{ plugin.name.de }}](plugins/{{ plugin.id }}/index.md) | {{ plugin.short.de }} | {{ plugin.version or "–" }} | {{ plugin.requirements }} |
{% endfor %}

## Support

Bei Fragen oder Problemen erreichen Sie uns unter **plugin@web-labels.de** oder über den [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html).
