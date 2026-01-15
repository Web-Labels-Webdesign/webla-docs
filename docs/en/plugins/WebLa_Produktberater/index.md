# Product Advisor Plugin

> Interactive product advisor for Shopware 6. Guide your customers to the right product through targeted questions. Supports various question types, weightings and live updates.

## Overview

The Product Advisor is an intelligent recommendation system that guides your customers to the perfect product in just a few steps. Unlike traditional filters, the advisor works with intelligent weighting: If a customer is looking for a red mountain bike with specific technical requirements, but you only have one in black, the advisor will still recommend this product – because all important criteria are met.

The plugin allows you to create any number of product advisors that can be flexibly integrated into your Shopping Experiences. Each advisor consists of a series of questions with different answer options. The answers are weighted and lead to an intelligent product recommendation.

## Key Features

- **Smart Weighting**: Each question gets an individual weight. Technical requirements can outweigh colour preferences.
- **Dynamic Product Groups**: Pre-filter which products enter the advisor (e.g., in-stock only, specific manufacturers, price range).
- **Live Updates**: Customers see matching products instantly after each answer.
- **Manufacturer Prioritisation**: Prefer certain brands in results.
- **Conditional Question Logic**: Skip questions automatically when previous answers make them irrelevant.
- **Multi-Language Support**: Translate questions and answers directly in the advisor – no separate advisor per language needed.
- **Variant Support**: The search algorithm also considers variant options.
- **Flexible Question Formats**: Buttons, dropdowns, range sliders or text input.
- **CMS Integration**: Easy integration into any Shopping Experience via block.

## Requirements

- Shopware Version: 6.5.0 or higher (up to 6.8.0)
- PHP Version: 8.1 or higher

## Quick Start

1. Install the plugin via `Extensions → My Extensions`
2. Activate the plugin
3. Navigate to `Catalogues → Product Advisor`
4. Click "Add" to create a new advisor
5. Enter a name and add questions
6. Embed the advisor in a Shopping Experience under `Content → Shopping Experiences`

## Documentation Contents

- [Configuration Settings](configuration/settings.md) - All available advisor settings explained
- [Usage Guide](usage/usage.md) - Overview of all plugin features
- [Configuring Questions](usage/questions.md) - Detailed guide to question configuration
- [Configuring Answers](usage/answers.md) - Detailed guide to answer configuration
- [How-To Guide](how_to.md) - Step-by-step workflows and data flow
- [Changelog](changelog.md) - Version history and updates

## Support

For questions or issues, contact us at **plugin@web-labels.de** or use the Shopware ticket support.

**Manufacturer:** [Web Labels Webdesign GmbH](https://store.shopware.com/web-labels-webdesign-gmbh.html)
