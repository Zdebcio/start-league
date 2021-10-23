import { useState } from 'react'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import Start from 'modules/Login/components/Start/Start'
import SignIn from 'modules/Login/components/SignIn/SignIn'
import SignUp from 'modules/Login/components/SignUp/SignUp'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon.svg'
import { ReactComponent as AppTextLogo } from 'shared/images/logos/logo-text.svg'
import { LoginPage, ContentContainer } from './Login.style'

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
      {/* <div style={{ height: '100vh', flexGrow: 1 }}>image</div> */}
      <div style={{ width: '100%', maxWidth: 450 }}>
        <ContentContainer style={{ marginTop: '20vmin' }}>
          <AppLogo
            style={{
              width: '50vmin',
              maxWidth: 220,
              height: '50vmin',
              maxHeight: 220,
              transform: 'translateY(-20vmin)',
              marginBottom: '-20vmin',
            }}
          />
          <AppTextLogo style={{ width: '80%', height: 'auto' }} />
          <div
            style={{
              width: '100%',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
            }}
          >
            {displayView()}
          </div>
        </ContentContainer>
      </div>
    </LoginPage>
  )
}

export default Login
