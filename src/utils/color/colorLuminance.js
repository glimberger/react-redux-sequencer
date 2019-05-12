// @flow strict
/**
 * @see https://www.sitepoint.com/javascript-generate-lighter-darker-color/
 *
 * @param hex
 * @param lum
 * @return {string|string}
 */
function colorLuminance(hex: string, lum: number): string {
  // validate hex string
  let h = String(hex).replace(/[^0-9a-f]/gi, "")
  if (h.length < 6) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
  }
  let l = lum || 0

  // convert to decimal and change luminosity
  let rgb = "#",
    c,
    i

  for (i = 0; i < 3; i++) {
    c = parseInt(h.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * l), 255)).toString(16)
    rgb += ("00" + c).substr(c.length)
  }

  return rgb
}

export default colorLuminance
