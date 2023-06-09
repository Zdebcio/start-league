import { darken, createBreakpoints } from '@mui/system'
import breakpointsOptions from 'config/theme/breakpoints'
import { Components } from '@mui/material/styles/components'
import colors from 'config/colors'

const breakpoints = createBreakpoints(breakpointsOptions)

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
        [breakpoints.up('lg')]: {
          fontSize: 12,
        },
        [breakpoints.up('xl')]: {
          fontSize: 14,
        },
      },

      'body, button, input': {
        fontSize: '1.6rem',
        fontFamily: '"Lato", arial, sans-serif',
      },

      '.rotate': {
        transform: 'rotate(90deg)',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        '&.MuiButton-containedTertiary': {
          color: colors.buttons.contained.tertiaryText,
          backgroundColor: colors.buttons.contained.tertiary,
          '&:hover, &:focus': {
            backgroundColor: darken(colors.buttons.contained.tertiary, 0.2),
          },
        },

        '&.MuiButton-textTertiary': {
          color: colors.buttons.text.tertiary,
          '&:hover': {
            color: darken(colors.buttons.text.tertiary, 0.2),
          },
        },
      },
      contained: {
        textTransform: 'uppercase',
        padding: '1.2rem',
        fontSize: '1.4rem',
        fontWeight: 600,
        borderRadius: '0.5rem',
      },
      containedPrimary: {
        color: colors.buttons.contained.primaryText,
        backgroundColor: colors.buttons.contained.primary,
        '&:hover, &:focus': {
          backgroundColor: darken(colors.buttons.contained.primary, 0.2),
        },
      },
      containedSecondary: {
        color: colors.buttons.contained.secondaryText,
        backgroundColor: colors.buttons.contained.secondary,
        '&:hover, &:focus': {
          backgroundColor: darken(colors.buttons.contained.secondary, 0.2),
        },
      },

      containedSizeSmall: {
        padding: '0.4rem 3rem',
        borderRadius: '0.8rem',
        border: '0.2rem solid black',
        fontSize: '1.7rem',
        boxShadow: `${colors.decorations.boxShadows.component} 0 0.4rem 0.8rem -0,2rem, ${colors.decorations.boxShadows.component} 0 0 0 1rem`,

        '&:hover': {
          boxShadow: `${colors.decorations.boxShadows.component} 0 0.4rem 0.8rem -0,2rem, ${colors.decorations.boxShadows.component} 0 0 0 1rem`,
        },
      },

      text: {
        textTransform: 'none',
        padding: 0,
        fontSize: '1.6rem',
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

      textSizeSmall: {
        fontSize: '1.4rem',
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {
        backgroundColor: colors.fields.filled.background,
        borderRadius: '0.5rem',
      },
    },
  },

  MuiFormControl: {
    styleOverrides: {
      root: {
        '&&': {
          backgroundColor: 'transparent',
        },
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
        backgroundColor: colors.fields.filled.background,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderRadius: '0.5rem',
        '&.Mui-error': {
          border: `0.2rem solid ${colors.fields.filled.error}`,
        },

        '&:hover, &.Mui-focused': {
          backgroundColor: colors.fields.filled.background,
        },
      },

      sizeSmall: {
        padding: '0.3rem 0.8rem',
        borderRadius: '0.8rem',
        border: '0.2rem solid black',
        fontSize: '1.8rem',
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

          '&.MuiInputBase-inputSizeSmall': {
            textAlign: 'center',

            [breakpoints.up('md')]: {
              textAlign: 'left',
            },
          },

          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            /* display: none; <- Crashes Chrome on hover */
            '-webkit-appearance': 'none',
            margin: 0 /* <-- Apparently some margin are still there even though it's hidden */,
          },

          '&[type=number]': {
            '-moz-appearance': 'textfield' /* Firefox */,
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
          height: 'auto',

          '&.MuiInputAdornment-positionStart': {
            paddingRight: '1rem',
            marginRight: '0.8rem',

            '& >svg': {
              width: '2.5rem',
              height: '2.5rem',
            },
          },

          '&.MuiInputAdornment-positionEnd': {
            paddingLeft: '1rem',
            marginLeft: '0.8rem',

            '& >svg': {
              width: '2rem',
              height: '2rem',
            },
          },

          fontSize: '1.4rem',
          borderRight: `0.1rem solid ${'grey'}`,

          '&.MuiInputAdornment-sizeSmall': {
            borderRightWidth: 0,
            paddingRight: '0',
            marginRight: 0,

            [breakpoints.up('md')]: {
              '&.MuiInputAdornment-positionStart': {
                paddingRight: '1rem',
                marginRight: '0.8rem',

                '& >svg': {
                  width: '3.5rem',
                  height: '3.5rem',
                },
              },

              '&.MuiInputAdornment-positionEnd': {
                paddingLeft: '1rem',
                marginLeft: '0.8rem',

                '& >svg': {
                  width: '2rem',
                  height: '2rem',
                },
              },
            },
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

  MuiTableBody: {
    styleOverrides: {
      root: {
        '& .MuiTableRow-root:nth-of-type(even)': {
          '& .MuiTableCell': {
            backgroundColor: colors.tables.bakgroundBodyEven,
          },
        },
        '& .MuiTableRow-root:nth-of-type(odd)': {
          '& .MuiTableCell-root': {
            backgroundColor: colors.tables.bakgroundBodyOdd,
          },
        },
      },
    },
  },

  MuiTableCell: {
    styleOverrides: {
      root: {
        color: colors.typography.primary,
        fontSize: '1.4rem',
        [breakpoints.up('xl')]: {
          fontSize: '1.6rem',
        },
        padding: '1.5rem 2rem',
        width: 'auto',
        whiteSpace: 'nowrap',
      },
      head: {
        backgroundColor: colors.tables.backgroundHeader,
        color: colors.tables.textHeader,
        border: '0px solid transparent',
        fontWeight: 700,
      },
      body: {
        border: '0px solid transparent',
      },
    },
  },

  MuiTableSortLabel: {
    styleOverrides: {
      root: {
        color: colors.tables.textHeader,
        position: 'relative',

        '&.Mui-active': {
          color: colors.tables.textHeader,

          '& .MuiTableSortLabel-icon': {
            color: colors.tables.textHeader,
          },
        },

        '&:hover': {
          color: colors.tables.textHeader,
        },
      },

      icon: {
        position: 'absolute',
        top: 0,
        right: '-2rem',

        color: colors.tables.textHeader,

        fontSize: '1.4rem',
        [breakpoints.up('xl')]: {
          fontSize: '1.6rem',
          right: '-2.4rem',
        },
      },
    },
  },

  MuiSelect: {
    styleOverrides: {
      root: {},
      select: { padding: '0 1rem' },
    },
  },

  MuiList: {
    styleOverrides: {
      root: {},
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        color: 'black',
      },
    },
  },

  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: colors.components.tertiary,
      },
    },
  },

  MuiDialogTitle: {
    styleOverrides: {
      root: {
        color: colors.typography.primary,
        fontSize: '1.6rem',
      },
    },
  },

  MuiDialogContentText: {
    styleOverrides: {
      root: {
        color: colors.typography.additional,
        fontSize: '1.4rem',
      },
    },
  },

  MuiDialogActions: {
    styleOverrides: {
      root: {
        '*:not(:first-of-type)': {
          marginLeft: '1rem',
        },
      },
      spacing: {
        marginBottom: 6,
      },
    },
  },
}

export default props
