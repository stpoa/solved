import {
  List,
  ListItem, ListItemIcon, ListItemText,
  ListSubheader,
  StyleRulesCallback,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import { AccountBalanceWallet, Inbox, Settings, Spellcheck, Update } from '@material-ui/icons'
import React, { SFC } from 'react'

const ProfilePrivate: SFC<ProfilePrivatePropsStyled> = ({ balance, classes }) => (
  <div className={classes.root}>
    <div className={classes.title}><Typography className={classes.titleText} variant="title">Profile</Typography></div>
    <List subheader={<ListSubheader>Info</ListSubheader>}>
      <ListItem className={classes.balance}>
        <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
        <ListItemText>Balance: {balance}</ListItemText>
      </ListItem>
    </List>
    <List subheader={<ListSubheader>Activity</ListSubheader>}>
      <ListItem button>
        <ListItemIcon><Update/></ListItemIcon>
        <ListItemText primary="Tasks in progress" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><Inbox/></ListItemIcon>
        <ListItemText primary={'Finished tasks'} />
      </ListItem>
      <ListItem button>
        <ListItemIcon><Spellcheck/></ListItemIcon>
        <ListItemText primary={'Reviews'} />
      </ListItem>
    </List>
    <List subheader={<ListSubheader>Preferences</ListSubheader>}>
      <ListItem button>
        <ListItemIcon><Settings/></ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  </div>
)

const styles: StyleRulesCallback = theme => ({
  balance: {
    fontSize: '10em',
  },
  root: {
    margin: theme.spacing.unit,
  },
  title: {
    margin: theme.spacing.unit * 2,
  },
  titleText: {
    color: theme.palette.grey['700'],
  },
})

export interface ProfilePrivateProps { balance: number }
interface ProfilePrivatePropsStyled extends ProfilePrivateProps, WithStyles<typeof styles> {}

export default withStyles(styles)(ProfilePrivate)
