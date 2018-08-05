import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Close, Menu, Search } from '@material-ui/icons'
import React, { Component } from 'react'

const styles = createStyles({
  searchToolbar: {
    backgroundColor: 'white'
  },
  toolbarStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

interface HeaderProps extends WithStyles <typeof styles> {
}
interface HeaderState {
  searchBarVisible: boolean
}

class Header extends Component<HeaderProps, HeaderState> {
  public readonly state: HeaderState = { searchBarVisible: false }
  public render () {
    const { children } = this.props
    const { searchBarVisible } = this.state
    const { toolbarStyles, searchToolbar } = this.props.classes
    return (
      <AppBar position="sticky">
      {!searchBarVisible && <Toolbar className={toolbarStyles}>
          <IconButton color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          <Typography variant="title" color="inherit">
            Notowork
      </Typography>
          <div>
            <IconButton color="inherit">
              <AccountCircle style={{ fontSize: 30 }} />
            </IconButton>
            <IconButton color="inherit" onClick={this.toggleSearchBar}>
              <Search style={{ fontSize: 30 }} />
            </IconButton>
          </div>
        </Toolbar>}
        {searchBarVisible && <Toolbar className={searchToolbar}>
          {children}
          <IconButton onClick={this.toggleSearchBar}>
            <Close />
          </IconButton>
        </Toolbar>}
      </AppBar>
    )
  }

  private toggleSearchBar = () => {
    const { searchBarVisible } = this.state
    this.setState({ searchBarVisible: !searchBarVisible })
  }
}

export default withStyles(styles)(Header)
