import {
  Snackbar,
  StyleRulesCallback,
  TextField,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  Component,
  MouseEventHandler,
} from 'react'
import { Link, Redirect } from 'react-router-dom'
import isLength from 'validator/lib/isLength'
import { withAuth, WithAuth } from '~auth'
import {
  Email,
  SignBaseButton as Button,
  SignBaseContainer as Container,
} from '~generic'
import { Status } from '~interfaces'
import { emailValidator } from '~lib/validators'
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
      <Container header="Logowanie">
        <Snackbar
          autoHideDuration={4000}
          open={showSignInError}
          onClose={this.hideSignInError}
        >
          <SnackbarError message="Logowanie się nie powiodło!" />
        </Snackbar>
        <div className={classes.emailContainer}>
          <Email
            disabled={isPending}
            error={emailError}
            value={email}
            onChange={this.handleChangeText}
          />
        </div>
        <div className={classes.passwordContainer}>
          <TextField
            autoFocus={false}
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
          <Link className={classes.link} to="/remind-password">
            Nie pamiętam hasła
          </Link>
        </div>
        <Button disabled={isPending} onClick={this.handleSubmit}>
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
      </Container>
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
    return {
      emailError: emailValidator(email),
      passwordError: !password
        ? 'Pole jest wymagane!'
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
  buttonContainer: {
    gridRow: '10',
    width: '50%',
    margin: 'auto',
    height: '100%',
  },
  emailContainer: {
    gridRow: '4',
    fontSize: theme.typography.body2.fontSize,
  },
  passwordContainer: {
    gridRow: '6',
    fontSize: theme.typography.body2.fontSize,
  },
  checkboxForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridRow: '8',
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
    gridRow: '12',
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
