import { AppBar, IconButton, StyleRulesCallback, Toolbar, Typography } from '@material-ui/core'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import { ArrowBackIos } from '@material-ui/icons'
import React, { SFC } from 'react'

const PageHeader: SFC<PageHeaderProps> = ({ classes, title }) => (
  <AppBar position="sticky">
    <Toolbar disableGutters variant={'dense'} >
      <IconButton>
        <ArrowBackIos className={classes.backIcon} />
      </IconButton>
      <Typography className={classes.typography} align="center" variant="h6">{title}</Typography>
    </Toolbar>
  </AppBar>
)

const styles: StyleRulesCallback = theme => ({
  container: {
    display: 'grid',
    gridTemplateRows: 'max-content',
  },
  backIcon: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.fontSize * 1.5,
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
