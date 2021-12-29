import { styled } from '@mui/material'
import { colors } from 'config'

export const CreateLeagueContainer = styled('div')`
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

export const CreateLeagueForm = styled('form')`
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
