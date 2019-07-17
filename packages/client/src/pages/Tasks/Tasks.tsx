import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import {
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { taskCategories } from '@stpoa/models/data'
import React, { ChangeEvent, Component, FunctionComponent } from 'react'
import { NavigationBar, TaskList } from '~generic'
import { TaskListTask } from '~generic/TaskList/components/TaskListElement'
import { pageContentNotScrollableWithNavigationBar } from '~pages/styles'

const ExpansionList: FunctionComponent<ExpansionListProps> = ({
  classes,
  taskGroup,
  isEditable,
  isDeletable,
}) => {
  const panelClass = { content: classes.expansionPanelSummary }

  return (
    <div className={classes.expansionList}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          classes={panelClass}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.expansionTitle} color="secondary">
            Moje zadania
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <TaskList
            isEditable={isEditable}
            isDeletable={isDeletable}
            tasks={taskGroup.myTasks}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          classes={panelClass}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.expansionTitle} color="secondary">
            Rozwiązywane zadania
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <TaskList isDeletable={isDeletable} tasks={taskGroup.someoneTasks} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

class Tasks extends Component<TasksProps, TasksState> {
  public state = {
    selectedTabIndex: 0,
  }

  public render() {
    const { classes } = this.props
    const { selectedTabIndex } = this.state
    return (
      <>
        <div className={classes.container}>
          <Tabs
            value={selectedTabIndex}
            onChange={this.onTabChange}
            fullWidth
            textColor="secondary"
          >
            <Tab className={classes.tab} label="Oczekujące" />
            <Tab className={classes.tab} label="Trwające" />
            <Tab className={classes.tab} label="Zakończone" />
          </Tabs>
          {selectedTabIndex === 0 && (
            <TaskList
              isEditable
              isDeletable
              tasks={taskCategories.waitingTasks}
            />
          )}
          {selectedTabIndex === 1 && (
            <ExpansionList
              isEditable
              classes={classes}
              taskGroup={taskCategories.ongoingTasks}
            />
          )}
          {selectedTabIndex === 2 && (
            <ExpansionList
              isDeletable
              classes={classes}
              taskGroup={taskCategories.finishedTasks}
            />
          )}
        </div>
        <NavigationBar />
      </>
    )
  }

  private onTabChange = (_: ChangeEvent<{}>, value: number) =>
    this.setState({ selectedTabIndex: value })
}

const styles: StyleRulesCallback = theme => ({
  container: {
    ...pageContentNotScrollableWithNavigationBar(theme),
    overflowY: 'auto',
    overflowX: 'hidden',
    overflowScrolling: 'touch',
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
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  expansionTitle: {
    fontSize: '2rem',
  },
})

interface TasksProps extends WithStyles<typeof styles> {}
interface TasksState {
  selectedTabIndex: number
}
interface ExpansionListProps extends WithStyles<typeof styles> {
  taskGroup: {
    myTasks: TaskListTask[]
    someoneTasks: TaskListTask[]
  }
  isEditable?: boolean
  isDeletable?: boolean
}

export default withStyles(styles)(Tasks)
