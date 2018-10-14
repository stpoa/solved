import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Tab, Tabs, Typography } from '@material-ui/core'
import { createStyles, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React, { ChangeEvent, Component, SFC } from 'react'
import { taskCategories } from '~data'
import { TaskList } from '~generic'
import { Task } from '~interfaces'

const ExpasionList: SFC<ExpansionListProps> = ({ classes, taskGroup }) => (
  <div className={classes.expansionList}>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary classes={{ content: classes.expansionPanelSummary }} expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.expansionTitle} color="secondary">My tasks</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        <TaskList tasks={taskGroup.myTasks} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary classes={{ content: classes.expansionPanelSummary }} expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.expansionTitle} color="secondary">Someone's tasks</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionPanelDetails}>
        <TaskList tasks={taskGroup.someoneTasks} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
)

class Tasks extends Component<TasksProps, TasksState> {
  public state = {
    selectedTabIndex: 0,
  }

  public render () {
    const { classes } = this.props
    const { selectedTabIndex } = this.state
    return (
      <div className={classes.container}>
        <Tabs
          value={selectedTabIndex}
          onChange={this.onTabChange}
          fullWidth
          textColor="secondary"
        >
          <Tab className={classes.tab} label="Waiting" />
          <Tab className={classes.tab} label="Ongoing" />
          <Tab className={classes.tab} label="Finished" />
        </Tabs>
        {selectedTabIndex === 0 && (
          <TaskList tasks={taskCategories.waitingTasks} />
        )}
        {selectedTabIndex === 1 && (
          <ExpasionList classes={classes} taskGroup={taskCategories.ongoingTasks} />
        )}
        {selectedTabIndex === 2 && (
          <ExpasionList classes={classes} taskGroup={taskCategories.finishedTasks} />
        )}
      </div>
    )
  }

  private onTabChange = (_: ChangeEvent<{}>, value: number) =>
    this.setState({ selectedTabIndex: value })
}

const styles: StyleRulesCallback = ({ spacing: { unit } }) => createStyles({
  container: {
    overflow: 'scroll',
  },
  tab: {
    textTransform: 'none',
  },
  expansionPanelDetails: {
    padding: 0,
  },
  expansionPanelSummary: {
    justifyContent: 'center',
  },
  expansionList: {
    marginTop: unit,
    marginBottom: unit,
  },
  expansionTitle: {
    fontSize: '2rem',
  },
})

interface TasksProps extends WithStyles<typeof styles> { }
interface TasksState {
  selectedTabIndex: number
}
interface ExpansionListProps extends WithStyles<typeof styles> {
  taskGroup: {
    myTasks: Task[],
    someoneTasks: Task[],
  }
}

export default withStyles(styles)(Tasks)
