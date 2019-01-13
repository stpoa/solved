import {
  Button,
  Checkbox,
  StyleRulesCallback,
  TextField,
} from '@material-ui/core'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import React, { ChangeEventHandler, Component, MouseEventHandler } from 'react'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import { NavigationBar } from '~generic'
import { pageContentNotScrollableWithNavigationBar } from '~pages/styles'

class Register extends Component<RegisterProps, RegisterState> {
  public readonly state: RegisterState = {
    errors: {
      emailError: '',
      passwordError: '',
      regulationsCheckBoxError: '',
      retypedPasswordError: '',
    },
    fields: {
      email: '',
      password: '',
      regulationsCheckBox: false,
      retypedPassword: '',
    },
  }

  public render() {
    const { classes } = this.props
    const {
      emailError,
      passwordError,
      retypedPasswordError,
      regulationsCheckBoxError,
    } = this.state.errors
    const {
      email,
      password,
      regulationsCheckBox,
      retypedPassword,
    } = this.state.fields

    return (
      <>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.formWrapper}>
              <div className={classes.form}>
                <TextField
                  margin="dense"
                  label="Email"
                  required
                  name="email"
                  type="email"
                  fullWidth
                  error={Boolean(emailError)}
                  helperText={emailError}
                  onChange={this.onTextChange}
                  value={email}
                />
                <TextField
                  margin="dense"
                  label="Password"
                  required
                  name="password"
                  type="password"
                  fullWidth
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                  onChange={this.onTextChange}
                  value={password}
                />
                <TextField
                  margin="dense"
                  label="Confirm password"
                  required
                  name="retypedPassword"
                  type="password"
                  fullWidth
                  error={Boolean(retypedPasswordError)}
                  helperText={retypedPasswordError}
                  onChange={this.onTextChange}
                  value={retypedPassword}
                />
              </div>
            </div>
            <div className={classes.regulationsHolder}>
              <div>
                <Checkbox
                  checked={regulationsCheckBox}
                  onChange={this.onCheckboxChange}
                />
                Regulations
              </div>
              <div className={classes.errorMessage}>
                {regulationsCheckBoxError}
              </div>
            </div>
          </div>
          <Button onClick={this.onSubmit} fullWidth>
            Utwórz profil
          </Button>
        </div>
        <NavigationBar />
      </>
    )
  }

  private validate = (fields: RegisterState['fields']): Errors => {
    const { email, password, retypedPassword, regulationsCheckBox } = fields

    const preparedPassword = password.trim()
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s])/

    return {
      emailError: !email
        ? 'Field required'
        : !isEmail(email)
        ? 'Incorrect email address'
        : '',
      passwordError: !preparedPassword
        ? 'Field required'
        : !isLength(preparedPassword, { min: 6 })
        ? 'Password should have at least 6 characters'
        : !passwordRegex.test(preparedPassword)
        ? 'Password should have at least one upper case, ' +
          'one lower case, one digit and one special character'
        : '',
      regulationsCheckBoxError: !regulationsCheckBox
        ? 'Regulations are required'
        : '',
      retypedPasswordError: !retypedPassword
        ? 'Field required'
        : preparedPassword !== retypedPassword
        ? 'Password does not match the confirm password'
        : '',
    }
  }

  private onSubmit: MouseEventHandler<HTMLElement> = () => {
    this.setState(state => {
      const errors = this.validate(state.fields)
      const hasErrors = Object.values(errors).some(error => error.length)

      if (hasErrors) return { errors }

      return null
    })
  }

  private onTextChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target

    this.setState(({ errors, fields }) => ({
      errors: {
        ...errors,
        [`${name}Error`]: '',
      },
      fields: {
        ...fields,
        [name]: value,
      },
    }))
  }

  private onCheckboxChange: ChangeEventHandler<HTMLInputElement> = () => {
    this.setState(({ errors, fields }) => ({
      errors: {
        ...errors,
        regulationsCheckBoxError: '',
      },
      fields: {
        ...fields,
        regulationsCheckBox: !fields.regulationsCheckBox,
      },
    }))
  }
}

const styles: StyleRulesCallback = theme => ({
  container: {
    ...pageContentNotScrollableWithNavigationBar(theme),
    display: 'grid',
    gridTemplateRows: 'auto max-content',
  },
  content: {
    display: 'grid',
    gridTemplateRows: 'auto max-content',
  },
  errorMessage: {
    color: '#f44336',
    margin: '5px',
  },
  form: {
    display: 'grid',
    width: '90%',
  },
  formWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  regulationsHolder: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

interface RegisterProps extends WithStyles<typeof styles> {}

interface Errors {
  emailError: string
  regulationsCheckBoxError: string
  retypedPasswordError: string
  passwordError: string
}

interface RegisterStateFields {
  email: string
  password: string
  regulationsCheckBox: boolean
  retypedPassword: string
}
interface RegisterState {
  errors: Errors
  fields: RegisterStateFields
}

export default withStyles(styles)(Register)
