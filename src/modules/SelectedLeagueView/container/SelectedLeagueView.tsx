import { useEffect, useState } from 'react'
import { Select, MenuItem, Typography } from '@mui/material'
import {
  Route,
  useHistory,
  Switch,
  Redirect,
  matchPath,
  useLocation,
  useParams,
} from 'react-router-dom'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import { ContentWindow, ContentHeaderWrapper } from './SelectedLeagueView.style'
import TablePageView from '../components/TablePageView/TablePageView'
import TeamsPageView from '../components/TeamsPageView/TeamsPageView'

const SelectedLeagueView = () => {
  const { leagueID } = useParams<{ leagueID?: string }>()
  const history = useHistory()
  const location = useLocation()
  const tablePath = `/leagues/${leagueID}`
  const teamsPath = `/leagues/${leagueID}/teams`
  const [selectedView, setSelectedView] = useState(
    matchPath(location.pathname, '/leagues/:leagueID/teams') ? 'teams' : 'table'
  )

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
        <Route path={teamsPath} exact>
          <TeamsPageView
            selectedView={selectedView}
            changeViewFn={handleSelectedViewChange}
          />
        </Route>
        <Route path={tablePath} exact>
          <TablePageView
            selectedView={selectedView}
            changeViewFn={handleSelectedViewChange}
          />
        </Route>
        <Redirect to={tablePath} />
      </Switch>
    </PageAfterLogin>
  )
}

export default SelectedLeagueView
