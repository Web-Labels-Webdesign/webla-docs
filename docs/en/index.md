# Webla Shopware Plugins

Welcome to the official documentation for Shopware 6 plugins by **Web Labels Webdesign GmbH**.

Here you'll find installation guides, configuration options, and best practices for all our plugins.

## Available Plugins

| Plugin | Description | Version | Requirements |
|--------|-------------|---------|--------------|
{% for plugin in plugins %}| [{{ plugin.name.en }}](plugins/{{ plugin.id }}/index.md) | {{ plugin.short.en }} | {{ plugin.version or "–" }} | {{ plugin.requirements }} |
{% endfor %}

## Support

For questions or issues, contact us at **plugin@web-labels.de** or via the [Shopware Store](https://store.shopware.com/web-labels-webdesign-gmbh.html).
