import { useState } from 'react'
import { ReactComponent as BurgerMenuIcon } from 'shared/images/icons/burger-icon.svg'
import { ReactComponent as ExitIcon } from 'shared/images/icons/exit-icon.svg'
import { ReactComponent as AccountIcon } from 'shared/images/icons/account-icon.svg'
import {
  Container,
  TopBar,
  MainContentContainer,
  MainNavContainer,
  MainContent,
  TopBarAppLogo,
} from './PageAfterLogin.style'

export interface IPageAfterLogin {
  children: React.ReactNode
}

const PageAfterLogin: React.FC<IPageAfterLogin> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <Container>
      <TopBar>
        {activeMenu ? (
          <ExitIcon onClick={() => setActiveMenu(false)} />
        ) : (
          <BurgerMenuIcon onClick={() => setActiveMenu(true)} />
        )}
        <TopBarAppLogo />
        <AccountIcon />
      </TopBar>
      <MainContentContainer>
        <MainNavContainer isActive={activeMenu}>ss</MainNavContainer>
        <MainContent>{children}</MainContent>
      </MainContentContainer>
    </Container>
  )
}

export default PageAfterLogin
