import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, InputAdornment, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import NoDataView from 'shared/components/NoDataView/NoDataView'
import ListOfTables from 'modules/LeaguesList/components/ListOfTables/ListOfTables'
import CustomDialog from 'shared/components/CustomDialog/CustomDialog'
import { fetchAllLeaguesList, removeLeague } from 'shared/store/leagues/actions'
import { getUserLeaguesList } from 'shared/store/leagues/selectors'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import {
  SearchContainer,
  ContentWindow,
  StyledSearchBar,
  useCreateButtonStyles,
} from './LeaguesList.style'

const LeaguesList = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const isDesktopView = useCheckDesktopScreen()
  const userLeagueList = useSelector(getUserLeaguesList)
  const [leagueToRemove, setLeagueToRemove] = useState<number | null>(null)

  useEffect(() => {
    dispatch(fetchAllLeaguesList())
  }, [])

  const handleSetLeagueToRemoveClick = (leagueID: number) => {
    setLeagueToRemove(leagueID)
  }

  return (
    <PageAfterLogin>
      <SearchContainer>
        <StyledSearchBar
          placeholder="Search of a league table"
          variant="filled"
          size="small"
          type="text"
          fullWidth
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {isDesktopView && (
          <Button
            component={Link}
            to="/leagues/create"
            variant="contained"
            size="small"
            color="secondary"
            disableTouchRipple
          >
            Create new table
          </Button>
        )}
      </SearchContainer>

      <ContentWindow>
        {userLeagueList && userLeagueList.length ? (
          <ListOfTables
            tablesList={userLeagueList}
            handleRemoveFn={handleSetLeagueToRemoveClick}
          />
        ) : (
          <NoDataView
            primaryText="You didn't add any tables yet."
            secondaryText="Create new table to continue."
          />
        )}
      </ContentWindow>
      {!isDesktopView && (
        <Button
          component={Link}
          to="/leagues/create"
          variant="contained"
          size="small"
          color="secondary"
          disableTouchRipple
          sx={useCreateButtonStyles(theme)}
        >
          Create new table
        </Button>
      )}
      <CustomDialog
        isWarning
        title="Are you sure you want to continue removing this league?"
        content="All datas (teams/results) connected with this league will be also removed."
        isOpen={typeof leagueToRemove === 'number'}
        handleOnClose={() => setLeagueToRemove(null)}
        handleOnDisagreeClick={() => setLeagueToRemove(null)}
        handleOnAgreeClick={() =>
          leagueToRemove && dispatch(removeLeague({ leagueID: leagueToRemove }))
        }
      />
    </PageAfterLogin>
  )
}

export default LeaguesList
