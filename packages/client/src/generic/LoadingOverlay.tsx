import { StyleRulesCallback } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import React, { FC } from 'react'

const LoadingOverlay: FC<LoadingOverlayProps> = ({
  loading,
  error,
  classes,
  children,
}) => {
  if (error) {
    return <div>Error</div>
  }

  return (
    <>
      {loading ? (
        <div className={classes.container}>
          <CircularProgress
            size={100}
            className={classes.progress}
            color="secondary"
          />
        </div>
      ) : (
        children
      )}
    </>
  )
}

const styles: StyleRulesCallback = _ => ({
  container: {
    display: 'grid',
    height: 'calc(100% - 112px)',
    width: '100vw',
  },
  progress: {
    margin: 'auto',
  },
})

interface LoadingOverlayProps extends WithStyles {
  loading: boolean
  error?: Error
}

export default withStyles(styles)(LoadingOverlay)
