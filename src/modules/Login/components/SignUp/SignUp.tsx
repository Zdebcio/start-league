import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  Button,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@mui/material'
import { registration } from 'shared/store/auth/actions'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockIcon from '@mui/icons-material/Lock'
import {
  FormPanel,
  ChangeViewButtonWrapper,
} from 'modules/Login/container/Login.style'

import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { passwordRegExp } from 'shared/utils/regexp'
import { DevTool } from '@hookform/devtools'

interface ISignUp {
  viewChangeFn: (view: string) => void
}

const SignUp: React.FC<ISignUp> = ({ viewChangeFn }) => {
  const dispatch = useDispatch()

  type Inputs = {
    nickname: string
    email: string
    passwd: string
    repeatPasswd: string
    termsAndRegulations: boolean
  }

  const schema = yup
    .object({
      nickname: yup.string().required('Field must be filled'),
      email: yup
        .string()
        .email('Incorrect E-mail.')
        .required('Field must be filled'),
      passwd: yup
        .string()
        .test(
          'is-strong-password',
          'Password must have min 8 characters and contains one lowercase, one uppercase, number and special character.',
          (value) => {
            if (value) {
              return passwordRegExp.test(value)
            }

            return true
          }
        )
        .required('Field must be filled'),
      repeatPasswd: yup.string().required('Field must be filled'),
      termsAndRegulations: yup.bool().oneOf([true], 'Field must be checked'),
    })
    .required()

  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const handleRegistrationSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      nickname: data.nickname,
      email: data.email,
      passwd: data.passwd,
    }

    dispatch(registration(payload))
  }

  return (
    <FormPanel onSubmit={handleSubmit(handleRegistrationSubmit)}>
      <TextField
        placeholder="Nickname"
        variant="filled"
        type="text"
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutlineOutlinedIcon />
            </InputAdornment>
          ),
          ...register('nickname', { required: true }),
        }}
      />
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
      <TextField
        placeholder="Reply password"
        variant="filled"
        type="password"
        fullWidth
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          ...register('repeatPasswd', { required: true }),
        }}
      />
      <Controller
        name="termsAndRegulations"
        control={control}
        render={() => (
          <FormControlLabel
            control={
              <Checkbox
                icon={<RemoveIcon />}
                checkedIcon={<CheckIcon />}
                onChange={(event) => {
                  setValue('termsAndRegulations', event.target.checked)
                }}
              />
            }
            label="Accept regulations and terms."
          />
        )}
      />
      <Button variant="contained" fullWidth type="submit">
        Sign Up
      </Button>
      <ChangeViewButtonWrapper>
        <Typography variant="body1" component="span">
          Do you already have an account?
        </Typography>
        <Button
          variant="text"
          color="primary"
          disableTouchRipple
          onClick={() => viewChangeFn('signIn')}
        >
          Sign In
        </Button>
      </ChangeViewButtonWrapper>
      <DevTool control={control} />
    </FormPanel>
  )
}

export default SignUp
