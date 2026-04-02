# Webla Shopware Plugins

Willkommen zur offiziellen Dokumentation der Shopware 6 Plugins von **Web Labels Webdesign GmbH**.

Hier finden Sie Installationsanleitungen, Konfigurationsoptionen und Best Practices für alle unsere Plugins.

## Verfügbare Plugins

<input class="plugin-search" type="text" placeholder="Plugin suchen..." aria-label="Plugins filtern">

<div class="plugin-grid">
{% for plugin in plugins %}
<a class="plugin-card" href="plugins/{{ plugin.id }}/" data-search="{{ plugin.name.de|lower }} {{ plugin.short.de|lower }}">
  <div class="plugin-card__title">{{ plugin.name.de }}</div>
  <div class="plugin-card__description">{{ plugin.short.de }}</div>
  <div class="plugin-card__meta">
    <span class="plugin-card__version">v{{ plugin.version }}</span>
    <span class="plugin-card__req">{{ plugin.requirements }}</span>
  </div>
</a>
{% endfor %}
</div>
<div class="plugin-no-results" hidden>Keine Plugins gefunden.</div>

## Support

Bei Fragen oder Problemen erreichen Sie uns unter **plugin@web-labels.de** oder über den [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html).
