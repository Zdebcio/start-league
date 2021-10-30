import { useState } from 'react'
import {
  Button,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockIcon from '@mui/icons-material/Lock'
import { FormPanel } from 'modules/Login/container/Login.style'

import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'

interface ISignUp {
  viewChangeFn: (view: string) => void
}

const SignUp: React.FC<ISignUp> = ({ viewChangeFn }) => {
  const [nicknameInput, setNicknameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [repeatPasswordInput, setRepeatPasswordInput] = useState('')

  const handleNicknameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNicknameInput(event.target.value)
  }

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailInput(event.target.value)
  }

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordInput(event.target.value)
  }

  const handleRepeatPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPasswordInput(event.target.value)
  }

  return (
    <FormPanel>
      <TextField
        placeholder="Nickname"
        variant="filled"
        type="text"
        value={nicknameInput}
        onChange={handleNicknameInputChange}
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        placeholder="E-Mail"
        variant="filled"
        type="text"
        value={emailInput}
        onChange={handleEmailInputChange}
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        placeholder="Password"
        variant="filled"
        type="password"
        value={passwordInput}
        onChange={handlePasswordInputChange}
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        placeholder="Reply password"
        variant="filled"
        type="password"
        value={repeatPasswordInput}
        onChange={handleRepeatPasswordInputChange}
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControlLabel
        control={<Checkbox icon={<RemoveIcon />} checkedIcon={<CheckIcon />} />}
        label="Accept regulations and terms."
      />
      <Button variant="contained" fullWidth>
        Sign Up
      </Button>
      <Button variant="text" onClick={() => viewChangeFn('signIn')}>
        Sign In
      </Button>
    </FormPanel>
  )
}

export default SignUp
