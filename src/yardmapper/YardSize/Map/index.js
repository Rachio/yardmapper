// @flow
import React, { useEffect, useState, useRef } from 'react'
import Colors from '../../../assets/colors.json'
import convert from 'convert-units'
import MapControls from './controls.js'
import MapLottie from './lottie'
import MyPolygon from './polygon'
import uuid from 'uuid/v1'
import { DrawingManager } from 'react-google-maps/lib/components/drawing/DrawingManager'
import { Fade, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {
  getPathsFromPolygon,
  getAreaFromCoords
} from '../../../util'
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps'

//////////// TYPES ////////////////////

type DefaultMapOptions = {|
  disableDefaultUI: boolean,
  fullscreenControl: boolean,
  styles: Object,
  zoomControl: boolean
|}

export type PolygonStyles = {|
  fillColor: string,
  fillOpacity: number,
  strokeWeight: number,
  strokeColor: string
|}

type PolygonType = {|
  area: number,
  id: string,
  paths: Array<any>
|}

type Classes = {|
  toolTip: string,
  toolTipText: string,
  banner: string,
  root: string
|}

//////////// CONSTANTS ///////////////////

/** Component ID to help with debugging */

const COMPONENT_ID: string = 'YARDMAPPER_YARD-SIZE_MAP'

const DEFAULT_MAP_TYPE: 'satellite' = 'satellite'
const DEFAULT_TILT: 0 = 0
const DEFAULT_ZOOM: 24 = 24 // Will initialize to max zoom level for address.

export const POLYGON: 'polygon' = 'polygon'
export const EDITING: 'editing' = 'editing'

const DEFAULT_LOADING_ELEMENT = <div style={{ height: `100%` }} />

const POLYGON_STYLE_OPTIONS: PolygonStyles = {
  fillColor: Colors.teal,
  fillOpacity: 0.2,
  strokeWeight: 2,
  strokeColor: Colors.rachioBlue
}

// set default map option properties: https://www.w3resource.com/API/google-maps/google-maps-class-propertes-controls.php#MO
const DEFAULT_MAP_OPTIONS: DefaultMapOptions = {
  disableDefaultUI: true,
  fullscreenControl: false,
  styles: { height: '100%' },
  zoomControl: false
}

////////// STYLES ///////////////////////

/**
 * Style creator for Map component
 * @return {Object} - Classes for styling
 */
const mapStyles: () => Classes = makeStyles(theme => {
  const spacing = 8
  const breakpoints = theme.breakpoints
    ? theme.breakpoints
    : { down: size => size }
  return {
    toolTip: {
      flex: 1,
      fontFamily: "'Avenir Next', sans-serif",
      padding: `0 ${spacing}px`
    },
    toolTipText: {
      fontSize: '20px !important',
      lineHeight: '26px !important',
      color: `${Colors.white} !important`,
      fontWeight: `500px !important`,
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px !important',
        lineHeight: '20px !important'
      }
    },
    banner: {
      alignItems: 'center',
      backgroundColor: Colors.navy,
      color: Colors.white,
      display: 'flex',
      height: spacing * 12,
      opacity: 0.86,
      textAlign: 'center',
      width: '100vw'
    },
    root: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
    }
  }
})

//////////// COMPONENT ///////////////////

type Props = {
  center: any,
  closeLottie: Function,
  drawingMode: typeof POLYGON | null,
  isLottieOpen: boolean,
  polygons: any,
  setPolygons: any => Function,
  isMetric?: boolean,
  setDrawingMode: (typeof POLYGON | null) => void,
  setSize: number => void,
  googleMapsApiKey: string
}

/**
 * Yard mapping component
 * @summary Yard Mapping Component
 * @param {Props} props - Component properties
 * @return {JSX} - Rendered Yard Map
 */
