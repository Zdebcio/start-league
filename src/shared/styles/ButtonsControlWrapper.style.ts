import { styled } from '@mui/material'

export const ButtonsControlWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${(props) => props.theme.breakpoints?.up('sm')} {
    flex-direction: row;
    & > * {
      width: 33.3333%;
      maxwidth: 30rem;

      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
  }
`
