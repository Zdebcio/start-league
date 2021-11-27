import { TypographyOptions } from '@mui/material/styles/createTypography'
import colors from 'config/colors'

const typography: TypographyOptions = {
  fontFamily: ['Lato', 'Roboto', 'Arial', 'sans-serif'].join(','),
  body1: {
    fontSize: '1.6rem',
    color: colors.typography.primary,
  },
}

export default typography
