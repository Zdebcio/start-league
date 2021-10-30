import { darken } from '@mui/system'
import { Components } from '@mui/material/styles/components'
import colors from 'config/colors'

const props: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*, *::before, *::after': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        fontSize: 10,
      },

      'body, button': {
        fontSize: '1.6rem',
        fontFamily: '"Lato", arial, sans-serif',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {},
      contained: {
        borderRadius: 0,
        textTransform: 'uppercase',
        padding: '1.2rem',
        fontSize: '1.4rem',
        fontWeight: 700,
      },
      containedPrimary: {
        color: colors.buttons.contained.primaryText,
        backgroundColor: colors.buttons.contained.primary,
        '&:hover, &:focus': {
          backgroundColor: darken(colors.buttons.contained.primary, 0.2),
        },
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        backgroundColor: colors.fields.filled.background,
      },
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
      },
      input: {
        '&&&, &&&&:focus': {
          borderBottomWidth: 0,
          marginBottom: 0,
          boxShadow: 'none',
          fontSize: '1.4rem',
          '&::placeholder': {
            textTransform: 'uppercase',
          },
        },
      },
    },
  },

  MuiInputAdornment: {
    styleOverrides: {
      root: {
        '&&&&': {
          marginTop: 0,
          borderRight: `0.1rem solid ${'grey'}`,
          height: 'auto',
          paddingRight: '1rem',
          fontSize: '1.4rem',

          '& >svg': {
            width: '2.5rem',
            height: '2.5rem',
          },
        },
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {},
    },
  },
}

export default props
