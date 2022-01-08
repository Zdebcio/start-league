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
import { TransitionProps } from '@mui/material/transitions'
import { WarningLabel } from './CustomDialog.style'

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
}

const CustomDialog: React.FC<ICustomDialog> = ({
  title,
  content,
  isOpen,
  isWarning = false,
  handleOnClose,
  handleOnDisagreeClick,
  handleOnAgreeClick,
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
        <Button
          variant="text"
          size="small"
          disableTouchRipple
          color="tertiary"
          onClick={handleOnDisagreeClick}
        >
          Disagree
        </Button>
        <Button
          variant="text"
          size="small"
          disableTouchRipple
          color="tertiary"
          onClick={handleOnAgreeClick}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomDialog
