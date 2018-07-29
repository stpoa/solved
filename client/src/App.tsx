import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Generic
import { Header, SearchBar } from '~generic'

// Pages
import { Home, Profile } from '~pages'

const styles = createStyles({
  containerStyles: {
    height: '100vh',
    overflow: 'hidden'
  }
})
interface AppProps extends WithStyles<typeof styles> { }
interface AppState {
  searchBarVisible: boolean
}

class App extends Component<AppProps, AppState> {
  public readonly state = { searchBarVisible: false }

  public render () {
    const { searchBarVisible } = this.state
    const { containerStyles } = this.props.classes
    return (
      <Router>
        <div className={containerStyles}>
          <div>
            <Header handleSearchButton={this.onSearchButton} >
              <SearchBar searchBarVisible={searchBarVisible} />
            </Header>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    )
  }

  private onSearchButton = () => {
    this.setState({ searchBarVisible: true })
  }
}

export default withStyles(styles)(App)
