import { TextField, InputAdornment, Typography, Button } from '@mui/material'
import { NoDataTypography, NoDataAppLogo } from './NoDataView.style'

const NoDataView = () => {
  return (
    <>
      <NoDataTypography align="center" variant="h1">
        <span>You didn’t add any tables yet.</span>
        <span>Create new table to continue.</span>
      </NoDataTypography>
      <NoDataAppLogo />
    </>
  )
}

export default NoDataView
