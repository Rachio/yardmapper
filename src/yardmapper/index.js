import Colors from '../assets/colors.json'
import React from 'react'
import ReactDOM from 'react-dom'
import YardSize from './YardSize'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

/** Custom MUI theme */
const customTheme = {
  palette: {
    primary: {
      light: Colors.rachioBlue_tint_1,
      main: Colors.rachioBlue,
      dark: Colors.rachioBlue_shade_1,
      contrastText: Colors.white
    }
  },
  typography: {
    fontFamily: ['Avenir Next', 'Arial', 'sans-serif'].join(',')
  }
}

/** MUI Theme */
export const theme = createMuiTheme(customTheme)

export const Yardmapper = (props) => {
  const [isLottieOpen, closeLottie] = React.useState(true)

    return (
      <ThemeProvider theme={theme}>
        <YardSize
          isLottieOpen={isLottieOpen}
          closeLottie={() => closeLottie(false)}
          {...props}
        />
      </ThemeProvider>
    )
}

export default Yardmapper
