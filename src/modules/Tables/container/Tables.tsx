import { TextField, InputAdornment, Typography, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ContentWindow, TablesContainer } from './Tables.style'
import NoDataView from '../components/NoDataView/NoDataView'

const Tables = () => {
  return (
    <TablesContainer>
      <TextField
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
      <Button variant="contained" size="small" color="secondary">
        Create new table
      </Button>
    </TablesContainer>
  )
}

export default Tables
