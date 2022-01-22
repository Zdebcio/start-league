import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import AddNewElementForm from 'shared/components/AddNewElementForm/AddNewElementForm'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { leagueNameRegExp, teamNameRegExp } from 'shared/utils/regexp'
import { addNewTeam, resetAddNewTeamStatus } from 'shared/store/leagues/actions'
import {
  getAddingNewTeamError,
  getAddNewTeamStatus,
} from 'shared/store/leagues/selectors'
import { LoadingStatus } from 'shared/types'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import { ContentWindow } from './AddNewTeamView.style'

type Inputs = {
  teamName: string
}

export interface IAddNewTeamView {
  selectedView: string
  changeViewFn: (value: string) => void
  leagueID: number
  leagueName: string
}

const AddNewTeamView: React.FC<IAddNewTeamView> = ({ leagueID }) => {
  const dispatch = useDispatch()
  const addNewTeamStatus = useSelector(getAddNewTeamStatus)
  const addingNewTeamError = useSelector(getAddingNewTeamError)
  const isDesktopScreen = useCheckDesktopScreen('sm')

  useEffect(() => {
    return () => {
      dispatch(resetAddNewTeamStatus())
    }
  }, [])

  const schema = yup
    .object({
      teamName: yup
        .string()
        .required('Field is required')
        .matches(
          teamNameRegExp,
          'Team name should contians only letters, numbers and spaces'
        )
        .min(3, 'Name should have minimum 3 chars')
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
        ),
    })
    .required()

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const handleCreateLeagueSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      teamName: data.teamName,
      leagueID,
    }

    dispatch(addNewTeam(payload))
  }

  const handleNextTeamClick = () => {
    reset()
    dispatch(resetAddNewTeamStatus())
  }

  useEffect(() => {
    if (addNewTeamStatus === LoadingStatus.Failed && addingNewTeamError) {
      if (typeof addingNewTeamError === 'string') {
        setError('teamName', {
          type: 'server',
          message: addingNewTeamError,
        })
      }
    }
  }, [addNewTeamStatus, addingNewTeamError])

  return (
    <>
      <ContentWindow>
        <AddNewElementForm
          createStatus={addNewTeamStatus}
          title="Insert your team name:"
          isError={!!errors.teamName}
          errorMessage={errors.teamName?.message}
          registerProp={register('teamName', { required: true })}
          handleSubmitFn={handleSubmit(handleCreateLeagueSubmit)}
          successfullyMessage="Team added successfully"
        />
      </ContentWindow>
      <ButtonsControlWrapper>
        {addNewTeamStatus === LoadingStatus.Succeeded && (
          <Button
            onClick={handleNextTeamClick}
            variant="contained"
            disableTouchRipple
            size="small"
            color="secondary"
            sx={isDesktopScreen ? { order: 2, marginRight: '1rem' } : {}}
          >
            Add next team
          </Button>
        )}
        <Button
          component={Link}
          to={`/leagues/${leagueID}/teams`}
          variant="contained"
          disableTouchRipple
          size="small"
          color="tertiary"
          sx={isDesktopScreen ? { order: 1, marginRight: '1rem' } : {}}
        >
          Back to teams list
        </Button>
      </ButtonsControlWrapper>
    </>
  )
}

export default AddNewTeamView
