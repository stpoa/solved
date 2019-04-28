import { Button, withStyles, WithStyles } from '@material-ui/core'
import React, { FC, MouseEventHandler } from 'react'

const SignBaseButton: FC<SignBaseButtonProps> = ({
  children,
  classes,
  disabled,
  onClick,
}) => (
  <div className={classes.buttonContainer}>
    <Button
      variant="extendedFab"
      color="secondary"
      disabled={disabled}
      className={classes.button}
      size="large"
      onClick={onClick}
    >
      {children}
    </Button>
  </div>
)

const styles = {
  button: {
    margin: 'auto',
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    gridRow: '10',
    width: '50%',
    height: '100%',
    margin: 'auto',
  },
}

interface SignBaseButtonProps extends WithStyles<typeof styles> {
  disabled: boolean
  onClick: MouseEventHandler<HTMLElement>
}

export default withStyles(styles)(SignBaseButton)
