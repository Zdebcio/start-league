// import styled from 'styled-components'
import { styled } from '@mui/material'
import { colors } from 'config'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon.svg'
import { ReactComponent as AppTextLogo } from 'shared/images/logos/logo-text.svg'

export const Container = styled('div')`
  min-height: 200vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const TopBar = styled('div')`
  position: sticky;
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

export const MainNavContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(
  ({ isActive }) => `
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: ${colors.components.navigation};
  transition: transform 0.5s;
  transform: ${isActive ? 'translateX(0)' : 'translateX(-100%)'};
`
)
