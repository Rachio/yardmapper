// @flow strict

/**
 * @fileoverview Mapped yard max size exceeded error dialog for subscription signup flow
 */

import { formatAsNumber } from '../../util'
import { makeStyles } from '@material-ui/styles'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import Colors from '../../assets/colors.json'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

type Props = {
  maxSize: number,
  onClose: () => void,
  onEnterManually: () => void,
  unitLabel: string,
  size: number,
  open: boolean
}

type Classes = {
  button: string,
  largeLawn: string,
  link: string
}

/**
 * Style creator for component
 * @return {Object} - Classes for styling
 */
const styles: () => Classes = makeStyles(theme => ({
  button: {
    color: Colors.rachioBlue
  },
  largeLawn: {
    marginBottom: 8
  },
  link: {
    textDecoration: 'none',
    color: Colors.rachioBlue
  }
}))

/**
 * Manual yard size entery for subscription signup
 * @param {object} props - Component properties
 * @return {JSX} - Component
 */
const MaxSize = (props: Props) => {
  /** Styling classes */
  const classes: Classes = styles()

  return (
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="max-yard-size-exceeded-error-dialog"
      >
        <DialogTitle id="max-yard-size-exceeded-error-dialog-title">
          {'Max Yard Size Exceeded'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.largeLawn}>
            {'You have a large lawn!'}
          </DialogContentText>
          <DialogContentText>
            {`You have selected an area of ${formatAsNumber(props.size)} ${
              props.unitLabel
            }. This program currently supports yards no larger than ${formatAsNumber(
              props.maxSize
            )} ${
              props.unitLabel
            }. If you would like to be contacted when we support larger yards, please let us know `}
            <a
              className={classes.link}
              href={'https://usersurvey1.typeform.com/to/EK6G4i'}
              target={'_blank'}
            >
              {'here'}
            </a>
            {'.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} className={classes.button}>
            {'Edit'}
          </Button>
          <Button onClick={props.onEnterManually} className={classes.button}>
            {'Enter Manually'}
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default MaxSize
