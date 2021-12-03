// import styled from 'styled-components'
import { styled } from '@mui/material'
import { colors } from 'config'
import { NavLink } from 'react-router-dom'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon.svg'
import { ReactComponent as AppTextLogo } from 'shared/images/logos/logo-text.svg'

export const Container = styled('div')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
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
`

export const MainContent = styled('div')`
  display: flex;
  flex-direction: column;
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
`

export const MainNavContainer = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(
  ({ isActive }) => `    
  display: flex;
  flex-direction: column;
  position: fixed;
//   position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: ${colors.components.navigation};
  transition: transform 0.3s;
  transform: ${isActive ? 'translateX(0)' : 'translateX(-100%)'};
  padding: 2rem 2rem;
`
)

export const MainNav = styled('ul')`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const MainNavItem = styled('li')`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

export const MainRRNavLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  border-radius: 2rem;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;
  font-weight: 700;

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
