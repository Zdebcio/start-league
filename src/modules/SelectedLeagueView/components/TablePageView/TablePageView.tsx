import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Select, MenuItem, Typography, Button } from '@mui/material'
import LeagueLadeboard from 'shared/components/LeagueLadeboard/LeagueLadeboard'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { fetchSelectedLeagueLadeboard } from 'shared/store/leagues/actions'
import { getSelectedLeagueLadeboard } from 'shared/store/leagues/selectors'
import { ButtonsControlWrapper } from 'shared/styles/ButtonsControlWrapper.style'
import {
  ContentWindow,
  ContentHeaderWrapper,
  TableInfoMessage,
} from 'modules/SelectedLeagueView/container/SelectedLeagueView.style'
import NoDataView from 'shared/components/NoDataView/NoDataView'

export interface ITablePageView {
  selectedView: string
  changeViewFn: (value: string) => void
  leagueID: number
  leagueName: string
}

const TablePageView: React.FC<ITablePageView> = ({
  selectedView,
  changeViewFn,
  leagueID,
  leagueName,
}) => {
  const isDesktopScreen = useCheckDesktopScreen('sm')

  const dispatch = useDispatch()
  const leagueLadeboard = useSelector(
    getSelectedLeagueLadeboard
  ).map((team, index) => ({ ...team, position: index + 1 }))

  useEffect(() => {
    dispatch(fetchSelectedLeagueLadeboard({ leagueID }))
  }, [])

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
        {leagueLadeboard.length > 0 ? (
          <>
            <LeagueLadeboard leagueLadeboardData={leagueLadeboard} />
            <TableInfoMessage>
              * Teams without results are not displayed in the league table.
            </TableInfoMessage>
          </>
        ) : (
          <NoDataView
            primaryText="Your league is empty."
            secondaryText="Add teams to the league to unlock table view."
          />
        )}
      </ContentWindow>
      <ButtonsControlWrapper>
        <Button
          component={Link}
          to={`/leagues/${leagueID}/results/add`}
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

export default TablePageView
