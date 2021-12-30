import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Select, MenuItem, Typography, Button } from '@mui/material'
import NoDataView from 'shared/components/NoDataView/NoDataView'
import TeamsList from 'shared/components/TeamsList/TeamsList'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { fetchSelectedLeagueTeams } from 'shared/store/leagues/actions'
import { getSelectedLeagueTeams } from 'shared/store/leagues/selectors'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import {
  ContentWindow,
  ContentHeaderWrapper,
} from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'

export interface ITeamsPageView {
  selectedView: string
  changeViewFn: (value: string) => void
  leagueID: number
}

const TeamsPageView: React.FC<ITeamsPageView> = ({
  selectedView,
  changeViewFn,
  leagueID,
}) => {
  const isDesktopScreen = useCheckDesktopScreen('sm')

  const dispatch = useDispatch()
  const teamsList = useSelector(getSelectedLeagueTeams)

  useEffect(() => {
    dispatch(fetchSelectedLeagueTeams({ leagueID }))
  }, [dispatch])

  return (
    <>
      <ContentWindow>
        <ContentHeaderWrapper>
          <Typography variant="h4" component="h1">
            League name
          </Typography>
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
          <TeamsList teamsListData={teamsList} />
        ) : (
          <NoDataView primaryText="No teams added yet." />
        )}
      </ContentWindow>
      <ButtonsControlWrapper>
        <Button
          component={Link}
          to="/leagues"
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
      </ButtonsControlWrapper>
    </>
  )
}

export default TeamsPageView
