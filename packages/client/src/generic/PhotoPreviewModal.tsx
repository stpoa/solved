import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import { StyleRules } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles'
import React, { createRef, FC } from 'react'
import QuickPinchZoom, { make3dTransformValue } from 'react-quick-pinch-zoom'

const Transition = (props: any) => {
  return <Slide direction="up" {...props} />
}

const PhotoPreviewModal: FC<PhotoPreviewModalProps> = ({
  open,
  handleClose,
  url,
}) => {
  const imgRef: React.RefObject<HTMLImageElement> = createRef()

  const handleZoomUpdate = ({
    x,
    y,
    scale,
  }: {
    x: string
    y: string
    scale: string
  }) => {
    const { current: img } = imgRef
    const value = make3dTransformValue({ x, y, scale })
    img && img.style.setProperty('transform', value)
  }

  const classes = useStyles()

  const paperProps = { className: classes.container }

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={paperProps}
      >
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Preview
            </Typography>
          </Toolbar>
        </AppBar>
        <QuickPinchZoom onUpdate={handleZoomUpdate}>
          <img ref={imgRef} src={url} />
        </QuickPinchZoom>
      </Dialog>
    </div>
  )
}

const styles: StyleRules = {
  appBar: {
    position: 'relative',
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: 'black',
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
  closeButton: {
    position: 'absolute',
  },
}

const useStyles = makeStyles(styles)

export default PhotoPreviewModal

export interface PhotoPreviewModalProps {
  open: boolean
  handleClose: () => void
  url: string
}
