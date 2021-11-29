import { useState } from 'react'
import { Typography } from '@mui/material'
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
  CarouselHeader,
  CarouselContent,
} from './Login.style'

const Login = () => {
  const isDesktopView = useCheckDesktopScreen()
  const [selectedView, setSelectedView] = useState(
    isDesktopView ? 'signIn' : 'start'
  )

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
      {isDesktopView && (
        <CarouselContainer>
          <Typography variant="h1">ss</Typography>
          <CarouselHeader>NEED TO MANAGE YOUR LEAGUE?</CarouselHeader>
          <CarouselContent>
            Nothing easier! With StartLeague you can create as many editable
            league tables as you want. Our system automatically will sort teams
            depends on the results. Save your time and join StartLeague now!
          </CarouselContent>
        </CarouselContainer>
      )}
      <LoginContainer>
        <ContentContainer>
          <StyledAppLogo />
          {(selectedView === 'start' || isDesktopView) && <StyledAppTextLogo />}
          <FormPanelWrapper>{displayView()}</FormPanelWrapper>
        </ContentContainer>
      </LoginContainer>
    </LoginPage>
  )
}

export default Login
