import { styled, Typography } from '@mui/material'
import { colors } from 'config'

export const TablesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
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
`

