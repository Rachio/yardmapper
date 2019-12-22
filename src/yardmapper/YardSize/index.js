// @flow strict

/**
 * @fileoverview Yard size for subscription signup
 * @see https://rachio.invisionapp.com/d/main#/console/17099331/354467217/preview
 */

import '../../assets/style-overrides.css'
import { makeStyles } from '@material-ui/styles'
import * as React from 'react'
import Manual from './manual'
import Map, { POLYGON } from './Map'
import MaxSize from './maxSize'
import YardSizeSection from './section'

// Types/Constants ////////////////////////////////////////////////////////////

/** Component ID to help with debugging */
const COMPONENT_ID: string = 'YARDMAPPER_PARENT' + '_YARD-SIZE'

// Yard Size Section //////////////////

// Main Component /////////////////////////////////////////////////////////////

type YardSizeProps = {
  center: { lat: number, lng: number},
  closeLottie: Function,
  isLottieOpen: boolean,
  isMetric?: boolean,
  maxSize: number,
  onComplete: (event: any) => any,
  googleMapsApiKey: string
}

type YardSizeClasses = {
  button: string,
  buttonContainer: string,
  root: string
}

/**
 * Style creator for main YardSize component
 * @return {Object} - Classes for styling
 */
const yardSizeStyles: () => YardSizeClasses = makeStyles(theme => {
  const breakpoints = theme.breakpoints
    ? theme.breakpoints
    : { down: size => size }
  return {
    button: {
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginLeft: 0
      }
    },
    buttonContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'fixed', // Allow height 100%
      width: '100%'
    }
  }
})

/**
 * Yard size for subscription signup
 * @param {object} props - Component properties
 * @return {JSX} - Component
 */
const YardSize = (props: YardSizeProps) => {
  /** Styling classes */

  // Keep / set size locally until user confirms and validates
  const [size, setSize] = React.useState(0)

  // Keep / set is max size dialog open
  const [maxSizeDialogOpen, setMaxSizeDialogOpen] = React.useState(false)

  // Keep / set manual size dialog open
  const [manualSizeDialogOpen, setManualSizeDialogOpen] = React.useState(false)

  // Keep / set manual size ERROR dialog open
  const [maxSizeErrorOpen, setMaxSizeErrorOpen] = React.useState(false)

  // Sets the current state of the drawing manager ('polygon' || null)
  const [drawingMode, setDrawingMode]: [
    typeof POLYGON | null,
    Function
  ] = React.useState(POLYGON)

  /** Store controlled polygons */
  const [polygons, setPolygons]: [
    Array<any>,
    (Array<any> | ((Array<any>) => Array<any>)) => void
  ] = React.useState([])

  const handleSubmit = () => {
    return props.onComplete({
      size,
      polygons,
      manuallyEntered: false,
      isMetric: props.isMetric
    })
  }

  const handleManualSizeSubmit = (manuallyEnteredSize) => {
    return props.onComplete({
      size: manuallyEnteredSize,
      polygons,
      manuallyEntered: true,
      isMetric: props.isMetric
    })
  }

  const unitLabel = props.isMetric ? 'square meters' : 'square feet'
  const classes = yardSizeStyles()

  return (
    <div data-component-id={COMPONENT_ID} className={classes.root}>
      <Map
        key={COMPONENT_ID + '_MAP'}
        center={props.center}
        closeLottie={props.closeLottie}
        drawingMode={drawingMode}
        isLottieOpen={props.isLottieOpen}
        polygons={polygons}
        setPolygons={setPolygons}        
        setDrawingMode={setDrawingMode}
        setSize={setSize}
        isMetric={props.isMetric}
        googleMapsApiKey={props.googleMapsApiKey}
      />
          <YardSizeSection
            disabled={!size}
            yardSize={size}
            maxSize={props.maxSize}
            tooBig={Boolean(size > props.maxSize)}
            unitLabel={unitLabel}
            isMetric={props.isMetric}
            handleSubmit={handleSubmit}
            setManualSizeDialogOpen={setManualSizeDialogOpen}
            setMaxSizeErrorOpen={setMaxSizeErrorOpen}
          />
          <Manual
            maxSize={props.maxSize}
            open={manualSizeDialogOpen}
            onClose={() => setManualSizeDialogOpen(false)}
            onSubmit={size => handleManualSizeSubmit(size)}
            unitLabel={unitLabel}
          />
          <MaxSize
            open={maxSizeErrorOpen}
            maxSize={props.maxSize}
            onClose={() => setMaxSizeErrorOpen(false)}
            onEnterManually={() => {
              setManualSizeDialogOpen(true)
              setMaxSizeDialogOpen(false)
            }}
            size={size}
            unitLabel={unitLabel}
          />
    </div>
  )
}

export default YardSize
