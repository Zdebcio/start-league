import { styled, TextField, Theme } from '@mui/material'
import { colors } from 'config'

export const LeaguesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    align-items: baseline;
  }
`

export const StyledSearchBar = styled(TextField)`
  order: 1;

  ${(props) => props.theme.breakpoints?.up('md')} {
    flex-grow: 1;
    flex-shring: 1;
    width: auto;
  }
`

export const ContentWindow = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.components.secondary};
  border-radius: 0.3rem;
  flex-grow: 1;
  padding: 2rem;
  order: 2;

  ${(props) => props.theme.breakpoints?.up('md')} {
    flex-direction: column-reverse;
    order: 3;
    width: 100%;
    height: 90%;
  }
`

export const useCreateButtonStyles = (theme: Theme) => ({
  order: 3,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    order: 2,
    width: 'auto',
    marginLeft: '4rem',
  },
})
