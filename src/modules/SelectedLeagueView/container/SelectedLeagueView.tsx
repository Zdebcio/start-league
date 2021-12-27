import { useEffect, useState } from 'react'
import { Select, MenuItem, Typography } from '@mui/material'
import { Route, useHistory, Switch, Redirect } from 'react-router-dom'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import { ContentWindow, ContentHeaderWrapper } from './SelectedLeagueView.style'
import LeagueLadeboard from '../components/LeagueLadeboard/LeagueLadeboard'

const SelectedLeagueView = () => {
  const [selectedView, setSelectedView] = useState('table')
  const history = useHistory()

  const handleSelectedViewChange = (value: string) => {
    setSelectedView(value)
    if (value === 'teams') {
      history.replace('/leagues/50/teams')
    } else {
      history.replace('/leagues/50')
    }
  }

  return (
    <PageAfterLogin>
      <ContentWindow>
        <ContentHeaderWrapper>
          <Typography variant="h4" component="h1">
            League name
          </Typography>
          <Select
            value={selectedView}
            onChange={(event) => handleSelectedViewChange(event.target.value)}
            variant="filled"
            disableUnderline
          >
            <MenuItem value="table">Table</MenuItem>
            <MenuItem value="teams">Teams</MenuItem>
          </Select>
        </ContentHeaderWrapper>
        <Switch>
          <Route path="/leagues/50/teams" exact render={() => <div>zxc</div>} />
          <Route path="/leagues/50" exact>
            <LeagueLadeboard leagueID={1} />
          </Route>
          <Redirect to="/leagues/50" />
        </Switch>
      </ContentWindow>
    </PageAfterLogin>
  )
}

export default SelectedLeagueView
