import { styled } from '@mui/system'
import { colors } from 'config'
import { TableCell } from '@mui/material'
import { Link } from 'react-router-dom'
import { ReactComponent as RemoveIcon } from 'shared/images/icons/bin-round-icon.svg'
import { ReactComponent as EditIcon } from 'shared/images/icons/pen-round-icon.svg'

export const OptionsTableCell = styled(TableCell)`
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`

export const StyledRemoveIcon = styled(RemoveIcon)`
  fill: ${colors.tables.textBody};
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    fill: ${colors.typography.error};
  }
`

export const StyledEditIcon = styled(EditIcon)`
  fill: ${colors.tables.buttonPrimary};
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    fill: ${colors.tables.buttonPrimaryHover};
  }
`

export const StyledEditLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`
