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
import { PrivateRoute } from '~generic'

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
    h1: {
      fontSize: '3.2rem',
      color: 'rgba(0,0,0,0.87)',
      fontWeight: 'normal',
    },
    body2: {
      color: '#818181',
    },
  },
})

const redirectToHome = () => <Redirect to="/" />

class App extends Component<AppProps, {}> {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <Router>
            <div className={this.props.classes.container}>
              <Switch>
                <PrivateRoute
                  path="/profile"
                  component={Pages.ProfilePrivate}
                />
                <PrivateRoute path="/tasks" component={Pages.Tasks} />
                <Route path="/prelogin" component={Pages.Prelogin} />
                <Route path="/profile-public" component={Pages.ProfilePublic} />
                <Route path="/create-task" component={Pages.CreateTask} />
                <Route path="/sign-in" component={Pages.SignIn} />
                <Route path="/rate" component={Pages.Rate} />
                <Route path="/register" component={Pages.Register} />
                <Route path="/search" component={Pages.Search} />
                <Route exact path="/" component={Pages.Home} />
                <Route path="*" render={redirectToHome} />
              </Switch>
            </div>
          </Router>
        </AuthProvider>
      </MuiThemeProvider>
    )
  }
}

const styles = createStyles({
  container: {
    height: '100%',
  },
})

export default withStyles(styles)(App)

interface AppProps extends WithStyles<typeof styles> {}
