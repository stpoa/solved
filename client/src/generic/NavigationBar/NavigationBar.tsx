import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { AddCircle, Help, Home, Person } from '@material-ui/icons'
import React, { SFC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuth, WithAuth } from '~auth'
import { Tasks } from '~icons'
import WrappedLink from '../WrappedLink'
import HighlightIcon from './HighlightIcon'

const menuLinks = {
  addTask: {
    displayName: 'Add task',
    path: '/add-task'
  },
  home: {
    displayName: 'Home',
    path: '/'
  },
  profile: {
    displayName: 'Profile',
    path: '/profile'
  },
  something: {
    displayName: 'Something',
    path: '/something'
  },
  tasks: {
    displayName: 'Tasks',
    path: '/tasks'
  }
}

const isSelected = (expectedPath: string, actualPath: string) =>
  expectedPath === actualPath

const NavigationBar: SFC<NavigationBarProps> = ({ classes }) => {
  const { addTask, tasks, profile, something, home } = menuLinks
  const actualPath = window.location.pathname
  return (
    <AppBar position="sticky" color="default">
      <Toolbar className={classes.toolbar}>
        <HighlightIcon>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={home.displayName}
            color="inherit"
            to={home.path}
            selected={isSelected(home.path, actualPath)}
          >
            <Home className={classes.buttons} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={something.displayName}
            color="inherit"
            to={something.path}
            selected={isSelected(something.path, actualPath)}
          >
            <Help className={classes.buttons} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={addTask.displayName}
            color="inherit"
            to={addTask.path}
            selected={isSelected(addTask.path, actualPath)}
          >
            <AddCircle className={classes.generalButton} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={tasks.displayName}
            color="inherit"
            to={tasks.path}
            selected={isSelected(tasks.path, actualPath)}
          >
            <Tasks className={classes.buttons} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={profile.displayName}
            color="inherit"
            to={profile.path}
            selected={isSelected(profile.path, actualPath)}
          >
            <Person className={classes.buttons} />
          </WrappedLink>
        </HighlightIcon>
      </Toolbar>
    </AppBar>
  )
}

const styles = ({ spacing }: Theme) => createStyles({
  buttons: {
    fontSize: 32
  },
  generalButton: {
    color: '#4481EB',
    fontSize: 50
  },
  hidden: {
    visibility: 'hidden'
  },
  link: {
    textDecoration: 'none'
  },
  searchToolbar: {
    backgroundColor: 'white'
  },
  toolbar: {
    color: '#818181',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: spacing.unit,
    marginRight: spacing.unit
  }
})

interface NavigationBarProps extends RouteComponentProps<{}>, WithStyles<typeof styles>, WithAuth { }

export default (withStyles(styles)(withAuth(withRouter(NavigationBar))))
