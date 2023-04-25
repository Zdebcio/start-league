import { useEffect, useState } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Select, MenuItem, Typography, Button } from '@mui/material'
import NoDataView from 'shared/components/NoDataView/NoDataView'
import TeamsList from 'shared/components/TeamsList/TeamsList'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import {
  fetchSelectedLeagueTeams,
  removeTeam,
  resetRemoveTeamStatus,
} from 'shared/store/leagues/actions'
import {
  getRemoveTeamStatus,
  getSelectedLeagueTeams,
} from 'shared/store/leagues/selectors'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import {
  ContentWindow,
  ContentHeaderWrapper,
} from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'
import CustomDialog from 'shared/components/CustomDialog/CustomDialog'
import { LoadingStatus } from 'shared/types'

export interface ITeamsPageView {
  selectedView: string
  changeViewFn: (value: string) => void
  leagueID: number
  leagueName: string
}

const TeamsPageView: React.FC<ITeamsPageView> = ({
  selectedView,
  changeViewFn,
  leagueID,
  leagueName,
}) => {
  const isDesktopScreen = useCheckDesktopScreen('sm')

  const dispatch = useAppDispatch()
  const teamsList = useSelector(getSelectedLeagueTeams)
  const removeTeamStatus = useSelector(getRemoveTeamStatus)
  const [teamToRemove, setTeamToRemove] = useState<number | null>(null)

  useEffect(() => {
    dispatch(fetchSelectedLeagueTeams({ leagueID }))
  }, [dispatch])

  useEffect(() => {
    if (teamToRemove === null) {
      dispatch(resetRemoveTeamStatus())
    }
  }, [teamToRemove])

  const handleSetTeamToRemoveClick = (resultID: number) => {
    setTeamToRemove(resultID)
  }

  const handleRemoveTeam = () => {
    const teamName = teamsList.find((team) => team.id === teamToRemove)
    if (teamName) {
      dispatch(removeTeam({ leagueID, teamName: teamName.team_name })).then(
        (res) => {
          if (res.meta.requestStatus === 'fulfilled') {
            dispatch(fetchSelectedLeagueTeams({ leagueID }))
            setTeamToRemove(null)
          }
        }
      )
    }
  }

  return (
    <>
      <ContentWindow>
        <ContentHeaderWrapper>
          {leagueName.length > 0 && (
            <Typography variant="h5" component="h1">
              {leagueName}
            </Typography>
          )}
          <Select
            value={selectedView}
            onChange={(event) => changeViewFn(event.target.value)}
            variant="filled"
            disableUnderline
          >
            <MenuItem value="table">Table</MenuItem>
            <MenuItem value="teams">Teams</MenuItem>
          </Select>
        </ContentHeaderWrapper>
        {teamsList.length > 0 ? (
          <TeamsList
            teamsListData={teamsList}
            handleRemoveFn={handleSetTeamToRemoveClick}
          />
        ) : (
          <NoDataView primaryText="No teams added yet." />
        )}
      </ContentWindow>
      <ButtonsControlWrapper>
        <Button
          component={Link}
          to={`/leagues/${leagueID}/teams/add`}
          variant="contained"
          disableTouchRipple
          size="small"
          color="secondary"
          sx={isDesktopScreen ? { order: 2, marginRight: '1rem' } : {}}
        >
          Add team
        </Button>
        <Button
          component={Link}
          to={`/leagues/${leagueID}/results`}
          variant="contained"
          disableTouchRipple
          size="small"
          color="primary"
          sx={isDesktopScreen ? { order: 3 } : {}}
        >
          Display results
        </Button>
        <Button
          component={Link}
          to="/leagues"
          variant="contained"
          disableTouchRipple
          size="small"
          color="tertiary"
          sx={isDesktopScreen ? { order: 1, marginRight: '1rem' } : {}}
        >
          Back to main page
        </Button>
      </ButtonsControlWrapper>{' '}
      <CustomDialog
        isWarning
        title="Are you sure you want to continue removing this team from league?"
        content="Remember, it means that all results connected with the team will be also removed."
        isOpen={typeof teamToRemove === 'number'}
        handleOnClose={() => setTeamToRemove(null)}
        handleOnDisagreeClick={() => setTeamToRemove(null)}
        handleOnAgreeClick={handleRemoveTeam}
        isLoading={removeTeamStatus === LoadingStatus.Pending}
        isError={removeTeamStatus === LoadingStatus.Failed}
      />
    </>
  )
}

export default TeamsPageView
