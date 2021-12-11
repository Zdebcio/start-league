import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'

const useCheckDesktopScreen = () => {
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

  return width >= theme.breakpoints.values.md
}

export default useCheckDesktopScreen
