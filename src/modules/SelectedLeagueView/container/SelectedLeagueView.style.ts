import { styled } from '@mui/system'
import { colors } from 'config'

export const ContentWindow = styled('div')`
  flex-grow: 1;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${colors.components.secondary};
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 70vh;
  flex-grow: 1;
  flex-shrink: 1;
  ${(props) => props.theme.breakpoints?.up('md')} {
    width: 100%;
  }
`

export const ContentHeaderWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }
`