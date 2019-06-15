import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import React from 'react'

const InfoDialog = ({
  open,
  handleClose,
  text,
  title,
  confirmBtnName,
}: InfoDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          {confirmBtnName}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

interface InfoDialogProps {
  open: boolean
  handleClose: () => void
  text: string
  title: string
  confirmBtnName: string
}

export default InfoDialog
