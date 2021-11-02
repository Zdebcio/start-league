import styled from 'styled-components'
import { colors } from 'config'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon.svg'
import { ReactComponent as AppTextLogo } from 'shared/images/logos/logo-text.svg'

export const LoginPage = styled('div')`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${(props) => props.theme.breakpoints?.up('lg')} {
    padding: 4rem calc(4rem + 50px);
    padding-top: 2rem;
    align-items: stretch;

    & > *:not(:last-child) {
      margin-right: calc(4rem + 50px);
    }
  }
`

export const CarouselContainer = styled('div')`
  background-color: ${colors.components.primary};
  flex-grow: 1;
  box-shadow: 0px 1vmin 1vmin ${colors.decorations.boxShadows.component};
  margin-top: 50px;
  margin-bottom: 50px;
`

export const LoginContainer = styled('div')`
  width: 100%;
  max-width: 440px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints?.up('lg')} {
    margin-top: 50px;
  }
`

export const ContentContainer = styled('div')`
  background-color: ${colors.components.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1vmin 1vmin ${colors.decorations.boxShadows.component};
  margin-top: 50px;

  ${(props) => props.theme.breakpoints?.up('lg')} {
    margin-top: 0;
    margin-bottom: 50px;
    height: 100%;
  }
`

export const StyledAppLogo = styled(AppLogo)`
  position: relative;
  top: 0;
  left: 0;
  transform: translateY(-50px);
  width: 50%;
  height: auto;
  margin-bottom: -50px;
`

export const StyledAppTextLogo = styled(AppTextLogo)`
  width: 80%;
  height: auto;
  margin: 0.4rem 0 1.2rem;
`

export const FormPanelWrapper = styled('div')`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${(props) => props.theme.breakpoints?.up('lg')} {
    flex-grow: 1;
    padding-bottom: 4rem;
  }
`

export const FormPanel = styled('form')`
  display: flex;
  flex-direction: column;
  & > .MuiFormControl-root:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > button:nth-of-type(1) {
    margin-top: 3rem;
  }

  ${(props) => props.theme.breakpoints?.up('lg')} {
    flex-grow: 1;
  }
`

export const ChangeViewButtonWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  ${(props) => props.theme.breakpoints?.up('lg')} {
    margin-top: auto;
  }
`

export const AdditionalButtonsWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
