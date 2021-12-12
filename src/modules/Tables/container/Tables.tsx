import { Link } from 'react-router-dom'
import { Button, InputAdornment, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import {
  ContentWindow,
  TablesContainer,
  StyledSearchBar,
  useCreateButtonStyles,
} from './Tables.style'
import NoDataView from '../components/NoDataView/NoDataView'

const Tables = () => {
  const theme = useTheme()

  return (
    <PageAfterLogin>
      <TablesContainer>
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
          to="/tables/create"
          variant="contained"
          size="small"
          color="secondary"
          disableTouchRipple
          sx={useCreateButtonStyles(theme)}
        >
          Create new table
        </Button>
      </TablesContainer>
    </PageAfterLogin>
  )
}

export default Tables
