import { Button as MaterialButton, StyleRulesCallback, withStyles,
  WithStyles } from '@material-ui/core'
import React, { MouseEventHandler, ReactNode, SFC } from 'react'

const Button: SFC<ButtonProps> = ({ onClick, children, classes, style }: ButtonProps) => (
  <MaterialButton
    variant="extendedFab"
    onClick={onClick}
    className={classes.button}
    style={style}
  >
    {children}
  </MaterialButton>
)

const styles: StyleRulesCallback = theme => ({
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    fontSize: '1.6rem',
    height: '4rem',
    minWidth: '6rem',
    fontWeight: 600,
  },
})

interface ButtonProps extends WithStyles<typeof styles> {
  style?: React.CSSProperties
  onClick?: MouseEventHandler<HTMLElement>
  children: ReactNode
}

export default withStyles(styles)(Button)