const Map = ({
  center,
  closeLottie,
  drawingMode,
  isLottieOpen,
  polygons,
  setPolygons,
  setDrawingMode,
  setSize,
  isMetric
}: Props) => {
  const mapRef = useRef(null)
  const classes = mapStyles()

  useEffect(() => {
    setLawnSize()
  })

  /**
   * Handles polygon completion from drawing manager
   * @param {Object} polygon - Polygon from drawing manager
   */
  const handleCompletedPolygon = (polygon: Object) => {
    addControlledPolygonToMap(polygon)
    polygon.setMap(null)
    setDrawingMode(null)
  }

  /**
   * Adds controlled polygon to state with area and id
   * @param {Object} drawnPolygon - Polygon from drawing manager
   */
  const addControlledPolygonToMap = (drawnPolygon: Object) => {
    const paths = getPathsFromPolygon(drawnPolygon)
    const area = getAreaFromCoords(drawnPolygon)

    const polygon: PolygonType = {
      id: uuid(),
      paths,
      area
    }

    setPolygons([...polygons, polygon])
  }

  const setLawnSize = () => {
    // eslint-disable-next-line no-param-reassign
    const size = polygons.reduce((acc, p) => (acc += p.area), 0)
    return setSize(
      Math.round(
        !isMetric
          ? convert(size)
              .from('m2')
              .to('ft2')
          : size
      )
    )
  }

  /**
   * Replaces polygon with new values after beign edited
   * @param {Array<Coordinates>} paths - paths
   * @param {string} id - id of polygon
   */
  const editPolygon = (paths, id) => {
    const googlePolygon = new window.google.maps.Polygon({ paths })
    const area = getAreaFromCoords(googlePolygon)
    setPolygons([...polygons.filter(p => p.id !== id), { id, paths, area }])
  }

  /**
   * Removes last polygon drawn
   */
  const removeLastPolygon = () => {
    const newPolygons = [...polygons]
    newPolygons.pop()
    setPolygons(newPolygons)
    setDrawingMode(POLYGON)
  }

  /** Centers map with initial coords */
  const centerMap = () => {
    // flow-ignore
    mapRef.current.panTo(center)
  }

  return (
    <div data-component-id={COMPONENT_ID} key={center.toString()}>
      <div className={'index-root-wrap ' + classes.root}>
        {!isLottieOpen && (
              <div className="map-controls-wrap">
                {/*<div className={classes.banner}>
                  <Fade in timeout={1500}>
                    <div className={classes.toolTip}>
                      <Typography className={classes.toolTipText}>
                        {
                          'Tap to draw. Connect last point to the first point to complete.'
                        }
                      </Typography>
                    </div>
                  </Fade>
                </div>*/}
                <MapControls
                  clearPolygons={() => {
                    setPolygons([])
                    setDrawingMode(POLYGON)
                  }}
                  showClearButton={
                    Boolean(polygons.length) || Boolean(!drawingMode)
                  }
                  removeLastPolygon={removeLastPolygon}
                  centerMap={centerMap}
                />
              </div>
            )}
          <GoogleMap
            defaultCenter={center}
            defaultOptions={DEFAULT_MAP_OPTIONS}
            defaultTilt={DEFAULT_TILT}
            defaultZoom={DEFAULT_ZOOM}
            mapTypeId={DEFAULT_MAP_TYPE}
            onClick={() => setDrawingMode(POLYGON)}
            ref={mapRef}
          >
          <MapLottie open={isLottieOpen} closeLottie={closeLottie} />
          <DrawingManager
            drawingMode={drawingMode}
            onPolygonComplete={handleCompletedPolygon}
            defaultOptions={{
              drawingControl: false,
              polygonOptions: {
                ...POLYGON_STYLE_OPTIONS,
                editable: true
              }
            }}
          />
          {polygons.map(polygon => (
            <MyPolygon
              editPolygon={editPolygon}
              id={polygon.id}
              key={polygon.id}
              options={POLYGON_STYLE_OPTIONS}
              path={polygon.paths}
              polygonsEditable={!drawingMode}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  )
}

//////////// MAP HOC /////////////////////

/** Injects Map with google maps script */
const MapWrapped = withScriptjs(withGoogleMap(Map))

/**
 * Map Container Wrapper
 * @param {Props} props - component props
 * @return {JSX} - Wrapped Map JSX
 */
const MapContainer = (props: any) => (
  <div style={{ width: '100%', height: '100%' }}>
    <MapWrapped
      googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=${props.googleMapsApiKey}`}
      loadingElement={DEFAULT_LOADING_ELEMENT}
      containerElement={DEFAULT_LOADING_ELEMENT}
      mapElement={DEFAULT_LOADING_ELEMENT}
      {...props}
    />
  </div>
)

export default MapContainer
