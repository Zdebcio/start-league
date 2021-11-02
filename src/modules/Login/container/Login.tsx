import { useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import Start from 'modules/Login/components/Start/Start'
import SignIn from 'modules/Login/components/SignIn/SignIn'
import SignUp from 'modules/Login/components/SignUp/SignUp'
import {
  LoginPage,
  CarouselContainer,
  LoginContainer,
  ContentContainer,
  StyledAppLogo,
  StyledAppTextLogo,
  FormPanelWrapper,
} from './Login.style'

const Login = () => {
  const isDesktopView = useCheckDesktopScreen()
  const [selectedView, setSelectedView] = useState(
    isDesktopView ? 'signIn' : 'start'
  )
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))

  const handleChangeView = (view: string) => {
    setSelectedView(view)
  }

  const displayView = () => {
    switch (selectedView) {
      case 'start':
        return <Start viewChangeFn={handleChangeView} />
      case 'signIn':
        return <SignIn viewChangeFn={handleChangeView} />
      case 'signUp':
        return <SignUp viewChangeFn={handleChangeView} />
      default:
        return <div>Default</div>
    }
  }

  return (
    <LoginPage>
      {isDesktop && <CarouselContainer>aaa</CarouselContainer>}
      <LoginContainer>
        <ContentContainer>
          <StyledAppLogo />
          {(selectedView === 'start' || isDesktop) && <StyledAppTextLogo />}
          <FormPanelWrapper>{displayView()}</FormPanelWrapper>
        </ContentContainer>
      </LoginContainer>
    </LoginPage>
  )
}

export default Login
