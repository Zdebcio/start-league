import { darken } from '@mui/system'
import { Components } from '@mui/material/styles/components'
import colors from 'config/colors'

const props: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      // '*, *::before, *::after': {
      //   margin: 0,
      //   padding: 0,
      //   boxSizing: 'border-box',
      // },
      // html: {
      //   fontSize: 10,
      // },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {},
      contained: {
        borderRadius: 0,
        textTransform: 'uppercase',
      },
      containedPrimary: {
        color: colors.buttons.contained.primaryText,
        backgroundColor: colors.buttons.contained.primary,
        '&:hover': {
          backgroundColor: darken(colors.buttons.contained.primary, 0.2),
        },
      },
    },
  },
}

export default props
