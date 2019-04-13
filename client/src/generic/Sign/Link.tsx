import { StyleRulesCallback, withStyles, WithStyles } from '@material-ui/core'
import React, { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link: FC<LinkProps> = ({ children, classes, to = '/' }) => (
  <RouterLink className={classes.link} to={to}>
    {children}
  </RouterLink>
)

const styles: StyleRulesCallback = theme => ({
  link: {
    color: theme.palette.secondary.main,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textDecoration: 'none',
    paddingRight: '2rem',
  },
})

interface LinkProps extends WithStyles<typeof styles> {
  to: string
}

export default withStyles(styles)(Link)
