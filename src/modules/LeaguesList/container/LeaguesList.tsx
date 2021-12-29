import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, InputAdornment, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import NoDataView from 'shared/components/NoDataView/NoDataView'
import ListOfTables from 'modules/LeaguesList/components/ListOfTables/ListOfTables'
import { fetchAllLeaguesList } from 'shared/store/leagues/actions'
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

  useEffect(() => {
    dispatch(fetchAllLeaguesList())
  }, [])

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
          <ListOfTables tablesList={userLeagueList} />
        ) : (
          <NoDataView
            primaryText="You didn’t add any tables yet."
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
    </PageAfterLogin>
  )
}

export default LeaguesList
