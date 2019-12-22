// @flow
import Colors from '../../../assets/colors.json'
import GpsIcon from '../../../assets/gps.svg'
import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

//////////// TYPES ////////////////////

type Classes = {|
  root: string,
  btn: string,
  tintBox: string,
  gpsBtn: string,
|}

//////////// STYLES ///////////////////

const mapControlsStlyes: () => Classes = makeStyles(theme => {
  const spacing = 8
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
      position: 'absolute',
      transform: `translateY(${spacing * 2.5}px) translateX(${spacing * 2.5}px)`
    },
    tintBox: {
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: `${spacing}px !important`,
      padding: spacing * 0.5
    },
    btn: {
      backgroundColor: 'rgba(0,0,0,0.4) !important',
      border: `1px solid ${Colors.white_alpha80} !important`,
      borderRadius: `${spacing * 4}px !important`,
      color: `${Colors.white} !important`,
      fontSize: `13px !important`,
      height: spacing * 4,
      lineHeight: '13px !important',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.8)'
      }
    },
    gpsBtn: {
      margin: '2px 0 0 !important',
      padding: `0px !important`
    }
  }
})

//////////// COMPONENT ///////////////////

type Props = {|
  centerMap: () => void,
  clearPolygons: () => void,
  removeLastPolygon: () => void,
  showClearButton: boolean
|}

/**
 * Map Controls
 * @summary Yard Maping Buttons Overlay Container
 * @param {Props} props - Component properties
 * @return {JSX} - Controls to render
 */
const Controls = ({
  clearPolygons,
  showClearButton,
  removeLastPolygon,
  centerMap
}: Props) => {
  const classes = mapControlsStlyes()

  return (
    <div className={classes.root}>
        <span className={classes.tintBox}>
        {showClearButton && (
          <span>
            <Button className={classes.btn} onClick={clearPolygons}>
              {'CLEAR ALL'}
            </Button>
            <Button
              className={classes.btn}
              style={{ marginLeft: 8, marginRight: 8 }}
              onClick={removeLastPolygon}
            >
              {'UNDO LAST'}
            </Button>
        </span>
        )}
          <IconButton className={classes.gpsBtn} onClick={centerMap}>
            <img src={GpsIcon} title={'center map'} alt={'center-icon'} />
        </IconButton>
        </span>
    </div>
  )
}

export default Controls
