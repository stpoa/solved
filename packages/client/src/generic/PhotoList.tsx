import { StyleRulesCallback, WithStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React from 'react'

const PhotoList = ({ photos, classes }: PhotoListProps) => (
  <div className={classes.container}>
    <div className={classes.photoList}>
      {photos.map((photo, i) => (
        <img className={classes.photo} key={i} src={photo} />
      ))}
    </div>
  </div>
)

const styles: StyleRulesCallback = _ => ({
  container: {
    overflowX: 'auto',
    overflowY: 'hidden',
    overflowScrolling: 'touch',
  },
  photoList: {
    display: 'inline-flex',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  photo: {
    maxHeight: '10rem',
    margin: '1rem',
  },
})

interface PhotoListProps extends WithStyles<typeof styles> {
  photos: string[]
}

export default withStyles(styles)(PhotoList)
