import { Button } from '@mui/material'

interface IStart {
  viewChangeFn: (view: string) => void
}

const Start: React.FC<IStart> = ({ viewChangeFn }) => {
  return (
    <div>
      <Button variant="contained" onClick={() => viewChangeFn('signIn')}>
        Sign In
      </Button>
      <Button variant="contained" onClick={() => viewChangeFn('signUp')}>
        Sign Up
      </Button>
    </div>
  )
}

export default Start
