import {
  List,
  ListItem, ListItemIcon, ListItemText,
  ListSubheader,
  StyleRulesCallback,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { AccountBalanceWallet } from '@material-ui/icons'
import InboxIcon from '@material-ui/icons/Inbox'
import SettingsIcon from '@material-ui/icons/Settings'
import ReviewsIcon from '@material-ui/icons/Spellcheck'
import UpdateIcon from '@material-ui/icons/Update'
import React, { SFC } from 'react'
import { identity } from '~lib/fp'

const ProfilePrivate: SFC<ProfilePrivatePropsStyled> = ({ balance, classes }) => (
  <div className={classes.root}>
    <List subheader={<ListSubheader>Profile</ListSubheader>}>
      <ListItem className={classes.balance}>
        <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
        <ListItemText>Balance: {balance}</ListItemText>
      </ListItem>
      {([
        [identity, false, '', false],
        [identity, UpdateIcon, 'Tasks in progress', true],
        [identity, InboxIcon, 'Finished tasks', true],
        [identity, ReviewsIcon, 'Reviews', true],
        [identity, false, '', false],
        [identity, SettingsIcon, 'Settings', true]
      ] as Array<[ () => void, React.ComponentType<SvgIconProps> | false, string, boolean ]>)
      .map(([ handleClick, Icon, name, isButton ], i) => (
        <ListItem key={i} button={isButton} onClick={handleClick}>
          {Icon ? <ListItemIcon><Icon/></ListItemIcon> : ''}
          {name ? <ListItemText primary={name} /> : ''}
        </ListItem>
      ))}
    </List>
  </div>
)

const styles: StyleRulesCallback = theme => ({
  balance: {
    fontSize: '10em'
  },
  root: {
    margin: theme.spacing.unit
  }
})

export interface ProfilePrivateProps { balance: number }
interface ProfilePrivatePropsStyled extends ProfilePrivateProps, WithStyles<typeof styles> {}

export default withStyles(styles)(ProfilePrivate)
