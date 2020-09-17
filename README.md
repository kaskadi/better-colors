![](https://img.shields.io/github/package-json/v/kaskadi/better-colors)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/better-colors?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/better-colors/publish?label=publish&logo=npm)](https://github.com/kaskadi/better-colors/actions?query=workflow%3Apublish)
[![](https://img.shields.io/github/workflow/status/kaskadi/better-colors/build?label=build&logo=mocha)](https://github.com/kaskadi/better-colors/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/better-colors/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/better-colors/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/better-colors?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/better-colors)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/better-colors?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/better-colors)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/better-colors?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/better-colors)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/better-colors?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/better-colors/?mode=list&logo=LGTM)

****

# Installation

```
npm i @kaskadi/better-colors
```

# Usage

<a name="module_color"></a>

## color ⇒ <code>string</code>
Generate ANSI color code for the given color


| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | Color to convert to equivalent ANSI code. Accepts: regular color names (`red`, etc.), RGB and HEX. |

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