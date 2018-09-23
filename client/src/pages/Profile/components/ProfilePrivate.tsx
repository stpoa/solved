import {
  List,
  ListItem,
  ListSubheader,
  StyleRulesCallback,
  WithStyles,
  withStyles
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import SettingsIcon from '@material-ui/icons/Settings'
import ReviewsIcon from '@material-ui/icons/Spellcheck'
import UpdateIcon from '@material-ui/icons/Update'
import React, { SFC } from 'react'
import BalanceListElement, { BalanceListElementProps } from './BalanceListElement'
import ProfileListButton from './ProfileListButton'

const handleTasksInProgressClick = () => window.console.log('handleTasksInProgressClick')
const TasksInProgressButton = ({ className }: { className: string }) => (
  <ProfileListButton
    className={className}
    handleListElementClick={handleTasksInProgressClick}
    Icon={UpdateIcon}
    text="Tasks in progress"
  />
)

const handleFinishedTasksButton = () => window.console.log('handleFinishedTasksClick')
const FinishedTasksButton = ({ className }: { className: string }) => (
  <ProfileListButton
    className={className}
    handleListElementClick={handleFinishedTasksButton}
    Icon={InboxIcon}
    text="Finished tasks"
  />
)

const handleReviewsButton = () => window.console.log('handleReviewsClick')
const ReviewsButton = ({ className }: ClassNameProps) => (
  <ProfileListButton
    className={className}
    handleListElementClick={handleReviewsButton}
    Icon={ReviewsIcon}
    text="Reviews"
  />
)

const handleSettingsButton = () => window.console.log('handleSettingsClick')
const SettingsButton = ({ className }: ClassNameProps) => (
  <ProfileListButton
    className={className}
    handleListElementClick={handleSettingsButton}
    Icon={SettingsIcon}
    text="Settings"
  />
)

const ProfilePrivate: SFC<ProfilePrivatePropsStyled> = ({ balance, classes }) => (
  <div className={classes.root}>
    <List subheader={<ListSubheader>Profile</ListSubheader>}>
      <BalanceListElement className={classes.balance} balance={balance}/>
      <ListItem />
      <TasksInProgressButton className={classes.tasksInProgressButton} />
      <FinishedTasksButton className={classes.finishedTasksButton} />
      <ReviewsButton className={classes.reviewsButton} />
      <ListItem />
      <SettingsButton className={classes.settingsButton} />
    </List>
  </div>
)

interface ClassNameProps {
  className: string
}

const styles: StyleRulesCallback = (theme) => ({
  balance: {
    fontSize: '10em'
  },
  finishedTasksButton: {},
  root: {
    margin: theme.spacing.unit
  },
  settingsButton: {},
  tasksInProgressButton: {}
})

export interface ProfilePrivateProps extends BalanceListElementProps {}
interface ProfilePrivatePropsStyled extends ProfilePrivateProps, WithStyles<typeof styles> {}

export default withStyles(styles)(ProfilePrivate)
