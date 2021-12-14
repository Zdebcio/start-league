// import styled from 'styled-components'
import { styled } from '@mui/material'
import { colors } from 'config'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon.svg'
import { ReactComponent as AppTextLogo } from 'shared/images/logos/logo-text.svg'

export const Container = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`

export const TopBar = styled('div')`
  position: sticky;
  z-index: 200;
  background-color: ${colors.components.secondary};
  top: 0;
  left: 0;
  width: 100%;
  height: 6.2rem;
  padding: 0.2rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .icon-button {
    cursor: pointer;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    & > .burger-button {
      display: none;
    }
  }
`

export const MainContent = styled('div')`
  padding: 2rem;
  flex-grow: 1;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints?.up('md')} {
    margin-left: 32rem;
  }
`

export const TopBarLogoWrapper = styled(Link)`
  display: flex;
  height: 100%;
  cursor: pointer;
`

export const TopBarAppLogo = styled(AppLogo)`
  width: auto;
  height: 100%;
`

export const TopBarAppTextLogo = styled(AppTextLogo)`
  width: 80%;
  height: auto;
  margin: 0.4rem 0 1.2rem;
`

export const MainContentContainer = styled('div')`
  display: flex;
  flex-grow: 1;
`

export const MainNavContainer = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(
  ({ isActive, theme }) => `    
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: calc(100vh - 6.2rem);
  overflow: auto;
  z-index: 100;
  background-color: ${colors.components.navigation};
  transition: transform 0.3s;
  transform: ${isActive ? 'translateX(0)' : 'translateX(-100%)'};
  padding: 2rem 2rem;

  ${theme.breakpoints?.up('md')} {
  position: fixed;
  transform: translateX(0);
  background-color: ${colors.background.primary};
  max-width: 32rem;
  }
`
)

export const MainNav = styled('ul')`
  display: flex;
  flex-direction: column;
  list-style: none;

  ${(props) => props.theme.breakpoints?.up('md')} {
    height: 100%;
  }
`

export const MainNavItem = styled('li')`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    &:last-child {
      margin-top: auto;
    }
  }
`

const navigationButton = `
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  border-radius: 2rem;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  & > .MuiSvgIcon-root {
    font-size: 5rem;
    color: ${colors.buttons.contained.primaryText};
    margin-right: 2rem;
  }

  &.active {
    background-color: ${colors.buttons.contained.primary};
    color: ${colors.buttons.contained.primaryText};
    box-shadow: 0 0.7rem 0.7rem ${colors.decorations.boxShadows.component};
  }
`

export const LogoutButton = styled('div')`
  ${navigationButton}
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    margin-top: auto;
  }
`

export const MainRRNavLink = styled(NavLink)`
  ${navigationButton}
`

export const BurgerIconWrapper = styled('div')`
  cursor: pointer;
`

export const AccountIconWrapper = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const AccountIconLabel = styled('span')`
  margin-right: 0.5rem;
  text-transform: uppercase;
  font-size: 1.4rem;
`
