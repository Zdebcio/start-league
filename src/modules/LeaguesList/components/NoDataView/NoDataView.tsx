import { TextField, InputAdornment, Typography, Button } from '@mui/material'
import {
  NoDataTypography,
  NoDataAppLogo,
  NoDataContainer,
} from './NoDataView.style'

const NoDataView = () => {
  return (
    <NoDataContainer>
      <NoDataTypography align="center" variant="h1">
        <span>You didn’t add any tables yet.</span>
        <span>Create new table to continue.</span>
      </NoDataTypography>
      <NoDataAppLogo />
    </NoDataContainer>
  )
}

export default NoDataView
