import { createStyles, Grid, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'

import React from 'react'
import { ITaskListElement } from '~interfaces'
import TaskListElement from './TaskListElement'

const styles: StyleRulesCallback = () => createStyles({
  container: {
    height: '100%',
    margin: 0,
    overflow: 'auto'
  },
  grid: {
    height: 0,
    margin: 0,
    width: '100%'
  },
  gridItem: {
    // height: '250px'
  }
})

interface TaskListProps extends WithStyles<typeof styles> {
  tasks: ITaskListElement[]
}

const TaskList = ({ classes: { container, grid, gridItem }, tasks }: TaskListProps) => (
  <div className={container}>
    <Grid classes={{ container: grid }} spacing={8} container>
    {tasks.map((task, i) => (
      <Grid
        className={gridItem}
        item
        xs={12}
        sm={6}
        md={3}
        key={i}
        onClick={console.log.bind(console, task)}
      >
        <TaskListElement {...task} />
      </Grid>
    ))}
    </Grid>
  </div>
)

export default withStyles(styles)(TaskList)
