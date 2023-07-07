[![NPM Package][npm]][npm-url]
[![NPM Downloads][npm-downloads-per-month]][npm-trends]
![Geins][mit-shield]

[![Start Geins Free Trial][geins-tiral-img]][geins-tiral-url] [![Geins Docs][geins-docs-img]][geins-docs-url]


# JSON Container Module for Geins CMS for PWA Storefront Ralph

This module enables you to add your own components and Geins modules from Geins CMS. 

## Pre-requisites

- Geins Account and PWA Storefront Ralph. [Get a free trial here](https://www.geins.io)
- Ralph UI 19.0.0 or higher


## Description

Add this module to your storefront and you can add your own components and Geins modules from Geins CMS from the Merchant Center.

## Installation

### 1. Install the module

```bash
npm i @geins/ralph-module-cms-json-container
```

### 2. Add the module to your Geins PWA Storefront Ralph

Add the module to your Geins PWA Storefront Ralph by adding the following line to your `nuxt.config.json` file:

```js
...
  modules: [
      '@geins/ralph-module-cms-json-container'
  ]
```

### 3. Add the component from the module as the JSON widget type

Set the `widgetRenderTypesComponents` in your `nuxt.config.json` file to use the `GeinsWidgetJsonContainer` component for the `JSON` widget type.
```js
...
  publicRuntimeConfig: {
      widgetRenderTypesComponents: {
        JSON: 'GeinsWidgetJsonContainer'
      },
  }
...
```

## Module Options

Add extra options to module configuration in `nuxt.config.json` file.
| Parameter | Default | Example |
|-|-|-|
| enabled | `true` | Enables the module|
| debug | `false` | Enables debug info to console |


## Usage

Add to desired page of your storefront. Either by cms or as a component. You can add id to the component to show a specific stream. If no id is added the component will show the next upcoming or live stream.

## Components
This module has one job. To render the JSON widget type. The component is called `GeinsWidgetJsonContainer` and renders the component specified in the JSON supplied to the widget.

### GeinsWidgetJsonContainer
This component is used to show the streamify player. It is used by the `GeinsWidgetStreamify` component. You can use it directly in your page if you want to add the player directly to your page. If

#### Properties

The properties of the component are one to one with the [Streamify Floating Player API](https://developer.streamify.io/#floating-player-js-introduction). You can add any property to the component and it will be passed to the API.

| Property        | Type    | Default Value | Required | Description                                            |
| --------------- | ------- | ------------- | -------- | ----------------------------------------------------   |
| configuration   | Object  | -             | No       | Configuration object to set properties for the widget. |


#### JSON format Geins CMS

Add a `JSON Widget` to your page in the [Geins CMS](https://docs.geins.io/docs/launchpads/web/content). Add the following JSON to your widget. Replace `YOUR-RENDER-WIDGET-NAME` with the component you wish to render. The component must be registered in your storefront, this is done automatically for Geins Ralph modules.

```json
// nuxt.config.js

{
  "renderWidget": "YOUR-RENDER-WIDGET-NAME",
  "data": {
    // data object is passed to the component
  }
}
```



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
