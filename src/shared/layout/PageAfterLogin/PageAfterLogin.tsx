import { useState } from 'react'
import { colors } from 'config'
import routes from 'shared/routes/privateRoutes'
import { ReactComponent as BurgerMenuIcon } from 'shared/images/icons/burger-icon.svg'
import { ReactComponent as ExitIcon } from 'shared/images/icons/exit-icon.svg'
import { ReactComponent as AccountIcon } from 'shared/images/icons/account-icon.svg'
import LogoutIcon from '@mui/icons-material/Logout'
import {
  Container,
  TopBar,
  MainContentContainer,
  MainNavContainer,
  MainContent,
  TopBarAppLogo,
  MainNav,
  MainNavItem,
  MainRRNavLink,
  LogoutButton,
  AccountIconWrapper,
  AccountIconLabel,
} from './PageAfterLogin.style'

export interface IPageAfterLogin {
  children: React.ReactNode
}

const PageAfterLogin: React.FC<IPageAfterLogin> = ({ children }) => {
  const navigationRoutes = routes.filter((item) => item.navigation)
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <Container>
      <TopBar>
        {activeMenu ? (
          <ExitIcon
            fill={colors.typography.primary}
            onClick={() => setActiveMenu(false)}
            className="icon-button burger-button"
          />
        ) : (
          <BurgerMenuIcon
            fill={colors.typography.primary}
            onClick={() => setActiveMenu(true)}
            className="icon-button burger-button"
          />
        )}
        <TopBarAppLogo />
        <AccountIconWrapper>
          <AccountIconLabel>Account</AccountIconLabel>
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
              <LogoutButton>
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
