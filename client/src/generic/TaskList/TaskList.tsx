import { createStyles, Grid, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import { Task } from '~interfaces'
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
  tasks: Task[]
}

const TaskList = ({ classes, tasks }: TaskListProps) => (
  <div className={classes.container}>
    <Grid classes={{ container: classes.grid }} spacing={8} container>
    {tasks.map((task, i) => (
      <Grid
        className={classes.gridItem}
        item
        xs={12}
        sm={6}
        md={3}
        key={i}
      >
        <TaskListElement {...task} />
      </Grid>
    ))}
    </Grid>
  </div>
)

export default withStyles(styles)(TaskList)
