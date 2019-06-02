import {
  Button as MaterialButton,
  StyleRulesCallback,
  withStyles,
  WithStyles,
} from '@material-ui/core'
import { ButtonProps as MaterialButtonProps } from '@material-ui/core/Button'
import React, { FC } from 'react'

const Button: FC<ButtonProps> = ({
  classes,
  styleVariant = 'filled',
  ...props
}) => {
  const className = [
    classes.button,
    styleVariant === 'empty' ? classes.empty : '',
  ].join(' ')

  return (
    <MaterialButton
      {...{ ...props, className }}
      variant="extendedFab"
      color={styleVariant === 'empty' ? 'primary' : 'secondary'}
      size="large"
    >
      {props.children}
    </MaterialButton>
  )
}

const styles: StyleRulesCallback = theme => ({
  button: { width: '1fr', height: '1fr', maxWidth: '50vw' },
  empty: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid',
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  },
})

type ButtonProps = MaterialButtonProps &
  WithStyles<typeof styles> & {
    styleVariant?: 'empty' | 'filled'
  }

export default withStyles(styles)(Button)
