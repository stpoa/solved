import {
  Button,
  Snackbar,
  StyleRulesCallback,
  TextField,
  Typography,
} from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  Component,
  MouseEventHandler,
} from 'react'
import { Link, Redirect } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import { withAuth, WithAuth } from '~auth'
import { NavigationBar } from '~generic'
import { Status } from '~interfaces'
import { pageContentNotScrollableWithNavigationBar } from '~pages/styles'
import Checkbox from './components/Checkbox'
import SnackbarError from './components/SnackbarError'

class SignIn extends Component<SignInProps, SignInState> {
  public readonly state: SignInState = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    showSignInError: false,
    rememberMe: false,
  }

  public componentDidUpdate(prevProps: SignInProps) {
    if (
      prevProps.auth.status === Status.Pending &&
      this.props.auth.status === Status.Failure
    ) {
      this.setState({ showSignInError: true })
    }
  }

  public render() {
    if (this.props.auth.signedIn) return <Redirect to="/profile" />

    const {
      auth: { status },
      classes,
    } = this.props
    const {
      rememberMe,
      email,
      emailError,
      password,
      passwordError,
      showSignInError,
    } = this.state
    const isPending = status === Status.Pending

    return (
      <>
        <div className={classes.container}>
          <Snackbar
            autoHideDuration={4000}
            open={showSignInError}
            onClose={this.hideSignInError}
          >
            <SnackbarError message="Logowanie się nie powiodło!" />
          </Snackbar>
          <div className={classes.header}>
            <Typography
              align="left"
              variant="h1"
              component="header"
              className={classes.headerItem}
            >
              Logowanie
            </Typography>
          </div>
          <div className={classes.textFields}>
            <TextField
              autoFocus={false}
              className={classes.textField}
              disabled={isPending}
              error={Boolean(emailError)}
              margin="dense"
              label="Email"
              helperText={emailError}
              required
              name="email"
              type="email"
              value={email}
              fullWidth
              onChange={this.handleChangeText}
            />
            <TextField
              autoFocus={false}
              margin="dense"
              className={classes.textField}
              disabled={isPending}
              error={Boolean(passwordError)}
              label="Hasło"
              helperText={passwordError}
              required
              name="password"
              type="password"
              value={password}
              fullWidth
              onChange={this.handleChangeText}
            />
          </div>
          <div className={classes.checkboxForm}>
            <Checkbox
              disabled={isPending}
              checked={rememberMe}
              onChange={this.handleChangeCheckbox}
              name="rememberMe"
              label="Zapamiętaj mnie"
            />
            <Link className={classes.link} to="/">
              Nie pamiętam hasła
            </Link>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              variant="extendedFab"
              color="secondary"
              disabled={isPending}
              className={classes.button}
              size="large"
              onClick={this.handleSubmit}
            >
              Zaloguj
            </Button>
            <div className={classes.noAccount}>
              <span>
                {'Nie posiadasz konta? '}
                <Link className={classes.link} to="/register">
                  Załóż teraz!
                </Link>
              </span>
            </div>
          </div>
          <NavigationBar />
        </div>
      </>
    )
  }

  private handleChangeText: ChangeEventHandler<HTMLInputElement> = e => {
    const state = {
      [e.target.name]: e.target.value,
      emailError: '',
      passwordError: '',
    }

    // https://github.com/Microsoft/TypeScript/issues/13948
    this.setState(state as Pick<
      SignInState,
      Exclude<keyof SignInState, 'showSignInError' | 'rememberMe'>
    >)
  }

  private validate({ email, password }: SignInState): Errors {
    const fieldRequiredMsg = 'Pole jest wymagane!'

    return {
      emailError: !email
        ? fieldRequiredMsg
        : !isEmail(email)
        ? 'Nieprawidłowy adres email!'
        : '',
      passwordError: !password
        ? fieldRequiredMsg
        : !isLength(password, { min: 6 })
        ? 'Nieprawidłowe hasło!'
        : '',
    }
  }

  private handleSubmit: MouseEventHandler<HTMLElement> = () => {
    this.setState((state, props) => {
      const errors = this.validate(state)
      const hasErrors = Object.values(errors).some(error => error.length)

      if (hasErrors) return { ...errors }

      props.auth.signIn(state.email, state.password).catch(() => {
        return
      })

      return null
    })
  }

  private handleChangeCheckbox = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    const state = { [e.target.name]: checked }

    this.setState(state as Pick<SignInState, 'rememberMe'>)
  }

  private hideSignInError: () => void = () => {
    this.setState({ showSignInError: false })
  }
}

const styles: StyleRulesCallback = theme => ({
  button: {
    margin: 'auto',
    marginBottom: '5%',
    width: '50%',
  },
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRow: '8',
  },
  container: {
    ...pageContentNotScrollableWithNavigationBar(theme),
    height: '100%',
    width: '100%',
    padding: theme.spacing.unit * 2,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr auto 0.5fr auto 0.25fr auto 0.75fr auto 1fr',
  },
  header: {
    gridRow: '2/3',
    paddingLeft: '1rem',
  },
  headerItem: {
    fontSize: '2.8rem',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
    paddingBottom: '4%',
    display: 'inline-block',
  },
  textFields: {
    gridRow: '4/5',
    fontSize: theme.typography.body2.fontSize,
    padding: '1rem',
  },
  textField: {
    color: 'red',
  },
  checkboxForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridRow: '6',
    paddingLeft: '2rem',
  },
  link: {
    color: theme.palette.secondary.main,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textDecoration: 'none',
    paddingRight: '2rem',
  },
  noAccount: {
    textAlign: 'center',
  },
})

interface SignInProps extends WithAuth, WithStyles<typeof styles> {}

interface Errors {
  emailError: string
  passwordError: string
}

interface SignInState extends Errors {
  email: string
  password: string
  rememberMe: boolean
  showSignInError: boolean
}

export default withAuth(withStyles(styles)(SignIn))
