import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Close, Menu, Search } from '@material-ui/icons'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { SearchBar, WrappedLink } from '~generic'

class Header extends Component<HeaderProps> {
  public render () {
    const { classes, location } = this.props
    const isSearching = location.pathname === '/search'

    return (
      <AppBar position="sticky">
        {!isSearching && (
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
              <WrappedLink color="inherit" wrapper={IconButton} to="/profile">
                <AccountCircle className={classes.icon} />
              </WrappedLink>
              <WrappedLink color="inherit" wrapper={IconButton} to="/search">
                <Search className={classes.icon} />
              </WrappedLink>
            </div>
          </Toolbar>
        )}
        {isSearching && (
          <Toolbar className={classes.searchToolbar}>
            <SearchBar />
            <WrappedLink wrapper={IconButton} to="/">
              <Close />
            </WrappedLink>
          </Toolbar>
        )}
      </AppBar>
    )
  }
}

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

interface HeaderProps extends RouteComponentProps<{}>, WithStyles <typeof styles> {}

const wrappedComponent = withRouter(Header)

export default withStyles(styles)(wrappedComponent)
