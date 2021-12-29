import { TextField, InputAdornment, Typography, Button } from '@mui/material'
import {
  NoDataTypography,
  NoDataAppLogo,
  NoDataContainer,
} from './NoDataView.style'

export interface INoDataView {
  primaryText?: string
  secondaryText?: string
}

const NoDataView: React.FC<INoDataView> = ({ primaryText, secondaryText }) => {
  return (
    <NoDataContainer>
      <NoDataTypography align="center" variant="h1">
        {primaryText && <span>{primaryText}</span>}
        {secondaryText && <span>{secondaryText}</span>}
      </NoDataTypography>
      <NoDataAppLogo />
    </NoDataContainer>
  )
}

export default NoDataView
