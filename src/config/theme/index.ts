import { ThemeOptions, createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'
import components from './components'
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'

const theme: ThemeOptions = createTheme(
  {
    components,
    palette,
    typography,
    breakpoints,
  },
  enUS
)

export default theme
