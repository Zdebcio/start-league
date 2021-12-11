import { TypographyOptions } from '@mui/material/styles/createTypography'
import colors from 'config/colors'

const typography: TypographyOptions = {
  fontFamily: ['Lato', 'Roboto', 'Arial', 'sans-serif'].join(','),
  h1: {
    color: colors.typography.primary,
    fontWeight: 400,
  },
  h2: {
    color: colors.typography.primary,
    fontWeight: 400,
  },
  h3: {
    color: colors.typography.secondary,
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: '2.4rem',
  },
  h4: {
    color: colors.typography.primary,
    fontWeight: 400,
    textTransform: 'uppercase',
    fontSize: '2rem',
  },

  body1: {
    fontSize: '1.6rem',
    color: colors.typography.primary,
  },
}

export default typography
