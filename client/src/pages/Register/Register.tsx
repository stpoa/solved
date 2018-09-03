import { Button, Checkbox, TextField } from '@material-ui/core'
import { createStyles, StyleRules, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { ChangeEventHandler, Component, MouseEventHandler } from 'react'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'

class Register extends Component<RegisterProps, RegisterState> {
  public readonly state: RegisterState = {
    fields: {
      email: '',
      errors: {
        emailError: '',
        passwordError: '',
        regulationsCheckBoxError: '',
        retypedPasswordError: ''
      },
      password: '',
      regulationsCheckBox: false,
      retypedPassword: ''
    }
  }

  public render () {
    const { classes } = this.props
    const { emailError, passwordError, retypedPasswordError, regulationsCheckBoxError } = this.state.fields.errors
    return (
      <div className={classes.registerContainer}>
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
              />
            </div>
          </div>
          <div className={classes.regulationsHolder}>
            <div>
              <Checkbox onChange={this.onCheckboxChange} />
              Regulations
            </div>
            <div className={classes.errorMessage}>
              {regulationsCheckBoxError}
            </div>
          </div>
        </div>
        <Button onClick={this.onSubmit} fullWidth>Utwórz profil</Button>
      </div>
    )
  }

  private validate = () => {
    const { email, password, retypedPassword, regulationsCheckBox } = this.state.fields

    const preparedPassword = password.trim()
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s])/

    const errors: Errors = {
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
            ? 'Password should have at least one upper case, one lower case, one digit and one special character'
            : '',
      regulationsCheckBoxError: !regulationsCheckBox
        ? 'Regulations are required'
        : '',
      retypedPasswordError: !retypedPassword
        ? 'Field required'
        : preparedPassword !== retypedPassword
          ? 'Password does not match the confirm password'
          : ''
    }

    const hasErrors = Object.values(errors).some((error) => error.length)

    if (hasErrors) {
      this.setState(({ fields }) => ({ fields: { ...fields, errors } }))
    }

    return Boolean(!hasErrors)
  }

  private onSubmit: MouseEventHandler<HTMLElement> = () => {
    this.validate()

    // Register User
  }

  private onTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target

    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        [name]: value,
        errors: {
          ...fields.errors,
          [`${name}Error`]: ''
        }
      }
    }))

  }

  private onCheckboxChange: ChangeEventHandler<HTMLInputElement> = () => {

    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        errors: {
          ...fields.errors,
          regulationsCheckBoxError: ''
        },
        regulationsCheckBox: !fields.regulationsCheckBox
      }
    }))

  }
}

const styles: StyleRules = createStyles({
  content: {
    display: 'grid',
    gridTemplateRows: 'auto max-content'
  },
  errorMessage: {
    color: '#f44336',
    margin: '5px'
  },
  form: {
    display: 'grid',
    width: '90%'
  },
  formWrapper: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  registerContainer: {
    display: 'grid',
    gridTemplateRows: 'auto max-content'
  },
  regulationsHolder: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

interface RegisterProps extends WithStyles<typeof styles> { }

interface Errors {
  emailError: string,
  regulationsCheckBoxError: string,
  retypedPasswordError: string,
  passwordError: string,
}

interface RegisterState {
  fields: {
    email: string,
    password: string,
    regulationsCheckBox: boolean,
    retypedPassword: string,
    errors: Errors
  }
}

export default withStyles(styles)(Register)
