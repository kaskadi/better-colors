![](https://img.shields.io/github/package-json/v/kaskadi/better-colors)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/better-colors?color=blue)

**GitHub Actions workflows status**

[![Build workflow status](https://img.shields.io/github/workflow/status/kaskadi/better-colors/build?label=build&logo=mocha)](https://github.com/kaskadi/better-colors/actions?query=workflow%3Abuild)
[![Publish workflow status](https://img.shields.io/github/workflow/status/kaskadi/better-colors/publish?label=publish&logo=npm)](https://github.com/kaskadi/better-colors/actions?query=workflow%3Apublish)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/better-colors?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/better-colors)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/better-colors?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/better-colors)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/better-colors?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/better-colors)

****

# Installation

```
npm i @kaskadi/better-colors
```

# API documentation

## better-colors

Generate ANSI color code for the given color


| Param | Type | Description |
| --- | --- | --- |
| color | `string` | Color to convert to equivalent ANSI code. Accepts: regular color names (`red`, etc.), RGB and HEX. |

**Example**  
```js
const color = require('better-colors')

// will all print '\u001b[38;2;255;0;0m\u001b[10m'
console.log(color('red'))
console.log(color('#ff0000'))
console.log(color(255, 0, 0))

// will print '\u001b[48;2;255;0;0m\u001b[10m'
console.log(color('red', 1))
```
<!-- LINKS -->