// @flow strict

/** @fileoverview Various button components used repeatedly in sign up flow */

import { makeStyles } from '@material-ui/styles'
import * as React from 'react'
import classNames from 'classnames'
import Colors from '../../assets/colors.json'
import IconButton from '@material-ui/core/IconButton'
import MUIButton from '@material-ui/core/Button'

// Utility ////////////////////////////////////////////////////////////////////

/**
 * @summary Create background color style object for Button
 * @description Create background color style object for button. Actual rendered
 *              color will be 0.1 opacity lighter than `color` and change to
 *              full opacity on hover.
 * @param  {string} color - Desired background color
 * @return {Object} - Style Object
 */
export const createButtonColorStyleObject = (color: string) => ({
  backgroundColor: `${color} !important`,
  opacity: 0.9,
  '&:hover': {
    backgroundColor: color,
    opacity: 1
  }
})

/**
 * Create background color style object for Button
 * @param  {Object} [style] - Style object to override default styles
 * @return {Object} - Style Object
 */
export const createButtonLabelStyleObject = (style?: Object) => ({
  color: Colors.white,
  fontFamily: "'Avenir Next', sans-serif",
  fontSize: '13px',
  fontWeight: 600,
  height: '24px',
  letterSpacing: '1.89px',
  lineHeight: '15px',
  textAlign: 'center',
  ...style
})

// Button /////////////////////////////////////////////////////////////////////

type ButtonProps = {
  children?: React.Node,
  classes?: Object,
  className?: string,
  variant?: string
}

/**
 * Styling function
 * @return {Object} - Classnames
 */
const buttonStyles: () => { root: string, label: string } = makeStyles(
  theme => ({
    root: {
      borderRadius: 0,
      bottom: 0,
      fontFamily: "'Avenir Next', sans-serif",
      height: 8 * 5,
      marginTop: 'auto',
      opacity: 0.9,
      padding: `${8 * 2}px 0`,
      position: 'sticky',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        borderRadius: 8 * 3,
        height: 8 * 5,
        marginTop: 0,
        padding: `${8}px 0`,
        width: 8 * 27
      },
      ...createButtonColorStyleObject(Colors.rachioBlue)
    },
    label: {
      ...createButtonLabelStyleObject()
    }
  })
)

/**
 * A button component that acts as a link
 * @param {object} props - Component properties
 * @return {JSX} - Component
 */
export const Button = (props: ButtonProps) => {
  const classes = buttonStyles()
  return (
    <MUIButton
      {...props}
      className={classNames(classes.root, props.className)}
      classes={{
        label: classes.label,
        ...props.classes
      }}
    />
  )
}

export default Button
