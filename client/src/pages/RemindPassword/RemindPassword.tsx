import {
  StyleRulesCallback,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import { emailValidator } from 'lib/validators'
import { Status } from 'models/interfaces'
import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { Button, Container, Email, FieldContainer } from '~generic/Sign'

class RemindPassword extends React.Component<
  RemindPasswordProps,
  RemindPasswordState
> {
  public readonly state: RemindPasswordState = {
    email: '',
    emailError: '',
    error: false,
    status: undefined,
  }

  public render() {
    const { classes } = this.props
    const isPending = this.state.status === 'pending'

    let Component

    if (this.state.status === Status.Success) {
      Component = (
        <FieldContainer>
          <Typography
            component="div"
            className={`${classes.info} ${classes.textContainer}`}
          >
            Na podany adres email została wysłana wiadomość z nowym hasłem!
            <p>Sprawdź pocztę</p>
          </Typography>
        </FieldContainer>
      )
    } else {
      Component = (
        <>
          <FieldContainer secondary>
            <Email
              disabled={isPending}
              error={this.state.emailError}
              onChange={this.handleChangeText}
              value={this.state.email}
              placeholder="Podaj adres email"
            />
          </FieldContainer>
          <Button disabled={isPending} onClick={this.handleSubmit}>
            Wyślij
          </Button>
        </>
      )
    }

    return <Container header="Przypomnij hasło">{Component}</Container>
  }

  private handleChangeText: ChangeEventHandler<HTMLInputElement> = e => {
    this.setState({ email: e.target.value, emailError: '' })
  }

  private handleSubmit: MouseEventHandler<HTMLElement> = () => {
    this.setState(prevState => {
      const emailError = emailValidator(prevState.email)

      if (emailError) return { emailError, error: false, status: undefined }

      window.setTimeout(() => {
        this.setState({ status: Status.Success })
      }, 1000)

      const state = { status: Status.Pending, error: false }

      return state as Pick<RemindPasswordState, 'status' | 'error'>
    })
  }
}

const styles: StyleRulesCallback = theme => ({
  info: {
    color: theme.typography.body1.color,
  },
})

interface RemindPasswordProps extends WithStyles<typeof styles> {}

interface RemindPasswordState {
  email: string
  emailError: string
  error?: boolean
  status: Status | undefined
}

export default withStyles(styles)(RemindPassword)
