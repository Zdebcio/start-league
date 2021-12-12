import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Typography, TextField } from '@mui/material'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import {
  createLeague,
  resetCreatedLeagueStatus,
} from 'shared/store/leagues/actions'
import { leagueNameRegExp } from 'shared/utils/regexp'
import { DevTool } from '@hookform/devtools'
import { getCreateLeagueStatus } from 'shared/store/leagues/selectors'
import { LoadingStatus } from 'shared/types'
import {
  ContentWindow,
  CreateLeagueForm,
  CreateLeagueContainer,
  ButtonsControlWrapper,
} from './CreateLeague.style'

type Inputs = {
  leagueName: string
}

const CreateLeague = () => {
  const dispatch = useDispatch()
  const createLeagueStatus = useSelector(getCreateLeagueStatus)

  useEffect(() => {
    if (createLeagueStatus === LoadingStatus.Succeeded) {
      console.log('Table was created')
    }
  }, [createLeagueStatus])

  const schema = yup
    .object({
      leagueName: yup
        .string()
        .min(2, 'Name should have minimum 2 chars')
        .max(30, 'Name should have maximum 30 chars')
        .test(
          'is-correct-chars',
          'Password should contains only letters, numbers, spaces and underscorers',
          (value) => {
            if (value) {
              return leagueNameRegExp.test(value)
            }

            return true
          }
        )
        .required('Field is required'),
    })
    .required()

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const handleCreateLeagueSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      leagueName: data.leagueName,
    }

    dispatch(createLeague(payload))
  }

  return (
    <PageAfterLogin>
      <CreateLeagueContainer>
        <ContentWindow>
          {createLeagueStatus === LoadingStatus.Succeeded ? (
            <Typography variant="h1" align="center">
              Table was created
            </Typography>
          ) : (
            <>
              <Typography variant="h1" align="center">
                Insert your league name:
              </Typography>
              <CreateLeagueForm
                onSubmit={handleSubmit(handleCreateLeagueSubmit)}
              >
                <TextField
                  placeholder="Type here..."
                  variant="filled"
                  size="small"
                  type="text"
                  fullWidth
                  error={!!errors.leagueName}
                  InputProps={{
                    disableUnderline: true,
                    inputProps: {
                      style: { textAlign: 'center' },
                    },
                    ...register('leagueName', { required: true }),
                  }}
                />
                <Button
                  variant="contained"
                  disableTouchRipple
                  size="small"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </CreateLeagueForm>
            </>
          )}
        </ContentWindow>
        <ButtonsControlWrapper>
          <Button
            component={Link}
            to="/leagues"
            variant="contained"
            disableTouchRipple
            size="small"
            color="tertiary"
            onClick={() => dispatch(resetCreatedLeagueStatus())}
          >
            Go back
          </Button>
        </ButtonsControlWrapper>
        <DevTool control={control} />
      </CreateLeagueContainer>
    </PageAfterLogin>
  )
}

export default CreateLeague
