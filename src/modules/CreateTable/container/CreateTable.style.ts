import { styled } from '@mui/material'
import { colors } from 'config'

export const CreateTableContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    align-items: flex-start;
  }
`

export const ContentWindow = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.components.secondary};
  border-radius: 0.3rem;
  padding: 4rem 2rem;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    padding: 10rem;
  }
`

export const CreateTableForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > button {
    width: 80%;
  }

  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }

  ${(props) => props.theme.breakpoints?.up('sm')} {
    width: 60%;
    max-width: 50rem;

    & > button {
      width: 50%;
    }
  }
`

export const ButtonsControlWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-top: 1rem;
  }

  ${(props) => props.theme.breakpoints?.up('sm')} {
    & > * {
      width: 33.3333%;
      maxwidth: 30rem;

      &:not(:last-child) {
        margin-top: 0;
        margin-right: 1rem;
      }
    }
  }
`
