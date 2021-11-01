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
`

export const LoginContainer = styled('div')`
  width: 100%;
  max-width: 440px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: -13rem;
`

export const ContentContainer = styled('div')`
  background-color: ${colors.components.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1vmin 1vmin ${colors.decorations.boxShadows.component};
  padding-top: 13rem;
`

export const StyledAppLogo = styled(AppLogo)`
  position: relative;
  top: 0;
  left: 50%;
  transform: translate(-50%, 13rem);
  width: 50%;
  height: auto;
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
`

export const FormPanel = styled('form')`
  & > .MuiFormControl-root:not(:last-child) {
    margin-bottom: 1rem;
  }

  & > button:nth-of-type(1) {
    margin-top: 3rem;
  }
`

export const ChangeViewButtonWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

export const AdditionalButtonsWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
