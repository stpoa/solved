import { Button, TextField } from '@material-ui/core'
import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { ChangeEventHandler, Component, MouseEventHandler } from 'react'
import { Redirect } from 'react-router-dom'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import { Status, withAuth, WithAuth } from '~auth'

class SignIn extends Component<ISignInProps, ISignInState> {
  public readonly state: ISignInState = {
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  }

  public render () {
    if (this.props.auth.signedIn) return <Redirect to="/profile" />

    const { auth: { status }, classes: { button, container, item } } = this.props
    const { email, emailError, password, passwordError } = this.state
    const isPending = status === Status.Pending

    return (
      <div className={container}>
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

  private onChangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
    /* tslint:disable */
    const state = {
      [e.target.name]: e.target.value,
      emailError: '',
      passwordError: ''
    } as Pick<ISignInState, keyof ISignInState>
      /* tslint:enable */

    this.setState(state)
  }

  private validate (): IErrors | false {
    const { email, password } = this.state
    const errors: IErrors = {
      emailError: !email
      ? 'Field required'
      : !isEmail(email)
      ? 'Incorrect email address'
      : '',
      passwordError: !password
      ? 'Field required'
      : !isLength(password, { min: 6 })
      ? 'Password should have at least 6 characters'
      : ''
    }

    const hasErrors = Object.values(errors).some((error) => error.length)

    return hasErrors && errors
  }

  private onSubmit: MouseEventHandler<HTMLElement> = async () => {
    const errors = this.validate()

    if (errors) {
      return this.setState(errors)
    }

    await this.props.auth.signIn(this.state.email, this.state.password)
  }
}

const styles: StyleRules = createStyles({
  button: {
    marginBottom: 4,
    marginTop: 12
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  item: {
    width: 400
  }
})

interface ISignInProps extends WithAuth, WithStyles<typeof styles> {}

interface IErrors {
  emailError: string,
  passwordError: string
}

interface ISignInState extends IErrors {
  email: string,
  password: string
}

export default withAuth(withStyles(styles)(SignIn))
