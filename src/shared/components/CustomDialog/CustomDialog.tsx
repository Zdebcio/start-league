import { forwardRef } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from '@mui/material'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { TransitionProps } from '@mui/material/transitions'
import { Triangle } from 'react-loader-spinner'
import { colors } from 'config'
import {
  DialogStateErrorMessage,
  DialogStateInfoWrapper,
  WarningLabel,
} from './CustomDialog.style'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export interface ICustomDialog {
  title?: string
  content?: string
  isWarning?: boolean
  isOpen: boolean
  handleOnClose: () => void
  handleOnAgreeClick: () => void
  handleOnDisagreeClick: () => void
  isLoading?: boolean
  isError?: boolean
  customErrorMessage?: string
}

const CustomDialog: React.FC<ICustomDialog> = ({
  title,
  content,
  isOpen,
  isWarning = false,
  handleOnClose,
  handleOnDisagreeClick,
  handleOnAgreeClick,
  isLoading = true,
  isError = true,
  customErrorMessage = 'Something went wrong',
}) => {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleOnClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {isWarning && <WarningLabel>Warning</WarningLabel>}
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {content && (
          <DialogContentText id="alert-dialog-slide-description">
            {content}
          </DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <DialogStateInfoWrapper>
          {isLoading && (
            <Triangle
              color={colors.typography.secondary}
              width="2.5rem"
              height="2.5rem"
              wrapperClass="rotate"
            />
          )}

          {isError && (
            <DialogStateErrorMessage>
              {customErrorMessage}
            </DialogStateErrorMessage>
          )}
        </DialogStateInfoWrapper>
        <Button
          variant="text"
          size="small"
          disableTouchRipple
          color="tertiary"
          onClick={handleOnDisagreeClick}
          disabled={isLoading}
        >
          Disagree
        </Button>
        <Button
          variant="text"
          size="small"
          disableTouchRipple
          color="tertiary"
          onClick={handleOnAgreeClick}
          disabled={isLoading}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
