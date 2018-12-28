import SnackbarContent from '@material-ui/core/SnackbarContent'
import {
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import ErrorIcon from '@material-ui/icons/Error'
import React, { FunctionComponent } from 'react'

const SignInError: FunctionComponent<SignInErrorProps> = ({ classes }) => (
  <SnackbarContent
    className={classes.error}
    aria-describedby="client-snackbar"
    message={
      <span className={classes.message}>
        <ErrorIcon className={`${classes.icon} ${classes.iconVariant}`} />
        Sign in failed!
      </span>
    }
  />
)

const styles: StyleRulesCallback = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    marginRight: theme.spacing.unit,
    opacity: 0.9,
  },
  message: {
    alignItems: 'center',
    display: 'flex',
  },
})

interface SignInErrorProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(SignInError)
