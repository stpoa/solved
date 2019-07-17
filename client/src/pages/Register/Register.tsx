import { Typography, withStyles, WithStyles } from '@material-ui/core'
import {
  emailValidator,
  passwordValidator,
  requiredValidator,
} from 'lib/validators'
import { Status } from 'models/interfaces'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  Component,
  MouseEventHandler,
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

class Register extends Component<RegisterProps, RegisterState> {
  public readonly state: RegisterState = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    showSignInError: false,
    acceptDataProcessingTerms: false,
    acceptError: '',
    acceptTermsOfService: false,
  }

  public render() {
    const {
      auth: { status },
      classes,
    } = this.props
    const {
      acceptDataProcessingTerms,
      acceptTermsOfService,
      email,
      emailError,
      password,
      passwordError,
    } = this.state
    const isPending = status === Status.Pending

    return (
      <Container header="Rejestracja">
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
            onChange={this.handleChangeCheckbox('acceptTermsOfService')}
            name="acceptTermsOfService"
          />
          <Switch
            label="Zgadzam się na przetwarzanie moich danych osobowych."
            checked={acceptDataProcessingTerms}
            disabled={isPending}
            onChange={this.handleChangeCheckbox('acceptDataProcessingTerms')}
            name="acceptDataProcessingTerms"
          />
        </div>
        <Button disabled={isPending} onClick={this.handleSubmit}>
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

  private handleSubmit: MouseEventHandler<HTMLElement> = () => {
    this.setState(state => {
      const errors = {
        emailError: emailValidator(state.email),
        passwordError: passwordValidator(state.password),
        acceptError:
          requiredValidator(state.acceptTermsOfService) ||
          requiredValidator(state.acceptDataProcessingTerms) ||
          '',
      }

      const hasErrors = Object.values(errors).some(error =>
        Boolean(error.length),
      )

      if (hasErrors) return { ...errors }

      return null
    })
  }

  private handleChangeText: ChangeEventHandler<HTMLInputElement> = e => {
    const state = {
      [e.target.name]: e.target.value,
      emailError: '',
      passwordError: '',
    } as any

    // https://github.com/Microsoft/TypeScript/issues/13948
    this.setState(state)
  }

  private handleChangeCheckbox = (
    name: 'acceptDataProcessingTerms' | 'acceptTermsOfService',
  ) => (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    switch (name) {
      case 'acceptDataProcessingTerms':
        return this.setState({ [name]: checked })
      case 'acceptTermsOfService':
        return this.setState({ [name]: checked })
    }
  }
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

interface Errors {
  emailError: string
  passwordError: string
}

interface RegisterState extends Errors {
  email: string
  password: string
  showSignInError: boolean
  acceptDataProcessingTerms: boolean
  acceptError: string
  acceptTermsOfService: boolean
}

export default withAuth(withStyles(styles)(Register))
