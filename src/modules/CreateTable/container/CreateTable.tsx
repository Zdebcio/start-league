import { Button, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import { ContentWindow, CreateTableContainer } from './CreateTable.style'

const CreateTable = () => {
  const location = useLocation()

  console.log(location)
  return (
    <PageAfterLogin>
      <CreateTableContainer>
        <ContentWindow className="component-window">
          <Typography variant="h1">Insert your league name:</Typography>
        </ContentWindow>
        <Button
          className="component-button"
          variant="contained"
          size="small"
          color="tertiary"
        >
          Create new table
        </Button>
      </CreateTableContainer>
    </PageAfterLogin>
  )
}

export default CreateTable
