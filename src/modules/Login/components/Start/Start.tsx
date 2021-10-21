import { Button } from '@mui/material'

interface IStart {
  viewChangeFn: (view: string) => void
}

const Start: React.FC<IStart> = ({ viewChangeFn }) => {
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => viewChangeFn('signIn')}
      >
        Sign In
      </Button>
      <Button
        variant="contained"
        color="neutral"
        onClick={() => viewChangeFn('signUp')}
      >
        Sign Up
      </Button>
    </div>
  )
}

export default Start
