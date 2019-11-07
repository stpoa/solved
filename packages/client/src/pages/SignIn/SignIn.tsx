import {
  Snackbar,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import { logError } from '@notowork/lib/log'
import {
  emailValidator,
  passwordLengthValidator,
} from '@notowork/lib/validators'
import { Status } from '@notowork/models/interfaces'
import React, {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useState,
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

const SignIn: FC<SignInProps> = ({
  auth: { status, signIn, signedIn },
  classes,
}) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showSignInError, setShowSignInError] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = e => {
    setPassword(e.target.value)
    setPasswordError('')
  }
  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = e => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleSubmit: MouseEventHandler<HTMLElement> = () => {
    setEmailError(emailValidator(email))
    setPasswordError(passwordLengthValidator(password, 'Nieprawidłowe hasło!'))

    signIn(email, password).catch(logError)
  }

  const handleChangeRememberMe = (_: any, checked: boolean) =>
    setRememberMe(checked)

  const hideSignInError = () => setShowSignInError(false)

  if (signedIn) return <Redirect to="/profile" />

  const isPending = status === Status.Pending

  return (
    <Container header="Logowanie">
      <Snackbar
        autoHideDuration={4000}
        open={showSignInError}
        onClose={hideSignInError}
      >
        <SnackbarError message="Logowanie się nie powiodło!" />
      </Snackbar>
      <FieldContainer>
        <Email
          disabled={isPending}
          error={emailError}
          value={email}
          onChange={handleChangeEmail}
        />
      </FieldContainer>
      <FieldContainer secondary>
        <Password
          disabled={isPending}
          error={passwordError}
          value={password}
          onChange={handleChangePassword}
        />
      </FieldContainer>
      <div className={classes.checkboxForm}>
        <Checkbox
          disabled={isPending}
          checked={rememberMe}
          onChange={handleChangeRememberMe}
          name="rememberMe"
          label="Zapamiętaj mnie"
        />
        <Link to="/remind-password">Nie pamiętam hasła</Link>
      </div>
      <Button disabled={isPending} onClick={handleSubmit}>
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

const styles: StyleRulesCallback = () => ({
  checkboxForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridRow: '8',
    paddingLeft: '2rem',
  },
})

interface SignInProps extends WithAuth, WithStyles<typeof styles> {}

export default withAuth(withStyles(styles)(SignIn))
