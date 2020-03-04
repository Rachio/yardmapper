// @flow strict

/**
 * @fileoverview Manual yard size entry dialog for subscription signup flow
 */

import { formatAsNumber } from '../../util'
import { makeStyles } from '@material-ui/styles'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import Colors from '../../assets/colors.json'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'

type Props = {
  maxSize: number,
  onClose: () => void,
  onSubmit: (size: number) => mixed,
  unitLabel: string,
  open: boolean,

}

type Classes = {
  buttonEnter: string,
  buttonCancel: string,
  label: string,
  inputAdornment: string,
  underline: string
}

/**
 * Style creator for component
 * @return {Object} - Classes for styling
 */
const styles: () => Classes = makeStyles(theme => ({
  buttonCancel: {
    color: Colors.gray_tint_1
  },
  buttonEnter: {
    color: Colors.rachioBlue
  },
  label: {
    color: Colors.rachioBlue + ' !important' // Tried using the `classes` prop to override the `focused` class :/
  },
  underline: {
    '&:after': {
      borderBottomColor: Colors.rachioBlue
    }
  },
  inputAdornment: {
    padding: `0 ${8 / 2}px ${8 / 2}px`,
    whiteSpace: 'nowrap'
  }
}))

/**
 * Manual yard size entery for subscription signup
 * @param {object} props - Component properties
 * @return {JSX} - Component
 */
const Manual = (props: Props) => {
  /** Styling classes */
  const classes: Classes = styles()

  /** Keep track of size internally until they submit */
  const [size, setSize]: [
    number,
    (number | (number => number)) => void
  ] = React.useState(0)

  /** Input Ref */
  const inputElm: { current: ?HTMLInputElement } = React.useRef(null)

  /**
   * Process Input Event
   * @param {InputEvent} e - Input Event
   */
  const processInputEvent = e => {
    const enteredValue: string = e.nativeEvent.data
    const isNumber: boolean = /^\d+/.test(enteredValue)
    const isBackspace: boolean = !enteredValue

    if (isNumber) {
      const newSize: number = Number(String(size) + enteredValue)
      setSize(newSize)
    } else if (isBackspace) {
      setSize(Math.floor(size / 10))
    }
  }

  /**
   * @summary Process Key Down Event
   * @description This event is not well supported in
   *              mobile browsers (Android, 229), so we only use it to listen
   *              for Enter key presses, which will not happen on mobile
   *              browsers
   * @param {KeyDownEvent} e - Input Event
   */
  const processKeyDownEvent = e => {
    const isEnter: boolean = e.key === 'Enter'

    if (isEnter) {
      props.onSubmit(size)
    }
  }

  /** Whether or not the user entered size is bigger than we support */
  const tooBig: boolean = size > props.maxSize

  return (
    <div>
      {/* Remove spin button on number input */}
      <style>
        {`
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="yard-size-manual-entry-dialog-title"
        onEntered={() => {
          if (inputElm.current) {
            inputElm.current.focus()
            // flow-ignore (flow worries we might have changed `inputElm` when we called `focus()`)
            inputElm.current.select()
          }
        }}
      >
        <DialogTitle id="yard-size-manual-entry-dialog-title">
          {'Enter Manually'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            error={tooBig}
            helperText={
              tooBig
                ? `Max size: ${formatAsNumber(props.maxSize)} ${
                    props.unitLabel
                  }`
                : null
            }
            id={'yard-size'}
            inputRef={inputElm}
            InputProps={{
              endAdornment: (
                <InputAdornment className={classes.inputAdornment}>
                  {props.unitLabel}
                </InputAdornment>
              ),
              type: 'number',
              min: 1,
              max: props.maxSize,
              pattern: '[0-9]*',
              maxLength="5",
              classes: {
                underline: classes.underline
              }
            }}
            InputLabelProps={{
              className: classes.label,
              shrink: true
            }}
            label={'Lawn Size'}
            margin={'dense'}
            // We're listening to multiple events due to browser support issues
            onInput={processInputEvent}
            onKeyDown={processKeyDownEvent}
            // To avoid displaying '0' we set value to '' if size is 0
            value={size === 0 ? '' : size}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} className={classes.buttonCancel}>
            {'Cancel'}
          </Button>
          <Button
            onClick={() => props.onSubmit(size)}
            className={classes.buttonEnter}
            disabled={tooBig || size === 0}
          >
            {'Enter'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Manual
