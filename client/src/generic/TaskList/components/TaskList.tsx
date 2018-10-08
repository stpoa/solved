import { createStyles, Grid, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import { Task } from '~interfaces'
import TaskListElement from './TaskListElement'

const TaskList = ({ classes, tasks }: TaskListProps) => (
  <div className={classes.container}>
    <Grid className={classes.grid} container>
    {tasks.map((task, i) => (
      <Grid item xs={12} sm={6} md={3} key={i} className={classes.gridItem}>
        <TaskListElement {...task} />
      </Grid>
    ))}
    </Grid>
  </div>
)

const styles: StyleRulesCallback = ({ spacing: { unit } }) => createStyles({
  container: {
    height: '100%',
    margin: 0,
    overflow: 'auto',
  },
  grid: {
    marginTop: unit,
    height: 0,
    margin: 0,
    width: '100%',
  },
  gridItem: {
    padding: `${0}px ${unit}px ${unit}px ${unit}px`,
  },
})

interface TaskListProps extends WithStyles<typeof styles> {
  tasks: Task[]
}

export default withStyles(styles)(TaskList)
