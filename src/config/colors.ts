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
    secondary: '#1F1F1F',
    navigation: '#2E2E2E',
    transparent: alpha('#2B3E44', 0.9),
  },
  typography: {
    primary: '#FFFFFF',
    secondary: '#5DD425',
    additional: '#717171',
  },
  buttons: {
    contained: {
      primary: '#008DD5',
      primaryText: '#FFFFFF',
      secondary: '#5DD425',
      secondaryText: '#FFFFFF',
      tertiary: '#535B58',
      tertiaryText: '#FFFFFF',
    },
    text: {
      primary: '#5DD425',
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
      transparentComponent: alpha('#000000', 0.9),
    },
    border: {
      secondary: '#5DD425',
    },
  },
}

export default colors
