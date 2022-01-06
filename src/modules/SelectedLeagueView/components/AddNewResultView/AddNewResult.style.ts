import { styled } from '@mui/material'
import { colors } from 'config'

export const ContentWindow = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.components.secondary};
  border-radius: 0.3rem;
  padding: 2rem 4rem 4rem 4rem;
  width: 100%;
  margin-bottom: 4rem;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) => props.theme.breakpoints?.up('md')} {
    padding: 10rem;
    padding-top: 4rem;
  }
`

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > .MuiButton-containedSizeSmall {
    width: 100%;

    ${(props) => props.theme.breakpoints?.up('sm')} {
      max-width: 30rem;
    }
  }
`

export const ResultWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

export const CharBetweenResults = styled('span')`
  font-size: 3rem;
  margin: 0 1rem;
`

export const SingleTeamResult = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isReverse',
})<{ isReverse?: boolean }>(({ isReverse, theme }) => {
  return ` 
    display: flex;
    flex-direction: ${isReverse ? 'row-reverse' : 'row'};
    align-items: center;
    width: 100%;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    & > .MuiSelect-root {
        flex-grow: 1;
        margin-left: ${isReverse ? '2rem' : 0};
        margin-right: ${isReverse ? 0 : '2rem'};
    }

    & > .MuiTextField-root {
        flex-grow: 0;
        width: 5.2rem;

        & .MuiInputBase-sizeSmall {
            width: 5.2rem;
            height: 4.5rem;
        }

        & .MuiInputBase-inputSizeSmall {
            font-weight: 700;
        }
    }  

    ${theme.breakpoints?.up('sm')} {
        width: calc(50% - 2rem);

        &:not(:last-child) {
            margin-bottom: 0;
        } 
    
    }
  `
})

/* & > *:not(:last-child) {
    margin-bottom: 2rem;
  } */

/* ${(props) => props.theme.breakpoints?.up('md')} {
    padding: 10rem;
  } */
