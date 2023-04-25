import { styled } from '@mui/material'
import { colors } from 'config'

export const WarningLabel = styled('span')`
  color: ${colors.typography.error};
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin-top: 6px;
`

export const DialogStateInfoWrapper = styled('div')`
  display: flex;
  flex-grow: 1;
`

export const DialogStateErrorMessage = styled('span')`
  color: ${colors.typography.error};
  font-size: 1.3rem;
`
