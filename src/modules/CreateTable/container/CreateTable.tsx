import { useHistory, useLocation } from 'react-router-dom'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import {
  ContentWindow,
  TablesContainer,
  StyledSearchBar,
  StyledCreateButton,
} from './CreateTable.style'
import NoDataView from '../components/NoDataView/NoDataView'

const CreateTable = () => {
  const location = useLocation()

  console.log(location)
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

export default CreateTable
