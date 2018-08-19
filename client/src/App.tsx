import { blue } from '@material-ui/core/colors'
import { createMuiTheme, createStyles, MuiThemeProvider, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider as AuthProvider } from '~auth'

// Generic
import { Header, SearchFilter } from '~generic'

// Pages
import { AddTask, Home, Profile } from '~pages'

const styles = createStyles({
  containerStyles: {
    display: 'grid',
    gridTemplateRows: 'max-content auto',
    height: '100vh',
    overflow: 'hidden'
  }
})
interface AppProps extends WithStyles<typeof styles> {}

const theme = createMuiTheme({
  palette: { primary: blue }
})

class App extends Component <AppProps, {}> {
  public render () {
    const { containerStyles } = this.props.classes
    return (
      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <div className={containerStyles}>
              <Header />
              <Switch>
                <Route path="/profile" component={Profile} />
                <Route path="/add-task" component={AddTask} />
                <Route path="/search" component={SearchFilter} />
                <Route path="*" component={Home} />
              </Switch>
            </div>
          </Router>
        </AuthProvider>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
