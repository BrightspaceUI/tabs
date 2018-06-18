# d2l-tabs
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/BrightspaceUI/tabs)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A [Polymer](https://www.polymer-project.org/1.0/)-based web component for tabs.

## Installation

`d2l-tabs` can be installed from [Bower][bower-url]:
```shell
bower install d2l-tabs
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import the component or behavior.

### Component

#### HTML

```html
<head>
  <script src="../webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="../d2l-tabs/d2l-tabs.html">
</head>
```

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-tabs.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
      }
      body {
        color: var(--d2l-color-ferrite);
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
        letter-spacing: 0.01rem;
        font-size: 0.95rem;
        font-weight: 400;
        line-height: 1.4rem;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<d2l-tabs>
  <d2l-tab-panel text="S17">Stuff for S17</d2l-tab-panel>
  <d2l-tab-panel text="F17" selected>Stuff for F17</d2l-tab-panel>
  <d2l-tab-panel text="W18">Stuff for W18</d2l-tab-panel>
  <d2l-tab-panel text="S18">Stuff for S18</d2l-tab-panel>
</d2l-tabs>
```

* `max-width` (optional): used on `d2l-tabs` to limit the width of the tab list (excluding `ext` slot).
* `no-auto-select` (optional): used on `d2l-tabs` to configure whether tabs are activated upon receiving focus.  Note: [Aria Tab Guidelines](https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel) suggest auto select being preferred unless the user will experience latency.
* `no-padding` (optional): used on `d2l-tab-panel` to opt out of default padding/whitespace for the panel.

Alternatively, `d2l-tab` and `d2l-tab-panel` can be specified with `dom-repeat`.

```html
<d2l-tabs>
  <template items="{{tabs}}" is="dom-repeat">
    <d2l-tab-panel text="{{item.text}}">{{item.content}}</d2l-tab-panel>
  </template>
</d2l-tabs>
```

#### Events

The `d2l-tab` component dispatches the `d2l-tab-panel-selected` event when the tab is activated.

```javascript
// triggered when tab is activated
tab.addEventListener('d2l-tab-panel-selected', () => { ... });
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-tabs
[bower-image]: https://badge.fury.io/bo/d2l-tabs.svg
[ci-url]: https://travis-ci.org/BrightspaceUI/tabs
[ci-image]: https://travis-ci.org/BrightspaceUI/tabs.svg?branch=master
