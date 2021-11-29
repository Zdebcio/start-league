import { alpha } from '@mui/material'

const colors = {
  gradient: {
    background: `linear-gradient(0deg, #222222 0%, #333333 100%)`,
  },
  background: {
    primary: '#333333',
  },
  components: {
    primary: '#444444',
    transparent: alpha('#2B3E44', 0.9),
  },
  typography: {
    primary: '#FFFFFF',
    secondary: '#6BD425',
  },
  buttons: {
    contained: {
      primary: '#008DD5',
      primaryText: '#FFFFFF',
    },
    text: {
      primary: '#6BD425',
      secondary: '#FFFFFF',
    },
  },
  fields: {
    filled: {
      background: '#FFFFFF',
      error: '#EC0B43',
    },
  },
  checkbox: {
    checked: {
      background: '#008DD5',
      icon: '#FFFFFF',
    },
    uncheckd: {
      background: '#C4C4C4',
      icon: '#C4C4C4',
    },
    label: '#FFFFFF',
  },
  decorations: {
    boxShadows: {
      component: '#000000',
    },
  },
}

export default colors
