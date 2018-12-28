import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons'
import React, { FunctionComponent } from 'react'

const PageHeader: FunctionComponent<PageHeaderProps> = ({ classes, title }) => (
  <AppBar position="sticky">
    <Toolbar disableGutters>
      <IconButton>
        <ArrowBack className={classes.backIcon} />
      </IconButton>
      <Typography className={classes.typography} align="center" variant="h6">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
)

const styles = createStyles({
  container: {
    display: 'grid',
    gridTemplateRows: 'max-content',
  },
  backIcon: {
    fontSize: 32,
  },
  typography: {
    position: 'absolute',
    width: '100%',
  },
})

interface PageHeaderProps extends WithStyles<typeof styles> {
  title: string
}

export default withStyles(styles)(PageHeader)
