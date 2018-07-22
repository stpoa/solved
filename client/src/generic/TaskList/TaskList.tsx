import { List, ListItem, WithStyles, withStyles } from '@material-ui/core'

import React from 'react'
import { ITaskListElement } from '~interfaces'
import TaskListElement from './TaskListElement'

const styles = {};

interface TaskListProps extends WithStyles<typeof styles> {
  tasks: ITaskListElement[]
}


const TaskList = ({ tasks }: TaskListProps) => (
  <List>
    {tasks.map((task, i) => (
      <ListItem button key={i} onClick={console.log.bind(console, task)}><TaskListElement {...task} /></ListItem>
    ))}
  </List>
)

export default withStyles(styles)(TaskList)
