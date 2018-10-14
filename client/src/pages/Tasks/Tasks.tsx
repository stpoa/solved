import { AppBar, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { ArrowBack } from '@material-ui/icons'
import React, { Component } from 'react'
import { tasks } from '~data'
import { TaskList } from '~generic'

class Tasks extends Component<TasksProps, TasksState> {
  public render () {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <AppBar position="sticky">
          <Toolbar disableGutters>
            <IconButton>
              <ArrowBack className={classes.backIcon} />
            </IconButton>
            <Typography className={classes.typography} align="center" variant="h6">Informatyka</Typography>
          </Toolbar>
        </AppBar>
        <div>
          <Tabs value={0} fullWidth indicatorColor="primary">
            <Tab label="In progress" />
            <Tab label="Added" />
            <Tab label="Solved" />
          </Tabs>
          <TaskList tasks={tasks} />
        </div>
      </div>
    )
  }
}

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

interface TasksProps extends WithStyles<typeof styles> { }
interface TasksState {
  showSubPage: boolean
}

export default withStyles(styles)(Tasks)
