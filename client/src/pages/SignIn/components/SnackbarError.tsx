import SnackbarContent from '@material-ui/core/SnackbarContent'
import {
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import ErrorIcon from '@material-ui/icons/Error'
import React, { FunctionComponent } from 'react'
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage'

const SnackbarError: FunctionComponent<SnackbarErrorProps> = ({
  classes,
  message,
}) => (
  <SnackbarContent
    className={classes.error}
    aria-describedby="client-snackbar"
    message={<ErrorMessage icon={ErrorIcon} message={message} />}
  />
)

const styles: StyleRulesCallback = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
})

interface SnackbarErrorProps extends WithStyles<typeof styles> {
  message: ErrorMessageProps['message']
}

export default withStyles(styles)(SnackbarError)
