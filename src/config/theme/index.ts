import { ThemeOptions, createTheme } from '@mui/material'
import { enUS } from '@mui/material/locale'
import components from './components'
import palette from './palette'
import typography from './typography'

const theme: ThemeOptions = createTheme(
  {
    components,
    palette,
    typography,
  },
  enUS
)

export default theme
