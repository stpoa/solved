import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Close, Menu, Search } from '@material-ui/icons'
import { History } from 'history'
import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

const styles = createStyles({
  searchToolbar: {
    backgroundColor: 'white'
  },
  toolbarStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

interface HeaderProps extends RouteComponentProps<{}>, WithStyles <typeof styles> {}
interface HeaderState {
  searchBarVisible: boolean
}

class Header extends Component<HeaderProps, HeaderState> {
  public readonly state: HeaderState = { searchBarVisible: false }
  public render () {
    const { children } = this.props
    const { toolbarStyles, searchToolbar } = this.props.classes
    const { searchBarVisible } = this.state
    return (
      <AppBar position="sticky">
        {!searchBarVisible && (
          <Toolbar className={toolbarStyles}>
            <IconButton color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" onClick={this.handleTextHeader}>
              Notowork
            </Typography>
            <div>
              <IconButton color="inherit" onClick={this.handleProflieButton}>
                <AccountCircle style={{ fontSize: 30 }} />
              </IconButton>
              <IconButton color="inherit" onClick={this.toggleSearchBar}>
                <Search style={{ fontSize: 30 }} />
              </IconButton>
            </div>
          </Toolbar>
        )}
        {searchBarVisible && (
          <Toolbar className={searchToolbar}>
            {children}
            <IconButton onClick={this.toggleSearchBar}>
              <Close />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
    )
  }

  private toggleSearchBar = () => {
    const { history } = this.props
    const { searchBarVisible } = this.state
    searchBarVisible ? history.goBack() : history.push('/search')
    this.setState({ searchBarVisible: !searchBarVisible })
  }

  private handleProflieButton = () => {
    const { history } = this.props
    history.push('/profile')
  }

  private handleTextHeader = () => {
    const { history } = this.props
    history.push('/')
  }
}

const wrappedComponent = withRouter(Header)
export default withStyles(styles)(wrappedComponent)
