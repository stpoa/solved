import { Card } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import { StyleRules } from '@material-ui/core/styles'
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
        <Card className={classes.card}>{children}</Card>
      </Dialog>
    </div>
  )
}

const styles: StyleRules = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  card: {
    marginTop: '1.5rem',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  cardContent: {
    padding: 0,
  },
}

const useStyles = makeStyles(styles)

export default ScreenModal

export interface ScreenModalProps {
  open: boolean
  handleClose: () => void
  titleText: string
}
