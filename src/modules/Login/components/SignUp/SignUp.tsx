import { Button, TextField } from '@mui/material'

interface ISignUp {
  viewChangeFn: (view: string) => void
}

const SignUp: React.FC<ISignUp> = ({ viewChangeFn }) => {
  return (
    <>
      <TextField
        id="nickname-registration"
        label="Nickname"
        variant="filled"
        type="text"
      />
      <TextField
        id="email-registration"
        label="E-Mail"
        variant="filled"
        type="text"
      />
      <TextField
        id="password-registration"
        label="Password"
        variant="filled"
        type="password"
      />
      <TextField
        id="repeat-password-registration"
        label="Repeat password"
        variant="filled"
        type="password"
      />
      <Button variant="contained">Sign Up</Button>
      <Button variant="text" onClick={() => viewChangeFn('signIn')}>
        Sign In
      </Button>
    </>
  )
}

export default SignUp
