import { indigo, lightBlue } from '@mui/material/colors'
import createPalette, {
  PaletteOptions,
} from '@mui/material/styles/createPalette'

const palette: PaletteOptions = {
  primary: {
    light: '#534bae',
    main: indigo[900],
    dark: '#000051',
  },
  secondary: {
    light: '#58a5f0',
    main: lightBlue[800],
    dark: '#004c8c',
  },
  success: {
    main: '#289203',
  },
  error: {
    main: '#BF0000',
  },
}

export default createPalette(palette)
