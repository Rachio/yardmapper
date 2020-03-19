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
        borderRadius: '50px !important',
        textTransform: 'none !important',
        letterSpacing: '0px !important',
        height: 'auto !important',
        padding: '18px 39px !important',
        width: 'auto !important',
        transition: 'all .3s ease',
        fontFamily: 'Avenir Next !important',
        fontStyle: 'normal !important',
        fontWeight: '700 !important',
        fontSize: '16px !important',
        lineHeight: '30px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        textAlign: 'center !important',
        color: '#FFFFFF !important',
        textTransform: 'none !important',
        letterSpacing: '0px !important',
        height: 'auto !important',
        padding: '18px 39px !important',
        width: 'auto !important',
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
          width: '100% !important',
          margin: `0px !important`
        },
        backgroundColor: `${Colors.gray_tint_3} !important`,
      },
      buttonContainer: {
        display: 'flex !important',
        justifyContent: 'flex-end !important'
      },
      buttonContainerAnalysis: {
        display: 'flex !important',
        justifyContent: 'flex-end !important',
        flexBasis: '25% !important',
        width: '25% !important',
        float: 'right !important',
      },
      headerCopy: {
        fontFamily: 'Avenir Next !important',
        fontStyle: 'normal !important',
        fontWeight: '500 !important',
        fontSize: '12px !important',
        lineHeight: '18px !important',
        textAlign: 'center !important',
        color: '#767679 !important',
        display: 'inline-block !important',
        paddingRight: '15px !important',
      },
      root: {
        display: 'flex !important',
        paddingTop: '20px !important',
        paddingBottom: '20px !important',
        textTransform: 'none !important',
        alignItems: 'center !important',
        justifyContent: 'space-between !important',
        backgroundColor: Colors.white,
        position: 'absolute !important',
        bottom: 0,
        left: 0,
        right: 0,
        [theme.breakpoints.down('xs')]: {
          display: 'block !important'
        }
      },
      primaryContent: {
        padding: '13.5px !important',
        textTransform: 'none !important',
        boxSizing: 'border-box !important',
        display: 'flex !important',
        flexBasis: '55% !important',
        width: '55% !important',
      },
      backContent: {
        display: 'flex !important',
        flexBasis: '20% !important',
        width: '20% !important',
      },
      textContainer: {
        display: 'flex !important',
        alignItems: 'center !important',
        textTransform: 'none !important',
      },
      helperText: {
        color: `${Colors.gray_tint_2} !important`,
        fontSize: '12px !important',
        textTransform: 'none !important',
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
    <div data-component-id={'YARD-SIZE-SECTION'} className={'outer-back-content-wrap ' + classes.root}>
      <div className="constrainer">

        <div className={classes.backContent + ' back-content-wrap'} >
          <a href="https://rachio.com/thrive" target="_blank" className="back-link"><img className="back-arrow" src="http://s3-us-west-2.amazonaws.com/rachio-com-cms-media-dev/uploads/2020/01/09171626/leftback_24px.png" /> Back</a>
        </div>
        <div className={classes.primaryContent + ' primary-content-outer-wrap'}>
          <div className="primaryContentInnerWrap">

          <Typography variant={'subtitle1'} className={'header-copy ' + classes.headerCopy}>
            {'Estimated Lawn Size'}
          </Typography>
          {/*<div className={classes.textContainer}>
            <Typography
              className={classes.helperText}
              variant={'body2'}
              style={{ color: `rgb(153,152,152)`}}>
              {'Know your exact lawn measurements? '}
            </Typography>*/}

              <Typography
                variant={'h3'}
                className={'yard-size-text ' + classes.yardSizeText}
                gutterBottom
              >
                {`${formatAsNumber(props.yardSize)}` + ' sq ft'}
              </Typography>

            <Button
              color="primary"
              className={'edit-btn ' + classes.manualBtn}
              onClick={() => props.setManualSizeDialogOpen(true)}
            >
              {'Edit'} 
            </Button> 
          {/*</div>*/}
          </div>
        </div>
        <div className={'button-cont-analysis-wrap ' + classes.buttonContainerAnalysis}>
          <MuiButton
            onClick={() => {
              if (props.tooBig) {
                props.setMaxSizeErrorOpen(true)
              } else {
                props.handleSubmit()
              }
            }}
            className={'analysis-show ' + classnames(classes.button, {
              [classes.buttonDisabled]: props.disabled
            })}
            disabled={props.disabled} 
          >
            {'Show My Analysis'}
          </MuiButton>
        </div>
      </div>
    </div>
  )
}

export default YardSizeSection
