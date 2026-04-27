# Webla Shopware Plugins

Welcome to the official documentation for Shopware 6 plugins by **Web Labels Webdesign GmbH**.

Here you'll find installation guides, configuration options, and best practices for all our plugins.

## Available Plugins

<input class="plugin-search" type="text" placeholder="Search plugins..." aria-label="Filter plugins">

<div class="plugin-grid">
{% for plugin in plugins %}
<a class="plugin-card" href="plugins/{{ plugin.id }}/" data-search="{{ plugin.name.en|lower }} {{ plugin.short.en|lower }}">
  <div class="plugin-card__title">{{ plugin.name.en }}</div>
  <div class="plugin-card__description">{{ plugin.short.en }}</div>
  <div class="plugin-card__meta">
    <span class="plugin-card__version">v{{ plugin.version }}</span>
    <span class="plugin-card__req">{{ plugin.requirements }}</span>
  </div>
</a>
{% endfor %}
</div>
<div class="plugin-no-results" hidden>No plugins found.</div>

## Support

For questions or issues, contact us at **plugins@web-labels.de** or via the [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html).
