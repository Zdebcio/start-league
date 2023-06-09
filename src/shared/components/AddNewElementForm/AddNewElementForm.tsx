import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Button, Typography, TextField } from '@mui/material'
import CompleteComponent from 'shared/components/CompleteComponent/CompleteComponent'
import { LoadingStatus } from 'shared/types'
import {
  FormContainer,
  TextFieldWrapper,
  ErrorMessage,
} from './AddNewElementForm.style'

export interface IAddNewElementForm {
  createStatus: LoadingStatus
  title: string
  placeholder?: string
  isError: boolean
  errorMessage?: string
  registerProp: UseFormRegisterReturn
  handleSubmitFn: (event: React.SyntheticEvent<Element, Event>) => void
  successfullyMessage: string
}

const AddNewElementForm: React.FC<IAddNewElementForm> = ({
  createStatus,
  title,
  placeholder = 'Type here...',
  isError = false,
  errorMessage,
  registerProp,
  handleSubmitFn,
  successfullyMessage,
}) => {
  return (
    <>
      {createStatus === LoadingStatus.Succeeded ? (
        <CompleteComponent text={successfullyMessage} />
      ) : (
        <>
          <Typography variant="h1" align="center">
            {title}
          </Typography>
          <FormContainer onSubmit={handleSubmitFn}>
            <TextFieldWrapper>
              <TextField
                placeholder={placeholder}
                variant="filled"
                size="small"
                type="text"
                fullWidth
                error={isError}
                InputProps={{
                  disableUnderline: true,
                  inputProps: {
                    style: { textAlign: 'center' },
                  },
                  ...registerProp,
                }}
              />
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </TextFieldWrapper>
            <Button
              variant="contained"
              disableTouchRipple
              size="small"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </FormContainer>
        </>
      )}
    </>
  )
}

export default AddNewElementForm
