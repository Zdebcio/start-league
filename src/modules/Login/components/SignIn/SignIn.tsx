import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField, InputAdornment } from '@mui/material'
import { login } from 'shared/store/auth/actions'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { FormPanel } from 'modules/Login/container/Login.style'

interface ISignIn {
  viewChangeFn: (view: string) => void
}

const SignIn: React.FC<ISignIn> = ({ viewChangeFn }) => {
  const dispatch = useDispatch()
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

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

  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const payload = {
      email: emailInput,
      passwd: passwordInput,
    }

    dispatch(login(payload))
  }

  return (
    <>
      <FormPanel onSubmit={handleLoginSubmit}>
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
        <Button variant="contained" type="submit" fullWidth>
          Sign In
        </Button>
        <Button variant="text" onClick={() => viewChangeFn('signUp')}>
          Sign Up
        </Button>
      </FormPanel>
    </>
  )
}

export default SignIn
