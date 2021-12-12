import { styled, Typography } from '@mui/material'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon-grey.svg'
import { colors } from 'config'

export const NoDataTypography = styled(Typography)`
  color: ${colors.typography.additional};
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 700;
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.breakpoints?.up('md')} {
    font-size: 2.2rem;
  }

  ${(props) => props.theme.breakpoints?.up('lg')} {
    font-size: 2.6rem;
  }
`

export const NoDataAppLogo = styled(AppLogo)`
  width: 80%;
  height: 80%;
  margin-top: 2rem;

  ${(props) => props.theme.breakpoints?.up('md')} {
    max-width: 30rem;
    max-height: 30rem;
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.breakpoints?.up('lg')} {
    max-width: 40rem;
    max-height: 40rem;
  }
`
