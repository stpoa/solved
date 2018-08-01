import { Fade, Grid } from '@material-ui/core'
import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import { PhotoCamera } from '@material-ui/icons'
import React, { Component, createRef, MouseEventHandler, RefObject } from 'react'

const styles: StyleRules = createStyles({
  container: {
    position: 'relative'
  },
  hidden: {
    display: 'none'
  },
  icon: {
    fontSize: 50,
    position: 'absolute'
  },
  iconContainer: {
    bottom: 70,
    cursor: 'pointer',
    position: 'absolute'
  },
  photo: {
    backgroundColor: 'gray',
    height: '100%',
    position: 'absolute',
    width: '100%'
  }
})

export interface CapturePhotoProps extends WithStyles<typeof styles> {
  imgSrc: string,
  onCapture: (image: string) => void
}

class CapturePhoto extends Component<CapturePhotoProps> {
  private canvas: RefObject<HTMLCanvasElement>
  private video: RefObject<HTMLVideoElement>

  constructor (props: CapturePhotoProps) {
    super(props)

    this.video = createRef()
    this.canvas = createRef()
  }

  public async componentDidMount () {
    if (navigator.getUserMedia && this.video.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user'
          }
        })

        this.video.current.srcObject = stream
      } catch (e) { return }
    }
  }

  public render () {
    const { classes } = this.props
    const photoAdded = !!this.props.imgSrc

    return (
      <Grid className={classes.container}>
        <video
          autoPlay
          className={`${classes.photo} ${photoAdded ? classes.hidden : ''}`}
          ref={this.video}
        />

      <Fade in={photoAdded}>
        <img
          src={this.props.imgSrc}
          className={`${classes.photo} ${photoAdded ? '' : classes.hidden}`}
        />
      </Fade>

      <canvas
        className={classes.hidden}
        ref={this.canvas}
      />

    { !photoAdded &&
    <div className={classes.iconContainer}>
      <PhotoCamera className={classes.icon} onClick={this.onClick} />
    </div>
    }
  </Grid>
    )
  }

  private onClick: MouseEventHandler<SVGElement> = () => {
    const videoElement = this.video.current
    const canvasElement = this.canvas.current

    if (videoElement && canvasElement) {
      const context = canvasElement.getContext('2d')

      if (context) {
        context.drawImage(videoElement, 0, 0)

        const imgSrc = canvasElement.toDataURL('image/png')

        this.props.onCapture(imgSrc)
      }
    }
  }

}

export default withStyles(styles)(CapturePhoto)