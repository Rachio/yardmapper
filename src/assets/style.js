/* @flow */
import Colors from '../assets/colors.json'

/*
light: 300,
regular: 400,
medium: 500,
bold: 700

This defines type, which is used in component-specific styles and also inlcuded
in the final style object below.
*/
export const type = {
  titleH1: {
    fontFamily: 'MuseoSans-900',
    color: Colors.navyBlue,
    fontWeight: 900,
    xs: {
      fontSize: '24px',
      letterSpacing: 0,
      lineHeight: '26px'
    },
    sm: {
      fontSize: '38px',
      letterSpacing: 0,
      lineHeight: '41px'
    },
    md: {
      fontSize: '38px',
      letterSpacing: 0,
      lineHeight: '41px'
    },
    lg: {
      fontSize: '48px',
      letterSpacing: 0,
      lineHeight: '60px'
    },
    xl: {
      fontSize: '48px',
      letterSpacing: 0,
      lineHeight: '60px'
    }
  },
  titleH2: {
    fontFamily: 'MuseoSans-900',
    color: Colors.navyBlue,
    fontWeight: 900,
    xs: {
      fontSize: '20px',
      letterSpacing: '0.35px',
      lineHeight: '26px'
    },
    sm: {
      fontSize: '28px',
      letterSpacing: 0,
      lineHeight: '36px'
    },
    md: {
      fontSize: '28px',
      letterSpacing: 0,
      lineHeight: '36px'
    },
    lg: {
      fontSize: '36px',
      letterSpacing: 0,
      lineHeight: '48px'
    },
    xl: {
      fontSize: '36px',
      letterSpacing: 0,
      lineHeight: '48px'
    }
  },
  titleH3: {
    fontFamily: 'MuseoSans-900',
    color: Colors.navyBlue,
    fontWeight: 900,
    xs: {
      fontSize: '16px',
      letterSpacing: 0,
      lineHeight: '22px'
    },
    sm: {
      fontSize: '22px',
      letterSpacing: 0,
      lineHeight: '28px'
    },
    md: {
      fontSize: '22px',
      letterSpacing: 0,
      lineHeight: '28px'
    },
    lg: {
      fontSize: '28px',
      letterSpacing: 0,
      lineHeight: '38px'
    },
    xl: {
      fontSize: '28px',
      letterSpacing: 0,
      lineHeight: '38px'
    }
  },
  subheadH4: {
    fontFamily: 'Roboto',
    color: Colors.navyBlue,
    fontWeight: 400,
    xs: {
      fontSize: '16px',
      lineHeight: '24px'
    },
    sm: {
      fontSize: '20px',
      lineHeight: '28px'
    },
    md: {
      fontSize: '20px',
      lineHeight: '28px'
    },
    lg: {
      fontSize: '24px',
      lineHeight: '34px'
    },
    xl: {
      fontSize: '24px',
      lineHeight: '34px'
    }
  },
  body1: {
    fontFamily: 'Roboto',
    color: Colors.navyBlue,
    fontWeight: 400,
    xs: {
      fontSize: '13px',
      lineHeight: '24px'
    },
    sm: {
      fontSize: '18px',
      lineHeight: '28px'
    },
    md: {
      fontSize: '18px',
      lineHeight: '28px'
    },
    lg: {
      fontSize: '20px',
      lineHeight: '30px'
    },
    xl: {
      fontSize: '20px',
      lineHeight: '30px'
    }
  },
  caption1: {
    fontFamily: 'Roboto',
    color: Colors.navyBlue,
    fontWeight: 400,
    xs: {
      fontSize: '11px',
      letterSpacing: '-0.01px',
      lineHeight: '16px'
    },
    sm: {
      fontSize: '15px',
      letterSpacing: '-0.01px',
      lineHeight: '19px'
    },
    md: {
      fontSize: '15px',
      letterSpacing: '-0.01px',
      lineHeight: '19px'
    },
    lg: {
      fontSize: '15px',
      letterSpacing: '-0.01px',
      lineHeight: '19px'
    },
    xl: {
      fontSize: '15px',
      letterSpacing: '-0.01px',
      lineHeight: '19px'
    }
  },
  label1: {
    fontFamily: 'Roboto',
    color: Colors.navyBlue,
    fontWeight: 500,
    xs: {
      fontSize: '14px',
      letterSpacing: '-0.01px',
      lineHeight: '20px'
    },
    sm: {
      fontSize: '18px',
      letterSpacing: '-0.01px',
      lineHeight: '24px'
    },
    md: {
      fontSize: '18px',
      letterSpacing: '-0.01px',
      lineHeight: '24px'
    },
    lg: {
      fontSize: '20px',
      letterSpacing: '-0.01px',
      lineHeight: '24px'
    },
    xl: {
      fontSize: '20px',
      letterSpacing: '-0.01px',
      lineHeight: '24px'
    }
  },
  label2: {
    fontFamily: 'Roboto',
    color: Colors.darkGray,
    fontWeight: 400,
    xs: {
      fontSize: '12px',
      letterSpacing: '0.07px',
      lineHeight: '16px'
    },
    sm: {
      fontSize: '14px',
      letterSpacing: '0.09px',
      lineHeight: '22px'
    },
    md: {
      fontSize: '14px',
      letterSpacing: '0.09px',
      lineHeight: '22px'
    },
    lg: {
      fontSize: '15px',
      letterSpacing: '0.09px',
      lineHeight: '24px'
    },
    xl: {
      fontSize: '15px',
      letterSpacing: '0.09px',
      lineHeight: '24px'
    }
  },
  label3: {
    fontFamily: 'Roboto',
    color: Colors.lightGray,
    fontWeight: 400,
    xs: {
      fontSize: '12px',
      letterSpacing: '0.07px',
      lineHeight: '16px'
    },
    sm: {
      fontSize: '14px',
      letterSpacing: '0.09px',
      lineHeight: '16px'
    },
    md: {
      fontSize: '14px',
      letterSpacing: '0.09px',
      lineHeight: '16px'
    },
    lg: {
      fontSize: '16px',
      letterSpacing: '0.09px',
      lineHeight: '18px'
    },
    xl: {
      fontSize: '16px',
      letterSpacing: '0.09px',
      lineHeight: '18px'
    }
  },
  metric1: {
    fontFamily: 'Roboto',
    color: Colors.rachioBlue,
    fontWeight: 700,
    xs: {
      fontSize: '26px',
      lineHeight: '32px'
    },
    sm: {
      fontSize: '36px',
      lineHeight: '42px'
    },
    md: {
      fontSize: '36px',
      lineHeight: '42px'
    },
    lg: {
      fontSize: '52px',
      lineHeight: '60px'
    },
    xl: {
      fontSize: '52px',
      lineHeight: '60px'
    }
  },
  metric2: {
    fontFamily: 'Roboto',
    color: Colors.rachioBlue,
    fontWeight: 500,
    xs: {
      fontSize: '18px',
      lineHeight: '26px'
    },
    sm: {
      fontSize: '26px',
      lineHeight: '32px'
    },
    md: {
      fontSize: '26px',
      lineHeight: '32px'
    },
    lg: {
      fontSize: '32px',
      lineHeight: '38px'
    },
    xl: {
      fontSize: '32px',
      lineHeight: '38px'
    }
  },
  tick1: {
    fontFamily: 'Roboto',
    color: Colors.gray,
    fontWeight: 500,
    xs: {
      fontSize: '12px',
      lineHeight: '18px'
    },
    md: {
      fontSize: '13px',
      lineHeight: '26px'
    },
    lg: {
      fontSize: '16px',
      lineHeight: '22px'
    }
  },
  tick2: {
    fontFamily: 'Roboto',
    color: Colors.lightGray,
    fontWeight: 400,
    xs: {
      fontSize: '10px',
      lineHeight: '16px'
    },
    md: {
      fontSize: '12px',
      lineHeight: '12px'
    },
    lg: {
      fontSize: '14px',
      lineHeight: '20px'
    }
  },
  appBarTitle: {
    color: Colors.navyBlue,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '20px'
  }
}

