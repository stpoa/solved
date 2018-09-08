import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Close, Input, Search } from '@material-ui/icons'
import React, { Component, MouseEventHandler } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { withAuth, WithAuth } from '~auth'
import WrappedLink from './../WrappedLink'
import SearchBar from './SearchBar'

class Header extends Component<HeaderProps, HeaderState> {
  public readonly state: HeaderState = {}

  public componentDidUpdate (prevProps: HeaderProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.closeMenu()
    }
  }

  public render () {
    const { auth: { signedIn }, classes, location: { pathname } } = this.props

    return (
      <AppBar position="sticky">
        {pathname !== '/search'
          ? (
            <Toolbar className={classes.toolbar}>
              <WrappedLink
                wrapper={Typography}
                className={classes.link}
                variant="title"
                color="inherit"
                to="/"
              >
                Notowork
              </WrappedLink>
              <div className={classes.icons}>
                {pathname === '/' && (
                  <WrappedLink color="inherit" wrapper={IconButton} to="/search">
                    <Search />
                  </WrappedLink>
                )}
                {signedIn
                  ? (
                    <IconButton
                      className={`${!signedIn ? classes.hidden : ''}`}
                      color="inherit"
                      onClick={this.onClickAccount}
                    >
                      <AccountCircle />
                    </IconButton>
                  ) : (
                    <WrappedLink
                      color="inherit"
                      wrapper={IconButton}
                      to="/sign-in"
                    >
                      <Input />
                    </WrappedLink>
                  )}
              </div>
              <Menu
                open={Boolean(this.state.anchorElement)}
                anchorEl={this.state.anchorElement}
                onClose={this.closeMenu}
              >
                <WrappedLink className={classes.link} wrapper={MenuItem} to="/profile">
                  Profile
                </WrappedLink>
                <MenuItem onClick={this.onSignOut}>
                  Sign out
                </MenuItem>
              </Menu>
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

  private onClickAccount: MouseEventHandler<HTMLElement> = (e) => {
    this.setState({ anchorElement: e.currentTarget })
  }

  private closeMenu: () => void = () => {
    this.setState({
      anchorElement: undefined
    })
  }

  private onSignOut: () => void = () => {
    this.closeMenu()

    this.props.auth.signOut()
  }
}

const styles = createStyles({
  hidden: {
    visibility: 'hidden'
  },
  icons: {
    fontSize: 30,
    position: 'absolute',
    right: '2vh'
  },
  link: {
    textDecoration: 'none'
  },
  searchToolbar: {
    backgroundColor: 'white'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center'
  }
})

interface HeaderProps extends RouteComponentProps<{}>, WithStyles<typeof styles>, WithAuth {}

interface HeaderState {
  anchorElement?: HTMLElement
}

export default (withStyles(styles)(withAuth(withRouter(Header))))
