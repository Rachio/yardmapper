/**
 * Format string or number as a properly formatted number
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat
 * @param  {string | number} text - Text to format
 * @param  {object} [options] - Options to pass to `Intl.NumberFormat`
 * @param  {string} [locale=en-US] - Locale to use, defaults to 'en-US'
 * @return {string} - Passed in `text` properly formatted for display as a number
 */
export const formatAsNumber = (
    text: string | number,
    options: Object = {},
    locale: string = 'en-US'
  ) => new Intl.NumberFormat(locale, options).format(text)

  /**
 * Get total area from coords of google maps polygon
 * @param {Object} polygon - polygon instance from google drawing manager
 * @return {?number} - area in square meters
 */
export const getAreaFromCoords = (polygon: Array<Coordinate>): ?number => {
    // Check to make sure that the computeArea method exists
    // const computeArea = get(window, 'google.maps.geometry.spherical.computeArea')
    if (window.google.maps.geometry.spherical.computeArea) {
      const computeArea = window.google.maps.geometry.spherical.computeArea
      // Determine area (m2) and round to nearest whole number
      return Math.round(computeArea(polygon.getPath()))
    }
    return null
  }
  
  /**
   * Given polygon instance get array of coordinates
   * @param {Object} polygon - polygon instance from google drawing manager
   * @return { Array<Coordinate> } - array of lat/lng paths
   */
  export const getPathsFromPolygon = (polygon: Object): Array<Coordinate> => {
    const vertices = polygon.getPath()
    const coords = []
    // eslint-disable-next-line no-var
    for (var i = 0; i < vertices.getLength(); i++) {
      const xy = vertices.getAt(i)
      coords.push({ lat: xy.lat(), lng: xy.lng() })
    }
    return coords
  }