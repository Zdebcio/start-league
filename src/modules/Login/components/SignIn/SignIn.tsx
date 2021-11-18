import { useDispatch } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, TextField, InputAdornment, Typography } from '@mui/material'
import { login } from 'shared/store/auth/actions'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  FormPanel,
  ChangeViewButtonWrapper,
  AdditionalButtonsWrapper,
} from 'modules/Login/container/Login.style'
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { DevTool } from '@hookform/devtools'

interface ISignIn {
  viewChangeFn: (view: string) => void
}

type Inputs = {
  email: string
  passwd: string
}

const SignIn: React.FC<ISignIn> = ({ viewChangeFn }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const schema = yup
    .object({
      email: yup.string().required(),
      passwd: yup.string().required(),
    })
    .required()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const handleLoginSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      email: data.email,
      passwd: data.passwd,
    }

    await dispatch(login(payload))
    history.push('/')
  }

  return (
    <>
      <FormPanel onSubmit={handleSubmit(handleLoginSubmit)}>
        <TextField
          placeholder="E-Mail"
          variant="filled"
          type="text"
          fullWidth
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
            ...register('email', { required: true }),
          }}
        />
        <TextField
          placeholder="Password"
          variant="filled"
          type="password"
          fullWidth
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
            ...register('passwd', { required: true }),
          }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Sign In
        </Button>
        <AdditionalButtonsWrapper>
          <Button variant="text" color="secondary" disableTouchRipple>
            Regulations and terms
          </Button>
          <Button variant="text" color="secondary" disableTouchRipple>
            Reset password
          </Button>
        </AdditionalButtonsWrapper>
        <ChangeViewButtonWrapper>
          <Typography variant="body1" component="span">
            Don’t have an account?
          </Typography>
          <Button
            variant="text"
            color="primary"
            disableTouchRipple
            onClick={() => viewChangeFn('signUp')}
          >
            Sign Up
          </Button>
        </ChangeViewButtonWrapper>
        <DevTool control={control} />
      </FormPanel>
    </>
  )
}

export default SignIn
