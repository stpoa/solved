import { createMuiTheme, createStyles, MuiThemeProvider, WithStyles, withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Provider as AuthProvider } from '~auth'

// Generic
import { NavigationBar, PrivateRoute } from '~generic'

// Pages
import { AddTask, Home, ProfilePrivate, ProfilePublic, Rate, Register, Search, SignIn } from '~pages'

// Theme

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#FFFFFF',
      light: '#FFFFFF',
      main: '#FFFFFF',
      // contrastText: getContrastText(palette.secondary.A400),
    },
    secondary: {
      dark: '#479AC8',
      light: '#4481EB',
      main: '#4481EB',
      //   contrastText: getContrastText(palette.secondary.A400),
    },
    // error: {
    //   light: palette.error[300],
    //   main: palette.error[500],
    //   dark: palette.error[700],
    //   contrastText: getContrastText(palette.error[500]),
    // },
  },
})

const redirectToHome = () =>
    <Redirect to="/" />

class App extends Component <AppProps, {}> {
  public render () {
    const { containerStyles } = this.props.classes
    return (
      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <div className={containerStyles}>
              <Switch>
                <PrivateRoute path="/profile" component={ProfilePrivate}/>
                <PrivateRoute path="/tasks" component={ProfilePrivate} />
                <Route path="/profile-public" component={ProfilePublic} />
                <Route path="/add-task" component={AddTask} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/rate" component={Rate} />
                <Route path="/register" component={Register} />
                <Route path="/search" component={Search} />
                <Route exact path="/" component={Home} />
                <Route path="*" render={redirectToHome} />
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
    overflow: 'hidden',
  },
})

export default withStyles(styles)(App)

interface AppProps extends WithStyles<typeof styles> {}
