import { useState } from 'react'
import { Typography } from '@mui/material'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import Start from 'modules/Login/components/Start/Start'
import SignIn from 'modules/Login/components/SignIn/SignIn'
import SignUp from 'modules/Login/components/SignUp/SignUp'
import { Scrollbars } from 'react-custom-scrollbars'

import {
  LoginPage,
  CarouselContainer,
  LoginContainer,
  ContentContainer,
  StyledAppLogo,
  StyledAppTextLogo,
  FormPanelWrapper,
  InformationWrapper,
  InformationHeader,
  InformationContent,
  LogotypeWrapper,
  ReadMoreButton,
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
          <InformationWrapper>
            <InformationHeader>
              <Typography variant="h3" component="h1">
                NEED TO MANAGE YOUR LEAGUE?
              </Typography>
            </InformationHeader>
            <InformationContent>
              <Typography variant="h4" component="h2">
                Nothing easier!
              </Typography>
              <Typography variant="body1" component="p">
                With StartLeague you can create as many editable league tables
                as you want. Our system automatically will sort teams depends on
                the results. Save your time and join StartLeague now!
              </Typography>
              <ReadMoreButton
                variant="contained"
                disableTouchRipple
                size="small"
              >
                Read more
              </ReadMoreButton>
            </InformationContent>
          </InformationWrapper>
        </CarouselContainer>
      )}
      <LoginContainer>
        <ContentContainer>
          <LogotypeWrapper>
            <StyledAppLogo />
            {(selectedView === 'start' || isDesktopView) && (
              <StyledAppTextLogo />
            )}
          </LogotypeWrapper>
          {isDesktopView ? (
            <Scrollbars>
              <FormPanelWrapper>{displayView()}</FormPanelWrapper>
            </Scrollbars>
          ) : (
            <FormPanelWrapper>{displayView()}</FormPanelWrapper>
          )}
        </ContentContainer>
      </LoginContainer>
    </LoginPage>
  )
}

export default Login
