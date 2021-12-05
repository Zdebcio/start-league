import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { colors } from 'config'
import routes from 'shared/routes/privateRoutes'
import { ReactComponent as BurgerMenuIcon } from 'shared/images/icons/burger-icon.svg'
import { ReactComponent as ExitIcon } from 'shared/images/icons/exit-icon.svg'
import { ReactComponent as AccountIcon } from 'shared/images/icons/account-icon.svg'
import LogoutIcon from '@mui/icons-material/Logout'
import {
  Container,
  TopBar,
  BurgerIconWrapper,
  MainContentContainer,
  MainNavContainer,
  MainContent,
  TopBarAppLogo,
  TopBarAppTextLogo,
  MainNav,
  MainNavItem,
  MainRRNavLink,
  LogoutButton,
  AccountIconWrapper,
  AccountIconLabel,
  TopBarLogoWrapper,
} from './PageAfterLogin.style'

export interface IPageAfterLogin {
  children: React.ReactNode
}

const PageAfterLogin: React.FC<IPageAfterLogin> = ({ children }) => {
  const history = useHistory()
  const isDesktopView = useCheckDesktopScreen()
  const navigationRoutes = routes.filter((item) => item.navigation)
  const [activeMenu, setActiveMenu] = useState(false)

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <Container>
      <TopBar>
        {!isDesktopView && (
          <BurgerIconWrapper onClick={() => setActiveMenu(!activeMenu)}>
            {activeMenu ? (
              <ExitIcon
                fill={colors.typography.primary}
                className="icon-button burger-button"
              />
            ) : (
              <BurgerMenuIcon
                fill={colors.typography.primary}
                className="icon-button burger-button"
              />
            )}
          </BurgerIconWrapper>
        )}
        <TopBarLogoWrapper to="/">
          <TopBarAppLogo />
          {isDesktopView && <TopBarAppTextLogo />}
        </TopBarLogoWrapper>
        <AccountIconWrapper>
          {isDesktopView && <AccountIconLabel>Account</AccountIconLabel>}
          <AccountIcon
            fill={colors.typography.primary}
            className="icon-button"
          />
        </AccountIconWrapper>
      </TopBar>
      <MainContentContainer>
        <MainNavContainer isActive={activeMenu}>
          <MainNav>
            {navigationRoutes.map(
              ({ path, navigationTitle, NavigationIcon }) => (
                <MainNavItem key={path}>
                  <MainRRNavLink to={path} onClick={() => setActiveMenu(false)}>
                    {NavigationIcon && <NavigationIcon />}
                    {navigationTitle}
                  </MainRRNavLink>
                </MainNavItem>
              )
            )}
            <MainNavItem>
              <LogoutButton onClick={handleLogout}>
                <LogoutIcon />
                Sign out
              </LogoutButton>
            </MainNavItem>
          </MainNav>
        </MainNavContainer>
        <MainContent>{children}</MainContent>
      </MainContentContainer>
    </Container>
  )
}

export default PageAfterLogin
