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
  rootOverride: string,
  btnOverride: string,
  tintBoxOverride: string,
  gpsBtnOverride: string,
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
      
    },
    btn: {
      color: 'white !important',
      fontSize: '14px !important',
      height: spacing * 4,
      lineHeight: '21px !important',
      background: '#EF483D !important',
      boxShadow: '-2px 2px 1px rgba(0, 0, 0, 0.5) !important',
      borderRadius: '22px !important',
      transition: 'all .3s ease !important',
      textTransform: 'none !important',
      fontWeight: '400 !important',
      height: 'auto !important',
      padding: '11px 28px !important',
      display: 'block !important',
      marginLeft: '15px !important',
      marginTop: '25px !important',
      '&:hover': {
        backgroundColor: '#C7392F !important'
      }
    },
    gpsBtn: {
      margin: '2px 0 0 !important',
      padding: `0px !important`
    },
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
            <Button id='clear-all-btn' className={classes.btn} onClick={clearPolygons}>
              {'Clear All'}
            </Button>
            <Button
              className={classes.btn}
              id='delete-last-btn'
              style={{ marginLeft: 8, marginRight: 8 }}
              onClick={removeLastPolygon}
            >
              {'Delete Last'}
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
