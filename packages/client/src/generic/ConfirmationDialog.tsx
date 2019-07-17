import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import React from 'react'

const Transition = (props: {}) => <Slide direction="up" {...props} />

const ConfirmationDialog = ({
  open,
  handleConfirm,
  handleClose,
  handleReject,
  titleText,
  contentText,
  confirmText,
  rejectText,
}: ConfirmationDialogProps) => {
  const rejectTxt = rejectText || 'Anuluj'
  const confirmTxt = confirmText || 'Potwirdź'
  const contentTxt =
    contentText ||
    `Jeżeli masz pewność co do tej akcji naciśnij "${confirmTxt}", w innym wypadku wybierz "${rejectTxt}"`

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {titleText || 'Jesteś pewien?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {contentTxt}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleReject || handleClose} color="secondary">
          {rejectText || 'Anuluj'}
        </Button>
        <Button onClick={handleConfirm} color="secondary">
          {confirmText || 'Potwierdź'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationDialog

export interface ConfirmationDialogProps {
  open: boolean
  handleConfirm: () => void
  handleReject?: () => void
  handleClose: () => void
  titleText?: string
  contentText?: string
  confirmText?: string
  rejectText?: string
}