// APP-WIDE INTERDEPENDENT VALUES ///////////////////////////////////////////////////////

export const baseUnitOfMeasurement: 4 = 4

export const bum = (mult: number) => baseUnitOfMeasurement * mult

export const defaultSpacing: number = baseUnitOfMeasurement * 4

export const standardAppBarHeight = 64

// Animations

/* Speed of transition animations in seconds */
export const animationSpeed: 0.5 = 0.5

/* String for transition style properties */
export const animation = 'all ' + animationSpeed + 's ease-out'

////////////////////////////////////////////////////////////////////////////////
/*
xs: { min: 0 },
sm: { min: 768 },
md: { min: 992 },
lg: { min: 1200 },
xl: { min: 1600 }

This is the final style object that is exported.
*/
const style = {
  type: type,
  screen: {
    backgroundColor: '#FFFFFF',
    overflowX: 'hidden',
    xs: {
      padding: '0 16px'
    },
    md: {
      padding: '0 24px'
    }
  },
  appBar: {
    main: {
      backgroundColor: Colors.white
    },
    text: {
      title: {
        ...type['appBarTitle'],
        marginLeft: '18px'
      }
    }
  },
  progressBar: {
    marginBottom: '40px',
    width: '70%',
    height: '6px'
  },
  input: {
    text: {
      main: type['subheadH4'],
      labelFloating: {
        ...type['label2'],
        transform: 'translate(0px, -28px)',
        color: Colors.rachioBlue
      },
      label: {
        ...type['subheadH4'],
        color: 'rgba(0, 0, 0, 0.38)'
      }
    },
    label: type['label2']
  },
  select: {
    text: {
      main: {
        ...type['subheadH4'],
        height: 'auto',
        xs: {
          ...type['subheadH4']['xs'],
          lineHeight: '56px'
        },
        sm: {
          ...type['subheadH4']['sm'],
          lineHeight: '56px'
        },
        md: {
          ...type['subheadH4']['md'],
          lineHeight: '56px'
        },
        lg: {
          ...type['subheadH4']['lg'],
          lineHeight: '56px'
        },
        xl: {
          ...type['subheadH4']['xl'],
          lineHeight: '56px'
        }
      }
    }
  }
}

export default style
