import { createStyles, Grid, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { Task } from '~interfaces'
import TaskListElement from './TaskListElement'

class TaskList extends Component<TaskListProps, TaskListState> {
  public static defaultProps = {
    isEditable: false,
    isDeletable: false,
  }

  public state = {
    expandedDropdownId: null,
    expandedDropdownAnchorEl: null,
  }

  public render () {
    const { classes, tasks, isEditable, isDeletable } = this.props
    const { expandedDropdownId, expandedDropdownAnchorEl } = this.state
    return (
      <div className={classes.container}>
        <Grid className={classes.grid} container>
          {tasks.map((task, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} className={classes.gridItem}>
              <TaskListElement
                anchorEl={expandedDropdownAnchorEl}
                onExpandedMenuLeave={this.handleExpandedMenuLeave}
                onMoreButtonClick={this.handleMoreButtonClick}
                isEditable={isEditable}
                isDeletable={isDeletable}
                isMoreExpanded={task.id === expandedDropdownId}
                {...task}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }

  private handleExpandedMenuLeave = () =>
    this.state.expandedDropdownId
      ? this.setState({ expandedDropdownId: null, expandedDropdownAnchorEl: null })
      : null

  private handleMoreButtonClick = (id: number, e: Event) =>
    this.setState({ expandedDropdownId: id, expandedDropdownAnchorEl: e.currentTarget })
}

const styles: StyleRulesCallback = ({ spacing: { unit } }) => createStyles({
  container: {
    margin: 0,
    overflow: 'auto',
    width: '100%',
  },
  grid: {
    marginTop: unit,
    margin: 0,
    width: '100%',
  },
  gridItem: {
    padding: `${0}px ${unit}px ${unit}px ${unit}px`,
  },
})

interface TaskListProps extends WithStyles<typeof styles> {
  isEditable: boolean,
  isDeletable: boolean,
  tasks: Task[],
}

interface TaskListState {
  expandedDropdownId: number | null,
  expandedDropdownAnchorEl: EventTarget | null,
}

export default withStyles(styles)(TaskList)
