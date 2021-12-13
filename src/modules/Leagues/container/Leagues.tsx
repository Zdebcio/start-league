import { Link } from 'react-router-dom'
import { Button, InputAdornment, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import {
  ContentWindow,
  LeaguesContainer,
  StyledSearchBar,
  useCreateButtonStyles,
} from './Leagues.style'
import NoDataView from '../components/NoDataView/NoDataView'

const Leagues = () => {
  const theme = useTheme()

  return (
    <PageAfterLogin>
      <LeaguesContainer>
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
        <ContentWindow>
          <NoDataView />
        </ContentWindow>
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
      </LeaguesContainer>
    </PageAfterLogin>
  )
}

export default Leagues
