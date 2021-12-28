import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select, MenuItem, Typography, Button } from '@mui/material'
import { useParams, Link } from 'react-router-dom'
import LeagueLadeboard from 'modules/SelectedLeagueView/components/LeagueLadeboard/LeagueLadeboard'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { fetchSelectedLeagueLadeboard } from 'shared/store/leagues/actions'
import { getSelectedLeagueLadeboard } from 'shared/store/leagues/selectors'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import {
  ContentWindow,
  ContentHeaderWrapper,
} from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'

export interface ITablePageView {
  selectedView: string
  changeViewFn: (value: string) => void
}

const TablePageView: React.FC<ITablePageView> = ({
  selectedView,
  changeViewFn,
}) => {
  const { leagueID } = useParams<{ leagueID?: string }>()
  const isDesktopScreen = useCheckDesktopScreen('sm')

  const dispatch = useDispatch()
  const leagueLadeboard = useSelector(
    getSelectedLeagueLadeboard
  ).map((team, index) => ({ ...team, position: index + 1 }))

  useEffect(() => {
    if (leagueID) {
      dispatch(fetchSelectedLeagueLadeboard({ leagueID: Number(leagueID) }))
    }
  }, [])

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
        <LeagueLadeboard leagueLadeboardData={leagueLadeboard} />
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
          Add result
        </Button>
        <Button
          component={Link}
          to="/leagues"
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
          Go back
        </Button>
      </ButtonsControlWrapper>
    </>
  )
}

export default TablePageView
