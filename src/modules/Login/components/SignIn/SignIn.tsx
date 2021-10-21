import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField } from '@mui/material'
import { login } from 'shared/store/auth/actions'

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
    <div>
      <form onSubmit={handleLoginSubmit}>
        <TextField
          id="email-login"
          placeholder="E-Mail"
          variant="filled"
          type="text"
          value={emailInput}
          onChange={handleEmailInputChange}
        />
        <TextField
          id="password-login"
          placeholder="Password"
          variant="filled"
          type="password"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        />
        <Button variant="contained" type="submit">
          Sign In
        </Button>
      </form>
      <Button variant="text" onClick={() => viewChangeFn('signUp')}>
        Sign Up
      </Button>
    </div>
  )
}

export default SignIn
