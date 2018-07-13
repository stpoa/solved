import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Generic
import Header from '~generic'

// Pages
import { Home, Profile } from '~pages'

const styles = createStyles({
  containerStyles: {
    height: '100vh',
    overflow: 'hidden'
  }
})
interface IAppProps extends WithStyles <typeof styles> {}

class App extends Component <IAppProps> {
  public render () {
    const { containerStyles } = this.props.classes
    return (
      <Router>
        <div className={containerStyles}>
          <Header />
          <Route exact={true} path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(App)
