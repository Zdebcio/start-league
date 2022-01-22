import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  Button,
  TextField,
  InputAdornment,
  FormControlLabel,
  Typography,
} from '@mui/material'
import {
  clearRegistrationStatus,
  registration,
} from 'shared/store/auth/actions'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LockIcon from '@mui/icons-material/Lock'
import CheckIcon from '@mui/icons-material/Check'
import RemoveIcon from '@mui/icons-material/Remove'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { passwordRegExp, usernameRegExp } from 'shared/utils/regexp'
import { DevTool } from '@hookform/devtools'
import {
  getRegisterStatus,
  getRegistrationErrors,
} from 'shared/store/auth/selectors'
import { LoadingStatus } from 'shared/types'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { colors } from 'config'
import {
  FormPanel,
  ChangeViewButtonWrapper,
  FormErrorMessage,
  ValidationCheckbox,
  SuccessfullMessage,
} from 'modules/Login/container/Login.style'

interface ISignUp {
  viewChangeFn: (view: string) => void
}

type Inputs = {
  nickname: string
  email: string
  passwd: string
  repeatPasswd: string
  termsAndRegulations: boolean
}

const SignUp: React.FC<ISignUp> = ({ viewChangeFn }) => {
  const dispatch = useAppDispatch()
  const registerStatus = useSelector(getRegisterStatus)
  const registrationErrors = useSelector(getRegistrationErrors)

  const schema = yup.object({
    nickname: yup
      .string()
      .matches(
        usernameRegExp,
        'Nickname should contains only letters and numbers'
      )
      .min(4, 'Nickname is too short (should have minimum 4 characters)')
      .max(20, 'Nickname is too long (should have maximum 20 characters)')
      .required('Field must be filled'),
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
    repeatPasswd: yup
      .string()
      .test('is-corect-passwd', 'Passwords must be the same', (value, ctx) => {
        return value === ctx.parent.passwd
      })
      .required('Field must be filled'),
    termsAndRegulations: yup
      .bool()
      .oneOf([true], 'Field must be checked')
      .required('Field must be checked'),
  })

  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,
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

  const handleGoToLoginClick = () => {
    viewChangeFn('signIn')
  }

  useEffect(() => {
    return () => {
      dispatch(clearRegistrationStatus())
    }
  }, [dispatch])

  useEffect(() => {
    if (registerStatus === LoadingStatus.Failed) {
      if (registrationErrors?.nickname) {
        setError('nickname', {
          type: 'server',
          message: 'Nickname is already taken',
        })
      }

      if (registrationErrors?.email) {
        setError('email', {
          type: 'server',
          message: 'E-mail is already taken',
        })
      }
    } else clearErrors('email')
  }, [registerStatus, registrationErrors])

  return (
    <>
      {registerStatus === LoadingStatus.Succeeded ? (
        <>
          <SuccessfullMessage>
            <CheckCircleOutlineIcon
              sx={{
                color: colors.typography.success,
              }}
            />
            User created successfully
          </SuccessfullMessage>
          <Button
            variant="contained"
            disableTouchRipple
            fullWidth
            sx={{ marginTop: '3rem' }}
            onClick={handleGoToLoginClick}
          >
            Go to login page
          </Button>
        </>
      ) : (
        <FormPanel onSubmit={handleSubmit(handleRegistrationSubmit)}>
          <TextField
            placeholder="Nickname"
            variant="filled"
            type="text"
            fullWidth
            error={!!errors.nickname}
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
          {errors.nickname && (
            <FormErrorMessage>{errors.nickname.message}</FormErrorMessage>
          )}
          <TextField
            placeholder="E-Mail"
            variant="filled"
            type="text"
            fullWidth
            error={!!errors.email}
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
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
          <TextField
            placeholder="Password"
            variant="filled"
            type="password"
            fullWidth
            error={!!errors.passwd}
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
          {errors.passwd && (
            <FormErrorMessage>{errors.passwd.message}</FormErrorMessage>
          )}
          <TextField
            placeholder="Reply password"
            variant="filled"
            type="password"
            fullWidth
            error={!!errors.repeatPasswd}
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
          {errors.repeatPasswd && (
            <FormErrorMessage>{errors.repeatPasswd.message}</FormErrorMessage>
          )}
          <Controller
            name="termsAndRegulations"
            control={control}
            render={() => (
              <FormControlLabel
                control={
                  <ValidationCheckbox
                    className={
                      errors.termsAndRegulations ? 'Checkbox-Error' : ''
                    }
                    icon={<RemoveIcon />}
                    checkedIcon={<CheckIcon />}
                    onChange={(event) => {
                      setValue('termsAndRegulations', event.target.checked, {
                        shouldValidate: true,
                      })
                    }}
                  />
                }
                label="Accept regulations and terms."
              />
            )}
          />
          <Button
            variant="contained"
            disableTouchRipple
            fullWidth
            type="submit"
          >
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
      )}
    </>
  )
}

export default SignUp
