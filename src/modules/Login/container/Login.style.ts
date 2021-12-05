// import styled from 'styled-components'
import { colors } from 'config'
import { Checkbox, styled } from '@mui/material'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon.svg'
import { ReactComponent as AppTextLogo } from 'shared/images/logos/logo-text.svg'
import banerImg from 'shared/images/login-baner.png'

export const LoginPage = styled('div')`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${(props) => props.theme.breakpoints?.up('md')} {
    padding: 4rem calc(4rem + 50px);
    padding-top: 2rem;
    align-items: stretch;
    max-height: 100vh;
    background-image: url(${banerImg});
    background-repeat: no-repeat;
    background-position: left top;
    background-attachment: fixed;
    background-size: 100vh;

    & > *:not(:last-child) {
      margin-right: calc(4rem + 50px);
    }
  }
  ${(props) => props.theme.breakpoints?.up('xl')} {
    background-position: calc(50% - 600px) top;
  }
`

export const CarouselContainer = styled('div')`
  flex-grow: 1;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 100vh;
  position: relative;
  top: 0;
  left: 0;
`

export const LoginContainer = styled('div')`
  width: 100%;
  max-width: 440px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints?.up('md')} {
    margin-top: 50px;
    max-width: 500px;
  }
  ${(props) => props.theme.breakpoints?.up('xl')} {
    max-width: 600px;
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
  width: 100%;
  border-radius: 0.5rem;

  &::-webkit-scrollbar-track {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 20;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
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
  overflow: overlay;
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

  ${(props) => props.theme.breakpoints?.up('md')} {
    flex-grow: 1;
    padding-bottom: 4rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border: 2px solid transparent;
    border-radius: 0.5rem;
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

  & > *:nth-last-child(2) {
    margin-bottom: 5rem;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    flex-grow: 1;
  }
`

export const ChangeViewButtonWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.breakpoints?.up('md')} {
    margin-top: auto;
  }

  & > *:first-child {
    margin-top: 3rem;
  }
`

export const AdditionalButtonsWrapper = styled('div')`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FormErrorMessage = styled('span')`
  display: block;
  text-align: right;
  color: ${colors.fields.filled.error};
  margin-bottom: 1rem;
`

export const ValidationCheckbox = styled(Checkbox)`
  &.Checkbox-Error > svg {
    border: 0.2rem solid ${colors.fields.filled.error};
  }
`

export const InformationWrapper = styled('div')`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 900px;
`

export const InformationHeader = styled('div')`
  background-color: ${colors.components.transparent};
  padding: 1rem 1.6rem;
  margin-bottom: 1.6rem;
  width: 85%;
  border-radius: 0.5rem;
  border-left: 0.8rem solid ${colors.decorations.border.secondary};
  box-shadow: 0.2rem 0.4rem 0.4rem 0
    ${colors.decorations.boxShadows.transparentComponent};
`

export const InformationContent = styled('div')`
  background-color: ${colors.components.transparent};
  padding: 1rem 1.6rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border-left: 0.8rem solid ${colors.decorations.border.secondary};
  box-shadow: 0.2rem 0.4rem 0.4rem 0
    ${colors.decorations.boxShadows.transparentComponent};
  & > * {
    margin-bottom: 1rem;
  }
  & > button {
    align-self: flex-end;
  }
`

export const LogotypeWrapper = styled('div')`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`
