import { Link } from 'react-router-dom'
import { Button, Typography, TextField } from '@mui/material'
import PageAfterLogin from 'shared/layout/PageAfterLogin/PageAfterLogin'
import {
  ContentWindow,
  CreateTableForm,
  CreateTableContainer,
  ButtonsControlWrapper,
} from './CreateTable.style'

const CreateTable = () => {
  return (
    <PageAfterLogin>
      <CreateTableContainer>
        <ContentWindow>
          <Typography variant="h1" align="center">
            Insert your league name:
          </Typography>
          <CreateTableForm>
            <TextField
              placeholder="Type here..."
              variant="filled"
              size="small"
              type="text"
              fullWidth
              InputProps={{
                disableUnderline: true,
                inputProps: {
                  style: { textAlign: 'center' },
                },
              }}
            />
            <Button
              variant="contained"
              disableTouchRipple
              size="small"
              color="primary"
            >
              Submit
            </Button>
          </CreateTableForm>
        </ContentWindow>
        <ButtonsControlWrapper>
          <Button
            component={Link}
            to="/tables"
            variant="contained"
            disableTouchRipple
            size="small"
            color="tertiary"
          >
            Go back
          </Button>
        </ButtonsControlWrapper>
      </CreateTableContainer>
    </PageAfterLogin>
  )
}

export default CreateTable
