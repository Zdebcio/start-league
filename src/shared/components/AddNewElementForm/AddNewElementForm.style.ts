import { styled } from '@mui/material'

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > button {
    width: 80%;
  }

  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }

  ${(props) => props.theme.breakpoints?.up('sm')} {
    width: 60%;
    max-width: 50rem;

    & > button {
      width: 50%;
    }
  }
`
