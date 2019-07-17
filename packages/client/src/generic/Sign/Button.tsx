import { Button, withStyles, WithStyles } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import React, { FC } from 'react'

const SignBaseButton: FC<SignBaseButtonProps> = ({ classes, ...props }) => (
  <div className={classes.buttonContainer}>
    <Button
      {...props}
      variant="extendedFab"
      color="secondary"
      className={classes.button}
      size="large"
    >
      {props.children}
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

type SignBaseButtonProps = ButtonProps & WithStyles<typeof styles>

export default withStyles(styles)(SignBaseButton)
