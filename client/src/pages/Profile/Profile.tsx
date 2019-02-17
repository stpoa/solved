import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  StyleRulesCallback,
  Switch,
  WithStyles,
  withStyles,
} from '@material-ui/core'
import { Settings } from '@material-ui/icons'
import React, { FunctionComponent, useState } from 'react'
import { NavigationBar, PageHeader } from '~generic'

const Profile: FunctionComponent<ProfileProps> = ({ classes }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const handleNotificationSwitch = (_: any, checked: boolean) => {
    setNotificationsEnabled(checked)
  }

  return (
    <>
      <PageHeader title="Profil" />
      <div className={classes.root}>
        <List>
          <ListItem color="secondary" className={classes.category}>
            <ListItemIcon className={classes.icon}>
              <Settings />
            </ListItemIcon>
            <ListItemText>
              <span className={classes.categoryText}>Ustawienia</span>
            </ListItemText>
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemText>Zmień nick</ListItemText>
          </ListItem>

          <Divider />

          <ListItem button className={classes.nested}>
            <ListItemText>Zmień hasło</ListItemText>
          </ListItem>

          <Divider />

          <ListItem className={classes.nested}>
            <ListItemText primary="Powiadomienia" />
            <ListItemSecondaryAction>
              <Switch
                onChange={handleNotificationSwitch}
                checked={notificationsEnabled}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
      <NavigationBar />
    </>
  )
}

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
  nested: {
    paddingLeft: theme.spacing.unit * 7,
  },
  icon: {
    marginRight: 0,
    color: theme.palette.secondary.main,
  },
  category: {
    color: theme.palette.secondary.main,
  },
  categoryText: {
    color: theme.palette.secondary.main,
  },
})

export interface ProfileProps extends WithStyles<typeof styles> {
  balance?: number
  isPrivate?: boolean
}

export default withStyles(styles)(Profile)
