import {
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles'
import React, { ComponentType, FunctionComponent } from 'react'

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({
  icon: Icon,
  classes,
  color,
  message,
}) => (
  <span className={classes.container}>
    <Icon color={color} className={`${classes.icon} ${classes.iconVariant}`} />
    <span className={`${color ? classes.message : ''}`}>{message}</span>
  </span>
)

const styles: StyleRulesCallback = theme => ({
  container: {
    alignItems: 'center',
    display: 'flex',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    marginRight: theme.spacing.unit,
    opacity: 0.9,
  },
  message: {
    color: theme.palette.error.dark,
  },
})

export interface ErrorMessageProps extends WithStyles<typeof styles> {
  color?: string
  icon: ComponentType<any>
  message: string
}

export default withStyles(styles)(ErrorMessage)
