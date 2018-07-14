import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Menu } from '@material-ui/icons'
import React from 'react'

const styles = createStyles({
  toolbarStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

interface IHeaderProps extends WithStyles <typeof styles> {}

const Header = ({ classes: { toolbarStyles } }: IHeaderProps) => (
  <AppBar position="sticky">
    <Toolbar className={toolbarStyles}>
      <IconButton color="inherit" aria-label="Menu">
        <Menu />
      </IconButton>
      <Typography variant="title" color="inherit">
        Notowork
      </Typography>
      <AccountCircle />
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
