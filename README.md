[![NPM Package][npm]][npm-url]
[![NPM Downloads][npm-downloads-per-month]][npm-trends]
![Geins][mit-shield]

[![Start Geins Free Trial][geins-tiral-img]][geins-tiral-url] [![Geins Docs][geins-docs-img]][geins-docs-url]


# Geins CMS module for Ralph Storefront

This module is a helping tool to render your widgets, when you're using the Geins CMS to create your own widgets. 

## Pre-requisites

- Geins Account and PWA Storefront Ralph. [Get a free trial here](https://www.geins.io)
- Ralph UI 20.0.0 or higher

## Installation

### 1. Install the module

```bash
npm i @geins/ralph-module-cms
```

### 2. Add the module to your Geins Ralph Storefront

Add the module to your Geins Ralph Storefront by adding the following line to your `nuxt.config.json` file:

```js
...
  modules: [
      '@geins/ralph-module-cms'
  ]
```

### 3. Specify to use the GeinsCreatedWidgets component instead of default

Set the `widgetRenderTypesComponents` in your `nuxt.config.json` file to use the `GeinsCreatedWidgets` component from this module to be used instead of the default for the `JSON` widget type.

```js
...
  publicRuntimeConfig: {
    ...
      widgetRenderTypesComponents: {
        JSON: 'GeinsCreatedWidgets'
      },
    ...
  }
...
```

## Module Options

These extra options can be added to module configuration in `nuxt.config.js` file.

| Parameter | Default | Example |
|-|-|-|
| enabled | `true` | Enable/Disable the module | 

## Components
This module has one job. To render all of your custom created widgets. The component is called `GeinsCreatedWidgets` and renders the component specified in the JSON supplied to the widget.

### JSON format in the Geins CMS

Use the `Create your own` widget function in the [Geins CMS](https://docs.geins.io/docs/launchpads/web/content). For the `GeinsCreatedWidgets` to work correctly, you need to supply the following JSON format:

```json
{
  "component": "MyWidgetComponent",
  "configuration": {
    // Add your configuration here
  }
}
```

Read more about how to use the Create your own widget function in the Geins Docs: [Create your own widget](https://docs.geins.io/docs/geins/cms/create-your-own).

[npm]: https://img.shields.io/npm/v/@geins/ralph-module-cms-json-container
[npm-url]: https://www.npmjs.com/package/@geins/ralph-module-cms-json-container
[npm-downloads-per-month]: https://img.shields.io/npm/dm/@geins/ralph-module-cms-json-container.svg
[npm-trends]: https://npmtrends.com/@geins/ralph-module-cms-json-container
[geins-docs-url]: https://docs.geins.io
[geins-docs-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-docs-read-v3.json
[geins-tiral-url]: https://www.geins.io
[geins-tiral-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-fee-tiral.json
[mit-shield]: https://img.shields.io/badge/license-MIT-green
[mit-url]: https://en.wikipedia.org/wiki/MIT_License
