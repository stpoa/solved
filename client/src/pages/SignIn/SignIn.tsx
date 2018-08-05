import { Button, TextField } from '@material-ui/core'
import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { ChangeEventHandler, Component, MouseEventHandler } from 'react'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import { Body } from '~generic'
import { Status, withAuth } from './../../AuthProvider'

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

interface ISignInProps extends WithStyles<typeof styles> {}

interface IErrors {
  emailError: string,
  passwordError: string
}

interface ISignInState extends IErrors {
  email: string,
  password: string
}

class SignIn extends Component<ISignInProps, ISignInState> {
  public readonly state: ISignInState = {
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  }

  public render () {
    const { classes: { button, container, item } } = this.props
    const { email, emailError, password, passwordError } = this.state
    const isPending = status === Status.Pending

    return (
      <Body className={container}>
        <TextField
<<<<<<< Updated upstream
          autoFocus
          className={classes.item}
=======
          autoFocus={true}
          className={item}
          disabled={isPending}
>>>>>>> Stashed changes
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
      </Body>
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

  private onSubmit: MouseEventHandler<HTMLElement> = () => {
    const errors = this.validate()

    if (errors) {
      return this.setState(errors)
    }

    this.props.signIn(this.state.email, this.state.password)
  }
}

export default withAuth(withStyles(styles)(SignIn))
