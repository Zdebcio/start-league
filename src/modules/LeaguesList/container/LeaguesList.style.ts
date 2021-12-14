import { styled, TextField, Theme } from '@mui/material'
import { colors } from 'config'

export const SearchContainer = styled('div')`
  display: flex;
  margin-bottom: 2rem;
`

export const StyledSearchBar = styled(TextField)`
  ${(props) => props.theme.breakpoints?.up('md')} {
    flex-grow: 1;
    flex-shring: 1;
    width: auto;
    margin-right: 4rem;
  }
`

export const ContentWindow = styled('div')`
  flex-grow: 1;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${colors.components.secondary};
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  max-height: 70vh;
  flex-grow: 1;
  flex-shrink: 1;
  ${(props) => props.theme.breakpoints?.up('md')} {
    width: 100%;
  }
`

export const useCreateButtonStyles = (theme: Theme) => ({
  flexShrink: 0,
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    width: 'auto',
    marginLeft: '4rem',
  },
})
