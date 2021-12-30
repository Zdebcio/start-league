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
`

export const ContentHeaderWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: 3rem;
  }

  ${(props) => props.theme.breakpoints?.up('sm')} {
    justify-content: normal;
  }
`

export const TableInfoMessage = styled('span')`
  align-self: flex-end;
  font-size: 1.4rem;

  ${(props) => props.theme.breakpoints?.up('sm')} {
    font-size: 1.6rem;
  }
`
