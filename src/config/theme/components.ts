import { darken, createTheme } from '@mui/system'
import { Components } from '@mui/material/styles/components'
import colors from 'config/colors'

const theme = createTheme({})

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
        // [theme.breakpoints.up('md')]: {
        //   fontSize: 30,
        // },
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
        fontSize: '1.6rem',
        fontWeight: 700,
      },
      containedPrimary: {
        color: colors.buttons.contained.primaryText,
        backgroundColor: colors.buttons.contained.primary,
        '&:hover, &:focus': {
          backgroundColor: darken(colors.buttons.contained.primary, 0.2),
        },
      },
      text: {
        textTransform: 'none',
        padding: 0,
        '&:hover, &:focus': {
          backgroundColor: 'transparent',
        },
      },
      textPrimary: {
        fontSize: '1.6rem',
        color: colors.buttons.text.primary,
        '&:hover': {
          color: darken(colors.buttons.text.primary, 0.2),
        },
      },
      textSecondary: {
        fontSize: '1.3rem',
        color: colors.buttons.text.secondary,
        fontWeight: 300,
        '&:hover': {
          color: darken(colors.buttons.text.secondary, 0.2),
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
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        '&.Mui-error': {
          border: `0.2rem solid ${colors.fields.filled.error}`,
        },
      },

      input: {
        '&&&, &&&&:focus': {
          borderBottomWidth: 0,
          marginBottom: 0,
          boxShadow: 'none',
          fontSize: '1.8rem',
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
      root: {
        '& > .MuiSvgIcon-root': {
          color: colors.checkbox.uncheckd.icon,
          backgroundColor: colors.checkbox.uncheckd.background,
          borderRadius: '0.2rem',
        },
        '&.Mui-checked > .MuiSvgIcon-root': {
          color: colors.checkbox.checked.icon,
          backgroundColor: colors.checkbox.checked.background,
        },
        '& + span': {
          color: colors.checkbox.label,
          fontSize: '1.4rem',
          fontWeight: 300,
        },
      },
    },
  },
}

export default props
