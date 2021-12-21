import { useEffect, useState } from 'react'
import { useTheme, Breakpoint } from '@mui/material'

const useCheckDesktopScreen = (breakpoint: Breakpoint = 'md') => {
  const theme = useTheme()
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return width >= theme.breakpoints.values[breakpoint]
}

export default useCheckDesktopScreen
