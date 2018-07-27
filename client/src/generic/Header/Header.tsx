import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles'
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons'
import React, { Component, MouseEventHandler } from 'react'

const styles = createStyles({
  hidden: {
    visibility: 'hidden'
  },
  toolbarStyles: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

interface HeaderProps extends WithStyles<typeof styles> {
  onClickSignIn: MouseEventHandler<HTMLElement>,
  onClickSignOut: () => void,
  signedIn: boolean
}

interface HeaderState {
  anchorElement?: HTMLElement
}

class Header extends Component<IHeaderProps, IHeaderState> {
  public readonly state: IHeaderState = {}

  public render () {
    const {
      classes: { hidden, toolbarStyles },
      onClickSignIn,
      signedIn
    } = this.props

    return (
      <AppBar position="sticky">
        <Toolbar className={toolbarStyles}>
          <div>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Button
              color="inherit"
              className={`${signedIn ? hidden : ''}`}
              onClick={onClickSignIn}
            >
              Sign In
            </Button>
          </div>
          <div>
            <Typography variant="title" color="inherit">
              Notowork
            </Typography>
          </div>
          <AccountCircle
            className={`${!signedIn ? hidden : ''}`}
            onClick={this.onClickAccount}
          />
          <Menu
            open={Boolean(this.state.anchorElement)}
            anchorEl={this.state.anchorElement}
            onClose={this.closeMenu}
          >
            <MenuItem onClick={this.onSignOut}>
              Sign out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }

  private onClickAccount: MouseEventHandler<SVGSVGElement> = (e) => {
    this.setState({
      anchorElement: (e.currentTarget as any) as HTMLElement
    })
  }

  private closeMenu: () => void = () => {
    this.setState({
      anchorElement: undefined
    })
  }

  private onSignOut: () => void = () => {
    this.closeMenu()

    this.props.onClickSignOut()
  }
}

export default withStyles(styles)(Header)
