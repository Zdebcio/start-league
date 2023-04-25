import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import {
  createLeague,
  resetCreatedLeagueStatus,
} from 'shared/store/leagues/actions'
import { leagueNameRegExp } from 'shared/utils/regexp'
import { DevTool } from '@hookform/devtools'
import {
  getCreateLeagueStatus,
  getCreatingLeagueError,
} from 'shared/store/leagues/selectors'
import AddNewElementForm from 'shared/components/AddNewElementForm/AddNewElementForm'
import { LoadingStatus } from 'shared/types'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import { ContentWindow, CreateLeagueContainer } from './CreateLeague.style'

type Inputs = {
  leagueName: string
}

const CreateLeague = () => {
  const dispatch = useDispatch()
  const createLeagueStatus = useSelector(getCreateLeagueStatus)
  const creatingLeagueError = useSelector(getCreatingLeagueError)

  useEffect(() => {
    return () => {
      dispatch(resetCreatedLeagueStatus())
    }
  }, [])

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
    setError,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const handleCreateLeagueSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      leagueName: data.leagueName,
    }

    dispatch(createLeague(payload))
  }

  useEffect(() => {
    if (createLeagueStatus === LoadingStatus.Failed && creatingLeagueError) {
      setError('leagueName', {
        type: 'server',
        message: 'You have too many created leagues (10) to create new one.',
      })
    }
  }, [createLeagueStatus, creatingLeagueError])

  return (
    <PageAfterLogin>
      <CreateLeagueContainer>
        <ContentWindow>
          <AddNewElementForm
            createStatus={createLeagueStatus}
            title="Insert your league name:"
            isError={!!errors.leagueName}
            errorMessage={errors.leagueName?.message}
            registerProp={register('leagueName', { required: true })}
            handleSubmitFn={handleSubmit(handleCreateLeagueSubmit)}
            successfullyMessage="Table created successfully"
          />
        </ContentWindow>
        <ButtonsControlWrapper>
          <Button
            component={Link}
            to="/leagues"
            variant="contained"
            disableTouchRipple
            size="small"
            color="tertiary"
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
