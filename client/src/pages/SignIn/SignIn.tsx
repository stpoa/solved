import { Button, Snackbar, TextField } from '@material-ui/core'
import {
  createStyles,
  StyleRules,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { ChangeEventHandler, Component, MouseEventHandler } from 'react'
import { Redirect } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import { withAuth, WithAuth } from '~auth'
import { Status } from '~interfaces'
import SignInError from './components/SignInError'

class SignIn extends Component<SignInProps, SignInState> {
  public readonly state: SignInState = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    showSignInError: false,
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
      classes: { button, container, item },
    } = this.props
    const {
      email,
      emailError,
      password,
      passwordError,
      showSignInError,
    } = this.state
    const isPending = status === Status.Pending

    return (
      <div className={container}>
        <Snackbar
          autoHideDuration={4000}
          open={showSignInError}
          onClose={this.hideSignInError}
        >
          <SignInError />
        </Snackbar>
        <TextField
          autoFocus
          className={item}
          disabled={isPending}
          error={Boolean(emailError)}
          margin="dense"
          label="Email Address"
          helperText={emailError}
          required
          name="email"
          type="email"
          value={email}
          fullWidth
          onChange={this.onChangeText}
        />
        <TextField
          margin="dense"
          className={item}
          disabled={isPending}
          error={Boolean(passwordError)}
          label="Password"
          helperText={passwordError}
          required
          name="password"
          type="password"
          value={password}
          fullWidth
          onChange={this.onChangeText}
        />
        <Button
          className={`${item} ${button}`}
          disabled={isPending}
          onClick={this.onSubmit}
          fullWidth
        >
          Sign in
        </Button>
      </div>
    )
  }

  private onChangeText: ChangeEventHandler<HTMLInputElement> = e => {
    const state = {
      [e.target.name]: e.target.value,
      emailError: '',
      passwordError: '',
    }

    // https://github.com/Microsoft/TypeScript/issues/13948
    this.setState(state as Pick<
      SignInState,
      Exclude<keyof SignInState, 'showSignInError'>
    >)
  }

  private validate({ email, password }: SignInState): Errors {
    return {
      emailError: !email
        ? 'Field required'
        : !isEmail(email)
        ? 'Incorrect email address'
        : '',
      passwordError: !password
        ? 'Field required'
        : !isLength(password, { min: 6 })
        ? 'Password should have at least 6 characters'
        : '',
    }
  }

  private onSubmit: MouseEventHandler<HTMLElement> = () => {
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

  private hideSignInError: () => void = () => {
    this.setState({ showSignInError: false })
  }
}

const styles: StyleRules = createStyles({
  button: {
    marginBottom: 4,
    marginTop: 12,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
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
  showSignInError: boolean
}

export default withAuth(withStyles(styles)(SignIn))
