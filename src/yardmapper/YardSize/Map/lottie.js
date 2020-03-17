// @flow
import React from 'react'
import Colors from '../../../assets/colors.json'
import Lottie from 'react-lottie'
import animationData from './yml-lottie.json'
import lottieBackground from '../../../assets/img_birdseye-lawn.jpg'
import { makeStyles } from '@material-ui/styles'
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Typography
} from '@material-ui/core'
import { createButtonColorStyleObject } from '../../LinkButton'

//////////// TYPES //////////////////////

type DefaultOptions = {|
  animationData: any,
  autoplay: boolean,
  loop: boolean,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
|}

type Classes = {|
  root: string,
  dialog: string,
  text: string,
  btn: string
|}

//////////// CONSTANTS ///////////////////

const defaultOptions: DefaultOptions = {
  animationData,
  autoplay: true,
  loop: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

//////////// STYLES /////////////////////

const mapLottieStyles: () => Classes = makeStyles(theme => {
  const spacing = 8
  return {
    root: {
      padding: 0,
      borderRadius: 0
    },
    dialog: {
      padding: `0 !important`, // !important needed to align background image with animation
      maxWidth: spacing * 60,
      backgroundImage: `url(${lottieBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    },
    text: {
      padding: `${spacing * 2}px ${spacing * 3}px`,
      color: `${Colors.gray} !important`,
      fontSize: `16px !important`,
      textAlign: 'center'
    },
    btn: {
      margin: 0,
      borderRadius: 0,
      ...createButtonColorStyleObject(Colors.rachioBlue)
    }
  }
})

//////////// COMPONENT ///////////////////

type Props = {|
  closeLottie: () => void,
  open: boolean
|}

/**
 * Map Instructional Dialog
 * @summary Dialog w/ Instructional Lottie for Yard Maping Portion of Subscription/Signup
 * @param {Props} props - Component properties
 * @return {JSX} - Dialog to render
 */
const MapLottie = ({ closeLottie, open }: Props) => {
  const classes = mapLottieStyles()
  return (
    <Dialog className={classes.root} open={open} onClose={closeLottie}>
      <DialogContent className={classes.dialog + ' custom-dialog'}>
        <Lottie className='custom-lottie' options={defaultOptions} />
        <DialogContentText>
          <Typography className={classes.text + ' map-tap'} variant={'body2'}>
            {"Tap on map to outline your lawn and calculate square footage."}
          </Typography>
        </DialogContentText>
        <Button
          autoFocus
          className={classes.btn + ' got-it-btn'}
          color="primary"
          fullWidth
          onClick={closeLottie}
          variant={'contained'}
        >
          {'Got It'}
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default MapLottie
