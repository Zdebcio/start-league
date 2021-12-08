import { TextField, InputAdornment, Typography, Button } from '@mui/material'
import { ReactComponent as AppLogo } from 'shared/images/logos/logo-icon-grey.svg'
import { NoDataTypography } from './NoDataView.style'

const NoDataView = () => {
  return (
    <>
      <NoDataTypography align="center" variant="h1">
        <span>You didn’t add any tables yet.</span>
        <span>Create new table to continue.</span>
      </NoDataTypography>
      <AppLogo style={{ width: '80%', height: '80%' }} />
    </>
  )
}

export default NoDataView
