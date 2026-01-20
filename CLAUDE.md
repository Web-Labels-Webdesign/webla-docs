# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for Web Labels Shopware plugins, built with MkDocs and Material theme. Content is multilingual (German default, English available) using a folder-based i18n structure.

## Commands

```bash
# Install dependencies
pip install -r requirements.txt

# Development server with hot-reload (http://localhost:8000)
mkdocs serve

# Build static site to ./site/
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Architecture

### Directory Structure
- `docs/de/` - German documentation (default language)
- `docs/en/` - English documentation (parallel structure)
- `docs/*/plugins/` - Plugin-specific documentation
- `mkdocs.yml` - Navigation, theme, and plugin configuration

### i18n Structure
Content uses folder-based localization via mkdocs-static-i18n. Both language folders must maintain parallel file structures. German is the default with fallback enabled.

### Deployment
- Push to `main` triggers automatic GitHub Actions deployment
- `sync-deploy.yml` runs every 6 hours to sync plugin docs from external repositories
- Builds deploy to `gh-pages` branch via peaceiris/actions-gh-pages

### Navigation
Controlled in `mkdocs.yml` under the `nav` section. The awesome-pages plugin provides additional navigation control.

## Key Configuration

- **Theme**: Material for MkDocs with dark/light toggle
- **Search**: Configured for both DE and EN languages
- **Markdown Extensions**: admonition, pymdownx.details, pymdownx.superfences, pymdownx.highlight, pymdownx.tabbed, toc with permalinks
