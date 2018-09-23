import { blue } from '@material-ui/core/colors'
import { createMuiTheme, createStyles, MuiThemeProvider, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider as AuthProvider } from '~auth'

// Generic
import { NavigationBar, PrivateRoute } from '~generic'

// Pages
import { AddTask, Home, Profile, Rate, Register, Search, SignIn } from '~pages'

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
              <Switch>
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/tasks" component={Profile} />
                <Route path="/add-task" component={AddTask} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/rate" component={Rate} />
                <Route path="/register" component={Register} />
                <Route path="/search" component={Search} />
                <Route exact path="/" component={Home} />
              </Switch>
              <NavigationBar />
            </div>
          </Router>
        </AuthProvider>
      </MuiThemeProvider>
    )
  }
}

const styles = createStyles({
  containerStyles: {
    display: 'grid',
    gridTemplateRows: 'auto max-content',
    height: '100vh',
    overflow: 'hidden'
  }
})

export default withStyles(styles)(App)

interface AppProps extends WithStyles<typeof styles> {}
