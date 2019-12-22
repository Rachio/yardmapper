// @flow strict

/**
 * @fileoverview Main display area for Yard Size screen
 */

import { formatAsNumber } from '../../util'
import { makeStyles } from '@material-ui/styles'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import Colors from '../../assets/colors.json'
import {Button as MuiButton} from '../LinkButton'
import Typography from '@material-ui/core/Typography'

type YardSizeSectionClasses = {
  button: string,
  buttonDisabled: string,
  buttonContainer: string,
  editBtn: string,
  headerCopy: string,
  helperText: string,
  manualBtn: string,
  primaryContent: string,
  root: string,
  textContainer: string,
  yardSizeText: string
}

/**
 * Style creator for YardSizeSection component
 * @return {Object} - Classes for styling
 */
const yardSizeSectionStyles: () => YardSizeSectionClasses = makeStyles(
  theme => {
    const spacing = theme.spacing.unit
    const breakpoints = theme.breakpoints
      ? theme.breakpoints
      : { down: size => size }
    return {
      button: {
        width: spacing * 25,
        borderRadius: '100px !important',
        marginRight: `${spacing * 3}px !important`,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important',
          borderRadius: '0px !important',
          margin: '0px !important'
        }
      },
      buttonDisabled: {
        width: spacing * 25,
        marginRight: `${spacing * 3}px`,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          margin: `0px !important`
        },
        backgroundColor: `${Colors.gray_tint_3} !important`,
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
      },
      headerCopy: {
        color: `${Colors.gray} !imoprtant`
      },
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        [theme.breakpoints.down('xs')]: {
          display: 'block'
        }
      },
      primaryContent: {
        padding: `${spacing * 2}px`
      },
      textContainer: {
        display: 'flex',
        alignItems: 'center'
      },
      yardSizeText: {
        fontSize: '22pt !important'
      },
      manualBtn: {
        color: `${Colors.rachioBlue} !important`,
        paddingLeft: spacing,
        fontFamily: 'Avenir Next',
        fontSize: '10px !important',
        fontWeight: 500,
        letterSpacing: '1.89px',
        lineHeight: '15px',
        textShadow: '0 0 4px 0 rgba(0,0,0,0.5)'
      },
      helperText: {
        color: `${Colors.gray_tint_2} !imoprtant`,
        fontSize: '12px !important'
      }
    }
  }
)

/**
 * Section of page displaying yard size, with options to enter manually and map
 * @param {Object} props - Component properties
 * @return {JSX}- Component properties
 */
const YardSizeSection = (props: {
  disabled: boolean,
  unitLabel: string,
  handleSubmit: () => void,
  setManualSizeDialogOpen: boolean => void,
  setMaxSizeErrorOpen: boolean => void,
  tooBig: boolean,
  yardSize: number
}) => {
  /** Styling classes */
  const classes: YardSizeSectionClasses = yardSizeSectionStyles()

  return (
    <div data-component-id={'YARD-SIZE-SECTION'} className={classes.root}>
      <div className={classes.primaryContent}>
        <Typography variant={'subtitle1'} className={classes.headerCopy}>
          {'Estimated Lawn Size'}
        </Typography>
        <div className={classes.textContainer}>
          <Typography
            variant={'h3'}
            className={classes.yardSizeText}
            gutterBottom
          >
            {`${formatAsNumber(props.yardSize)} ${props.unitLabel}`}
          </Typography>
        </div>
        <div className={classes.textContainer}>
          <Typography
            className={classes.helperText}
            variant={'body2'}
            style={{ color: `rgb(153,152,152)`}}>
            {'Know your exact lawn measurements? '}
          </Typography>
          <Button
            color="primary"
            className={classes.manualBtn}
            onClick={() => props.setManualSizeDialogOpen(true)}
          >
            {'Enter Manually'}
          </Button>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <MuiButton
          onClick={() => {
            if (props.tooBig) {
              props.setMaxSizeErrorOpen(true)
            } else {
              props.handleSubmit()
            }
          }}
          className={classnames(classes.button, {
            [classes.buttonDisabled]: props.disabled
          })}
          disabled={props.disabled}
        >
          {'Finish'}
        </MuiButton>
      </div>
    </div>
  )
}

export default YardSizeSection
