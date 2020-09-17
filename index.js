const colorNames = require('./data/css-color-names.json')

/**
 * Generate ANSI color code for the given color
 * @module better-colors
 * @param {string} color - Color to convert to equivalent ANSI code. Accepts: regular color names (`red`, etc.), RGB and HEX.
 * @returns {string}
 * @example
 * const color = require('better-colors')
 *
 * // will all print '\u001b[38;2;255;0;0m\u001b[10m'
 * console.log(color('red'))
 * console.log(color('#ff0000'))
 * console.log(color(255, 0, 0))
 *
 * // will print '\u001b[48;2;255;0;0m\u001b[10m'
 * console.log(color('red', 1))
 */
module.exports = color
function color (...args) {
  let rgb
  if (typeof args[0] === 'string') {
    rgb = extractFromString(args[0])
    setMember(rgb, 'bg', args, 1)
    setMember(rgb, 'style', args, 2)
  } else {
    rgb = {
      r: args[0],
      g: args[1],
      b: args[2]
    }
    setMember(rgb, 'bg', args, 3)
    setMember(rgb, 'style', args, 4)
  }
  return cliColorString(rgb)
}

color.RESET = '\x1b[0m'

function extractFromString (str) {
  const firstLetter = str.substr(0, 1)
  if (firstLetter === '#') {
    return getColorFromRGB(str)
  } else {
    return getColorFromRGB(colorNames[str])
  }
}

function cliColorString (options) {
  const opt = { ...{ bg: 0, style: 10 }, ...options }
  const l = opt.bg ? 48 : 38
  return `\x1b[${l};2;${opt.r};${opt.g};${opt.b}m\x1b[${opt.style}m`
}

function setMember (obj, name, arr, offs) {
  if (arr.length > offs) {
    obj[name] = arr[offs]
  }
}

function getColorFromRGB (hexCode) {
  return {
    r: parseInt(hexCode.substr(1, 2), 16),
    g: parseInt(hexCode.substr(3, 2), 16),
    b: parseInt(hexCode.substr(5, 2), 16)
  }
}
