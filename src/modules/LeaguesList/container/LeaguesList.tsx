import React, { useEffect, useState } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, InputAdornment, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import NoDataView from 'shared/components/NoDataView/NoDataView'
import ListOfTables from 'modules/LeaguesList/components/ListOfTables/ListOfTables'
import CustomDialog from 'shared/components/CustomDialog/CustomDialog'
import {
  fetchAllLeaguesList,
  removeLeague,
  resetRemoveLeagueStatus,
} from 'shared/store/leagues/actions'
import {
  getRemoveLeagueStatus,
  getUserLeaguesList,
} from 'shared/store/leagues/selectors'
import useCheckDesktopScreen from 'shared/hooks/useCheckDesktopScreen'
import { IUserLeaguesList, LoadingStatus } from 'shared/types'
import {
  SearchContainer,
  ContentWindow,
  StyledSearchBar,
  useCreateButtonStyles,
} from './LeaguesList.style'

const LeaguesList = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const isDesktopView = useCheckDesktopScreen()
  const userLeagueList = useSelector(getUserLeaguesList)
  const removeLeagueStatus = useSelector(getRemoveLeagueStatus)
  const [leagueToRemove, setLeagueToRemove] = useState<number | null>(null)
  const [searchLeagueValue, setSearchLeagueValue] = useState('')
  const [filteredLeaguesList, setFilteredLeaguesList] = useState<
    IUserLeaguesList[]
  >([])

  useEffect(() => {
    dispatch(fetchAllLeaguesList())
  }, [])

  useEffect(() => {
    if (leagueToRemove === null) {
      dispatch(resetRemoveLeagueStatus())
    }
  }, [leagueToRemove])

  const handleSetLeagueToRemoveClick = (leagueID: number) => {
    setLeagueToRemove(leagueID)
  }

  const handleRemoveLeague = () => {
    if (leagueToRemove) {
      dispatch(removeLeague({ leagueID: leagueToRemove })).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          dispatch(fetchAllLeaguesList())
          setLeagueToRemove(null)
        }
      })
    }
  }

  useEffect(() => {
    const filteredList =
      userLeagueList?.filter((league) =>
        league.league_name
          .toLowerCase()
          .includes(searchLeagueValue.toLowerCase())
      ) ?? []

    setFilteredLeaguesList(filteredList)
  }, [userLeagueList, searchLeagueValue])

  return (
    <PageAfterLogin>
      <SearchContainer>
        <StyledSearchBar
          placeholder="Search of a league table"
          variant="filled"
          size="small"
          type="text"
          fullWidth
          value={searchLeagueValue}
          onChange={(event) => setSearchLeagueValue(event.target.value)}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
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
          <>
            {filteredLeaguesList.length > 0 ? (
              <ListOfTables
                tablesList={filteredLeaguesList}
                handleRemoveFn={handleSetLeagueToRemoveClick}
              />
            ) : (
              <NoDataView primaryText="No results found." />
            )}
          </>
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
        handleOnAgreeClick={handleRemoveLeague}
        isLoading={removeLeagueStatus === LoadingStatus.Pending}
        isError={removeLeagueStatus === LoadingStatus.Failed}
      />
    </PageAfterLogin>
  )
}

export default LeaguesList
