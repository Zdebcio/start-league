import { styled, Typography } from '@mui/material'
import { colors } from 'config'

export const NoDataTypography = styled(Typography)`
  color: ${colors.typography.additional};
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`
