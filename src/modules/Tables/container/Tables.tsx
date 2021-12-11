import { TextField, InputAdornment, Typography, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import {
  ContentWindow,
  TablesContainer,
  StyledSearchBar,
  StyledCreateButton,
} from './Tables.style'
import NoDataView from '../components/NoDataView/NoDataView'

const Tables = () => {
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
        <ContentWindow className="component-window">
          <NoDataView />
        </ContentWindow>
        <StyledCreateButton
          className="component-button"
          variant="contained"
          size="small"
          color="secondary"
        >
          Create new table
        </StyledCreateButton>
      </TablesContainer>
    </PageAfterLogin>
  )
}

export default Tables
