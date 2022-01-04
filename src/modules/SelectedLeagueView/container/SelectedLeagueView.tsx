import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Route,
  useHistory,
  Switch,
  Redirect,
  matchPath,
  useLocation,
  useParams,
} from 'react-router-dom'
import { fetchSelectedLeagueInfo } from 'shared/store/leagues/actions'
import { getSelectedLeagueInfo } from 'shared/store/leagues/selectors'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import TablePageView from '../components/TablePageView/TablePageView'
import TeamsPageView from '../components/TeamsPageView/TeamsPageView'
import ResultsPageView from '../components/ResultsPageView/ResultsPageView'
import AddNewTeamView from '../components/AddNewTeamView/AddNewTeamView'

const SelectedLeagueView = () => {
  const { leagueID } = useParams<{ leagueID?: string }>()
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const leagueInfo = useSelector(getSelectedLeagueInfo)
  const tablePath = `/leagues/${leagueID}`
  const teamsPath = `/leagues/${leagueID}/teams`
  const resultsPath = `/leagues/${leagueID}/results`
  const newTeamPath = `/leagues/${leagueID}/teams/add`
  const [selectedView, setSelectedView] = useState(
    matchPath(location.pathname, '/leagues/:leagueID/teams') ? 'teams' : 'table'
  )
  const leagueName = leagueInfo ? leagueInfo.league_name : ''

  useEffect(() => {
    if (leagueID) {
      dispatch(fetchSelectedLeagueInfo({ leagueID: Number(leagueID) }))
    }
  }, [dispatch])

  const handleSelectedViewChange = (value: string) => {
    setSelectedView(value)
    if (value === 'teams') {
      history.replace(teamsPath)
    } else {
      history.replace(tablePath)
    }
  }

  return (
    <PageAfterLogin>
      <Switch>
        <Route path={newTeamPath} exact>
          <AddNewTeamView
            selectedView={selectedView}
            changeViewFn={handleSelectedViewChange}
            leagueID={Number(leagueID)}
            leagueName={leagueName}
          />
        </Route>
        <Route path={teamsPath} exact>
          <TeamsPageView
            selectedView={selectedView}
            changeViewFn={handleSelectedViewChange}
            leagueID={Number(leagueID)}
            leagueName={leagueName}
          />
        </Route>
        <Route path={resultsPath} exact>
          <ResultsPageView
            leagueID={Number(leagueID)}
            leagueName={leagueName}
          />
        </Route>
        <Route path={tablePath} exact>
          <TablePageView
            selectedView={selectedView}
            changeViewFn={handleSelectedViewChange}
            leagueID={Number(leagueID)}
            leagueName={leagueName}
          />
        </Route>
        <Redirect to={tablePath} />
      </Switch>
    </PageAfterLogin>
  )
}

export default SelectedLeagueView
