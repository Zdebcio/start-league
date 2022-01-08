import { Button, Select, TextField, MenuItem, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import {
  addNewResult,
  fetchSelectedLeagueTeams,
  resetAddNewResultStatus,
} from 'shared/store/leagues/actions'
import {
  getAddNewResultStatus,
  getSelectedLeagueTeams,
} from 'shared/store/leagues/selectors'
import { LoadingStatus } from 'shared/types'
import { DevTool } from '@hookform/devtools'
import CompleteComponent from 'shared/components/CompleteComponent/CompleteComponent'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import { ContentHeaderWrapper } from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'
import {
  ContentWindow,
  FormContainer,
  SingleTeamResult,
  ResultWrapper,
  CharBetweenResults,
  MobileViewLabelsWrapper,
  MobileTeamLabel,
  MobileScoreLabel,
} from './AddNewResult.style'

type Inputs = {
  homeTeam: number
  awayTeam: number
  homeScore: string
  awayScore: string
}

export interface IAddNewTeamView {
  selectedView: string
  changeViewFn: (value: string) => void
  leagueID: number
  leagueName: string
}

const AddNewResultView: React.FC<IAddNewTeamView> = ({
  leagueID,
  leagueName,
}) => {
  const dispatch = useDispatch()
  const addNewResultStatus = useSelector(getAddNewResultStatus)
  const teamsList = useSelector(getSelectedLeagueTeams)
  const isDesktopScreen = useCheckDesktopScreen('sm')

  useEffect(() => {
    dispatch(fetchSelectedLeagueTeams({ leagueID }))
    return () => {
      dispatch(resetAddNewResultStatus())
    }
  }, [])

  const schema = yup
    .object({
      homeTeam: yup.number().min(0, 'Field is required'),
      awayTeam: yup.number().min(0, 'Field is required'),
      homeScore: yup
        .string()
        .matches(/^[0-9]$/, 'Score value should be 0 or more')
        .required('Field is required'),
      awayScore: yup
        .string()
        .matches(/^[0-9]$/, 'Score value should be 0 or more')
        .required('Field is required'),
    })
    .required()

  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const handleAddResultSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      homeTeam:
        teamsList.find(({ id }) => id === data.homeTeam)?.team_name ?? '',
      awayTeam:
        teamsList.find(({ id }) => id === data.awayTeam)?.team_name ?? '',
      homeScore: data.homeScore,
      awayScore: data.awayScore,
      leagueID,
    }

    dispatch(addNewResult(payload))
  }

  const handleNextResultClick = () => {
    reset()
    dispatch(resetAddNewResultStatus())
  }

  return (
    <>
      <ContentWindow>
        {addNewResultStatus === LoadingStatus.Succeeded ? (
          <CompleteComponent text="Result added successfully" />
        ) : (
          <>
            <ContentHeaderWrapper>
              <Typography variant="h5" component="h1">
                <span>{leagueName.length && `${leagueName}: `}</span>
                <span>Add Results</span>
              </Typography>
            </ContentHeaderWrapper>
            <FormContainer onSubmit={handleSubmit(handleAddResultSubmit)}>
              {!isDesktopScreen && (
                <MobileViewLabelsWrapper>
                  <MobileTeamLabel>Team:</MobileTeamLabel>
                  <MobileScoreLabel>Score:</MobileScoreLabel>
                </MobileViewLabelsWrapper>
              )}
              <ResultWrapper>
                <SingleTeamResult>
                  <Controller
                    control={control}
                    name="homeTeam"
                    defaultValue={-1}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={!!errors.homeTeam}
                        variant="filled"
                        disableUnderline
                      >
                        {teamsList
                          .filter(({ id }) => id !== watch('awayTeam'))
                          .map((team) => (
                            <MenuItem key={team.id} value={team.id}>
                              {team.team_name}
                            </MenuItem>
                          ))}
                        <MenuItem value={-1} />
                      </Select>
                    )}
                  />
                  <TextField
                    variant="filled"
                    size="small"
                    type="number"
                    error={!!errors.homeScore}
                    InputProps={{
                      disableUnderline: true,
                      inputProps: {
                        style: { textAlign: 'center' },
                      },
                      ...register('homeScore', { required: true }),
                    }}
                  />
                </SingleTeamResult>

                {isDesktopScreen && <CharBetweenResults>:</CharBetweenResults>}

                <SingleTeamResult isReverse={isDesktopScreen}>
                  <Controller
                    control={control}
                    name="awayTeam"
                    defaultValue={-1}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={!!errors.awayTeam}
                        variant="filled"
                        disableUnderline
                      >
                        {teamsList
                          .filter(({ id }) => id !== watch('homeTeam'))
                          .map((team) => (
                            <MenuItem key={team.id} value={team.id}>
                              {team.team_name}
                            </MenuItem>
                          ))}
                        <MenuItem value={-1} />
                      </Select>
                    )}
                  />
                  <TextField
                    variant="filled"
                    size="small"
                    type="number"
                    error={!!errors.awayScore}
                    InputProps={{
                      disableUnderline: true,
                      inputProps: {
                        style: { textAlign: 'center' },
                      },
                      ...register('awayScore', { required: true }),
                    }}
                  />
                </SingleTeamResult>
              </ResultWrapper>
              <Button
                variant="contained"
                disableTouchRipple
                size="small"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
              <DevTool control={control} />
            </FormContainer>
          </>
        )}
      </ContentWindow>
      <ButtonsControlWrapper>
        {addNewResultStatus === LoadingStatus.Succeeded && (
          <Button
            onClick={handleNextResultClick}
            variant="contained"
            disableTouchRipple
            size="small"
            color="secondary"
            sx={isDesktopScreen ? { order: 2, marginRight: '1rem' } : {}}
          >
            Add next result
          </Button>
        )}
        <Button
          component={Link}
          to={`/leagues/${leagueID}/results`}
          variant="contained"
          disableTouchRipple
          size="small"
          color="tertiary"
          sx={isDesktopScreen ? { order: 1, marginRight: '1rem' } : {}}
        >
          Back to results
        </Button>
      </ButtonsControlWrapper>
    </>
  )
}

export default AddNewResultView
