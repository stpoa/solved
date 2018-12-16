import {
  createMuiTheme,
  createStyles,
  MuiThemeProvider,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider as AuthProvider } from '~auth'

// Generic
import { NavigationBar, PrivateRoute } from '~generic'

// Pages
import * as Pages from '~pages'

// Theme
const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#FAFAFA',
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
  typography: {
    htmlFontSize: 10,
    useNextVariants: true,
  },
})

const redirectToHome = () => <Redirect to="/" />

class App extends Component<AppProps, {}> {
  public render() {
    const { containerStyles } = this.props.classes
    return (
      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <div className={containerStyles}>
              <Switch>
                <PrivateRoute
                  path="/profile"
                  component={Pages.ProfilePrivate}
                />
                <PrivateRoute path="/tasks" component={Pages.Tasks} />
                <Route path="/profile-public" component={Pages.ProfilePublic} />
                <Route path="/create-task" component={Pages.CreateTask} />
                <Route path="/sign-in" component={Pages.SignIn} />
                <Route path="/rate" component={Pages.Rate} />
                <Route path="/register" component={Pages.Register} />
                <Route path="/search" component={Pages.Search} />
                <Route exact path="/" component={Pages.Home} />
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
