import {
  Snackbar,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import { logError } from '@notowork/lib/log'
import { emailValidator, passwordLengthValidator } from '@notowork/lib/validators'
import { Status } from '@notowork/models/interfaces'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  Component,
  MouseEventHandler,
} from 'react'
import { Redirect } from 'react-router-dom'
import { withAuth, WithAuth } from '~auth'
import {
  Advice,
  Button,
  Container,
  Email,
  FieldContainer,
  Link,
  Password,
} from '~generic/Sign'
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
        <FieldContainer>
          <Email
            disabled={isPending}
            error={emailError}
            value={email}
            onChange={this.handleChangeText}
          />
        </FieldContainer>
        <FieldContainer secondary>
          <Password
            disabled={isPending}
            error={passwordError}
            value={password}
            onChange={this.handleChangeText}
          />
        </FieldContainer>
        <div className={classes.checkboxForm}>
          <Checkbox
            disabled={isPending}
            checked={rememberMe}
            onChange={this.handleChangeCheckbox}
            name="rememberMe"
            label="Zapamiętaj mnie"
          />
          <Link to="/remind-password">Nie pamiętam hasła</Link>
        </div>
        <Button disabled={isPending} onClick={this.handleSubmit}>
          Zaloguj
        </Button>
        <Advice
          text="Nie posiadasz konta? "
          linkText="Załóż teraz!"
          linkTo="/register"
        />
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

  private handleSubmit: MouseEventHandler<HTMLElement> = () => {
    this.setState((state, props) => {
      const errors = {
        emailError: emailValidator(state.email),
        passwordError: passwordLengthValidator(
          state.password,
          'Nieprawidłowe hasło!',
        ),
      }

      const hasErrors = Object.values(errors).some(error =>
        Boolean(error.length),
      )

      if (hasErrors) return { ...errors }

      props.auth.signIn(state.email, state.password).catch(logError)

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

const styles: StyleRulesCallback = () => ({
  checkboxForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridRow: '8',
    paddingLeft: '2rem',
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
