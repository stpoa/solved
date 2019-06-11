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
import { BasicAuth, Provider as AuthProvider } from '~auth'

// Generic
import { PrivateRoute } from '~generic'

// Pages
import { PrivateRouteWithAuth } from '~generic/PrivateRoute'
import * as Pages from '~pages'

// Theme
const blue = '#4481EB'
const lightBlue = '#E4EDFF'
const grey = '#818181'
const black = 'rgba(0,0,0,0.87)'
const white = '#FFFFFF'

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#FAFAFA',
      light: white,
      main: white,
      // contrastText: getContrastText(palette.secondary.A400),
    },
    secondary: {
      dark: blue,
      light: blue,
      main: blue,
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
      fontWeight: 'normal',
      color: black,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'normal',
      color: black,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'normal',
      color: blue,
    },
    body2: {
      color: grey,
    },
  },
  overrides: {
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: '2px solid rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: blue,
        },
        color: blue,
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          color: blue,
          backgroundColor: lightBlue,
          '&:hover': {
            color: blue,
            backgroundColor: lightBlue,
          },
          '&:focus': {
            color: blue,
            backgroundColor: lightBlue,
          },
        },
      },
    },
  },
})

const redirectToHome = () => <Redirect to="/" />
const NotImplmented = () => <h1>Not implemented yet!</h1>

class App extends Component<AppProps, {}> {
  public render() {
    return (
      <BasicAuth>
        <MuiThemeProvider theme={theme}>
          <AuthProvider>
            <Router>
              <div className={this.props.classes.container}>
                <Switch>
                  <PrivateRouteWithAuth
                    path="/profile"
                    component={Pages.Profile}
                  />
                  <PrivateRoute
                    path="/profile/test"
                    component={NotImplmented}
                  />
                  <PrivateRoute path="/tasks" component={Pages.Tasks} />
                  <Route path="/prelogin" component={Pages.Prelogin} />
                  <Route path="/create-task" component={Pages.CreateTask} />
                  <Route path="/sign-in" component={Pages.SignIn} />
                  <Route path="/rate" component={Pages.Rate} />
                  <Route
                    path="/remind-password"
                    component={Pages.RemindPassword}
                  />
                  <Route path="/register" component={Pages.Register} />
                  <Route path="/search" component={Pages.Search} />
                  <Route
                    exact
                    path="/remind-password"
                    component={NotImplmented}
                  />
                  <Route exact path="/" component={Pages.Home} />
                  <Route path="/task/:id" component={Pages.Task} />
                  <Route path="*" render={redirectToHome} />
                </Switch>
              </div>
            </Router>
          </AuthProvider>
        </MuiThemeProvider>
      </BasicAuth>
    )
  }
}

const styles = createStyles({
  '@global': {
    html: {
      fontSize: '0.7rem',
    },
    a: {
      textDecoration: 'none',
    },
  },
  container: {
    height: '100%',
  },
})

export default withStyles(styles)(App)

interface AppProps extends WithStyles<typeof styles> {}
