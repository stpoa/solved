import { Typography, withStyles, WithStyles } from '@material-ui/core'
import {
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@notowork/lib/validators'
import { Status } from '@notowork/models/interfaces'
import React, {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useState,
} from 'react'
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
import Switch from './Switch'

const Register: FC<RegisterProps> = ({ auth: { status }, classes }) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  // const [showSignInError, setShowSignInError] = useState(false)
  const [acceptDataProcessingTerms, setAcceptDataProcessingTerms] = useState(
    false,
  )
  const [, setAcceptError] = useState('')
  const [acceptTermsOfService, setAcceptTermsOfService] = useState(false)

  const isPending = status === Status.Pending

  const handleSubmit: MouseEventHandler<HTMLElement> = () => {
    setEmailError(emailValidator(email))
    setPasswordError(passwordValidator(password))
    setAcceptError(
      requiredValidator(acceptTermsOfService) ||
        requiredValidator(acceptDataProcessingTerms) ||
        '',
    )
  }

  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = e => {
    setPassword(e.target.value)
    setPasswordError('')
  }
  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = e => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleAcceptDataTerms = (_: any, checked: boolean) =>
    setAcceptDataProcessingTerms(checked)
  const handleAcceptServiceTerms = (_: any, checked: boolean) =>
    setAcceptTermsOfService(checked)

  return (
    <Container header="Rejestracja">
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
        <Typography className={classes.passwordInfo}>
          Hasło powinno zawierać minimum 6 znaków, w tym jedną wielką literę i
          cyfrę
        </Typography>
      </FieldContainer>
      <div className={classes.checkboxForm}>
        <Switch
          label={
            <span>
              Akceptuję <Link to="/">regulamin.</Link>
            </span>
          }
          checked={acceptTermsOfService}
          disabled={isPending}
          onChange={handleAcceptServiceTerms}
          name="acceptTermsOfService"
        />
        <Switch
          label="Zgadzam się na przetwarzanie moich danych osobowych."
          checked={acceptDataProcessingTerms}
          disabled={isPending}
          onChange={handleAcceptDataTerms}
          name="acceptDataProcessingTerms"
        />
      </div>
      <Button disabled={isPending} onClick={handleSubmit}>
        Zarejestruj
      </Button>
      <Advice
        text="Posiadasz już konto? "
        linkText="Zaloguj się"
        linkTo="/sign-in"
      />
    </Container>
  )
}

const styles = {
  checkboxForm: {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridRow: '8',
    paddingLeft: '2rem',
  },
  passwordInfo: {
    marginTop: '5%',
    fontSize: '1.2rem',
  },
}

interface RegisterProps extends WithAuth, WithStyles<typeof styles> {}

export default withAuth(withStyles(styles)(Register))
