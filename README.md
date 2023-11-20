[![NPM Package][npm]][npm-url]
[![NPM Downloads][npm-downloads-per-month]][npm-trends]
![Geins][mit-shield]

[![Start Geins Free Trial][geins-tiral-img]][geins-tiral-url] [![Geins Docs][geins-docs-img]][geins-docs-url]


# Geins CMS module for Ralph Storefront

This module is a helping tool to render your widgets, when you're using the Geins CMS to create custom widgets. 

## Pre-requisites

- Geins account and Geins PWA Ralph Storefront. [Get a free trial here](https://www.geins.io)
- Geins Ralph UI 20.0.0 or higher

## Module options

These extra options can be added to the module configuration in `nuxt.config.js` file.

| Parameter | Default | Example |
|-|-|-|
| enabled | `true` | Enable/Disable the module | 

## Components

The component this module includes is called `GeinsCreatedWidgets` and it's only job is to render the component specified in the JSON supplied to the widget.

## Installation

### 1. Install the module

```bash
npm i @geins/ralph-module-cms
```

### 2. Add the module to your storefront

Add the module to your storefront by adding the following line to your `nuxt.config.json` file:

```js
...
  modules: [
      ...
      '@geins/ralph-module-cms'
  ]
```

### 3. Specify to use the GeinsCreatedWidgets component instead of default

Set the `widgetRenderTypesComponents` config object in your `nuxt.config.json` file to use the `GeinsCreatedWidgets` component from this module to be used, instead of the default for the `JSON` widget type.

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

### 4. Add the correct JSON format in your Geins Merchant Center

Use the [Create widget](https://docs.geins.io/docs/geins/cms/create-widget) function in your Geins Merchant Center. Add your configuration in the following JSON format for this module to work correctly:

```json
{
  "component": "MyWidgetComponent",
  "configuration": {
    // Add your configuration here
  }
}
```

### 5. Create the widget components

Your custom widget component needs a `configuration` prop. This prop will hold the `configuration` from your JSON above. For example:

  ```js
  ...
  export default {
    name: 'MyWidgetComponent',
    props: {
      configuration: {
        type: Object,
        required: true
      }
    }
    ...
  }
  ...
  ```

[npm]: https://img.shields.io/npm/v/@geins/ralph-module-cms
[npm-url]: https://www.npmjs.com/package/@geins/ralph-module-cms
[npm-downloads-per-month]: https://img.shields.io/npm/dm/@geins/ralph-module-cms.svg
[npm-trends]: https://npmtrends.com/@geins/ralph-module-cms
[geins-docs-url]: https://docs.geins.io
[geins-docs-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-docs-read-v3.json
[geins-tiral-url]: https://www.geins.io
[geins-tiral-img]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/geins-io/resources/master/sheilds/geins-fee-tiral.json
[mit-shield]: https://img.shields.io/badge/license-MIT-green
[mit-url]: https://en.wikipedia.org/wiki/MIT_License
