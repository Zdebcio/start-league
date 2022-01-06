import { Button, Select, TextField, MenuItem, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import AddNewElementForm from 'shared/components/AddNewElementForm/AddNewElementForm'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { leagueNameRegExp } from 'shared/utils/regexp'
import {
  addNewLeague,
  resetAddNewLeagueStatus,
} from 'shared/store/leagues/actions'
import { getAddNewTeamStatus } from 'shared/store/leagues/selectors'
import { LoadingStatus } from 'shared/types'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import { ContentHeaderWrapper } from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'
import {
  ContentWindow,
  FormContainer,
  SingleTeamResult,
  ResultWrapper,
  CharBetweenResults,
} from './AddNewResult.style'

type Inputs = {
  teamName: string
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
  const addNewTeamStatus = useSelector(getAddNewTeamStatus)
  const isDesktopScreen = useCheckDesktopScreen('sm')

  useEffect(() => {
    return () => {
      dispatch(resetAddNewLeagueStatus())
    }
  }, [])

  const schema = yup
    .object({
      teamName: yup
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
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const handleCreateLeagueSubmit: SubmitHandler<Inputs> = async (data) => {
    const payload = {
      teamName: data.teamName,
      leagueID,
    }

    dispatch(addNewLeague(payload))
  }

  const handleNextTeamClick = () => {
    dispatch(resetAddNewLeagueStatus())
  }

  return (
    <>
      <ContentWindow>
        <ContentHeaderWrapper>
          <Typography variant="h5" component="h1">
            <span>{leagueName.length && `${leagueName}: `}</span>
            <span>Add Results</span>
          </Typography>
        </ContentHeaderWrapper>
        <FormContainer onSubmit={handleSubmit(handleCreateLeagueSubmit)}>
          {/* <span>Team:</span>
          <span>Score:</span> */}
          <ResultWrapper>
            <SingleTeamResult>
              <Select
                value="table"
                // onChange={(event) => changeViewFn(event.target.value)}
                variant="filled"
                disableUnderline
              >
                <MenuItem value="table">Table</MenuItem>
                <MenuItem value="teams">Teams</MenuItem>
              </Select>
              <TextField
                // placeholder={placeholder}
                variant="filled"
                size="small"
                type="text"
                // error={isError}
                InputProps={{
                  disableUnderline: true,
                  inputProps: {
                    style: { textAlign: 'center' },
                  },
                  //   ...registerProp,
                }}
              />
            </SingleTeamResult>
            {isDesktopScreen && <CharBetweenResults>:</CharBetweenResults>}
            <SingleTeamResult isReverse={isDesktopScreen}>
              <Select
                value="table"
                // onChange={(event) => changeViewFn(event.target.value)}
                variant="filled"
                disableUnderline
              >
                <MenuItem value="table">Table</MenuItem>
                <MenuItem value="teams">Teams</MenuItem>
              </Select>
              <TextField
                // placeholder={placeholder}
                variant="filled"
                size="small"
                type="text"
                // error={isError}
                InputProps={{
                  disableUnderline: true,
                  inputProps: {
                    style: { textAlign: 'center' },
                  },
                  //   ...registerProp,
                }}
              />
            </SingleTeamResult>
          </ResultWrapper>
          <Button
            variant="contained"
            disableTouchRipple
            size="small"
            color="primary"
          >
            Submit
          </Button>
        </FormContainer>
      </ContentWindow>
      {/* <ButtonsControlWrapper>
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
          Back to main page
        </Button>
      </ButtonsControlWrapper> */}
    </>
  )
}

export default AddNewResultView
