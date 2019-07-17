import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import React, { FC } from 'react'

const PasswordContainer: FC<PasswordContainerProps> = ({
  children,
  classes,
}) => <div className={classes.container}>{children}</div>

const styles: StyleRulesCallback = theme => ({
  container: {
    gridRow: '6',
    fontSize: theme.typography.body2.fontSize,
  },
})

interface PasswordContainerProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(PasswordContainer)
