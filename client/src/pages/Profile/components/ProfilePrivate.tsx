import {
  List,
  ListItem, ListItemIcon, ListItemText,
  ListSubheader,
  StyleRulesCallback,
  WithStyles,
  withStyles
} from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { AccountBalanceWallet, Inbox, Settings, Spellcheck, Update } from '@material-ui/icons'
import React, { MouseEventHandler, SFC } from 'react'
import { identity } from '~lib/fp'

type ListItemData = [MouseEventHandler, React.ComponentType<SvgIconProps> | null, string | null, boolean]

const handler = identity as MouseEventHandler
const listData: ListItemData[] = [
  [handler, null, null, false],
  [handler, Update, 'Tasks in progress', true],
  [handler, Inbox, 'Finished tasks', true],
  [handler, Spellcheck, 'Reviews', true],
  [handler, null, null, false],
  [handler, Settings, 'Settings', true]
]
const ProfilePrivate: SFC<ProfilePrivatePropsStyled> = ({ balance, classes }) => (
  <div className={classes.root}>
    <List subheader={<ListSubheader>Profile</ListSubheader>}>
      <ListItem className={classes.balance}>
        <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
        <ListItemText>Balance: {balance}</ListItemText>
      </ListItem>
      {listData.map(([ handleClick, Icon, name, isButton ], i) => (
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
