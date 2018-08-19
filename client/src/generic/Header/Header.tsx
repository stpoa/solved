import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Close, Menu, Search } from '@material-ui/icons'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import WrappedLink from './../WrappedLink'
import SearchBar from './SearchBar'

class Header extends Component<HeaderProps> {
  public render () {
    const { classes, location } = this.props
    const pathname = location.pathname

    return (
      <AppBar position="sticky">
        {pathname !== '/search'
          ? (
            <Toolbar className={classes.toolbar}>
              <IconButton color="inherit" aria-label="Menu">
                <Menu />
              </IconButton>
              <WrappedLink
                wrapper={Typography}
                className={classes.title}
                variant="title"
                color="inherit"
                to="/"
              >
                Notowork
              </WrappedLink>
              <div>
                {pathname === '/' && (
                  <WrappedLink color="inherit" wrapper={IconButton} to="/search">
                    <Search className={classes.icon} />
                  </WrappedLink>
                )}
                <WrappedLink color="inherit" wrapper={IconButton} to="/profile">
                  <AccountCircle className={classes.icon} />
                </WrappedLink>
              </div>
            </Toolbar>
          )
          : (
            <Toolbar className={classes.searchToolbar}>
              <SearchBar />
              <WrappedLink wrapper={IconButton} to="/">
                <Close />
              </WrappedLink>
            </Toolbar>
          )
        }
      </AppBar>
    )
  }
}

const wrappedComponent = withRouter(Header)

const styles = createStyles({
  icon: {
    fontSize: 30
  },
  searchToolbar: {
    backgroundColor: 'white'
  },
  title: {
    textDecoration: 'none'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export default withStyles(styles)(wrappedComponent)

interface HeaderProps extends RouteComponentProps<{}>, WithStyles <typeof styles> {}
