import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import {
  createStyles,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles'
import { AddCircle, Home, Person, Search } from '@material-ui/icons'
import React, { FunctionComponent } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Tasks } from '~icons'
import WrappedLink from '../WrappedLink'

const menuLinks = [
  {
    childIcon: Home,
    displayName: 'Home',
    path: '/',
  },
  {
    childIcon: Search,
    displayName: 'Search',
    path: '/search',
  },
  {
    childIcon: AddCircle,
    displayName: 'Add task',
    generalButton: true,
    path: '/create-task',
  },
  {
    childIcon: Tasks,
    displayName: 'Tasks',
    path: '/tasks',
  },
  {
    childIcon: Person,
    displayName: 'Profile',
    path: '/profile',
  },
]

const NavigationBar: FunctionComponent<NavigationBarProps> = ({ classes }) => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar className={classes.toolbar}>
        {menuLinks.map(
          ({ childIcon: Children, displayName, path, generalButton }) => (
            <WrappedLink
              wrapper={IconButton}
              className={classes.link}
              variant={displayName}
              color="inherit"
              key={displayName}
              to={path}
              exact
              activeClassName={classes.highlight}
            >
              <Children
                className={
                  generalButton ? classes.generalButton : classes.buttons
                }
              />
            </WrappedLink>
          ),
        )}
      </Toolbar>
    </AppBar>
  )
}

const styles = ({ spacing, palette: { secondary, grey } }: Theme) =>
  createStyles({
    buttons: {
      fontSize: 32,
    },
    generalButton: {
      color: secondary.main,
      fontSize: 50,
    },
    highlight: {
      color: secondary.main,
    },
    link: {
      textDecoration: 'none',
      paddingTop: 0,
      paddingBottom: 0,
    },
    toolbar: {
      color: grey[500],
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: spacing.unit,
      marginRight: spacing.unit,
    },
  })

interface NavigationBarProps
  extends RouteComponentProps<{}>,
    WithStyles<typeof styles> {}

export default withStyles(styles)(withRouter(NavigationBar))
