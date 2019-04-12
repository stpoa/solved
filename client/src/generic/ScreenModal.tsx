import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles'
import React, { FC } from 'react'

const Transition = (props: any) => {
  return <Slide direction="up" {...props} />
}

const ScreenModal: FC<ScreenModalProps> = ({
  open,
  handleClose,
  titleText,
  children,
}) => {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {titleText}
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  )
}

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
})

export default ScreenModal

export interface ScreenModalProps {
  open: boolean
  handleClose: () => void
  titleText: string
}
