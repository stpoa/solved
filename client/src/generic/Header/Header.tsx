import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Menu, Search } from '@material-ui/icons'
import React from 'react'

import { Search } from '~generic'

const styles = createStyles({
  toolbarStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

interface HeaderProps extends WithStyles <typeof styles> {
  handleSearchButton: () => void
}

const Header = ({ classes: { toolbarStyles }, children, handleSearchButton }: HeaderProps) => (
  <AppBar position="sticky">
    {children}
    <Toolbar className={toolbarStyles}>
      <IconButton color="inherit" aria-label="Menu">
        <Menu />
      </IconButton>
      <Typography variant="title" color="inherit">
        Notowork
      </Typography>
      <div>
        <IconButton color="inherit">
          <AccountCircle style={{ fontSize: 30 }} />
        </IconButton>
        <IconButton color="inherit" onClick={handleSearchButton}>
          <Search style={{ fontSize: 30 }} />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
