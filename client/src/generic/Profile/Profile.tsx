import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  StyleRulesCallback,
  Typography,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import {
  AccountBalanceWallet,
  Inbox,
  Settings,
  Spellcheck,
  Update,
} from '@material-ui/icons'
import React, { FunctionComponent } from 'react'
import { NavigationLayout } from '~generic'
import { isNumber } from '~lib/math'

const Profile: FunctionComponent<ProfilePropsStyled> = ({
  isPrivate = false,
  balance,
  classes,
}) => (
  <NavigationLayout withBottomNavigation>
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography className={classes.titleText} variant="title">
          Profile
        </Typography>
      </div>
      {isPrivate && (
        <List subheader={<ListSubheader>Info</ListSubheader>}>
          {isNumber(balance) ? (
            <ListItem className={classes.balance}>
              <ListItemIcon>
                <AccountBalanceWallet />
              </ListItemIcon>
              <ListItemText>Balance: {balance}</ListItemText>
            </ListItem>
          ) : null}
        </List>
      )}
      <List subheader={<ListSubheader>Activity</ListSubheader>}>
        <ListItem button>
          <ListItemIcon>
            <Update />
          </ListItemIcon>
          <ListItemText primary="Tasks in progress" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary={'Finished tasks'} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Spellcheck />
          </ListItemIcon>
          <ListItemText primary={'Reviews'} />
        </ListItem>
      </List>
      {isPrivate && (
        <List subheader={<ListSubheader>Preferences</ListSubheader>}>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      )}
    </div>
  </NavigationLayout>
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

export interface ProfileProps {
  balance?: number
  isPrivate?: boolean
}
interface ProfilePropsStyled extends ProfileProps, WithStyles<typeof styles> {}

export default withStyles(styles)(Profile)
