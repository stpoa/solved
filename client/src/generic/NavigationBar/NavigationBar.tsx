import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { AddCircle, Help, Home, Person } from '@material-ui/icons'
import React, { SFC } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
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
    path: '/rate'
  },
  tasks: {
    displayName: 'Tasks',
    path: '/tasks'
  }
}

const NavigationBar: SFC<NavigationBarProps> = ({ classes }) => {
  const { addTask, tasks, profile, something, home } = menuLinks

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
          >
            <Home className={classes.buttons} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={something.displayName}
            color="inherit"
            to={something.path}
          >
            <Help className={classes.buttons} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={addTask.displayName}
            color="inherit"
            to={addTask.path}
          >
            <AddCircle className={classes.generalButton} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={tasks.displayName}
            color="inherit"
            to={tasks.path}
          >
            <Tasks className={classes.buttons} />
          </WrappedLink>
          <WrappedLink
            wrapper={IconButton}
            className={classes.link}
            variant={profile.displayName}
            color="inherit"
            to={profile.path}
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
  link: {
    textDecoration: 'none'
  },
  toolbar: {
    color: '#818181',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: spacing.unit,
    marginRight: spacing.unit
  }
})

interface NavigationBarProps extends RouteComponentProps<{}>, WithStyles<typeof styles> { }

export default (withStyles(styles)(withRouter(NavigationBar)))
